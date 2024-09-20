let HWBIST_REGISTERS = [
	{ name: "CSTCGCR1", description: "STC Global Control Register1", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "CSTCGCR3", description: "STC Global Control Register3", offset: "0xC", size: "32",
		bits: [
			{ name: "ILS", description: "Interrupt Logging Start", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CSTCGCR4", description: "STC Global Control Register4", offset: "0x10", size: "32",
		bits: [
			{ name: "BISTGO", description: "BIST Start", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CSTCGCR5", description: "STC Global Control Register5", offset: "0x14", size: "32",
		bits: [
			{ name: "RESTART", description: "Restart Enable", size: "4", shift: "0", mask: "0xF" },
			{ name: "SOFT_RESET", description: "Soft reset to BIST controller", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CSTCGCR6", description: "STC Global Control Register6", offset: "0x18", size: "32",
		bits: [
			{ name: "COV", description: "COVERAGE", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "CSTCGCR7", description: "STC Global Control Register7", offset: "0x1C", size: "32",
		bits: [
			{ name: "MCL", description: "MAX CHAIN LENGTH", size: "8", shift: "0", mask: "0xFF" },
			{ name: "DC", description: "DEAD CYCLES", size: "4", shift: "8", mask: "0xF00" },
			{ name: "NP", description: "NUM  OF PIPELINE STAGES", size: "4", shift: "12", mask: "0xF000" },
			{ name: "PST", description: "PATTERN SET TYPE", size: "2", shift: "16", mask: "0x30000" },
			{ name: "SCD", description: "SHIFT_CLOCK_DIVISION", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "CSTCGCR8", description: "STC Global Control Register8", offset: "0x20", size: "32",
		bits: [
			{ name: "CPC", description: "COMPARE PATTERN CNT", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CSTCPCNT", description: "STC Pattern Count Register", offset: "0x24", size: "32",
		bits: [
			{ name: "PCNT_95", description: "PATTERNS FOR 95% COVERAGE", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "PCNT_99", description: "PATTERNS FOR 99% COVERAGE", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "CSTCCONFIG", description: "STC Registers Configuration Status", offset: "0x28", size: "32",
		bits: [
			{ name: "CFGDONE", description: "Configuration done", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CSTCSADDR", description: "STC ROM Start Address", offset: "0x2C", size: "32",
		bits: [
			{ name: "SAPAT", description: "PATTERN ROM Start Address", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SAMISR", description: "MISR ROM Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "CSTCTEST", description: "C28 HW BIST Test Register", offset: "0x30", size: "32",
		bits: [
			{ name: "TEST_TO", description: "Test_ Time_Out", size: "4", shift: "0", mask: "0xF" },
			{ name: "TEST_CMP_FAIL", description: "Test MISR compare fail", size: "4", shift: "4", mask: "0xF0" },
			{ name: "TEST_NMI", description: "Test_NMI", size: "4", shift: "8", mask: "0xF00" },
			{ name: "TEST", description: "TEST Bits", size: "20", shift: "12", mask: "0xFFFFF000" },
		]
	},
	{ name: "CSTCRET", description: "C28 Return PC Address", offset: "0x34", size: "32",
		bits: [
		]
	},
	{ name: "CSTCCRD", description: "C28 Context Restore Done Register", offset: "0x38", size: "32",
		bits: [
			{ name: "Restore_Done", description: "Context Restone Done", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CSTCGSTAT", description: "STC Global Status Register", offset: "0x40", size: "32",
		bits: [
			{ name: "BISTDONE", description: "HW BIST Complete", size: "1", shift: "0", mask: "0x1" },
			{ name: "MACRODONE", description: "Macro test slot Complete", size: "1", shift: "1", mask: "0x2" },
			{ name: "NMI", description: "Exit due to NMI", size: "1", shift: "2", mask: "0x4" },
			{ name: "BISTFAIL", description: "HW BIST Failure", size: "1", shift: "3", mask: "0x8" },
			{ name: "INTCMPF", description: "Intermediate Comparison Failure", size: "1", shift: "4", mask: "0x10" },
			{ name: "TOFAIL", description: "Time Out Failure", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "CSTCCPCR", description: "STC Current Pattern Count Register", offset: "0x48", size: "32",
		bits: [
			{ name: "PATCNT", description: "Current Pattern Count", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CSTCCADDR", description: "STC Current ROM Address Register", offset: "0x4C", size: "32",
		bits: [
			{ name: "PATADDR", description: "Current Pattern ROM Address", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "MISRADDR", description: "Current MISR ROM Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "CSTCMISR0", description: "MISR Result Register 0", offset: "0x50", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR1", description: "MISR Result Register 1", offset: "0x54", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR2", description: "MISR Result Register 2", offset: "0x58", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR3", description: "MISR Result Register 3", offset: "0x5C", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR4", description: "MISR Result Register 4", offset: "0x60", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR5", description: "MISR Result Register 5", offset: "0x64", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR6", description: "MISR Result Register 6", offset: "0x68", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR7", description: "MISR Result Register 7", offset: "0x6C", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR8", description: "MISR Result Register 8", offset: "0x70", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR9", description: "MISR Result Register 9", offset: "0x74", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR10", description: "MISR Result Register 10", offset: "0x78", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR11", description: "MISR Result Register 11", offset: "0x7C", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR12", description: "MISR Result Register 12", offset: "0x80", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR13", description: "MISR Result Register 13", offset: "0x84", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR14", description: "MISR Result Register 14", offset: "0x88", size: "32",
		bits: [
		]
	},
	{ name: "CSTCMISR15", description: "MISR Result Register 15", offset: "0x8C", size: "32",
		bits: [
		]
	},
];
module.exports = {
	hwbistRegisters: HWBIST_REGISTERS,
}
