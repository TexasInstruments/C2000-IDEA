import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { SKILL_VSCODE_CONFIG } from './ti-asm-skills-config';

const SKILLS_SRC = path.join('submodules', 'ti_asm_mcp', 'docs', 'skills');

const TOOL_ITEMS = [
	{ label: 'Claude Code',              id: 'claude-code' },
	{ label: 'Cursor',                   id: 'cursor' },
	{ label: 'GitHub Copilot (VS Code)', id: 'copilot' },
	{ label: 'OpenAI Codex CLI',         id: 'codex' },
];

function skillsDst(toolId: string, wsRoot: string): string {
	if (toolId === 'claude-code') { return path.join(wsRoot, '.claude', 'skills'); }
	if (toolId === 'cursor')      { return path.join(wsRoot, '.cursor', 'skills'); }
	if (toolId === 'copilot')     { return path.join(wsRoot, '.github', 'skills'); }
	return path.join(wsRoot, '.agents', 'skills');
}

// The individual skill folders this extension owns (e.g. "ti-asm-mcu-config").
// Only these subfolders are ever created or removed — sibling skills the user
// keeps in the same skills directory are never touched.
function ownedSkillNames(src: string): string[] {
	return fs.readdirSync(src, { withFileTypes: true })
		.filter(entry => entry.isDirectory())
		.map(entry => entry.name);
}

function copyDirSync(src: string, dst: string): void {
	fs.mkdirSync(dst, { recursive: true });
	for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
		const srcPath = path.join(src, entry.name);
		const dstPath = path.join(dst, entry.name);
		if (entry.isDirectory()) {
			copyDirSync(srcPath, dstPath);
		} else {
			fs.copyFileSync(srcPath, dstPath);
		}
	}
}

function removeDirSync(dir: string): void {
	if (fs.existsSync(dir)) {
		fs.rmSync(dir, { recursive: true, force: true });
	}
}

export async function registerSkillsCommand(context: vscode.ExtensionContext): Promise<void> {
	const tool = await vscode.window.showQuickPick(
		TOOL_ITEMS,
		{ title: 'Select your AI coding tool', placeHolder: 'Choose a tool to configure' }
	);
	if (!tool) { return; }

	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) {
		vscode.window.showErrorMessage('Open a workspace folder first.');
		return;
	}

	const src = path.join(context.extensionPath, SKILLS_SRC);
	const dst = skillsDst(tool.id, workspaceFolders[0].uri.fsPath);
	const skillNames = ownedSkillNames(src);

	// Only guard against overwriting the specific skill folders we own —
	// not the shared parent skills directory, which may hold other skills.
	const existing = skillNames.filter(name => fs.existsSync(path.join(dst, name)));
	if (existing.length > 0) {
		const choice = await vscode.window.showWarningMessage(
			`Skill(s) already installed: ${existing.join(', ')}. Overwrite?`,
			'Overwrite', 'Cancel'
		);
		if (choice !== 'Overwrite') { return; }
	}

	try {
		for (const name of skillNames) {
			copyDirSync(path.join(src, name), path.join(dst, name));
		}
		vscode.window.showInformationMessage(`TI ASM skills registered in ${dst}`);
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		vscode.window.showErrorMessage(`Failed to register skills: ${msg}`);
	}
}

export async function unregisterSkillsCommand(context: vscode.ExtensionContext): Promise<void> {
	const tool = await vscode.window.showQuickPick(
		TOOL_ITEMS,
		{ title: 'Select your AI coding tool', placeHolder: 'Choose a tool to remove skills from' }
	);
	if (!tool) { return; }

	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) {
		vscode.window.showErrorMessage('Open a workspace folder first.');
		return;
	}

	const src = path.join(context.extensionPath, SKILLS_SRC);
	const dst = skillsDst(tool.id, workspaceFolders[0].uri.fsPath);

	try {
		// Remove only the skill folders we own, leaving the parent skills
		// directory and any sibling skills the user added intact.
		for (const name of ownedSkillNames(src)) {
			removeDirSync(path.join(dst, name));
		}
		vscode.window.showInformationMessage('TI ASM skills unregistered.');
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		vscode.window.showErrorMessage(`Failed to unregister skills: ${msg}`);
	}
}

export function tiAsmSkillsInit(context: vscode.ExtensionContext) {
	const registerSkillsCmd = vscode.commands.registerCommand(SKILL_VSCODE_CONFIG + '.registerSkills', async () => {
		await registerSkillsCommand(context);
	});

	const unregisterSkillsCmd = vscode.commands.registerCommand(SKILL_VSCODE_CONFIG + '.unregisterSkills', async () => {
		await unregisterSkillsCommand(context);
	});

	context.subscriptions.push(
		registerSkillsCmd,
		unregisterSkillsCmd,
	);
}