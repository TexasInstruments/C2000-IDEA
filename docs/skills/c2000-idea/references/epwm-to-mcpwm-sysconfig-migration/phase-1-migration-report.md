# Phase 1 — EPWM → MCPWM Sync/Time-base Migration Report

> You are in **Phase 1** of the ePWM → MCPWM SysConfig migration (the read-only analysis
> phase). Return to the orchestrator (`references/epwm-to-mcpwm-sysconfig-migration.md`)
> when done.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.
Describe what you tried, what the tool returned, and ask the user how to proceed.

## What this phase does, and doesn't, do

This phase inspects a source EPWM-based `.syscfg` file, works out how its EPWM instances are
wired together (the sync chain), and reports which EPWM instances *could* be consolidated
onto a single MCPWM instance on a target device, and what their combined time-base/sync
settings would need to be.

It stops at the report. It does not open, add, or edit any MCPWM module instance, and it does
not write any `.syscfg` file. That is deliberate — treat "propose the equivalent MCPWM
settings as configuration changes" as out of scope for this phase even if it would be easy to
continue further. Writing to the target file is Phase 2's job
(`phase-2-instance-setup.md`), and only once the user has confirmed this phase's output.

**Why the sync chain matters here:** a single MCPWM instance shares *one* time-base counter
(`TBCTR`) across all of its PWM output pairs. Two EPWM instances can only become two pairs of
the *same* MCPWM instance if they already run off compatible time bases — same period, same
clock divider, same counter mode — and any relative phase between them has to be achievable
through the counter-compare submodule instead of two independent counters. EPWM instances
that are already synchronized to each other via SyncIn/SyncOut are exactly the candidates
worth checking first, since that sync relationship is what a shared MCPWM counter is standing
in for.

## Inputs

This phase needs three things, gathered from the user before starting (the orchestrator may
already have collected these):

1. **Source device** — the device the source `.syscfg` file targets.
2. **Source `.syscfg` file** — absolute path to the file to analyze.
3. **Target device** — an MCPWM-capable device to migrate toward.

If any of these are missing, ask before proceeding — don't guess a device or file path.

## Tools used

All live `.syscfg` operations in this phase use the **ccs-sysconfig MCP** — expect roughly
`openFile`, `getModuleInstances`, `getInstanceConfiguration`, `addModuleInstances`,
`removeModuleInstances`, `listFiles`, `closeFile` (see the orchestrator's Dependencies for
the full list). If you're unsure of an exact parameter name on the server version in front
of you, inspect the server's tool list (or make a small probe call) before trusting field
names blindly.

## Step-by-step procedure

### Step 1 — Open the source file

Call `openFile` with the source `.syscfg` file's absolute path. If `openFile` times out, follow
the `syscfg-openfile-recovery` skill, then continue. Its `@v2CliArgs` line is the only change
allowed in this read-only phase.

### Step 2 — Enumerate the EPWM instances

Call `getModuleInstances` with `moduleIds: ["/driverlib/epwm.js", "/driverlib/sync.js"]` —
these are the two concrete module ids: `/driverlib/epwm.js` is every EPWM peripheral
instance, `/driverlib/sync.js` is the device-level sync-routing module (a single shared
`$static` instance, not per-EPWM). Record every EPWM instance's `moduleInstanceId` (typically
`myEPWM1`, `myEPWM2`, … but read the actual ids returned, don't assume the naming). Note any
`parentInstances`/`childInstances` relationships reported — the `/driverlib/sync.js` instance
being present at all, parented under `/driverlib/epwm.js`'s `$static` instance, is itself the
signal that this device does some of its cross-peripheral sync-source selection at the device
level rather than per-EPWM-instance, which is what Step 4 checks.

### Step 3 — Pull time-base and sync settings for every EPWM instance

Call `getInstanceConfiguration` **once**, `moduleId: "/driverlib/epwm.js"`, passing all EPWM
instances found in Step 2 in the `instances` array, with `ids` set to this exact list:

