# Phase 4 — Sub-Agent Briefing Template

> **This file is used by the orchestrator (top-level agent) only.**
> Copy and fill out this template in full before dispatching any Phase 4 sub-agent.
> Do not dispatch a sub-agent without completing every field.

---

## When to use this template

The orchestrator dispatches one sub-agent per task unit:

| Task unit | Sub-agent reads | One dispatch covers |
|-----------|----------------|---------------------|
| All `.h` files | `phase-4a-headers.md` | All header files in the project |
| One `.c` file | `phase-4b-sources.md` | Exactly one source file |
| Final sweep | `phase-4c-sweep.md` | The whole project (sweep + clean build) |

**One `.c` file per sub-agent dispatch.** If there are 10 `.c` files, there are 10
separate Phase 4B dispatches. Never bundle multiple `.c` files into one sub-agent.

---

## Briefing template — Phase 4A (all `.h` files)

Fill out and send this to the Phase 4A sub-agent:

```
You are a sub-agent. Read phase-4a-headers.md and follow it exactly.

Briefing:
  Target project directory : <absolute path>
  Target project name      : <name from c2000-migration.md>
  Source device            : <e.g. F28003x>
  Target device            : <e.g. F28P55x>
  Migration approach       : Approach 1 (#ifdef)           ← FILL IN EXACTLY ONE
                           OR Approach 2 (clean replacement)
  c2000ware_path           : <path>
  SDK version              : <e.g. C2000Ware_5_04_00_00>
  Active build config      : <e.g. CPU1_FLASH>             ← copy verbatim from c2000-migration.md
  sysConfigOutputLocation  : <path — from getProjectDescriptors; do not edit files here>
  Migration guide HTML     : <value from c2000-migration.md>    ← copy verbatim (path or "DOWNLOAD FAILED — URL: <url>")

  Files to migrate (in order):
    1. <absolute path to first .h file>
    2. <absolute path to second .h file>
    ...

  File progress table in c2000-migration.md so far:
    <paste current table rows>

Do not read any file other than phase-4a-headers.md.
Return your structured result when all .h files are complete.
```

> **Orchestrator checklist before dispatching Phase 4A:**
> - [ ] `Migration approach` field contains **exactly one** of the two options (not both, not blank, not "TBD")
> - [ ] `Active build config` field is copied **verbatim** from `c2000-migration.md` (`Active build config:` line)
> - [ ] `c2000-migration.md` contains a `## Phase 4 — Migration Strategy` section with `Strategy:` filled in

---

## Briefing template — Phase 4B (one `.c` file)

Fill out and send this to the Phase 4B sub-agent. **One sub-agent per file.**

```
You are a sub-agent. Read phase-4b-sources.md and follow it exactly.

Briefing:
  File to migrate          : <absolute path to .c file>
  Target project name      : <name from c2000-migration.md>
  Target project directory : <absolute path>
  Source device            : <e.g. F28003x>
  Target device            : <e.g. F28P55x>
  Migration approach       : Approach 1 (#ifdef)           ← FILL IN EXACTLY ONE — same as Phase 4A
                           OR Approach 2 (clean replacement)
  c2000ware_path           : <path>
  SDK version              : <e.g. C2000Ware_5_04_00_00>
  Active build config      : <e.g. CPU1_FLASH>             ← copy verbatim from c2000-migration.md
  sysConfigOutputLocation  : <path — from getProjectDescriptors; do not edit files here>
  Migration guide HTML     : <value from c2000-migration.md>

  Deferred-errors context  : <paste any deferred-errors from prior .c file dispatches
                               that point to THIS file, or write "None">

  File progress table in c2000-migration.md so far:
    <paste current table rows>

Do not read any file other than phase-4b-sources.md.
Do not start on any other .c file.
Return your structured result when this file is complete.
```

> **Orchestrator checklist before dispatching each Phase 4B:**
> - [ ] `Migration approach` matches exactly what was used in Phase 4A (read from `c2000-migration.md` `## Phase 4 — Migration Strategy`)
> - [ ] `Active build config` is copied verbatim from `c2000-migration.md` — do not retype from memory

---

## Briefing template — Phase 4C (final sweep)

Fill out and send this to the Phase 4C sub-agent:

