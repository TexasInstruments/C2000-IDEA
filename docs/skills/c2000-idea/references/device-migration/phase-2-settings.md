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
- Don't copy device-specific startup/driver files (`device.c`/`device.h`) from the source — the target's device-support module regenerates them.
- Don't modify SDK driverlib source files — only the project's own application source files.
- Never call `setToolFlags` for a build configuration other than the one identified in the
  build configuration guard — even if the source has equivalent settings in other configs.


Compare the source (golden) project against the target project. Apply settings from the
source to the target, except where differences are legitimate device deltas.

Use CCS MCP `getToolFlags` to read settings from both projects and `setToolFlags` to
apply mismatches to the target.

## 2.0 Identify the active build configuration

Call `getToolFlags` on the **source** project's **compiler** tool (use the compiler tool
name returned by `getProjectDescriptors` for the source project — commonly
`TI_ARM_C2000_CGT` or the equivalent C2000 compiler tool identifier; use the exact name
from the project descriptor, do not invent one) and identify which build configuration it
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

**Update `c2000-migration.md`:** Replace the placeholder recorded in Phase 1 step 1.9:
```
Active build config: TBD — to be confirmed and filled in Phase 2 (step 2.0)
```
with the confirmed value:
```
Active build config: <confirmed config name, e.g. CPU1_FLASH>
```
All subsequent phases (3, 4, 5) read this value from the log. Do not leave it as TBD.

> **GUARD: Before every `setToolFlags` call in Phase 2, confirm you are passing the
> correct build configuration name.** If you call `setToolFlags` with the wrong config
> or a config name that does not match what was recorded in `c2000-migration.md` at the
> top of this step, all settings will be applied to the wrong configuration and every
> subsequent phase will fail or produce incorrect builds.

**For every step in this phase:** before applying any change, tell the user what you
found (source value vs. target value) and what you plan to apply. Wait for the user to
confirm before making the change.

## 2.1 Compiler flags

- Optimization level, debug info, warning levels, language standard, custom flags.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply source settings to target where they differ, after confirmation.
- **Device-specific flags** (e.g., `--silicon_version`, CPU variant flags) must be set
  to the target device's value — do not copy the source device's value verbatim.

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
  without explicit confirmation.
- Apply after confirmation.

## 2.3 Include paths

- User-added include directories beyond SDK defaults.
- Show the user: source paths vs. target paths, and which ones you plan to add/adjust.
- Adjust any device-specific SDK paths to point to the target device's equivalent.
- **If an include path contains the source device name as a directory component**, replace
  that component with the target device name and verify the resulting path exists on disk.
- **If the adjusted path does not exist on disk**, report it to the user instead of
  adding a broken include path.
- Apply after confirmation.

## 2.4 Linker flags

- Stack/heap sizes, output format, map file generation.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply after confirmation.

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
2. Call `getModuleInstances` and look for a module whose name contains `"CMD"` or
   `"linkerCommandFile"` (exact module ID may vary — match case-insensitively).
3. If such a module instance exists → **CMD module** style. If not → **Plain `.cmd`** style.
4. Call `closeFile` on the source syscfg immediately after detection — never leave it open.

Record the detected style in `c2000-migration.md` — Phase 3 reads it to decide whether the
target syscfg keeps or drops its CMD module.

> **WARNING: Hybrid source — plain `.cmd` + CMD module both present:**
> Some projects have a CMD module in their syscfg **and** a separately-registered plain
> `.cmd` file (the CMD module generates the standard memory map; the plain `.cmd` adds
> custom sections on top). If step 2 finds a CMD module **and** the source's linker tool
> flags (`getToolFlags`) already contain a `--cmd_file` entry pointing to a `.cmd` file
> in the project directory, the source is **hybrid style**. In this case:
> 1. Treat the CMD module as authoritative for the standard memory map sections.
> 2. Treat the plain `.cmd` file as an overlay with custom sections.
> 3. Record **hybrid** in `c2000-migration.md` and flag the user: *"Source uses both a
>    CMD module and a plain `.cmd` overlay. Please confirm whether the target should also
>    use hybrid style, or consolidate into one style."* Wait for confirmation before
>    continuing — do not assume a style.

