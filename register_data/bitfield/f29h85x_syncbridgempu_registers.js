let SYNCBRIDGEMPU_REGISTERS = [
	{ name: "MPUR1_START", description: "MPU Region 1 Start Address", offset: "0x0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR1_END", description: "MPU Region 1 End Address", offset: "0x2", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR1_LOCK", description: "MPU 1 Temporary Lock", offset: "0x4", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR1_COMMIT", description: "MPU 1 Permanent Commit", offset: "0x6", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR1_ACCESS", description: "MPU Region 1 R/W Access Permissions", offset: "0x8", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR2_START", description: "MPU Region 2 Start Address", offset: "0x16", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR2_END", description: "MPU Region 2 End Address", offset: "0x18", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR2_LOCK", description: "MPU 2 Temporary Lock", offset: "0x1A", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR2_COMMIT", description: "MPU 2 Permanent Commit", offset: "0x1C", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR2_ACCESS", description: "MPU Region 2 R/W Access Permissions", offset: "0x1E", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR3_START", description: "MPU Region 3 Start Address", offset: "0x2C", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR3_END", description: "MPU Region 3 End Address", offset: "0x2E", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR3_LOCK", description: "MPU 3 Temporary Lock", offset: "0x30", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR3_COMMIT", description: "MPU 3 Permanent Commit", offset: "0x32", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR3_ACCESS", description: "MPU Region 3 R/W Access Permissions", offset: "0x34", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR4_START", description: "MPU Region 4 Start Address", offset: "0x42", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR4_END", description: "MPU Region 4 End Address", offset: "0x44", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR4_LOCK", description: "MPU 4 Temporary Lock", offset: "0x46", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR4_COMMIT", description: "MPU 4 Permanent Commit", offset: "0x48", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR4_ACCESS", description: "MPU Region 4 R/W Access Permissions", offset: "0x4A", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR5_START", description: "MPU Region 5 Start Address", offset: "0x58", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR5_END", description: "MPU Region 5 End Address", offset: "0x5A", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR5_LOCK", description: "MPU 5 Temporary Lock", offset: "0x5C", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR5_COMMIT", description: "MPU 5 Permanent Commit", offset: "0x5E", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR5_ACCESS", description: "MPU Region 5 R/W Access Permissions", offset: "0x60", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR6_START", description: "MPU Region 6 Start Address", offset: "0x6E", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR6_END", description: "MPU Region 6 End Address", offset: "0x70", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR6_LOCK", description: "MPU 6 Temporary Lock", offset: "0x72", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR6_COMMIT", description: "MPU 6 Permanent Commit", offset: "0x74", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR6_ACCESS", description: "MPU Region 6 R/W Access Permissions", offset: "0x76", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR7_START", description: "MPU Region 7 Start Address", offset: "0x84", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR7_END", description: "MPU Region 7 End Address", offset: "0x86", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR7_LOCK", description: "MPU 7 Temporary Lock", offset: "0x88", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR7_COMMIT", description: "MPU 7 Permanent Commit", offset: "0x8A", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR7_ACCESS", description: "MPU Region 7 R/W Access Permissions", offset: "0x8C", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR8_START", description: "MPU Region 8 Start Address", offset: "0x9A", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR8_END", description: "MPU Region 8 End Address", offset: "0x9C", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR8_LOCK", description: "MPU 8 Temporary Lock", offset: "0x9E", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR8_COMMIT", description: "MPU 8 Permanent Commit", offset: "0xA0", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR8_ACCESS", description: "MPU Region 8 R/W Access Permissions", offset: "0xA2", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR9_START", description: "MPU Region 9 Start Address", offset: "0xB0", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR9_END", description: "MPU Region 9 End Address", offset: "0xB2", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR9_LOCK", description: "MPU 9 Temporary Lock", offset: "0xB4", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR9_COMMIT", description: "MPU 9 Permanent Commit", offset: "0xB6", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR9_ACCESS", description: "MPU Region 9 R/W Access Permissions", offset: "0xB8", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR10_START", description: "MPU Region 10 Start Address", offset: "0xC6", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR10_END", description: "MPU Region 10 End Address", offset: "0xC8", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR10_LOCK", description: "MPU 10 Temporary Lock", offset: "0xCA", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR10_COMMIT", description: "MPU 10 Permanent Commit", offset: "0xCC", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR10_ACCESS", description: "MPU Region 10 R/W Access Permissions", offset: "0xCE", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR11_START", description: "MPU Region 11 Start Address", offset: "0xDC", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR11_END", description: "MPU Region 11 End Address", offset: "0xDE", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR11_LOCK", description: "MPU 11 Temporary Lock", offset: "0xE0", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR11_COMMIT", description: "MPU 11 Permanent Commit", offset: "0xE2", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR11_ACCESS", description: "MPU Region 11 R/W Access Permissions", offset: "0xE4", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR12_START", description: "MPU Region 12 Start Address", offset: "0xF2", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR12_END", description: "MPU Region 12 End Address", offset: "0xF4", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR12_LOCK", description: "MPU 12 Temporary Lock", offset: "0xF6", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR12_COMMIT", description: "MPU 12 Permanent Commit", offset: "0xF8", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR12_ACCESS", description: "MPU Region 12 R/W Access Permissions", offset: "0xFA", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR13_START", description: "MPU Region 13 Start Address", offset: "0x108", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR13_END", description: "MPU Region 13 End Address", offset: "0x10A", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR13_LOCK", description: "MPU 13 Temporary Lock", offset: "0x10C", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR13_COMMIT", description: "MPU 13 Permanent Commit", offset: "0x10E", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR13_ACCESS", description: "MPU Region 13 R/W Access Permissions", offset: "0x110", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR14_START", description: "MPU Region 14 Start Address", offset: "0x11E", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR14_END", description: "MPU Region 14 End Address", offset: "0x120", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR14_LOCK", description: "MPU 14 Temporary Lock", offset: "0x122", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR14_COMMIT", description: "MPU 14 Permanent Commit", offset: "0x124", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR14_ACCESS", description: "MPU Region 14 R/W Access Permissions", offset: "0x126", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR15_START", description: "MPU Region 15 Start Address", offset: "0x134", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR15_END", description: "MPU Region 15 End Address", offset: "0x136", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR15_LOCK", description: "MPU 15 Temporary Lock", offset: "0x138", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR15_COMMIT", description: "MPU 15 Permanent Commit", offset: "0x13A", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR15_ACCESS", description: "MPU Region 15 R/W Access Permissions", offset: "0x13C", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUR16_START", description: "MPU Region 16 Start Address", offset: "0x14A", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR16_END", description: "MPU Region 16 End Address", offset: "0x14C", size: "32",
		bits: [
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "MPUR16_LOCK", description: "MPU 16 Temporary Lock", offset: "0x14E", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR16_COMMIT", description: "MPU 16 Permanent Commit", offset: "0x150", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUR16_ACCESS", description: "MPU Region 16 R/W Access Permissions", offset: "0x152", size: "32",
		bits: [
			{ name: "ACCESS", description: "Region Access Permissions", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "MPUCTRL", description: "MPU Control Register", offset: "0x75C", size: "32",
		bits: [
			{ name: "MPUEN", description: "Enable MPU function", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUCFG_LOCK", description: "Channel Configuration Temporary Lock", offset: "0x77A", size: "32",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MPUCFG_COMMIT", description: "Channel Configuration Permanent Commit", offset: "0x77C", size: "32",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	syncbridgempuRegisters: SYNCBRIDGEMPU_REGISTERS,
}
