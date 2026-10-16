# Phase 1 — Project, Device and Core

> You are in **Phase 1** of the timing analysis.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user.** Do not guess, retry blindly, or skip the step.

### Rules for this phase

- Do take the device family from `get_projects()`.
- Do keep the project unchanged.

---

## 1.1 Project

Confirm the project name with the user if it was not given.

Call `getProjectDescriptors` (`nameFilter` = `^<project name>$`) and record `location`,
`systemConfigurationFiles`,
`device.name`, `activeBuildConfiguration`, `buildDirectoryLocation`,
`sysConfigOutputLocation` and `excludedFromBuild`.

## 1.2 Device family

From the Phase 0 `get_projects(rescan: true)` result, take the project's `currentDevice`
(e.g. `F28003x`).

If the project is not in the result, its `currentDevice` is empty, or it is an F29x family,
stop and tell the user: *"This workflow covers F28x projects that IDEA detects in the
workspace."*

## 1.3 C2000Ware path

Call `getProjectProductReferences` and take the C2000Ware product `location`. If the project
uses the Motor Control SDK or Digital Power SDK instead, `c2000ware_path` is the `c2000ware`
folder inside that SDK.

## 1.4 SysConfig file and core

Take the `.syscfg` files from `systemConfigurationFiles` (paths relative to `location`; record
them as absolute paths). If there are several, ask the user which
one the active build configuration uses. A `.syscfg` without any `scripting.addModule(` line is
an empty template: record `SysConfig file: none (empty template)` and treat the project as
having no `.syscfg` from here on.

Take `--context` from the `.syscfg` header line `@v2CliArgs`, else `@cliArgs`. If it is `CPU2`
or any core other than `CPU1` or `system`, stop and tell the user: *"This workflow covers CPU1
projects. `<project>` is a `<context>` project."*

## 1.5 Predefined symbols

Call `getToolFlags` (`toolType: "compiler"`, `configuration`: the active build configuration).
Record every `--define=<name>[=<value>]` and `-D<name>`. Phases 2 and 4 use them to select
`#if` branches.

A `--define=${…}` entry is a build variable, not a symbol. When one exists:
- If `<buildDirectoryLocation>/.clangd/compile_commands.json` exists, take the `-D` defines from
  its entries for the project's `.c` files outside `sysConfigOutputLocation` instead; they replace the whole `getToolFlags` list. If
  those entries differ, record `UNRESOLVED: predefined symbols differ between files`.
- Otherwise record each variable as `UNRESOLVED: build variable ${…}`.

## 1.6 Application files

List every `.c` and `.h` file under the project `location`, except:
- files under `buildDirectoryLocation` and `sysConfigOutputLocation`;
- paths in `excludedFromBuild`;
- any `device/driverlib` folder — a copy of the driverlib sources;
- `device.c` — `Device_init()` applies the clock tree's own settings.

Phase 4 scans these files.

## 1.7 Create the timing report

Create `c2000-timing.md` in the project `location`, replacing any earlier one:

```markdown
# C2000 Peripheral Timing Analysis

| Field | Value |
|---|---|
| Project | `<project name>` |
| Project directory | `<location>` |
| Device family | `<family>` |
| Device | `<device.name>` |
| SysConfig file | `<path>` / none |
| SysConfig context | `<CPU1 | system | none>` |
| Active build configuration | `<name>` |
| Predefined symbols | `<list>` (getToolFlags / compile_commands.json) |
| C2000Ware path | `<c2000ware_path>` |
| Application files | `<list>` |

## Pre-flight (Phase 0)

| MCP | Status |
|---|---|
| IDEA MCP | live |
| CCS Project MCP | live |
| CCS SysConfig MCP | `<live / not available>` |

## Phase Status

| Phase | Status |
|---|---|
| Phase 1 — Project | COMPLETE |
| Phase 2 — Clocks | PENDING |
| Phase 3 — SysConfig timing | PENDING |
| Phase 4 — Code timing | PENDING |
| Phase 5 — Report | PENDING |
```

---

**Phase 1 complete.** Return to `timing-analyzer.md` and proceed to Phase 2.
