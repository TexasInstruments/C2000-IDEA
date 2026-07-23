# Phase 2 — EPWM → MCPWM Instance Setup (PWM Mapping + Synchronization)

> You are in **Phase 2** of the ePWM → MCPWM SysConfig migration (the first phase that
> **writes** the target file). Return to the orchestrator
> (`references/epwm-to-mcpwm-sysconfig-migration.md`) when done.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.
Describe what you tried, what the tool returned, and ask the user how to proceed.

## What this phase does, and doesn't, do

Given an already-confirmed grouping from Phase 1 (`phase-1-migration-report.md`), this phase
creates the actual MCPWM module instances on the target device's `.syscfg` file and configures
**only** their time-base and synchronization settings (period, clock divider, counter mode,
sync-in/sync-out, phase) to match the confirmed grouping.

It does **not** touch action-qualifier, counter-compare, dead-band, trip-zone, or
event-trigger configuration — that is Phase 3. Don't drift into it here even opportunistically.

Do not run this phase against a grouping the user hasn't actually confirmed. If you arrive here
without a confirmed grouping in hand (e.g. the user skipped straight to "set up MCPWM"), run
Phase 1 first.

## Pre-Phase-2 check: Read the migration log

Before proceeding with any steps, **read the `epwm-mcpwm-migration.md` log** in the target
`.syscfg` directory. Confirm:

1. **Phase 1 is marked COMPLETE** — if not, do not proceed.
2. **The proposed grouping is recorded** — extract the group → EPWM instance assignment from
   the log section "5. Proposed grouping and open flags".
3. **Target device MCPWM capacity is documented** — for reference when checking capacity.

If the log is missing or Phase 1 is not marked complete, stop and ask the user to confirm
Phase 1 completion first.

## Inputs

From the confirmed Phase-1 report (read from the migration log), you need:

1. **The groups** — which source EPWM `moduleInstanceId`s are assigned to the same target
   MCPWM instance (at most 3 per group, one EPWM per pair slot), and in what order the user
   confirmed them.
2. **Each group's shared time-base values** — period, clock divider, counter mode (these must
   already be identical across a group's members, or the grouping wasn't valid).
3. **The sync chain** — which EPWM instance was the original sync root, and for every other
   instance, which upstream instance's sync-out fed it and with what phase-shift value.
4. **Target device** and **target `.syscfg` file** (absolute path) — the file Phase 1's
   target-capacity check (Step 6) was run against, or a fresh one the user points you to.

If any of these weren't part of the confirmed report, ask before proceeding rather than
re-deriving or guessing them.

## Step-by-step procedure

### Step 1 — Open the target file

Call `openFile` with the target `.syscfg` file's absolute path. Same first-open caveat as
Phase 1: if `openFile` stalls on a device-selection dialog the first time this specific file
is opened, stop and ask the user to resolve it in the SysConfig UI rather than retrying with a
longer timeout.

### Step 2 — Create one MCPWM instance per confirmed group

Call `addModuleInstances` with `moduleIds` containing `"/driverlib/mcpwm.js"` repeated once per
group (e.g. two groups → pass it twice in the array), and `maxConfigurables: 0` — you don't
need the automatic representative config, you're about to set specific fields yourself in
Step 4.

Record the returned `addedInstances[].moduleInstanceId` values **in the order returned**, and
map them to the confirmed groups **in the same order the user confirmed the groups** (group 1
→ first returned instance id, group 2 → second, …). `addModuleInstances` auto-assigns names
(`myMCPWM0`, `myMCPWM1`, …) — you don't get to choose them up front. State this group →
instance-name mapping explicitly in the Step 6 report; it's the concrete answer to "which EPWM
instances map to which MCPWM instance."

### Step 3 — Set each instance's shared time-base fields

For each group's MCPWM instance, call `changeConfiguration` **once** (batch that instance's
fields into one call so they apply atomically; use a separate call per instance so one
instance's failure doesn't revert another's). Set, from that group's confirmed shared values:

