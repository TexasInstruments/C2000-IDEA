# Phase 4 — Migrate Source Code

> You are in **Phase 4** of the device-migration workflow.

**Before starting:** State which phases are complete and which phase you are about to
start. If disoriented, re-read `c2000-migration.md` in the target project to recover
your position.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step. Describe what you tried, what the tool returned, and ask the user how
to proceed.

### Rules for this phase

- Do ask the user for shared (`#ifdef`) vs. clean replacement preference before modifying any files.
- Do process `.h` files before `.c` files — fixing headers first prevents cascading compile errors.
- Do maintain a deferred-errors list during Phase B for cross-file build errors.
- Do use `get_device_migration_report` as the authoritative source — not the VS Code diagnostics panel.
- Do fetch migration collateral links when no `Suggested fix` is provided — read the full `#symbol` anchor block before writing any replacement code.
- Don't recall C2000 migration facts from memory — the MCP is the source of truth.
- Don't run `buildProject` during Phase A (header migration) — the loop is report-only.
- Don't modify SDK driverlib source files — only the project's own application source files.
- Don't read only the page title or surrounding text of a collateral link — navigate to the exact `#anchor` section and read the complete diff block.
- Don't alter existing `//_DEVICE_MIGRATION_` pragma markers — but do add them when generating new `#ifdef` blocks in Approach 1.

> **Per-target:** When migrating to multiple target devices, run Phase 4 once for each
> target project independently.

Precondition: user application files are already copied into the target project (Phase 2,
step 2.7).

**Critical:** All file edits in this phase are made to the **target** project only.
Never edit files in the source project directory. Before editing any file, confirm its
path is under the target project — not the source.

## Before modifying any files

Ask the user:
> "Do you want to (1) keep a shared codebase with `#ifdef` device branches so both source
> and target devices compile from one file (this way the new files in the target project
> have both the old source project code and newly generated migration code), or (2) a
> clean replacement targeting only the new device?"

- **Approach 1 (shared `#ifdef`):** Wrap changed code in `#if`/`#elif`/`#endif` blocks.
  Remember all modifications are only made on the target device project.
  Always add the `//_DEVICE_MIGRATION_` suffix to each `#if`, `#elif`, and `#endif` line
  — this marker lets the C2000 IDEA extension track which branch is active per device.
- **Approach 2 (clean replacement):** Simply replace old symbols with new ones; no
  preprocessor wrappers.

**Record the choice in `c2000-migration.md` header** (after the phase status table) as
`**Strategy:** Shared codebase (#ifdef)` or `**Strategy:** Clean replacement` so any
resume operations follow the same pattern consistently.

## About `//_DEVICE_MIGRATION_` markers

These suffixes on `#if`/`#elif`/`#endif` lines are placed by the C2000 IDEA extension to
track device-specific branches. When a migration report flags a symbol inside such a
block, fix only the **target device's branch**, not the source device branch. Do not
remove or alter existing markers.

## About pre-computed function fixes

When `get_device_migration_report` provides a `Suggested fix` for a function call, apply
it **verbatim** — the fix already accounts for all argument reordering, added/removed
parameters, and type changes. Do not re-derive arguments.

## Fixing issues — easy and complex

The agent must fix **every** issue — easy or complex:
- **Easy (auto-fixable ✓):** apply the suggested replacement directly.
- **Complex (manual review ⚠):** investigate deeply — read surrounding code to understand
  intent, review function definitions, analyze which registers are touched, use
  **ti-asm-mcp** to understand register behavior, then construct the correct fix.
- **If a flagged item is inside a comment or `#if 0` block**, it is not active code —
  skip it and note it as a known inactive-code flag; do not modify the line.
- Only if an item **truly cannot be resolved** does the agent report it to the user.

## Reading Migration Collateral links

Each issue in the report may include a `Migration Collateral` URL of the form:

```
https://dev.ti.com/tirex/content/<C2000Ware_version>/docs/
  <version>_Migration_Guides/html_pages/diff_reports/
  <version>_<sourceDevice>_vs_<version>_<targetDevice>_driverlib.html#<symbol>
```

The `#<symbol>` anchor targets the exact function, enum, or register that changed.
When no `Suggested fix` is provided, retrieve and parse this URL using the following
protocol:

