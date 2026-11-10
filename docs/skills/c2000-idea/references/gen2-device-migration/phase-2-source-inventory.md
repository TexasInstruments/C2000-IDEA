# Phase 2 — Source inventory

List everything in the source project that touches the hardware. The tables you build here are the
checklist for Phases 3, 6 and 8: a register access missing from them is not ported.

Read files only. Never edit the source project.

## 2.1 Classify the source files

List the files of the active build configuration from the project folder and from the `<link>` entries
in its `.project`. Put each in one class:

| Class | How to recognize it |
|---|---|
| User | Everything not in the classes below. |
| Driver | F2802x only (also F2802x0): same name as a file in `<c2000ware_path>/device_support/<source>/common/source` or `common/include` whose name does not start with the family name, such as `clk.c`, `pwm.c`, `adc.c`. |
| Device support | Same name (case can differ) as any other file in `<c2000ware_path>/device_support/<source>/common/source`, `common/include`, `headers/source`, `headers/include` or `headers/cmd`. |
| Linker | `*.cmd` that is not device support. |
| CLA | `*.cla`, and assembly files that define CLA tasks. |

`<source>` is the source family in lower case. For device support and driver files, record whether the
project copies or links them, and whether a copy differs from the SDK file: a modified copy holds user
changes, and its body is what Phase 6 ports.

## 2.2 Build the register table

For each user file, list every access to a register:

- Members of the header register structs: `XxxRegs.REG`, `XxxRegs.REG.bit.FIELD`, `.all`, `.half`, `.byte`.
- The structs that are not named `*Regs`: `AdcResult`, `AdcMirror`, `ECanaMboxes`, `ECanaShadow` and the
  like (see the `ti-asm-gen2-register-lookup` skill).
- Register accesses through a pointer to a register struct, and through macros in the project's headers.
- `PieVectTable` assignments.
- CPU registers and intrinsics: `IER`, `IFR`, `EINT`, `DINT`, `ERTM`, `EALLOW`, `EDIS`, `DELAY_US`.

Write it to the log as one row per access:

```
## Phase 2 — Register table
| # | File | Line | Access | R/W | Value written or use of value read |
|---|---|---|---|---|---|
```

Search each file for `Regs`, `.bit.`, `.all`, `->` and the struct names above, and read the code around
every hit: a value often comes from a variable or a `#define` elsewhere in the file.

## 2.3 Calls into device support and driver code

List every call from a user file into a device support or driver function (`InitSysCtrl`, `InitPieCtrl`,
`InitAdc`, `InitEPwm1Gpio`, and on F2802x driver calls such as `CLK_enableAdcClock` or `PWM_setPeriod`). For each, read its body in the
project's copy (or the SDK file the project links) and record what it does, including the functions it
calls:

```
## Phase 2 — Device support and driver calls
| Call | File:line | Body source | What it does (registers and values) |
|---|---|---|---|
```

Also list handle objects the driver code needs (`CLK_init(...)`, `PWM_init(...)`), so Phase 6 can remove
them with the calls.

## 2.4 What will be dropped

Find what cannot move to the target:

1. **CLA:** CLA files, `Cla1Regs`, CLA task vectors and memory assignment, `Cla1ForceTaskN`, variables
   shared with the CLA and CPU code that reads CLA results.
2. **Peripherals:** list every peripheral the register table uses. Phase 4 decides which the target has;
   here only list them.

## 2.5 Checkpoint

Tell the user:

- the number of user files, register accesses and device support / driver calls;
- the CLA code that will be dropped, with what the CPU code does with it;
- the peripherals in use.

If CLA code is found, ask the user to confirm that the migration continues without it. Wait for the
answer.

Append the checkpoint result to the log, set Phase 2 to COMPLETE and return to `gen2-device-migration.md`.
