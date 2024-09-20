let XINTF_REGISTERS = [
	{ name: "XTIMING0", description: "", offset: "0x0", size: "32",
		bits: [
			{ name: "XWRTRAIL", description: "Write access trail timing", size: "2", shift: "0", mask: "0x3" },
			{ name: "XWRACTIVE", description: "Write access active timing", size: "3", shift: "2", mask: "0x1C" },
			{ name: "XWRLEAD", description: "Write access lead timing", size: "2", shift: "5", mask: "0x60" },
			{ name: "XRDTRAIL", description: "Read access trail timing", size: "2", shift: "7", mask: "0x180" },
			{ name: "XRDACTIVE", description: "Read access active timing", size: "3", shift: "9", mask: "0xE00" },
			{ name: "XRDLEAD", description: "Read access lead timing", size: "2", shift: "12", mask: "0x3000" },
			{ name: "USEREADY", description: "Extend access using HW waitstates", size: "1", shift: "14", mask: "0x4000" },
			{ name: "READYMODE", description: "Ready mode", size: "1", shift: "15", mask: "0x8000" },
			{ name: "XSIZE", description: "XINTF bus width - must be written as 11b", size: "2", shift: "16", mask: "0x30000" },
			{ name: "X2TIMING", description: "Double lead/active/trail timing", size: "1", shift: "22", mask: "0x400000" },
		]
	},
	{ name: "XTIMING6", description: "", offset: "0xC", size: "32",
		bits: [
			{ name: "XWRTRAIL", description: "Write access trail timing", size: "2", shift: "0", mask: "0x3" },
			{ name: "XWRACTIVE", description: "Write access active timing", size: "3", shift: "2", mask: "0x1C" },
			{ name: "XWRLEAD", description: "Write access lead timing", size: "2", shift: "5", mask: "0x60" },
			{ name: "XRDTRAIL", description: "Read access trail timing", size: "2", shift: "7", mask: "0x180" },
			{ name: "XRDACTIVE", description: "Read access active timing", size: "3", shift: "9", mask: "0xE00" },
			{ name: "XRDLEAD", description: "Read access lead timing", size: "2", shift: "12", mask: "0x3000" },
			{ name: "USEREADY", description: "Extend access using HW waitstates", size: "1", shift: "14", mask: "0x4000" },
			{ name: "READYMODE", description: "Ready mode", size: "1", shift: "15", mask: "0x8000" },
			{ name: "XSIZE", description: "XINTF bus width - must be written as 11b", size: "2", shift: "16", mask: "0x30000" },
			{ name: "X2TIMING", description: "Double lead/active/trail timing", size: "1", shift: "22", mask: "0x400000" },
		]
	},
	{ name: "XTIMING7", description: "", offset: "0xE", size: "32",
		bits: [
			{ name: "XWRTRAIL", description: "Write access trail timing", size: "2", shift: "0", mask: "0x3" },
			{ name: "XWRACTIVE", description: "Write access active timing", size: "3", shift: "2", mask: "0x1C" },
			{ name: "XWRLEAD", description: "Write access lead timing", size: "2", shift: "5", mask: "0x60" },
			{ name: "XRDTRAIL", description: "Read access trail timing", size: "2", shift: "7", mask: "0x180" },
			{ name: "XRDACTIVE", description: "Read access active timing", size: "3", shift: "9", mask: "0xE00" },
			{ name: "XRDLEAD", description: "Read access lead timing", size: "2", shift: "12", mask: "0x3000" },
			{ name: "USEREADY", description: "Extend access using HW waitstates", size: "1", shift: "14", mask: "0x4000" },
			{ name: "READYMODE", description: "Ready mode", size: "1", shift: "15", mask: "0x8000" },
			{ name: "XSIZE", description: "XINTF bus width - must be written as 11b", size: "2", shift: "16", mask: "0x30000" },
			{ name: "X2TIMING", description: "Double lead/active/trail timing", size: "1", shift: "22", mask: "0x400000" },
		]
	},
	{ name: "XINTCNF2", description: "", offset: "0x14", size: "32",
		bits: [
			{ name: "WRBUFF", description: "Write buffer depth", size: "2", shift: "0", mask: "0x3" },
			{ name: "CLKMODE", description: "Ratio for XCLKOUT with respect to XTIMCLK", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLKOFF", description: "Disable XCLKOUT", size: "1", shift: "3", mask: "0x8" },
			{ name: "WLEVEL", description: "Current level of the write buffer", size: "2", shift: "6", mask: "0xC0" },
			{ name: "HOLD", description: "Hold enable/disable", size: "1", shift: "9", mask: "0x200" },
			{ name: "HOLDS", description: "Current state of HOLDn input", size: "1", shift: "10", mask: "0x400" },
			{ name: "HOLDAS", description: "Current state of HOLDAn output", size: "1", shift: "11", mask: "0x800" },
			{ name: "XTIMCLK", description: "Ratio for XTIMCLK", size: "3", shift: "16", mask: "0x70000" },
		]
	},
	{ name: "XBANK", description: "", offset: "0x18", size: "16",
		bits: [
			{ name: "BANK", description: "Zone for which banking is enabled", size: "3", shift: "0", mask: "0x7" },
			{ name: "BCYC", description: "XTIMCLK cycles to add", size: "3", shift: "3", mask: "0x38" },
		]
	},
	{ name: "XREVISION", description: "", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "XRESET", description: "", offset: "0x1D", size: "16",
		bits: [
			{ name: "XHARDRESET", description: "XHARDRESET:1;", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	xintfRegisters: XINTF_REGISTERS,
}
