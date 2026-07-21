import * as vscode from 'vscode';
import { DEVICE_LIST } from '../deviceData';
import { SysConfigMigrationDatabase } from '../types/syscfg_migration';

/**
 * Supported SysConfig peripheral module-to-module migration pairs.
 *
 * Each value is the filename stem of the corresponding database at
 * `migration_data/syscfg_data/<value>_syscfg_migration.json`.
 */
export enum SysConfigMigrationModulePair {
	EPWM_MCPWM = "epwm_mcpwm",
}

/**
 * Load the SysConfig migration database for a given module pair and device pair.
 *
 * `sourceDevice` / `targetDevice` are validated against `DEVICE_LIST`; the function returns
 * `undefined` if either is not a known device family. The returned database is filtered to the
 * config entries applicable to this migration: those whose `devices` list includes `sourceDevice`,
 * and — when the entry has a `to_devices` list — whose `to_devices` includes `targetDevice` (an
 * omitted `to_devices` means the entry applies to all targets). This reads the matching JSON file
 * (if it exists) and casts it to the {@link SysConfigMigrationDatabase} shape.
 *
 * @param context      Extension context, used to locate the bundled `migration_data` folder.
 * @param modulePair   Peripheral module-to-module pair (e.g. EPWM_MCPWM).
 * @param sourceDevice Source device family (must be a value from DEVICE_LIST).
 * @param targetDevice Target device family (must be a value from DEVICE_LIST).
 * @returns The source/target-device-filtered database, or `undefined` if a device is unknown, or the file does not exist / cannot be parsed.
 */
export async function loadSysConfigMigrationDatabase(
	context: vscode.ExtensionContext,
	modulePair: SysConfigMigrationModulePair,
	sourceDevice: string,
	targetDevice: string,
): Promise<SysConfigMigrationDatabase | undefined> {
	// Both devices must be known families from DEVICE_LIST.
	if (!DEVICE_LIST.includes(sourceDevice) || !DEVICE_LIST.includes(targetDevice)) {
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

/**
 * Build a combined Markdown document for a SysConfig migration: the companion `.md` guide (same
 * filename stem, if it exists) followed by the source/target-filtered database rendered as a
 * Markdown table (one row per config: source config, status, target config, guidance).
 *
 * @param context      Extension context, used to locate the bundled `migration_data` folder.
 * @param modulePair   Peripheral module-to-module pair (e.g. EPWM_MCPWM).
 * @param sourceDevice Source device family (must be a value from DEVICE_LIST).
 * @param targetDevice Target device family (must be a value from DEVICE_LIST).
 * @returns The combined Markdown string, or `undefined` if the database could not be loaded
 *          (unknown device, or the data file does not exist / cannot be parsed).
 */
export async function getSysConfigMigrationMarkdown(
	context: vscode.ExtensionContext,
	modulePair: SysConfigMigrationModulePair,
	sourceDevice: string,
	targetDevice: string,
): Promise<string | undefined> {
	const database = await loadSysConfigMigrationDatabase(context, modulePair, sourceDevice, targetDevice);
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
	const tableRows: string[] = [
		"| Source config | Status | Target config | Guidance |",
		"| --- | --- | --- | --- |",
	];
	for (const [configName, entry] of Object.entries(database)) {
		const targetConfig = entry.to_config ?? "—";
		tableRows.push(`| ${esc(configName)} | ${esc(entry.status)} | ${esc(targetConfig)} | ${esc(entry.fixMsg)} |`);
	}
	sections.push(tableRows.join("\n"));

	return sections.join("\n\n");
}
