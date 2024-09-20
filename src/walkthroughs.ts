import * as vscode from 'vscode';
import * as info from './utilities/info';

export function walkthroughsSetup(context: vscode.ExtensionContext){

	let disposableOpenWalkthrough = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_WALKTHROUGH, () => {
		vscode.commands.executeCommand(`workbench.action.openWalkthrough`, `ti.c2000-idea#` + info.C2000_IDEA_WALKTHROUGH_BASIC_WALKTHROUGH, false);
	});

	let disposableOpenInterruptWalkthrough = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_INTERRUPT_WALKTHROUGH, () => {
		vscode.commands.executeCommand(`workbench.action.openWalkthrough`, `ti.c2000-idea#` + info.C2000_IDEA_WALKTHROUGH_INTERRUPT_WALKTHROUGH, false);
	});

	let disposableOpenRegisterWalkthrough = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_REGISTER_WALKTHROUGH, () => {
		vscode.commands.executeCommand(`workbench.action.openWalkthrough`, `ti.c2000-idea#` + info.C2000_IDEA_WALKTHROUGH_REGISTER_WALKTHROUGH, false);
	});

	let disposableOpenRegisterVisionWalkthrough = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_REGISTER_VISION_WALKTHROUGH, () => {
		vscode.commands.executeCommand(`workbench.action.openWalkthrough`, `ti.c2000-idea#` + info.C2000_IDEA_WALKTHROUGH_REGISTER_VISION_WALKTHROUGH, false);
	});

	let disposableOpenViewContainer = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_VIEW_CONTAINER, () => {
		vscode.commands.executeCommand(info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".focus");
	});

    
	context.subscriptions.push(
		disposableOpenInterruptWalkthrough, disposableOpenWalkthrough, disposableOpenViewContainer, disposableOpenRegisterVisionWalkthrough,
		disposableOpenRegisterWalkthrough);
}