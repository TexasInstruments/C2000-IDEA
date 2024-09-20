import * as vscode from 'vscode';
import * as project from './utilities/project';
import * as utils from './utilities/utils';
import * as info from './utilities/info';
import * as preprocessor from './utilities/preprocessor';
import * as deviceData from './deviceData';
import * as register from './register';
import path = require('path');

const C2000_MIGRATION_DIAGNOSTIC_COLLECTION_NAME = "C2000 Migration";
const C2000_MIGRATION_INCOMPAT_CODE = "C2000_MIGRATION_INCOMPAT";
const C2000_MIGRATION_INCOMPAT_SOURCE = "C2000 Migration Check";
const C2000_MIGRATION_C2000WARE_VERSION = "C2000Ware_5_02_00_00";
const C2000_AUTO_MIGRATION_GUIDE_LINK = "https://dev.ti.com/tirex/content/" + C2000_MIGRATION_C2000WARE_VERSION + "/docs/" + C2000_MIGRATION_C2000WARE_VERSION + "_Migration_Guides/html_pages/";

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

var migrationDiagnosticsCollection : vscode.DiagnosticCollection;

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
		migrationRunMigrationCheckOnActiveTextEditor(context);
    });

	let runProjectMigrationCheckDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK_ON_PROJECT, (args) => {
		if (args && args.treeItem && args.projectInfo)
		{
			migrationRunMigrationCheckOnProject(context, args.projectInfo.name);
		}
		else {
			migrationRunMigrationCheckOnProject(context);
		}
	});

	let setUpMigrationCommand = vscode.commands.registerCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION, (args) => {
		if (args && args.treeItem && args.projectInfo)
		{
			migrationSetupProjectMigrationSettings(context, args.projectInfo.name);
		}
		else {
			migrationSetupProjectMigrationSettings(context);
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

	let exportMigrationDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_EXPORT_MIGRATION_REPORT, (args)=>{
		if (args && args.treeItem && args.projectInfo)
		{
			exportProjectMigrationDiagnostics(args.projectInfo);
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
		ignoreMigrationIncompatDisposal
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

export async function migrationRunMigrationCheckOnProject(context: vscode.ExtensionContext, projectName?:string)
{
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
		var currentDevice = projectInfo.migrationState.currentDevice;
		var migrationDevices = projectInfo.migrationState.migrationDevices;
		var projectCCodeUris = await utils.getFileTypesInFolder(projectInfo.uri, [".c", ".h"]);
		
		migrationCodeActions = [];
		migrationCodeLenses = [];
		migrationDiagnosticsCollection.clear();
		for (var ccodeUri of projectCCodeUris)
		{
			await migrationRunMigrationCheckOnUri(context, ccodeUri, currentDevice, migrationDevices);
		}
	}

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
	var jsonMigrationDriverlibResolutionData = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", jsonMigrationDriverlibResolutionDataName));
	const jsonMigrationDriverlibResolutionDataContent = Buffer.from(jsonMigrationDriverlibResolutionData).toString('utf8');
	var jsonMigrationDriverlibResolution: MigrationDriverlibResolutionData = JSON.parse(jsonMigrationDriverlibResolutionDataContent);

	return jsonMigrationDriverlibResolution;
}


export async function migrationRunMigrationCheckOnUri(context: vscode.ExtensionContext, uri: vscode.Uri, currentDevice: string, migrationDevices: string[])
{
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

		var currentAndMigrationDeviceList = [currentDevice].concat(migrationDevices);

		var topContext: preprocessor.PreprocessorContext = {
			activeContext: currentAndMigrationDeviceList,
			inverseContext: [],
			parentContext: undefined
		};

		var currnetContext : preprocessor.PreprocessorContext|undefined = topContext;
		let contextToolTip = "Detected by the C2000 Migration tool - Do NOT modify the format\nNo parenthesis or inversion (!) allowed";
		var document = await vscode.workspace.openTextDocument(uri);
		
		for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++)
		{
			let line = document.lineAt(lineNumber);
			let lineText = line.text;
			let lineEnumChangeCount = 0;
			let lineAllEnumChangeQuickFixMessage;
			const All_FIX_THRESHOLD = 1;

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
			let lastMigrationDevice: string = "";

			let leadingSpaces = countLeadingSpaces(lineText); // leading spaces count in a line
			let leadingSpacesString = ' '.repeat(leadingSpaces); 
			let trimmedLineText = lineText.trimStart();  // line without leading spaces

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

			for (var deviceMigrationData of devicesMigrationData)
			{
				let allRemoved = deviceMigrationData.migrationData.removed;
				let allChanged = deviceMigrationData.migrationData.changed;
				let allRemovedDriverlibResolution = deviceMigrationData.migrationDriverlibResolutionData.removed;
				let allChangedDriverlibResolution = deviceMigrationData.migrationDriverlibResolutionData.changed;
				
				let severity = vscode.DiagnosticSeverity.Error;
				for (var allRemovedChanged of [allRemoved, allChanged])
				{
					for (let removedChanged of allRemovedChanged)
					{
						let code = removedChanged.code;
						let msg = removedChanged.msg;
						let type = removedChanged.type;
						let category = removedChanged.category;

						let fix:string = "Not Applicable";
						let compatible;
						let driverlibChange = 0;
						let alternateCodeMessage = "//Enter alternate code";

						if(await utils.isDeviceInMigrationResolutionList(deviceMigrationData.migrationDevice)){
							for (var allRemovedChangedDriverlibResolution of [allRemovedDriverlibResolution, allChangedDriverlibResolution])
								{
									for (let removedChangedDriverlibResolution of allRemovedChangedDriverlibResolution)
									{
										let code_driverlib = removedChangedDriverlibResolution.code; 
										if (code == code_driverlib){
											msg = removedChangedDriverlibResolution.fixMsg;
											fix = removedChangedDriverlibResolution.fix;
											compatible = removedChangedDriverlibResolution.compatible;
											driverlibChange = 1;
										}
									}
								}
						}

						if (type === "reg")
						{
							code = getRegisterMigrationDriverlibCode(removedChanged);
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

							if (driverlibChange == All_FIX_THRESHOLD){
								if ((type === "enum")) {
									alternateCodeMessage = "// " + "Suggested replacement: " + trimmedLineText.replace(code,fix);
									lineEnumChangeCount++;
									if (lineEnumChangeCount > All_FIX_THRESHOLD) { 
										codeForLineWithMultiFix[lineEnumChangeCount - 1] = code; 
										fixForLineWithMultiFix[lineEnumChangeCount - 1] = fix;
										lineWithChangesApplied[0] = trimmedLineText.replace(codeForLineWithMultiFix[0],fixForLineWithMultiFix[0]);
										lastMigrationDevice = deviceMigrationData.migrationDevice;
									}
									else {
										codeForLineWithMultiFix[0] = code;
										fixForLineWithMultiFix[0] = fix;
									}
								}
								else if (type === "function")
								{
									if (compatible){
										alternateCodeMessage = "// " + "Suggested replacement: " + trimmedLineText;
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
							if ((wordText === code) || (type === "reg")) {

								let diagnostic = new vscode.Diagnostic(wordRange, type + " " + code + ": " + msg,
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
										link: C2000_AUTO_MIGRATION_GUIDE_LINK + "diff_reports/" + C2000_MIGRATION_C2000WARE_VERSION + "_" + 
											currentDevice.toLowerCase() + 
											"_vs_" + C2000_MIGRATION_C2000WARE_VERSION + "_" + 
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
					}
					severity = vscode.DiagnosticSeverity.Warning;
				}
			}
			//
			// Combined ENUM Fix
			//
			if ((lineEnumChangeCount > All_FIX_THRESHOLD) && lastMigrationDevice){
				for(let i = 1; i < lineEnumChangeCount; i++){
					lineWithChangesApplied[i] = lineWithChangesApplied[i-1].replace(codeForLineWithMultiFix[i],fixForLineWithMultiFix[i]);
					lineAllEnumChangeQuickFixMessage = "// " + "Suggested replacement:" + lineWithChangesApplied[i];
				}

				let codeActionWrapInIfDefcombined = new vscode.CodeAction("All Enum fixes Wrap in device specific #IFDEF for " + currentDevice + " and " + lastMigrationDevice , vscode.CodeActionKind.QuickFix);
				codeActionWrapInIfDefcombined.edit = new vscode.WorkspaceEdit();
				codeActionWrapInIfDefcombined.edit.replace(uri, 
					new vscode.Range(new vscode.Position(lineNumber, 0), new vscode.Position(lineNumber, lineText.length)), 
					"#if " + currentDevice + " //_DEVICE_MIGRATION_\n" + lineText + "\n" +
					"#elif " + lastMigrationDevice + " //_DEVICE_MIGRATION_\n" + leadingSpacesString + lineAllEnumChangeQuickFixMessage + "\n" +
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
		migrationDiagnosticsCollection.set(uri, migrationDiagnostics);
	}
}

export async function migrationRunMigrationCheckOnActiveTextEditor(context: vscode.ExtensionContext)
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

		await migrationRunMigrationCheckOnUri(context, vscode.window.activeTextEditor.document.uri, currentDevice, migrationDevices);
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

function exportProjectMigrationDiagnostics(projectInfo: project.ProjectInfo)
{
	let exportText = "";

	exportText += "Migration Info\n";
	exportText += "From: " + projectInfo.migrationState.currentDevice + "\n";
	exportText += "To: " + projectInfo.migrationState.migrationDevices.join(", ") + "\n";
	exportText += "Ignores the following migration incompatibilities: " + projectInfo.migrationState.migrationCheckExceptions?.join(", ") + "\n";

	migrationDiagnosticsCollection.forEach((
		uri: vscode.Uri, 
		diagnostics: readonly vscode.Diagnostic[], 
		collection: vscode.DiagnosticCollection) => {
			if (uri.path.includes(projectInfo.uri.path))
			{
				exportText += "File: " + uri.fsPath + "\n";
				for (let diagnostic of diagnostics){
					exportText += vscode.DiagnosticSeverity[diagnostic.severity].toString() + " - " + diagnostic.message + "\n";
				}
				exportText += "\n";
			}
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