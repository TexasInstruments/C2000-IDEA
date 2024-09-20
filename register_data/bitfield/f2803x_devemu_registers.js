let DEVEMU_REGISTERS = [
	{ name: "DEVICECNF", description: "Device Configuration", offset: "0x0", size: "32",
		bits: [
			{ name: "VMAPS", description: "VMAP Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRSn", description: "XRSn Signal Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "ENPROT", description: "Enable/Disable pipeline protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TRSTn", description: "Status of TRSTn signal", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "PINOUTSELSTS", description: "Status of PINOUSTSEL pin", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "PINOUTSELPUD", description: "PINOUTSEL pin pull-up disable", size: "1", shift: "29", mask: "0x20000000" },
		]
	},
	{ name: "CLASSID", description: "Class ID", offset: "0x2", size: "16",
		bits: [
			{ name: "CLASSNO", description: "Class Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "PARTTYPE", description: "Part Type", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "REVID", description: "Device ID", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "PARTID", description: "Part ID", offset: "0x0", size: "16",
		bits: [
			{ name: "PARTNO", description: "Part Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "PARTTYPE", description: "Part Type", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
];
module.exports = {
	devemuRegisters: DEVEMU_REGISTERS,
}
