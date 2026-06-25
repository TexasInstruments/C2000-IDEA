let DCC_REGISTERS = [
	{ name: "DCCGCTRL", description: "Starts / stops the counters. Clears the error signal.", offset: "0x0", size: "32",
		bits: [
			{ name: "DCCENA", description: "DCC Enable", size: "4", shift: "0", mask: "0xF" },
			{ name: "ERRENA", description: "Error Enable", size: "4", shift: "4", mask: "0xF0" },
			{ name: "SINGLESHOT", description: "Single-Shot Enable", size: "4", shift: "8", mask: "0xF00" },
			{ name: "DONEENA", description: "DONE Enable", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "DCCCNTSEED0", description: "Seed value for the counter attached to Clock Source 0.", offset: "0x6", size: "32",
		bits: [
			{ name: "COUNTSEED0", description: "Seed Value for Counter 0", size: "20", shift: "0", mask: "0xFFFFF" },
		]
	},
	{ name: "DCCVALIDSEED0", description: "Seed value for the timeout counter attached to Clock Source 0.", offset: "0x8", size: "32",
		bits: [
			{ name: "VALIDSEED", description: "Seed Value for Valid Duration Counter 0", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DCCCNTSEED1", description: "Seed value for the counter attached to Clock Source 1.", offset: "0xA", size: "32",
		bits: [
			{ name: "COUNTSEED1", description: "Seed Value for Counter 1", size: "20", shift: "0", mask: "0xFFFFF" },
		]
	},
	{ name: "DCCSTATUS", description: "Specifies the status of the DCC Module.", offset: "0xC", size: "32",
		bits: [
			{ name: "ERR", description: "Error Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "DONE", description: "Single-Shot Done Flag", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DCCCNT0", description: "Value of the counter attached to Clock Source 0.", offset: "0xE", size: "32",
		bits: [
			{ name: "COUNT0", description: "Current Value of Counter 0", size: "20", shift: "0", mask: "0xFFFFF" },
		]
	},
	{ name: "DCCVALID0", description: "Value of the valid counter attached to Clock Source 0.", offset: "0x10", size: "32",
		bits: [
			{ name: "VALID0", description: "Current Value of Valid 0", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DCCCNT1", description: "Value of the counter attached to Clock Source 1.", offset: "0x12", size: "32",
		bits: [
			{ name: "COUNT1", description: "Current Value of Counter 1", size: "20", shift: "0", mask: "0xFFFFF" },
		]
	},
	{ name: "DCCCLKSRC1", description: "Selects the clock source for Counter 1.", offset: "0x14", size: "32",
		bits: [
			{ name: "CLKSRC1", description: "Clock Source Select for Counter 1", size: "6", shift: "0", mask: "0x3F" },
			{ name: "KEY", description: "Enables or Disables Clock Source Selection for COUNT1", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "DCCCLKSRC0", description: "Selects the clock source for Counter 0.", offset: "0x16", size: "32",
		bits: [
			{ name: "CLKSRC0", description: "Clock Source Select for Counter 0", size: "5", shift: "0", mask: "0x1F" },
			{ name: "KEY", description: "Enables or Disables Clock Source Selection for COUNT0", size: "4", shift: "12", mask: "0xF000" },
		]
	},
];
module.exports = {
	dccRegisters: DCC_REGISTERS,
}
