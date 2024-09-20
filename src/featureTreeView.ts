import * as vscode from 'vscode';
import { allProjectInfos, ProjectInfo } from './utilities/project';
import * as packageJson from './utilities/packageJson';
import * as info from './utilities/info';
import * as utils from './utilities/utils';

let extensionContext : vscode.ExtensionContext;

export class FeatureTreeView {
	constructor(context: vscode.ExtensionContext) {
        extensionContext = context;
        featureTreeInfosInit();
        var featureTreeDataProvider = featureTreeViewTreeDataProvider();
		const view = vscode.window.createTreeView('c2000-idea.featureTreeView', { treeDataProvider: featureTreeDataProvider, showCollapseAll: false });
	}
}

interface FeatureTreeInfo {
    treeItem : vscode.TreeItem;
    featureSubTreeInfo? : FeatureTreeInfo[];
}

var featureTreeInfos : FeatureTreeInfo[] = [];
function featureTreeInfosInit(){
    featureTreeInfos = [
        {
            treeItem: {
                label: "Getting Started with C2000 IDEA",
                iconPath: utils.getNoneIconPath(extensionContext),
                collapsibleState: vscode.TreeItemCollapsibleState.Expanded
            },
            featureSubTreeInfo: [
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_OPEN_WALKTHROUGH).title,
                        iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_OPEN_WALKTHROUGH).icon),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".openWalkthrough"
                    }
                }
            ]
        },
        {
            treeItem: {
                label: "Project Detection",
                iconPath: utils.getNoneIconPath(extensionContext),
                collapsibleState: vscode.TreeItemCollapsibleState.Expanded
            },
            featureSubTreeInfo: [
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_GET_PROJECTS).title.replace("C2000: ", ""),
                        // iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_GET_PROJECTS).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".getProjects"
                    }
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_UPDATE_PROJECT_DEVICES).title.replace("C2000: ", ""),
                        // iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_UPDATE_PROJECT_DEVICES).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".updateProjectDevices"
                    }
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_PROJECTS).title.replace("C2000: ", ""),
                        // iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_PROJECTS).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".clearProjects"
                    }
                },
            ]
        },
        {
            treeItem: {
                label: "Migration Support",
                iconPath: utils.getNoneIconPath(extensionContext),
                collapsibleState: vscode.TreeItemCollapsibleState.Collapsed
            },
            featureSubTreeInfo: [
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_SETUP_PROJECT_CURRENT_DEVICE).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".setupProjectCurrentDevice"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".setupMigration"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_ALL_MIGRATION_DATA).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_ALL_MIGRATION_DATA).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".clearAllMigrationData"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_OPEN_AUTO_MIGRATION_GUIDE).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_OPEN_AUTO_MIGRATION_GUIDE).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".openAnyToAnyMigrationGuide"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runMigrationCheck"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK_ON_PROJECT).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK_ON_PROJECT).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".migrationCheckOnProject"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK).title.replace("C2000: Enable ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".continuousMigrationCheck"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_EXPORT_MIGRATION_REPORT).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".exportMigrationReport"
                    },
                },                
            ]
        },
        {
            treeItem: {
                label: "Register Code Support",
                iconPath: utils.getNoneIconPath(extensionContext),
                collapsibleState: vscode.TreeItemCollapsibleState.Collapsed
            },
            featureSubTreeInfo: [
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_REGISTER_VISION).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_REGISTER_VISION).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runRegisterVision"
                    }
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER).title.replace("C2000: Enable ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".registerCoder"
                    }
                },
                {
                    treeItem: {
                        label: "Bitfield Support",
                        iconPath: utils.getNoneIconPath(extensionContext),
                        collapsibleState: vscode.TreeItemCollapsibleState.Collapsed
                    },
                    featureSubTreeInfo: [
                        {
                            treeItem: {
                                label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION).title.replace("C2000: ", ""),
                                //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION).icon),
                                iconPath: utils.getNoneIconPath(extensionContext),
                                contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runBitfieldRegisterVision"
                            }
                        },
                        {
                            treeItem: {
                                label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_TO_DRIVERLIB_MIGRATION).title.replace("C2000: ", ""),
                                //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION).icon),
                                iconPath: utils.getNoneIconPath(extensionContext),
                                contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runBitfieldRegisterToDriverlibMigration"
                            }
                        },
                    ]
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_ALL_REGISTER_INFO).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".clearAllRegisterInfo"
                    }
                },
            ]
        },
        {
            treeItem: {
                label: "Interrupt Code Support",
                iconPath: utils.getNoneIconPath(extensionContext),
                collapsibleState: vscode.TreeItemCollapsibleState.Collapsed
            },
            featureSubTreeInfo: [
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_INTERRUPT_CODER).title.replace("C2000: Enable ", ""),
                        // iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_INTERRUPT_CODER).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".interruptCoder"
                    }
                },
            ]
        }
    ];
}

function featureTreeViewTreeDataProvider(): vscode.TreeDataProvider<FeatureTreeInfo> {
	return {
		getChildren: (element?: FeatureTreeInfo): FeatureTreeInfo[] => {
            if (!element) {
                

                return featureTreeInfos;
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
		getTreeItem: (element: FeatureTreeInfo): vscode.TreeItem => {
			return element.treeItem;
		},
	};
}
