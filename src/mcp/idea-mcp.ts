import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as http from "http";
import express from 'express';
import { randomUUID } from 'crypto';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import {
	IDEA_MCP_PLATFORM,
	IDEA_MCP_SERVER_NAME,
	IDEA_MCP_AUTH_TOKEN,
	IDEA_MCP_COMMAND_PREFIX,
	IDEA_MCP_VSCODE_CONFIG,
	IDEA_MCP_SETTINGS_KEY,
	IDEA_MCP_DEFAULT_PORT,
	IDEA_MCP_HANDLERS,
} from './idea-mcp-config';
import { deployIdeaSkills } from '../skills/idea-skills';
import { isDeviceF29x } from '../deviceData';
import { renderMigrationGuideMarkdown } from '../migrationGuide';
import { normalizeMigrationExceptionPath } from '../utilities/utils';

let httpServer: http.Server | null = null;
let extensionContext: vscode.ExtensionContext | null = null;

const TRANSPORTS: Record<string, StreamableHTTPServerTransport> = {};

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction): void {
	const header = req.headers.authorization;
	const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

	if (!token || token !== IDEA_MCP_AUTH_TOKEN) {
		res.status(401).json({
			jsonrpc: '2.0',
			error: { code: -32001, message: 'Unauthorized: invalid or missing bearer token' },
			id: null,
		});
		return;
	}
	next();
}

export function isRunning(): boolean {
	return httpServer !== null;
}

export function getMcpPort(): number {
	return vscode.workspace.getConfiguration(IDEA_MCP_VSCODE_CONFIG + '.' + IDEA_MCP_SETTINGS_KEY).get('port', IDEA_MCP_DEFAULT_PORT);
}

export function getMcpHost(): string {
	return vscode.workspace.getConfiguration(IDEA_MCP_VSCODE_CONFIG + '.' + IDEA_MCP_SETTINGS_KEY).get('host', 'localhost');
}

export function getMcpUrl(): string {
	const port = getMcpPort();
	const host = getMcpHost();
	return `http://${host}:${port}/mcp`;
}

export function checkMcp() {
	if (isRunning()) {
		vscode.window.showInformationMessage(`IDEA MCP server is running on ${getMcpUrl()}.`);
	} else {
		vscode.window.showInformationMessage('IDEA MCP server is not running.');
	}
}

const SERVER_INSTRUCTIONS = `${IDEA_MCP_PLATFORM} development assistant. Provides project discovery, device-to-device migration analysis, and bitfield-to-driverlib migration analysis for ${IDEA_MCP_PLATFORM} MCU projects.

AVAILABLE TOOLS:
- get_projects() — Discover projects in the workspace with their device info, paths, and current folder exclusions (migrationFolderExceptions).
- set_project_current_device() — Manually set a project's current (source) device for migration when the auto-detected device is wrong.
- set_project_migration_devices() — Set a project's target (migration) device list for device-to-device migration.
- update_project_file_folder_exceptions() — Read, add, remove, or replace a project's list of file/folder paths excluded from migration checks.
- list_migration_devices() — Get all supported device families for migration.
- get_project_migration_report() — Run a device-to-device migration check on ALL files in a project and get a complete multi-file report. Use this for project-level migration.
- get_device_migration_report() — Run a device-to-device migration check on a single source file. Use this when you need per-file control (e.g. fixing one file at a time after a project report).
- get_bitfield_to_driverlib_migration_report() — Run a bitfield-to-driverlib migration check on a source file. Scans for legacy bitfield register accesses and suggests driverlib function replacements.
- download_migration_guide() — Download the TI any-to-any driverlib migration-guide HTML for a source→target device pair to an absolute local file path.
- get_syscfg_module_migration_guide() — Get the SysConfig (.syscfg) config migration guide (Markdown) for a peripheral module-to-module pair; pass the config ids to scope it (highly recommended).

RECOMMENDED FLOW:
1. Call get_projects() to discover projects, their current devices, migration targets, and current folder exclusions (migrationFolderExceptions).
2. For device-to-device migration (project level — preferred):
   a. Call list_migration_devices() if you need to verify or select device names.
   b. Check migrationFolderExceptions from get_projects(). If the build output folder and SysConfig-generated folder are not already excluded, call update_project_file_folder_exceptions() with operation "add" and those relative paths before running the report.
   c. Call get_project_migration_report() with the project name to analyze all files at once.
   d. Issues marked "Auto-fixable" have a concrete code replacement you can apply directly. Issues marked "Needs manual review" require reading the linked migration guide.
   e. After fixing files, call get_device_migration_report() on individual files to verify the fixes are clean.
3. For bitfield-to-driverlib migration:
   a. Use get_projects() to get the project's currentDevice.
   b. Call get_bitfield_to_driverlib_migration_report() with the file path and sourceDevice.

RULES:
- Device names are case-insensitive (internally normalized to lowercase).
- Not every source→target pair has migration data. If no issues are returned, either the file has no migration-relevant APIs or the device pair has no migration JSON data.
- Bitfield-to-driverlib migration converts legacy bitfield register patterns to driverlib function calls for the same device — there is no target device.
- Running either migration report populates VS Code diagnostics (squiggly underlines) in the editor as a side effect.`;