**If the source uses a CMD module (non-hybrid):** no linker file work in this phase. The
target keeps a CMD module in its syscfg, and the sections are reconciled during the SysConfig
migration (Phase 3). Skip the rest of this step.

**If the source uses a plain `.cmd` file:** set up the target's plain `.cmd` file now, using
the SDK's target-device reference as the starting point. (Phase 3 will remove the CMD
module from the target syscfg so it does not generate a competing linker file.)

> **REQUIRED: Write the reconciled `.cmd` file to disk before registering it.**
> After completing the reconciliation below, you must physically write the reconciled
> content to `<target project directory>/<filename>.cmd` using your file-write tool
> **before** calling `setToolFlags` to register it. If you skip this step, the CCS
> project will register a path that does not exist yet, and the build will fail with
> a "linker command file not found" error that is hard to diagnose. The write must
> succeed (confirm the file exists on disk) before proceeding to the registration step.

**Finding the source `.cmd` file path (required before reconciliation):**

Before reading the source `.cmd`, you must locate it reliably:
1. Call `getToolFlags` (ccs-project MCP) on the **source** project's linker tool for the
   active build configuration.
2. Look for a `--cmd_file` flag entry — its value is the registered `.cmd` file path.
   If you find one, use that exact path to read the source `.cmd` file.
3. If no `--cmd_file` flag is present, scan the source project directory for `.cmd` files.
   If exactly one is found, use it. If multiple are found, see the multi-`.cmd` note below.
4. **If the path is absolute and points outside the project or SDK directory** (e.g.,
   `C:/company/shared/custom.cmd`), that file may not be accessible from the current
   environment. In this case, report the path to the user and ask them to copy the file
   content into the project directory before continuing. Do not proceed with reconciliation
   using a path you cannot read.

> **Multiple `.cmd` files in source (RAM vs FLASH):**
> Some projects include both a RAM linker cmd (e.g., `*_ram_lnk.cmd`) and a flash linker
> cmd (e.g., `*_flash_lnk.cmd`), each registered for a different CCS build configuration.
> If multiple `.cmd` files are found:
> 1. Call `getToolFlags` for the **active build configuration** on the source project.
> 2. Identify which `.cmd` file is registered for that exact configuration.
> 3. Use that file for reconciliation — do not use the other configuration's `.cmd`.
> 4. Tell the user which `.cmd` file you are using and which configuration it belongs to.

**Finding the target device reference linker cmd files:**

The reference cmd files are located at:
`<c2000ware_path>/device_support/<target-device>/common/cmd/`

List all files in the cmd directory and identify the two key reference files:
- The **RAM** linker cmd — look for a file whose name contains `_generic_ram_lnk.cmd` first.
  - If found, present it to the user as the default and wait for confirmation before using it.
  - If not found, fall back to any file ending with `_ram_lnk.cmd`. List all candidates,
    present the first match as the default, and ask the user to confirm or choose a different
    file before proceeding.
- The **flash** linker cmd — look for a file whose name contains `_generic_flash_lnk.cmd` first.
  - If found, present it to the user as the default and wait for confirmation before using it.
  - If not found, fall back to any file ending with `_flash_lnk.cmd`. List all candidates,
    present the first match as the default, and ask the user to confirm or choose a different
    file before proceeding.

**Always wait for explicit user confirmation** on which cmd file to use before reading it —
whether the `_generic_` file was found or a fallback is being used.

Read both files for context before reconciliation.

**Tell the user** which reference cmd file (RAM or flash) you plan to use as the base. Ask
the user whether they want the RAM or flash linker cmd. If the user doesn't know or has no
preference, **default to flash**.

**Reconciliation:**

Port the user's section customizations from the source `.cmd` onto the target device's
reference cmd file:
- The sections in the target should match the source project.
- The memory regions assigned to sections should match as closely as possible.
- Use the target device's RAM and flash cmd files as the ground truth for valid memory
  regions and addresses on the target device.
- **If a source section cannot be mapped** to any memory region in the target cmd file
  (e.g., a memory block that does not exist on the target device), flag it to the user
  — do not silently drop the section or invent a region name.

**Registering the plain `.cmd` with the CCS project (required — plain `.cmd` style only):**

