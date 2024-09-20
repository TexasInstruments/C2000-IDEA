let PBIST_REGISTERS = [
	{ name: "RAMT", description: "RAM Configuration Register", offset: "0x160", size: "32",
		bits: [
			{ name: "RDS", description: "Return Data Select", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "RGS", description: "RAM Group Select", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "DLRT", description: "PBIST Data Logger Register", offset: "0x164", size: "32",
		bits: [
			{ name: "ROM_TEST", description: "ROM-based testing", size: "1", shift: "2", mask: "0x4" },
			{ name: "TCK_GATED", description: "TCK gated", size: "1", shift: "3", mask: "0x8" },
			{ name: "CONFIG_ACC", description: "Config Access", size: "1", shift: "4", mask: "0x10" },
			{ name: "GO_NOGO_TEST", description: "Testing", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "STR", description: "Program Control Register", offset: "0x16C", size: "32",
		bits: [
			{ name: "RESUME", description: "Read", size: "1", shift: "1", mask: "0x2" },
			{ name: "STOP", description: "Stops PBIST testing", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "PACT", description: "PBIST Activate Register", offset: "0x180", size: "32",
		bits: [
			{ name: "ENABLE", description: "Enable clocks to PBIST", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "OVERRIDE", description: "PBIST Override Register", offset: "0x188", size: "32",
		bits: [
			{ name: "RINFO_MEM_OVER", description: "ROM Memory Information Override", size: "1", shift: "0", mask: "0x1" },
			{ name: "ALGO_OVER", description: "ROM Algorithm Override", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "FSRF0", description: "Fail Status - Port 0", offset: "0x190", size: "32",
		bits: [
		]
	},
	{ name: "FSRF1", description: "Fail Status - Port 1", offset: "0x194", size: "32",
		bits: [
		]
	},
	{ name: "FSRC0", description: "Fail Status Count - Port 0", offset: "0x198", size: "32",
		bits: [
		]
	},
	{ name: "FSRC1", description: "Fail Status Count - Port 1", offset: "0x19C", size: "32",
		bits: [
		]
	},
	{ name: "ALGO", description: "PBIST Algorithm", offset: "0x1C4", size: "32",
		bits: [
		]
	},
	{ name: "RINFOL", description: "RAM Info Mask Register Lower", offset: "0x1C8", size: "32",
		bits: [
		]
	},
	{ name: "RINFOU", description: "RAM Info Mask Register Higher", offset: "0x1CC", size: "32",
		bits: [
		]
	},
];
module.exports = {
	pbistRegisters: PBIST_REGISTERS,
}
