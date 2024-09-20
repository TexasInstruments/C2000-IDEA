let PBIST_REGISTERS = [
	{ name: "RAMT", description: "RAM Configuration Register", offset: "0x160", size: "16",
		bits: [
			{ name: "RDS", description: "Return Data Select", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "RGS", description: "RAM Group Select", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "DLRT", description: "PBIST Data Logger Register", offset: "0x164", size: "16",
		bits: [
			{ name: "DIS_COMP", description: "Distributed Compare", size: "1", shift: "0", mask: "0x1" },
			{ name: "IDDQ_TEST", description: "IDDQ testing", size: "1", shift: "1", mask: "0x2" },
			{ name: "ROM_TEST", description: "ROM-based testing", size: "1", shift: "2", mask: "0x4" },
			{ name: "TCK_GATED", description: "TCK gated", size: "1", shift: "3", mask: "0x8" },
			{ name: "CONFIG_ACC", description: "Config Access", size: "1", shift: "4", mask: "0x10" },
			{ name: "EMU_CACHE_ACC", description: "Emulation Cache Access", size: "1", shift: "5", mask: "0x20" },
			{ name: "COL_FAIL_MSK", description: "Column Fail Masking", size: "1", shift: "6", mask: "0x40" },
			{ name: "TIME_STAMP", description: "Time Stamp", size: "1", shift: "7", mask: "0x80" },
			{ name: "MISR_TEST", description: "MISR Testing", size: "1", shift: "8", mask: "0x100" },
			{ name: "GO_NOGO_TEST", description: "GO/ NO-GO Testing", size: "1", shift: "9", mask: "0x200" },
			{ name: "RETENTION_TEST", description: "Retention Testing", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "STR", description: "Program Control Register", offset: "0x16C", size: "16",
		bits: [
			{ name: "START", description: "Start / Time Stamp Mode Restart", size: "1", shift: "0", mask: "0x1" },
			{ name: "RESUME", description: "Resume / Emulation Read", size: "1", shift: "1", mask: "0x2" },
			{ name: "STOP", description: "Stops PBIST testing", size: "1", shift: "2", mask: "0x4" },
			{ name: "STEP", description: "Step / Step for Emulation Mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "MISR", description: "Check MISR Mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "RAM_WR", description: "Indicates RAM Write", size: "1", shift: "7", mask: "0x80" },
			{ name: "RAM_RD", description: "Indicates RAM Read", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "PACT", description: "PBIST Activate Register", offset: "0x180", size: "16",
		bits: [
			{ name: "ENABLE", description: "Enable clocks to PBIST", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "OVERRIDE", description: "PBIST Override Register", offset: "0x188", size: "16",
		bits: [
			{ name: "RINFO_MEM_OVER", description: "ROM Memory Information Override", size: "1", shift: "0", mask: "0x1" },
			{ name: "ALGO_OVER", description: "ROM Algorithm Override", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "FSRF0", description: "Fail Status - Port 0", offset: "0x190", size: "16",
		bits: [
		]
	},
	{ name: "FSRF1", description: "Fail Status - Port 1", offset: "0x194", size: "16",
		bits: [
		]
	},
	{ name: "FSRC0", description: "Fail Status Count - Port 0", offset: "0x198", size: "16",
		bits: [
		]
	},
	{ name: "FSRC1", description: "Fail Status Count - Port 1", offset: "0x19C", size: "16",
		bits: [
		]
	},
	{ name: "ALGO", description: "PBIST Algorithm", offset: "0x1C4", size: "16",
		bits: [
		]
	},
	{ name: "RINFOL", description: "RAM Info Mask Register Lower", offset: "0x1C8", size: "16",
		bits: [
		]
	},
	{ name: "RINFOU", description: "RAM Info Mask Register Higher", offset: "0x1CC", size: "16",
		bits: [
		]
	},
];
module.exports = {
	pbistRegisters: PBIST_REGISTERS,
}
