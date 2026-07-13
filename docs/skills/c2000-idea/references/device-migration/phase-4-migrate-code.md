# Phase 4 — Migrate Source Code (Orchestrator)

> You are the **orchestrator** for Phase 4. Your job is to dispatch sub-agents in
> sequence, confirm their results, and maintain the `c2000-migration.md` log.
> You do **not** fix files yourself — sub-agents do that.

**Before starting:** Confirm in `c2000-migration.md` that Phases 1, 2, and 3 are all
marked COMPLETE for this target project. If any are not, stop and complete them first.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step.

---

Precondition: user application files are already copied into the target project (Step 2.7).

Ask the user: *"Phases 1, 2, and 3 are complete. Ready to start Phase 4 (source code migration)?"* Wait for confirmation before proceeding.

---

## Step 4.pre — Download migration guide collateral HTML

Download the full driverlib diff-report HTML for this migration pair to the **target
project directory** once, so every sub-agent (4A, 4B, 4C) can read it from disk instead
of making a separate network request per symbol.

### 4.pre.1 — Compute URL and local path

> **Do not skip 4.pre.2 even if `Migration guide HTML:` is already recorded in `c2000-migration.md` — the file may not exist on disk in a new session.**

Read `c2000-migration.md` to get `sourceDevice` and `targetDevice` in **lowercase**
(e.g. `f28003x`, `f28p65x`). Compute SDK version labels based on device families using
the same logic as the IDEA extension:

| Migration type | `FROM_SDK` | `TO_SDK` | Base URL version |
|---|---|---|---|
| F28x → F28x | `C2000Ware_26_01_00_00` | `C2000Ware_26_01_00_00` | `C2000Ware_26_01_00_00` |
| F28x → F29x | `C2000Ware_26_01_00_00` | `F29H85X-SDK_26_00_00` | `C2000Ware_26_01_00_00` |

Construct the values:
```
BASE_URL  = https://dev.ti.com/tirex/content/<Base URL version>/docs/<Base URL version>_Migration_Guides/html_pages/
FILENAME  = <FROM_SDK>_<sourceDevice>_vs_<TO_SDK>_<targetDevice>_driverlib.html
FULL_URL  = <BASE_URL>diff_reports/<FILENAME>
LOCAL_OUT = <targetProjectPath>/<FILENAME>
```

**Example** (F28003x → F28P65x):
```
FILENAME  = C2000Ware_26_01_00_00_f28003x_vs_C2000Ware_26_01_00_00_f28p65x_driverlib.html
FULL_URL  = https://dev.ti.com/tirex/content/C2000Ware_26_01_00_00/docs/C2000Ware_26_01_00_00_Migration_Guides/html_pages/diff_reports/C2000Ware_26_01_00_00_f28003x_vs_C2000Ware_26_01_00_00_f28p65x_driverlib.html
LOCAL_OUT = <targetProjectPath>/C2000Ware_26_01_00_00_f28003x_vs_C2000Ware_26_01_00_00_f28p65x_driverlib.html
```

### 4.pre.2 — Run the download

Run this PowerShell command with the computed values substituted:

```powershell
powershell -Command "
\$url = '<FULL_URL>'
\$out = '<LOCAL_OUT>'
if (-not (Test-Path \$out)) {
    Invoke-WebRequest -Uri \$url -OutFile \$out -UseDefaultCredentials -TimeoutSec 60
    Write-Host 'Downloaded'
} else { Write-Host 'Already cached' }"
```

`-UseDefaultCredentials` passes the current Windows user's credentials to TI's server
(required when on a corporate network / VPN). `-TimeoutSec 60` aborts on a slow response.

### 4.pre.3 — Record in c2000-migration.md

**On success** (prints `Downloaded` or `Already cached`): add this line to `c2000-migration.md`:
```
Migration guide HTML: <LOCAL_OUT>
```

**On failure** (network error, 404, timeout): the automated download was blocked
(common on corporate networks). Ask the user to download it manually:

> "The migration guide HTML could not be downloaded automatically. Please open the
> following URL in Chrome or Edge, save the page as:
>
> **URL:** `<FULL_URL>`
>
> **Save as (exact filename and location):** `<LOCAL_OUT>`
>
> Once saved, type **done** to continue."

Wait for the user's confirmation, then verify the file exists at `<LOCAL_OUT>`.

