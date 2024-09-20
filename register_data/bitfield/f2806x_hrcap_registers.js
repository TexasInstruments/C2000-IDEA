let HRCAP_REGISTERS = [
	{ name: "HCCTL", description: "HRCAP Control Register", offset: "0x0", size: "16",
		bits: [
			{ name: "SOFTRESET", description: "Soft reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "RISEINTE", description: "RISE capture interrupt enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALLINTE", description: "FALL capture interrupt enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "OVFINTE", description: "Counter overflow interrupt enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "HCCAPCLKSEL", description: "HRCAP Capture Clock Select Bit", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "HCIFR", description: "HRCAP Interrupt Flag Register", offset: "0x1", size: "16",
		bits: [
			{ name: "INT", description: "Global interrupt flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "RISE", description: "RISE capture interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALL", description: "FALL capture interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "COUNTEROVF", description: "Counter overflow interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "RISEOVF", description: "RISE interrupt overflow event flag", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HCICLR", description: "HRCAP Interrupt Clear Register", offset: "0x2", size: "16",
		bits: [
			{ name: "INT", description: "Global interrupt clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "RISE", description: "RISE capture interrupt clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALL", description: "FALL capture interrupt clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "COUNTEROVF", description: "Counter overflow interrupt clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "RISEOVF", description: "RISE interrupt overflow event clear", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HCIFRC", description: "HRCAP Interrupt Force Register", offset: "0x3", size: "16",
		bits: [
			{ name: "RISE", description: "RISE capture interrupt force", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALL", description: "FALL capture interrupt force", size: "1", shift: "2", mask: "0x4" },
			{ name: "COUNTEROVF", description: "Counter overflow interrupt force", size: "1", shift: "3", mask: "0x8" },
			{ name: "RISEOVF", description: "Rise Interrupt Overflow Event Flag Force Bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HCCOUNTER", description: "HRCAP 16-bit Counter Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "HCCAPCNTRISE0", description: "", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "HCCAPCNTFALL0", description: "", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "HCCAPCNTRISE1", description: "", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "HCCAPCNTFALL1", description: "", offset: "0x1A", size: "16",
		bits: [
		]
	},
];
module.exports = {
	hrcapRegisters: HRCAP_REGISTERS,
}
