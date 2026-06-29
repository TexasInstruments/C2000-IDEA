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

- Confirm the user has provided the source project name/path and target device(s).
- If either is missing, ask explicitly before proceeding.

## 1.2 Discover the source project

- **CCS MCP:** Call `getProjectDescriptors` and `getProjectProductReferences` for the
  source project. Note the device, SDK paths, build config, and product references.
- **IDEA MCP:** Call `get_projects()`. Locate the source project by name.
- **Cross-check:** The device, project name, and SDK info from both MCPs must agree.
  If they don't, stop and flag the inconsistency to the user.
- **Validate source device:** Confirm the discovered source device is in the
  `list_migration_devices()` supported list. If not, notify the user and **terminate**.
- **Validate target device:** Confirm every requested target device is also in the
  supported list. If a target is not supported (e.g., F29x migration is not yet
  implemented), tell the user and exclude that target — do not attempt migration for it.
- **If IDEA MCP does not list the project:** call `get_projects(rescan: true)` once to
  re-scan. If still missing, ask the user to verify the project is open in CCS.
- **Device name mismatch:** IDEA MCP uses lowercase family names (e.g., `f28004x`).
  Normalize the user-supplied device name to lowercase before comparing.

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
  2. Confirm that a directory at that path exists on disk (attempt to list its top-level
     contents or read a known file such as `README.md` or `manifest.html`).
  3. **If the path exists:** record the confirmed `c2000ware_path` and version — proceed.
  4. **If the path does not exist on disk** (variable not expanded, stale reference, or
     version mismatch): do **not** guess a path — stop and tell the user:
     *"The SDK path `<path>` from the project reference does not exist on disk. Please
     provide the absolute path to the installed C2000Ware root."* Wait for the user to
     supply the correct path before recording `c2000ware_path`.
- **If the SDK path cannot be resolved** (variable not expanded, path not on disk), stop
  and ask the user for the absolute path to the C2000Ware root before continuing.

## 1.4 Read AGENTS.md (if present)

- Check for `AGENTS.md` at the SDK root. If it exists, read and follow its instructions.
- If the SDK is Motor Control or Digital Power, also check for `AGENTS.md` inside the
  `c2000ware/` subfolder. Read and follow if present.

## 1.5 – 1.9 Import, build, rename, rebuild, and log — one target at a time

> **For each target device, complete steps 1.5 through 1.9 as an atomic unit before
> moving to the next target.** Do not import all targets first and then build/rename — each
> target must be imported, built, renamed, rebuilt, and logged before the next target is
> imported. This prevents name collisions and ensures each target's project is fully
> established before proceeding.

### 1.5 Import the universal driverlib example for the target device

The starter project location depends on the target device:

| Target device          | Universal project path                                                  |
| ---------------------- | ----------------------------------------------------------------------- |
| f2837xd                | `<c2000ware_path>/driverlib/<target-device>/examples/cpu1/universal`    |
| f2837xs                | `<c2000ware_path>/driverlib/<target-device>/examples/cpu1/universal`    |
| f2807x                 | `<c2000ware_path>/driverlib/<target-device>/examples/cpu1/universal`    |
| f28p65x                | `<c2000ware_path>/driverlib/<target-device>/examples/c28x/universal`    |
| All other devices      | `<c2000ware_path>/driverlib/<target-device>/examples/universal`         |

- Import via CCS MCP `importProject`.
- **If the universal project path does not exist on disk**, the target device or SDK
  version may not include a universal example — ask the user to point to the starter
  project they want to use as the base.
- **If `importProject` reports a name conflict** (a project with the same name already
  exists in the workspace), rename the conflicting project to `<existingName>_bak` using
  `renameProject` before reimporting. Inform the user of the rename.

