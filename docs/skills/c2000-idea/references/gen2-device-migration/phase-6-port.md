# Phase 6 — Port (orchestrator)

Port each user file in the target project with one sub-agent per file. You dispatch, check and record;
you do not read `phase-6-port-rules.md` yourself and you do not edit the files.

## 6.1 File order

Headers first, then C files in dependency order: a file whose functions others call comes before its
callers; the file holding `main()` comes last. Write the order to the log:

```
## Phase 6 — Files
| # | File | Status | Register rows | Notes |
|---|---|---|---|---|
```

Status is PENDING, DONE or BLOCKED.

## 6.2 Dispatch

For each file in order, start a sub-agent with this briefing:

```
Port <target project dir>/<file> from <source family> to <target family>.
Read <skill dir>/references/gen2-device-migration/phase-6-port-rules.md and follow it.
Log: <target project dir>/c2000-gen2-device-migration.md. Your inputs are its sections
"Phase 2 — Register table" and "Phase 2 — Device support and driver calls" (rows of this file),
"Phase 3 — Register meanings", and all "Phase 4" sections.
C2000Ware: <c2000ware_path>. Use the IDEA MCP for target driverlib functions and the TI ASM MCP for
both TRMs (the ti-asm-gen2-register-lookup skill for the source TRM).
Edit only this file. Return the report the rules describe.
```

Run one sub-agent at a time: a later file can depend on what an earlier one changed.

## 6.3 Check each result

When a sub-agent returns:

1. Every register-table row and every device support or driver call of the file is in its report, as
   ported, mapped or dropped. A missing row means the file is not done: send the sub-agent back.
2. Search the file for what must be gone: `Regs.`, `.bit.`, register-struct names, `PieVectTable`, the
   source family's header names and device support function names. Any hit goes back to the sub-agent.
3. Append the sub-agent's report to the log under `## Phase 6 — <file>`, and set the file's row to DONE.

If a sub-agent reports a row it cannot port without a decision from the user, set the file to BLOCKED,
ask the user and dispatch it again with the answer.

## Phase 6 complete

When every file is DONE, set Phase 6 to COMPLETE and return to `gen2-device-migration.md`.
