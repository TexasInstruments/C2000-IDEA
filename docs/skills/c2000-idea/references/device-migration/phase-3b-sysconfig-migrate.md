# Phase 3B — SysConfig Peripheral Migration and CMD Normalization

> You are executing **Phase 3B** of the SysConfig migration.
> Phase 3A is complete: the target `.syscfg` is already open, the `device_support` module
> is confirmed present.
> Your scope: migrate peripheral configuration to the target device, normalize the CMD
> module to match the source linker style, then save and close.
> **Do not re-read phase-3a or any other phase file.**

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess, retry blindly, or skip the step.

> **WARNING: If any step after `openFile` causes an unrecoverable error:** call `closeFile`
> on the target `.syscfg` before stopping or escalating to the user. Leaving SysConfig
> in a locked-open state will block all subsequent CCS MCP and SysConfig MCP calls in
> Phase 4. Even if the save failed, `closeFile` discards the in-memory state and
> releases the file lock — it is always safe to call.

---

## Rules for Phase 3B

- Do keep the source project unchanged — it is the golden reference.
- Do mirror the source's linker style: a CMD module in the target syscfg if the source
  used one, a plain `.cmd` (CMD module removed) if the source used a plain file.
- Don't modify or migrate SysConfig-generated output files.
- Don't invoke SysConfig MCP regeneration until the full `.syscfg` migration is complete.
- **Only use configurable values that `getModuleDescription` lists as valid** — do not
  invent values not in the allowed set.

---

## Determine your path (read this first)

**Before running any step, read the Phase 3A checkpoint in `c2000-migration.md`.**
Look for the `Phase 3A: COMPLETE` entry and read the `3B path` field:

- `3B path: full (source had syscfg)` → run steps 3.4 – 3.12 in full.
- `3B path: skip-3.4-3.9 (no syscfg or version fallback)` → the universal project is
  already on the target device or the source `.syscfg` could not be opened.
  **Skip steps 3.4–3.9 entirely.** Go directly to step 3.10 (normalize CMD module)
  then 3.10a → 3.11 → 3.12.

