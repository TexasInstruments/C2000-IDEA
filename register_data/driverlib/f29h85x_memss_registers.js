let MEMSS_REGISTERS = [
	{ name: "LPA0_MEM_CONFIG", description: "LPA0 Memory Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LPA0 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LPA0 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LPA0_MEM_CONFIG_LOCK", description: "Temporary Lock for LPA0 Memory Configuration Register", offset: "0x4", size: "16",
		bits: [
			{ name: "LPA0_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LPA0_MEM_CONFIG_COMMIT", description: "Permament Lock for LPA0 Memory Configuration Register", offset: "0x8", size: "16",
		bits: [
			{ name: "LPA0_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LPA1_MEM_CONFIG", description: "LPA1 Memory Configuration Register", offset: "0x10", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LPA1 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LPA1 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LPA1_MEM_CONFIG_LOCK", description: "Temporary Lock for LPA1 Memory Configuration Register", offset: "0x14", size: "16",
		bits: [
			{ name: "LPA1_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LPA1_MEM_CONFIG_COMMIT", description: "Permament Lock for LPA1 Memory Configuration Register", offset: "0x18", size: "16",
		bits: [
			{ name: "LPA1_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA0_MEM_CONFIG", description: "LDA0 Memory Configuration Register", offset: "0x20", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA0 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA0 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA0_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA0 Memory Configuration Register", offset: "0x24", size: "16",
		bits: [
			{ name: "LDA0_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA0_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA0 Memory Configuration Register", offset: "0x28", size: "16",
		bits: [
			{ name: "LDA0_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA1_MEM_CONFIG", description: "LDA1 Memory Configuration Register", offset: "0x30", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA1 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA1 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA1_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA1 Memory Configuration Register", offset: "0x34", size: "16",
		bits: [
			{ name: "LDA1_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA1_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA1 Memory Configuration Register", offset: "0x38", size: "16",
		bits: [
			{ name: "LDA1_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA2_MEM_CONFIG", description: "LDA2 Memory Configuration Register", offset: "0x40", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA2 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA2 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA2_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA2 Memory Configuration Register", offset: "0x44", size: "16",
		bits: [
			{ name: "LDA2_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA2_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA2 Memory Configuration Register", offset: "0x48", size: "16",
		bits: [
			{ name: "LDA2_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA3_MEM_CONFIG", description: "LDA3 Memory Configuration Register", offset: "0x50", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA3 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA3 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA3_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA3 Memory Configuration Register", offset: "0x54", size: "16",
		bits: [
			{ name: "LDA3_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA3_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA3 Memory Configuration Register", offset: "0x58", size: "16",
		bits: [
			{ name: "LDA3_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA4_MEM_CONFIG", description: "LDA4 Memory Configuration Register", offset: "0x60", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA4 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA4 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA4_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA4 Memory Configuration Register", offset: "0x64", size: "16",
		bits: [
			{ name: "LDA4_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA4_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA4 Memory Configuration Register", offset: "0x68", size: "16",
		bits: [
			{ name: "LDA4_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA5_MEM_CONFIG", description: "LDA5 Memory Configuration Register", offset: "0x70", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA5 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA5 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA5_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA5 Memory Configuration Register", offset: "0x74", size: "16",
		bits: [
			{ name: "LDA5_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA5_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA5 Memory Configuration Register", offset: "0x78", size: "16",
		bits: [
			{ name: "LDA5_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA6_MEM_CONFIG", description: "LDA6 Memory Configuration Register", offset: "0x80", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA6 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA6 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA6_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA6 Memory Configuration Register", offset: "0x84", size: "16",
		bits: [
			{ name: "LDA6_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA6_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA6 Memory Configuration Register", offset: "0x88", size: "16",
		bits: [
			{ name: "LDA6_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA7_MEM_CONFIG", description: "LDA7 Memory Configuration Register", offset: "0x90", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA7 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "LDA7 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "LDA7_MEM_CONFIG_LOCK", description: "Temporary Lock for LDA7 Memory Configuration Register", offset: "0x94", size: "16",
		bits: [
			{ name: "LDA7_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "LDA7_MEM_CONFIG_COMMIT", description: "Permament Lock for LDA7 Memory Configuration Register", offset: "0x98", size: "16",
		bits: [
			{ name: "LDA7_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPA0_MEM_CONFIG", description: "CPA0 Memory Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LPA0 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CPA0 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CPA0_MEM_CONFIG_LOCK", description: "Temporary Lock for CPA0 Memory Configuration Register", offset: "0x4", size: "16",
		bits: [
			{ name: "CPA0_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPA0_MEM_CONFIG_COMMIT", description: "Permament Lock for CPA0 Memory Configuration Register", offset: "0x8", size: "16",
		bits: [
			{ name: "CPA0_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPA1_MEM_CONFIG", description: "CPA1 Memory Configuration Register", offset: "0x10", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LPA1 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CPA1 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CPA1_MEM_CONFIG_LOCK", description: "Temporary Lock for CPA1 Memory Configuration Register", offset: "0x14", size: "16",
		bits: [
			{ name: "CPA1_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPA1_MEM_CONFIG_COMMIT", description: "Permament Lock for CPA1 Memory Configuration Register", offset: "0x18", size: "16",
		bits: [
			{ name: "CPA1_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA0_MEM_CONFIG", description: "CDA0 Memory Configuration Register", offset: "0x20", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA0 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA0 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA0_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA0 Memory Configuration Register", offset: "0x24", size: "16",
		bits: [
			{ name: "CDA0_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA0_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA0 Memory Configuration Register", offset: "0x28", size: "16",
		bits: [
			{ name: "CDA0_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA1_MEM_CONFIG", description: "CDA1 Memory Configuration Register", offset: "0x30", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA1 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA1 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA1_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA1 Memory Configuration Register", offset: "0x34", size: "16",
		bits: [
			{ name: "CDA1_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA1_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA1 Memory Configuration Register", offset: "0x38", size: "16",
		bits: [
			{ name: "CDA1_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA2_MEM_CONFIG", description: "CDA2 Memory Configuration Register", offset: "0x40", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA2 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA2 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA2_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA2 Memory Configuration Register", offset: "0x44", size: "16",
		bits: [
			{ name: "CDA2_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA2_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA2 Memory Configuration Register", offset: "0x48", size: "16",
		bits: [
			{ name: "CDA2_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA3_MEM_CONFIG", description: "CDA3 Memory Configuration Register", offset: "0x50", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA3 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA3 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA3_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA3 Memory Configuration Register", offset: "0x54", size: "16",
		bits: [
			{ name: "CDA3_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA3_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA3 Memory Configuration Register", offset: "0x58", size: "16",
		bits: [
			{ name: "CDA3_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA4_MEM_CONFIG", description: "CDA4 Memory Configuration Register", offset: "0x60", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA4 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA4 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA4_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA4 Memory Configuration Register", offset: "0x64", size: "16",
		bits: [
			{ name: "CDA4_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA4_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA4 Memory Configuration Register", offset: "0x68", size: "16",
		bits: [
			{ name: "CDA4_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA5_MEM_CONFIG", description: "CDA5 Memory Configuration Register", offset: "0x70", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA5 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA5 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA5_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA5 Memory Configuration Register", offset: "0x74", size: "16",
		bits: [
			{ name: "CDA5_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA5_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA5 Memory Configuration Register", offset: "0x78", size: "16",
		bits: [
			{ name: "CDA5_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA6_MEM_CONFIG", description: "CDA6 Memory Configuration Register", offset: "0x80", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA6 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA6 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA6_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA6 Memory Configuration Register", offset: "0x84", size: "16",
		bits: [
			{ name: "CDA6_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA6_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA6 Memory Configuration Register", offset: "0x88", size: "16",
		bits: [
			{ name: "CDA6_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA7_MEM_CONFIG", description: "CDA7 Memory Configuration Register", offset: "0x90", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA7 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA7 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA7_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA7 Memory Configuration Register", offset: "0x94", size: "16",
		bits: [
			{ name: "CDA7_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA7_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA7 Memory Configuration Register", offset: "0x98", size: "16",
		bits: [
			{ name: "CDA7_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA8_MEM_CONFIG", description: "CDA8 Memory Configuration Register", offset: "0xA0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA8 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA8 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA8_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA8 Memory Configuration Register", offset: "0xA4", size: "16",
		bits: [
			{ name: "CDA8_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA8_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA8 Memory Configuration Register", offset: "0xA8", size: "16",
		bits: [
			{ name: "CDA8_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA9_MEM_CONFIG", description: "CDA9 Memory Configuration Register", offset: "0xB0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA9 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA9 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA9_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA9 Memory Configuration Register", offset: "0xB4", size: "16",
		bits: [
			{ name: "CDA9_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA9_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA9 Memory Configuration Register", offset: "0xB8", size: "16",
		bits: [
			{ name: "CDA9_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA10_MEM_CONFIG", description: "CDA10 Memory Configuration Register", offset: "0xC0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA10 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA10 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA10_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA10 Memory Configuration Register", offset: "0xC4", size: "16",
		bits: [
			{ name: "CDA10_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA10_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA10 Memory Configuration Register", offset: "0xC8", size: "16",
		bits: [
			{ name: "CDA10_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA11_MEM_CONFIG", description: "CDA11 Memory Configuration Register", offset: "0xD0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "LDA11 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "CDA11 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CDA11_MEM_CONFIG_LOCK", description: "Temporary Lock for CDA11 Memory Configuration Register", offset: "0xD4", size: "16",
		bits: [
			{ name: "CDA11_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CDA11_MEM_CONFIG_COMMIT", description: "Permament Lock for CDA11 Memory Configuration Register", offset: "0xD8", size: "16",
		bits: [
			{ name: "CDA11_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "M0_MEM_CONFIG", description: "M0 Memory Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "M0 Test Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "INIT", description: "Triggers memory Initilization", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INIT_STS", description: "M0 INIT status", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "M0_MEM_CONFIG_LOCK", description: "Temporary Lock for M0 Memory Configuration Register", offset: "0x4", size: "16",
		bits: [
			{ name: "M0_MEM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "M0_MEM_CONFIG_COMMIT", description: "Permament Lock for M0 Memory Configuration Register", offset: "0x8", size: "16",
		bits: [
			{ name: "M0_MEM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU1_ROM_CONFIG", description: "CPU1 ROM Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "TESTMODE", description: "CPU1_ROM Test Mode", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "CPU1_ROM_CONFIG_LOCK", description: "Temporary Lock for CPU1 ROM Memory Configuration Register", offset: "0x4", size: "16",
		bits: [
			{ name: "CPU1_ROM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU1_ROM_CONFIG_COMMIT", description: "Permament Lock for CPU1 ROM Memory Configuration Register", offset: "0x8", size: "16",
		bits: [
			{ name: "CPU1_ROM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU2_ROM_CONFIG", description: "CPU2 ROM Configuration Register", offset: "0x10", size: "16",
		bits: [
			{ name: "TESTMODE", description: "CPU1_ROM Test Mode", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "CPU2_ROM_CONFIG_LOCK", description: "Temporary Lock for CPU2 ROM Memory Configuration Register", offset: "0x14", size: "16",
		bits: [
			{ name: "CPU2_ROM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU2_ROM_CONFIG_COMMIT", description: "Permament Lock for CPU2 ROM Memory Configuration Register", offset: "0x18", size: "16",
		bits: [
			{ name: "CPU2_ROM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU3_ROM_CONFIG", description: "CPU3 ROM Configuration Register", offset: "0x20", size: "16",
		bits: [
			{ name: "TESTMODE", description: "CPU1_ROM Test Mode", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "CPU3_ROM_CONFIG_LOCK", description: "Temporary Lock for CPU3 ROM Memory Configuration Register", offset: "0x24", size: "16",
		bits: [
			{ name: "CPU3_ROM_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU3_ROM_CONFIG_COMMIT", description: "Permament Lock for CPU3 ROM Memory Configuration Register", offset: "0x28", size: "16",
		bits: [
			{ name: "CPU3_ROM_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MEM_DLB_CONFIG", description: "Dataline buffer enable", offset: "0x0", size: "16",
		bits: [
			{ name: "CPU1_DLB_EN", description: "CPU1 Data line buffer Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPU2_DLB_EN", description: "CPU2 Data line buffer Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPU3_DLB_EN", description: "CPU3 Data line buffer Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "SYNCBRIDGE_DLB_EN", description: "Sync Bridge Dataline buffer Enable", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "MEM_DLB_CONFIG_LOCK", description: "Temporary Lock for DLB Configuration Register", offset: "0x4", size: "16",
		bits: [
			{ name: "MEM_DLB_CONFIG", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MEM_DLB_CONFIG_COMMIT", description: "Permament Lock for DLB Configuration Register", offset: "0x8", size: "16",
		bits: [
			{ name: "MEM_DLB_CONFIG_LOCK", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PERI_MEM_TEST_LOCK", description: "Peripheral Memory Test Lock Register", offset: "0x10", size: "16",
		bits: [
			{ name: "PERI_MEM_TEST_CONTROL", description: "PERI_MEM_TEST_CONTROL Lock bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PERI_MEM_TEST_CONTROL", description: "Peripheral Memory Test control Register", offset: "0x14", size: "16",
		bits: [
			{ name: "ETHERCAT_MEM_FORCE_ERROR", description: "Force Parity Error on EtherCAT RAM", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "PARITY_TEST", description: "Enabling the parity test feature", offset: "0x1FC", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CPU1_ROM_PATCH_REG_LOCK", description: "Temporary Lock for CPU1 ROM PATCH ADDR, ECC and DATA registers", offset: "0x0", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU1_ROM_PATCH_REG_COMMIT", description: "Permament  Lock for CPU1 ROM PATCH ADDR, ECC and DATA registers", offset: "0x4", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPU1_0_ADDR", description: "Address-0 of ROM to be patched", offset: "0x10", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_0_ECC", description: "ECC bits for Address-0 of ROM", offset: "0x14", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_0_DATA64_L", description: "Data[31:0] for Address-0", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_0_DATA64_H", description: "Data[63:32] for Address-0", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_1_ADDR", description: "Address-1 of ROM to be patched", offset: "0x20", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_1_ECC", description: "ECC bits for Address-1 of ROM", offset: "0x24", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_1_DATA64_L", description: "Data[31:0] for Address-1", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_1_DATA64_H", description: "Data[63:32] for Address-1", offset: "0x2C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_2_ADDR", description: "Address-2 of ROM to be patched", offset: "0x30", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_2_ECC", description: "ECC bits for Address-2 of ROM", offset: "0x34", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_2_DATA64_L", description: "Data[31:0] for Address-2", offset: "0x38", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_2_DATA64_H", description: "Data[63:32] for Address-2", offset: "0x3C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_3_ADDR", description: "Address-3 of ROM to be patched", offset: "0x40", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_3_ECC", description: "ECC bits for Address-3 of ROM", offset: "0x44", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_3_DATA64_L", description: "Data[31:0] for Address-3", offset: "0x48", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_3_DATA64_H", description: "Data[63:32] for Address-3", offset: "0x4C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_4_ADDR", description: "Address-4 of ROM to be patched", offset: "0x50", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_4_ECC", description: "ECC bits for Address-4 of ROM", offset: "0x54", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_4_DATA64_L", description: "Data[31:0] for Address-4", offset: "0x58", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_4_DATA64_H", description: "Data[63:32] for Address-4", offset: "0x5C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_5_ADDR", description: "Address-5 of ROM to be patched", offset: "0x60", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_5_ECC", description: "ECC bits for Address-5 of ROM", offset: "0x64", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_5_DATA64_L", description: "Data[31:0] for Address-5", offset: "0x68", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_5_DATA64_H", description: "Data[63:32] for Address-5", offset: "0x6C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_6_ADDR", description: "Address-6 of ROM to be patched", offset: "0x70", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_6_ECC", description: "ECC bits for Address-6 of ROM", offset: "0x74", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_6_DATA64_L", description: "Data[31:0] for Address-6", offset: "0x78", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_6_DATA64_H", description: "Data[63:32] for Address-6", offset: "0x7C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_7_ADDR", description: "Address-7 of ROM to be patched", offset: "0x80", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_7_ECC", description: "ECC bits for Address-7 of ROM", offset: "0x84", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_7_DATA64_L", description: "Data[31:0] for Address-7", offset: "0x88", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_7_DATA64_H", description: "Data[63:32] for Address-7", offset: "0x8C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_8_ADDR", description: "Address-8 of ROM to be patched", offset: "0x90", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_8_ECC", description: "ECC bits for Address-8 of ROM", offset: "0x94", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_8_DATA64_L", description: "Data[31:0] for Address-8", offset: "0x98", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_8_DATA64_H", description: "Data[63:32] for Address-8", offset: "0x9C", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_9_ADDR", description: "Address-9 of ROM to be patched", offset: "0xA0", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_9_ECC", description: "ECC bits for Address-9 of ROM", offset: "0xA4", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_9_DATA64_L", description: "Data[31:0] for Address-9", offset: "0xA8", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_9_DATA64_H", description: "Data[63:32] for Address-9", offset: "0xAC", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_10_ADDR", description: "Address-10 of ROM to be patched", offset: "0xB0", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_10_ECC", description: "ECC bits for Address-10 of ROM", offset: "0xB4", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_10_DATA64_L", description: "Data[31:0] for Address-10", offset: "0xB8", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_10_DATA64_H", description: "Data[63:32] for Address-10", offset: "0xBC", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_11_ADDR", description: "Address-11 of ROM to be patched", offset: "0xC0", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_11_ECC", description: "ECC bits for Address-11 of ROM", offset: "0xC4", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_11_DATA64_L", description: "Data[31:0] for Address-11", offset: "0xC8", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_11_DATA64_H", description: "Data[63:32] for Address-11", offset: "0xCC", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_12_ADDR", description: "Address-12 of ROM to be patched", offset: "0xD0", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_12_ECC", description: "ECC bits for Address-12 of ROM", offset: "0xD4", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_12_DATA64_L", description: "Data[31:0] for Address-12", offset: "0xD8", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_12_DATA64_H", description: "Data[63:32] for Address-12", offset: "0xDC", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_13_ADDR", description: "Address-13 of ROM to be patched", offset: "0xE0", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_13_ECC", description: "ECC bits for Address-13 of ROM", offset: "0xE4", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_13_DATA64_L", description: "Data[31:0] for Address-13", offset: "0xE8", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_13_DATA64_H", description: "Data[63:32] for Address-13", offset: "0xEC", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_14_ADDR", description: "Address-14 of ROM to be patched", offset: "0xF0", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_14_ECC", description: "ECC bits for Address-14 of ROM", offset: "0xF4", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_14_DATA64_L", description: "Data[31:0] for Address-14", offset: "0xF8", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_14_DATA64_H", description: "Data[63:32] for Address-14", offset: "0xFC", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_15_ADDR", description: "Address-15 of ROM to be patched", offset: "0x100", size: "32",
		bits: [
			{ name: "ADDR_64B_ALIGNED", description: "Address to be patched", size: "29", shift: "3", mask: "0xFFFFFFF8" },
		]
	},
	{ name: "CPU1_15_ECC", description: "ECC bits for Address-15 of ROM", offset: "0x104", size: "16",
		bits: [
			{ name: "ECC", description: "ECC of 64 bits to be patched", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CPU1_15_DATA64_L", description: "Data[31:0] for Address-15", offset: "0x108", size: "16",
		bits: [
		]
	},
	{ name: "CPU1_15_DATA64_H", description: "Data[63:32] for Address-15", offset: "0x10C", size: "16",
		bits: [
		]
	},
];
module.exports = {
	memssRegisters: MEMSS_REGISTERS,
}
