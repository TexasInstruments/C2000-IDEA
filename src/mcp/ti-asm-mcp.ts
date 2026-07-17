import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as http from "http";
import express from 'express';
import { randomUUID } from 'crypto';
import { createMcpServer } from '../../submodules/ti_asm_mcp/src/mcp-server';
import { loadAllIndices } from '../../submodules/ti_asm_mcp/src/index-loader';
import { DeviceIndex } from '../../submodules/ti_asm_mcp/src/types';
import { ASM_MCP_AUTH_TOKEN, COMMAND_PREFIX, MCP_VSCODE_CONFIG } from './ti-asm-mcp-config';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';

let httpServer: http.Server|null = null;

const TRANSPORTS: Record<string, StreamableHTTPServerTransport> = {};
let indices: Map<string, DeviceIndex> | null = null;

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction): void {
	const header = req.headers.authorization;
	const token = header?.startsWith('Bearer ') ? header.slice(7) : undefined;

	if (!token || token !== ASM_MCP_AUTH_TOKEN) {
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
	return vscode.workspace.getConfiguration(MCP_VSCODE_CONFIG + '.mcp').get('port', 55000);
}

export function getMcpHost(): string {
	return vscode.workspace.getConfiguration(MCP_VSCODE_CONFIG + '.mcp').get('host', 'localhost');
}

export function getMcpUrl(): string {
	const port = getMcpPort();
	const host = getMcpHost();
	return `http://${host}:${port}/mcp`;
}

export function checkMcp() {
	if (isRunning()) {
		vscode.window.showInformationMessage(`MCP server is running on ${getMcpUrl()}.`);
	} else {
		vscode.window.showInformationMessage('MCP server is not running.');
	}
}

function createMcpServerInstance() {
	if (!indices) { throw new Error('Indices not loaded'); }
	return createMcpServer(indices);
}

const SERVER_NAME = 'ti-asm-mcp';

// Upsert the ti-asm-mcp entry into a JSON MCP config, preserving every other
// key in the file. parentKey is "mcpServers" (Claude Code, Cursor) or "servers"
// (Copilot). Only our own server entry is added or replaced — the rest of the
// file is left untouched.
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

	const keyExisted = Object.prototype.hasOwnProperty.call(parent, SERVER_NAME);
	if (keyExisted) {
		const choice = await vscode.window.showWarningMessage(
			`"${SERVER_NAME}" is already configured in ${filePath}. Replace it?`,
			'Replace', 'Cancel'
		);
		if (choice !== 'Replace') { return; }
	}

	parent[SERVER_NAME] = serverEntry;
	root[parentKey] = parent;

	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(root, null, 2) + '\n');

	const verb = keyExisted ? 'Updated' : fileExisted ? 'Added ti-asm-mcp to' : 'Created';
	vscode.window.showInformationMessage(`${verb} ${filePath}.`);
}

// Replace the [mcp_servers.ti-asm-mcp] table (header line through the line
// before the next table header or EOF) with the given block.
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

