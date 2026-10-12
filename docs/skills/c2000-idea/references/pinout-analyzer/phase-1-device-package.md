# Phase 1 — Project, Device and Package

> You are in **Phase 1** of the pinout analysis.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user.** Do not guess, retry blindly, or skip the step.

### Rules for this phase

- Do take the device family from `get_projects()` and the package from the `.syscfg` header
  or the user — never infer a package from a part number.
- Do keep the project unchanged.

---

## 1.1 Project

Confirm the project name with the user if it was not given.

Call `getProjectDescriptors` (`nameFilter` = the project name) and record `location`,
`device.name`, `activeBuildConfiguration`, `buildDirectoryLocation` and
`sysConfigOutputLocation`.

## 1.2 Device family

From the Phase 0 `get_projects()` result, take the project's `currentDevice` (e.g. `F28P55x`).
This is the device family used for every file name below.

Cross-check: the family name without its trailing `x` (e.g. `F28P55`) must appear in
`device.name` from 1.1 (e.g. `TMS320F28P550SJ9`), case-insensitively. If it does not, stop
and ask the user which device the project targets.

## 1.3 C2000Ware path

Call `getProjectProductReferences` and take the C2000Ware product `location`. If the project
uses the Motor Control SDK or Digital Power SDK instead, `c2000ware_path` is the `c2000ware`
folder inside that SDK. If the location does not exist on disk, ask the user for the
C2000Ware path.

## 1.4 SysConfig file and package

List the `.syscfg` files in the project `location`.

- **One `.syscfg`:** read its header line `@cliArgs` and take the `--package` value. Strip a
  `<Family>_` prefix if present (`--package "F28004x_100PZ"` → `100PZ`). Record the
  `--context` value as well when present (`CPU1`, `CPU2`, `system`).
- **Several `.syscfg` files:** ask the user which one the active build configuration uses.
- **No `@cliArgs` header, or no `.syscfg`:** list the family's pinout files (1.5) and ask:
  > *"Which package is this board built with? The available packages for `<family>` are:
  > `<list>`."*

## 1.5 Pinout file

The pinout file is `references/pinout/pinout-md/<family>_<package>.md` in the `c2000-idea`
skill folder, both lowercase (e.g. `f28p55x_100pz.md`).

If it does not exist, list the files that start with `<family>_` and ask the user to pick the
package. If none exist for the family, tell the user that pins can be reported by GPIO number
only, without package pin numbers, and continue.

Read the file. Each row is one package pin:

| Column | Content |
|---|---|
| `Pin` | Package pin number or ball. A row with an empty `Pin` continues the pin above it. |
| `Name` | All functions on the pin, `/`-separated: ADC channels (`A0`, `B15`, … or `ADCINA0` style), analog functions (`PGA1_INP`, `CMPIN1P`, `DACA_OUT`, `VREFHI`), GPIO, system functions (`XRSn`, `X1`, `TCK`, …) |
| `0` | The GPIO (`GPIO<n>`) or analog-input (`AIO<n>`) number on the pin, empty for pins without one |
| `1`–`15` | The signal selected by each mux mode |

Some pins carry two rows with the same `Pin` and different `GPIO<n>` in column `0`; both GPIOs
are bonded to that pin. A row whose `Name` reads `ERROR` has no data; report any use of that
pin as `UNRESOLVED: pinout data missing for pin <pin>`.

## 1.6 Pin map and device headers

Confirm both exist:
- `<c2000ware_path>/driverlib/<family>/driverlib/pin_map.h` (`<family>` lowercase)
- `<c2000ware_path>/device_support/<family>/common/include/device.h`

## 1.7 Predefined symbols

Call `getToolFlags` (`toolType: "compiler"`, `configuration`: the active build configuration).
Record every `--define=<name>[=<value>]` and `-D<name>`. Phase 3 uses them to select `#if`
branches in `device.h` and the project sources.

## 1.8 Create the pin report

Create `c2000-pinout.md` in the project `location`:

```markdown
# C2000 Pinout Analysis

| Field | Value |
|---|---|
| Project | `<project name>` |
| Project directory | `<location>` |
| Device family | `<family>` |
| Device | `<device.name>` |
| Package | `<package>` (`<from .syscfg header | user>`) |
| SysConfig file | `<path>` / none |
| SysConfig context | `<CPU1 | CPU2 | system | none>` |
| Active build configuration | `<name>` |
| Predefined symbols | `<list>` |
| Pinout file | `<path>` |
| C2000Ware path | `<c2000ware_path>` |

## Pre-flight (Phase 0)

| MCP | Status |
|---|---|
| IDEA MCP | live |
| CCS Project MCP | live |
| CCS SysConfig MCP | `<live / not available>` |
| TI ASM MCP | `<live / not available>` |

## Phase Status

| Phase | Status |
|---|---|
| Phase 1 — Device and package | COMPLETE |
| Phase 2 — SysConfig pins | PENDING |
| Phase 3 — Code pins | PENDING |
| Phase 4 — System pins | PENDING |
| Phase 5 — Report | PENDING |
```

---

**Phase 1 complete.** Show the user the device family, package and pinout file, and ask:
*"Is `<family>` in the `<package>` package correct? Every pin number depends on it."* Wait for
confirmation, then return to `pinout-analyzer.md` and proceed to Phase 2.
