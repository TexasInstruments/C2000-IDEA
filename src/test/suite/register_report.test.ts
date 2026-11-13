import { suite, test, suiteSetup } from 'mocha';
import * as vscode from 'vscode';
import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import * as register from '../../register';
import * as project from '../../utilities/project';

// The bitfield to driverlib report is the third hand assembled markdown
// generator, and it states counts about itself the same way the migration ones
// do. Same three checks: the summary against the rendered issues, the issue
// index against its own denominator, and the code fences against each other.
//
// openAfter stays false -- the true path opens an untitled editor.
const DEVICE = 'F28P65x';
const SOURCE_FILE = 'bitfield_sources/f28p65x_bitfield_example.c';

let workspaceRoot: string;
let report: string;

function summaryCount(md: string, metric: string): number {
	const row = md.match(new RegExp(`^\\| ${metric} \\| (\\d+) \\|`, 'm'));
	assert.ok(row, `no "${metric}" row in the summary table`);
	return Number(row[1]);
}

function issueHeadings(md: string): { index: number; total: number }[] {
	return [...md.matchAll(/^#### Issue (\d+) of (\d+)\b/gm)]
		.map(m => ({ index: Number(m[1]), total: Number(m[2]) }));
}

function fences(md: string): string[] {
	return md.split('\n').filter(line => /^\s*```/.test(line));
}

suite('register bitfield agent report', () => {
	suiteSetup(async function () {
		const folders = vscode.workspace.workspaceFolders;
		assert.ok(folders && folders.length > 0, 'no workspace folder -- runTest must pass one via launchArgs');
		workspaceRoot = folders[0].uri.fsPath;

		const uri = vscode.Uri.file(path.join(workspaceRoot, SOURCE_FILE));
		if (!fs.existsSync(uri.fsPath)) { this.skip(); }

		await register.registerBitfieldToDriverlibMigrationOnUri(uri, DEVICE);
		report = register.exportRegisterBitfieldAgentReport(false);
		assert.ok(report.length > 0, 'the report came back empty -- the migration found nothing');
	});

	test('the summary totals match the rendered issues', () => {
		const rendered = issueHeadings(report).length;
		const total = summaryCount(report, 'Total issues');
		const whole = summaryCount(report, 'Whole-register accesses');
		const read = summaryCount(report, 'Read operations');
		const write = summaryCount(report, 'Write operations');
		const access = summaryCount(report, 'Bit-field accesses');

		console.log(`RREPORT rendered=${rendered} total=${total} whole=${whole} read=${read} write=${write} access=${access}`);

		assert.strictEqual(total, rendered,
			`summary claims ${total} issues, ${rendered} are rendered`);
		assert.strictEqual(whole + read + write + access, total,
			`the fix type counts sum to ${whole + read + write + access}, not ${total}`);
	});

	test('the issue index runs 1 to the stated total', () => {
		const headings = issueHeadings(report);
		assert.ok(headings.length > 0, 'no issue headings to check');

		const denominators = new Set(headings.map(h => h.total));
		assert.strictEqual(denominators.size, 1,
			`issue headings disagree on the total: ${[...denominators].join(', ')}`);
		assert.strictEqual([...denominators][0], headings.length,
			`headings say "of ${[...denominators][0]}" but ${headings.length} are rendered`);

		assert.deepStrictEqual(
			headings.map(h => h.index),
			headings.map((_h, i) => i + 1),
			'issue numbering is not a gapless run from 1');
	});

	test('every code fence is opened and closed', () => {
		const lines = fences(report);

		console.log(`RREPORT fence-lines=${lines.length}`);

		assert.ok(lines.length > 0, 'no fenced code blocks in the report');
		assert.strictEqual(lines.length % 2, 0, `${lines.length} fence markers, expected an even count`);

		let open = false;
		for (const line of lines) {
			const language = line.trim().slice(3);
			if (!open) {
				assert.ok(language.length > 0, `opening fence without a language: "${line.trim()}"`);
			} else {
				assert.strictEqual(language, '', `closing fence carries a language: "${line.trim()}"`);
			}
			open = !open;
		}
		assert.ok(!open, 'the report ends inside an open code fence');
	});

	test('no issue offers a suggested replacement or a checklist', () => {
		assert.ok(!report.includes('Suggested replacement'), 'the report mentions a suggested replacement');
		assert.ok(!report.includes('Action checklist:'), 'an issue carries an action checklist');
	});

	test('every issue lists candidates with a definitions call, or the raw access details', () => {
		const issues = report.split(/^#### Issue /m).slice(1);
		assert.ok(issues.length > 0, 'no issues in the report');

		for (const issue of issues) {
			const title = issue.split('\n')[0];
			if (issue.includes('**Available driverlib functions:**')) {
				assert.ok(issue.includes('get_driverlib_function(device: "'), `${title}: no definitions call`);
			} else {
				assert.ok(/\*\*Raw access:\*\* \d+-bit register, offset 0x/.test(issue), `${title}: no raw access details`);
			}
		}
	});

	// The MCP call has no editor or active project, so the device has to come
	// from the argument.
	test('a device passed in names the device and puts signatures on the candidates', () => {
		const withDevice = register.exportRegisterBitfieldAgentReport(false, DEVICE);

		assert.ok(withDevice.includes(`**Device:** ${DEVICE}`), 'the header does not name the device passed in');
		assert.ok(!withDevice.includes('Device could not be determined'), 'the header says the device is unknown');
		assert.ok(/^  - `\w+ \w+_\w+\(\w+ base[,)]/m.test(withDevice),
			'no candidate is shown with its signature');
	});
});
