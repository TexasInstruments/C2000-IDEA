# Phase 1 — Discover, Import, and Validate the Target Project

> You are in **Phase 1** of the device-migration workflow.

**Before starting:** State which phases are complete and which phase you are about to
start. This is the first phase — the migration log (`c2000-migration.md`) does not exist
yet. You will create it in step 1.9, after the target project has been imported, built,
and renamed.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step. Describe what you tried, what the tool returned, and ask the user how
to proceed.

### Rules for this phase

- Do keep the source project unchanged — it is the golden reference.
- Do cross-check CCS Project MCP and IDEA MCP results for consistency.
- Do terminate early if devices are not in the supported migration list.
- Do take file paths and device names from MCP tools — never invent them.

---

## 1.1 Collect and validate required inputs

- Confirm the user has provided the source project name/path and target device.
- If either is missing, ask explicitly before proceeding.

## 1.2 Discover the source project

- **CCS Project MCP:** Call `getProjectDescriptors` and `getProjectProductReferences` for the
  source project. Note the device, SDK paths, build config, and product references.
- **IDEA MCP:** Call `get_projects()`. Locate the source project by name.
- **Cross-check:** The device and project name from both MCPs must agree.
  If they don't, stop and flag the inconsistency to the user.

  > **Device name format note:** IDEA MCP returns lowercase family names (e.g., `f28003x`),
  > while CCS Project MCP may return full part numbers (e.g., `TMS320F28003x`). Treat these as
  > **matching** if the IDEA MCP's lowercase family name appears as a substring of the CCS
  > MCP's device string (case-insensitive). Only stop if the family names are genuinely
  > different (e.g., `f28003x` vs `f28004x`). Do not raise a false inconsistency for
  > format differences that clearly refer to the same device family.
- **Validate source device:** Confirm the discovered source device is in the
  `list_migration_devices()` supported list. If not, notify the user and **terminate**.
- **Normalize user input:** lowercase any user-supplied device name before comparing it
  against the supported list (IDEA MCP family names are lowercase).

## 1.3 Identify SDK type and C2000Ware path

The source project is based on one of three SDKs:
- **C2000Ware** (base SDK) — C2000Ware is the top-level directory itself
- **Motor Control SDK for C2000** — has `c2000ware/` folder at top level
- **Digital Power SDK** — has `c2000ware/` folder at top level

Determine which SDK the source uses from `getProjectProductReferences` and by checking for a `c2000ware/` subfolder at the SDK root.
Then derive:
- If C2000Ware: `c2000ware_path = <sdk_root>`
- If Motor Control SDK or Digital Power SDK: `c2000ware_path = <sdk_root>/c2000ware/`

**Note this path** — it is used heavily in all subsequent phases.
- **Record the exact SDK version string** from `getProjectProductReferences` (e.g.,
  `C2000Ware_5_04_00_00`) — do not derive or guess the version number from the path.
- **Validate the SDK version string against the disk path (required):**
  The version string from `getProjectProductReferences` (e.g., `C2000Ware_5_04_00_00`) and
  the actual folder on disk must match. A project can reference a version that is no longer
  installed, or an older version that is installed at a different path.
  1. Extract the version token from the SDK path returned by `getProjectProductReferences`
     (the last path component of the SDK root, e.g., `C2000Ware_5_04_00_00`).
  2. **If the path exists:** record the confirmed `c2000ware_path` and version — proceed.
  3. **If the path does not exist on disk** (variable not expanded, stale reference, or
     version mismatch): do **not** guess a path — stop and tell the user:
     *"The SDK path `<path>` from the project reference does not exist on disk. Please
     provide the absolute path to the installed C2000Ware root."* Wait for the user to
     supply the correct path before recording `c2000ware_path`.

## 1.4 Locate AGENTS.md (if present)

- Check for `AGENTS.md` at `<c2000ware_path>` (derived in step 1.3). Note its location but
  **do not read it yet** — it will be used later, during source-code migration (Phase 4),
  when writing code for the target device.
  Note whether AGENTS.md was found at the root `<c2000ware_path>` or not. Only check the root 
  `<c2000ware_path>` directory for this file. No need to check any other path.


## 1.5 Import the universal driverlib example for the target device

The starter project location depends on the target device:

