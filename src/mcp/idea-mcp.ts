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

const SERVER_INSTRUCTIONS = `${IDEA_MCP_PLATFORM} device-to-device migration analysis tool. Checks source files for API/register changes when migrating between ${IDEA_MCP_PLATFORM} MCU devices.

REQUIRED FLOW:
1. Call list_migration_devices() to get the list of supported device families.
2. Call get_device_migration_report() with the file path, source device, and target device(s).
3. The tool returns a structured markdown report with every migration issue found: location, type, severity, suggested fix, and links to TI migration collateral.
4. Issues marked "Auto-fixable" have a concrete code replacement you can apply directly. Issues marked "Needs manual review" require reading the linked migration guide.

RULES:
- Always call list_migration_devices() first to discover valid device names. Do not guess device names.
- Device names are case-insensitive (internally normalized to lowercase).
- Not every source→target pair has migration data. If no issues are returned, either the file has no migration-relevant APIs or the device pair has no migration JSON data.
- Running get_device_migration_report() populates VS Code diagnostics (squiggly underlines) in the editor as a side effect.`;

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
				return { content: [{ type: 'text' as const, text: devices.join('\n') }] };
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
					const report = genReport(false);

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

export async function enableMcpCommand() {
	try {
		vscode.window.showInformationMessage('Starting IDEA MCP Server...');

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
			vscode.window.showInformationMessage(`IDEA MCP Server running on http://${host}:${port}/mcp`);
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
}
