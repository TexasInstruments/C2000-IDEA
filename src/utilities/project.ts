import { checkPrimeSync } from 'crypto';
import path = require('path');
import * as vscode from 'vscode';
import * as deviceData from '../deviceData';
import * as utils from './utils';
import * as info from './info';

export type ProjectChangeHandler  = (context: vscode.ExtensionContext, activeProjectInfo: ProjectInfo | undefined) => void;
export type ProjectWordSelectionChangeHandler  = (context: vscode.ExtensionContext, activeProjectInfo: ProjectInfo | undefined, word: string) => void;
export type ProjectInfosUpdateHandler  = (context: vscode.ExtensionContext, allProjectInfos: ProjectInfo[]) => void;

export var deviceChangeSubscription : ProjectChangeHandler[] = [];
export var wordChangeSubscription : ProjectWordSelectionChangeHandler[] = [];
export var projectInfosUpdateSubscription : ProjectInfosUpdateHandler[] = [];
export var extensionContext : vscode.ExtensionContext;

type MigrationState = {
	migrationDevices : string[], 
	currentDevice : string,
	migrationCheckExceptions? : string[],
	migrationCheckFolderExceptions? : string[]
};

export type ProjectInfo = {
	workspaceUri: vscode.Uri,
	name: string,
	uri: vscode.Uri,
	deviceVariant: string,
	migrationState: MigrationState
};

export var allProjectInfos : ProjectInfo [] = [];
const PROJECT_STATE_KEY = "projectState";

const C2000_IS_PROJECT_CONTEXT = 'c2000-idea.isC2000Project';
let projectIsC2000Status = false;
function projectUpdateIsC2000Status(status: boolean)
{
	projectIsC2000Status = status;
	vscode.commands.executeCommand('setContext', C2000_IS_PROJECT_CONTEXT, projectIsC2000Status);
}

export async function projectGetSysConfigBoardJSON(projectInfo: ProjectInfo)
{
	var boardJSFileUri = await utils.getFileInFoldersRecursive(projectInfo.uri, "board.json");
	if (boardJSFileUri)
	{
		let boardJSFile = await utils.readJSON(boardJSFileUri);
		if (boardJSFile)
		{
			return boardJSFile;
		}
	}
}

export function addMigrationCheckException(exceptionCode: string, projectInfo: ProjectInfo)
{
	if (!projectInfo.migrationState.migrationCheckExceptions)
	{
		projectInfo.migrationState.migrationCheckExceptions = [];
	}
	projectInfo.migrationState.migrationCheckExceptions.push(exceptionCode);
	saveProjects(extensionContext);
}

export function addMigrationCheckFolderException(exceptionFolder: string, projectInfo: ProjectInfo)
{
	if (!projectInfo.migrationState.migrationCheckFolderExceptions)
	{
		projectInfo.migrationState.migrationCheckFolderExceptions = [];
	}
	projectInfo.migrationState.migrationCheckFolderExceptions.push(exceptionFolder);
	saveProjects(extensionContext);
}

export function projectGetCurrentDevice() : string
{
	const projectConfig = vscode.workspace.getConfiguration('c2000-idea.project');
    var device: string = "";
	var activeProjectInfo = projectGetActiveProjectInfo();
	if (activeProjectInfo)
	{
		device = activeProjectInfo.migrationState.currentDevice;
	}
	if (!device)
	{
		if (projectConfig.defaultDevice !== "None"){
			device = projectConfig.defaultDevice;
		}
	}
    return device;
}

function projectGetActiveProjectInfo()
{
	if (vscode.window.activeTextEditor)
	{
		var activeTextDocPath = vscode.window.activeTextEditor.document.uri.path;
		for (var projectInfo of allProjectInfos)
		{
			if (activeTextDocPath.includes(projectInfo.uri.path))
			{
				return projectInfo;
			}
		}
	}

	return undefined;
}

export function projectGetUriProjectInfo(uri: vscode.Uri)
{
	var activeTextDocPath = uri.path;
	for (var projectInfo of allProjectInfos)
	{
		if (activeTextDocPath.includes(projectInfo.uri.path))
		{
			return projectInfo;
		}
	}

	return undefined;
}


