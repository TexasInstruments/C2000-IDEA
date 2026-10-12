# Linker Placement Rules

Read by Phase 2 (step 2.5) and Phase 3D.

## Target regions

`memoryRanges` (`name`, `origin`, `length`, `group`) in
`<c2000ware_path>/utilities/cmd_tool/cmd_syscfg/source/.meta/<target-device>_memoryInfo.js`.

Access by group: `RAMM`, `RAMD` — C28x only; `RAMLS` — C28x and CLA; `RAMGS` — C28x and DMA.

## Placement rules

For each section in `## Source linker sections` of `c2000-migration.md`:

1. Same group as the source. If the target has no region in that group, use a group with the
   access the section needs and record
   `REVIEW-REQUIRED: linker section <section> — <group> not on <target>, placed in <region>`.
2. Total length of the assigned target regions ≥ the source length.
3. A section with a run address keeps its load address in `FLASH` and its run address in RAM.
4. `.stack` goes in a region whose origin is below `0x10000`.
5. A section for a feature the target lacks (other-core message RAM, CLA, …): drop it and
   record `FEATURE-ABSENT: linker section <section> — <feature> not on <target>`.
6. No region satisfies 1–4: record `REVIEW-REQUIRED: linker section <section> — region mapping needed`.