1. **Attempt normal retrieval** — fetch the URL directly.
2. **If retrieval fails**, try in order: `curl`, `wget`, downloading the raw HTML to a
   temp file.
3. **Save the content locally** — do not rely on in-memory streaming for large HTML pages.
4. **Parse the document** — extract text content; strip style/script tags.
5. **Locate the `#<symbol>` anchor** — navigate to the exact section identified by the
   anchor fragment; do not stop at a partial match or a nearby entry.
6. **Read surrounding sections for context** — include the full table row or function
   block at the anchor, plus the immediately preceding and following entries.
7. **Follow referenced structs, enums, typedefs, and macros** — if the diff references
   a type or enum defined elsewhere in the page, locate and read those definitions too.
8. **Summarize differences and migration impact** — old signature → new signature,
   added/removed/renamed parameters, changed types, deprecated alternatives.
9. **Propose code changes** — apply the fix using only data extracted from the collateral.
   Do not infer or hallucinate parameter names or types not present in the page.

**If all retrieval methods fail** (network restriction, firewall block, URL change):
- Try the **ti-asm-mcp** tool to query register/symbol details for the target device
- If that also fails, search the local SDK installation at `C2000Ware/driverlib/{target_device}/`
  for the header file containing the replacement symbol
- If local SDK is not available, **stop and report to user:** "Cannot confidently fix
  `{symbol}` — collateral inaccessible and SDK source not found. Please provide SDK path
  or manual replacement."
- **Never fabricate API calls or register values** when uncertain — fabricated fixes cause
  runtime crashes.

## Background migration check note

The C2000 IDEA extension may be running a continuous migration check in the background.
The VS Code Problems panel may update as files change. Use `get_device_migration_report`
— not the diagnostics panel — as the authoritative source.

---

## Sub-agent dispatch (recommended)

If your platform supports spawning sub-agents (Claude Code Agent tool, Cursor Task
tool / `/multitask`, GitHub Copilot `/fleet`, OpenAI Codex subagents, etc.), dispatch
one sub-agent per file for the fix loop in Phases A and B below. This keeps migration
report data and collateral HTML out of the orchestrator's context window.

**How to dispatch per-file sub-agents:**

1. Build the ordered file list (all `.h` files first, then `.c` files in dependency order).
2. For each file, spawn a sub-agent with a prompt that includes:
   - The file path to migrate
   - The source device and target device names
   - The migration approach (Approach 1 `#ifdef` or Approach 2 clean replacement)
   - The rules from the sections above (markers, pre-computed fixes, collateral protocol)
   - Whether to build after fixing (no for `.h` files, yes for `.c` files)
3. Each sub-agent runs the full fix loop for its file: run
   `get_device_migration_report`, fix all issues, re-run the report until clean (and
   rebuild for `.c` files).
4. Each sub-agent returns a structured result: `{file, issuesFound, issuesFixed,
   unresolvedIssues[], deferredErrors[]}`.
5. The orchestrator collects all results and aggregates the deferred-errors list.

**Sequencing:** Process all files strictly one at a time, in order. Complete one file's
sub-agent before spawning the next. `.h` files first, then `.c` files in dependency
order. Do not run sub-agents in parallel — files may have interdependencies and builds
must reflect the cumulative state of all prior fixes.

**If your platform does not support sub-agents**, process files sequentially using the
steps below. The workflow is identical — only the execution model differs.

## Per-file checkpoint (no-sub-agent path)

After completing each file's fix loop, update `c2000-migration.md` with a per-file entry:
- File path
- Number of issues found
- Number of issues fixed
- Any unresolved issues (with line numbers and reasons)
- Any deferred build errors pointing to other files

Maintain a running progress table in `c2000-migration.md`:

```
| File | Issues | Fixed | Unresolved | Status |
|------|--------|-------|------------|--------|
| adc.h | 2 | 2 | 0 | ✅ |
| epwm.c | 5 | 4 | 1 | ⚠ |
```

Update this table after each file. Status: ✅ = clean, ⚠ = unresolved items, ⏭ = skipped.
This table is the primary recovery point if context is lost — it shows exactly where to resume.