```
[
  "epwmTimebase_period",
  "epwmTimebase_clockDiv",
  "epwmTimebase_hsClockDiv",
  "epwmTimebase_counterMode",
  "epwmTimebase_counterModeAfterSync",
  "epwmTimebase_emulationMode",
  "epwmTimebase_counterValue",
  "epwmTimebase_periodLoadMode",
  "epwmTimebase_periodLoadEvent",
  "epwmTimebase_periodLink",
  "epwmTimebase_periodGld",
  "epwmTimebase_phaseEnable",
  "epwmTimebase_phaseShift",
  "epwmTimebase_forceSyncPulse",
  "epwmTimebase_syncInPulseSource",
  "epwmTimebase_syncOutPulseMode",
  "epwmTimebase_oneShotSyncOutTrigger"
]
```

Set `includeDescriptions: false` — these ids are unambiguous enough that descriptions just
cost tokens for no benefit here.

**Important quirk:** `epwmTimebase_phaseShift` is a *conditional* configurable — SysConfig
only reports it for an instance when that same instance's `epwmTimebase_phaseEnable` is
`true`. On an instance where phase-shift is disabled, `epwmTimebase_phaseShift` will simply be
**absent** from that instance's returned configuration — that's expected, not a wrong id or a
bug. Don't substitute a guessed id (e.g. `epwmTimebase_phase`) if you don't see a phase value;
an unrecognized id silently returns nothing, which looks identical to "not applicable" unless
you know to expect that. If you need the phase value for an instance that has
`phaseEnable: true` and it didn't come back (e.g. because this id list changes on a future
SysConfig version), re-query just that instance with `searchText: "phase"` rather than
assuming it doesn't exist.