| Target field (`/driverlib/mcpwm.js`) | Source field (`/driverlib/epwm.js`) | Notes |
|---|---|---|
| `mcpwmTimebase_period` | `epwmTimebase_period` | direct copy |
| `mcpwmTimebase_clockDiv` | `epwmTimebase_clockDiv` | direct copy — MCPWM has no separate high-speed divider stage, so if the source used a non-default `epwmTimebase_hsClockDiv` alongside `epwmTimebase_clockDiv`, note that the combined effective divide ratio may not be exactly reproducible by `mcpwmTimebase_clockDiv` alone (flag it, don't silently drop it) |
| `mcpwmTimebase_counterMode` | `epwmTimebase_counterMode` | direct copy — MCPWM has no down-count-only mode; if the source was down-count-only, this is a real gap to flag, not a silent substitution |
| `mcpwmTimebase_counterModeAfterSync` | `epwmTimebase_counterModeAfterSync` | direct copy — **only present when the instance is in up-down-count mode** (conditional on both sides), so copy it only for those instances; see the note below the table |
| `mcpwmTimebase_emulationMode` | `epwmTimebase_emulationMode` | direct copy — debug/emulation-halt behavior; maps 1:1 (stop-after-next / stop-after-cycle / free-run) |
| `mcpwmTimebase_periodLoadMode` | `epwmTimebase_periodLoadMode` | MCPWM only has two choices (shadow-load-at-TBCTR=0, or disabled) versus EPWM's richer `periodLoadMode` + `periodLoadEvent` pair — if the source's `epwmTimebase_periodLoadEvent` was anything other than "reaches 0" (e.g. "only on SYNC"), that nuance has **no MCPWM equivalent** (confirm via `get_syscfg_module_migration_guide` — it reports `epwmTimebase_periodLoadEvent` as `no_equivalent`) and is lost; flag it |
| `mcpwmTimebase_forceSyncPulse` | `epwmTimebase_forceSyncPulse` | direct copy |

If `mcpwmTimebase_counterMode` is being set to `"Up - down - count mode"`, expect
`mcpwmTimebase_counterModeAfterSync` to become newly visible (SysConfig conditional-visibility,
same mechanism as `epwmTimebase_phaseShift` in Phase 1 — confirm via the `available` array in
this call's response rather than assuming). This field **does have an EPWM source**:
`epwmTimebase_counterModeAfterSync`, which EPWM likewise only exposes in up-down-count mode, and
which maps 1:1 (`get_syscfg_module_migration_guide` reports it `mapped`). So the normal path is a
direct copy from the confirmed Phase-1 value, not a fresh decision — set it in the same batch as
the other time-base fields. Only ask the user which direction (count up or down after sync) is
intended in the corner case where the target lands in up-down mode but the source instance was
*not* in up-down mode (so it never exposed `counterModeAfterSync` and there's no source value to
carry) — and set it in a follow-up `changeConfiguration` call once you know.

`epwmTimebase_counterValue`, `epwmTimebase_periodLink`, and `epwmTimebase_periodGld` have no
MCPWM counterpart at all (confirm via `get_syscfg_module_migration_guide` — all three come back
`no_equivalent`) — don't attempt to set anything for them, just note in the Step 6 report that
they were dropped if the source used non-default values for any of them.

### Step 4 — Translate the sync chain onto the new instances

This is the actual "synchronization setup," and it is a translation, not a copy — the sync
relationships in the source file are named in terms of EPWM instances, but the target's
`mcpwmTimebase_syncInPulseSource` choices are named in terms of MCPWM instances (and other
peripherals), so every reference has to be re-resolved through the group → instance mapping
from Step 2:

1. **Find the new root.** The group containing the original sync root EPWM instance is the new
   root group; its MCPWM instance doesn't need a `syncInPulseSource` change (leave it be). Set
   its `mcpwmTimebase_syncOutPulseMode` to match the original root's
   `epwmTimebase_syncOutPulseMode`. **Cardinality note:** EPWM's `syncOutPulseMode` is
   multi-select (an array — e.g. it could combine "counter zero" and "compare C"
   simultaneously); MCPWM's is single-select (one string value, no "enable all of the above"
   choice). If the source array has more than one entry, only one can survive — pick the one
   that's actually load-bearing for the cross-group sync relationships found in step 2 below,
   and explicitly name whichever entries got dropped rather than silently discarding them.

2. **For every other group**, check whether any of its member EPWM instances had a
   `syncInPulseSource` pointing at an instance that ended up in a *different* group. If so:
   - Call `getInstanceConfiguration` on that group's new MCPWM instance with
     `ids: ["mcpwmTimebase_syncInPulseSource"]` and `includeChoices: true` first, to read the
     actual available choice strings (they're phrased like `"Sync-in source is MCPWM1 sync-out
     signal"` — confirm the exact instance number/wording rather than constructing the string
     yourself, since the choice list is generated per-device and per-instance).
   - Set that group's `mcpwmTimebase_syncInPulseSource` to the choice naming the upstream
     group's new MCPWM instance.
   - Set that group's `mcpwmTimebase_phaseEnable` / `mcpwmTimebase_phaseShift` to the
     *specific member EPWM instance's* original `epwmTimebase_phaseEnable` /
     `epwmTimebase_phaseShift` values — this is the one EPWM instance in the group whose
     original phase relationship is being carried forward at the instance level.

3. **For every EPWM instance whose sync relationship was to another instance in the *same*
   group**, do not set anything at the instance level for it. Name it explicitly in the Step 6
   report as deferred to Phase 3 — a shared counter can carry exactly one instance-level phase
   relationship (to whatever's upstream of the whole group), not a separate one per original
   EPWM instance, so intra-group phase differences have to be reproduced some other way later,
   not here.

4. **If a single group would need more than one upstream sync-in relationship** (e.g. two of
   its member EPWM instances each synced from a different EPWM that's now in two different other
   groups), stop and surface this to the user rather than picking one —
   `mcpwmTimebase_syncInPulseSource` only has one slot, and choosing which relationship wins is
   a design decision, not something to resolve unilaterally.

### Step 5 — Verify

Call `getErrorsAndWarnings`. Confirm it comes back clean before presenting anything as done —
if the new instances or changes introduced any error or warning, resolve or report it before
moving to Step 6.

### Step 6 — Save and present the result for confirmation

Call `save`. Then present a report with this structure:

1. **Group → MCPWM instance mapping** — a table: confirmed group number, its member source
   EPWM instances, the new MCPWM `moduleInstanceId` SysConfig assigned it.
2. **Applied time-base/sync settings per instance** — pull this via `getInstanceConfiguration`
   with `changesOnly: true` on the new MCPWM instances so the report reflects what's actually
   in the file, not just what you intended to set.
3. **Explicitly flagged gaps and decisions**, gathered from Steps 3–4: dropped EPWM-only fields
   (`hsClockDiv` nuance, `periodLoadEvent`, `periodLink`, `periodGld`, `counterValue`,
   `oneShotSyncOutTrigger`), any `syncOutPulseMode` entries that didn't survive the
   array→single narrowing, the `counterModeAfterSync` handling if applicable (normally a direct
   copy from the source's up-down-mode value — flag it only in the corner case where it had to be
   asked because the source instance wasn't in up-down mode), and the full list of intra-group
   phase relationships deferred to Phase 3 (name each EPWM instance and its original phase value).
4. **Verification result** — confirm `getErrorsAndWarnings` was clean and the file was saved.

### Step 7 — Update the migration log

Append a new section to `epwm-mcpwm-migration.md`:

```markdown
## Phase 2 — Instance Setup
Status: COMPLETE

**Group → MCPWM instance mapping:**
[Copy the mapping table from Step 6, section 1]

**Applied time-base/sync settings per instance:**
[Copy the settings table from Step 6, section 2]

**Flagged gaps and decisions:**
[Copy the list from Step 6, section 3]

**Verification:**
- Errors and warnings: none
- Target .syscfg file: saved
```

### Step 8 — Stop and confirm before Phase 3

**End your turn after updating the log and presenting the Step 6 report.** Do not start on
action-qualifier, counter-compare, dead-band, trip-zone, or event-trigger configuration in
the same turn, even though it's the obvious next question — that is Phase 3 and needs its own
pass. Ask the user to review the mapping and, in particular, the flagged intra-group phase
deferrals and any dropped fields from section 3, since those are exactly the places a judgment
call was made that the user may want to revisit before the target instances get any further
configuration built on top of them.

→ When the user confirms and says to proceed, **return to the orchestrator
(`references/epwm-to-mcpwm-sysconfig-migration.md`)** and continue with Phase 3.
