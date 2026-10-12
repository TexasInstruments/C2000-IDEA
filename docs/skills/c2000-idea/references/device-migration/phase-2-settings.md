# Phase 2 — Analyze and Align Project Settings

> You are in **Phase 2** of the device-migration workflow.

**Before starting:** State which phases are complete and which phase you are about to
start. If disoriented, re-read `c2000-migration.md` in the target project to recover
your position.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step. Describe what you tried, what the tool returned, and ask the user how
to proceed.

### Rules for this phase

- Do keep the source project unchanged — it is the golden reference.
- Do apply settings automatically unless the difference is a legitimate device delta.
- Do take file paths and device names from MCP tools — never invent them.
- Don't modify SDK driverlib source files — only the project's own application source files.

Compare the source (golden) project against the target project. Apply settings from the
source to the target, except where differences are legitimate device deltas.

Use CCS Project MCP `getProjectDescriptors` and `getToolFlags` to read settings from both projects and `setToolFlags` to
apply mismatches to the target.

## 2.0 Identify the active build configuration

Call `getProjectDescriptors` with properties `activeBuildConfiguration` and `buildConfigurationIndex` on the **source** project and identify which build configuration it actively uses (typically `CPU1_FLASH` or `Debug`).

Apply all Phase 2 settings to **that same configuration** in the target. Do not apply
settings to a different build config by mistake. Pass that configuration name as
`configuration` on every `getToolFlags` call, for both projects, and as
`applicableConfigurations: [<name>]` on every `setToolFlags` call.

**Update `c2000-migration.md`:**
```
Active build config: <configuration name>
Active build config memory: <RAM | FLASH | not tied>
```

**For every step in this phase:** before applying any change, tell the user what you
found (source value vs. target value) and what you plan to apply.

## 2.1 Compiler flags

- Use `getToolFlags` with toolType of `compiler` to  get all of the compiler settings.
- Use it once for source project and once for target project.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply source settings to target where they differ.

## 2.2 Predefined symbols / defines

- User `#define`s passed at the compiler level (e.g., feature flags, board identifiers).
- Show the user: source defines vs. target defines, and which ones you plan to apply.
- Device-specific defines (e.g., `F28004x`) should remain as the target device's
  define — do not overwrite.
- **Treat any define whose name contains the source device name string** (e.g., `F28004x`,
  or a board define like `LAUNCHXL_F28004x`) as device-specific — do not copy it to the
  target; the target project template already has the correct device guard.
- **If the same symbol is defined with a different value** in source vs. target (e.g., a
  clock-speed constant tied to the device), flag it to the user and do not overwrite
  without explicit confirmation. Apply settings from the source to the target, after confirmation.

## 2.3 Include paths

- User-added include directories beyond SDK defaults.
- Show the user: source paths vs. target paths, and which ones you plan to add/adjust.
- Adjust any device-specific SDK paths to point to the target device's equivalent.
- **If an include path contains the source device name as a directory component**, replace
  that component with the target device name and verify the resulting path exists on disk.
- Apply settings from the source to the target, after confirmation.

**After applying include paths — macro resolution check (required):**

For every `${MACRO_NAME}` referenced in the applied include paths, check if that macro is defined in the target project. If missing, copy its definition from the source project, replace the source device name in the value with the target device name, and add it to **all build configurations** in the target project. Record each added macro in `c2000-migration.md`.

> **Example:** Source defines `C2000WARE_DLIB_ROOT = ${COM_TI_C2000WARE_INSTALL_DIR}/driverlib/f28003x/driverlib/`. The universal target starter does not have this macro, so the include path `--include_path="${C2000WARE_DLIB_ROOT}"` would expand to nothing. Add it to the target project as `C2000WARE_DLIB_ROOT = ${COM_TI_C2000WARE_INSTALL_DIR}/driverlib/f28p551x/driverlib/`.

## 2.4 Linker flags

- Use `getToolFlags` with toolType of `linker` to  get all of the linker settings.
- Use it once for source project and once for target project.
- Stack/heap sizes, output format, map file generation.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply settings from the source to the target.

## 2.5 Linker command file

Determine the **source** project's linker style — this drives both the work here and the
CMD-module decision in Phase 3:
- **CMD module** — the linker command file is generated by a CMD module inside the source
  SysConfig.
- **Plain `.cmd`** — the source uses a standalone, user-managed `.cmd` file (always the case
  when the source has no SysConfig).

**Detecting CMD module presence in the source syscfg (required):**

You must actively inspect the source SysConfig — do not guess from file names alone.