// Upsert the ti-asm-mcp table into Codex's config.toml, preserving the rest of
// the file. TOML has no JSON parser here, so we operate at the table-block level.
async function upsertCodexToml(filePath: string, url: string): Promise<void> {
	const header = '[mcp_servers.ti-asm-mcp]';
	const block = `${header}\nurl = "${url}"\nbearer_token_env_var = "ASM_MCP_AUTH_TOKEN"\n`;

	const fileExisted = fs.existsSync(filePath);
	let content = fileExisted ? fs.readFileSync(filePath, 'utf8') : '';
	const keyExisted = content.includes(header);

	if (keyExisted) {
		const choice = await vscode.window.showWarningMessage(
			`"${SERVER_NAME}" is already configured in ${filePath}. Replace it?`,
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

	const verb = keyExisted ? 'Updated' : fileExisted ? 'Added ti-asm-mcp to' : 'Created';
	vscode.window.showInformationMessage(
		`${verb} ${filePath}. Set ASM_MCP_AUTH_TOKEN=${ASM_MCP_AUTH_TOKEN} in your shell environment.`
	);
}

export async function registerMcp() {
	const tool = await vscode.window.showQuickPick(
		[
			{ label: 'Claude Code',              id: 'claude-code' },
			{ label: 'Cursor',                   id: 'cursor' },
			{ label: 'GitHub Copilot (VS Code)', id: 'copilot' },
			{ label: 'OpenAI Codex CLI',         id: 'codex' },
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
			headers: { Authorization: 'Bearer ' + ASM_MCP_AUTH_TOKEN },
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
		vscode.window.showErrorMessage(`Failed to register MCP: ${msg}`);
	}
}

export async function mcpInstructions() {
	const url = getMcpUrl();

	const jsonSnippet = (parentKey: string) => JSON.stringify(
		{
			[parentKey]: {
				'ti-asm-mcp': {
					type: 'http',
					url,
					headers: { Authorization: 'Bearer ' + ASM_MCP_AUTH_TOKEN },
				},
			},
		},
		null,
		2
	);

	const tomlSnippet = [
		'[mcp_servers.ti-asm-mcp]',
		`url = "${url}"`,
		'bearer_token_env_var = "ASM_MCP_AUTH_TOKEN"',
	].join('\n');

	const content = [
		'# MCP Connection Instructions',
		'',
		`The MCP server runs on: **${url}**`,
		'',
		'These are the exact configs written by **' + COMMAND_PREFIX + ': Register MCP** —',
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
		`Codex reads the token from an environment variable. Set \`ASM_MCP_AUTH_TOKEN=${ASM_MCP_AUTH_TOKEN}\` in your shell before launching Codex.`,
		'',
		'Any agent that supports the MCP Streamable HTTP transport can connect',
		'by pointing at the URL above with the bearer token shown. Start the',
		'server first with the **' + COMMAND_PREFIX + ': Enable MCP** command.',
	].join('\n');

	const doc = await vscode.workspace.openTextDocument({
		language: 'markdown',
		content,
	});
	vscode.window.showTextDocument(doc);
}

export async function enableMcpCommand(context: vscode.ExtensionContext, showInfo: boolean = true) {
	try {
		if (showInfo) {
			vscode.window.showInformationMessage('Starting TI ASM MCP Server...');
		}

		// Get MCP configuration from extension settings
		const config = vscode.workspace.getConfiguration(MCP_VSCODE_CONFIG + '.mcp');
		const port = config.get<number>('port') || 55000;
		const host = config.get<string>('host') || 'localhost';

		// Resolve trm-index path (bundled data)
		const trmIndexPath = path.join(context.extensionPath, 'submodules', 'ti_asm_mcp', 'trm-index');

		// Load device indices once and cache for all sessions
		console.log(`Loading TRM indices from ${trmIndexPath}`);
		indices = await loadAllIndices(trmIndexPath);

		if (indices.size === 0) {
			throw new Error('No device indices loaded');
		}
		console.log(`Loaded ${indices.size} device(s)`);

		// Create Express app with session-based routing
		const app = express();
		app.use(express.json());

		// POST /mcp — client→server messages (incl. initialize handshake)
		app.post('/mcp', authenticate, async (req: express.Request, res: express.Response) => {
			const sessionId = req.headers['mcp-session-id'] as string | undefined;
			let transport: StreamableHTTPServerTransport;

			if (sessionId && TRANSPORTS[sessionId]) {
				// Reuse transport for existing session
				transport = TRANSPORTS[sessionId];
			} else if (!sessionId && isInitializeRequest(req.body)) {
				// New client handshake → create isolated session
				transport = new StreamableHTTPServerTransport({
					sessionIdGenerator: () => randomUUID(),
					onsessioninitialized: (sid) => {
						TRANSPORTS[sid] = transport;
						console.log(`[MCP] Session initialized: ${sid}`);
					},
					enableDnsRebindingProtection: true,
					allowedHosts: [`localhost:${port}`, `127.0.0.1:${port}`, 'localhost', '127.0.0.1'],
				});

				transport.onclose = () => {
					if (transport.sessionId) {
						delete TRANSPORTS[transport.sessionId];
						console.log(`[MCP] Session closed: ${transport.sessionId}`);
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

		// GET /mcp (server→client SSE stream)
		app.get('/mcp', authenticate, async (req: express.Request, res: express.Response) => {
			const sessionId = req.headers['mcp-session-id'] as string | undefined;
			if (!sessionId || !TRANSPORTS[sessionId]) {
				res.status(400).send('Invalid or missing session ID');
				return;
			}
			await TRANSPORTS[sessionId].handleRequest(req, res);
		});

		// DELETE /mcp (session teardown)
		app.delete('/mcp', authenticate, async (req: express.Request, res: express.Response) => {
			const sessionId = req.headers['mcp-session-id'] as string | undefined;
			if (!sessionId || !TRANSPORTS[sessionId]) {
				res.status(400).send('Invalid or missing session ID');
				return;
			}
			await TRANSPORTS[sessionId].handleRequest(req, res);
		});

		// Start HTTP server
		httpServer = app.listen(port, host, () => {
			if (showInfo) {
				vscode.window.showInformationMessage(`TI ASM MCP Server running on http://${host}:${port}/mcp`);
			}
			console.log(`[MCP] Server started with multi-session support on http://${host}:${port}/mcp`);
		});

		// Handle server errors
		httpServer.on('error', (err: NodeJS.ErrnoException) => {
			if (err.code === 'EADDRINUSE') {
				vscode.window.showErrorMessage(
					`TI ASM MCP Port ${port} is already in use. Stop the running server first.`
				);
			} else {
				vscode.window.showErrorMessage(`TI ASM MCP Server error: ${err.message}`);
			}
			console.error('[MCP] HTTP server error:', err);
		});

	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		vscode.window.showErrorMessage(`TI ASM MCP Failed to enable MCP: ${message}`);
		console.error('[MCP] Enable error:', err);
	}
}

export async function disableMcpCommand() {
	return new Promise<void>((resolve) => {
		// Clean up all active sessions
		Object.keys(TRANSPORTS).forEach((sid) => {
			delete TRANSPORTS[sid];
		});

		if (httpServer) {
			httpServer.close((err?: NodeJS.ErrnoException | null) => {
				if (err) {
					vscode.window.showErrorMessage(`Error stopping server: ${err.message}`);
					console.error('[MCP] Server close error:', err);
				} else {
					vscode.window.showInformationMessage('MCP Server disabled');
					console.log('[MCP] Server stopped');
				}
				httpServer = null;
				indices = null; // Clear cached indices
				resolve();
			});
		} else {
			vscode.window.showWarningMessage('MCP Server is not running');
			resolve();
		}
	});
}

export function tiAsmMcpInit(context: vscode.ExtensionContext) {

	const enableMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.enableTiAsmMcp', async () => {
		await enableMcpCommand(context);
	});

	const disableMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.disableTiAsmMcp', async () => {
		await disableMcpCommand();
	});

	const checkMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.checkTiAsmMcp', () => {
		checkMcp();
	});

	const registerMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.registerTiAsmMcp', async () => {
		await registerMcp();
	});

	const mcpInstructionsCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.tiAsmMcpInstructions', async () => {
		await mcpInstructions();
	});

	context.subscriptions.push(
		enableMcpCmd,
		disableMcpCmd,
		checkMcpCmd,
		registerMcpCmd,
		mcpInstructionsCmd
	);

	enableMcpCommand(context, false);
}
