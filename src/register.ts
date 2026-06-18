import * as vscode from 'vscode';
import * as project from './utilities/project';
import * as info from './utilities/info';
import * as utils from './utilities/utils';
import * as migration from './migration';
import * as deviceData from './deviceData';


var registerCompletions : vscode.CompletionItem [];
var extensionContext : vscode.ExtensionContext;

const C2000_REGISTER_DIAGNOSTIC_COLLECTION_NAME = "C2000 Register";
const C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_CODE = "C2000_REGISTER_DIAGNOSTIC_BITFIELD_TO_DLIB";
const C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_SOURCE = "C2000 Register bitfield to driverlib migration";
const C2000_REGISTER_DIAGNOSTIC_MIGRATION_BFIELD_CODE = "C2000_REGISTER_DIAGNOSTIC_MIGRATION_BITFIELD";
const C2000_REGISTER_DIAGNOSTIC_MIGRATION_BFIELD_SOURCE = "C2000 Register bitfield migration";



function c2000RegisterDiagnosticMigrationIgnore(ignoreRegs: string[]){
	return `/* C2000_REGISTER_MIGRATION_IGNORE=[${ignoreRegs.join(",")}] */`;
} 


var registerDiagnosticsCollection : vscode.DiagnosticCollection;
let registerCodeActionProvider: RegisterCodeActionProvider;

interface RegisterCodeActions {
	uri: vscode.Uri,
	codeAction: vscode.CodeAction
}
var registerCodeActions : RegisterCodeActions[] = [];

interface RegisterDiagnosticMeta {
	registerName: string;				// e.g., "ADCCTL2"
	bitName?: string;					// e.g., "START" (null for whole-register)
	module: string;						// e.g., "adc", "spi"
	description: string;				// Register description from TRM
	bitDescription?: string;			// Bit-specific description
	sourcePattern: string;				// Original: "Regs.ADCCTL2.bit.START"
	suggestedFix: string;				// Driverlib replacement code
	fixType: "read" | "write" | "access" | "whole";
	device: string;						// Target device (F28379D)
	trmLink?: string;					// TRM register documentation link
	driverLibFunctions?: string[];		// Available alternatives
	registerBitDetails?: string;		// Formatted bit definitions with descriptions and shifts
}
let registerDiagnosticMetadata: Map<string, RegisterDiagnosticMeta> = new Map();

interface bitfieldToDriverlib<T> {
    [key: string]: T;
}

interface testRegisterLinksFound {
    regName: string;
	link: string;
}
//Global for test case
export let lastRegisterVisionResults: testRegisterLinksFound[] = [];
  

enum RegisterDataBase {
	Driverlib = "driverlib",
	Bitfield = "bitfield"
}


/**
 * Provides code actions corresponding to diagnostic problems.
 */
export class RegisterCodeActionProvider implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		let allCodeActions = registerCodeActions.map(registerCodeAction => registerCodeAction.codeAction);
		
		let codeActionsForThisDiagnostic : vscode.CodeAction[] = [];

		for (let diagnostic of context.diagnostics)
		{
			var additionalCodeActions = allCodeActions.filter(codeAction => codeAction.diagnostics?.includes(diagnostic));
			codeActionsForThisDiagnostic = codeActionsForThisDiagnostic.concat(additionalCodeActions);
		}

		return codeActionsForThisDiagnostic;
	}
}

let registerCoderStatus = false;
const C2000_REGISTER_IS_REGISTER_CODER_ENABLED_CONTEXT = 'c2000-idea.isRegisterCodeEnabled';
function registerUpdateIsRegisterCoderEnabled(status: boolean)
{
	registerCoderStatus = status;
	vscode.commands.executeCommand('setContext', C2000_REGISTER_IS_REGISTER_CODER_ENABLED_CONTEXT, registerCoderStatus);
}

let registerProjectChangeHandler: project.ProjectChangeHandler = (context, activeProjectInfo) => {
	var currentDevice = project.projectGetCurrentDevice();
    if (currentDevice)
    {
		registerSetupAutoCompletes(currentDevice, context);
    }
};

const registerDecorationType = vscode.window.createTextEditorDecorationType({
	borderWidth: '1px',
	borderStyle: 'solid',
	overviewRulerColor: 'blue',
	overviewRulerLane: vscode.OverviewRulerLane.Right,
	light: {
		// this color will be used in light color themes
		borderColor: 'darkblue',
	},
	dark: {
		// this color will be used in dark color themes
		borderColor: 'lightblue',
		color: 'yellow'
	}
});

const registerBitfieldDecorationType = vscode.window.createTextEditorDecorationType({
	borderWidth: '1px',
	borderStyle: 'solid',
	overviewRulerColor: 'yellow',
	overviewRulerLane: vscode.OverviewRulerLane.Right,
	light: {
		// this color will be used in light color themes
		borderColor: 'darkred',
	},
	dark: {
		// this color will be used in dark color themes
		borderColor: 'yellow',
		color: 'lightblue'
	}
});
const bitfieldToDriverlibIpMappings: bitfieldToDriverlib<string> = {
    "sysctrl" : "sysctl",

};


export function isRegisterNamePrependedWithModuleName(moduleName: string)
{
	const modulesWithPrepend = [
		"adc", 
		"dac", 
		"dcc", 
		"pga",
		"sci",
		"spi",
		"i2c",
		"xbar"
	];

	if (modulesWithPrepend.includes(moduleName))
	{
		return true;
	}

}

export function isRegisterNamePrependedWithModuleNameUnderscore(moduleName: string)
{
	const modulesWithPrepend = [
		"clb",
		"can"
	];

	if (modulesWithPrepend.includes(moduleName))
	{
		return true;
	}

}

export function getDriverlibRegisterName(moduleName: string, registerBitfieldName: string)
{
	if (isRegisterNamePrependedWithModuleName(moduleName))
	{
		return registerBitfieldName.replace(moduleName.toUpperCase(), "");
	}
	else if (isRegisterNamePrependedWithModuleNameUnderscore(moduleName))
	{
		return registerBitfieldName.replace(moduleName.toUpperCase() + "_", "");
	}
}

export function getBitfieldRegisterName(moduleName: string, registerName: string)
{
	if (isRegisterNamePrependedWithModuleName(moduleName))
	{
		return moduleName.toUpperCase() + registerName;
	}
	else if (isRegisterNamePrependedWithModuleNameUnderscore(moduleName))
	{
		return moduleName.toUpperCase() + "_" + registerName;
	}
	return registerName;
}


interface RegisterBitfieldsFound {
	module: string,

	registerInfo: Register,
	registerLink: string,
	registerBitInfo?: RegisterBit,
	vulnerableBits: number,

	registerName: string,
	registerStartPos: vscode.Position,
	registerWordRange: vscode.Range,
	instName?:string,
	instStartPos?: vscode.Position
	instWordRange?: vscode.Range,
	bitName?:string,
	bitStartPos?: vscode.Position
	bitWordRange?: vscode.Range

	instanceRegsFound: boolean
}