- **File found:** record `Migration guide HTML: <LOCAL_OUT>` in `c2000-migration.md` and proceed.
- **File not found or user skips:** record `Migration guide HTML: DOWNLOAD FAILED — URL: <FULL_URL>`
  in `c2000-migration.md`. Sub-agents will fall back to fetching the URL directly.

Pass the recorded line verbatim in the `Migration guide HTML` field of every sub-agent briefing
(4A, 4B, 4C). Sub-agents use the local file when available and fall back to the URL when not.

---

## Step 4.0 — Strategy and pre-migration report

> **Prerequisite:** Step 4.pre must be complete and `Migration guide HTML` must be
> recorded in `c2000-migration.md` before asking for the migration approach. Every
> sub-agent briefing requires this path.

### 4.0a Ask the user for migration strategy

**Before dispatching any sub-agent, ask the user:**
> "Do you want to (1) keep a shared codebase with `#ifdef` device branches so both
> source and target devices compile from one file (this way the new files in the target
> project have both the old source project code and newly generated migration code), or
> (2) a clean replacement targeting only the new device?"

- **Approach 1 (shared `#ifdef`):** Wrap the changed code in a device-conditional block so
  the original source-device code and the migrated target-device code both live in the
  target project. Use this **exact** structure:

  ```
  #if <source>  //_DEVICE_MIGRATION_
  <original source-device code>
  #elif <target>  //_DEVICE_MIGRATION_
  <migrated target-device code>
  #endif  //_DEVICE_MIGRATION_
  ```

  - `<source>` and `<target>` must exactly match device entries from `list_migration_devices()`.
    Use them **verbatim** — do not alter them in any way.
  - Put the **original** source-device code in the `#if <source>` branch and the **migrated**
    target-device code in the `#elif <target>` branch. The `//_DEVICE_MIGRATION_` marker must
    appear on the `#if`, `#elif`, and `#endif` lines. All modifications are made only on the
    target device project.
  - When `get_device_migration_report`'s `Suggested fix` already contains this wrapped block,
    apply it **verbatim** — only hand-construct the block for changes the report did not
    pre-wrap.
- **Approach 2 (clean replacement):** Simply replace old symbols with new ones; no
  preprocessor wrappers.

**About `//_DEVICE_MIGRATION_` markers:** These suffixes on `#if`/`#elif`/`#endif` lines
are placed by the C2000 IDEA extension to track device-specific branches. When a
migration report flags a symbol inside such a block, fix only the **target device's
branch**, not the source device branch. Do not remove or alter existing markers.

**About pre-computed function fixes:** When `get_device_migration_report` provides a
`Suggested fix` for a function call, apply it **verbatim** — the fix already accounts for
all argument reordering, added/removed parameters, and type changes. Do not re-derive
arguments.

Record the choice in `c2000-migration.md` in a dedicated section. This section MUST be placed BEFORE the Phase 4 file list section. Formatted exactly as follows — the sub-agents read this exact string:
```
## Phase 4 — Migration Strategy
Strategy: Approach 1 (shared #ifdef)
```
or
```
## Phase 4 — Migration Strategy
Strategy: Approach 2 (clean replacement)
```

> **CRITICAL: The strategy must be recorded in `c2000-migration.md` BEFORE dispatching
> any sub-agent (4A, 4B, 4C, 4D).** Every sub-agent reads its approach from this log
> entry at startup. If it is missing or ambiguous, sub-agents will produce inconsistent
> file edits that cannot be safely combined. Do not dispatch Phase 4A until this entry
> is confirmed present in the log.

### 4.0b Pre-migration scope report

**Project name guard:** Confirm the **target** project name from `c2000-migration.md`
before calling any report tool. Do not call `get_project_migration_report` with the
source project name.

**Refresh IDEA MCP's project list first:** the target project was only just created/renamed
in Phase 1, so IDEA MCP may not have detected it yet. Call `get_projects()` and confirm the
target project name appears in the result. If it does not, call `get_projects(rescan: true)`
once, then retry. Do not call `get_project_migration_report` until the target project is
confirmed present.

Call `get_project_migration_report(<target project name>, <source device>, [<target device>])`,
passing the source and target devices from `c2000-migration.md` (matching the
`list_migration_devices()` entries) so the report reflects the intended migration pair rather
than relying on the project's stored settings. Report to the user:
*"Found `<N>` issues across `<M>` files. Starting migration."*

> **Note:** `get_project_migration_report` is the **project-level** tool —
> only the orchestrator (this step) calls it to get scope. Sub-agents (4A, 4B, 4C) call
> `get_device_migration_report` (file-level — takes an absolute file path, source device,
> and target device). Do not confuse the two: using the project-level tool inside a
> sub-agent will return the wrong scope; using the file-level tool here will miss files
> not yet flagged.

