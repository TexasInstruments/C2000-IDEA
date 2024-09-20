let ESM_SAFETY_AGGREGATOR_REGISTERS = [
	{ name: "AGGR_REVISION", description: "Aggregator Revision Register", offset: "0x0", size: "32",
		bits: [
			{ name: "SCHEME", description: "", size: "2", shift: "30", mask: "0xC0000000" },
			{ name: "BU", description: "", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "MODULE_ID", description: "", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "REVRTL", description: "", size: "5", shift: "11", mask: "0xF800" },
			{ name: "REVMAJ", description: "", size: "3", shift: "8", mask: "0x700" },
			{ name: "CUSTOM", description: "", size: "2", shift: "6", mask: "0xC0" },
			{ name: "REVMIN", description: "", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "ECC_VECTOR", description: "ECC Vector Register", offset: "0x8", size: "32",
		bits: [
			{ name: "ECC_VECTOR", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RD_SVBUS", description: "", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RD_SVBUS_ADDRESS", description: "", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "RD_SVBUS_DONE", description: "", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "MISC_STATUS", description: "Misc Status", offset: "0xC", size: "16",
		bits: [
			{ name: "NUM_RAMS", description: "", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "DED_EOI_REG", description: "EOI Register", offset: "0x13C", size: "16",
		bits: [
			{ name: "EOI_WR", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DED_STATUS_REG0", description: "Interrupt Status Register 0", offset: "0x140", size: "16",
		bits: [
			{ name: "ESMSS_SYS_ESM_EDC_CTRL_BUSECC_PEND", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "ESMSS_ESM0_EDC_CTRL_BUSECC_PEND", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "ESMSS_ESM1_EDC_CTRL_BUSECC_PEND", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "ESMSS_ESM2_EDC_CTRL_BUSECC_PEND", description: "", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "DED_ENABLE_SET_REG0", description: "Interrupt Enable Set Register 0", offset: "0x180", size: "16",
		bits: [
			{ name: "ESMSS_SYS_ESM_EDC_CTRL_BUSECC_ENABLE_SET", description: " ", size: "1", shift: "0", mask: "0x1" },
			{ name: "ESMSS_ESM0_EDC_CTRL_BUSECC_ENABLE_SET", description: " ", size: "1", shift: "1", mask: "0x2" },
			{ name: "ESMSS_ESM1_EDC_CTRL_BUSECC_ENABLE_SET", description: " ", size: "1", shift: "2", mask: "0x4" },
			{ name: "ESMSS_ESM2_EDC_CTRL_BUSECC_ENABLE_SET", description: " ", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "DED_ENABLE_CLR_REG0", description: "Interrupt Enable Clear Register 0", offset: "0x1C0", size: "16",
		bits: [
			{ name: "ESMSS_SYS_ESM_EDC_CTRL_BUSECC_ENABLE_CLR", description: " ", size: "1", shift: "0", mask: "0x1" },
			{ name: "ESMSS_ESM0_EDC_CTRL_BUSECC_ENABLE_CLR", description: " ", size: "1", shift: "1", mask: "0x2" },
			{ name: "ESMSS_ESM1_EDC_CTRL_BUSECC_ENABLE_CLR", description: " ", size: "1", shift: "2", mask: "0x4" },
			{ name: "ESMSS_ESM2_EDC_CTRL_BUSECC_ENABLE_CLR", description: " ", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "AGGR_ENABLE_SET", description: "AGGR interrupt enable set Register", offset: "0x200", size: "16",
		bits: [
			{ name: "PARITY", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "TIMEOUT", description: "", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "AGGR_ENABLE_CLR", description: "AGGR interrupt enable clear Register", offset: "0x204", size: "16",
		bits: [
			{ name: "PARITY", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "TIMEOUT", description: "", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "AGGR_STATUS_SET", description: "AGGR interrupt status set Register", offset: "0x208", size: "16",
		bits: [
			{ name: "PARITY", description: "", size: "2", shift: "0", mask: "0x3" },
			{ name: "TIMEOUT", description: "", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "AGGR_STATUS_CLR", description: "AGGR interrupt status clear Register", offset: "0x20C", size: "16",
		bits: [
			{ name: "PARITY", description: "", size: "2", shift: "0", mask: "0x3" },
			{ name: "TIMEOUT", description: "", size: "2", shift: "2", mask: "0xC" },
		]
	},
];
module.exports = {
	esm_safety_aggregatorRegisters: ESM_SAFETY_AGGREGATOR_REGISTERS,
}
