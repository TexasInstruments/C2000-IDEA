# Phase 1 — Target project

Create the target project from the target's driverlib + SysConfig starter project and start the log.
Stop and ask the user if any MCP call fails or returns something you cannot interpret.

## 1.1 Import the starter project

| Target family | Starter project |
|---|---|
| F28P65x, F2838x | `<c2000ware_path>/driverlib/<target>/examples/c28x/universal/CCS/universal_c2000.projectspec` |
| F2837xD, F2837xS, F2807x | No universal project: ask the user for the starter project to use. |
| All other families | `<c2000ware_path>/driverlib/<target>/examples/universal/CCS/universal_c2000.projectspec` |

`<target>` is the target family in lower case. Import it with `importProject`, then `buildProject` it. If
the build fails, stop and report it: the toolchain or SDK installation has a problem.

## 1.2 Rename it

Propose `<sourceProjectName>_<target family in lower case>` (drop the source family from the source name
if it contains it) and confirm the name with the user. `renameProject`, then `buildProject` again.

## 1.3 Target configuration

If the project has no `targetConfigs` folder, or none of its `.ccxml` files names the target family, copy
the `.ccxml` files from `<c2000ware_path>/device_support/<target>/common/targetConfigs/` into a
`targetConfigs` folder of the project.

## 1.4 Create the log

Create `c2000-gen2-device-migration.md` in the target project's directory:

```markdown
# Gen 2 Device Migration Log

| Field | Value |
|---|---|
| Source project | `<name>` |
| Source project directory | `<path>` |
| Source family | `<family>` |
| Target project | `<name>` |
| Target project directory | `<path>` |
| Target family | `<family>` |
| C2000Ware | `<path>`, `<version>` |
| Target build configurations | `<names>`, active `<name>` |

## Pre-flight (Phase 0)

| MCP | Status |
|---|---|
| IDEA MCP | live |
| CCS Project MCP | live |
| CCS SysConfig MCP | live |
| TI ASM MCP | live |

## Phase Status

| Phase | Status | Notes |
|---|---|---|
| 0 — Pre-flight | COMPLETE | |
| 1 — Target project | COMPLETE | starter built before and after rename |
| 2 — Source inventory | PENDING | |
| 3 — Understand | PENDING | |
| 4 — Target plan | PENDING | |
| 5 — Project settings | PENDING | |
| 6 — Port | PENDING | |
| 7 — Build | PENDING | |
| 8 — Verify | PENDING | |
| 9 — Report | PENDING | |
```

## Phase 1 complete

Tell the user the target project name and that both builds passed. Return to `gen2-device-migration.md`.