Use this for scope reporting only — not to set processing order. Processing order is
always fixed: all `.h` files first, then `.c` files in dependency order.

---

## Step 4.1 — Build the file list

From the target project directory, collect:

1. **`.h` files** — all application header files. Exclude the following header files:
   - Files under `<c2000ware_path>/` (SDK files — do not modify SDK source).
   - Files inside the `sysConfigOutputLocation` folder.
   - Files that are clearly part of the C2000Ware driverlib (e.g., paths containing
     `/driverlib/` followed by a device family name).
2. **`.c` files** — all application source files in dependency order. Apply the same
   exclusions as for `.h` files above. Exclude `device.c` in the `sysConfigOutputLocation`
   — it is SysConfig-generated. In dependency order:
   - Leaf files first (those that only `#include` SDK headers).
   - Files that include already-migrated project headers next.
   - Files with the most project-internal dependencies last (typically `main.c`).

3. **`.asm` files** — list all application assembly files in the target project directory.
   Apply the same exclusions (exclude SDK paths, SysConfig-generated paths, driverlib paths).

   > **WARNING: Assembly files are out of scope for automated migration.**
   >
   > For each `.asm` file found:
   > 1. Record it in `c2000-migration.md` as:
   >    `REVIEW-REQUIRED: <filename> — assembly file; manual inspection required`
   > 2. Add a row to the progress table with status `MANUAL`.
   > 3. Tell the user: *"Assembly file `<filename>` was found in the target project.
   >    Assembly files are not migrated automatically. Please review this file manually
   >    for device-specific register addresses, memory section names, and instruction
   >    variants that may differ on the target device."*
   >
   > Do not dispatch a sub-agent for `.asm` files. Do not skip recording them.

Record the ordered list in `c2000-migration.md`:
```
## Phase 4 file list
.h files (Phase 4A): file1.h, file2.h, ...
.c files (Phase 4B, in order): fileA.c, fileB.c, ..., main.c
.asm files (manual review): fileX.asm, fileY.asm, ...  (or "none")
```

Add all files to the progress table with status `PENDING` (or `MANUAL` for `.asm`):

| File | Issues | Fixed | Unresolved | Status |
|------|--------|-------|------------|--------|
| file1.h | — | — | — | PENDING |
| fileX.asm | — | — | — | MANUAL |

---

## Step 4.2 — Dispatch Phase 4A (all `.h` files)

STOP: **Do not read `phase-4a-headers.md` yourself. Send it to the sub-agent.**

Read [`phase-4-sub-agent-briefing.md`](phase-4-sub-agent-briefing.md) for the exact
briefing template to fill out and send. Fill out **every field** before dispatching.

Dispatch one sub-agent with:
- Instruction file: `phase-4a-headers.md`
- All `.h` file paths (in order)
- Full briefing (all fields from the template)

**Wait** for the sub-agent's structured result before doing anything else.

### Orchestrator checkpoint after Phase 4A

After the sub-agent returns:

1. Verify `c2000-migration.md` contains a completed row for every `.h` file.
2. Aggregate totals: issues found, fixed, unresolved.
3. Confirm inline summary was presented to the user.
4. Update progress table status for all `.h` rows (DONE or WARN).

Only then proceed to Step 4.3.

---

## Step 4.3 — Dispatch Phase 4B (one `.c` file per sub-agent)

STOP: **Do not read `phase-4b-sources.md` yourself. Send it to the sub-agent.**
STOP: **Dispatch one sub-agent per `.c` file. Never bundle multiple `.c` files.**

Read [`phase-4-sub-agent-briefing.md`](phase-4-sub-agent-briefing.md) for the exact
Phase 4B briefing template.

For each `.c` file (in the dependency order from Step 4.1):

1. **Pre-dispatch state check (required — especially when resuming):**
   Before marking as `IN PROGRESS` or dispatching, check the current progress table row
   for this file in `c2000-migration.md`:
    - If the row shows `DONE` or `WARN` → this file was already completed. **Skip it entirely.**
      Do not re-dispatch. This prevents double-applying migrations after a session resume.
    - If the row shows `IN PROGRESS` → the file was dispatched in a prior session but the
     result was not recorded. Read the **current file content on disk** to determine how far
     the previous sub-agent got:
     - If the file appears fully migrated (no source-device symbols visible, consistent
       driverlib style throughout) → treat it as DONE and update the progress table accordingly
       without re-dispatching.
     - If the file appears partially migrated (mix of old and new symbols, or cut off
       mid-function) → pass the last micro-checkpoint line number in the briefing so the
       new sub-agent can resume from that point rather than restarting from line 1.
   - If the row shows `PENDING` → proceed normally to step 2.