async function registerFindBitfieldRegisters(document: vscode.TextDocument, device?: string) : Promise<RegisterBitfieldsFound[]>
{
	let registersFoundInfo : RegisterBitfieldsFound[] = [];
	const text = document.getText();
	let testMode = false;
	//If device isn't autodetected in project or hasn't previously been input, prompt user to input
	if (!device)
	{
		device = project.projectGetCurrentDevice();
		if (!device)
		{
			device = await utils.selectBitfieldDeviceFamily();
		}
	}
	else{
		testMode = true;
	}
	if (device)
	{
		//Get list of all bitfield ip names found in the current device
		var registerSummary = getDeviceRegisterSummary(device, RegisterDataBase.Bitfield);
		//Get starting URL link
		let deviceTRMUrl = await getDeviceTRMUrl(device);
		//Get list of all register links for the current device - indexed according to driverlib c2000 ip names
		let deviceRegisterLinks = deviceData.NO_REGISTER_LINK_DEVICE_LIST.includes(device) ? null : await getDeviceRegisterLinks(device);
		//Get list of all reserved writable bits in current device registers - indexed according to driverlib c2000 ip names
		let rsvdWritableRegBits = getDeviceRegisterRsvdWritableBits(device);
		
		if (registerSummary)
		{
			var registerWordRangedFound : vscode.Range[] = [];
			//Loop through all ips found in this device
			for (var module of registerSummary.modules)
			{
				//Load in register data from register_data/bitfield file/ path from file corresponding to the current ip
				//Convert ip name to bitfield name if needed
				var registers = getDeviceModuleRegisters(device, module, RegisterDataBase.Bitfield);
				const regEx = RegExp("(\\.all|\\.bit\\.)", "g");
				let match: RegExpExecArray | null;
				//Check all locations in the text string of the file that use bitfield access format
				while ((match = regEx.exec(text))) {
					const startPosRegister = document.positionAt(match.index - 1);
					const wordRangeRegister = document.getWordRangeAtPosition(startPosRegister);
					if (wordRangeRegister) {
						//Get register name found from bitfield access in document
						const registerName = document.getText(wordRangeRegister);
						if (registers)
						{
							let registerInfo: Register | undefined;
							let registerBitInfo: RegisterBit | undefined;

							// Previous Code to Prepend module name when using driverlib as source for bitfield regs
							// let registerInfos = registers.filter(register => 
							// 	(((isRegisterNamePrependedWithModuleName(module)?module.toUpperCase():"") + register.name) === registerName)
							// );
							//Get all registers in register_data database that match register name in editor (ideally is only one match)
							let registerInfos = registers.filter(register => register.name === registerName);
							if (registerInfos.length < 1)
							{
								// Register not found in the register data
							}
							else
							{
								registerInfo = registerInfos[0];
								const startPosInst = document.positionAt(match.index - registerName.length - 1);
								const wordRangeInst = document.getWordRangeAtPosition(startPosInst);
								let instName = "";
								if (wordRangeInst){
									instName = document.getText(wordRangeInst);
								}

								let startPosRegisterBit: vscode.Position | undefined;
								let wordRangeRegisterBit: vscode.Range | undefined;
								let bitName : string = "";
								// Bitfield register found
								if (match[0].includes("bit"))
								{
									startPosRegisterBit = document.positionAt(match.index + match[0].length);
									wordRangeRegisterBit = document.getWordRangeAtPosition(startPosRegisterBit);
									if (wordRangeRegisterBit){
										bitName = document.getText(wordRangeRegisterBit);
										let registerBitInfos = registerInfos[0].bits.filter(bit => 
											(bit.name === bitName)
										);
										
										if (registerBitInfos.length < 1)
										{

										}
										else {
											//
											// Bit found
											//
											registerBitInfo = registerBitInfos[0];
										}
										
									}
								}

								registerWordRangedFound.push(wordRangeRegister);

								//
								// Get the link (if it is valid)
								// Convert bitfield ip name to driverlib name before searching for link
								//

								let registerUrl = findRegisterLink(deviceRegisterLinks, bitfieldToDriverlibIpMappings[module] != undefined ? bitfieldToDriverlibIpMappings[module] : module, registerName);
								let link = "";
								if(registerUrl !== ""){
									link = deviceTRMUrl + registerUrl;
								}

								//Append to lastRegisterVisionResults if in test mode
								if(testMode){
									let results :testRegisterLinksFound  = {
										regName : registerName,
										link: link
									}
									lastRegisterVisionResults.push(results);
								}

								//Get rsvd bit data 
								let vulnerableBitsMask = findRsvdBits(rsvdWritableRegBits, bitfieldToDriverlibIpMappings[module] != undefined ? bitfieldToDriverlibIpMappings[module] : module, registerName);

								registersFoundInfo.push({
									module: module,

									registerInfo: registerInfo,
									registerLink: link,
									registerBitInfo: registerBitInfo,
									vulnerableBits: vulnerableBitsMask,

									registerName: registerName,
									registerStartPos: startPosRegister,
									registerWordRange: wordRangeRegister,

									instName: instName,
									instStartPos: startPosInst,
									instWordRange: wordRangeInst,

									bitName: bitName,
									bitStartPos: startPosRegisterBit,
									bitWordRange: wordRangeRegisterBit,

									instanceRegsFound: false
								});
							}
						}
					}
					
				}
				
				const regExBasedOnRegs = RegExp("(Regs\\.)", "g");
				let matchesOnRegs: RegExpExecArray | null;
				while ((matchesOnRegs = regExBasedOnRegs.exec(text))) {
					const startPosRegister = document.positionAt(matchesOnRegs.index + "Regs.".length);
					const wordRangeRegister = document.getWordRangeAtPosition(startPosRegister);
					if (wordRangeRegister) {
						const registerName = document.getText(wordRangeRegister);

						if (registers)
						{
							let registerInfo: Register | undefined;
							let registerBitInfo: RegisterBit | undefined;

							// Previous Code to Prepend module name when using driverlib as source for bitfield regs
							// let registerInfos = registers.filter(register => 
							// 	(((isRegisterNamePrependedWithModuleName(module)?module.toUpperCase():"") + register.name) === registerName)
							// );
							let registerInfos = registers.filter(register => register.name === registerName);
							if (registerInfos.length < 1)
							{
								// Register not found in the register data
							}
							else
							{
								registerInfo = registerInfos[0];
								const startPosInst = document.positionAt(matchesOnRegs.index);
								const wordRangeInst = document.getWordRangeAtPosition(startPosInst);
								let instName = "";
								if (wordRangeInst){
									instName = document.getText(wordRangeInst);
								}
							
								//
								// Ignore duplicates
								//						
								let duplicateRanges = registerWordRangedFound.filter(range => range.isEqual(wordRangeRegister));
								if (duplicateRanges.length < 1) {
									registerWordRangedFound.push(wordRangeRegister);
								}
								else
								{
									continue;
								}

								//
								// Get the link (if its valid)
								// Convert bitfield ip name to driverlib name before searching for link
								//
								let registerUrl = findRegisterLink(deviceRegisterLinks, bitfieldToDriverlibIpMappings[module] != undefined ? bitfieldToDriverlibIpMappings[module] : module, registerName);
								let link = "";
								if(registerUrl !== ""){
									link = deviceTRMUrl + registerUrl;
								}

								//Get rsvd bit data 
								let vulnerableBitsMask = findRsvdBits(rsvdWritableRegBits, bitfieldToDriverlibIpMappings[module] != undefined ? bitfieldToDriverlibIpMappings[module] : module, registerName);
								registersFoundInfo.push({
									module: module,

									registerInfo: registerInfo,
									registerLink: link,
									registerBitInfo: registerBitInfo,
									vulnerableBits: vulnerableBitsMask,

									registerName: registerName,
									registerStartPos: startPosRegister,
									registerWordRange: wordRangeRegister,

									instName: instName,
									instStartPos: startPosInst,
									instWordRange: wordRangeInst,

									bitName: "",
									bitStartPos: undefined,
									bitWordRange: undefined,

									instanceRegsFound: true
								});
							}
						}
					}
					
				}
			}
		}
	}

	return registersFoundInfo;
}

function getRegisterToFunctionMapping(device: string)
{
	try {
		let mappingFile = require("./../../register_to_function_data/" + device.toLowerCase());
		if (mappingFile && mappingFile.registerToFunction)
		{
			return mappingFile.registerToFunction;
		}
		return {};
	} catch (e) {
		return {};
	}
}

function generateRegisterBitCommentsText(registerName: string, registerBits: any[], bitName?: string): string
{
	let comments = "// " + registerName + " Register";
	if (bitName) {
		comments += " - " + bitName + " bit";
	}
	comments += "\n";

	let bitsToShow = registerBits;
	if (bitName) {
		bitsToShow = registerBits.filter(bit => bit.name === bitName);
	}

	for (const bit of bitsToShow) {
		comments += "//  " + bit.name + " - description: " + bit.description + ", size: " + bit.size + ", shift: " + bit.shift + "\n";
	}
	return comments;
}

function generateRegisterBitDetailsText(registerName: string, registerBits: any[], bitName?: string): string
{
	let details = registerName + " Register";
	if (bitName) {
		details += " - " + bitName + " bit";
	}
	details += "\n";

	let bitsToShow = registerBits;
	if (bitName) {
		bitsToShow = registerBits.filter(bit => bit.name === bitName);
	}

	for (const bit of bitsToShow) {
		details += bit.name + " - description: " + bit.description + ", size: " + bit.size + ", shift: " + bit.shift + "\n";
	}
	return details;
}

