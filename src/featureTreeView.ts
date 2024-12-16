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
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".getProjects",
                        tooltip: "Click to detect all projects in the opened workspace. Detected projects will display in the 'C2000 IDEA - Projects' pane of the Extension tree."
                    }
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_UPDATE_PROJECT_DEVICES).title.replace("C2000: ", ""),
                        // iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_UPDATE_PROJECT_DEVICES).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".updateProjectDevices",
                        tooltip: "Click to re-detect the device for a project that has been previously detected. The detected device of all projects will display in the 'C2000 IDEA - Projects' pane of the Extension tree next to 'Device Variant' and 'Current Device'."
                    }
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_PROJECTS).title.replace("C2000: ", ""),
                        // iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_PROJECTS).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".clearProjects",
                        tooltip: "Click to clear all detected projects from the 'C2000 IDEA - Projects' pane of the Extension tree."
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
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".setupProjectCurrentDevice",
                        tooltip: "Click to manually set the current device for a project that has been detected. Select the project and the device to set it to when prompted. [Requires 'Get Projects' to be run first]"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_SETUP_MIGRATION).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".setupMigration",
                        tooltip: "Click to set up the current device, migration device, and ignored files/symbols for a project before running a migration check. Select the project when prompted to open the settings selection page. [Requires 'Get Projects' to be run first]"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_ALL_MIGRATION_DATA).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_ALL_MIGRATION_DATA).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".clearAllMigrationData",
                        tooltip: "Click to clear all the detected migration concerns and the migration report. [Recommended for 'Run Migration Check on File', 'Run Migration Check on Project' or 'Continuous Migration Check on Current File' to be run first]"
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_OPEN_AUTO_MIGRATION_GUIDE).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_OPEN_AUTO_MIGRATION_GUIDE).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".openAnyToAnyMigrationGuide",
                        tooltip: "Click to open the any-to-any migration guide online to input a migration path and view all peripheral/register/function differences."
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runMigrationCheck",
                        tooltip: "Click to run a (one time) migration check on the file open in your editor using the current migration settings. Select any missing migration settings if prompted. When the check is complete, the bottom right notification displays 'Migration check completed' and all migration concerns from the file are underlined in red."
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK_ON_PROJECT).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_MIGRATION_CHECK_ON_PROJECT).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".migrationCheckOnProject",
                        tooltip: "Click to run a (one time) migration check on a project using the current migration settings. Select the project and any missing migration settings if prompted. When the check is complete, the bottom right notification displays 'Migration check completed on [project name]' and all migration concerns from the project are underlined in red."
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK).title.replace("C2000: Enable ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".continuousMigrationCheck",
                        tooltip: "Click to run a (continuous) migration check on the file open in your editor using the current migration settings. Select any missing migration settings if prompted. The check will run again each time the file is edited. When each check is complete, the bottom right notification displays 'Migration check completed' and all migration concerns from the file are underlined in red."
                    },
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_EXPORT_MIGRATION_REPORT).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_CONT_MIGRATION_CHECK).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".exportMigrationReport",
                        tooltip: "Click to view the migration report, which contains results from the migration check. [Requires 'Run Migration Check on File', 'Run Migration Check on Project' or 'Continuous Migration Check on Current File' to be run first or the report will be blank]"
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
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runRegisterVision",
                        tooltip: "Click to auto-detect all driverlib register accesses in the opened file and click the hover link to view the register descriptions in the device TRM."
                    }
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER).title.replace("C2000: Enable ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".registerCoder",
                        tooltip: "Click the check mark to enable automatic register read/write code generation. Begin typing a C2000 peripheral, register or field name into the editor and make a selection from the drop down to autogenerate template code. Fill in the register base address, variable to read, or value to write."
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
                                contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runBitfieldRegisterVision",
                                tooltip: "Click to auto-detect all bitfield register accesses in the opened file and click the hover link to view the register descriptions in the device TRM."
                            }
                        },
                        {
                            treeItem: {
                                label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_TO_DRIVERLIB_MIGRATION).title.replace("C2000: ", ""),
                                //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION).icon),
                                iconPath: utils.getNoneIconPath(extensionContext),
                                contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".runBitfieldRegisterToDriverlibMigration",
                                tooltip: "Click to detect all bitfield register accesses in the opened file that need to be converted to driverlib code."
                            }
                        },
                    ]
                },
                {
                    treeItem: {
                        label: packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_CLEAR_ALL_REGISTER_INFO).title.replace("C2000: ", ""),
                        //iconPath: packageJson.convertJSONIconPath(packageJson.getPackageJSONCommand(info.C2000_IDEA_CMD_ENABLE_REGISTER_CODER).icon),
                        iconPath: utils.getNoneIconPath(extensionContext),
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".clearAllRegisterInfo",
                        tooltip: "Clear all results from register vision.[Recommended for 'Run Driverlib Registr Vision on Current File' or 'Run Bitfield Registr Vision on Current File'' to be run first]"
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
                        contextValue: info.C2000_IDEA_VIEW_FEATURE_TREE_VIEW + ".interruptCoder",
                        tooltip: "Click the check mark to enable automatic interrupt service routine (ISR) code generation. Begin typing a C2000 peripheral instance or interrupt name into the editor and make a selection from the drop down to autogenerate template ISR code. Fill in the ISR function with the desired application code."
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
