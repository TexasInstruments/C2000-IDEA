# Phase 4B — Migrate Source Files (`.c`)

> You are a **sub-agent** executing Phase 4B for a **single file** in one target project.
> You were briefed by the orchestrator. All context you need is in your briefing.
> **Do not read any other phase file. Do not look ahead. Do not act beyond this file's scope.**

---

## Your assignment

You are migrating exactly **one `.c` source file** from the source device to the target
device. Your loop is: run migration report → fix each issue → build → repeat until clean.

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess or skip.

---

## Briefing fields (confirm before starting)

The orchestrator should have provided all of the following. If any is missing, ask the
orchestrator before proceeding:

| Field | Value |
|-------|-------|
| File to migrate | `<absolute path to .c file>` |
| Target project name | `<project name>` |
| Target project directory | `<absolute path>` |
| Source device | `<e.g. f28003x>` |
| Target device | `<e.g. f28p55x>` |
| Migration approach | Approach 1 (`#ifdef`) OR Approach 2 (clean replacement) |
| Active build config | `<e.g. CPU1_FLASH>` |
| `c2000ware_path` | `<absolute path to C2000Ware root>` |
| `sysConfigOutputLocation` | `<path — do not edit any file under this folder>` |
| Deferred-errors context | Any errors from previous files pointing to this file |

> **REQUIRED: Verify migration approach from `c2000-migration.md` before touching the file:**
> Read `c2000-migration.md` and locate the `## Phase 4 — Migration Strategy` section.
> Confirm the `Strategy:` value matches the `Migration approach` in your briefing above.
>
> - If the log says `Strategy: Approach 1 (shared #ifdef)` → use `#ifdef` wrapping for every fix in this file.
> - If the log says `Strategy: Approach 2 (clean replacement)` → replace symbols directly for every fix in this file.
> - **If the section is missing or the values conflict:** stop and ask the orchestrator
>   to confirm the strategy before proceeding. Do not guess or default to one approach.
>
> This check is required for **every Phase 4B dispatch** — not just the first file.
> Even if you processed a previous file with one approach, re-read the log entry to
> confirm consistency before starting on this file.

---

## Rules for Phase 4B

- Use only `get_device_migration_report` — not the VS Code diagnostics panel.
- Always call `buildProject` on the **target** project — never the source project.
- Do not modify files in the source project. Every edit is on the target project.
- **Never modify any file inside the `sysConfigOutputLocation` folder** (e.g.,
  `syscfg_c/`, or any folder whose path is returned by `getProjectDescriptors` as
  `sysConfigOutputLocation`). Those files are SysConfig-generated outputs — editing
  them directly will be overwritten on the next SysConfig save. If a build error
  points to a generated file, the fix must be made in the `.syscfg` (Phase 3), not
  in the generated file itself. Flag it to the user immediately.
- Do not read collateral links by page title only — navigate to the exact `#anchor`.
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

  `<source>` / `<target>` are the source/target device family names **verbatim from the
  briefing** (format like `F28003x`, `F28P55x` — uppercase with a lowercase trailing `x`;
  the match is **case-sensitive**, so never lowercase them). The `//_DEVICE_MIGRATION_`
  marker goes on the `#if`, `#elif`, and `#endif` lines. Fix only the **target device's
  branch** when existing `#ifdef` blocks are present.
- For **Approach 2** (clean replacement): replace symbols directly. No wrappers.

---

## How to fix each issue

The agent must fix **every** issue — easy or complex:
- **Easy (auto-fixable ✓):** apply the suggested replacement directly.
- **Complex (manual review ⚠):** investigate deeply — read surrounding code to understand
  intent, review function definitions, analyze which registers are touched, use
  **ti-asm-mcp** to understand register behavior, then construct the correct fix.
- Only if an item **truly cannot be resolved** does the agent report it to the user.
  > **Argument-order sanity check (required for complex fixes):**
  > After applying a complex fix (one derived from collateral, not from a `Suggested fix`),
  > re-read the collateral entry for the new API and verify argument order matches what you
  > wrote. Common error: swapping a base address and a peripheral-instance enum. Specifically:
  > 1. From the collateral, extract the new function signature: `returnType fn(arg1Type, arg2Type, ...)`.
  > 2. Confirm each argument in your written call matches the correct position in that signature.
  > 3. If you used ti-asm-mcp, verify the returned signature against the SDK header at
  >    `<c2000ware_path>/driverlib/<target-device>/driverlib/<module>.h` as a second source.
  > 4. If any mismatch is found, correct it before recording the `FIXED:` micro-checkpoint.
- **Item is inside a comment or `#if 0` block:** skip. Note as inactive-code flag.
- **`Change: removed`, no `Suggested fix`, no collateral link:** do not write a
  replacement from memory. Flag to the user with file + line. Mark `needs human review`.

## Reading Migration Collateral links

Each issue may include a `Migration Collateral` URL with a `#<symbol>` anchor. When
no `Suggested fix` is provided:

