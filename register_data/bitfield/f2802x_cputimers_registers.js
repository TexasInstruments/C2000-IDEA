let CPUTIMERS_REGISTERS = [
	{ name: "TIM", description: "Timer counter register", offset: "0x0", size: "0",
		bits: [
		]
	},
	{ name: "PRD", description: "Period register", offset: "0x0", size: "0",
		bits: [
		]
	},
	{ name: "TCR", description: "Timer control register", offset: "0x0", size: "16",
		bits: [
			{ name: "TSS", description: "Timer Start/Stop", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRB", description: "Timer reload", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOFT", description: "Emulation modes", size: "1", shift: "10", mask: "0x400" },
			{ name: "FREE", description: "11", size: "1", shift: "11", mask: "0x800" },
			{ name: "TIE", description: "Output enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TIF", description: "Interrupt flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "TPR", description: "Timer pre-scale low", offset: "0x2", size: "16",
		bits: [
			{ name: "TDDR", description: "Divide-down low", size: "8", shift: "0", mask: "0xFF" },
			{ name: "PSC", description: "Prescale counter low", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "TPRH", description: "Timer pre-scale high", offset: "0x3", size: "16",
		bits: [
			{ name: "TDDRH", description: "Divide-down high", size: "8", shift: "0", mask: "0xFF" },
			{ name: "PSCH", description: "Prescale counter high", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
];
module.exports = {
	cputimersRegisters: CPUTIMERS_REGISTERS,
}
