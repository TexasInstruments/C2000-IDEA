# Timing Calls

Phases 3 and 4 record these driverlib calls, from the generated `board.c` and from the
application code. Record each call's file, line and arguments. Skip function definitions and
declarations, and calls whose name only starts with one of these (e.g.
`EPWM_setRisingEdgeDelayCountShadowLoadMode`).

| Call | Arguments recorded |
|---|---|
| `EPWM_setClockPrescaler(base, clkDiv, hsDiv)` | `EPWM_CLOCK_DIVIDER_<n>`, `EPWM_HSCLOCK_DIVIDER_<n>` |
| `EPWM_setTimeBasePeriod(base, count)` | `count` |
| `EPWM_setTimeBaseCounterMode(base, mode)` | `EPWM_COUNTER_MODE_UP`, `_DOWN`, `_UP_DOWN`, `_STOP_FREEZE` |
| `EPWM_setRisingEdgeDelayCount(base, count)`, `EPWM_setFallingEdgeDelayCount(base, count)` | `count` |
| `EPWM_setDeadBandCounterClock(base, clock)` | `EPWM_DB_COUNTER_CLOCK_FULL_CYCLE` (TBCLK) / `_HALF_CYCLE` (2 × TBCLK) |
| `ADC_setPrescaler(base, div)` | `ADC_CLK_DIV_<a>_<b>` = ÷ a.b |
| `ADC_setupSOC(base, soc, trigger, channel, sampleWindow)` | `soc`, `sampleWindow` (SYSCLK cycles) |
| `SCI_setConfig(base, lspclkHz, baud, config)` | `lspclkHz`, `baud` |
| `SCI_setBaud(base, lspclkHz, baud)` | `lspclkHz`, `baud` |
| `SPI_setConfig(base, lspclkHz, protocol, mode, bitRate, dataWidth)` | `lspclkHz`, `mode`, `bitRate` |
| `SPI_setBaudRate(base, lspclkHz, bitRate)` | `lspclkHz`, `bitRate` |
| `I2C_initController(base, sysclkHz, bitRate, dutyCycle)`, `I2C_initControllerModuleFrequency(base, sysclkHz, bitRate, dutyCycle, moduleFrequency)` | `sysclkHz`, `bitRate` |
| `CAN_setBitRate(base, clockFreq, bitRate, bitTime)` | `clockFreq`, `bitRate`, `bitTime` |
| `CAN_setBitTiming(base, prescaler, prescalerExtension, tSeg1, tSeg2, sjw)` | all |
| `LIN_setBaudRatePrescaler(base, prescaler, divider)` | `prescaler` (P), `divider` (M) |
| `CPUTimer_setPeriod(base, periodCount)` | `periodCount` |
| `CPUTimer_setPreScaler(base, prescaler)` | `prescaler` |

Record any `HRPWM_setTimeBasePeriod` call as
`NOTE: <instance> HRPWM period set at <file>:<line> — not analysed`.

## Instance

The `base` argument names the instance: `myEPWM0_BASE` → `myEPWM0`; `EPWM1_BASE` → `EPWM1`;
`CPUTIMER0_BASE` → `CPUTIMER0`. Resolve a `my<Name>_BASE` macro through the Phase 3.1 `board.h`
to its peripheral (`#define myEPWM0_BASE EPWM1_BASE`) and record both as `myEPWM0 (EPWM1)`.
A call spread over several lines is recorded at the line where its name is.

## Resolve arguments

Resolve each argument until it is a number or an enum name above:

| Argument | Resolve through |
|---|---|
| Literal (`2500`, `15U`) | — |
| `my<Name>_…` (e.g. `mySCI0_BAUDRATE`) | The Phase 3.1 `board.h` |
| `DEVICE_SYSCLK_FREQ`, `DEVICE_LSPCLK_FREQ` | The `device.h` the project compiles (with SysConfig MCP live, the generated `device.h` via `readGeneratedArtifact`; else a `device.h` in `sysConfigOutputLocation` or the project; else `<c2000ware_path>/device_support/<family>/common/include/device.h`), in the `#ifdef` branch the predefined symbols select. Follow its `#include`s (the generated `device.h` takes them from `clocktree.h`) |
| A `#define` in the same file or an included project header | That `#define` |
| An expression of the above (`DEVICE_SYSCLK_FREQ / 1000U`) | Evaluate it |

If an argument cannot be resolved (a variable, a function result, a value set at run time),
record `UNRESOLVED: <file>:<line> <call>(<argument>)` — never guess.
