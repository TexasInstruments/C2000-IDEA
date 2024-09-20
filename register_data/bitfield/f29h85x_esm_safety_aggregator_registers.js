let ESM_SAFETY_AGGREGATOR_REGISTERS = [
	{ name: "aggr_revision", description: "Aggregator Revision Register", offset: "0x0", size: "32",
		bits: [
			{ name: "scheme", description: "31:30", size: "2", shift: "0", mask: "0x3" },
			{ name: "bu", description: "29:28", size: "2", shift: "2", mask: "0xC" },
			{ name: "module_id", description: "27:16", size: "12", shift: "4", mask: "0xFFF0" },
			{ name: "revrtl", description: "15:11", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "revmaj", description: "10:8", size: "3", shift: "21", mask: "0xE00000" },
			{ name: "custom", description: "7:6", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "revmin", description: "5:0", size: "6", shift: "26", mask: "0xFC000000" },
		]
	},
	{ name: "ecc_vector", description: "ECC Vector Register", offset: "0x6", size: "32",
		bits: [
			{ name: "ecc_vector", description: "10:0", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "rd_svbus", description: "15", size: "1", shift: "11", mask: "0x800" },
			{ name: "rd_svbus_address", description: "23:16", size: "8", shift: "12", mask: "0xFF000" },
			{ name: "rd_svbus_done", description: "24", size: "1", shift: "20", mask: "0x100000" },
		]
	},
	{ name: "misc_status", description: "Misc Status", offset: "0x8", size: "32",
		bits: [
			{ name: "num_rams", description: "10:0", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "ded_eoi_reg", description: "EOI Register", offset: "0x136", size: "32",
		bits: [
			{ name: "eoi_wr", description: "0", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ded_status_reg0", description: "Interrupt Status Register 0", offset: "0x138", size: "32",
		bits: [
			{ name: "esmss_sys_esm_edc_ctrl_busecc_pend", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "esmss_esm0_edc_ctrl_busecc_pend", description: "1", size: "1", shift: "1", mask: "0x2" },
			{ name: "esmss_esm1_edc_ctrl_busecc_pend", description: "2", size: "1", shift: "2", mask: "0x4" },
			{ name: "esmss_esm2_edc_ctrl_busecc_pend", description: "3", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ded_enable_set_reg0", description: "Interrupt Enable Set Register 0", offset: "0x176", size: "32",
		bits: [
			{ name: "esmss_sys_esm_edc_ctrl_busecc_enable_set", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "esmss_esm0_edc_ctrl_busecc_enable_set", description: "1", size: "1", shift: "1", mask: "0x2" },
			{ name: "esmss_esm1_edc_ctrl_busecc_enable_set", description: "2", size: "1", shift: "2", mask: "0x4" },
			{ name: "esmss_esm2_edc_ctrl_busecc_enable_set", description: "3", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ded_enable_clr_reg0", description: "Interrupt Enable Clear Register 0", offset: "0x1B4", size: "32",
		bits: [
			{ name: "esmss_sys_esm_edc_ctrl_busecc_enable_clr", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "esmss_esm0_edc_ctrl_busecc_enable_clr", description: "1", size: "1", shift: "1", mask: "0x2" },
			{ name: "esmss_esm1_edc_ctrl_busecc_enable_clr", description: "2", size: "1", shift: "2", mask: "0x4" },
			{ name: "esmss_esm2_edc_ctrl_busecc_enable_clr", description: "3", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "aggr_enable_set", description: "AGGR interrupt enable set Register", offset: "0x1F2", size: "32",
		bits: [
			{ name: "parity", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "timeout", description: "1", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "aggr_enable_clr", description: "AGGR interrupt enable clear Register", offset: "0x1F4", size: "32",
		bits: [
			{ name: "parity", description: "0", size: "1", shift: "0", mask: "0x1" },
			{ name: "timeout", description: "1", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "aggr_status_set", description: "AGGR interrupt status set Register", offset: "0x1F6", size: "32",
		bits: [
			{ name: "parity", description: "1:0", size: "2", shift: "0", mask: "0x3" },
			{ name: "timeout", description: "3:2", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "aggr_status_clr", description: "AGGR interrupt status clear Register", offset: "0x1F8", size: "32",
		bits: [
			{ name: "parity", description: "1:0", size: "2", shift: "0", mask: "0x3" },
			{ name: "timeout", description: "3:2", size: "2", shift: "2", mask: "0xC" },
		]
	},
];
module.exports = {
	esm_safety_aggregatorRegisters: ESM_SAFETY_AGGREGATOR_REGISTERS,
}
