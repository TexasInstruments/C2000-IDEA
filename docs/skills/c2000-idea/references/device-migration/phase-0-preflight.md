# Phase 0 — Pre-flight Check

> **Run Phase 0 once before starting Phase 1.** This phase verifies that all required
> MCP servers are live and the workspace Git state is clean. If any check fails, stop
> and resolve it before proceeding. Do not skip this phase — a silent MCP failure mid-
> migration is far harder to diagnose than a failure caught here.

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

## Step 0.5 — Verify Git state

Git is **optional** — only run the Git checks if the project is actually under Git version
control. Use read-only checks; do not commit or stage anything here.

### 0.5a — Check whether Git applies

1. Check whether the `git` command is available (e.g., run `git --version`).
   - **Not available** → record `Git: not available` in your **session context**, skip the
     remaining Git checks (0.5b–0.5c), and continue to Step 0.6.
2. If `git` is available, check whether the project is inside a Git repository (e.g., run
   `git status`, or `git rev-parse --is-inside-work-tree`, from the source project directory).
   - **Not a repository** → record `Git: not a repository` in your **session context**, skip
     0.5b–0.5c, and continue to Step 0.6.
   - **Inside a repository** → proceed to 0.5b.

### 0.5b — Confirm clean working tree

Verify there are no uncommitted modifications to the **source project** directory.

- **Clean** → proceed.
- **Dirty (uncommitted changes)** → warn the user:
  > *"Your source project has uncommitted changes. It is strongly recommended to commit
  > or stash these before starting migration so the pre-migration state is recoverable."*
  
  Ask: *"Do you want to commit/stash first, or proceed anyway?"*
  - If the user says proceed → note `Git state: dirty (user acknowledged)` in your
    **session context** (do NOT write to `c2000-migration.md` here — the log does not
    exist yet; Phase 1 step 1.9 will embed it). Continue.
  - If the user wants to commit first → wait for them to do so, then re-check.

### 0.5c — Confirm migration branch exists or offer to create one

Check whether the current branch name suggests a migration branch (e.g., contains
`migration`, `migrate`, or `mig`).

- If on a dedicated migration branch → good, note the branch name.
- If on `main`, `master`, `dev`, or any non-migration branch → recommend:
  > *"You are on branch `<branch>`. It is recommended to create a dedicated migration
  > branch (e.g., `migration-to-<target device>`) before proceeding so you can roll
  > back cleanly."*
  
  Ask: *"Create a migration branch now, or proceed on the current branch?"*
  - If user wants a new branch → help them create it (e.g., `git checkout -b
    migration-to-<targetDevice>`), then confirm the switch.
  - If user says proceed on current branch → note in your **session context** and continue.

---

## Step 0.6 — Record pre-flight results for Phase 1

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
  Git:                <in repo | not a repository | not available>
  Git branch:         <branch name | n/a>
  Git state:          <clean | dirty — user acknowledged | n/a>
```

Phase 1 step 1.9 will seed `c2000-migration.md` with these values under the session
header. The Phase status table (Phase 0 through Phase 5) is created by Phase 1, not here.

---

## Step 0.7 — Phase 0 complete

Confirm to the user:

```
Pre-flight check complete.
IDEA MCP: live
CCS Project MCP: live
<DONE or WARNING> CCS SysConfig MCP: <live | not available>
<DONE or WARNING> TI ASM MCP: <live | not available>
<DONE or WARNING> Git: <clean on branch <name> | dirty — acknowledged | not a repository | not available>
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
| Git not installed / project not a repo | Skip Git checks — record in session context and continue |
| Git working tree dirty | User decision — note outcome in session context and continue |
