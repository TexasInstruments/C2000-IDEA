# Phase 3 — SysConfig Migration

> You are in **Phase 3** of the device-migration workflow.

**Before starting:** State which phases are complete and which phase you are about to
start. If disoriented, re-read `c2000-migration.md` in the target project to recover
your position.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step. Describe what you tried, what the tool returned, and ask the user how
to proceed.

### Rules for this phase

- Do keep the source project unchanged — it is the golden reference.
- Do ensure the target syscfg always has the device-support module — add it if missing.
- Do mirror the source's linker style: a CMD module in the target syscfg if the source used
  one, a plain `.cmd` (CMD module removed) if the source used a plain file.
- Don't modify or migrate SysConfig-generated output files — migrate the `.syscfg` instead.
- Don't invoke SysConfig MCP regeneration until the full `.syscfg` migration is complete.

> **Per-target:** When migrating to multiple target devices, run Phase 3 once for each
> target project independently.

---

**This phase always runs.** The target project must always end with a `.syscfg` that
contains the **device-support module** — it generates `device.c`/`device.h` (clocking),
`.opt` (compiler options), and `.cmd.genlibs` (linker libs). Even when the source has no
SysConfig, this phase still ensures the device-support module is present and normalizes the
CMD module to match the source linker style (recorded in Phase 2, step 2.5).

If the ccs-sysconfig MCP is not available, tell the user the SysConfig work must be done
manually (ensure the device-support module is present, migrate any source peripheral config
to the target device, resolve errors, save) and record it as a deferred manual step in
`c2000-migration.md`.

The source `.syscfg` (if any) stays untouched — work on a copy in the target project.

There are two starting points, decided by whether the **source** has a `.syscfg`:
- **Source has a `.syscfg`** → bring it into the target (3.1–3.2), ensure the device-support
  module (3.3), migrate the peripheral configuration to the target device (3.4–3.9), then
  normalize the CMD module (3.10) and save/close (3.11–3.12).
- **Source has no `.syscfg`** → keep the universal project's syscfg (skip 3.1), open it
  (3.2), confirm the device-support module is present (3.3 — it already is), **skip the
  peripheral migration (3.4–3.9)**, then normalize the CMD module (3.10 — remove it, since
  the source used a plain `.cmd`) and save/close (3.11–3.12).

## 3.1 Copy the source `.syscfg` file (source-has-syscfg only)

If the source project has a `.syscfg`, copy it into the target project directory, replacing
the universal template's `.syscfg`. The source `.syscfg` itself stays untouched — work on
the copy.

If the source has no `.syscfg`, skip this step and keep the universal project's `.syscfg`
as-is (it already contains the device-support module).

## 3.2 Open the target `.syscfg`

Open the target project's `.syscfg` via `openFile` — the copy from 3.1, or the universal's
own file when the source had none. Read the `additionalInstructions` field in the result.
**If `additionalInstructions` contains device-specific guidance, it takes precedence over
the generic steps in this phase — follow it first.**

## 3.3 Ensure the device-support module is present

Call `getModuleInstances` and check for the device-support module.
- If it is **missing** (a source `.syscfg` that did not use it), call `addModuleInstances`
  to add it. This guarantees `device.c`/`device.h`, `.opt`, and `.cmd.genlibs` are
  generated for the target.
- If it is **already present** (the universal template, or a source that already used it),
  no action — this case is already correct.

## 3.4 Get migration targets (source-has-syscfg only)

Only required when a source `.syscfg` was brought in (3.1) — its configuration is set for
the source device and must be migrated to the target. If the source had no `.syscfg`, the
universal project is already on the target device; skip to 3.10.

Call `listMigrationTargets` to retrieve all candidate device + package combinations.
- **If the list is empty**, the installed SysConfig version may not support migration for
  this target — report to the user and fall back to manual SysConfig reconfiguration.

## 3.5 Filter (source-has-syscfg only)

Narrow the list to entries matching the target device family the user originally requested
for the migration.

## 3.6 Prompt the user (source-has-syscfg only)

Present the filtered device/package options and ask the user which specific device and
package to use. If no entries match the target family, stop and report to the user with
the full unfiltered list so the user can select the closest available target.

## 3.7 Migrate (source-has-syscfg only)

Call `migrate(device, package)` using the user's selected device and package.

## 3.8 Check errors

Call `getErrorsAndWarnings`. Review all errors and warnings.

## 3.9 Fix issues iteratively

- Use `changeConfiguration` to resolve errors.
- If a module or configurable no longer exists on the target device, use
  `getModuleDescription` and `getInstanceConfiguration` to explore available options
  and find the best equivalent.
- **Only use configurable values that `getModuleDescription` lists as valid** — do not
  invent values not in the allowed set.
- **If no valid equivalent value exists for a removed configurable**, do not set a
  placeholder — remove the configurable or leave it at the module default, and record
  it as a deferred item in `c2000-migration.md` for user review.
- After each fix, re-run `getErrorsAndWarnings` to check progress.
- Iterate until all errors are resolved.
- If an issue cannot be resolved after reasonable investigation, report it to the user.

## 3.10 Normalize the CMD module (mirror the source linker style)

Make the target syscfg's CMD module match the **source linker style** recorded in Phase 2
(step 2.5). First call `getModuleInstances` to see whether a CMD module is currently present.

- **Source used a CMD module** → the target keeps a CMD module. It should already be present
  (it came in with the copied source syscfg). Ensure its sections and the memory regions
  assigned to them match the source project as closely as possible, using
  `changeConfiguration`. If it is somehow absent, `addModuleInstances` to add it.
- **Source used a plain `.cmd` file** → the target must not have a CMD module (Phase 2
  already set up the plain `.cmd`). If one is present (e.g., from the universal template),
  call `removeModuleInstances` to remove it so it does not generate a competing linker
  command file.

## 3.11 Save

**Only call `save` after `getErrorsAndWarnings` returns zero errors.** Saving with
unresolved errors produces invalid generated output. If errors remain that cannot be
resolved, record them as deferred items in `c2000-migration.md` and tell the user before
deciding whether to save.

Call `save` to persist the configuration and regenerate all artifacts.

## 3.12 Close

Call `closeFile`.

The generated outputs are automatically correct after migration — `device.c`/`device.h`
(from the device-support module), the peripheral `.c`/`.h`, the `.opt`, the `.cmd.genlibs`,
and (when a CMD module is present) the generated `.cmd`. No manual migration is needed for
any SysConfig-generated file.

---

**Update `c2000-migration.md`:** Record Phase 3 as COMPLETE. Log whether the source had a
syscfg, the device-support module status (present / added), the target device/package
selected (if migrated), number of errors found and resolved, the CMD-module result (kept as
module / removed for plain cmd), and any unresolved SysConfig issues.

**Phase 3 complete.** Present a summary of what was done to the user (device-support module
ensured, SysConfig migrated to target device/package if applicable, errors found and fixed,
CMD module kept or removed to match the source) and ask: *"Phase 3 is complete. Does
everything look correct? Ready to move to Phase 4 (source code migration)?"* Wait for the
user's confirmation, then **re-read `device-migration.md`** to proceed.
