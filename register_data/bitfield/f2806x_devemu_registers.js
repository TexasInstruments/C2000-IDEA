let DEVEMU_REGISTERS = [
	{ name: "DEVICECNF", description: "Device Configuration", offset: "0x0", size: "32",
		bits: [
			{ name: "Uint16	VMAPS", description: "Configure Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	XRSn", description: "Input Signal Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ENPROT", description: "Write-Read Protection Mode Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "Uint16	TRSTn", description: "Status of TRSTn Signal", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "Uint16	SYSCLK2DIV2DIS", description: "SYSCLK2 Clock Divide by 2 Disable Bit", size: "1", shift: "30", mask: "0x40000000" },
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
