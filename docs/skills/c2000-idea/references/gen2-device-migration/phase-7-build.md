# Phase 7 — Build

Build the target project until it has no errors.

## 7.1 Clean build

Delete the active configuration's build output (`*.obj`, `*.d`, `*.out` in its build directory), then
`buildProject`. Read the `output` of `buildProject`; the build log file is not rewritten.

## 7.2 Fix the errors

For each error, fix the cause in the file it names, following `phase-6-port-rules.md` for any change to
hardware access. Typical causes:

- A source type, macro or header still in use.
- A driverlib function or enum name that does not exist on the target: find the right one in the target
  driverlib headers and check it with `get_driverlib_function`.
- A linker error: a section with no placement (add it as in Phase 5, step 5.4) or memory that is too
  small (tell the user which section and how much is missing; do not drop code to make it fit).

Rebuild after each round of fixes. If the same error survives two rounds, stop and ask the user.

## 7.3 Other configurations

Build every other build configuration of the target project the same way, and note any error that only
appears there.

Record the builds, the errors and their fixes in the log, set Phase 7 to COMPLETE and return to
`gen2-device-migration.md`.
