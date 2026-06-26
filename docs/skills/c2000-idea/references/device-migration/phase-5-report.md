# Phase 5 — Report Back

> You are in **Phase 5** of the device-migration workflow.
> This is the final phase. When complete, the migration is done.

**Before starting:** State which phases are complete and which phase you are about to
start. If disoriented, re-read `c2000-migration.md` in the target project to recover
your position.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step. Describe what you tried, what the tool returned, and ask the user how
to proceed.

> **Per-target:** When migrating to multiple target devices, run Phase 5 once for each
> target project independently — produce a separate report per target.

---

Re-read `c2000-migration.md` to gather the full migration history, then provide a
structured migration summary to the user:

1. **Per-file table** — one row per file: issues found, issues fixed, issues needing human review.
2. **Unresolved symbols** — list any symbols where a confident replacement could not be
   found. Include file path, line number, and reason. Mark them "needs human review".
3. **Modified files** — list all files changed so the user can review diffs.
4. **Final build status** — pass or fail; list any remaining non-migration errors.
5. **SysConfig status** — if SysConfig was not migrated (MCP unavailable), state the
   remaining manual step: open the source `.syscfg` in CCS SysConfig for the target
   device and reconfigure peripherals to match the source.
6. **SDK version change** — source SDK version → target SDK version.
7. **Deferred / manual actions** — anything the user must do before the project is
   production-ready (SysConfig, hardware testing, bitfield migration if not done).

---

**Update `c2000-migration.md`:** Record Phase 5 as COMPLETE. Add the final build status
and any remaining action items.

**Phase 5 complete.** The device-to-device migration workflow is finished. Ask the user
if they have any questions about the migration results or if any items need further
investigation.
