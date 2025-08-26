import * as vscode from 'vscode';
import * as project from './utilities/project';
import * as utils from './utilities/utils';
import * as info from './utilities/info';
import * as preprocessor from './utilities/preprocessor';
import * as deviceData from './deviceData';
import * as register from './register';
import path = require('path');

const outputChannel = vscode.window.createOutputChannel("My Extension Logs");
const C2000_MIGRATION_DIAGNOSTIC_COLLECTION_NAME = "C2000 Migration";
const C2000_MIGRATION_INCOMPAT_CODE = "C2000_MIGRATION_INCOMPAT";
const C2000_MIGRATION_INCOMPAT_SOURCE = "C2000 Migration Check";
const C2000_MIGRATION_C2000WARE_VERSION = "C2000Ware_6_00_00_00";
const C2000_MIGRATION_C2000WARE_OLDVERSION = "C2000Ware_5_04_00_00";
const C2000_MIGRATION_C29SDK_VERSION = "F29H85X-SDK";
let C2000_AUTO_MIGRATION_GUIDE_LINK = "https://dev.ti.com/tirex/content/" + C2000_MIGRATION_C2000WARE_VERSION + "/docs/" + C2000_MIGRATION_C2000WARE_VERSION + "_Migration_Guides/html_pages/";

const lastMigrationCheckTimestampPerURI: {[uri:string]: number } = {}; //Object to store duration time for each file

const C2000_MIGRATION_IS_CONTINUOUS_CHECK_MODE_CONTEXT = 'c2000-idea.isContinuousMigrationCheckMode';
let migrationIsContinuousCheckStatus = false;
function migrationUpdateIsContinuousCheckMode(status: boolean)
{
	migrationIsContinuousCheckStatus = status;
	vscode.commands.executeCommand('setContext', C2000_MIGRATION_IS_CONTINUOUS_CHECK_MODE_CONTEXT, migrationIsContinuousCheckStatus);
}

// interface MigrationAction {
// 	uri: vscode.Uri,
// 	diagnostic
// 	codeAction: vscode.CodeAction
// }

export var migrationDiagnosticsCollection : vscode.DiagnosticCollection;

interface MigrationCodeActions {
	uri: vscode.Uri,
	codeAction: vscode.CodeAction
}
var migrationCodeActions : MigrationCodeActions[] = [];

interface MigrationCodeLens {
	uri: vscode.Uri,
	codeLens: vscode.CodeLens
}
var migrationCodeLenses: MigrationCodeLens[] = [];

let migrationCodelensProvider: MigrationCodelensProvider;
let migrationCodeActionProvider: MigrationCodeActionProvider;

export function migrationGetAutoMigrationGuideMainPage()
{
    return C2000_AUTO_MIGRATION_GUIDE_LINK + "MainDriverlib.html";
}

function migrationRunMigrationCheckOnProjectWithProgress(context: vscode.ExtensionContext, projectName?: string) {
	return vscode.window.withProgress({
		location: vscode.ProgressLocation.Notification,
		title: "Running Project Migration",
		cancellable: true
	}, (progress, token) => {
		token.onCancellationRequested(() => {
			console.log("User canceled the migration check.");
		});

	return migrationRunMigrationCheckOnProject(context, projectName, progress, token) || Promise.resolve();
	});

};

function migrationRunMigrationCheckOnActiveTextEditorWithProgress(context: vscode.ExtensionContext) {
	return vscode.window.withProgress({
		location: vscode.ProgressLocation.Notification,
		title: "Running Migration Check on File",
		cancellable: false
	}, async (progress) => {
		await migrationRunMigrationCheckOnActiveTextEditor(context, progress);
	});

};

export function migrationSetup(context: vscode.ExtensionContext)
{
    migrationDiagnosticsCollection = vscode.languages.createDiagnosticCollection(C2000_MIGRATION_DIAGNOSTIC_COLLECTION_NAME);
	context.subscriptions.push(migrationDiagnosticsCollection);

	migrationCodeActionProvider = new MigrationCodeActionProvider();
    var migrationDisposableCodeActionProvider = vscode.languages.registerCodeActionsProvider('c', migrationCodeActionProvider, {
        providedCodeActionKinds: MigrationCodeActionProvider.providedCodeActionKinds
    });

	context.subscriptions.push(
		migrationDisposableCodeActionProvider
	);

	migrationCodelensProvider = new MigrationCodelensProvider();
	vscode.languages.registerCodeLensProvider("c", migrationCodelensProvider);

	
	let disposableOpenAutoMigrationGuide = vscode.commands.registerCommand(info.C2000_IDEA_CMD_OPEN_AUTO_MIGRATION_GUIDE, (args) => {
		
		vscode.env.openExternal(vscode.Uri.parse(migrationGetAutoMigrationGuideMainPage()));
				
	});

	let enableContinuousMigrationCheckDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK, () => {		
		migrationEnableContininuousMigrationCheck(context);
	});

	let disableContinuousMigrationCheckDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_DISABLE_CONT_MIGRATION_CHECK, () => {
		migrationDisableContininuousMigrationCheck(context);
	});

	let runMigrationCheckDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK, () => {
		migrationRunMigrationCheckOnActiveTextEditorWithProgress(context);
    });


	let runProjectMigrationCheckDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK_ON_PROJECT, (args) => {
	
		if (args && args.treeItem && args.projectInfo) {
			migrationRunMigrationCheckOnProjectWithProgress(context, args.projectInfo.name);
		} else {
			migrationRunMigrationCheckOnProjectWithProgress(context, undefined);
		}
	});
	
	let setUpMigrationCommand = vscode.commands.registerCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION, (args) => {
		if (args && args.treeItem && args.projectInfo)
		{
			migrationSetupProjectMigrationSettings(context, args.projectInfo.name);
		}
		else {
			migrationSetupProjectMigrationSettings(context, undefined);
		}
	});

	let setUpProjectCurrentDeviceCommand = vscode.commands.registerCommand(info.C2000_IDEA_CMD_SETUP_PROJECT_CURRENT_DEVICE, (args) => {
		if (args && args.treeItem && args.projectInfo)
		{
			migrationSetupProjectCurrentDevice(context, args.projectInfo.name);
		}
		else {
			migrationSetupProjectCurrentDevice(context);
		}
	});

	let clearAllDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_CLEAR_ALL_MIGRATION_DATA, ()=>{
		
		utils.yesNoUserPick("Are you sure you want to clear all migration results?").then((yesNo) => {
			if (yesNo)
			{
				migrationClearAllData(context);
			}
		});
	});

	
	let ignoreMigrationIncompatDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_IGNORE_MIGRATION_INCOMPAT, 
		( args : {
			code:string, 
			projectInfo:project.ProjectInfo
			}
		) => {
			project.addMigrationCheckException(args.code, args.projectInfo);
		}
	);

	// Added this ignoreMigrationFolderIncompatDisposal function for future enhancement of ignoring a file from explorer window 
	let ignoreMigrationFolderIncompatDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_IGNORE_FOLDER_MIGRATION_INCOMPAT, 
		( args : {
			code:string, 
			projectInfo:project.ProjectInfo
			}
		) => {
			project.addMigrationCheckFolderException(args.code, args.projectInfo);
		}
	);

	let exportMigrationDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_EXPORT_MIGRATION_REPORT, (args)=>{
		if (args && args.treeItem && args.projectInfo)
		{
			exportProjectMigrationDiagnostics(args.projectInfo, lastMigrationCheckTimestampPerURI);
		}
		else {
			exportMigrationDiagnostics();
		}
	});

	context.subscriptions.push( 
		disposableOpenAutoMigrationGuide,
		enableContinuousMigrationCheckDisposable,
		disableContinuousMigrationCheckDisposable,
		runMigrationCheckDisposable,
		runProjectMigrationCheckDisposable,
		setUpMigrationCommand,
		setUpProjectCurrentDeviceCommand,
		clearAllDisposal,
		exportMigrationDisposal,
		ignoreMigrationIncompatDisposal,
		ignoreMigrationFolderIncompatDisposal
	);

}


