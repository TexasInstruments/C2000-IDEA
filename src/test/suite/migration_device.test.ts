import { suite, test, suiteSetup } from 'mocha';
import * as vscode from 'vscode';
import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import * as migration from '../../migration';
import * as project from '../../utilities/project';

// Each case names a device pair and the staged source to check it against. The
// source was chosen so its findings land on a control or communication
// peripheral present on both devices -- a real API change rather than a
// peripheral the target simply does not have.
//
// Floors sit near two thirds of the measured count so migration-data updates do
// not fail the suite. Measured, in case order: 151 44 66 11 4 24 12 18 11 8 21
// 38 13 222 15.
type Case = {
	source: string;
	target: string;
	file: string;
	floor: number;
	peripherals: string;
};

const CASES: Case[] = [
	{ source: 'F280013x', target: 'F28E12x', file: 'f280013x_adc_ex14_ppb_pwm_trip.c', floor: 100, peripherals: 'epwm adc xbar' },
	{ source: 'F280013x', target: 'F28E12x', file: 'f280013x_hrpwm_ex4_duty_updown_sfo.c', floor: 30, peripherals: 'hrpwm epwm' },
	{ source: 'F280013x', target: 'F28E12x', file: 'f280013x_eqep_ex3_epwm_xbar.c', floor: 45, peripherals: 'epwm memmap xbar' },
	{ source: 'F28003x', target: 'F28P551x', file: 'f28003x_adc_ex15_open_shorts_detection.c', floor: 7, peripherals: 'adc' },
	{ source: 'F28003x', target: 'F28P551x', file: 'f28003x_lpm_ex6_haltwake_gpio_watchdog.c', floor: 3, peripherals: 'sysctl flash' },
	{ source: 'F2837xD', target: 'F28P65x', file: 'f2837xd_ecap_ex2_capture_pwm.c', floor: 16, peripherals: 'ecap' },
	{ source: 'F2838x', target: 'F28P65x', file: 'f2838x_adc_ex14_ppb_pwm_trip.c', floor: 8, peripherals: 'adc' },
	{ source: 'F2807x', target: 'F28P65x', file: 'f2807x_sdfm_ex1_filters.c', floor: 12, peripherals: 'sdfm' },
	{ source: 'F2837xS', target: 'F28P65x', file: 'f2837xs_clb_ex12_output_intersect.c', floor: 7, peripherals: 'clb epwm' },
	{ source: 'F28004x', target: 'F28003x', file: 'f28004x_lpm_ex6_haltwake_gpio_watchdog.c', floor: 5, peripherals: 'sysctl flash' },
	{ source: 'F28002x', target: 'F28003x', file: 'f28002x_memcfg_ex1_error_handling.c', floor: 14, peripherals: 'memcfg' },
	{ source: 'F280015x', target: 'F28E12x', file: 'f280015x_adc_ex15_open_shorts_detection.c', floor: 25, peripherals: 'adc' },
	{ source: 'F28P55x', target: 'F28P65x', file: 'f28p55x_adc_ex14_ppb_pwm_trip.c', floor: 8, peripherals: 'xbar adc epwm' },
	{ source: 'F28P65x', target: 'F29H85x', file: 'f28p65x_sdfm_ex6_FIFO_freeze_claread.c', floor: 150, peripherals: 'sdfm cla hrpwm' },
	{ source: 'F28E12x', target: 'F28P65x', file: 'f28e12x_launchxl_ex1_f28e12x_demo.c', floor: 10, peripherals: 'adc gpio' },
];

// A blinky calls only generic setup APIs, so it should stay near zero. The code
// list contains short entries like ES and MPC, and word boundaries stop those
// matching inside a longer identifier but not a variable of exactly that name --
// if matching ever loosened, this count would jump.
const CLEAN_CEILING = 3;

let workspaceRoot: string;

function sourceUri(file: string): vscode.Uri {
	return vscode.Uri.file(path.join(workspaceRoot, 'migration_sources', file));
}

async function check(uri: vscode.Uri, source: string, targets: string[]): Promise<vscode.Diagnostic[]> {
	await migration.migrationRunMigrationCheckOnUri(project.extensionContext, uri, source, targets);
	const found: vscode.Diagnostic[] = [];
	migration.migrationDiagnosticsCollection.forEach((u, diags) => {
		if (u.fsPath === uri.fsPath) { found.push(...diags); }
	});
	return found;
}

