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

### 2. Run the bitfield migration report per source file

For each C/H source file to convert:

- Call `get_bitfield_to_driverlib_migration_report(filePath, sourceDevice)`
  with the absolute file path and the device from step 1.
- The tool returns a structured markdown report and populates VS Code
  diagnostics (squiggly underlines) as a side effect.

### 3. Understand the report structure

The report groups every bitfield register access into one of four fix types:

| Fix type | Meaning | Approach |
|----------|---------|----------|
| **write** | Bitfield assignment (`Regs.FIELD.bit.NAME = value`) | Apply the suggested driverlib write function |
| **read** | Bitfield read (`x = Regs.FIELD.bit.NAME`) | Apply the suggested driverlib read function |
| **access** | Bitfield access in an expression | Choose the best-matching driverlib function from the available list |
| **whole** | Whole-register access (`Regs.FIELD.all = value`) | Consider a driverlib peripheral configuration function instead of raw register write |

Each issue includes:
- **Original pattern** — the exact source line
- **Suggested replacement** — a concrete driverlib call (when available, apply directly)
- **Available driverlib functions** — candidate functions (when no single suggestion, pick the best match)
- **Register Bit Details** — shift, mask, and description for manual fixes
- **TRM Link** — link to the register documentation

**Reading TRM links:** Each issue may include a `TRM Link` pointing to the register's
documentation in the device Technical Reference Manual. When no `Suggested replacement`
is available and the register bit details (shift, mask, description) are insufficient
to construct a correct driverlib call, fetch the TRM link using this protocol:

1. **Do not attempt to retrieve from the web** — These links are only for the user to 
  read information from the browser when they want to look at documentation.
2. **If you need the register info**  — Use the ti-asm-mcp to get the register content
5. **Locate the register section** — find the register name, bit field table, and
   allowed values.
6. **Read the full register section** for the specific bit being accessed — name, reset
   value, access type (R/W/RW), and description.
7. **Construct the driverlib call** using only data from the TRM — do not infer
   or hallucinate bit values or field names not present in the documentation.

### 4. Process the report

Work through issues in file order. For each issue:

1. Navigate to the reported line/column.
2. If a **Suggested replacement** is provided, apply it directly.
3. If only **Available driverlib functions** are listed, choose the best-matching
   function and construct the call with the correct arguments using the register
   bit details.
4. For **whole**-register writes with no driverlib suggestion, consider whether a
   driverlib peripheral configuration function is more appropriate than a raw
   register write.
5. Verify no other references to the original bitfield pattern remain in the file.

### 5. Report back

After processing all files:

1. Summarize per file: how many issues were fixed vs. flagged for manual review.
2. List any registers where you could not find a confident driverlib replacement —
   flag these for the user.
3. List every file you modified so the user can review the diffs.

## Do / Don't

- Do take file paths and device names from `get_projects()` — never invent them.
- Do apply suggested replacements directly when they are provided.
- Do use Register Bit Details (shift, mask) to construct manual fixes when no
  driverlib function is suggested.
- Do run the report once per source file you intend to convert.
- Don't recall C2000 register-to-driverlib mappings from memory — the MCP is the
  source of truth.
- Don't confuse this with device-to-device migration — bitfield-to-driverlib stays
  on the same device.
- Do fetch TRM register data using the ti-asm-mcp tool when needed.
- Don't fetch the TRM Links content. Those are just for the user to read manually if 
  they want to see it in a browser
- Don't guess bit values or allowed modes from the register name alone — verify in the
  TRM page content.