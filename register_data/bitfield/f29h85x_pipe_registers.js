let PIPE_REGISTERS = [
	{ name: "RTINT_THRESHOLD", description: "Interrupt threshold register", offset: "0x0", size: "32",
		bits: [
			{ name: "INT_RTINT_THRESHOLD", description: "Interrupt threshold value", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "INT_GRP_MASK", description: "Interrupt group mask register", offset: "0x2", size: "32",
		bits: [
			{ name: "INT_GRP_MASK", description: "Interrupt group mask", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "GLOBAL_EN", description: "Global enable for INT and RTINT", offset: "0x4", size: "32",
		bits: [
			{ name: "ENABLE", description: "Global enable", size: "2", shift: "0", mask: "0x3" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "REVISION", description: "Reserved", offset: "0x6", size: "32",
		bits: [
			{ name: "MINREV", description: "Minor Revision Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "MAJREV", description: "Major Revision Number", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "CPU_INT_STS", description: "CPU interrupt status", offset: "0x18", size: "32",
		bits: [
			{ name: "LAST_INTSTS", description: "Type of last interrupt in-service between INT and  RTINT", size: "2", shift: "0", mask: "0x3" },
			{ name: "LAST_INT_PRIOLVL", description: "Priority level of last INT interrupt  in-service", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "LAST_RTINT_PRIOLVL", description: "Priority level of last RTINT interrupt  in-service", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "RST_VECT", description: "Reset vector register", offset: "0x1A", size: "32",
		bits: [
		]
	},
	{ name: "RST_LINK_OWNER", description: "Reset link owner register", offset: "0x1C", size: "32",
		bits: [
			{ name: "LINK_OWNER", description: "Reset vector link owner", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "NMI_STS", description: "Non Maskable Interrupt status register", offset: "0x1E", size: "32",
		bits: [
			{ name: "NMI_FLAG", description: "Interrupt active", size: "1", shift: "0", mask: "0x1" },
			{ name: "NMI_CLR", description: "NMI SW clear bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "NMI_VECT", description: "Non Maskable Interrupt vector register", offset: "0x20", size: "32",
		bits: [
		]
	},
	{ name: "NMI_LINK_OWNER", description: "Non Maskable Interrupt link owner register", offset: "0x22", size: "32",
		bits: [
			{ name: "LINK_OWNER", description: "NMI vector link owner", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "MEM_ECC_DIAG", description: "ECC configuration and diagnostics register", offset: "0x2C", size: "32",
		bits: [
			{ name: "ECC_VIEW", description: "ECC memory map enable register", size: "1", shift: "0", mask: "0x1" },
			{ name: "MEM_SIC_DIAG_EN", description: "Memory safe interconnect diagnostics enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MEM_INIT", description: "PIPE vector memory initialization register", offset: "0x2E", size: "32",
		bits: [
			{ name: "INIT", description: "Memory initialization start", size: "2", shift: "0", mask: "0x3" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MEM_INIT_STS", description: "PIPE memory initialization status register", offset: "0x30", size: "32",
		bits: [
			{ name: "INIT_STS", description: "Memory initialization status", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "INT_SEC_STS", description: "Interrupt security status register", offset: "0x32", size: "32",
		bits: [
			{ name: "SEC_FAIL_FLAG", description: "VBUSP access security error", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "INT_SEC_CLR", description: "Interrupt security clear register", offset: "0x34", size: "32",
		bits: [
			{ name: "SEC_FAIL_FLAG_CLR", description: "SEC_FAIL_FLAG bit clear field", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "RTINT_SP_L", description: "RTINT stack limit register", offset: "0x42", size: "32",
		bits: [
			{ name: "RTISP", description: "Real Time Interrupt Stack Pointer", size: "5", shift: "0", mask: "0x1F" },
			{ name: "MAXRTISP", description: "Maximum Real Time Interrupt Stack Pointer", size: "5", shift: "8", mask: "0x1F00" },
		]
	},
	{ name: "RTINT_SP_H", description: "RTINT stack limit register", offset: "0x44", size: "32",
		bits: [
			{ name: "WARNRTISP", description: "Warning Real Time Interrupt Stack Pointer", size: "5", shift: "0", mask: "0x1F" },
			{ name: "WARNRTISP_PRIO_LEVEL", description: "RTINT Stack Pointer warning priority level", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "RTISP_STS", description: "RTINT Stack pointer violation status register", offset: "0x46", size: "32",
		bits: [
			{ name: "WARNRTISP_STS", description: "RTINT Stack Pointer warning status", size: "1", shift: "0", mask: "0x1" },
			{ name: "MAXRTISP_STS", description: "RTINT Stack Pointer max breach status", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "INTSP", description: "INT stack pointer", offset: "0x48", size: "32",
		bits: [
			{ name: "INTSP", description: "Interrupt Stack Pointer", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LOCK", description: "PIPE lock register", offset: "0x5A", size: "32",
		bits: [
			{ name: "LINK_LOCK", description: "Lock bit for link owner field", size: "1", shift: "0", mask: "0x1" },
			{ name: "CONFIG_LOCK", description: "Lock bit for interrupt priority field", size: "1", shift: "1", mask: "0x2" },
			{ name: "GLOBAL_LOCK", description: "Lock bit for common config regs", size: "1", shift: "2", mask: "0x4" },
			{ name: "VECT_LOCK", description: "Lock bit for Vector memory", size: "1", shift: "3", mask: "0x8" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "COMMIT", description: "PIPE commit register", offset: "0x5C", size: "32",
		bits: [
			{ name: "LINK_COMMIT", description: "Commit bit for link fields", size: "1", shift: "0", mask: "0x1" },
			{ name: "CONFIG_COMMIT", description: "Commit bit for interrupt priority field", size: "1", shift: "1", mask: "0x2" },
			{ name: "GLOBAL_COMMIT", description: "Commit bit for common config regs", size: "1", shift: "2", mask: "0x4" },
			{ name: "VECT_COMMIT", description: "Commit bit for vector memory", size: "1", shift: "3", mask: "0x8" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "TASK_CTRL", description: "Task control register", offset: "0x66", size: "32",
		bits: [
			{ name: "ACTIVE_CONTEXT_ID", description: "Active context ID for PIPE arbitration.", size: "2", shift: "0", mask: "0x3" },
			{ name: "SUP_IGN_INTE_EN", description: "Supervisor Interrupt Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "BOOT_LINK_CTRL", description: "Boot Link control to lock out BOOT_LINK", offset: "0x68", size: "32",
		bits: [
			{ name: "BOOT_LINK_LOCK", description: "Locks the Boot Link updates to configuration registers.", size: "1", shift: "0", mask: "0x1" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "INT_VECT_MAPPING", description: "Interrupt vector mapping to post processing block for LFU support", offset: "0x6A", size: "32",
		bits: [
			{ name: "LFU_INT_VECT_MAPPING", description: "Interrupt vector mapping to PPB for LFU support", size: "2", shift: "0", mask: "0x3" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MMR_CLR", description: "PIPE MMR clear register", offset: "0x70", size: "32",
		bits: [
			{ name: "MMR_CLR", description: "PIPE MMR clear control", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "ALL_FLAG_CLR", description: "PIPE flag clear register", offset: "0x72", size: "32",
		bits: [
			{ name: "ALL_FLAG_CLR", description: "Clears the Flags for all the interrupt lines.", size: "2", shift: "0", mask: "0x3" },
			{ name: "KEY", description: "Key to enable write to lower [15:0] bit fields", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "REG_PARITY_DIAG_DATA", description: "Register parity Diagnostic data", offset: "0x7C", size: "32",
		bits: [
		]
	},
	{ name: "REG_PARITY_DIAG_PARITY", description: "Register parity Diagnostic Parity", offset: "0x82", size: "32",
		bits: [
		]
	},
	{ name: "REG_PARITY_DIAG_ASSERT", description: "Register parity Assert diagnostic", offset: "0x88", size: "32",
		bits: [
		]
	},
	{ name: "REG_PARITY_CHECK", description: "Enabling the Parity check", offset: "0x8E", size: "32",
		bits: [
		]
	},
	{ name: "REG_PARITY_READ", description: "Enabling the Parity read", offset: "0x90", size: "32",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA0", description: "Diagnostics data register 0", offset: "0x6CC2", size: "32",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA1", description: "Diagnostics data register 1", offset: "0x6CC4", size: "32",
		bits: [
			{ name: "SELFTEST_DIAG_DATA1", description: "Self test Diagnostics data 1", size: "20", shift: "0", mask: "0xFFFFF" },
		]
	},
	{ name: "SELFTEST_DIAG_ECC", description: "Diagnostics ECC", offset: "0x6CDE", size: "32",
		bits: [
			{ name: "SELFTEST_DIAG_ECC", description: "Self test Diagnostics ECC", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "SELFTEST_DIAG_CONTROL", description: "Diagnostic test enable", offset: "0x6CE4", size: "32",
		bits: [
			{ name: "DIAG_TEST_EN", description: "Diagnostic test enable", size: "4", shift: "0", mask: "0xF" },
			{ name: "DIAG_ECC_WIDTH", description: "Diagnostic ECC width", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "DIAG_DATA_WIDTH", description: "Diagnostic Data width", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SELFTEST_DIAG_STATUS", description: "Diagnostic status register", offset: "0x6CE6", size: "32",
		bits: [
			{ name: "DIAG_TEST_DONE", description: "Done self test", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIAG_TEST_FAIL", description: "Test failed", size: "1", shift: "2", mask: "0x4" },
			{ name: "DIAG_FAIL_C_ERROR", description: "Diagnostic correctable error", size: "1", shift: "3", mask: "0x8" },
			{ name: "DIAG_FAIL_UC_ERROR", description: "Diagnostic uncorrectable error", size: "1", shift: "4", mask: "0x10" },
			{ name: "DIAG_FAIL_CHECK_TYPE", description: "Failed diagnostic check type", size: "2", shift: "5", mask: "0x60" },
			{ name: "DIAG_FAIL_BIT_INDEX", description: "Error bit position", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "SELFTEST_DIAG_STATUS_CLR", description: "Diagnostic status clear register", offset: "0x6CE8", size: "32",
		bits: [
			{ name: "DIAG_TEST_DONE", description: "Clear self test done status flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIAG_TEST_FAIL", description: "Clear test failed status flags", size: "1", shift: "2", mask: "0x4" },
		]
	},
];
module.exports = {
	pipeRegisters: PIPE_REGISTERS,
}
