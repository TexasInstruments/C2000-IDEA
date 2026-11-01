# Bitfield-to-Driverlib Migration Workflow

This workflow converts legacy C2000 bitfield register-structure accesses (e.g.
`Regs.FIELD.bit.NAME`) into driverlib function calls, using the IDEA MCP
`get_bitfield_to_driverlib_migration_report` tool. All register details,
driverlib function suggestions, and TRM links come from the MCP. Never recall
register mappings from memory.

## When to use

The user has C2000 code that uses the older bitfield register-structure style
and wants to modernize it to use driverlib functions. This is NOT a
device-to-device migration — the code stays on the same device. Use the
device-migration reference instead if the user is moving between device families.

## How to run this workflow

### 1. Discover the project and its device

- Call `get_projects()` to list projects with their `currentDevice` and
  `deviceVariant`.
- If the list is empty or the expected project is missing, call
  `get_projects(rescan: true)` once, then retry.
- Identify the **sourceDevice** — this is the project's `currentDevice`. The
  bitfield tool needs it to look up register-to-function mappings for the
  correct device family.

### 2. Create the destination project

Convert in a clone of the source project, not in the source project. Follow
`bitfield-to-driverlib-migration/destination-project.md`: it clones the project, enables
SysConfig in the clone and adds driverlib through a SysConfig script. Run the report, edit
and build in the clone from here on.

### 3. Run the bitfield migration report per source file

For each of the user's own C/H source files to convert (not the device_support library
files copied from the SDK, which step 6 deletes; a file byte-identical to its copy under
C2000Ware `device_support/<family>` is one of those):

- Call `get_bitfield_to_driverlib_migration_report(filePath, sourceDevice)`
  with the absolute file path and the device from step 1.
- The tool returns a structured markdown report and populates VS Code
  diagnostics (squiggly underlines) as a side effect.
- Work one file at a time: convert it, run the report on it again, build the
  clone, then move on to the next file.

### 4. Understand the report structure

The report groups every bitfield register access into one of four fix types:

| Fix type | Meaning | Approach |
|----------|---------|----------|
| **write** | Bitfield assignment (`Regs.FIELD.bit.NAME = value`) | Use the matching driverlib write function from the candidates |
| **read** | Bitfield read (`x = Regs.FIELD.bit.NAME`) | Use the matching driverlib read function from the candidates |
| **access** | Bitfield access in an expression | Choose the best-matching driverlib function from the available list |
| **whole** | Whole-register access (`Regs.FIELD.all = value`) | Consider a driverlib peripheral configuration function instead of raw register write |

Each issue includes:
- **Original pattern** — the exact source line
- **Available driverlib functions** — candidate functions with their signatures,
  listed per register (not per bit); pick the one that matches the field
- **Function definitions** — the exact `get_driverlib_function` call that returns
  the source, with comments, of the candidates
- **Raw access** — register width and offset, given when no candidate exists
- **Register Bit Details** — shift, mask, and description for manual fixes
- **TRM Link** — link to the register documentation

**Reading the TRM:** Each issue may include a `TRM Link` to the register's page in the
device Technical Reference Manual. The link is for the user to open in a browser; do not
fetch it. When the register bit details (shift, mask, description) are not enough to
construct a correct driverlib call, read the register through `ti-asm-mcp`:

1. Find the register's section id with `search_trm_keywords(device, "<register name>")`
   using only the name. Use a result whose section title is "<register name> Register
   (Offset = …)".
2. If no result has that title, find the peripheral's chapter number from any result
   that mentions the peripheral. Then call `list_trm_headings(device, chapter, limit: 4)`
   and take the id of the heading titled "<register name> Register".
3. `get_trm_section(device, sectionId)` returns the register: bit field table, reset
   value, access type and allowed values.
4. Construct the driverlib call using only data from the TRM; do not infer bit values or
   field names that the documentation does not give.

### 5. Process the report

Work through issues in file order. For each issue:

