import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { IDEA_SKILLS_SRC } from './idea-skills-config';

function skillsDst(toolId: string, wsRoot: string): string {
	if (toolId === 'claude-code') { return path.join(wsRoot, '.claude', 'skills'); }
	if (toolId === 'cursor')      { return path.join(wsRoot, '.cursor', 'skills'); }
	if (toolId === 'copilot')     { return path.join(wsRoot, '.github', 'skills'); }
	return path.join(wsRoot, '.agents', 'skills');
}

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

export async function deployIdeaSkills(context: vscode.ExtensionContext, toolId: string): Promise<void> {
	const workspaceFolders = vscode.workspace.workspaceFolders;
	if (!workspaceFolders) { return; }

	const src = path.join(context.extensionPath, IDEA_SKILLS_SRC);
	if (!fs.existsSync(src)) { return; }

	const dst = skillsDst(toolId, workspaceFolders[0].uri.fsPath);
	const skillNames = ownedSkillNames(src);

	try {
		for (const name of skillNames) {
			copyDirSync(path.join(src, name), path.join(dst, name));
		}
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		vscode.window.showWarningMessage(`Failed to install IDEA skills: ${msg}`);
	}
}
