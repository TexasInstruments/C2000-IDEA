// Fixture manifest and the code that stages it into a workspace.
// Paths are relative to the c2000ware root from env.ts.
import * as cp from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { TestEnv } from './env';

export type ImportFixture = {
	kind: 'import';
	projectspec: string;
	// Set only when the projectspec declares no concrete device; otherwise the
	// spec's own device is used.
	device?: string;
	build: boolean;
	// Workspace folder name, which is what getProjects reports.
	name: string;
	// Device family the extension is expected to resolve. Records current
	// behavior, which is not always correct behavior -- see f28p551x.
	expectDevice: string;
};

export type CopyFixture = {
	kind: 'copy';
	from: string;
	to: string;
};

export type Fixture = ImportFixture | CopyFixture;

export const FIXTURES: Fixture[] = [
	// CCS imports into one flat workspace, so names must not collide.
	{
		kind: 'import', name: 'f280013x_led_ex1_blinky',
		projectspec: 'driverlib/f280013x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F280013x',
	},
	{
		kind: 'import', name: 'f280015x_led_ex1_blinky',
		projectspec: 'driverlib/f280015x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F280015x',
	},
	{
		kind: 'import', name: 'f28002x_led_ex1_blinky',
		projectspec: 'driverlib/f28002x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F28002x',
	},
	{
		kind: 'import', name: 'f28003x_led_ex1_blinky',
		projectspec: 'driverlib/f28003x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: true, expectDevice: 'F28003x',
	},
	{
		kind: 'import', name: 'f28004x_led_ex1_blinky',
		projectspec: 'driverlib/f28004x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F28004x',
	},
	{
		kind: 'import', name: 'f2807x_led_ex1_blinky',
		projectspec: 'driverlib/f2807x/examples/cpu1/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F2807x',
	},
	{
		kind: 'import', name: 'f2837xd_led_ex1_blinky',
		projectspec: 'driverlib/f2837xd/examples/cpu1/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F2837xD',
	},
	{
		kind: 'import', name: 'f2837xs_led_ex1_blinky',
		projectspec: 'driverlib/f2837xs/examples/cpu1/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F2837xS',
	},
	{
		kind: 'import', name: 'f2838x_led_ex1_blinky',
		projectspec: 'driverlib/f2838x/examples/c28x/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F2838x',
	},
	{
		kind: 'import', name: 'f28e12x_led_ex1_blinky',
		projectspec: 'driverlib/f28e12x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F28E12x',
	},
	{
		kind: 'import', name: 'f28p551x_led_ex1_blinky',
		projectspec: 'driverlib/f28p551x/examples/led/CCS/led_ex1_blinky.projectspec',
		device: 'TMS320F28P551SG5',
		build: false, expectDevice: 'F28P551x',
	},
	{
		kind: 'import', name: 'f28p55x_led_ex1_blinky',
		projectspec: 'driverlib/f28p55x/examples/led/CCS/led_ex1_blinky.projectspec',
		build: false, expectDevice: 'F28P55x',
	},
	{
		kind: 'import', name: 'f28p65x_led_ex1_blinky',
		projectspec: 'driverlib/f28p65x/examples/c28x/led/CCS/led_ex1_blinky.projectspec',
		build: true, expectDevice: 'F28P65x',
	},

	// Inputs for the project migration check. Each projectspec copies the driverlib
	// tree into device/driverlib, and building generates SysConfig sources under
	// CPU1_RAM/syscfg; the check scans both like any other source, which is what
	// the folder-exclusion tests remove.
	{
		kind: 'import', name: 'f280013x_adc_ex14_ppb_pwm_trip',
		projectspec: 'driverlib/f280013x/examples/adc/CCS/adc_ex14_ppb_pwm_trip.projectspec',
		build: true, expectDevice: 'F280013x',
	},
	{
		kind: 'import', name: 'f28p65x_sdfm_ex6_FIFO_freeze_claread',
		projectspec: 'driverlib/f28p65x/examples/c28x/sdfm/CCS/sdfm_ex6_FIFO_freeze_claread.projectspec',
		build: true, expectDevice: 'F28P65x',
	},
	{
		kind: 'import', name: 'f2837xd_ecap_ex2_capture_pwm',
		projectspec: 'driverlib/f2837xd/examples/cpu1/ecap/CCS/ecap_ex2_capture_pwm.projectspec',
		build: true, expectDevice: 'F2837xD',
	},
	{
		kind: 'import', name: 'f28003x_adc_ex15_open_shorts_detection',
		projectspec: 'driverlib/f28003x/examples/adc/CCS/adc_ex15_open_shorts_detection.projectspec',
		build: true, expectDevice: 'F28003x',
	},

	// Sources outside any project, for projectless behavior:
	// projectGetUriProjectInfo returns undefined for these, so the extension
	// falls back to c2000-idea.project.defaultDevice.
	//
	// driverlib_sources: the PWM driverlib header per device, which carries the
	// MODULE_O_REGISTER offsets. f28e12x has mcpwm rather than epwm.
	{ kind: 'copy', from: 'driverlib/f280013x/driverlib/epwm.h',
	  to: 'driverlib_sources/f280013x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f280015x/driverlib/epwm.h',
	  to: 'driverlib_sources/f280015x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f28002x/driverlib/epwm.h',
	  to: 'driverlib_sources/f28002x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f28003x/driverlib/epwm.h',
	  to: 'driverlib_sources/f28003x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f28004x/driverlib/epwm.h',
	  to: 'driverlib_sources/f28004x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f2807x/driverlib/epwm.h',
	  to: 'driverlib_sources/f2807x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f2837xd/driverlib/epwm.h',
	  to: 'driverlib_sources/f2837xd_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f2837xs/driverlib/epwm.h',
	  to: 'driverlib_sources/f2837xs_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f2838x/driverlib/epwm.h',
	  to: 'driverlib_sources/f2838x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f28e12x/driverlib/mcpwm.h',
	  to: 'driverlib_sources/f28e12x_mcpwm.h' },
	{ kind: 'copy', from: 'driverlib/f28p551x/driverlib/epwm.h',
	  to: 'driverlib_sources/f28p551x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f28p55x/driverlib/epwm.h',
	  to: 'driverlib_sources/f28p55x_epwm.h' },
	{ kind: 'copy', from: 'driverlib/f28p65x/driverlib/epwm.h',
	  to: 'driverlib_sources/f28p65x_epwm.h' },

	// bitfield_sources: the PWM-triggered ADC example per device, which uses
	// the Regs.REGISTER.bit.FIELD style. Upstream paths differ by device
	// generation, so they are spelled out rather than derived.
	{ kind: 'copy', from: 'device_support/f280013x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f280013x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f280015x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f280015x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28002x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f28002x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28003x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f28003x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28004x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f28004x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f2807x/examples/cpu1/adc_soc_epwm/cpu01/adc_soc_epwm_cpu01.c',
	  to: 'bitfield_sources/f2807x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f2837xd/examples/cpu1/adc_soc_epwm/cpu01/adc_soc_epwm_cpu01.c',
	  to: 'bitfield_sources/f2837xd_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f2837xs/examples/cpu1/adc_soc_epwm/cpu01/adc_soc_epwm_cpu01.c',
	  to: 'bitfield_sources/f2837xs_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f2838x/examples/cpu1/adc/adc_ex2_soc_epwm.c',
	  to: 'bitfield_sources/f2838x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28e12x/examples/adc/adc_ex1_soc_mcpwm.c',
	  to: 'bitfield_sources/f28e12x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28p551x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f28p551x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28p55x/examples/adc/adc_ex1_soc_epwm.c',
	  to: 'bitfield_sources/f28p55x_bitfield_example.c' },
	{ kind: 'copy', from: 'device_support/f28p65x/examples/cpu1/adc/adc_ex2_soc_epwm.c',
	  to: 'bitfield_sources/f28p65x_bitfield_example.c' },

	// migration_sources: example sources for the migration check. Each was picked
	// because its findings land on a control or communication peripheral that
	// exists on both devices of its pair, so the check reports a real API change
	// rather than a peripheral that is simply absent on the target.
	{ kind: 'copy', from: 'driverlib/f280013x/examples/adc/adc_ex14_ppb_pwm_trip.c',
	  to: 'migration_sources/f280013x_adc_ex14_ppb_pwm_trip.c' },
	{ kind: 'copy', from: 'driverlib/f280013x/examples/hrpwm/hrpwm_ex4_duty_updown_sfo.c',
	  to: 'migration_sources/f280013x_hrpwm_ex4_duty_updown_sfo.c' },
	{ kind: 'copy', from: 'driverlib/f280013x/examples/eqep/eqep_ex3_epwm_xbar.c',
	  to: 'migration_sources/f280013x_eqep_ex3_epwm_xbar.c' },
	{ kind: 'copy', from: 'driverlib/f28003x/examples/adc/adc_ex15_open_shorts_detection.c',
	  to: 'migration_sources/f28003x_adc_ex15_open_shorts_detection.c' },
	{ kind: 'copy', from: 'driverlib/f28003x/examples/lpm/lpm_ex6_haltwake_gpio_watchdog.c',
	  to: 'migration_sources/f28003x_lpm_ex6_haltwake_gpio_watchdog.c' },
	{ kind: 'copy', from: 'driverlib/f2837xd/examples/cpu1/ecap/ecap_ex2_capture_pwm.c',
	  to: 'migration_sources/f2837xd_ecap_ex2_capture_pwm.c' },
	{ kind: 'copy', from: 'driverlib/f2838x/examples/c28x/adc/adc_ex14_ppb_pwm_trip.c',
	  to: 'migration_sources/f2838x_adc_ex14_ppb_pwm_trip.c' },
	{ kind: 'copy', from: 'driverlib/f2807x/examples/cpu1/sdfm/sdfm_ex1_filters.c',
	  to: 'migration_sources/f2807x_sdfm_ex1_filters.c' },
	{ kind: 'copy', from: 'driverlib/f2837xs/examples/cpu1/clb/clb_ex12_output_intersect.c',
	  to: 'migration_sources/f2837xs_clb_ex12_output_intersect.c' },
	{ kind: 'copy', from: 'driverlib/f28004x/examples/lpm/lpm_ex6_haltwake_gpio_watchdog.c',
	  to: 'migration_sources/f28004x_lpm_ex6_haltwake_gpio_watchdog.c' },
	{ kind: 'copy', from: 'driverlib/f28002x/examples/memcfg/memcfg_ex1_error_handling.c',
	  to: 'migration_sources/f28002x_memcfg_ex1_error_handling.c' },
	{ kind: 'copy', from: 'driverlib/f280015x/examples/adc/adc_ex15_open_shorts_detection.c',
	  to: 'migration_sources/f280015x_adc_ex15_open_shorts_detection.c' },
	{ kind: 'copy', from: 'driverlib/f28p55x/examples/adc/adc_ex14_ppb_pwm_trip.c',
	  to: 'migration_sources/f28p55x_adc_ex14_ppb_pwm_trip.c' },
	{ kind: 'copy', from: 'driverlib/f28p65x/examples/c28x/sdfm/sdfm_ex6_FIFO_freeze_claread.c',
	  to: 'migration_sources/f28p65x_sdfm_ex6_FIFO_freeze_claread.c' },
	{ kind: 'copy', from: 'driverlib/f28e12x/examples/launchxl_f28e12x/launchxl_ex1_f28e12x_demo.c',
	  to: 'migration_sources/f28e12x_launchxl_ex1_f28e12x_demo.c' },
];

