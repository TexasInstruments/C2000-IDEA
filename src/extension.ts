import * as vscode from 'vscode';
import { CollateralTreeView } from './collateralTreeView';
import * as register from './register';
import * as migration from './migration';
import * as project from './utilities/project';
import { ProjectTreeView } from './projectTreeView';
import * as interrupt from './interrupt';
import { FeatureTreeView } from './featureTreeView';
import * as packageJson from './utilities/packageJson';
import * as info from './utilities/info';
import * as walkthroughs from './walkthroughs';
import { CollateralAdditionalTreeView } from './collateralAdditionalTreeView';
import * as utils from './utilities/utils';
import { tiAsmMcpInit } from './mcp/ti-asm-mcp';
import { ideaMcpInit } from './mcp/idea-mcp';
import { tiAsmSkillsInit } from './skills/ti-asm-skills';
import { mcpStatusBarInit } from './mcp/mcp-status-bar';

let isTheia : boolean = false;

function safeInit(name: string, fn: () => void) {
	try {
		fn();
	} catch (e) {
		console.error(`[C2000-IDEA] Failed to initialize ${name}:`, e);
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	packageJson.loadPackageJSON(context);

	isTheia = await utils.isTheiaEnv();

	safeInit('project', () => project.projectSetup(context));
	safeInit('register', () => register.registerSetup(context));
	safeInit('interrupt', () => interrupt.interruptSetup(context));
	safeInit('walkthroughs', () => walkthroughs.walkthroughsSetup(context));

	if (project.projectGetCurrentDevice())
	{
		safeInit('registerAutoCompletes', () =>
			register.registerSetupAutoCompletes(project.projectGetCurrentDevice(), context));
		safeInit('interruptAutoCompletes', () =>
			interrupt.interruptSetupAutoCompletes(project.projectGetCurrentDevice(), context));
	}

	safeInit('migration', () => migration.migrationSetup(context));

	safeInit('tiAsmMcp', () => tiAsmMcpInit(context));
	safeInit('ideaMcp', () => ideaMcpInit(context));
	safeInit('tiAsmSkills', () => tiAsmSkillsInit(context));
	safeInit('mcpStatusBar', () => mcpStatusBarInit(context));

	let disposableOpenCollateral = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_COLLATERAL, (args) => {
		if (args && args.link)
		{
			const collateralConfig = vscode.workspace.getConfiguration('c2000-idea.collateral');
			if (args.html && isTheia && collateralConfig.useInternalBrowser)
			{
				vscode.commands.executeCommand('ccs.open.browser', args.link);
			}
			else
			{
				vscode.env.openExternal(vscode.Uri.parse(args.link));
			}
		}
	});


	let debugDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_DEBUG, () => {
		//console.log("debugged");
		//vscode.window.showInformationMessage("Debug");
		// vscode.commands.getCommands().then(val=>{
		// 	console.log(val);
		// });
		//vscode.commands.executeCommand('ccs.open.browser', "https://www.ti.com/document-viewer/TMS320F280025C-Q1/datasheet#GUID-3C72F23D-966B-4D6E-8228-DF14845CCC41/TITLE-SPRSP45SPRS945_PINDIAG_SEC");
	});


	context.subscriptions.push(
		disposableOpenCollateral, debugDisposal);

	safeInit('CollateralTreeView', () => new CollateralTreeView(context));
	safeInit('CollateralAdditionalTreeView', () => new CollateralAdditionalTreeView(context));
	safeInit('ProjectTreeView', () => new ProjectTreeView(context));
	safeInit('FeatureTreeView', () => new FeatureTreeView(context));

	if (vscode.window.activeTextEditor)
	{
		project.projectOnChangeActiveTextEditor(vscode.window.activeTextEditor);
	}

}

// This method is called when your extension is deactivated
export function deactivate() {}
