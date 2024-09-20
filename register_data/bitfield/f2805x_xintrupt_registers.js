let XINTRUPT_REGISTERS = [
	{ name: "XINT1CR", description: "XINT1 Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT1 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT1 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT2CR", description: "XINT2 Configuration Register", offset: "0x1", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT1 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT1 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT3CR", description: "XINT3 Configuration Register", offset: "0x2", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT1 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT1 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT1CTR", description: "XINT1 Counter Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "XINT2CTR", description: "XINT2 Counter Register", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "XINT3CTR", description: "XINT3 Counter Register", offset: "0xA", size: "16",
		bits: [
		]
	},
];
module.exports = {
	xintruptRegisters: XINTRUPT_REGISTERS,
}
