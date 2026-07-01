# Phase 3A — SysConfig Baseline (Copy, Open, Device-Support)

> You are executing **Phase 3A** of the SysConfig migration.
> Your scope: copy the source syscfg into the target, open it, and ensure the
> `device_support` module is present. Nothing more.
> **Do not read phase-3b or any other phase file yet.**

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess, retry blindly, or skip the step.

---

## Rules for Phase 3A

- Do keep the source project unchanged — it is the golden reference.
- Do ensure the target syscfg always has the `device_support` module — add it if missing.
- Don't modify or migrate SysConfig-generated output files — migrate the `.syscfg` instead.
- Work on a copy of the source `.syscfg` inside the target project; never touch the source.

---

## 3.1 Copy the source `.syscfg` file (source-has-syscfg only)

If the source project has a `.syscfg`, copy it into the target project directory, replacing
the target universal template's `.syscfg` (this means remove the universal projects `.syscfg`fike). 
The source `.syscfg` itself stays untouched — work on the copy.

If the source has no `.syscfg`, skip this step and keep the universal project's `.syscfg`
as-is (it already contains the device-support module).

## 3.2 Open the target `.syscfg`

Open the target project's `.syscfg` via `openFile` (ccs-sysconfig MCP) — the copy from 3.1,
or the universal's own file when the source had none. Read the `additionalInstructions`
field in the result.

## 3.3 Ensure the device-support module is present

Call `getModuleInstances` and check for the device-support module.

**The device-support module name is `device_support`.** Look for a match using these rules:
- The complete module name is `/driverlib/device_support.js`
- **Instance name:** compare the instance's `name` field against `"device_support"` —
  this comparison is **case-sensitive** (exact string match).

Use the first rule that produces a match. If neither rule finds a match, the module is absent.

- If it is **missing** (a source `.syscfg` that did not use it), call `addModuleInstances`
  with the module name `"device_support"` to add it. This guarantees `device.c`/`device.h`,
  `.opt`, and `.cmd.genlibs` are generated for the target.
- If it is **already present** (the universal template, or a source that already used it),
  no action — this case is already correct.


## Phase 3A complete — hand off to Phase 3B

Write a micro-checkpoint to `c2000-migration.md`:
```
Phase 3A: COMPLETE
  syscfg copied: yes / no (source had no syscfg)
  source-has-syscfg: yes / no
  device_support module: present / added
  openFile result: OK / version-incompatibility-fallback
```

**Do not call `save` or `closeFile` yet — the file is still open for Phase 3B.**

Re-read `phase-3b-sysconfig-migrate.md` and proceed immediately.
> Phase 3B will read this checkpoint to determine which path to execute.