export const IMPORT_FIXTURES = FIXTURES.filter((f): f is ImportFixture => f.kind === 'import');
export const COPY_FIXTURES = FIXTURES.filter((f): f is CopyFixture => f.kind === 'copy');

export type BuildReport = {
	workspace: string;
	imported: string[];
	built: string[];
	copied: string[];
	failures: { name: string; stage: 'import' | 'build'; detail: string }[];
};

function runCcs(env: TestEnv, args: string[]): { ok: boolean; output: string } {
	// Windows batch files cannot be launched directly by spawnSync; route the
	// invocation through cmd.exe. Keep each CCS argument separate so paths with
	// spaces (notably the temporary workspace) remain intact.
	const command = process.platform === 'win32' ? 'cmd.exe' : env.ccsCli!;
	const commandArgs = process.platform === 'win32'
		? ['/d', '/s', '/c', 'call', env.ccsCli!, ...args]
		: args;
	const r = cp.spawnSync(command, commandArgs, {
		encoding: 'utf8',
		maxBuffer: 64 * 1024 * 1024,
		// A cold SysConfig plus full build takes minutes.
		timeout: 20 * 60 * 1000,
	});
	const output = `${r.stdout ?? ''}${r.stderr ?? ''}${r.error ? `\n${r.error.message}` : ''}`;
	return { ok: r.error === undefined && r.status === 0, output };
}

