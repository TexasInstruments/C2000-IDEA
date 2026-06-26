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
- Don't copy device-specific startup/driver files from the source — use the target SDK's versions.
- Don't modify SDK driverlib source files — only the project's own application source files.

> **Per-target:** When migrating to multiple target devices, run Phase 2 once for each
> target project independently.

Compare the source (golden) project against the target project. Apply settings from the
source to the target, except where differences are legitimate device deltas.

Use CCS MCP `getToolFlags` to read settings from both projects and `setToolFlags` to
apply mismatches to the target.

**For every step in this phase:** before applying any change, tell the user what you
found (source value vs. target value) and what you plan to apply. Wait for the user to
confirm before making the change.

## 2.1 Compiler flags

- Optimization level, debug info, warning levels, language standard, custom flags.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply source settings to target where they differ, after confirmation.

## 2.2 Predefined symbols / defines

- User `#define`s passed at the compiler level (e.g., feature flags, board identifiers).
- Show the user: source defines vs. target defines, and which ones you plan to apply.
- Device-specific defines (e.g., `_F28004x`) should remain as the target device's
  define — do not overwrite.
- Apply after confirmation.

## 2.3 Include paths

- User-added include directories beyond SDK defaults.
- Show the user: source paths vs. target paths, and which ones you plan to add/adjust.
- Adjust any device-specific SDK paths to point to the target device's equivalent.
- Apply after confirmation.

## 2.4 Linker flags

- Stack/heap sizes, output format, map file generation.
- Show the user: source settings vs. target settings, and which ones you plan to apply.
- Apply after confirmation.

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
- The **flash** linker cmd — file name ends with `_flash_ram_lnk.cmd`

Read both files for context before reconciliation.

**Tell the user** which path you selected (Path A or Path B) for both source and target,
and which reference cmd file (RAM or flash) you plan to use as the base. Ask the user
whether they want the RAM or flash linker cmd. If the user doesn't know or has no
preference, **default to flash**.

**Reconciliation:**

Port user customizations from the source cmd onto the target device's cmd file:
- The sections in the target should match the source project.
- The memory regions assigned to sections should match as closely as possible.
- Use the target device's RAM and flash cmd files as the ground truth for valid memory
  regions and addresses on the target device.

## 2.6 Libraries

- Additional libraries linked by the source (math libs, custom .lib files).
- Show the user: source libraries vs. target libraries, and which ones you plan to apply.
- Adjust device-specific library paths to target equivalents.
- Apply after confirmation.

## 2.7 Source file inventory

Identify which source `.c`/`.h` files are user application code (migrate these) vs. files
that should come from the new SDK (ignore these). Use these heuristics:

- **Files under the project directory** are most likely user application code — migrate them.
- **Files referenced from SDK paths** are device/library files — ignore them.
- **SDK files copied into the project** — sometimes `device.c`/`device.h` or driverlib
  files are copied into the project. These are easily detectable by name and should be
  ignored; the target SDK provides its own versions.
- **SysConfig-generated files** — ignore these; they are regenerated after SysConfig
  migration. Detect them two ways:
  - Call `listGeneratedArtifacts` (ccs-sysconfig MCP) to get the generated file names.
  - Use `sysConfigOutputLocation` from `getProjectDescriptors` to find the SysConfig
    output folder — ignore all files under it.

**Before copying**, present two lists to the user:
1. **Application files** (will be copied to the target project) — list every file path.
2. **Device/SDK files** (will NOT be copied — the target SDK provides its own versions)
   — list every file path and the reason it was excluded (SDK path, SysConfig-generated,
   device startup file, etc.).

Wait for the user to confirm the lists are correct before copying.

## 2.8 Post-build steps

- Custom post-build commands (hex file generation, checksums, etc.).
- Apply source post-build steps to target where applicable.

## 2.9 Runtime support (RTS)

- RTS library selection may differ per device but should match in flavor (e.g., floating
  point support level).
- Verify the target uses the equivalent RTS variant.

---

**Update `c2000-migration.md`:** Record Phase 2 as COMPLETE. Log the settings compared
and applied, linker cmd path chosen (A or B), source file inventory (application files
copied, device files excluded), and any items the user modified or overrode.

**Phase 2 complete.** Present a summary of what was done to the user (settings aligned,
linker cmd handled, source files copied, post-build steps applied) and ask: *"Phase 2 is
complete. Does everything look correct? Ready to move to Phase 3 (SysConfig migration)?"*
Wait for the user's confirmation, then **re-read `device-migration.md`** to proceed.
