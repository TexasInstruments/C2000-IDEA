# Phase 0 — Pre-flight Check

> **Run Phase 0 once before Phase 1.** It confirms the MCP servers this workflow uses are live.

---

## Step 0.1 — Probe IDEA MCP

Call `get_projects(rescan: true)` — without `rescan` the result can miss recently imported
projects.

- **Success** → IDEA MCP is live. Keep the result; Phase 1 uses it.
- **Failure / unreachable** → **Stop.** Tell the user:
  > *"The IDEA MCP server is not running. Please enable it: Command Palette →
  > `C2000-IDEA: Enable IDEA MCP` (or click **MCP Servers** in the VS Code status bar), then
  > re-register the MCP with your agent tool and tell me to retry."*

## Step 0.2 — Probe CCS Project MCP

Call `getProducts`.

- **Success (any response)** → CCS Project MCP is live.
- **Tool not found / unreachable** → **Stop.** Tell the user:
  > *"The CCS Project MCP is not available. It is required to read the project's device,
  > build configuration and SDK location. Please register it with your agent tool."*

## Step 0.3 — Probe CCS SysConfig MCP

Call `listFiles`. The result does not matter.

- **Success (any response)** → CCS SysConfig MCP is live.
- **Tool not found / error** → soft warning. Phase 2 reads the `pinmux.csv` that the last
  build left in `sysConfigOutputLocation` instead. Tell the user:
  > *"The CCS SysConfig MCP is not available. If the project has a `.syscfg`, I will use the
  > pin table from its last build, which may be out of date. To enable it, register the CCS
  > SysConfig MCP with your agent tool."*

## Step 0.4 — Probe TI ASM MCP

Call `list_devices`. The result does not matter.

- **Success (any response)** → TI ASM MCP is live.
- **Tool not found / unreachable** → soft warning. Phase 4 reports the boot-mode select pins
  as not determined. Tell the user:
  > *"TI ASM MCP is not available, so I cannot look up the boot-mode select pins. Enable it
  > with Command Palette → `C2000-IDEA: Enable TI ASM MCP`."*

## Step 0.5 — Phase 0 complete

Keep these results in your session context — `c2000-pinout.md` is created in Phase 1:

```
Pre-flight:
  IDEA MCP:           live
  CCS Project MCP:    live
  CCS SysConfig MCP:  <live | not available>
  TI ASM MCP:         <live | not available>
```

Return to `pinout-analyzer.md` and proceed to Phase 1.
