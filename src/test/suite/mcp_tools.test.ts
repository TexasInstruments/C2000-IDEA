import { suite, test, suiteSetup, suiteTeardown } from 'mocha';
import * as assert from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { getMcpUrl, isRunning } from '../../mcp/idea-mcp';
import { IDEA_MCP_AUTH_TOKEN } from '../../mcp/idea-mcp-config';
import { migrationSyscfgGetAgentReport, MigrationSyscfgModulePair } from '../../migration/migration_syscfg';
import * as project from '../../utilities/project';
import { DEVICE_LIST, isDeviceF29x } from '../../deviceData';
import { isSamePath } from '../../utilities/utils';

// The server starts itself: ideaMcpInit ends with enableMcpCommand(false). So
// these connect to the instance activation already brought up rather than
// starting their own, which is the path a real agent takes.
//
// Read only tools only -- nothing here changes project state.
const EXPECTED_TOOLS = [
	'list_migration_devices',
	'get_projects',
	'set_project_current_device',
	'set_project_migration_devices',
	'download_migration_guide',
	'get_syscfg_module_migration_guide',
	'update_project_file_folder_exceptions',
	'get_device_migration_report',
	'get_project_migration_report',
	'get_bitfield_to_driverlib_migration_report',
	'get_driverlib_function',
	'get_migration_guide_section',
	'close_editor',
];

let client: Client;

// Tools answer with a single text block; the payload is JSON for some and
// markdown for others.
async function callText(name: string, args: Record<string, unknown> = {}): Promise<string> {
	const result = await client.callTool({ name, arguments: args }) as
		{ content: { type: string; text?: string }[] };
	assert.ok(Array.isArray(result.content) && result.content.length > 0,
		`${name}: no content in the response`);
	assert.strictEqual(result.content[0].type, 'text', `${name}: first content block is not text`);
	return result.content[0].text ?? '';
}

