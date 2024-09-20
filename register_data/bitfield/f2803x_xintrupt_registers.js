let XINTRUPT_REGISTERS = [
	{ name: "XINT1CR", description: "", offset: "0x0", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT2CR", description: "", offset: "0x1", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT3CR", description: "", offset: "0x2", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT1CTR", description: "", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "XINT2CTR", description: "", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "XINT3CTR", description: "", offset: "0xA", size: "16",
		bits: [
		]
	},
];
module.exports = {
	xintruptRegisters: XINTRUPT_REGISTERS,
}
