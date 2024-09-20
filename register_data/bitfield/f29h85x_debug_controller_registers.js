let DEBUG_CONTROLLER_REGISTERS = [
	{ name: "DBG_CAP", description: "Debug Capability", offset: "0x0", size: "32",
		bits: [
			{ name: "REV_MIN", description: "Minor Revision", size: "4", shift: "0", mask: "0xF" },
			{ name: "REV_MAX", description: "Major Revision", size: "4", shift: "4", mask: "0xF0" },
			{ name: "TRIG_CHNS", description: "Number of Trigger Channels", size: "2", shift: "20", mask: "0x300000" },
			{ name: "TRIG_INPUT", description: "Number of Input Triggers", size: "1", shift: "22", mask: "0x400000" },
			{ name: "TRIG_OUTPUT", description: "Number of Output Triggers", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SYS_EXE_REQ", description: "IDLE control", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "DBG_RESET_SUP", description: "CPU Reset support", size: "1", shift: "25", mask: "0x2000000" },
		]
	},
	{ name: "DBG_PID", description: "Debug Part ID", offset: "0x2", size: "32",
		bits: [
			{ name: "MINOR", description: "Minor Revision", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "Custom Field", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "Major Revision", size: "3", shift: "8", mask: "0x700" },
			{ name: "RTL", description: "RTL Revision", size: "5", shift: "11", mask: "0xF800" },
			{ name: "FUNC", description: "Functional Group", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "BUSINESS_UNIT", description: "Business Unit", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "SCHEME", description: "Scheme Version", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "DBG_CONNECT", description: "Debug Connect", offset: "0x4", size: "32",
		bits: [
			{ name: "CONNECTED", description: "Debug Connected", size: "2", shift: "0", mask: "0x3" },
			{ name: "CONNECT_PATTERN", description: "Write Key pattern", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "DBG_CNTL0", description: "Debug Execution Control 0", offset: "0x6", size: "32",
		bits: [
			{ name: "EXE_CMD", description: "Execution Command", size: "3", shift: "0", mask: "0x7" },
			{ name: "EXE_CMD_LD", description: "Load Enable for Execution Command", size: "1", shift: "3", mask: "0x8" },
			{ name: "EXE_MODE", description: "Execution Mode", size: "2", shift: "4", mask: "0x30" },
			{ name: "EXE_IGNORE_HPI", description: "Ignore HPI", size: "1", shift: "6", mask: "0x40" },
			{ name: "EXE_IGNORE_DBGM", description: "Ignore DBGM", size: "1", shift: "7", mask: "0x80" },
			{ name: "EXE_SWBP_EN", description: "Enable Softaware Breakpoints", size: "1", shift: "8", mask: "0x100" },
			{ name: "EXE_HWBP_EN", description: "Enable Hardware Breakpoints", size: "1", shift: "9", mask: "0x200" },
			{ name: "EXT_DBG_EN", description: "Enable External Triggers", size: "1", shift: "10", mask: "0x400" },
			{ name: "EXT_HALT_EN", description: "Enable External Trigger  HALTs", size: "1", shift: "11", mask: "0x800" },
			{ name: "EXT_RUN_EN", description: "Enable Synchronous RUN", size: "1", shift: "12", mask: "0x1000" },
			{ name: "EXE_D_INT", description: "Debug Interrupts", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EXE_D_NMI", description: "Debug NMI", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GUI_PC_MOD_RESTART", description: "Debugger Restart PC modification", size: "1", shift: "15", mask: "0x8000" },
			{ name: "DBG_IDLE_WAKEUP", description: "IDLE wakeup request", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "DBG_CNTL1", description: "Debug Execution Control 1", offset: "0x8", size: "32",
		bits: [
			{ name: "FORCE_CPU_RESET", description: "Force CPU Reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPU_RST_LD", description: "Load Enable for FORCE_CPU_RESET", size: "1", shift: "1", mask: "0x2" },
			{ name: "FORCE_READY", description: "Force CPU pipeline ready", size: "1", shift: "2", mask: "0x4" },
			{ name: "FORCE_READY_LD", description: "Load Enable for FORCE_READY", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU_BLOCK_PIN_RESET", description: "Block CPU Pin Reset", size: "1", shift: "4", mask: "0x10" },
			{ name: "CPU_BLOCK_RST_LD", description: "Load enable for CPU_BLOCK_PIN_RESET", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "DBG_STAT", description: "Debug Status", offset: "0xA", size: "32",
		bits: [
			{ name: "EXE_STAT", description: "Execution Status", size: "2", shift: "0", mask: "0x3" },
			{ name: "RESTART", description: "Execution Resumed Status bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "HALT_IN_E7", description: "HALT condition seen in E7 pipeline phase", size: "1", shift: "6", mask: "0x40" },
			{ name: "HALT_SWBP", description: "HALTed due to Software breakpoint", size: "1", shift: "8", mask: "0x100" },
			{ name: "HALT_HWBP", description: "HALTed due to Hardware breakpoint", size: "1", shift: "9", mask: "0x200" },
			{ name: "HALT_CPU_RESET", description: "Reserved", size: "1", shift: "10", mask: "0x400" },
			{ name: "HALT_STEP", description: "HALTed due to Single Step operation", size: "1", shift: "11", mask: "0x800" },
			{ name: "HALT_USER", description: "HALTed due to user request", size: "1", shift: "12", mask: "0x1000" },
			{ name: "HALT_EXT_HALT", description: "HALTed due to external trigger", size: "1", shift: "13", mask: "0x2000" },
			{ name: "HALT_WP", description: "HALTed due to a Watchpoint", size: "1", shift: "14", mask: "0x4000" },
			{ name: "HALT_IN_IDS", description: "Reserved", size: "1", shift: "15", mask: "0x8000" },
			{ name: "STAT_PRIV_DBGM", description: "DBGM status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "STAT_PRIV_HPI", description: "HPI status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "STAT_EXT_RUN_SEEN", description: "External RUN request seen", size: "1", shift: "18", mask: "0x40000" },
			{ name: "STAT_EXT_HALT_SEEN", description: "External HALT request seen", size: "1", shift: "19", mask: "0x80000" },
			{ name: "STAT_PIPE_READY", description: "CPU Pipeline advancement status", size: "1", shift: "20", mask: "0x100000" },
			{ name: "STAT_CLK_SEEN", description: "CPU has seen a Clock", size: "1", shift: "21", mask: "0x200000" },
			{ name: "RESET_OCC", description: "CPU has seen a Reset", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RESET_ACT", description: "CPU reset active", size: "1", shift: "23", mask: "0x800000" },
			{ name: "FAULT_SEEN", description: "CPU entered a FAULT state", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "IDLE_IN_R1", description: "IDLE instruction in R1 pipeline phase", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "IDLE_IN_E7", description: "IDLE instruction in E7 pipeline phase", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
	{ name: "DBG_MEM_CNTL", description: "Debug  Access control", offset: "0xC", size: "32",
		bits: [
			{ name: "MEM_RW", description: "Read Write Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "MEM_ADDR_INC", description: "Address Increment mode", size: "1", shift: "1", mask: "0x2" },
			{ name: "MEM_IGNORE_DBGM", description: "Ignore DBGM for memory access", size: "1", shift: "2", mask: "0x4" },
			{ name: "MEM_IGNORE_HPI", description: "Ignore HPI for memory access", size: "1", shift: "3", mask: "0x8" },
			{ name: "ACC_TYPE", description: "Debug Access Type", size: "3", shift: "4", mask: "0x70" },
			{ name: "MEM_ACC_SIZE", description: "Debug access size", size: "3", shift: "8", mask: "0x700" },
			{ name: "DBG_ACCESS_EN", description: "Enable Debug Access", size: "1", shift: "11", mask: "0x800" },
			{ name: "LOAD_MEMACC_FIELDS", description: "Load enable Debug Access fields", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CLR_MEM_STATUS", description: "Clear Debug access fault status bits", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MEM_ACC_STATUS", description: "Debug access status", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "MEM_ACC_BUS_ERROR", description: "Transaction fault on access", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "MEM_ACC_SEC_ERROR", description: "Security violation on access", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "MEM_ACC_SEQUENCE_ERROR", description: "Access Sequence violation during bulk access", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
	{ name: "DBG_MEM_ADDR0", description: "Debyg Acess Address", offset: "0x32", size: "32",
		bits: [
		]
	},
	{ name: "DBG_MEM_DATA0", description: "Debug Access Data 0", offset: "0x38", size: "32",
		bits: [
		]
	},
	{ name: "DBG_MEM_DATA1", description: "Debug Access Data 1", offset: "0x3A", size: "32",
		bits: [
		]
	},
	{ name: "DBG_VIS_READ_P0", description: "Debug Visibility Read Port 0", offset: "0x3C", size: "32",
		bits: [
			{ name: "D2_FSM", description: "D2 FSM states", size: "6", shift: "0", mask: "0x3F" },
			{ name: "DELAY_DISC_REQ", description: "Delay discontinuity request", size: "1", shift: "6", mask: "0x40" },
			{ name: "EXE_FAULT", description: "Fault from exe unit", size: "1", shift: "7", mask: "0x80" },
			{ name: "FETCH_FSM", description: "Fetch FSM states", size: "3", shift: "8", mask: "0x700" },
			{ name: "D2_ZONE", description: "D2 Zone ID", size: "2", shift: "11", mask: "0x1800" },
			{ name: "D2_STACK", description: "D2 Stack ID", size: "3", shift: "13", mask: "0xE000" },
			{ name: "D2_LINK", description: "D2 Link ID", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "D2_READY", description: "D2 ready", size: "1", shift: "20", mask: "0x100000" },
			{ name: "R1_READY", description: "R1 ready", size: "1", shift: "21", mask: "0x200000" },
			{ name: "MEMRD1_MPROT_BUFF_ACC", description: "Memread1 memory protection buffer access", size: "1", shift: "22", mask: "0x400000" },
			{ name: "MEMRD2_MPROT_BUFF_ACC", description: "Memread2 memory protection buffer access", size: "1", shift: "23", mask: "0x800000" },
			{ name: "VIS_PORT0", description: "Debug Visibility Port0", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "DBG_VIS_READ_P1", description: "Debug Visibility Read Port 1", offset: "0x3E", size: "32",
		bits: [
		]
	},
	{ name: "DBG_VIS_CLR_P1", description: "Debug Visibility Port 1 Clear", offset: "0x40", size: "32",
		bits: [
		]
	},
];
module.exports = {
	debug_controllerRegisters: DEBUG_CONTROLLER_REGISTERS,
}
