# Phase 3f — Global-Load Migration

> You are in **Phase 3f** (Global-Load) of the ePWM → MCPWM SysConfig migration. When done,
> **return to `phase-3-overview.md`** to pick the next sub-phase — do not jump straight to
> another sub-phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

## SysConfig IDs covered by this sub-phase

```
epwmGlobalLoad_enableOneShot
epwmGlobalLoad_gld
epwmGlobalLoad_gldMode
epwmGlobalLoad_gldPeriod
epwmGlobalLoad_globalePWMLoadLink
epwmGlobalLoad_oneShotForce
epwmGlobalLoad_oneShotMode
epwmGlobalLoad_statusActionQualifier
epwmGlobalLoad_statusCounterCompare
epwmGlobalLoad_statusDeadBand
epwmGlobalLoad_statusTimeBase
```

This is the complete set of these configurable ids tracked across all EPWM device families. A
real source instance will only expose whichever of these its specific device supports — that's
expected, not a gap.

## What this sub-phase does, and doesn't, do

Migrates the top-level global-load configuration (one-shot force/mode, global-load
enable/mode/period, and the per-submodule global-load status flags) from each source EPWM
instance onto its assigned MCPWM instance. Does not touch counter-compare, action-qualifier,
dead-band, trip-zone, or event-trigger's own submodule-specific load toggles (those are covered
in their respective sub-phases).

**Important:** Global-load settings are **instance-wide** on MCPWM — shared across all 3 pairs
in one MCPWM instance. If multiple source EPWM instances in the same group have different
global-load settings, a choice must be made about which configuration to apply to the shared
MCPWM instance field.

## Pre-sub-phase check: Read the migration log

Before proceeding, **read the `epwm-mcpwm-migration.md` log** and confirm:

1. **Phase 2 is marked COMPLETE** — if not, do not proceed.
2. **Sub-phases 3a, 3b, 3c, 3d, and 3e are marked COMPLETE** — if not, do not proceed.
3. **The group → MCPWM instance mapping is documented** — you will use this to identify which
   source EPWM instances map to the same target MCPWM instance (and thus share global-load
   settings).

If the log is missing or prior phases are not marked complete, stop and ask the user to
complete them first.

## Inputs

From the confirmed Phase-2 mapping (read from the migration log), you need:

1. **Source device** and **source `.syscfg` file**.
2. **Target device** and **target `.syscfg` file** — already has the MCPWM instances Phase 2
   created.
3. **The confirmed group → MCPWM instance mapping** from Phase 2 — which source EPWM
   `moduleInstanceId` landed on which pair (1/2/3) of which target `moduleInstanceId`.

If any of these weren't part of the confirmed Phase-2 output, ask before proceeding rather than
re-deriving or guessing them.

## Step-by-step procedure

### Step 1 — Get migration guidance for this submodule's fields

Call `get_syscfg_module_migration_guide` (idea-mcp) with:

- `sourceDevice`: the source device
- `targetDevice`: the target device
- `moduleToModule`: `"epwm_mcpwm"`
- `ids`: the list above (or, cheaper, first narrow it to just the ids that actually exist on
  the source instances — query `getInstanceConfiguration` with the full list and see what comes
  back; an id the device doesn't have is silently omitted from the response rather than causing
  an error)

If this tool isn't present or the call fails, **stop and tell the user** rather than trying to
reconstruct this submodule's field-by-field mapping from memory or from any locally-cached
data — that's exactly the gap this tool is meant to fill, not something to work around silently.

The tool's response uses the same status model already established for time-base/sync in
Phase 1: `mapped` (with a target MCPWM field name), `no_equivalent`, or `partial` (a structural
change, not a rename — read its guidance carefully rather than treating it like an ordinary
rename).

### Step 2 — Resolve shared-field reconciliation, and expect a smaller field set

Global-load fields are instance-wide on MCPWM — confirmed live, a single `mcpwmGlobalLoad_gld`
field versus EPWM's several separate toggles. Same reconciliation pattern as
dead-band/trip-zone/event-trigger applies if a group has more than one source instance with
differing global-load settings.

MCPWM's global-load model is also simpler than EPWM's by design — no SYNCIN-triggered load, no
prescaler counter, no load for `CMPC`/`CMPD`, `DBCTL`, or action-qualifier continuous software
force. Expect most of this submodule's fields to come back `no_equivalent` from the tool; that's
consistent with the source removal already documented, not a sign something was missed.

### Step 3 — Apply the translated values

For each target MCPWM instance, call `changeConfiguration` once (batch that instance's fields
into a single call so they apply atomically; use a separate call per instance so one instance's
failure doesn't revert another's).

### Step 4 — Verify

Call `getErrorsAndWarnings`. Confirm it comes back clean before presenting anything as done —
resolve or report any error/warning before moving on.

### Step 5 — Save and present the result for confirmation

Call `save`. Then present a report with:

1. **Values applied per target instance** — pull via `getInstanceConfiguration` with
   `changesOnly: true` on the target instances so the report reflects what's actually in the
   file.
2. **Fields dropped** (`no_equivalent` per the tool) that had a non-default value on the source
   side — name the source instance and the original value, don't just note the id was dropped.
3. **Every pair-substitution / reconciliation decision made explicitly** (see Step 2 above) —
   which source instance's value was kept, and what happened to the others.
4. **Verification result** — confirm `getErrorsAndWarnings` was clean and the file was saved.

### Step 6 — Update the migration log

Append to `epwm-mcpwm-migration.md`:

```markdown
### Sub-phase 3f: Global-Load
Status: COMPLETE

**Values applied per target instance:**
[Copy from Step 5, section 1]

**Fields dropped (no MCPWM equivalent):**
[Copy from Step 5, section 2 — or "none" if all were present]

**Reconciliation decisions (instance-wide shared fields):**
[Copy from Step 5, section 3 — name which source instance(s) had conflicting global-load values
and which one's configuration was chosen for the shared MCPWM instance]

**Verification:**
- Errors and warnings: none
- Target .syscfg file: saved
```

### Step 7 — Stop and confirm before the next sub-phase

**End your turn after updating the log and presenting the report.** Do not proceed directly to
the next Phase-3 sub-phase file in the same turn — **return to `phase-3-overview.md`** first,
which is where the next sub-phase gets picked from. Ask the user to review the reconciliation
decisions from Step 2 specifically, since that's where a judgment call was made (when multiple
source instances had different global-load settings) that the user may want to override.
