let XINT_REGISTERS = [
	{ name: "XINT1CR", description: "XINT1 configuration register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT1 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT1 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT2CR", description: "XINT2 configuration register", offset: "0x1", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT2 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT2 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT3CR", description: "XINT3 configuration register", offset: "0x2", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT3 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT3 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT4CR", description: "XINT4 configuration register", offset: "0x3", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT4 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT4 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT5CR", description: "XINT5 configuration register", offset: "0x4", size: "16",
		bits: [
			{ name: "ENABLE", description: "XINT5 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "XINT5 Polarity", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT1CTR", description: "XINT1 counter register", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "XINT2CTR", description: "XINT2 counter register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "XINT3CTR", description: "XINT3 counter register", offset: "0xD", size: "16",
		bits: [
		]
	},
];
module.exports = {
	xintRegisters: XINT_REGISTERS,
}
