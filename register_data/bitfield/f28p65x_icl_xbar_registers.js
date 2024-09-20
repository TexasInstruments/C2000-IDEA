let ICL_XBAR_REGISTERS = [
	{ name: "ICL1SELECT", description: "ICL1SELECT Input Select Register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "ICL2SELECT", description: "ICL2SELECT Input Select Register", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "ICL3SELECT", description: "ICL3SELECT Input Select Register", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "ICL4SELECT", description: "ICL4SELECT Input Select Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "ICL5SELECT", description: "ICL5SELECT Input Select Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "ICL6SELECT", description: "ICL6SELECT Input Select Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "ICL7SELECT", description: "ICL7SELECT Input Select Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "ICL8SELECT", description: "ICL8SELECT Input Select Register", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "ICL9SELECT", description: "ICL9SELECT Input Select Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "ICL10SELECT", description: "ICL10SELECT Input Select Register", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "ICL11SELECT", description: "ICL11SELECT Input Select Register", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "ICL12SELECT", description: "ICL12SELECT Input Select Register", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "ICL13SELECT", description: "ICL13SELECT Input Select Register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "ICL14SELECT", description: "ICL14SELECT Input Select Register", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "ICL15SELECT", description: "ICL15SELECT Input Select Register", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "ICL16SELECT", description: "ICL16SELECT Input Select Register", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "ICLINPUTSELECTLOCK", description: "Input Select Lock Register", offset: "0x1E", size: "32",
		bits: [
			{ name: "ICL1SELECT", description: "Lock bit for ICL1SELECT Register", size: "1", shift: "0", mask: "0x1" },
			{ name: "ICL2SELECT", description: "Lock bit for ICL2SELECT Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "ICL3SELECT", description: "Lock bit for ICL3SELECT Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "ICL4SELECT", description: "Lock bit for ICL4SELECT Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "ICL5SELECT", description: "Lock bit for ICL5SELECT Register", size: "1", shift: "4", mask: "0x10" },
			{ name: "ICL6SELECT", description: "Lock bit for ICL6SELECT Register", size: "1", shift: "5", mask: "0x20" },
			{ name: "ICL7SELECT", description: "Lock bit for ICL7SELECT Register", size: "1", shift: "6", mask: "0x40" },
			{ name: "ICL8SELECT", description: "Lock bit for ICL8SELECT Register", size: "1", shift: "7", mask: "0x80" },
			{ name: "ICL9SELECT", description: "Lock bit for ICL9SELECT Register", size: "1", shift: "8", mask: "0x100" },
			{ name: "ICL10SELECT", description: "Lock bit for ICL10SELECT Register", size: "1", shift: "9", mask: "0x200" },
			{ name: "ICL11SELECT", description: "Lock bit for ICL11SELECT Register", size: "1", shift: "10", mask: "0x400" },
			{ name: "ICL12SELECT", description: "Lock bit for ICL12SELECT Register", size: "1", shift: "11", mask: "0x800" },
			{ name: "ICL13SELECT", description: "Lock bit for ICL13SELECT Register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ICL14SELECT", description: "Lock bit for ICL14SELECT Register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "ICL15SELECT", description: "Lock bit for ICL15SELECT Register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "ICL16SELECT", description: "Lock bit for ICL16SELECT Register", size: "1", shift: "15", mask: "0x8000" },
		]
	},
];
module.exports = {
	icl_xbarRegisters: ICL_XBAR_REGISTERS,
}
