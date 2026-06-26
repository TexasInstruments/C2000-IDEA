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

interface DiagnosticMeta {
	code: string;
	fix: string;
	fixMsg: string;
	type: string;
	category: string;
	compatible: boolean;
	sourceDevice: string;
	targetDevice: string;
	changeType?: string;
	collateralLink?: string;
}
// Key: `${uri.fsPath}:${line}:${col}`
let migrationDiagnosticMetadata: Map<string, DiagnosticMeta> = new Map();

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
let lastMigratedProjectInfo: project.ProjectInfo | undefined;

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

	// This ignoreMigrationFolderIncompatDisposal function enables ignoring a file from explorer window
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
		if (args && args.treeItem && args.projectInfo) {
			exportProjectMigrationDiagnostics(args.projectInfo, lastMigrationCheckTimestampPerURI);
		} else if (lastMigratedProjectInfo) {
			exportProjectMigrationDiagnostics(lastMigratedProjectInfo, lastMigrationCheckTimestampPerURI);
		} else {
			exportMigrationDiagnostics();
		}
	});

	let exportMigrationAgentReportDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_EXPORT_MIGRATION_AGENT_REPORT, (args) => {
		if (args && args.treeItem && args.projectInfo) {
			exportProjectMigrationAgentReport(args.projectInfo);
		} else if (lastMigratedProjectInfo) {
			exportProjectMigrationAgentReport(lastMigratedProjectInfo);
		} else {
			exportMigrationAgentReport(true, vscode.window.activeTextEditor?.document.uri);
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
		exportMigrationAgentReportDisposal,
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
	migrationDiagnosticMetadata.clear();
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
		outputChannel.appendLine(`Migration check completed on ${selectedProject}`);
		lastMigratedProjectInfo = projectInfo;

		// Final progress report
		if (progress)
			{
				progress.report({ increment: 100, message: "Migration check completed." });
				vscode.window.showInformationMessage("Migration check completed on " + selectedProject + " project");
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


async function migrationGetDeviceDriverlibFunctions(
	device: string
): Promise<Map<string, string[]>> {
	const moduleFunctionNames = new Map<string, string[]>();
	const deviceDir = vscode.Uri.joinPath(
		project.extensionContext.extensionUri, 'driverlib_functions', device.toLowerCase());
	try {
		const entries = await vscode.workspace.fs.readDirectory(deviceDir);
		for (const [fileName, fileType] of entries) {
			if (fileType !== vscode.FileType.File || !fileName.endsWith('.json')) {
				continue;
			}
			const fileUri = vscode.Uri.joinPath(deviceDir, fileName);
			const rawContent = await vscode.workspace.fs.readFile(fileUri);
			const parsed = JSON.parse(Buffer.from(rawContent).toString('utf8'));
			const functions: any[] = parsed.functions || [];
			if (functions.length > 0) {
				const moduleName = fileName.replace('.json', '');
				moduleFunctionNames.set(
					moduleName,
					functions.map((f: any) => f.functionName)
				);
			}
		}
	} catch {
		// Device folder missing — return empty map
	}
	return moduleFunctionNames;
}

export async function migrationGetMissingModules(
	sourceDevice: string,
	targetDevice: string
): Promise<{ removedModules: string[]; addedModules: string[] }> {
	const sourceModules = await migrationGetDeviceDriverlibFunctions(sourceDevice);
	const targetModules = await migrationGetDeviceDriverlibFunctions(targetDevice);

	const removedModules = [...sourceModules.keys()]
		.filter((mod) => !targetModules.has(mod));
	const addedModules = [...targetModules.keys()]
		.filter((mod) => !sourceModules.has(mod));

	return { removedModules, addedModules };
}

export async function migrationGetMissingModuleFunctions(
	sourceDevice: string,
	targetDevice: string
): Promise<{ removed: MigrationElement[]; added: MigrationElement[] }> {
	const sourceModules = await migrationGetDeviceDriverlibFunctions(sourceDevice);
	const targetModules = await migrationGetDeviceDriverlibFunctions(targetDevice);

	const removed: MigrationElement[] = [];
	for (const [moduleName, functionNames] of sourceModules) {
		if (!targetModules.has(moduleName)) {
			for (const functionName of functionNames) {
				removed.push({
					code: functionName,
					type: 'function',
					category: moduleName,
					msg: "This function is not available on " + targetDevice +
						" (" + moduleName + " peripheral is not supported)"
				});
			}
		}
	}

	const added: MigrationElement[] = [];
	for (const [moduleName, functionNames] of targetModules) {
		if (!sourceModules.has(moduleName)) {
			for (const functionName of functionNames) {
				added.push({
					code: functionName,
					type: 'function',
					category: moduleName,
					msg: "This function is only available on " + targetDevice +
						" (" + moduleName + " peripheral is not supported on " + sourceDevice + ")"
				});
			}
		}
	}

	return { removed, added };
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
		// Clear per-URI metadata so it stays in sync with the diagnostic collection
		for (const key of Array.from(migrationDiagnosticMetadata.keys())) {
			if (key.startsWith(uri.fsPath + ":")) {
				migrationDiagnosticMetadata.delete(key);
			}
		}

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

			var missingModuleFunctions = await migrationGetMissingModuleFunctions(currentDevice, migrationDevice);
			jsonMigration.removed = jsonMigration.removed.concat(missingModuleFunctions.removed) as [MigrationElement];
			jsonMigration.added = jsonMigration.added.concat(missingModuleFunctions.added) as [MigrationElement];

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

									const metaKey = `${uri.fsPath}:${lineNumber}:${code}:${deviceMigrationData.migrationDevice}`;
									const collateralLink = C2000_AUTO_MIGRATION_GUIDE_LINK + "diff_reports/" + C2000_MIGRATION_FROM_SDK_VERSION + "_" +
										currentDevice.toLowerCase() +
										"_vs_" + C2000_MIGRATION_TO_SDK_VERSION + "_" +
										deviceMigrationData.migrationDevice.toLowerCase() +
										"_driverlib.html#" + bookmark;
									migrationDiagnosticMetadata.set(metaKey, {
										code,
										fix,
										fixMsg: msg,
										type,
										category,
										compatible: typeof compatible === "boolean" ? compatible : compatible === "true",
										sourceDevice: currentDevice,
										targetDevice: deviceMigrationData.migrationDevice,
										changeType: (allRemoved.some((r: any) => r.code === code) || allRemovedDriverlibResolution.some((r: any) => r.code === code)) ? "removed" : "changed",
										collateralLink
									});

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
		lastMigratedProjectInfo = undefined;
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
	const timestamp = new Date().toISOString();

	let inferredSource = "Unknown";
	let inferredTargets = new Set<string>();
	for (const val of migrationDiagnosticMetadata.values()) {
		inferredSource = val.sourceDevice;
		inferredTargets.add(val.targetDevice);
	}
	const inferredTargetStr = Array.from(inferredTargets).join(", ") || "Unknown";

	let totalIssues = 0;
	migrationDiagnosticsCollection.forEach((_, diagnostics) => { totalIssues += diagnostics.length; });

	let exportText = "";
	exportText += "C2000 Migration Report\n";
	exportText += "======================\n";
	exportText += "Generated:    " + timestamp + "\n";
	exportText += "Migration:    " + inferredSource + " -> " + inferredTargetStr + "\n";
	exportText += "Total Issues: " + totalIssues + "\n";
	exportText += "\n";
	exportText += "----------------------------------------------------------------------\n\n";

	migrationDiagnosticsCollection.forEach((uri: vscode.Uri, diagnostics: readonly vscode.Diagnostic[]) => {
		exportText += "File: " + uri.fsPath + "  [" + diagnostics.length + " issue" + (diagnostics.length !== 1 ? "s" : "") + "]\n";
		for (let diagnostic of diagnostics) {
			exportText += "  " + vscode.DiagnosticSeverity[diagnostic.severity].toString() + " - " + diagnostic.message + "\n";
		}
		exportText += "\n";
	});

	vscode.workspace.openTextDocument().then((textDoc: vscode.TextDocument) => {
		vscode.window.showTextDocument(textDoc, 2, false).then(textEditor => {
			textEditor.edit(edit => {
				edit.insert(new vscode.Position(0, 0), exportText);
			});
		});
	}, (_error: any) => {});
}

function exportProjectMigrationDiagnostics(projectInfo: project.ProjectInfo, lastMigrationCheckTimestampPerURI: { [uri: string]: number})
{
	const projectUri = projectInfo.uri;
	const projectFsPath = projectUri.fsPath || projectUri.path;
	const timestamp = new Date().toISOString();
	const ignoredSymbols = projectInfo.migrationState.migrationCheckExceptions;
	const ignoredFolders = projectInfo.migrationState.migrationCheckFolderExceptions;

	let totalIssues = 0;
	let filesAnalyzed = 0;
	migrationDiagnosticsCollection.forEach((uri, diagnostics) => {
		if (uri.path.includes(projectInfo.uri.path)) {
			filesAnalyzed++;
			totalIssues += diagnostics.length;
		}
	});

	let exportText = "";
	exportText += "C2000 Migration Report\n";
	exportText += "======================\n";
	exportText += "Project:          " + projectInfo.name + "\n";
	exportText += "Path:             " + projectFsPath + "\n";
	exportText += "Generated:        " + timestamp + "\n";
	exportText += "Migration:        " + projectInfo.migrationState.currentDevice + " -> " + projectInfo.migrationState.migrationDevices.join(", ") + "\n";
	exportText += "Files Analyzed:   " + filesAnalyzed + "\n";
	exportText += "Total Issues:     " + totalIssues + "\n";
	exportText += "Ignored Symbols (" + (ignoredSymbols?.length || 0) + "): " + ((ignoredSymbols && ignoredSymbols.length > 0) ? ignoredSymbols.join(", ") : "None") + "\n";
	exportText += "Ignored Folders (" + (ignoredFolders?.length || 0) + "): " + ((ignoredFolders && ignoredFolders.length > 0) ? ignoredFolders.map(f => projectFsPath + "/" + f).join("; ") : "None") + "\n";
	exportText += "\n";
	exportText += "----------------------------------------------------------------------\n\n";

	migrationDiagnosticsCollection.forEach((uri: vscode.Uri, diagnostics: readonly vscode.Diagnostic[]) => {
		if (uri.path.includes(projectInfo.uri.path)) {
			exportText += "File: " + uri.fsPath + "  [" + diagnostics.length + " issue" + (diagnostics.length !== 1 ? "s" : "") + "]";
			exportText += "  [Time: " + (lastMigrationCheckTimestampPerURI[uri.fsPath] || "N/A") + "s]\n";
			for (let diagnostic of diagnostics) {
				const { start } = diagnostic.range;
				const line = start.line + 1;
				const column = start.character + 1;
				exportText += "  " + vscode.DiagnosticSeverity[diagnostic.severity].toString() + " - " + diagnostic.message + " [Ln " + line + ", Col " + column + "]\n";
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
	}, (_error: any) => {});
}

/**
 * Build shared instruction content for migration agent reports
 */
function getSDKVersionForDevice(device: string): string {
	return device.toUpperCase().includes("F29") ? C2000_MIGRATION_C29SDK_VERSION : C2000_MIGRATION_C2000WARE_VERSION;
}

function buildMigrationAgentReportInstructions(sourceDevice: string, targetDevice: string): string {
	const fromSDK = sourceDevice.toUpperCase().includes("F29") ? C2000_MIGRATION_C29SDK_VERSION :
		(targetDevice.toUpperCase().includes("F29") ? C2000_MIGRATION_C2000WARE_OLDVERSION : C2000_MIGRATION_C2000WARE_VERSION);
	const toSDK = getSDKVersionForDevice(targetDevice);

	let md = `## Role & Context\n\n`;
	md += `> You are an AI coding agent tasked with migrating a Texas Instruments C2000 embedded C project.\n`;
	md += `> **Source device:** \`${sourceDevice}\` → **Target device:** \`${targetDevice}\`\n`;
	md += `> **SDK:** \`${fromSDK}\` → \`${toSDK}\`\n`;
	md += `> The issues in this report were detected by the C2000 IDEA VS Code extension via static analysis.\n`;
	md += `> Your goal is to edit the listed source files so the project compiles and runs correctly on \`${targetDevice}\`.\n`;
	md += `> **File modification protocol:** Present each change as a unified diff with 3 lines of context. For files under 100 lines, you may show the full modified file.\n\n`;
	md += `---\n\n`;
	md += `## Instructions for AI Agent\n\n`;
	md += `### Priority Order\n\n`;
	md += `Work through issues in this order for maximum efficiency:\n`;
	md += `1. **Auto-fixable ✓ issues first** — These are direct 1-to-1 symbol substitutions. Apply them immediately without research.\n`;
	md += `2. **Needs manual review ⚠ issues second** — These require context analysis, collateral inspection, and confirmation before applying.\n\n`;
	md += `### Change Type Strategy\n\n`;
	md += `Each issue carries a **Change** field that indicates what happened to the symbol:\n\n`;
	md += `| Change Type | What It Means | Recommended Action |\n`;
	md += `|-------------|---------------|--------------------|\n`;
	md += `| \`removed\` | Symbol does not exist in \`${targetDevice}\` | Find equivalent target-device API; leave a \`// TODO: verify replacement\` comment |\n`;
	md += `| \`modified\` | Symbol exists but signature/value/behavior changed | Apply the suggested fix; check all call-sites for argument compatibility |\n`;
	md += `| \`added\` | Symbol is new in \`${targetDevice}\` and may be required | Review if it is needed; consult collateral link |\n\n`;
	md += `### Action Checklist Per Issue\n\n`;
	md += `For each issue listed below, follow these steps:\n`;
	md += `- [ ] Open the file at the **absolute path** shown\n`;
	md += `- [ ] Navigate to the exact **Line** and **Column** number\n`;
	md += `- [ ] Verify the symbol name in the source code matches the issue\n`;
	md += `- [ ] Read the **Fix Note** (human-readable explanation) before applying any change\n`;
	md += `- [ ] For **Auto-fixable ✓**: directly substitute the old symbol with the **Suggested fix** code\n`;
	md += `- [ ] For **Manual review ⚠**: read the **Description**, inspect the **Migration Collateral** link, understand the context, then apply the appropriate replacement\n`;
	md += `- [ ] If fixing a function call, preserve all original arguments unless the suggested fix shows a different argument mapping\n`;
	md += `- [ ] After each fix, **search the entire project** (not just the current file) for other references to the same symbol and update them as well\n\n`;
	md += `### Example: Complete Fix Walkthrough\n\n`;
	md += `Use this as a reference for how to apply a fix from this report:\n\n`;
	md += `**Before (source device code):**\n`;
	md += `\`\`\`c\n`;
	md += `// Old device API call — flagged as "modified" or "removed"\n`;
	md += `OldDevice_ConfigurePeripheral(BASE_ADDR, OLD_PARAM_A, OLD_PARAM_B);\n`;
	md += `\`\`\`\n\n`;
	md += `**After (target device code, using the Suggested fix from this report):**\n`;
	md += `\`\`\`c\n`;
	md += `// New device API — taken verbatim from "Suggested fix" field\n`;
	md += `NewDevice_ConfigurePeripheral(BASE_ADDR, NEW_PARAM_A);\n`;
	md += `\`\`\`\n\n`;
	md += `**Why:** The \`Fix Note\` in the issue explained that \`OLD_PARAM_B\` was absorbed into \`NEW_PARAM_A\` on the target device. The \`Migration Collateral\` link confirmed the new function signature. No parameters were invented — only the data in the report was used.\n\n`;
	md += `### Anti-Hallucination Rules — Ground Your Fixes in This Report\n\n`;
	md += `> ⚠️ **This report is the authoritative source. Do not use training knowledge to invent fixes.**\n\n`;
	md += `- **If a \`Suggested fix\` is provided:** use it exactly as written — it comes directly from TI's migration database\n`;
	md += `- **If no \`Suggested fix\` is provided:** fetch and read the **Migration Collateral** link before writing any replacement code. Do not guess.\n`;
	md += `- **Do not assume** a symbol, function, or enum exists on \`${targetDevice}\` — verify via the collateral link or driverlib source\n`;
	md += `- **Do not rename** a symbol based on a naming pattern you infer — different device families do not follow consistent naming conventions\n`;
	md += `- **If the collateral link is inaccessible** and no suggested fix is given, explicitly tell the user: *"I cannot confidently replace \`<symbol>\` without verification — please provide the target driverlib source or confirm the replacement."*\n`;
	md += `- **The \`Fix Note\` field** (when present) is human-readable guidance — read it before applying any code change\n\n`;
	md += `### Constraints — What NOT to Do\n\n`;
	md += `- ⛔ **Do NOT** modify files outside the project directory listed in this report\n`;
	md += `- ⛔ **Do NOT** rename symbols in comments, string literals, or documentation — only in active C code\n`;
	md += `- ⛔ **Do NOT** alter \`//_DEVICE_MIGRATION_\` pragma lines — these are markers used by the C2000 IDEA tool\n`;
	md += `- ⛔ **Do NOT** change SDK/driverlib source files — only modify the project's own source files\n`;
	md += `- ⛔ **Do NOT** fix the same symbol in multiple target devices unless each target device is explicitly listed in its own issue\n\n`;
	md += `### Error Recovery\n\n`;
	md += `If you encounter compilation errors after applying a fix from this report:\n\n`;
	md += `1. **Undefined symbol / undeclared identifier** — The replacement may require a different \`#include\`. Check the Migration Collateral for header file changes between \`${sourceDevice}\` and \`${targetDevice}\`\n`;
	md += `2. **Type mismatch / incompatible types** — The target device may use a different enum or typedef. Search the \`${toSDK}\` driverlib header for the correct type name\n`;
	md += `3. **Wrong number of arguments** — The function signature changed. Re-read the **Fix Note** and **Migration Collateral** — you may have missed a parameter added or removed\n`;
	md += `4. **Multiple definition / redeclaration** — You may have applied the same fix twice. Search the file for duplicate symbol occurrences\n`;
	md += `5. **If stuck after 2 attempts** — Flag the symbol in your completion summary as "needs human review" and move on to the next issue\n\n`;
	md += `### Completion Signal\n\n`;
	md += `When you have processed all issues in this report:\n`;
	md += `1. Report back with a summary table: one row per file, showing how many issues were fixed, how many need further review\n`;
	md += `2. List any symbols where you could not find a confident replacement — these need human review\n`;
	md += `3. List any files where you made changes so the user can review the diffs\n\n`;
	md += `### Accessing Migration Collateral\n\n`;
	md += `Each issue includes a link to the TI migration guide showing diffs of changed APIs, registers, and enums.\n`;
	md += `You can fetch and read these resources from the web to understand:\n`;
	md += `- What APIs/registers/enums changed between devices\n`;
	md += `- How function signatures changed\n`;
	md += `- Deprecated symbols and their replacements\n\n`;
	md += `If the collateral link is inaccessible or insufficient, read the driverlib source code directly (see Fallback Analysis section below).\n\n`;
	md += `### Fallback Analysis Strategy\n\n`;
	md += `If the migration collateral links are inaccessible or do not provide sufficient detail, follow this approach:\n\n`;
	md += `#### 1. Locate the Driverlib Source Code\n`;
	md += `- C2000Ware includes driverlib source for both the source and target devices\n`;
	md += `- Typically found in: \`C2000Ware/driverlib/{device_name}/\`\n`;
	md += `- Look for files that contain the changed symbols (register definitions, enums, functions)\n\n`;
	md += `#### 2. Compare Implementations\n`;
	md += `- For **removed** symbols: verify they no longer exist in the target device's driverlib\n`;
	md += `- For **modified** symbols: compare the definition in both device's source files\n`;
	md += `  - Register addresses, bit field layouts, and struct definitions\n`;
	md += `  - Function signatures, parameter types, and return values\n`;
	md += `  - Macro definitions and their expansions\n\n`;
	md += `#### 3. Manual Fix Development\n`;
	md += `- If a direct replacement is not available, write equivalent code that:\n`;
	md += `  - Performs the same hardware operation using target device APIs\n`;
	md += `  - Uses target device register names and addresses\n`;
	md += `  - Follows the target device's driverlib conventions\n`;
	md += `  - Maintains the original functionality and timing behavior\n\n`;
	md += `#### 4. Getting Device & Register Information\n`;
	md += `- Use the **ti-asm-mcp** tool to query technical details including registers for the current device\n`;
	md += `  (this MCP allows querying device description, register bit shifts, masks, and detailed descriptions)\n`;
	md += `- Whenever needed, try to understand the **intent of the code** using the original symbol's context\n`;
	md += `- If the SDK is available, search the SDK for driverlib functions whose signature and parameters match the original code's intent\n\n`;
	md += `#### 5. Validation\n`;
	md += `- Cross-reference the fix with target device documentation (TRM)\n`;
	md += `- Ensure parameter ranges and legal values match target device specs\n`;
	md += `- Test on actual hardware when possible\n\n`;
	md += `### Shared Codebase Strategy: Critical Decision\n\n`;
	md += `**BEFORE implementing fixes, ask the user which approach they prefer:**\n\n`;
	md += `#### Approach 1: Keep Shared Source with Device-Specific Branches (#ifdef)\n`;
	md += `Use this if the user wants **one codebase** that compiles for both old and new devices:\n`;
	md += `\`\`\`c\n`;
	md += `#if ${sourceDevice}  //_DEVICE_MIGRATION_\n`;
	md += `    // Old device code (original code)\n`;
	md += `    old_device_function();\n`;
	md += `#elif ${targetDevice}  //_DEVICE_MIGRATION_\n`;
	md += `    // New device code (migrated code)\n`;
	md += `    new_device_function();\n`;
	md += `#endif  //_DEVICE_MIGRATION_\n`;
	md += `\`\`\`\n`;
	md += `**Pros:** Maintain single source, easy to port back if needed, clear documentation of changes\n`;
	md += `**Cons:** More #ifdef blocks in code, slightly more complex logic\n\n`;
	md += `#### Approach 2: Clean Replacement (Remove Old Device Code)\n`;
	md += `Use this if the user wants **only new device code** (remove old device references entirely):\n`;
	md += `\`\`\`c\n`;
	md += `// Just use the new device API\n`;
	md += `new_device_function();\n`;
	md += `\`\`\`\n`;
	md += `**Pros:** Cleaner code, no preprocessor clutter, simpler maintenance\n`;
	md += `**Cons:** No easy way to revert, less clear what changed, cannot dual-compile\n\n`;
	md += `**Ask the user:** "For this migration, do you want to (1) keep a shared codebase with #ifdef device branches, or (2) do a clean replacement removing all old device code?"\n\n`;
	md += `**How to proceed based on answer:**\n`;
	md += `- **Answer "shared":** Use device-specific #ifdef blocks (Approach 1) for all "changed" symbols. Wrap the old code and new code with device-specific preprocessor directives.\n`;
	md += `- **Answer "clean":** Simply replace old code with new code (Approach 2), no #ifdef wrappers needed.\n\n`;
	md += `---\n\n`;
	return md;
}

export function exportMigrationAgentReport(openAfter: boolean = true, filterUri?: vscode.Uri): string
{
	let isEmpty = true;
	migrationDiagnosticsCollection.forEach((uri, diagnostics) => {
		if (filterUri && uri.toString() !== filterUri.toString()) { return; }
		if (diagnostics.length > 0) { isEmpty = false; }
	});
	if (isEmpty) {
		if (openAfter) {
			vscode.window.showWarningMessage("No migration issues found. Run Migration Check first.");
		}
		return '';
	}

	// Infer source/target devices from collected metadata
	let inferredSource = "SourceDevice";
	let inferredTargets = new Set<string>();
	for (const [key, val] of migrationDiagnosticMetadata) {
		if (filterUri && !key.startsWith(filterUri.fsPath + ":")) { continue; }
		inferredSource = val.sourceDevice;
		inferredTargets.add(val.targetDevice);
	}
	const inferredTargetStr = Array.from(inferredTargets).join(", ") || "TargetDevice";

	const timestamp = new Date().toISOString();
	let md = `# C2000 Migration Agent Report\n`;
	md += `**Generated:** ${timestamp}\n`;
	md += `**Migration:** \`${inferredSource}\` → \`${inferredTargetStr}\`\n\n`;
	md += buildMigrationAgentReportInstructions(inferredSource, inferredTargetStr);

	let totalIssues = 0;
	let autoFixable = 0;
	let filesWithIssues = 0;
	let uniqueCollateralLinks = new Map<string, {label: string, symbols: string[]}>(); // url -> {label, affected symbols}
	let issuesMd = `## Issues by File\n\n`;
	let globalIssueIndex = 0;

	// Pre-pass: count total issues for global index denominator
	migrationDiagnosticsCollection.forEach((uri, diagnostics) => {
		if (filterUri && uri.toString() !== filterUri.toString()) { return; }
		if (diagnostics.length > 0) { totalIssues += diagnostics.length; }
	});
	const grandTotal = totalIssues;
	totalIssues = 0; // reset; will recount during render pass

	migrationDiagnosticsCollection.forEach((
		uri: vscode.Uri,
		diagnostics: readonly vscode.Diagnostic[]) => {
			if (filterUri && uri.toString() !== filterUri.toString()) { return; }
			if (diagnostics.length === 0) { return; }
			filesWithIssues++;
			issuesMd += `### \`${uri.fsPath}\`\n\n`;
			for (const diagnostic of diagnostics) {
				totalIssues++;
				globalIssueIndex++;
				const { start } = diagnostic.range;
				const line = start.line + 1;
				const col = start.character + 1;
				// Extract symbol name: message format is "CODE: description"
				const colonIdx = diagnostic.message.indexOf(": ");
				const symbolName = colonIdx > 0 ? diagnostic.message.substring(0, colonIdx) : diagnostic.message;

				// Find best matching metadata (any target device for this file/line/symbol)
				let meta: DiagnosticMeta | undefined;
				for (const [key, val] of migrationDiagnosticMetadata) {
					if (key.startsWith(`${uri.fsPath}:${start.line}:${symbolName}:`)) {
						meta = val;
						break;
					}
				}

				const isAutoFixable = meta ? meta.compatible : false;
				if (isAutoFixable) { autoFixable++; }
				const statusBadge = isAutoFixable ? "Auto-fixable ✓" : "Needs manual review ⚠";
				const deviceInfo = meta ? ` (${meta.sourceDevice} → ${meta.targetDevice})` : "";

				issuesMd += `#### Issue ${globalIssueIndex} of ${grandTotal} — \`${symbolName}\` [Line ${line}, Col ${col}]${deviceInfo}\n`;
					if (meta) {
						issuesMd += `- **Type:** ${meta.type}\n`;
						issuesMd += `- **Category:** ${meta.category || "N/A"}\n`;
						issuesMd += `- **Change:** \`${meta.changeType}\`\n`;
					}
					issuesMd += `- **Status:** ${statusBadge}\n`;
					issuesMd += `- **Description:** ${diagnostic.message}\n`;
					// Only emit fixMsg if it differs from the diagnostic message (avoids repeating identical text)
					if (meta && meta.fixMsg && meta.fixMsg !== "" && meta.fixMsg !== diagnostic.message) {
						issuesMd += `- **Fix Note:** ${meta.fixMsg}\n`;
					}
					if (meta && meta.collateralLink) {
						const linkLabel = `${meta.sourceDevice} → ${meta.targetDevice} Migration Guide`;
						issuesMd += `- **Migration Collateral:** [${linkLabel}](${meta.collateralLink})\n`;
						const entry = uniqueCollateralLinks.get(meta.collateralLink);
						if (entry) {
							if (!entry.symbols.includes(symbolName)) { entry.symbols.push(symbolName); }
						} else {
							uniqueCollateralLinks.set(meta.collateralLink, {label: linkLabel, symbols: [symbolName]});
						}
					}
					if (meta && meta.fix && meta.fix !== "Not Applicable") {
						issuesMd += `- **Suggested fix:**\n  \`\`\`c\n  ${meta.fix}\n  \`\`\`\n`;
					}
					issuesMd += `\n`;
			}
			issuesMd += `---\n\n`;
	});

	// Build summary table now that we have counts
	md += `## Summary\n\n`;
	md += `> **Tip for AI Agent:** Start with the ${autoFixable} Auto-fixable issue(s) first — they require no research. Then address the ${totalIssues - autoFixable} manual review item(s).\n\n`;
	md += `| Metric | Count |\n|--------|-------|\n`;
	md += `| Files with issues | ${filesWithIssues} |\n`;
	md += `| Total issues | ${totalIssues} |\n`;
	md += `| Auto-fixable ✓ | ${autoFixable} |\n`;
	md += `| Needs manual review ⚠ | ${totalIssues - autoFixable} |\n\n`;
	md += `---\n\n`;
	md += issuesMd;

	// Add unique migration collateral links collected from issues (with affected symbols per link)
	if (uniqueCollateralLinks.size > 0) {
		md += `### Migration Collateral Links (Summary)\n\n`;
		md += `Each link below points to the TI migration guide covering the listed changed symbols:\n\n`;
		let linkIdx = 1;
		uniqueCollateralLinks.forEach(({label, symbols}, link) => {
			md += `${linkIdx++}. [${label}](${link})\n`;
			md += `   - **Covers changed symbols:** ${symbols.map(s => `\`${s}\``).join(", ")}\n`;
		});
		md += `\n`;
	}

	if (openAfter) {
		const filename = "migration_agent_report.md";
		vscode.workspace.openTextDocument().then((textDoc: vscode.TextDocument) => {
			vscode.window.showTextDocument(textDoc, 2, false).then(textEditor => {
				textEditor.edit(edit => {
					edit.insert(new vscode.Position(0, 0), md);
				});
				vscode.window.showInformationMessage(`Opened report: ${filename}`);
			});
		}, (_error: any) => {
		});
	}

	return md;
}

export function exportProjectMigrationAgentReport(projectInfo: project.ProjectInfo, openAfter: boolean = true): string
{
	const projectUri = projectInfo.uri;
	const projectFsPath = projectUri.fsPath || projectUri.path;

	let isEmpty = true;
	migrationDiagnosticsCollection.forEach((uri, diagnostics) => {
		if (uri.path.includes(projectInfo.uri.path) && diagnostics.length > 0) { isEmpty = false; }
	});
	if (isEmpty) {
		if (openAfter) {
			vscode.window.showWarningMessage("No migration issues found for this project. Run Migration Check first.");
		}
		return '';
	}

	const timestamp = new Date().toISOString();
	const ignoredSymbols = projectInfo.migrationState.migrationCheckExceptions;
	const ignoredFolders = projectInfo.migrationState.migrationCheckFolderExceptions;

	let totalFilesAnalyzed = 0;
	migrationDiagnosticsCollection.forEach((uri) => {
		if (uri.path.includes(projectInfo.uri.path)) { totalFilesAnalyzed++; }
	});

	let md = `# C2000 Migration Agent Report\n`;
	md += `Generated: ${timestamp}\n\n`;
	md += `## Project: ${projectInfo.name}\n\n`;
	md += `- **Path:** \`${projectFsPath}\`\n`;
	md += `- **Migration:** ${projectInfo.migrationState.currentDevice} → ${projectInfo.migrationState.migrationDevices.join(", ")}\n`;
	md += `- **Files Analyzed:** ${totalFilesAnalyzed}\n`;
	md += `- **Ignored Symbols (${(ignoredSymbols && ignoredSymbols.length > 0) ? ignoredSymbols.length : 0}):** ${(ignoredSymbols && ignoredSymbols.length > 0) ? ignoredSymbols.join(", ") : "None"}\n`;
	md += `- **Ignored Folders (${(ignoredFolders && ignoredFolders.length > 0) ? ignoredFolders.length : 0}):** ${(ignoredFolders && ignoredFolders.length > 0) ? ignoredFolders.map(f => `\`${projectFsPath}/${f}\``).join(", ") : "None"}\n\n`;
	if ((ignoredSymbols && ignoredSymbols.length > 0) || (ignoredFolders && ignoredFolders.length > 0)) {
		md += `> ⚠️ **AI Agent — Ignored Items Notice:** The symbols and folders listed above as "Ignored" have been **explicitly excluded** by the user from migration checks. `;
		md += `**Do NOT suggest or apply fixes for any issues located in ignored folders or involving ignored symbols.** `;
		md += `If you encounter code that references an ignored symbol, leave it unchanged and do not flag it as needing migration.\n\n`;
	}
	const firstTargetDevice = projectInfo.migrationState.migrationDevices[0] ?? "TargetDevice";
	md += buildMigrationAgentReportInstructions(projectInfo.migrationState.currentDevice, firstTargetDevice);

	let totalIssues = 0;
	let autoFixable = 0;
	let filesWithIssues = 0;
	let uniqueCollateralLinks = new Map<string, {label: string, symbols: string[]}>(); // url -> {label, affected symbols}
	let issuesMd = `## Issues by File\n\n`;
	let globalIssueIndex = 0;

	// Pre-pass: count total issues for global index denominator
	migrationDiagnosticsCollection.forEach((uri, diagnostics) => {
		if (uri.path.includes(projectInfo.uri.path) && diagnostics.length > 0) { totalIssues += diagnostics.length; }
	});
	const grandTotal = totalIssues;
	totalIssues = 0;

	migrationDiagnosticsCollection.forEach((
		uri: vscode.Uri,
		diagnostics: readonly vscode.Diagnostic[]) => {
			if (!uri.path.includes(projectInfo.uri.path) || diagnostics.length === 0) { return; }
			filesWithIssues++;
			const relativePath = path.relative(projectFsPath, uri.fsPath);
			issuesMd += `### \`${relativePath}\`\n`;
			issuesMd += `> Absolute path: \`${uri.fsPath}\`\n\n`;
			for (const diagnostic of diagnostics) {
				totalIssues++;
				globalIssueIndex++;
				const { start } = diagnostic.range;
				const line = start.line + 1;
				const col = start.character + 1;
				const colonIdx = diagnostic.message.indexOf(": ");
				const symbolName = colonIdx > 0 ? diagnostic.message.substring(0, colonIdx) : diagnostic.message;

				let meta: DiagnosticMeta | undefined;
				for (const [key, val] of migrationDiagnosticMetadata) {
					if (key.startsWith(`${uri.fsPath}:${start.line}:${symbolName}:`)) {
						meta = val;
						break;
					}
				}

				const isAutoFixable = meta ? meta.compatible : false;
				if (isAutoFixable) { autoFixable++; }
				const statusBadge = isAutoFixable ? "Auto-fixable ✓" : "Needs manual review ⚠";
				const deviceInfo = meta ? ` (${meta.sourceDevice} → ${meta.targetDevice})` : "";

				issuesMd += `#### Issue ${globalIssueIndex} of ${grandTotal} — \`${symbolName}\` [Line ${line}, Col ${col}]${deviceInfo}\n`;
					if (meta) {
						issuesMd += `- **Type:** ${meta.type}\n`;
						issuesMd += `- **Category:** ${meta.category || "N/A"}\n`;
						issuesMd += `- **Change:** \`${meta.changeType}\`\n`;
					}
					issuesMd += `- **Status:** ${statusBadge}\n`;
					issuesMd += `- **Description:** ${diagnostic.message}\n`;
					// Only emit fixMsg if it differs from the diagnostic message (avoids repeating identical text)
					if (meta && meta.fixMsg && meta.fixMsg !== "" && meta.fixMsg !== diagnostic.message) {
						issuesMd += `- **Fix Note:** ${meta.fixMsg}\n`;
					}
					if (meta && meta.collateralLink) {
							const linkLabel = `${meta.sourceDevice} → ${meta.targetDevice} Migration Guide`;
							issuesMd += `- **Migration Collateral:** [${linkLabel}](${meta.collateralLink})\n`;
							const entry = uniqueCollateralLinks.get(meta.collateralLink);
							if (entry) {
								if (!entry.symbols.includes(symbolName)) { entry.symbols.push(symbolName); }
							} else {
								uniqueCollateralLinks.set(meta.collateralLink, {label: linkLabel, symbols: [symbolName]});
							}
						}
					if (meta && meta.fix && meta.fix !== "Not Applicable") {
						issuesMd += `- **Suggested fix:**\n  \`\`\`c\n  ${meta.fix}\n  \`\`\`\n`;
					}
					issuesMd += `\n`;
			}
			issuesMd += `---\n\n`;
	});

	// Build summary table now that we have counts
	md += `## Summary\n\n`;
	md += `> **Tip for AI Agent:** Start with the ${autoFixable} Auto-fixable issue(s) first — they require no research. Then address the ${totalIssues - autoFixable} manual review item(s).\n\n`;
	md += `| Metric | Count |\n|--------|-------|\n`;
	md += `| Files with issues | ${filesWithIssues} |\n`;
	md += `| Total issues | ${totalIssues} |\n`;
	md += `| Auto-fixable ✓ | ${autoFixable} |\n`;
	md += `| Needs manual review ⚠ | ${totalIssues - autoFixable} |\n\n`;
	md += `---\n\n`;
	md += issuesMd;

	// Add unique migration collateral links collected from issues (with affected symbols per link)
	if (uniqueCollateralLinks.size > 0) {
		md += `### Migration Collateral Links (Summary)\n\n`;
		md += `Each link below points to the TI migration guide covering the listed changed symbols:\n\n`;
		let linkIdx = 1;
		uniqueCollateralLinks.forEach(({label, symbols}, link) => {
			md += `${linkIdx++}. [${label}](${link})\n`;
			md += `   - **Covers changed symbols:** ${symbols.map(s => `\`${s}\``).join(", ")}\n`;
		});
		md += `\n`;
	}

	if (openAfter) {
		const filename = `${projectInfo.name}_migration_agent_report.md`;
		vscode.workspace.openTextDocument().then((textDoc: vscode.TextDocument) => {
			vscode.window.showTextDocument(textDoc, 2, false).then(textEditor => {
				textEditor.edit(edit => {
					edit.insert(new vscode.Position(0, 0), md);
				});
				vscode.window.showInformationMessage(`Opened report: ${filename}`);
			});
		}, (_error: any) => {
		});
	}

	return md;
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