import * as vscode from 'vscode';

export function writeDebug(msg:string)
{
	vscode.workspace.openTextDocument().then((a: vscode.TextDocument) => {
		vscode.window.showTextDocument(a, 1, false).then(e => {
			e.edit(edit => {
				edit.insert(new vscode.Position(0, 0), msg);
			});
		});
	}, (error: any) => {
		debugger;
	});
}