1. Call `openFile` (ccs-sysconfig MCP) on the **source** project's `.syscfg` file path
   (obtain it from `getProjectDescriptors`).
2. Call `getModuleInstances` and look for the `moduleId`
   `/utilities/cmd_tool/cmd_syscfg/source/CMD`.
3. If an instance of it exists → **CMD module** style. If not → **Plain `.cmd`** style.
4. While the file is open, record the source clocks (step 2.11).
5. Call `closeFile` on the source syscfg immediately after detection — never leave it open.

**If the ccs-sysconfig MCP is not available** (Phase 0 soft-warned it): you cannot inspect
the source `.syscfg`, and the rule above still holds — do not infer the style from file
names.

First check whether the source project has a `.syscfg` file at all (from
`getProjectDescriptors` or the project directory listing). If it has none, the style is
**plain `.cmd`** by definition — record that and continue without asking.

Otherwise ask the user:

> *"The CCS SysConfig MCP is not available, so I cannot inspect the source `.syscfg`
> directly. Is the source project's linker command file generated by a CMD module inside
> SysConfig, or is it a standalone `.cmd` file you maintain yourself?"*

Wait for the answer before continuing. Do not assume a default.

Record the style in `c2000-migration.md` — Phase 3 reads it to decide whether the target
syscfg keeps or drops its CMD module. Record how it was established, so Phase 3 can tell a
detected value from a supplied one:

```
Source linker style: <CMD module | plain .cmd> (detected via ccs-sysconfig MCP)
```
or
```
Source linker style: <CMD module | plain .cmd> (user-supplied — ccs-sysconfig MCP unavailable)
```

**Source linker sections (both styles):**

Map file: the `-m` / `--map_file` name in the source linker flags (step 2.4), in the source
project's `buildDirectoryLocation` (`getProjectDescriptors`).
- Map file exists: use it.
- Otherwise: call `buildProject` on the source project and `waitForResult` until it
  completes. If the build fails, change nothing to make it pass. Continue without sizes and
  record `REVIEW-REQUIRED: source map unavailable — section sizes not checked`.

From `SECTION ALLOCATION MAP`, record every output section with a non-zero length: name, the
input section names in parentheses, origin, length, and `RUN ADDR` when present. Add
`.text.1`, `.text.2`, … into one `.text` entry. Classify each origin and `RUN ADDR` by the
source region that contains it, using `memoryRanges` in
`<c2000ware_path>/utilities/cmd_tool/cmd_syscfg/source/.meta/<source-device>_memoryInfo.js`.

Record every `.cmd` file the source links in the active build configuration, then:
```
## Source linker sections
Map: <path> / unavailable
Source linker files: <file>, <file>
| Section | Input sections | Region (group) | Length | Run region |
|---|---|---|---|---|
```

**If the source uses a CMD module:** the sections are placed in Phase 3D. Skip the rest of this step.

**If the source uses a plain `.cmd` file:** set up the target's plain `.cmd` file now, using
the SDK's target-device reference as the starting point. (Phase 3 will remove the CMD
module from the target syscfg so it does not generate a competing linker file.)

**Finding the target device example linker cmd files:**

The reference cmd files are located at:
`<c2000ware_path>/device_support/<target-device>/common/cmd/`

The two reference files:

| Target device | RAM linker cmd | Flash linker cmd |
|---|---|---|
| f2837xd | `2837xD_RAM_lnk_cpu1.cmd` | `2837xD_FLASH_lnk_cpu1.cmd` |
| f2837xs | `2837xS_Generic_RAM_lnk.cmd` | `2837xS_Generic_FLASH_lnk.cmd` |
| f2807x | `2807x_Generic_RAM_lnk.cmd` | `2807x_Generic_FLASH_lnk.cmd` |
| f2838x | `2838x_RAM_lnk_cpu1.cmd` | `2838x_FLASH_lnk_cpu1.cmd` |
| f28p65x | `28p65x_generic_ram_lnk_cpu1.cmd` | `28p65x_generic_flash_lnk_cpu1.cmd` |
| All other devices | name ends with `_generic_ram_lnk.cmd` | name ends with `_generic_flash_lnk.cmd` |

Read both files for context before reconciliation. If the build configuration selected in 2.0 is 
tied to RAM or FLASH, use mainly the content from that linker cmd file. 
Otherwise, ask the user for confirmation on which one to prioritize. If user is unsure, default to FLASH.

**Reconciliation:**

