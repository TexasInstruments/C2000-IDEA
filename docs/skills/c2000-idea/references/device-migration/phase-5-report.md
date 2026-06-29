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

> **Per-target:** When migrating to multiple target devices, run Phase 5 once for each
> target project independently — produce a separate report per target.

---

Re-read `c2000-migration.md` to gather the full migration history, then provide a
structured migration summary to the user:

## 5.1 Fresh build (skip if Phase 4C clean build was just completed)

Phase 4C already performs a mandatory two-pass clean rebuild before declaring Phase 4
complete. If `c2000-migration.md` records `Final clean build: PASS` for Phase 4C and
you are in the **same session** (Phase 5 follows immediately after Phase 4 with no
interruption), **skip this step** — the Phase 4C clean build is the authoritative final
build status and repeating it here adds no value.

Run `buildProject` here **only if** one of these conditions is true:
- Phase 4C was completed in a **previous session** (you are resuming in a new session).
- The user or environment has modified files since Phase 4C completed.
- `c2000-migration.md` does not record a `Final clean build: PASS` for Phase 4C.

If a build is required, call `buildProject` on the **target** project (not the source).

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
   > 1. Call `getProjectDescriptors` and check `sysConfigOutputLocation`.
   > 2. Confirm `device.c` exists in that folder and is listed as a source file in the
   >    target project (call `getToolFlags` or check the project file list — CCS must
   >    compile `device.c`, not just have it on disk).
   > 3. Confirm the generated `.opt` file is passed to the compiler (it typically appears
   >    as `--cmd_file=<path>/device.opt` or `@<path>/device.opt` in the compiler flags —
   >    check via `getToolFlags` on the compiler tool). If missing, the compiler options
   >    set by the device-support module (e.g., `--define=_LAUNCHXL_F28P55X`) will not
   >    apply and the build may succeed but produce incorrect device-configuration code.
   > 4. If either `device.c` is not compiled or `.opt` is not referenced, flag it to
   >    the user: *"The SysConfig device-support module generated `device.c` and `.opt`
   >    but they do not appear to be included in the CCS build. Please add them manually
   >    or verify the project's SysConfig output path is set correctly in CCS."*

6. **SDK version change** — source C2000Ware SDK version → target C2000Ware SDK version.
   Obtain these from the source and target projects' SDK paths or from the Phase 1 import
   logs in `c2000-migration.md`. Format: `C2000Ware_<version>` (e.g., `C2000Ware_5.03.00.00
   → C2000Ware_5.04.00.00`). If versions are unknown, state "SDK version information not
   recorded — verify manually from project SDK paths."
7. **Deferred / manual actions** — anything the user must do before the project is
   production-ready (SysConfig, hardware testing, bitfield migration if not done).

   > **Required: enumerate all `REVIEW-REQUIRED` and `FEATURE-ABSENT` items from the log:**
   > Scan `c2000-migration.md` for every line tagged with `REVIEW-REQUIRED:` or
   > `FEATURE-ABSENT:` and include them verbatim in this section. These include:
   > - `REVIEW-REQUIRED: device_support clock/oscillator settings` (Phase 3)
   > - `REVIEW-REQUIRED: linker section <section> — region mapping needed` (Phase 3)
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
   > | H1 | **System clock correct** | Halt in CCS debugger immediately after `Device_init()` / `SysCtl_setClock()`. Inspect `PLLSYSCLK` via the `SysCtl` register view or an oscilloscope on a clocked output pin. Compare against the Phase 3 reference value captured in `c2000-migration.md` (`## Phase 3 — Source clock configuration`). |
   > | H2 | **Peripheral clocks enabled** | Verify `SysCtl_enablePeripheral()` calls in `device.c` / `main.c` for each peripheral used. Confirm peripherals are accessible (no `NMIWDFLG` or bus fault on first register access). |
   > | H3 | **GPIO pinmux valid for target device** | Review all `REVIEW-REQUIRED: hardcoded GPIO pin` items from item 7. Check the target device's GPIO mux table (TRM) to confirm the pin assignments are available. A pin that existed on the source device may map to a different function or not exist on the target. |
   > | H4 | **ADC / comparator reference voltage** | If ADC or CMPSS modules are used, verify the reference voltage configuration matches the target board's hardware design. ADC `VREFHI`/`VREFLO` pinout and reference options differ between device families. |
   > | H5 | **PWM output timing** | For EPWM/HRPWM: verify switching frequency, dead-band, and trip-zone assignments produce the expected waveforms on the target board. EPWM base addresses and clock dividers may differ. |
   > | H6 | **Communication bus loopback / protocol test** | For SPI, I2C, CAN/DCAN, MCAN, or UART (SCI): run a loopback or communicate with a known-good peripheral node to confirm the baud rate and bit-format are correct on the target device. |
   > | H7 | **Interrupt service confirmed** | Trigger at least one interrupt per ISR migrated (ADC EOC, EPWM period, GPIO, etc.) and confirm the CPU enters the ISR. Interrupt vector table offsets and PIE group assignments may have changed between devices. |
   > | H8 | **Memory map / stack overflow** | Run the application through its full operating loop. Check the stack high-water mark in CCS (Expressions view → `_stack` symbol) to confirm no stack overflow occurred after linker section remapping. |
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

