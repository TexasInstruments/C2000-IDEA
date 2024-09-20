let DEVEMU_REGISTERS = [
	{ name: "DEVICECNF", description: "device configuration", offset: "0x0", size: "32",
		bits: [
			{ name: "VMAPS", description: "VMAP Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRSn", description: "XRSn Signal Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "ENPROT", description: "Enable/Disable pipeline protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TRSTN", description: "Status of TRSTn signal", size: "1", shift: "27", mask: "0x8000000" },
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
	{ name: "PROTSTART", description: "Write-Read protection start", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "PROTRANGE", description: "Write-Read protection range", offset: "0x5", size: "16",
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
