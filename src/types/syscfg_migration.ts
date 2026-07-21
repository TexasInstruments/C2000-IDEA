/**
 * TypeScript interfaces for a **SysConfig peripheral-migration mapping database** —
 * a generic, reusable schema describing how one peripheral's SysConfig configs map
 * onto another's. It is not tied to any specific peripheral pair or device set: the
 * same interface models every `*_syscfg_migration.json` in this workspace (the
 * ePWM -> MCPWM database today, and any future combination).
 *
 * All exported names carry a `SysConfig` prefix to namespace this SysConfig-level
 * schema apart from other migration schemas (e.g. the driverlib-level one) and to
 * keep generic names like `Device`/`MigrationEntry` from clashing on import.
 *
 * Field-name convention: `from_*` describes the source peripheral's config, `to_*`
 * the target peripheral's config, `fixMsg` the human-readable migration guidance.
 *
 * The JSON is a flat object whose keys are source-peripheral SysConfig config
 * names; there is no reserved metadata key — every top-level key is a config entry.
 * Each entry gives the matching target config, migration guidance, device
 * availability, and — for enum-like configs — a per-option mapping.
 *
 * Load pattern (a cast is required because JSON imports widen literal unions like
 * `status` to `string`):
 * ```ts
 * import db from './<from_peripheral>_<to_peripheral>_syscfg_migration.json';
 * const database = db as unknown as SysConfigMigrationDatabase;
 * const entry = database['<sourceConfigName>'];
 * ```
 */

// ─── Devices ────────────────────────────────────────────────────────────────

/**
 * A device identifier (e.g. "F28P65x", "F28E12x"). Kept as an open string so the
 * schema stays reusable across every peripheral pair and device set; a consumer
 * that wants a closed set for a specific database can narrow it in its own code.
 */
export type SysConfigDevice = string;

// ─── Value kinds and status ─────────────────────────────────────────────────

/**
 * SysConfig value kind of a config, derived from its schema entry:
 * options + scalar default -> 'enum'; options + list default/minSelections ->
 * 'multiselect'; otherwise keyed off the default's JS type. 'other' covers
 * schema entries with no recognizable default (e.g. action buttons).
 */
export type SysConfigValueType =
  | 'enum'
  | 'multiselect'
  | 'bool'
  | 'number'
  | 'string'
  | 'list'
  | 'other'
  | 'raw';

/** Migration verdict for a config. */
export type SysConfigMigrationStatus = 'mapped' | 'partial' | 'no_equivalent';

// ─── Defaults ───────────────────────────────────────────────────────────────

/**
 * A single scalar default as stored by SysConfig. Multiselect defaults are
 * arrays (typically empty; elements are option names when populated).
 */
export type SysConfigFromDefaultScalar =
  | string
  | number
  | boolean
  | ReadonlyArray<string>
  | null;

/**
 * Default value of the source config. Usually a scalar shared by every device;
 * where the default differs by device it is an object keyed by device. Use
 * `isPerDeviceDefault()` to discriminate.
 */
export type SysConfigFromDefault =
  | SysConfigFromDefaultScalar
  | Partial<Record<SysConfigDevice, SysConfigFromDefaultScalar>>;

// ─── Option mapping ─────────────────────────────────────────────────────────

/** One source option's mapping inside `option_map`. */
export interface SysConfigOptionMapItem {
  /**
   * Matching target option value, or `null` when the option has no target
   * equivalent (a null here is the sole no-equivalent signal — there is no
   * separate list). For a structural entry the value may be an indirect target
   * enum rather than a direct option of the target config — see the entry's
   * `fixMsg`.
   */
  to_option: string | null;
  /** Source devices whose schema exposes this option. */
  devices: SysConfigDevice[];
  /**
   * Target devices on which `to_option` exists (present only for databases with
   * a multi-device target, e.g. SCI→UART). Omitted when the target is a single
   * device (e.g. ePWM→MCPWM, whose only target is F28E12x). A target device
   * absent from this list means the option does not map there — e.g. a fine
   * FIFO level that exists on F28E12x but not F28P65x.
   */
  to_devices?: SysConfigDevice[];
  /**
   * GUI label of the source option, copied from the source schema. Optional:
   * some options carry no `displayName` in the schema (e.g. numeric word-length
   * options), in which case this is omitted.
   */
  from_displayName?: string;
  /**
   * GUI label of the target option (`to_option`), copied from the target schema.
   * Optional: omitted when `to_option` is null (no target) or the target option
   * carries no `displayName`.
   */
  to_displayName?: string;
}

