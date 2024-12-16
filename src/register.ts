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

interface bitfieldToDriverlib<T> {
    [key: string]: T;
}
  

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
	//If device isn't autodetected in project or hasn't previously been input, prompt user to input
	if (!device)
	{
		device = project.projectGetCurrentDevice();
		if (!device)
		{
			device = await utils.selectBitfieldDeviceFamily();
		}
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

async function registerBitfieldToDriverlibMigration(){
	let registerDiagnostics : vscode.Diagnostic[] = [];
	registerDiagnosticsCollection.clear();
	registerCodeActions = [];

	if (!vscode.window.activeTextEditor) {
		return;
	}
	
	let registersFoundInfo = await registerFindBitfieldRegisters(vscode.window.activeTextEditor.document);
	
	for (var regFound of registersFoundInfo)
	{
		if (regFound.instWordRange)
		{
			if (regFound.bitName && regFound.bitWordRange)
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

				let codeAction : vscode.CodeAction = new vscode.CodeAction("Replace with driverlib bit access", vscode.CodeActionKind.QuickFix);
				codeAction.diagnostics = [diagnostic];
				codeAction.edit = new vscode.WorkspaceEdit();


				let line = vscode.window.activeTextEditor.document.lineAt(regFound.registerWordRange.start);
				let assignmentMatch = line.text.match(/[^<>=]=[^=]([^;]+);?/);
				if (assignmentMatch && assignmentMatch.index)
				{
					if (regFound.registerWordRange.start.isBefore(new vscode.Position(regFound.registerWordRange.end.line, assignmentMatch.index)))
					{
						//
						// Bitfield Assignment
						//
						let valueAssigned = assignmentMatch[1];
						let registerCompletionsFound = registerCompletions.filter(completionItem => {
							return (completionItem.label === (regFound.module.toUpperCase() + " Write " + regFound.registerInfo.name + " bit " + regFound.bitName));
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
						}
						
					}
					else {
						let registerCompletionsFound = registerCompletions.filter(completionItem => {
							return (completionItem.label === (regFound.module.toUpperCase() + " Read " + regFound.registerInfo.name + " bit " + regFound.bitName));
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
						}
					}
				}
				else
				{
					let registerCompletionsFound = registerCompletions.filter(completionItem => {
						return (completionItem.label === (regFound.module.toUpperCase() + " Read " + regFound.registerInfo.name + " bit " + regFound.bitName));
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
				}
			}
			else
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
				
				let codeAction : vscode.CodeAction = new vscode.CodeAction("Replace with driverlib register access", vscode.CodeActionKind.QuickFix);
				codeAction.diagnostics = [diagnostic];
				codeAction.edit = new vscode.WorkspaceEdit();

				let registerCompletionsFound = registerCompletions.filter(completionItem => {
					return (completionItem.label === (regFound.module.toUpperCase() + " Read " + regFound.registerInfo.name));
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
			}
		}
	}

	registerDiagnosticsCollection.set(vscode.window.activeTextEditor.document.uri, registerDiagnostics);
}

async function registerBitfieldVisionUpdateDecorations() {
	const regDecorations: vscode.DecorationOptions[] = [];

	if (!vscode.window.activeTextEditor) {
		return;
	}
	
	let registersFoundInfo = await registerFindBitfieldRegisters(vscode.window.activeTextEditor.document);

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

async function registerDriverlibUpdateDecorations() {
	const regs: vscode.DecorationOptions[] = [];

	if (!vscode.window.activeTextEditor) {
		return;
	}
	const text = vscode.window.activeTextEditor.document.getText();
	var device = project.projectGetCurrentDevice();
	if (!device)
	{
		device = await utils.selectDeviceFamily();
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
	var summaryFile = require("./../register_data/" + registerDatabase + "/" + device + "_summary");
	if (summaryFile && summaryFile[device])
	{
		var deviceRegisterSummary : RegisterSummary = require("./../register_data/" + registerDatabase + "/" + device + "_summary")[device];
		return deviceRegisterSummary;
	}
	return null;
}

function getDeviceModuleRegisters(device: string, module: string, registerDatabase: RegisterDataBase)
{
	let moduleFile = require("./../register_data/" + registerDatabase + "/" + device + "_" + module + "_registers");
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

	let runRegisterVisionDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_REGISTER_VISION, () => {		
		registerDriverlibUpdateDecorations();
	});

	let runBitfieldRegisterVisionDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION, () => {		
		registerBitfieldVisionUpdateDecorations();
	});

	let runBitfieldRegisterToDriverlibRegisterMigrationDisposable = vscode.commands.registerCommand(
		info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_TO_DRIVERLIB_MIGRATION, () => {		
		registerBitfieldToDriverlibMigration();
	});
	
	let clearAllRegisterInfoDisposable = vscode.commands.registerCommand(
		info.C2000_IDEA_CMD_CLEAR_ALL_REGISTER_INFO, () => {		
		
		registerDiagnosticsCollection.clear();
		registerCodeActions = [];
		vscode.window.activeTextEditor?.setDecorations(registerDecorationType, []);
		vscode.window.activeTextEditor?.setDecorations(registerBitfieldDecorationType, []);

	});
	context.subscriptions.push(clearAllRegisterInfoDisposable, runBitfieldRegisterToDriverlibRegisterMigrationDisposable, runRegisterVisionDisposable, runBitfieldRegisterVisionDisposable);

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
    var deviceRegisterSummary = require("./../register_data/" + "driverlib/" + device + "_summary")[device];
	registerCompletions = [];

	for (let module of deviceRegisterSummary.modules)
	{
		let moduleRegisters = require("./../register_data/" + "driverlib/" + device + "_" + module + "_registers")[module + "Registers"];

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

