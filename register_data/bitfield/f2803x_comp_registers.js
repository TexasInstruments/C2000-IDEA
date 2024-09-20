let COMP_REGISTERS = [
	{ name: "COMPCTL", description: "", offset: "0x0", size: "16",
		bits: [
			{ name: "COMPDACEN", description: "Comparator/DAC  Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPSOURCE", description: "COMPSOURCE:1;", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPINV", description: "Invert select for Comparator", size: "1", shift: "2", mask: "0x4" },
			{ name: "QUALSEL", description: "QUALSEL:5;", size: "5", shift: "3", mask: "0xF8" },
			{ name: "SYNCSEL", description: "SYNCSEL:1;", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "COMPSTS", description: "", offset: "0x2", size: "16",
		bits: [
			{ name: "COMPSTS", description: "Logical latched value of comparator", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DACCTL", description: "", offset: "0x4", size: "16",
		bits: [
			{ name: "DACSOURCE", description: "DAC source control bits.", size: "1", shift: "0", mask: "0x1" },
			{ name: "RAMPSOURCE", description: "Ramp generator source control bits", size: "4", shift: "1", mask: "0x1E" },
			{ name: "FREE_SOFT", description: "Debug Mode Bit", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "DACVAL", description: "", offset: "0x6", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Value bit", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "RAMPMAXREF_ACTIVE", description: "", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "RAMPMAXREF_SHDW", description: "", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "RAMPDECVAL_ACTIVE", description: "", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "RAMPDECVAL_SHDW", description: "", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "RAMPSTS", description: "", offset: "0x10", size: "16",
		bits: [
		]
	},
];
module.exports = {
	compRegisters: COMP_REGISTERS,
}
