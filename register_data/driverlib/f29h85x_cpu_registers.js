let CPU_REGISTERS = [
	{ name: "RTINT_STACK_DATA0", description: "(0 <= i < 128) RTINT stack Data0", offset: "(0x0 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA1", description: "(0 <= i < 128) RTINT stack Data1", offset: "(0x4 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA2", description: "(0 <= i < 128) RTINT stack Data2", offset: "(0x8 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA3", description: "(0 <= i < 128) RTINT stack Data3", offset: "(0xC + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA4", description: "(0 <= i < 128) RTINT stack Data4", offset: "(0x10 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA5", description: "(0 <= i < 128) RTINT stack Data5", offset: "(0x14 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA6", description: "(0 <= i < 128) RTINT stack Data6", offset: "(0x18 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA7", description: "(0 <= i < 128) RTINT stack Data7", offset: "(0x1C + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_DATA8", description: "(0 <= i < 128) RTINT stack Data8", offset: "(0x20 + ((i) * 64))", count: "128", size: "16",
		bits: [
		]
	},
	{ name: "RTINT_STACK_ECC0", description: "(0 <= i < 128) RTINT stack ECC0", offset: "(0x24 + ((i) * 64))", count: "128", size: "16",
		bits: [
			{ name: "RTINT_STACK_ECC0", description: "RTINT_STACK_ECC0", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RTINT_STACK_ECC1", description: "(0 <= i < 128) RTINT stack ECC1", offset: "(0x28 + ((i) * 64))", count: "128", size: "16",
		bits: [
			{ name: "RTINT_STACK_ECC1", description: "RTINT_STACK_ECC1", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RTINT_STACK_ECC2", description: "(0 <= i < 128) RTINT stack ECC2", offset: "(0x2C + ((i) * 64))", count: "128", size: "16",
		bits: [
			{ name: "RTINT_STACK_ECC2", description: "RTINT_STACK_ECC2", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RTINT_STACK_ECC3", description: "(0 <= i < 128) RTINT stack ECC3", offset: "(0x30 + ((i) * 64))", count: "128", size: "16",
		bits: [
			{ name: "RTINT_STACK_ECC3", description: "RTINT_STACK_ECC3", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SECCALL_STACK_DATA0", description: "(0 <= i < 17) SECCALL stack Data0", offset: "(0x0 + ((i) * 16))", count: "17", size: "16",
		bits: [
		]
	},
	{ name: "SECCALL_STACK_DATA1", description: "(0 <= i < 17) SECCALL stack Data1", offset: "(0x4 + ((i) * 16))", count: "17", size: "16",
		bits: [
		]
	},
	{ name: "SECCALL_STACK_DATA2", description: "(0 <= i < 17) SECCALL stack Data2", offset: "(0x8 + ((i) * 16))", count: "17", size: "16",
		bits: [
			{ name: "SECCALL_STACK_DATA2", description: "Secure call stack Data2", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SECSP0", description: "Secure Stackpointer 0", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "SECSP1", description: "Secure Stackpointer 1", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "SECSP2", description: "Secure Stackpointer 2", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "SECSP3", description: "Secure Stackpointer 3", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "SECSP4", description: "Secure Stackpointer 4", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "SECSP5", description: "Secure Stackpointer 5", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "SECSP6", description: "Secure Stackpointer 6", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "SECSP7", description: "Secure Stackpointer 7", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "PSP", description: "Protected call stack pointer", offset: "0x80", size: "16",
		bits: [
			{ name: "PSP", description: "Protected call stack pointer", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "WARNPSP", description: "Warning level register for protected call stack pointer", offset: "0x84", size: "16",
		bits: [
			{ name: "WARNPSP", description: "Warning level for protected call stack pointer", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "MAXPSP", description: "Maximum levels of protected calls supported by the HW", offset: "0x88", size: "16",
		bits: [
			{ name: "MAXPSP", description: "Maximum levels of protected calls supported by the HW", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "REVISION", description: "IP revision id register", offset: "0x8C", size: "16",
		bits: [
			{ name: "MINREV", description: "Minor Revision Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "MAJREV_REVISION", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "MAJREV_FPU64_PRESENT", description: "FPU64 Present", size: "1", shift: "11", mask: "0x800" },
			{ name: "MAJREV_TMU64_PRESENT", description: "TMU64 Present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MAJREV_CPUCONFIG", description: "CPU configuration", size: "3", shift: "13", mask: "0xE000" },
		]
	},
	{ name: "C29_REGS_LOCK", description: "Lock register", offset: "0x90", size: "16",
		bits: [
			{ name: "C29_RTINT_STACK", description: "C29 RTINT stack registers Lock", size: "1", shift: "1", mask: "0x2" },
			{ name: "C29_SECCALL_STACK", description: "C29 SECCALL stack registers Lock", size: "1", shift: "2", mask: "0x4" },
			{ name: "C29_SECURE_REGS", description: "C29 SECURE registers Lock", size: "1", shift: "3", mask: "0x8" },
			{ name: "C29_DIAG_REGS", description: "C29 DIAG registers Lock", size: "1", shift: "4", mask: "0x10" },
			{ name: "C29_SELFTEST_REGS", description: "C29 Selftest registers Lock", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "C29_REGS_COMMIT", description: "Commit register", offset: "0x94", size: "16",
		bits: [
			{ name: "C29_RTINT_STACK", description: "C29 RTINT stack registers Commit", size: "1", shift: "1", mask: "0x2" },
			{ name: "C29_SECCALL_STACK", description: "C29 SECCALL stack registers Commit", size: "1", shift: "2", mask: "0x4" },
			{ name: "C29_SECURE_REGS", description: "C29 SECURE registers Commit", size: "1", shift: "3", mask: "0x8" },
			{ name: "C29_DIAG_REGS", description: "C29 DIAG registers Commit", size: "1", shift: "4", mask: "0x10" },
			{ name: "C29_SELFTEST_REGS", description: "C29 Selftest registers Commit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "FLTEMU_CONFIG", description: "Fault emulation configuration registerr", offset: "0x0", size: "16",
		bits: [
			{ name: "ENABLE", description: "Fault emulation enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DBL_BIT_INJ_EN", description: "Double bit injection enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "KEY", description: "Write Key", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "KEY", description: "Key Value", size: "1", shift: "12", mask: "0xA500" },
		]
	},
	{ name: "FLTEMU_ACCGRPSEL", description: "Fault emulation access information group selection register", offset: "0x4", size: "16",
		bits: [
			{ name: "CTRL_GROUP_SEL", description: "CTRL group selection", size: "8", shift: "0", mask: "0xFF" },
			{ name: "DATA_GROUP_SEL", description: "DATA READ1 control information bus selection", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "FLTEMU_BITSEL", description: "Fault emulation bitsel", offset: "0x8", size: "16",
		bits: [
			{ name: "BITSEL", description: "Fault emulation bitselection", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "FLTEMU_ADDR", description: "Fault emulation access address register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "TMU_ROM_PAR_FORCE", description: "Force TMU ROM Parity error", offset: "0x10", size: "16",
		bits: [
			{ name: "TMU_ROM_PAR_FORCE", description: "Fault emulation enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "KEY", description: "Write Key", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "KEY", description: "Key Value", size: "1", shift: "12", mask: "0xA500" },
		]
	},
	{ name: "SELFTEST_DIAG_DATA0", description: "Diagnostics data register 0", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA1", description: "Diagnostics data register 1", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_DATA2", description: "Diagnostics data register 2", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "SELFTEST_DIAG_ECC", description: "Diagnostics ECC", offset: "0x20", size: "16",
		bits: [
			{ name: "SELFTEST_DIAG_ECC", description: "Self test Diagnostics ECC", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SELFTEST_DIAG_CONTROL", description: "Diagnostic test enable", offset: "0x28", size: "32",
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
	{ name: "SELFTEST_DIAG_STATUS", description: "Diagnostic status register", offset: "0x2C", size: "16",
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
	{ name: "SELFTEST_DIAG_STATUS_CLR", description: "Diagnostic status clear register", offset: "0x30", size: "16",
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
