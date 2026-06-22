# Device-to-Device Migration Workflow (F28x → F28x)

Migrate a C2000 firmware project from one F28x device to another F28x device (e.g.
F28003x → F28P55x, F28004x → F280039x). Use when the user asks to migrate, port,
or upgrade between C2000 F28x devices.

This workflow keeps the source project unchanged as the golden reference. A new project
is created for each target device, settings are aligned, and code is migrated using the
IDEA MCP tools. All migration findings come from the MCP — never recall migration facts
from memory.

## When to use

The user wants to move a project from one C2000 F28x device to another F28x device and
needs a fully migrated target project with updated API/register symbols and aligned
project settings.

## Required inputs

The following must be provided by the user before starting. If either is missing, ask
explicitly:

1. **Source project name/path** — the project to use as the golden migration source
2. **Target migration device(s)** — one or more target F28x device families

### Input validation (before proceeding)

Call `list_migration_devices()` from IDEA MCP immediately after collecting inputs.
- Confirm every **target device** the user provided is in the supported list.
- If any target device is not supported, notify the user which device(s) are unsupported
  and **terminate** — do not proceed.
- The source device is validated later (Step 1.2) once discovered from the project, but
  if it is not in the supported list, also notify the user and terminate.

## Dependencies

**idea-mcp** (required):
- `get_projects()` — detect projects, current device, configured migration devices
- `list_migration_devices()` — supported migration device families
- `get_device_migration_report()` — run migration analysis on source files

**ccs-project MCP** (required):
- `getProjectDescriptors` — project metadata (name, device, build config)
- `getProjectProductReferences` — resolved SDK/product paths
- `importProject` — import a CCS project from SDK examples
- `buildProject` — build a project
- `getToolFlags` / `setToolFlags` — read/write compiler/linker flags
- `getToolOptions` — available build tool options

**ccs-sysconfig MCP** (required when project uses SysConfig):
- Tools TBD — used for analyzing and migrating .syscfg files

**ti-asm-mcp** (recommended):
- Provides device TRM access for register definitions and peripheral details
- Ground truth for device configuration at the hardware level

## How to run this workflow

### Step 1 — Discover, import, and validate the target project

#### 1.1 Collect and validate required inputs

- Confirm the user has provided the source project name/path and target device(s).
- If either is missing, ask explicitly before proceeding.

#### 1.2 Discover the source project

- **CCS MCP:** Call `getProjectDescriptors` and `getProjectProductReferences` for the
  source project. Note the device, SDK paths, build config, and product references.
- **IDEA MCP:** Call `get_projects()`. Locate the source project by name.
- **Cross-check:** The device, project name, and SDK info from both MCPs must agree.
  If they don't, stop and flag the inconsistency to the user.
- **Validate source device:** Confirm the discovered source device is in the
  `list_migration_devices()` supported list. If not, notify the user and **terminate**.

#### 1.3 Identify SDK type and C2000Ware path

The source project is based on one of three SDKs:
- **C2000Ware** (base SDK) — C2000Ware is the top-level directory itself
- **Motor Control SDK for C2000** — has `c2000ware/` folder at top level
- **Digital Power SDK** — has `c2000ware/` folder at top level

Determine which SDK the source uses from `getProjectProductReferences`. Then derive:
- If C2000Ware: `c2000ware_path = <sdk_root>`
- If Motor Control or Digital Power: `c2000ware_path = <sdk_root>/c2000ware/`

**Note this path** — it is used heavily in all subsequent steps.

#### 1.4 Read AGENTS.md (if present)

- Check for `AGENTS.md` at the SDK root. If it exists, read and follow its instructions.
- If the SDK is Motor Control or Digital Power, also check for `AGENTS.md` inside the
  `c2000ware/` subfolder. Read and follow if present.

#### 1.5 Import the universal driverlib example for the target device

- The starter project is always located at:
  `<c2000ware_path>/driverlib/<target-device>/examples/universal`
- Import via CCS MCP `importProject`.
- Repeat for each target migration device.

#### 1.6 Build the imported starter project

