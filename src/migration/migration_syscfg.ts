import * as vscode from 'vscode';
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
 * For now this only reads the matching JSON file (if it exists) and casts it to the
 * {@link SysConfigMigrationDatabase} shape. `sourceDevice` / `targetDevice` (values from
 * `DEVICE_LIST`) are part of the interface for later device-aware filtering but are not yet used.
 *
 * @param context      Extension context, used to locate the bundled `migration_data` folder.
 * @param modulePair   Peripheral module-to-module pair (e.g. EPWM_MCPWM).
 * @param sourceDevice Source device family (a value from DEVICE_LIST).
 * @param targetDevice Target device family (a value from DEVICE_LIST).
 * @returns The parsed and cast database, or `undefined` if the file does not exist or cannot be parsed.
 */
export async function loadSysConfigMigrationDatabase(
	context: vscode.ExtensionContext,
	modulePair: SysConfigMigrationModulePair,
	sourceDevice: string,
	targetDevice: string,
): Promise<SysConfigMigrationDatabase | undefined> {
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