1. Fetch the URL directly.
2. If that fails, try `curl`, then `wget`, then download to a temp file.
3. Save locally — do not stream large HTML pages.
4. Strip `<style>` and `<script>` tags; extract text.
5. Navigate to the exact `#<symbol>` anchor — do not stop at a partial match.
6. Read the full table row or function block at the anchor plus surrounding entries.
7. Follow referenced structs, enums, typedefs, macros if referenced.
8. Summarize: old signature → new signature, added/removed parameters, type changes.
9. Apply the fix using only data from the collateral. No inferred parameters.

If all retrieval fails: try ti-asm-mcp → try local SDK at
`<c2000ware_path>/driverlib/<target-device>/` → if unavailable, stop and report:
*"Cannot confidently fix `{symbol}` — collateral inaccessible."* Never fabricate.

---

## The fix loop (for your assigned `.c` file)

### Step 1 — Confirm file path

Verify the file path starts with the **target project directory**. If it is under the
source project, stop immediately and ask the orchestrator.

### Step 2 — Run migration report

Use get_device_migration_report with absolute path to .c file, source device and target device.

> **Note:** The C2000 IDEA extension may be running a continuous migration check in the
> background. The VS Code Problems panel may update as files change. Use
> `get_device_migration_report` — not the diagnostics panel — as the authoritative source.

### Step 3 — Handle zero-issues result

If the report returns zero issues, the static analyser found no migration
incompatibilities. Before calling `buildProject`, verify each of the following and
**actively fix any hit found** — do not just flag them:

**3-i. `#include` path device-name replacement (auto-fix):**
Scan the file for any `#include` directive whose path contains the source device name
string (e.g., `f28003x`, `F28003x`). For each hit:
1. Replace the source device name component with the target device name
   (e.g., `"f28003x_device.h"` → `"f28p55x_device.h"`).
2. Verify the resulting file path exists on disk before writing.
   - If it exists → write the fix and record:
     `[<filename>:<line>] FIXED: #include path updated → <new path>`
   - If it does **not** exist → do not write a broken include. Record:
     `[<filename>:<line>] REVIEW-REQUIRED: #include <old path> — no matching target file found at <expected path>`
     Flag it to the user.

> **Note:** This replacement is distinct from the migration report — the report does not
> flag `#include` path strings. This manual scan is always required.

**3-ii. Source-device type name check:**
Scan for source-device type names used verbatim (e.g., `F28003x_DEVICE_TYPE`). If found,
flag each occurrence:
```
[<filename>:<line>] REVIEW-REQUIRED: source-device type name <name> — verify target equivalent
```

**3-iii. `#ifdef` device-macro guard check:**
Confirm `#ifdef` / `#if defined` guards reference the **target** device macro, not source
(e.g., `#ifdef _F28003x_` must become `#ifdef _F28P55X_`). If any source-device macro is
found, replace it with the target device's equivalent macro and record:
```
[<filename>:<line>] FIXED: #ifdef guard updated → <new macro>
```

**3-iv. Hardcoded peripheral base address check:**
Scan for hardcoded peripheral base addresses (e.g., `0x00006400`). If found, flag:
```
[<filename>:<line>] REVIEW-REQUIRED: hardcoded base address — verify address is valid on target device
```

After all checks are complete, proceed to Step 3a (GPIO check) then Step 6 (build).

### Step 3a — GPIO remapping check (run for EVERY file, regardless of issue count)

> **This check is always required — not only when zero issues are found.**
> The migration report does NOT flag hardcoded GPIO pin numbers. Run this check on every
> `.c` file before proceeding to Step 6 (build), whether Step 3 or Step 4 applies.

**GPIO remapping checklist (scan the file for each pattern):**

| Pattern to find | What to check |
|-----------------|---------------|
| `GPIO_setPadConfig(N, ...)` | Pin `N` may not exist or may map to a different peripheral on the target |
| `GPIO_setPinConfig(GPIO_<N>_<PERIPH>)` | The macro `GPIO_<N>_<PERIPH>` is device-specific; verify target has same assignment |
| `GPIO_setMasterCore(N, ...)` | Pin `N` may not exist on the target device |
| `GPIO_setDirectionMode(N, ...)` | Pin `N` may not exist on the target device |
| `GPIO_setAnalogMode(N, ...)` | Pin `N` may not be an analog-capable pin on the target |
| Any literal integer passed to a `GPIO_` API function | Treat as a potential pin-number mismatch |

**How to verify each hit:**
1. Open the target device's GPIO header:
   `<c2000ware_path>/driverlib/<target-device>/driverlib/gpio.h`
   > **Use the lowercase device family name** (e.g., `f28p55x`, not `F28P55X`) —
   > the same format that IDEA MCP returns for the target device. The C2000Ware
   > driverlib directory names are all lowercase.
2. In that file, search for the **exact peripheral name** used in the source code
   (e.g., `SPIA_SIMO`, `EPWM1A`, `I2CA_SDA`). GPIO pin-config macros follow the naming
   pattern `GPIO_<PIN_NUMBER>_<PERIPHERAL_SIGNAL>` — e.g., `GPIO_16_SPIA_SIMO`.
   - Search for `GPIO_<N>_<PERIPH>` with the same `N` as the source: if found → mapping
     is unchanged, no action needed.
   - Search for `<PERIPH>` alone (drop the pin number): if found at a **different pin** →
     the peripheral moved; update the literal pin number and the macro name to match.
   - If `<PERIPH>` is not found anywhere in the target `gpio.h` → peripheral does not
     exist on the target device (see step 4 below).
