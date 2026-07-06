import * as vscode from 'vscode';
import { isRunning as isIdeaMcpRunning } from './idea-mcp';
import { isRunning as isTiAsmMcpRunning } from './ti-asm-mcp';
import { IDEA_MCP_VSCODE_CONFIG } from './idea-mcp-config';
import { MCP_VSCODE_CONFIG } from './ti-asm-mcp-config';
import { SKILL_VSCODE_CONFIG } from '../skills/ti-asm-skills-config';

const POLL_INTERVAL_MS = 2000;

const IDEA_MCP_LABEL = 'IDEA MCP';
const ASM_MCP_LABEL  = 'TI-ASM MCP';

const IDEA_MCP_ENABLE_CMD  = `${IDEA_MCP_VSCODE_CONFIG}.enableIdeaMcp`;
const IDEA_MCP_DISABLE_CMD = `${IDEA_MCP_VSCODE_CONFIG}.disableIdeaMcp`;
const ASM_MCP_ENABLE_CMD   = `${MCP_VSCODE_CONFIG}.enableTiAsmMcp`;
const ASM_MCP_DISABLE_CMD  = `${MCP_VSCODE_CONFIG}.disableTiAsmMcp`;
const TOGGLE_CMD           = `${IDEA_MCP_VSCODE_CONFIG}.mcpStatusBarToggle`;

/** QuickPick row — toggle items carry a server discriminator; register items carry a cmd string. */
interface McpServerPick extends vscode.QuickPickItem {
	server?: 'idea' | 'asm';
	cmd?:    string;
}

function dot(running: boolean): string {
	return running ? '$(circle-filled)' : '$(circle-outline)';
}

function recentTag(key: string, lastKey: string | undefined): string {
	return key === lastKey ? '  $(history) recently used' : '';
}

let lastPickedKey: string | undefined;

/** QuickPick listing both MCP servers — select one to toggle it, or choose a registration action. */
async function showTogglePick(): Promise<void> {
	const ideaRunning = isIdeaMcpRunning();
	const asmRunning  = isTiAsmMcpRunning();

	const items: McpServerPick[] = [
		{
			server:      'idea',
			label:       `${dot(ideaRunning)} ${IDEA_MCP_LABEL}`,
			description: ideaRunning ? 'Running — click to disable' : 'Stopped — click to enable',
		},
		{
			server:      'asm',
			label:       `${dot(asmRunning)} ${ASM_MCP_LABEL}`,
			description: asmRunning ? 'Running — click to disable' : 'Stopped — click to enable',
		},
		{ kind: vscode.QuickPickItemKind.Separator, label: 'Register' },
		{
			cmd:         `${IDEA_MCP_VSCODE_CONFIG}.registerIdeaMcp`,
			label:       '$(plug) Register IDEA MCP',
			description: 'Register IDEA MCP with your agent tool' + recentTag('registerIdeaMcp', lastPickedKey),
		},
		{
			cmd:         `${MCP_VSCODE_CONFIG}.registerTiAsmMcp`,
			label:       '$(plug) Register TI ASM MCP',
			description: 'Register TI ASM MCP with your agent tool' + recentTag('registerTiAsmMcp', lastPickedKey),
		},
		{
			cmd:         `${SKILL_VSCODE_CONFIG}.registerSkills`,
			label:       '$(plug) Register Skills',
			description: 'Register C2000-IDEA skills with your agent tool' + recentTag('registerSkills', lastPickedKey),
		},
	];

	const picked = await vscode.window.showQuickPick(items, {
		title:       'MCP Servers',
		placeHolder: 'Select a server to enable or disable it',
	});

	if (!picked) { return; }

	if (picked.cmd) {
		lastPickedKey = picked.cmd.split('.').pop();
		await vscode.commands.executeCommand(picked.cmd);
	} else if (picked.server === 'idea') {
		await vscode.commands.executeCommand(ideaRunning ? IDEA_MCP_DISABLE_CMD : IDEA_MCP_ENABLE_CMD);
	} else {
		await vscode.commands.executeCommand(asmRunning ? ASM_MCP_DISABLE_CMD : ASM_MCP_ENABLE_CMD);
	}
}

/** Update the status-bar item text and tooltip from the current MCP running states. */
function mcpStatusBarRefresh(item: vscode.StatusBarItem): void {
	const ideaRunning = isIdeaMcpRunning();
	const asmRunning  = isTiAsmMcpRunning();
	item.text    = `MCP Servers: ${dot(ideaRunning)} ${IDEA_MCP_LABEL}  ${dot(asmRunning)} ${ASM_MCP_LABEL}`;
	item.tooltip = `${IDEA_MCP_LABEL}: ${ideaRunning ? 'running' : 'stopped'}  |  ${ASM_MCP_LABEL}: ${asmRunning ? 'running' : 'stopped'}\nClick to enable or disable`;
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

	mcpStatusBarRefresh(item);

	const timer = setInterval(mcpStatusBarRefresh.bind(undefined, item), POLL_INTERVAL_MS);

	context.subscriptions.push(
		toggleCmd,
		item,
		{ dispose: clearInterval.bind(undefined, timer) },
	);
}
