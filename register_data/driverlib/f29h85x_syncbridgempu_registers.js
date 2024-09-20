let SYNCBRIDGEMPU_REGISTERS = [
	{ name: "MPUR1_START", description: "MPU Region 1 Start Address", offset: "0x0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR1_END", description: "MPU Region 1 End Address", offset: "0x4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR1_LOCK", description: "MPU 1 Temporary Lock", offset: "0x8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR1_COMMIT", description: "MPU 1 Permanent Commit", offset: "0xC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR1_ACCESS", description: "MPU Region 1 R/W Access Permissions", offset: "0x10", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR2_START", description: "MPU Region 2 Start Address", offset: "0x20", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR2_END", description: "MPU Region 2 End Address", offset: "0x24", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR2_LOCK", description: "MPU 2 Temporary Lock", offset: "0x28", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR2_COMMIT", description: "MPU 2 Permanent Commit", offset: "0x2C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR2_ACCESS", description: "MPU Region 2 R/W Access Permissions", offset: "0x30", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR3_START", description: "MPU Region 3 Start Address", offset: "0x40", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR3_END", description: "MPU Region 3 End Address", offset: "0x44", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR3_LOCK", description: "MPU 3 Temporary Lock", offset: "0x48", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR3_COMMIT", description: "MPU 3 Permanent Commit", offset: "0x4C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR3_ACCESS", description: "MPU Region 3 R/W Access Permissions", offset: "0x50", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR4_START", description: "MPU Region 4 Start Address", offset: "0x60", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR4_END", description: "MPU Region 4 End Address", offset: "0x64", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR4_LOCK", description: "MPU 4 Temporary Lock", offset: "0x68", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR4_COMMIT", description: "MPU 4 Permanent Commit", offset: "0x6C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR4_ACCESS", description: "MPU Region 4 R/W Access Permissions", offset: "0x70", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR5_START", description: "MPU Region 5 Start Address", offset: "0x80", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR5_END", description: "MPU Region 5 End Address", offset: "0x84", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR5_LOCK", description: "MPU 5 Temporary Lock", offset: "0x88", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR5_COMMIT", description: "MPU 5 Permanent Commit", offset: "0x8C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR5_ACCESS", description: "MPU Region 5 R/W Access Permissions", offset: "0x90", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR6_START", description: "MPU Region 6 Start Address", offset: "0xA0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR6_END", description: "MPU Region 6 End Address", offset: "0xA4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR6_LOCK", description: "MPU 6 Temporary Lock", offset: "0xA8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR6_COMMIT", description: "MPU 6 Permanent Commit", offset: "0xAC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR6_ACCESS", description: "MPU Region 6 R/W Access Permissions", offset: "0xB0", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR7_START", description: "MPU Region 7 Start Address", offset: "0xC0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR7_END", description: "MPU Region 7 End Address", offset: "0xC4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR7_LOCK", description: "MPU 7 Temporary Lock", offset: "0xC8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR7_COMMIT", description: "MPU 7 Permanent Commit", offset: "0xCC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR7_ACCESS", description: "MPU Region 7 R/W Access Permissions", offset: "0xD0", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR8_START", description: "MPU Region 8 Start Address", offset: "0xE0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR8_END", description: "MPU Region 8 End Address", offset: "0xE4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR8_LOCK", description: "MPU 8 Temporary Lock", offset: "0xE8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR8_COMMIT", description: "MPU 8 Permanent Commit", offset: "0xEC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR8_ACCESS", description: "MPU Region 8 R/W Access Permissions", offset: "0xF0", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR9_START", description: "MPU Region 9 Start Address", offset: "0x100", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR9_END", description: "MPU Region 9 End Address", offset: "0x104", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR9_LOCK", description: "MPU 9 Temporary Lock", offset: "0x108", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR9_COMMIT", description: "MPU 9 Permanent Commit", offset: "0x10C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR9_ACCESS", description: "MPU Region 9 R/W Access Permissions", offset: "0x110", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR10_START", description: "MPU Region 10 Start Address", offset: "0x120", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR10_END", description: "MPU Region 10 End Address", offset: "0x124", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR10_LOCK", description: "MPU 10 Temporary Lock", offset: "0x128", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR10_COMMIT", description: "MPU 10 Permanent Commit", offset: "0x12C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR10_ACCESS", description: "MPU Region 10 R/W Access Permissions", offset: "0x130", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR11_START", description: "MPU Region 11 Start Address", offset: "0x140", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR11_END", description: "MPU Region 11 End Address", offset: "0x144", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR11_LOCK", description: "MPU 11 Temporary Lock", offset: "0x148", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR11_COMMIT", description: "MPU 11 Permanent Commit", offset: "0x14C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR11_ACCESS", description: "MPU Region 11 R/W Access Permissions", offset: "0x150", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR12_START", description: "MPU Region 12 Start Address", offset: "0x160", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR12_END", description: "MPU Region 12 End Address", offset: "0x164", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR12_LOCK", description: "MPU 12 Temporary Lock", offset: "0x168", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR12_COMMIT", description: "MPU 12 Permanent Commit", offset: "0x16C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR12_ACCESS", description: "MPU Region 12 R/W Access Permissions", offset: "0x170", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR13_START", description: "MPU Region 13 Start Address", offset: "0x180", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR13_END", description: "MPU Region 13 End Address", offset: "0x184", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR13_LOCK", description: "MPU 13 Temporary Lock", offset: "0x188", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR13_COMMIT", description: "MPU 13 Permanent Commit", offset: "0x18C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR13_ACCESS", description: "MPU Region 13 R/W Access Permissions", offset: "0x190", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR14_START", description: "MPU Region 14 Start Address", offset: "0x1A0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR14_END", description: "MPU Region 14 End Address", offset: "0x1A4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR14_LOCK", description: "MPU 14 Temporary Lock", offset: "0x1A8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR14_COMMIT", description: "MPU 14 Permanent Commit", offset: "0x1AC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR14_ACCESS", description: "MPU Region 14 R/W Access Permissions", offset: "0x1B0", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR15_START", description: "MPU Region 15 Start Address", offset: "0x1C0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR15_END", description: "MPU Region 15 End Address", offset: "0x1C4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR15_LOCK", description: "MPU 15 Temporary Lock", offset: "0x1C8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR15_COMMIT", description: "MPU 15 Permanent Commit", offset: "0x1CC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR15_ACCESS", description: "MPU Region 15 R/W Access Permissions", offset: "0x1D0", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR16_START", description: "MPU Region 16 Start Address", offset: "0x1E0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR16_END", description: "MPU Region 16 End Address", offset: "0x1E4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR16_LOCK", description: "MPU 16 Temporary Lock", offset: "0x1E8", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR16_COMMIT", description: "MPU 16 Permanent Commit", offset: "0x1EC", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR16_ACCESS", description: "MPU Region 16 R/W Access Permissions", offset: "0x1F0", size: "16",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUCTRL", description: "MPU Control Register", offset: "0x7FC", size: "16",
		bits: [
			{ name: "MPUEN", description: "Enable MPU function", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUCFG_LOCK", description: "Channel Configuration Temporary Lock", offset: "0x81C", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUCFG_COMMIT", description: "Channel Configuration Permanent Commit", offset: "0x820", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	syncbridgempuRegisters: SYNCBRIDGEMPU_REGISTERS,
}