let projectStatusBarItem: vscode.StatusBarItem;

export function projectSetup(context: vscode.ExtensionContext)
{
	extensionContext = context;

    var lastMigrationState = context.workspaceState.get(PROJECT_STATE_KEY);
	if (lastMigrationState)
	{
		allProjectInfos = <ProjectInfo[]>lastMigrationState;
	}

	// create a new status bar item that we can now manage
	projectStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	context.subscriptions.push(projectStatusBarItem);

	// register some listener that make sure the status bar 
	// item always up-to-date
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(projectOnChangeActiveTextEditor));

	
	context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(projectOnChangeActiveTextSelection));
	// context.subscriptions.push(vscode.workspace.onDidCreateFiles((e)=>{console.log(e);})); // only works for when you add files within VSCODE
	
	if (vscode.workspace.workspaceFolders)
	{
		// watch the top level workspace
		var watcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(
			vscode.workspace.workspaceFolders[0],
			'*'
		)); //glob search string
		watcher.onDidChange(workspaceTopLevelFolderWatcherChange);
		watcher.onDidCreate(workspaceTopLevelFolderWatcherCreate);
		watcher.onDidDelete(workspaceTopLevelFolderWatcherDelete);
	}

	
	let updateProjectDevicesDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_UPDATE_PROJECT_DEVICES, ()=>{
		if (vscode.workspace.workspaceFolders)
		{
			selectProject().then(selectedProject => {
				if (!selectedProject)
				{
					return;
				}
			
				var projectInfo = allProjectInfos.filter(projectInfo => projectInfo.name === selectedProject)[0];
				if (projectInfo)
				{
					var folderName = path.basename(projectInfo.uri.path);
					if (vscode.workspace.workspaceFolders)
					{
						updateProjects(folderName, vscode.workspace.workspaceFolders[0]).then(()=>{
							saveProjects(extensionContext);
							projectInfosUpdateSubscribers();
						});
					}
				}
			});
		}
	});

	let clearProjectsDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_CLEAR_PROJECTS, ()=>{
		utils.yesNoUserPick(
			"Are you sure you want to clear all detected projects and settings? " + 
			"(You must run `Get Projects` command afterward)").then((yesNo) => {
			if (yesNo)
			{
				clearProjects(context);
			}
		});
	});
	
	
	let getProjectDisposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_GET_PROJECTS, () => {
		getProjects(context);
	});

		
	// let projectMigrateF28toF29Disposal = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_PROJECT_MIGRATION_F28_TO_F29, () => {
	// 	runProjectMigrationF28toF29(context);
	// });

	context.subscriptions.push( 
		getProjectDisposal, updateProjectDevicesDisposal, clearProjectsDisposal);

}

async function runProjectMigrationF28toF29(context: vscode.ExtensionContext)
{
	vscode.window.showInformationMessage("Starting F28 to F29 CCS project migration");
	let projectName: string | undefined = undefined;
	let selectedProject: string | undefined;

	if (projectName)
	{
		selectedProject = projectName;
	}
	else
	{
		selectedProject = await selectProject();
	}
	if (selectedProject)
	{
		let projectInfo = allProjectInfos.filter(projectInfo => projectInfo.name === selectedProject)[0];
		let currentDevice = projectInfo.migrationState.currentDevice;
		let migrationDevices = projectInfo.migrationState.migrationDevices;

		if (currentDevice.startsWith("F28"))
		{
			console.log(projectInfo.deviceVariant);
			console.log(projectInfo.name);
			console.log(projectInfo.uri.fsPath);
			console.log(projectInfo.workspaceUri.fsPath);

			let projectFolderName = path.basename(projectInfo.uri.path);
			let projectFolderUri = vscode.Uri.joinPath(vscode.Uri.parse(projectInfo.workspaceUri.path), projectFolderName);
			var projectFileInfos = await vscode.workspace.fs.readDirectory(projectFolderUri);
			var cprojectfiles = projectFileInfos.filter(projectFileInfo => projectFileInfo[0] === ".cproject");
			if (cprojectfiles && cprojectfiles[0])
			{
				let cprojectFile = cprojectfiles[0];
				var csprojectfilebytes = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(projectFolderUri, cprojectFile[0]));
				const cprojReadStr = Buffer.from(csprojectfilebytes).toString('utf8');

				console.log(cprojReadStr);

			}

		}

	}

	vscode.window.showInformationMessage("End of F28 to F29 CCS project migration");
}

