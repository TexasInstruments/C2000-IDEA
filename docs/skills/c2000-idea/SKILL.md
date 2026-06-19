---
name: c2000-idea
description: Step-by-step workflows for C2000 code migration tasks using the IDEA MCP server. Use when the user asks to migrate C2000 code between devices, or to convert legacy bitfield register accesses to driverlib function calls.
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
4. Never invent file paths or device names — take them from `get_projects()`.

## Workflow matrix

| Task                                | Reference file                              | Primary IDEA MCP tool                         |
| ----------------------------------- | ------------------------------------------- | --------------------------------------------- |
| Device-to-device migration          | references/device-migration.md              | get_device_migration_report                   |
| Bitfield → driverlib conversion      | references/bitfield-to-driverlib-migration.md | get_bitfield_to_driverlib_migration_report  |

Notes:
- Device-to-device migration moves code from a source device family to one or more target
  device families. It needs a source device and target device(s).
- Bitfield-to-driverlib conversion modernizes legacy bitfield register-structure accesses
  into driverlib function calls for the *same* device. There is no target device.

## Extending this skill

Add a row to the workflow matrix and a file under `references/`. Keep each reference
procedure-only — describe how to call the IDEA MCP tools and how to process their reports.
Do not hardcode migration facts; let the MCP produce all authoritative analysis. Validate
every step against the live IDEA MCP before committing.