Read `linker-placement.md` and place every source section by its placement rules. Start from
the reference file and keep its `MEMORY` block. Keep every linker symbol the source `.cmd`
defines (`LOAD_START`, `RUN_START`, `LOAD_SIZE`, …). Without a CMD module, `Device_init()`
copies `.TI.ramfunc` using `RamfuncsLoadStart`, `RamfuncsLoadSize` and `RamfuncsRunStart` on
`_FLASH` builds.

**Write the final CMD file:**

After all decisions are made, write exactly one linker cmd file to the target project —
the one matching the active build configuration from step 2.0. Do NOT write a second cmd
file for the other configuration; reading both reference files for context does not mean
writing both. Delete any other RAM or flash linker cmd file from the table above already
present in the target project directory — leaving it causes duplicate MEMORY region errors
at link time.
- For the name of the cmd file created in the target project, match the name with the source 
  project's linker cmd file name (replace any device name mentions with the target device 
  name).

**Remove `device_cmd.cmd.genlibs` from the target linker options:**

If the target's linker flags for the active build configuration (`getToolFlags`) contain
`device_cmd.cmd.genlibs`, delete its `<listOptionValue value="device_cmd.cmd.genlibs"/>` line
from that configuration in the target project's `.cproject`, then read the flags back with
`getToolFlags`. If it is still listed, stop and tell the user. Without the CMD module the
file is not generated, and the link fails with
`error #10008-D: cannot find file "device_cmd.cmd.genlibs"`.

## 2.6 Libraries

- Additional libraries linked by the source (math libs, custom .lib files).
- Show the user: source libraries vs. target libraries, and which ones you plan to apply.
- Adjust device-specific library paths to target equivalents.
- **If the source links a custom `.lib` that was compiled for the source device**, flag
  it to the user — it must be recompiled for the target device before linking.
- Apply settings from the source to the target, after confirmation.

## 2.7 Source file inventory

Identify which source `.c`/`.h` files are user application code (migrate these) vs. files
that should come from the new SDK (ignore these). Use these heuristics:

- **Files under the project directory** are most likely user application code — migrate them.
- **Files referenced from SDK paths** are device/library files — ignore them.
- **SDK files copied into the project** — sometimes `device.c`/`device.h` or driverlib
  files are copied into the project. These are easily detectable by name and should be ignored.
- **Linker command files (`.cmd`)** — do not copy; step 2.5 writes the target's.
- **SysConfig-generated files** — ignore these; they are regenerated after SysConfig
  migration. Detect them using CCS Project MCP:
  - Use `sysConfigOutputLocation` from `getProjectDescriptors` to find the SysConfig
    output folder — ignore all files under it.
- **Generated content from build** should be ignored. The directory where this content is 
  located can be found by getting `buildDirectoryLocation` from `getProjectDescriptors`. 
- **Other stale build directory locations** should also be ignored. Any directory under
  the project directory, that includes any of the `buildConfigurationIndex` entries from
  `getProjectDescriptors`.

**Libraries folder detection (required before building the copy list):**

Scan the source project directory for any folder named `libraries`, `lib`, `libs`, or
`Library` (case-insensitive). If found, copy the entire folder as-is to the target project,
preserving the exact folder name and internal structure. Do not classify, flag, or inspect
the contents — these files are compatible across F28x devices and require no migration.
Record in `c2000-migration.md`:
```
Libraries folder: <folder name> — copied as-is; excluded from Phase 4 migration
```

**Before copying**, present two lists to the user:
1. **Application files** (will be copied to the target project) — list every file path.
   Note the libraries folder separately as "copied as-is, excluded from migration".
2. **Device/SDK files** (will NOT be copied — the target SDK provides its own versions)
   — list every file path and the reason it was excluded (SDK path, SysConfig-generated,
   device startup file, etc.).

Wait for the user to confirm the lists are correct before copying. After confirmation — **copy the files to the target project** and report the list of files successfully copied. List the application files and folder strucutre in the `c2000-migration.md` file.
Make sure that the files copied, have the same folder structure in the target project as the source project.

**Remove the main.c file from the target project**, since the application files from the 
source project includes the `main()` definition.

**Validate the target project directory structure** after the copy is finished.
Confirm with the user by showing the source and target project's folder structure and files. Once confirmed, move to the next step.

## 2.8 Post-build steps

- Custom post-build commands (hex file generation, checksums, etc.).
- Apply source post-build steps to target where applicable.

## 2.9 Runtime support (RTS)

- RTS library selection may differ per device but should match in flavor (e.g., floating
  point support level).
- Verify the target uses the equivalent RTS variant.

