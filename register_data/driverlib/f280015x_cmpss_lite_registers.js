let CMPSS_LITE_REGISTERS = [
	{ name: "COMPCTL", description: "CMPSS Comparator Control Register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "COMPHYSCTL", description: "CMPSS Comparator Hysteresis Control Register", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "COMPSTS", description: "CMPSS Comparator Status Register", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "COMPSTSCLR", description: "CMPSS Comparator Status Clear Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "COMPDACHCTL", description: "CMPSS High DAC Control Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "DACHVALS", description: "CMPSS High DAC Value Shadow Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "DACHVALA", description: "CMPSS High DAC Value Active Register", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "DACLVALS", description: "CMPSS Low DAC Value Shadow Register", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "DACLVALA", description: "CMPSS Low DAC Value Active Register", offset: "0x13", size: "16",
		bits: [
		]
	},
	{ name: "CTRIPLFILCTL", description: "CTRIPL Filter Control Register", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "CTRIPLFILCLKCTL", description: "CTRIPL Filter Clock Control Register", offset: "0x17", size: "16",
		bits: [
		]
	},
	{ name: "CTRIPHFILCTL", description: "CTRIPH Filter Control Register", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "CTRIPHFILCLKCTL", description: "CTRIPH Filter Clock Control Register", offset: "0x19", size: "16",
		bits: [
		]
	},
	{ name: "COMPLOCK", description: "CMPSS Lock Register", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "COMPDACLCTL", description: "CMPSS Low DAC Control Register", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "CTRIPLFILCLKCTL2", description: "CTRIPL Filter Clock Control Register 2", offset: "0x37", size: "16",
		bits: [
		]
	},
	{ name: "CTRIPHFILCLKCTL2", description: "CTRIPH Filter Clock Control Register 2", offset: "0x39", size: "16",
		bits: [
			{ name: "CMPSSLITE_COMPCTL_COMPHSOURCE", description: "High Comparator Source Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSSLITE_COMPCTL_COMPHINV", description: "High Comparator Invert Select", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSSLITE_COMPCTL_CTRIPHSEL", description: "High Comparator Trip Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "CMPSSLITE_COMPCTL_CTRIPOUTHSEL", description: "High Comparator Trip Output Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "CMPSSLITE_COMPCTL_ASYNCHEN", description: "High Comparator Asynchronous Path Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSSLITE_COMPCTL_COMPLSOURCE", description: "Low Comparator Source Select", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMPSSLITE_COMPCTL_COMPLINV", description: "Low Comparator Invert Select", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSSLITE_COMPCTL_CTRIPLSEL", description: "Low Comparator Trip Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "CMPSSLITE_COMPCTL_CTRIPOUTLSEL", description: "Low Comparator Trip Output Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "CMPSSLITE_COMPCTL_ASYNCLEN", description: "Low Comparator Asynchronous Path Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CMPSSLITE_COMPCTL_COMPDACE", description: "Comparator/DAC Enable", size: "1", shift: "15", mask: "0x8000" },
			{ name: "CMPSSLITE_COMPHYSCTL_COMPHYS", description: "Comparator Hysteresis Trim", size: "4", shift: "0", mask: "0xF" },
			{ name: "CMPSSLITE_COMPSTS_COMPHSTS", description: "High Comparator Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSSLITE_COMPSTS_COMPHLATCH", description: "High Comparator Latched Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSSLITE_COMPSTS_COMPLSTS", description: "Low Comparator Status", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMPSSLITE_COMPSTS_COMPLLATCH", description: "Low Comparator Latched Status", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSSLITE_COMPSTSCLR_HLATCHCLR", description: "High Comparator Latched Status Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSSLITE_COMPSTSCLR_HSYNCCLREN", description: "High Comparator EPWMSYNCPER Clear Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSSLITE_COMPSTSCLR_LLATCHCLR", description: "Low Comparator Latched Status Clear", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSSLITE_COMPSTSCLR_LSYNCCLREN", description: "Low Comparator EPWMSYNCPER Clear Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMPSSLITE_COMPDACHCTL_RAMPSOURCE", description: "Ramp Generator Source Control", size: "4", shift: "1", mask: "0x1E" },
			{ name: "CMPSSLITE_COMPDACHCTL_SWLOADSEL", description: "Software Load Select", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSSLITE_COMPDACHCTL_BLANKSOURCE", description: "EPWMBLANK Source Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CMPSSLITE_COMPDACHCTL_BLANKEN", description: "EPWMBLANK Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "CMPSSLITE_DACHVALS_DACVAL", description: "DAC Value Control", size: "12", shift: "0", mask: "0xFFF" },
			{ name: "CMPSSLITE_DACHVALA_DACVAL", description: "DAC Value Control", size: "12", shift: "0", mask: "0xFFF" },
			{ name: "CMPSSLITE_DACLVALS_DACVAL", description: "DAC Value Control", size: "12", shift: "0", mask: "0xFFF" },
			{ name: "CMPSSLITE_DACLVALA_DACVAL", description: "DAC Value Control", size: "12", shift: "0", mask: "0xFFF" },
			{ name: "CMPSSLITE_CTRIPLFILCTL_FILTINSEL", description: "Filter Input Select", size: "3", shift: "0", mask: "0x7" },
			{ name: "CMPSSLITE_CTRIPLFILCTL_SAMPWIN", description: "Sample Window", size: "6", shift: "3", mask: "0x1F8" },
			{ name: "CMPSSLITE_CTRIPLFILCTL_THRESH", description: "Majority Voting Threshold", size: "6", shift: "9", mask: "0x7E00" },
			{ name: "CMPSSLITE_CTRIPLFILCTL_FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
			{ name: "CMPSSLITE_CTRIPHFILCTL_FILTINSEL", description: "Filter Input Select", size: "3", shift: "0", mask: "0x7" },
			{ name: "CMPSSLITE_CTRIPHFILCTL_SAMPWIN", description: "Sample Window", size: "6", shift: "3", mask: "0x1F8" },
			{ name: "CMPSSLITE_CTRIPHFILCTL_THRESH", description: "Majority Voting Threshold", size: "6", shift: "9", mask: "0x7E00" },
			{ name: "CMPSSLITE_CTRIPHFILCTL_FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
			{ name: "CMPSSLITE_COMPLOCK_COMPCTL", description: "COMPCTL Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSSLITE_COMPLOCK_COMPHYSCTL", description: "COMPHYSCTL Lock", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSSLITE_COMPLOCK_DACCTL", description: "DACCTL Lock", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSSLITE_COMPLOCK_CTRIP", description: "CTRIP Lock", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSSLITE_COMPDACLCTL_RAMPSOURCE", description: "Ramp Generator Source Control", size: "4", shift: "1", mask: "0x1E" },
			{ name: "CMPSSLITE_COMPDACLCTL_BLANKSOURCE", description: "EPWMBLANK Source Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CMPSSLITE_COMPDACLCTL_BLANKEN", description: "EPWMBLANK Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "CMPSSLITE_CTRIPLFILCLKCTL2_CLKPRESCALEU", description: "Sample Clock Prescale Upper Bits", size: "8", shift: "0", mask: "0xFF" },
			{ name: "CLKPRESCALEU", description: "Sample Clock Prescale Upper Bits", size: "8", shift: "0", mask: "0xFF" },
		]
	},
];
module.exports = {
	cmpss_liteRegisters: CMPSS_LITE_REGISTERS,
}