- Call `buildProject` on the freshly imported universal driverlib example.
- This confirms the import, toolchain, and SDK references are healthy.
- If the build fails, **stop and report to the user** — this is an environment/SDK issue,
  not a migration problem.

---

### Step 2 — Analyze and align project settings

Compare the source (golden) project against the target project. Apply settings from the
source to the target, except where differences are legitimate device deltas.

Use CCS MCP `getToolFlags` to read settings from both projects and `setToolFlags` to
apply mismatches to the target. The agent should apply settings automatically (not just
flag them) unless the difference is clearly a device-specific delta.

#### 2.1 Compiler flags

- Optimization level, debug info, warning levels, language standard, custom flags.
- Apply source settings to target where they differ.

#### 2.2 Predefined symbols / defines

- User `#define`s passed at the compiler level (e.g., feature flags, board identifiers).
- Apply source defines to target. Device-specific defines (e.g., `_F28004x`) should
  remain as the target device's define — do not overwrite.

#### 2.3 Include paths

- User-added include directories beyond SDK defaults.
- Apply source paths to target. Adjust any device-specific SDK paths to point to the
  target device's equivalent.

#### 2.4 Linker flags

- Stack/heap sizes, output format, map file generation.
- Apply source settings to target.

#### 2.5 Linker command file

Detect which path the **source** project uses:
- **Path A** — a `.cmd` file in the project's application files (user-managed)
- **Path B** — CMD module configured within SysConfig (generated output)

Then check what the **target** imported project uses.

**If source = Path A and target = Path A:**
- Proceed to reconciliation — port user customizations (custom sections, adjusted memory
  regions) from the source cmd onto the target device's cmd file.

**If source = Path A and target = Path B:**
- Remove the CMD module from the target project's SysConfig.
- Add an example target linker cmd file to the project (reference path provided below).
- Then reconcile user customizations onto it.

**If source = Path B:**
- Handled entirely by the SysConfig migration step (2.8). No separate cmd work needed.

**Target device example linker cmd path:**
`<c2000ware_path>/driverlib/<target-device>/cmd/<target-device>_generic_ram_lnk.cmd`

#### 2.6 Libraries

- Additional libraries linked by the source (math libs, custom .lib files).
- Apply to target. Adjust device-specific library paths to target equivalents.

#### 2.7 Source file inventory

- Identify which source `.c`/`.h` files are user application code vs. device-specific
  startup/driver files that should come from the new SDK.
- **Skip SysConfig-generated files** — these are outputs (e.g., `board.c`, `board.h`,
  files in `syscfg/` output folder). They will be regenerated after SysConfig migration.
- Copy user application code into the target project.

#### 2.8 SysConfig (.syscfg)

- If the source project uses SysConfig for pin/peripheral configuration:
  - Use CCS SysConfig MCP to analyze the source project's `.syscfg`.
  - Create the migrated `.syscfg` for the target device via CCS SysConfig MCP.
  - The generated outputs (.c/.h) are automatically correct — no manual migration needed.
- Specific SysConfig MCP tools TBD.

#### 2.9 Post-build steps

- Custom post-build commands (hex file generation, checksums, etc.).
- Apply source post-build steps to target where applicable.

#### 2.10 Runtime support (RTS)

- RTS library selection may differ per device but should match in flavor (e.g., floating
  point support level).
- Verify the target uses the equivalent RTS variant.

---

### Step 3 — Migrate source code

(Details TBD — covers running `get_device_migration_report` per file, processing
auto-fixable and manual-review issues.)

---

### Step 4 — Validate and report

(Details TBD — iterative build, fix, report cycle.)

---

## Do / Don't

- Do keep the source project unchanged — it is the golden reference.
- Do cross-check CCS MCP and IDEA MCP results for consistency.
- Do terminate early if devices are not in the supported migration list.
- Do apply settings automatically unless the difference is a legitimate device delta.
- Do read AGENTS.md from SDK roots if present.
- Do take file paths and device names from MCP tools — never invent them.
- Don't recall C2000 migration facts from memory — the MCP is the source of truth.
- Don't modify or migrate SysConfig-generated output files — migrate the .syscfg instead.
- Don't copy device-specific startup/driver files from the source — use the target SDK's versions.
