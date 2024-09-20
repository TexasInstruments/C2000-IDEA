let MINDB_XBAR_REGISTERS = [
	{ name: "MDL1SELECT", description: "MDL1SELECT Input Select Register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "MDL2SELECT", description: "MDL2SELECT Input Select Register", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "MDL3SELECT", description: "MDL3SELECT Input Select Register", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "MDL4SELECT", description: "MDL4SELECT Input Select Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "MDL5SELECT", description: "MDL5SELECT Input Select Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "MDL6SELECT", description: "MDL6SELECT Input Select Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "MDL7SELECT", description: "MDL7SELECT Input Select Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "MDL8SELECT", description: "MDL8SELECT Input Select Register", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "MDL9SELECT", description: "MDL9SELECT Input Select Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "MDL10SELECT", description: "MDL10SELECT Input Select Register", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "MDL11SELECT", description: "MDL11SELECT Input Select Register", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "MDL12SELECT", description: "MDL12SELECT Input Select Register", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "MDL13SELECT", description: "MDL13SELECT Input Select Register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "MDL14SELECT", description: "MDL14SELECT Input Select Register", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "MDL15SELECT", description: "MDL15SELECT Input Select Register", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "MDL16SELECT", description: "MDL16SELECT Input Select Register", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "MDLINPUTSELECTLOCK", description: "Input Select Lock Register", offset: "0x1E", size: "32",
		bits: [
			{ name: "MDL1SELECT", description: "Lock bit for MDL1SELECT Register", size: "1", shift: "0", mask: "0x1" },
			{ name: "MDL2SELECT", description: "Lock bit for MDL2SELECT Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "MDL3SELECT", description: "Lock bit for MDL3SELECT Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "MDL4SELECT", description: "Lock bit for MDL4SELECT Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "MDL5SELECT", description: "Lock bit for MDL5SELECT Register", size: "1", shift: "4", mask: "0x10" },
			{ name: "MDL6SELECT", description: "Lock bit for MDL6SELECT Register", size: "1", shift: "5", mask: "0x20" },
			{ name: "MDL7SELECT", description: "Lock bit for MDL7SELECT Register", size: "1", shift: "6", mask: "0x40" },
			{ name: "MDL8SELECT", description: "Lock bit for MDL8SELECT Register", size: "1", shift: "7", mask: "0x80" },
			{ name: "MDL9SELECT", description: "Lock bit for MDL9SELECT Register", size: "1", shift: "8", mask: "0x100" },
			{ name: "MDL10SELECT", description: "Lock bit for MDL10SELECT Register", size: "1", shift: "9", mask: "0x200" },
			{ name: "MDL11SELECT", description: "Lock bit for MDL11SELECT Register", size: "1", shift: "10", mask: "0x400" },
			{ name: "MDL12SELECT", description: "Lock bit for MDL12SELECT Register", size: "1", shift: "11", mask: "0x800" },
			{ name: "MDL13SELECT", description: "Lock bit for MDL13SELECT Register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MDL14SELECT", description: "Lock bit for MDL14SELECT Register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MDL15SELECT", description: "Lock bit for MDL15SELECT Register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MDL16SELECT", description: "Lock bit for MDL16SELECT Register", size: "1", shift: "15", mask: "0x8000" },
		]
	},
];
module.exports = {
	mindb_xbarRegisters: MINDB_XBAR_REGISTERS,
}