2. Mark the file as `IN PROGRESS` in the progress table.
3. Fill out the Phase 4B briefing template completely, including any deferred-errors
   from prior dispatches that point to this file.
4. Dispatch the sub-agent with:
   - Instruction file: `phase-4b-sources.md`
   - Exactly this one `.c` file
   - Full briefing
5. **Wait** for the structured result.
6. **Orchestrator checkpoint:**
   - Verify the log entry was written to `c2000-migration.md`.
   - Update the progress table row for this file (DONE or WARN).
   - Carry any new cross-file deferred-errors forward to the affected file's future briefing.
   - Aggregate totals.
7. Only then dispatch the next `.c` file.

---

## Step 4.4 — Dispatch Phase 4C (final sweep)

STOP: **Do not read `phase-4c-sweep.md` yourself. Send it to the sub-agent.**

Only dispatch Phase 4C after **all** Phase 4B dispatches are complete and checkpointed.

Read [`phase-4-sub-agent-briefing.md`](phase-4-sub-agent-briefing.md) for the Phase 4C
briefing template. Fill out all fields, including the complete deferred-errors list.

**Wait** for the Phase 4C structured result.

### Orchestrator checkpoint after Phase 4C

1. Check whether Phase 4C reported a **clean build (0 errors)** or a **non-passing build**.
2. Aggregate all totals across 4A + 4B + 4C so far.
3. If `Final clean build: PASS` → proceed directly to Step 4.6.
4. If `Final clean build: FAIL` → proceed to Step 4.5 (build error triage).

---

## Step 4.5 — Dispatch Phase 4D (build error triage) — *if needed*

STOP: **Only dispatch Phase 4D if Phase 4C reported a non-passing build.**
STOP: **Do not read `phase-4d-build-triage.md` yourself. Send it to the sub-agent.**

If Phase 4C's final `buildProject()` call returned errors, dispatch a Phase 4D sub-agent:

1. Pass the Phase 4C build error output verbatim in the briefing.
2. Pass the current `c2000-migration.md` contents for context.
3. Use the standard sub-agent briefing format from
   [`phase-4-sub-agent-briefing.md`](phase-4-sub-agent-briefing.md), with:
   - Instruction file: `phase-4d-build-triage.md`
   - Target project name, source device, target device (as usual)

**Wait** for the Phase 4D structured result.

### Orchestrator checkpoint after Phase 4D

1. Check Phase 4D's returned status: `CLEAN BUILD` or `BUILD NOT CLEAN — manual items remain`.
2. Merge any new `DEFERRED-MANUAL` items from Phase 4D into the master deferred list.
3. Update the Phase status table in `c2000-migration.md` with the Phase 4D row.
4. Proceed to Step 4.6 regardless of Phase 4D outcome — the Phase 4D file records all
   remaining manual items; do not loop Phase 4D again.

---

## Step 4.6 — Phase 4 complete

Update `c2000-migration.md`:
```
| Phase 4 — Code | COMPLETE | <N files> migrated, <M issues> fixed, clean build <PASS/FAIL with manual items> |
```

Present a complete summary to the user:

```
Phase 4 complete for <target project name>.
Files migrated: <total>
Issues found: <total> | Fixed: <total> | Unresolved: <total>
DEFERRED-MANUAL: <K items — list them>
Final clean build: <PASS | FAIL — <Z> errors remain, recorded as DEFERRED-MANUAL>

Any items needing manual review have been recorded in c2000-migration.md.
```

Ask: *"Does everything look correct? Ready to move to Phase 5 (migration report)?"*

Wait for the user's confirmation. Then **return to `device-migration.md`** and proceed to Phase 5.

---

## Recovery: resuming an interrupted Phase 4

If this session was interrupted (context limit, session end, crash):

1. Re-read `c2000-migration.md` in the target project.
2. Note the last completed row in the file progress table (last DONE or WARN).
3. If a row shows `IN PROGRESS`, that file was interrupted mid-migration.
4. Resume from the interrupted file — for a mid-file interruption, pass the
   last micro-checkpoint line number in the briefing so the sub-agent can
   continue from where it left off.
5. Do not re-process rows already marked DONE.
