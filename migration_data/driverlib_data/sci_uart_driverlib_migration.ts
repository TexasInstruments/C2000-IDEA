/**
 * TypeScript interface for `sci_uart_driverlib_migration.json`.
 *
 * The JSON is a driverlib API migration database for porting SCI (Serial
 * Communications Interface) code to UART on a TI C2000 device that ships both
 * peripherals. Every SCI driverlib symbol (function, enum member, or `#define`
 * macro) is classified into exactly one of three top-level buckets:
 *
 *   - `changed` — the symbol has one or more UART equivalents; use `to_targets`
 *                 + `fix` to port it.
 *   - `removed` — the symbol has no UART equivalent (`to_targets: null`).
 *   - `added`   — a UART symbol that has no SCI ancestor (informational).
 *
 * The schema is intentionally generic (no device names in field names) so it can
 * be reused for other peripheral-to-peripheral driverlib migrations.
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
 *   - `devices`    — the **source** devices whose driverlib exposes this SCI
 *                    symbol. Present on `changed`/`removed` (a source symbol
 *                    exists there); absent on `added` (no SCI source).
 *   - `to_devices` — the **target** devices this row's verdict applies to. It
 *                    doubles as the row discriminator: when a symbol maps
 *                    differently across target devices (e.g. a target function
 *                    exists only on some), the symbol appears as **multiple
 *                    rows with the same `code`**, each scoped by `to_devices`.
 *                    Invariant: for a given `code`, the `to_devices` of its rows
 *                    partition the target device set exactly — no overlap, no
 *                    gap. On `added`, `to_devices` records which target devices
 *                    expose the UART-only symbol.
 *   Consumers must therefore look symbols up by `code` **and** target device,
 *   never assume `code` is unique.
 */

// ─── Shared literal unions ──────────────────────────────────────────────────

/**
 * A device identifier (e.g. "F28E12x", "F28P65x"). Kept as an open string so
 * the schema generalizes across source and target device sets; a consumer that
 * wants a closed set can narrow it in its own code.
 */
export type Device = string;

/** Symbolic kinds that are not functions: enum members and preprocessor macros. */
export type SymbolType = 'enum' | 'mcu_macros';

/** Discriminator for every entry. */
export type EntryType = 'function' | SymbolType;

/**
 * How a source symbol relates to its target(s).
 *   - `direct`        — 1:1, drop-in replacement (implies `compatible: true`).
 *   - `adapted`       — 1:1 in shape but needs an argument/semantic change.
 *   - `one_to_many`   — must be expressed as a sequence of UART calls/symbols.
 *   - `partial`       — only part of the source behaviour is reproducible.
 *   - `no_equivalent` — no UART counterpart (only ever on `removed` entries).
 */
export type MappingType =
  | 'direct'
  | 'adapted'
  | 'one_to_many'
  | 'partial'
  | 'no_equivalent';

/** `mapping_type` values that can appear on a `changed` (mappable) entry. */
export type ChangedMappingType = Exclude<MappingType, 'no_equivalent'>;

/** Functional grouping of a driverlib function (functions only). */
export type FunctionalArea =
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
export interface ArgMapEntry {
  from_arg: string | null;
  to_arg: string;
  transform: string | null;
}

/**
 * A UART function that a source SCI function maps onto. `role` describes the
 * part this call plays in the fix (e.g. "primary", "read current frame
 * config"). `arg_map` is present when the call takes arguments that need
 * per-argument guidance; simple/argument-less targets omit it.
 */
export interface FunctionTarget {
  symbol: string;
  signature: string;
  role: string;
  arg_map?: ArgMapEntry[];
}

/** A UART enum member or macro that a source symbol maps onto. */
export interface SymbolTarget {
  symbol: string;
}

// ─── `changed` bucket ───────────────────────────────────────────────────────

/** Fields common to every `changed` entry regardless of `type`. */
interface ChangedBase {
  /** The source SCI symbol name (shared by every row of the same symbol). */
  code: string;
  type: EntryType;
  /** Source devices whose driverlib exposes this SCI symbol. */
  devices: Device[];
  /** Target devices this row's verdict applies to (row discriminator). */
  to_devices: Device[];
  mapping_type: ChangedMappingType;
  /** `true` iff `mapping_type === 'direct'`. */
  compatible: boolean;
  /** Ordered steps to port the symbol; one string for a 1:1 mapping. */
  fix: string[];
  /** User-facing explanation of the migration and its caveats. */
  fixMsg: string;
}

/** A changed driverlib **function**. */
export interface ChangedFunctionEntry extends ChangedBase {
  type: 'function';
  functionalArea: FunctionalArea;
  /** Full C prototype of the source function. */
  from_signature: string;
  to_targets: FunctionTarget[];
}

/** A changed **enum member** or **macro**. */
export interface ChangedSymbolEntry extends ChangedBase {
  type: SymbolType;
  /** Source symbol family, e.g. `SCI_CONFIG_*`. */
  group: string;
  /** Target symbol family, e.g. `UART_CONFIG_*`. */
  to_group: string;
  to_targets: SymbolTarget[];
}

export type ChangedEntry = ChangedFunctionEntry | ChangedSymbolEntry;

// ─── `removed` bucket ───────────────────────────────────────────────────────

/** Fields common to every `removed` entry. */
interface RemovedBase {
  code: string;
  type: EntryType;
  /** Source devices whose driverlib exposes this SCI symbol. */
  devices: Device[];
  /** Target devices this row's verdict applies to (row discriminator). */
  to_devices: Device[];
  mapping_type: 'no_equivalent';
  compatible: false;
  to_targets: null;
  fixMsg: string;
}

/** A removed driverlib **function** (no UART equivalent). */
export interface RemovedFunctionEntry extends RemovedBase {
  type: 'function';
  functionalArea: FunctionalArea;
  from_signature: string;
}

/** A removed **enum member** or **macro** (no UART equivalent). */
export interface RemovedSymbolEntry extends RemovedBase {
  type: SymbolType;
  group: string;
  to_group: string;
}

export type RemovedEntry = RemovedFunctionEntry | RemovedSymbolEntry;

// ─── `added` bucket ─────────────────────────────────────────────────────────

/**
 * A UART symbol with no SCI ancestor. Purely informational — it points out
 * UART capability an SCI author would not know to look for. Only functions and
 * macros appear here.
 */
export interface AddedEntry {
  code: string;
  type: 'function' | 'mcu_macros';
  /** Target devices whose driverlib exposes this UART-only symbol. */
  to_devices: Device[];
  fixMsg: string;
}

// ─── Database ───────────────────────────────────────────────────────────────

export interface SciUartMigrationDatabase {
  changed: ChangedEntry[];
  removed: RemovedEntry[];
  added: AddedEntry[];
}

// ─── Type guards ────────────────────────────────────────────────────────────

/** Narrow any bucket entry that carries a `type` to a function entry. */
export function isFunctionEntry<T extends { type: EntryType }>(
  entry: T,
): entry is Extract<T, { type: 'function' }> {
  return entry.type === 'function';
}

/** Narrow a `changed` entry to the function variant. */
export function isChangedFunction(
  entry: ChangedEntry,
): entry is ChangedFunctionEntry {
  return entry.type === 'function';
}

/** Narrow a `removed` entry to the function variant. */
export function isRemovedFunction(
  entry: RemovedEntry,
): entry is RemovedFunctionEntry {
  return entry.type === 'function';
}

/** A `direct` mapping is a drop-in replacement. */
export function isDropIn(entry: ChangedEntry): boolean {
  return entry.mapping_type === 'direct' && entry.compatible;
}
