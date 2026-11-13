# Phase 6 — Port rules (sub-agent)

You port one file of the target project from the source family to the target family. The log's Phase 2,
3 and 4 sections say what the file does and how the target does it. Implement exactly that: the same
functions, in the same order, with only the hardware access changed.

Take every target fact from `get_driverlib_function` (IDEA MCP), the target TRM (TI ASM MCP) and the
target's C2000Ware headers. Never recall a driverlib signature, register name or value from memory.

## Headers and types

- Replace the source family's headers (`DSP28x_Project.h`, `<family>_Device.h`, `<family>_Examples.h`,
  driver headers) with `#include "driverlib.h"` and `#include "device.h"`.
- Replace the source's integer and float type names with the C99 ones: `Uint16` → `uint16_t`,
  `int32` → `int32_t`, `float32` → `float32_t`, and so on.

## Device support and driver calls

For each call the log lists for this file (Phase 2, step 2.3):

1. If a target function does the same job, replace the call with it:

   | Source | Target |
   |---|---|
   | `InitSysCtrl()` | `Device_init()`, then enable the clock of each peripheral the source enabled and the target has (`SysCtl_enablePeripheral`), or `Device_enableAllPeripherals()` if the source enabled all of them |
   | `InitGpio()` | `Device_initGPIO()` |
   | `InitPieCtrl()` | `Interrupt_initModule()` (it also clears `IER` and `IFR`) |
   | `InitPieVectTable()` | `Interrupt_initVectorTable()` |
   | `InitXxxGpio()` and similar pin set-up | `GPIO_setPinConfig()`, `GPIO_setPadConfig()`, `GPIO_setQualificationMode()` for the pins in the plan |
   | `DELAY_US(x)` | `DEVICE_DELAY_US(x)` |

   Confirm with `get_driverlib_function` that the target function's body does what the source body did.
   Anything the source body did that it does not do, port as in step 2.
2. Otherwise, copy the body from the project's copy of the file (Phase 2 says where it is) into this file
   as a `static` function with the same name, and port it like any other code. Do the same for driver
   calls (`CLK_`, `PWM_`, `ADC_`, … on F2802x); remove the driver handles they used.
3. ADC set-up: the source may load ADC calibration or trims (`Device_cal`, `AdcOffsetSelfCal`). Read the
   bodies of the target functions you use (`Device_init`, `ADC_setVREF` or `ADC_setMode`); if none loads
   the target's factory ADC trims, call the target's trim function for each ADC the plan uses.

## Register accesses

For each register-table row of this file:

1. Find the target register and fields from the plan (Phase 4) and the target TRM.
2. Find the driverlib function that writes or reads them: candidates are in
   `<c2000ware_path>/driverlib/<target>/driverlib/<module>.h`. Call `get_driverlib_function` and read the
   body: it must write exactly the fields you need, and you must know what else it writes. One function can
   cover several rows; use one call for them.
3. If no function fits, use `HWREG`/`HWREGH` with the base address from `inc/hw_memmap.h`, the offset
   `<MODULE>_O_<REG>` and the field masks and shifts `<MODULE>_<REG>_<FIELD>_M`/`_S` from
   `inc/hw_<module>.h`. Put `EALLOW`/`EDIS` around writes to protected registers.
4. Use the values of the Phase 4 rescaling table for every clock-derived setting, the Phase 4 pins for
   every pin and the Phase 4 interrupts for every interrupt.
5. Write every setting of the Phase 4 defaults table where the peripheral or pin is set up, even though
   the source code never wrote it.

Mapped peripherals (eCAN to CAN or MCAN, XINTF to EMIF, COMP to CMPSS, GPIO input selects to Input X-BAR)
follow the Phase 4 map: write the target peripheral's set-up that produces the same behavior.

## Behavior that must survive

- A whole-register write (`.all = value`) sets every field. When the driverlib calls you use touch only
  some fields, set the remaining fields to the same values explicitly.
- Pull-ups: on the source a GPIO pull-up is enabled by writing 0 to its pull-up disable bit. Use
  `GPIO_PIN_TYPE_PULLUP` exactly where the source enables one, and `GPIO_PIN_TYPE_STD` where it disables it.
- Values encoded as size minus one, and write-1-to-clear flags: compare the register encoding with what
  the driverlib argument means (read the body).
- Order: keep the source's order of writes where the TRM requires one (for example ePWM time-base clock
  sync around ePWM set-up, ADC power-up delays).
- Interrupts: `PieVectTable.X = &isr` becomes `Interrupt_register(INT_X, &isr)`; enabling a CPU interrupt
  and its PIE bit becomes `Interrupt_enable(INT_X)`; writing `PIEACK` becomes
  `Interrupt_clearACKGroup(INTERRUPT_ACK_GROUPn)`; `EINT` becomes `Interrupt_enableGlobal()`.
- RAM functions: if the target's generated `device.c` already copies the RAM functions, remove the
  source's copy. Use the target's RAM-function section name in `#pragma CODE_SECTION`.
- Assembly: under the target's ABI, C symbols have no leading underscore. Update assembly that references
  C symbols.

## Dropped code

Remove code the plan drops (CLA code, peripherals the target does not have) and every reference to it,
so the file still compiles. Do not leave comments about the removal; the log records it.

## Comments

Keep the user's comments. Add a comment only where the target code is not obvious from the call itself,
and keep it short.

## Report

Return:

```
### Ported rows
| Row # | Source access | Target code (line) | How (function / HWREG / mapped) |
|---|---|---|---|

### Device support and driver calls
| Call | Replaced by / ported as |
|---|---|

### Dropped
| Row # or call | Reason |
|---|---|

### Needs a decision
<rows you could not port without the user, and why>
```
