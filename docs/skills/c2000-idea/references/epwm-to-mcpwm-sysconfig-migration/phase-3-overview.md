# Phase 3 — EPWM → MCPWM Submodule Migration (Hub)

> You are in **Phase 3** of the ePWM → MCPWM SysConfig migration — the full-configuration
> migration, run as seven sub-phases. This file is the hub: read it first for context, then
> work the sub-phases **one at a time**, returning **here** between each (not to the top-level
> orchestrator, and never jumping straight from one sub-phase file to the next).

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user for help.** Do not guess, retry blindly, or skip the step.

Sections 1–3 below are background — distilled from TI's SPRADL7 application note — explaining
*why* EPWM and MCPWM differ and what a migration has to account for at a conceptual level.
Section 4 is the actual procedure: seven sub-phases, each its own reference file, covering
every remaining SysConfig configurable between them.

## 4. Sub-phases

Read this file first for context, then work through the sub-phases below **one at a time, in
order**. After finishing a sub-phase (it will end with its own stop-and-confirm step and, for
3a–3f, a save), **return to this file** before opening the next one — don't jump directly from
one sub-phase file to the next on your own. This file is where you re-orient between
sub-phases, not a one-time table of contents.

| Sub-phase | File | Covers | Writes? |
|---|---|---|---|
| 3a | `phase-3a-counter-compare.md` | `CMPA`–`CMPD`, shadow-load modes | yes |
| 3b | `phase-3b-action-qualifier.md` | Per-output action tables, SW force | yes |
| 3c | `phase-3c-dead-band.md` | Rising/falling edge delay, polarity | yes |
| 3d | `phase-3d-trip-zone.md` | Trip actions, CBC/one-shot sources | yes |
| 3e | `phase-3e-event-trigger.md` | Interrupt source, SOC A–D triggers | yes |
| 3f | `phase-3f-global-load.md` | Instance-wide global-load toggles | yes |
| 3g | `phase-3g-removed-submodules-audit.md` | Chopper, Digital Compare, HRPWM, Extended Compare, ICL, Diode Emulation, Min Dead-Band | no — read-only report |

