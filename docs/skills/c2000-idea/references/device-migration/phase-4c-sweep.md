# Phase 4C — Final Sweep and Clean Build

> You are executing Phase 4C for one target project.
> Phases 4A (all `.h` files) and 4B (all `.c` files) are already complete.
> **Do not re-read phase-4a-headers.md or phase-4b-sources.md. Do not look ahead.**

---

## Your assignment

Perform a final sweep across all migrated files to confirm zero remaining migration
issues, then execute a clean rebuild to confirm the full project compiles with no errors.

**Stop and ask the user** if any MCP tool call fails or returns an unexpected result.

> **WARNING: MCP hang guard (applies throughout Phase 4C):**
> If `buildProject` or any other MCP tool call has produced **no response at all** after
> a long wait (typically 2–3 minutes), assume the tool has hung. Do **not** keep waiting.
> Record in `c2000-migration.md`:
> `HANG: <tool>(<args>) — no response after timeout. Phase 4C, Step <N>.`
> Tell the user: *"The `<tool>` call has not responded. The MCP tool may have hung.
> Please check the CCS console, restart the MCP server if needed, and tell me
> the result so I can continue."* Wait for the user's response before proceeding.

---

## Briefing fields (confirm before starting)

| Field | Value |
|-------|-------|
| Target project name | `<project name>` |
| Target project directory | `<absolute path>` |
| Source device | `<e.g. f28003x>` |
| Target device | `<e.g. f28p55x>` |
| Active build config | `<e.g. CPU1_FLASH>` |
| `sysConfigOutputLocation` | `<path — do not run migration report on files here>` |
| All `.h` and `.c` files migrated | `<list from Phase 4A and 4B logs>` |

---

## Step 1 — Re-run migration report on all files

Run `get_device_migration_report` on every `.h` and `.c` file listed in your briefing
(the files processed in 4A and 4B). In addition, scan the target project directory for
any `.h` or `.c` files **not** in the 4A/4B list — these may have been added or
regenerated after Phase 3 (e.g., new source files the user added). If additional files
are found outside the `sysConfigOutputLocation` folder and outside the SDK path, add
them to the sweep list and run the migration report on them too. Do **not** run the
report on files inside `sysConfigOutputLocation` — those are generated outputs.

> **`.asm` files are excluded from this sweep.** They were listed in the Phase 4 file
> list with status `MANUAL` during Step 4.1. Do not run `get_device_migration_report`
> on them — the tool does not analyse assembly. Confirm they are logged in
> `c2000-migration.md` as `REVIEW-REQUIRED` and that the user has been notified.
> If any `.asm` file was not logged during Step 4.1 (e.g., added after Phase 3),
> add it to the log now: `REVIEW-REQUIRED: <filename> — assembly file; manual inspection required`

For each file with remaining issues: apply the fix loop from Phase 4B (fix → report →
build → repeat) until clean.

---

## Step 2 — Stuck-sweep guard

Track the total issue count across two consecutive sweeps.

If the issue count is **unchanged across two full sweeps** — the agent is stuck:
- Stop attempting fixes.
- Compile the complete list of unresolved issues (file, line, symbol, reason).
- Report to the user: *"Phase 4C is stuck. The following issues could not be resolved
  after two sweeps. Please review manually."* List every item.
- Record each item in `c2000-migration.md` as `DEFERRED-MANUAL`.
- Proceed to Step 3 (do not block Phase 5 indefinitely).

---

## Step 3 — Review deferred-errors from Phase 4B

Read the deferred-errors list from `c2000-migration.md` (items added during Phase 4B
for cross-file build errors).

For each deferred error:
- Check if it is still present in the current build output.
- If resolved (the file that caused it was migrated): remove from list, note resolved.
- If still present: attempt to fix now, following the same fix loop.
- If unresolvable: escalate to user; record as `DEFERRED-MANUAL`.

---

## Step 4 — Handle inactive-code flags

Check if any remaining report flags are inside inactive code branches:

- **Approach 1** (`#ifdef`): flags inside the source-device `#ifdef` branch are
  expected — the source branch is inactive on the target device. These are
  **functionally complete**; document them as known inactive-code flags.
- **`#if 0` or comments**: flags here are not active code. Document as inactive.

If the build is clean and only inactive-code flags remain, the migration is
functionally complete. Record in `c2000-migration.md`:
```
Phase 4C: Functionally complete. <N> inactive-code flags remain (expected for Approach 1).
```

---

## Step 4a — Regression baseline check (required)

**Purpose:** Verify that code near the migration fixes was not accidentally deleted or
corrupted during Phase 4A/4B edits. This is a focused spot-check — not a full-file
symbol inventory (which would be impractical for large files).

**For each file that had at least one fix applied in Phase 4A/4B:**

1. **Identify the fixed lines.** From `c2000-migration.md`, collect all
   `[<filename>:<line>] FIXED:` entries for this file. These are the lines that were
   actively edited.

