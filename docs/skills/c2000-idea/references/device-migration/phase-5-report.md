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

**If the IDEA MCP is unreachable at this point**, construct the summary from
`c2000-migration.md` alone and note that the live migration report could not be
regenerated.

**If build errors remain after Phase 4**, call them out explicitly in the summary and
mark the migration status as "complete with outstanding build issues" — not fully done.

---

**Update `c2000-migration.md`:** Record Phase 5 as COMPLETE. Add the final build status
and any remaining action items.

**Before declaring the migration finished:**
- Scan `c2000-migration.md` for any phase logged as SKIPPED — if a phase was skipped,
  confirm with the user that the skip was intentional and include it in the report.
- Verify that all deferred/manual items from phases 1–4 are explicitly listed in the
  report (item 7 above). Do not mark the migration as complete if any of these are
  unresolved without the user's awareness: SysConfig manual reconfiguration, custom
  `.lib` recompilation, unmappable linker sections, unresolved migration symbols.

**Phase 5 complete.** The device-to-device migration workflow is finished. Ask the user
if they have any questions about the migration results or if any items need further
investigation.
