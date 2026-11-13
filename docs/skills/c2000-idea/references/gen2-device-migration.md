# Gen 2 Device Migration Workflow (Gen 2 bitfield → newer F28x driverlib)

Migrate a C2000 project written for a Gen 2 device in bitfield register style (`XxxRegs.REG.bit.FIELD`)
to a newer F28x device, in driverlib style. The target project is a new driverlib + SysConfig project;
every register access of the source becomes a driverlib call, or an `HWREG` access when driverlib has no
function, that does the same thing on the target.

The workflow first establishes what the Gen 2 code does, register by register, from the Gen 2 TRM. It
then ports that behavior to the target and checks the result against it. All register facts come from
the TRMs through `ti-asm-mcp`; all driverlib facts come from the IDEA MCP. Never recall either from memory.

## When to use

The user has a project for a Gen 2 device and wants it running on a newer F28x device. Use
`device-migration.md` instead when the source is already a newer F28x device, and
`bitfield-to-driverlib-migration.md` when the device stays the same.

## Required inputs

The user gives all three in the request. If one is missing, ask for it; never derive a device family from
project files.

1. **Source project** — the CCS project to migrate.
2. **Source family** — one of the Gen 2 families below.
3. **Target family** — one of the target families below.

| Source family | Also covers |
|---|---|
| F2802x | F2802x0 code |
| F2803x | |
| F2805x | |
| F2806x | |
| F2833x | F2823x code |
| F28M35x | C28x core only |
| F28M36x | C28x core only |

**Target families:** the families `list_migration_devices()` returns, except F29x families (for example
F29H85x). Compare names case-insensitively and use the exact entry from the list from then on.

If the source or target family is not in these lists, tell the user and stop.

## Dependencies

**idea-mcp** (required):
- `list_migration_devices()` — the target families
- `get_driverlib_function(device, names)` — signature and body of target driverlib functions

**ccs-project MCP** (required):
- `getProducts`, `getProjectDescriptors`, `getProjectProductReferences`
- `importProject`, `renameProject`, `buildProject`, `waitForResult`
- `getToolFlags`, `setToolFlags`

**ccs-sysconfig MCP** (required):
- `listFiles`, `openFile`, `closeFile`, `save`
- `getModuleInstances`, `getInstanceConfiguration`, `changeConfiguration`, `addModuleInstances`
- `getClockTreeInstances`, `traceClockSignal`, `getErrorsAndWarnings`
- `listGeneratedArtifacts`, `readGeneratedArtifact`

**ti-asm-mcp** (required): the source and the target TRMs.

**Skills:**
- `ti-asm-gen2-register-lookup` (required) — how to find Gen 2 register and field definitions in the TRM.
  It is installed with the TI ASM skills. If it is not available, tell the user to register the TI ASM
  skills and stop.
- `references/timing-analyzer.md` and `references/pinout-analyzer.md` of this skill — run on the target
  project in Phase 8.

## Migration log

The log is `c2000-gen2-device-migration.md` in the **target project's directory**. Phase 1 creates it
once the target project exists; every later phase appends its section. The log holds the register table,
the Gen 2 specification, the target plan and the per-file progress, so it is the record a reviewer and a
resumed session work from.

Never overwrite an earlier phase's section. The only in-place edits are the Phase Status rows and the
per-file progress rows. If your context is getting long or you lose track, re-read the log.

## Resuming a paused migration

Read `c2000-gen2-device-migration.md` first. Find the last phase marked COMPLETE and, in Phase 6, the last
file marked DONE. Read only the phase file you resume and continue from there. Never repeat a step the log
records as complete.

## How to run this workflow

Read one phase file at a time, complete every step in it, then return here and read the next one. Phase 6
dispatches sub-agents; the orchestrator never reads `phase-6-port-rules.md` itself.

0. `gen2-device-migration/phase-0-preflight.md` — inputs and MCP checks.
1. `gen2-device-migration/phase-1-target-project.md` — create the target project and the log.
2. `gen2-device-migration/phase-2-source-inventory.md` — every file, register access and device support
   call of the source; what will be dropped.
3. `gen2-device-migration/phase-3-understand.md` — what the source does: register meanings, clocks,
   timing and the application, confirmed by the user.
4. `gen2-device-migration/phase-4-target-plan.md` — peripheral, pin, interrupt and clock plan for the
   target, approved by the user.
5. `gen2-device-migration/phase-5-project-settings.md` — sources, build settings, SysConfig clocks and
   linker sections in the target project.
6. `gen2-device-migration/phase-6-port.md` — port every file (one sub-agent per file, rules in
   `gen2-device-migration/phase-6-port-rules.md`).
7. `gen2-device-migration/phase-7-build.md` — clean build and error triage.
8. `gen2-device-migration/phase-8-verify.md` — check the target against the Phase 3 specification.
9. `gen2-device-migration/phase-9-report.md` — final report.

## Do / Don't

- Don't edit the source project. It is the reference.
- Don't edit anything in the SDK, and don't link SDK files into the target project. Device support and
  driver files the source used are never copied or linked; their behavior is ported (Phase 6).
- Don't port CLA code. Report it, record it in the log and drop it.
- Don't keep a peripheral the target does not have. Map it when the target has a peripheral with the same
  function (Phase 4); otherwise report it, record it and drop it.
- Don't recall register, driverlib or pin facts from memory. Every one comes from the MCPs.
- Don't write TRM section numbers into the log or the code. Find TRM content by title every time.
- Do keep the source's file and function structure in the target, so each target function can be compared
  with the source function it came from.
- Do stop and ask the user when an MCP call fails or returns something you cannot interpret.
