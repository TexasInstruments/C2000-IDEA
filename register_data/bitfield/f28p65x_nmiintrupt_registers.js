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
			{ name: "REGPARITYERR", description: "Register parity error", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "HW BIST Error NMI Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "PIEVECTERR", description: "PIE Vector Fetch Error Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "SYSDBGNMI", description: "System Debug Module NMI Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RLNMI", description: "Reconfigurable Logic NMI Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPU2WDRSn", description: "CPU2 WDRSn Reset Indication Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPU2NMIWDRSn", description: "CPU2 NMIWDRSn Reset Indication Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "LSCMPERR", description: "Lockstep Compare Error", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ECATNMIn", description: "EtherCAT NMI Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CRC_FAIL", description: "BGCRC calculation failed.", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SWERR", description: "SW Error Force NMI Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "NMIFLGCLR", description: "NMI Flag Clear Register", offset: "0x2", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMI Interrupt Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "Clock Fail Interrupt Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Flash/RAM/ROM Uncorrectable Error NMI Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "REGPARITYERR", description: "Register parity error Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "HW BIST Error NMI Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "PIEVECTERR", description: "PIE Vector Fetch Error Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "SYSDBGNMI", description: "System Debug Module NMI Flag Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "RLNMI", description: "Reconfigurable Logic NMI Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPU2WDRSn", description: "CPU2 WDRSn Reset Indication Flag Clear", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPU2NMIWDRSn", description: "CPU2 NMIWDRSn Reset Indication Flag Clear", size: "1", shift: "10", mask: "0x400" },
			{ name: "LSCMPERR", description: "Lockstep Compare Error Clear", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ECATNMIn", description: "EtherCAT NMI Flag Clear", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CRC_FAIL", description: "BGCRC calculation Flag  Clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SWERR", description: "SW Error Force NMI Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "NMIFLGFRC", description: "NMI Flag Force Register", offset: "0x3", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "Clock Fail Interrupt Flag Force", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Flash/RAM/ROM Uncorrectable Error NMI Flag  Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "REGPARITYERR", description: "Register parity error Force", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "HW BIST Error NMI Flag  Force", size: "1", shift: "4", mask: "0x10" },
			{ name: "PIEVECTERR", description: "PIE Vector Fetch Error Flag Force", size: "1", shift: "6", mask: "0x40" },
			{ name: "SYSDBGNMI", description: "System Debug Module NMI Flag Force", size: "1", shift: "7", mask: "0x80" },
			{ name: "RLNMI", description: "Reconfigurable Logic NMI Flag Force", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPU2WDRSn", description: "CPU2 WDRSn Reset Indication Flag Force", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPU2NMIWDRSn", description: "CPU2 NMIWDRSn Reset Indication Flag Force", size: "1", shift: "10", mask: "0x400" },
			{ name: "LSCMPERR", description: "Lockstep Compare Error Force", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ECATNMIn", description: "EtherCAT NMI Flag Force", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CRC_FAIL", description: "BGCRC calculation Flag  Force", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SWERR", description: "SW Error Force NMI Flag Force", size: "1", shift: "15", mask: "0x8000" },
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
			{ name: "CLOCKFAIL", description: "Shadow Clock Fail Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "UNCERR", description: "Shadow Flash/RAM/ROM Uncorrectable Error NMI Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "REGPARITYERR", description: "Shadow Register parity error", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "Shadow HW BIST Error NMI Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "PIEVECTERR", description: "Shadow PIE Vector Fetch Error Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "SYSDBGNMI", description: "Shadow System Debug Module NMI Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RLNMI", description: "Shadow Reconfigurable Logic NMI Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPU2WDRSn", description: "Shadow CPU2 WDRSn Reset Indication Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPU2NMIWDRSn", description: "Shadow CPU2 NMIWDRSn Reset Indication Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "LSCMPERR", description: "ShadowLockstep Compare Error", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ECATNMIn", description: "Shadow EtherCAT NMI Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CRC_FAIL", description: "Shadow BGCRC calculation failed flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SWERR", description: "SW Error Force NMI Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ERRORSTS", description: "Error pin status (One copy of same register, readable from both CPU1 and CPU2 )", offset: "0x7", size: "16",
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
	{ name: "ERRORCTL", description: "Error pin control register (CPU2 can only read the register, CPU1 can R/W)", offset: "0xA", size: "16",
		bits: [
			{ name: "ERRORPOLSEL", description: "ERROR pin polarity select", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ERRORLOCK", description: "Lock register to Error pin registers. (Available only for CPU1)", offset: "0xB", size: "16",
		bits: [
			{ name: "ERRORCTL", description: "ERRORCTL Lock bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	nmiintruptRegisters: NMIINTRUPT_REGISTERS,
}
