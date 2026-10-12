# Phase 5 — Report Back

> You are in **Phase 5** of the device-migration workflow.
> This is the final phase. When complete, the migration is done.

**Before starting:** State which phases are complete and which phase you are about to
start. If disoriented, re-read `c2000-migration.md` in the target project to recover
your position.

**If any MCP tool call fails, returns an unexpected error, or produces a result you
cannot interpret — stop and ask the user for help.** Do not guess, retry blindly, or
skip the step. Describe what you tried, what the tool returned, and ask the user how
to proceed.


---

Re-read `c2000-migration.md` to gather the full migration history, then provide a
structured migration summary to the user:

## 5.1 Fresh build (always required)

Phase 5 always runs its own validation build. AI agents do not have a reliable concept
of "same session", so skipping based on session continuity is not safe — a file may have
been modified between Phase 4C and Phase 5 without the agent being aware.

Run `buildProject` on the **target** project (not the source). If `c2000-migration.md`
already records `Final clean build: PASS` for Phase 4C and no files have been modified
since (verified by checking file timestamps or asking the user), you may confirm with the
user whether to skip — but do **not** skip unilaterally.

## 5.2 Structured summary (present to user)

1. **Per-file table** — one row per file: issues found, issues fixed, issues needing human review.
2. **Unresolved symbols** — list any symbols where a confident replacement could not be
   found. Include file path, line number, and reason. Mark them "needs human review".
3. **Modified files** — list all files changed so the user can review diffs.
4. **Final build status** — pass or fail (from the fresh build in 5.1); list any remaining
   non-migration errors.
5. **SysConfig status** — confirm the target syscfg has the device-support module and state
   the linker style applied (CMD module vs plain `.cmd`). If SysConfig was not migrated (MCP
   unavailable), state the remaining manual steps: ensure the device-support module is
   present, reconfigure peripherals for the target device to match the source, and normalize
   the CMD module to the source linker style.

   > **Verify SysConfig-generated outputs are part of the build (required):**
   > After confirming the device-support module is present, verify that the files it
   > generates are actually compiled and linked by the target CCS project:
   > Check the output of the 5.1 build (`output`, or the file at `outputFilePath`). These
   > files are added by CCS at build time and do not appear in `getToolFlags`.
   > 1. `device.c` is compiled: the output contains `building file: "syscfg/device.c"`.
   > 2. The generated `.opt` files are passed to the compiler: the compile lines contain
   >    `--cmd_file="syscfg/board.opt"` and `--cmd_file="syscfg/c2000ware_libraries.opt"`.
   >    `board.opt` carries the device define (e.g. `--define=F28P55x=1`) and the target
   >    driverlib include paths.
   > 3. If either is missing, flag it to the user: *"The SysConfig device-support module
   >    generated `device.c` and `.opt` files, but they are not in the CCS build. Verify the
   >    project's SysConfig output path in CCS."*

6. **SDK version change** — source C2000Ware SDK version → target C2000Ware SDK version.
   Obtain these from the source and target projects' SDK paths or from the Phase 1 import
   logs in `c2000-migration.md`. Format: `C2000Ware_<version>` (e.g., `C2000Ware_5.03.00.00
   → C2000Ware_5.04.00.00`). If versions are unknown, state "SDK version information not
   recorded — verify manually from project SDK paths."
7. **Deferred / manual actions** — anything the user must do before the project is
   production-ready (SysConfig, hardware testing).

   > **Required: enumerate all `REVIEW-REQUIRED` and `FEATURE-ABSENT` items from the log:**
   > Scan `c2000-migration.md` for every line tagged with `REVIEW-REQUIRED:` or
   > `FEATURE-ABSENT:` and include them verbatim in this section. These include:
   > - `REVIEW-REQUIRED: clock …` (Phase 3C)
   > - `REVIEW-REQUIRED: linker section …` (Phase 2, Phase 3D, Phase 4C)
   > - `REVIEW-REQUIRED: hardcoded GPIO pin <N> — verify target device pinmux` (Phase 4)
   > - `FEATURE-ABSENT: <module> — peripheral not available on <target>` (Phase 3)
   > - Any `DEFERRED-MANUAL:` items from SysConfig version incompatibility
   >
   > Do not omit these — they represent risks of silent runtime failure that the user
   > must personally verify before deploying the migrated firmware to hardware.

