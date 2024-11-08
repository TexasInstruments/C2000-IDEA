import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as c2000idea from '../../extension';
import * as migration from '../../migration';
import * as info from '../../utilities/info';
import * as project from '../../utilities/project';
import path = require('path');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
	
	test('Migration Check', async () => {
		let testUri = vscode.Uri.file("C:/Users/a0225962/workspace_idea/Universal Project F28P65x/main.c");
		let testTextDoc = await vscode.workspace.openTextDocument(testUri);
		await vscode.window.showTextDocument(testTextDoc);
		// To open a workspace folder: vscode.workspace.updateWorkspaceFolders()
		// await vscode.commands.executeCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK);
		await migration.migrationRunMigrationCheckOnUri(project.extensionContext, testUri, "F28P65x", ["F2838x"]);
		let diagnostics = vscode.languages.getDiagnostics();
		console.log(JSON.stringify(diagnostics, null, 4));
	});
});