2. **Read ±10 lines of context around each fixed line** in the **target** file. Scan
   that context window for:
   - Lines that appear truncated, duplicated, or obviously malformed (edit artifact).
   - A driverlib function call that was present in the source at that location but is
     now entirely absent in the target (and was NOT itself a flagged symbol).
   - An `#ifdef` / `#endif` that is unclosed or mismatched near the edit.

3. **If a problem is found:**
   - Record it in `c2000-migration.md` as:
     ```
     [<filename>:<line>] REGRESSION: <description> — collateral damage near fix at line <fixed-line>
     ```
   - Restore or repair the affected lines using the source file as reference.
   - Re-run `get_device_migration_report` on that file after the restore to confirm no
     new issues were introduced.

4. **If no problems are found** in all context windows, record:
   ```
   Phase 4C regression check: PASS — no collateral damage found near fix sites.
   ```

> **Scope:** Only check context windows around lines that were actively fixed. Do not
> attempt a full-file symbol inventory — the clean build in Step 5 is the authoritative
> final correctness check. This step catches obvious edit artifacts before the build.

---

## Step 5 — Clean rebuild (required)

WARNING: **This step is mandatory before declaring Phase 4 complete.**

Call `buildProject` on the target project. Do **not** rely on an incremental build —
stale `.obj` files from before migration may hide compilation errors. To force a clean
rebuild, call `buildProject` twice:

```
buildProject(<target project name>)   ← first call: builds with any stale objects present
buildProject(<target project name>)   ← second call: builds from the fresh state left by the first call
```

> **Note:** The `buildProject` MCP tool does not accept a `clean=true` parameter. The
> two-call approach achieves a reliable rebuild: the first call compiles all files against
> the current (post-migration) source state, replacing stale `.obj` files; the second call
> confirms a complete, consistent build from that clean object set.
>
> **If the CCS MCP exposes a `cleanProject` tool**, call it once before the first
> `buildProject` instead — that is a more explicit clean and reduces build time (one
> `cleanProject` + one `buildProject` is equivalent to two `buildProject` calls).
> If no `cleanProject` tool is available, use the two-call approach above.

> **WARNING: MCP hang guard:** If either `buildProject` call produces no response after
> ~2–3 minutes, record `HANG: buildProject(<project>) — Phase 4C, Step 5` in
> `c2000-migration.md` and immediately alert the user (see hang guard rule above).
> Do not wait indefinitely for either call.

If the second build fails on errors that were **not** present during incremental builds:
fix them now before proceeding to Phase 5. These are real errors — do not suppress them.

If the second build passes: record `Final clean build: PASS` in `c2000-migration.md`.

If the second build fails: record `Final clean build: FAIL — <X> errors` in
`c2000-migration.md`. **Do not attempt further fixes here** — return the FAIL result to
the orchestrator so it can dispatch Phase 4D (build error triage).

---

## Step 6 — Update c2000-migration.md

Write the following to `c2000-migration.md`:

```
## Phase 4C — Final Sweep
Sweep result: CLEAN (zero issues) / PARTIAL (<N> inactive-code flags, functionally complete)
Deferred-errors resolved: <M>
Remaining DEFERRED-MANUAL: <K> (see items below)
Final clean build: PASS / FAIL

Phase 4C status: COMPLETE
```

> **Do NOT write `Phase 4 status: COMPLETE` here.** That entry is written by the
> orchestrator in Step 4.6 of `phase-4-migrate-code.md` — after Phase 4D has run
> (if needed). Writing it here prematurely would mark Phase 4 complete before the
> build triage loop has had a chance to resolve remaining errors.

Update the Phase status table for Phase 4C only:
```
| Phase 4C — Sweep | COMPLETE | sweep clean, clean build <PASS/FAIL> |
```

---

## Structured result (required — return to orchestrator)

```
=== Phase 4C Complete ===
Final sweep: CLEAN / PARTIAL
Issues resolved in sweep: <N>
DEFERRED-MANUAL items: <K>
Final clean build: PASS / FAIL   ← orchestrator reads this field to decide whether to dispatch Phase 4D

Phase 4C overall:
  Files migrated: <total>
  Issues found: <total>
  Issues fixed: <total>
  Unresolved / DEFERRED-MANUAL: <total>

c2000-migration.md updated: DONE
```

---

## STOP: Stop here

Your scope ends at the clean build result. Do not read `phase-5-report.md`,
`phase-4d-build-triage.md`, or any other file.

Return your structured result to the **orchestrator** (`phase-4-migrate-code.md`).
The orchestrator will:
- If `Final clean build: PASS` → proceed to Step 4.6 (Phase 4 complete summary).
- If `Final clean build: FAIL` → dispatch Phase 4D (build error triage) via Step 4.5.

**Do not ask the user "Ready to move to Phase 5?" here.** That question is asked by
the orchestrator after Phase 4D has run (or been skipped for a passing build), in
Step 4.6.
