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
	{ name: "INPUT15SELECT", description: "INPUT15 Input Select Register (GPIO0 to x)", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "INPUT16SELECT", description: "INPUT16 Input Select Register (GPIO0 to x)", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "INPUTSELECTLOCK", description: "Input Select Lock Register", offset: "0x1E", size: "32",
		bits: [
			{ name: "INPUT1SELECT", description: "Lock bit for INPUT1SELECT Register", size: "1", shift: "0", mask: "0x1" },
			{ name: "INPUT2SELECT", description: "Lock bit for INPUT2SELECT Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "INPUT3SELECT", description: "Lock bit for INPUT3SELECT Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "INPUT4SELECT", description: "Lock bit for INPUT4SELECT Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "INPUT5SELECT", description: "Lock bit for INPUT5SELECT Register", size: "1", shift: "4", mask: "0x10" },
			{ name: "INPUT6SELECT", description: "Lock bit for INPUT6SELECT Register", size: "1", shift: "5", mask: "0x20" },
			{ name: "INPUT7SELECT", description: "Lock bit for INPUT7SELECT Register", size: "1", shift: "6", mask: "0x40" },
			{ name: "INPUT8SELECT", description: "Lock bit for INPUT8SELECT Register", size: "1", shift: "7", mask: "0x80" },
			{ name: "INPUT9SELECT", description: "Lock bit for INPUT9SELECT Register", size: "1", shift: "8", mask: "0x100" },
			{ name: "INPUT10SELECT", description: "Lock bit for INPUT10SELECT Register", size: "1", shift: "9", mask: "0x200" },
			{ name: "INPUT11SELECT", description: "Lock bit for INPUT11SELECT Register", size: "1", shift: "10", mask: "0x400" },
			{ name: "INPUT12SELECT", description: "Lock bit for INPUT12SELECT Register", size: "1", shift: "11", mask: "0x800" },
			{ name: "INPUT13SELECT", description: "Lock bit for INPUT13SELECT Register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INPUT14SELECT", description: "Lock bit for INPUT14SELECT Register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INPUT15SELECT", description: "Lock bit for INPUT15SELECT Register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INPUT16SELECT", description: "Lock bit for INPUT16SELECT Register", size: "1", shift: "15", mask: "0x8000" },
		]
	},
];
module.exports = {
	inputxbarRegisters: INPUTXBAR_REGISTERS,
}
