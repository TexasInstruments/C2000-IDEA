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
- Do cross-check CCS MCP and IDEA MCP results for consistency.
- Do terminate early if devices are not in the supported migration list.
- Do read AGENTS.md from SDK roots if present.
- Do take file paths and device names from MCP tools — never invent them.

---

## 1.1 Collect and validate required inputs

- Confirm the user has provided the source project name/path and target device.
- If either is missing, ask explicitly before proceeding.

## 1.2 Discover the source project

- **CCS MCP:** Call `getProjectDescriptors` and `getProjectProductReferences` for the
  source project. Note the device, SDK paths, build config, and product references.
- **IDEA MCP:** Call `get_projects()`. Locate the source project by name.
- **Cross-check:** The device and project name from both MCPs must agree.
  If they don't, stop and flag the inconsistency to the user.

  > **Device name format note:** IDEA MCP returns lowercase family names (e.g., `f28003x`),
  > while CCS MCP may return full part numbers (e.g., `TMS320F28003x`). Treat these as
  > **matching** if the IDEA MCP's lowercase family name appears as a substring of the CCS
  > MCP's device string (case-insensitive). Only stop if the family names are genuinely
  > different (e.g., `f28003x` vs `f28004x`). Do not raise a false inconsistency for
  > format differences that clearly refer to the same device family.
- **Validate source device:** Confirm the discovered source device is in the
  `list_migration_devices()` supported list. If not, notify the user and **terminate**.
- **Validate target device:** Confirm the requested target device is also in the
  supported list. If the target is not supported (e.g., F29x migration is not yet
  implemented), tell the user and **terminate** — do not attempt migration.
- **If IDEA MCP does not list the project:** call `get_projects(rescan: true)` once to
  re-scan. If still missing, ask the user to verify the project is open in CCS.
- **Normalize user input:** lowercase any user-supplied device name before comparing it
  against the supported list (IDEA MCP family names are lowercase).

## 1.3 Identify SDK type and C2000Ware path

The source project is based on one of three SDKs:
- **C2000Ware** (base SDK) — C2000Ware is the top-level directory itself
- **Motor Control SDK for C2000** — has `c2000ware/` folder at top level
- **Digital Power SDK** — has `c2000ware/` folder at top level

Determine which SDK the source uses from `getProjectProductReferences` (by the product
name in the references) and by checking for a `c2000ware/` subfolder at the SDK root.
Then derive:
- If C2000Ware: `c2000ware_path = <sdk_root>`
- If Motor Control or Digital Power: `c2000ware_path = <sdk_root>/c2000ware/`

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

- Check for `AGENTS.md` at the SDK root. Note its location but **do not read it yet** — it
  will be used later, during source-code migration (Phase 4), when writing code for the
  target device.
- If the SDK is Motor Control or Digital Power, also check for `AGENTS.md` inside the
  `c2000ware/` subfolder. Note its location but do not read it yet.

## 1.5 – 1.9 Import, build, rename, rebuild, and log

### 1.5 Import the universal driverlib example for the target device

The starter project location depends on the target device:

| Target device            | Universal project path                                               |
| ------------------------ | -------------------------------------------------------------------- |
| f28p65x                  | `<c2000ware_path>/driverlib/<target-device>/examples/c28x/universal` |
| f2837xd, f2837xs, f2807x | No predictable path — ask the user (see note below)                  |
| All other devices        | `<c2000ware_path>/driverlib/<target-device>/examples/universal`      |

> **f2837xd, f2837xs, f2807x — ask the user:**
> These devices do not have a `universal/` starter project at a predictable path.
> **Ask the user to provide the path to the starter project they want to use as the base.**
> Do not guess or invent a path.

- Import via CCS MCP `importProject`.
- **If the path does not exist on disk**, ask the user to provide the path to the starter
  project they want to use as the base. Do not guess or invent a path.
- **If `importProject` reports a name conflict** (a project with the same name already
  exists in the workspace), rename the conflicting project to `<existingName>_bak` using
  `renameProject` before reimporting. Inform the user of the rename.

### 1.6 Build the imported starter project

- **Before calling `buildProject`**, confirm the project name matches the newly imported
  (or conflict-resolved) starter project — not the source project. Never build the source
  project.
- Call `buildProject` on the freshly imported universal driverlib example.
- This confirms the import, toolchain, and SDK references are healthy **before** any
  renaming.
- If the build fails, **stop and report to the user** — this is an environment/SDK issue,
  not a migration problem. Include the compiler error output in your report so the user
  can diagnose the toolchain or SDK installation.

> **WARNING: MCP hang guard — `buildProject` may not respond:**
> `buildProject` is a long-running synchronous call. If the MCP tool call has produced
> **no response at all** (no result, no error, no progress output) after a long wait
> (typically 2–3 minutes), assume the tool has hung. Do **not** keep waiting.
> Immediately:
> 1. The `c2000-migration.md` log file is created in step 1.9 (after this build). It
>    does not exist yet. Instead, note the hang in your context / conversation and
>    record it in step 1.9 when the log is created:
>    `HANG: buildProject(<project>) — no response after timeout. Phase 1, step 1.6.`
> 2. Stop and tell the user:
>    *"The `buildProject` call has not responded. The MCP tool may have hung.
>    Please check the CCS console, restart the MCP server if needed, and tell me
>    whether the build succeeded or failed so I can continue."*
> 3. Wait for the user's response before taking any further action.

