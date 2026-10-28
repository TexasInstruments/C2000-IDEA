# Phase 4 — Code Timing

> You are in **Phase 4** of the timing analysis. It runs for every project, with or without
> SysConfig: the application code can set timing SysConfig never sees, or change it after
> `Board_init()`.

### Rules for this phase

- Do resolve every argument before recording it; record what cannot be resolved as
  `UNRESOLVED`, never as a guess.
- Don't edit any file.

---

## 4.1 Files to scan

The application files from Phase 1.6. Skip comments, `#if 0` blocks and `#if`/`#ifdef`
branches that the predefined symbols from Phase 1 (plus `#define`s seen earlier in the same
file) exclude. An identifier that is not defined counts as 0 in `#if`.

## 4.2 Timing calls

Read `timing-analyzer/timing-calls.md` (unless Phase 3 already did). Record every call it lists
in the application files, with its instance, file, line and resolved arguments.

## 4.3 Order against SysConfig

A call runs after SysConfig's when it is in code that runs after `Board_init()` — later in
`main()`, or in a function `main()` calls after `Board_init()`. For each such call that sets the
same instance and setting as a Phase 3 call, record
`NOTE: <instance> <setting> set by SysConfig and again at <file>:<line> — the code value applies`.
If the order cannot be determined, record
`UNRESOLVED: <instance> <setting> set by SysConfig and at <file>:<line> — order unknown`.
A call that runs before `Board_init()` on the same instance and setting is overwritten: record
`NOTE: <instance> <setting> set at <file>:<line> before Board_init() — the SysConfig value applies`.
A call on an instance with no Phase 3 call needs no NOTE.

## 4.4 Clock arguments

`SCI_setConfig`, `SCI_setBaud`, `SPI_setConfig`, `SPI_setBaudRate`, `I2C_initController(ModuleFrequency)` and
`CAN_setBitRate` take the module
clock as an argument. When it does not equal the Phase 2 clock for that peripheral (2.4), record
`NOTE: <file>:<line> <call> uses <argument> = <value> Hz; <clock> is <f> Hz`. The same check
applies to the Phase 3 calls in `board.c`. Record nothing when they match.

## 4.5 Record

Append to `c2000-timing.md`:

```markdown
## Phase 4 — Code timing

| Instance | Peripheral | Call | File:line | Arguments |
|---|---|---|---|---|

<NOTE and UNRESOLVED lines from this phase, or "None">
```

Set Phase 4 to COMPLETE in the Phase Status table.

---

**Phase 4 complete.** Return to `timing-analyzer.md` and proceed to Phase 5.
