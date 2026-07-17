/**
 * TypeScript interfaces for a **driverlib API migration database** — a generic,
 * reusable schema describing how one peripheral's driverlib C API maps onto
 * another's. It is not tied to any specific peripheral pair or device set: the
 * same interface models every `*_driverlib_migration.json` in this workspace
 * (the SCI→UART database today, and any future peripheral combination).
 *
 * All exported type names carry a `Driverlib` prefix to namespace this
 * driverlib-level schema apart from other migration schemas (e.g. the
 * SysConfig-level `syscfg_migration.ts`) and to keep generic names like
 * `Device`/`MappingType` from clashing on import.
 *
 * Every source driverlib symbol (function, enum member, or `#define` macro) is
 * classified into exactly one of three top-level buckets:
 *
 *   - `changed` — the symbol has one or more target equivalents; use
 *                 `to_targets` + `fix` to port it.
 *   - `removed` — the symbol has no target equivalent (`to_targets: null`).
 *   - `added`   — a target-peripheral symbol with no source ancestor
 *                 (informational).
 *
 * Field-name convention is generic (no peripheral names): `from_*` describes the
 * source peripheral's symbol, `to_*` the target peripheral's. `code` is the
 * source symbol; `group`/`to_group` are the source/target symbol families.
 *
 * Design notes:
 *   - Entries are discriminated on `type` ('function' | 'enum' | 'mcu_macros')
 *     and on bucket membership. Enums and macros share the "symbol" shape;
 *     functions carry an argument-level mapping.
 *   - `changed` entries always have a non-null `to_targets` and a `fix`.
 *   - `removed` entries always have `to_targets: null`, `compatible: false`,
 *     `mapping_type: 'no_equivalent'`, and no `fix`.
 *   - `added` entries carry `{ code, type, to_devices, fixMsg }`.
 *
 * Cross-device model:
 *   - `devices`    — the **source** devices whose driverlib exposes this source
 *                    symbol. Present on `changed`/`removed`; absent on `added`
 *                    (no source symbol).
 *   - `to_devices` — the **target** devices this row's verdict applies to. It
 *                    doubles as the row discriminator: when a symbol maps
 *                    differently across target devices (e.g. a target function
 *                    exists only on some), the symbol appears as **multiple rows
 *                    with the same `code`**, each scoped by `to_devices`.
 *                    Invariant: for a given `code`, the `to_devices` of its rows
 *                    partition the target device set exactly — no overlap, no
 *                    gap. On `added`, `to_devices` records which target devices
 *                    expose the target-only symbol.
 *   Consumers must therefore look symbols up by `code` **and** target device,
 *   never assume `code` is unique.
 *
 * Load pattern:
 * ```ts
 * import db from './<from_peripheral>_<to_peripheral>_driverlib_migration.json';
 * const database = db as unknown as DriverlibMigrationDatabase;
 * ```
 */

// ─── Shared literal unions ──────────────────────────────────────────────────

/**
 * A device identifier (e.g. "F28E12x", "F28P65x"). Kept as an open string so the
 * schema generalizes across source and target device sets; a consumer that wants
 * a closed set can narrow it in its own code.
 */
export type DriverlibDevice = string;

/** Symbolic kinds that are not functions: enum members and preprocessor macros. */
export type DriverlibSymbolType = 'enum' | 'mcu_macros';

/** Discriminator for every entry. */
export type DriverlibEntryType = 'function' | DriverlibSymbolType;

/**
 * How a source symbol relates to its target(s).
 *   - `direct`        — 1:1, drop-in replacement (implies `compatible: true`).
 *   - `adapted`       — 1:1 in shape but needs an argument/semantic change.
 *   - `one_to_many`   — must be expressed as a sequence of target calls/symbols.
 *   - `partial`       — only part of the source behaviour is reproducible.
 *   - `no_equivalent` — no target counterpart (only ever on `removed` entries).
 */
export type DriverlibMappingType =
  | 'direct'
  | 'adapted'
  | 'one_to_many'
  | 'partial'
  | 'no_equivalent';

/** `mapping_type` values that can appear on a `changed` (mappable) entry. */
export type DriverlibChangedMappingType = Exclude<DriverlibMappingType, 'no_equivalent'>;

/** Functional grouping of a driverlib function (functions only). */
export type DriverlibFunctionalArea =
  | 'configuration'
  | 'control'
  | 'data_transfer'
  | 'buffering'
  | 'status'
  | 'interrupt'
  | 'mode';

// ─── Target shapes ──────────────────────────────────────────────────────────

/**
 * One argument-level mapping from a source function argument to a target
 * function argument.
 *   - `from_arg`  — source argument name, or `null` when the target argument
 *                   has no source counterpart (e.g. a scratch out-param).
 *   - `to_arg`    — target argument name (always present).
 *   - `transform` — human-readable note on how the value must change, or `null`
 *                   when the argument passes through unchanged.
 */
export interface DriverlibArgMapEntry {
  from_arg: string | null;
  to_arg: string;
  transform: string | null;
}

