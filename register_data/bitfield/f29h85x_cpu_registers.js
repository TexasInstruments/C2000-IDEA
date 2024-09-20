let CPU_REGISTERS = [
	{ name: "RTINT_STACK_DATA0", description: "RTINT stack Data0", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA1", description: "RTINT stack Data1", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA2", description: "RTINT stack Data2", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA3", description: "RTINT stack Data3", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA4", description: "RTINT stack Data4", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA5", description: "RTINT stack Data5", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA6", description: "RTINT stack Data6", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA7", description: "RTINT stack Data7", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA8", description: "RTINT stack Data8", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "RTINT_STACK_ECC0", description: "RTINT stack ECC0", offset: "0x12", size: "32",
		bits: [
			{ name: "RTINT_STACK_ECC0", description: "RTINT_STACK_ECC0", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RTINT_STACK_ECC1", description: "RTINT stack ECC1", offset: "0x14", size: "32",
		bits: [
			{ name: "RTINT_STACK_ECC1", description: "RTINT_STACK_ECC1", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RTINT_STACK_ECC2", description: "RTINT stack ECC2", offset: "0x16", size: "32",
		bits: [
			{ name: "RTINT_STACK_ECC2", description: "RTINT_STACK_ECC2", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RTINT_STACK_ECC3", description: "RTINT stack ECC3", offset: "0x18", size: "32",
		bits: [
			{ name: "RTINT_STACK_ECC3", description: "RTINT_STACK_ECC3", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SECCALL_STACK_DATA0", description: "SECCALL stack Data0", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "SECCALL_STACK_DATA1", description: "SECCALL stack Data1", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "SECCALL_STACK_DATA2", description: "SECCALL stack Data2", offset: "0x4", size: "32",
		bits: [
			{ name: "SECCALL_STACK_DATA2", description: "Secure call stack Data2", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "C29_RTINT_STACK:1", description: "1 C29 RTINT stack registers Lock", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "C29_SECCALL_STACK:1", description: "2 C29 SECCALL stack registers Lock", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "C29_SECURE_REGS:1", description: "3 C29 SECURE registers Lock", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "C29_DIAG_REGS:1", description: "4 C29 DIAG registers Lock", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "C29_SELFTEST_REGS:1", description: "5 C29 Selftest registers Lock", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "C29_RTINT_STACK:1", description: "1 C29 RTINT stack registers Commit", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "C29_SECCALL_STACK:1", description: "2 C29 SECCALL stack registers Commit", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "C29_SECURE_REGS:1", description: "3 C29 SECURE registers Commit", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "C29_DIAG_REGS:1", description: "4 C29 DIAG registers Commit", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "C29_SELFTEST_REGS:1", description: "5 C29 Selftest registers Commit", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "SECSP0", description: "Secure Stackpointer 0", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "SECSP1", description: "Secure Stackpointer 1", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "SECSP2", description: "Secure Stackpointer 2", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "SECSP3", description: "Secure Stackpointer 3", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "SECSP4", description: "Secure Stackpointer 4", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "SECSP5", description: "Secure Stackpointer 5", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "SECSP6", description: "Secure Stackpointer 6", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "SECSP7", description: "Secure Stackpointer 7", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "PSP", description: "Protected call stack pointer", offset: "0x70", size: "32",
		bits: [
			{ name: "PSP", description: "Protected call stack pointer", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "WARNPSP", description: "Warning level register for protected call stack pointer", offset: "0x72", size: "32",
		bits: [
			{ name: "WARNPSP", description: "Warning level for protected call stack pointer", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "MAXPSP", description: "Maximum levels of protected calls supported by the HW", offset: "0x74", size: "32",
		bits: [
			{ name: "MAXPSP", description: "Maximum levels of protected calls supported by the HW", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "REVISION", description: "IP revision id register", offset: "0x76", size: "32",
		bits: [
			{ name: "MINREV", description: "Minor Revision Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "MAJREV_Revision", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "MAJREV_FPU64_PRESENT", description: "FPU64 Present", size: "1", shift: "11", mask: "0x800" },
			{ name: "MAJREV_TMU64_PRESENT", description: "TMU64 Present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MAJREV_CPUCONFIG", description: "CPU configuration", size: "3", shift: "13", mask: "0xE000" },
		]
	},
	{ name: "C29_REGS_LOCK", description: "Lock register", offset: "0x78", size: "32",
		bits: [
		]
	},
	{ name: "C29_REGS_COMMIT", description: "Commit register", offset: "0x7A", size: "32",
		bits: [
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
	{ name: "TMU_ROM_PAR_FORCE", description: "Force TMU ROM Parity error", offset: "0x8", size: "32",
		bits: [
			{ name: "TMU_ROM_PAR_FORCE", description: "Fault emulation enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "KEY", description: "Write Key", size: "8", shift: "8", mask: "0xFF00" },
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
			{ name: "DIAG_MICRO_STEP_MODE", description: "Diagnostic micro step mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "DIAG_ADDITIONAL_PIPELINE_EN", description: "Additional pipeline enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "DIAG_SAFETY_SEL", description: "Diagnostic safetly selection", size: "1", shift: "6", mask: "0x40" },
			{ name: "DIAG_CHECKER_SEL", description: "ECC checker selection", size: "4", shift: "8", mask: "0xF00" },
			{ name: "DIAG_ECC_WIDTH", description: "Diagnostic ECC width", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "DIAG_DATA_WIDTH", description: "Diagnostic Data width", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SELFTEST_DIAG_STATUS", description: "Diagnostic status register", offset: "0x22", size: "32",
		bits: [
			{ name: "DIAG_MICROSTEP_DONE", description: "Done Micro step", size: "1", shift: "0", mask: "0x1" },
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
			{ name: "DIAG_MICROSTEP_DONE", description: "Clear micro step done status flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "DIAG_TEST_DONE", description: "Clear selftest done status flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIAG_TEST_FAIL", description: "Clear test failed status flags", size: "1", shift: "2", mask: "0x4" },
		]
	},
];
module.exports = {
	cpuRegisters: CPU_REGISTERS,
}