async function registerBitfieldToDriverlibMigration(){
	let registerDiagnostics : vscode.Diagnostic[] = [];
	registerDiagnosticsCollection.clear();
	registerDiagnosticMetadata.clear();
	registerCodeActions = [];

	if (!vscode.window.activeTextEditor) {
		return;
	}

	let device = project.projectGetCurrentDevice();
	let registerToFunctionMapping = device ? getRegisterToFunctionMapping(device) : {};

	let registersFoundInfo = await registerFindBitfieldRegisters(vscode.window.activeTextEditor.document);
	
	for (var regFound of registersFoundInfo)
	{
		if (regFound.instWordRange)
		{
			if (regFound.bitName && regFound.bitWordRange) // bitfield register access
			{
				let range = new vscode.Range(regFound.instWordRange.start, regFound.bitWordRange.end);
				let diagnostic: vscode.Diagnostic = {
					code: C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_CODE,
					//source: C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_SOURCE,
					message: "Bitfield register structure usage " + regFound.registerName + " " + regFound.bitName,
					range: range,
					severity: vscode.DiagnosticSeverity.Error,
				};
				registerDiagnostics.push(diagnostic);

				// Store metadata for AI agent export
				let metaKey = `${vscode.window.activeTextEditor.document.uri.fsPath}:${range.start.line}:${range.start.character}:${regFound.registerName}`;
				let metaLine = vscode.window.activeTextEditor.document.lineAt(range.start);
				let metaSourcePattern = metaLine.text.trim();
				let metaDriverLibFuncs = (device && registerToFunctionMapping[regFound.registerName]) ? registerToFunctionMapping[regFound.registerName] : undefined;
				let metaRegisterDetails = generateRegisterBitDetailsText(regFound.registerName, regFound.registerInfo.bits, regFound.bitName);

				let meta: RegisterDiagnosticMeta = {
					registerName: regFound.registerName,
					bitName: regFound.bitName,
					module: regFound.module,
					description: regFound.registerInfo.description || "",
					bitDescription: regFound.registerBitInfo?.description || undefined,
					sourcePattern: metaSourcePattern,
					suggestedFix: "", // Will be populated from code actions
					fixType: "access", // Default, will be updated based on code path
					device: device || "unknown",
					trmLink: regFound.registerLink || undefined,
					driverLibFunctions: metaDriverLibFuncs,
					registerBitDetails: metaRegisterDetails
				};
				registerDiagnosticMetadata.set(metaKey, meta);

				let codeAction : vscode.CodeAction = new vscode.CodeAction("Replace with driverlib bit access", vscode.CodeActionKind.QuickFix);
				codeAction.diagnostics = [diagnostic];
				codeAction.edit = new vscode.WorkspaceEdit();


				let line = vscode.window.activeTextEditor.document.lineAt(regFound.registerWordRange.start);
				let assignmentMatch = line.text.match(/[^<>=]=[^=]([^;]+);?/);
				if (assignmentMatch && assignmentMatch.index) // Register is being assigned to (write access) - check if bitfield access is on left side of assignment
				{
					if (regFound.registerWordRange.start.isBefore(new vscode.Position(regFound.registerWordRange.end.line, assignmentMatch.index)))
					{
						//
						// Bitfield Assignment
						//
						// Update metadata fixType to write
						let metaKey = `${vscode.window.activeTextEditor.document.uri.fsPath}:${range.start.line}:${range.start.character}:${regFound.registerName}`;
						let existingMeta = registerDiagnosticMetadata.get(metaKey);
						if (existingMeta) {
							existingMeta.fixType = "write";
						}

						let valueAssigned = assignmentMatch[1];
						let registerCompletionsFound = registerCompletions.filter(completionItem => {
							return (completionItem.label === (regFound.module.toUpperCase() + " Write " + getDriverlibRegisterName(regFound.module, regFound.registerInfo.name) + " bit " + regFound.bitName));
						});
	
						if (registerCompletionsFound.length > 0)
						{
							let registerCompletion = registerCompletionsFound[0];
							let registerSnippetString : vscode.SnippetString = registerCompletion.insertText as vscode.SnippetString;

							let snippetString : vscode.SnippetString = new vscode.SnippetString(registerSnippetString.value);

							if (regFound.registerBitInfo) {
								snippetString.value = snippetString.value.replace("$0", valueAssigned + " << " + regFound.registerBitInfo.shift);
								snippetString.value = snippetString.value.replace(/\$\{3.+\}/, valueAssigned + " << " + regFound.registerBitInfo.shift);
							}
							
							let snippetRange = new vscode.Range(range.start, new vscode.Position(range.end.line, assignmentMatch.index + assignmentMatch[0].length));
							let snippetTextEdit : vscode.SnippetTextEdit = new vscode.SnippetTextEdit(snippetRange, snippetString);
							codeAction.edit.set(vscode.window.activeTextEditor.document.uri, [snippetTextEdit]);
	
							registerCodeActions.push(
								{
									uri: vscode.window.activeTextEditor.document.uri,
									codeAction: codeAction
								}
							);

							// Generate commented code actions with register bit info and suggested driverlib functions
							if (device && regFound.registerInfo && regFound.registerInfo.bits && Object.keys(registerToFunctionMapping).length > 0)
							{
								let mappedFunctions = registerToFunctionMapping[regFound.registerName] || [];

								if (mappedFunctions.length > 0)
								{
									let line = vscode.window.activeTextEditor.document.lineAt(range.start);
									let lineEndPos = new vscode.Position(range.end.line, line.text.length);
									let commentedCode = "// " + line.text.trim() + "\n";
									commentedCode += generateRegisterBitCommentsText(regFound.registerName, regFound.registerInfo.bits, regFound.bitName);

									for (const func of mappedFunctions)
									{
										let funcCodeAction = new vscode.CodeAction(
											"Replace with " + func,
											vscode.CodeActionKind.QuickFix
										);
										funcCodeAction.diagnostics = [diagnostic];
										funcCodeAction.edit = new vscode.WorkspaceEdit();

										let replacement = commentedCode + "\n" + func + "(...);";
										let textEdit = new vscode.TextEdit(new vscode.Range(range.start, lineEndPos), replacement);
										funcCodeAction.edit.set(vscode.window.activeTextEditor.document.uri, [textEdit]);

										registerCodeActions.push(
											{
												uri: vscode.window.activeTextEditor.document.uri,
												codeAction: funcCodeAction
											}
										);
									}
								}
							}
						}

					}
					else {
						// Update metadata fixType to read
						let metaKey = `${vscode.window.activeTextEditor.document.uri.fsPath}:${range.start.line}:${range.start.character}:${regFound.registerName}`;
						let existingMeta = registerDiagnosticMetadata.get(metaKey);
						if (existingMeta) {
							existingMeta.fixType = "read";
						}

						let registerCompletionsFound = registerCompletions.filter(completionItem => {
							return (completionItem.label === (regFound.module.toUpperCase() + " Read " + getDriverlibRegisterName(regFound.module, regFound.registerInfo.name) + " bit " + regFound.bitName));
						});
	
						if (registerCompletionsFound.length > 0)
						{
							let registerCompletion = registerCompletionsFound[0];
							let registerSnippetString : vscode.SnippetString = registerCompletion.insertText as vscode.SnippetString;	
							
							let snippetString : vscode.SnippetString = new vscode.SnippetString(registerSnippetString.value);

							
							if (regFound.registerBitInfo) {
								snippetString.value = "(" + snippetString.value + " >> " + regFound.registerBitInfo.shift + ")";
							}

							let snippetTextEdit : vscode.SnippetTextEdit = new vscode.SnippetTextEdit(range, snippetString);
							codeAction.edit.set(vscode.window.activeTextEditor.document.uri, [snippetTextEdit]);
	
							registerCodeActions.push(
								{
									uri: vscode.window.activeTextEditor.document.uri,
									codeAction: codeAction
								}
							);

							// Generate commented code actions with register bit info and suggested driverlib functions
							if (device && regFound.registerInfo && regFound.registerInfo.bits && Object.keys(registerToFunctionMapping).length > 0)
							{
								let mappedFunctions = registerToFunctionMapping[regFound.registerName] || [];

								if (mappedFunctions.length > 0)
								{
									let line = vscode.window.activeTextEditor.document.lineAt(range.start);
									let lineEndPos = new vscode.Position(range.end.line, line.text.length);
									let commentedCode = "// " + line.text.trim() + "\n";
									commentedCode += generateRegisterBitCommentsText(regFound.registerName, regFound.registerInfo.bits, regFound.bitName);

									for (const func of mappedFunctions)
									{
										let funcCodeAction = new vscode.CodeAction(
											"Replace with " + func,
											vscode.CodeActionKind.QuickFix
										);
										funcCodeAction.diagnostics = [diagnostic];
										funcCodeAction.edit = new vscode.WorkspaceEdit();

										let replacement = commentedCode + "\n" + func + "(...);";
										let textEdit = new vscode.TextEdit(new vscode.Range(range.start, lineEndPos), replacement);
										funcCodeAction.edit.set(vscode.window.activeTextEditor.document.uri, [textEdit]);

										registerCodeActions.push(
											{
												uri: vscode.window.activeTextEditor.document.uri,
												codeAction: funcCodeAction
											}
										);
									}
								}
							}
						}						
					}
				}
				else // No assignment - default to read access
				{
					let registerCompletionsFound = registerCompletions.filter(completionItem => {
						return (completionItem.label === (regFound.module.toUpperCase() + " Read " + getDriverlibRegisterName(regFound.module, regFound.registerInfo.name) + " bit " + regFound.bitName));
					});

					if (registerCompletionsFound.length > 0)
					{
						let registerCompletion = registerCompletionsFound[0];
						let snippetString : vscode.SnippetString = registerCompletion.insertText as vscode.SnippetString;
						let snippetTextEdit : vscode.SnippetTextEdit = new vscode.SnippetTextEdit(range, snippetString);
						codeAction.edit.set(vscode.window.activeTextEditor.document.uri, [snippetTextEdit]);

						registerCodeActions.push(
							{
								uri: vscode.window.activeTextEditor.document.uri,
								codeAction: codeAction
							}
						);
					}

					// Generate commented code actions with register bit info and suggested driverlib functions
					if (device && regFound.registerInfo && regFound.registerInfo.bits && Object.keys(registerToFunctionMapping).length > 0)
					{
						let mappedFunctions = registerToFunctionMapping[regFound.registerName] || [];

						if (mappedFunctions.length > 0)
						{
							let line = vscode.window.activeTextEditor.document.lineAt(range.start);
							let lineEndPos = new vscode.Position(range.end.line, line.text.length);
							let commentedCode = "// " + line.text.trim() + "\n";
							commentedCode += generateRegisterBitCommentsText(regFound.registerName, regFound.registerInfo.bits);

							for (const func of mappedFunctions)
							{
								let funcCodeAction = new vscode.CodeAction(
									"Replace with " + func,
									vscode.CodeActionKind.QuickFix
								);
								funcCodeAction.diagnostics = [diagnostic];
								funcCodeAction.edit = new vscode.WorkspaceEdit();

								let replacement = commentedCode + "\n" + func + "(...);";
								let textEdit = new vscode.TextEdit(new vscode.Range(range.start, lineEndPos), replacement);
								funcCodeAction.edit.set(vscode.window.activeTextEditor.document.uri, [textEdit]);

								registerCodeActions.push(
									{
										uri: vscode.window.activeTextEditor.document.uri,
										codeAction: funcCodeAction
									}
								);
							}
						}
					}
				}
			}
			else // .all register whole accesses
			{
				let dotAllTranslationNeeded = regFound.instanceRegsFound? 0 : ".all".length;
				let range = new vscode.Range(regFound.instWordRange.start, regFound.registerWordRange.end.translate(0, dotAllTranslationNeeded));
				let diagnostic : vscode.Diagnostic = {
					code: C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_CODE,
					// source: C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_SOURCE,
					message: "Bitfield register structure usage " + regFound.registerName,
					range: range,
					severity: vscode.DiagnosticSeverity.Error,
				};
				registerDiagnostics.push(diagnostic);

				// Store metadata for AI agent export (whole-register access)
				let wholeMetaKey = `${vscode.window.activeTextEditor.document.uri.fsPath}:${range.start.line}:${range.start.character}:${regFound.registerName}`;
				let wholeLine = vscode.window.activeTextEditor.document.lineAt(range.start);
				let wholeSourcePattern = wholeLine.text.trim();
				let wholeDriverLibFuncs = (device && registerToFunctionMapping[regFound.registerName]) ? registerToFunctionMapping[regFound.registerName] : undefined;
				let wholeRegisterDetails = generateRegisterBitDetailsText(regFound.registerName, regFound.registerInfo.bits);

				let wholeMeta: RegisterDiagnosticMeta = {
					registerName: regFound.registerName,
					bitName: undefined,
					module: regFound.module,
					description: regFound.registerInfo.description || "",
					sourcePattern: wholeSourcePattern,
					suggestedFix: "", // Will be populated from code actions
					fixType: "whole",
					device: device || "unknown",
					trmLink: regFound.registerLink || undefined,
					driverLibFunctions: wholeDriverLibFuncs,
					registerBitDetails: wholeRegisterDetails
				};
				registerDiagnosticMetadata.set(wholeMetaKey, wholeMeta);

				let codeAction : vscode.CodeAction = new vscode.CodeAction("Replace with driverlib register access", vscode.CodeActionKind.QuickFix);
				codeAction.diagnostics = [diagnostic];
				codeAction.edit = new vscode.WorkspaceEdit();

				let registerCompletionsFound = registerCompletions.filter(completionItem => {
					return (completionItem.label === (regFound.module.toUpperCase() + " Read " + getDriverlibRegisterName(regFound.module, regFound.registerInfo.name)));
				});

				if (registerCompletionsFound.length > 0)
				{
					let registerCompletion = registerCompletionsFound[0];
					let snippetString : vscode.SnippetString = registerCompletion.insertText as vscode.SnippetString;
					let snippetTextEdit : vscode.SnippetTextEdit = new vscode.SnippetTextEdit(range, snippetString);
					codeAction.edit.set(vscode.window.activeTextEditor.document.uri, [snippetTextEdit]);

					registerCodeActions.push(
						{
							uri: vscode.window.activeTextEditor.document.uri,
							codeAction: codeAction
						}
					);
				}

				// Generate commented code actions with register bit info and suggested driverlib functions
				if (device && regFound.registerInfo && regFound.registerInfo.bits && Object.keys(registerToFunctionMapping).length > 0)
				{
					let mappedFunctions = registerToFunctionMapping[regFound.registerName] || [];

					if (mappedFunctions.length > 0)
					{
						let line = vscode.window.activeTextEditor.document.lineAt(range.start);
						let lineEndPos = new vscode.Position(range.end.line, line.text.length);
						let commentedCode = "// " + line.text.trim() + "\n";
						commentedCode += generateRegisterBitCommentsText(regFound.registerName, regFound.registerInfo.bits);

						for (const func of mappedFunctions)
						{
							let funcCodeAction = new vscode.CodeAction(
								"Replace with " + func,
								vscode.CodeActionKind.QuickFix
							);
							funcCodeAction.diagnostics = [diagnostic];
							funcCodeAction.edit = new vscode.WorkspaceEdit();

							let replacement = commentedCode + "\n" + func + "(...);";
							let textEdit = new vscode.TextEdit(new vscode.Range(range.start, lineEndPos), replacement);
							funcCodeAction.edit.set(vscode.window.activeTextEditor.document.uri, [textEdit]);

							registerCodeActions.push(
								{
									uri: vscode.window.activeTextEditor.document.uri,
									codeAction: funcCodeAction
								}
							);
						}
					}
				}
			}
		}
	}

	registerDiagnosticsCollection.set(vscode.window.activeTextEditor.document.uri, registerDiagnostics);
}