### 1.7 Rename the target project

- Call CCS MCP `renameProject` to rename the imported project to
  `<sourceProjectName>_<targetDevice>`. Confirm the new name with the user prior to executing the rename. 
- If the source project name includes the source device string, remove it first
  (e.g., `myApp_f28003x` → `myApp_f28p55x`, not `myApp_f28003x_f28p55x`).
  - **If the source device name appears multiple times** in the project name, remove only
    the **last** occurrence (closest to the end). Trim any resulting double-underscores
    (`__` → `_`). Show the proposed new name to the user and wait for confirmation before
    applying the rename.
- This gives the target project a stable, unique name.
- If rename fails, stop and report to the user. 

> **WARNING: Verify that the physical on-disk directory was also renamed (required):**
> CCS `renameProject` renames the project in the workspace but may or may not rename the
> physical directory on disk depending on the CCS version and whether the project was
> imported in-place or copied. After `renameProject` returns:
> 1. Call `getProjectDescriptors` on the **new project name** and read its root directory
>    path from the result.
> 2. Confirm the directory path ends with the new project name (e.g., `...\myApp_f28p55x\`),
>    not the old name (e.g., `...\universal\` or `...\myApp_f28003x\`).
> 3. **If the directory path still shows the old name** (CCS renamed the workspace entry
>    but not the folder):
>    - All subsequent file-write operations (Phase 2 source copy, Phase 3 syscfg copy, etc.)
>      must use the **actual physical directory path** returned by `getProjectDescriptors`,
>      not a path derived from the new project name.
>    - Record the discrepancy in `c2000-migration.md`:
>      `NOTE: CCS project renamed to <newName> but physical directory is still <oldPath>. Using physical path for all file operations.`
>    - Inform the user: *"CCS renamed the project but the on-disk folder was not renamed.
>      All file operations will use the physical path `<oldPath>`. You may rename the
>      folder manually after migration if desired."*
> This check prevents file-write operations from targeting a non-existent path and failing
> silently or creating files in the wrong location.

### 1.8 Rebuild after rename

- Call `buildProject` again on the **renamed** project.
- This confirms the rename did not break any internal project references or path
  dependencies.
- If the build fails, **stop and report to the user** — this is a rename/path issue.
  Include the compiler error output so the user can diagnose.

> **WARNING: MCP hang guard — `buildProject` may not respond:**
> Same rule as step 1.6. If `buildProject` produces no response after a long wait
> (2–3 minutes), note the hang in your context and record it in step 1.9:
> `HANG: buildProject(<renamedProject>) — no response after timeout. Phase 1, step 1.8.`
> Stop and ask the user whether the build succeeded or failed before continuing.

### 1.9 Create the migration log file for this target

Create a `c2000-migration.md` file in that **target project's directory** using your
platform's file-write tool (e.g., VS Code's built-in file creation, or a shell
`write_file` / `echo` command — whichever is available in your agent environment).
If none of those tool names work, use your agent's code-execution capability to create
the file via a shell command (e.g., PowerShell `Set-Content` or bash `cat >`). If no
write capability is available at all, stop and tell the user to create the file manually
with the content specified below, then confirm creation before continuing.

This file is the persistent migration log for this target project.

> **WARNING: `c2000-migration.md` is append-only — never overwrite prior phase sections:**
> Every phase appends its results to this file. When updating the log in any phase:
> - **Read the current file content first**, then write back the existing content plus your
>   new addition. Never write the file from scratch — doing so would destroy all prior
>   phase records.
> - If your agent environment provides an append tool (e.g., `append_file`), prefer it over
>   a full `write_file` to reduce the risk of accidental overwrite.
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
- **Active build configuration name** — record as:
  `Active build config: TBD — to be confirmed and filled in Phase 2 (step 2.0)`
  The active build config is identified in Phase 2 by calling `getToolFlags` on the source
  project. It cannot be reliably determined in Phase 1. Phase 2 will update this field once
  the config is confirmed. All subsequent phases read the final value from the log.
- **Phase 0 pre-flight results** — embed the session-context results captured during Phase 0:
  ```
  Pre-flight (Phase 0):
    IDEA MCP          : <live | ERROR — <message>>
    CCS Project MCP   : <live | ERROR — <message>>
    CCS SysConfig MCP : <live | not available>
    TI ASM MCP        : <live | not available>
    Git               : <in repo | not a repository | not available>
    Git branch        : <branch name | n/a>
    Git state         : <clean | dirty — user acknowledged | n/a>
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
If any `HANG:` was noted in your context during steps 1.6 or 1.8, record it here now.


---

**Phase 1 complete.** Present a summary to the user (source project discovered, SDK type,
target project imported/built/renamed) and ask: *"Phase 1 is complete. Does
everything look correct? Ready to move to Phase 2 (project settings alignment)?"*
Wait for the user's confirmation, then **return to `device-migration.md`** (the workflow
orchestrator that sent you here) and proceed to Phase 2.