After writing the reconciled `.cmd` file into the target project directory, you must
explicitly register it with the CCS project's linker tool so it is picked up during builds:

1. Call `getToolFlags` (ccs-project MCP) on the target project's linker tool to see what
   flags are already set. Identify whether the linker uses `--cmd_file` or `-@` for
   registering command files. CCS projects typically use `--cmd_file` for explicit linker
   command files; `-@` is for option-response files (a file that contains linker options,
   not a linker command file itself). **Use `--cmd_file`** unless `getToolFlags` shows
   the source project was already using `-@` for this purpose.
2. Call `setToolFlags` on the target project with the linker tool (`TI_ARM_C2000_Linker`
   or equivalent) and add the `.cmd` file path to the `--cmd_file` linker option for the
   active build configuration.
3. Confirm the flag was set by calling `getToolFlags` and verifying the path appears.

> If you skip this registration step the project will build without the custom linker
> script and produce incorrect memory placement or a link error — even if the `.cmd` file
> is present on disk.

> **Ordering:** the plain `.cmd` set up here and the CMD-module removal in Phase 3 must
> both complete before the Phase 4 build. No build happens between Phase 2 and Phase 3, so
> the brief window where both a plain `.cmd` and the syscfg-generated cmd exist is safe —
> but **never run a build until Phase 3 has normalized the CMD module** (removed the CMD
> module from the target syscfg). Building in this window will link TWO competing linker
> command files and fail.

## 2.6 Libraries

- Additional libraries linked by the source (math libs, custom .lib files).
- Show the user: source libraries vs. target libraries, and which ones you plan to apply.
- Adjust device-specific library paths to target equivalents.
- **If the source links a custom `.lib` that was compiled for the source device**, flag
  it to the user — it must be recompiled for the target device before linking.
- Apply after confirmation.

## 2.7 Source file inventory

Identify which source `.c`/`.h` files are user application code (migrate these) vs. files
that should come from the new SDK (ignore these). Use these heuristics:

- **Files under the project directory** are most likely user application code — migrate them.
- **Files referenced from SDK paths** are device/library files — ignore them.
- **SDK files copied into the project** — sometimes `device.c`/`device.h` or driverlib
  files are copied into the project. These are easily detectable and should be ignored.
  - **Always exclude** `device.c` and `device.h` regardless of location — they are
    **regenerated by the target's device-support module** (Phase 3).
  - **Exclude a file named after a driverlib module** (e.g., `adc.c`, `spi.c`) **only if**
    its path is inside the SDK (`c2000ware_path`) or inside the `sysConfigOutputLocation`.
    A file with such a name that lives under the project directory is likely a **user
    application wrapper** — do not silently exclude it. Instead, **flag it to the user**:
    > *"File `<name>` in the project directory shares a name with a driverlib module.
    > Should it be copied to the target as application code, or excluded?"*
    Wait for the user's answer before deciding.
- **SysConfig-generated files** — ignore these; they are regenerated after SysConfig
  migration. This includes the device-support and CMD-module outputs: `device.c`,
  `device.h`, the generated `.cmd`, `.opt`, and `.cmd.genlibs`. Detect them two ways:
  - To call `listGeneratedArtifacts` (ccs-sysconfig MCP), the source `.syscfg` **must be
    open** first. **Important:** Step 2.5 already opened and closed the source `.syscfg`
    for CMD module detection. You must open it again here — call `openFile` on the source
    `.syscfg` path (from `getProjectDescriptors` on the source project), call
    `listGeneratedArtifacts`, then call `closeFile` immediately. Do not leave it open.
    If the source has no `.syscfg`, skip this sub-step and rely on the name-based fallback.
    Use the returned names as the exclusion list.
  - Use `sysConfigOutputLocation` from `getProjectDescriptors` to find the SysConfig
    output folder — ignore all files under it regardless of name.

**If `listGeneratedArtifacts` is unavailable or fails**, exclude all files matching the
names `board.c`, `board.h`, `device.c`, `device.h`, any file with a `.syscfg.c` /
`.syscfg.h` extension, any `.opt` or `.cmd.genlibs` file, and all files under the
`sysConfigOutputLocation` folder — treat them as generated and do not copy them.

