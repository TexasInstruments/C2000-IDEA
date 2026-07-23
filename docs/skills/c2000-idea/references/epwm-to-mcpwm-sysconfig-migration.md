# SysConfig ePWM → MCPWM Peripheral Migration Workflow (Orchestrator)

Migrate an EPWM-based SysConfig (`.syscfg`) project onto a target device's **MCPWM**
peripheral. This is a **peripheral-level** SysConfig migration (EPWM module → MCPWM module),
run in confirmed phases. It uses the **ccs-sysconfig MCP** for all live `.syscfg` reads and
edits, and the **idea-mcp** `get_syscfg_module_migration_guide` tool for the field-level
EPWM→MCPWM mapping facts. All field mappings come from the MCP — never recall EPWM/MCPWM
configurable mappings from memory.

## When to use

The user wants to migrate, port, or **consolidate** an existing EPWM-based `.syscfg` design
onto a device whose PWM peripheral is MCPWM — e.g. moving a multi-EPWM design to a
lower-pin-count or motor-control-oriented target — or wants to know whether several EPWM
instances can share one MCPWM instance, or wants the sync chain / time-base settings of an
EPWM project checked before such a migration. Trigger even if the user doesn't say "MCPWM"
explicitly but describes moving a multi-EPWM design onto a device that uses MCPWM.

This is **distinct** from device-to-device migration (`references/device-migration.md`).
Device migration's SysConfig step (Phase 3) uses SysConfig's *same-peripheral* `migrate()`,
which would treat EPWM as absent on an MCPWM-only target and drop it. Run this workflow on
its own for EPWM→MCPWM, not inside a device migration.

## Required inputs (gathered once, used across phases)

