import * as vscode from 'vscode';
import * as utils from './utilities/utils';
import * as info from './utilities/info';
import * as project from './utilities/project';


var extensionContext : vscode.ExtensionContext;
let collateralAdditionalTreeDidChangeTreeData: vscode.EventEmitter<CollateralAdditionalTreeItem | undefined | null | void> = new vscode.EventEmitter<CollateralAdditionalTreeItem | undefined | null | void>();
let collaterlAdditionalTreeView : vscode.TreeView<CollateralAdditionalTreeView>;
var collateralAdditionalTreeItems : CollateralAdditionalTreeItem[] = [];
var collateralFindabilityData : any;

function isCollateralHtml(url:string) : boolean {
    if (/*url.includes("dev.ti.com") ||*/ 
        url.includes("software-dl.ti.com"))
    {
        return true;
    }
    return false;
}

let collateralAdditionalTreeWordChangeHandler: project.ProjectWordSelectionChangeHandler = (context, activeProjectInfo, word) => {
    if (word)
    {
        if (collateralFindabilityData && word)
        {
            collateralAdditionalTreeItems = [];
            var collateralKeys = Object.keys(collateralFindabilityData);
            for (var collateralKey of collateralKeys)
            {
                if (word.toLowerCase().includes(collateralKey.toLowerCase()))
                {
                    for (var collateralCategory of collateralFindabilityData[collateralKey])
                    {
                        let collateralCategoryTreeItem: CollateralAdditionalTreeItem | undefined = undefined;
                        collateralCategoryTreeItem = {
                            treeItem: {
                                label: collateralKey + " - " + collateralCategory.category_displayName,
                                collapsibleState: vscode.TreeItemCollapsibleState.Expanded
                            }
                        };
                        for (var collateralContent of collateralCategory.content){
                            if (!collateralCategoryTreeItem.featureSubTreeInfo)
                            {
                                collateralCategoryTreeItem.featureSubTreeInfo = [];
                            }   
                            collateralCategoryTreeItem.featureSubTreeInfo.push(
                                {
                                    treeItem: {
                                        label: collateralContent.name,
                                        tooltip: "Open " + collateralContent.name,
                                        iconPath: new vscode.ThemeIcon("globe"),
                                        command: {
                                            command: info.C2000_IDEA_CMD_OPEN_COLLATERAL, 
                                            title: 'C2000: Open Collateral', 
                                            arguments:[
                                                {
                                                    link: collateralContent.url,
                                                    html: isCollateralHtml(collateralContent.url)
                                                }
                                            ]
                                        }
                                    }
                                }
                            );
                        }
                        if (collateralCategoryTreeItem) {
                            collateralAdditionalTreeItems.push(collateralCategoryTreeItem);
                        }
                    }
                }
            }
            collateralAdditionalTreeDidChangeTreeData.fire();
            
        }
    }
};

export class CollateralAdditionalTreeView {
	constructor(context: vscode.ExtensionContext) {
        extensionContext = context;
        var collateralFindabilityFile = require("./../collateral_findability/" + "sysconfig_collateral_links");
        if (collateralFindabilityFile && collateralFindabilityFile["getCollateralData"])
        {
            collateralFindabilityData = collateralFindabilityFile["getCollateralData"]();
        }
		collaterlAdditionalTreeView = vscode.window.createTreeView(info.C2000_IDEA_VIEW_COLLATERAL_ADDITIONAL_TREE_VIEW, { treeDataProvider: collateralAdditionalTreeViewTreeDataProvider(), showCollapseAll: true });
        context.subscriptions.push(collaterlAdditionalTreeView);
        project.wordChangeSubscription.push(collateralAdditionalTreeWordChangeHandler);
	}
}

interface CollateralAdditionalTreeItem {
    treeItem: vscode.TreeItem;
    featureSubTreeInfo? : CollateralAdditionalTreeItem[];
}

function collateralAdditionalTreeViewTreeDataProvider(): vscode.TreeDataProvider<CollateralAdditionalTreeItem> {
	return {
        onDidChangeTreeData: collateralAdditionalTreeDidChangeTreeData.event,
		getChildren: (element?: CollateralAdditionalTreeItem): CollateralAdditionalTreeItem[] => {
            if (!element) {
                
                return collateralAdditionalTreeItems;
            }
            else {
                if (element.featureSubTreeInfo)
                {
                    return element.featureSubTreeInfo;
                }
                else
                {
                    return [];
                }
            }
			
		},
		getTreeItem: (element: CollateralAdditionalTreeItem): vscode.TreeItem => {
			return element.treeItem;
		},
	};
}
