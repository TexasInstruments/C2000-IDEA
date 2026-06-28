import * as vscode from 'vscode';
import { isRunning as isIdeaMcpRunning } from './mcp/idea-mcp';
import { isRunning as isTiAsmMcpRunning } from './mcp/ti-asm-mcp';

const POLL_INTERVAL_MS = 2000;

const IDEA_MCP_ENABLE_CMD  = 'c2000-idea.enableIdeaMcp';
const IDEA_MCP_DISABLE_CMD = 'c2000-idea.disableIdeaMcp';
const ASM_MCP_ENABLE_CMD   = 'c2000-idea.enableTiAsmMcp';
const ASM_MCP_DISABLE_CMD  = 'c2000-idea.disableTiAsmMcp';
const TOGGLE_CMD           = 'c2000-idea.mcpStatusBarToggle';

function dot(running: boolean): string {
	return running ? '$(circle-filled)' : '$(circle-outline)';
}

/** QuickPick listing both MCP servers — select one to toggle it. */
async function showTogglePick(): Promise<void> {
	const ideaRunning = isIdeaMcpRunning();
	const asmRunning  = isTiAsmMcpRunning();

	const items: vscode.QuickPickItem[] = [
		{
			label:       `${dot(ideaRunning)} IDEA MCP`,
			description: ideaRunning ? 'Running — click to disable' : 'Stopped — click to enable',
		},
		{
			label:       `${dot(asmRunning)} TI-ASM MCP`,
			description: asmRunning ? 'Running — click to disable' : 'Stopped — click to enable',
		},
	];

	const picked = await vscode.window.showQuickPick(items, {
		title:       'MCP Servers',
		placeHolder: 'Select a server to enable or disable it',
	});

	if (!picked) { return; }

	if (picked.label.includes('IDEA MCP')) {
		await vscode.commands.executeCommand(ideaRunning ? IDEA_MCP_DISABLE_CMD : IDEA_MCP_ENABLE_CMD);
	} else {
		await vscode.commands.executeCommand(asmRunning ? ASM_MCP_DISABLE_CMD : ASM_MCP_ENABLE_CMD);
	}
}

/**
 * Single combined status-bar item showing both MCP server states side-by-side:
 *   MCP Servers: ○ IDEA MCP  ○ TI-ASM MCP
 * Clicking opens a QuickPick to enable or disable either server.
 * State is polled every 2 s via a pure in-memory null check (negligible cost).
 */
export function mcpStatusBarInit(context: vscode.ExtensionContext): void {

	const toggleCmd = vscode.commands.registerCommand(TOGGLE_CMD, showTogglePick);

	const item = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		100,
	);
	item.name    = 'C2000 MCP Servers';
	item.command = TOGGLE_CMD;
	item.show();

	function refresh(): void {
		const ideaRunning = isIdeaMcpRunning();
		const asmRunning  = isTiAsmMcpRunning();
		item.text    = `MCP Servers: ${dot(ideaRunning)} IDEA MCP  ${dot(asmRunning)} TI-ASM MCP`;
		item.tooltip = `IDEA MCP: ${ideaRunning ? 'running' : 'stopped'}  |  TI-ASM MCP: ${asmRunning ? 'running' : 'stopped'}\nClick to enable or disable`;
	}

	refresh();

	const timer = setInterval(refresh, POLL_INTERVAL_MS);

	context.subscriptions.push(
		toggleCmd,
		item,
		{ dispose: () => clearInterval(timer) },
	);
}