> **WARNING: Dual-core source project detection (required before import):**
> Before importing the target's universal project, check whether the **source** project
> is part of a dual-core pair. Dual-core devices (e.g., `f2837xd`, `f2838x`, `f28p65x`)
> have separate CPU1 and CPU2 projects that are linked in the CCS workspace.
>
> **How to detect:** Call `getProjectDescriptors` on the source project. If the result
> contains a `linkedProjects` field (or equivalent) listing a companion project
> (typically named with `_cpu2` or `_CPU2`), the source is dual-core.
>
> **If the source is dual-core:**
> 1. The target device also needs a CPU2 project. Import the CPU2 universal example:
>    - `f2837xd` / `f2838x`: `<c2000ware_path>/driverlib/<target-device>/examples/cpu2/universal`
>    - `f28p65x`: `<c2000ware_path>/driverlib/<target-device>/examples/c28x/universal_cpu2`
>      (path may vary — check that the path exists on disk before calling `importProject`)
> 2. Import the CPU2 universal project immediately after the CPU1 import (still in step 1.5).
> 3. Build and rename the CPU1 project in steps 1.6–1.7, then build and rename the CPU2
>    project through the same steps (repeat 1.6–1.8 for CPU2 before moving to 1.9).
> 4. Rename the CPU2 project in step 1.7 to `<sourceProjectName>_<targetDevice>_cpu2`.
> 5. Create a **separate** `c2000-migration.md` in the CPU2 target project directory in
>    step 1.9. Record `Core: CPU2` in the log header.
> 6. Run Phases 2–5 independently for the CPU2 project, treating it as a second
>    migration target (same source device, same target device, different core).
>
> **If the source is single-core:** proceed normally — no CPU2 import needed.
>
> **If the CPU2 universal path does not exist on disk**, ask the user to provide the
> CPU2 starter project path before continuing.

### 1.6 Build the imported starter project

- **Before calling `buildProject`**, confirm the project name matches the newly imported
  (or conflict-resolved) starter project — not the source project. Never build the source
  project.
- Call `buildProject` on the freshly imported universal driverlib example.
- This confirms the import, toolchain, and SDK references are healthy **before** any
  renaming. If the build fails at this stage, you have not renamed anything yet — it is
  safe to discard the imported project and diagnose the environment or SDK issue.
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
  `<sourceProjectName>_<targetDevice>`.
- If the source project name includes the source device string, remove it first
  (e.g., `myApp_f28003x` → `myApp_f28p55x`, not `myApp_f28003x_f28p55x`).
- This gives each target project a stable, unique name.
- **If a project with that name already exists**, append a numeric suffix (e.g., `_1`)
  and inform the user of the chosen name.

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

This file is the persistent migration log for this target. When migrating to multiple
targets, each target gets its own separate log — there is never a single shared log.

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
    IDEA MCP         : <live | ERROR — <message>>
    CCS Project MCP  : <live | ERROR — <message>>
    TI ASM MCP       : <live | not available>
    Git branch       : <branch name>
    Git state        : <clean | <N> uncommitted changes>
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

> **Multi-target sequencing:** Phase 1 covers all targets at once (one import + build +
> rename per target). After Phase 1, migrate **one device at a time** — run Phases 2–5
> fully for one target before starting Phase 2 for the next. Do not interleave or batch
> phases across targets.

---

Repeat steps 1.5–1.9 for each remaining target device before continuing.

---

**Phase 1 complete.** Present a summary to the user (source project discovered, SDK type,
all target projects imported/built/renamed) and ask: *"Phase 1 is complete. Does
everything look correct? Ready to move to Phase 2 (project settings alignment)?"*
Wait for the user's confirmation, then **re-read `device-migration.md`** to proceed.

> **Multi-target note:** After all Phase 1 loops complete, confirm with the user:
> *"All target projects are set up. The recommended approach is to complete Phases 2–5
> end-to-end for one device at a time — this gives early validation on the first target
> before investing effort in the others. Alternatively, you can batch all Phase 2s first,
> then all Phase 3s, etc. Which do you prefer?"*
> Follow their preference. **End-to-end per device is strongly recommended** — if the
> first migration reveals issues with the source project or environment, you catch them
> before repeating the same mistake across all targets.
> **Do not start Phase 2 for any target until Phase 1 is complete for all targets.**
>
> **Batch mode — safety rules (if the user chooses batching):**
> "Batch all Phase 2s" means: complete Phase 2 fully for target A, then fully for
> target B, then fully for target C — **one at a time, sequentially**. It does NOT mean
> running Phase 2 steps for multiple targets simultaneously or interleaving edits across
> projects. The same rule applies to every batched phase.
>
> Additional constraints when batching:
> - Each target has its own `c2000-migration.md` log in its own project directory.
>   Never share one log file across targets.
> - After completing a batched phase for all targets, pause and confirm with the user
>   before moving to the next phase batch — allow them to review results per target.
> - If one target fails a phase (e.g., SysConfig migration fails for target B), complete
>   that phase for all other targets first, then return to target B's failure. Do not
>   skip ahead to the next phase for any target that has a pending failure.
> - Track which target you are currently working on in your context. Before every
>   `buildProject`, `setToolFlags`, or file-write call, confirm the project name and
>   directory match the **current target** — not a previously completed target.
