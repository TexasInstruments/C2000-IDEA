import * as vscode from 'vscode';
import * as utils from './utilities/utils';
import * as info from './utilities/info';
import * as project from './utilities/project';


var extensionContext : vscode.ExtensionContext;
let collateralTreeDidChangeTreeData: vscode.EventEmitter<CollateralTreeItem | undefined | null | void> = new vscode.EventEmitter<CollateralTreeItem | undefined | null | void>();
let collaterlTreeView : vscode.TreeView<CollateralTreeView>;

let collateralTreeProjectChangeHandler: project.ProjectChangeHandler = (context, activeProjectInfo) => {
    collateralTreeDidChangeTreeData.fire();
};

export class CollateralTreeView {
	constructor(context: vscode.ExtensionContext) {
        extensionContext = context;
		collaterlTreeView = vscode.window.createTreeView(info.C2000_IDEA_VIEW_COLLATERAL_TREE_VIEW, { treeDataProvider: collateralTreeViewTreeDataProvider(), showCollapseAll: true });
        context.subscriptions.push(collaterlTreeView);
        project.deviceChangeSubscription.push(collateralTreeProjectChangeHandler);
	}
}

interface CollateralTreeItem {
    name: string;
    treeItem: vscode.TreeItem;
}

function collateralTreeViewTreeDataProvider(): vscode.TreeDataProvider<CollateralTreeItem> {
	return {
        onDidChangeTreeData: collateralTreeDidChangeTreeData.event,
		getChildren: async (element?: CollateralTreeItem): Promise<CollateralTreeItem[]> => {
            if (!element) {    
                var device = project.projectGetCurrentDevice();
                if (!device)
                {
                    collaterlTreeView.title = "C2000 COLLATERAL";
                    return [
                        {
                            name:"C2000 Real-Time Controllers",
                            treeItem: {
                                label: "C2000 Real-Time Controllers",
                                tooltip: "Open C2000 Real-Time Controllers page",
                                iconPath: new vscode.ThemeIcon("globe"),
                                command: {
                                    command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, 
                                    title: 'C2000: Open Collateral', 
                                    arguments:[
                                        {
                                            link: "https://www.ti.com/microcontrollers-mcus-processors/c2000-real-time-control-mcus/overview.html",
                                            html: true
                                        }
                                    ]
                                }
                            }
                        }
                    ];
                }
                
                collaterlTreeView.title = "C2000 COLLATERAL" + " - " + device.toUpperCase();
                var deviceCollateral : CollateralData = await utils.readExtensionJSON(extensionContext, ["collateral_data", device.toLowerCase() + "_collateral.json"]);
                return [
                    {
                        name:"TRM",
                        treeItem: {
                            label: "TRM",
                            tooltip: "Open TRM PDF",
                            iconPath: new vscode.ThemeIcon("file-pdf"),
                            command: {
                                command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, 
                                title: 'C2000: Open Collateral', 
                                arguments:[
                                    {
                                        link: deviceCollateral.trm
                                    }
                                ]
                            }
                        }
                    }, 
                    {
                        name:"Datasheet",
                        treeItem: {
                            label: "Datasheet",
                            tooltip: "Open PDF Datasheet",
                            iconPath: new vscode.ThemeIcon("file-pdf"),
                            command: {
                                command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, 
                                title: 'C2000: Open Collateral', 
                                arguments:[
                                    {
                                        link: deviceCollateral.datasheet.pdf
                                    }
                                ]
                            }
                        }
                    }, 
                    {
                        name:"Datasheet",
                        treeItem: {
                            label: "Datasheet HTML",
                            tooltip: "Open HTML Datasheet",
                            iconPath: new vscode.ThemeIcon("globe"),
                            command: {
                                command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, 
                                title: 'C2000: Open Collateral', 
                                arguments:[
                                    {
                                        link: deviceCollateral.datasheet.html,
                                        html: true
                                    }
                                ]
                            }
                        }
                    }, 
                    {
                        name:"Block Diagram",
                        treeItem: {
                            label: "Block Diagram",
                            tooltip: "Open the Block Diagram",
                            iconPath: new vscode.ThemeIcon("file-media"),
                            command: {
                                command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, 
                                title: 'C2000: Open Collateral', 
                                arguments:[
                                    {
                                        link: deviceCollateral.datasheet.blockDiagram,
                                        html: true
                                    }
                                ]
                            }
                        }
                    }
                ];
            }
            return [];
		},
		getTreeItem: (element: CollateralTreeItem): vscode.TreeItem => {
			const treeItem = element.treeItem;
			return treeItem;
		},
	};
}