Sub-phases 3a–3f each call the `get_syscfg_module_migration_guide` MCP tool (idea-mcp) for
field-level mapping, then apply the kind of translation this background material explains
conceptually: pair-substitution for fields that are genuinely per-pair on MCPWM
(counter-compare's `CMPA`/`CMPB`, action-qualifier's per-output tables), or explicit
reconciliation for fields that are instance-wide-shared (dead-band, trip-zone, event-trigger,
global-load, and counter-compare's `CMPC`/`CMPD`) whenever a confirmed group has more than one
source EPWM instance. Sub-phase 3g runs the audit described in section 3's "drop calls with no
equivalent" item, but as a concrete per-project check rather than a general statement — it can
run any time after Phase 1's grouping is confirmed, independent of 3a–3f's order, since it
never writes to the target file.

---

## 1. Why they're different

EPWM (Enhanced Pulse-Width Modulator) is used by most C2000 devices (F2837xD, F28003x, F28P55x,
etc.). **MCPWM (Multi-Channel PWM)** is a newer, deliberately **lower-cost, reduced-feature**
module purpose-built for 3-phase motor control, available on MCPWM-capable target devices:

- **One MCPWM instance drives up to 6 outputs** (1A/1B, 2A/2B, 3A/3B) — versus one EPWM
  instance driving only 2 (A/B).
- All 3 output pairs in one MCPWM instance **share a single time-base counter (TBCTR)**.
  There's no independent counter per pair — phase shifting between pairs has to go through the
  counter-compare submodule instead.
- Shadow registers for TBPRD, CMPA, etc. are **directly memory-mapped and user-visible** on
  MCPWM (e.g. `TBPRDS`, `PWMx_CMPAS`) instead of a hidden shadow/active toggle you enable via
  control bits.
- Dead-band and trip-zone settings are **shared across all 3 pairs** in one MCPWM instance —
  you lose per-pair flexibility there in exchange for the extra outputs.

### Removed entirely (no MCPWM equivalent)

- HRPWM (high-resolution PWM)
- Digital Compare submodule
- Chopper submodule
- One-shot sync (out)
- Down-count mode (only up-count remains)
- Separate TZ (trip-zone) interrupt — folded into the single MCPWM interrupt
- Software-forced trip events (`TZFRC`) — use action-qualifier SW force or a GPIO instead
- T1/T2 action-qualifier trigger events
- Advanced/digital-compare-based trip actions
- Register locking (`LOCK` register)
- Global load: SYNCIN-triggered loads, prescaler counter, load for CMPC/CMPD, load for DBCTL,
  load for AQ continuous SW force

---

## 2. Submodule-by-submodule differences

### 2.1 Time-base

| Change | Detail |
|---|---|
| Period shadow register | New memory-mapped `TBPRDS` — write directly to it instead of toggling a shadow-load control bit |
| Clock divider | `TBCTL.HSPCLKDIV` + prescaler merged into single `TBCTL.CLKDIV` |
| One-shot sync | Removed |
| Down-count mode | Removed (up-count and up-down remain) |
| `CTRMAX` flag | Removed |
| Multiple PWM pairs | Share one counter — phase-shift via counter-compare, not the time-base |

**Driverlib:** `EPWM_getTimeBasePeriod`/`EPWM_setTimeBasePeriod` →
`MCPWM_getTimeBasePeriodActive`/`MCPWM_setTimeBasePeriodActive` (name change reflects the
shadow-register split); new `MCPWM_get/setTimeBasePeriodShadow`; `EPWM_clearSyncEvent` →
`MCPWM_clearSyncStatus`; `EPWM_setClockPrescaler` → `MCPWM_setClockPrescaler` (fewer args,
dividers combined); `EPWM_enable/disableOneShotSync` and related one-shot-sync functions have
**no MCPWM equivalent**.

### 2.2 Counter-compare

| Change | Detail |
|---|---|
| CMPA/CMPB | Now **separate per PWM pair**: `PWM1_CMPA`, `PWM1_CMPB`, `PWM2_CMPA`, etc. |
| CMPC/CMPD | **Shared across all 3 pairs** (not per-pair) |
| Shadow registers | Memory-mapped (`PWMx_CMPAS`, `PWMx_CMPBS`, `CMPCS`, `CMPDS`) — no separate shadow/active mode selection, just write the register you mean |
| SYNCIN-triggered shadow load | Removed |

**Driverlib:** `EPWM_getCounterCompareValue`/`EPWM_setCounterCompareValue` →
`MCPWM_getCounterCompareActiveValue`/`MCPWM_setCounterCompareActiveValue`; new
`MCPWM_get/setCounterCompareShadowValue`; `EPWM_disableCounterCompareShadowLoadMode` and
`EPWM_getCounterCompareShadowStatus` have **no MCPWM equivalent** (shadow mode isn't toggled —
you just pick which register to touch).

### 2.3 Action-qualifier

| Change | Detail |
|---|---|
| AQCTLA/AQCTLB | Repeated per PWM pair (`PWMx_AQCTLA`, `PWMx_AQCTLB`) |
| Shadow registers | New memory-mapped `AQCTLAS`/`AQCTLBS` |
| T1/T2 events | Removed entirely |
| One-time SW force | Auto-triggers on configuration — no separate trigger bitfield needed |

**Driverlib:** `EPWM_setActionQualifierAction` → `MCPWM_setActionQualifierActionActive` (+ new
`...Shadow` variant); `EPWM_setActionQualifierContSWForceAction` →
`MCPWM_setActionQualifierSWAction` (shared between continuous and one-time force);
`EPWM_setActionQualifierT1/T2TriggerSource` and
`EPWM_setAdditionalActionQualifierActionComplete` have **no MCPWM equivalent** (T1/T2 gone).

### 2.4 Dead-band

| Change | Detail |
|---|---|
| Scope | **Shared across all 3 PWM pairs** — one dead-band config for the whole MCPWM instance |
| Shadow registers | New memory-mapped `DBFEDS`, `DBREDS` |
| Half-cycle clocking | Removed (depended on HRPWM, which is gone) |

**Driverlib:** `EPWM_setFallingEdgeDelayCount`/`EPWM_setRisingEdgeDelayCount` →
`MCPWM_...Active` variants + new `MCPWM_...Shadow` setters; `EPWM_setDeadBandCounterClock`
(half-cycle) has **no MCPWM equivalent**.

### 2.5 Trip-zone

| Change | Detail |
|---|---|
| Signal count | **TZ1–TZ8** (up from TZ1–TZ3) |
| Signal source | Each TZn driven directly by a **PWM X-BAR** output, not internal signals |
| Scope | Shared across all 3 PWM pairs (like dead-band) |
| Digital Compare | Entire submodule removed — no DCAEVT/DCBEVT trip sources |
| SW-forced trips | Removed — substitute with AQ software force or a GPIO |
| TZ interrupt | Removed as separate — shares the single MCPWM interrupt |
| CBC/OST flag registers | `TZCBCCLR`/`TZOSTCLR`/`TZCBCFLG`/`TZOSTFLG` all **combined** into `TZCBCOSTCLR`/`TZCBCOSTFLAG` |

**Driverlib:** `EPWM_clearCycleByCycleTripZoneFlag` + `EPWM_clearOneShotTripZoneFlag` → both
collapse to `MCPWM_clearTripZoneFlagStatus`; `EPWM_enable/disableTripZoneInterrupt`,
`EPWM_forceTripZoneEvent`, `EPWM_(set/enable/disable)TripZoneAdvAction*`, and
`EPWM_setTripZoneDigitalCompareEventCondition` all have **no MCPWM equivalent**.

### 2.6 Event-trigger

| Change | Detail |
|---|---|
| Interrupt events | ET1 and ET2 now **independently configurable** (were combined) |
| SOC events | **SOCC/SOCD added**, independently configurable from SOCA/SOCB |
| Prescaler | Retained but **3-bit** (was 4-bit) and **can't be custom-initialized** (always starts at 0) |
| SOCA/SOCB "occurred" flags | Removed |

**Driverlib:** New `MCPWM_setEventTriggerSource` (splits ET1/ET2 from the old combined
INT/SOCx model), new `MCPWM_get/setEventTriggerEventPrescale`;
`EPWM_forceEventTriggerInterrupt` → `MCPWM_forceInterrupt`; all `EPWM_*EventCountInit*`
(custom prescaler init value) functions have **no MCPWM equivalent**.

### 2.7 Global load

| Change | Detail |
|---|---|
| SYNCIN trigger | Can no longer trigger a global load |
| Prescaler counter | Removed |
| Scope reductions | No global load for AQ continuous SW force, CMPC/CMPD, or DBCTL |

**Driverlib:** New `MCPWM_clearGlobalLoadOneShotLatch` + `MCPWM_getGlobalLoadOneShotLatchStatus`;
`EPWM_enable/disableGlobalLoadRegisters` and `EPWM_get/setGlobalLoadEventPrescale` have **no
MCPWM equivalent** (no per-register enable bits, no prescaler).

---

## 3. Practical migration checklist

Converting, for example 4 independent EPWM instances + `sync` submodule toward real MCPWM code
means:

1. **Consolidate instances.** 4 separate `EPWM` instances → 1–2 `MCPWM` instances (each covers
   up to 3 output pairs). Check whether the synchronization behavior between the 4 original
   channels can be re-expressed as phase offsets within shared MCPWM pairs via counter-compare,
   since there's only one counter per MCPWM instance. *(Phases 1–2, plus the counter-compare
   pair-substitution in 3a.)*
