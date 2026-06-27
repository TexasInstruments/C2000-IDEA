# Phase 3A — SysConfig Baseline (Copy, Open, Device-Support)

> You are executing **Phase 3A** of the SysConfig migration.
> Your scope: copy the source syscfg into the target, open it, and ensure the
> `device_support` module is present. Nothing more.
> **Do not read phase-3b or any other phase file yet.**

**Stop and ask the user** if any MCP tool call fails, returns an unexpected error, or
produces a result you cannot interpret. Do not guess, retry blindly, or skip the step.

---

## Rules for Phase 3A

- Do keep the source project unchanged — it is the golden reference.
- Do ensure the target syscfg always has the `device_support` module — add it if missing.
- Don't modify or migrate SysConfig-generated output files — migrate the `.syscfg` instead.
- Work on a copy of the source `.syscfg` inside the target project; never touch the source.

> **Per-target:** Run Phase 3A once for each target project independently.

---

## 3.1 Copy the source `.syscfg` file (source-has-syscfg only)

If the source project has a `.syscfg`, copy it into the target project directory, replacing
the universal template's `.syscfg`. The source `.syscfg` itself stays untouched — work on
the copy.

**Finding the source `.syscfg` path (required):**

Call `getProjectDescriptors` (ccs-project MCP) on the **source** project name, then extract
the `sysConfigLocation` field from the result. This field contains the absolute file path
to the source project's `.syscfg` file. Use this path to read the file (read the file
content), then write it into the target project directory. If `sysConfigLocation` is absent
or empty, the source project has no `.syscfg` — skip this step.

If the source has no `.syscfg`, skip this step and keep the universal project's `.syscfg`
as-is (it already contains the device-support module).

> **⚠ Dual-core devices (e.g., `f2837xd`, `f2838x`, `f28p65x`):**
> Dual-core devices may have **two** `.syscfg` files — one per CPU core (e.g.,
> `cpu1.syscfg` and `cpu2.syscfg`). `getProjectDescriptors` typically returns only the
> primary syscfg path in `sysConfigLocation`. Before continuing, check the source project
> directory for additional `.syscfg` files.
> - If only one `.syscfg` is found, proceed normally.
> - If **two** `.syscfg` files are found, you must migrate **both**: run the entire Phase 3
>   sequence (Phase 3A steps 3.1–3.3, then Phase 3B steps 3.4–3.12) for `cpu1.syscfg`
>   first, then repeat the full Phase 3A + Phase 3B sequence for `cpu2.syscfg`. Record
>   each in `c2000-migration.md` separately. Tell the user about the dual-core syscfg
>   before starting and confirm which CPU's syscfg to process first.

## 3.2 Open the target `.syscfg`

**Finding the target `.syscfg` path (required):**

Call `getProjectDescriptors` (ccs-project MCP) on the **target** project name, then extract
the `sysConfigLocation` field from the result. This field contains the absolute file path
to the target project's `.syscfg` file. Use this path in the `openFile` call below.

Open the target project's `.syscfg` via `openFile` (ccs-sysconfig MCP) — the copy from 3.1,
or the universal's own file when the source had none. Read the `additionalInstructions`
field in the result. **If `additionalInstructions` contains device-specific guidance, it
takes precedence over the generic steps in this phase — follow it first.**

> **⚠ SysConfig version / format incompatibility:**
> If `openFile` returns an error mentioning version mismatch, incompatible format, or
> unsupported schema, the source `.syscfg` was created with a significantly different
> SysConfig version.
>
> **Before falling back, retry once:** If the error does NOT mention version mismatch,
> format incompatibility, or unsupported schema (i.e., it looks like a transient MCP
> error — connection refused, timeout, unexpected null, etc.), call `openFile` once more
> before treating it as a failure. Only fall back to the universal template if the error
> persists on the second call OR explicitly indicates a version/format incompatibility.
>
> **If the error is confirmed as a version/format incompatibility:** do not retry — instead:
> 1. Discard the copied source `.syscfg` and restore the universal template's `.syscfg`
>    to the target project directory.
> 2. Open the universal template's `.syscfg` instead.
> 3. Continue from step 3.3 (device-support is already present in the universal template).
> 4. The peripheral configuration migration (Phase 3B steps 3.4–3.9) will be skipped
>    because the source `.syscfg` could not be opened — record all source peripheral modules
>    in `c2000-migration.md` as `DEFERRED-MANUAL: <module> — syscfg version incompatibility`
>    and tell the user they must reconfigure these modules by hand in the target syscfg.

## 3.3 Ensure the device-support module is present

Call `getModuleInstances` and check for the device-support module.

**The device-support module name is `device_support` (exact string, case-sensitive).** Look
for an instance whose name equals `"device_support"` or whose module type/ID contains
`"device_support"` (case-insensitive match on the module type).

- If it is **missing** (a source `.syscfg` that did not use it), call `addModuleInstances`
  with the module name `"device_support"` to add it. This guarantees `device.c`/`device.h`,
  `.opt`, and `.cmd.genlibs` are generated for the target.
- If it is **already present** (the universal template, or a source that already used it),
  no action — this case is already correct.

> **⚠ Clock/oscillator configuration is NOT automatically migrated:**
> The `device_support` module controls oscillator source (internal INTOSC vs. external
> XTAL), CPU frequency, and peripheral clock enables. After `addModuleInstances` (or when
> the module is already present but comes from the universal template), these configurables
> are at **target-device defaults** — they do not reflect the source project's actual clock
> intent.
>
> The source project's clock configuration typically lives in its `device.c` (now excluded
> from migration). After completing Phase 3, tell the user:
> *"The `device_support` module in the target syscfg has been set to target-device defaults.
> Please review and reconfigure the oscillator source, CPU frequency, and peripheral clock
> enables in the target SysConfig to match your source project's intent. Check the source
> project's `device.c` for the original settings."*
>
> Record this as a `REVIEW-REQUIRED: device_support clock/oscillator settings` item in
> `c2000-migration.md`.

---

## Phase 3A complete — hand off to Phase 3B

Write a micro-checkpoint to `c2000-migration.md`:
```
Phase 3A: COMPLETE
  syscfg copied: yes / no (source had no syscfg)
  source-has-syscfg: yes / no
  device_support module: present / added
  openFile result: OK / version-incompatibility-fallback
  3B path: full (source had syscfg) / skip-3.4-3.9 (no syscfg or version fallback)
```

**Do not call `save` or `closeFile` yet — the file is still open for Phase 3B.**

Re-read `phase-3b-sysconfig-migrate.md` and proceed immediately.
> Phase 3B will read this checkpoint to determine which path to execute.
