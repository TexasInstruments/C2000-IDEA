let CPUTIMERS_REGISTERS = [
	{ name: "TIM", description: "Timer counter register", offset: "0x0", size: "0",
		bits: [
		]
	},
	{ name: "PRD", description: "Period register", offset: "0x0", size: "0",
		bits: [
		]
	},
	{ name: "TCR", description: "CPU-Timer Control Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	TSS", description: "Top Status Bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	TRB", description: "Reload Bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	SOFT", description: "Emulation Mode", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	FREE", description: "CPU-Timer Emulation Mode", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	TIE", description: "Interrupt Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	TIF", description: "Interrupt Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "TPR", description: "CPU-Timer Prescale Register", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	TDDR", description: "CPU-Timer Divide-Down", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Uint16	PSC", description: "Prescale Counter", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "TPRH", description: "CPU-Timer Prescale Register High", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	TDDRH", description: "CPU-Timer Divide-Down High Bits", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Uint16	PSCH", description: "Prescale Counter High Bits", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
];
module.exports = {
	cputimersRegisters: CPUTIMERS_REGISTERS,
}
