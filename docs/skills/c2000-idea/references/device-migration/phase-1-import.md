# Phase 1 — Discover, Import, and Validate the Target Project

> You are in **Phase 1** of the device-migration workflow.

**Before starting:** State which phases are complete and which phase you are about to
start. If this is the first phase, confirm that `c2000-migration.md` has been created
in the target project directory.

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
- **If the SDK path cannot be resolved** (variable not expanded, path not on disk), stop
  and ask the user for the absolute path to the C2000Ware root before continuing.

## 1.4 Read AGENTS.md (if present)

- Check for `AGENTS.md` at the SDK root. If it exists, read and follow its instructions.
- If the SDK is Motor Control or Digital Power, also check for `AGENTS.md` inside the
  `c2000ware/` subfolder. Read and follow if present.

## 1.5 Import the universal driverlib example for the target device

The starter project location depends on the target device:

| Target device          | Universal project path                                                  |
| ---------------------- | ----------------------------------------------------------------------- |
| f2837xd                | `<c2000ware_path>/driverlib/<target-device>/examples/cpu1/universal`    |
| f2837xs                | `<c2000ware_path>/driverlib/<target-device>/examples/cpu1/universal`    |
| f2807x                 | `<c2000ware_path>/driverlib/<target-device>/examples/cpu1/universal`    |
| f28p65x                | `<c2000ware_path>/driverlib/<target-device>/examples/c28x/universal`    |
| All other devices      | `<c2000ware_path>/driverlib/<target-device>/examples/universal`         |

- Import via CCS MCP `importProject`.
- Repeat for each target migration device.
- **If the universal project path does not exist on disk**, the target device or SDK
  version may not include a universal example — ask the user to point to the starter
  project they want to use as the base.
- **If `importProject` reports a name conflict** (project already exists in workspace),
  rename the existing project out of the way or ask the user to delete it before
  reimporting.

## 1.6 Build the imported starter project

- Call `buildProject` on the freshly imported universal driverlib example.
- This confirms the import, toolchain, and SDK references are healthy.
- If the build fails, **stop and report to the user** — this is an environment/SDK issue,
  not a migration problem. Include the compiler error output in your report so the user
  can diagnose the toolchain or SDK installation.

## 1.7 Rename the target project

- Call CCS MCP `renameProject` to rename the imported project to
  `<sourceProjectName>_<targetDevice>`.
- If the sourceProjectName includes the source project device, remove the source device name.
- This establishes a clear naming convention and prevents collisions when migrating to
  multiple targets.
- **If a project with that name already exists**, append a numeric suffix (e.g., `_1`)
  and inform the user of the chosen name.

## 1.8 Rebuild after rename

- Call `buildProject` again on the renamed project.
- This confirms the rename did not break any internal project references or path
  dependencies.
- If the build fails, **stop and report to the user** — this is a rename/path issue.

---

**Update `c2000-migration.md`:** Record Phase 1 as COMPLETE. Log the source project name,
source device, SDK type, c2000ware_path, target project name(s), and build status.

**Phase 1 complete.** Present a summary of what was done to the user (source project
discovered, SDK type, target project imported/renamed/built) and ask: *"Phase 1 is
complete. Does everything look correct? Ready to move to Phase 2 (project settings
alignment)?"* Wait for the user's confirmation, then **re-read `device-migration.md`**
to proceed.

> **Multi-target note:** Phase 1 covers all targets at once (one import + rename per
> target). Do **not** start Phase 2 for any target until Phase 1 is fully complete for
> all targets.