`epwmTimebase_counterModeAfterSync` is conditional the same way — SysConfig only reports it for
an instance running in up-down-count mode (it's meaningless in a single-direction count mode), so
its absence on an up-count or down-count instance is expected, not a missing id. Capture it where
present; it carries a genuine EPWM setting (which direction the counter resumes after a sync
event) that has a direct MCPWM equivalent, so it matters in Phase 2.

Do this as a single call across all instances rather than one call per instance — it's
cheaper and makes the values directly comparable.

### Step 4 — Check device-level sync routing, if applicable

If Step 2 revealed a separate shared sync-routing instance, it will be
`moduleId: "/driverlib/sync.js"`, typically instance id `$static`. Call
`getInstanceConfiguration` on it with `searchText: "sync"` rather than a hardcoded `ids`
list — **the configurable set here varies by device family**, so read what the live tool
returns rather than assuming a fixed list:

- Every device family exposes at least `syncOutSource` (which peripheral's sync-out drives
  the external `EXTSYNCOUT` pin) and `syncOutLock` (a lock bit guarding that source
  selection) — these two are safe to expect everywhere.
- Some families add per-peripheral device-level sync-in routing configurables named
  `epwm<N>SyncInSource` and `ecap<N>SyncInSource` for specific instance numbers — e.g.
  `epwm4SyncInSource`, `ecap1SyncInSource`. These do not exist on every family, and which
  instance numbers get one depends on the device (families like F2837xD/F2837xS/F2807x/F28004x
  are known to expose them) — which is exactly why this step searches instead of assuming a
  fixed list. If you need to confirm a device's sync-routing behavior at the hardware level,
  the device TRM (via ti-asm-mcp) is the ground truth.

Whatever comes back, read it for one thing: does it corroborate which EPWM instance is the
true sync root (i.e. is that same instance's sync-out also the one selected as
`syncOutSource`)? That cross-check is what makes Step 5 reliable instead of just trusting each
instance's own settings in isolation.

### Step 5 — Reconstruct the sync chain

From the values gathered in Steps 3–4, build the sync topology by hand:

- Which EPWM instance is the **sync root** — i.e., its sync-in source is external or
  otherwise not another EPWM's sync-out (nothing upstream of it in the chain)?
- For every other instance, which upstream instance's sync-out feeds its sync-in, and in what
  mode (pulse-on-zero, pulse-on-period, one-shot)?
- For each instance with phase-shift load enabled, is the effective phase offset zero
  (meaning it's really just following the root's counter with no offset) or non-zero (a
  genuine phase relationship that would need to be re-expressed via counter-compare on a
  shared MCPWM counter, since MCPWM has one counter per instance, not one per pair)?
- Are there EPWM instances with **no** sync relationship to the others at all (independent
  period/clock, no sync-in from a sibling)? These are not consolidation candidates with the
  rest and should be flagged separately.

### Step 6 — Determine target-device MCPWM capacity

An MCPWM instance exposes a fixed number of PWM output pairs, and **that number varies from
instance to instance** — one device can carry instances of different widths. Never assume a
pair count, and never assume every instance on a device is the same width. Both the number of
instances and each instance's width come from the target device's Technical Reference Manual
via ti-asm-mcp.

#### Find the MCPWM base address table (required)

Navigate by **title text, never by chapter or section number.** TRM revisions renumber
sections freely, but heading wording is stable — a hardcoded number silently points at the
wrong content after a revision, while a title match keeps working.

1. Call `list_devices()` and confirm the target device is available. If it is not, stop and
   tell the user the capacity cannot be verified for this device.

2. Locate the base address table:
   - **Preferred:** `search_trm_keywords(device, "MCPWM Base Address Table")`. Each result
     carries a `sectionId` — take the one whose heading names the base address table.
   - **Fallback,** if search returns nothing usable: call `list_trm_headings(device, limit: 1)`
     and pick the chapter whose *title* contains the peripheral name, then
     `list_trm_headings(device, chapter: <that chapter>, limit: 3)` and pick the heading whose
     *title* contains "Base Address Table". Use a depth of at least 3 — the table is normally a
     subsection of the peripheral's "Registers" section, and a shallower listing hides it.

3. Call `get_trm_section(device, sectionId: <the id you found>)` and read the table.

#### Read the instance list out of the table

Each row is one MCPWM instance on the device. Two columns matter: the **instance name** (e.g. a
`Pwm<N>Regs` bit-field name) and the **register structure name**, which encodes the instance's
channel count in the form `MCPWM_<N>CH_REGS`.

Convert with the general rule: **pairs = channels ÷ 2**, since each pair is one A/B output.
Apply the arithmetic to whatever `<N>` the table actually shows — do not rely on a fixed list
of known structure names, and do not assume a variant seen on one device exists on another.

Instance names are **not necessarily contiguous or zero-based** — record them exactly as
printed rather than renumbering them.

If a row's structure name does not match the `MCPWM_<N>CH_REGS` shape, or the table cannot be
found at all, stop and ask the user for the target device's pair capacity rather than guessing.

#### Record the slot list

Produce a concrete slot list — one line per instance with its pair count, plus the total:

```
Pwm1Regs — 6 channels → 3 pairs
Pwm3Regs — 2 channels → 1 pair
Total: 2 instances, 4 pairs
```

This list is the capacity budget for sections 3 and 5 of the report. Carry it forward verbatim.

### Step 7 — Produce the report

Do not include any guidance on the mechanics of creating the target `.syscfg` file, calling
`addModuleInstances`/`changeConfiguration` for MCPWM, or naming target instances — that is
explicitly out of scope for this phase's output (it belongs to Phase 2). The report is the
deliverable; use exactly this structure and section order so nothing gets left out:

**1. Sync topology.** One sentence naming the sync root (which EPWM instance, and how you
know — e.g. it's the one selected in the device-level `syncOutSource` from Step 4), then one
line per other instance: which upstream instance's sync-out feeds it, and in what pulse mode.
If any instance has no sync relationship to the rest at all, name it here explicitly as
independent.

**2. Time-base compatibility.** State plainly whether all instances in the sync chain share
the same period, clock divider(s), and counter mode — these three matching is the hard
requirement for sharing an MCPWM counter. Call out any instance that doesn't match and on
which field, since that instance can't join the others on one MCPWM counter regardless of its
sync relationship.

**3. Target capacity check.** State the Step 6 slot list, the total pairs available, and how
many source EPWM instances need a slot. Compare the two totals directly — do **not** estimate
capacity as "instances × 3", since instance widths differ. If the source needs more pairs than
the device has, say so plainly here and stop: no grouping can make it fit, and the user has to
drop or re-scope instances before Phase 2.

**4. Per-instance settings table.** One row per **source EPWM instance**:

| Column | Content |
|---|---|
| EPWM instance | `moduleInstanceId` from Step 2 |
| Period | value from Step 3 |
| Clock divider(s) | value(s) from Step 3 (`epwmTimebase_clockDiv` / `epwmTimebase_hsClockDiv`) |
| Counter mode | value from Step 3, plus `epwmTimebase_counterModeAfterSync` when present (up-down-count instances only) |
| Emulation mode | `epwmTimebase_emulationMode` value from Step 3 (debug-halt behavior; carried across in Phase 2) |
| Period load mode / event | values from Step 3 (`epwmTimebase_periodLoadMode` / `epwmTimebase_periodLoadEvent`) |
| Sync-in source | value from Step 3, resolved to which instance/external signal it names |
| Sync-out mode | value from Step 3 |
| Phase-shift enable / value | `epwmTimebase_phaseEnable`, and `epwmTimebase_phaseShift` when present (state the offset both as a raw count and as a percentage of that instance's period, e.g. "300 / 2000 = 15%") |
| One-shot sync-out trigger | value from Step 3 |
| Sync role | Root / Synced (from `<X>`) / Independent, per section 1 |
| Consolidation candidate? | Yes, with which sibling instances, if period + clock divider + counter mode all match and it's part of the same sync chain; No, with the specific mismatching field(s) named, otherwise |

**5. Proposed grouping and open flags.** This is the section that turns sections 1–4 into
something actionable, so don't skip it or leave it implicit in the table:

- Partition the consolidation candidates against the **Step 6 slot list**, not a fixed group
  size. Each group is assigned to a **named target instance** and may hold at most that
  instance's pair count. State the assignment explicitly, e.g.
  `Group 1 → Pwm1Regs (3 pairs): myEPWM1, myEPWM2, myEPWM3` /
  `Group 2 → Pwm3Regs (1 pair): myEPWM4`.
- Prefer putting the largest sync-linked set on the widest instance. A group cannot be split
  across instances later, so a bad assignment is only recoverable by redoing Phase 2.
- For every relationship that crosses a group boundary (i.e. two EPWM instances that are
  sync-linked in the source but end up assigned to *different* MCPWM instances), flag it
  explicitly by name — that relationship can no longer ride a shared counter and would need an
  inter-MCPWM-instance sync link instead. Don't let this fall out silently just because the
  grouping made it necessary.
- For every non-zero phase-shift value inside a group that does share one MCPWM instance, flag
  by name that it needs to be re-expressed via counter-compare rather than an independent
  counter, since the group's pairs all share one `TBCTR`.

### Step 8 — Initialize the migration log

Before stopping, create the migration log file. The log lives in the **same directory as the
target `.syscfg` file** and is named `epwm-mcpwm-migration.md`.

Initialize it with this exact structure (fill in bracketed values from your analysis):

```markdown
# ePWM → MCPWM SysConfig Migration Log

**Source device:** [e.g., F28003x]
**Source .syscfg file:** [absolute path]
**Target device:** [e.g., F28P65x]
**Target .syscfg file:** [absolute path]

## MCPWM Capacity (from TRM)
[List instances available on target device with their channel counts, e.g.:
- Pwm1Regs: 6 channels (3 pairs)
- Pwm3Regs: 2 channels (1 pair)
- Total: 2 instances, 4 pairs]

## Phase 1 — Analysis Report
Status: COMPLETE

**Sync topology:**
[Copy the topology from your Step 5 analysis]

**Time-base compatibility:**
[Copy compatibility assessment from your Step 4 report]

**Target capacity check:**
[Copy capacity findings from your Step 6 analysis]

**Per-instance settings table:**
[Copy the full table from your Step 7 report section 4]

**Proposed grouping and open flags:**
[Copy the grouping proposal and flags from your Step 7 report section 5]
```

### Step 9 — Stop and confirm before going further

**End your turn after initializing the log and presenting the report.** Do not, in the same
turn or without being asked, proceed to open the target device's `.syscfg`, add or configure
any MCPWM instance, or start writing conversion code — even though the report may make the
next step look obvious. Ask the user to review the grouping and flagged relationships in
section 5 specifically, since that's where a judgment call was made (how to partition instances
across the available instance slots, and which instance each group was assigned to) that the
user may want to override — e.g. a different grouping that keeps a different set of instances
together, a different instance assignment, or a decision about how to handle a flagged
cross-group sync relationship.

→ When the user confirms the report and says to proceed, **return to the orchestrator
(`references/epwm-to-mcpwm-sysconfig-migration.md`)** and continue with Phase 2.