function workspaceTopLevelFolderWatcherChange(uri: vscode.Uri)
{

}
function workspaceTopLevelFolderWatcherCreate(uri: vscode.Uri)
{
	addProject(uri);
}
function workspaceTopLevelFolderWatcherDelete(uri: vscode.Uri)
{
	removeProject(uri);
}

function projectUpdateCurrentDeviceStatusbar()
{
	var device = projectGetCurrentDevice();
	if (device)
	{
		projectStatusBarItem.text = "C2000 Device: " + device;
		projectStatusBarItem.show();
	}
	else
	{
		projectStatusBarItem.hide();
	}
}

export async function selectProject(): Promise<string | undefined>{

	var projectNames : string[] = [];

	projectNames = allProjectInfos.map(item => item.name);
	if (projectNames.length === 0)
	{
		vscode.window.showErrorMessage('No project is yet to be detected. Run "Get C2000 Projects" to get the projects first.');
		return;
	}
	else
	{
		const selectedProject = await vscode.window.showQuickPick(projectNames, {
			placeHolder: 'Select a project',
			title: "Select a project from the list"
		});
	
		return selectedProject;
	}

	return ;
}

export function saveProjects(context: vscode.ExtensionContext)
{
    context.workspaceState.update(PROJECT_STATE_KEY, allProjectInfos);
	projectInfosUpdateSubscribers();
}

export function clearProjects(context: vscode.ExtensionContext)
{
    context.workspaceState.update(PROJECT_STATE_KEY, undefined);
    allProjectInfos = [];
	projectInfosUpdateSubscribers();
}

export function removeProject(projectUri: vscode.Uri)
{
	var matchingUriProjects = allProjectInfos.filter(projectInfo => projectInfo.uri.path === projectUri.path);
	if (matchingUriProjects.length > 0)
	{
		allProjectInfos.splice(allProjectInfos.indexOf(matchingUriProjects[0]), 1);
	}
	saveProjects(extensionContext);
}

export function addProject(projectUri: vscode.Uri)
{
	if (vscode.workspace.workspaceFolders)
	{
		var folderName = path.basename(projectUri.path);
		updateProjects(folderName, vscode.workspace.workspaceFolders[0]);
	}
	saveProjects(extensionContext);
}

export function updateProjectCurrentDevice(projectInfo: ProjectInfo, device: string)
{
	if (deviceData.DEVICE_LIST.includes(device)){
		projectInfo.migrationState.currentDevice = device;
		saveProjects(extensionContext);
	}
}


export async function getProjects(context: vscode.ExtensionContext)
{
    var workspaceFolder : vscode.WorkspaceFolder;
	if (vscode.workspace.workspaceFolders)
	{
		workspaceFolder = vscode.workspace.workspaceFolders[0];
		var fileInfos = await vscode.workspace.fs.readDirectory(workspaceFolder.uri);
		for (let fileInfo of fileInfos)
		{
			// Top Level folders
			if (fileInfo[0] !== ".theia" && fileInfo[1] === vscode.FileType.Directory)
			{
				await updateProjects(fileInfo[0], workspaceFolder);
			}
			
		}
	}
	saveProjects(context);
}

