# Phase 4F — Timing Migration Check

> You are executing Phase 4F for one target project.
> The source and target projects have each been analysed by the timing workflow; their
> reports are in your briefing. **Do not re-run the timing analysis. Do not look ahead.**

---

## Your assignment

Compare the source and target timing reports instance by instance, and write
`c2000-timing-migration.md` in the target project directory. Report only — never change either
project's code or configuration.

**Stop and return `Phase 4F result: STOPPED — <reason>`** if either timing report is missing
or its Phase 5 is not COMPLETE.

If `c2000-timing-migration.md` or a Phase 4F section already exists, replace it.

---

## Briefing fields (confirm before starting)

| Field | Value |
|---|---|
| Target project directory | `<absolute path>` |
| Source timing report | `<sourceProjectDir>/c2000-timing.md` |
| Target timing report | `<targetProjectDir>/c2000-timing.md` |
| Source device | `<e.g. F28004x>` |
| Target device | `<e.g. F28003x>` |

---

## Step 1 — Read both reports

Read the final Clocks table, every Phase 5 peripheral table and the Findings of both reports.

## Step 2 — Pair source and target entries

| Entry | Pair by |
|---|---|
| Clock | Clock name |
| SysConfig-set instance | Instance name (`myEPWM0`). `migrate()` keeps names |
| Code-set instance | Peripheral and file, written `ADCB (app/app_io.c)` |

A source instance with no target pair is left out: Phase 3B 3.10 records it as
`FEATURE-ABSENT`. A target instance with no source pair is `new on target`.

## Step 3 — Record every difference

For each pair:

- Compare these columns: TBCLK, PWM frequency, Dead band, ADC clock (one row per instance),
  Window (one row per SOC, Value `Window SOC<n>`), Requested, Actual, Error %, Requested bit
  rate, Bit rate, CPU timer Period.
- Record each value that differs: source → target and the change to 2 decimals (`+20.00 %`,
  `-16.67 %`). Error % changes are in percentage points (`pp`).
- Copy Source and Target values as the reports show them.
- Don't compare settings (dividers, counts, bit timing): the columns above show their effect.
  The Clocks table covers the clocks.

Also record:

- an instance whose peripheral changed (`myEPWM0`: EPWM1 → EPWM3), as a Changes row with Value
  `Peripheral` and Change % `—`;
- `new on target` instances;
- a NOTE, UNRESOLVED or DECISION line in only one report.

Findings present in both reports (same instance and message) are not migration changes — leave them out, and leave out
lines naming an instance the other report does not name.

## Step 4 — Write `c2000-timing-migration.md`

Create it in the target project directory. Write `|` inside a table cell as `\|`.

```markdown
# C2000 Timing Migration Report

| Field | Value |
|---|---|
| Source | `<project>` — `<device>` |
| Target | `<project>` — `<device>` |
| Changes | `<n>` |

## Clocks
| Clock | Source | Target | Change |
|---|---|---|---|

## Changes
| Instance | Peripheral | Value | Source | Target | Change % | Set by (target) |
|---|---|---|---|---|---|---|

## New on target
<each, or "None">

## Findings in one report only
<each line, with the report it comes from, or "None">
```

`Changes` is the number of Changes rows. `Instance` is the Step 2 name. `Set by (target)` is the
line of the call that sets the value (`ADC_setPrescaler` for ADC clock). `Peripheral` is the hardware peripheral (`EPWM1`). Sort the Changes table by peripheral, then
instance (`EPWM2` before `EPWM10`), then the Step 3 column order.

## Step 5 — Update `<targetProjectDir>/c2000-migration.md`

Append, or replace an existing Phase 4F section in place:

```
## Phase 4F — Timing Migration
Source timing report: <path>
Target timing report: <path>
Timing migration report: <targetProjectDir>/c2000-timing-migration.md
Changes: <n>
TIMING-MIGRATION: <instance> <value>: <source> → <target> (<change %>)
```

with one `TIMING-MIGRATION:` line per row of the Changes table. Do not change the Phase Status
table — the orchestrator does.

---

## Structured result (required — return to orchestrator)

```
Phase 4F result:
Report: <targetProjectDir>/c2000-timing-migration.md
Changes: <n>
Change lines:
  <each, or "None">
```

---

## STOP: Stop here

Your scope ends at the structured result. Do not read `phase-5-report.md` or any other phase
file. Return your structured result to the **orchestrator** (`phase-4-migrate-code.md`).
