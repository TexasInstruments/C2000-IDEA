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
	{ name: "XINT4CR", description: "", offset: "0x3", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT5CR", description: "", offset: "0x4", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT6CR", description: "", offset: "0x5", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XINT7CR", description: "", offset: "0x6", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "POLARITY", description: "pos/neg, both triggered", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "XNMICR", description: "", offset: "0x7", size: "16",
		bits: [
			{ name: "ENABLE", description: "enable/disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "SELECT", description: "Timer 1 or XNMI connected to int13", size: "1", shift: "1", mask: "0x2" },
			{ name: "POLARITY", description: "pos/neg, or both triggered", size: "2", shift: "2", mask: "0xC" },
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
	{ name: "XNMICTR", description: "", offset: "0xF", size: "16",
		bits: [
		]
	},
];
module.exports = {
	xintruptRegisters: XINTRUPT_REGISTERS,
}
