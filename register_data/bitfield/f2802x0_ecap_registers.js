let ECAP_REGISTERS = [
	{ name: "TSCTR", description: "Time stamp counter", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "CTRPHS", description: "Counter phase", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "CAP1", description: "Capture 1", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "CAP2", description: "Capture 2", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "CAP3", description: "Capture 3", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "CAP4", description: "Capture 4", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "ECCTL1", description: "Capture Control Reg 1", offset: "0x14", size: "16",
		bits: [
			{ name: "CAP1POL", description: "Capture Event 1 Polarity select", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRRST1", description: "Counter Reset on Capture Event 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "CAP2POL", description: "Capture Event 2 Polarity select", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRRST2", description: "Counter Reset on Capture Event 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "CAP3POL", description: "Capture Event 3 Polarity select", size: "1", shift: "4", mask: "0x10" },
			{ name: "CTRRST3", description: "Counter Reset on Capture Event 3", size: "1", shift: "5", mask: "0x20" },
			{ name: "CAP4POL", description: "Capture Event 4 Polarity select", size: "1", shift: "6", mask: "0x40" },
			{ name: "CTRRST4", description: "Counter Reset on Capture Event 4", size: "1", shift: "7", mask: "0x80" },
			{ name: "CAPLDEN", description: "CAPLDEN:1;", size: "1", shift: "8", mask: "0x100" },
			{ name: "PRESCALE", description: "Event Filter prescale select", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FREE_SOFT", description: "Emulation mode", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ECCTL2", description: "Capture Control Reg 2", offset: "0x15", size: "16",
		bits: [
			{ name: "CONT_ONESHT", description: "Continuous or one-shot", size: "1", shift: "0", mask: "0x1" },
			{ name: "STOP_WRAP", description: "Stop value for one-shot, Wrap for continuous", size: "2", shift: "1", mask: "0x6" },
			{ name: "REARM", description: "One-shot re-arm", size: "1", shift: "3", mask: "0x8" },
			{ name: "TSCTRSTOP", description: "TSCNT counter stop", size: "1", shift: "4", mask: "0x10" },
			{ name: "SYNCI_EN", description: "Counter sync-in select", size: "1", shift: "5", mask: "0x20" },
			{ name: "SYNCO_SEL", description: "Sync-out mode", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SWSYNC", description: "SW forced counter sync", size: "1", shift: "8", mask: "0x100" },
			{ name: "CAP_APWM", description: "CAP/APWM operating mode select", size: "1", shift: "9", mask: "0x200" },
			{ name: "APWMPOL", description: "APWM output polarity select", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "ECEINT", description: "ECAP interrupt enable", offset: "0x16", size: "16",
		bits: [
			{ name: "CEVT1", description: "Capture Event 1 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CEVT2", description: "Capture Event 2 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "CEVT3", description: "Capture Event 3 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "CEVT4", description: "Capture Event 4 Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CTROVF", description: "Counter Overflow Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "CTR_EQ_PRD", description: "Period Equal Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "CTR_EQ_CMP", description: "Compare Equal Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECFLG", description: "ECAP interrupt flags", offset: "0x17", size: "16",
		bits: [
			{ name: "INT", description: "Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CEVT1", description: "Capture Event 1 Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CEVT2", description: "Capture Event 2 Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "CEVT3", description: "Capture Event 3 Interrupt Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CEVT4", description: "Capture Event 4 Interrupt Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CTROVF", description: "Counter Overflow Interrupt Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "CTR_EQ_PRD", description: "Period Equal Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "CTR_EQ_CMP", description: "Compare Equal Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECCLR", description: "ECAP interrupt clear", offset: "0x18", size: "16",
		bits: [
			{ name: "INT", description: "Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CEVT1", description: "Capture Event 1 Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CEVT2", description: "Capture Event 2 Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "CEVT3", description: "Capture Event 3 Interrupt Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CEVT4", description: "Capture Event 4 Interrupt Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CTROVF", description: "Counter Overflow Interrupt Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "CTR_EQ_PRD", description: "Period Equal Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "CTR_EQ_CMP", description: "Compare Equal Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECFRC", description: "ECAP interrupt force", offset: "0x19", size: "16",
		bits: [
			{ name: "CEVT1", description: "Capture Event 1 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CEVT2", description: "Capture Event 2 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "CEVT3", description: "Capture Event 3 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "CEVT4", description: "Capture Event 4 Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CTROVF", description: "Counter Overflow Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "CTR_EQ_PRD", description: "Period Equal Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "CTR_EQ_CMP", description: "Compare Equal Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
		]
	},
];
module.exports = {
	ecapRegisters: ECAP_REGISTERS,
}
