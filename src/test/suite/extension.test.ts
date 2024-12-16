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
	
	test('Migration Check from F28 to F29', async () => {
		 // Specify the file URI
		let testUri = vscode.Uri.file(path.resolve(__dirname, '../../../../../c2000-idea-test-source/migration/workspace/f28_to_f29_migration_file.c'));
		// Open the file
		let testTextDoc = await vscode.workspace.openTextDocument(testUri);
		await vscode.window.showTextDocument(testTextDoc);

		// Run the migration check on the file - Provide current and migration device
		await migration.migrationRunMigrationCheckOnUri(project.extensionContext, testUri, "F28P65x", ["F29H85x"]);

 		// Get the diagnostics for the file
		let diagnostics = vscode.languages.getDiagnostics();

		// Log diagnostics (for debugging purposes)
		console.log('Start Diagnostics Data');
		console.log(JSON.stringify(diagnostics, null, 4));
		console.log('End Diagnostics Data');
	});

	test('Migration Check across F28 devcies', async () => {
		 // Specify the file URI
		let testUri = vscode.Uri.file(path.resolve(__dirname, '../../../../../c2000-idea-test-source/migration/workspace/f28_to_f28_migration_file.c'));
		// Open the file
		let testTextDoc = await vscode.workspace.openTextDocument(testUri);
		await vscode.window.showTextDocument(testTextDoc);

		// Run the migration check on the file - Provide current and migration device
		await migration.migrationRunMigrationCheckOnUri(project.extensionContext, testUri, "F28P65x", ["F2837xd"]);

		// Get the diagnostics for the file
		let diagnostics = vscode.languages.getDiagnostics();

		// Log diagnostics (for debugging purposes)
		console.log(JSON.stringify(diagnostics, null, 4));
	});

	test('Perform Quick Fix - Wrap in #Ifdef codeAction ', async () => {
		 // Specify the file URI
		let testUri = vscode.Uri.file(path.resolve(__dirname, '../../../../../c2000-idea-test-source/migration/workspace/f28_to_f29_migration_quickfix.c'));
		// Open the file
		let testTextDoc = await vscode.workspace.openTextDocument(testUri);
		await vscode.window.showTextDocument(testTextDoc);

		// Run the migration check on the file - Provide current and migration device
		await migration.migrationRunMigrationCheckOnUri(project.extensionContext, testUri, "F28P65x", ["F29H85x"]);

		// Get the diagnostics for the file
		let diagnostics = vscode.languages.getDiagnostics();

   		 // Log diagnostics (for debugging purposes)
    	console.log('Diagnostics before quick fix:');
   		console.log(JSON.stringify(diagnostics, null, 4));

		// Ensure that there are diagnostics available
		assert.ok(diagnostics.length > 0, 'No diagnostics found');
		console.log(`Number of Diagnostics : ${diagnostics.length}`);

		// Process each diagnostic and attempt to apply a quick fix
		let quickFixApplied = false;
		for (const diagnostic of diagnostics.flatMap(([_, diags]) => diags)) {
   			 // Fetch code actions for the current diagnostic
    		const codeActions = await vscode.commands.executeCommand<vscode.CodeAction[]>(
        		'vscode.executeCodeActionProvider',
       			 testUri,
        		diagnostic.range
    		);

			console.log(`Number of codeActions : ${codeActions.length}`);

   		 	if (codeActions && codeActions.length > 0) {
        	// Find the "Wrap in #IFDEF" code action by title
        	const wrapIfDefAction = codeActions.find(action => action.title.includes("Wrap in device specific #IFDEF"));
			

				if (wrapIfDefAction && wrapIfDefAction.edit) {
					console.log(`Start codeAction data`);
					console.log(`Available codeActions:`, JSON.stringify(codeActions, null, 4));
					console.log(`End codeAction data`);
					// Apply the workspace edit
					await vscode.workspace.applyEdit(wrapIfDefAction.edit);
					console.log(`Quick fix (Wrap in #IFDEF) applied for diagnostic: ${diagnostic.message}`);
					quickFixApplied = true;
					//break;
				} else {
					console.log(`"Wrap in #IFDEF" code action not found for diagnostic: ${diagnostic.message}`);
				}
			} else {
				console.log(`No code actions available for diagnostic: ${diagnostic.message}`);
			}
		}

		if (!quickFixApplied) {
    		console.log('No applicable quick fix was applied.');
		}

		// Get diagnostics again after the quick fix to check if they were resolved
		const updatedDiagnostics = vscode.languages.getDiagnostics(testUri);
		console.log('Diagnostics after quick fix:');
		console.log(JSON.stringify(updatedDiagnostics, null, 4));

	});
});
