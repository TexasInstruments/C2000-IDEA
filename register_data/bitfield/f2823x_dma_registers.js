let DMA_REGISTERS = [
	{ name: "MODE", description: "Mode Register", offset: "0x0", size: "16",
		bits: [
			{ name: "PERINTSEL", description: "Peripheral Interrupt and Sync Select Bits (R/W):", size: "5", shift: "0", mask: "0x1F" },
			{ name: "OVRINTE", description: "Overflow Interrupt Enable (R/W):", size: "1", shift: "7", mask: "0x80" },
			{ name: "PERINTE", description: "Peripheral Interrupt Enable Bit (R/W):", size: "1", shift: "8", mask: "0x100" },
			{ name: "CHINTMODE", description: "Channel Interrupt Mode Bit (R/W):", size: "1", shift: "9", mask: "0x200" },
			{ name: "ONESHOT", description: "One Shot Mode Bit (R/W):", size: "1", shift: "10", mask: "0x400" },
			{ name: "CONTINUOUS", description: "Continous Mode Bit (R/W):", size: "1", shift: "11", mask: "0x800" },
			{ name: "SYNCE", description: "Sync Enable Bit (R/W):", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SYNCSEL", description: "Sync Select Bit (R/W):", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DATASIZE", description: "Data Size Mode Bit (R/W):", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CHINTE", description: "Channel Interrupt Enable Bit (R/W):", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CONTROL", description: "Control Register", offset: "0x1", size: "16",
		bits: [
			{ name: "RUN", description: "Run Bit (R=0/W=1)", size: "1", shift: "0", mask: "0x1" },
			{ name: "HALT", description: "Halt Bit (R=0/W=1)", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOFTRESET", description: "Soft Reset Bit (R=0/W=1)", size: "1", shift: "2", mask: "0x4" },
			{ name: "PERINTFRC", description: "Interrupt Force Bit (R=0/W=1)", size: "1", shift: "3", mask: "0x8" },
			{ name: "PERINTCLR", description: "Interrupt Clear Bit (R=0/W=1)", size: "1", shift: "4", mask: "0x10" },
			{ name: "SYNCFRC", description: "Sync Force Bit (R=0/W=1)", size: "1", shift: "5", mask: "0x20" },
			{ name: "SYNCCLR", description: "Sync Clear Bit (R=0/W=1)", size: "1", shift: "6", mask: "0x40" },
			{ name: "ERRCLR", description: "Error Clear Bit (R=0/W=1)", size: "1", shift: "7", mask: "0x80" },
			{ name: "PERINTFLG", description: "Interrupt Flag Bit (R):", size: "1", shift: "8", mask: "0x100" },
			{ name: "SYNCFLG", description: "Sync Flag Bit (R):", size: "1", shift: "9", mask: "0x200" },
			{ name: "SYNCERR", description: "Sync Error Flag Bit (R):", size: "1", shift: "10", mask: "0x400" },
			{ name: "TRANSFERSTS", description: "Transfer Status Bit (R):", size: "1", shift: "11", mask: "0x800" },
			{ name: "BURSTSTS", description: "Burst Status Bit (R):", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RUNSTS", description: "Run Status Bit (R):", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OVRFLG", description: "Overflow Flag Bit(R)", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "BURST_SIZE", description: "Burst Size Register", offset: "0x2", size: "16",
		bits: [
			{ name: "BURSTSIZE", description: "Burst transfer size", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "BURST_COUNT", description: "Burst Count Register", offset: "0x3", size: "16",
		bits: [
			{ name: "BURSTCOUNT", description: "Burst transfer size", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "SRC_BURST_STEP", description: "", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "DST_BURST_STEP", description: "", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "TRANSFER_SIZE", description: "Transfer Size Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "TRANSFER_COUNT", description: "Transfer Count Register", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "SRC_TRANSFER_STEP", description: "", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "DST_TRANSFER_STEP", description: "", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "SRC_WRAP_SIZE", description: "Source Wrap Size Register", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "SRC_WRAP_COUNT", description: "Source Wrap Count Register", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "SRC_WRAP_STEP", description: "Source Wrap Step Register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "DST_WRAP_SIZE", description: "", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "DST_WRAP_COUNT", description: "", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "DST_WRAP_STEP", description: "", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "SRC_BEG_ADDR_SHADOW", description: "", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "SRC_ADDR_SHADOW", description: "", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "SRC_BEG_ADDR_ACTIVE", description: "", offset: "0x14", size: "32",
		bits: [
		]
	},
	{ name: "SRC_ADDR_ACTIVE", description: "", offset: "0x16", size: "32",
		bits: [
		]
	},
	{ name: "DST_BEG_ADDR_SHADOW", description: "", offset: "0x18", size: "32",
		bits: [
		]
	},
	{ name: "DST_ADDR_SHADOW", description: "", offset: "0x1A", size: "32",
		bits: [
		]
	},
	{ name: "DST_BEG_ADDR_ACTIVE", description: "", offset: "0x1C", size: "32",
		bits: [
		]
	},
	{ name: "DST_ADDR_ACTIVE", description: "", offset: "0x1E", size: "32",
		bits: [
		]
	},
	{ name: "DMACTRL", description: "DMA Control Register", offset: "0x0", size: "16",
		bits: [
			{ name: "HARDRESET", description: "Hard Reset Bit (R=0/W=1)", size: "1", shift: "0", mask: "0x1" },
			{ name: "PRIORITYRESET", description: "Priority Reset Bit (R=0/W=1)", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DEBUGCTRL", description: "Debug Control Register", offset: "0x1", size: "16",
		bits: [
			{ name: "FREE", description: "Debug Mode Bit (R/W):", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PRIORITYCTRL1", description: "Priority Control 1 Register", offset: "0x4", size: "16",
		bits: [
			{ name: "CH1PRIORITY", description: "Ch1 Priority Bit (R/W):", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PRIORITYSTAT", description: "Priority Status Register", offset: "0x6", size: "16",
		bits: [
			{ name: "ACTIVESTS", description: "Active Channel Status Bits (R):", size: "3", shift: "0", mask: "0x7" },
			{ name: "ACTIVESTS_SHADOW", description: "Active Channel Status Shadow Bits (R):", size: "3", shift: "4", mask: "0x70" },
		]
	},
];
module.exports = {
	dmaRegisters: DMA_REGISTERS,
}
