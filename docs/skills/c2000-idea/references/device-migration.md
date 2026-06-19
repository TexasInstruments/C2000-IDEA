# Device-to-Device Migration Workflow

Migrate a C2000 firmware project from one C2000 device to another (e.g.
F28003x to F29H85x, F28004x to F28P55x). Use when the user asks to migrate, port,
or upgrade between C2000 devices.
This workflow migrates C2000 code written for one device family to one or more target
device families, using the IDEA MCP `get_device_migration_report` tool. All migration
findings — changed symbols, suggested fixes, manual-review items — come from the MCP.
Never recall migration facts from memory.

## When to use

The user wants to move a project (or a specific source file) from one C2000 device to
another, and needs to know what API/register symbols change and how to update them.

## Dependencies

Although the user can do without some of the dependencies, it is best to have all of the
following dependencies enabled.
**idea-mcp**: 
- Provides list of supported migration device families
- Detects existing projects and migration devices configured
- Runs migration check on .c and .h files and will return a complete report for each file 
  and the actions that must be taken.
**ti-asm-mcp**:
- Provides access to device Technical Reference Manual, the device regsiter defintions etc.
- Serves as the ground truth for device configuration at the hardware level
**ccs-project** mcp:
- Provides the following tools used for creating the write project for the target device
  - getProjectDescriptors — Get metadata for projects in the workspace (name, device, build config, etc.)
  - getProjectProductReferences — Get resolved paths for products referenced by a project
  - importProject — Import or create a CCS project
- Provides the following tools used for changing project settings and building the project
  for validation
  - buildProject — Build a specified project
  - getToolFlags — Get current compiler/linker flags (optimization, includes, defines, libraries)
  - setToolFlags — Append or prepend build flags to a tool
  - getToolOptions — Get available options for a tool (e.g., valid optimization levels)

With these dependencies in place, new target project is created, the correct setting are configured,
the code is migrated to the new device and the project is built throughout the migration iteratively
to ensure compilation is successful. Any time the agent needs more information around the device or 
one of it's peripherals, it can retrieve the technical reference manual and analyze the sdk.


## How to run this workflow

### 1. Discover the project and devices

- Call `get_projects()` to list projects with their `currentDevice`, `deviceVariant`, and
  configured `migrationDevices`.
- If the list is empty or the expected project is missing, call `get_projects(rescan: true)`
  once, then retry.
- Identify the **source device** (usually the project's `currentDevice`) and the
  **target device(s)** the user wants to migrate to.

### 2. Confirm the device names

- If you are unsure a device name is valid, call `list_migration_devices()` to get the
  supported device families.
- Pass the device family name (e.g. `F280013x`), not a specific part number. Device names
  are case-insensitive.

### 3. Run the migration report per source file

For each C/H source file to migrate:

- Call `get_device_migration_report(filePath, sourceDevice, targetDevices)` with the
  absolute file path from `get_projects()`, the source device, and the array of target
  device(s).
- The tool returns a structured markdown report and also populates VS Code diagnostics
  (squiggly underlines) in the editor as a side effect.

### 4. Process the report

The report groups findings into:

- **Auto-fixable issues** — have a concrete code replacement. Apply these directly to the
  source file.
- **Needs-manual-review issues** — link to official TI migration collateral. Open the
  linked guide, read it, and make the change the guide describes. Do not guess.

Work through the report in file order. For each issue:

1. Navigate to the reported line/column.
2. Apply the suggested fix (auto-fixable) or follow the linked guide (manual review).
3. Verify no other references to the changed symbol remain in the file.

### 5. Report back

After processing all files:

1. Summarize per file: how many issues were fixed vs. flagged for manual review.
2. List any symbols where you could not produce a confident fix — flag these for the user.
3. List every file you modified so the user can review the diffs.

## Do / Don't

- Do take file paths and device names from `get_projects()` — never invent them.
- Do apply auto-fixable replacements directly; do follow the linked guide for manual items.
- Do run the report once per source file you intend to migrate.
- Don't recall C2000 symbol or register migration details from memory — the MCP is the
  source of truth.
- Don't apply a "manual review" change without reading the linked migration guide first.