8. **Hardware verification checklist** — minimum checks the user must perform on
   physical hardware before declaring the migrated firmware production-ready.

   Present this checklist to the user verbatim. The user must tick each item; do not
   mark the migration fully production-ready until the user confirms they have reviewed
   these steps (or explicitly accepts the risk of skipping them).

   > **WARNING: Hardware verification — required before production deployment:**
   >
   > The following checks cannot be performed by a software tool. They require connecting
   > to the target board and observing live hardware behaviour:
   >
   > | # | Check | How to verify |
   > |---|-------|---------------|
   > | H1 | **System clock correct** | Halt in CCS debugger immediately after `Device_init()` / `SysCtl_setClock()`. Inspect `PLLSYSCLK` via the `SysCtl` register view or an oscilloscope on a clocked output pin. Compare against `## Phase 3C — Target clock configuration` in `c2000-migration.md`. The target SYSCLK is the target maximum, not the source value. |
   > | H2 | **Peripheral clocks enabled** | Verify `SysCtl_enablePeripheral()` calls in `device.c` / `main.c` for each peripheral used. Confirm peripherals are accessible (no `NMIWDFLG` or bus fault on first register access). |
   > | H3 | **GPIO pinmux valid for target device** | Review all `REVIEW-REQUIRED: hardcoded GPIO pin` items from item 7. Check the target device's GPIO mux table (TRM) to confirm the pin assignments are available. A pin that existed on the source device may map to a different function or not exist on the target. |
   > | H4 | **ADC / comparator reference voltage** | If ADC or CMPSS modules are used, verify the reference voltage configuration matches the target board's hardware design. ADC `VREFHI`/`VREFLO` pinout and reference options differ between device families. |
   > | H5 | **PWM output timing** | For EPWM/HRPWM: verify switching frequency, dead-band, and trip-zone assignments produce the expected waveforms on the target board. EPWM base addresses and clock dividers may differ. |
   > | H6 | **Communication bus loopback / protocol test** | For SPI, I2C, CAN/DCAN, MCAN, or UART (SCI): run a loopback or communicate with a known-good peripheral node to confirm the baud rate and bit-format are correct on the target device. |
   > | H7 | **Interrupt service confirmed** | Trigger at least one interrupt per ISR migrated (ADC EOC, EPWM period, GPIO, etc.) and confirm the CPU enters the ISR. Interrupt vector table offsets and PIE group assignments may have changed between devices. |
   > | H8 | **Memory map / stack overflow** | Run the application through its full operating loop. Check the stack high-water mark in CCS (Expressions view → `__stack` symbol) to confirm no stack overflow occurred after linker section remapping. |
   >
   > **If any check fails:** record the failure in `c2000-migration.md` under
   > `## Phase 5 — Hardware verification` and open a targeted debug session.
   > Do not ship firmware that has not been tested on target hardware.

**If the IDEA MCP is unreachable at this point**, construct the summary from
`c2000-migration.md` alone and note that the live migration report could not be
regenerated.

**If build errors remain after Phase 4**, call them out explicitly in the summary and
mark the migration status as "complete with outstanding build issues" — not fully done.

---

**Update `c2000-migration.md`:** Record Phase 5 as COMPLETE. Add the final build status
and any remaining action items.

**Before declaring the migration finished:**
- Scan `c2000-migration.md` for any phase logged as SKIPPED — if a phase was skipped,
  confirm with the user that the skip was intentional and include it in the report.
- Verify that all deferred/manual items from phases 1–4 are explicitly listed in the
  report (item 7 above). Do not mark the migration as complete if any of these are
  unresolved without the user's awareness: SysConfig manual reconfiguration, custom
  `.lib` recompilation, unmappable linker sections, unresolved migration symbols,
  `REVIEW-REQUIRED` items (GPIO/pinmux, clock settings, linker section remapping), and
  `FEATURE-ABSENT` peripherals.

**Phase 5 complete.** The device-to-device migration workflow is finished. Ask the user
if they have any questions about the migration results or if any items need further
investigation.
