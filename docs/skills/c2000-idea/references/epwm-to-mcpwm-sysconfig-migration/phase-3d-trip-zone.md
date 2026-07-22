# Phase 3d — Trip-Zone Migration

> You are in **Phase 3d** (Trip-Zone) of the ePWM → MCPWM SysConfig migration. When done,
> **return to `phase-3-overview.md`** to pick the next sub-phase — do not jump straight to
> another sub-phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

## SysConfig IDs covered by this sub-phase

```
epwmTripZone_EPWM_TZ_ACTION_EVENT_DCAEVT1
epwmTripZone_EPWM_TZ_ACTION_EVENT_DCAEVT2
epwmTripZone_EPWM_TZ_ACTION_EVENT_DCBEVT1
epwmTripZone_EPWM_TZ_ACTION_EVENT_DCBEVT2
epwmTripZone_EPWM_TZ_ACTION_EVENT_TZA
epwmTripZone_EPWM_TZ_ACTION_EVENT_TZB
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT1_D_A
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT1_D_B
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT1_U_A
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT1_U_B
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT2_D_A
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT2_D_B
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT2_U_A
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_DCxEVT2_U_B
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_TZA_D
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_TZA_U
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_TZB_D
epwmTripZone_EPWM_TZ_ADV_ACTION_EVENT_TZB_U
epwmTripZone_cbcPulse
epwmTripZone_cbcSource
epwmTripZone_cbcSourceAdditional
epwmTripZone_oneShotSource
epwmTripZone_oneShotSourceAdditional
epwmTripZone_registerInterrupts
epwmTripZone_tripOut
epwmTripZone_tzInterruptSource
epwmTripZone_useAdvancedEPWMTripZoneActions
```

This is the complete set of these configurable ids tracked across all EPWM device families. A
real source instance will only expose whichever of these its specific device supports — that's
expected, not a gap.

## What this sub-phase does, and doesn't, do

Migrates trip-zone configuration (trip actions, cycle-by-cycle/one-shot sources, interrupt
routing) from each source EPWM instance onto its assigned MCPWM instance. Does not touch
counter-compare, action-qualifier, dead-band, or event-trigger.

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

### Step 2 — Resolve shared-field reconciliation AND re-route trip sources through PWM X-BAR

Two separate things need attention here, not just one:

**1. Reconciliation.** Trip-zone fields are instance-wide on MCPWM, same as dead-band —
confirmed live, one `mcpwmTripZone_*` field set per instance, no per-pair variants. If a group
has more than one source EPWM instance with different trip-zone settings, surface the conflict
and ask which instance's values win, rather than picking one silently.

**2. Trip-source re-routing.** Even for a single instance with no reconciliation conflict,
MCPWM's trip inputs are `TZ1`-`TZ8` (up from EPWM's `TZ1`-`TZ3`) and are driven by **PWM
X-BAR** outputs rather than the same internal signal names EPWM used. A `mapped` result from the
tool for a trip-source field is not a drop-in value copy the way a numeric field like `period`
is — it names the target configurable, but the actual trip source needs to be re-derived through
the PWM X-BAR's own configuration. Treat this as a second, separate design question from
reconciliation, and don't apply a trip-source value until you've confirmed what it actually
routes to on the target device (the device TRM via ti-asm-mcp is the ground truth for PWM X-BAR
routing if it's unclear).

Expect every Digital-Compare-based trip source (`..._DCAEVT1`, `..._DCAEVT2`, `..._DCBEVT1`,
`..._DCBEVT2`) and every advanced trip-action field (`EPWM_TZ_ADV_ACTION_EVENT_*`) to come back
`no_equivalent` — Digital Compare is a fully removed submodule (see Phase 3g) and MCPWM has no
advanced/digital-compare-based trip actions.

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
