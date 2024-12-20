let NMIINTRUPT_REGISTERS = [
	{ name: "NMICFG", description: "NMI Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "NMIE", description: "Global NMI Enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "NMIFLG", description: "NMI Flag Register (SYSRsn Clear)", offset: "0x1", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMI Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "Clock Fail Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Flash/RAM/ROM Uncorrectable Error NMI Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SWERR", description: "SW Error Force NMI Flag", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "NMIFLGCLR", description: "NMI Flag Clear Register", offset: "0x2", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMIINT Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "CLOCKFAIL Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Flash/RAM/ROM Uncorrectable Error NMI Flag clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SWERR", description: "SW Error Flag Clear", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "NMIFLGFRC", description: "NMI Flag Force Register", offset: "0x3", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "CLOCKFAIL Flag Force", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Flash/RAM/ROM Uncorrectable Error NMI Flag force", size: "1", shift: "2", mask: "0x4" },
			{ name: "SWERR", description: "SW Error Flag Force", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "NMIWDCNT", description: "NMI Watchdog Counter Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "NMIWDPRD", description: "NMI Watchdog Period Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "NMISHDFLG", description: "NMI Shadow Flag Register", offset: "0x6", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "Shadow CLOCKFAIL Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Flash/RAM/ROM Uncorrectable Error NMI shadow flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SWERR", description: "Shadow SW Error Flag", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "ERRORSTS", description: "Error pin status", offset: "0x7", size: "16",
		bits: [
			{ name: "ERROR", description: "Error flag.", size: "1", shift: "0", mask: "0x1" },
			{ name: "PINSTS", description: "Error pin status.", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "ERRORSTSCLR", description: "ERRORSTS clear register", offset: "0x8", size: "16",
		bits: [
			{ name: "ERROR", description: "ERRORFLG.ERROR clear bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ERRORSTSFRC", description: "ERRORSTS force register", offset: "0x9", size: "16",
		bits: [
			{ name: "ERROR", description: "ERRORSTS.ERROR pin force.", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ERRORCTL", description: "Error pin control register", offset: "0xA", size: "16",
		bits: [
			{ name: "ERRORPOLSEL", description: "ERROR pin polarity select", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ERRORLOCK", description: "Lock register to Error pin registers.", offset: "0xB", size: "16",
		bits: [
			{ name: "ERRORCTL", description: "ERRORCTL Lock bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	nmiintruptRegisters: NMIINTRUPT_REGISTERS,
}
