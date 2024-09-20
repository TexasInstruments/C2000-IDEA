let NMIINTRUPT_REGISTERS = [
	{ name: "NMICFG", description: "", offset: "0x0", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "Fail Interrupt Enable Bits", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIFLG", description: "", offset: "0x1", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMI Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "Clock Fail Interrupt Flags", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIFLGCLR", description: "", offset: "0x2", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMIINT Flag Clear Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "CLOCKFAIL Flag Clear Bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIFLGFRC", description: "", offset: "0x3", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "CLOCKFAIL Flag Force Bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMIWDCNT", description: "", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "NMIWDPRD", description: "", offset: "0x5", size: "16",
		bits: [
		]
	},
];
module.exports = {
	nmiintruptRegisters: NMIINTRUPT_REGISTERS,
}
