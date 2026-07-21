import * as vscode from 'vscode';
import { DEVICE_LIST, MIGRATION_EPWM_RESOLUTION_DEVICE_LIST, MIGRATION_MCPWM_RESOLUTION_DEVICE_LIST } from '../deviceData';
import { SysConfigMigrationDatabase } from '../types/syscfg_migration';
import * as info from '../utilities/info';

/**
 * Supported SysConfig peripheral module-to-module migration pairs.
 *
 * Each value is the filename stem of the corresponding database at
 * `migration_data/syscfg_data/<value>_syscfg_migration.json`.
 */
export enum MigrationSyscfgModulePair {
	EPWM_MCPWM = "epwm_mcpwm",
}

export interface MigrationSyscfgModuleSupportDevices {
	sourceDevices: string[];
	targetDevices: string[];
}

export const MIGRATION_SYSCFG_MODULE_SUPPORT: Record<MigrationSyscfgModulePair, MigrationSyscfgModuleSupportDevices> = {
	[MigrationSyscfgModulePair.EPWM_MCPWM]: {
		sourceDevices: MIGRATION_EPWM_RESOLUTION_DEVICE_LIST,
		targetDevices: MIGRATION_MCPWM_RESOLUTION_DEVICE_LIST,
	},
};


export async function migrationSyscfgLoadDatabase(
	context: vscode.ExtensionContext,
	modulePair: MigrationSyscfgModulePair,
	sourceDevice: string,
	targetDevice: string,
): Promise<SysConfigMigrationDatabase | undefined> {

	if (!MIGRATION_SYSCFG_MODULE_SUPPORT[modulePair]) {
		return undefined;
	}

	if (!MIGRATION_SYSCFG_MODULE_SUPPORT[modulePair].sourceDevices.includes(sourceDevice) || !MIGRATION_SYSCFG_MODULE_SUPPORT[modulePair].targetDevices.includes(targetDevice)) {
		return undefined;
	}

	const fileName = `${modulePair}_syscfg_migration.json`;
	const fileUri = vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", "syscfg_data", fileName);

	try {
		const buffer = await vscode.workspace.fs.readFile(fileUri);
		const database = JSON.parse(Buffer.from(buffer).toString("utf-8")) as unknown as SysConfigMigrationDatabase;

		// Keep only the config entries applicable to this migration:
		//  - source: the entry must exist on sourceDevice (`devices` includes it), and
		//  - target: an undefined `to_devices` means it applies to all targets, otherwise
		//    `to_devices` must include targetDevice.
		const filtered: SysConfigMigrationDatabase = {};
		for (const [configName, entry] of Object.entries(database)) {
			const onSourceDevice = entry.devices.includes(sourceDevice);
			const onTargetDevice = entry.to_devices === undefined || entry.to_devices.includes(targetDevice);
			if (onSourceDevice && onTargetDevice) {
				filtered[configName] = entry;
			}
		}
		return filtered;
	} catch {
		// File does not exist or could not be parsed.
		return undefined;
	}
}

