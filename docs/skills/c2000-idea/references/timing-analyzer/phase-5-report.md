# Phase 5 — Timing Report

> You are in **Phase 5** of the timing analysis. It turns the recorded calls into frequencies
> and times, and writes the final tables.

### Rules for this phase

- Do compute from the Phase 2 clocks and the Phase 3/4 call arguments only.
- Do use the call that applies last for each setting (Phase 4.3).
- Don't round before the last step. Show clocks and PWM frequencies to 4 significant digits,
  baud and bit rates as whole numbers, error % to 2 decimals and times in ns to 1 decimal. Round half up.

---

## 5.1 Compute

For each instance, take the clock from Phase 2.4. For CAN and LIN, use the clock of the
instance's module (from its base); a CAN module with no bit clock in Phase 2 gives
`UNRESOLVED: <instance> CAN clock`. Apply:

| Peripheral | Value | Formula |
|---|---|---|
| EPWM | Time-base clock | TBCLK = EPWM clock ÷ (clkDiv × hsDiv) |
| EPWM | PWM frequency | Up-down: TBCLK ÷ (2 × period). Up or down: TBCLK ÷ (period + 1). Stop-freeze: none |
| EPWM | Dead band | Delay count × TBCLK period; × ½ with `EPWM_DB_COUNTER_CLOCK_HALF_CYCLE`. Only when a delay-count call exists; otherwise the dead band is not used — leave the cell empty |
| ADC | ADC clock | SYSCLK ÷ a.b |
| ADC | Sample window | `sampleWindow` × SYSCLK period |
| SCI | Baud | BRR = ⌊`lspclkHz` ÷ (baud × 8)⌋ − 1 (integer division, as `SCI_setConfig` does); actual = LSPCLK ÷ ((BRR + 1) × 8); error % against the requested baud. `SCI_setBaud`: BRR = ⌊`lspclkHz` ÷ (baud × 8) − 1 + 0.5⌋ (it rounds) |
| SPI | Bit rate | The requested `bitRate` when `mode` is `SPI_MODE_CONTROLLER` or `SPI_MODE_CONTROLLER_OD`. Otherwise leave it empty and record `NOTE: <instance> SPI peripheral mode — the bus controller sets the bit rate` |
| I2C | Bit rate | The requested `bitRate`. Target mode has no `I2C_initController` call and no row |
| CAN | Bit rate | `CAN_setBitTiming`: CAN clock ÷ ((prescaler + 1 + 64 × prescalerExtension) × (tSeg1 + tSeg2 + 3)). `CAN_setBitRate`: brp = ⌊`clockFreq` ÷ (bitRate × bitTime)⌋, rate = CAN clock ÷ (brp × bitTime) |
| LIN | Baud | LIN clock ÷ ((P + 1 + M ÷ 16) × 16). The call carries no requested baud: leave Requested and Error % empty |
| CPU timer | Period | (periodCount + 1) × (prescaler + 1) × SYSCLK period. Prescaler 0 when not set (TDDR resets to 0) |

A setting no call provides makes the value `UNRESOLVED: <instance> <setting> not set`.

## 5.2 Cross-check

Compare each SysConfig field from Phase 3.3 with the 5.1 value. When they differ by more than
0.1 % of the 5.1 value, record
`NOTE: <instance> SysConfig shows <field> = <value>; board.c programs <value>`, with the 5.1 value
as shown in the tables.
For SCI, add `(SysConfig rounds the baud divider; SCI_setConfig truncates it)`.

## 5.3 Final tables

Append to `c2000-timing.md`. One table per peripheral type that has an instance; leave out the
others.

```markdown
## Clocks

<every Phase 2 clock>

| Clock | Frequency | Source |
|---|---|---|

## EPWM

| Instance | Set by | Clock | clkDiv × hsDiv | TBCLK | Mode | Period | PWM frequency | Dead band rising / falling |
|---|---|---|---|---|---|---|---|---|

## ADC

| Instance | Set by | ADC clock | SOC | Sample window (cycles) | Window |
|---|---|---|---|---|---|

## SCI / LIN

| Instance | Set by | Clock | Requested | Actual | Error % |
|---|---|---|---|---|---|

## SPI / I2C

| Instance | Set by | Clock argument | Requested bit rate |
|---|---|---|---|

## CAN

| Instance | Set by | CAN clock | Bit timing | Bit rate |
|---|---|---|---|---|

## CPU timers

| Timer | Set by | Period count | Prescaler | Period |
|---|---|---|---|---|

## Findings

<every NOTE, UNRESOLVED and DECISION line, or "None">

## Summary

| Item | Value |
|---|---|
| Instances | <n> (EPWM <n>, ADC <n>, SCI <n>, LIN <n>, SPI <n>, I2C <n>, CAN <n>, CPU timer <n>) |
| Set by SysConfig / code | <n> / <n> |
| NOTE / UNRESOLVED | <n> / <n> (every Findings line) |
```

Cell formats:
- `Mode`: `up`, `down`, `up-down` or `stop-freeze`.
- Result cells: the value and its unit (`75.00 MHz`, `15.00 kHz`, `100.0 ns`), not the settings
  behind it. Baud and bit rates are plain numbers.
- `Clock`: the clock and its frequency (`SYSCLK 100.0 MHz`).
- `Clock argument`: a plain number in Hz (`30000000`).
- `Bit timing`: the call's arguments.
- `Error %`: signed, actual − requested (`+0.47`, `-0.47`).
- ADC: one row per SOC, with the SOC number.
- `Instance`: `myEPWM0 (EPWM1)` for SysConfig instances, the peripheral (`ADCB`) for code-only
  ones. NOTE lines use the same form.
- `Set by`: `SysConfig`, or the `<file>:<line>` of each call that applies, comma-separated
  (`app/app_io.c:30, 34`).
- Summary: count instances by peripheral base; an instance any code call changes counts as code;
  modules with only a "not analysed" NOTE are not instances.

Set Phase 5 to COMPLETE in the Phase Status table.

## 5.4 Present

Show the user the Clocks table, the peripheral tables and every finding.

---

**Phase 5 complete.** The timing analysis is finished.
