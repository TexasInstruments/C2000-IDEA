let DEVEMU_REGISTERS = [
	{ name: "DEVICECNF", description: "Device Configuration Register", offset: "0x0", size: "32",
		bits: [
			{ name: "VMAPS", description: "VMAP Configure Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRSn", description: "Reset Input Signal Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "ENPROT", description: "Enable Write-Read Protection Mode Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TRSTn", description: "Read Status of TRSTn Signal", size: "1", shift: "27", mask: "0x8000000" },
		]
	},
	{ name: "PARTID", description: "Device ID Register", offset: "0x2", size: "16",
		bits: [
			{ name: "PARTNO", description: "Part Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "CLASSTYPE", description: "Class Type", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "REVID", description: "Revision ID Register", offset: "0x3", size: "16",
		bits: [
		]
	},
];
module.exports = {
	devemuRegisters: DEVEMU_REGISTERS,
}
