let FRI_REGISTERS = [
	{ name: "REVISION", description: "IP Revision Register", offset: "0x0", size: "16",
		bits: [
			{ name: "MINREV", description: "Minor Revision Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "MAJREV", description: "Major Revision Number", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "FRDCNTL", description: "Flash Read Control Register", offset: "0x10", size: "16",
		bits: [
			{ name: "RWAIT", description: "Read Waitstate", size: "4", shift: "8", mask: "0xF00" },
			{ name: "TRIMENGRRWAIT", description: "Read Waitstate of Trim and ENGR sectors", size: "4", shift: "24", mask: "0xF000000" },
		]
	},
	{ name: "FRDCNTL_LOCK", description: "Flash Read Control Lock Register", offset: "0x14", size: "16",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FRDCNTL_COMMIT", description: "Flash Read Control Commit Register", offset: "0x18", size: "16",
		bits: [
			{ name: "COMMIT", description: "FRDCNTL_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "1_INTF_CTRL", description: "Flash Read Interface 1 Control Register", offset: "0x30", size: "16",
		bits: [
			{ name: "PREFETCH_EN", description: "Prefetch Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_EN", description: "Data Line Buffer Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_EN", description: "Code Cache Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DATA_PREREAD_EN", description: "Sequential Data Preread Mode Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "1_INTF_CTRL_LOCK", description: "Flash Read Interface 1 Control Lock Register", offset: "0x34", size: "16",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "1_INTF_CTRL_COMMIT", description: "Flash Read Interface 1 Control Commit Register", offset: "0x38", size: "16",
		bits: [
			{ name: "COMMIT", description: "FRD_INTF_CTRL_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "1_INTF_CLR", description: "Flash Read Interface 1 Clear Register", offset: "0x3C", size: "16",
		bits: [
			{ name: "PREFETCH_CLR", description: "Prefetch Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_CLR", description: "Data Line Buffer Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_CLR", description: "Code Cache Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "2_INTF_CTRL", description: "Flash Read Interface 2 Control Register", offset: "0x40", size: "16",
		bits: [
			{ name: "PREFETCH_EN", description: "Prefetch Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_EN", description: "Data Line Buffer Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_EN", description: "Code Cache Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DATA_PREREAD_EN", description: "Sequential Data Preread Mode Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "2_INTF_CTRL_LOCK", description: "Flash Read Interface 2 Control Lock Register", offset: "0x44", size: "16",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "2_INTF_CTRL_COMMIT", description: "Flash Read Interface 2 Control Commit Register", offset: "0x48", size: "16",
		bits: [
			{ name: "COMMIT", description: "FRD_INTF_CTRL_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "2_INTF_CLR", description: "Flash Read Interface 2 Clear Register", offset: "0x4C", size: "16",
		bits: [
			{ name: "PREFETCH_CLR", description: "Prefetch Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_CLR", description: "Data Line Buffer Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_CLR", description: "Code Cache Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "3_INTF_CTRL", description: "Flash Read Interface 3 Control Register", offset: "0x50", size: "16",
		bits: [
			{ name: "PREFETCH_EN", description: "Prefetch Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_EN", description: "Data Line Buffer Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_EN", description: "Code Cache Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DATA_PREREAD_EN", description: "Sequential Data Preread Mode Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "3_INTF_CTRL_LOCK", description: "Flash Read Interface 3 Control Lock Register", offset: "0x54", size: "16",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "3_INTF_CTRL_COMMIT", description: "Flash Read Interface 3 Control Commit Register", offset: "0x58", size: "16",
		bits: [
			{ name: "COMMIT", description: "FRD_INTF_CTRL_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "3_INTF_CLR", description: "Flash Read Interface 3 Clear Register", offset: "0x5C", size: "16",
		bits: [
			{ name: "PREFETCH_CLR", description: "Prefetch Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_CLR", description: "Data Line Buffer Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_CLR", description: "Code Cache Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "4_INTF_CTRL", description: "Flash Read Interface 4 Control Register", offset: "0x60", size: "16",
		bits: [
			{ name: "PREFETCH_EN", description: "Prefetch Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_EN", description: "Data Line Buffer Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_EN", description: "Code Cache Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DATA_PREREAD_EN", description: "Sequential Data Preread Mode Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "4_INTF_CTRL_LOCK", description: "Flash Read Interface 4 Control Lock Register", offset: "0x64", size: "16",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "4_INTF_CTRL_COMMIT", description: "Flash Read Interface 4 Control Commit Register", offset: "0x68", size: "16",
		bits: [
			{ name: "COMMIT", description: "FRD_INTF_CTRL_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "4_INTF_CLR", description: "Flash Read Interface 4 Clear Register", offset: "0x6C", size: "16",
		bits: [
			{ name: "PREFETCH_CLR", description: "Prefetch Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_CACHE_CLR", description: "Data Line Buffer Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CODE_CACHE_CLR", description: "Code Cache Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "PARITY_TEST", description: "Parity Test Enable", offset: "0x70", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity Test Enable", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "PARITY_TEST_LOCK", description: "Parity Test Lock Register", offset: "0x74", size: "16",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PARITY_TEST_COMMIT", description: "Parity Test Commit Register", offset: "0x78", size: "16",
		bits: [
			{ name: "COMMIT", description: "PARITY_TEST_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	friRegisters: FRI_REGISTERS,
}
