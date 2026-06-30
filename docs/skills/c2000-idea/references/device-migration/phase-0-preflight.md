# Phase 0 — Pre-flight Check

> **Run Phase 0 once before starting Phase 1.** This phase verifies that all required
> MCP servers are live. If any check fails, stop and resolve it before proceeding.
> Do not skip this phase — a silent MCP failure mid-migration is far harder to diagnose
> than a failure caught here.

---

## Step 0.1 — Probe IDEA MCP

Call `get_projects()` with no arguments.

- **Success** → IDEA MCP is live. Note the list of C2000 projects returned.
- **Failure / unreachable** → IDEA MCP is not running. **Stop.**
  Tell the user:
  > *"The IDEA MCP server is not running. Please enable it:"*
  > - Command Palette → `C2000-IDEA: Enable IDEA MCP`  (or click **MCP Servers** in the VS Code status bar)
  > - After enabling, re-register the MCP with your agent tool, then tell me to retry.

Do not proceed past Step 0.1 until `get_projects()` succeeds.

---

## Step 0.2 — Probe CCS Project MCP

Call `getProducts` (ccs-project MCP). This is a simple read-only call that takes no
arguments — it returns the list of installed TI software products without modifying anything.

- **Success (any response)** → CCS Project MCP is live.
- **Tool not found / unreachable** → CCS Project MCP is not registered or not running.
  Tell the user:
  > *"The CCS Project MCP is not available. This is required for project import, build,
  > and settings management during migration. Please register it with your agent tool."*
  > **Stop** — do not proceed to Phase 1 without CCS Project MCP.

---

## Step 0.3 — Probe TI ASM MCP

Call `list_devices` (TI ASM MCP) to list the devices the TI ASM MCP supports. It takes no
arguments and is a lightweight read-only call — the result does not matter, this only
confirms the MCP is available and responding. The default port is `55000`.

- **Success (any response)** → TI ASM MCP is live.
- **Tool not found / unreachable** → TI ASM MCP is not available. This is a **soft warning**
  (not a hard stop), because TI ASM MCP is only required when a migration report issue
  has no `Suggested fix` and you need to look up the register in the TRM. Tell the user:
  > *"TI ASM MCP is not available (port 55000). Migration can proceed, but if any Phase 4
  > issue requires TRM register lookup, you will need to enable it:*
  > *Command Palette → `C2000-IDEA: Enable TI ASM MCP`*"

  **Note this warning in your session context** — do NOT write to `c2000-migration.md` here.
  The log does not exist yet. Phase 1 step 1.9 will embed it when the log is created.
  Continue to Step 0.4.

---

## Step 0.4 — Probe CCS SysConfig MCP

Call `listFiles` (ccs-sysconfig MCP) to list the `.syscfg` files in the workspace. The
result itself does not matter — this only confirms the MCP is available and responding.

- **Success (any response)** → CCS SysConfig MCP is live.
- **Tool not found / error** → CCS SysConfig MCP is not available. This is a **soft warning**
  (not a hard stop): Phase 3 can still run, but the `.syscfg` migration will have to be done
  manually in CCS. Tell the user:
  > *"The CCS SysConfig MCP is not available. Migration can proceed, but Phase 3 (SysConfig
  > migration) will require manual SysConfig work. To enable it, register the CCS SysConfig
  > MCP with your agent tool."*

  **Note this warning in your session context** — do NOT write to `c2000-migration.md` here
  (the log does not exist yet; Phase 1 step 1.9 will embed it). Continue to Step 0.5.

---

## Step 0.5 — Record pre-flight results for Phase 1

> **Do NOT create `c2000-migration.md` in Phase 0.** The migration log lives inside
> each target project's directory, which does not exist until Phase 1 imports and
> renames the target project (step 1.9). Creating the log here would put it in the
> wrong location (workspace root instead of the target project directory), and Phase 1
> would then create a second log — violating the append-only rule.
>
> Phase 0's results are recorded as **session context** that Phase 1 embeds into the
> log when it creates it in step 1.9.

Keep the following pre-flight results in your **session context** (conversation memory)
so Phase 1 can reference them when creating `c2000-migration.md`:

```
Pre-flight results (to embed in c2000-migration.md at Phase 1 step 1.9):
  IDEA MCP:           live
  CCS Project MCP:    live
  CCS SysConfig MCP:  <live | not available (warned)>
  TI ASM MCP:         <live | not available (warned)>
```

Phase 1 step 1.9 will seed `c2000-migration.md` with these values under the session
header. The Phase status table (Phase 0 through Phase 5) is created by Phase 1, not here.

---

## Step 0.6 — Phase 0 complete

Confirm to the user:

```
Pre-flight check complete.
IDEA MCP: live
CCS Project MCP: live
<DONE or WARNING> CCS SysConfig MCP: <live | not available>
<DONE or WARNING> TI ASM MCP: <live | not available>
Migration log: will be created in Phase 1 step 1.9 (once target project is imported)

Ready to start Phase 1 (project import).
```

Then **return to `device-migration.md`** (the workflow orchestrator that sent you here)
and proceed to Phase 1.

---

## Failure reference

| Failure | Action |
|---------|--------|
| `get_projects()` fails | Hard stop — IDEA MCP required |
| CCS Project MCP not found | Hard stop — required for all build operations |
| CCS SysConfig MCP not found | Soft warning — Phase 3 needs manual SysConfig; note and continue |
| TI ASM MCP not found | Soft warning — note in session context and continue |