function registerBitfieldAgentReportMDHeader(): string {
	const timestamp = new Date().toISOString();
	let device = project.projectGetCurrentDevice();
	
	let deviceDisplay = device || "unknown";
	let deviceNote = device ? "" : "\n> ⚠️ **Device could not be determined automatically.** Please infer from file paths, `#include` directives, or ask the user.\n";
	const sdkVersion = deviceDisplay.toUpperCase().includes("F29") ? "F29H85X-SDK" : "C2000Ware_6_00_00_00";

	let header = `# C2000 Register Bitfield to Driverlib Migration Report
**Generated:** ${timestamp}
**Device:** ${deviceDisplay}
**SDK:** \`${sdkVersion}\`${deviceNote}

## Role & Context

> You are an AI coding agent tasked with migrating Texas Instruments C2000 embedded C code.
> The source files contain **bitfield register access patterns** (e.g., \`Regs.REGISTER.bit.FIELD\`) that must be replaced with **driverlib API calls** appropriate for device \`${deviceDisplay}\`.
> The issues in this report were detected by the C2000 IDEA VS Code extension via static analysis.
> Your goal is to edit each listed file so that no direct bitfield register accesses remain — use driverlib functions or, when unavailable, explicit read-modify-write register operations.
> **SDK reference:** \`${sdkVersion}\` — all driverlib function names and register definitions must be verified against this SDK version.
> **File modification protocol:** Present each change as a unified diff with 3 lines of context. For files under 100 lines, you may show the full modified file.

---

## Instructions for AI Agent

You are reviewing C code that uses bitfield register access patterns (e.g., \`Regs.REGISTER.bit.FIELD\`).
These patterns need to be migrated to driverlib register access.

### Fix Type Reference

Each issue is categorized by fix type. Understanding these helps determine the correct replacement pattern:

| Fix Type | Meaning | Example Pattern |
|----------|---------|-----------------|
| **read** | Bitfield read operation (right-hand side of assignment) | \`value = Regs.ADCCTL2.bit.START;\` |
| **write** | Bitfield write operation (left-hand side of assignment) | \`Regs.ADCCTL2.bit.START = 1;\` |
| **access** | General bitfield access (direction ambiguous from context) | \`Regs.ADCCTL2.bit.START\` (standalone) |
| **whole** | Whole-register access using \`.all\` | \`Regs.ADCCTL2.all = 0x0020;\` |

### Anti-Hallucination Rules — Ground Your Fixes in This Report

> ⚠️ **This report is the authoritative source. Do not use training knowledge to construct register access code.**

- **If a \`Suggested replacement\` is provided:** use it exactly as written — it is sourced from TI's migration database and register analysis
- **If no \`Suggested replacement\` is given:** choose **only** from the **Available driverlib functions** listed in the issue. Do not call driverlib functions that are not listed there unless you first verify they exist in the \`${sdkVersion}\` driverlib source
- **Register Bit Details (shift/mask values) are authoritative** — use the exact shift and mask values provided; do not recalculate from training knowledge or guess register layouts
- **Do not assume** a driverlib function exists for a given register operation — if neither a replacement nor functions are listed, tell the user: *"I cannot confidently replace this pattern without verification — please confirm the correct driverlib function."*
- **TRM links are provided per-issue** — read the linked register page before manually constructing any bit manipulation code
- **Do not use the \`ti-asm-mcp\` tool results as a substitute for a missing \`Suggested replacement\`** — MCP data is supplementary context only; always prefer the fix data already in this report

### Action Checklist Per Issue

For each issue listed below, follow these steps:
- [ ] Open the file at the **absolute path** shown
- [ ] Navigate to the exact **Line** and **Column** number
- [ ] Identify the bitfield pattern in the source code
- [ ] For issues with a **Suggested replacement**, apply it directly
- [ ] For issues with **Available driverlib functions**, choose the most appropriate function and apply it with correct arguments
- [ ] For whole-register accesses, determine if a driverlib peripheral configuration function is more appropriate than direct register writes
- [ ] Use the **Register Bit Details** to understand shift/mask values if manual conversion is needed
- [ ] After each fix, verify no other references to the same bitfield pattern remain in the file

### Example: Complete Fix Walkthrough

Use this as a reference for how to apply a fix from this report:

**Before (bitfield access — flagged as "write"):**
\`\`\`c
// Direct bitfield write — must be replaced with driverlib
AdcaRegs.ADCCTL2.bit.PRESCALE = 6;
\`\`\`

**After (driverlib call — taken from "Suggested replacement" field):**
\`\`\`c
// Driverlib API — sourced verbatim from the Suggested replacement in this report
ADC_setPrescaler(ADCA_BASE, ADC_CLK_DIV_4_0);
\`\`\`

**Why:** The \`Suggested replacement\` field in the issue provided the exact driverlib function and enum constant. The \`Register Bit Details\` confirmed that bit \`PRESCALE\` controls the ADC clock divider. No driverlib function was invented — only the data already in this report was used.

### Bit Shift & Masking Reference

When migrating from bitfield to driverlib register access, remember:
- **Bit shift value** determines position in the 32-bit register
- **Mask value** determines which bits are part of this field
- **Driverlib read:** \`value = ((hwReg & MASK) >> SHIFT)\`
- **Driverlib write:** \`hwReg = (hwReg & ~MASK) | ((value << SHIFT) & MASK)\`

### Error Recovery

If you encounter compilation errors after applying a fix from this report:

1. **Undefined symbol / undeclared identifier** — The replacement may require a different \`#include\`. Check the \`${sdkVersion}\` driverlib header for \`device.h\` or peripheral-specific headers (e.g., \`adc.h\`, \`epwm.h\`)
2. **Type mismatch / incompatible types** — The driverlib function may use a specific enum typedef. Search the \`${sdkVersion}\` driverlib header for the correct enum name (e.g., \`ADC_ClkPrescale\`, \`EPWM_TimeBaseCountMode\`)
3. **Wrong number of arguments** — The function signature may differ from what was inferred. Re-read the **Available driverlib functions** list — the correct overload may be listed there
4. **Multiple definition / redeclaration** — You may have applied the same fix twice. Search the file for duplicate patterns
5. **If stuck after 2 attempts** — Flag the bitfield access in your completion summary as "needs human review" and move on to the next issue

### Constraints — What NOT to Do

- ⛔ **Do NOT** modify SDK/driverlib header files — only modify the project's own source files
- ⛔ **Do NOT** rename bitfield patterns in comments or string literals — only fix active C code
- ⛔ **Do NOT** alter register names in macros defined in device header files — those are not the source of the diagnostic
- ⛔ **Do NOT** apply a fix from one device to a different device's code block

### Getting Device & Register Information
- Use the **ti-asm-mcp** tool to query register details for the current device (this is an MCP that allows querying register information such as bit shifts, masks, and detailed descriptions)
- If the MCP is not available, as a backup plan, use the provided TRM links to understand register functionality (however use this as a last resort as it is more time consuming than the MCP and has a lot of noise in the HTML)
- Refer to **Register Bit Details** provided with each issue for descriptions and sizes
- Whenever needed, try to understand the **intent of the code** using the original bitfield access
- If the SDK is available, search the SDK for driverlib functions whose signature and parameters match the original code's intent

---
`;
	return header;
}

