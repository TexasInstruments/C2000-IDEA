let TMU_REGISTERS = [
	{ name: "REVISION", description: "IP revision id register", offset: "0x0", size: "32",
		bits: [
			{ name: "MINOR", description: "Minor Revision Number", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "Custom Module Number", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "FUNC", description: "Functional Release Number", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "SCHEME", description: "Defines Scheme for Module", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "SINPUF32_R0", description: "Updates operand 1 for SINPUF32 operation", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R1", description: "Updates operand 1 for SINPUF32 operation", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R2", description: "Updates operand 1 for SINPUF32 operation", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R3", description: "Updates operand 1 for SINPUF32 operation", offset: "0x2C", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R4", description: "Updates operand 1 for SINPUF32 operation", offset: "0x30", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R5", description: "Updates operand 1 for SINPUF32 operation", offset: "0x34", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R6", description: "Updates operand 1 for SINPUF32 operation", offset: "0x38", size: "16",
		bits: [
		]
	},
	{ name: "SINPUF32_R7", description: "Updates operand 1 for SINPUF32 operation", offset: "0x3C", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R0", description: "Updates operand 1 for COSPUF32 operation", offset: "0x40", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R1", description: "Updates operand 1 for COSPUF32 operation", offset: "0x44", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R2", description: "Updates operand 1 for COSPUF32 operation", offset: "0x48", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R3", description: "Updates operand 1 for COSPUF32 operation", offset: "0x4C", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R4", description: "Updates operand 1 for COSPUF32 operation", offset: "0x50", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R5", description: "Updates operand 1 for COSPUF32 operation", offset: "0x54", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R6", description: "Updates operand 1 for COSPUF32 operation", offset: "0x58", size: "16",
		bits: [
		]
	},
	{ name: "COSPUF32_R7", description: "Updates operand 1 for COSPUF32 operation", offset: "0x5C", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R0", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x60", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R1", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x64", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R2", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x68", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R3", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x6C", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R4", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x70", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R5", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x74", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R6", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x78", size: "16",
		bits: [
		]
	},
	{ name: "ATANPUF32_R7", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x7C", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R0", description: "Updates operand 1 for SQRTF32 operation", offset: "0x80", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R1", description: "Updates operand 1 for SQRTF32 operation", offset: "0x84", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R2", description: "Updates operand 1 for SQRTF32 operation", offset: "0x88", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R3", description: "Updates operand 1 for SQRTF32 operation", offset: "0x8C", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R4", description: "Updates operand 1 for SQRTF32 operation", offset: "0x90", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R5", description: "Updates operand 1 for SQRTF32 operation", offset: "0x94", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R6", description: "Updates operand 1 for SQRTF32 operation", offset: "0x98", size: "16",
		bits: [
		]
	},
	{ name: "SQRTF32_R7", description: "Updates operand 1 for SQRTF32 operation", offset: "0x9C", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R0", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xA0", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R1", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xA4", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R2", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xA8", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R3", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xAC", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R4", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xB0", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R5", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xB4", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R6", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xB8", size: "16",
		bits: [
		]
	},
	{ name: "IEXP2F32_R7", description: "Updates operand 1 for IEXP2F32 operation", offset: "0xBC", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R0", description: "Updates operand 1 for LOG2F32 operation", offset: "0xC0", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R1", description: "Updates operand 1 for LOG2F32 operation", offset: "0xC4", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R2", description: "Updates operand 1 for LOG2F32 operation", offset: "0xC8", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R3", description: "Updates operand 1 for LOG2F32 operation", offset: "0xCC", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R4", description: "Updates operand 1 for LOG2F32 operation", offset: "0xD0", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R5", description: "Updates operand 1 for LOG2F32 operation", offset: "0xD4", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R6", description: "Updates operand 1 for LOG2F32 operation", offset: "0xD8", size: "16",
		bits: [
		]
	},
	{ name: "LOG2F32_R7", description: "Updates operand 1 for LOG2F32 operation", offset: "0xDC", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R0_R1", description: "Updates operand 1 for QUADF32 operation", offset: "0xE0", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R1_R2", description: "Updates operand 1 for QUADF32 operation", offset: "0xE4", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R2_R3", description: "Updates operand 1 for QUADF32 operation", offset: "0xE8", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R3_R4", description: "Updates operand 1 for QUADF32 operation", offset: "0xEC", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R4_R5", description: "Updates operand 1 for QUADF32 operation", offset: "0xF0", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R5_R6", description: "Updates operand 1 for QUADF32 operation", offset: "0xF4", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_X_R6_R7", description: "Updates operand 1 for QUADF32 operation", offset: "0xF8", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R0", description: "Updates operand 1 for DIVF32 operation", offset: "0x100", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R1", description: "Updates operand 1 for DIVF32 operation", offset: "0x104", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R2", description: "Updates operand 1 for DIVF32 operation", offset: "0x108", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R3", description: "Updates operand 1 for DIVF32 operation", offset: "0x10C", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R4", description: "Updates operand 1 for DIVF32 operation", offset: "0x110", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R5", description: "Updates operand 1 for DIVF32 operation", offset: "0x114", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R6", description: "Updates operand 1 for DIVF32 operation", offset: "0x118", size: "16",
		bits: [
		]
	},
	{ name: "DIVF32_N_R7", description: "Updates operand 1 for DIVF32 operation", offset: "0x11C", size: "16",
		bits: [
		]
	},
	{ name: "QUADF32_DIVF32_OP2", description: "Updates operand 2 for QUADF32 and DIVF32 operation", offset: "0x120", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R0", description: "R0 result register", offset: "0x140", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R1", description: "R1 result register", offset: "0x144", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R2", description: "R2 result register", offset: "0x148", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R3", description: "R3 result register", offset: "0x14C", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R4", description: "R4 result register", offset: "0x150", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R5", description: "R5 result register", offset: "0x154", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R6", description: "R6 result register", offset: "0x158", size: "16",
		bits: [
		]
	},
	{ name: "RESULT_R7", description: "R7 result register", offset: "0x15C", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R0", description: "Context save of R0 result register", offset: "0x160", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R1", description: "Context save of R1 result register", offset: "0x164", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R2", description: "Context save of R2 result register", offset: "0x168", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R3", description: "Context save of R3 result register", offset: "0x16C", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R4", description: "Context save of R4 result register", offset: "0x170", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R5", description: "Context save of R5 result register", offset: "0x174", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R6", description: "Context save of R6 result register", offset: "0x178", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_R7", description: "Context save of R7 result register", offset: "0x17C", size: "16",
		bits: [
		]
	},
	{ name: "CSAVE_OP2", description: "Context save of Operarand2 result register", offset: "0x180", size: "16",
		bits: [
		]
	},
	{ name: "CONTEXT_SAVE", description: "Register to initiate context save of result registers", offset: "0x184", size: "16",
		bits: [
			{ name: "SAVE", description: "Initiates context save of result registers", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CONTEXT_RESTORE", description: "Register to initiate context restore of result registers", offset: "0x188", size: "16",
		bits: [
			{ name: "RESTORE", description: "Initiates context restore of result registers", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "STF", description: "TMU status Register", offset: "0x1A4", size: "16",
		bits: [
			{ name: "LVF", description: "LVF  Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "LUF", description: "LUF Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "LVF_WR_EN", description: "LVF  write enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "LUF_WR_EN", description: "LVF  write enable", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "PARITY_TEST", description: "Enabling the parity test feature", offset: "0x1C0", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LCM_LOCK", description: "LCM lock configuration", offset: "0x1C8", size: "16",
		bits: [
			{ name: "PARITY_TEST", description: "Register lock configuration", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LCM_COMMIT", description: "LCM commit configuration", offset: "0x1D0", size: "16",
		bits: [
			{ name: "PARITY_TEST", description: "Register commit configuration", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	tmuRegisters: TMU_REGISTERS,
}
