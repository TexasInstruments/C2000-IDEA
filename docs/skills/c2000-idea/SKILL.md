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

These workflows require the IDEA MCP server to be running. It is hosted by the C2000-IDEA
extension over HTTP. If the IDEA MCP tools are not available in your session, tell the user
to enable it (Command Palette → "C2000-IDEA: Enable IDEA MCP") and register it with their
agent, then retry.

## How to use this skill

1. Discover the workspace first. Call `get_projects()` to list the C2000 projects, their
   current devices, and configured migration targets. If the list is empty or the project
   you expect is missing, call `get_projects(rescan: true)` once to re-scan the workspace.
2. Look up the migration task in the workflow matrix below.
3. Open the matching reference file and follow its steps.

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
  - **ti-asm-mcp** — device TRM access for register definitions and peripheral details
- Bitfield-to-driverlib conversion modernizes legacy bitfield register-structure accesses
  into driverlib function calls for the *same* device. There is no target device.

## Extending this skill

Add a row to the workflow matrix and a file under `references/`. Keep each reference
procedure-only — describe how to call the IDEA MCP tools and how to process their reports.
Do not hardcode migration facts; let the MCP produce all authoritative analysis. Validate
every step against the live IDEA MCP before committing.