function lastLines(s: string, n: number): string {
	return s.trimEnd().split('\n').slice(-n).join('\n');
}

// Name CCS will import under, read from the spec so the manifest need not
// repeat it.
function projectspecName(spec: string): string | null {
	const m = fs.readFileSync(spec, 'utf8').match(/<project\s[^>]*?name="([^"]+)"/s);
	return m ? m[1] : null;
}

// Renamed here rather than with -ccs.renameTo, which costs ~300s per import:
// it waits on ProjectStateMonitor.ensureIsLoaded while holding the workspace
// rule the refresh job needs, so it only unblocks on timeout. Measured 304s
// with the flag, 6s without.
//
// .project's <name> moves too, so the build's artifactName="${ProjName}"
// resolves to the new name. Orphans CCS's registration -- see registerProject.
function renameImportedProject(workspace: string, from: string, to: string): void {
	if (from === to) { return; }
	fs.renameSync(path.join(workspace, from), path.join(workspace, to));
	const dotProject = path.join(workspace, to, '.project');
	if (fs.existsSync(dotProject)) {
		fs.writeFileSync(dotProject, fs.readFileSync(dotProject, 'utf8')
			.replace(`<name>${from}</name>`, `<name>${to}</name>`));
	}
}

// Re-imports an in-workspace project so CCS knows its current name. No
// -ccs.copyIntoWorkspace: it is already in place, and copying a directory onto
// itself has been seen to move rather than copy.
function registerProject(env: TestEnv, workspace: string, name: string): void {
	runCcs(env, [
		'-workspace', workspace,
		'-application', 'projectImport',
		'-ccs.location', path.join(workspace, name),
	]);
}