**For large projects (>50 files):** Before starting each file, add its row with status
`⏳ In Progress`. Update to ✅ or ⚠ after completing. If the session is interrupted, the
last `⏳ In Progress` row is the resume point — re-read that file's report and continue.
Do not re-process rows already marked ✅.

---

## 4.0 Pre-migration report

Before starting the per-file loop, call `get_project_migration_report` once on the
entire target project. This gives a total issue count across all files and lets you
build the initial file list ordered by issue count (highest first within each category).
Report to the user: *"Found `<N>` issues across `<M>` files. Starting migration."*

If `get_project_migration_report` is unavailable or fails, proceed with per-file
`get_device_migration_report` calls — the pre-migration report is optional but recommended.

## 4.1 Phase A — Migrate `.h` files first (no build step)

For each header file in the target project:

1. Run `get_device_migration_report` on the file.
2. If the report returns **zero issues**: static analysis found no incompatibilities. This
   does not guarantee full migration — verify includes, types, and peripheral config
   logic. Proceed to the next file.
3. Fix every issue one by one.
4. Re-run the migration report to confirm each item is resolved or no longer relevant
   (e.g., the flagged item was in a comment, not active code).
5. Iterate until the report is clean for this file.
6. **Convergence guard:** if re-running the report after a fix shows the same issue still
   flagged at the same line, the fix did not take effect — do not loop indefinitely.
   After two failed attempts on the same item, stop and report it to the user.

No build step for headers — the loop terminates purely on a clean report. Do not call
`buildProject` during Phase A — it is unnecessary and slow at this stage.

## 4.2 Phase B — Migrate `.c` files (with build step)

Process files in dependency order: files with no project-internal `#include`s first,
then files that only include already-migrated project files. This prevents cascading
fix/break cycles caused by migrating a caller before its included header is clean.

Maintain a **deferred-errors list** `{file, line, error_message}` for cross-file build
errors discovered during this phase.

For each source file in the target project:

1. Run `get_device_migration_report` on the file.
2. If the report returns **zero issues**: verify includes, types, and logic, then build.
3. Fix every issue one by one.
4. Re-run the migration report to confirm resolution or irrelevance.
5. Rebuild to check for compilation issues in that file. **Always call `buildProject` on
   the target project, not the source project.**
6. Iterate report + build until either:
   - The file is clean and compiles successfully, OR
   - The only remaining build errors point to *other* files (the error's file:line is not
     the current file) — add those to the deferred-errors list and move on.
7. **If a build error is unrelated to migration** (pre-existing syntax error, wrong
   `#include`, missing file also missing in source project), record it with a
   `[NON-MIGRATION]` tag in the deferred-errors list and continue — do not block
   migration progress on pre-existing issues.
8. **If a build error is "driverlib header not found"**, this indicates a missing SDK
   include path — stop and ask the user to verify the include path set in Phase 2.
9. Move to the next file.

After all files are processed, review the deferred-errors list. If the referenced file
was migrated and the error disappeared, remove it. If errors persist, carry them into
Phase C.

## 4.3 Phase C — Final sweep

After all files are migrated and the project builds:

1. Re-run `get_device_migration_report` on **every file** (both `.h` and `.c`).
2. **Completion criteria:** report returns zero issues for every file **and** `buildProject`
   returns no errors (warnings acceptable).
3. If issues surface, repeat the fix loop for the affected files.
4. If the issue count is unchanged across two consecutive sweeps, the agent is stuck —
   escalate to the user with a list of the unresolved issues.
5. Review any remaining deferred-errors from Phase B and resolve or flag them.
6. **If the build is clean but report flags linger**, verify the flagged items are inside
   inactive branches (Approach 1 source-device `#ifdef`, `#if 0`, or comments) — if so,
   the migration is functionally complete; document these as known inactive-code flags.

---

**Update `c2000-migration.md`:** Record Phase 4 as COMPLETE. Include the per-file summary
table (issues found, fixed, unresolved), the deferred-errors list status, and the final
build result after Phase C.

**Phase 4 complete.** Present a summary of what was done to the user (files migrated,
issues found/fixed per file, any unresolved items, final build status) and ask: *"Phase 4
is complete. Does everything look correct? Ready to move to Phase 5 (migration report)?"*
Wait for the user's confirmation, then **re-read `device-migration.md`** to proceed.