function exportRegisterBitfieldAgentReport() {
	let device = project.projectGetCurrentDevice();
	let deviceDisplay = device || "unknown";
	
	let diagnosticCount = 0;
	let readCount = 0;
	let writeCount = 0;
	let accessCount = 0;
	let wholeCount = 0;
	let fileIssuesMap: Map<string, Array<{line: number, col: number, meta: RegisterDiagnosticMeta, diagnostic: vscode.Diagnostic}>> = new Map();

	// Collect all diagnostics and group by file
	registerDiagnosticsCollection.forEach((uri, diagnostics) => {
		let fileIssues: Array<{line: number, col: number, meta: RegisterDiagnosticMeta, diagnostic: vscode.Diagnostic}> = [];

		for (let diagnostic of diagnostics) {
			if (diagnostic.code !== C2000_REGISTER_DIAGNOSTIC_BFIELD_TO_DLIB_CODE) {
				continue;
			}

			const { start } = diagnostic.range;
			const line = start.line + 1;
			const col = start.character + 1;

			// Try to find metadata for this diagnostic
			// First try exact key with register name
			let meta: RegisterDiagnosticMeta | null = null;
			for (let [key, value] of registerDiagnosticMetadata) {
				if (key.startsWith(`${uri.fsPath}:${start.line}:${start.character}`)) {
					meta = value;
					break;
				}
			}

			if (!meta) {
				// Create a default metadata if not found
				meta = {
					registerName: "Unknown",
					module: "unknown",
					description: diagnostic.message,
					sourcePattern: "",
					suggestedFix: "",
					fixType: "access" as const,
					device: "unknown"
				};
			}

			// Count by fix type
			if (meta.fixType === "read") {
				readCount++;
			} else if (meta.fixType === "write") {
				writeCount++;
			} else if (meta.fixType === "access") {
				accessCount++;
			} else if (meta.fixType === "whole") {
				wholeCount++;
			}

			fileIssues.push({ line, col, meta, diagnostic });
			diagnosticCount++;
		}

		if (fileIssues.length > 0) {
			fileIssuesMap.set(uri.fsPath, fileIssues);
		}
	});

	if (diagnosticCount === 0) {
		vscode.window.showWarningMessage("No bitfield register migration issues found. Run the migration check first.");
		return;
	}

	// Generate markdown report
	let md = registerBitfieldAgentReportMDHeader();

	// Summary statistics
	md += `## Summary\n\n`;
	md += `> **Tip for AI Agent:** Prioritize issues with a **Suggested replacement** — apply those directly. For issues with only **Available driverlib functions**, choose the best-matching function and construct the call. For \`whole\`-register writes, consider whether a driverlib peripheral configuration function is more appropriate than a raw register write.\n\n`;
	md += `| Metric | Count |\n|--------|-------|\n`;
	md += `| Total issues | ${diagnosticCount} |\n`;
	md += `| Whole-register accesses | ${wholeCount} |\n`;
	md += `| Read operations | ${readCount} |\n`;
	md += `| Write operations | ${writeCount} |\n`;
	md += `| Bit-field accesses | ${accessCount} |\n`;
	md += `\n---\n\n## Issues by File\n`;

	// Issues grouped by file — use a global counter for consistent cross-file issue numbering
	let globalIssueIndex = 0;
	fileIssuesMap.forEach((issues, filepath) => {
		md += `\n### \`${filepath}\`\n`;

		issues.forEach((issue) => {
			globalIssueIndex++;
			// Determine if the per-issue device differs from the report-level device
			const issueDevice = issue.meta.device && issue.meta.device !== "unknown" ? issue.meta.device : deviceDisplay;
			const deviceMismatchNote = (issue.meta.device && issue.meta.device !== "unknown" && issue.meta.device !== deviceDisplay)
				? ` ⚠️ *Device for this issue: \`${issue.meta.device}\`*`
				: "";

			md += `\n#### Issue ${globalIssueIndex} of ${diagnosticCount} — \`${issue.meta.registerName}\` [Line ${issue.line}, Col ${issue.col}] *(${issue.meta.fixType})*`;
			if (issue.meta.bitName) {
				md += ` (Bit: \`${issue.meta.bitName}\`)`;
			}
			if (deviceMismatchNote) {
				md += `\n> ${deviceMismatchNote.trim()}\n`;
			}
			md += `\n`;

			md += `- **Module:** ${issue.meta.module}\n`;
			md += `- **Fix Type:** ${issue.meta.fixType}\n`;
			if (issue.meta.description) {
				md += `- **Description:** ${issue.meta.description}\n`;
			}
			if (issue.meta.bitDescription) {
				md += `- **Bit Description:** ${issue.meta.bitDescription}\n`;
			}

			md += `- **Original pattern:** \`${issue.meta.sourcePattern}\`\n`;
			
			// Emit suggested fix if available
			if (issue.meta.suggestedFix && issue.meta.suggestedFix !== "") {
				md += `- **Suggested replacement:**\n  \`\`\`c\n  ${issue.meta.suggestedFix}\n  \`\`\`\n`;
			}

			// Register bit details with explicit language hint for LLM parsing
			if (issue.meta.registerBitDetails) {
				md += `- **Register Bit Details:**\n\`\`\`c\n${issue.meta.registerBitDetails}\`\`\`\n`;
			}

			if (issue.meta.trmLink) {
				md += `- **TRM Link:** [${issue.meta.registerName} Register — ${issueDevice} TRM](${issue.meta.trmLink})\n`;
			}

			if (issue.meta.driverLibFunctions && issue.meta.driverLibFunctions.length > 0) {
				md += `- **Available driverlib functions:**\n`;
				issue.meta.driverLibFunctions.forEach(func => {
					md += `  - \`${func}\`\n`;
				});
			}
			// Per-issue action checklist
			md += `- **Action checklist:**\n`;
			md += `  - [ ] Navigate to line ${issue.line}, col ${issue.col} in \`${issueDevice}\`\n`;
			if (issue.meta.suggestedFix && issue.meta.suggestedFix !== "") {
				md += `  - [ ] Apply the **Suggested replacement** shown above directly\n`;
			} else if (issue.meta.driverLibFunctions && issue.meta.driverLibFunctions.length > 0) {
				md += `  - [ ] Choose the most appropriate function from **Available driverlib functions** and apply with correct arguments\n`;
			} else {
				md += `  - [ ] Use Register Bit Details (shift/mask) to construct a manual read-modify-write operation\n`;
			}
			md += `  - [ ] Verify no other references to \`${issue.meta.sourcePattern || issue.meta.registerName}\` remain in this file\n`;
			md += `\n`;
		});
	});

	md += `\n---\n\n`;
	md += `## Completion\n\n`;
	md += `When you have processed all ${diagnosticCount} issue(s) in this report:\n`;
	md += `1. Report back with a summary table: one row per file, showing how many issues were fixed vs. need further review\n`;
	md += `2. List any registers where you could not find a confident driverlib replacement — flag these for human review\n`;
	md += `3. List all files you modified so the user can review the diffs\n\n`;
	md += `**Report generated for AI agent assistance. Please review each issue and apply appropriate fixes based on the suggested patterns.**`;

	// Open the report in the editor
	vscode.workspace.openTextDocument().then((textDoc: vscode.TextDocument) => {
		vscode.window.showTextDocument(textDoc, 2, false).then(textEditor => {
			textEditor.edit(edit => {
				edit.insert(new vscode.Position(0, 0), md);
			});
			vscode.window.showInformationMessage(`Bitfield Migration Report opened (${diagnosticCount} issues found)`);
		});
	}, (_error: any) => {});
}

