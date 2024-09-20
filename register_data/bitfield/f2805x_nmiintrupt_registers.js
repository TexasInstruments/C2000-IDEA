let NMIINTRUPT_REGISTERS = [
	{ name: "NMICFG", description: "C28 NMI Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "CLOCKFAIL NMI Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIFLG", description: "C28 NMI Flag Register", offset: "0x1", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMI Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "CLOCKFAIL NMI Flag", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIFLGCLR", description: "C28 NMI Flag Clear Register", offset: "0x2", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMI Interrupt Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "CLOCKFAIL NMI Flag Clear", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIFLGFRC", description: "C28 NMI Flag Force Register", offset: "0x3", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "CLOCKFAIL NMI Flag Force", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIWDCNT", description: "C28 NMI Watchdog Counter Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "NMIWDPRD", description: "C28 NMI Watchdog Period Register", offset: "0x5", size: "16",
		bits: [
		]
	},
];
module.exports = {
	nmiintruptRegisters: NMIINTRUPT_REGISTERS,
}
