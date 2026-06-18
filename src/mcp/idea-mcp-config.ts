import { migrationRunMigrationCheckOnUri, exportMigrationAgentReport } from '../migration';

export const IDEA_MCP_SERVER_NAME = 'idea-mcp';
export const IDEA_MCP_AUTH_TOKEN = 'IDEA-MCP';
export const IDEA_MCP_COMMAND_PREFIX = 'C2000-IDEA';
export const IDEA_MCP_VSCODE_CONFIG = 'c2000-idea';
export const IDEA_MCP_SETTINGS_KEY = 'ideaMcp';
export const IDEA_MCP_DEFAULT_PORT = 55001;

export const IDEA_MCP_HANDLERS = {
	runMigrationCheck: migrationRunMigrationCheckOnUri,
	generateMigrationReport: exportMigrationAgentReport,
};
