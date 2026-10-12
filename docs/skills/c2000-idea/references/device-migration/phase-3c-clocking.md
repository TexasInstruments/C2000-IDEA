# Phase 3C — Clock Configuration

> You are executing **Phase 3C** of the SysConfig migration.
> Phase 3B is complete: the target `.syscfg` is open and migrated.
> Your scope: run the target CPU at its maximum frequency and make every downstream clock
> the application uses match the source.
> **Do not read phase-3d or any other phase file yet.**

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess, retry blindly, or skip the step.

---

## Rules for Phase 3C

- Take every frequency from `traceClockSignal` (`toPin: "out"`, first entry of `signalPath`).
- Change clocks only with `changeConfiguration`, using values from the `choices` that
  `getInstanceConfiguration` returns.
- Multi-core targets name the system clock `CPU1_SYSCLK`; use it wherever this file says SYSCLK.
- Do not call `save` or `closeFile`.
- Ask the user only the question in 3C.2.

---

## 3C.1 Read the source clocks

Read `## Source clock configuration` from `c2000-migration.md` (recorded in Phase 2, step 2.11).

## 3C.2 Select the target oscillator

- **Source ran from an internal oscillator:** keep `inputSelect` of `OSCCLKSRCSEL` on an
  internal choice (not `X1_XTAL`).
- **Source ran from an external clock:** ask the user:
  > *"The source ran from <a crystal on XTAL | an oscillator on X1> at <f> MHz. What external
  > clock does the target board have, and at what frequency? Reply 'internal' to use the
  > target's internal oscillator."*

  Set `inputSelect` of `XTAL_OR_X1` to `XTAL` or `X1`, that pin's `XTAL_Freq`, and
  `inputSelect` of `OSCCLKSRCSEL` to `X1_XTAL`.

`traceClockSignal` on `OSCCLK` must report the selected frequency.

## 3C.3 Run the CPU at the target maximum

The target's C2000Ware `device.h` gives the maximum-speed PLL settings and SYSCLK, in the
oscillator branch matching 3C.2, or its only branch:
`<c2000ware_path>/device_support/<target-device>/common/include/device.h`

Apply its PLL multiplier and dividers. If the oscillator frequency differs from the one in
`device.h`, choose values from `choices` that give the same SYSCLK. SYSCLK must equal the
`device.h` value.

## 3C.4 Match the downstream clocks

For each clock in the source record, follow `inPins` back from the target's named clock
(`getClockTreeInstances`) to its divider or source mux, and set it so `traceClockSignal`
reports the source frequency.

- No exact match in `choices`: use the closest value that produces no error and record
  `REVIEW-REQUIRED: clock <name> — source <f> MHz, target <g> MHz`.
- No divider on the target (the clock runs at SYSCLK): record
  `REVIEW-REQUIRED: clock <name> runs at SYSCLK — source <f> MHz, target <g> MHz`.

Record these only for clocks whose peripherals the application uses.

## 3C.5 Find code that sets or depends on clock values

Search the application files copied in Phase 2 (step 2.7) and record `REVIEW-REQUIRED` for:

1. Clocks set outside SysConfig — `SysCtl_setClock`, `SysCtl_setAuxClock`,
   `SysCtl_setLowSpeedClock`, `SysCtl_setEPWMClockDivider`, `SysCtl_setMCANClk`,
   `CAN_selectClockSource`, `SysCtl_setCLBClk`, `SysCtl_setCLBClkDivider`:
   `REVIEW-REQUIRED: <file>:<line> sets a clock outside SysConfig`
2. A number passed as the clock argument of `SCI_setConfig`, `SPI_setConfig`,
   `I2C_initController` or `CAN_setBitRate` instead of `DEVICE_SYSCLK_FREQ` /
   `DEVICE_LSPCLK_FREQ`: `REVIEW-REQUIRED: <file>:<line> hardcoded clock <value>`
3. Counts in a clock whose frequency changed in 3C.3 or 3C.4 — `CPUTimer_setPeriod`,
   `EPWM_setTimeBasePeriod`, `EPWM_setClockPrescaler`, `ECAP_setAPWMPeriod`,
   `ADC_setPrescaler`, `CAN_setBitTiming`, `LIN_setBaudRatePrescaler`,
   `FSI_performTxInitialization`:
   `REVIEW-REQUIRED: <file>:<line> <api> counts at <clock> — source <f> MHz, target <g> MHz`

## 3C.6 Error gate

Call `getErrorsAndWarnings`. No error may have a `moduleId` starting with
`/driverlib/clocktree/`. Resolve any through 3C.3 and 3C.4 before continuing.

## Phase 3C complete — hand off

Append to `c2000-migration.md`:
```
## Phase 3C — Target clock configuration
Oscillator: <source> → <target>
| Clock | Source | Target | Status |
|---|---|---|---|
| SYSCLK | <f> MHz | <g> MHz | MAX |
| <clock> | <f> MHz | <g> MHz | MATCHED / REVIEW-REQUIRED |
```
followed by the `REVIEW-REQUIRED` lines.

Read `phase-3d-linker.md` and proceed.