suite('idea mcp tools', () => {
	suiteSetup(async function () {
		assert.ok(isRunning(), 'the mcp server is not running -- activation should have started it');

		const transport = new StreamableHTTPClientTransport(new URL(getMcpUrl()), {
			requestInit: { headers: { Authorization: `Bearer ${IDEA_MCP_AUTH_TOKEN}` } },
		});
		client = new Client({ name: 'c2000-idea-tests', version: '1.0.0' });
		await client.connect(transport);

		await project.getProjects(project.extensionContext);
	});

	suiteTeardown(async () => {
		await client?.close();
	});

	test('offers exactly the documented tools', async () => {
		const { tools } = await client.listTools();
		const names = tools.map(t => t.name).sort();

		console.log(`MCP tools=${names.length}`);

		assert.deepStrictEqual(names, [...EXPECTED_TOOLS].sort(),
			'the registered tool set changed');
	});

	test('every tool carries a description', async () => {
		const { tools } = await client.listTools();

		for (const tool of tools) {
			assert.ok((tool.description ?? '').trim().length > 0, `${tool.name}: no description`);
		}
	});

	// The instructions hand-list the tools for the agent, and the two directions
	// are not equally bad. Naming a tool that is not registered sends an agent
	// after something that does not exist, so that fails. Leaving a registered
	// tool out only hides it, so that warns and stays visible in the run.
	test('the server instructions name only tools that exist', async () => {
		const { tools } = await client.listTools();
		const instructions = client.getInstructions() ?? '';
		assert.ok(instructions.length > 0, 'the server sent no instructions');

		const documented = [...instructions.matchAll(/^- ([a-z_]+)\(\)/gm)].map(m => m[1]);
		assert.ok(documented.length > 0, 'no tools are listed in the instructions');

		const registered = new Set(tools.map(t => t.name));
		const stale = documented.filter(name => !registered.has(name));
		const undocumented = [...registered].filter(name => !documented.includes(name));

		console.log(`MCP documented=${documented.length} registered=${registered.size}`);
		if (undocumented.length > 0) {
			console.warn(`MCP WARNING: registered but absent from the server instructions, ` +
				`so an agent reading them will not know these exist: ${undocumented.join(', ')}`);
		}

		assert.deepStrictEqual(stale, [], 'the instructions name tools that are not registered');
	});

	test('list_migration_devices reports every device and its support', async () => {
		const devices = JSON.parse(await callText('list_migration_devices')) as
			{ name: string; supported: boolean }[];

		console.log(`MCP devices=${devices.length}`);

		assert.deepStrictEqual(devices.map(d => d.name), DEVICE_LIST,
			'the device list does not match DEVICE_LIST');
		for (const device of devices) {
			assert.strictEqual(device.supported, !isDeviceF29x(device.name),
				`${device.name}: wrong supported flag`);
		}
	});

	test('get_driverlib_function finds a name in any case, and reports an unknown name', async () => {
		const md = await callText('get_driverlib_function',
			{ device: 'F28P551x', names: ['epwm_settimebasecountermode', 'NoSuchFunction'] });

		assert.ok(md.includes('### EPWM_setTimeBaseCounterMode (epwm.h)'), 'no heading with the source file');
		assert.ok(md.includes('EPWM_setTimeBaseCounterMode(uint32_t base, EPWM_TimeBaseCountMode counterMode)'), 'no signature');
		assert.ok(md.includes('EPWM_TBCTL_CTRMODE_M'), 'no function body');
		assert.ok(md.includes('### NoSuchFunction\nNot found'), 'the unknown name is not reported');
	});

	test('close_editor closes a saved tab and keeps an unsaved one', async () => {
		const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'close-editor-'));
		const saved = path.join(dir, 'saved.syscfg');
		const unsaved = path.join(dir, 'unsaved.syscfg');
		fs.writeFileSync(saved, '// saved\n');
		fs.writeFileSync(unsaved, '// unsaved\n');
		const isOpen = (file: string) => vscode.window.tabGroups.all.flatMap(g => g.tabs)
			.some(tab => {
				const uri = (tab.input as { uri?: vscode.Uri } | undefined)?.uri;
				return !!uri && isSamePath(uri.fsPath, file);
			});

		try {
			await vscode.window.showTextDocument(vscode.Uri.file(saved), { preview: false });
			const editor = await vscode.window.showTextDocument(vscode.Uri.file(unsaved), { preview: false });
			await editor.edit(edit => edit.insert(new vscode.Position(0, 0), 'x'));

			assert.deepStrictEqual(JSON.parse(await callText('close_editor', { filePath: saved })),
				{ closed: 1, keptUnsaved: 0 });
			assert.ok(!isOpen(saved), 'the saved tab is still open');

			assert.deepStrictEqual(JSON.parse(await callText('close_editor', { filePath: unsaved })),
				{ closed: 0, keptUnsaved: 1 });
			assert.ok(isOpen(unsaved), 'the unsaved tab was closed');
		} finally {
			await vscode.commands.executeCommand('workbench.action.revertAndCloseActiveEditor');
			fs.rmSync(dir, { recursive: true, force: true });
		}
	});

	test('get_projects matches the detected projects', async () => {
		const reported = JSON.parse(await callText('get_projects')) as
			{ name: string; currentDevice: string; migrationFolderExceptions: string[] }[];

		console.log(`MCP projects=${reported.length} detected=${project.allProjectInfos.length}`);

		assert.deepStrictEqual(
			reported.map(p => p.name).sort(),
			project.allProjectInfos.map(p => p.name).sort(),
			'the reported projects differ from the detected ones');

		for (const entry of reported) {
			const info = project.allProjectInfos.find(p => p.name === entry.name);
			assert.ok(info, `${entry.name} was reported but is not detected`);
			assert.strictEqual(entry.currentDevice, info.migrationState.currentDevice,
				`${entry.name}: reported device does not match`);
			assert.ok(Array.isArray(entry.migrationFolderExceptions),
				`${entry.name}: migrationFolderExceptions is not an array`);
		}
	});

	test('get_projects rescans without changing the set', async () => {
		const before = JSON.parse(await callText('get_projects')) as { name: string }[];
		const after = JSON.parse(await callText('get_projects', { rescan: true })) as { name: string }[];

		assert.deepStrictEqual(
			after.map(p => p.name).sort(),
			before.map(p => p.name).sort(),
			'a rescan changed the project set');
	});

	test('get_syscfg_module_migration_guide returns the same guide as a direct call', async () => {
		const ids = ['$hardware', '$name'];
		const viaMcp = await callText('get_syscfg_module_migration_guide', {
			moduleToModule: MigrationSyscfgModulePair.EPWM_MCPWM,
			sourceDevice: 'F28P65x',
			targetDevice: 'F28E12x',
			ids,
		});
		const direct = await migrationSyscfgGetAgentReport(
			project.extensionContext, MigrationSyscfgModulePair.EPWM_MCPWM, 'F28P65x', 'F28E12x', ids);

		console.log(`MCP syscfg bytes=${viaMcp.length}`);

		assert.ok(viaMcp.length > 0, 'the tool returned nothing');
		assert.strictEqual(viaMcp, direct, 'the tool did not thread its arguments through');
	});

	test('an unsupported syscfg pair is reported, not thrown', async () => {
		// F28E12x is the target of this pair, never a source.
		const text = await callText('get_syscfg_module_migration_guide', {
			moduleToModule: MigrationSyscfgModulePair.EPWM_MCPWM,
			sourceDevice: 'F28E12x',
			targetDevice: 'F28E12x',
		});

		assert.ok(text.startsWith('Error:'), `expected an error message, got: ${text.slice(0, 80)}`);
		assert.ok(text.includes('Supported for'), 'the error does not say what is supported');
	});
});
