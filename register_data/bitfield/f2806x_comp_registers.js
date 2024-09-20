let COMP_REGISTERS = [
	{ name: "COMPCTL", description: "Comparator Control", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	COMPDACEN", description: "Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	COMPSOURCE", description: "Select for inverting input", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CMPINV", description: "Select for Comparator", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	QUALSEL", description: "Uint16	QUALSEL:5;", size: "5", shift: "3", mask: "0xF8" },
			{ name: "Uint16	SYNCSEL", description: "select before ETPWM/GPIO", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "COMPSTS", description: "Compare Output States", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	COMPSTS", description: "latched value of the comparator", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DACCTL", description: "", offset: "0x2", size: "16",
		bits: [
			{ name: "DACSOURCE", description: "DAC source control bits.", size: "1", shift: "0", mask: "0x1" },
			{ name: "RAMPSOURCE", description: "Ramp generator source control bits", size: "4", shift: "1", mask: "0x1E" },
			{ name: "FREE_SOFT", description: "Debug Mode Bit", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "DACVAL", description: "", offset: "0x4", size: "16",
		bits: [
			{ name: "Uint16	DACVAL", description: "Value bits", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "RAMPMAXREF_ACTIVE", description: "", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "RAMPMAXREF_SHDW", description: "", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "RAMPDECVAL_ACTIVE", description: "", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "RAMPDECVAL_SHDW", description: "", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "RAMPSTS", description: "", offset: "0xE", size: "16",
		bits: [
		]
	},
];
module.exports = {
	compRegisters: COMP_REGISTERS,
}