// Requires zero errors across at least one project, plus an artifact on disk.
// An unregistered project reports "0 out of 0 projects have errors" and exits
// 0, so the error count alone would read a build of nothing as success.
function buildSucceeded(bld: { ok: boolean; output: string }, projectDir: string): boolean {
	if (!bld.ok) { return false; }
	const m = bld.output.match(/(\d+) out of (\d+) projects have errors/);
	if (!m || m[1] !== '0' || Number(m[2]) < 1) { return false; }
	return hasArtifact(projectDir);
}

function hasArtifact(dir: string): boolean {
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) {
			if (hasArtifact(p)) { return true; }
		} else if (e.name.endsWith('.out')) {
			return true;
		}
	}
	return false;
}

// Copies always run; imports and builds are skipped when CCS is unavailable or
// when alreadyExists is set (workspace was staged by a prior run).
export function buildFixtureWorkspace(env: TestEnv, workspace: string): BuildReport {
	const report: BuildReport = {
		workspace, imported: [], built: [], copied: [], failures: [],
	};

	if (env.workspaceAlreadyExists) {
		console.log('  skipping all fixture setup (workspace.alreadyExists = true)');
		return report;
	}

	if (env.c2000ware) {
		for (const f of COPY_FIXTURES) {
			const src = path.join(env.c2000ware, f.from);
			const dest = path.join(workspace, f.to);
			fs.mkdirSync(path.dirname(dest), { recursive: true });
			fs.copyFileSync(src, dest);
			report.copied.push(f.to);
		}
	}

	if (!env.ccsCli || !env.c2000ware) { return report; }

	for (const f of IMPORT_FIXTURES) {
		const spec = path.join(env.c2000ware, f.projectspec);
		process.stdout.write(`  import ${f.name} ... `);
		if (!fs.existsSync(spec)) {
			// Printed, not silent: a bad path otherwise looks like an absent fixture.
			console.log('NO SUCH PROJECTSPEC');
			report.failures.push({ name: f.name, stage: 'import', detail: `projectspec not found: ${f.projectspec}` });
			continue;
		}
		const importedAs = projectspecName(spec)!;
		if (!importedAs) {
			console.log('UNREADABLE PROJECTSPEC');
			report.failures.push({ name: f.name, stage: 'import', detail: `no <project name> in ${f.projectspec}` });
			continue;
		}

		const imp = runCcs(env, [
			'-workspace', workspace,
			'-application', 'projectImport',
			'-ccs.location', spec,
			...(f.device ? ['-ccs.device', f.device] : []),
			'-ccs.copyIntoWorkspace',
			'-ccs.overwrite',
		]);

		if (!imp.ok || !fs.existsSync(path.join(workspace, importedAs, '.cproject'))) {
			console.log('FAILED');
			report.failures.push({ name: f.name, stage: 'import', detail: lastLines(imp.output, 12) });
			continue;
		}
		console.log('ok');
		report.imported.push(f.name);
		renameImportedProject(workspace, importedAs, f.name);

		if (!f.build) { continue; }
		process.stdout.write(`  build  ${f.name} ... `);
		// CCS keeps its registry in the Eclipse -data dir, not the workspace, so
		// the rename left a stale entry. Without this the build finds nothing
		// and still exits 0.
		registerProject(env, workspace, f.name);
		// No -ccs.configuration: the CLI uses the active one.
		const bld = runCcs(env, [
			'-workspace', workspace,
			'-application', 'projectBuild',
			'-ccs.projects', f.name,
			'-ccs.buildType', 'full',
			'-ccs.listProblems',
		]);
		if (!buildSucceeded(bld, path.join(workspace, f.name))) {
			console.log('FAILED');
			report.failures.push({ name: f.name, stage: 'build', detail: lastLines(bld.output, 15) });
			continue;
		}
		console.log('ok');
		report.built.push(f.name);
	}

	return report;
}

export function createWorkspaceDir(env: TestEnv): string {
	if (env.workspacePath) {
		fs.mkdirSync(env.workspacePath, { recursive: true });
		return env.workspacePath;
	}
	return fs.mkdtempSync(path.join(os.tmpdir(), 'c2000-idea-ws-'));
}