/** Map from source option name to its target mapping. */
export type SysConfigOptionMap = Record<string, SysConfigOptionMapItem>;

// ─── Entries ────────────────────────────────────────────────────────────────

/** Fields common to every config entry regardless of status. */
export interface SysConfigMigrationEntryBase {
  /** SysConfig value kind of the source config. */
  from_type: SysConfigValueType;
  /** Source GUI label; null for a few schema entries without one. */
  from_displayName: string | null;
  /** Source description text; null when the schema omits it. */
  from_description: string | null;
  /** Source default value; per-device object where the default varies by device. */
  from_default: SysConfigFromDefault;
  /** Source devices this config exists on. */
  devices: SysConfigDevice[];
  /**
   * Target devices on which the target config (`to_config`) exists (present only
   * for databases with a multi-device target, e.g. SCI→UART). Omitted when the
   * target is a single device. Config-level target availability; per-option
   * target availability lives on `SysConfigOptionMapItem.to_devices`.
   */
  to_devices?: SysConfigDevice[];
  /** Human-readable migration guidance for this config. */
  fixMsg: string;
}

/** A config with a direct target counterpart. */
export interface SysConfigMappedMigrationEntry extends SysConfigMigrationEntryBase {
  status: 'mapped';
  /** Name of the matching target SysConfig config. */
  to_config: string;
  /** SysConfig value kind of the target counterpart. */
  to_type: SysConfigValueType;
  /** Target GUI label; null when the target schema omits it. */
  to_displayName: string | null;
  /** Present when the source config is enum-like; absent for bool/number/string configs. */
  option_map?: SysConfigOptionMap;
}

/**
 * A config that migrates only through a structural change: the target has no
 * one-to-one counterpart, so migration requires reshaping (e.g. routing through a
 * different submodule). `mapping_type` names the kind of change, and `option_map`
 * values may be indirect target enums rather than direct options of `to_config`
 * (see the entry's `fixMsg`).
 */
export interface SysConfigPartialMigrationEntry extends SysConfigMigrationEntryBase {
  status: 'partial';
  mapping_type: 'structural';
  to_config: string;
  to_type: SysConfigValueType;
  to_displayName: string | null;
  option_map: SysConfigOptionMap;
}

/** A config with no target equivalent (the feature is absent from the target peripheral). */
export interface SysConfigNoEquivalentMigrationEntry extends SysConfigMigrationEntryBase {
  status: 'no_equivalent';
  to_config: null;
  to_type?: never;
  to_displayName?: never;
  option_map?: never;
  mapping_type?: never;
}

/** Discriminated union over `status`. */
export type SysConfigMigrationEntry =
  | SysConfigMappedMigrationEntry
  | SysConfigPartialMigrationEntry
  | SysConfigNoEquivalentMigrationEntry;

/**
 * Shape of the loaded JSON file: one `SysConfigMigrationEntry` per source config
 * name. Every top-level key is a config entry — there is no metadata key.
 */
export type SysConfigMigrationDatabase = Record<string, SysConfigMigrationEntry>;

// ─── Helpers ────────────────────────────────────────────────────────────────

/** True when `from_default` is the per-device object form rather than a scalar. */
export function isPerDeviceDefault(
  value: SysConfigFromDefault
): value is Partial<Record<SysConfigDevice, SysConfigFromDefaultScalar>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Resolve a config's default for a given device, handling both shapes. */
export function getDefaultForDevice(
  entry: SysConfigMigrationEntryBase,
  device: SysConfigDevice
): SysConfigFromDefaultScalar | undefined {
  const d = entry.from_default;
  return isPerDeviceDefault(d) ? d[device] : d;
}
