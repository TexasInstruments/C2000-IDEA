# Phase 3 — Understand the source

Establish what the source does, from its register settings and the source TRM only. This specification
is what Phase 6 ports and what Phase 8 checks the target against.

Look up every register and field with the `ti-asm-gen2-register-lookup` skill and the source family's
TRM. Do not use code comments, file names or example descriptions as facts: they can be wrong or stale.

## 3.1 Register meanings

For every row of the Phase 2 register table, and every register the device support and driver calls
write (Phase 2, step 2.3), record the TRM definition:

```
## Phase 3 — Register meanings
| # | Access | TRM register | TRM title used | Field | Bits | Value | Meaning |
|---|---|---|---|---|---|---|---|
```

One row per field. For a whole-register write (`.all`), split the value into the fields the TRM defines.
If the TRM does not define a register or field, write `not described` in TRM title and say so in Meaning.

## 3.2 Clocks

Work out the clocks the source actually runs, from the code the application executes (usually
`InitSysCtrl` and the functions it calls, in the project's copy):

1. Oscillator source: internal oscillator, crystal or external oscillator. If the code selects an external
   clock, ask the user for its frequency; the code does not state it.
2. PLL multiplier and divider settings, and the resulting CPU clock (SYSCLKOUT).
3. The peripheral clocks the application uses: low-speed (LSPCLK) and high-speed (HSPCLK) prescalers,
   and any peripheral with its own clock divider.

```
## Phase 3 — Source clocks
| Clock | Set by | Frequency |
|---|---|---|
```

## 3.3 Peripheral specification

For each peripheral instance, describe its configuration in engineering terms, built from the register
meanings: mode, inputs and triggers, outputs, interrupts it raises, and the pins it uses (GPIO number and
mux function, from the GPIO mux registers' TRM definitions).

Write every clock-derived setting in physical units, computed from 3.2 and the TRM's formula for it:

```
## Phase 3 — Timing
| Peripheral | Setting | Registers | Source clock | Physical value |
|---|---|---|---|---|
```

For example: ePWM period and frequency, dead band, ADC acquisition window, SCI, SPI and I2C bit rates, CAN
bit timing, CPU timer periods, input qualification windows and `DELAY_US` delays.

## 3.4 Interrupts

For each interrupt the application uses: PIE group and channel, vector name, ISR, the enable bits set,
and what the ISR acknowledges and clears.

## 3.5 Defaults the application relies on

The application also depends on fields it never writes, through their reset values. For each
peripheral and pin it uses, read the TRM definition of every register of that function and list the
unwritten fields whose reset value shapes the behavior: for example a comparator's hysteresis, whether
an analog pin is connected to its analog path, input qualification, output polarity or a default
clock divider.

```
## Phase 3 — Defaults relied on
| Peripheral | TRM register | Field | Reset value | Meaning |
|---|---|---|---|---|
```

## 3.6 The application

Describe what the application does, from 3.1 to 3.5 only: its signal chain, its main loop and its ISRs.
Name any part that cannot be determined from the code (a value set outside the project, an external
device the code expects).

## 3.7 Checkpoint

Show the user the application description (3.6), the clocks, the timing table, the interrupt list and
the defaults relied on. Ask them to confirm that this is what the application does, or to correct it.
Record the answer and any correction in the log, set Phase 3 to COMPLETE and return to `gen2-device-migration.md`.