1. **Source device** — the device the source `.syscfg` targets.
2. **Source `.syscfg` file** — absolute path.
3. **Target device** — an MCPWM-capable target device to migrate toward.
4. **Target `.syscfg` file** — absolute path; needed from Phase 2 on (may be the file
   Phase 1's capacity check probed, or a fresh one).

If any of these are missing when a phase needs them, ask — don't guess a device or file
path.

### Input validation (before proceeding)

Validate the source/target device pair with the tools: call `list_migration_devices()`
and/or run a `get_syscfg_module_migration_guide` probe with `moduleToModule: "epwm_mcpwm"`.
If the pair is not supported for the `epwm_mcpwm` module migration, the tool returns an
error listing the supported source/target devices — notify the user and **stop**. Do not
hardcode which devices are supported; let the tool decide.

## Migration log file

The target project has a persistent migration log: a file called `epwm-mcpwm-migration.md`
that lives in **the same directory as the target `.syscfg` file**.

The log is created during Phase 1, once inputs have been validated and the target device's
MCPWM capacity has been confirmed. From that point on, update it continuously throughout
the workflow:

- Record migration info (source device, source `.syscfg` path, target device, target `.syscfg`
  path, MCPWM instance capacity per device).
- At each phase: record the phase status (`IN PROGRESS` / `COMPLETE` / `SKIPPED`), key
  findings, and actions taken.
- In Phase 3: record per-sub-phase status (issues found, configurations migrated, unresolved items).
- At the end: this file becomes part of the final deliverable for the user.

Always read and update this log throughout the workflow.

**If your context is getting long or you feel disoriented, re-read `epwm-mcpwm-migration.md`
to recover your position and progress.**

## Resuming a paused migration

> STOP: **If you are resuming:** Read `epwm-mcpwm-migration.md` FIRST — before reading the Phase
> sequence below. Identify where you left off, then jump directly to the correct phase file.
> **Do not start from Phase 1 unless Phase 1 is explicitly recorded as incomplete.**

If you are resuming a migration that was started in a previous session:

1. Locate the target `.syscfg` directory's `epwm-mcpwm-migration.md`. Identify which phase
   is marked as `IN PROGRESS` or incomplete.
2. Jump directly to that phase file — do not re-run prior phases.
3. Read that phase's opening section to understand its pre-conditions, then resume from where
   it left off.
4. If the log is missing or unclear, ask the user to clarify which phase was interrupted.

## Dependencies

**idea-mcp** (required):
- `get_syscfg_module_migration_guide(moduleToModule, sourceDevice, targetDevice, ids?)` —
  field-level EPWM→MCPWM mapping guide for `moduleToModule: "epwm_mcpwm"`. Returns each
  requested configurable as `mapped` (with a target MCPWM field name), `no_equivalent`, or
  `partial` (a structural change, not a rename). This is the authoritative source of field
  mappings.
- `list_migration_devices()` — supported migration device families (for input validation).

**ccs-sysconfig MCP** (required — performs all live `.syscfg` reads and edits):
- `openFile` / `closeFile` — open/close a `.syscfg` file (mandatory before any config tools)
- `listFiles` — list the `.syscfg` files in the workspace
- `getModuleInstances` — list configured module instances for a module id
- `getInstanceConfiguration` — read instance settings (`changesOnly: true` for user
  customizations; `includeChoices: true` to read a field's available choice strings)
- `addModuleInstances` / `removeModuleInstances` — add/remove module instances
- `changeConfiguration` — modify configuration values (atomic per call)
- `getErrorsAndWarnings` — validate configuration after changes
- `save` — persist changes and regenerate artifacts

**ti-asm-mcp** (required):
- Device TRM access via `list_trm_headings()`, `get_trm_section()` to determine MCPWM
  instance channel counts (Phase 1, Step 6).

## How to run this workflow

> STOP: **Do not read ahead.** Read one phase file at a time. Complete every step in it.
> Return to this orchestrator. Only then read the next phase file. Do not open the next
> phase file early.
>
> **Sub-phases follow the same rule:** within Phase 3, `phase-3-overview.md` is the hub —
> read it first, then read each sub-phase (3A…3G) one at a time, returning to
> `phase-3-overview.md` between each rather than jumping directly from one sub-phase to the
> next.

Each phase (and each Phase-3 sub-phase) ends with an explicit **stop-and-confirm** step.
Honor it: end your turn, present the report, and wait for the user before loading the next
reference file. Don't cascade through phases in one turn even when the next step looks
obvious — the confirmation gates exist because each one makes judgment calls (how to group
instances, which sync relationship wins a single slot, which source instance's value wins a
shared field) that are the user's to approve or override.

Never skip straight to Phase 2 (or Phase 3) without the confirmed output of the phase before
it. If the user asks to jump ahead, either run the earlier phase first or explicitly ask
them for the specific confirmed inputs that phase would have produced — don't reconstruct or
guess a grouping/mapping that was never confirmed.

### Phase sequence

1. **Read `epwm-to-mcpwm-sysconfig-migration/phase-1-migration-report.md`** — read-only.
   Inspect the source EPWM `.syscfg`, reconstruct its sync chain and time-base settings, and
   produce a report proposing which EPWM instances group onto which target MCPWM instance.
   Never touches the target file.
   → When complete, return here.

2. **Read `epwm-to-mcpwm-sysconfig-migration/phase-2-instance-setup.md`** — writes the
   target file. Only after the user confirms Phase 1's grouping. Creates one MCPWM instance
   per confirmed group, sets each instance's shared time-base fields, and translates the EPWM
   sync chain onto the new instances. Does not touch action-qualifier, counter-compare,
   dead-band, trip-zone, or event-trigger.
   → When complete, return here.

3. **Read `epwm-to-mcpwm-sysconfig-migration/phase-3-overview.md`** — full configuration
   migration, run as seven independent sub-phases. `phase-3-overview.md` is Phase 3's hub:
   background on why EPWM and MCPWM differ, plus the ordered list of sub-phase files. Read it
   first, then read each sub-phase file it points to one at a time, returning to it between
   each.
   → When Phase 3 is complete, the migration is done.

## Do / Don't

- Do keep the source `.syscfg` unchanged — it is the golden reference; only the target file
  is written (and only from Phase 2 on).
- Do take all field mappings from `get_syscfg_module_migration_guide` — never recall
  EPWM→MCPWM configurable mappings from memory or from any cached data file.
- Do honor every stop-and-confirm gate; surface each judgment call to the user by name.
- Don't cascade through phases or sub-phases in a single turn.
- Don't run this inside a device-to-device migration — it is a standalone workflow.
