# Phase 3e — Event-Trigger Migration

> You are in **Phase 3e** (Event-Trigger) of the ePWM → MCPWM SysConfig migration. When done,
> **return to `phase-3-overview.md`** to pick the next sub-phase — do not jump straight to
> another sub-phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

## SysConfig IDs covered by this sub-phase

```
epwmEventTrigger_EPWM_SOC_A_etmixTriggerSource
epwmEventTrigger_EPWM_SOC_A_triggerEnable
epwmEventTrigger_EPWM_SOC_A_triggerEventCountInitEnable
epwmEventTrigger_EPWM_SOC_A_triggerEventCountInitForce
epwmEventTrigger_EPWM_SOC_A_triggerEventCountInitValue
epwmEventTrigger_EPWM_SOC_A_triggerEventPrescalar
epwmEventTrigger_EPWM_SOC_A_triggerSource
epwmEventTrigger_EPWM_SOC_B_etmixTriggerSource
epwmEventTrigger_EPWM_SOC_B_triggerEnable
epwmEventTrigger_EPWM_SOC_B_triggerEventCountInitEnable
epwmEventTrigger_EPWM_SOC_B_triggerEventCountInitForce
epwmEventTrigger_EPWM_SOC_B_triggerEventCountInitValue
epwmEventTrigger_EPWM_SOC_B_triggerEventPrescalar
epwmEventTrigger_EPWM_SOC_B_triggerSource
epwmEventTrigger_enableInterrupt
epwmEventTrigger_etmixinterruptSource
epwmEventTrigger_interruptEventCount
epwmEventTrigger_interruptEventCountInitEnable
epwmEventTrigger_interruptEventCountInitForce
epwmEventTrigger_interruptEventCountInitValue
epwmEventTrigger_interruptSource
epwmEventTrigger_registerInterrupts
```

This is the complete set of these configurable ids tracked across all EPWM device families. A
real source instance will only expose whichever of these its specific device supports — that's
expected, not a gap.

## What this sub-phase does, and doesn't, do

Migrates event-trigger configuration (interrupt source/enable, SOC A/B trigger
source/enable/prescaler) from each source EPWM instance onto its assigned MCPWM instance. Does
not touch counter-compare, action-qualifier, dead-band, or trip-zone.

## Inputs

From the confirmed Phase-1 report and Phase-2's applied setup, you need:

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

### Step 2 — Resolve shared-field reconciliation AND handle the one structural (partial) field

Event-trigger fields are instance-wide on MCPWM — confirmed live, one `mcpwmEventTrigger_*`
field set per instance (including independent `MCPWM_ET_1`/`MCPWM_ET_2` and
`MCPWM_SOC_A`-`MCPWM_SOC_D` triggers). Same reconciliation pattern as dead-band and trip-zone:
if a group has more than one source EPWM instance with differing event-trigger/interrupt
settings, surface the conflict rather than picking one.

`epwmEventTrigger_interruptSource` is a **structural** change, not a rename — expect the tool to
flag it as `partial` rather than `mapped`. EPWM selects a single time-base-counter event
directly as the interrupt source; MCPWM instead requires setting the Event-Trigger submodule's
trigger source (`MCPWM_ET_1`/`MCPWM_ET_2`) to the equivalent event, and *then* setting
`mcpwmEventTrigger_interruptSource` to point at that ET1/ET2 trigger, not at the raw time-base
event directly. Follow the tool's structural guidance for this one field carefully rather than
treating it like the other `mapped` entries in this sub-phase.

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

### Step 6 — Stop and confirm before the next sub-phase

**End your turn after presenting the report.** Do not proceed directly to the next Phase-3
sub-phase file in the same turn — **return to `phase-3-overview.md`** first, which is where the
next sub-phase gets picked from. Ask the user to review the pair-substitution/reconciliation
decisions from Step 2 specifically, since that's where a judgment call was made that the user
may want to override.
