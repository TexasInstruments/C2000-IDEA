let PIECTRL_REGISTERS = [
	{ name: "PIECTRL", description: "ePIE Control Register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENPIE", description: "PIE Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "PIEVECT", description: "PIE Vector Address", size: "15", shift: "1", mask: "0xFFFE" },
		]
	},
	{ name: "PIEACK", description: "Interrupt Acknowledge Register", offset: "0x1", size: "16",
		bits: [
			{ name: "ACK1", description: "Acknowledge PIE Interrupt Group 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "ACK2", description: "Acknowledge PIE Interrupt Group 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "ACK3", description: "Acknowledge PIE Interrupt Group 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACK4", description: "Acknowledge PIE Interrupt Group 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "ACK5", description: "Acknowledge PIE Interrupt Group 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "ACK6", description: "Acknowledge PIE Interrupt Group 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "ACK7", description: "Acknowledge PIE Interrupt Group 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "ACK8", description: "Acknowledge PIE Interrupt Group 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "ACK9", description: "Acknowledge PIE Interrupt Group 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "ACK10", description: "Acknowledge PIE Interrupt Group 10", size: "1", shift: "9", mask: "0x200" },
			{ name: "ACK11", description: "Acknowledge PIE Interrupt Group 11", size: "1", shift: "10", mask: "0x400" },
			{ name: "ACK12", description: "Acknowledge PIE Interrupt Group 12", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "PIEIER1", description: "Interrupt Group 1 Enable Register", offset: "0x2", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 1.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 1.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 1.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 1.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR1", description: "Interrupt Group 1 Flag Register", offset: "0x3", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 1.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 1.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 1.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 1.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER2", description: "Interrupt Group 2 Enable Register", offset: "0x4", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 2.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 2.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 2.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 2.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR2", description: "Interrupt Group 2 Flag Register", offset: "0x5", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 2.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 2.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 2.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 2.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER3", description: "Interrupt Group 3 Enable Register", offset: "0x6", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 3.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 3.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 3.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 3.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR3", description: "Interrupt Group 3 Flag Register", offset: "0x7", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 3.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 3.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 3.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 3.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER4", description: "Interrupt Group 4 Enable Register", offset: "0x8", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 4.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 4.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 4.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 4.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR4", description: "Interrupt Group 4 Flag Register", offset: "0x9", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 4.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 4.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 4.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 4.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER5", description: "Interrupt Group 5 Enable Register", offset: "0xA", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 5.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 5.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 5.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 5.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR5", description: "Interrupt Group 5 Flag Register", offset: "0xB", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 5.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 5.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 5.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 5.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER6", description: "Interrupt Group 6 Enable Register", offset: "0xC", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 6.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 6.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 6.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 6.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR6", description: "Interrupt Group 6 Flag Register", offset: "0xD", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 6.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 6.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 6.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 6.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER7", description: "Interrupt Group 7 Enable Register", offset: "0xE", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 7.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 7.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 7.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 7.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR7", description: "Interrupt Group 7 Flag Register", offset: "0xF", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 7.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 7.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 7.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 7.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER8", description: "Interrupt Group 8 Enable Register", offset: "0x10", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 8.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 8.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 8.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 8.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR8", description: "Interrupt Group 8 Flag Register", offset: "0x11", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 8.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 8.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 8.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 8.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER9", description: "Interrupt Group 9 Enable Register", offset: "0x12", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 9.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 9.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 9.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 9.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR9", description: "Interrupt Group 9 Flag Register", offset: "0x13", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 9.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 9.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 9.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 9.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER10", description: "Interrupt Group 10 Enable Register", offset: "0x14", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 10.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 10.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 10.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 10.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR10", description: "Interrupt Group 10 Flag Register", offset: "0x15", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 10.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 10.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 10.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 10.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER11", description: "Interrupt Group 11 Enable Register", offset: "0x16", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 11.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 11.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 11.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 11.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR11", description: "Interrupt Group 11 Flag Register", offset: "0x17", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 11.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 11.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 11.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 11.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIER12", description: "Interrupt Group 12 Enable Register", offset: "0x18", size: "16",
		bits: [
			{ name: "INTx1", description: "Enable for Interrupt 12.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Enable for Interrupt 12.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Enable for Interrupt 12.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Enable for Interrupt 12.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PIEIFR12", description: "Interrupt Group 12 Flag Register", offset: "0x19", size: "16",
		bits: [
			{ name: "INTx1", description: "Flag for Interrupt 12.1", size: "1", shift: "0", mask: "0x1" },
			{ name: "INTx2", description: "Flag for Interrupt 12.2", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTx3", description: "Flag for Interrupt 12.3", size: "1", shift: "2", mask: "0x4" },
			{ name: "INTx4", description: "Flag for Interrupt 12.4", size: "1", shift: "3", mask: "0x8" },
		]
	},
];
module.exports = {
	piectrlRegisters: PIECTRL_REGISTERS,
}
