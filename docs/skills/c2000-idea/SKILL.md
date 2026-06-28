---
name: c2000-idea
description: Step-by-step workflows for C2000 code migration tasks. Supports F28x to F28x and F28x to F29x device migration (F29x not yet implemented), and bitfield-to-driverlib conversion. Uses the IDEA MCP server as the primary tool, with CCS Project MCP, CCS SysConfig MCP, and TI ASM MCP as supporting dependencies.
---

# C2000 IDEA Migration

This skill provides task-specific workflows for migrating C2000 MCU code using the
`idea-mcp` MCP server hosted by the C2000-IDEA VS Code extension. It does NOT contain
migration facts (symbol changes, register mappings, suggested fixes) — those are produced
live by the IDEA MCP tools against the actual project. This skill tells you *how to drive
the MCP* for a given migration task; the MCP supplies the analysis.

## Prerequisite

These workflows require the IDEA MCP server, CCS Project MCP, and (for TRM register
lookups) TI ASM MCP to be running. They are hosted by the C2000-IDEA VS Code extension
over HTTP. If any required MCP tools are not available in your session, tell the user
to enable them (Command Palette → `C2000-IDEA: Enable IDEA MCP` / `Enable TI ASM MCP`, or click **MCP Servers** in the VS Code status bar)
and register them with their agent, then retry.

**Before starting any device migration task, run the Phase 0 pre-flight check:**

- Reference file: [`references/device-migration/phase-0-preflight.md`](references/device-migration/phase-0-preflight.md)
- Phase 0 probes all three MCPs, verifies Git state, and records pre-flight results as session context for Phase 1.
- Do not start Phase 1 until Phase 0 completes without a hard stop.

For non-migration tasks (e.g., bitfield-to-driverlib conversion), run the minimal probe
below instead of full Phase 0:

**Minimal MCP probe (non-migration tasks):**

1. Attempt `get_projects()` as a probe call.
   - If it succeeds → server is running. Proceed.
   - If it fails or is unreachable → server is not running. **Stop here.**
2. Tell the user: *"The IDEA MCP server is not running. Please enable it:"*
   - **Enable:** Command Palette → `C2000-IDEA: Enable IDEA MCP`
   - **Verify (optional, VS Code only):** Command Palette → `C2000-IDEA: Check IDEA MCP`
     — shows a status message confirming the server URL (`http://localhost:55001/mcp`)
   - After enabling, re-register the MCP with their agent tool, then retry the probe call.
3. Do not proceed with any migration step until the probe call succeeds.



## How to use this skill

1. Discover the workspace first. Call `get_projects()` to list the C2000 projects, their
   current devices, and configured migration targets. If the list is empty or the project
   you expect is missing, call `get_projects(rescan: true)` once to re-scan the workspace.
2. Look up the migration task in the workflow matrix below.
3. Open the matching reference file and follow its steps.

**General rules (apply to all workflows):**
- Never fabricate migration data — all symbol replacements and suggested fixes must come
  from the IDEA MCP or migration collateral URLs, not from memory.
- Keep the source project untouched throughout — it is the golden reference.
- Confirm with the user before applying bulk changes (same symbol repeated many times).
- If any phase MCP call fails and cannot be resolved, stop and ask the user; do not skip
  the step or guess the outcome.
- **Before starting any migration:** Recommend the user commit all changes and create a
  clean Git branch (e.g., `migration-to-f28p55x`) so rollback is trivial if needed.
  After Phase 5, suggest committing with a descriptive message including source/target
  devices.

## Workflow matrix

| Task                                          | Reference file                                | Primary IDEA MCP tool                         |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| Device-to-device migration (F28x → F28x/F29x) | references/device-migration.md                | get_device_migration_report                   |
| Bitfield → driverlib conversion               | references/bitfield-to-driverlib-migration.md | get_bitfield_to_driverlib_migration_report    |

Notes:
- Device-to-device migration moves code from a source device family to one or more target
  device families. Two migration paths are supported:
  - **F28x → F28x** — fully implemented
  - **F28x → F29x** — not yet implemented
- The primary MCP is idea-mcp. Supporting MCPs used during migration:
  - **ccs-project MCP** — project creation, build, and settings management
  - **ccs-sysconfig MCP** — SysConfig file analysis and migration
  - **ti-asm-mcp** — device TRM access for register definitions, bit-field details, and
    peripheral descriptions; query this when a report issue has no `Suggested fix` or
    when register-level intent must be verified before constructing a replacement
- Bitfield-to-driverlib conversion modernizes legacy bitfield register-structure accesses
  (`PeriphRegs.REG.bit.FIELD`) into driverlib calls for the *same* device. There is no
  target device. Run this **before** device-to-device migration when the source uses
  bitfield patterns — it reduces noise in the device migration report.

## Extending this skill

Add a row to the workflow matrix and a file under `references/`. Keep each reference
procedure-only — describe how to call the IDEA MCP tools and how to process their reports.
Do not hardcode migration facts; let the MCP produce all authoritative analysis. Validate
every step against the live IDEA MCP before committing.
