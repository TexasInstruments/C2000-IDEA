# Phase 4A — Migrate Header Files (`.h`)

> You are a **sub-agent** executing Phase 4A for a single target project.
> You were briefed by the orchestrator. All context you need is in your briefing.
> **Do not read any other phase file. Do not look ahead. Do not act beyond this file's scope.**

---

## Your assignment

You are migrating all `.h` header files in **one target project** from the source device
to the target device. You must:

1. Migrate every `.h` file one at a time.
2. Use `get_device_migration_report` as the only authoritative source of issues.
3. Record a micro-checkpoint in `c2000-migration.md` after every individual fix.
4. Return a structured result to the orchestrator when all headers are done.

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess or skip.

---

## Briefing fields (confirm before starting)

The orchestrator should have provided all of the following. If any is missing, ask the
orchestrator before proceeding:

| Field | Value |
|-------|-------|
| Target project directory | `<absolute path>` |
| Target project name | `<project name>` |
| Source device | `<e.g. F28003x>` |
| Target device | `<e.g. F28P55x>` |
| Migration approach | Approach 1 (`#ifdef`) OR Approach 2 (clean replacement) |
| Active build config | `<e.g. CPU1_FLASH>` |
| `sysConfigOutputLocation` | `<path — do not edit any file under this folder>` |
| List of `.h` files to migrate | `<paths provided by orchestrator>` |

> **REQUIRED: Verify migration approach from `c2000-migration.md` before touching any file:**
> Read `c2000-migration.md` and locate the `## Phase 4 — Migration Strategy` section.
> Confirm the `Strategy:` value matches the `Migration approach` in your briefing above.
>
> - If the log says `Strategy: Approach 1 (shared #ifdef)` → use `#ifdef` wrapping for every fix.
> - If the log says `Strategy: Approach 2 (clean replacement)` → replace symbols directly for every fix.
> - **If the section is missing or the values conflict:** stop and ask the orchestrator
>   to confirm the strategy before proceeding. Do not guess or default to one approach.
>
> Apply this approach **consistently to every file** — all `.h` files must use the same strategy.
> Do not switch approach mid-way. The approach in the log is the authoritative source.

---

## Rules for Phase 4A

- Process `.h` files in the order provided by the orchestrator.
- Use only `get_device_migration_report`.
- **If `get_device_migration_report` returns 0 issues for a file:** record
  `[<filename>] 0 issues — no migration changes needed` in `c2000-migration.md`,
  update the progress table row to DONE, and proceed to the next file immediately.
  Do not re-call the tool or wait — zero issues is a valid, complete result.
- Do **not** call `buildProject` during Phase 4A. Header migration is report-only.
- Do not modify files in the source project. Every edit is on the target project.
- Do not read collateral links by page title only — navigate to the exact `#anchor` and
  read the full diff block.
- Do not fabricate API calls or register values. If uncertain, stop and report.
- Apply `Suggested fix` values **verbatim** — do not re-derive arguments.
- For **Approach 1** (`#ifdef`): wrap changed code in this **exact** block —

  ```
  #if <source>  //_DEVICE_MIGRATION_
  <original source-device code>
  #elif <target>  //_DEVICE_MIGRATION_
  <migrated target-device code>
  #endif  //_DEVICE_MIGRATION_
  ```

  `<source>` / `<target>` are the source/target device names from the briefing — they match
  the `list_migration_devices()` entries exactly; use them **verbatim**. The `//_DEVICE_MIGRATION_`
  marker goes on the `#if`, `#elif`, and `#endif` lines. Fix only the **target device's
  branch** if the file already has `#ifdef` blocks.
- For **Approach 2** (clean replacement): replace old symbols directly. No wrappers.

---

## How to fix each issue

The agent must fix **every** issue — easy or complex:
- **Easy (auto-fixable ✓):** apply the suggested replacement directly.
- **Complex (manual review ⚠):** investigate deeply — read surrounding code to understand
  intent, review function definitions, analyze which registers are touched, use
  **ti-asm-mcp** to understand register behavior, then construct the correct fix.
- Only if an item **truly cannot be resolved** does the agent report it to the user.
- **Item is inside a comment or `#if 0` block:** skip it. Note as inactive-code flag.
- **`Change: removed`, no `Suggested fix`, no collateral link:** do not write a
  replacement from memory. Flag to the user with file + line. Mark `needs human review`.

## Reading Migration Collateral links

Each issue may include a `Migration Collateral` URL with a `#<symbol>` anchor. When
no `Suggested fix` is provided, retrieve and parse it:

1. Fetch the URL directly.
2. If that fails, try `curl`, then `wget`, then download to a temp file.
3. Save the content locally — do not stream large HTML pages.
4. Strip `<style>` and `<script>` tags; extract text.
5. Navigate to the exact `#<symbol>` anchor — do not stop at a partial match.
6. Read the full table row or function block at the anchor plus the surrounding entries.
7. Follow referenced structs, enums, typedefs, and macros if the diff references them.
8. Summarize: old signature → new signature, added/removed parameters, type changes.
9. Apply the fix using only data from the collateral. No inferred parameters.