suite('migration check on uri', () => {
	suiteSetup(() => {
		const folders = vscode.workspace.workspaceFolders;
		assert.ok(folders && folders.length > 0, 'no workspace folder -- runTest must pass one via launchArgs');
		workspaceRoot = folders[0].uri.fsPath;
	});

	for (const c of CASES) {
		test(`${c.source} to ${c.target} (${c.peripherals})`, async function () {
			const uri = sourceUri(c.file);
			if (!fs.existsSync(uri.fsPath)) { this.skip(); }

			const found = await check(uri, c.source, [c.target]);
			const doc = await vscode.workspace.openTextDocument(uri);

			console.log(`MIGRATION ${c.source}->${c.target} ${c.file} diagnostics=${found.length}`);

			assert.ok(found.length >= c.floor,
				`${c.source}->${c.target} on ${c.file}: ${found.length} diagnostics, floor is ${c.floor}`);
			for (const d of found) {
				assert.ok(d.message.trim().length > 0, `${c.file}: empty diagnostic message`);
				assert.ok(d.range.start.line < doc.lineCount,
					`${c.file}: diagnostic at line ${d.range.start.line}, file has ${doc.lineCount}`);
			}
		});
	}

	test('F280013x to F28E12x and F28P65x in one call', async function () {
		const uri = sourceUri('f280013x_adc_ex14_ppb_pwm_trip.c');
		if (!fs.existsSync(uri.fsPath)) { this.skip(); }

		const single = await check(uri, 'F280013x', ['F28E12x']);
		const both = await check(uri, 'F280013x', ['F28E12x', 'F28P65x']);

		console.log(`MIGRATION multi-target single=${single.length} both=${both.length}`);

		assert.ok(both.length >= single.length,
			`two targets produced fewer diagnostics (${both.length}) than one (${single.length})`);
	});

	test('is deterministic', async function () {
		const uri = sourceUri('f280013x_adc_ex14_ppb_pwm_trip.c');
		if (!fs.existsSync(uri.fsPath)) { this.skip(); }

		const first = await check(uri, 'F280013x', ['F28E12x']);
		const second = await check(uri, 'F280013x', ['F28E12x']);

		assert.deepStrictEqual(
			second.map(d => `${d.range.start.line}:${d.message}`).sort(),
			first.map(d => `${d.range.start.line}:${d.message}`).sort());
	});

	test('a blinky stays near zero', async function () {
		const uri = vscode.Uri.file(
			path.join(workspaceRoot, 'f280013x_led_ex1_blinky', 'led_ex1_blinky.c'));
		if (!fs.existsSync(uri.fsPath)) { this.skip(); }

		const found = await check(uri, 'F280013x', ['F28E12x']);

		console.log(`MIGRATION clean-control diagnostics=${found.length}`);

		assert.ok(found.length <= CLEAN_CEILING,
			`blinky produced ${found.length} diagnostics, ceiling is ${CLEAN_CEILING}: ` +
			found.map(d => d.message.split('\n')[0]).join(' | '));
	});

	// XBAR_setInputPin is changed and ASysCtl_disableDCDC removed for this pair.
	// The target branch keeps only the removed finding; the source branch is not
	// checked and the unwrapped call is.
	test('a target-only branch flags removed symbols, not changed ones', async () => {
		const uri = vscode.Uri.file(path.join(workspaceRoot, 'device_migration_branch.c'));
		fs.writeFileSync(uri.fsPath, [
			'#if F28004x  //_DEVICE_MIGRATION_',
			'    XBAR_setInputPin(XBAR_INPUT1, 39U);',
			'#elif F28003x  //_DEVICE_MIGRATION_',
			'    XBAR_setInputPin(INPUTXBAR_BASE, XBAR_INPUT1, 39U);',
			'    ASysCtl_disableDCDC();',
			'#endif  //_DEVICE_MIGRATION_',
			'    XBAR_setInputPin(XBAR_INPUT1, 39U);',
			''
		].join('\n'));
		try {
			const found = await check(uri, 'F28004x', ['F28003x']);
			const lines = (code: string) => found
				.filter(d => d.message.startsWith(code + ':'))
				.map(d => d.range.start.line);

			assert.deepStrictEqual(lines('XBAR_setInputPin'), [6]);
			assert.deepStrictEqual(lines('ASysCtl_disableDCDC'), [4]);
		} finally {
			fs.unlinkSync(uri.fsPath);
		}
	});

	test('a pair with no migration data rejects', async function () {
		const uri = sourceUri('f280013x_adc_ex14_ppb_pwm_trip.c');
		if (!fs.existsSync(uri.fsPath)) { this.skip(); }

		// There is no f280013x_f280013x.json, and getMigrationJSON reads it without
		// guarding. This pins that as a rejection rather than an empty result.
		await assert.rejects(
			() => migration.migrationRunMigrationCheckOnUri(
				project.extensionContext, uri, 'F280013x', ['F280013x']),
			'expected a missing data file to reject');
	});
});
