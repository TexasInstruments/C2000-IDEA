import * as vscode from 'vscode';
import * as utils from './utilities/utils';
import * as info from './utilities/info';
import * as project from './utilities/project';


var extensionContext : vscode.ExtensionContext;
let collateralAdditionalTreeDidChangeTreeData: vscode.EventEmitter<CollateralAdditionalTreeItem | undefined | null | void> = new vscode.EventEmitter<CollateralAdditionalTreeItem | undefined | null | void>();
let collaterlAdditionalTreeView : vscode.TreeView<CollateralAdditionalTreeView>;
var collateralAdditionalTreeItems : CollateralAdditionalTreeItem[] = [];
var collateralFindabilityData : any;
var collateralAdditionalMappingData : any;


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
        let found: boolean =false;
        collateralAdditionalTreeItems = [];
        var currentDevice = project.projectGetCurrentDevice();
        //Verify that data from sysconfig_collateral_links.js has been loaded
        if (collateralFindabilityData)
        {
            //Get list of all keys from database ex. ADC, BGCRC, C28X etc.
            var collateralKeys = Object.keys(collateralFindabilityData);
            for (var collateralKey of collateralKeys)
            {
                //Iterate through each key and check if clicked word is contained
                if (word.toLowerCase().includes(collateralKey.toLowerCase()))
                {
                    //Word matches - iterate through all categories in the key, ex. Foundational Materials, Getting Started Materials etc.
                    found = true;
                    for (var collateralCategory of collateralFindabilityData[collateralKey])
                    {
                        //Initialize empty tree item for category
                        let collateralCategoryTreeItem: CollateralAdditionalTreeItem | undefined = undefined;
                        //Add top level tree info from category, ex. CLA - Foundational Materials
                        collateralCategoryTreeItem = {
                            treeItem: {
                                label: collateralKey + " - " + collateralCategory.category_displayName,
                                collapsibleState: vscode.TreeItemCollapsibleState.Expanded
                            }
                        };
                        //Loop through all content contained in category ex. C2000 Academy - CLA, C2000 CLA C Compiler Series etc.
                        for (var collateralContent of collateralCategory.content){
                            if(collateralContent.devices){
                                let deviceFound: boolean = false;
                                for(let d in collateralContent.devices){
                                    if((collateralContent.devices[d] == currentDevice)){
                                        deviceFound = true;
                                    }
                                }
                                if(!deviceFound){
                                    continue;
                                }
                            }
                            if (!collateralCategoryTreeItem.featureSubTreeInfo)
                            {
                                collateralCategoryTreeItem.featureSubTreeInfo = [];
                            }   
                            //Push content as subtree element
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
                            if(collateralCategoryTreeItem.featureSubTreeInfo){
                                collateralAdditionalTreeItems.push(collateralCategoryTreeItem);
                            }
                        }
                    }

                }
            }            
        }
        //If word isn't found in collateral findability database, search additional mappings
        if(!found){
            //Verify that data from collateral_additional_mappings.js has been loaded 
            if(collateralAdditionalMappingData){
                //Get list of all phrases from database ex. Memory, Communication, Security etc.
                var phrases = Object.keys(collateralAdditionalMappingData);
                //Iterate through each phrase and check if clicked word is contained (or vice versa)
                for(let phrase of phrases){
                    if((word.toLowerCase().includes(phrase)) || (phrase.includes(word.toLowerCase()))){
                        //Word matches - iterate through all keys mapped to the phrase, ex. ADC, BGCRC, C28X etc.
                        for(var key of collateralAdditionalMappingData[phrase]){
                            //Iterate through all categories in the current key
                            for (var collateralCategory of collateralFindabilityData[key])
                            {
                                //Initialize empty tree item for category
                                let collateralCategoryTreeItem: CollateralAdditionalTreeItem | undefined = undefined;
                                collateralCategoryTreeItem = {
                                    treeItem: {
                                        label: key + " - " + collateralCategory.category_displayName,
                                        collapsibleState: vscode.TreeItemCollapsibleState.Expanded
                                    }
                                };
                                //Loop through all content contained in category ex. C2000 Academy - CLA, C2000 CLA C Compiler Series etc.
                                for (var collateralContent of collateralCategory.content){
                                    if(collateralContent.devices){
                                        let deviceFound: boolean = false;
                                        for(let d in collateralContent.devices){
                                            if((collateralContent.devices[d] == currentDevice)){
                                                deviceFound = true;
                                            }
                                        }
                                        if(!deviceFound){
                                            continue;
                                        }
                                    }
                                    if (!collateralCategoryTreeItem.featureSubTreeInfo)
                                    {
                                        collateralCategoryTreeItem.featureSubTreeInfo = [];
                                    }   
                                    //Push content as subtree element
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
                                    if(collateralCategoryTreeItem.featureSubTreeInfo){
                                        collateralAdditionalTreeItems.push(collateralCategoryTreeItem);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //If all input data has is valid (has been setup) - push whatever is in collateralAdditionalTreeItems, even if empty
        if((collateralFindabilityData || collateralAdditionalMappingData) && word){
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
        var collateralAdditionalMappingFile = require("./../collateral_findability/" + "collateral_additional_mappings");
        if (collateralAdditionalMappingFile && collateralAdditionalMappingFile["getCollateralDataMappings"])
        {
            collateralAdditionalMappingData = collateralAdditionalMappingFile["getCollateralDataMappings"]();
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
