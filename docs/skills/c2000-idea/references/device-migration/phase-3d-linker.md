# Phase 3D — Linker Command File

> You are executing **Phase 3D** of the SysConfig migration.
> Phase 3C is complete: the target `.syscfg` is open.
> Your scope: make the target `.syscfg` match the source linker style recorded in Phase 2
> (step 2.5), and place every CMD module section on the target.
> **Do not read phase-3e or any other phase file yet.**

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess, retry blindly, or skip the step.

---

## Rules for Phase 3D

- Do keep the source project unchanged — it is the golden reference.
- Do mirror the source's linker style: a CMD module in the target syscfg if the source
  used one, a plain `.cmd` (CMD module removed) if the source used a plain file.
- Change CMD module settings only with `changeConfiguration`. Take each value from that
  configurable's `choices`, excluding every region an error names — `choices` keeps stale names.
- One `changeConfiguration` call is atomic: one invalid value reverts every change in it.
- Do not call `save` or `closeFile`.

---

## 3D.1 Read the source record

Read `Source linker style` and `## Source linker sections` from `c2000-migration.md`
(Phase 2, step 2.5). Read `linker-placement.md`.

## 3D.2 Plain `.cmd` style

Call `getModuleInstances`. If a `/utilities/cmd_tool/cmd_syscfg/source/CMD` instance is
present, call `removeModuleInstances` on it. Go to 3D.4.

## 3D.3 CMD module style

1. Call `getModuleInstances`. If no `/utilities/cmd_tool/cmd_syscfg/source/CMD` instance
   exists, call `addModuleInstances` with that module ID.
2. For each CMD instance, read its configuration (`getInstanceConfiguration`,
   `changesOnly: true`): `sectionMemory_*`, `sectionRun_*`, `userSection[n].*`,
   `<group>memoryCombination`.
3. Memory combinations: every region in `combination` must be in the target `memoryRanges`.
   `migrate` keeps missing regions without an error: the combined region shrinks, or is
   generated empty (`origin = 0xFFFFFFFF, length = 0x000000`) when none remain. Set
   `combination` to contiguous target regions of that group whose total length is ≥ the
   source combination's.
4. Fix every error whose `moduleId` starts with `/utilities/cmd_tool/` at the `moduleId`,
   `moduleInstanceId` and `configurableId` it names, applying the placement rules.
5. Apply the placement rules to sections without an error as well.
6. A region inside a combination is not a choice for that instance; use the combination's name.
7. The active build configuration (Phase 2, step 2.0) must select one CMD instance: its linker
   flags (`getToolFlags`) contain `--define=<instance name>`, or the CMD `$static` instance has
   `activateCMD` true. If neither, add `--define=<instance name>` to the linker flags with
   `setToolFlags`.
8. When `getErrorsAndWarnings` returns no errors, read `device_cmd.cmd` with
   `readGeneratedArtifact` (path from `listGeneratedArtifacts`). In the
   `#ifdef <active instance>` block, confirm each section has the planned regions.

## 3D.4 Error gate

Call `getErrorsAndWarnings`. No error may have a `moduleId` starting with `/utilities/cmd_tool/`.

## Phase 3D complete — hand off

Append to `c2000-migration.md`:
```
## Phase 3D — Linker placement
Style: CMD module (instance <name>) / plain .cmd (CMD module removed)
| Section | Source region (len) | Target region (len) | Status |
|---|---|---|---|
| <section> | <region> (<len>) | <region> (<len>) | MATCHED / REVIEW-REQUIRED / FEATURE-ABSENT |
```
followed by the `REVIEW-REQUIRED` and `FEATURE-ABSENT` lines. For plain `.cmd` style, record
only the style line.

Read `phase-3e-sysconfig-save.md` and proceed.
