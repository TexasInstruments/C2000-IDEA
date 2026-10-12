# Phase 3E — Error Gate, Save, and Close

> You are executing **Phase 3E** of the SysConfig migration.
> Phases 3A–3D are complete and the target `.syscfg` is open.
> **Do not read any other phase file.**

## 3E.1 Error gate (required)

Call `getErrorsAndWarnings`.
- **Errors:** fix with `changeConfiguration`, then re-run until zero errors remain.
- **Zero errors:** go to 3E.2.
- **Errors that cannot be resolved:** record them as deferred items in `c2000-migration.md`
  and tell the user before deciding whether to save.

## 3E.2 Save

Only after the error gate returns zero errors. Call `save`.

## 3E.3 Close

Call `closeFile`. The generated outputs need no manual migration: `device.c`/`device.h`,
peripheral `.c`/`.h`, `.opt`, `.cmd.genlibs`, and the `.cmd` when a CMD module is present.

**Update `c2000-migration.md`:** Record Phase 3 as COMPLETE. Log whether the source had a
syscfg, the device-support module status, the target device/package/variant, errors found
and resolved, the Phase 3C clock summary, the Phase 3D linker placement, and any unresolved
SysConfig issues.

**Phase 3 complete.** Present a summary to the user and ask: *"Phase 3 is complete. Does
everything look correct? Ready to move to Phase 4 (source code migration)?"* Wait for
confirmation, then **return to `device-migration.md`** and proceed to Phase 4.