export async function migrationSetupProjectCurrentDevice(context: vscode.ExtensionContext, projectName?:string){
	var selectedProject: string | undefined;

	if (projectName)
	{
		selectedProject = projectName;
	}
	else
	{
		selectedProject = await project.selectProject();
	}

    
	if (!selectedProject)
	{
		return;
	}

	var projectInfo = project.allProjectInfos.filter(projectInfo => projectInfo.name === selectedProject)[0];

	var device = await utils.selectDeviceFamily();
	if (device)
	{
		project.updateProjectCurrentDevice(projectInfo, device);
	}
}

export async function migrationSetupProjectMigrationSettings(context: vscode.ExtensionContext, projectName?:string){
	var selectedProject: string | undefined;

	if (projectName)
	{
		selectedProject = projectName;
	}
	else
	{
		selectedProject = await project.selectProject();
	}

    
	if (!selectedProject)
	{
		return;
	}

	var projectInfo = project.allProjectInfos.filter(projectInfo => projectInfo.name === selectedProject)[0];

	const scriptPathOnDisk = vscode.Uri.joinPath(context.extensionUri, 'migration_setup_page', 'main.js');
	const cssPathOnDisk = vscode.Uri.joinPath(context.extensionUri, 'migration_setup_page', 'main.css');


	const column = vscode.window.activeTextEditor
		? vscode.window.activeTextEditor.viewColumn
		: undefined;

	const panel = vscode.window.createWebviewPanel(
		"c2000MigrationView",
		"Migration Setup - " + projectName,
		column || vscode.ViewColumn.One
	);

	var currentDeviceRadio = "";
	for (var deviceName of deviceData.DEVICE_LIST)
	{
		let checkedOrDisabled = "";
		if (projectInfo.migrationState.currentDevice === deviceName)
		{
			checkedOrDisabled = 'checked="true"';
		}
		else
		{
			checkedOrDisabled = 'disabled="true"';
		}
		currentDeviceRadio += `<input type="radio" id="current_${deviceName}" ${checkedOrDisabled}  name="currentDevice" value="${deviceName}">${deviceName}<br>\n`;
	}

	var migrationDeviceCheck = "";
	for (var deviceName of deviceData.DEVICE_LIST)
	{
		let disabled = "";
		if (projectInfo.migrationState.currentDevice === deviceName)
		{
			disabled = 'disabled="true"';
		}
		migrationDeviceCheck += `<input type="checkbox" id="migrate_${deviceName}" ${disabled} name="migrateToDevice" value="${deviceName}">${deviceName}<br>\n`;
	}

	const nonce = utils.getNonce();

	// And the uri we use to load this script in the webview
	const scriptUri = panel.webview.asWebviewUri(scriptPathOnDisk);
	const cssUri = panel.webview.asWebviewUri(cssPathOnDisk);
	panel.webview.options = {
		// Enable javascript in the webview
		enableScripts: true,

		// And restrict the webview to only loading content from our extension's `migration_setup_page` directory.
		localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'migration_setup_page')]
	};

	panel.webview.html = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${panel.webview.cspSource}; img-src ${panel.webview.cspSource} https:; script-src 'nonce-${nonce}';">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link href="${cssUri}" rel="stylesheet">
			<title>myWebView</title>
		</head>
		<body>
			<h1>${selectedProject}</h1>
			<div class="grid-container">
				<div> 
					<fieldset>  
						<legend>Select your current device</legend>  
						${currentDeviceRadio}
					</fieldset>
				</div>
				<div>
					<fieldset>  
						<legend>What devices do you want to migrate across?</legend>  
						${migrationDeviceCheck}
					</fieldset>
				</div>
			</div>
			</br>
			<fieldset class="full-width">  
				<legend>Migration Check Folders and Files Exception (the following folders and files will be ignored - Seperate each with ";")</legend> 
				<textarea id="migrationCheckFolderExceptions" rows="5"></textarea>
			</fieldset>
			</br>
			</br>
			<fieldset class="full-width">  
				<legend>Migration Check Exceptions (the following symbols will be ignored)</legend> 
				<textarea id="migrationCheckExceptions" rows="5"></textarea>
			</fieldset>
			</br>
			<button id="newMigrationDeviceSave">Save</button>

			<script nonce="${nonce}" src="${scriptUri}"></script>
		</body>
		</html>
		`;

	panel.webview.onDidReceiveMessage(
		message => {
			if (message.migrationState)
			{
				projectInfo.migrationState = message.migrationState;
				project.saveProjects(context);
			}
		}
	);
	if (projectInfo)
	{
		panel.webview.postMessage(
			{ 
				migrationState: projectInfo.migrationState,
			}
		);
	}

}

export function migrationClearAllData(context: vscode.ExtensionContext)
{
    migrationCodeActions = [];
	migrationCodeLenses = [];
	migrationDiagnosticsCollection.clear();
}

var migrationDisposableOnDidChangeActiveTextEditor: vscode.Disposable;
var migrationDisposableOnDidChangeTextDocument: vscode.Disposable;
var migrationDisposableOnDidCloseTextDocument: vscode.Disposable;

function migrationDisableContininuousMigrationCheck(context: vscode.ExtensionContext)
{
	migrationClearAllData(context);

    var index = context.subscriptions.indexOf(migrationDisposableOnDidChangeActiveTextEditor);
    if (index >= 0)
    {
        context.subscriptions[index].dispose();
    }
    index = context.subscriptions.indexOf(migrationDisposableOnDidChangeTextDocument);
    if (index >= 0)
    {
        context.subscriptions[index].dispose();
    }
    index = context.subscriptions.indexOf(migrationDisposableOnDidCloseTextDocument);
    if (index >= 0)
    {
        context.subscriptions[index].dispose();
    }
	
	migrationUpdateIsContinuousCheckMode(false);
}

function countLeadingSpaces(text: string): number {
	const match = text.match(/^\s*/); 
return match ? match[0].length : 0; 
}

async function migrationEnableContininuousMigrationCheck(context: vscode.ExtensionContext)
{
	let uris: Set<vscode.Uri> = new Set();
	let timer: NodeJS.Timeout;
	let eventCoalesceDelay = 3000;

	

	if (migrationIsContinuousCheckStatus)
	{
		vscode.window.showInformationMessage("C2000 continuous migration checker is already enabled");
		return;
	}

	migrationUpdateIsContinuousCheckMode(true);
	
	migrationClearAllData(context);

	let currentDevice: string = "";
	let migrationDevices: string[] = [];
	

	if (vscode.window.activeTextEditor)
	{
		var projectInfo = project.projectGetUriProjectInfo(vscode.window.activeTextEditor.document.uri);
		if(projectInfo){
			currentDevice = projectInfo.migrationState.currentDevice;
			migrationDevices = projectInfo.migrationState.migrationDevices;
		}
		
		if (currentDevice && (migrationDevices.length > 0))
		{
			await migrationRunMigrationCheckOnUri(context, vscode.window.activeTextEditor.document.uri, currentDevice, migrationDevices);
		}
	}

	async function proccessAllMigrationChecks()
	{
		// console.log("Executing URIs - Start");
		for (var uri of uris)
		{
			migrationCodeActions = migrationCodeActions.filter(migrationCodeAction => migrationCodeAction.uri.path !== uri.path);
			migrationCodeLenses = migrationCodeLenses.filter(migrationCodeLens => migrationCodeLens.uri.path !== uri.path);
			var projectInfo = project.projectGetUriProjectInfo(uri);
			if(projectInfo){
				currentDevice = projectInfo.migrationState.currentDevice;
				migrationDevices = projectInfo.migrationState.migrationDevices;
			}
			else
			{
				currentDevice = "";
				migrationDevices = [];
			}
			await migrationRunMigrationCheckOnUri(context, uri, currentDevice, migrationDevices);
		}
		migrationCodelensProvider.codeLensesEventEmitter.fire();
		uris.clear();
		// console.log("Executing URIs - Done");
	}
	
    migrationDisposableOnDidChangeActiveTextEditor = vscode.window.onDidChangeActiveTextEditor(async editor => {
        if (editor) {
			// console.log("Active Change - Start - " + editor.document.uri.fsPath);
			clearTimeout(timer);
			timer = setTimeout(proccessAllMigrationChecks, eventCoalesceDelay);
			uris.add(editor.document.uri);
			// console.log("Active Change - Done - " + editor.document.uri.fsPath);
        }
    });

    migrationDisposableOnDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(async textDocumentChangeEvent => {
		
		// console.log("Doc Change - Start - " + textDocumentChangeEvent.document.uri.fsPath);
		clearTimeout(timer);
		timer = setTimeout(proccessAllMigrationChecks, eventCoalesceDelay);
		uris.add(textDocumentChangeEvent.document.uri);
		//
		// This occurs when a text document is open and the content of it is changed.
		// The changed document could be different than the ACTIVE text document
		// If one of the open documents changes outside of the VSCODE, this event still fires
		//
		// console.log("Doc Change - End - " + textDocumentChangeEvent.document.uri.fsPath);
    });

    migrationDisposableOnDidCloseTextDocument = vscode.workspace.onDidCloseTextDocument(textdoc => {
		// if (uris.has(textdoc.uri)){
		// 	uris.delete(textdoc.uri);
		// }
    });

    context.subscriptions.push(
        migrationDisposableOnDidChangeActiveTextEditor, 
        migrationDisposableOnDidChangeTextDocument,
        migrationDisposableOnDidCloseTextDocument
    );
}

export async function migrationRunMigrationCheckOnProject(context: vscode.ExtensionContext, projectName?:string, progress?: vscode.Progress<{ message?: string; increment?: number }>, token?: vscode.CancellationToken)
{
	outputChannel.appendLine("Starting migrationRunMigrationCheckOnProject...");
	var selectedProject: string | undefined;

	if (projectName)
	{
		selectedProject = projectName;
	}
	else
	{
		selectedProject = await project.selectProject();
	}

	if (selectedProject)
	{
        var projectInfo = project.allProjectInfos.filter(projectInfo => projectInfo.name === selectedProject)[0];

		// Log the entire projectInfo object
		//outputChannel.appendLine("Project Info: " + JSON.stringify(projectInfo));

		var currentDevice = projectInfo.migrationState.currentDevice;
		var migrationDevices = projectInfo.migrationState.migrationDevices;
        var projectUri = projectInfo.uri; 
        const projectFsPath = projectUri.fsPath || projectUri.path;
		var projectFsPathUri = vscode.Uri.file(projectFsPath);
		var projectCCodeUris = await utils.getFileTypesInFolder(projectFsPathUri, [".c", ".h"]);	
		var projectCCodeUrisIgnored = await utils.getIgnoredProjectCCodeUris(projectFsPath, projectInfo.migrationState.migrationCheckFolderExceptions || []);
		
		migrationCodeActions = [];
		migrationCodeLenses = [];
		migrationDiagnosticsCollection.clear();

		// If there are files to process, report progress
		if (progress) {
			progress.report({ increment: 0, message: "Starting migration check..." });
		}

		const totalFilesafterignoring = (projectCCodeUris.length - projectCCodeUrisIgnored.length); 
		outputChannel.appendLine("Total Project Files :"+ projectCCodeUris.length);
		outputChannel.appendLine("Total Project Files to Migrate:"+ totalFilesafterignoring);

		if(totalFilesafterignoring < 0){
			vscode.window.showErrorMessage("Error: " + projectName + " - Wrong info on Migration Check Folders and Files Exception");
			return;
		}

		let migrationFilesIndex = 0;
		for (let projectCCodeUrisIndex = 0; projectCCodeUrisIndex < projectCCodeUris.length; projectCCodeUrisIndex++) {
			if (token?.isCancellationRequested) {
				outputChannel.appendLine("Migration check was cancelled.");
				vscode.window.showInformationMessage("Migration check cancelled on " + projectName + " project");
                return; 
            }
			var ccodeUri = projectCCodeUris[projectCCodeUrisIndex]; 
			if(!(projectCCodeUrisIgnored.map(uri => uri.toString()).includes(ccodeUri.toString()))){
				try {
					outputChannel.appendLine(`Processing file: ${ccodeUri.fsPath}`);
					await migrationRunMigrationCheckOnUri(context, ccodeUri, currentDevice, migrationDevices);
					outputChannel.appendLine(`Migration Time taken: ${lastMigrationCheckTimestampPerURI[ccodeUri.fsPath] || "N/A"} seconds`);
					const increment = Math.round(((1) / totalFilesafterignoring) * 100);
					const incrementStatus = Math.round(((migrationFilesIndex + 1) / totalFilesafterignoring) * 100);
					if (progress) {
						progress.report({ increment: increment, message: `Processing(${incrementStatus}%)  ${ccodeUri.fsPath}` });
					}
				} 
				catch (error) {
				}
				migrationFilesIndex++;
			}
		}
		outputChannel.appendLine(`Migration check completed on ${projectName}`);

		// Final progress report
		if (progress) 
			{
				progress.report({ increment: 100, message: "Migration check completed." });
				vscode.window.showInformationMessage("Migration check completed on " + projectName + " project");
			}
	}
	else {
    }
	outputChannel.show();
}



export async function getMigrationJSON(context: vscode.ExtensionContext, currentDevice: string, migrationDevice:  string)
{
	var jsonMigrationDataName = currentDevice.toLowerCase() + "_" + migrationDevice.toLocaleLowerCase() + ".json";
	var jsonMigrationData = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", jsonMigrationDataName));
	const jsonMigrationDataContent = Buffer.from(jsonMigrationData).toString('utf8');
	var jsonMigration : MigrationData = JSON.parse(jsonMigrationDataContent);

	return jsonMigration;
}

export async function getMigrationResolutionJSON(context: vscode.ExtensionContext, currentDevice: string, migrationDevice:  string)
{

	var jsonMigrationResolutionDataName = currentDevice.toLowerCase() + "_" + migrationDevice.toLocaleLowerCase() + "_register_migration.json";
	var jsonMigrationResolutionData = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", jsonMigrationResolutionDataName));
	const jsonMigrationResolutionDataContent = Buffer.from(jsonMigrationResolutionData).toString('utf8');
	var jsonMigrationResolution: MigrationResolutionData = JSON.parse(jsonMigrationResolutionDataContent);

	return jsonMigrationResolution;
}

export async function getMigrationDriverlibResolutionJSON(context: vscode.ExtensionContext, currentDevice: string, migrationDevice:  string)
{
	var jsonMigrationDriverlibResolutionDataName = "f28x_f29h85x_migration.json"; //To be updated for future releases
	var jsonMigrationDriverlibResolution: MigrationDriverlibResolutionData = {
			changed: [],
			removed: []
		};
	
		// Check for F29H85x device migration
		if(utils.isDeviceInMigrationResolutionList(migrationDevice)){
			var jsonF28F29MigrationData = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", jsonMigrationDriverlibResolutionDataName));
			const jsonF28F29MigrationDataContent = Buffer.from(jsonF28F29MigrationData).toString('utf8');
			const f28F29Data: MigrationDriverlibResolutionData = JSON.parse(jsonF28F29MigrationDataContent);
			// Merge the data
			jsonMigrationDriverlibResolution.changed = jsonMigrationDriverlibResolution.changed.concat(f28F29Data.changed);
			jsonMigrationDriverlibResolution.removed = jsonMigrationDriverlibResolution.removed.concat(f28F29Data.removed);
		} 

		// Check for EPWM_MCPWM device migration
		if(utils.isDeviceInMCPWMMigrationResolutionList(migrationDevice)){
			var jsonEPWMMCPWMMigrationData = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", "epwm_mcpwm_migration.json"));
			const jsonEPWMMCPWMMigrationDataContent = Buffer.from(jsonEPWMMCPWMMigrationData).toString('utf8');
			const epwmMcpwmData: MigrationDriverlibResolutionData = JSON.parse(jsonEPWMMCPWMMigrationDataContent);
			// Merge the data
  			jsonMigrationDriverlibResolution.changed = jsonMigrationDriverlibResolution.changed.concat(epwmMcpwmData.changed);
  			jsonMigrationDriverlibResolution.removed = jsonMigrationDriverlibResolution.removed.concat(epwmMcpwmData.removed);
		} 
		
		// If the migration device is neither F29H85x nor in MCPWM list, return an empty resolution data
		if (!utils.isDeviceInMigrationResolutionList(migrationDevice) && !utils.isDeviceInMCPWMMigrationResolutionList(migrationDevice)) {
			jsonMigrationDriverlibResolution = { changed: [], removed: [] }; // Empty arrays
		}

	return jsonMigrationDriverlibResolution;
}


export async function functionmigrationEnhancement(code: string, trimmedLineText: string, context: vscode.ExtensionContext, currentDevice: string, migrationDevice: string): Promise<{trimmedLineEnhancedText: string, message: string}>
{
	let functionMapFile = "";
	let argChangeFile = "";

	if (utils.isDeviceInMCPWMMigrationResolutionList(migrationDevice)) {
		functionMapFile = "functionMap_epwm_mcpwm.json";
		argChangeFile = "epwm_mcpwm_migration.json";
	} else if (utils.isDeviceInMigrationResolutionList(migrationDevice)) {
		functionMapFile = "functionMap_f28x_f29x.json";
		argChangeFile = "f28x_f29h85x_migration.json";
	}

	const [functionMapBuffer, argChangeBuffer] = await Promise.all([
		vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", functionMapFile)),
		vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", argChangeFile)),
	]);
	
	const functionMappings: FunctionMap[] = JSON.parse(Buffer.from(functionMapBuffer).toString('utf-8'));
	const argChangeJson: { changed: ArgChange[] } = JSON.parse(Buffer.from(argChangeBuffer).toString('utf-8'));
	const changedArgs = argChangeJson.changed || [];
	
	const cleanLine = trimmedLineText.replace(/\u00A0/g, ' ').trim();
	const mapping = functionMappings.find(entry => entry.fromFunction === code);
	
	if (!mapping) {
		return { trimmedLineEnhancedText: trimmedLineText, message: '' };
	}
	
	const match = await utils.extractFunctionArgs(cleanLine, code);
	if (!match) {
		return {
			trimmedLineEnhancedText: trimmedLineText,
			message: `🚨 Currently tool is not capable for multi line functions migration support! Please, modify to single line function call`
		};
	}
	
	const { fullCall, argsStr } = match;
	
	const actualArgs = await utils.splitArgs(argsStr);
	let migratedCall = mapping.toFunction;
	const unmatchedArgs: string[] = [];
	
	for (let i = 0; i < mapping.fromArgs.length; i++) {
		const fromArg = mapping.fromArgs[i];
		const actualArg = actualArgs[i] ?? '';
	
		// Handle special placeholder e.g. arg1_change
		const changePlaceholderRegex = new RegExp(`\\b${fromArg}_change\\b`); //searching for param_change where b represents boundary
		if (changePlaceholderRegex.test(migratedCall)) {
			const parts = actualArg.split('|').map(p => p.trim());
			const transformedParts = parts.map(part => {
				const match = changedArgs.find(entry => entry.code.trim() === part);
				if (!match) {
					unmatchedArgs.push(part);
				}
				return match ? match.fix : part;
			});
			const finalArg = transformedParts.join(' | ');
			migratedCall = migratedCall.replace(changePlaceholderRegex, finalArg);
			continue;
		}
	
		// Handle expressions like arg3 * 2
		/* 
		\\b  			Starts and Ends with a word boundary
		\\s* 			Matches zero or more whitespace characters
		[*\\/\\+\\-]  	Matches one of these operators: * (multiply), / (divide), + (add), or - (subtract)
		\\d+			Matches one or more digits
		g				Global flag, meaning it will find all matches in the text, not just the first one
		*/
		const expressionRegex = new RegExp(`\\b${fromArg}(\\s*[*\\/\\+\\-]\\s*\\d+)?\\b`, 'g');
		migratedCall = migratedCall.replace(expressionRegex, (match, op) => {

			if (op) {
				const cleanOp = op.replace(/\s+/g, '');
				return `(${actualArg})${cleanOp}`;
			}
			return actualArg;
		});
	}
	
	const updatedLine = cleanLine.replace(fullCall, migratedCall);
	const message = unmatchedArgs.length > 0
		? `⚠️ No matching migration for: ${unmatchedArgs.join(', ')}`
		: '';
	return {
		trimmedLineEnhancedText: updatedLine,
		message
	};
}

function migrationFindAllLineNumbersWithCodeChange(documentText: string, allCodesSet: Set<string>): number[] {

	allCodesSet.add('_DEVICE_MIGRATION_');
	const allCodesSetArray = Array.from(allCodesSet).map(code => code.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
	const regexPattern = `\\b(${allCodesSetArray.join('|')})\\b`;
	const regex = new RegExp(`.*?(${regexPattern}).*`, 'gm'); 
	const relevantLineNumbers: number[] = [];
	let match;

	while ((match = regex.exec(documentText)) !== null) {
    	const lineNumber= documentText.substr(0, match.index).split('\n').length; // Calculate line number
		if (!relevantLineNumbers.includes(lineNumber)) {
			relevantLineNumbers.push(lineNumber);
		}
	}

	return relevantLineNumbers.length > 0 ? relevantLineNumbers.map(lineNumber => lineNumber - 1) : [-1];

}

export async function migrationSDKVersionUpdate(currentDevice: string, migrationDevice: string): Promise<{ from: string, to: string}> {

	let fromSDK = currentDevice.includes("F29") ? C2000_MIGRATION_C29SDK_VERSION : C2000_MIGRATION_C2000WARE_VERSION;
	const toSDK	  = migrationDevice.includes("F29") ? C2000_MIGRATION_C29SDK_VERSION : C2000_MIGRATION_C2000WARE_VERSION;
	if ((migrationDevice.includes("F29")) && (currentDevice.includes("F28"))){
		fromSDK = C2000_MIGRATION_C2000WARE_OLDVERSION;
		C2000_AUTO_MIGRATION_GUIDE_LINK = "https://dev.ti.com/tirex/content/" + C2000_MIGRATION_C2000WARE_OLDVERSION + "/docs/" + C2000_MIGRATION_C2000WARE_OLDVERSION + "_Migration_Guides/html_pages/";
	}else{
		C2000_AUTO_MIGRATION_GUIDE_LINK = "https://dev.ti.com/tirex/content/" + C2000_MIGRATION_C2000WARE_VERSION + "/docs/" + C2000_MIGRATION_C2000WARE_VERSION + "_Migration_Guides/html_pages/";
	}
	
	return {from: fromSDK, to: toSDK};
}


export async function migrationRunMigrationCheckOnUri(context: vscode.ExtensionContext, uri: vscode.Uri, currentDevice: string, migrationDevices: string[])
{
	const startTime = new Date();
	// console.time("MCURI " + path.basename(uri.fsPath));
	var projectInfo = project.projectGetUriProjectInfo(uri);
	if (currentDevice && migrationDevices && (migrationDevices.length > 0))
	{

		let migrationDiagnostics: vscode.Diagnostic[] = [];
		migrationDiagnosticsCollection.set(uri, migrationDiagnostics);

		let devicesMigrationData: {
			migrationDevice: string,
			migrationData: MigrationData,
			migrationDriverlibResolutionData : MigrationDriverlibResolutionData
		}[] = [];

		// console.time("MCURI JSON " + path.basename(uri.fsPath));
		for (let migrationDevice of migrationDevices)
		{
			var jsonMigration = await getMigrationJSON(context, currentDevice, migrationDevice);
			var jsonDriverlibResolutionMigration = await getMigrationDriverlibResolutionJSON(context, currentDevice, migrationDevice);
			devicesMigrationData.push({
				migrationDevice: migrationDevice,
				migrationData: jsonMigration,
				migrationDriverlibResolutionData:jsonDriverlibResolutionMigration
			});
		}
		//console.timeEnd("MCURI JSON " + path.basename(uri.fsPath));

		var currentAndMigrationDeviceList = [currentDevice].concat(migrationDevices);

		var topContext: preprocessor.PreprocessorContext = {
			activeContext: currentAndMigrationDeviceList,
			inverseContext: [],
			parentContext: undefined
		};

		var currnetContext : preprocessor.PreprocessorContext|undefined = topContext;
		let contextToolTip = "Detected by the C2000 Migration tool - Do NOT modify the format\nNo parenthesis or inversion (!) allowed";
		var document = await vscode.workspace.openTextDocument(uri);
		let documentText = document.getText();
		
		
		// console.time("MCURI LINEBYLINE " + path.basename(uri.fsPath));
		for (var deviceMigrationData of devicesMigrationData) 
		{
			let allRemoved = deviceMigrationData.migrationData.removed;
			let allChanged = deviceMigrationData.migrationData.changed;
			let allRemovedDriverlibResolution = deviceMigrationData.migrationDriverlibResolutionData.removed;
			let allChangedDriverlibResolution = deviceMigrationData.migrationDriverlibResolutionData.changed;
			let allCodesSet = new Set([
				...allRemoved.map(removedChanged => removedChanged.code),
				...allChanged.map(removedChanged => removedChanged.code),
				...allRemovedDriverlibResolution.map(removedChangedResolution => removedChangedResolution.code),
				...allChangedDriverlibResolution.map(removedChangedResolution => removedChangedResolution.code)
			]);
		
			let lineNumbersWithCodeChange =	migrationFindAllLineNumbersWithCodeChange(documentText, allCodesSet);
			for(let lineNumber of lineNumbersWithCodeChange)
			{
				let line = document.lineAt(lineNumber);
				let lineText = line.text;
				if (currnetContext)
					{
						if (lineText.includes("#if") && lineText.includes("//_DEVICE_MIGRATION_")){
							let ifContent = lineText.replace("#if", "").replace(/\/\/_DEVICE_MIGRATION_.*/, "").trim();
							let ifContentNoWS = ifContent.replace(/\s/g,'');
							let deviceList = ifContentNoWS.split("||");
							deviceList = deviceList.filter(item => currentAndMigrationDeviceList.includes(item));
		
							let newContext : preprocessor.PreprocessorContext = {
								activeContext: deviceList,
								inverseContext: currentAndMigrationDeviceList.filter(item => !(deviceList.includes(item))),
								parentContext: currnetContext
							};
							currnetContext = newContext;
							
							let lens = new vscode.CodeLens(
								new vscode.Range(
									new vscode.Position(lineNumber, 0), 
									new vscode.Position(lineNumber, 0)), {
								title: "Start of device specific migration code - " + currnetContext.activeContext.join("/"),
								tooltip: contextToolTip,
								command: ""
							});
							migrationCodeLenses.push({
								uri: uri,
								codeLens: lens
							});
		
							// if (currnetContext)
							// {
							// 	console.log("After line " + lineNumber + " wraps " + getCombinedParentContext(currnetContext));
							// }
						}
						if (lineText.includes("#elif") && lineText.includes("//_DEVICE_MIGRATION_")){
							let ifContent = lineText.replace("#elif", "").replace(/\/\/_DEVICE_MIGRATION_.*/, "").trim();
							let ifContentNoWS = ifContent.replace(/\s/g,'');
							let deviceList = ifContentNoWS.split("||");
							deviceList = deviceList.filter(item => currentAndMigrationDeviceList.includes(item));
		
							currnetContext.inverseContext = currnetContext.inverseContext.filter(item => !(deviceList.includes(item)));
							currnetContext.activeContext = deviceList;
		
							let lens = new vscode.CodeLens(
								new vscode.Range(
									new vscode.Position(lineNumber, 0), 
									new vscode.Position(lineNumber, 0)), {
								title: "Change of device specific migration code - " + currnetContext.activeContext.join("/"),
								tooltip: contextToolTip,
								command: ""
							});
							migrationCodeLenses.push({
								uri: uri,
								codeLens:lens
							});
		
							// if (currnetContext)
							// {
							// 	console.log("After line " + lineNumber + " wraps " + getCombinedParentContext(currnetContext));
							// }
						}
						if (lineText.includes("#else")  && lineText.includes("//_DEVICE_MIGRATION_"))
						{
							currnetContext.activeContext = currnetContext.inverseContext;
							currnetContext.inverseContext = [];
		
							let lens = new vscode.CodeLens(
								new vscode.Range(
									new vscode.Position(lineNumber, 0), 
									new vscode.Position(lineNumber, 0)), {
								title: "Change of device specific migration code - " + currnetContext.activeContext.join("/"),
								tooltip: contextToolTip,
								command: ""
							});
							migrationCodeLenses.push({
								uri: uri,
								codeLens:lens
							});
							
							// if (currnetContext)
							// {
							// 	console.log("After line " + lineNumber + " wraps " + getCombinedParentContext(currnetContext));
							// }
						}
						if (lineText.includes("#endif") && lineText.includes("//_DEVICE_MIGRATION_"))
						{
							currnetContext = currnetContext.parentContext;
		
							let lens = new vscode.CodeLens(
								new vscode.Range(
									new vscode.Position(lineNumber, 0), 
									new vscode.Position(lineNumber, 0)), {
								title: "End of device specific migration code - " + currnetContext?.activeContext.join("/"),
								tooltip: contextToolTip,
								command: ""
							});
							migrationCodeLenses.push({
								uri: uri,
								codeLens:lens
							});
		
							// if (currnetContext)
							// {
							// 	console.log("After line " + lineNumber + " wraps " + getCombinedParentContext(currnetContext));
							// }
						}
					}
				if (Array.from(allCodesSet).some(code => lineText.includes(code))) 
				{
		
					let leadingSpaces = countLeadingSpaces(lineText); // leading spaces count in a line
					let leadingSpacesString = ' '.repeat(leadingSpaces); 
					let trimmedLineText = lineText.trimStart();  // line without leading spaces
		
					let lineEnumChangeCount = 0;
					let lineAllEnumChangeQuickFixMessage;
		
					const allFixThreshold = 1;
		
					//Line has multiple code change (codeChange1, codeChange2, codeChange3) with fixes (fix1, fix2, fix3)
					//Let lineText1 will be line with fix1 replaced for codechnage1 in line
					//lineText2 will be fix2 replaced for codechange2 in lineText1
				
					// Array to store code for multiple fixes in a line 
					// codeForLineWithMultiFix[3] = {codeChange1,codeChange2,codeChange3}
					let codeForLineWithMultiFix: string[] = []; 
				
					// Array to store fix for multiple fixes in a line
					//fixForLineWithMultiFix[3] = {fix1, fix2, fix3}
					let fixForLineWithMultiFix: string[] = []; 
				
					// Array to store line with each fix appended
					//lineWithChangesApplied[3] = {line, lineText1, lineText2}
					let lineWithChangesApplied: string[] = []; 
					let diagnosticsForThisLine: vscode.Diagnostic[] = [];
					let diagnosticsEnumsOnlyForThisLine: vscode.Diagnostic[] = [];
					
					let severity = vscode.DiagnosticSeverity.Error;
					const processedCodes = new Set();

					for (var allRemovedChangedWithDriverlibResolution of [allRemoved, allChanged, allChangedDriverlibResolution, allRemovedDriverlibResolution])
					{
						for (let removedChanged of allRemovedChangedWithDriverlibResolution)
						{
							let code = removedChanged.code;

							if (processedCodes.has(code)){
								continue;
							}
							let msg = "";
							let type = removedChanged.type;
							let category = "";
								
							let fix:string = "Not Applicable";
							let compatible;
							let driverlibChange = 0;
							let alternateCodeMessage = "// Enter alternate code";
							const sdkUpdate = await migrationSDKVersionUpdate(currentDevice, deviceMigrationData.migrationDevice);
							let C2000_MIGRATION_TO_SDK_VERSION = sdkUpdate.to;
							let C2000_MIGRATION_FROM_SDK_VERSION = sdkUpdate.from;
	
								for (var allRemovedChangedDriverlibResolution of [allRemovedDriverlibResolution, allChangedDriverlibResolution]){
									for (let removedChangedDriverlibResolution of allRemovedChangedDriverlibResolution){
										let codeDriverlib = removedChangedDriverlibResolution.code; 
										if (code === codeDriverlib){
											msg = removedChangedDriverlibResolution.fixMsg;
											fix = removedChangedDriverlibResolution.fix;
											compatible = removedChangedDriverlibResolution.compatible;
											category = removedChangedDriverlibResolution.peripheral;
											driverlibChange = 1;
										}
									}
								}

							if (!driverlibChange){
								for (var allRemovedChanged of [allRemoved, allChanged]) {
									for (let removedChangedWithoutDriverlibResolution of allRemovedChanged){
										if (code === removedChangedWithoutDriverlibResolution.code){
											msg = removedChangedWithoutDriverlibResolution.msg;
											category = removedChangedWithoutDriverlibResolution.category;
										}
									}
								}
							}

							if (type === "reg" && removedChanged) {
								const isMigrationElement = (item: any): item is MigrationElement => {
								return 'category' in item && 'msg' in item;
								};
								if (isMigrationElement(removedChanged)){
									const isRemoved = allRemoved.some(isMigrationElement) && allRemoved.includes(removedChanged);
									const isChanged = allChanged.some(isMigrationElement) && allChanged.includes(removedChanged);
									if (isRemoved || isChanged){
											code = getRegisterMigrationDriverlibCode(removedChanged as MigrationElement);
									}
								}
							}
	
							let bookmark = "";
							if (type === "function")
							{
								bookmark = code;
							}
							else if (type === "enum")
							{
								bookmark = category + "_Enums";
							}
							else if (type === "reg")
							{
								bookmark = category + "_Registers";
							}
	
	
							if (lineText.includes(code) && (!projectInfo || !projectInfo.migrationState.migrationCheckExceptions?.includes(code)) &&
								(!currnetContext || preprocessor.getCombinedParentContext(currnetContext).includes(deviceMigrationData.migrationDevice)))
							{
								let codeDetectedIndex = lineText.indexOf(code);
								let startPos: vscode.Position = new vscode.Position(lineNumber, codeDetectedIndex);
								let wordRange = document.getWordRangeAtPosition(startPos);
	
								if (driverlibChange === allFixThreshold){
									if ((type === "enum")) {
										alternateCodeMessage = "// " + "Suggested replacement: " + trimmedLineText.replace(code,fix);
										lineEnumChangeCount++;
										if (lineEnumChangeCount > allFixThreshold) { 
											codeForLineWithMultiFix[lineEnumChangeCount - 1] = code; 
											fixForLineWithMultiFix[lineEnumChangeCount - 1] = fix;
											lineWithChangesApplied[0] = trimmedLineText.replace(codeForLineWithMultiFix[0],fixForLineWithMultiFix[0]);
										}
										else {
											codeForLineWithMultiFix[0] = code;
											fixForLineWithMultiFix[0] = fix;
										}
									}
									else if (type === "function" || type === "real_time_library" || type === "mcu_macros")
									{
										if (compatible){
											const {trimmedLineEnhancedText, message}  = await functionmigrationEnhancement(code,trimmedLineText, context, currentDevice ,deviceMigrationData.migrationDevice);								
											alternateCodeMessage = "// " + "Compatible replacement: " + trimmedLineEnhancedText;
											if (message) {
												// Append message on a new comment line
												alternateCodeMessage += "\n"+ leadingSpacesString + "// " + message;
											}
										}
										else { 
											alternateCodeMessage = "// " + "Suggested replacement: " + fix;
										}
									}
								}
	
								if (!wordRange)
								{
									wordRange = line.range;
								}
	
								let wordText = document.getText(wordRange);
							
								//
								// Ensure it is not a situation where forexample ABC_OPT1 and ABC_OPT1_MORE									
								// both esists in the code and we want to make sure we dont get an extra "code" hit with
								// a search of ADC_OPT1 TWICE.
								//
								if (((wordText === code) || (type === "reg")) && (msg !== "")) {
										
									let diagnostic = new vscode.Diagnostic(wordRange,  code + ": " + msg,
											severity);
									diagnostic.code = C2000_MIGRATION_INCOMPAT_CODE;
									diagnostic.source = C2000_MIGRATION_INCOMPAT_SOURCE;
									diagnosticsForThisLine.push(diagnostic);
	
									if (type === "enum"){
										diagnosticsEnumsOnlyForThisLine.push(diagnostic);
									}
	
									let codeActionReviewCollateral = new vscode.CodeAction("Review migration collateral for " + currentDevice + " to " + deviceMigrationData.migrationDevice, vscode.CodeActionKind.QuickFix);
									codeActionReviewCollateral.command = { command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, title: 'C2000: Open Collateral', arguments:[
										{
											link: C2000_AUTO_MIGRATION_GUIDE_LINK + "diff_reports/" + C2000_MIGRATION_FROM_SDK_VERSION + "_" + 
												currentDevice.toLowerCase() + 
												"_vs_" + C2000_MIGRATION_TO_SDK_VERSION + "_" + 
												deviceMigrationData.migrationDevice.toLowerCase() + 
												"_driverlib.html#" + bookmark,
											html:true
										}
									]};
									codeActionReviewCollateral.diagnostics = [diagnostic];
									codeActionReviewCollateral.isPreferred = false;
								
									let codeActionIgnoreIncompatibility = new vscode.CodeAction("Ignore " + code + " related errors", vscode.CodeActionKind.QuickFix);
									codeActionIgnoreIncompatibility.command = { command: info.C2000_IDEA_CMD_IGNORE_MIGRATION_INCOMPAT, title: 'C2000: Ignore Migration Incompatibility', arguments:[
										{
											code: code,
											projectInfo: projectInfo
										}
									]};
									codeActionIgnoreIncompatibility.diagnostics = [diagnostic];
									codeActionIgnoreIncompatibility.isPreferred = false;

									let codeActionWrapInIfDef = new vscode.CodeAction("Wrap in device specific #IFDEF for " + currentDevice + " and " + deviceMigrationData.migrationDevice, vscode.CodeActionKind.QuickFix);
									codeActionWrapInIfDef.edit = new vscode.WorkspaceEdit();
									codeActionWrapInIfDef.edit.replace(uri, 
										new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, lineText.length)), 
										"#if " + currentDevice + " //_DEVICE_MIGRATION_\n" + lineText + "\n" +
										"#elif " + deviceMigrationData.migrationDevice + " //_DEVICE_MIGRATION_\n" + leadingSpacesString + alternateCodeMessage + "\n" +
										"#endif //_DEVICE_MIGRATION_" + "\n");
									codeActionWrapInIfDef.diagnostics = [diagnostic];
									codeActionWrapInIfDef.isPreferred = false;

									migrationCodeActions.push(
										{
											uri: uri,
											codeAction: codeActionReviewCollateral, 
										},
										{
											uri: uri,
											codeAction: codeActionWrapInIfDef
										},
										{
											uri: uri,
											codeAction: codeActionIgnoreIncompatibility
										}
									);
								}
							
							}
							processedCodes.add(code);
						}
						severity = vscode.DiagnosticSeverity.Error;
					}
					// Combined ENUM Fix
					if ((lineEnumChangeCount > allFixThreshold) && deviceMigrationData.migrationDevice){
						for(let i = 1; i < lineEnumChangeCount; i++){
								lineWithChangesApplied[i] = lineWithChangesApplied[i-1].replace(codeForLineWithMultiFix[i],fixForLineWithMultiFix[i]);
								lineAllEnumChangeQuickFixMessage = "// " + "Suggested replacement:" + lineWithChangesApplied[i];
							}
	
						let codeActionWrapInIfDefcombined = new vscode.CodeAction("All Enum fixes Wrap in device specific #IFDEF for " + currentDevice + " and " + deviceMigrationData.migrationDevice , vscode.CodeActionKind.QuickFix);
						codeActionWrapInIfDefcombined.edit = new vscode.WorkspaceEdit();
						codeActionWrapInIfDefcombined.edit.replace(uri, 
							new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, lineText.length)), 
							"#if " + currentDevice + " //_DEVICE_MIGRATION_\n" + lineText + "\n" +
							"#elif " + deviceMigrationData.migrationDevice + " //_DEVICE_MIGRATION_\n" + leadingSpacesString + lineAllEnumChangeQuickFixMessage + "\n" +
							"#endif //_DEVICE_MIGRATION_" + "\n");
						codeActionWrapInIfDefcombined.diagnostics = diagnosticsEnumsOnlyForThisLine;
						codeActionWrapInIfDefcombined.isPreferred = false;
	
						migrationCodeActions.push(
						{
							uri: uri,
							codeAction: codeActionWrapInIfDefcombined
						}
						);
					}
	
					// Add all collected diagnostics and code actions for this line
					migrationDiagnostics.push(...diagnosticsForThisLine);   
				}
		
			} 
		}
		
	//	console.timeEnd("MCURI LINEBYLINE " + path.basename(uri.fsPath));

		migrationDiagnosticsCollection.set(uri, migrationDiagnostics);
	}
	// console.timeEnd("MCURI " + path.basename(uri.fsPath));
	const endTime = new Date();
	const durationTime = (endTime.getTime() - startTime.getTime())/1000;
	lastMigrationCheckTimestampPerURI[uri.fsPath] = durationTime;
}

export async function migrationRunMigrationCheckOnActiveTextEditor(context: vscode.ExtensionContext,  progress?: vscode.Progress<{ message?: string}>)
{
	if (vscode.window.activeTextEditor)
	{
		migrationCodeActions = [];
		migrationCodeLenses = [];
		migrationDiagnosticsCollection.clear();
		
		let currentDevice: string;
		let migrationDevices: string[];
		var projectInfo = project.projectGetUriProjectInfo(vscode.window.activeTextEditor.document.uri);
		if(!projectInfo){
			currentDevice = await utils.selectDriverlibMigrationFromDeviceFamily();
			migrationDevices = [await utils.selectDriverlibMigrationToDeviceFamily([currentDevice])];
		}
		else
		{
			currentDevice = projectInfo.migrationState.currentDevice;
			migrationDevices = projectInfo.migrationState.migrationDevices;
		}

		if (progress) {
			progress.report({message: `Processing  ${vscode.window.activeTextEditor.document.uri.fsPath}` });
		}
		await migrationRunMigrationCheckOnUri(context, vscode.window.activeTextEditor.document.uri, currentDevice, migrationDevices);
		if (progress) {
			progress.report({message: "Migration check completed" });
			vscode.window.showInformationMessage("Migration check completed");
		}

		migrationCodelensProvider.codeLensesEventEmitter.fire();
	}
}


/**
 * Provides code actions corresponding to diagnostic problems.
 */
export class MigrationCodeActionProvider implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		//console.log("Code actions ran");
		let allCodeActions = migrationCodeActions.map(migrationCodeAction => migrationCodeAction.codeAction);
		
		let codeActionsForThisDiagnostic : vscode.CodeAction[] = [];

		for (let diagnostic of context.diagnostics)
		{
			var additionalCodeActions = allCodeActions.filter(codeAction => codeAction.diagnostics?.includes(diagnostic));
			codeActionsForThisDiagnostic = codeActionsForThisDiagnostic.concat(additionalCodeActions);
		}
		//console.log(context);
		// for each diagnostic entry that has the matching `code`, create a code action command
		return codeActionsForThisDiagnostic;
	}

}

export class MigrationCodelensProvider implements vscode.CodeLensProvider {

	private codeLenses: vscode.CodeLens[] = [];
	public codeLensesEventEmitter: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
	public readonly onDidChangeCodeLenses: vscode.Event<void> = this.codeLensesEventEmitter.event;

	constructor() {
		vscode.workspace.onDidChangeConfiguration((_) => {
			this.codeLensesEventEmitter.fire();
		});
	}

	public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {
		//console.log("Code lenses ran");
		var codeLenses : vscode.CodeLens[] = [];

		migrationCodeLenses.forEach(migrationCodeLens => {
			if (document.uri.path === migrationCodeLens.uri.path)
			{
				codeLenses.push(migrationCodeLens.codeLens);
			}
		});

		return codeLenses;
	}
}

function exportMigrationDiagnostics()
{
	let exportText = "";

	migrationDiagnosticsCollection.forEach((
		uri: vscode.Uri, 
		diagnostics: readonly vscode.Diagnostic[], 
		collection: vscode.DiagnosticCollection) => {
			exportText += "File: " + uri.fsPath + "\n";
			for (let diagnostic of diagnostics){
				exportText += vscode.DiagnosticSeverity[diagnostic.severity].toString() + " - " + diagnostic.message + "\n";
			}
			exportText += "\n";
	});

	vscode.workspace.openTextDocument().then((textDoc: vscode.TextDocument) => {
		vscode.window.showTextDocument(textDoc, 2, false).then(textEditor => {
			textEditor.edit(edit => {
				edit.insert(new vscode.Position(0, 0), exportText);
			});
		});
	}, (error: any) => {

	});

}

function exportProjectMigrationDiagnostics(projectInfo: project.ProjectInfo, lastMigrationCheckTimestampPerURI: { [uri: string]: number})
{
	let exportText = "";
	var projectUri = projectInfo.uri;
	const projectFsPath = projectUri.fsPath || projectUri.path;

	exportText += "Migration Info\n";
	exportText += "From: " + projectInfo.migrationState.currentDevice + "\n";
	exportText += "To: " + projectInfo.migrationState.migrationDevices.join(", ") + "\n";
	const ignoredSymbols = projectInfo.migrationState.migrationCheckExceptions;
	const ignoredFolders = projectInfo.migrationState.migrationCheckFolderExceptions;
	if(ignoredSymbols && ignoredSymbols.length > 0){
		exportText += "Ignores the following migration incompatibilities: " + ignoredSymbols?.join(", ") + "\n";
	}
	if(ignoredFolders && ignoredFolders.length > 0){
	exportText += "Ignores the following folders: " + ignoredFolders?.map(exceptionpath => projectFsPath + "/" + exceptionpath).join("; ") + "\n";
	}

	migrationDiagnosticsCollection.forEach((
		uri: vscode.Uri, 
		diagnostics: readonly vscode.Diagnostic[], 
		collection: vscode.DiagnosticCollection) => {
			if (uri.path.includes(projectInfo.uri.path))
			{
				exportText += "File: " + uri.fsPath + "\n";
				exportText += "Migration time taken: " + (lastMigrationCheckTimestampPerURI[uri.fsPath] || "N/A")+ "seconds\n";
				for (let diagnostic of diagnostics){
					const { start } = diagnostic.range;
					const line = start.line + 1;
					const column = start.character + 1; 
					exportText += vscode.DiagnosticSeverity[diagnostic.severity].toString() + " - " + diagnostic.message + "[Ln " + line + ", Col " + column +"]" +"\n";
				}
				exportText += "\n";
			}
	});

	const filename = `${projectInfo.name}_migration_report.txt`; 

	vscode.workspace.openTextDocument().then((textDoc: vscode.TextDocument) => {
		vscode.window.showTextDocument(textDoc, 2, false).then(textEditor => {
			textEditor.edit(edit => {
				edit.insert(new vscode.Position(0, 0), exportText);
			});
		vscode.window.showInformationMessage(`Opened report: ${filename}`);
		});
	}, (error: any) => {

	});


}

function getRegisterMigrationDriverlibCode(migEl: MigrationElement)
{
	let code = migEl.code;
	let dlibCode = code;
	//
	// Is it a bitfield or a whole register
	//
	if (code.includes("."))
	{
		dlibCode = migEl.category.toUpperCase() + "_O_" + code.replace(".", "_");
	}
	else
	{
		dlibCode = migEl.category.toUpperCase() + "_O_" + code;
	}
	return dlibCode;
}

function getRegisterMigrationBitfiledCode(migEl: MigrationElement)
{
	let code = migEl.code;
	let bfCode = code;
	//
	// Is it a bitfield or a whole register
	//
	if (register.isRegisterNamePrependedWithModuleName(migEl.category))
	{
		bfCode = migEl.category.toUpperCase() + code;
	}
	if (code.includes("."))
	{
		bfCode = code.replace(".", ".bit.");
	}
	else
	{
		bfCode = code;
	}
	return bfCode;
}