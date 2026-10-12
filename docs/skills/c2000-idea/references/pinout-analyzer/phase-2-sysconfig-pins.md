# Phase 2 — SysConfig Pins

> You are in **Phase 2** of the pinout analysis. Skip this phase when Phase 1 recorded
> `SysConfig file: none` — set its status to `SKIPPED — no .syscfg` and return to `pinout-analyzer.md`.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user.** Do not guess, retry blindly, or skip the step.

### Rules for this phase

- Read only. Never call `save`, `changeConfiguration`, `addModuleInstances` or
  `removeModuleInstances`.
- Close the file before leaving this phase.

---

## 2.1 Open the configuration

If the CCS SysConfig MCP is not available (Phase 0), go to 2.6.

Call `openFile` with the `.syscfg` path from Phase 1.

## 2.2 Errors

Call `getErrorsAndWarnings`. Any error blocks the generated files: `readGeneratedArtifact`
then fails. If there are errors, record them, read the pin table from 2.6 instead of 2.3, and
continue with 2.4 and 2.5 — instance settings stay readable.

## 2.3 Pin table (`pinmux.csv`)

Call `listGeneratedArtifacts`, take the path ending in `pinmux.csv`, and read it with
`readGeneratedArtifact`.

Line 1 is a title. Line 2 is the header:
`Pin,Name, Selected Mode, Used By,0,1,…,15`. Every following line is one package pin.

Record every line whose `Selected Mode` is not empty:

| `Used By` | Meaning | Record |
|---|---|---|
| A module instance name (e.g. `mySPI0`) | Pin assigned to that instance | Pin, GPIO (column `0`), signal (`Selected Mode`), instance |
| An analog pin-mux instance with `Selected Mode` like `B5_GPIO20` | AGPIO pin switched to analog | Pin, GPIO, analog function, instance |
| Same as `Name` (e.g. `XRSn`, `TCK`, `TMS`) | Fixed-function pin | Pin, function |
| Power or ground (`VDD*`, `VSS*`, `VREG*`) or empty | Supply pin | Skip |

The table does not mark the crystal pins X1/X2 as used; Phase 4 adds them from the clock
settings.

An analog pin-mux instance (`/driverlib/analog.js`) whose `useCase` is `ALL` — the default —
puts every AGPIO pin in analog mode, so the table lists all of them. Record
`NOTE: <instance> useCase ALL puts every AGPIO pin in analog mode`.

## 2.3a Mux mode and pin settings (`board.h`, `board.c`)

Read the generated `board.h` and `board.c` the same way as `pinmux.csv` (or from
`sysConfigOutputLocation` when 2.6 applies).

- **Mux mode:** `board.h` defines `<instance>_<signal>_GPIO <n>` and
  `<instance>_<signal>_PIN_CONFIG GPIO_<n>_<SIGNAL>`. Look up `GPIO_<n>_<SIGNAL>` in
  `pin_map.h`; the low byte of its value is the mux mode (`0x00061607` → mode 7).
  `Selected Mode` in `pinmux.csv` can use newer SPI names (`PICO`, `POCI`, `PTE`) than the
  pin map and pinout file (`SIMO`, `SOMI`, `STE`); take the signal name from the macro.
- **Pin settings:** in `board.c`, resolve each call's pin argument through `board.h` and record:

| Call | Records |
|---|---|
| `GPIO_setPadConfig(pin, type)` | Pad: `GPIO_PIN_TYPE_STD`, `_PULLUP`, `_OD`, `_INVERT` (OR-ed) |
| `GPIO_setQualificationMode(pin, mode)` | Input qualification |
| `GPIO_setDirectionMode(pin, dir)` | `GPIO_DIR_MODE_IN` / `GPIO_DIR_MODE_OUT` |
| `GPIO_setAnalogMode(pin, GPIO_ANALOG_ENABLED)` | AGPIO pin in analog mode |
| `GPIO_setControllerCore(pin, core)` | Owning core |
| `GPIO_setInterruptPin(pin, xint)` | External interrupt input |
| `XBAR_setInputPin(…, input, pin)` | Input X-BAR source |
| `ADC_setVREF(base, mode, refVoltage)` | ADC reference: `ADC_REFERENCE_INTERNAL` / `_EXTERNAL`, voltage |
| `ASysCtl_setAnalogReferenceInternal`, `…External`, `…VDDA` | Analog reference mode and the modules it applies to |

