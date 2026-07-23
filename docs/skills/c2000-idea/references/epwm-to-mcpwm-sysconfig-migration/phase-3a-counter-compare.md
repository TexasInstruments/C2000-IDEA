# Phase 3a — Counter-Compare Migration

> You are in **Phase 3a** (Counter-Compare) of the ePWM → MCPWM SysConfig migration. When
> done, **return to `phase-3-overview.md`** to pick the next sub-phase — do not jump straight
> to another sub-phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

## SysConfig IDs covered by this sub-phase

```
epwmCounterCompare_cmpA
epwmCounterCompare_cmpAGld
epwmCounterCompare_cmpALink
epwmCounterCompare_cmpB
epwmCounterCompare_cmpBGld
epwmCounterCompare_cmpBLink
epwmCounterCompare_cmpC
epwmCounterCompare_cmpCGld
epwmCounterCompare_cmpCLink
epwmCounterCompare_cmpD
epwmCounterCompare_cmpDGld
epwmCounterCompare_cmpDLink
epwmCounterCompare_enableShadowLoadModeCMPA
epwmCounterCompare_enableShadowLoadModeCMPB
epwmCounterCompare_enableShadowLoadModeCMPC
epwmCounterCompare_enableShadowLoadModeCMPD
epwmCounterCompare_shadowLoadModeCMPA
epwmCounterCompare_shadowLoadModeCMPB
epwmCounterCompare_shadowLoadModeCMPC
epwmCounterCompare_shadowLoadModeCMPD
```

This is the complete set of these configurable ids tracked across all EPWM device families. A
real source instance will only expose whichever of these its specific device supports — that's
expected, not a gap.

## What this sub-phase does, and doesn't, do

Migrates counter-compare configuration (`CMPA`–`CMPD`, their shadow-load modes, and the
global-load/link toggles) from each source EPWM instance onto its assigned MCPWM instance and
pair, per the confirmed Phase-2 grouping. Does not touch action-qualifier, dead-band,
trip-zone, or event-trigger — those are separate sub-phases.

## Pre-sub-phase check: Read the migration log

Before proceeding, **read the `epwm-mcpwm-migration.md` log** and confirm:

1. **Phase 2 is marked COMPLETE** — if not, do not proceed.
2. **The group → MCPWM instance mapping is documented** — you will use this to determine which
   pair slot (1/2/3) each source EPWM instance lands in.

If the log is missing or Phase 2 is not marked complete, stop and ask the user to complete
Phase 2 first.

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

### Step 2 — Resolve pair-substitution and shared-field conflicts

`CMPA` and `CMPB` are **per-pair** on MCPWM — a single MCPWM instance exposes
`mcpwmCounterCompare_cmpA`/`cmpB` (and their shadow-enable/shadow-mode counterparts) for pair 1,
then `..._pwm2` variants for pair 2 and `..._pwm3` variants for pair 3. The tool's guidance in
Step 1 gives you the pair-1 field name — for the second and third source EPWM instance in a
group, append `_pwm2`/`_pwm3` to that field name yourself; the tool has no way to know which
pair a given source instance landed on.

`CMPC` and `CMPD`, by contrast, are genuinely **shared across all 3 pairs** of one MCPWM
instance — there is no `_pwm2`/`_pwm3` variant for them at all. If more than one source instance
in a group used `CMPC`/`CMPD` with different values, that is not a pair-substitution problem,
it's a reconciliation one: surface the conflicting values to the user and ask which should be
kept, rather than silently picking the first instance's value.

The `*Gld`/`*Link` fields (global-load enable, register-link) are expected to come back
`no_equivalent` from the tool — MCPWM's global-load model for counter-compare is simpler (see
Phase 3f, Global Load).

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
### Sub-phase 3a: Counter-Compare
Status: COMPLETE

**Values applied per target instance:**
[Copy from Step 5, section 1]

**Fields dropped (no MCPWM equivalent):**
[Copy from Step 5, section 2 — or "none" if all were present]

**Pair-substitution / reconciliation decisions:**
[Copy from Step 5, section 3]

**Verification:**
- Errors and warnings: none
- Target .syscfg file: saved
```

### Step 7 — Stop and confirm before the next sub-phase

**End your turn after updating the log and presenting the report.** Do not proceed directly to
the next Phase-3 sub-phase file in the same turn — **return to `phase-3-overview.md`** first,
which is where the next sub-phase gets picked from. Ask the user to review the
pair-substitution/reconciliation decisions from Step 2 specifically, since that's where a
judgment call was made that the user may want to override.
