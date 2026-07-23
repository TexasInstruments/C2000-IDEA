# Phase 3c — Dead-Band Migration

> You are in **Phase 3c** (Dead-Band) of the ePWM → MCPWM SysConfig migration. When done,
> **return to `phase-3-overview.md`** to pick the next sub-phase — do not jump straight to
> another sub-phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

## SysConfig IDs covered by this sub-phase

```
epwmDeadband_controlShadowLoadEvent
epwmDeadband_controlShadowMode
epwmDeadband_dbControlGld
epwmDeadband_deadbandCounterClockRate
epwmDeadband_deadbandFallingEdgeDelayLink
epwmDeadband_deadbandRisingEdgeDelayLink
epwmDeadband_delayFED
epwmDeadband_delayRED
epwmDeadband_enableFED
epwmDeadband_enableRED
epwmDeadband_fedGld
epwmDeadband_fedShadowLoadEvent
epwmDeadband_fedShadowMode
epwmDeadband_inputFED
epwmDeadband_inputRED
epwmDeadband_outputSwapOutA
epwmDeadband_outputSwapOutB
epwmDeadband_polarityFED
epwmDeadband_polarityRED
epwmDeadband_redGld
epwmDeadband_redShadowLoadEvent
epwmDeadband_redShadowMode
```

This is the complete set of these configurable ids tracked across all EPWM device families. A
real source instance will only expose whichever of these its specific device supports — that's
expected, not a gap.

## What this sub-phase does, and doesn't, do

Migrates dead-band configuration (rising/falling edge delay, polarity, input/output swap,
shadow-load settings) from each source EPWM instance onto its assigned MCPWM instance. Does not
touch counter-compare, action-qualifier, trip-zone, or event-trigger.

**Important:** Dead-band settings are **instance-wide** on MCPWM — shared across all 3 pairs
in one MCPWM instance. If multiple source EPWM instances in the same group have different
dead-band settings, a choice must be made about which value to apply to the shared MCPWM
instance field.

## Pre-sub-phase check: Read the migration log

Before proceeding, **read the `epwm-mcpwm-migration.md` log** and confirm:

1. **Phase 2 is marked COMPLETE** — if not, do not proceed.
2. **Sub-phases 3a and 3b are marked COMPLETE** — if not, do not proceed.
3. **The group → MCPWM instance mapping is documented** — you will use this to identify which
   source EPWM instances map to the same target MCPWM instance (and thus share dead-band
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

### Step 2 — Resolve the shared-field reconciliation, not a pair substitution

Every dead-band field is **instance-wide** on MCPWM — confirmed live, a single MCPWM instance
exposes exactly one `mcpwmDeadband_*` field set, with no `_pwm2`/`_pwm3` variants at all. That
means dead-band settings apply to **all 3 pairs** of that instance simultaneously; there is no
per-pair dead-band the way there is for `CMPA`/`CMPB` or action-qualifier outputs.

If a confirmed group has more than one source EPWM instance, and their original dead-band
settings differ (different `delayRED`/`delayFED` values, different polarity, etc.), there is no
way to preserve more than one set on that shared MCPWM instance. Surface this explicitly to the
user — name each source instance and its dead-band values — and ask which one should become the
group's shared setting, rather than silently picking the first (or any) instance's values.

If a group has only one source EPWM instance, there's nothing to reconcile — just carry that
instance's values across via the tool's `mapped` guidance.

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
### Sub-phase 3c: Dead-Band
Status: COMPLETE

**Values applied per target instance:**
[Copy from Step 5, section 1]

**Fields dropped (no MCPWM equivalent):**
[Copy from Step 5, section 2 — or "none" if all were present]

**Reconciliation decisions (instance-wide shared fields):**
[Copy from Step 5, section 3 — name which source instance(s) had conflicting dead-band values
and which one's value was chosen for the shared MCPWM instance field]

**Verification:**
- Errors and warnings: none
- Target .syscfg file: saved
```

### Step 7 — Stop and confirm before the next sub-phase

**End your turn after updating the log and presenting the report.** Do not proceed directly to
the next Phase-3 sub-phase file in the same turn — **return to `phase-3-overview.md`** first,
which is where the next sub-phase gets picked from. Ask the user to review the reconciliation
decisions from Step 2 specifically, since that's where a judgment call was made (when multiple
source instances had different dead-band settings) that the user may want to override.
