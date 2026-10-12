# Phase 3 — SysConfig Migration (Orchestrator)

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
- Do mirror the source's linker style: a CMD module in the target syscfg if the source used
  one, a plain `.cmd` (CMD module removed) if the source used a plain file.
- Don't modify or migrate SysConfig-generated output files — migrate the `.syscfg` instead.
- Don't invoke SysConfig MCP regeneration until the full `.syscfg` migration is complete.

---

**This phase always runs.** The target project must always end with a `.syscfg` file that
contains the **device-support module** — it generates `device.c`/`device.h` (clocking),
`.opt` (compiler options), and `.cmd.genlibs` (linker libs). Even when the source has no
SysConfig, this phase still ensures the device-support module is present and normalizes the
CMD module to match the source linker style (recorded in Phase 2, step 2.5).

If the ccs-sysconfig MCP is not available, tell the user the SysConfig work must be done
manually and record it as a deferred manual step in `c2000-migration.md`.

---

## Phase 3 is split into focused sub-phases to keep each context window small:

| Sub-phase | File | Scope |
|-----------|------|-------|
| **3A** | `phase-3a-sysconfig-baseline.md` | Copy syscfg, open, ensure `device_support` module |
| **3B** | `phase-3b-sysconfig-migrate.md` | Migrate peripherals, fix errors |
| **3C** | `phase-3c-clocking.md` | Target CPU at maximum, downstream clocks matched to the source |
| **3D** | `phase-3d-linker.md` | Linker sections placed for the target in the source linker style |
| **3E** | `phase-3e-sysconfig-save.md` | Error gate, save, close |

### Execution order

1. **Read `phase-3a-sysconfig-baseline.md` now** and complete Phase 3A in full.
   Phase 3A ends with the `.syscfg` file open and the `device_support` module confirmed present.
   It does **not** close the file.

2. **After Phase 3A is done, read `phase-3b-sysconfig-migrate.md`** and complete Phase 3B.
   Phase 3B covers peripheral migration (if source had a syscfg).

3. **After Phase 3B is done, read `phase-3c-clocking.md`** and complete Phase 3C.

4. **After Phase 3C is done, read `phase-3d-linker.md`** and complete Phase 3D.

5. **After Phase 3D is done, read `phase-3e-sysconfig-save.md`** and complete Phase 3E.

> **Read one sub-phase file at a time.** Execute it fully before reading the next. This
> prevents context overload on long SysConfig migrations.