/**
 * A target function that a source function maps onto. `role` describes the part
 * this call plays in the fix (e.g. "primary", "read current frame config").
 * `arg_map` is present when the call takes arguments that need per-argument
 * guidance; simple/argument-less targets omit it.
 */
export interface DriverlibFunctionTarget {
  symbol: string;
  signature: string;
  role: string;
  arg_map?: DriverlibArgMapEntry[];
}

/** A target enum member or macro that a source symbol maps onto. */
export interface DriverlibSymbolTarget {
  symbol: string;
}

// ─── `changed` bucket ───────────────────────────────────────────────────────

/** Fields common to every `changed` entry regardless of `type`. */
interface DriverlibChangedBase {
  /** The source symbol name (shared by every row of the same symbol). */
  code: string;
  type: DriverlibEntryType;
  /** Source devices whose driverlib exposes this source symbol. */
  devices: DriverlibDevice[];
  /** Target devices this row's verdict applies to (row discriminator). */
  to_devices: DriverlibDevice[];
  mapping_type: DriverlibChangedMappingType;
  /** `true` iff `mapping_type === 'direct'`. */
  compatible: boolean;
  /** Ordered steps to port the symbol; one string for a 1:1 mapping. */
  fix: string[];
  /** User-facing explanation of the migration and its caveats. */
  fixMsg: string;
}

/** A changed driverlib **function**. */
export interface DriverlibChangedFunctionEntry extends DriverlibChangedBase {
  type: 'function';
  functionalArea: DriverlibFunctionalArea;
  /** Full C prototype of the source function. */
  from_signature: string;
  to_targets: DriverlibFunctionTarget[];
}

/** A changed **enum member** or **macro**. */
export interface DriverlibChangedSymbolEntry extends DriverlibChangedBase {
  type: DriverlibSymbolType;
  /** Source symbol family, e.g. `<SRC>_CONFIG_*`. */
  group: string;
  /** Target symbol family, e.g. `<DST>_CONFIG_*`. */
  to_group: string;
  to_targets: DriverlibSymbolTarget[];
}

export type DriverlibChangedEntry =
  | DriverlibChangedFunctionEntry
  | DriverlibChangedSymbolEntry;

// ─── `removed` bucket ───────────────────────────────────────────────────────

/** Fields common to every `removed` entry. */
interface DriverlibRemovedBase {
  code: string;
  type: DriverlibEntryType;
  /** Source devices whose driverlib exposes this source symbol. */
  devices: DriverlibDevice[];
  /** Target devices this row's verdict applies to (row discriminator). */
  to_devices: DriverlibDevice[];
  mapping_type: 'no_equivalent';
  compatible: false;
  to_targets: null;
  fixMsg: string;
}

/** A removed driverlib **function** (no target equivalent). */
export interface DriverlibRemovedFunctionEntry extends DriverlibRemovedBase {
  type: 'function';
  functionalArea: DriverlibFunctionalArea;
  from_signature: string;
}

/** A removed **enum member** or **macro** (no target equivalent). */
export interface DriverlibRemovedSymbolEntry extends DriverlibRemovedBase {
  type: DriverlibSymbolType;
  group: string;
  to_group: string;
}

export type DriverlibRemovedEntry =
  | DriverlibRemovedFunctionEntry
  | DriverlibRemovedSymbolEntry;

// ─── `added` bucket ─────────────────────────────────────────────────────────

/**
 * A target-peripheral symbol with no source ancestor. Purely informational — it
 * points out target capability a source author would not know to look for. Only
 * functions and macros appear here.
 */
export interface DriverlibAddedEntry {
  code: string;
  type: 'function' | 'mcu_macros';
  /** Target devices whose driverlib exposes this target-only symbol. */
  to_devices: DriverlibDevice[];
  fixMsg: string;
}

// ─── Database ───────────────────────────────────────────────────────────────

/**
 * Shape of a loaded driverlib migration JSON: three buckets of entries. The
 * source→target peripheral pair is conveyed by the filename, not by any field.
 */
export interface DriverlibMigrationDatabase {
  changed: DriverlibChangedEntry[];
  removed: DriverlibRemovedEntry[];
  added: DriverlibAddedEntry[];
}

// ─── Type guards ────────────────────────────────────────────────────────────

/** Narrow any bucket entry that carries a `type` to a function entry. */
export function isFunctionEntry<T extends { type: DriverlibEntryType }>(
  entry: T,
): entry is Extract<T, { type: 'function' }> {
  return entry.type === 'function';
}

/** Narrow a `changed` entry to the function variant. */
export function isChangedFunction(
  entry: DriverlibChangedEntry,
): entry is DriverlibChangedFunctionEntry {
  return entry.type === 'function';
}

/** Narrow a `removed` entry to the function variant. */
export function isRemovedFunction(
  entry: DriverlibRemovedEntry,
): entry is DriverlibRemovedFunctionEntry {
  return entry.type === 'function';
}

/** A `direct` mapping is a drop-in replacement. */
export function isDropIn(entry: DriverlibChangedEntry): boolean {
  return entry.mapping_type === 'direct' && entry.compatible;
}