async function updateProjects(projectFolderName: string, workspaceFolder : vscode.WorkspaceFolder)
{
	var projectFileInfos = await vscode.workspace.fs.readDirectory(vscode.Uri.joinPath(workspaceFolder.uri, projectFolderName));
	var cprojectfiles = projectFileInfos.filter(projectFileInfo => projectFileInfo[0] === ".cproject");
	if (cprojectfiles && cprojectfiles[0])
	{
		let cprojectFile = cprojectfiles[0];
		var csprojectfilebytes = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(workspaceFolder.uri, projectFolderName, cprojectFile[0]));
		const cprojReadStr = Buffer.from(csprojectfilebytes).toString('utf8');
		let cprojIndexOfDeviceVariant = cprojReadStr.indexOf("\"DEVICE_CONFIGURATION_ID=") + "\"DEVICE_CONFIGURATION_ID=".length;
		let cprojEndOfDeviceVariant = cprojReadStr.indexOf("\"/>", cprojIndexOfDeviceVariant);
		let deviceVariant = cprojReadStr.substring(cprojIndexOfDeviceVariant, cprojEndOfDeviceVariant);
		if (deviceVariant.startsWith(deviceData.C28_DEVICE_VARIANT) ||
			deviceVariant.startsWith(deviceData.C29_DEVICE_VARIANT) )
		{
			let deviceGPN = deviceData.getDeviceGPNFromDeviceVariant(deviceVariant);
			let device = deviceData.getDeviceFamilyFromGPN(deviceGPN);
			let projectUri = vscode.Uri.joinPath(workspaceFolder.uri, projectFolderName);
			let projectName = projectFolderName;
			var matchingUriProjects = allProjectInfos.filter(projectInfo => projectInfo.uri.path === projectUri.path);
			if (matchingUriProjects.length > 0)
			{
				matchingUriProjects[0].name = projectName;
				matchingUriProjects[0].deviceVariant = deviceVariant;
				matchingUriProjects[0].migrationState.currentDevice = device;
		
				//
				// Remove the NEW CURRENT DEVICE from the migration device list.
				//
				if (matchingUriProjects[0].migrationState.migrationDevices.includes(
						matchingUriProjects[0].migrationState.currentDevice))
				{
					matchingUriProjects[0].migrationState.migrationDevices = 
						matchingUriProjects[0].migrationState.migrationDevices.filter(
							migDev => migDev !==  matchingUriProjects[0].migrationState.currentDevice);
				}	
			}
			else
			{
				allProjectInfos.push({
					workspaceUri: workspaceFolder.uri,
					name: projectName,
					uri: projectUri,
					deviceVariant: deviceVariant,
					migrationState: {
						migrationDevices: [],
						currentDevice: device,
						migrationCheckExceptions : [],
						migrationCheckFolderExceptions : []
					}
				});
			}
		}
		else
		{
			// console.log(deviceVariant, " is not a C2000 device.")
		}

	}
}

function projectInfosUpdateSubscribers()
{
	projectInfosUpdateSubscription.forEach(rojectInfosUpdateSub => {
		rojectInfosUpdateSub(extensionContext, allProjectInfos);
	});
}

export function projectOnChangeActiveTextEditor(textEditor: vscode.TextEditor | undefined) {
	projectUpdateCurrentDeviceStatusbar();

	var activeProjectInfo = projectGetActiveProjectInfo();
	projectUpdateIsC2000Status(!!activeProjectInfo);

	deviceChangeSubscription.forEach(projectChangeHanlder => {
		projectChangeHanlder(extensionContext, activeProjectInfo);
	});
}


export function projectOnChangeActiveTextSelection(textEditorSelectionChange: vscode.TextEditorSelectionChangeEvent | undefined) {
	if (textEditorSelectionChange)
	{
		if (vscode.window.activeTextEditor)
		{
			var wordRange = vscode.window.activeTextEditor.document.getWordRangeAtPosition(vscode.window.activeTextEditor.selection.active);
			if (wordRange)
			{
				var word = vscode.window.activeTextEditor.document.getText(wordRange);
				var activeProjectInfo = projectGetActiveProjectInfo();
				wordChangeSubscription.forEach(wordChangeHanlder => {
					wordChangeHanlder(extensionContext, activeProjectInfo, word);
				});
				//console.log(word);
			}
		}
		
	}
}
