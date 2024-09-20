import * as vscode from 'vscode';
import * as project from './utilities/project';
import * as info from './utilities/info';

var interruptCompletions : vscode.CompletionItem [];
var extensionContext : vscode.ExtensionContext;

let interruptCoderStatus = false;
const C2000_INTERRUPT_IS_INTERRUPT_CODER_ENABLED_CONTEXT = 'c2000-idea.isInterruptCodeEnabled';
function interruptUpdateIsInterruptCoderEnabled(status: boolean)
{
	interruptCoderStatus = status;
	vscode.commands.executeCommand('setContext', C2000_INTERRUPT_IS_INTERRUPT_CODER_ENABLED_CONTEXT, interruptCoderStatus);
}

let interruptProjectChangeHandler: project.ProjectChangeHandler = async (context, activeProjectInfo) => {
	var currentDevice = project.projectGetCurrentDevice();
    if (currentDevice)
    {
		interruptSetupAutoCompletes(currentDevice, context);
	}
    if (activeProjectInfo && activeProjectInfo.migrationState && activeProjectInfo.migrationState.currentDevice)
    {
        interruptSetupSysConfigAutoCompletes(currentDevice, activeProjectInfo, context);
    }
};

function getDeviceInterruptData(device: string){
	var interruptFile = require("./../interrupt_data/" + device + "_interrupt");
	if (interruptFile && interruptFile["interrupts"])
	{
		var deviceInterruptData : InterruptData[] = interruptFile["interrupts"];
		return deviceInterruptData;
	}
}

export function interruptSetup(context: vscode.ExtensionContext)
{
	interruptCompletions = [];
	
	const interruptCompletionProvider = vscode.languages.registerCompletionItemProvider('c', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			if (interruptCoderStatus)
			{
				return interruptCompletions;
			}
			else
			{
				return [];
			}
		}
	});

	context.subscriptions.push(interruptCompletionProvider);

	let enableInterruptCoderDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_ENABLE_INTERRUPT_CODER, () => {		
		interruptUpdateIsInterruptCoderEnabled(true);
	});
	context.subscriptions.push(enableInterruptCoderDisposable);
	let disableInterruptCoderDisposable = vscode.commands.registerCommand(info.C2000_IDEA_CMD_DISABLE_INTERRUPT_CODER, () => {		
		interruptUpdateIsInterruptCoderEnabled(false);
	});

	context.subscriptions.push(disableInterruptCoderDisposable);

	project.deviceChangeSubscription.push(interruptProjectChangeHandler);
	
}

export function interruptSetupAutoCompletes(deviceName: string, context: vscode.ExtensionContext)
{
	var device = deviceName.toLowerCase();
	interruptCompletions = [];

    var deviceInterruptData = getDeviceInterruptData(device);
    if (deviceInterruptData)
    {
        for (let interruptData of deviceInterruptData)
        {
			let interruptCodeTemplate = "";
			if (device.startsWith("f28")) {
				interruptCodeTemplate = 
				"//" + "\n" +
				"// Interrupt Service Routine - " + interruptData.intDescription + "\n" + 
				"//" + "\n" +
				"interrupt void INT_${1:" + interruptData.intDefineName.replace("INT_", "") + "}_ISR(void)" +
				"{" + "\n" +
				"\t${0}" + "\n" +
				(!interruptData.intGroupNumber? 

				"\t //" + "\n" +
				"\t // This interrupt does not have an ACK group" + "\n" +
				"\t //" + "\n" :

				"\t//" + "\n" +
				"\t// The ACK group corresponding to this interrupt must be cleared" + "\n" +
				"\t//" + "\n" +
				"\tInterrupt_clearACKGroup(INTERRUPT_ACK_GROUP" + interruptData.intGroupNumber + ");" + "\n") +

				"}" + "\n" +
				"";
			}
			else {
				interruptCodeTemplate = 
				"//" + "\n" +
				"// Interrupt Service Routine - " + interruptData.intDescription + "\n" + 
				"//" + "\n" +
				"__attribute__((interrupt(\"INT\"))) void INT_${1:" + interruptData.intDefineName.replace("INT_", "") + "}_ISR(void);" + "\n" +
				"void INT_${1}_ISR(void)" + "\n" +
				"{" + "\n" +
				"\t${0}" + "\n" +
				"\t//" + "\n" +
				"\t// Ensure to clear all interrupt flags" + "\n" +
				"\t//" + "\n" +
				"}" + "\n" +
				"";
			}
            const interruptCodeCompletion = new vscode.CompletionItem(
                "interrupt handler " + interruptData.intDefineName.replace("INT_", ""), 
                vscode.CompletionItemKind.Snippet);
            interruptCodeCompletion.insertText = new vscode.SnippetString(interruptCodeTemplate);
            interruptCompletions.push(interruptCodeCompletion);
              
        }
    }
}

async function interruptSetupSysConfigAutoCompletes(deviceName: string, projectInfo: project.ProjectInfo, context: vscode.ExtensionContext)
{
	var device = deviceName.toLowerCase();
    var boardJSON = await project.projectGetSysConfigBoardJSON(projectInfo);
    if (boardJSON && boardJSON.interruptInfo)
    {
        for (let interruptInfo of boardJSON.interruptInfo)
        {
			let interruptCodeTemplate = "";
			if (device.startsWith("f28")) {
				interruptCodeTemplate = 
				"//" + "\n" +
				"// Interrupt Service Routine - " + interruptInfo.interruptName + "\n" + 
				"//" + "\n" +
				"interrupt void " + interruptInfo.interruptHandler + "(void)" +
				"{" + "\n" +
				"\t${0}" + "\n" +
				"\t//" + "\n" +
				"\t// The ACK group corresponding to this interrupt must be cleared" + "\n" +
				"\t//" + "\n" +
				"\tInterrupt_clearACKGroup(" + interruptInfo.interruptName + "_INTERRUPT_ACK_GROUP);" + "\n" +
				"}" + "\n" +
				"";
			}
			else {
				interruptCodeTemplate = 
				"//" + "\n" +
				"// Interrupt Service Routine - " + interruptInfo.interruptName + "\n" + 
				"//" + "\n" +
				"__attribute__((interrupt(\"INT\"))) void " + interruptInfo.interruptHandler + "(void);" + "\n" +
				"void " + interruptInfo.interruptHandler + "(void)" + "\n" +
				"{" + "\n" +
				"\t${0}" + "\n" +
				"\t//" + "\n" +
				"\t// Ensure to clear all interrupt flags" + "\n" +
				"\t//" + "\n" +
				"}" + "\n" +
				"";
			}


            const interruptCodeCompletion = new vscode.CompletionItem(
                "interrupt handler " + interruptInfo.interruptName.replace("INT_", ""), 
                vscode.CompletionItemKind.Snippet);
            interruptCodeCompletion.insertText = new vscode.SnippetString(interruptCodeTemplate);
            interruptCompletions.push(interruptCodeCompletion);
              
        }
    }
}