## 5.3 Bitfield register access scan (required before declaring migration finished)

Before declaring the migration complete, scan all migrated `.c` and `.h` files for
**bitfield-style register access patterns** that were not converted during migration.
The device-migration workflow migrates driverlib API symbols — it does not automatically
convert bitfield register access patterns.

**Patterns to search for** (scan every migrated file):

| Pattern | Example |
|---------|---------|
| `->bit.<FIELDNAME>` | `AdcaRegs->bit.ADCCTL1` |
| `<Module>Regs.<REGISTER>` | `AdcaRegs.ADCCTL1.bit.ADCBSYCHN` |
| `<Module>Regs.<REGISTER>.all` | `EpwmRegsArray[0]->TBCTL.all` |
| Struct pointer with `.bit.` dereference | `pADC->ADCCTL1.bit.INTPULSEPOS` |

**How to search:** Scan file text for the strings `->bit.`, `.bit.`, `Regs.`, and any
pattern matching `[A-Za-z]+Regs[._]` (case-sensitive).

> **Skip comment lines and string literals:** When scanning, skip any line that is:
> - A single-line comment (line starts with `//` after optional whitespace).
> - Inside a block comment (`/* ... */` span). If a `/*` is open and `*/` has not yet
>   appeared, all intervening lines are comments — skip them.
> - Inside a string literal (the pattern appears between `"..."` quotes) — this is
>   documentation or a debug print, not a register access.
> Only count occurrences in actual executable code lines.

**If no bitfield patterns are found:**
- Record in `c2000-migration.md`: `Bitfield scan: CLEAN — no bitfield patterns detected.`
- Proceed to complete Phase 5 normally.

**If bitfield patterns are found:**
- Count the number of occurrences and list the files affected.
- Record in `c2000-migration.md`:
  ```
  Bitfield scan: PATTERNS FOUND
  Files: <list>
  Occurrences: <N>
  ```
- Add the following to the **Deferred / manual actions** section of the structured summary
  (item 7 above):

  > **WARNING: Bitfield register access patterns detected in migrated source files.**
  > These patterns (`->bit.`, `<Module>Regs.`) use the C2000 bitfield register layer
  > which is device-specific and was **not** converted by the device-migration workflow.
  > Leaving them in place may compile but will access wrong registers on the target device
  > if the register layout or address has changed.
  >
  > **Required next step:** Run the **bitfield-to-driverlib migration skill** to convert
  > these patterns to the portable driverlib API layer for the target device.
  > In your AI agent environment, invoke the bitfield-to-driverlib skill from SKILL.md.
  > Files affected: `<list of files with hits>`

- Do **not** block the Phase 5 report on this — record it as a required follow-up action
  and include it in the report. The device-migration itself is complete; the bitfield
  conversion is a separate, distinct step.

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
  `REVIEW-REQUIRED` items (GPIO/pinmux, clock settings, linker section remapping),
  `FEATURE-ABSENT` peripherals, and **bitfield patterns requiring conversion** (if found
  in step 5.3 above).

**Phase 5 complete.** The device-to-device migration workflow is finished. Ask the user
if they have any questions about the migration results or if any items need further
investigation.
