# Phase 4 — Target plan

Decide how each part of the Phase 3 specification is done on the target. Take every target fact from the
target TRM (`ti-asm-mcp`), the target driverlib (`get_driverlib_function`) and the target's C2000Ware
files named below. Phase 6 implements this plan and nothing else.

## 4.1 Peripheral map

For each source peripheral instance, find the target peripheral that performs the same function and read
its chapter in the target TRM. Use the same instance number when the target has it.

| Source | Map to |
|---|---|
| Same peripheral on the target (ePWM, eCAP, eQEP, SCI, SPI, I2C, CPU timers, DMA, GPIO, ADC) | The target's instance of it, through the target's registers and driverlib module. |
| ADC | The target's ADC modules. Map each source channel and SOC to a target ADC module, channel and SOC (4.2). |
| eCAN | The target's DCAN (`can.h`). If the target has no DCAN, MCAN (`mcan.h`) in classic CAN mode. |
| XINTF | EMIF. |
| COMP | CMPSS, with its DAC for the reference. |
| Input selections made with GPIO registers (external interrupt pin select, trip-zone, eCAP and sync inputs) | The target's Input X-BAR. |
| A peripheral with none of the above on the target | Drop it (4.7). |

Record why each map performs the same function, citing the target TRM titles you used.

## 4.2 Pins and analog channels

The target is a different package, so the board is new.

1. Ask the user for the target package if they have not given it.
2. For each signal the source uses (Phase 3, step 3.3), find a target GPIO and mux function in
   `<c2000ware_path>/driverlib/<target>/driverlib/pin_map.h`. Prefer the source GPIO number when it offers
   the signal; otherwise list the GPIOs that do.
3. For each ADC channel, choose a target ADC module and channel from the target TRM.

```
## Phase 4 — Pins
| Signal | Source GPIO / channel | Target GPIO / channel | pin_map.h macro | Note |
|---|---|---|---|---|
```

## 4.3 Interrupts

For each interrupt in Phase 3, step 3.4, find the target's interrupt (`INT_` name in
`<c2000ware_path>/driverlib/<target>/driverlib/inc/hw_ints.h`) and its PIE acknowledge group.

```
## Phase 4 — Interrupts
| Source interrupt | Source vector | ISR | Target INT_ | ACK group |
|---|---|---|---|---|
```

## 4.4 Clocks

The target CPU runs at its maximum frequency.

1. Oscillator: if the source runs from an internal oscillator, the target does too. If it runs from an
   external clock, ask the user what the target board has.
2. Read the target's maximum-speed PLL setting and SYSCLK for that oscillator in
   `<c2000ware_path>/device_support/<target>/common/include/device.h`.
3. For each peripheral clock the source uses, choose the target divider (low-speed clock, ePWM clock
   divider, peripheral clock dividers in the target TRM).

## 4.5 Rescaling

For every row of the Phase 3 timing table, compute the target register values that give the same
physical value from the target clocks of 4.4, with the target TRM's formula. When the exact value cannot
be produced, use the nearest one and record the error. If a value does not fit its register field, change
the related prescaler and record it.

```
## Phase 4 — Rescaling
| Peripheral | Setting | Source value | Target clock | Target registers and values | Achieved | Error |
|---|---|---|---|---|---|---|
```

## 4.6 Defaults

For each row of the Phase 3 defaults table, find the target field that controls the same behavior and
its reset value in the target TRM. Where the target's reset value gives a different behavior, plan an
explicit setting that gives the source's behavior; if the target cannot match it exactly, plan the
nearest and record the difference.

```
## Phase 4 — Defaults
| Behavior | Source field and reset value | Target field and reset value | Target setting needed |
|---|---|---|---|
```

## 4.7 Drops

List what is dropped: CLA code (Phase 2, step 2.4) and every peripheral 4.1 cannot map, with the code that
uses it and what the application loses.

## 4.8 Checkpoint

Show the user the peripheral map, pins, interrupts, clocks, rescaling (with errors), defaults and
drops. Ask for approval or changes. Record the answer in the log, set Phase 4 to COMPLETE and return to
`gen2-device-migration.md`.