**Before copying**, present two lists to the user:
1. **Application files** (will be copied to the target project) — list every file path.
2. **Device/SDK files** (will NOT be copied — the target SDK provides its own versions)
   — list every file path and the reason it was excluded (SDK path, SysConfig-generated,
   device startup file, etc.).

Wait for the user to confirm the lists are correct before copying.

**After confirmation — copy the files (required, do not skip):**

> **Use the physical target project directory path** — not a path derived from the project
> name. Call `getProjectDescriptors` on the **target** project name to obtain its root
> directory path. Use that exact path for all file writes. This matters because Phase 1
> step 1.7 may have recorded that CCS renamed the workspace entry but left the physical
> folder at the original imported name (e.g., `...\universal\`). Writing to a
> name-derived path in that case would silently fail or create files in the wrong location.
> The correct physical path is also recorded in `c2000-migration.md` under
> "Target project directory".

Use your platform's file-write tool to physically copy each confirmed application file into
the target project directory, preserving the relative subdirectory structure. Do not just
acknowledge the list — perform the actual file copy. After copying, report the list of
files successfully written to the target.

## 2.8 Post-build steps

- Custom post-build commands (hex file generation, checksums, etc.).
- Apply source post-build steps to target where applicable.
- **If a post-build command contains the source device name as a literal string**,
  substitute the target device name and confirm with the user.

## 2.9 Runtime support (RTS)

- RTS library selection may differ per device but should match in flavor (e.g., floating
  point support level).
- Verify the target uses the equivalent RTS variant.
- **If the target device requires a different FPU/TMU RTS variant**, use the target
  device's correct variant — do not copy the source RTS name verbatim.

---

## 2.10 Settings verification (read-back diff — required)

After all `setToolFlags` calls in steps 2.1–2.9 are complete, read back the applied
settings from the **target** project and confirm they match what you intended to write.

**For each tool category where you called `setToolFlags`:**

1. Call `getToolFlags` on the **target** project for that tool and the active build
   configuration.
2. Compare the returned value against what you applied:
   - **Compiler flags (2.1):** confirm optimization level, debug info, warning levels,
     any custom flags are present.
   - **Predefined defines (2.2):** confirm every user-added `#define` appears; confirm
     no source-device defines were accidentally copied.
   - **Include paths (2.3):** confirm every added path appears; confirm no path still
     contains the source device name string.
   - **Linker flags (2.4):** confirm stack/heap sizes, map file flag, output format.
   - **Plain `.cmd` registration (2.5, if plain style):** confirm `--cmd_file` points
     to the reconciled target `.cmd` file in the target project directory.
   - **Libraries (2.6):** confirm all required libraries are linked.
   - **Post-build steps (2.8, if any were applied):** confirm the post-build command is
     present and that any device-name substitution was applied correctly.
   - **RTS library (2.9, if changed):** confirm the correct RTS variant for the target
     device is selected.
3. If any value is missing, wrong, or applied to the wrong build configuration:
   - Re-apply it with `setToolFlags` and read back again.
   - If it still does not match after re-apply, stop and report the discrepancy to
     the user — do not silently proceed with a misconfigured project.
4. Record the verification result in `c2000-migration.md`:
   ```
   Phase 2 settings verification: PASS — all applied settings confirmed via read-back.
   ```
   Or, if any mismatch was corrected:
   ```
   Phase 2 settings verification: CORRECTED — <description of what was re-applied>.
   ```

> **This step is not optional.** A setting applied to the wrong build configuration
> or silently ignored by `setToolFlags` will cause a build failure or wrong device
> configuration in Phase 4 — long after this phase has been marked complete.

---

**Update `c2000-migration.md`:** Record Phase 2 as COMPLETE. Log the settings compared and
applied, the **source linker style** (CMD module vs plain `.cmd`) so Phase 3 can normalize
the target's CMD module, the source file inventory (application files copied, device/
generated files excluded), and any items the user modified or overrode.

**Phase 2 complete.** Present a summary of what was done to the user (settings aligned,
linker cmd handled, source files copied, post-build steps applied) and ask: *"Phase 2 is
complete. Does everything look correct? Ready to move to Phase 3 (SysConfig migration)?"*
Wait for the user's confirmation, then **re-read the skill routing file** (`SKILL.md` —
the file that led you here) to find Phase 3 and proceed.