## 2.4 ADC channels

Call `getModuleInstances` with `moduleIds: ["/driverlib/adc.js"]`. For each instance, call
`getInstanceConfiguration` and record `adcBase` and `enabledSOCs`. For each enabled SOC `<n>`
record `soc<n>Channel`, `soc<n>Trigger`, `soc<n>ModuleChannelName` and `soc<n>DevicePinName`.

`soc<n>DevicePinName` takes one of three forms:

| Form | Example | Meaning |
|---|---|---|
| `<pin>: <names>` | `23: A0/ B15/ C15/ DACA_OUT` | Package pin. Differential channels list two, separated by `, `. |
| A signal name without a pin number | `TempSensor`, `VREFLO`, `PGA1_OUT_INT` | Internal connection — no package pin |
| `No Device Pin Found` | | The channel is not bonded on this package — record `FLAG: <base> <channel> has no pin on <package>` |

## 2.5 Other analog pins

For every instance of these modules, call `getInstanceConfiguration` and record every
configurable whose id ends in `DevicePinName` or `PinInfo` (same `<pin>: <names>` form):

| Module | Pin fields |
|---|---|
| `/driverlib/cmpss.js`, `/driverlib/cmpss_lite.js` | `asysCMPHPMXSELPinInfo`, `asysCMPHNMXSELPinInfo`, `asysCMPLPMXSELPinInfo`, `asysCMPLNMXSELPinInfo` |
| `/driverlib/dac.js` | `dacDevicePinName` |
| `/driverlib/pga.js` | `PGA_INPinInfo`, `PGA_OUTPinInfo`, `PGA_GNDPinInfo`, `PGA_OFPinInfo` |

Record the module base (`cmpssBase`, `dacBase`, …) with each pin.

## 2.6 Pin table without the MCP

Use this when the SysConfig MCP is not available or 2.2 found errors. Read
`<sysConfigOutputLocation>/pinmux.csv` (written by the last build) and apply 2.3. Record:
`Pin table: from last build (<file modification time>) — may not reflect the current .syscfg`.
If the file does not exist, record `Pin table: not available` and rely on Phase 3.

## 2.7 Clock source

Call `getModuleInstances`. If it does not list `/driverlib/device_support.js`, the clock tree
is not used and its muxes read defaults — record `Clock source: from code (Phase 4)` and go
to 2.8.

Otherwise call `getInstanceConfiguration` for the clock-tree muxes `OSCCLKSRCSEL` and
`XTAL_OR_X1` (`moduleId: "/driverlib/clocktree/mux.js"`) and record each `inputSelect`:

| `OSCCLKSRCSEL` | `XTAL_OR_X1` | External clock pins |
|---|---|---|
| `X1_XTAL` | `XTAL` | Crystal on X1 and X2 |
| `X1_XTAL` | `X1` | Single-ended clock on X1 |
| any other value | | None (internal oscillator) |

Phase 4 maps these to package pins.

## 2.8 Close

Call `closeFile`.

---

**Update `c2000-pinout.md`:** append

```markdown
## Phase 2 — SysConfig pins
Pin table: <generated | from last build (<time>) | not available>
SysConfig errors: <none | list>

| Pin | GPIO | Mode | Signal | Used by | Direction | Pad | Qualification | Core |
|---|---|---|---|---|---|---|---|---|

| ADC | SOC | Channel | Trigger | Pin |
|---|---|---|---|---|

| Module | Base | Field | Pin |
|---|---|---|---|

ADC reference: <per module: internal | external | VDDA, voltage>
Clock source: <internal | crystal on X1/X2 | single-ended on X1 | from code (Phase 4)>
```

followed by any `FLAG:` lines, and set Phase 2 to COMPLETE in the Phase Status table.
Present a short summary (pins, ADC channels, analog pins, flags), return to `pinout-analyzer.md` and
proceed to Phase 3.