function createMcpServerInstance(): McpServer {
	const server = new McpServer(
		{ name: IDEA_MCP_SERVER_NAME, version: '1.0.0' },
		{ instructions: SERVER_INSTRUCTIONS }
	);

	if (IDEA_MCP_HANDLERS.getDeviceList) {
		const getDeviceList = IDEA_MCP_HANDLERS.getDeviceList;

		server.registerTool(
			'list_migration_devices',
			{
				description: `Get the list of supported ${IDEA_MCP_PLATFORM} device families for device-to-device migration. Call this first to discover valid device names before running a migration check.`,
			},
			async () => {
				const devices = getDeviceList();
				const structured = devices.map(d => ({
					name: d,
					supported: !isDeviceF29x(d),
				}));
				return { content: [{ type: 'text' as const, text: JSON.stringify(structured, null, 2) }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.getProjects && IDEA_MCP_HANDLERS.getAllProjectInfos) {
		const getProjectsFn = IDEA_MCP_HANDLERS.getProjects;
		const getAllProjectInfos = IDEA_MCP_HANDLERS.getAllProjectInfos;

		server.registerTool(
			'get_projects',
			{
				description: `Discover ${IDEA_MCP_PLATFORM} projects in the current VS Code workspace. Returns each project's name, path, device variant, current device, and migration target devices. Use this to find project paths and device info before running migration checks.`,
				inputSchema: {
					rescan: z.boolean().optional().describe('If true, re-scan the workspace for projects before returning. If false or omitted, return cached project data (faster).'),
				} as any,
			},
			async ({ rescan }: any) => {
				if (rescan && extensionContext) {
					await getProjectsFn(extensionContext);
				}

				const projects = getAllProjectInfos();

				if (projects.length === 0) {
					return { content: [{ type: 'text' as const, text: 'No projects found. Open a workspace with CCS projects and try with rescan: true.' }] };
				}

				const serialized = projects.map(p => {
					const projectPath = p.uri?.fsPath || p.uri?.path || '';
					const resumeLogPath = path.join(projectPath, 'c2000-migration.md');
					return {
						name: p.name,
						path: projectPath,
						deviceVariant: p.deviceVariant,
						currentDevice: p.migrationState.currentDevice,
						migrationDevices: p.migrationState.migrationDevices,
						migrationFolderExceptions: p.migrationState.migrationCheckFolderExceptions || [],
						hasResumeLog: fs.existsSync(resumeLogPath),
					};
				});

				return { content: [{ type: 'text' as const, text: JSON.stringify(serialized, null, 2) }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.setProjectCurrentDevice && IDEA_MCP_HANDLERS.getAllProjectInfos && IDEA_MCP_HANDLERS.getDeviceList) {
		const setCurrentDevice = IDEA_MCP_HANDLERS.setProjectCurrentDevice;
		const getAllProjectInfos = IDEA_MCP_HANDLERS.getAllProjectInfos;
		const deviceList = IDEA_MCP_HANDLERS.getDeviceList();

		server.registerTool(
			'set_project_current_device',
			{
				description: `Manually set a ${IDEA_MCP_PLATFORM} project's current (source) device for device-to-device migration. Overwrites the project's currentDevice in the IDEA project data and persists it. Use this when a project's current device is wrong — e.g. a freshly created target project that still reports the source device — and you need to force a specific source device before running a migration report.

Note: currentDevice is otherwise derived from the project's .cproject file. A later get_projects(rescan: true) re-derives it from disk and may overwrite this manual value. Use device family names from list_migration_devices().`,
				inputSchema: {
					projectName: z.string().describe('Project name from get_projects(). Identifies which project to update.'),
					sourceDevice: z.enum(deviceList as [string, ...string[]]).describe('Source device family to set as the project current device. Must be one of the families from list_migration_devices().'),
				} as any,
			},
			async ({ projectName, sourceDevice }: any) => {
				const projects = getAllProjectInfos();
				const projectInfo = projects.find((p: any) => p.name === projectName);
				if (!projectInfo) {
					return { content: [{ type: 'text' as const, text: `Project "${projectName}" not found. Call get_projects() to list available projects.` }] };
				}

				setCurrentDevice(projectInfo, sourceDevice);

				const applied = projectInfo.migrationState.currentDevice;
				if (applied !== sourceDevice) {
					return { content: [{ type: 'text' as const, text: `Failed to set current device for project "${projectName}" to "${sourceDevice}". Current device remains "${applied}".` }] };
				}

				return { content: [{ type: 'text' as const, text: `Set current device for project "${projectName}" to "${applied}".` }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.setProjectMigrationDevices && IDEA_MCP_HANDLERS.getAllProjectInfos && IDEA_MCP_HANDLERS.getDeviceList) {
		const setMigrationDevices = IDEA_MCP_HANDLERS.setProjectMigrationDevices;
		const getAllProjectInfos = IDEA_MCP_HANDLERS.getAllProjectInfos;
		const deviceList = IDEA_MCP_HANDLERS.getDeviceList();

		server.registerTool(
			'set_project_migration_devices',
			{
				description: `Set a ${IDEA_MCP_PLATFORM} project's target (migration) device list for device-to-device migration. Overwrites the project's migrationDevices in the IDEA project data and persists it. These are the devices the project will be migrated to; the migration report checks the current (source) device against each of them.

Any entry equal to the project's current device is dropped automatically (you cannot migrate a device to itself), and duplicates are collapsed. Passing an empty array clears all target devices. Use device family names from list_migration_devices().`,
				inputSchema: {
					projectName: z.string().describe('Project name from get_projects(). Identifies which project to update.'),
					migrationDevices: z.array(z.enum(deviceList as [string, ...string[]])).describe('Target device families to migrate to. Each must be one of the families from list_migration_devices(). An empty array clears all targets.'),
				} as any,
			},
			async ({ projectName, migrationDevices }: any) => {
				const projects = getAllProjectInfos();
				const projectInfo = projects.find((p: any) => p.name === projectName);
				if (!projectInfo) {
					return { content: [{ type: 'text' as const, text: `Project "${projectName}" not found. Call get_projects() to list available projects.` }] };
				}

				setMigrationDevices(projectInfo, migrationDevices);

				const applied = projectInfo.migrationState.migrationDevices;
				if (applied.length === 0) {
					return { content: [{ type: 'text' as const, text: `Set migration devices for project "${projectName}" to [] (no target devices).` }] };
				}

				return { content: [{ type: 'text' as const, text: `Set migration devices for project "${projectName}" to [${applied.join(', ')}].` }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.downloadMigrationGuide && IDEA_MCP_HANDLERS.getDeviceList) {
		const downloadMigrationGuide = IDEA_MCP_HANDLERS.downloadMigrationGuide;
		const deviceList = IDEA_MCP_HANDLERS.getDeviceList();

		server.registerTool(
			'download_migration_guide',
			{
				description: `Download the TI any-to-any driverlib migration-guide HTML report for a source→target device pair and save it to a local file.

The report is the diff of driverlib between the two devices (function/register/enum changes) — the same content the migration reports link to. It is fetched from dev.ti.com, so **network access is required**, and an existing file at the output path is overwritten.

Source and target must be different devices, both from list_migration_devices(). \`outputPath\` must be an **absolute** file path including the \`.html\` filename (e.g. a project path from get_projects() joined with a filename) — a relative path is NOT resolved against the workspace and will write to an unpredictable location.`,
				inputSchema: {
					sourceDevice: z.enum(deviceList as [string, ...string[]]).describe('Source device family. Must be one of the families from list_migration_devices() and different from targetDevice.'),
					targetDevice: z.enum(deviceList as [string, ...string[]]).describe('Target device family. Must be one of the families from list_migration_devices() and different from sourceDevice.'),
					outputPath: z.string().describe('Absolute file path (including the .html filename) to write the downloaded guide to. Must be absolute — relative paths are not resolved against the workspace.'),
				} as any,
			},
			async ({ sourceDevice, targetDevice, outputPath }: any) => {
				const result = await downloadMigrationGuide(sourceDevice, targetDevice, outputPath);
				if (result.success) {
					return { content: [{ type: 'text' as const, text: `Downloaded migration guide (${sourceDevice} → ${targetDevice}) to ${result.filePath} (${result.fileSize} bytes).` }] };
				}
				return { content: [{ type: 'text' as const, text: `Error: ${result.error}` }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.getSyscfgModuleMigrationGuide && IDEA_MCP_HANDLERS.getSyscfgModuleSupport && IDEA_MCP_HANDLERS.getDeviceList) {
		const getSyscfgGuide = IDEA_MCP_HANDLERS.getSyscfgModuleMigrationGuide;
		const syscfgSupport = IDEA_MCP_HANDLERS.getSyscfgModuleSupport() as Record<string, { sourceDevices: string[]; targetDevices: string[] }>;
		const modulePairs = Object.keys(syscfgSupport);
		const deviceList = IDEA_MCP_HANDLERS.getDeviceList();

		server.registerTool(
			'get_syscfg_module_migration_guide',
			{
				description: `Get the SysConfig (.syscfg) config migration guide for a peripheral module-to-module migration, as Markdown.

Returns a table mapping each source SysConfig config to its target config (GUI display names, per-option value mappings, and guidance) for the given source→target device pair, plus a companion overview when available.

\`moduleToModule\` is the peripheral pair (e.g. "epwm_mcpwm"). \`ids\` is **optional but highly recommended**: pass the SysConfig config ids you actually need (e.g. the ones present in the project's .syscfg) to scope the result. Omitting \`ids\` returns the ENTIRE module guide, which can be very large (hundreds of rows). Ids not present in the guide are silently ignored.

Not every device pair is supported for a given module. If the device pair is unsupported, the returned error lists the supported source and target devices for that module.`,
				inputSchema: {
					moduleToModule: z.enum(modulePairs as [string, ...string[]]).describe('Peripheral module-to-module pair, e.g. "epwm_mcpwm".'),
					sourceDevice: z.enum(deviceList as [string, ...string[]]).describe('Source device family. Must be a device supported as a source for the chosen moduleToModule pair.'),
					targetDevice: z.enum(deviceList as [string, ...string[]]).describe('Target device family. Must be a device supported as a target for the chosen moduleToModule pair.'),
					ids: z.array(z.string()).optional().describe('Optional but highly recommended: the SysConfig config ids to include. Omit to get the full (potentially very large) module guide. Unknown ids are silently ignored.'),
				} as any,
			},
			async ({ moduleToModule, sourceDevice, targetDevice, ids }: any) => {
				if (!extensionContext) {
					return { content: [{ type: 'text' as const, text: 'Error: extension context is not available.' }] };
				}
				const pairSupport = syscfgSupport[moduleToModule];
				const supportInfo = `Supported for "${moduleToModule}": source devices [${pairSupport.sourceDevices.join(', ')}], target devices [${pairSupport.targetDevices.join(', ')}].`;

				if (!pairSupport.sourceDevices.includes(sourceDevice) || !pairSupport.targetDevices.includes(targetDevice)) {
					return { content: [{ type: 'text' as const, text: `Error: ${sourceDevice} → ${targetDevice} is not a supported migration for "${moduleToModule}". ${supportInfo}` }] };
				}

				const report = await getSyscfgGuide(extensionContext, moduleToModule, sourceDevice, targetDevice, ids);
				if (!report) {
					return { content: [{ type: 'text' as const, text: `Error: could not generate the SysConfig migration guide for ${sourceDevice} → ${targetDevice} ("${moduleToModule}"). ${supportInfo}` }] };
				}
				return { content: [{ type: 'text' as const, text: report }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.addMigrationFolderException && IDEA_MCP_HANDLERS.removeMigrationFolderException && IDEA_MCP_HANDLERS.setMigrationFolderExceptions && IDEA_MCP_HANDLERS.getAllProjectInfos) {
		const addFolderException = IDEA_MCP_HANDLERS.addMigrationFolderException;
		const removeFolderException = IDEA_MCP_HANDLERS.removeMigrationFolderException;
		const setFolderExceptions = IDEA_MCP_HANDLERS.setMigrationFolderExceptions;
		const getAllProjectInfos = IDEA_MCP_HANDLERS.getAllProjectInfos;

		server.registerTool(
			'update_project_file_folder_exceptions',
			{
				description: `Read, add, remove, or replace a ${IDEA_MCP_PLATFORM} project's file/folder migration-exception list — the folders and files excluded from migration checks (their .c/.h files are skipped).

Behavior:
- Omit \`paths\` to read: returns the project's current exception list without changing anything (any operation).
- \`operation: "add"\` (default) — append each path (duplicates ignored).
- \`operation: "remove"\` — remove each matching path from the list.
- \`operation: "set"\` — replace the whole list with \`paths\`; an empty array clears it.

Paths are relative to the project root and stored as given — they do NOT need to exist yet (e.g. a build directory before the first build); non-existent entries are simply ignored during a migration check until they exist.`,
				inputSchema: {
					projectName: z.string().describe('Project name from get_projects(). Identifies which project to update.'),
					operation: z.enum(['add', 'remove', 'set']).optional().describe('add (default) appends, remove deletes matching entries, set replaces the whole list. Ignored when paths is omitted (read-only).'),
					paths: z.array(z.string()).optional().describe('Relative file/folder paths to operate on. Omit to just read the current list.'),
				} as any,
			},
			async ({ projectName, operation, paths }: any) => {
				const projects = getAllProjectInfos();
				const projectInfo = projects.find((p: any) => p.name === projectName);
				if (!projectInfo) {
					return { content: [{ type: 'text' as const, text: `Project "${projectName}" not found. Call get_projects() to list available projects.` }] };
				}

				const currentList = (): string[] => projectInfo.migrationState.migrationCheckFolderExceptions || [];

				// Read-only: no paths provided.
				if (paths === undefined) {
					return { content: [{ type: 'text' as const, text: `File/folder exceptions for project "${projectName}": [${currentList().join(', ')}]` }] };
				}

				const normalized = (paths as string[]).map(normalizeMigrationExceptionPath).filter(p => p);
				const op = operation ?? 'add';
				const summary: string[] = [];

				if (op === 'add') {
					for (const p of normalized) {
						const already = currentList().includes(p);
						addFolderException(p, projectInfo);
						summary.push(`${already ? 'already-present' : 'added'}: ${p}`);
					}
				} else if (op === 'remove') {
					for (const p of normalized) {
						const present = currentList().includes(p);
						removeFolderException(p, projectInfo);
						summary.push(`${present ? 'removed' : 'not-present'}: ${p}`);
					}
				} else {
					setFolderExceptions(normalized, projectInfo);
					summary.push(`set list to ${normalized.length} entr${normalized.length === 1 ? 'y' : 'ies'}`);
				}

				return { content: [{ type: 'text' as const, text: `Updated file/folder exceptions for project "${projectName}" (${op}):\n${summary.join('\n')}\n\nResulting list: [${currentList().join(', ')}]` }] };
			}
		);
	}

	if (IDEA_MCP_HANDLERS.runMigrationCheck && IDEA_MCP_HANDLERS.generateMigrationReport) {
		const runCheck = IDEA_MCP_HANDLERS.runMigrationCheck;
		const genReport = IDEA_MCP_HANDLERS.generateMigrationReport;

		server.registerTool(
			'get_device_migration_report',
			{
				description: `Run a ${IDEA_MCP_PLATFORM} device-to-device migration check on a source file. Scans for API and register symbol changes between the source device and each target device, then generates a structured markdown report.

The report includes:
- Summary table (total issues, auto-fixable count, manual review count)
- Per-issue details: file location (line/col), symbol name, change type, category
- Suggested code fixes for auto-fixable issues
- Links to official TI migration collateral for manual-review issues

Device names are case-insensitive. Use names from list_migration_devices() — pass the device family name, not a specific part number.`,
				inputSchema: {
					filePath: z.string().describe('Absolute path to C/H source file to analyze'),
					sourceDevice: z.string().describe('Source device the code was written for (e.g., "F280013x")'),
					targetDevices: z.array(z.string()).describe('Target devices to check migration against (e.g., ["F28P55x"])'),
				} as any,
			},
			async ({ filePath, sourceDevice, targetDevices }: any) => {
				if (!extensionContext) {
					return { content: [{ type: 'text' as const, text: 'Error: Extension context not available.' }] };
				}

				if (!fs.existsSync(filePath)) {
					return { content: [{ type: 'text' as const, text: `Error: File not found: ${filePath}` }] };
				}

				const uri = vscode.Uri.file(filePath);

				try {
					await runCheck(extensionContext, uri, sourceDevice, targetDevices);
					const report = genReport(false, uri);

					if (!report) {
						return { content: [{ type: 'text' as const, text: 'No migration issues found for the specified file and device combination.' }] };
					}

					return { content: [{ type: 'text' as const, text: report }] };
				} catch (err) {
					const msg = err instanceof Error ? err.message : String(err);
					return { content: [{ type: 'text' as const, text: `Error running migration check: ${msg}` }] };
				}
			}
		);
	}

	if (IDEA_MCP_HANDLERS.runProjectMigrationCheck && IDEA_MCP_HANDLERS.generateProjectMigrationReport && IDEA_MCP_HANDLERS.getAllProjectInfos) {
		const runProjectCheck = IDEA_MCP_HANDLERS.runProjectMigrationCheck;
		const genProjectReport = IDEA_MCP_HANDLERS.generateProjectMigrationReport;
		const getAllProjects = IDEA_MCP_HANDLERS.getAllProjectInfos;

		server.registerTool(
			'get_project_migration_report',
			{
				description: `Run a ${IDEA_MCP_PLATFORM} device-to-device migration check on ALL source files in a project and return a complete multi-file report. Preferred over calling get_device_migration_report() file by file when you need project-wide coverage.

The report includes:
- Per-file issue tables with line/col positions
- Auto-fixable vs. needs-manual-review classification for every issue
- Suggested code fixes for auto-fixable issues
- Migration collateral links for manual-review issues

Use get_projects() first to discover the project name. By default source and target devices are read from the project's migration settings. Optionally pass sourceDevice and/or targetDevices to override those settings for this report only — the override is not saved to the project (a later get_projects/report without overrides reverts to the configured devices).`,
				inputSchema: {
					projectName: z.string().describe('Project name from get_projects(). Used to locate project files and migration device settings.'),
					sourceDevice: z.string().optional().describe('Optional source device override for this report only. If omitted, the project\'s configured current device is used. Use a family name from list_migration_devices().'),
					targetDevices: z.array(z.string()).optional().describe('Optional target device override list for this report only. If omitted, the project\'s configured migration devices are used. Use family names from list_migration_devices().'),
				} as any,
			},
			async ({ projectName, sourceDevice, targetDevices }: any) => {
				if (!extensionContext) {
					return { content: [{ type: 'text' as const, text: 'Error: Extension context not available.' }] };
				}

				try {
					await runProjectCheck(extensionContext, projectName, undefined, undefined, sourceDevice, targetDevices);
					const projects = getAllProjects();
					const projectInfo = projects.find((p: any) => p.name === projectName);
					if (!projectInfo) {
						return { content: [{ type: 'text' as const, text: `Project "${projectName}" not found. Call get_projects() to list available projects.` }] };
					}

					const report = genProjectReport(projectInfo, false, sourceDevice, targetDevices);
					if (!report) {
						return { content: [{ type: 'text' as const, text: `No migration issues found for project "${projectName}". Verify the project has currentDevice and migrationDevices configured.` }] };
					}

					return { content: [{ type: 'text' as const, text: report }] };
				} catch (err) {
					const msg = err instanceof Error ? err.message : String(err);
					return { content: [{ type: 'text' as const, text: `Error running project migration check: ${msg}` }] };
				}
			}
		);
	}

	if (IDEA_MCP_HANDLERS.runBitfieldToDriverlibMigrationCheck && IDEA_MCP_HANDLERS.generateBitfieldToDriverlibMigrationReport) {
		const runBitfieldToDriverlibCheck = IDEA_MCP_HANDLERS.runBitfieldToDriverlibMigrationCheck;
		const genBitfieldToDriverlibReport = IDEA_MCP_HANDLERS.generateBitfieldToDriverlibMigrationReport;

		server.registerTool(
			'get_bitfield_to_driverlib_migration_report',
			{
				description: `Run a ${IDEA_MCP_PLATFORM} bitfield-to-driverlib migration check on a source file. Scans for legacy bitfield register structure accesses (e.g. Regs.FIELD.bit.NAME) and suggests driverlib function replacements.

The report includes:
- Summary statistics (total issues, read/write/access/whole-register counts)
- Per-issue details: register name, bit name, module, fix type, original source pattern
- Suggested driverlib replacement code where available
- Register bit details (shift, mask, description) for manual fixes
- TRM links for register documentation
- Per-issue action checklists

Pass the sourceDevice from get_projects() to identify the device family for register-to-function mapping.`,
				inputSchema: {
					filePath: z.string().describe('Absolute path to C/H source file to analyze for bitfield register accesses'),
					sourceDevice: z.string().describe('Device the code was written for (e.g. "F2837xD"). Use the currentDevice from get_projects().'),
				} as any,
			},
			async ({ filePath, sourceDevice }: any) => {
				if (!fs.existsSync(filePath)) {
					return { content: [{ type: 'text' as const, text: `Error: File not found: ${filePath}` }] };
				}

				const uri = vscode.Uri.file(filePath);

				try {
					await runBitfieldToDriverlibCheck(uri, sourceDevice);
					const report = genBitfieldToDriverlibReport(false);

					if (!report) {
						return { content: [{ type: 'text' as const, text: 'No bitfield register migration issues found in the specified file.' }] };
					}

					return { content: [{ type: 'text' as const, text: report }] };
				} catch (err) {
					const msg = err instanceof Error ? err.message : String(err);
					return { content: [{ type: 'text' as const, text: `Error running bitfield-to-driverlib migration check: ${msg}` }] };
				}
			}
		);
	}

	server.registerTool(
		'get_migration_guide_section',
		{
			description: `Get a section of a downloaded TI driverlib migration-guide HTML report as Markdown.

Given the local path to the HTML file (downloaded in the migration workflow) and a symbol anchor (the fragment from a Migration Collateral URL, e.g. "CMPSS_configFilterHigh"), returns a structured Markdown block describing the change: old/new function signatures, argument changes, removed/added parameters, and the full diff body.

Workflow: download the report once with download_migration_guide, then ALWAYS call this tool with that file path + anchor to read any section.

NEVER read the downloaded HTML raw — it is difflib-mangled and huge. Always use this tool to get a section's Markdown; reading the raw HTML is not allowed.

If the anchor is not found in the report, the result contains "_ERROR: section not found._" — treat this as a fallback signal and try ti-asm-mcp or the local SDK header instead.`,
			inputSchema: {
				htmlPath: z.string().describe('Absolute path to the downloaded migration-guide HTML file (the Migration guide HTML value from c2000-migration.md).'),
				anchor: z.string().describe('Symbol name to look up (e.g. "CMPSS_configFilterHigh"). Matches the #fragment in the Migration Collateral URL.'),
			} as any,
		},
		async ({ htmlPath, anchor }: any) => {
			if (!fs.existsSync(htmlPath)) {
				return { content: [{ type: 'text' as const, text: `Error: File not found: ${htmlPath}` }] };
			}
			try {
				const md = renderMigrationGuideMarkdown(htmlPath, anchor);
				return { content: [{ type: 'text' as const, text: md }] };
			} catch (err) {
				const msg = err instanceof Error ? err.message : String(err);
				return { content: [{ type: 'text' as const, text: `Error getting migration guide section: ${msg}` }] };
			}
		}
	);

	return server;
}

async function upsertJsonServer(
	filePath: string,
	parentKey: string,
	serverEntry: Record<string, unknown>
): Promise<void> {
	const fileExisted = fs.existsSync(filePath);
	let root: Record<string, unknown> = {};

	if (fileExisted) {
		const raw = fs.readFileSync(filePath, 'utf8');
		if (raw.trim().length > 0) {
			try {
				root = JSON.parse(raw);
			} catch {
				const choice = await vscode.window.showWarningMessage(
					`${filePath} exists but is not valid JSON (it may contain comments). Overwrite the whole file?`,
					'Overwrite', 'Cancel'
				);
				if (choice !== 'Overwrite') { return; }
				root = {};
			}
		}
		if (typeof root !== 'object' || root === null || Array.isArray(root)) {
			root = {};
		}
	}

	const existingParent = root[parentKey];
	const parent: Record<string, unknown> =
		typeof existingParent === 'object' && existingParent !== null && !Array.isArray(existingParent)
			? existingParent as Record<string, unknown>
			: {};

	const keyExisted = Object.prototype.hasOwnProperty.call(parent, IDEA_MCP_SERVER_NAME);
	if (keyExisted) {
		const choice = await vscode.window.showWarningMessage(
			`"${IDEA_MCP_SERVER_NAME}" is already configured in ${filePath}. Replace it?`,
			'Replace', 'Cancel'
		);
		if (choice !== 'Replace') { return; }
	}

	parent[IDEA_MCP_SERVER_NAME] = serverEntry;
	root[parentKey] = parent;

	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(root, null, 2) + '\n');

	const verb = keyExisted ? 'Updated' : fileExisted ? `Added ${IDEA_MCP_SERVER_NAME} to` : 'Created';
	vscode.window.showInformationMessage(`${verb} ${filePath}.`);
}

function replaceCodexBlock(content: string, header: string, block: string): string {
	const lines = content.split('\n');
	const start = lines.findIndex(l => l.trim() === header);
	if (start === -1) { return content; }
	let end = start + 1;
	while (end < lines.length && !lines[end].trimStart().startsWith('[')) {
		end++;
	}
	const replLines = block.replace(/\n$/, '').split('\n');
	return [...lines.slice(0, start), ...replLines, ...lines.slice(end)].join('\n');
}

async function upsertCodexToml(filePath: string, url: string): Promise<void> {
	const header = `[mcp_servers.${IDEA_MCP_SERVER_NAME}]`;
	const block = `${header}\nurl = "${url}"\nbearer_token_env_var = "IDEA_MCP_AUTH_TOKEN"\n`;

	const fileExisted = fs.existsSync(filePath);
	let content = fileExisted ? fs.readFileSync(filePath, 'utf8') : '';
	const keyExisted = content.includes(header);

	if (keyExisted) {
		const choice = await vscode.window.showWarningMessage(
			`"${IDEA_MCP_SERVER_NAME}" is already configured in ${filePath}. Replace it?`,
			'Replace', 'Cancel'
		);
		if (choice !== 'Replace') { return; }
		content = replaceCodexBlock(content, header, block);
	} else {
		if (content.length > 0 && !content.endsWith('\n')) { content += '\n'; }
		if (content.length > 0) { content += '\n'; }
		content += block;
	}

	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, content);

	const verb = keyExisted ? 'Updated' : fileExisted ? `Added ${IDEA_MCP_SERVER_NAME} to` : 'Created';
	vscode.window.showInformationMessage(
		`${verb} ${filePath}. Set IDEA_MCP_AUTH_TOKEN=${IDEA_MCP_AUTH_TOKEN} in your shell environment.`
	);
}

export async function registerMcp() {
	const tool = await vscode.window.showQuickPick(
		[
			{ label: 'Claude Code', id: 'claude-code' },
			{ label: 'Cursor', id: 'cursor' },
			{ label: 'GitHub Copilot (VS Code)', id: 'copilot' },
			{ label: 'OpenAI Codex CLI', id: 'codex' },
		],
		{ title: 'Select your AI coding tool', placeHolder: 'Choose a tool to configure' }
	);
	if (!tool) { return; }

	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) {
		vscode.window.showErrorMessage('Open a workspace folder first.');
		return;
	}

	const wsRoot = workspaceFolders[0].uri.fsPath;
	const url = getMcpUrl();

	try {
		if (tool.id === 'codex') {
			await upsertCodexToml(path.join(wsRoot, '.codex', 'config.toml'), url);
			await deployIdeaSkills(extensionContext!, tool.id);
			return;
		}

		const serverEntry = {
			type: 'http',
			url,
			headers: { Authorization: 'Bearer ' + IDEA_MCP_AUTH_TOKEN },
		};

		if (tool.id === 'claude-code') {
			await upsertJsonServer(path.join(wsRoot, '.mcp.json'), 'mcpServers', serverEntry);
		} else if (tool.id === 'cursor') {
			await upsertJsonServer(path.join(wsRoot, '.cursor', 'mcp.json'), 'mcpServers', serverEntry);
		} else {
			await upsertJsonServer(path.join(wsRoot, '.vscode', 'mcp.json'), 'servers', serverEntry);
		}

		await deployIdeaSkills(extensionContext!, tool.id);
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		vscode.window.showErrorMessage(`Failed to register IDEA MCP: ${msg}`);
	}
}

export async function mcpInstructions() {
	const url = getMcpUrl();

	const jsonSnippet = (parentKey: string) => JSON.stringify(
		{
			[parentKey]: {
				[IDEA_MCP_SERVER_NAME]: {
					type: 'http',
					url,
					headers: { Authorization: 'Bearer ' + IDEA_MCP_AUTH_TOKEN },
				},
			},
		},
		null,
		2
	);

	const tomlSnippet = [
		`[mcp_servers.${IDEA_MCP_SERVER_NAME}]`,
		`url = "${url}"`,
		'bearer_token_env_var = "IDEA_MCP_AUTH_TOKEN"',
	].join('\n');

	const content = [
		'# IDEA MCP Connection Instructions',
		'',
		`The IDEA MCP server runs on: **${url}**`,
		'',
		'These are the exact configs written by **' + IDEA_MCP_COMMAND_PREFIX + ': Register IDEA MCP** —',
		'use that command instead of copying these by hand whenever possible.',
		'',
		'## Claude Code — `.mcp.json`',
		'',
		'```json',
		jsonSnippet('mcpServers'),
		'```',
		'',
		'## Cursor — `.cursor/mcp.json`',
		'',
		'```json',
		jsonSnippet('mcpServers'),
		'```',
		'',
		'## GitHub Copilot (VS Code) — `.vscode/mcp.json`',
		'',
		'Note the parent key is `servers`, not `mcpServers`.',
		'',
		'```json',
		jsonSnippet('servers'),
		'```',
		'',
		'## OpenAI Codex CLI — `.codex/config.toml`',
		'',
		'```toml',
		tomlSnippet,
		'```',
		'',
		`Codex reads the token from an environment variable. Set \`IDEA_MCP_AUTH_TOKEN=${IDEA_MCP_AUTH_TOKEN}\` in your shell before launching Codex.`,
		'',
		'Any agent that supports the MCP Streamable HTTP transport can connect',
		'by pointing at the URL above with the bearer token shown. Start the',
		'server first with the **' + IDEA_MCP_COMMAND_PREFIX + ': Enable IDEA MCP** command.',
	].join('\n');

	const doc = await vscode.workspace.openTextDocument({
		language: 'markdown',
		content,
	});
	vscode.window.showTextDocument(doc);
}

export async function enableMcpCommand(showInfo: boolean = true) {
	try {
		if (showInfo) {
			vscode.window.showInformationMessage('Starting IDEA MCP Server...');
		}

		const port = getMcpPort();
		const host = getMcpHost();

		const app = express();
		app.use(express.json());

		app.post('/mcp', authenticate, async (req: express.Request, res: express.Response) => {
			const sessionId = req.headers['mcp-session-id'] as string | undefined;
			let transport: StreamableHTTPServerTransport;

			if (sessionId && TRANSPORTS[sessionId]) {
				transport = TRANSPORTS[sessionId];
			} else if (!sessionId && isInitializeRequest(req.body)) {
				transport = new StreamableHTTPServerTransport({
					sessionIdGenerator: () => randomUUID(),
					onsessioninitialized: (sid) => {
						TRANSPORTS[sid] = transport;
						console.log(`[IDEA-MCP] Session initialized: ${sid}`);
					},
					enableDnsRebindingProtection: true,
					allowedHosts: [`localhost:${port}`, `127.0.0.1:${port}`, 'localhost', '127.0.0.1'],
				});

				transport.onclose = () => {
					if (transport.sessionId) {
						delete TRANSPORTS[transport.sessionId];
						console.log(`[IDEA-MCP] Session closed: ${transport.sessionId}`);
					}
				};

				const server = createMcpServerInstance();
				await server.connect(transport);
			} else {
				res.status(400).json({
					jsonrpc: '2.0',
					error: { code: -32000, message: 'Bad Request: no valid session ID provided' },
					id: null,
				});
				return;
			}

			await transport.handleRequest(req, res, req.body);
		});

		app.get('/mcp', authenticate, async (req: express.Request, res: express.Response) => {
			const sessionId = req.headers['mcp-session-id'] as string | undefined;
			if (!sessionId || !TRANSPORTS[sessionId]) {
				res.status(400).send('Invalid or missing session ID');
				return;
			}
			await TRANSPORTS[sessionId].handleRequest(req, res);
		});

		app.delete('/mcp', authenticate, async (req: express.Request, res: express.Response) => {
			const sessionId = req.headers['mcp-session-id'] as string | undefined;
			if (!sessionId || !TRANSPORTS[sessionId]) {
				res.status(400).send('Invalid or missing session ID');
				return;
			}
			await TRANSPORTS[sessionId].handleRequest(req, res);
		});

		httpServer = app.listen(port, host, () => {
			if (showInfo) {
				vscode.window.showInformationMessage(`IDEA MCP Server running on http://${host}:${port}/mcp`);
			}
			console.log(`[IDEA-MCP] Server started on http://${host}:${port}/mcp`);
		});

		httpServer.on('error', (err: NodeJS.ErrnoException) => {
			if (err.code === 'EADDRINUSE') {
				vscode.window.showErrorMessage(
					`Port ${port} is already in use. Stop the running server first.`
				);
			} else {
				vscode.window.showErrorMessage(`IDEA MCP server error: ${err.message}`);
			}
			console.error('[IDEA-MCP] HTTP server error:', err);
		});

	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		vscode.window.showErrorMessage(`Failed to enable IDEA MCP: ${message}`);
		console.error('[IDEA-MCP] Enable error:', err);
	}
}

export async function disableMcpCommand() {
	return new Promise<void>((resolve) => {
		Object.keys(TRANSPORTS).forEach((sid) => {
			delete TRANSPORTS[sid];
		});

		if (httpServer) {
			httpServer.close((err?: NodeJS.ErrnoException | null) => {
				if (err) {
					vscode.window.showErrorMessage(`Error stopping IDEA MCP server: ${err.message}`);
					console.error('[IDEA-MCP] Server close error:', err);
				} else {
					vscode.window.showInformationMessage('IDEA MCP Server disabled');
					console.log('[IDEA-MCP] Server stopped');
				}
				httpServer = null;
				resolve();
			});
		} else {
			vscode.window.showWarningMessage('IDEA MCP Server is not running');
			resolve();
		}
	});
}

export function ideaMcpInit(context: vscode.ExtensionContext) {
	extensionContext = context;

	const enableCmd = vscode.commands.registerCommand(IDEA_MCP_VSCODE_CONFIG + '.enableIdeaMcp', async () => {
		await enableMcpCommand();
	});

	const disableCmd = vscode.commands.registerCommand(IDEA_MCP_VSCODE_CONFIG + '.disableIdeaMcp', async () => {
		await disableMcpCommand();
	});

	const checkCmd = vscode.commands.registerCommand(IDEA_MCP_VSCODE_CONFIG + '.checkIdeaMcp', () => {
		checkMcp();
	});

	const registerCmd = vscode.commands.registerCommand(IDEA_MCP_VSCODE_CONFIG + '.registerIdeaMcp', async () => {
		await registerMcp();
	});

	const instructionsCmd = vscode.commands.registerCommand(IDEA_MCP_VSCODE_CONFIG + '.ideaMcpInstructions', async () => {
		await mcpInstructions();
	});

	context.subscriptions.push(
		enableCmd,
		disableCmd,
		checkCmd,
		registerCmd,
		instructionsCmd
	);

	enableMcpCommand(false);
}
