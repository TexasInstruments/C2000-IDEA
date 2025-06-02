import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as migration from '../../migration';
import * as project from '../../utilities/project';
import { suite, test, after } from 'mocha';

// **Toggle for regenerating golden log**
const generateGoldenLog = false; // Set to `true` for generating golden vector

const testMigrationWorkspacePath = path.resolve(__dirname, '../../../../../c2000-idea-test-source/migration/workspace/');
const goldenLogPath = path.join(testMigrationWorkspacePath, 'results/migration_goldenLog.json');
const logFilePath = path.join(testMigrationWorkspacePath, 'migrationTest_resultLog.txt');
const logPath = generateGoldenLog ? goldenLogPath : logFilePath;

// Ensure log file is cleared before test run
fs.writeFileSync(logPath, '', { encoding: 'utf-8' });

// **Function to write logs**
function logToFile(message: string) {
	fs.appendFileSync(logPath, message + '\n', { encoding: 'utf8' });
}


// **Extract Diagnostics in JSON Format with Debug Logs**
function extractDiagnostics(diagnosticsCollection: vscode.DiagnosticCollection, testUri: vscode.Uri) {
	let extractedDiagnostics: any[] = [];
	
	diagnosticsCollection.forEach((uri, diagnostics) => {
		if (uri.fsPath === testUri.fsPath) {
			diagnostics.forEach(diagnostic => {
				extractedDiagnostics.push({
					severity: vscode.DiagnosticSeverity[diagnostic.severity] || "Unknown",
					message: diagnostic.message.trim(),
					line: diagnostic.range.start.line + 1,
					charRange: `${diagnostic.range.start.character} - ${diagnostic.range.end.character}`
				});
			});
		}
	});
	return extractedDiagnostics;
}
	

// **Read Golden Vector from JSON File**
function parseGoldenVector(filePath: string, testCaseIdentifier: string): any[] {
	if (!fs.existsSync(filePath)) {
		console.log(`Golden Vector file not found: ${filePath}`);
		return [];
	}
	try {
		const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		return jsonData[testCaseIdentifier] || [];
	} catch (error) {
		logToFile(`Error reading golden vector file: ${error}`);
		return [];
	}
}
	

// **Compare Actual vs Expected Diagnostics**
function compareDiagnostics(actual: any[], expected: any[], testCaseIdentifier: string) {
	let errorsFound = false;
	let errorDetails = ""
	
	expected.forEach(exp => {
		if (!actual.some(act => JSON.stringify(act) === JSON.stringify(exp))) {
			errorDetails += `Expected Missing -> ${JSON.stringify(exp)}\n`;
			errorsFound = true;
		}
	});
	
	actual.forEach(act => {
		if (!expected.some(exp => JSON.stringify(act) === JSON.stringify(exp))) {
			errorDetails += `Unexpected Diagnostic -> ${JSON.stringify(act)}\n`;
			errorsFound = true;
		}
	});
	
	
	// Initialize table header if it's the first test case
	if (!fs.existsSync(logPath) || fs.readFileSync(logPath, 'utf-8').trim() === '') {
		logToFile(`+--------------------------------------+--------+`);
		logToFile(`|            Test Case                 | Status |`);
		logToFile(`+--------------------------------------+--------+`);
	}

	if (errorsFound) {
		logToFile(`| ${testCaseIdentifier.padEnd(36)} |  Fail  |`);
		return errorDetails;
	} else {
		logToFile(`| ${testCaseIdentifier.padEnd(36)} |  Pass  |`);
		return '';
	}
}
	



// **Test Suite for Migration**
suite('Migration Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
	let allErrors: string[] = [];
	
	test('Migration Check from F28 to F29', async () => {
		let testUri = vscode.Uri.file(path.join(testMigrationWorkspacePath, 'f28_to_f29_migration_file.c'));
		let testTextDoc = await vscode.workspace.openTextDocument(testUri);
		await vscode.window.showTextDocument(testTextDoc);

		await migration.migrationRunMigrationCheckOnUri(project.extensionContext, testUri, "F28P65x", ["F29H85x"]);
		
		let diagnosticsCollection = migration.migrationDiagnosticsCollection;
	
		let actualDiagnostics = extractDiagnostics(diagnosticsCollection, testUri);
		let testCaseIdentifier = "F28 -> F29 File Migration"
	
		if (!generateGoldenLog) {
			let expectedDiagnostics = parseGoldenVector(goldenLogPath, testCaseIdentifier);
			let errorDetails = compareDiagnostics(actualDiagnostics, expectedDiagnostics, testCaseIdentifier);
			if (errorDetails) allErrors.push(`\n====== Failed Scenarios for ${testCaseIdentifier} ====== \n${errorDetails}`);
		} else {
			// Ensure existing golden log is read properly
			let goldenData: Record<string, any[]> = {};

			if (fs.existsSync(goldenLogPath)) {
    			try {
        			const fileContent = fs.readFileSync(goldenLogPath, 'utf-8').trim();
        			goldenData = fileContent ? JSON.parse(fileContent) : {};
    			} catch (error) {
        			console.error(`Error reading golden log file: ${error}`);
    			}
			}

			// Update the golden vector
			goldenData[testCaseIdentifier] = actualDiagnostics;
			fs.writeFileSync(goldenLogPath, JSON.stringify(goldenData, null, 4), { encoding: 'utf-8' });
		}
	});
	
	test('Migration Check across F28 devices', async () => {
		let testUri = vscode.Uri.file(path.join(testMigrationWorkspacePath, 'f28_to_f28_migration_file.c'));
		let testTextDoc = await vscode.workspace.openTextDocument(testUri);
		await vscode.window.showTextDocument(testTextDoc);

		await migration.migrationRunMigrationCheckOnUri(project.extensionContext, testUri, "F28P65x", ["F2837xd"]);
	
		let diagnosticsCollection = migration.migrationDiagnosticsCollection;
	
		let actualDiagnostics = extractDiagnostics(diagnosticsCollection, testUri);
		let testCaseIdentifier = "F28 -> F28 File Migration"
	
		if (!generateGoldenLog) {
			let expectedDiagnostics = parseGoldenVector(goldenLogPath, testCaseIdentifier);
			let errorDetails = compareDiagnostics(actualDiagnostics, expectedDiagnostics, testCaseIdentifier);
			if (errorDetails) allErrors.push(`\n====== Failed Scenarios for ${testCaseIdentifier} ====== \n${errorDetails}`);
		} else {	
			// Ensure existing golden log is read properly
			let goldenData: Record<string, any[]> = {};
			
			if (fs.existsSync(goldenLogPath)) {
    			try {
        			const fileContent = fs.readFileSync(goldenLogPath, 'utf-8').trim();
        			goldenData = fileContent ? JSON.parse(fileContent) : {};
    			} catch (error) {
        			console.error(`Error reading golden log file: ${error}`);
    			}
			}

			// Update the golden vector
			goldenData[testCaseIdentifier] = actualDiagnostics;
			fs.writeFileSync(goldenLogPath, JSON.stringify(goldenData, null, 4), { encoding: 'utf-8' });
		}
	});
	
	// **After Test Suite Execution**
	after(async function() {
		if(!generateGoldenLog) {
			logToFile(`+--------------------------------------+--------+`);
			allErrors.forEach(error => logToFile(error));
		}
	});
});
	

