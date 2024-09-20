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
	{ name: "SINPUF32_R0", description: "Updates operand 1 for SINPUF32 operation", offset: "0x1E", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R1", description: "Updates operand 1 for SINPUF32 operation", offset: "0x20", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R2", description: "Updates operand 1 for SINPUF32 operation", offset: "0x22", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R3", description: "Updates operand 1 for SINPUF32 operation", offset: "0x24", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R4", description: "Updates operand 1 for SINPUF32 operation", offset: "0x26", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R5", description: "Updates operand 1 for SINPUF32 operation", offset: "0x28", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R6", description: "Updates operand 1 for SINPUF32 operation", offset: "0x2A", size: "32",
		bits: [
		]
	},
	{ name: "SINPUF32_R7", description: "Updates operand 1 for SINPUF32 operation", offset: "0x2C", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R0", description: "Updates operand 1 for COSPUF32 operation", offset: "0x2E", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R1", description: "Updates operand 1 for COSPUF32 operation", offset: "0x30", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R2", description: "Updates operand 1 for COSPUF32 operation", offset: "0x32", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R3", description: "Updates operand 1 for COSPUF32 operation", offset: "0x34", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R4", description: "Updates operand 1 for COSPUF32 operation", offset: "0x36", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R5", description: "Updates operand 1 for COSPUF32 operation", offset: "0x38", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R6", description: "Updates operand 1 for COSPUF32 operation", offset: "0x3A", size: "32",
		bits: [
		]
	},
	{ name: "COSPUF32_R7", description: "Updates operand 1 for COSPUF32 operation", offset: "0x3C", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R0", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x3E", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R1", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x40", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R2", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x42", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R3", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x44", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R4", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x46", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R5", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x48", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R6", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x4A", size: "32",
		bits: [
		]
	},
	{ name: "ATANPUF32_R7", description: "Updates operand 1 for ATANPUF32 operation", offset: "0x4C", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R0", description: "Updates operand 1 for SQRTF32 operation", offset: "0x4E", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R1", description: "Updates operand 1 for SQRTF32 operation", offset: "0x50", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R2", description: "Updates operand 1 for SQRTF32 operation", offset: "0x52", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R3", description: "Updates operand 1 for SQRTF32 operation", offset: "0x54", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R4", description: "Updates operand 1 for SQRTF32 operation", offset: "0x56", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R5", description: "Updates operand 1 for SQRTF32 operation", offset: "0x58", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R6", description: "Updates operand 1 for SQRTF32 operation", offset: "0x5A", size: "32",
		bits: [
		]
	},
	{ name: "SQRTF32_R7", description: "Updates operand 1 for SQRTF32 operation", offset: "0x5C", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R0", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x5E", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R1", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x60", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R2", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x62", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R3", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x64", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R4", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x66", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R5", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x68", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R6", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x6A", size: "32",
		bits: [
		]
	},
	{ name: "IEXP2F32_R7", description: "Updates operand 1 for IEXP2F32 operation", offset: "0x6C", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R0", description: "Updates operand 1 for LOG2F32 operation", offset: "0x6E", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R1", description: "Updates operand 1 for LOG2F32 operation", offset: "0x70", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R2", description: "Updates operand 1 for LOG2F32 operation", offset: "0x72", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R3", description: "Updates operand 1 for LOG2F32 operation", offset: "0x74", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R4", description: "Updates operand 1 for LOG2F32 operation", offset: "0x76", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R5", description: "Updates operand 1 for LOG2F32 operation", offset: "0x78", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R6", description: "Updates operand 1 for LOG2F32 operation", offset: "0x7A", size: "32",
		bits: [
		]
	},
	{ name: "LOG2F32_R7", description: "Updates operand 1 for LOG2F32 operation", offset: "0x7C", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R0_R1", description: "Updates operand 1 for QUADF32 operation", offset: "0x7E", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R1_R2", description: "Updates operand 1 for QUADF32 operation", offset: "0x80", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R2_R3", description: "Updates operand 1 for QUADF32 operation", offset: "0x82", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R3_R4", description: "Updates operand 1 for QUADF32 operation", offset: "0x84", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R4_R5", description: "Updates operand 1 for QUADF32 operation", offset: "0x86", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R5_R6", description: "Updates operand 1 for QUADF32 operation", offset: "0x88", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_X_R6_R7", description: "Updates operand 1 for QUADF32 operation", offset: "0x8A", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R0", description: "Updates operand 1 for DIVF32 operation", offset: "0x90", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R1", description: "Updates operand 1 for DIVF32 operation", offset: "0x92", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R2", description: "Updates operand 1 for DIVF32 operation", offset: "0x94", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R3", description: "Updates operand 1 for DIVF32 operation", offset: "0x96", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R4", description: "Updates operand 1 for DIVF32 operation", offset: "0x98", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R5", description: "Updates operand 1 for DIVF32 operation", offset: "0x9A", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R6", description: "Updates operand 1 for DIVF32 operation", offset: "0x9C", size: "32",
		bits: [
		]
	},
	{ name: "DIVF32_N_R7", description: "Updates operand 1 for DIVF32 operation", offset: "0x9E", size: "32",
		bits: [
		]
	},
	{ name: "QUADF32_DIVF32_OP2", description: "Updates operand 2 for QUADF32 and DIVF32 operation", offset: "0xA0", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R0", description: "R0 result register", offset: "0xBE", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R1", description: "R1 result register", offset: "0xC0", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R2", description: "R2 result register", offset: "0xC2", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R3", description: "R3 result register", offset: "0xC4", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R4", description: "R4 result register", offset: "0xC6", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R5", description: "R5 result register", offset: "0xC8", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R6", description: "R6 result register", offset: "0xCA", size: "32",
		bits: [
		]
	},
	{ name: "RESULT_R7", description: "R7 result register", offset: "0xCC", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R0", description: "Context save of R0 result register", offset: "0xCE", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R1", description: "Context save of R1 result register", offset: "0xD0", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R2", description: "Context save of R2 result register", offset: "0xD2", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R3", description: "Context save of R3 result register", offset: "0xD4", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R4", description: "Context save of R4 result register", offset: "0xD6", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R5", description: "Context save of R5 result register", offset: "0xD8", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R6", description: "Context save of R6 result register", offset: "0xDA", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_R7", description: "Context save of R7 result register", offset: "0xDC", size: "32",
		bits: [
		]
	},
	{ name: "CSAVE_OP2", description: "Context save of Operarand2 result register", offset: "0xDE", size: "32",
		bits: [
		]
	},
	{ name: "CONTEXT_SAVE", description: "Register to initiate context save of result registers", offset: "0xE0", size: "32",
		bits: [
			{ name: "SAVE", description: "Initiates context save of result registers", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CONTEXT_RESTORE", description: "Register to initiate context restore of result registers", offset: "0xE2", size: "32",
		bits: [
			{ name: "RESTORE", description: "Initiates context restore of result registers", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "STF", description: "TMU status Register", offset: "0xFC", size: "32",
		bits: [
			{ name: "LVF", description: "LVF  Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "LUF", description: "LUF Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "LVF_WR_EN", description: "LVF  write enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "LUF_WR_EN", description: "LVF  write enable", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "PARITY_TEST", description: "Enabling the parity test feature", offset: "0x116", size: "32",
		bits: [
			{ name: "testen", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LCM_LOCK", description: "LCM lock configuration", offset: "0x11C", size: "32",
		bits: [
			{ name: "PARITY_TEST", description: "Register lock configuration", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LCM_COMMIT", description: "LCM commit configuration", offset: "0x122", size: "32",
		bits: [
			{ name: "PARITY_TEST", description: "Register commit configuration", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	tmuRegisters: TMU_REGISTERS,
}
