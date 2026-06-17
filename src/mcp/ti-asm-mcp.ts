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
	let filePath: string;
	let content: string;
	let successMessage: string;

	if (tool.id === 'claude-code') {
		filePath = path.join(wsRoot, '.mcp.json');
		content = JSON.stringify({
			mcpServers: {
				'ti-asm-mcp': { type: 'http', url, headers: { Authorization: 'Bearer ' + ASM_MCP_AUTH_TOKEN } },
			},
		}, null, 2) + '\n';
		successMessage = `Wrote .mcp.json to ${filePath}.`;
	} else if (tool.id === 'cursor') {
		filePath = path.join(wsRoot, '.cursor', 'mcp.json');
		content = JSON.stringify({
			mcpServers: {
				'ti-asm-mcp': { type: 'http', url, headers: { Authorization: 'Bearer ' + ASM_MCP_AUTH_TOKEN } },
			},
		}, null, 2) + '\n';
		successMessage = `Wrote .cursor/mcp.json to ${filePath}.`;
	} else if (tool.id === 'copilot') {
		filePath = path.join(wsRoot, '.vscode', 'mcp.json');
		content = JSON.stringify({
			servers: {
				'ti-asm-mcp': { type: 'http', url, headers: { Authorization: 'Bearer ' + ASM_MCP_AUTH_TOKEN } },
			},
		}, null, 2) + '\n';
		successMessage = `Wrote .vscode/mcp.json to ${filePath}.`;
	} else {
		filePath = path.join(wsRoot, '.codex', 'config.toml');
		content = `[mcp_servers.ti-asm-mcp]\nurl = "${url}"\nbearer_token_env_var = "ASM_MCP_AUTH_TOKEN"\n`;
		successMessage = `Wrote .codex/config.toml to ${filePath}. Set ASM_MCP_AUTH_TOKEN=${ASM_MCP_AUTH_TOKEN} in your shell environment.`;
	}

	if (fs.existsSync(filePath)) {
		const choice = await vscode.window.showWarningMessage(
			`${filePath} already exists. Overwrite?`,
			'Overwrite', 'Cancel'
		);
		if (choice !== 'Overwrite') { return; }
	}

	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, content);
	vscode.window.showInformationMessage(successMessage);
}

export async function mcpInstructions() {
	const url = getMcpUrl();
	const snippet = JSON.stringify(
		{ mcpServers: { 'ti-asm-mcp': { type: 'http', url } } },
		null,
		2
	);
	const content = [
		'# MCP Connection Instructions',
		'',
		`The MCP server runs on: **${url}**`,
		'',
		'## Add to .mcp.json (Claude Code, any MCP-compatible agent)',
		'',
		'```json',
		snippet,
		'```',
		'',
		'Any agent that supports the MCP Streamable HTTP transport can connect',
		'by pointing at the URL above. Start the server first with the',
		'**' + COMMAND_PREFIX + ': Enable MCP** command.',
	].join('\n');

	const doc = await vscode.workspace.openTextDocument({
		language: 'markdown',
		content,
	});
	vscode.window.showTextDocument(doc);
}

export async function enableMcpCommand(context: vscode.ExtensionContext) {
	try {
		vscode.window.showInformationMessage('Starting MCP Server...');

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
			vscode.window.showInformationMessage(`MCP Server running on http://${host}:${port}/mcp`);
			console.log(`[MCP] Server started with multi-session support on http://${host}:${port}/mcp`);
		});

		// Handle server errors
		httpServer.on('error', (err: NodeJS.ErrnoException) => {
			if (err.code === 'EADDRINUSE') {
				vscode.window.showErrorMessage(
					`Port ${port} is already in use. Stop the running server first.`
				);
			} else {
				vscode.window.showErrorMessage(`Server error: ${err.message}`);
			}
			console.error('[MCP] HTTP server error:', err);
		});

	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		vscode.window.showErrorMessage(`Failed to enable MCP: ${message}`);
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

	const enableMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.enableMcp', async () => {
		await enableMcpCommand(context);
	});

	const disableMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.disableMcp', async () => {
		await disableMcpCommand();
	});

	const checkMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.checkMcp', () => {
		checkMcp();
	});

	const registerMcpCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.registerMcp', async () => {
		await registerMcp();
	});

	const mcpInstructionsCmd = vscode.commands.registerCommand(MCP_VSCODE_CONFIG + '.mcpInstructions', async () => {
		await mcpInstructions();
	});

	
	context.subscriptions.push(
		enableMcpCmd,
		disableMcpCmd,
		checkMcpCmd,
		registerMcpCmd,
		mcpInstructionsCmd
	);
}