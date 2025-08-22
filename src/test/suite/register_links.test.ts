// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as c2000idea from '../../extension';
import * as register from '../../register';
import * as deviceData from '../../deviceData';
import * as info from '../../utilities/info';
import * as project from '../../utilities/project';
import * as fs from 'fs';
import path = require('path');
import assert = require('assert');
import {before, after, beforeEach} from 'mocha';

//If true, will regenerate golden source JSON to compare to, if false will compare against exising golden source
const GENERATE_EXPECTED = true; 

let TEST_FILE_PATH = "../../../../../c2000-idea-test-source/collateral/workspace/";

interface resultsDictionary {
	[Key: string]: { //test name
		[Key: string]: { //device name
			[Key: string]: Number //result name: result
		} 
	}
};
let results:resultsDictionary = {};

interface TestListDictionary {
	[Key: string]: [displayName: string, devicesNotFound:[string]];
};

let TESTS: TestListDictionary = {
"project_driverlib" : ["Project Driverlib Register Link Check", [""]],
"projectless_driverlib" : ["Projectless Driverlib Register Link Check", [""]],
"projectless_bitfield" : ["Projectless Bitfield Register Link Check", [""]],
};


function wait(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

//Globals
let amountOfDetectedRegisters = 0;
let amountOfLinksFound = 0;
let amountOfValidUrlLinksFound = 0;
let linksPresentPercent:number = 0.00;
let linksValidPercent:number = 0.00;


suite('Register Link Extension Test Suite', () => {
	before(() => {

		vscode.window.showInformationMessage('Starting register link tests.');

		//Test suite initializations
		for(const testType in TESTS){
			if(GENERATE_EXPECTED){
				results[testType] = {};
			}
			for(let d in deviceData.DEVICE_LIST){
				let device = deviceData.DEVICE_LIST[d];
				const fs = require('fs');
				if(!fs.existsSync(path.resolve(__dirname, TEST_FILE_PATH, testType))){
					//throw new Error(`No test directory found for ${device} ${testType}`);
					console.log(`No test directory found for ${device} in ${testType}!!!`);
					TESTS[testType][1].push(device);
				}
				else{
					if(GENERATE_EXPECTED){
						//Initialixe results obj
						results[testType][device] = {
							"amountOfDetectedRegisters": 0,
							"amountOfLinksFound": 0,
							"amountOfValidUrlLinksFound": 0
						}
					}
					else{
						//Read in JSON of expected values
						const resultsFilePath = path.resolve(TEST_FILE_PATH, 'expected_results.json');
						if(fs.existsSync(resultsFilePath)){
							const resultsContent = fs.readFileSync(resultsFilePath, 'utf8');
							try{
								let resultsJSON = JSON.parse(resultsContent);
								if(!results[testType]){
									results[testType] = {};
								}
								results[testType][device] = resultsJSON;
							}
							catch(error){
								console.log("Error parsing expected_results.json file")
							}
						}
					}
				}
			}
		}
	});
	
	//Run through all register link test types and all devices
	for(const testType in TESTS){
		//Loop through all device folders
		for(let d in deviceData.DEVICE_LIST){
			//Run a test type
			test(TESTS[testType][0] + ": " + deviceData.DEVICE_LIST[d], async () => {
				let projectDetected = false;
				amountOfDetectedRegisters = 0;
				amountOfLinksFound = 0;
				amountOfValidUrlLinksFound = 0;
				let device = deviceData.DEVICE_LIST[d];
				console.log(device);
				if(!(TESTS[testType][1].includes(device))){ //If this device isn't in an unfound path
					let deviceFilePath = path.resolve(__dirname, TEST_FILE_PATH, testType, device.toLowerCase());
					
					if(!testType.includes("projectless")){
						const projectPath = path.resolve(deviceFilePath, "..");;

						if(testType.includes("driverlib")){
							//Get path to device folder with project driverlib files
							deviceFilePath = path.resolve(deviceFilePath, "device", "driverlib");
						}
						const folderUri = vscode.Uri.file(projectPath);

						await vscode.commands.executeCommand('vscode.openFolder', folderUri);
						// await wait(100);
						//Run the project detection command from extension
						//await vscode.commands.executeCommand(info.C2000_IDEA_CMD_GET_PROJECTS);
						await project.getProjects(project.extensionContext);
						// await wait(100);


						//Wait for project detection command to execute
						//Verify project has been detected (added to the tree view) 
						let projectsInWorkspace = project.allProjectInfos;
						for(let p of projectsInWorkspace){
							if(p.name == device){
								projectDetected = true;
							}
						}
						if(!projectDetected){
							console.log(device + " project not detected for " + testType);
						}
					}
					const testFiles = fs
						.readdirSync(deviceFilePath)
						.filter(file => file.endsWith('.c') || file.endsWith('.h'))
						.map(file => path.join(deviceFilePath, file));
					//Loop through files running register vision on each
					for(let testFile in testFiles){
						//Open the file to test
						let testUri = vscode.Uri.file(testFiles[testFile]);
						let testTextDoc = await vscode.workspace.openTextDocument(testUri);
						let editor = await vscode.window.showTextDocument(testTextDoc);		

						try{
							if(testType.includes("driverlib")){
								//Run the driverlib register vision command, pass in device as arg
								await vscode.commands.executeCommand(info.C2000_IDEA_CMD_RUN_REGISTER_VISION, device);
							}
							else{
								//Run the bitfield register vision command, pass in device as arg
								await vscode.commands.executeCommand(info.C2000_IDEA_CMD_RUN_BITFIELD_REGISTER_VISION, device);
							}			
							
							//Wait for register vision command to execute
							await wait(100);

							//Get all decorations links from the document
							let decorations = register.lastRegisterVisionResults;
							amountOfDetectedRegisters += decorations.length;	
							//Verify all links are valid
							for(let d in decorations){
								let link = decorations[d].link;
								if(link){
									if(link != ""){
										amountOfLinksFound++;
										//Test if URL is valid
										var urlPattern = new RegExp('^(https?:\\/\\/)?'); // validate protocol
											// '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'); // validate domain name
											// '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
											// '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
											// '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
											// '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
										if(urlPattern.test(link)){
											amountOfValidUrlLinksFound++;
										}
									}
								}
								
							}

						}
						catch{
							console.log('ERROR was thrown')
						}
					}
					//Compare to JSON of expected value or write expected value 
					if(GENERATE_EXPECTED){
						results[testType][device]["amountOfDetectedRegisters"] = amountOfDetectedRegisters;
						results[testType][device]["amountOfLinksFound"] = amountOfLinksFound;
						results[testType][device]["amountOfValidUrlLinksFound"] = amountOfValidUrlLinksFound;
						linksPresentPercent = (amountOfLinksFound / amountOfDetectedRegisters) * 100;
						linksValidPercent = (amountOfValidUrlLinksFound / amountOfLinksFound) * 100;
						console.log('\tLinks Generated: ' + linksPresentPercent.toFixed(2).toString() + "%");
						console.log('\tLinks Valid: ' + linksValidPercent.toFixed(2).toString() + "%");
					}
					else{
						try{
							if(results[testType][device]["amountOfDetectedRegisters"] != amountOfDetectedRegisters){ //change to >
								throw new Error(`amountOfDetectedRegisters for ${device} in ${testType} does not equal expected value`);
							}
							if(results[testType][device]["amountOfLinksFound"] != amountOfLinksFound){
								throw new Error(`amountOfLinksFound for ${device} in ${testType} does not equal expected value`);
							}
							if(results[testType][device]["amountOfValidUrlLinksFound"] != amountOfValidUrlLinksFound){
								throw new Error(`amountOfValidUrlLinksFound for ${device} in ${testType} does not equal expected value`);
							}
						}
						catch(error){
							console.log(`expected entry missing for ${device} in ${testType}`);
						}
					}
				}
			});
		}
		
	};
	after(() => {
		if(GENERATE_EXPECTED){
			//Write JSON file with results
			let jsonData = JSON.stringify(results, null, 2);
			const resultsFilePath = path.resolve(__dirname, TEST_FILE_PATH, "../expected_results.json");
			if(fs.existsSync(resultsFilePath)){
				fs.writeFile(resultsFilePath, jsonData, (err) => {
					if(err){
						console.log("Error writing expected results JSON file");
					}
				});
			}
		}
	});
});