export async function migrationSyscfgGetAgentReport(
	context: vscode.ExtensionContext,
	modulePair: MigrationSyscfgModulePair,
	sourceDevice: string,
	targetDevice: string,
): Promise<string | undefined> {
	const database = await migrationSyscfgLoadDatabase(context, modulePair, sourceDevice, targetDevice);
	if (!database) {
		return undefined;
	}

	const sections: string[] = [];

	// Prepend the companion .md guide (same stem) if it exists.
	const mdUri = vscode.Uri.joinPath(context.extension.extensionUri, "migration_data", "syscfg_data", `${modulePair}_syscfg_migration.md`);
	try {
		const mdBuffer = await vscode.workspace.fs.readFile(mdUri);
		sections.push(Buffer.from(mdBuffer).toString("utf-8").trimEnd());
	} catch {
		// No companion .md; skip it.
	}

	// Render the filtered database as a Markdown table.
	const esc = (value: string): string => value.replace(/\s*\r?\n\s*/g, " ").replace(/\|/g, "\\|").trim();
	// A cell showing a GUI display name (bold) with the raw config/option id in parentheses when a
	// display name is present; otherwise just the id.
	const nameCell = (id: string, displayName?: string | null): string =>
		displayName ? `**${esc(displayName)}**<br>(\`${esc(id)}\`)` : `(\`${esc(id)}\`)`;
	// A single option label: "<display name> (`value`)" when a display name exists, else "`value`".
	const optionLabel = (value: string, displayName?: string | null): string =>
		displayName ? `${esc(displayName)} (\`${esc(value)}\`)` : `\`${esc(value)}\``;

	const tableRows: string[] = [
		"| Source config<br>(id) | Target config<br>(id) | Status | Value mapping | Guidance |",
		"| --- | --- | --- | --- | --- |",
	];
	for (const [configName, entry] of Object.entries(database)) {
		const source = nameCell(configName, entry.from_displayName);

		let target = "—";
		let valueMapping = "—";
		// no_equivalent entries have no target config, display name, or option_map.
		if (entry.status !== 'no_equivalent') {
			target = nameCell(entry.to_config, entry.to_displayName);
			if (entry.option_map) {
				const optionLines = Object.entries(entry.option_map).map(([fromOption, item]) => {
					const from = optionLabel(fromOption, item.from_displayName);
					const to = item.to_option === null
						? "— (no equivalent)"
						: optionLabel(item.to_option, item.to_displayName);
					return `${from} → ${to}<br>`;
				});
				if (optionLines.length > 0) {
					valueMapping = optionLines.join("<br><br>");
				}
			}
		}

		tableRows.push(`| ${source} | ${target} | ${esc(entry.status)} | ${valueMapping} | ${esc(entry.fixMsg)} |`);
	}
	sections.push(tableRows.join("\n"));

	return sections.join("\n\n");
}

export async function migrationSyscfgGenerateReportForAgent(context: vscode.ExtensionContext): Promise<void> {
	try {
		// Build module pair quick pick from enum values
		const modulePairOptions = Object.entries(MigrationSyscfgModulePair).map(([key, value]) => ({
			label: key === 'EPWM_MCPWM' ? 'EPWM → MCPWM' : key,
			description: value,
		}));

		// Prompt for module pair
		const moduleSelection = await vscode.window.showQuickPick(modulePairOptions, {
			title: "Select module pair",
			placeHolder: "Choose peripheral pair",
		});
		if (!moduleSelection) {
			return; // User cancelled
		}

		const modulePair = moduleSelection.description as MigrationSyscfgModulePair;

		// Build device quick pick options
		const sourceDeviceOptions = MIGRATION_SYSCFG_MODULE_SUPPORT[modulePair]?.sourceDevices.map(dev => ({
			label: dev,
			picked: false,
		})) || [];
		const targetDeviceOptions = MIGRATION_SYSCFG_MODULE_SUPPORT[modulePair]?.targetDevices.map(dev => ({
			label: dev,
			picked: false,
		})) || [];

		// Prompt for source device
		const sourceSelection = await vscode.window.showQuickPick(sourceDeviceOptions, {
			title: "Select source device",
			placeHolder: "Choose source device",
		});
		if (!sourceSelection) {
			return; // User cancelled
		}

		const sourceDevice = sourceSelection.label;

		// Prompt for target device
		const targetSelection = await vscode.window.showQuickPick(targetDeviceOptions, {
			title: "Select target device",
			placeHolder: "Choose target device",
		});
		if (!targetSelection) {
			return; // User cancelled
		}

		const targetDevice = targetSelection.label;

		// Get the migration report
		const report = await migrationSyscfgGetAgentReport(context, modulePair, sourceDevice, targetDevice);
		if (!report) {
			vscode.window.showErrorMessage("Failed to generate syscfg migration report. Check device selection and module pair.");
			return;
		}

		// Open the report in a new editor tab
		const doc = await vscode.workspace.openTextDocument({
			content: report,
			language: "markdown",
		});
		await vscode.window.showTextDocument(doc);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		vscode.window.showErrorMessage(`Error generating syscfg migration report: ${message}`);
	}
}

/**
 * Register syscfg migration commands.
 *
 * @param context Extension context
 */
export function migrationSyscfgSetup(context: vscode.ExtensionContext): void {
	let syscfgReportDisposable = vscode.commands.registerCommand(
		info.C2000_IDEA_CMD_GENERATE_SYSCFG_MIGRATION_REPORT,
		() => migrationSyscfgGenerateReportForAgent(context)
	);
	context.subscriptions.push(syscfgReportDisposable);
}
