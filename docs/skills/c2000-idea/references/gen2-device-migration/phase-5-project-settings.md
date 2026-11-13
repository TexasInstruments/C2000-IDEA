# Phase 5 — Project settings

Prepare the target project so the ported files can build: sources, build settings, SysConfig clocks and
linker sections. Stop and ask the user if any MCP call fails or returns something you cannot interpret.

## 5.1 Copy the user files

Copy every **User** file of Phase 2, step 2.1 into the target project folder, keeping its relative path.
Do not copy device support, driver, linker or CLA files, and never add a `<link>` to an SDK file.

The starter project's `main.c` is replaced by the source's file that holds `main()`; delete the starter's
`main.c` if the source's main file has another name.

## 5.2 Build settings

Compare `getToolFlags` of the source and the target for `compiler` and `linker`, and show the user the
differences you plan to apply. Apply them with `setToolFlags`, with these exceptions:

- Keep the target's device, CPU and floating-point options, and its ABI.
- Do not copy include paths, defines or libraries that belong to the source family's device support or
  driver code (they contain the source family name, or point into `device_support/<source>`).
- Do not copy the source's linker command files.

## 5.3 SysConfig: clocks

Open the target's `.syscfg` (`openFile`). It must have the device support module; add it with
`addModuleInstances` if it does not.

Set the clock tree to the plan of Phase 4, step 4.4: oscillator, PLL to the target maximum and the
peripheral clock dividers. Change values only with `changeConfiguration`, using the `choices` from
`getInstanceConfiguration`. Check every frequency with `traceClockSignal`; each must match the plan.

## 5.4 SysConfig: linker sections

The starter project generates its linker command file from the CMD module. For each section the user
files name (`#pragma DATA_SECTION`, `#pragma CODE_SECTION`, `.sect` in assembly), add a user section to
the CMD instance of every build configuration (`userSection`, with `sectionName` and `sectionMemory`).
Choose target memory that serves the same purpose (for example, a section the source placed in external
XINTF memory goes to the EMIF region if 4.1 maps XINTF to EMIF).

A section the source used for RAM functions (`ramfuncs`) is the starter project's ramfunc section on the
target: use the target's section name in the code (Phase 6) instead of adding a user section.

## 5.5 Save and build

`getErrorsAndWarnings` must report no error. `save`, `closeFile`, then `buildProject`. The user files
still use the source registers, so compile errors in them are expected. Errors in the generated SysConfig
files or the linker command file are not: fix them before Phase 6.

Record the applied settings, the clocks with their `traceClockSignal` values and the user sections in the
log, set Phase 5 to COMPLETE and return to `gen2-device-migration.md`.
