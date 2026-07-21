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
 * `undefined` if either is not a known device family. They are otherwise not yet used for
 * filtering the returned database. For now this reads the matching JSON file (if it exists) and
 * casts it to the {@link SysConfigMigrationDatabase} shape.
 *
 * @param context      Extension context, used to locate the bundled `migration_data` folder.
 * @param modulePair   Peripheral module-to-module pair (e.g. EPWM_MCPWM).
 * @param sourceDevice Source device family (must be a value from DEVICE_LIST).
 * @param targetDevice Target device family (must be a value from DEVICE_LIST).
 * @returns The parsed and cast database, or `undefined` if a device is unknown, or the file does not exist / cannot be parsed.
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
		return JSON.parse(Buffer.from(buffer).toString("utf-8")) as unknown as SysConfigMigrationDatabase;
	} catch {
		// File does not exist or could not be parsed.
		return undefined;
	}
}
