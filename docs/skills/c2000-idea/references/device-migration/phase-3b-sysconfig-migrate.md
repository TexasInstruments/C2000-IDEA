# Phase 3B — SysConfig Peripheral Migration and CMD Normalization

> You are executing **Phase 3B** of the SysConfig migration.
> Phase 3A is complete: the target `.syscfg` is already open, the `device_support` module
> is confirmed present.
> Your scope: migrate peripheral configuration to the target device, normalize the CMD
> module to match the source linker style, then save and close.
> **Do not re-read phase-3a or any other phase file.**

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess, retry blindly, or skip the step.

---

## Rules for Phase 3B

- Do keep the source project unchanged — it is the golden reference.
- Do mirror the source's linker style: a CMD module in the target syscfg if the source
  used one, a plain `.cmd` (CMD module removed) if the source used a plain file.
- Don't modify or migrate SysConfig-generated output files.
- Don't invoke SysConfig MCP regeneration until the full `.syscfg` migration is complete.

---

## Determine your path (read this first)

**Before running any step, read the Phase 3A checkpoint in `c2000-migration.md`.**
Look for the `Phase 3A: COMPLETE` entry.

If the `c2000-migration.md` checkpoint is missing or unclear, re-derive the path:
- Open the target project's `.syscfg` via `openFile`, then call `getModuleInstances`.
  Inspect the returned module list contains `device_support` or not. If it is absent notify to user, and terminate the migration mentioning the reason.

---

## 3.4 Get migration targets (source-has-syscfg only)

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

> **WARNING: Peripheral module entirely absent from the target device:**
> Some errors indicate that a whole peripheral module (e.g., `EPWM`, `CMPSS`, `ADC`, `CLB` tile 
> count beyond what the target has) simply does not exist on the target device —
> `getModuleDescription` will return an error or empty result for these modules.
> When you encounter this:
> 1. Do **not** try to fix it with `changeConfiguration` — the module cannot be configured
>    on a device that lacks the peripheral.
> 2. Call `removeModuleInstances` to remove the absent module from the syscfg entirely.
> 3. Record it in `c2000-migration.md` as:
>    `FEATURE-ABSENT: <module-name> — peripheral not available on <target-device>`.
> 4. Tell the user immediately: *"Module `<module>` has been removed because this
>    peripheral does not exist on `<target-device>`. You must implement equivalent
>    functionality differently or confirm it is not needed for your application."*
> 5. Re-run `getErrorsAndWarnings` after removal to check for cascading errors.

## 3.10 Normalize the CMD module (mirror the source linker style)

Make the target syscfg's CMD module match the **source linker style** recorded in Phase 2
(step 2.5). First call `getModuleInstances` to see whether a CMD module is currently present.

- **Source used a CMD module** → the target keeps a CMD module. It should already be present
  (it came in with the copied source syscfg).

  If the CMD module is somehow absent, `addModuleInstances` to add it first.

- **Source used a plain `.cmd` file** → the target must not have a CMD module (Phase 2
  already set up the plain `.cmd`). If one is present (e.g., from the universal template),
  call `removeModuleInstances` to remove CMD module, so it does not generate a competing linker
  command file.

## 3.10a Error gate after CMD normalization (required)

**Before saving, call `getErrorsAndWarnings` now** — after step 3.10 and before step 3.11.

- If the result contains **new errors**, treat them the same as in step 3.9 — fix with
  `changeConfiguration`, then re-run `getErrorsAndWarnings` until zero errors remain.
- If the result is **zero errors**, proceed to step 3.11.
- If errors cannot be resolved, record them as deferred items in `c2000-migration.md`
  and tell the user before deciding whether to save.

## 3.11 Save

**Only call `save` after the error gate in step 3.10a returns zero errors.** Saving with
unresolved errors produces invalid generated output.

Call `save` to persist the configuration and regenerate all artifacts.

## 3.12 Close

Call `closeFile`.

The generated outputs are automatically correct after migration — `device.c`/`device.h`
(from the device-support module), the peripheral `.c`/`.h`, the `.opt`, the `.cmd.genlibs`,
and (when a CMD module is present) the generated `.cmd`. No manual migration is needed for
any SysConfig-generated file.


**Update `c2000-migration.md`:** Record Phase 3 as COMPLETE. Log whether the source had a
syscfg, the device-support module status (present / added), the target device/package
selected (if migrated), number of errors found and resolved, the CMD-module result (kept as
module / removed for plain cmd), and any unresolved SysConfig issues.

**Phase 3 complete.** Present a summary of what was done in this phase to the user and ask: *"Phase 3 is complete. Does
everything look correct? Ready to move to Phase 4 (source code migration)?"* Wait for the
user's confirmation, then **return to `device-migration.md`** (the workflow orchestrator
that sent you here) and proceed to Phase 4.
