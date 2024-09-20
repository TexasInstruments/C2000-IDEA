import * as vscode from 'vscode';
import *as project from './utilities/project';
import * as info from './utilities/info';

let projectDidChangeTreeData: vscode.EventEmitter<ProjectTreeInfo | undefined | null | void> = new vscode.EventEmitter<ProjectTreeInfo | undefined | null | void>();
let projectInfosUpdateHandler: project.ProjectInfosUpdateHandler = (context, allProjectInfos) => {
    projectDidChangeTreeData.fire();
};


export class ProjectTreeView {
	constructor(context: vscode.ExtensionContext) {
        var projectTreeDataProvider = projectTreeViewTreeDataProvider();
		const view = vscode.window.createTreeView(info.C2000_IDEA_VIEW_PROJECT_TREE_VIEW, { treeDataProvider: projectTreeDataProvider, showCollapseAll: true });
        
        let disposableProjectTreeViewRefresh = vscode.commands.registerCommand(info.C2000_IDEA_CMD_PROJECT_TREE_VIEW_REFRESH, (args) => {
            projectDidChangeTreeData.fire();
        });
        

        context.subscriptions.push(view, disposableProjectTreeViewRefresh);
        project.projectInfosUpdateSubscription.push(projectInfosUpdateHandler);
	}
}

interface ProjectTreeInfo {
    projectInfo?: project.ProjectInfo;
    treeItem : vscode.TreeItem;
    projectSubTreeInfo? : ProjectTreeInfo[];
}

function projectTreeViewTreeDataProvider(): vscode.TreeDataProvider<ProjectTreeInfo> {
	return {
        onDidChangeTreeData: projectDidChangeTreeData.event,
		getChildren: (element?: ProjectTreeInfo): ProjectTreeInfo[] => {
            if (!element) {
                var projectTreeInfos : ProjectTreeInfo[] = [];
                for (let projectInfo of project.allProjectInfos)
                {
                    projectTreeInfos.push({
                        treeItem: {
                            label: projectInfo.name,
                            collapsibleState: vscode.TreeItemCollapsibleState.Expanded
                        },
                        projectSubTreeInfo: [
                            {
                                treeItem: {
                                    label: "Device Variant: " + projectInfo.deviceVariant,
                                    iconPath: new vscode.ThemeIcon("person"),
                                },
                            },
                            {
                                projectInfo: projectInfo,
                                treeItem: {
                                    label: "Current Device: " + projectInfo.migrationState.currentDevice,
                                    iconPath: new vscode.ThemeIcon("home"),
                                    contextValue: info.C2000_IDEA_VIEW_PROJECT_TREE_VIEW + ".currentDevice",
                                },
                            },
                            {
                                projectInfo: projectInfo,
                                treeItem: {
                                    label: "Migration Devices: " + projectInfo.migrationState.migrationDevices.join(", "),
                                    iconPath: new vscode.ThemeIcon("arrow-swap"),
                                    contextValue: info.C2000_IDEA_VIEW_PROJECT_TREE_VIEW + ".migrationDevices",
                                },
                            }
                        ]
                    });
                }
                return projectTreeInfos;
            }
            else {
                if (element.projectSubTreeInfo)
                {
                    return element.projectSubTreeInfo;
                }
                else
                {
                    return [];
                }
            }
			
		},
		getTreeItem: (element: ProjectTreeInfo): vscode.TreeItem => {
			return element.treeItem;
		},
	};
}