```
You are a sub-agent. Read phase-4c-sweep.md and follow it exactly.

Briefing:
  Target project name      : <name from c2000-migration.md>
  Target project directory : <absolute path>
  Source device            : <e.g. F28003x>
  Target device            : <e.g. F28P55x>
  c2000ware_path           : <path>
  SDK version              : <e.g. C2000Ware_5_04_00_00>
  Active build config      : <e.g. CPU1_FLASH>
  sysConfigOutputLocation  : <path — from getProjectDescriptors; do not edit files here>
  Migration guide HTML     : <value from c2000-migration.md>

  All migrated files (from 4A and 4B):
    .h files: <list>
    .c files: <list>

  Deferred-errors list (from Phase 4B):
    <paste deferred-errors from c2000-migration.md, or write "None">

  File progress table in c2000-migration.md:
    <paste current table rows>

Do not read any file other than phase-4c-sweep.md.
Return your structured result when the clean build is confirmed.
```

---

## Orchestrator checkpoint (required after every sub-agent)

After receiving a sub-agent's structured result, the orchestrator must complete
all of the following before dispatching the next sub-agent:

1. **Confirm log written:** verify `c2000-migration.md` contains the expected row or
   section for the just-completed task unit.
2. **Aggregate results:** add the sub-agent's `Issues found`, `Fixed`, `Unresolved`,
   and `Deferred build errors` to the running totals.
3. **Carry deferred-errors forward:** copy any cross-file deferred-errors into the
   briefing of the sub-agent that will handle the referenced file.
4. **Confirm user visibility:** the inline summary was presented in the conversation.
5. **Only then** dispatch the next sub-agent.

---

## Briefing template — Phase 4D (build error triage)

Fill out and send this to the Phase 4D sub-agent. **Only dispatch when Phase 4C reports
a non-passing build.**

```
You are a sub-agent. Read phase-4d-build-triage.md and follow it exactly.

Briefing:
  Target project name      : <name from c2000-migration.md>
  Target project directory : <absolute path>
  Source device            : <e.g. F28003x>
  Target device            : <e.g. F28P55x>
  SDK version              : <e.g. C2000Ware_5_04_00_00>
  c2000ware_path           : <path>
  Active build config      : <e.g. CPU1_FLASH>
  sysConfigOutputLocation  : <path — from getProjectDescriptors; do not edit files here>

  Build error output from Phase 4C (verbatim):
    <paste the full buildProject error output here>

  c2000-migration.md current content (summary):
    <paste the Phase 4 progress table and deferred-errors list>

Do not read any file other than phase-4d-build-triage.md.
Return your structured result when the triage is complete or the convergence limit is reached.
```

---

## Orchestrator sequencing rules

```
Phase 4 sequence:

  [4A dispatch] → wait for 4A structured result → orchestrator checkpoint
       ↓
  [4B dispatch: first .c file] → wait → checkpoint
       ↓
  [4B dispatch: second .c file] → wait → checkpoint
       ↓
  ... (one .c file per dispatch) ...
       ↓
  [4B dispatch: last .c file] → wait → checkpoint
       ↓
  [4C dispatch] → wait for 4C structured result → orchestrator checkpoint
       ↓
  if 4C build PASS → Present Phase 4 complete summary to user
  if 4C build FAIL → [4D dispatch] → wait for 4D structured result → checkpoint
                          ↓
                     Present Phase 4 complete summary to user
       ↓
  Ask for user confirmation
  Return to device-migration.md for Phase 5
```

**Never dispatch two sub-agents simultaneously.** Files may have interdependencies
and builds must reflect cumulative state. Parallel dispatch will produce race conditions
on `c2000-migration.md` writes and incorrect build states.

**Never dispatch Phase 4B before Phase 4A is complete.** Header migration must finish
first to prevent cascading compile errors in source files.

**Never dispatch Phase 4C before all Phase 4B dispatches are complete.**

---

## `.c` file processing order

Process `.c` files in **dependency order**:

1. Files that include no project-internal headers first (leaf files).
2. Files that include already-migrated project headers next.
3. Files with the most `#include` dependencies last (typically `main.c`).

This prevents fixing a caller before its included header is clean, which would cause
the build to fail for reasons unrelated to the current file's migration.

To determine order: look at the `#include` directives in each `.c` file. Build a
simple dependency graph — files that only include SDK headers have no project-internal
dependencies and go first.

---

## Recovery: resuming an interrupted Phase 4

If the Phase 4 session was interrupted (network drop, context limit, session end):

1. Re-read `c2000-migration.md` in the target project.
2. Find the last completed entry in the file progress table (last row with DONE or WARN).
3. Find any row with status `IN PROGRESS` — this was interrupted mid-file.
4. For a mid-file interruption: find the last `[<filename>:<line>] FIXED:` micro-checkpoint
   entry in `c2000-migration.md`. Resume from the next issue after that entry.
5. Continue dispatching sub-agents from the resume point — do not re-process DONE rows.
