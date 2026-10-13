# Phase 5 — Pin Report

> You are in **Phase 5**, the final phase of the pinout analysis. Re-read `c2000-pinout.md`
> for the Phase 1–4 results before starting.

---

## 5.1 Merge

Build one entry per package pin from Phases 2, 3 and 4. For each pin keep every function
recorded on it and where it came from: `SysConfig`, `code (<file>:<line>)` or `system`.

The same setting found in both SysConfig and code is one entry with source `SysConfig + code`.

## 5.2 Checks

Record each finding with its pin, GPIO and sources:

| Finding | Condition |
|---|---|
| `CONFLICT: mux` | One GPIO has two different mux signals (SysConfig vs code, or two code sites). Code may reconfigure the pin at run time — name both sites. |
| `CONFLICT: shared pin` | A pin bonds two GPIOs (two rows with the same `Pin`) and both are used. |
| `CONFLICT: analog/digital` | An AGPIO is in analog mode (`GPIO_ANALOG_ENABLED` or a SysConfig analog pin-mux entry) and also has a digital mux signal or is driven/read as digital. |
| `NOTE: analog mode` | The only digital setting on an AGPIO is `GPIO_setAnalogMode(…, GPIO_ANALOG_DISABLED)` and SysConfig's `Board_init()` enables analog mode after it (`Board_init()` is called after `Device_init()`). Record one line listing the GPIOs: their final mode is analog. |
| `CONFLICT: core` | One GPIO is assigned to two cores. |
| `FLAG` | Carried from Phases 2–4: not bonded on the package, system-pin overlap, ADC channel without a pin. |
| `UNRESOLVED` | Carried from Phases 1–3. |
| `NOTE` | Carried from Phases 1, 2 and 4. |

An analog pin shared by several ADC modules (e.g. `A2/ B6/ C9`) and sampled by more than one
of them is not a conflict; list each module and channel.

## 5.3 Write the report

Append to `c2000-pinout.md`:

```markdown
## Phase 5 — Pin report

### Summary
| Item | Count |
|---|---|
| Package pins used | <n> of <package pin count> |
| Digital (GPIO) pins | <n> |
| Analog pins | <n> |
| System pins | <n> |
| ADC modules used | <ADCA, ADCC, …> |
| ADC channels used | <n> |
| Conflicts / flags / unresolved | <n> / <n> / <n> |

### Pin map (by package pin)
| Pin | Pinout name | Function used | Type | GPIO | Mode | Direction | Pad | Qualification | Core | Used by | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|

### ADC usage
| ADC | Channel | Pin | SOC | Trigger | Source |
|---|---|---|---|---|---|

### Other analog pins (CMPSS, DAC, PGA)
| Module | Function | Pin | Source |
|---|---|---|---|

### System pins
<Phase 4 table>

### Free GPIO pins on this package
<free GPIO / AIO rows, as defined below: pin and GPIO>

### Findings
<every CONFLICT, FLAG, UNRESOLVED and NOTE line>
```

`Type` is `digital`, `analog` or `system`. `Pinout name` is the pin's `Name` from the pinout
file. Sort the pin map by package pin. Write `|` inside a table cell as `\|`.

A pin is used when it carries a mux signal, an ADC channel, an analog function, an analog-mode
setting from SysConfig, or a system function. System pins are XRSn, the JTAG pins, the X1/X2
pins the oscillator uses, the default boot-mode select pins and the VREFHI/VREFLO pins.
Free GPIO pins are the `GPIO`/`AIO` rows not used by anything else; list a JTAG or boot-mode
GPIO among them with its system role (e.g. `78: GPIO35 (JTAG TDI)`). Crystal pins in use are
never free.

Set Phase 5 to COMPLETE in the Phase Status table.

## 5.4 Present

Show the user the summary, the ADC usage table and every finding, and give the path to
`c2000-pinout.md` for the full pin map. Ask whether any finding needs a closer look.

**Phase 5 complete.** The pinout analysis is finished.
