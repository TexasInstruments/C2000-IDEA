let INPUTXBAR_REGISTERS = [
	{ name: "INPUT1SELECT", description: "INPUT1 Input Select Register (GPIO0 to x)", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "INPUT2SELECT", description: "INPUT2 Input Select Register (GPIO0 to x)", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "INPUT3SELECT", description: "INPUT3 Input Select Register (GPIO0 to x)", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "INPUT4SELECT", description: "INPUT4 Input Select Register (GPIO0 to x)", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "INPUT5SELECT", description: "INPUT5 Input Select Register (GPIO0 to x)", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "INPUT6SELECT", description: "INPUT6 Input Select Register (GPIO0 to x)", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "INPUT7SELECT", description: "INPUT7 Input Select Register (GPIO0 to x)", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "INPUT8SELECT", description: "INPUT8 Input Select Register (GPIO0 to x)", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "INPUT9SELECT", description: "INPUT9 Input Select Register (GPIO0 to x)", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "INPUT10SELECT", description: "INPUT10 Input Select Register (GPIO0 to x)", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "INPUT11SELECT", description: "INPUT11 Input Select Register (GPIO0 to x)", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "INPUT12SELECT", description: "INPUT12 Input Select Register (GPIO0 to x)", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "INPUT13SELECT", description: "INPUT13 Input Select Register (GPIO0 to x)", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "INPUT14SELECT", description: "INPUT14 Input Select Register (GPIO0 to x)", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "INPUTSELECTLOCK", description: "Input Select Lock Register", offset: "0x1E", size: "16",
		bits: [
		]
	},
];
module.exports = {
	inputxbarRegisters: INPUTXBAR_REGISTERS,
}
