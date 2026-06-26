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
- Don't modify or migrate SysConfig-generated output files — migrate the .syscfg instead.
- Don't invoke SysConfig MCP regeneration until the full `.syscfg` migration is complete.

> **Per-target:** When migrating to multiple target devices, run Phase 3 once for each
> target project independently.

---

If the source project does not use SysConfig (no `.syscfg` file), skip this phase
entirely — tell the user SysConfig migration is not applicable, update
`c2000-migration.md` with Phase 3 SKIPPED, and proceed to Phase 4.

If the ccs-sysconfig MCP is not available, tell the user that SysConfig migration must
be done manually (open the source `.syscfg` in CCS, switch to target device, resolve
errors, save) and record it as a deferred manual step in `c2000-migration.md`.

If the source project uses SysConfig for pin/peripheral configuration, migrate the
`.syscfg` to the target device. The source `.syscfg` stays untouched — work on a copy.

## 3.1 Copy the source `.syscfg` file

Copy the source `.syscfg` file into the target project directory.
- **If a `.syscfg` already exists in the target** (from the imported template), replace
  it with the source copy.

## 3.2 Open the copied file

Open the copied file via `openFile`. Read the `additionalInstructions` field in the
result. **If `additionalInstructions` contains device-specific guidance, it takes
precedence over the generic steps in this phase — follow it first.**

## 3.3 Get migration targets

Call `listMigrationTargets` to retrieve all candidate device + package combinations.
- **If the list is empty**, the installed SysConfig version may not support migration
  for this target — report to the user and fall back to manual SysConfig reconfiguration.

## 3.4 Filter

Narrow the list to entries matching the target device family the user originally
requested for the migration.

## 3.5 Prompt the user

Present the filtered device/package options and ask the user which specific device and
package to use. If no entries match the target family, stop and report to the user with
the full unfiltered list so the user can select the closest available target.

## 3.6 Migrate

Call `migrate(device, package)` using the user's selected device and package.

## 3.7 Check errors

Call `getErrorsAndWarnings`. Review all errors and warnings.

## 3.8 Fix issues iteratively

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

## 3.9 Handle CMD module (if applicable)

If the source project uses Path A (user `.cmd` file, per Phase 2 step 2.5) and the
target's SysConfig still contains a CMD module, call `removeModuleInstances` to remove
it so it does not generate a conflicting linker command file. (Phase 2 step 2.5 may have
already removed it before `.syscfg` migration — check with `getModuleInstances` first to
avoid a redundant removal.)

## 3.10 Save

**Only call `save` after `getErrorsAndWarnings` returns zero errors.** Saving with
unresolved errors produces invalid generated output. If errors remain that cannot be
resolved, record them as deferred items in `c2000-migration.md` and tell the user before
deciding whether to save.

Call `save` to persist the migrated configuration and regenerate all artifacts.

## 3.11 Close

Call `closeFile`.

The generated outputs (`.c`/`.h`) are automatically correct after migration — no manual
migration needed for SysConfig-generated files.

---

**Update `c2000-migration.md`:** Record Phase 3 as COMPLETE. Log the target
device/package selected, number of errors found and resolved, CMD module status, and
any unresolved SysConfig issues.

**Phase 3 complete.** Present a summary of what was done to the user (SysConfig migrated
to target device/package, errors found and fixed, CMD module handled or not applicable)
and ask: *"Phase 3 is complete. Does everything look correct? Ready to move to Phase 4
(source code migration)?"* Wait for the user's confirmation, then **re-read
`device-migration.md`** to proceed.
