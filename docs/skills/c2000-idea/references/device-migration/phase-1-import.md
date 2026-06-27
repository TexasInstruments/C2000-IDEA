# Phase 1 — Discover, Import, and Validate the Target Project

> You are in **Phase 1** of the device-migration workflow.

**Before starting:** State which phases are complete and which phase you are about to
start. This is the first phase — the migration log (`c2000-migration.md`) does not exist
yet. You will create it in step 1.8, after the target project has been imported and
renamed.

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
- **If the SDK path cannot be resolved** (variable not expanded, path not on disk), stop
  and ask the user for the absolute path to the C2000Ware root before continuing.

## 1.4 Read AGENTS.md (if present)

- Check for `AGENTS.md` at the SDK root. If it exists, read and follow its instructions.
- If the SDK is Motor Control or Digital Power, also check for `AGENTS.md` inside the
  `c2000ware/` subfolder. Read and follow if present.

## 1.5 – 1.9 Import, rename, build, and log — one target at a time

> **For each target device, complete steps 1.5 through 1.9 as an atomic unit before
> moving to the next target.** Do not import all targets first and then rename — each
> target must be imported, renamed, built, and logged before the next target is imported.
> This prevents name collisions and ensures each target's project is fully established
> before proceeding.

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

### 1.6 Rename the target project immediately after import

- Call CCS MCP `renameProject` to rename the just-imported project to
  `<sourceProjectName>_<targetDevice>`.
- If the source project name includes the source device string, remove it first
  (e.g., `myApp_f28003x` → `myApp_f28p55x`, not `myApp_f28003x_f28p55x`).
- This gives each target project a stable, unique name before any build.
- **If a project with that name already exists**, append a numeric suffix (e.g., `_1`)
  and inform the user of the chosen name.

### 1.7 Build the renamed target project

- **Before calling `buildProject`**, confirm the project name matches the renamed target
  project — not the source project and not `universal`. Never build the source project.
- Call `buildProject` on the renamed project.
- This confirms the import, toolchain, and SDK references are healthy.
- If the build fails, **stop and report to the user** — this is an environment/SDK issue,
  not a migration problem. Include the compiler error output so the user can diagnose the
  toolchain or SDK installation.
- If the build succeeds, rebuild once more to confirm the rename did not break any
  internal path references. If the second build also succeeds, proceed.

> **⚠ MCP hang guard — `buildProject` may not respond:**
> `buildProject` is a long-running synchronous call. If the MCP tool call has produced
> **no response at all** (no result, no error, no progress output) after a long wait
> (typically 2–3 minutes), assume the tool has hung. Do **not** keep waiting.
> Immediately:
> 1. The `c2000-migration.md` log file is created in step 1.8 (after this build). It
>    does not exist yet. Instead, note the hang in your context / conversation and
>    record it in step 1.8 when the log is created:
>    `HANG: buildProject(<project>) — no response after timeout. Phase 1, step 1.7.`
> 2. Stop and tell the user:
>    *"The `buildProject` call has not responded. The MCP tool may have hung.
>    Please check the CCS console, restart the MCP server if needed, and tell me
>    whether the build succeeded or failed so I can continue."*
> 3. Wait for the user's response before taking any further action.

### 1.8 Create the migration log file for this target

Create a `c2000-migration.md` file in that **target project's directory** using your
platform's file-write tool (e.g., VS Code's built-in file creation, or a shell
`write_file` / `echo` command — whichever is available in your agent environment).

This file is the persistent migration log for this target. When migrating to multiple
targets, each target gets its own separate log — there is never a single shared log.

Seed the log with:
- Source project name and directory
- Source device (family name)
- Target device (family name)
- SDK type (C2000Ware / Motor Control SDK / Digital Power SDK)
- `c2000ware_path`
- SDK version string (exact string from `getProjectProductReferences`, e.g., `C2000Ware_5_04_00_00`)
- Target project name and directory
- **Active build configuration name** (e.g., `CPU1_FLASH`, `Debug`) — this is the build
  config all Phase 2 settings are applied to. All subsequent phases read this from the log
  rather than re-detecting it. Record it as: `Active build config: <config-name>`
- Phase 1 status: IN PROGRESS

**Immediately update the log:** Set Phase 1 status to COMPLETE and add the build result.
If a `HANG:` was noted in your context during step 1.7, record it here now in the log.

---

Repeat steps 1.5–1.8 for each remaining target device before continuing.

---

**Phase 1 complete.** Present a summary to the user (source project discovered, SDK type,
all target projects imported/renamed/built) and ask: *"Phase 1 is complete. Does
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
