import * as vscode from 'vscode';
import path = require('path');
import * as deviceData from '../deviceData';


export async function selectDeviceFamily() {

	let options = deviceData.DEVICE_LIST.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Select a device family',
			title: "Select a device family"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}

export async function selectDriverlibMigrationFromDeviceFamily() {
	let options = deviceData.DEVICE_LIST.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Migrating from the device family (driverlib)',
			title: "Migrating from the device family (driverlib)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}

export async function selectDriverlibMigrationToDeviceFamily(excludedDevices: string[]) {
	let deviceSelections = deviceData.DEVICE_LIST;
	if(excludedDevices.length !== 0){
		let tempArray = [];
		//Push only non-excluded devices to temp array
		for(let i = 0; i < deviceSelections.length; i++){
			if(!(excludedDevices.includes(deviceSelections[i]))){
				tempArray.push(deviceSelections[i]);
			}
		}
		//Replace deviceSelections with tempArray to remove migration - from device
		deviceSelections = tempArray;
	}
	let options = deviceSelections.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Migrating to the device family (driverlib)',
			title: "Migrating to the device family (driverlib)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}



export async function selectBitfieldDeviceFamily() {
	let options = deviceData.BITFIELD_DEVICE_LIST.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Select a device family (bitfield)',
			title: "Select a device family (bitfield)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}


export async function selectBitfieldMigrationFromDeviceFamily() {
	let options = Object.keys(deviceData.BITFIELD_MIGRATION_PAIRS).map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Migrating from the device family (bitfield)',
			title: "Migrating from the device family (bitfield)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}

export async function selectBitfieldMigrationToDeviceFamily(fromDevice : string) {
	let options = deviceData.BITFIELD_MIGRATION_PAIRS[fromDevice].map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Migrating to the device family (bitfield)',
			title: "Migrating to the device family (bitfield)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}

export async function selectMigrationResolutionDeviceFamily() {
	let options = deviceData.MIGRATION_RESOLUTION_DEVICE_LIST.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Select a device family (f29migration)',
			title: "Select a device family (f29migration)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}


export async function selectMigrationResolutionFromDeviceFamily() {
	let options = deviceData.MIGRATION_RESOLUTION_FROM_DEVICE_LIST.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Migrating from the device family (f29migration)',
			title: "Migrating from the device family (f29migration)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}

export async function selectMigrationResolutionToDeviceFamily() {
	let options = deviceData.MIGRATION_RESOLUTION_TO_DEVICE_LIST.map(dev => {
		return {
			label: dev,
			picked: false,
		};
	});
	const confirmed = await vscode.window.showQuickPick(
		options, 
		{
			placeHolder: 'Migrating to the device family (f29migration)',
			title: "Migrating to the device family (f29migration)"
		}
	);

	if (confirmed)
	{
		return confirmed.label;
	}
	
	return "";
}

export function isDeviceInMigrationResolutionList(device : string): boolean {
	return deviceData.MIGRATION_RESOLUTION_TO_DEVICE_LIST.includes(device);
	
}

export function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

export async function getFileTypesInFolder(folderUri : vscode.Uri, fileExtensions : string []): Promise<vscode.Uri[]>
{
	var fileUris: vscode.Uri[] = [];
	let folderContents = await vscode.workspace.fs.readDirectory(folderUri);

	for (let folderContentItem of folderContents)
	{
		var folderContentItemName = folderContentItem[0];
		var folderContentItemPath = path.join(folderUri.path, folderContentItemName);
		if (folderContentItem[1] === vscode.FileType.File)
		{
			let filePath = folderContentItemPath;
			if (fileExtensions.includes(path.extname(filePath)))
			{
				let fileUri = vscode.Uri.file(filePath);
				fileUris.push(fileUri);
			}
		}
		else if (folderContentItem[1] === vscode.FileType.Directory)
		{
			var subFolderUri = vscode.Uri.file(folderContentItemPath);
			fileUris = fileUris.concat(await getFileTypesInFolder(subFolderUri, fileExtensions));
		}
	}

	return fileUris;

}

export async function getIgnoredProjectCCodeUris(projectFsPath: string, migrationCheckFolderExceptions: string[]): Promise<vscode.Uri[]> {
	const projectCCodeUrisIgnored: vscode.Uri[] = [];
	const outputChannel = vscode.window.createOutputChannel("Ignored Files Output"); // Create output channel
	// Convert exceptions to URIs
	const ignoredFoldersFiles = migrationCheckFolderExceptions.map(exception => projectFsPath + "/" + exception);
	const ignoredFoldersFilesUris = ignoredFoldersFiles.map(exceptionPath => vscode.Uri.file(exceptionPath));

	for (const ignoredUri of ignoredFoldersFilesUris) {
    	const ignoredFsPath = ignoredUri.fsPath || ignoredUri.path;

    	// Check if the ignored path is a file
    	if (ignoredFsPath.endsWith(".c") || ignoredFsPath.endsWith(".h")) {
        	projectCCodeUrisIgnored.push(ignoredUri);
        	outputChannel.appendLine(`Ignored file: ${ignoredFsPath}`);
    	} else {
        	// It's a folder, retrieve its .c and .h files
        	const projectCCodeUrisFolder = await getFileTypesInFolder(ignoredUri, [".c", ".h"]);
        	projectCCodeUrisIgnored.push(...projectCCodeUrisFolder);
        	outputChannel.appendLine(`Ignored folder: ${ignoredFsPath}`);
    	}	
	}

	outputChannel.show(); // Show the output channel if needed
	return projectCCodeUrisIgnored; // Return the accumulated URIs 
}

export async function getFileInFoldersRecursive(folderUri : vscode.Uri, fileName : string): Promise<vscode.Uri | undefined>
{
	let fUri = vscode.Uri.from(folderUri);
	let folderContents = await vscode.workspace.fs.readDirectory(fUri);

	for (let folderContentItem of folderContents)
	{
		var folderContentItemName = folderContentItem[0];
		var folderContentItemPath = path.join(fUri.path, folderContentItemName);
		if (folderContentItem[1] === vscode.FileType.File)
		{
			let filePath = folderContentItemPath;
			if (fileName === path.basename(filePath))
			{
				let fileUri = vscode.Uri.file(filePath);
				return fileUri;
			}
		}
		else if (folderContentItem[1] === vscode.FileType.Directory)
		{
			var subFolderUri = vscode.Uri.file(folderContentItemPath);
			let fileUri = await getFileInFoldersRecursive(subFolderUri, fileName);
			if (fileUri)
			{
				return fileUri;
			}
		}
	}

	return undefined;

}

export async function readExtensionJSON(context: vscode.ExtensionContext,pathSegmenets: string [])
{
	var jsonFileArray = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(context.extension.extensionUri, ...pathSegmenets));
	const jsonContent = Buffer.from(jsonFileArray).toString('utf8');
	var jsonObject = JSON.parse(jsonContent);
	return jsonObject;
}

export async function readJSON(uri: vscode.Uri)
{
	var jsonFileArray = await vscode.workspace.fs.readFile(uri);
	const jsonContent = Buffer.from(jsonFileArray).toString('utf8');
	var jsonObject = JSON.parse(jsonContent);
	return jsonObject;
}


export async function yesNoUserPick(question: string): Promise<boolean | undefined>{

	const confirmed = await vscode.window.showQuickPick(
		[
			{
				label: "No",
				picked: true,
			},
			{
				label: "Yes",
				picked: false,
			}
		], 
		{
			placeHolder: 'No',
			title: question
		}
	);

	if (confirmed?.label === "Yes")
	{
		return true;
	}
	
	return false;
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getNoneIconPath(extensionContext: vscode.ExtensionContext)
{
	return vscode.Uri.joinPath(extensionContext.extensionUri, ..."resources/common/none.png".split("/"));
}

export async function isCommandAvailable(cmdId: string): Promise<boolean>{
	let cmdList = await vscode.commands.getCommands();
	if (cmdList.includes(cmdId))
	{
		return true;
	}
	return false;
}

export async function isTheiaEnv(): Promise<boolean> {
	return isCommandAvailable('ccs.open.browser');
}