async function registerBitfieldVisionUpdateDecorations(testDevice?:string) {
	const regDecorations: vscode.DecorationOptions[] = [];

	if (!vscode.window.activeTextEditor) {
		return;
	}
	let device = '';
	if(typeof testDevice === "string"){
		device = testDevice;
		lastRegisterVisionResults = [];
	}

	let registersFoundInfo = await registerFindBitfieldRegisters(vscode.window.activeTextEditor.document, device != '' ? device : undefined);

	for (var regFound of registersFoundInfo)
	{

		const openCollateralMarkdown = new vscode.MarkdownString(``);
		openCollateralMarkdown.isTrusted = true;

		if(regFound.registerLink !== ''){
			//Only include TRM link in decoration if it exists/was found
			const openCollateralArgs = { link: regFound.registerLink, html:true };
			const openCollateralUri = vscode.Uri.parse(
			`command:${info.C2000_IDEA_CMD_OPEN_COLLATERAL}?${encodeURIComponent(JSON.stringify(openCollateralArgs))}`
			);
			openCollateralMarkdown.appendMarkdown(`[View Register Description in TRM](${openCollateralUri}) `);
		}
		
		if (regFound.bitName && regFound.bitWordRange)
		{		
			openCollateralMarkdown.appendMarkdown(regFound.module.toUpperCase() + ' register bit access **' + regFound.registerName + '**' + 
			" bit " + regFound.bitName);
			const decorationBit = { 
				range: regFound.registerWordRange, 
				hoverMessage: openCollateralMarkdown 
			};
			regDecorations.push(decorationBit);
		}
		else
		{
			openCollateralMarkdown.appendMarkdown(regFound.module.toUpperCase() + ' register access **' + regFound.registerName + '**');
			const decoration = { 
				range: regFound.registerWordRange, 
				hoverMessage: openCollateralMarkdown 
			};
			regDecorations.push(decoration);
		}
	}

	vscode.window.activeTextEditor.setDecorations(registerBitfieldDecorationType, regDecorations);
}

async function registerDriverlibUpdateDecorations(testDevice?:string) {
	const regs: vscode.DecorationOptions[] = [];

	if (!vscode.window.activeTextEditor) {
		return;
	}
	const text = vscode.window.activeTextEditor.document.getText();
	var device = '';
	if(typeof testDevice === "string"){
		device = testDevice;
		lastRegisterVisionResults = [];
	}
	else{
		device = project.projectGetCurrentDevice();
		if (!device)
		{
			device = await utils.selectDeviceFamily();
		}
	}
	if (device)
	{
		let deviceTRMUrl = await getDeviceTRMUrl(device);
		let deviceRegisterLinks = deviceData.NO_REGISTER_LINK_DEVICE_LIST.includes(device) ? null : await getDeviceRegisterLinks(device);
		var registerSummary = getDeviceRegisterSummary(device, RegisterDataBase.Driverlib);
		if (registerSummary)
		{
			for (var module of registerSummary.modules)
			{
				var registers = getDeviceModuleRegisters(device, module, RegisterDataBase.Driverlib);
				const regEx = RegExp(module.toUpperCase() + "_O_", "g");
				
				let match;
				while ((match = regEx.exec(text))) {
					const startPos = vscode.window.activeTextEditor.document.positionAt(match.index);
					const wordRange = vscode.window.activeTextEditor.document.getWordRangeAtPosition(startPos);
					const endPos = vscode.window.activeTextEditor.document.positionAt(match.index + match[0].length);
					if (wordRange){
						const word = vscode.window.activeTextEditor.document.getText(wordRange);
						var moduleName = word.split("_O_")[0];
						var registerName = word.split("_O_")[1];
						
						if (registers)
						{
							var registerInfo = registers.filter(register => register.name === registerName);
							if (registerInfo.length < 1)
							{
								// Register not found in the register data
							}
							else
							{
								let bitfieldRegName = getBitfieldRegisterName(module, registerName);
								const openCollateralMarkdown = new vscode.MarkdownString(``);
								let registerUrl = findRegisterLink(deviceRegisterLinks, module, bitfieldRegName);
								if(registerUrl !== ''){
									//Only show register TRM link if it exists/is found
									let link = deviceTRMUrl + registerUrl;
									const openCollateralArgs = { link: link, html:true};
									const openCollateralUri = vscode.Uri.parse(`command:${info.C2000_IDEA_CMD_OPEN_COLLATERAL}?${encodeURIComponent(JSON.stringify(openCollateralArgs))}`);
									openCollateralMarkdown.appendMarkdown(`[View Register Description in TRM](${openCollateralUri}) `);
								}

								//Append to lastRegisterVisionResults if in test mode
								if(typeof testDevice === "string"){
									let linkField = "";
									if(registerUrl !== ''){
										linkField = deviceTRMUrl + registerUrl;
									}
									let results :testRegisterLinksFound  = {
										regName : registerName,
										link: linkField
									}
									lastRegisterVisionResults.push(results);
								}
								
								openCollateralMarkdown.isTrusted = true;
								openCollateralMarkdown.appendMarkdown(moduleName + ' register access **' + registerName + '**');
								const decoration = { 
									range: wordRange, 
									hoverMessage: openCollateralMarkdown
								};
								regs.push(decoration);
							}
						}
					}
				}
			}
		}

	}
	vscode.window.activeTextEditor.setDecorations(registerDecorationType, regs);
}

function getDeviceRegisterSummary(device: string, registerDatabase: RegisterDataBase): RegisterSummary | null{
	device = device.toLowerCase();
	var summaryFile = require("./../../register_data/" + registerDatabase + "/" + device + "_summary");
	if (summaryFile && summaryFile[device])
	{
		var deviceRegisterSummary : RegisterSummary = require("./../../register_data/" + registerDatabase + "/" + device + "_summary")[device];
		return deviceRegisterSummary;
	}
	return null;
}

function getDeviceModuleRegisters(device: string, module: string, registerDatabase: RegisterDataBase)
{
	let moduleFile = require("./../../register_data/" + registerDatabase + "/" + device + "_" + module + "_registers");
	if (moduleFile && moduleFile[module + "Registers"])
	{
		let moduleRegisters: Register[] = moduleFile[module + "Registers"];
		return moduleRegisters;
	}
	return null;
}

function findRegisterLink(deviceRegisterLinks: any, module: string, bitfieldRegName: string)
{
	let registerUrl = "";
	if(deviceRegisterLinks)
	{
		let moduleRegistersLinks = deviceRegisterLinks[module];
		if (moduleRegistersLinks) {
			let moduleRegisterStructures = Object.keys(moduleRegistersLinks);
			for (let moduleRegisterStructure of moduleRegisterStructures)
			{
				let registerStructureRegisters = Object.keys(moduleRegistersLinks[moduleRegisterStructure]);
				let foundRegisterNames = registerStructureRegisters.filter(rn => rn.toLowerCase() === bitfieldRegName.toLowerCase());
				if (foundRegisterNames.length > 0)
				{
					registerUrl = moduleRegistersLinks[moduleRegisterStructure][foundRegisterNames[0]];
					return registerUrl;
				}
			}
		}
	}
	
	return "";
}

async function getDeviceTRMUrl(device: string){
	// Read in internal and external device links
	// let trmLinksInternalName = "device_register_internal.json";
	let trmLinksExternalName = "device_register_external.json";
	// let trmLinksInternal = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(extensionContext.extensionUri, "register_links", trmLinksInternalName));
	let trmLinksExternal = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(extensionContext.extensionUri, "register_links", trmLinksExternalName));
	// const trmLinksInternalContent = Buffer.from(trmLinksInternal).toString('utf8');
	const trmLinksExternalContent = Buffer.from(trmLinksExternal).toString('utf8');
	// var jsonInternalRegisterLinks : any = JSON.parse(trmLinksInternalContent);
	var jsonExternalRegisterLinks : any = JSON.parse(trmLinksExternalContent);

	if(device in jsonExternalRegisterLinks){
		return jsonExternalRegisterLinks[device];
	}
	// else if(device in jsonInternalRegisterLinks && info.C2000_IDEA_INTERNAL){	//If no external link exists, use internal link (if operating in internal mode)
	// 	return jsonInternalRegisterLinks[device];
	// }
	else{
		return "";
	}

}

async function getDeviceRegisterLinks(device: string)
{
	var jsonRegisterLinksName = device.toLowerCase() + "_trm_reg.json";
	var jsonRegisterLinks = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(extensionContext.extensionUri, "register_links", jsonRegisterLinksName));
	const jsonRegisterLinksContent = Buffer.from(jsonRegisterLinks).toString('utf8');
	var jsonLinks : any = JSON.parse(jsonRegisterLinksContent);
	return jsonLinks;
}