| Target device            | Universal project path                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| f28p65x, f2838x          | `<c2000ware_path>/driverlib/<target-device>/examples/c28x/universal/CCS/universal_c2000.projectspec` |
| f2837xd, f2837xs, f2807x | No predictable path — ask the user (see note below)                                                  |
| All other devices        | `<c2000ware_path>/driverlib/<target-device>/examples/universal/CCS/universal_c2000.projectspec`      |

> **f2837xd, f2837xs, f2807x — ask the user:**
> These devices do not have a `universal/` starter project at a predictable path.
> **Ask the user to provide the path to the starter project they want to use as the base.**
> Do not guess or invent a path.

- Import via CCS Project MCP `importProject`.

## 1.6 Build the imported starter project

- Call `buildProject` on the freshly imported universal driverlib example.
- This confirms the import, toolchain, and SDK references are healthy.
- If the build fails, **stop and report to the user** — this is an environment/SDK issue,
  not a migration problem.

## 1.7 Rename the target project

- Call CCS Project MCP `renameProject` to rename the imported project to
  `<sourceProjectName>_<targetDevice>`. Confirm the new name with the user prior to executing the rename. 
- If the source project name includes the source device string, remove the source device string
  (e.g., `myApp_f28003x` → `myApp_f28p55x`, not `myApp_f28003x_f28p55x`).
- This gives the target project a stable, unique name. 

## 1.8 Rebuild after rename

- Call `buildProject` again on the **renamed** project.
- This confirms the rename did not break any internal project references or path
  dependencies.
- If the build fails, **stop and report to the user** — this is a rename/path issue.

## 1.9 Create the migration log file for this target

Create a `c2000-migration.md` file in that **target project's directory**. 
If no write capability is available, stop and tell the user to create the file manually and wait for file creation by user.

This file is the persistent migration log for this target project.

> **WARNING: `c2000-migration.md` is append-only — never overwrite the prior phase sections:**
> Every phase appends its results to this file. When updating the log in any phase:
> - The only exception is the initial creation here in step 1.9 — this is the one and only
>   time the file is created (written from scratch). After this point, all writes are appends.

Seed the log with:
- Source project name and directory
- Source device (family name)
- Target device (family name)
- SDK type (C2000Ware / Motor Control SDK / Digital Power SDK)
- `c2000ware_path`
- SDK version string (exact string from `getProjectProductReferences`, e.g., `C2000Ware_5_04_00_00`)
- Target project name and directory
- AGENTS.md availability
- **Phase 0 pre-flight results** — embed the session-context results captured during Phase 0:
  ```
  Pre-flight (Phase 0):
    IDEA MCP          : <live | ERROR — <message>>
    CCS Project MCP   : <live | ERROR — <message>>
    CCS SysConfig MCP : <live | not available>
    TI ASM MCP        : <live | not available>
  ```
  If Phase 0 was skipped or not run, record: `Pre-flight (Phase 0): not run`.
- Phase status table (seed with):
  ```
  | Phase | Status | Notes |
  |-------|--------|-------|
  | Phase 0 — Pre-flight     | <see below> | <see below> |
  | Phase 1 — Import         | IN PROGRESS | |
  | Phase 2 — Settings       | PENDING | |
  | Phase 3 — SysConfig      | PENDING | |
  | Phase 4 — Migrate Code   | PENDING | |
  | Phase 5 — Report         | PENDING | |
  ```
  **Phase 0 row — set based on session context:**
  - If Phase 0 pre-flight results are present in your session context (you ran Phase 0
    earlier in this session): set `COMPLETE | MCP health check complete`
  - If Phase 0 was not run or context is absent: set `SKIPPED | pre-flight not run`
  - Do **not** hard-code `COMPLETE` for Phase 0 if you did not actually run Phase 0.

**Immediately update the log:** Set Phase 1 status to COMPLETE and add both build results
(step 1.6 pre-rename build and step 1.8 post-rename build).

---

**Phase 1 complete.** Present a summary to the user (source project discovered, SDK type,
target project imported/built/renamed) and ask: *"Phase 1 is complete. Does
everything look correct? Ready to move to Phase 2 (project settings alignment)?"*
Wait for the user's confirmation, then **return to `device-migration.md`** (the workflow
orchestrator that sent you here) and proceed to Phase 2.
