# Peripheral Timing Analysis Workflow

Report what each peripheral in a C2000 F28x project actually runs at: PWM frequency and dead
band, ADC clock and sample window, serial bit rates, CAN bit timing and CPU timer periods. The
workflow reads the project's clocks, the timing calls SysConfig generates, and the timing calls
in the application code, and writes a timing report into the project.

It changes nothing in the project except writing `c2000-timing.md`: no source edits, no
SysConfig `save`, no build-setting changes.

## When to use

The user asks what a peripheral runs at (PWM frequency, ADC sample time, baud rate, timer
period), wants to check timing after a clock change, or wants a timing table before a device
migration. It covers EPWM, ADC, SCI, LIN, SPI, I2C, CAN (DCAN) and CPU timers on CPU1 projects.

## Required inputs

1. **Project** — the CCS project to analyze.

The device family is derived in Phase 1. Clocks are read in Phase 2; they are never taken from
the user.

## Dependencies

**idea-mcp** (required):
- `get_projects(rescan: true)` — the project's `currentDevice` family.

**ccs-project MCP** (required):
- `getProducts` — Phase 0 availability probe
- `getProjectDescriptors` — `location`, `systemConfigurationFiles`, `device`, `activeBuildConfiguration`,
  `buildDirectoryLocation`, `sysConfigOutputLocation`, `excludedFromBuild`
- `getProjectProductReferences` — C2000Ware location
- `getToolFlags` — compiler predefined symbols

**ccs-sysconfig MCP** (required when the project has a `.syscfg`):
- `listFiles` — Phase 0 availability probe
- `openFile` / `closeFile` — open and close the project's `.syscfg`
- `getClockTreeInstances` / `traceClockSignal` — clock frequencies
- `getModuleInstances` / `getInstanceConfiguration` — instances and SysConfig's computed timing
  fields
- `getErrorsAndWarnings` — any error blocks the generated files
- `listGeneratedArtifacts` / `readGeneratedArtifact` — the generated `board.c`, `board.h`,
  `device.h` and `clocktree.h`

Never call `save`, `changeConfiguration`, `addModuleInstances` or `removeModuleInstances`.

## Data file

`timing-analyzer/timing-calls.md` lists the driverlib calls Phases 3 and 4 record and how to
resolve their arguments. Those phases tell you when to read it.

## Timing report file

The report lives in **the project directory**: `c2000-timing.md`. Phase 1 creates it; each
phase appends its section; Phase 5 adds the final tables. Never overwrite an earlier phase's
section. In every table, leave a cell empty when nothing set it, and write `|` inside a cell as
`\|`.

**If your context is getting long or you feel disoriented, re-read `c2000-timing.md` to recover
your position.**

## Resuming

> STOP: **If `c2000-timing.md` already exists in the project directory:** read it first.
> Continue from the first phase not recorded as COMPLETE. Do not repeat completed phases.
> If every phase is COMPLETE, start over: Phase 1.7 replaces the file. Phase 0 always runs.

## How to run this workflow

> STOP: **Do not read ahead.** Read one phase file at a time. Complete every step in it.
> Return here. Only then read the next phase file.

**If any MCP tool call fails, returns an unexpected error, or produces a result you cannot
interpret — stop and ask the user.** Do not guess, retry blindly, or skip the step.

### Running as a sub-agent

The device-migration workflow runs this workflow as a sub-agent in Phase 4F. Its briefing gives
the project name, directory and device family. There is no user to talk to; the only output is
the result block below.

- Phase 0: check all three MCP servers (IDEA, CCS Project, SysConfig) before stopping, so the
  result names every server that is down.
- Skip 5.4 (showing the tables to the user).
- Never stop to ask. Where a step says to ask or tell the user, decide as below, record
  `DECISION: <step> <what was chosen> — <why>` in the report, and continue:

| Step | Decision |
|---|---|
| Any MCP call fails | Retry once. If it fails again, record `UNRESOLVED: <tool> failed at <step>`, skip the values that depend on it, and continue |
| 0.3 SysConfig MCP not available | Use the last-build files, as 0.3 says |
| 1.1 Project name | Take it from the briefing |
| 1.2 Briefing family differs from `get_projects()` | Use the `get_projects()` family; name both in the DECISION |
| 1.4 Several `.syscfg` files | Use the one the active build configuration does not exclude; if several remain, the first |
| 3.1 SysConfig errors or blocked artifacts | Use `board.c` and `board.h` in `sysConfigOutputLocation` if they are newer than the `.syscfg`. Otherwise record `UNRESOLVED: SysConfig errors — <errors>`, skip to 3.4, and continue with Phase 4 |

Stop only when there is nothing to analyse: IDEA or CCS Project MCP not available, a project
1.2 rejects, or a 1.4 core other than CPU1. Return `STATUS: STOPPED AT <phase.step> — <reason>`.

Finish with this result:

```
STATUS: COMPLETE | STOPPED AT <phase.step> — <reason>
Report file: <path | none>
Pre-flight: <each MCP: live | not available>
Device family / device / build configuration: <…>
Clocks: <each clock: frequency (source)>
Summary: <the Phase 5 summary table values>
Findings: <every UNRESOLVED and NOTE line, verbatim>
Decisions: <every DECISION line, verbatim, or none>
```

### Phase sequence

0. **Read `timing-analyzer/phase-0-preflight.md`** — probe the MCP servers.
   → When complete, return here.

1. **Read `timing-analyzer/phase-1-project.md`** — identify the project, device, core, build
   configuration and application files; create `c2000-timing.md`.
   → When complete, return here.

2. **Read `timing-analyzer/phase-2-clocks.md`** — the clock each peripheral runs from.
   → When complete, return here.

3. **Read `timing-analyzer/phase-3-sysconfig-timing.md`** — timing set by SysConfig. Skip when
   the project has no `.syscfg`.
   → When complete, return here.

4. **Read `timing-analyzer/phase-4-code-timing.md`** — timing set in the application code.
   → When complete, return here.

5. **Read `timing-analyzer/phase-5-report.md`** — compute, merge and present the timing report.
   → Analysis complete.

## Do / Don't

- Do read every clock frequency from the project (clock tree, `clocktree.h` or `device.h`).
  Never use a value from memory.
- Do take every timing setting (period, divider, prescaler, sample window, bit timing) from a
  driverlib call in `board.c` or the application code, and put that call's location in the
  *Set by* column.
- Do follow each macro argument to its number (`mySCI0_BAUDRATE` → 115200 in `board.h`). If an
  argument is a variable or a function result, record `UNRESOLVED` with its `file:line`; never
  guess.
- Don't change any project file, build setting or SysConfig setting. The only file written is
  `c2000-timing.md`.
