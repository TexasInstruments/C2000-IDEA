let ESM_SYS_REGISTERS = [
	{ name: "PID", description: "Revision Register", offset: "0x0", size: "32",
		bits: [
			{ name: "MINOR", description: "", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "", size: "3", shift: "8", mask: "0x700" },
			{ name: "RTL", description: "", size: "5", shift: "11", mask: "0xF800" },
			{ name: "FUNC", description: "", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "BU", description: "", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "SCHEME", description: "", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "INFO", description: "Info Register", offset: "0x4", size: "32",
		bits: [
			{ name: "GROUPS", description: "", size: "8", shift: "0", mask: "0xFF" },
			{ name: "PULSE_GROUPS", description: "", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "CRIT_INTR", description: "", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "LAST_RESET", description: "", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "EN", description: "Global Enable Register", offset: "0x8", size: "16",
		bits: [
			{ name: "KEY", description: "", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SFT_RST", description: "Global Soft Reset Register", offset: "0xC", size: "16",
		bits: [
			{ name: "KEY", description: "", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LOW_PRI", description: "Low Priority Prioritized Register", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "HI_PRI", description: "High Priority Prioritized Register", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "LOW", description: "Low Priority Interrupt Status Register", offset: "0x28", size: "32",
		bits: [
			{ name: "PRI_PLS", description: "", size: "16", shift: "16", mask: "0xFFFF0000" },
			{ name: "PRI_LVL", description: "", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "HI", description: "High Priority Interrupt Status Register", offset: "0x2C", size: "32",
		bits: [
			{ name: "PRI_PLS", description: "", size: "16", shift: "16", mask: "0xFFFF0000" },
			{ name: "PRI_LVL", description: "", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "EOI", description: "EOI Interrupt Register", offset: "0x30", size: "16",
		bits: [
			{ name: "KEY", description: "", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "PIN_CTRL", description: "Error Pin Control Register", offset: "0x40", size: "16",
		bits: [
			{ name: "POLARITY", description: "", size: "4", shift: "8", mask: "0xF00" },
			{ name: "PWM_EN", description: "", size: "4", shift: "4", mask: "0xF0" },
			{ name: "KEY", description: "", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "PIN_STS", description: "Error Pin Status Register", offset: "0x44", size: "16",
		bits: [
			{ name: "VAL", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PIN_CNTR", description: "Error Counter Value Register", offset: "0x48", size: "32",
		bits: [
			{ name: "COUNT", description: "", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PIN_CNTR_PRE", description: "Error Counter Value Pre-Load Register", offset: "0x4C", size: "32",
		bits: [
			{ name: "COUNT", description: "", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWMH_PIN_CNTR", description: "Error PWM High Counter Value Register", offset: "0x50", size: "32",
		bits: [
			{ name: "COUNT", description: "", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWMH_PIN_CNTR_PRE", description: "Error PWM High Counter Value Pre-Load Register", offset: "0x54", size: "32",
		bits: [
			{ name: "COUNT", description: "", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWML_PIN_CNTR", description: "Error PWM Low Counter Value Register", offset: "0x58", size: "32",
		bits: [
			{ name: "COUNT", description: "", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWML_PIN_CNTR_PRE", description: "Error PWM Low Counter Value Pre-Load Register", offset: "0x5C", size: "32",
		bits: [
			{ name: "COUNT", description: "", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ERRPIN_MON_CFG", description: "Error Pin Monitor Config Register", offset: "0xA0", size: "16",
		bits: [
			{ name: "MON_EN", description: "", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "ERRPIN_MON_INTR_SET", description: "Error Pin Monitor Interrupt Status/Set Register", offset: "0xA4", size: "16",
		bits: [
			{ name: "VAL", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ERRPIN_MON_INTR_CLR", description: "Error Pin Monitor Interrupt Status/Clear Register", offset: "0xA8", size: "16",
		bits: [
			{ name: "VAL", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "GROUP_N_LOCK", description: "Group N Interrupt Lock Register", offset: "0x100", size: "16",
		bits: [
		]
	},
	{ name: "GROUP_N_COMMIT", description: "Group N Interrupt Commit Register", offset: "0x104", size: "16",
		bits: [
		]
	},
	{ name: "ERR_PIN_INFLUENCE_LOCK", description: "Error Pin Influence Lock Register", offset: "0x110", size: "16",
		bits: [
		]
	},
	{ name: "ERR_PIN_INFLUENCE_COMMIT", description: "Error Pin Influence Commit Register", offset: "0x114", size: "16",
		bits: [
		]
	},
	{ name: "CRI_PRI_INFLUENCE_LOCK", description: "Critical Prioirty Interrupt Influence Lock Register", offset: "0x118", size: "16",
		bits: [
		]
	},
	{ name: "CRI_PRI_INFLUENCE_COMMIT", description: "Critical Priority Interrupt Influence Lock Register", offset: "0x11C", size: "16",
		bits: [
		]
	},
	{ name: "MMR_CONFIG_LOCK", description: "MMR Config Lock Register", offset: "0x120", size: "16",
		bits: [
			{ name: "GLOBEL_EN_LOCK", description: "", size: "1", shift: "8", mask: "0x100" },
			{ name: "GLOBAL_SOFT_RST_LOCK", description: "", size: "1", shift: "5", mask: "0x20" },
			{ name: "ERRPIN_LOCK", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "ERRPIN_MON_LOCK", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "HI_PRI_WD_LOCK", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MMR_CONFIG_COMMIT", description: "MMR Config Commit Register", offset: "0x124", size: "16",
		bits: [
			{ name: "GLOBEL_EN_COMMIT", description: "", size: "1", shift: "8", mask: "0x100" },
			{ name: "GLOBAL_SOFT_RST_COMMIT", description: "", size: "1", shift: "5", mask: "0x20" },
			{ name: "ERRPIN_COMMIT", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "ERRPIN_MON_COMMIT", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "HI_PRI_WD_COMMIT", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "RAW", description: "(0 <= i < 8) Error Group N Event Raw Status/Set Register", offset: "(0x400 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "STS", description: "(0 <= i < 8) Error Group N Interrupt Enable Status/Clear", offset: "(0x404 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "INTR_EN_SET", description: "(0 <= i < 8) Error Group N Interrupt Enable Set Register", offset: "(0x408 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "INTR_EN_CLR", description: "(0 <= i < 8) Error Group N Interrupt Enabled Clear Register", offset: "(0x40C + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "INT_PRIO", description: "(0 <= i < 8) Error Group N Interrupt Priority Register", offset: "(0x410 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "PIN_EN_SET", description: "(0 <= i < 8) Error Group N Error Pin Influence Set Register", offset: "(0x414 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "PIN_EN_CLR", description: "(0 <= i < 8) Error Group N Error Pin Influence Clear Register", offset: "(0x418 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "CRIT_EN_SET", description: "(0 <= i < 8) Error Group N Critical Priority Interrupt", offset: "(0x800 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
	{ name: "CRIT_EN_CLR", description: "(0 <= i < 8) Error Group N Critical Priority Interrupt", offset: "(0x804 + ((i) * 32))", count: "8", size: "16",
		bits: [
		]
	},
];
module.exports = {
	esm_sysRegisters: ESM_SYS_REGISTERS,
}
