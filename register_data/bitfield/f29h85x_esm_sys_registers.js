let ESM_SYS_REGISTERS = [
	{ name: "RAW", description: "Error Group N Event Raw Status/Set Register", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "STS", description: "Error Group N Interrupt Enable Status/Clear Register", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "INTR_EN_SET", description: "Error Group N Interrupt Enable Set Register", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "INTR_EN_CLR", description: "Error Group N Interrupt Enabled Clear Register", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "INT_PRIO", description: "Error Group N Interrupt Priority Register", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "PIN_EN_SET", description: "Error Group N Error Pin Influence Set Register", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "PIN_EN_CLR", description: "Error Group N Error Pin Influence Clear Register", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "CRIT_EN_SET", description: "Error Group N Critical Priority Interrupt Influence Set Register", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "CRIT_EN_CLR", description: "Error Group N Critical Priority Interrupt Influence Clear Register", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "PID", description: "Revision Register", offset: "0x0", size: "32",
		bits: [
			{ name: "minor", description: "5:0", size: "6", shift: "0", mask: "0x3F" },
			{ name: "custom", description: "7:6", size: "2", shift: "6", mask: "0xC0" },
			{ name: "major", description: "10:8", size: "3", shift: "8", mask: "0x700" },
			{ name: "rtl", description: "15:11", size: "5", shift: "11", mask: "0xF800" },
			{ name: "func", description: "27:16", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "bu", description: "29:28", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "scheme", description: "31:30", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "INFO", description: "Info Register", offset: "0x2", size: "32",
		bits: [
			{ name: "groups", description: "7:0", size: "8", shift: "0", mask: "0xFF" },
			{ name: "pulse_groups", description: "15:8", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "crit_intr", description: "30", size: "1", shift: "16", mask: "0x10000" },
			{ name: "last_reset", description: "31", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "EN", description: "Global Enable Register", offset: "0x4", size: "32",
		bits: [
			{ name: "key", description: "3:0", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SFT_RST", description: "Global Soft Reset Register", offset: "0x6", size: "32",
		bits: [
			{ name: "key", description: "3:0", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LOW_PRI", description: "Low Priority Prioritized Register", offset: "0x18", size: "32",
		bits: [
			{ name: "pls", description: "31:16", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "lvl", description: "15:0", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "HI_PRI", description: "High Priority Prioritized Register", offset: "0x1A", size: "32",
		bits: [
			{ name: "pls", description: "31:16", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "lvl", description: "15:0", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "LOW", description: "Low Priority Interrupt Status Register", offset: "0x1C", size: "32",
		bits: [
		]
	},
	{ name: "HI", description: "High Priority Interrupt Status Register", offset: "0x1E", size: "32",
		bits: [
		]
	},
	{ name: "EOI", description: "EOI Interrupt Register", offset: "0x20", size: "32",
		bits: [
			{ name: "key", description: "10:0", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "PIN_CTRL", description: "Error Pin Control Register", offset: "0x2E", size: "32",
		bits: [
			{ name: "key", description: "3:0", size: "4", shift: "0", mask: "0xF" },
			{ name: "pwm_en", description: "7:4", size: "4", shift: "4", mask: "0xF0" },
			{ name: "polarity", description: "11:8", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "PIN_STS", description: "Error Pin Status Register", offset: "0x30", size: "32",
		bits: [
			{ name: "val", description: "0", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PIN_CNTR", description: "Error Counter Value Register", offset: "0x32", size: "32",
		bits: [
			{ name: "count", description: "23:0", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PIN_CNTR_PRE", description: "Error Counter Value Pre-Load Register", offset: "0x34", size: "32",
		bits: [
			{ name: "count", description: "23:0", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWMH_PIN_CNTR", description: "Error PWM High Counter Value Register", offset: "0x36", size: "32",
		bits: [
			{ name: "count", description: "23:0", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWMH_PIN_CNTR_PRE", description: "Error PWM High Counter Value Pre-Load Register", offset: "0x38", size: "32",
		bits: [
			{ name: "count", description: "23:0", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWML_PIN_CNTR", description: "Error PWM Low Counter Value Register", offset: "0x3A", size: "32",
		bits: [
			{ name: "count", description: "23:0", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PWML_PIN_CNTR_PRE", description: "Error PWM Low Counter Value Pre-Load Register", offset: "0x3C", size: "32",
		bits: [
			{ name: "count", description: "23:0", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ERRPIN_MON_CFG", description: "Error Pin Monitor Config Register", offset: "0x7E", size: "32",
		bits: [
			{ name: "mon_en", description: "3:0", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "ERRPIN_MON_INTR_SET", description: "Error Pin Monitor Interrupt Status/Set Register", offset: "0x80", size: "32",
		bits: [
			{ name: "val", description: "0", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ERRPIN_MON_INTR_CLR", description: "Error Pin Monitor Interrupt Status/Clear Register", offset: "0x82", size: "32",
		bits: [
			{ name: "val", description: "0", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "GROUP_N_LOCK", description: "Group N Interrupt Lock Register", offset: "0xD8", size: "32",
		bits: [
		]
	},
	{ name: "GROUP_N_COMMIT", description: "Group N Interrupt Commit Register", offset: "0xDA", size: "32",
		bits: [
		]
	},
	{ name: "ERR_PIN_INFLUENCE_LOCK", description: "Error Pin Influence Lock Register", offset: "0xE4", size: "32",
		bits: [
		]
	},
	{ name: "ERR_PIN_INFLUENCE_COMMIT", description: "Error Pin Influence Commit Register", offset: "0xE6", size: "32",
		bits: [
		]
	},
	{ name: "CRI_PRI_INFLUENCE_LOCK", description: "Critical Prioirty Interrupt Influence Lock Register", offset: "0xE8", size: "32",
		bits: [
		]
	},
	{ name: "CRI_PRI_INFLUENCE_COMMIT", description: "Critical Priority Interrupt Influence Lock Register", offset: "0xEA", size: "32",
		bits: [
		]
	},
	{ name: "MMR_CONFIG_LOCK", description: "MMR Config Lock Register", offset: "0xEC", size: "32",
		bits: [
			{ name: "hi_pri_wd_lock", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "errpin_mon_lock", description: "1", size: "1", shift: "1", mask: "0x2" },
			{ name: "errpin_lock", description: "2", size: "1", shift: "2", mask: "0x4" },
			{ name: "global_soft_rst_lock", description: "5", size: "1", shift: "5", mask: "0x20" },
			{ name: "globel_en_lock", description: "8", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "MMR_CONFIG_COMMIT", description: "MMR Config Commit Register", offset: "0xEE", size: "32",
		bits: [
			{ name: "hi_pri_wd_commit", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "errpin_mon_commit", description: "1", size: "1", shift: "1", mask: "0x2" },
			{ name: "errpin_commit", description: "2", size: "1", shift: "2", mask: "0x4" },
			{ name: "global_soft_rst_commit", description: "5", size: "1", shift: "5", mask: "0x20" },
			{ name: "globel_en_commit", description: "8", size: "1", shift: "8", mask: "0x100" },
		]
	},
];
module.exports = {
	esm_sysRegisters: ESM_SYS_REGISTERS,
}
