let RTDMA_REGISTERS = [
	{ name: "DMACTRL", description: "DMA Control Register", offset: "0x0", size: "32",
		bits: [
			{ name: "HARDRESET", description: "Hard Reset Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "PRIORITYRESET", description: "Priority Reset Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "PRIORITYSEL", description: "The priority select bit", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "DEBUGCTRL", description: "Debug Control Register", offset: "0x2", size: "32",
		bits: [
			{ name: "FREE", description: "Debug Mode Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "REVISION", description: "RTDMA Revision Control Register", offset: "0x4", size: "32",
		bits: [
			{ name: "TYPE", description: "RTDMA Type", size: "8", shift: "0", mask: "0xFF" },
			{ name: "REV", description: "RTDMA Revision", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "SWPRI1", description: "Software Priority Configuration Register 1", offset: "0xE", size: "32",
		bits: [
			{ name: "CH1PRIORITY", description: "Ch1 Priority Configuration", size: "4", shift: "0", mask: "0xF" },
			{ name: "CH2PRIORITY", description: "Ch2 Priority Configuration", size: "4", shift: "4", mask: "0xF0" },
			{ name: "CH3PRIORITY", description: "Ch3 Priority Configuration", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CH4PRIORITY", description: "Ch4 Priority Configuration", size: "4", shift: "12", mask: "0xF000" },
			{ name: "CH5PRIORITY", description: "Ch5 Priority Configuration", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "CH6PRIORITY", description: "Ch6 Priority Configuration", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "CH7PRIORITY", description: "Ch7 Priority Configuration", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "CH8PRIORITY", description: "Ch8 Priority Configuration", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "SWPRI2", description: "Software Priority Configuration Register 2", offset: "0x10", size: "32",
		bits: [
			{ name: "CH9PRIORITY", description: "Ch9 Priority Configuration", size: "4", shift: "0", mask: "0xF" },
			{ name: "CH10PRIORITY", description: "Ch10 Priority Configuration", size: "4", shift: "4", mask: "0xF0" },
		]
	},
	{ name: "PRIORITYSTAT", description: "Priority Status Register", offset: "0x12", size: "32",
		bits: [
			{ name: "ACTIVESTS", description: "Active Channel Status Bits", size: "5", shift: "0", mask: "0x1F" },
			{ name: "ACTIVESTS_SHADOW", description: "Active Channel Status Shadow Bits", size: "5", shift: "8", mask: "0x1F00" },
		]
	},
	{ name: "DMACFG_LOCK", description: "Channel Configuration Temporary Lock", offset: "0x34", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DMACFG_COMMIT", description: "Channel Configuration Permanent Commit", offset: "0x36", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR_CHMASK", description: "MPU Region Configuration", offset: "0x0", size: "32",
		bits: [
			{ name: "CH1MASK", description: "MPU region channel mask Channel 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "CH2MASK", description: "MPU region channel mask Channel 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "CH3MASK", description: "MPU region channel mask Channel 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "CH4MASK", description: "MPU region channel mask Channel 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "CH5MASK", description: "MPU region channel mask Channel 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "CH6MASK", description: "MPU region channel mask Channel 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "CH7MASK", description: "MPU region channel mask Channel 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "CH8MASK", description: "MPU region channel mask Channel 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "CH9MASK", description: "MPU region channel mask Channel 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "CH10MASK", description: "MPU region channel mask Channel 10", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "MPUR_START", description: "MPU Region Start Address", offset: "0x2", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR_END", description: "MPU Region End Address", offset: "0x4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR_LOCK", description: "MPU Temporary Lock", offset: "0x6", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR_COMMIT", description: "MPU Permanent Commit", offset: "0x8", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR_ACCESS", description: "MPU Region R/W Access Permissions", offset: "0xA", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUCTRL", description: "MPU Control Register", offset: "0x600", size: "32",
		bits: [
			{ name: "MPUEN", description: "Enable MPU function", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUCFG_LOCK", description: "Channel Configuration Temporary Lock", offset: "0x61E", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUCFG_COMMIT", description: "Channel Configuration Permanent Commit", offset: "0x620", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MODE", description: "Mode Register", offset: "0x0", size: "32",
		bits: [
			{ name: "PERINTSEL", description: "Peripheral Interrupt and Sync Select", size: "8", shift: "0", mask: "0xFF" },
			{ name: "OVRINTE", description: "Overflow Interrupt Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "PERINTE", description: "Peripheral Interrupt Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "CHINTMODE", description: "Channel Interrupt Mode", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ONESHOT", description: "One Shot Mode Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CONTINUOUS", description: "Continuous Mode Bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "DATASIZE", description: "Data Size Mode Bit", size: "2", shift: "17", mask: "0x60000" },
			{ name: "CHINTE", description: "Channel Interrupt Enable Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "WRT_DATASIZE", description: "Write Data Size Mode Bit", size: "2", shift: "20", mask: "0x300000" },
		]
	},
	{ name: "CONTROL", description: "Control Register", offset: "0x2", size: "32",
		bits: [
			{ name: "RUN", description: "Run Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "HALT", description: "Halt Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOFTRESET", description: "Soft Reset Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "PERINTFRC", description: "Interrupt Force Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "PERINTCLR", description: "Interrupt Clear Bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "ERRCLR", description: "Error Clear Bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "PERINTFLG", description: "Interrupt Flag Bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "TRANSFERSTS", description: "Transfer Status Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "BURSTSTS", description: "Burst Status Bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RUNSTS", description: "Run Status Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OVRFLG", description: "Overflow Flag Bit", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "BURST_SIZE", description: "Burst Size Register", offset: "0x4", size: "32",
		bits: [
			{ name: "BURSTSIZE", description: "Burst Transfer Size", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "BURST_COUNT", description: "Burst Count Register", offset: "0x6", size: "32",
		bits: [
			{ name: "BURSTCOUNT", description: "Burst Transfer Size", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SRC_BURST_STEP", description: "Source Burst Step Register", offset: "0x8", size: "32",
		bits: [
			{ name: "SRCBURSTSTEP", description: "Source post-increment/decrement step size of a burst", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DST_BURST_STEP", description: "Destination Burst Step Register", offset: "0xA", size: "32",
		bits: [
			{ name: "DSTBURSTSTEP", description: "Destination post-increment/decrement step size of a burst", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TRANSFER_SIZE", description: "Transfer Size Register", offset: "0xC", size: "32",
		bits: [
			{ name: "TRANSFERSIZE", description: "These bits specify the number of bursts to transfer:", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TRANSFER_COUNT", description: "Transfer Count Register", offset: "0xE", size: "32",
		bits: [
			{ name: "TRANSFERCOUNT", description: "These bits specify the current transfer counter value:", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "SRC_TRANSFER_STEP", description: "Source Transfer Step Register", offset: "0x10", size: "32",
		bits: [
			{ name: "SRCTRANSFERSTEP", description: "Source post-increment/decrement step size of a transfer", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DST_TRANSFER_STEP", description: "Destination Transfer Step Register", offset: "0x12", size: "32",
		bits: [
			{ name: "DSTTRANSFERSTEP", description: "Destination post-increment/decrement step size of a transfer", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "SRC_WRAP_SIZE", description: "Source Wrap Size Register", offset: "0x14", size: "32",
		bits: [
			{ name: "WRAPSIZE", description: "Number of bursts to transfer before wrapping", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "SRC_WRAP_COUNT", description: "Source Wrap Count Register", offset: "0x16", size: "32",
		bits: [
			{ name: "WRAPSIZE", description: "These bits indicate the current wrap counter value:", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "SRC_WRAP_STEP", description: "Source Wrap Step Register", offset: "0x18", size: "32",
		bits: [
			{ name: "WRAPSTEP", description: "Source post-increment/decrement step size for a wrap", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DST_WRAP_SIZE", description: "Destination Wrap Size Register", offset: "0x1A", size: "32",
		bits: [
			{ name: "WRAPSIZE", description: "Number of bursts to transfer before wrapping", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DST_WRAP_COUNT", description: "Destination Wrap Count Register", offset: "0x1C", size: "32",
		bits: [
			{ name: "WRAPSIZE", description: "These bits indicate the current wrap counter value:", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "DST_WRAP_STEP", description: "Destination Wrap Step Register", offset: "0x1E", size: "32",
		bits: [
			{ name: "WRAPSTEP", description: "Destination post-increment/decrement step size for a wrap", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "SRC_BEG_ADDR_SHADOW", description: "Source Begin Address Shadow Register", offset: "0x20", size: "32",
		bits: [
		]
	},
	{ name: "SRC_ADDR_SHADOW", description: "Source Address Shadow Register", offset: "0x22", size: "32",
		bits: [
		]
	},
	{ name: "SRC_BEG_ADDR_ACTIVE", description: "Source Begin Address Active Register", offset: "0x24", size: "32",
		bits: [
		]
	},
	{ name: "SRC_ADDR_ACTIVE", description: "Source Address Active Register", offset: "0x26", size: "32",
		bits: [
		]
	},
	{ name: "DST_BEG_ADDR_SHADOW", description: "Destination Begin Address Shadow Register", offset: "0x28", size: "32",
		bits: [
		]
	},
	{ name: "DST_ADDR_SHADOW", description: "Destination Address Shadow Register", offset: "0x2A", size: "32",
		bits: [
		]
	},
	{ name: "DST_BEG_ADDR_ACTIVE", description: "Destination Begin Address Active Register", offset: "0x2C", size: "32",
		bits: [
		]
	},
	{ name: "DST_ADDR_ACTIVE", description: "Destination Address Active Register", offset: "0x2E", size: "32",
		bits: [
		]
	},
	{ name: "CHSECLAT1", description: "Channel Security Details Latch Register", offset: "0x50", size: "32",
		bits: [
			{ name: "ZONE", description: "Channel owner zone", size: "4", shift: "0", mask: "0xF" },
			{ name: "LINK", description: "Channel owner Link", size: "4", shift: "8", mask: "0xF00" },
			{ name: "APILINK", description: "Channel owner Clink", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "STACK", description: "Channel owner Stack", size: "4", shift: "24", mask: "0xF000000" },
		]
	},
	{ name: "CHSECLAT2", description: "Channel Security Details Latch Register", offset: "0x52", size: "32",
		bits: [
			{ name: "SECURE", description: "Channel SECURE Information", size: "1", shift: "0", mask: "0x1" },
			{ name: "PRIV", description: "Channel PRIV information", size: "2", shift: "8", mask: "0x300" },
			{ name: "PRIVID", description: "Channel PRIVID information", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "BURST_INTF_CTRL", description: "Burst Interface Control Register", offset: "0x6C", size: "32",
		bits: [
			{ name: "BURSTCTRL", description: "Control Burst Interface operation", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "CHCFG_LOCK", description: "Channel Configuration Temporary Lock", offset: "0xCA", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CHCFG_COMMIT", description: "Channel Configuration Permanent Commit", offset: "0xCC", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FLTEMU_CONFIG", description: "Fault emulation configuration registerr", offset: "0x0", size: "32",
		bits: [
			{ name: "ENABLE", description: "Fault emulation enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DBL_BIT_INJ_EN", description: "Double bit injection enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "KEY", description: "Write Key", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "FLTEMU_ACCGRPSEL", description: "Fault emulation access information group selection register", offset: "0x2", size: "32",
		bits: [
			{ name: "CTRL_GROUP_SEL", description: "CTRL group selection", size: "8", shift: "0", mask: "0xFF" },
			{ name: "DATA_GROUP_SEL", description: "DATA READ1 control information bus selection", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "FLTEMU_BITSEL", description: "Fault emulation bitsel", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "FLTEMU_ADDR", description: "Fault emulation access address register", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA0", description: "Diagnostics data register 0", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA1", description: "Diagnostics data register 1", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA2", description: "Diagnostics data register 2", offset: "0x4", size: "32",
		bits: [
			{ name: "SELFTEST_DIAG_DATA2", description: "Self test Diagnostics data 2", size: "17", shift: "0", mask: "0x1FFFF" },
		]
	},
	{ name: "SELFTEST_DIAG_ECC", description: "Diagnostics ECC", offset: "0x1A", size: "32",
		bits: [
			{ name: "SELFTEST_DIAG_ECC", description: "Self test Diagnostics ECC", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SELFTEST_DIAG_CONTROL", description: "Diagnostic test enable", offset: "0x20", size: "32",
		bits: [
			{ name: "DIAG_TEST_EN", description: "Diagnostic test enable", size: "4", shift: "0", mask: "0xF" },
			{ name: "DIAG_SAFETY_SEL", description: "Diagnostic safety selection", size: "1", shift: "6", mask: "0x40" },
			{ name: "DIAG_CHECKER_SEL", description: "ECC checker selection", size: "2", shift: "8", mask: "0x300" },
			{ name: "DIAG_ECC_WIDTH", description: "Diagnostic ECC width", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "DIAG_DATA_WIDTH", description: "Diagnostic Data width", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SELFTEST_DIAG_STATUS", description: "Diagnostic status register", offset: "0x22", size: "32",
		bits: [
			{ name: "DIAG_TEST_DONE", description: "Done self test", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIAG_TEST_FAIL", description: "Test failed", size: "1", shift: "2", mask: "0x4" },
			{ name: "DIAG_FAIL_C_ERROR", description: "Diagnostic correctable error", size: "1", shift: "3", mask: "0x8" },
			{ name: "DIAG_FAIL_UC_ERROR", description: "Diagnostic uncorrectable error", size: "1", shift: "4", mask: "0x10" },
			{ name: "DIAG_FAIL_CHECK_TYPE", description: "Failed diagnostic check type", size: "2", shift: "5", mask: "0x60" },
			{ name: "DIAG_FAIL_BIT_INDEX", description: "Error bit position", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "SELFTEST_DIAG_STATUS_CLR", description: "Diagnostic status clear register", offset: "0x24", size: "32",
		bits: [
			{ name: "DIAG_TEST_DONE", description: "Clear self test done status flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIAG_TEST_FAIL", description: "Clear test failed status flags", size: "1", shift: "2", mask: "0x4" },
		]
	},
];
module.exports = {
	rtdmaRegisters: RTDMA_REGISTERS,
}