2. **Drop calls with no equivalent**: one-shot sync, digital compare, HRPWM, T1/T2,
   advanced/digital-compare trip actions, custom prescaler init values, per-register
   global-load enables. *(Digital compare and HRPWM audited concretely in 3g; T1/T2 called out
   in 3b, custom prescaler in 3e, and per-register global-load enables in 3f.)*
3. **Re-home dead-band and trip-zone config** — these move from per-EPWM-instance to
   per-MCPWM-instance (shared across all pairs in that instance), so if the original 4 EPWM
   channels had *different* dead-band/trip settings, that flexibility doesn't carry over 1:1.
   *(The reconciliation step in 3c and 3d.)*
4. **Re-route trip signals through PWM X-BAR** — MCPWM's TZ1–TZ8 come from PWM X-BAR outputs,
   not the same internal signal names EPWM used. *(3d.)*
5. **Check event-trigger mapping** — ET1/ET2 and SOCA–D are all independent on MCPWM; decide
   which original EPWM SOC/interrupt behavior maps to which. *(3e, including the one
   structural/`partial` field, `epwmEventTrigger_interruptSource`.)*

---

→ Read the next sub-phase in the table above, execute it fully, then **return here** before
opening the following one. When all seven sub-phases are complete, the migration is done —
return to the orchestrator (`references/epwm-to-mcpwm-sysconfig-migration.md`).
