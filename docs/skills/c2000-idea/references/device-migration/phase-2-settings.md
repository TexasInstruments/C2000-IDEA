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

Use CCS Project MCP `getToolFlags` to read settings from both projects and `setToolFlags` to
apply mismatches to the target.

## 2.0 Identify the active build configuration

Call `getToolFlags` on the **source** project and identify which build configuration it
actively uses (typically `CPU1_FLASH` or `Debug`).

> **CRITICAL: Multiple build configurations — explicit user confirmation required:**
> If `getToolFlags` returns **more than one build configuration** (e.g., both `CPU1_FLASH`
> and `CPU1_RAM`), **STOP immediately** and ask the user:
> > *"The source project has multiple build configurations: `<list all configs found>`.
> > Which one should I use as the active build configuration for this migration?
> > All Phase 2 settings (compiler flags, defines, include paths, linker flags, libraries)
> > will be applied to the configuration you select."*
>
> **Do NOT:**
> - Assume the first config in the list is correct
> - Apply settings to all configs (this will misconfigure the project)
> - Guess based on config name (e.g., "FLASH is probably the one")
>
> **Wait for the user's explicit response** naming which config to use. Do not proceed
> until you have a confirmed single build configuration name.
>
> If only one build configuration is found, proceed without asking.

Apply all Phase 2 settings to **that same configuration** in the target. Do not apply
settings to a different build config by mistake.

**Update `c2000-migration.md`:** with active build configuration info

**For every step in this phase:** before applying any change, tell the user what you
found (source value vs. target value) and what you plan to apply.

## 2.1 Compiler flags

- Optimization level, debug info, warning levels, language standard, custom flags.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply source settings to target where they differ.

## 2.2 Predefined symbols / defines

- User `#define`s passed at the compiler level (e.g., feature flags, board identifiers).
- Show the user: source defines vs. target defines, and which ones you plan to apply.
- Device-specific defines (e.g., `_F28004x`) should remain as the target device's
  define — do not overwrite.
- **Treat any define whose name contains the source device name string** (e.g.,
  `_F28004x_`, `_LAUNCHXL_F28004x`) as device-specific — do not copy it to the target;
  the target project template already has the correct device guard.
- **If the same symbol is defined with a different value** in source vs. target (e.g., a
  clock-speed constant tied to the device), flag it to the user and do not overwrite
  without explicit confirmation. Apply settings from the source to the target, after confirmation.

## 2.3 Include paths

- User-added include directories beyond SDK defaults.
- Show the user: source paths vs. target paths, and which ones you plan to add/adjust.
- Adjust any device-specific SDK paths to point to the target device's equivalent.
- **If an include path contains the source device name as a directory component**, replace
  that component with the target device name and verify the resulting path exists on disk.
- **If the adjusted path does not exist on disk**, report it to the user instead of
  adding a broken include path.
- Apply settings from the source to the target, after confirmation.

## 2.4 Linker flags

- Stack/heap sizes, output format, map file generation.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply settings from the source to the target.

## 2.5 Linker command file

Detect which path the **source** project uses:
- **Path A** — a `.cmd` file in the project's application files (user-managed)
- **Path B** — CMD module configured within SysConfig (generated output)

Then check what the **target** imported project uses.

**If source = Path A and target = Path A:**
- Proceed to reconciliation (see below).

**If source = Path A and target = Path B:**
- Remove the CMD module from the target project's SysConfig.
- Add an example target linker cmd file to the project (see reference paths below).
- Then proceed to reconciliation.

**If source = Path B:**
- Handled entirely by the SysConfig migration phase (Phase 3). No separate cmd work needed.
- When migrating the CMD module in SysConfig, the sections should match the source
  project and the memory regions assigned to sections should match as closely as possible.

**Finding the target device example linker cmd files:**

The reference cmd files are located at:
`<c2000ware_path>/driverlib/<target-device>/cmd/`

List all files in the cmd directory and identify the two key reference files:
- The **RAM** linker cmd — file name ends with `_generic_ram_lnk.cmd`
- The **flash** linker cmd — file name ends with `_generic_flash_lnk.cmd`

Read both files for context before reconciliation.

**Reconciliation:**

Port user customizations from the source cmd onto the target device's cmd file:
- The sections in the target should match the source project.
- The memory regions assigned to sections should match as closely as possible.
- Use the target device's RAM and flash cmd files as the ground truth for valid memory
  regions and addresses on the target device.
- **If a source section cannot be mapped** to any memory region in the target cmd file
  (e.g., a memory block that does not exist on the target device), flag it to the user
  — do not silently drop the section or invent a region name.

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
- **SysConfig-generated files** — ignore these; they are regenerated after SysConfig
  migration. Detect them two ways using ccs-sysconfig MCP and CCS Project MCP:
  - Call `listGeneratedArtifacts` to get the generated file names. Use the returned names as the exclusion list.
  - Use `sysConfigOutputLocation` from `getProjectDescriptors` to find the SysConfig
    output folder — ignore all files under it.

**Before copying**, present two lists to the user:
1. **Application files** (will be copied to the target project) — list every file path.
2. **Device/SDK files** (will NOT be copied — the target SDK provides its own versions)
   — list every file path and the reason it was excluded (SDK path, SysConfig-generated,
   device startup file, etc.).

Wait for the user to confirm the lists are correct before copying. After confirmation — copy the files to the target project and report the list of files successfully copied.

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
   - **Linker cmd (2.5, if Path A):** confirm `--cmd_file` points to the reconciled
     target `.cmd` file in the target project directory.
   - **Libraries (2.6):** confirm all required libraries are linked.
2. If any value is missing, wrong, or applied to the wrong build configuration:
   - Re-apply it with `setToolFlags` and read back again.
   - If it does not match, stop and report the discrepancy to the user — do not silently proceed with a misconfigured project.
3. Record the verification result in `c2000-migration.md`:
   ```
   Phase 2 settings verification: PASS — all applied settings confirmed via read-back.
   ```
---

**Update `c2000-migration.md`:** Record Phase 2 as COMPLETE. Log the settings compared and
applied, the source file inventory (application files copied, device/generated files
excluded), and any items the user modified or overrode. Then **return to `device-migration.md`**
and proceed to Phase 3.
