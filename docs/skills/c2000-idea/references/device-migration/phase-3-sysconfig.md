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
- Do ensure the target syscfg always has the device-support module — add it if missing.
- Do mirror the source's linker style: a CMD module in the target syscfg if the source used
  one, a plain `.cmd` (CMD module removed) if the source used a plain file.
- Don't modify or migrate SysConfig-generated output files — migrate the `.syscfg` instead.
- Don't invoke SysConfig MCP regeneration until the full `.syscfg` migration is complete.


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

---

## Phase 3 is split into two focused sub-phases to keep each context window small:

| Sub-phase | File | Scope |
|-----------|------|-------|
| **3A** | `phase-3a-sysconfig-baseline.md` | Copy syscfg, open, ensure `device_support` module |
| **3B** | `phase-3b-sysconfig-migrate.md` | Migrate peripherals, fix errors, normalize CMD, save, close |

### Execution order

1. **Read `phase-3a-sysconfig-baseline.md` now** and complete Phase 3A in full.
   Phase 3A ends with the `.syscfg` open and the `device_support` module confirmed present.
   It does **not** close the file.

2. **After Phase 3A is done, read `phase-3b-sysconfig-migrate.md`** and complete Phase 3B.
   Phase 3B covers all remaining steps: peripheral migration (if source had a syscfg),
   CMD module normalization, error gate, save, and close.

> **Do not read both files at once.** Read 3A, execute it fully, then read 3B and
> execute it. This prevents context overload on long SysConfig migrations.

