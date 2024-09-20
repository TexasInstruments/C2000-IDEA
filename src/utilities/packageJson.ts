import * as vscode from 'vscode';
import * as utils from "./utils";

let packageJSON : any;
let extensionContext: vscode.ExtensionContext;

export function loadPackageJSON(context: vscode.ExtensionContext)
{
	extensionContext = context;
	packageJSON = context.extension.packageJSON; 
	//await utils.readExtensionJSON(context, ["package.json"]);
}

export function getPackageJSON() {
	return packageJSON;
}

export function getPackageJSONCommands(){
	if (packageJSON && packageJSON.contributes && packageJSON.contributes.commands)
	{
		return packageJSON.contributes.commands;
	}
	return undefined;
}

export function getPackageJSONCommand(commandName: string)
{
	var command = getPackageJSONCommands().filter((item:any) => item.command === commandName);
	if (command.length)
	{
		return command[0];
	}
	return undefined;
}

export function convertJSONIconPath(icon: string | { light: string ; dark: string }): string | vscode.Uri | { light: string | vscode.Uri; dark: string | vscode.Uri } | vscode.ThemeIcon | undefined
{
	if (icon)
	{
		if (typeof icon === "string")
		{
			if (icon.startsWith("$"))
			{
				return new vscode.ThemeIcon(icon.replace("$(", "").replace(")", ""));
			}
			else
			{
				return vscode.Uri.joinPath(extensionContext.extensionUri, ...icon.split("/"));
			}
		}
		else if (icon.dark)
		{
			return {
				dark: vscode.Uri.joinPath(extensionContext.extensionUri, ...icon.dark.split("/")),
				light: vscode.Uri.joinPath(extensionContext.extensionUri, ...icon.light.split("/"))
			};
		}
	}
	return undefined;
}