## 2.10 Settings verification (read-back diff — required)

1. Read back the applied settings from the **target** project using `getToolFlags` and confirm they match what you intended to write. Compare the returned value against what you applied for each category:
   - **Compiler flags (2.1):** confirm optimization level, debug info, warning levels,
     any custom flags are present.
   - **Predefined defines (2.2):** confirm every user-added `#define` appears; confirm
     no source-device defines were accidentally copied.
   - **Include paths (2.3):** confirm every added path appears; confirm no path still
     contains the source device name string.
   - **Linker flags (2.4):** confirm stack/heap sizes, map file flag, output format.
   - **Libraries (2.6):** confirm all required libraries are linked.
2. If any value is missing, wrong, or applied to the wrong build configuration:
   - Re-apply it with `setToolFlags` and read back again.
   - If it does not match, stop and report the discrepancy to the user — do not silently proceed with a misconfigured project.
3. Record the verification result in `c2000-migration.md`:
   ```
   Phase 2 settings verification: PASS — all applied settings confirmed via read-back.
   ```

## 2.11 Source clock configuration

### Source `.syscfg` has `device_support`
(`/driverlib/device_support.js` in `getModuleInstances`)

Done in step 2.5 (detection step 4), while the source `.syscfg` is open.

Call `getClockTreeInstances`, then `traceClockSignal` (`toPin: "out"`) on every instance of
type `NamedConnection`. Read `OSCCLKSRCSEL` and `XTAL_OR_X1` with `getInstanceConfiguration`.
If the ccs-sysconfig MCP is unavailable, read OSCCLK, SYSCLK and LSPCLK from the
`clocktree.h` in the source's `sysConfigOutputLocation`.

### Otherwise — find the clock code by content, not by file name

Search every source and header file from the inventory (2.7) and the include paths (2.3) for:

- Calls: `SysCtl_setClock`, `SysCtl_setAuxClock`, `SysCtl_setLowSpeedClock`,
  `SysCtl_setEPWMClockDivider`, `SysCtl_setMCANClk`, `CAN_selectClockSource`,
  `SysCtl_setCLBClk`, `SysCtl_setCLBClkDivider`
- Clock registers: `CLKSRCCTL1`, `CLKSRCCTL2`, `SYSPLLMULT`, `SYSCLKDIVSEL`, `LOSPCP`,
  `PERCLKDIVSEL`, `AUXCLKDIVSEL`, `CLBCLKCTL`

Use call sites and register writes only. Skip the definitions in driverlib `sysctl.c`/`sysctl.h`.
Resolve each argument through its `#define`s, taking the `#if` branch that the project's
predefined symbols (2.2) select.

Frequencies:
- Oscillator source: from the `SYSCTL_OSCSRC_*` value.
- Internal oscillator frequency: `SYSCTL_DEFAULT_OSC_FREQ` (`SYSCTL_DEFAULT_SYSOSCDIV4_FREQ`
  for SYSOSCDIV4) in `<c2000ware_path>/driverlib/<source-device>/driverlib/sysctl.h`.
- External clock frequency: the macro passed to `SysCtl_getClock` or `DEVICE_OSCSRC_FREQ`.
  If no macro states it, calculate it from the PLL settings and `DEVICE_SYSCLK_FREQ`.
- SYSCLK, LSPCLK and the other clocks: calculate them from the oscillator frequency and the
  resolved multiplier and divider values.

A value the application sets after the main clock setup replaces the earlier value.

### Not determined

If the search finds no clock setup, finds only a precompiled library, or the results
conflict, ask the user:
> *"I could not determine the source clock configuration. What are the source oscillator
> (internal / crystal / external oscillator) and its frequency, SYSCLK, and LSPCLK?"*

Record:
```
## Source clock configuration
Found in: <syscfg | file:line, …>
Oscillator: <INTOSC2 | SYSOSCDIV4 | XTAL | X1> <f> MHz
| Clock | Frequency |
|---|---|
| SYSCLK | <f> MHz |
| <clock> | <f> MHz |
```
---

**Update `c2000-migration.md`:** Record Phase 2 as COMPLETE. Log the settings compared and
applied, the source file inventory (application files copied, device/generated files
excluded), the target project's directory and file structure, any libraries folder found
and its contents (noting any `.lib` files flagged for recompilation), and any items the user modified or overrode. 
Ask: *"Phase 2 is complete. Does everything look correct? Ready to move to Phase 3?"*
Wait for the user's confirmation, then **return to `device-migration.md`** (the workflow
orchestrator that sent you here) and proceed to Phase 3.
