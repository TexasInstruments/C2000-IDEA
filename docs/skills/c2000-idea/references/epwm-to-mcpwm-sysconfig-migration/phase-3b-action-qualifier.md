# Phase 3b — Action-Qualifier Migration

> You are in **Phase 3b** (Action-Qualifier) of the ePWM → MCPWM SysConfig migration. When
> done, **return to `phase-3-overview.md`** to pick the next sub-phase — do not jump straight
> to another sub-phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

## SysConfig IDs covered by this sub-phase

```
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_T1_COUNT_DOWN
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_T1_COUNT_UP
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_T2_COUNT_DOWN
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_T2_COUNT_UP
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_DOWN_CMPA
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_DOWN_CMPB
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_PERIOD
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_UP_CMPA
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_UP_CMPB
epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_ZERO
epwmActionQualifier_EPWM_AQ_OUTPUT_A_continuousSwForceAction
epwmActionQualifier_EPWM_AQ_OUTPUT_A_gld
epwmActionQualifier_EPWM_AQ_OUTPUT_A_onetimeSwForceAction
epwmActionQualifier_EPWM_AQ_OUTPUT_A_shadowEvent
epwmActionQualifier_EPWM_AQ_OUTPUT_A_shadowMode
epwmActionQualifier_EPWM_AQ_OUTPUT_A_t1Source
epwmActionQualifier_EPWM_AQ_OUTPUT_A_t2Source
epwmActionQualifier_EPWM_AQ_OUTPUT_A_usedEvents
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_T1_COUNT_DOWN
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_T1_COUNT_UP
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_T2_COUNT_DOWN
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_T2_COUNT_UP
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_TIMEBASE_DOWN_CMPA
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_TIMEBASE_DOWN_CMPB
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_TIMEBASE_PERIOD
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_TIMEBASE_UP_CMPA
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_TIMEBASE_UP_CMPB
epwmActionQualifier_EPWM_AQ_OUTPUT_B_ON_TIMEBASE_ZERO
epwmActionQualifier_EPWM_AQ_OUTPUT_B_continuousSwForceAction
epwmActionQualifier_EPWM_AQ_OUTPUT_B_gld
epwmActionQualifier_EPWM_AQ_OUTPUT_B_onetimeSwForceAction
epwmActionQualifier_EPWM_AQ_OUTPUT_B_shadowEvent
epwmActionQualifier_EPWM_AQ_OUTPUT_B_shadowMode
epwmActionQualifier_EPWM_AQ_OUTPUT_B_t1Source
epwmActionQualifier_EPWM_AQ_OUTPUT_B_t2Source
epwmActionQualifier_EPWM_AQ_OUTPUT_B_usedEvents
epwmActionQualifier_continousSwForceReloadMode
epwmActionQualifier_continousSwForceReloadModeGld
epwmActionQualifier_t1Source
epwmActionQualifier_t2Source
```

Plus five non-prefixed preset ids that live in the same UI block (SysConfig quick-select
buttons, not raw driverlib fields — confirmed present in a live `getInstanceConfiguration`
capture sitting inside the action-qualifier section despite the bare names):

```
AH
AHC
AL
ALC
DUAL
```

This is the complete set of these configurable ids tracked across all EPWM device families. A
real source instance will only expose whichever of these its specific device supports — that's
expected, not a gap.

## What this sub-phase does, and doesn't, do

Migrates action-qualifier configuration (per-output A/B action tables, software-force actions,
shadow-load settings) from each source EPWM instance onto its assigned MCPWM instance and pair.
Does not touch counter-compare, dead-band, trip-zone, or event-trigger.

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

### Step 2 — Resolve pair-substitution, and drop what MCPWM removed entirely

The `_A_`/`_B_`-suffixed action fields (e.g.
`epwmActionQualifier_EPWM_AQ_OUTPUT_A_ON_TIMEBASE_ZERO`) map onto MCPWM's **pair-1** outputs
(`1A`/`1B`) in the tool's guidance by default. For the second and third source EPWM instance in
a group, substitute `1A`/`1B` in the target field name for `2A`/`2B` or `3A`/`3B` respectively
— same pattern as counter-compare's `CMPA`/`CMPB`.

The `T1`/`T2`-suffixed fields (anything referencing the old T1/T2 action-qualifier trigger
events — `t1Source`, `t2Source`, `ON_T1_COUNT_UP`, etc.) have **no MCPWM equivalent at all, on
any pair** — MCPWM removed T1/T2 entirely. Expect the tool to report these as `no_equivalent`
regardless of which pair you're asking about; don't spend time looking for a pair-2/3 variant
of something that doesn't exist on pair 1 either.

For the five preset ids (`AH`, `AL`, `AHC`, `ALC`, `DUAL`), confirm via the tool's guidance
whether they resolve to something on MCPWM at all, and if so, whether that resolution is itself
pair-1-specific — if it is, treat it the same as the other per-pair fields above rather than
assuming a preset button carries over to pairs 2/3 automatically.

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
