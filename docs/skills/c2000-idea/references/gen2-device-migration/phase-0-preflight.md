# Phase 0 — Inputs and pre-flight

Run this phase once, before Phase 1. Nothing is written yet: the log is created in Phase 1, so keep these
results in your session context.

## 0.1 Inputs

Take the source project, source family and target family from the user's request. If one is missing,
ask for it in one question. Never derive a family from `.ccxml`, linker or include files.

## 0.2 Probe the MCP servers

| Server | Probe | If it fails |
|---|---|---|
| IDEA MCP | `list_migration_devices()` | Stop. Ask the user to enable the IDEA MCP. |
| CCS Project MCP | `getProducts` | Stop. Ask the user to register the CCS Project MCP. |
| CCS SysConfig MCP | `listFiles` | Stop. Ask the user to register the CCS SysConfig MCP. |
| TI ASM MCP | `list_devices` | Stop. Ask the user to enable the TI ASM MCP. |

## 0.3 Validate the families

1. Source family: it must be in the source table of `gen2-device-migration.md`. Map F2823x to F2833x and
   F2802x0 to F2802x. For F28M35x and F28M36x, only the C28x core is migrated; tell the user.
2. Target family: it must be in `list_migration_devices()` and not an F29x family.
3. `list_devices` of the TI ASM MCP must list both families.

If a check fails, tell the user which and stop.

## 0.4 Find the source project

Call `getProjectDescriptors` for the source project and note its `location`, build configurations and
active configuration. If CCS does not know the project, ask the user to import it into the workspace and
stop.

## 0.5 C2000Ware

From `getProducts`, note the C2000Ware installation path (`c2000ware_path`) and version. The target
starter project and the target's `device.h` come from it. If no C2000Ware is installed, stop and tell the
user.

## Phase 0 complete

Tell the user the inputs, the MCP status and the C2000Ware path, and that Phase 1 creates the target
project. Return to `gen2-device-migration.md`.
