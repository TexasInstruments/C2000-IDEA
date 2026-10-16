# Phase 3 — SysConfig Timing

> You are in **Phase 3** of the timing analysis. Skip it when the project has no `.syscfg`:
> set Phase 3 to SKIPPED in the Phase Status table and return to `timing-analyzer.md`.

### Rules for this phase

- Do take timing from the calls in the generated `board.c` — that is what the device runs.
- Do use SysConfig's computed fields only to cross-check.
- Don't change any SysConfig setting.

---

## 3.1 Generated `board.c`

With SysConfig MCP live, call `openFile` on the project's `.syscfg`, then:

1. Call `getErrorsAndWarnings` and `listGeneratedArtifacts`. If there is any error, or any
   artifact has `blockedByErrors: true` (a missing field means false), SysConfig is not
   generating code for this configuration: stop and
   tell the user *"`<.syscfg>` has errors, so SysConfig does not generate `board.c`. Fix them in
   SysConfig and run the analysis again."*
2. Call `getModuleInstances` and keep the instances.
3. `readGeneratedArtifact` on `board.c` and on `board.h`.

Without SysConfig MCP: read `board.c` and `board.h` in `sysConfigOutputLocation`. If they are
missing, record `UNRESOLVED: no generated board.c — build the project once` and skip to 3.4.

## 3.2 Timing calls

Read `timing-analyzer/timing-calls.md`. Record every call it lists in `board.c`, with its
instance, line and resolved arguments, as described there.

## 3.3 Cross-check

For each 3.1 instance of these modules, call `getInstanceConfiguration` with the field `ids`
below and compare with the value Phase 5 computes from the 3.2 calls. Keep the fields; Phase 5 makes
the comparison.

| Module | Fields |
|---|---|
| `/driverlib/adc.js` | `soc<N>SampleTime` for each SOC set up in 3.2 |
| `/driverlib/sci.js` | `baudVal` |
| `/driverlib/lin.js` | `brValActual` |

## 3.4 Record

Record each 3.1 peripheral module this workflow does not cover as
`NOTE: <module file name, e.g. ecap> <instances> — not analysed`. Leave out pin, system and
linker modules: `device_support`, `sysctl`, `asysctl`, `sync`, `gpio`, `inputxbar_input`,
`outputxbar`, `analog`, `CMD`. Call `closeFile` if the file is open.

Append to `c2000-timing.md`:

```markdown
## Phase 3 — SysConfig timing

Source: <board.c via SysConfig MCP | sysConfigOutputLocation/board.c>

| Instance | Peripheral | Call | board.c line | Arguments |
|---|---|---|---|---|

SysConfig fields: <instance field = value unit, …> (the unit is in the field name, e.g. `[ns]`)

<NOTE and UNRESOLVED lines from this phase, or "None">
```

Set Phase 3 to COMPLETE in the Phase Status table.

---

**Phase 3 complete.** Return to `timing-analyzer.md` and proceed to Phase 4.
