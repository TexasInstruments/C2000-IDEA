# Phase 8 — Verify

Check that the target does what the Phase 3 specification says, with the differences of the Phase 4 plan
and none other.

## 8.1 Target register settings

For every row of each file's Phase 6 report, work out what the target code writes: read the body of each
driverlib call with `get_driverlib_function`, follow it to the register and field writes, and look up
their meaning in the target TRM. For `HWREG` accesses, use the macros' values.

## 8.2 Compare with the source

Compare each row with its Phase 3 register meanings, and each row of the Phase 3 defaults table with
the target's value of that behavior, by function and not by register name: the source
and target registers can differ. Classify every difference:

| Class | Meaning |
|---|---|
| Rescaled | A clock-derived value changed as the Phase 4 rescaling table says. |
| Mapped | The function moved to the peripheral or pin the Phase 4 plan says. |
| Dropped | The Phase 4 drop list removes it. |
| Defect | Anything else. |

```
## Phase 8 — Comparison
| Row # | Function | Source setting | Target setting | Class |
|---|---|---|---|---|
```

Fix each Defect in the file following `phase-6-port-rules.md`, rebuild (Phase 7) and compare the row
again.

## 8.3 Timing

Run the timing analysis of this skill (`references/timing-analyzer.md`) on the target project. Compare
each result with the Phase 3 timing table: the difference must be the error the Phase 4 rescaling table
records. Anything else is a Defect.

## 8.4 Pins

Run the pinout analysis of this skill (`references/pinout-analyzer.md`) on the target project. Every pin
must match the Phase 4 pin plan.

## 8.5 Leftovers

Search the target project for:

- source register access: `Regs.`, `.bit.`, register-struct names, `PieVectTable`;
- source family headers, device support and driver function names, source type names;
- `<link>` entries to SDK files in `.project`.

Each hit is a Defect.

## 8.6 Review

Start a reviewer sub-agent with the source project directory, the target project directory and the log.
Ask it to compare each target function with the source function it came from, using both TRMs and the
driverlib bodies, including the reset values of fields neither side writes, and to report every
difference that the Phase 4 plan does not explain. Ask it to cite TRM content by title, never by
section number. Fix what it
finds as in 8.2.

## 8.7 Checkpoint

Show the user the comparison summary (count per class), the timing and pin results and the reviewer's
findings with their fixes. Record them in the log, set Phase 8 to COMPLETE and return to
`gen2-device-migration.md`.
