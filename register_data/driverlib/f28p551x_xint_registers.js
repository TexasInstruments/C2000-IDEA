let XINT_REGISTERS = [
	{ name: "1CR", description: "XINT1 configuration register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT1 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT1 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "2CR", description: "XINT2 configuration register", offset: "0x1", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT2 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT2 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "3CR", description: "XINT3 configuration register", offset: "0x2", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT3 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT3 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "4CR", description: "XINT4 configuration register", offset: "0x3", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT4 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT4 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "5CR", description: "XINT5 configuration register", offset: "0x4", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT5 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT5 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "1CTR", description: "XINT1 counter register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "2CTR", description: "XINT2 counter register", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "3CTR", description: "XINT3 counter register", offset: "0xA", size: "16",
		bits: [
		]
	},
];
module.exports = {
	xintRegisters: XINT_REGISTERS,
}