If the `c2000-migration.md` checkpoint is missing or unclear, re-derive the path:
- Open the target project's `.syscfg` via `openFile`, then call `getModuleInstances`.
  Inspect the returned module list:
  - If it contains peripheral modules beyond `device_support` (e.g., ADC, EPWM, SPI
    instances that match the source device's peripherals) → the source syscfg was copied
    in → **full path** (run steps 3.4–3.12).
  - If the only module is `device_support` (universal template content) → the source had
    no syscfg or the copy was not done → **skip path** (go directly to step 3.10).
  Call `closeFile` after inspecting, then proceed with the determined path.

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

## 3.6a Snapshot CMD sections before migration (source-has-syscfg + CMD-module only)

**Before calling `migrate`:** If the source uses a CMD module (as recorded in Phase 2, step
2.5), the migration may alter or reset the linker sections configuration. To preserve the
source's section customizations for later reconciliation (step 3.10), take a snapshot now:

1. Call `getModuleInstances` and find the CMD module instance (name typically contains
   `"CMD"` or `"linkerCommandFile"`).
2. Call `getInstanceConfiguration` on the CMD module instance to retrieve its full
   configuration, including all linker sections and their assigned memory regions.
3. **Write this snapshot to `c2000-migration.md`** under a heading such as:
   ```
   ## Phase 3 — CMD module snapshot (pre-migration)
   <paste the full getInstanceConfiguration result here>
   ```
   Do **not** rely on keeping it in memory only — if the session is interrupted between
   this step and step 3.10, the snapshot must be recoverable from the log file.

If the source uses a plain `.cmd` (no CMD module), skip this step.

## 3.7 Migrate (source-has-syscfg only)

Call `migrate(device, package)` using the user's selected device and package.

## 3.7a Peripheral coverage audit (required after migrate)

After `migrate()` returns, verify that all peripheral modules present in the **source**
syscfg are still present in the **target** syscfg. `migrate()` can silently drop modules
that have no direct equivalent on the target device without raising an error.

1. Call `getModuleInstances` to retrieve the full list of module instances now present in
   the target syscfg.
2. Compare the returned list against the source module list you recorded in Phase 3A
   (step 3.2 — the `getModuleInstances` call on the source syscfg before it was closed).
   - If Phase 3A did not record the source module list, call `getModuleInstances` on the
     **source** project's `.syscfg` now (open it read-only, list instances, close it).
3. For each source module that is **absent** from the target module list:
   - Check whether the peripheral exists on the target device by calling
     `getModuleDescription` for that module name.
   - **If the module description returns valid data** (module exists on target): the module
     was silently dropped by `migrate()`. Attempt to restore it with `addModuleInstances`,
     then re-apply the source instance configuration via `changeConfiguration`.
     Record in `c2000-migration.md`:
     `MIGRATE-RESTORED: <module> — silently dropped by migrate(), manually re-added`
   - **If the module description returns an error or empty result** (module not on target):
     the peripheral genuinely does not exist on this device. Do **not** attempt to add it.
     Record in `c2000-migration.md`:
     `FEATURE-ABSENT: <module> — peripheral not available on <target-device>`
     Tell the user: *"Module `<module>` was present in the source project but does not
     exist on `<target-device>`. It has been removed. You must implement equivalent
     functionality differently or confirm it is not needed for your application."*
4. If all source modules are present in the target, record:
   `Peripheral coverage audit: PASS — all <N> source modules present after migrate()`

> **Note:** This audit is distinct from step 3.9 error fixing. Step 3.9 fixes
> configuration errors within modules that *are* present. This step catches modules that
> were entirely silently dropped. Always run this audit before step 3.8.

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

> **WARNING: Convergence guard — avoid infinite fix loops:**
> Track each error by its exact module + configurable + error message. If the **same
> error** reappears for the **same module and configurable** after **two consecutive
> `changeConfiguration` attempts**, the fix is not taking effect — stop retrying that
> specific error. Record it in `c2000-migration.md` as:
> `DEFERRED-MANUAL: <module>.<configurable> — error persists after 2 fix attempts`
> Tell the user: *"Configuration error on `<module>.<configurable>` could not be
> resolved after 2 attempts. Please review manually."* Then continue to the next error.
> A different error appearing for the same module is **not** convergence — keep fixing.

> **WARNING: Peripheral module entirely absent from the target device:**
> Some errors indicate that a whole peripheral module (e.g., `MFOTA`, `BGCRC`, `CLB` tile
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
  (it came in with the copied source syscfg). Using the snapshot captured in step 3.6a,
  restore/reconcile the linker sections configuration via `changeConfiguration`.

  > **WARNING: Validate memory region names against the target device before restoring sections:**
  > The snapshot was captured from the source device's CMD module and contains memory region
  > names that belong to the **source device** (e.g., `RAMLS0`, `FLASHB`). The target device
  > may use different region names. Before calling `changeConfiguration` to restore each
  > section:
  > 1. Locate the target device's reference `.cmd` file:
  >    - List all files in `<c2000ware_path>/device_support/<target-device>/common/cmd/`.
  >    - **Preferred file:** look for a file whose name contains `_generic_flash_lnk.cmd`. If
  >      found, present it to the user as the default and ask for confirmation before using it.
  >    - If no file containing `_generic_flash_lnk.cmd` exists, list all files ending with
  >      `_flash_lnk.cmd` and ask the user which one to use. The file that Phase 2 step 2.5
  >      already selected is the recommended default — present it as such and wait for user
  >      confirmation.
  >    - Read the confirmed file to obtain the list of valid memory region names for the target.
  > 2. For each section in the snapshot, check that its assigned memory region name exists
  >    in the target device's reference cmd.
  > 3. If the region name is valid → restore via `changeConfiguration` as-is.
  > 4. If the region name does **not exist** on the target → do not blindly restore it.
  >    Find the closest equivalent region on the target (same type: RAM/flash, same page if
  >    applicable). If a clear equivalent exists, use it. If not, flag it to the user:
  >    *"Section `<section>` was assigned to `<region>` on the source device, but this
  >    region does not exist on `<target-device>`. Please select a replacement region."*
  >    Record it as `REVIEW-REQUIRED: linker section <section> — region mapping needed`.

  Verify each section and its assigned memory region is correct for the target device. If the
  CMD module is somehow absent, `addModuleInstances` to add it first.

- **Source used a plain `.cmd` file** → the target must not have a CMD module (Phase 2
  already set up the plain `.cmd`). If one is present (e.g., from the universal template),
  call `removeModuleInstances` to remove it so it does not generate a competing linker
  command file.

  > **WARNING: Delete the stale generated `.cmd` file after `removeModuleInstances` (critical):**
  > Calling `removeModuleInstances` removes the CMD module from the `.syscfg`, but the
  > previously-generated `.cmd` file (e.g., `<device>_<package>.cmd`) is **still physically
  > on disk** in the `sysConfigOutputLocation` folder. CCS will pick up any `.cmd` file it
  > finds in that folder during linking, causing **two competing linker command files** —
  > one from the plain `.cmd` you set up in Phase 2, and one leftover from the removed CMD
  > module. This silently produces incorrect memory placement or a link error.
  >
  > After `removeModuleInstances`:
  > 1. List all files in the `sysConfigOutputLocation` folder
  >    (from `getProjectDescriptors`).
  > 2. Identify any `.cmd` file in that folder (typically named after the device/package,
  >    e.g., `f28003x_ram.cmd`, `f28003x_flash.cmd`).
  > 3. Delete the identified file(s) using your file-delete tool.
  > 4. Confirm deletion succeeded, then proceed.
  >
  > After the subsequent `save()` in step 3.11, the CMD module will not regenerate a `.cmd`
  > file (since it has been removed), so the `sysConfigOutputLocation` folder will remain
  > clean.

## 3.10a Error gate after CMD normalization (required)

**Before saving, call `getErrorsAndWarnings` now** — after step 3.10 and before step 3.11.

The CMD module change (add/remove/reconfigure) can introduce new errors that were not
present after step 3.9. Do not skip this check.

- If the result contains **new errors**, treat them the same as in step 3.9 — fix with
  `changeConfiguration`, then re-run `getErrorsAndWarnings` until zero errors remain.
- If the result is **zero errors**, proceed to step 3.11.
- If errors cannot be resolved, record them as deferred items in `c2000-migration.md`
  and tell the user before deciding whether to save.

## 3.11 Save

**Only call `save` after the error gate in step 3.10a returns zero errors.** Saving with
unresolved errors produces invalid generated output.

Call `save` to persist the configuration and regenerate all artifacts.

> **WARNING: Verify `sysConfigOutputLocation` is clean after save:**
> After `save` completes, list all files in the `sysConfigOutputLocation` folder. Check for
> any files that clearly belong to the **source device** — for example, files whose names
> contain the source device name string (e.g., `f28003x_` when the target is `f28004x`).
> If any source-device files are found:
> 1. Delete them — they are stale artifacts from before the migration and will interfere
>    with the build if include paths or linker tool lists pick them up.
> 2. Record them in `c2000-migration.md` as `STALE-DELETED: <filename>`.
> If all files are named for the target device, proceed normally.

## 3.12 Close

Call `closeFile`.

The generated outputs are automatically correct after migration — `device.c`/`device.h`
(from the device-support module), the peripheral `.c`/`.h`, the `.opt`, the `.cmd.genlibs`,
and (when a CMD module is present) the generated `.cmd`. No manual migration is needed for
any SysConfig-generated file.

---

## 3.12a SysConfig output integration check (required before Phase 4)

Before closing and handing off to Phase 4, verify that the SysConfig-generated outputs are
actually wired into the CCS project build. This check must happen here — Phase 4 builds the
project and a misconfigured output wiring would cause silent wrong compilation.

1. Call `getProjectDescriptors` on the **target** project and note `sysConfigOutputLocation`
   (the folder where SysConfig writes `device.c`, `device.h`, `.opt`, etc.).

2. **Verify `device.c` is compiled:**
   - Confirm `device.c` exists in the `sysConfigOutputLocation` folder on disk.
   - Call `getToolFlags` on the target project's **compiler** tool for the active build
     configuration. Look for `device.c` (or the full path) listed as a source file, or verify
     CCS automatically includes all files in the `sysConfigOutputLocation` folder as sources.
   - If `device.c` is present on disk but NOT in the compiler source list: call the
     appropriate CCS MCP tool to add it as a source file, or tell the user to add it manually
     and do not proceed to Phase 4 until confirmed.

3. **Verify `device.opt` is passed to the compiler:**
   - Call `getToolFlags` on the target project's **compiler** tool for the active build
     configuration.
   - Look for a flag matching `--cmd_file=<...>/device.opt` or `@<...>/device.opt`.
   - If the `.opt` flag is **missing**: the device guard defines from the device-support
     module (e.g., `--define=_LAUNCHXL_F28P55X`) will not be applied — the project may
     compile but produce incorrect device-initialization code.
   - In this case, call `setToolFlags` to add `--cmd_file=<sysConfigOutputLocation>/device.opt`
     to the compiler flags, then read back with `getToolFlags` to confirm it was applied.
   - Record the result in `c2000-migration.md`:
     ```
     Phase 3 — SysConfig output integration: device.c compiled: yes/no, device.opt wired: yes/no
     ```
   - If either check could not be confirmed, flag it to the user:
     *"Please verify in CCS that `device.c` is compiled and `device.opt` is passed to the
     compiler for the `<active build config>` build configuration. Proceeding without these
     will produce incorrect device initialization."*

---

**Update `c2000-migration.md`:** Record Phase 3 as COMPLETE. Log whether the source had a
syscfg, the device-support module status (present / added), the target device/package
selected (if migrated), number of errors found and resolved, the CMD-module result (kept as
module / removed for plain cmd), and any unresolved SysConfig issues.

**Phase 3 complete.** Present a summary of what was done to the user (device-support module
ensured, SysConfig migrated to target device/package if applicable, errors found and fixed,
CMD module kept or removed to match the source) and ask: *"Phase 3 is complete. Does
everything look correct? Ready to move to Phase 4 (source code migration)?"* Wait for the
user's confirmation, then **re-read the skill routing file** (`SKILL.md` — the file that
led you here) to find Phase 4 and proceed.