async function getDeviceRegisterRsvdWritableBits(device: string)
{
	var jsonRegisterRsvdName = device.toLowerCase() + "_rsvd_regs.json";
	var jsonRegisterRsvd = await vscode.workspace.fs.readFile(vscode.Uri.joinPath(extensionContext.extensionUri, "register_rsvd_data", jsonRegisterRsvdName));
	const jsonRegisterRsvdContent = Buffer.from(jsonRegisterRsvd).toString('utf8');
	var jsonRsvd : any = JSON.parse(jsonRegisterRsvdContent);
	return jsonRsvd;
}

function findRsvdBits(deviceRsvdRegBits: any, module: string, bitfieldRegName: string)
{
	let vulnerableBitsMask :number = 0;
	if(deviceRsvdRegBits)
	{
		let moduleRegisterRsvd = deviceRsvdRegBits[module];
		if (moduleRegisterRsvd) {
			let ipRegistersWithVulnerableBits = Object.keys(moduleRegisterRsvd);
			let foundRegisterNames = ipRegistersWithVulnerableBits.filter(rn => rn.toLowerCase() === bitfieldRegName.toLowerCase());
			if (foundRegisterNames.length > 0)
			{
				for(let bfield in moduleRegisterRsvd[foundRegisterNames[0]]){
					if(bfield.includes("..")) {
						let startEndBits = bfield.split("..", 1)
						for(let bit = Number(startEndBits[0]); bit <= Number(startEndBits[0]); bit++){
							vulnerableBitsMask = vulnerableBitsMask | (1 << bit);
						}
					}
					else{
						vulnerableBitsMask = vulnerableBitsMask | (1 << Number(bfield));
					}
				}
				return vulnerableBitsMask;
			}
		}
	}
	
	return vulnerableBitsMask;
}

export function registerSetup(context: vscode.ExtensionContext)
{
	extensionContext = context;
	registerCompletions = [];
	registerDiagnosticsCollection = vscode.languages.createDiagnosticCollection(C2000_REGISTER_DIAGNOSTIC_COLLECTION_NAME);
	context.subscriptions.push(registerDiagnosticsCollection);
	
	const registerCompletionProvider = vscode.languages.registerCompletionItemProvider('c', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			if (registerCoderStatus)
			{
				return registerCompletions;
			}
			else
			{
				return [];
			}
		}
	});

	context.subscriptions.push(registerCompletionProvider);

	let runRegisterVisionDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_REGISTER_VISION, (arg) => {		
		registerDriverlibUpdateDecorations(arg);
	});

	let runBitfieldRegisterVisionDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION, (arg) => {		
		registerBitfieldVisionUpdateDecorations(arg);
	});

	let runBitfieldRegisterToDriverlibRegisterMigrationDisposable = vscode.commands.registerCommand(
		info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_TO_DRIVERLIB_MIGRATION, () => {
		registerBitfieldToDriverlibMigration();
	});

	let exportRegisterBitfieldAgentReportDisposable = vscode.commands.registerCommand(
		info.C2000_IDEA_CMD_EXPORT_REGISTER_BITFIELD_AGENT_REPORT, () => {
		exportRegisterBitfieldAgentReport();
	});

	let clearAllRegisterInfoDisposable = vscode.commands.registerCommand(
		info.C2000_IDEA_CMD_CLEAR_ALL_REGISTER_INFO, () => {

		registerDiagnosticsCollection.clear();
		registerDiagnosticMetadata.clear();
		registerCodeActions = [];
		vscode.window.activeTextEditor?.setDecorations(registerDecorationType, []);
		vscode.window.activeTextEditor?.setDecorations(registerBitfieldDecorationType, []);

	});
	context.subscriptions.push(clearAllRegisterInfoDisposable, runBitfieldRegisterToDriverlibRegisterMigrationDisposable, exportRegisterBitfieldAgentReportDisposable, runRegisterVisionDisposable, runBitfieldRegisterVisionDisposable);

	let enableRegisterCoderDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER, () => {		
		registerUpdateIsRegisterCoderEnabled(true);
	});
	context.subscriptions.push(enableRegisterCoderDisposable);
	let disableRegisterCoderDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_DISABLE_REGISTER_CODER, () => {		
		registerUpdateIsRegisterCoderEnabled(false);
	});

	registerCodeActionProvider = new RegisterCodeActionProvider();
    var registerDisposableCodeActionProvider = vscode.languages.registerCodeActionsProvider('c', registerCodeActionProvider, {
        providedCodeActionKinds: RegisterCodeActionProvider.providedCodeActionKinds
    });

	context.subscriptions.push(
		registerDisposableCodeActionProvider
	);

	context.subscriptions.push(disableRegisterCoderDisposable);

	let runBitfieldMigrationCheckDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_MIGRATION_CHECK, async (args) => {		
		if (args && args.currentDevice && args.migrationDevice && args.document)
		{
			//
			// If a quick action was run, wait 2s for changes to go through, then rerun the command
			//
			await new Promise(r => setTimeout(r, 2000));
			await runRegisterBitfieldMigrationOnDocument(args.currentDevice, args.migrationDevice, args.document);
			return;
		}
		
		let currentDevice = await utils.selectBitfieldMigrationFromDeviceFamily();
		if (!currentDevice)
		{
			vscode.window.showInformationMessage("Bitfield migration cancelled");
			return;
		}
		let migrationDevice = await utils.selectBitfieldMigrationToDeviceFamily(currentDevice);
		if (!migrationDevice)
		{
			vscode.window.showInformationMessage("Bitfield migration cancelled");
			return;
		}

		if (!vscode.window.activeTextEditor) {
			vscode.window.showInformationMessage("Bitfield migration cancelled - no code file active");
			return;
		}
		
		let document = vscode.window.activeTextEditor.document;

		vscode.window.showInformationMessage("Running Bitfield Migration from " + currentDevice + " to " + migrationDevice);
		
		await runRegisterBitfieldMigrationOnDocument(currentDevice, migrationDevice, document);
		
		vscode.window.showInformationMessage("Finished Bitfield Migration from F2803x to F280013x");

	});
	
	context.subscriptions.push(runBitfieldMigrationCheckDisposable);
	context.subscriptions.push(enableRegisterCoderDisposable);

	project.deviceChangeSubscription.push(registerProjectChangeHandler);
	
}


async function registerDiagnosticIgnore(document: vscode.TextDocument) {
	let ignoreRegArray = [];
	let text = document.getText();
	const regEx = RegExp("\\/\\*\\s*C2000_REGISTER_MIGRATION_IGNORE\\s*=\\s*\\[(.*)\\]\\s*\\*\\/", "gms");
	let match: RegExpExecArray | null;
	while ((match = regEx.exec(text))) {
		let regs = match[1];
		ignoreRegArray = regs.replace(/\s/g, '').split(",");
		let startPosition = document.positionAt(match.index);
		let endPosition = document.positionAt(match.index + match[0].length);
		let registerIgnoreRange = new vscode.Range(startPosition, endPosition);
		return { 
			ignoreRegArray: ignoreRegArray, 
			registerIgnoreRange: registerIgnoreRange
		};
	}
	return undefined;
}