3. **Verify the updated pin number** by searching `GPIO_<NEW_N>_<PERIPH>` — confirm the
   macro exists exactly as you plan to write it. Never write a macro you have not seen
   in the header.
4. If the peripheral does **not exist** on the target device, flag it:
   ```
   [<filename>:<line>] FEATURE-ABSENT: GPIO_<N>_<PERIPH> — peripheral not on target device
   ```
5. If you cannot confidently determine the correct mapping (multiple matches, ambiguous
   signal names), flag it for user review rather than guessing:
   ```
   [<filename>:<line>] REVIEW-REQUIRED: hardcoded GPIO pin <N> — verify target device pinmux
   ```

Record every hit (resolved or flagged) in `c2000-migration.md`.

**If no GPIO API calls with literal pin numbers are found:** record
`[<filename>] GPIO check: CLEAN — no hardcoded GPIO pins found.` and continue.

### Step 4 — Fix each issue (one at a time)

For each issue in the report:

1. Apply the fix (see rules above).
2. Write a micro-checkpoint immediately to `c2000-migration.md`:
   ```
   [<filename>:<line>] FIXED: <old-symbol> → <new-symbol>
   ```
3. Re-run `get_device_migration_report` on the file.
4. Confirm the issue is resolved or confirmed inactive.

### Step 5 — Convergence guard

If the **same issue** is still flagged at the **same line AND same symbol** after
**two consecutive fix attempts**:

- Stop retrying that `(line, symbol)` pair.
- Record it:
  ```
  [<filename>:<line>] UNRESOLVED: <symbol> — fix did not take effect after 2 attempts
  ```
- Add it to the deferred-errors list.
- Continue to the next issue.

> A line re-appearing with a **different symbol** is NOT convergence.

### Step 6 — Build

After the migration report is clean (zero issues, or all remaining are deferred):

```
buildProject(<target project name>)
```

### Step 7 — Handle build errors

For each build error:

- **Error points to the current file:** fix it, then go back to Step 4 (re-run report
  and fix loop). A build error may expose issues the static analyser missed.
- **Error points to a different file:** add to the deferred-errors list:
  ```
  {file: <other file>, line: <N>, error: "<message>"}
  ```
  Do not block on cross-file errors — they will be resolved when that file is migrated.
- **Error is "driverlib header not found":** stop. Ask the user to verify the include
  path configured in Phase 2. Do not continue until resolved.
- **Error is unrelated to migration** (pre-existing syntax error, wrong `#include`
  also missing in source project): record with `[NON-MIGRATION]` tag and continue.

### Step 8 — Repeat until clean

Return to Step 4 if the build introduced new migration issues in the current file.
Continue until:

- Migration report returns zero issues for this file, **AND**
- `buildProject` returns no errors attributable to this file.

---

## Large-file batching (required when issue count > 30)

When the migration report returns more than 30 issues for this file:

1. Record the full issue list to `c2000-migration.md`:
   ```
   [<file>] ISSUE LIST: <N> issues total
   Batch 1: issues 1–20
   Batch 2: issues 21–40
   Batch 3: issues 41–<N>
   ```
   (Group by issue number from the report — do not try to split by line range, as
   `get_device_migration_report` returns the full file's issues in a single call.)
2. Fix batch 1 (issues 1–20), write a micro-checkpoint for each fix, then re-run
   `get_device_migration_report` on the file to confirm those issues are resolved.
3. Call `buildProject` after each batch completes. Do not defer all builds to the end.
4. Record the batch as complete:
   ```
   [<file>] BATCH 1 DONE: <M> fixed, <K> deferred
   ```
5. Proceed to the next batch. After all batches, run one final full-file report to
   confirm zero remaining issues.

**If interrupted mid-batch:** re-read `c2000-migration.md` to find the last
`[<file>:<line>] FIXED:` micro-checkpoint entry for this file. Resume from the next
issue after that entry.

---

## Structured result (required — return this to the orchestrator)

Return **both** outputs:

**1. Inline summary** (in conversation):

```
=== Phase 4B: <filename> Complete ===
Issues found: <N>
Fixed: <M>
Unresolved: <K>
Deferred build errors (other files): <list or "None">

Unresolved items:
  - <line>: <symbol> — <reason>
  (or "None")

Build status: PASS / FAIL / PARTIAL
c2000-migration.md updated: DONE
```

**2. Log entry** (written to `c2000-migration.md`):

```
| <filename.c> | <N> | <M> | <K> | DONE/WARN |
```

---

## STOP: Stop here

Your scope is exactly this one `.c` file. Do not start on the next file. Do not read
`phase-4c-sweep.md` or any other file. Return your structured result to the orchestrator
and wait. The orchestrator will dispatch you again for the next file.
