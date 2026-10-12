# Phase 4 — System Pins

> You are in **Phase 4** of the pinout analysis. It adds the pins the application does not
> configure through the GPIO mux but still depends on: reset, external clock, clock output,
> JTAG, boot mode and the analog references.

### Rules for this phase

- Do take every pin from the pinout file, by the tokens in its `Name` column.
- Do flag a system pin that Phases 2–3 also use for another function.

---

## 4.1 Reset

Find the row whose `Name` contains `XRSn` (or `XRSN`). Record it as `Reset (XRSn)`.

## 4.2 JTAG

Find the rows whose `Name` contains `TCK`, `TMS`, `TDI`, `TDO`, and `TRSTn` (or `TRSTN`) where
present. Record each.

Where the `Name` shares the pin with a GPIO (e.g. `GPIO35/TDI`, `GPIO37/TDO`): if Phases 2–3
use that GPIO with a signal other than `TDI`/`TDO`, record
`FLAG: GPIO<n> (pin <pin>) is JTAG <TDI|TDO> and is used as <signal> — the debugger loses that pin`.

## 4.3 External clock

Determine the oscillator source:

- **Phase 2 read the clock tree:** use its clock source.
- **Otherwise** (no `.syscfg`, or Phase 2 recorded `from code`): resolve the oscillator in the
  `SysCtl_setClock(...)` call of the compiled `device.c` — through `DEVICE_SETCLOCK_CFG` in
  `device.h`, in the branch the predefined symbols select, or the first argument where the
  call lists the settings directly. Also record calls to `SysCtl_selectXTAL()` and
  `SysCtl_selectXTALSingleEnded()` in any scanned file.

| Oscillator | Pins |
|---|---|
| `SYSCTL_OSCSRC_XTAL`, `SysCtl_selectXTAL()` | Crystal on X1 and X2 |
| `SYSCTL_OSCSRC_XTAL_SE`, `SysCtl_selectXTALSingleEnded()` | Single-ended clock on X1 |
| Internal (`SYSCTL_OSCSRC_OSC2`, `SYSCTL_OSCSRC_OSC1`, `SYSCTL_OSCSRC_SYSOSCDIV4`, …) | None |

Find the rows whose `Name` contains `X1` and `X2` (alone, or as `GPIO19/ X1`, `GPIO19_X1`).
Record the pins the oscillator uses. If such a row's GPIO is also used by Phases 2–3, record
`FLAG: GPIO<n> (pin <pin>) is the crystal pin <X1|X2> and is also used as <signal>`.

## 4.4 Clock output

If Phases 2–3 recorded the signal `XCLKOUT` on a pin, record that pin and the source from
`SysCtl_selectClockOutSource(SYSCTL_CLOCKOUT_<source>)` where the code calls it.

## 4.5 Boot-mode select pins

If the TI ASM MCP is live, call `search_trm_keywords` with `device` = the device family and
`query: "default boot mode select pin"`. The result names the default pins, e.g.
`GPIO24 (Default boot mode select pin 1)`. Map each GPIO to its package pin. Record them as
`Boot mode select (default)` — OTP settings can change them.

If a boot pin is driven as an output by the application, record
`NOTE: GPIO<n> (pin <pin>) is a default boot-mode select pin and is driven as an output`.
If the TI ASM MCP is not live, record `Boot-mode select pins: not determined`.

## 4.6 Analog references

When Phases 2–3 recorded any ADC channel, find the rows whose `Name` contains `VREFHI` or
`VREFLO` (including per-module forms such as `VREFHIA`, `VREFLOB`) and record them. Record the
reference mode from the Phase 2 `ADC reference` record and from calls to
`ASysCtl_setAnalogReferenceInternal`, `ASysCtl_setAnalogReferenceExternal`,
`ASysCtl_setAnalogReferenceVDDA` or `ADC_setVREF` in the Phase 3 files.

Some small packages bond no `VREFHI`/`VREFLO` pin (e.g. F280013x and F280015x 32RHB). Record
`VREFHI / VREFLO: not bonded on <package>`; if the code selects an external reference, record
`FLAG: external reference selected but <package> has no VREFHI pin`.

---

**Update `c2000-pinout.md`:** append

```markdown
## Phase 4 — System pins

| Function | Pin | GPIO | Notes |
|---|---|---|---|
| Reset (XRSn) | | | |
| JTAG TCK / TMS / TDI / TDO / TRSTn | | | |
| External clock X1 / X2 | | | <crystal | single-ended | not used> |
| Clock output (XCLKOUT) | | | <source> |
| Boot mode select (default) | | | |
| VREFHI / VREFLO | | | <internal | external | VDDA> |
```

followed by every `FLAG:` and `NOTE:` line, and set Phase 4 to COMPLETE in the Phase Status
table. Present a short summary, return to `pinout-analyzer.md` and proceed to Phase 5.
