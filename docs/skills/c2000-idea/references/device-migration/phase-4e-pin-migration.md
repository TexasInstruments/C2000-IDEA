# Phase 4E — Pin Migration Check

> You are executing Phase 4E for one target project.
> The source and target projects have each been analysed by the pinout workflow; their
> reports are in your briefing. **Do not re-run the pinout analysis. Do not look ahead.**

---

## Your assignment

Compare the source and target pin reports function by function, rate every change for the
PCB goal, and write `c2000-pin-migration.md` in the target project directory. Report only —
never change either project.

**Stop and report to the orchestrator** if either pin report is missing or its Phase 5 is not
COMPLETE.

---

## Briefing fields (confirm before starting)

| Field | Value |
|-------|-------|
| Target project directory | `<absolute path>` |
| Source pin report | `<sourceProjectDir>/c2000-pinout.md` |
| Target pin report | `<targetProjectDir>/c2000-pinout.md` |
| Source device / package | `<e.g. F28003x / 100PZ>` |
| Target device / package | `<e.g. F28P55x / 128PDT>` |
| PCB goal | `same PCB` / `new board` |

---

## Step 1 — Read both reports

Read the Phase 2–5 sections of both reports: the pin map, ADC usage, other analog pins,
system pins, `ADC reference`, `Clock source` and the findings.

## Step 2 — Package

If the packages differ and the PCB goal is `same PCB`, record
`BLOCKER: package changes from <source package> to <target package> — the same PCB cannot be used`.

## Step 3 — Pair source and target entries

Pair by function, never by package pin number:

| Entry | Pair by |
|---|---|
| SysConfig signal | Instance name and signal (`myEPWM0` / `EPWMA`). `migrate()` keeps instance names. |
| Signal configured in code | Signal name (`EPWM1_A`, `SCIA_TX`) |
| Digital I/O in code (`GPIO_writePin`, `GPIO_readPin`, …) | GPIO number and source file |
| ADC conversion | ADC module and SOC (SysConfig instance and SOC when present) |
| Pin in analog mode (analog pin-mux instance) | The ADC channels in the pin's `Name` (`A2`, `B6`, …), not its GPIO/AIO number |
| CMPSS / DAC / PGA pin | Module base and field (`asysCMPHPMXSELPinInfo`, `dacDevicePinName`, …) |
| System pin | Function: XRSn, TCK, TMS, TDI, TDO, X1, X2, VREFHI, VREFLO, boot-mode select 0/1 |

A source entry with no target pair is `missing on target`. A target entry with no source pair
is `new on target`.

## Step 4 — Rate each pair

| Change | `same PCB` | `new board` |
|---|---|---|
| Source signal, ADC channel or analog function is missing on target, or its target pin is `not bonded` | BLOCKER | BLOCKER |
| Same function on a different package pin | BOARD CHANGE | INFO |
| ADC conversion moved to a different module or channel | REVIEW | REVIEW |
| X1/X2 or VREFHI/VREFLO on different package pins | BOARD CHANGE | INFO |
| Oscillator type changed (crystal, single-ended, internal) | BOARD CHANGE | REVIEW |
| ADC reference mode or voltage changed | REVIEW | REVIEW |
| The application drives a target default boot-mode select pin as an output | REVIEW | REVIEW |
| Same pin, different GPIO number or mux mode | INFO | INFO |
| `new on target` | REVIEW | INFO |
| A CONFLICT, FLAG or UNRESOLVED line in only one report | REVIEW | REVIEW |

Findings present in both reports are not migration changes — leave them out.

## Step 5 — Write `c2000-pin-migration.md`

Create it in the target project directory. Write `|` inside a table cell as `\|`.

```markdown
# C2000 Pin Migration Report

| Field | Value |
|---|---|
| Source | `<project>` — `<device>` `<package>` |
| Target | `<project>` — `<device>` `<package>` |
| PCB goal | `<same PCB | new board>` |
| BLOCKER / BOARD CHANGE / REVIEW / INFO | `<n>` / `<n>` / `<n>` / `<n>` |

## Blockers
<every BLOCKER line, or "None">

## Digital pins
| Function | Source pin / GPIO | Target pin / GPIO | Rating | Note |
|---|---|---|---|---|

## ADC
| ADC / SOC | Source channel → pin | Target channel → pin | Rating | Note |
|---|---|---|---|---|

## Other analog pins (CMPSS, DAC, PGA)
| Module / field | Source pin | Target pin | Rating | Note |
|---|---|---|---|---|

## Clock and references
| Item | Source | Target | Rating |
|---|---|---|---|

## System pins
| Function | Source pin / GPIO | Target pin / GPIO | Rating |
|---|---|---|---|

## Findings in one report only
<each line, with the report it comes from and its rating>
```

Sort each table by rating (BLOCKER first), then by function.

## Step 6 — Update c2000-migration.md

Append:

```
## Phase 4E — Pin Migration
Source pin report: <path>
Target pin report: <path>
Pin migration report: <targetProjectDir>/c2000-pin-migration.md
BLOCKER: <n> | BOARD CHANGE: <n> | REVIEW: <n> | INFO: <n>
PIN-MIGRATION: <rating> — <function>: <source> → <target> — <note>
```

with one `PIN-MIGRATION:` line per BLOCKER, BOARD CHANGE and REVIEW. Do not change the Phase
Status table — the orchestrator does.

---

## Structured result (required — return to orchestrator)

```
Phase 4E result:
Report: <targetProjectDir>/c2000-pin-migration.md
Package: <source> → <target> (<same | different>)
PCB goal: <same PCB | new board>
BLOCKER: <n> | BOARD CHANGE: <n> | REVIEW: <n> | INFO: <n>
BLOCKER lines:
  <each, or "None">
```

---

## STOP: Stop here

Your scope ends at the structured result. Do not read `phase-5-report.md` or any other phase
file. Return your structured result to the **orchestrator** (`phase-4-migrate-code.md`).
