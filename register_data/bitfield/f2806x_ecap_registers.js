let ECAP_REGISTERS = [
	{ name: "TSCTR", description: "Time Stamp Counter", offset: "0x0", size: "32",
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
	{ name: "ECCTL1", description: "Capture Control Reg 1", offset: "0x14", size: "32",
		bits: [
			{ name: "Uint16	CAP1POL", description: "Event 1 Polarity select", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	CTRRST1", description: "Reset on Capture Event 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CAP2POL", description: "Event 2 Polarity select", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CTRRST2", description: "Reset on Capture Event 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	CAP3POL", description: "Event 3 Polarity select", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CTRRST3", description: "Reset on Capture Event 3", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CAP4POL", description: "Event 4 Polarity select", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CTRRST4", description: "Reset on Capture Event 4", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	CAPLDEN", description: "Loading CAP1-4 regs on a Cap Event", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	PRESCALE", description: "Filter prescale select", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "Uint16	FREE_SOFT", description: "mode", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ECCTL2", description: "Capture Control Reg 2", offset: "0x16", size: "32",
		bits: [
			{ name: "Uint16	CONT_ONESHT", description: "or one-shot", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	STOP_WRAP", description: "Uint16	STOP_WRAP:2;", size: "2", shift: "1", mask: "0x6" },
			{ name: "Uint16	REARM", description: "re-arm", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	TSCTRSTOP", description: "counter stop", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	SYNCI_EN", description: "sync-in select", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	SYNCO_SEL", description: "mode", size: "2", shift: "6", mask: "0xC0" },
			{ name: "Uint16	SWSYNC", description: "forced counter sync", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	CAP_APWM", description: "operating mode select", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	APWMPOL", description: "output polarity select", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "ECEINT", description: "ECAP interrupt enable", offset: "0x18", size: "32",
		bits: [
			{ name: "Uint16	CEVT1", description: "Event 1 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CEVT2", description: "Event 2 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CEVT3", description: "Event 3 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	CEVT4", description: "Event 4 Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CTROVF", description: "Overflow Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CTR_EQ_PRD", description: "Equal Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CTR_EQ_CMP", description: "Equal Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECFLG", description: "ECAP interrupt flags", offset: "0x1A", size: "32",
		bits: [
			{ name: "Uint16	INT", description: "Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	CEVT1", description: "Event 1 Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CEVT2", description: "Event 2 Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CEVT3", description: "Event 3 Interrupt Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	CEVT4", description: "Event 4 Interrupt Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CTROVF", description: "Overflow Interrupt Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CTR_EQ_PRD", description: "Equal Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CTR_EQ_CMP", description: "Equal Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECCLR", description: "ECAP interrupt clear", offset: "0x1C", size: "32",
		bits: [
			{ name: "Uint16	INT", description: "Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	CEVT1", description: "Event 1 Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CEVT2", description: "Event 2 Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CEVT3", description: "Event 3 Interrupt Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	CEVT4", description: "Event 4 Interrupt Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CTROVF", description: "Overflow Interrupt Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CTR_EQ_PRD", description: "Equal Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CTR_EQ_CMP", description: "Equal Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECFRC", description: "ECAP interrupt force", offset: "0x1E", size: "32",
		bits: [
			{ name: "Uint16	CEVT1", description: "Event 1 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CEVT2", description: "Event 2 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CEVT3", description: "Event 3 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	CEVT4", description: "Event 4 Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CTROVF", description: "Overflow Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CTR_EQ_PRD", description: "Equal Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CTR_EQ_CMP", description: "Equal Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
		]
	},
];
module.exports = {
	ecapRegisters: ECAP_REGISTERS,
}