If all retrieval methods fail: try ti-asm-mcp → try local SDK at
`<c2000ware_path>/driverlib/<target-device>/` → if still unavailable, stop and report
to the user: *"Cannot confidently fix `{symbol}` — collateral inaccessible and SDK
source not found."* Never fabricate.

---

## Per-file loop (repeat for every `.h` file)

### Step 1 — Confirm file path

Before touching the file, verify its path starts with the **target project directory**.
If it is under the source project directory, stop immediately and ask the orchestrator.

### Step 2 — Run migration report

Use get_device_migration_report with absolute path to .h file, source device and target device.


### Step 3 — Handle zero-issues result

If the report returns zero issues, the static analyser found no incompatibilities.
This does not guarantee correctness. Actively check and fix each of the following:

**3-i. `#include` path device-name replacement (auto-fix):**
Scan the file for any `#include` directive whose path contains the source device name
string (e.g., `f28003x`, `F28003x`). For each hit:
1. Replace the source device name component with the target device name
   (e.g., `"f28003x_device.h"` → `"f28p55x_device.h"`).
2. Verify the resulting file exists on disk before writing.
   - If it exists → write the fix and record:
     `[<filename>:<line>] FIXED: #include path updated → <new path>`
   - If it does **not** exist → do not write a broken include. Record:
     `[<filename>:<line>] REVIEW-REQUIRED: #include <old path> — no matching target file found at <expected path>`
     Flag it to the user.

> **Note:** The migration report does not flag `#include` path strings. This scan is
> always required even when the report returns zero issues.

**3-ii. Source-device typedef / type name check:**
Scan for source-device type names used verbatim (e.g., `F28003x_DEVICE_TYPE`). If found,
flag each occurrence:
```
[<filename>:<line>] REVIEW-REQUIRED: source-device type name <name> — verify target equivalent
```

**3-iii. `#ifdef` device-macro guard check:**
Confirm any `#ifdef` / `#if defined` device guards reference the **target** device, not the
source. Use the exact device name from the migration list (e.g. `F28003x`, `F28P55x`) — no
underscores or other wrappers. Search for the source device name in guards anywhere in the
file (including inside function bodies), e.g. `#ifdef F28003x` or `#if defined(F28003x)`. If
found, replace the source device name with the target device name (leave
`//_DEVICE_MIGRATION_` marker lines unchanged) and record:
```
[<filename>:<line>] FIXED: #ifdef guard updated → <new guard>
```

If all checks pass with no fixes needed, record the file as clean and proceed to the next file.

### Step 4 — Fix each issue (one at a time)

For each issue in the report:

1. Apply the fix (see rules above).
2. Write a micro-checkpoint immediately to `c2000-migration.md`:
   ```
   [<filename>:<line>] FIXED: <old-symbol> → <new-symbol>
   ```
   or if deferred:
   ```
   [<filename>:<line>] DEFERRED: <reason>
   ```
3. Re-run `get_device_migration_report` on the file.
4. Confirm the issue is resolved or confirmed inactive.
5. If the issue on the same area of the code is reported again, check that it is not wrapped in
   an #ifdef or is not part of the commented code. If it is one of those scenarios, ignore it.

### Step 5 — Convergence guard

If the **same issue** is still flagged at the **same line AND same symbol** after
**two consecutive fix attempts**:

- The fix did not take effect.
- Stop retrying that specific `(line, symbol)` pair.
- Record it as unresolved:
  ```
  [<filename>:<line>] UNRESOLVED: <symbol> — fix did not take effect after 2 attempts
  ```
- Continue to the next issue.

> A line re-appearing with a **different symbol** is NOT convergence. That is normal
> when multiple changed symbols on the same line are fixed one at a time.

### Step 6 — Complete the file

When the report returns zero issues (or all remaining issues are deferred/unresolved):

- Update the file progress table in `c2000-migration.md`:
  ```
  | <filename> | <issues found> | <fixed> | <unresolved> | DONE or WARN |
  ```
  Status: DONE = clean, WARN = has unresolved items.
- Proceed to the next `.h` file.

---

## After all `.h` files are processed

### Final check

Re-read the `c2000-migration.md` file progress table. Confirm every `.h` file has a
row with status DONE or WARN. If any row is missing, re-process that file before returning.

### Structured result (required — return this to the orchestrator)

Return **both** outputs:

**1. Inline summary** (in conversation, for human visibility):

```
=== Phase 4A Complete ===
Files processed: <N>
Total issues found: <total>
Total fixed: <fixed>
Total unresolved: <unresolved>

Unresolved items:
  - <filename>:<line> — <symbol> — <reason>
  (or "None")

c2000-migration.md updated: DONE
```

**2. Log entry** (already written to `c2000-migration.md` during processing):

```
## Phase 4A — Header Migration
| File | Issues | Fixed | Unresolved | Status |
|------|--------|-------|------------|--------|
| <file1.h> | <N> | <M> | <K> | DONE/WARN |
...
Phase 4A status: COMPLETE (or PARTIAL if unresolved > 0)
```

---

## STOP: Stop here

Your scope ends at the last `.h` file. Do not read `phase-4b-sources.md` or any
other file. Do not start on `.c` files. Return your structured result to the
orchestrator and wait.
