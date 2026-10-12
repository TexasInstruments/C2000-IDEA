# Phase 3 — Code Pins

> You are in **Phase 3** of the pinout analysis. It runs for every project, with or without
> SysConfig: the C sources can configure pins SysConfig never sees, or change them at run time.

### Rules for this phase

- Do resolve every pin argument to a number before recording it. Record what cannot be
  resolved as `UNRESOLVED: <file>:<line> <call>(<argument>)` — never guess.
- Do take mux modes from the `pin_map.h` macro value and signal names from the pinout file.
- Don't edit any file.

---

## 3.1 Files to scan

1. Every `.c` and `.h` file under the project `location`, except files under
   `buildDirectoryLocation` and `sysConfigOutputLocation`.
2. The `device.c` the project compiles — it configures pins too. In order of precedence:
   a `device.c` in the project, the generated `<sysConfigOutputLocation>/device.c`, or
   `<c2000ware_path>/device_support/<family>/common/source/device.c`.

Skip comments, `#if 0` blocks and `#if`/`#ifdef` branches that the predefined symbols from
Phase 1 (plus `#define`s seen earlier in the same file) exclude.

## 3.2 Pin calls

Record every call below with its file and line.

| Call | Pin argument | Records |
|---|---|---|
| `GPIO_setPinConfig(cfg)` | `cfg` = `GPIO_<n>_<SIGNAL>` | GPIO `<n>`, mux mode, signal |
| `GPIO_setPadConfig(pin, type)` | 1st | Pad: `GPIO_PIN_TYPE_STD`, `_PULLUP`, `_OD`, `_INVERT` (OR-ed) |
| `GPIO_setDirectionMode(pin, dir)` | 1st | `GPIO_DIR_MODE_IN` / `GPIO_DIR_MODE_OUT` |
| `GPIO_setQualificationMode(pin, mode)` | 1st | Input qualification |
| `GPIO_setAnalogMode(pin, mode)` | 1st | `GPIO_ANALOG_ENABLED` = analog use; `_DISABLED` = digital use |
| `GPIO_setControllerCore(pin, core)`, `GPIO_setMasterCore(pin, core)` | 1st | Owning core (`GPIO_setMasterCore` is an alias) |
| `GPIO_writePin`, `GPIO_togglePin` | 1st | Driven as digital output |
| `GPIO_readPin` | 1st | Read as digital input |
| `GPIO_setInterruptPin(pin, xint)` | 1st | External interrupt `xint` |
| `XBAR_setInputPin(base, input, pin)` or `XBAR_setInputPin(input, pin)` | last | Input X-BAR `input` |
| `GPIO_writePortData`, `GPIO_setPortPins`, `GPIO_clearPortPins`, `GPIO_togglePortPins`, `GPIO_readPortData` | port + mask | Port `GPIO_PORT_<X>`: bit `<b>` is GPIO `32 × <port index> + <b>` (A = 0, B = 1, …) |
| `ADC_setupSOC(base, soc, trigger, channel, window)` | `base`, `channel` | ADC module, SOC, trigger, channel |

## 3.3 Resolve arguments

Resolve each argument until it is a number or a `GPIO_<n>_<SIGNAL>` / `ADC_CH_ADCIN…` /
`ADC<X>_BASE` name:

| Argument | Resolve through |
|---|---|
| Literal (`20U`) | — |
| `DEVICE_GPIO_PIN_*`, `DEVICE_GPIO_CFG_*` | `device.h`, in the `#ifdef` branch the predefined symbols select (e.g. `_LAUNCHXL_F28P55X`; otherwise the `#else` controlCARD branch) |
| `my<Name>…` (e.g. `myGPIO0`, `myBoardLED0_GPIO`, `my<inst>_<sig>_PIN_CONFIG`) | SysConfig-generated `board.h` in `sysConfigOutputLocation` |
| Other macro | The `#define` in the project sources or headers it includes |
| Function parameter (`pin`, `channel`) | Each call site of that function; record one entry per resolved value |
| Loop variable with constant bounds (`for (pin = 24; pin <= 31; pin++)`) | One entry per value in the range |
| Variable or table entry | Its assignments or initializer; if not constant, `UNRESOLVED` |

## 3.4 Map to package pins

**Digital pins.** For `GPIO_<n>_<SIGNAL>`, find the macro in `pin_map.h`; the low byte of its
value is the mux mode (`GPIO_0_I2CA_SDA 0x00060006U` → mode 6). In the pinout file, find the
row whose column `0` is `GPIO<n>`; its `Pin` is the package pin and column `<mode>` names the
signal. If that cell is empty, use `<SIGNAL>` from the macro name.

For a bare pin number `<n>`, find the row whose column `0` is `GPIO<n>` or `AIO<n>`.

No row for `GPIO<n>` / `AIO<n>` → `FLAG: GPIO<n> is not bonded on <package> (<file>:<line>)`.

**ADC channels.** `ADC<X>_BASE` → module `<X>`. `ADC_CH_ADCIN<n>` → channel `<n>`.
`ADC_CH_ADCIN<n>_ADCIN<m>` is a differential pair: map both `<n>` and `<m>`.
Find every row whose `Name` contains one of these `/`-separated tokens: `<X><n>` (e.g. `A2`),
`ADCIN<X><n>` (e.g. `ADCINA2`), or `ADCIN<n>` (a channel shared by all ADC modules, e.g.
`ADCIN14`). Every matching row's `Pin` is a pin for that channel.

No matching row → the channel is internal or not bonded on this package. Record
`FLAG: ADC<X> channel <n> has no pin on <package> (<file>:<line>)`.

---

**Update `c2000-pinout.md`:** append

```markdown
## Phase 3 — Code pins

| Pin | GPIO | Mode | Signal | Direction | Pad | Qualification | Analog | Core | Interrupt / X-BAR | Source |
|---|---|---|---|---|---|---|---|---|---|---|

| ADC | SOC | Channel | Trigger | Pin | Source |
|---|---|---|---|---|---|
```

followed by every `FLAG:` and `UNRESOLVED:` line, and set Phase 3 to COMPLETE in the Phase
Status table. Present a short summary (pins, ADC channels, flags, unresolved), return to
`pinout-analyzer.md` and proceed to Phase 4.