1. Navigate to the reported line/column.
2. Choose the function from **Available driverlib functions** that matches the
   field and construct the call with the correct arguments using its signature
   and the register bit details. If the signature is not enough, call
   `get_driverlib_function` (the report shows the exact call).
   One driverlib function can set several fields the report lists as separate
   issues. Read the signature of the function you pick and cover every field it sets
   in one call; re-running the report confirms no issue was missed.
3. If no function is listed, use the **Raw access** details and the register bit
   details (shift, mask).
4. For **whole**-register writes with no candidate function, consider whether a
   driverlib peripheral configuration function is more appropriate than a raw
   register write.
5. After editing the file, run the report on it again; only issues on commented-out
   lines should remain.

Enum values, base macros and `INT_*` names are in the driverlib headers, in
`<c2000ware_path>/driverlib/<device in lower case>/driverlib/`. Take `<c2000ware_path>`
from CCS Project MCP `getProjectProductReferences`.

### 6. Remove the device_support code

The clone keeps its device_support headers, so it builds while files are converted. Once
every file is converted and the clone builds, ask the user to confirm, then remove the
device_support code from the clone:

1. Replace the device_support names the report did not cover. Legacy integer and float
   types map to the C99 names, for example `Uint16` to `uint16_t`, `int32` to `int32_t`
   and `float32` to `float32_t`. Common ones:

| device_support | driverlib |
|----------------|-----------|
| `#include "f28x_project.h"` | `#include "driverlib.h"`, `#include "device.h"` |
| `Uint8`, `Uint16`, `Uint32`, `Uint64`, `int16`, `int32`, `int64` | `uint8_t`, `uint16_t`, `uint32_t`, `uint64_t`, `int16_t`, `int32_t`, `int64_t` |
| `float32`, `float64` | `float32_t`, `float64_t` |
| `bool_t`, `status_t` | `bool` |
| `InitSysCtrl()` | `Device_init()` |
| `InitGpio()` | `Device_initGPIO()` |
| `InitPieCtrl()` | `Interrupt_initModule()` |
| `InitPieVectTable()` | `Interrupt_initVectorTable()` |
| `PieVectTable.X_INT = &isr;` | `Interrupt_register(INT_X, &isr);` |
| `IER \|= M_INTn` | `Interrupt_enable(INT_X)` for the interrupt being enabled |

2. Delete the clone's files that are identical to a same-named file in the C2000Ware
   `device_support/<family>/common/source`, `headers/source` or `headers/cmd` folder, such
   as `<family>_sysctrl.c` and `<family>_headers_nonBIOS.cmd`. Keep
   `<family>_codestartbranch.asm`. A file that differs from the SDK copy holds the user's
   changes: keep it and tell the user. Code that calls `DELAY_US` uses `DEVICE_DELAY_US`
   from `device.h` instead.
3. Remove the include paths that point into C2000Ware's `device_support/<family>/common/include`
   and `headers/include` from the clone's `.cproject`: delete their
   `<listOptionValue value="..."/>` lines in every `<cconfiguration>`. Without this the
   SDK's `device.h` is included, not the generated `syscfg/device.h`. Wait for CCS to pick
   up the edit: poll `getToolFlags(project, "compiler")` until the paths are gone.
4. Build the clone and fix each error the compiler reports.

### 7. Report back

After processing all files:

1. Summarize per file: how many issues were fixed vs. flagged for manual review.
2. List any registers where you could not find a confident driverlib replacement —
   flag these for the user.
3. List every file you modified so the user can review the diffs.

## Do / Don't

- Do take file paths and device names from `get_projects()` — never invent them.
- Do use Register Bit Details (shift, mask) to construct manual fixes when no
  driverlib function is listed.
- Do run the report on one source file at a time, and again after editing it.
- Don't edit the source project; every edit goes in the clone.
- Don't recall C2000 register-to-driverlib mappings from memory — the MCP is the
  source of truth.
- Don't confuse this with device-to-device migration — bitfield-to-driverlib stays
  on the same device.
- Do fetch TRM register data using the ti-asm-mcp tool when needed.
- Don't fetch the TRM Links content. Those are just for the user to read manually if 
  they want to see it in a browser
- Don't guess bit values or allowed modes from the register name alone — verify in the
  TRM page content.