async function runRegisterBitfieldMigrationOnDocument(currentDevice: string, migrationDevice: string, document: vscode.TextDocument) {
	let ignoreRegsInfo = await registerDiagnosticIgnore(document);

	//
	// Clear diagnostics
	//
	let registerDiagnostics : vscode.Diagnostic[] = [];
	registerCodeActions = [];
	registerDiagnosticsCollection.clear();
	
	//
	// You may have to update the registerFindBitfieldRegisters without breaking the existing features :)
	//
	let registersFoundInfo = await registerFindBitfieldRegisters(document, currentDevice);

	let diffRegs = new Map<string, MigrationElement>();
	let resolutionRegs = new Map<string, MigrationResolutionElement>();

	// Get register migration changes
	const migrationJsonContent: MigrationData = await migration.getMigrationJSON(extensionContext, currentDevice, migrationDevice);

	// Check if resolutions exist for this device combination
	let resolutionsExist = false;
	if(currentDevice in deviceData.BITFIELD_MIGRATION_RESOLUTIONS){
		if(migrationDevice in deviceData.BITFIELD_MIGRATION_RESOLUTIONS[currentDevice]){
			resolutionsExist = true;
		}
	}
	if(resolutionsExist){
		const resolutionJsonContent = await migration.getMigrationResolutionJSON(extensionContext, currentDevice, migrationDevice);
		resolutionJsonContent.reg.forEach((reg) => {
			let regName = Object.keys(reg)[0];
			resolutionRegs.set(regName, reg[regName]);
		});
	}
	// Push all register differences to diffRegs
	migrationJsonContent.removed.forEach((migEl) => {
		diffRegs.set(migEl.code, migEl);
	});
	migrationJsonContent.changed.forEach((migEl) => {
		diffRegs.set(migEl.code, migEl);
	});

	// Loop through all registers found in the document
	registersFoundInfo.forEach((reg) => {
		let bitfieldName = reg.bitName !== ""? reg.registerName + "." + reg.bitName : reg.registerName;
		
		if (ignoreRegsInfo && ignoreRegsInfo.ignoreRegArray.includes(bitfieldName))
		{
			return;
		}

		let diffReg = diffRegs.get(bitfieldName);

		//Check if a difference exists
		if(diffReg)
		{
			// Construct Diagnostic message
			let diagnosticMsg: string = bitfieldName + " :";
			if (diffReg.msg)
			{
				diagnosticMsg += " " + diffReg.msg;
			}
			if(resolutionsExist){
				let resReg = resolutionRegs.get(bitfieldName);
				if (resReg && resReg.msg)
				{
					diagnosticMsg += " " + resReg.msg;
				}
			}

			let decorationRange = reg.bitWordRange? reg.bitWordRange : reg.registerWordRange;
			let diagnosticSeverity = diffReg.changeType ? vscode.DiagnosticSeverity.Warning : vscode.DiagnosticSeverity.Error;

			let diagnostic: vscode.Diagnostic = {
				code: C2000_REGISTER_DIAGNOSTIC_MIGRATION_BFIELD_CODE,
				//source: C2000_MIGRATION_DIAGNOSTIC_BFIELD_INCOMPAT_SOURCE,
				range: decorationRange,
				message: diagnosticMsg,
				severity: diagnosticSeverity
			};

			registerDiagnostics.push(diagnostic);

			let codeActionIgnore : vscode.CodeAction = new vscode.CodeAction(bitfieldName + ": ignore this error", vscode.CodeActionKind.QuickFix);
			codeActionIgnore.command = {
				command: info.C2000_IDEA_CMD_RUN_BITFIELD_MIGRATION_CHECK,
				title: "",
				arguments: [{
					currentDevice: currentDevice,
					migrationDevice: migrationDevice,
					document: document
				}]
			};
			codeActionIgnore.diagnostics = [diagnostic];
			codeActionIgnore.edit = new vscode.WorkspaceEdit();
			if (ignoreRegsInfo && ignoreRegsInfo.ignoreRegArray && ignoreRegsInfo.registerIgnoreRange)
			{
				codeActionIgnore.edit.replace(
					document.uri, 
					ignoreRegsInfo.registerIgnoreRange, 
					c2000RegisterDiagnosticMigrationIgnore(ignoreRegsInfo.ignoreRegArray.concat(bitfieldName)));
			}
			else
			{
				codeActionIgnore.edit.insert(
					document.uri, 
					document.positionAt(0), 
					c2000RegisterDiagnosticMigrationIgnore([bitfieldName]) + "\n");
			}
			registerCodeActions.push(
				{
					uri: document.uri,
					codeAction: codeActionIgnore
				}
			);

			if (resolutionsExist){
				let resReg = resolutionRegs.get(bitfieldName);
				if(resReg){
					//
					// We have a fix
					//
					let fixMsg: string = bitfieldName;
					if (resReg.fixMsg)
					{
						fixMsg += ": " + resReg.fixMsg;
					} 
					else if (resReg.msg)
					{
						fixMsg += ": " + resReg.msg;
					}

					let codeActionResolution : vscode.CodeAction = new vscode.CodeAction(fixMsg, vscode.CodeActionKind.QuickFix);
					codeActionResolution.command = {
						command: info.C2000_IDEA_CMD_RUN_BITFIELD_MIGRATION_CHECK,
						title: "",
						arguments: [{
							currentDevice: currentDevice,
							migrationDevice: migrationDevice,
							document: document
						}]
					};
					codeActionResolution.diagnostics = [diagnostic];
					codeActionResolution.edit = new vscode.WorkspaceEdit();

					//
					// The edit here is what we can use to inset or delete or modify text in the source code
					//

					let lineBeginningPos: vscode.Position = new vscode.Position(diagnostic.range.start.line, 0);
					let fixText: string = "//\n//";
					let lineCharacterLen = 90 ;
					let fixMsgInd = 0;
					// if(fixMsg.length < lineCharacterLen + 10)
					// {
					// 	fixText += " " + fixMsg + "\n//";
					// }
					// else {
						while(fixMsgInd < fixMsg.length)
							{
								let msgSubstr = fixMsg.substring(fixMsgInd, fixMsgInd + lineCharacterLen);
								if(fixMsgInd + lineCharacterLen > fixMsg.length)
								{
									fixText += " " + msgSubstr + "\n//";
									break;
								}
								else 
								{
									let lastSpaceInd = msgSubstr.lastIndexOf(" ");
									fixText += " " + fixMsg.substring(fixMsgInd, fixMsgInd + lastSpaceInd) + "\n//";
									fixMsgInd += lastSpaceInd + 1 ;
								}
								
								
							}
					// }
					
					
					fixText += " SUGGESTION: Use the fix(es) below in place of the original code:\n//";
					resReg.fix.forEach((fix) => {
						fixText += " " + fix + "\n//";
					});
					fixText += "\n";
					
					codeActionResolution.edit.insert(document.uri, lineBeginningPos, fixText);
					
					registerCodeActions.push(
						{
							uri: document.uri,
							codeAction: codeActionResolution
						}
						
					);
				}			
				
			}
		}
		
	});


	registerDiagnosticsCollection.set(document.uri, registerDiagnostics);
}

export function registerSetupAutoCompletes(deviceName: string, context: vscode.ExtensionContext)
{
	var device = deviceName.toLowerCase();
    var deviceRegisterSummary = require("./../../register_data/" + "driverlib/" + device + "_summary")[device];
	registerCompletions = [];

	for (let module of deviceRegisterSummary.modules)
	{
		let moduleRegisters = require("./../../register_data/" + "driverlib/" + device + "_" + module + "_registers")[module + "Registers"];

		if (!moduleRegisters)
		{
			continue;
		}

		for (let register of moduleRegisters)
		{
			let hwregHwregh = register.size > 16? "HWREG" : "HWREGH";

			let registerIAppend = "";
			let registerIAppendRepeat = "";
			if (register.count)
			{
				let zeroToCount = [...Array(parseInt(register.count)).keys()];
				registerIAppend = "(${2|" + zeroToCount.join(",") + "|})";
				registerIAppendRepeat = "(${2})";
			}

			const registerCodeCompletion = new vscode.CompletionItem(module.toUpperCase() + " Write " + register.name, vscode.CompletionItemKind.Reference);
			registerCodeCompletion.insertText = new vscode.SnippetString(hwregHwregh + "(${1:" + module.toLowerCase() + "Base} + " + module.toUpperCase() + "_O_" + register.name + registerIAppend + ") = $0;");
			registerCompletions.push(registerCodeCompletion);
	
			const registerReadCodeCompletion = new vscode.CompletionItem(module.toUpperCase() + " Read " + register.name, vscode.CompletionItemKind.Reference);
			registerReadCodeCompletion.insertText = new vscode.SnippetString(hwregHwregh + "(${1:" + module.toLowerCase() + "Base} + " + module.toUpperCase() + "_O_" + register.name + registerIAppend + ")");
			registerCompletions.push(registerReadCodeCompletion);
	
			for (var registerBit of register.bits)
			{
				const registerBitCodeCompletion = new vscode.CompletionItem(module.toUpperCase() + " Write " + register.name + " bit " + registerBit.name, vscode.CompletionItemKind.Reference);
				const registerBitReadCodeCompletion = new vscode.CompletionItem(module.toUpperCase() + " Read " + register.name + " bit " + registerBit.name, vscode.CompletionItemKind.Reference);
					
				if (registerBit.size === "1"){
					registerBitCodeCompletion.insertText = new vscode.SnippetString(
						hwregHwregh + "(${1:" + module.toLowerCase() + "Base} + " + module.toUpperCase() + "_O_" + register.name + registerIAppend + ") = " + 
						"\n\t(" + hwregHwregh + "(${1} + " + module.toUpperCase() + "_O_" + register.name + registerIAppendRepeat + ") & ~" + module.toUpperCase() + "_" + register.name + "_" + registerBit.name + ") | " + 
						"\n\t(${3|" +  module.toUpperCase() + "_" + register.name + "_" + registerBit.name + ",0|});");
					
					registerBitReadCodeCompletion.insertText = new vscode.SnippetString(
						"(" + hwregHwregh + "(${1:" + module.toLowerCase() + "Base} + " + module.toUpperCase() + "_O_" + register.name + registerIAppend + ") & " + module.toUpperCase() + "_" + register.name + "_" + registerBit.name + ")");
				}
				else
				{
					registerBitCodeCompletion.insertText = new vscode.SnippetString(
						hwregHwregh + "(${1:" + module.toLowerCase() + "Base} + " + module.toUpperCase() + "_O_" + register.name + registerIAppend + ") = " + 
						"\n\t(" + hwregHwregh + "(${1} + " + module.toUpperCase() + "_O_" + register.name + registerIAppendRepeat + ") & ~" + module.toUpperCase() + "_" + register.name + "_" + registerBit.name + "_M) | " + 
						"\n\t((uint" + register.size + "_t)$0 << " + module.toUpperCase() + "_" + register.name + "_" + registerBit.name + "_S);");
					
					registerBitReadCodeCompletion.insertText = new vscode.SnippetString(
						"((" + hwregHwregh + "(${1:" + module.toLowerCase() + "Base} + " + module.toUpperCase() + "_O_" + register.name + registerIAppend + ") & " + module.toUpperCase() + "_" + register.name + "_" + registerBit.name + "_M) >> " + 
						module.toUpperCase() + "_" + register.name + "_" + registerBit.name + "_S)");
				}

				registerCompletions.push(registerBitCodeCompletion);
				registerCompletions.push(registerBitReadCodeCompletion);
			}
		}
	}

}

