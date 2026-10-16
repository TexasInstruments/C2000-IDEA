# Phase 2 — Clocks

> You are in **Phase 2** of the timing analysis. It records the frequency of every clock the
> peripherals in 2.4 run from.

### Rules for this phase

- Do take every frequency from the clock tree, the generated `clocktree.h` or `device.h`, and
  record which.
- Don't change any clock setting.

---

## 2.1 Clock tree (project has a `.syscfg` and SysConfig MCP is live)

Call `openFile` on the project's `.syscfg`, then `getClockTreeInstances`. For each clock below
that the tree names, call `traceClockSignal` (`toPin: "out"`) and take the frequency from the
first entry of `signalPath`. Multi-core devices name the system clock `CPU1_SYSCLK`; use it
wherever this file says SYSCLK.

| Clock | Name in the tree |
|---|---|
| SYSCLK | `SYSCLK` / `CPU1_SYSCLK` |
| LSPCLK | `LSPCLK` |
| EPWMCLK | `EPWMCLK` |
| CAN bit clock | `CANABITCLK`, `CANBBITCLK` |
| LIN clock | `LINACLK`, `LINBCLK` |

Not every device has every clock; record the ones the tree names. MCAN clocks (`MCAN…`) are
not recorded: this workflow covers DCAN. Call `closeFile`.

## 2.2 No clock tree

When the project has no `.syscfg`, or SysConfig MCP is not available:

1. `<sysConfigOutputLocation>/clocktree.h`, when present: its comment lines give each clock
   (`// PLLSYSCLK = 120.00 MHz`, `// LSPCLK = 30.00 MHz`).
2. Otherwise `DEVICE_SYSCLK_FREQ` and `DEVICE_LSPCLK_FREQ` from the `device.h` the project
   compiles (a `device.h` in the project or in `sysConfigOutputLocation`, else
   `<c2000ware_path>/device_support/<family>/common/include/device.h`),
   in the `#ifdef` branch the predefined symbols select. Follow its `#include`s.

## 2.3 Clocks changed in code

Search the application files (Phase 1.6) for:
`SysCtl_setClock`, `SysCtl_setLowSpeedClock`, `SysCtl_setEPWMClockDivider`,
`CAN_selectClockSource`, `SysCtl_setLINAClockDivider`, `SysCtl_setLINBClockDivider`.

A call that runs after `Device_init()` replaces the clock it sets: record
`NOTE: <clock> set in code at <file>:<line> — <value>` and use that value. If the value cannot
be resolved, record `UNRESOLVED: <clock> set in code at <file>:<line>`.

## 2.4 Clock per peripheral

| Peripheral | Clock |
|---|---|
| EPWM | EPWMCLK if Phase 2 found it. Otherwise SYSCLK, except on F2837xD, F2837xS, F2807x, F2838x and F28P65x: SYSCLK ÷ 2 (`PERCLKDIVSEL.EPWMCLKDIV` resets to ÷2), unless a `SysCtl_setEPWMClockDivider` call in the application files or the project's `device.c` sets it |
| ADC | SYSCLK |
| CPU timer | SYSCLK |
| SCI, SPI | LSPCLK |
| I2C | SYSCLK |
| CAN | Bit clock of the instance's module (`CANABITCLK` for CANA); Phase 5 picks it per instance |
| LIN | Clock of the instance's module (`LINACLK` for LINA) if the tree names it, else SYSCLK; Phase 5 picks it per instance |

## 2.5 Record

Show frequencies to 4 significant digits. List every 2.4 peripheral; for CAN and LIN write
`per module`, or `none` when the tree names no such clock.

Append to `c2000-timing.md`:

```markdown
## Phase 2 — Clocks

| Clock | Frequency | Source |
|---|---|---|
| SYSCLK | <f> MHz | <clock tree / clocktree.h / device.h / file:line> |
| … | | |

| Peripheral | Clock used |
|---|---|
| EPWM | <EPWMCLK / SYSCLK / SYSCLK ÷ 2 (reset)> |
| … | |

<NOTE and UNRESOLVED lines from this phase, or "None">
```

Set Phase 2 to COMPLETE in the Phase Status table.

---

**Phase 2 complete.** Return to `timing-analyzer.md` and proceed to Phase 3.
