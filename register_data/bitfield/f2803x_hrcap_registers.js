let HRCAP_REGISTERS = [
	{ name: "HCCTL", description: "", offset: "0x0", size: "16",
		bits: [
			{ name: "SOFTRESET", description: "Soft Reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "RISEINTE", description: "RISE Capture Interrupt Enable Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALLINTE", description: "FALL Capture Interrupt Enable Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "OVFINTE", description: "Counter Overflow Interrupt Enable Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "HCCAPCLKSEL", description: "Capture Clock Select Bit", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "HCIFR", description: "", offset: "0x1", size: "16",
		bits: [
			{ name: "INT", description: "Global Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "RISE", description: "RISE Capture Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALL", description: "FALL Capture Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "COUNTEROVF", description: "Counter Overflow Interrupt Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "RISEOVF", description: "RISE Interrupt Overflow Event Flag", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HCICLR", description: "", offset: "0x2", size: "16",
		bits: [
			{ name: "INT", description: "Global Interrupt Flag Clear Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "RISE", description: "RISE Capture Interrupt Flag Clear Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALL", description: "FALL Capture Interrupt Flag Clear Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "COUNTEROVF", description: "Counter Overflow Interrupt Flag Clear Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "RISEOVF", description: "RISE Int. Overflow Event Flag Clear Bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HCIFRC", description: "", offset: "0x3", size: "16",
		bits: [
			{ name: "RISE", description: "RISE:1;           //1    RISE Capture Interrupt Flag Force Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FALL", description: "FALL:1;           //2    FALL Capture Interrupt Flag Force Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "COUNTEROVF", description: "COUNTEROVF:1;     //3    Counter Overflow Interrupt Flag Force Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "RISEOVF", description: "RISEOVF:1;  	   //4    RISE Int. Overflow Event Flag Force Bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HCCOUNTER", description: "", offset: "0x4", size: "16",
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
