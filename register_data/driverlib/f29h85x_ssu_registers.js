let SSU_REGISTERS = [
	{ name: "REVISION", description: "Module Revision Register", offset: "0x0", size: "16",
		bits: [
			{ name: "MINREV", description: "Minor Revision Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "MAJREV", description: "Major Revision Number", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "UPP_REVISION", description: "User Protection Policy Revision", offset: "0x4", size: "16",
		bits: [
			{ name: "REV", description: "User Protection Policy Revision", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "MODE", description: "Safety and Security Operational Mode", offset: "0x8", size: "16",
		bits: [
			{ name: "OPMODE", description: "SSU Operational Mode", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "LINK2_AP_OVERRIDE", description: "LINK2 Access Protection Override Register", offset: "0xC", size: "16",
		bits: [
			{ name: "CPU1", description: "CPU1 LINK2 Access Protection Override Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPU2", description: "CPU2 LINK2 Access Protection Override Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPU3", description: "CPU3 LINK2 Access Protection Override Bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "BOOTMODE_STAT", description: "User Boot Mode Status Register", offset: "0x2C", size: "16",
		bits: [
			{ name: "PIN_STAT", description: "Boot Mode Pin Status", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "EMU_BOOTPIN_CONFIG", description: "User Emulation Boot Pin Configuration", offset: "0x30", size: "32",
		bits: [
			{ name: "BMSP0", description: "Boot Mode Select Pin 0", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BMSP1", description: "Boot Mode Select Pin 1", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BMSP2", description: "Boot Mode Select Pin 2", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "KEY", description: "Register Valid Key", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "EMU_BOOT_DIAG", description: "User Emulation Boot Options", offset: "0x34", size: "16",
		bits: [
			{ name: "LPOST_EN", description: "LPOST Enable", size: "2", shift: "0", mask: "0x3" },
			{ name: "LPOST_COVER", description: "LPOST Coverage", size: "2", shift: "2", mask: "0xC" },
			{ name: "MPOST_EN", description: "MPOST Enable", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "EMU_BOOT_CLKCFG", description: "User Emulation Boot Clock Configuration Register", offset: "0x38", size: "32",
		bits: [
			{ name: "IMULT", description: "Secure Boot PLL IMULT", size: "8", shift: "0", mask: "0xFF" },
			{ name: "ODIV", description: "Secure Boot PLL ODIV", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "REFDIV", description: "Secure Boot PLL REFDIV", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "PLLEN", description: "Secure Boot PLL Enable", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "EMU_BOOTEN", description: "User Emulation Boot Enable", offset: "0x3C", size: "16",
		bits: [
			{ name: "ENABLE", description: "Emulation Boot Enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "RAMOPEN_LOCK", description: "RAMOPEN Feature Lock Register", offset: "0x40", size: "16",
		bits: [
			{ name: "LOCK", description: "RAMOPEN Lock", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "RAMOPEN_COMMIT", description: "RAMOPEN Feature Commit Register", offset: "0x44", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CPUID", description: "CPUID Register", offset: "0x4C", size: "16",
		bits: [
			{ name: "CPUID", description: "CPUID Value", size: "3", shift: "0", mask: "0x7" },
			{ name: "DBGREAD", description: "Debug Read Status", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "BANKMAP", description: "Valid Banks", offset: "0x50", size: "16",
		bits: [
			{ name: "CPU1SWAP", description: "CPU1 Bank Swap", size: "8", shift: "0", mask: "0xFF" },
			{ name: "CPU3SWAP", description: "CPU3 Bank Swap", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "BANKMAP_LOCK", description: "Bank Map Lock Register", offset: "0x54", size: "16",
		bits: [
			{ name: "LOCK1", description: "CPU1 Bank Swap Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "LOCK2", description: "CPU3 Bank Swap Lock", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "BANKMAP_COMMIT", description: "Bank Map Commit Register", offset: "0x58", size: "16",
		bits: [
			{ name: "COMMIT1", description: "CPU1 Bank Swap Commit", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMMIT2", description: "CPU3 Bank Swap Commit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "BANKMODE", description: "Bank Mode Configuration Register", offset: "0x5C", size: "16",
		bits: [
			{ name: "MODE", description: "Device Flash Configuration Mode", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "BANKMODE_LOCK", description: "Bank Mode Lock Register", offset: "0x60", size: "16",
		bits: [
			{ name: "LOCK", description: "Bank Mode Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "BANKMODE_COMMIT", description: "Bank Mode Commit Register", offset: "0x64", size: "16",
		bits: [
			{ name: "COMMIT", description: "Bank Mode Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SECCFG_UPDATE_CFG", description: "SECCFG Flash Update Configuration Register", offset: "0x68", size: "16",
		bits: [
			{ name: "LINK_OWNER", description: "SECCFG Update Owner LINK", size: "4", shift: "0", mask: "0xF" },
			{ name: "CPU_OWNER", description: "SECCFG Update Owner CPU", size: "3", shift: "8", mask: "0x700" },
			{ name: "UPDATE_EN", description: "SECCFG Update Enable", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "PROG_BANKMODE", description: "Programming BANKMODE Register", offset: "0x70", size: "16",
		bits: [
			{ name: "MODE", description: "Device Flash Configuration Mode", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "SECVALID", description: "Valid SECCFG Sector", offset: "0x74", size: "16",
		bits: [
			{ name: "CPU1", description: "Valid CPU1/CPU2 SECCFG Sector", size: "8", shift: "0", mask: "0xFF" },
			{ name: "CPU3", description: "Valid CPU3 SECCFG Sector", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "SECVALID_LOCK", description: "Valid SECCFG Sector Lock Register", offset: "0x78", size: "16",
		bits: [
			{ name: "LOCK", description: "SECVALID LOCK", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SECVALID_COMMIT", description: "Valid SECCFG Sector Commit Register", offset: "0x7C", size: "16",
		bits: [
			{ name: "COMMIT", description: "Security Sectors Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ZONE1_CFG", description: "ZONE1 Configuration", offset: "0x80", size: "16",
		bits: [
			{ name: "FWU_LINK", description: "Firmware Update Owner LINK", size: "4", shift: "0", mask: "0xF" },
			{ name: "FWU_CPU", description: "Firmware Update Owner CPU", size: "3", shift: "8", mask: "0x700" },
			{ name: "UPDATE_EN", description: "ZONE1 Update Enable", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "ZONE2_CFG", description: "ZONE2 Configuration", offset: "0x84", size: "16",
		bits: [
			{ name: "FWU_LINK", description: "Firmware Update Owner LINK", size: "4", shift: "0", mask: "0xF" },
			{ name: "FWU_CPU", description: "Firmware Update Owner CPU", size: "3", shift: "8", mask: "0x700" },
			{ name: "UPDATE_EN", description: "ZONE2 Update Enable", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "ZONE3_CFG", description: "ZONE3 Configuration", offset: "0x88", size: "16",
		bits: [
			{ name: "FWU_LINK", description: "Firmware Update Owner LINK", size: "4", shift: "0", mask: "0xF" },
			{ name: "FWU_CPU", description: "Firmware Update Owner CPU", size: "3", shift: "8", mask: "0x700" },
			{ name: "UPDATE_EN", description: "ZONE3 Update Enable", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "DEBUG_CFG", description: "Debug Configuration", offset: "0x90", size: "16",
		bits: [
			{ name: "C29DBGEN_CFG", description: "C29DBGEN Enable Configuration", size: "3", shift: "0", mask: "0x7" },
			{ name: "ZONE1", description: "ZONE1 Debug Enable Configuration", size: "3", shift: "4", mask: "0x70" },
			{ name: "ZONE2", description: "ZONE2 Debug Enable Configuration", size: "3", shift: "8", mask: "0x700" },
			{ name: "ZONE3", description: "ZONE3 Debug Enable Configuration", size: "3", shift: "12", mask: "0x7000" },
		]
	},
	{ name: "DEBUG_CFG_LOCK", description: "Debug Configuration Lock Register", offset: "0x94", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DEBUG_CFG_COMMIT", description: "Debug Configuration Commit Register", offset: "0x98", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DEBUG_STAT", description: "Debug Status Register", offset: "0xA0", size: "16",
		bits: [
			{ name: "ZONE1", description: "ZONE1 Debug State", size: "2", shift: "2", mask: "0xC" },
			{ name: "ZONE2", description: "ZONE2 Debug State", size: "2", shift: "4", mask: "0x30" },
			{ name: "ZONE3", description: "ZONE3 Debug State", size: "2", shift: "6", mask: "0xC0" },
			{ name: "C29DBGS", description: "C29 Debug Status", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "C29DBGEN", description: "C29 Debug Enable Register", offset: "0xA4", size: "16",
		bits: [
			{ name: "ENA", description: "C29 Debug Enable", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "ZONE_DBGEN", description: "ZONE Debug Enable Register", offset: "0xA8", size: "32",
		bits: [
			{ name: "ZONE1", description: "ZONE1 Debug Enable", size: "6", shift: "0", mask: "0x3F" },
			{ name: "ZONE2", description: "ZONE2 Debug Enable", size: "6", shift: "8", mask: "0x3F00" },
			{ name: "ZONE3", description: "ZONE3 Debug Enable", size: "6", shift: "16", mask: "0x3F0000" },
		]
	},
	{ name: "BEPROT_BANK", description: "Bank Erase Protection Bank Register", offset: "0x200", size: "16",
		bits: [
			{ name: "BANKID", description: "Bank Erase Bank", size: "3", shift: "0", mask: "0x7" },
			{ name: "FLCID", description: "Bank Erase Bank", size: "2", shift: "3", mask: "0x18" },
		]
	},
	{ name: "BEPROT_STAT", description: "Bank Erase Status Register", offset: "0x204", size: "16",
		bits: [
			{ name: "READY", description: "Bank Erase State Machine Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "ACTIVE", description: "Bank Erase State Machine Initializing", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "BEPROTA", description: "Bank Erase Protection Register A", offset: "0x208", size: "32",
		bits: [
			{ name: "SECT0", description: "Sector 0 Bank Erase Protection", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT1", description: "Sector 1 Bank Erase Protection", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT2", description: "Sector 2 Bank Erase Protection", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT3", description: "Sector 3 Bank Erase Protection", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT4", description: "Sector 4 Bank Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT5", description: "Sector 5 Bank Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT6", description: "Sector 6 Bank Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT7", description: "Sector 7 Bank Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT8", description: "Sector 8 Bank Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT9", description: "Sector 9 Bank Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT10", description: "Sector 10 Bank Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT11", description: "Sector 11 Bank Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT12", description: "Sector 12 Bank Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT13", description: "Sector 13 Bank Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT14", description: "Sector 14 Bank Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT15", description: "Sector 15 Bank Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT16", description: "Sector 16 Bank Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT17", description: "Sector 17 Bank Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT18", description: "Sector 18 Bank Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT19", description: "Sector 19 Bank Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT20", description: "Sector 20 Bank Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT21", description: "Sector 21 Bank Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT22", description: "Sector 22 Bank Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT23", description: "Sector 23 Bank Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT24", description: "Sector 24 Bank Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT25", description: "Sector 25 Bank Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT26", description: "Sector 26 Bank Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT27", description: "Sector 27 Bank Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT28", description: "Sector 28 Bank Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT29", description: "Sector 29 Bank Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT30", description: "Sector 30 Bank Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT31", description: "Sector 31 Bank Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "BEPROTB", description: "Bank Erase Protection Register B", offset: "0x20C", size: "32",
		bits: [
			{ name: "SECT39_22", description: "Sectors 39 - 22 Bank Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT47_40", description: "Sectors 47 - 40 Bank Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT55_48", description: "Sectors 55 - 48 Bank Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT63_56", description: "Sectors 63 - 56 Bank Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT71_64", description: "Sectors 71 - 64 Bank Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT79_72", description: "Sectors 79 - 72 Bank Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT87_80", description: "Sectors 87 - 80 Bank Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT95_88", description: "Sectors 95 - 88 Bank Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT103_96", description: "Sectors 103 - 96 Bank Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT111_104", description: "Sectors 111 - 104 Bank Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT119_112", description: "Sectors 119 - 112 Bank Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT127_120", description: "Sectors 127 - 120 Bank Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT135_128", description: "Sectors 135 - 128 Bank Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT143_136", description: "Sectors 143 - 136 Bank Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT151_144", description: "Sectors 151 - 144 Bank Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT159_152", description: "Sectors 159 - 152 Bank Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT167_160", description: "Sectors 167 - 160 Bank Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT175_168", description: "Sectors 175 - 168 Bank Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT183_176", description: "Sectors 183 - 176 Bank Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT191_184", description: "Sectors 191 - 184 Bank Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT199_192", description: "Sectors 199 - 192 Bank Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT207_200", description: "Sectors 207 - 200 Bank Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT215_208", description: "Sectors 215 - 208 Bank Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT223_216", description: "Sectors 223 - 216 Bank Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT231_224", description: "Sectors 231 - 224 Bank Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT239_232", description: "Sectors 239 - 232 Bank Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT247_240", description: "Sectors 247 - 240 Bank Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT255_248", description: "Sectors 255 - 248 Bank Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "FLSEMSTAT", description: "Flash Controller Semaphore Status Register", offset: "0x220", size: "16",
		bits: [
			{ name: "LINK", description: "Semaphore LINK Owner", size: "4", shift: "0", mask: "0xF" },
			{ name: "ZONE", description: "Semaphore ZONE Owner", size: "2", shift: "8", mask: "0x300" },
			{ name: "CPU", description: "Semaphore CPU Owner", size: "3", shift: "12", mask: "0x7000" },
			{ name: "MATCH", description: "Match Status Bit", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "ASSIGNED", description: "Assigned Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "FLSEMREQ", description: "Flash Controller Semaphore Request Register", offset: "0x224", size: "16",
		bits: [
			{ name: "REQ", description: "Request Semaphore Ownership", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FLSEMCLR", description: "Flash Controller Semaphore Clear Register", offset: "0x228", size: "16",
		bits: [
			{ name: "CLR", description: "Release Semaphore Ownership", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_CODE_BANKS", description: "Global Code Banks Write Erase", offset: "0x230", size: "16",
		bits: [
			{ name: "PROT", description: "Global Code Banks WEPROT", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_CODE_BANKS_LOCK", description: "Global Code Banks Write Erase Lock", offset: "0x234", size: "16",
		bits: [
			{ name: "LOCK", description: "System Access Protection Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_CODE_BANKS_COMMIT", description: "Global Code Banks Write Erase Commit", offset: "0x238", size: "16",
		bits: [
			{ name: "COMMIT", description: "System Access Protection Register Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_DATA_BANKS", description: "Global Data Banks Write Erase", offset: "0x240", size: "16",
		bits: [
			{ name: "PROT", description: "Global Data Banks WEPROT", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_DATA_BANKS_LOCK", description: "Global Data Banks Write Erase Lock", offset: "0x244", size: "16",
		bits: [
			{ name: "LOCK", description: "System Access Protection Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_DATA_BANKS_COMMIT", description: "Global Data Banks Write Erase Commit", offset: "0x248", size: "16",
		bits: [
			{ name: "COMMIT", description: "System Access Protection Register Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC1_B0_A", description: "Flash Controller 1 B0 Write Erase Protection A", offset: "0x300", size: "32",
		bits: [
			{ name: "SECT0", description: "Sector 0 Write Erase Protection", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT1", description: "Sector 1 Write Erase Protection", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT2", description: "Sector 2 Write Erase Protection", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT3", description: "Sector 3 Write Erase Protection", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT4", description: "Sector 4 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT5", description: "Sector 5 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT6", description: "Sector 6 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT7", description: "Sector 7 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT8", description: "Sector 8 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT9", description: "Sector 9 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT10", description: "Sector 10 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT11", description: "Sector 11 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT12", description: "Sector 12 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT13", description: "Sector 13 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT14", description: "Sector 14 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT15", description: "Sector 15 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT16", description: "Sector 16 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT17", description: "Sector 17 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT18", description: "Sector 18 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT19", description: "Sector 19 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT20", description: "Sector 20 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT21", description: "Sector 21 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT22", description: "Sector 22 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT23", description: "Sector 23 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT24", description: "Sector 24 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT25", description: "Sector 25 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT26", description: "Sector 26 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT27", description: "Sector 27 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT28", description: "Sector 28 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT29", description: "Sector 29 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT30", description: "Sector 30 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT31", description: "Sector 31 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC1_B0_B", description: "Flash Controller 1 B0 Write Erase Protection B", offset: "0x304", size: "32",
		bits: [
			{ name: "SECT39_22", description: "Sectors 39 - 22 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT47_40", description: "Sectors 47 - 40 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT55_48", description: "Sectors 55 - 48 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT63_56", description: "Sectors 63 - 56 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT71_64", description: "Sectors 71 - 64 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT79_72", description: "Sectors 79 - 72 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT87_80", description: "Sectors 87 - 80 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT95_88", description: "Sectors 95 - 88 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT103_96", description: "Sectors 103 - 96 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT111_104", description: "Sectors 111 - 104 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT119_112", description: "Sectors 119 - 112 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT127_120", description: "Sectors 127 - 120 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT135_128", description: "Sectors 135 - 128 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT143_136", description: "Sectors 143 - 136 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT151_144", description: "Sectors 151 - 144 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT159_152", description: "Sectors 159 - 152 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT167_160", description: "Sectors 167 - 160 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT175_168", description: "Sectors 175 - 168 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT183_176", description: "Sectors 183 - 176 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT191_184", description: "Sectors 191 - 184 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT199_192", description: "Sectors 199 - 192 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT207_200", description: "Sectors 207 - 200 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT215_208", description: "Sectors 215 - 208 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT223_216", description: "Sectors 223 - 216 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT231_224", description: "Sectors 231 - 224 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT239_232", description: "Sectors 239 - 232 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT247_240", description: "Sectors 247 - 240 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT255_248", description: "Sectors 255 - 248 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC1_B0_LOCK", description: "Flash Controller 1 B0 WEPROTA Lock", offset: "0x310", size: "16",
		bits: [
			{ name: "LOCK", description: "System Access Protection Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC1_B0_COMMIT", description: "Flash Controller 1 B0 WEPROTA Commit", offset: "0x314", size: "16",
		bits: [
			{ name: "COMMIT", description: "System Access Protection Register Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC1_B2_A", description: "Flash Controller 1 B2 Write Erase Protection A", offset: "0x340", size: "32",
		bits: [
			{ name: "SECT0", description: "Sector 0 Write Erase Protection", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT1", description: "Sector 1 Write Erase Protection", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT2", description: "Sector 2 Write Erase Protection", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT3", description: "Sector 3 Write Erase Protection", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT4", description: "Sector 4 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT5", description: "Sector 5 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT6", description: "Sector 6 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT7", description: "Sector 7 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT8", description: "Sector 8 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT9", description: "Sector 9 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT10", description: "Sector 10 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT11", description: "Sector 11 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT12", description: "Sector 12 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT13", description: "Sector 13 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT14", description: "Sector 14 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT15", description: "Sector 15 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT16", description: "Sector 16 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT17", description: "Sector 17 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT18", description: "Sector 18 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT19", description: "Sector 19 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT20", description: "Sector 20 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT21", description: "Sector 21 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT22", description: "Sector 22 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT23", description: "Sector 23 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT24", description: "Sector 24 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT25", description: "Sector 25 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT26", description: "Sector 26 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT27", description: "Sector 27 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT28", description: "Sector 28 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT29", description: "Sector 29 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT30", description: "Sector 30 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT31", description: "Sector 31 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC1_B2_B", description: "Flash Controller 1 B2 Write Erase Protection B", offset: "0x344", size: "32",
		bits: [
			{ name: "SECT39_22", description: "Sectors 39 - 22 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT47_40", description: "Sectors 47 - 40 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT55_48", description: "Sectors 55 - 48 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT63_56", description: "Sectors 63 - 56 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT71_64", description: "Sectors 71 - 64 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT79_72", description: "Sectors 79 - 72 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT87_80", description: "Sectors 87 - 80 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT95_88", description: "Sectors 95 - 88 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT103_96", description: "Sectors 103 - 96 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT111_104", description: "Sectors 111 - 104 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT119_112", description: "Sectors 119 - 112 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT127_120", description: "Sectors 127 - 120 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT135_128", description: "Sectors 135 - 128 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT143_136", description: "Sectors 143 - 136 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT151_144", description: "Sectors 151 - 144 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT159_152", description: "Sectors 159 - 152 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT167_160", description: "Sectors 167 - 160 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT175_168", description: "Sectors 175 - 168 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT183_176", description: "Sectors 183 - 176 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT191_184", description: "Sectors 191 - 184 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT199_192", description: "Sectors 199 - 192 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT207_200", description: "Sectors 207 - 200 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT215_208", description: "Sectors 215 - 208 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT223_216", description: "Sectors 223 - 216 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT231_224", description: "Sectors 231 - 224 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT239_232", description: "Sectors 239 - 232 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT247_240", description: "Sectors 247 - 240 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT255_248", description: "Sectors 255 - 248 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC1_B2_LOCK", description: "Flash Controller 1 B2 WEPROTA Lock", offset: "0x350", size: "16",
		bits: [
			{ name: "LOCK", description: "System Access Protection Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC1_B2_COMMIT", description: "Flash Controller 1 B2 WEPROTA Commit", offset: "0x354", size: "16",
		bits: [
			{ name: "COMMIT", description: "System Access Protection Register Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC2_B0_A", description: "Flash Controller 2 B0 Write Erase Protection A", offset: "0x3A0", size: "32",
		bits: [
			{ name: "SECT0", description: "Sector 0 Write Erase Protection", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT1", description: "Sector 1 Write Erase Protection", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT2", description: "Sector 2 Write Erase Protection", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT3", description: "Sector 3 Write Erase Protection", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT4", description: "Sector 4 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT5", description: "Sector 5 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT6", description: "Sector 6 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT7", description: "Sector 7 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT8", description: "Sector 8 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT9", description: "Sector 9 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT10", description: "Sector 10 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT11", description: "Sector 11 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT12", description: "Sector 12 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT13", description: "Sector 13 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT14", description: "Sector 14 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT15", description: "Sector 15 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT16", description: "Sector 16 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT17", description: "Sector 17 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT18", description: "Sector 18 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT19", description: "Sector 19 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT20", description: "Sector 20 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT21", description: "Sector 21 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT22", description: "Sector 22 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT23", description: "Sector 23 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT24", description: "Sector 24 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT25", description: "Sector 25 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT26", description: "Sector 26 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT27", description: "Sector 27 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT28", description: "Sector 28 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT29", description: "Sector 29 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT30", description: "Sector 30 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT31", description: "Sector 31 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC2_B0_B", description: "Flash Controller 2 B0 Write Erase Protection B", offset: "0x3A4", size: "32",
		bits: [
			{ name: "SECT39_22", description: "Sectors 39 - 22 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT47_40", description: "Sectors 47 - 40 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT55_48", description: "Sectors 55 - 48 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT63_56", description: "Sectors 63 - 56 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT71_64", description: "Sectors 71 - 64 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT79_72", description: "Sectors 79 - 72 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT87_80", description: "Sectors 87 - 80 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT95_88", description: "Sectors 95 - 88 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT103_96", description: "Sectors 103 - 96 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT111_104", description: "Sectors 111 - 104 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT119_112", description: "Sectors 119 - 112 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT127_120", description: "Sectors 127 - 120 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT135_128", description: "Sectors 135 - 128 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT143_136", description: "Sectors 143 - 136 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT151_144", description: "Sectors 151 - 144 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT159_152", description: "Sectors 159 - 152 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT167_160", description: "Sectors 167 - 160 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT175_168", description: "Sectors 175 - 168 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT183_176", description: "Sectors 183 - 176 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT191_184", description: "Sectors 191 - 184 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT199_192", description: "Sectors 199 - 192 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT207_200", description: "Sectors 207 - 200 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT215_208", description: "Sectors 215 - 208 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT223_216", description: "Sectors 223 - 216 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT231_224", description: "Sectors 231 - 224 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT239_232", description: "Sectors 239 - 232 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT247_240", description: "Sectors 247 - 240 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT255_248", description: "Sectors 255 - 248 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC2_B0_LOCK", description: "Flash Controller 2 B0 WEPROTA Lock", offset: "0x3B0", size: "16",
		bits: [
			{ name: "LOCK", description: "System Access Protection Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC2_B0_COMMIT", description: "Flash Controller 2 B0 WEPROTA Commit", offset: "0x3B4", size: "16",
		bits: [
			{ name: "COMMIT", description: "System Access Protection Register Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC2_B2_A", description: "Flash Controller 2 B2 Write Erase Protection A", offset: "0x3E0", size: "32",
		bits: [
			{ name: "SECT0", description: "Sector 0 Write Erase Protection", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT1", description: "Sector 1 Write Erase Protection", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT2", description: "Sector 2 Write Erase Protection", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT3", description: "Sector 3 Write Erase Protection", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT4", description: "Sector 4 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT5", description: "Sector 5 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT6", description: "Sector 6 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT7", description: "Sector 7 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT8", description: "Sector 8 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT9", description: "Sector 9 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT10", description: "Sector 10 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT11", description: "Sector 11 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT12", description: "Sector 12 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT13", description: "Sector 13 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT14", description: "Sector 14 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT15", description: "Sector 15 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT16", description: "Sector 16 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT17", description: "Sector 17 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT18", description: "Sector 18 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT19", description: "Sector 19 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT20", description: "Sector 20 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT21", description: "Sector 21 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT22", description: "Sector 22 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT23", description: "Sector 23 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT24", description: "Sector 24 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT25", description: "Sector 25 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT26", description: "Sector 26 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT27", description: "Sector 27 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT28", description: "Sector 28 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT29", description: "Sector 29 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT30", description: "Sector 30 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT31", description: "Sector 31 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC2_B2_B", description: "Flash Controller 2 B2 Write Erase Protection B", offset: "0x3E4", size: "32",
		bits: [
			{ name: "SECT39_22", description: "Sectors 39 - 22 Write Erase Protection", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT47_40", description: "Sectors 47 - 40 Write Erase Protection", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT55_48", description: "Sectors 55 - 48 Write Erase Protection", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT63_56", description: "Sectors 63 - 56 Write Erase Protection", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT71_64", description: "Sectors 71 - 64 Write Erase Protection", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT79_72", description: "Sectors 79 - 72 Write Erase Protection", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT87_80", description: "Sectors 87 - 80 Write Erase Protection", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT95_88", description: "Sectors 95 - 88 Write Erase Protection", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT103_96", description: "Sectors 103 - 96 Write Erase Protection", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT111_104", description: "Sectors 111 - 104 Write Erase Protection", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT119_112", description: "Sectors 119 - 112 Write Erase Protection", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT127_120", description: "Sectors 127 - 120 Write Erase Protection", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SECT135_128", description: "Sectors 135 - 128 Write Erase Protection", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SECT143_136", description: "Sectors 143 - 136 Write Erase Protection", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SECT151_144", description: "Sectors 151 - 144 Write Erase Protection", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SECT159_152", description: "Sectors 159 - 152 Write Erase Protection", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SECT167_160", description: "Sectors 167 - 160 Write Erase Protection", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SECT175_168", description: "Sectors 175 - 168 Write Erase Protection", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SECT183_176", description: "Sectors 183 - 176 Write Erase Protection", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SECT191_184", description: "Sectors 191 - 184 Write Erase Protection", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SECT199_192", description: "Sectors 199 - 192 Write Erase Protection", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SECT207_200", description: "Sectors 207 - 200 Write Erase Protection", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SECT215_208", description: "Sectors 215 - 208 Write Erase Protection", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SECT223_216", description: "Sectors 223 - 216 Write Erase Protection", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SECT231_224", description: "Sectors 231 - 224 Write Erase Protection", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SECT239_232", description: "Sectors 239 - 232 Write Erase Protection", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SECT247_240", description: "Sectors 247 - 240 Write Erase Protection", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SECT255_248", description: "Sectors 255 - 248 Write Erase Protection", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "WEPROT_FLC2_B2_LOCK", description: "Flash Controller 2 B2 WEPROTA Lock", offset: "0x3F0", size: "16",
		bits: [
			{ name: "LOCK", description: "System Access Protection Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "WEPROT_FLC2_B2_COMMIT", description: "Flash Controller 2 B2 WEPROTA Commit", offset: "0x3F4", size: "16",
		bits: [
			{ name: "COMMIT", description: "System Access Protection Register Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "RST_VECT", description: "CPU Reset Vector", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "RST_LINK", description: "CPU Reset LINK", offset: "0x4", size: "16",
		bits: [
			{ name: "LINK", description: "Reset LINK Value", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CPU_RST_CTRL", description: "CPU Reset Control", offset: "0x8", size: "16",
		bits: [
			{ name: "SW_SYSRSN", description: "System CPU Reset", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "DEF_NMI_VECT", description: "Default CPU NMI Vector", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "DEF_NMI_LINK", description: "Default CPU NMI LINK", offset: "0x14", size: "16",
		bits: [
			{ name: "LINK", description: "Default NMI LINK Value", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "EMU_BOOTDEF_LOW", description: "User Emulation Boot Definition Low Register", offset: "0x28", size: "32",
		bits: [
			{ name: "BOOT_DEF0", description: "Boot Definitions 0", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BOOT_DEF1", description: "Boot Definitions 1", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BOOT_DEF2", description: "Boot Definitions 2", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "BOOT_DEF3", description: "Boot Definitions 3", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "EMU_BOOTDEF_HIGH", description: "User Emulation Boot Definition High Register", offset: "0x2C", size: "32",
		bits: [
			{ name: "BOOT_DEF4", description: "Boot Definitions 4", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BOOT_DEF5", description: "Boot Definitions 5", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BOOT_DEF6", description: "Boot Definitions 6", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "BOOT_DEF7", description: "Boot Definitions 7", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "LINK3_CFG", description: "LINK3 Configuration", offset: "0x3C", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK4_CFG", description: "LINK4 Configuration", offset: "0x40", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK5_CFG", description: "LINK5 Configuration", offset: "0x44", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK6_CFG", description: "LINK6 Configuration", offset: "0x48", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK7_CFG", description: "LINK7 Configuration", offset: "0x4C", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK8_CFG", description: "LINK8 Configuration", offset: "0x50", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK9_CFG", description: "LINK9 Configuration", offset: "0x54", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK10_CFG", description: "LINK10 Configuration", offset: "0x58", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK11_CFG", description: "LINK11 Configuration", offset: "0x5C", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK12_CFG", description: "LINK12 Configuration", offset: "0x60", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK13_CFG", description: "LINK13 Configuration", offset: "0x64", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK14_CFG", description: "LINK14 Configuration", offset: "0x68", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LINK15_CFG", description: "LINK15 Configuration", offset: "0x6C", size: "16",
		bits: [
			{ name: "STACK", description: "STACK Association", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "STACK3_CFG", description: "STACK3 Configuration", offset: "0x7C", size: "16",
		bits: [
			{ name: "ZONE", description: "ZONE Association", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "STACK4_CFG", description: "STACK4 Configuration", offset: "0x80", size: "16",
		bits: [
			{ name: "ZONE", description: "ZONE Association", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "STACK5_CFG", description: "STACK5 Configuration", offset: "0x84", size: "16",
		bits: [
			{ name: "ZONE", description: "ZONE Association", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "STACK6_CFG", description: "STACK6 Configuration", offset: "0x88", size: "16",
		bits: [
			{ name: "ZONE", description: "ZONE Association", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "STACK7_CFG", description: "STACK7 Configuration", offset: "0x8C", size: "16",
		bits: [
			{ name: "ZONE", description: "ZONE Association", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "RAMOPENSTAT", description: "RAMOPEN Feature Status Register", offset: "0x90", size: "16",
		bits: [
			{ name: "LINK1_RAMOPENS", description: "LINK1 RAM Open Status Bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "RAMOPENFRC", description: "RAMOPEN Feature Force Register", offset: "0x94", size: "16",
		bits: [
			{ name: "SET_LINK1", description: "Set LINK1 RAM Open Request", size: "1", shift: "8", mask: "0x100" },
			{ name: "WIPE_ON_LINK1_CLR", description: "Wipe LINK1 RAM on Clear Request", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "RAMOPENCLR", description: "RAMOPEN Feature Clear Register", offset: "0x98", size: "16",
		bits: [
			{ name: "CLEAR_LINK1", description: "Clear LINK1 RAM Open Request", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DECODER_ADDR_IN", description: "SW ZONE Decoder Address Input", offset: "0xA0", size: "32",
		bits: [
			{ name: "ADDR_L", description: "Address Bits 15:12", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDR_H", description: "Address Bits 31:16", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "DECODER_OUT", description: "SW ZONE Decoder Output", offset: "0xA4", size: "32",
		bits: [
			{ name: "LINK", description: "Decoded LINK", size: "4", shift: "0", mask: "0xF" },
			{ name: "STACK", description: "Decoded STACK", size: "3", shift: "4", mask: "0x70" },
			{ name: "ZONE", description: "Decoded ZONE", size: "2", shift: "8", mask: "0x300" },
			{ name: "APR", description: "Access Protection Region", size: "7", shift: "16", mask: "0x7F0000" },
			{ name: "INVALID", description: "Decoder Output Invalid", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "EMU_DECODER_ADDR_IN", description: "SW ZONE Decoder Address Input", offset: "0xA8", size: "32",
		bits: [
			{ name: "ADDR_L", description: "Address Bits 15:12", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDR_H", description: "Address Bits 31:16", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "EMU_DECODER_OUT", description: "SW ZONE Decoder Output", offset: "0xAC", size: "32",
		bits: [
			{ name: "LINK", description: "Decoded LINK", size: "4", shift: "0", mask: "0xF" },
			{ name: "STACK", description: "Decoded STACK", size: "3", shift: "4", mask: "0x70" },
			{ name: "ZONE", description: "Decoded ZONE", size: "2", shift: "8", mask: "0x300" },
			{ name: "APR", description: "Access Protection Region", size: "7", shift: "16", mask: "0x7F0000" },
			{ name: "INVALID", description: "Decoder Output Invalid", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "AP_CFG", description: "(0 <= i < 64) Access Protection Configuration", offset: "(0x0 + ((i) * 32))", count: "64", size: "16",
		bits: [
			{ name: "LINKID", description: "LINK ID Value", size: "4", shift: "0", mask: "0xF" },
			{ name: "APD", description: "Access Protection Disable", size: "1", shift: "6", mask: "0x40" },
			{ name: "XE", description: "Execute Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "APILINK", description: "Access Protection Inheritance LINK", size: "4", shift: "8", mask: "0xF00" },
			{ name: "APILINKE", description: "Access Protection Inheritance LINK Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "AP_START", description: "(0 <= i < 64) Access Protection  Start Address", offset: "(0x4 + ((i) * 32))", count: "64", size: "16",
		bits: [
			{ name: "EXT_ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "EXT_ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "MEMTYPE", description: "Start Address Memory Type", size: "3", shift: "28", mask: "0x70000000" },
			{ name: "ADDRL", description: "Lower Start Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper Start Address", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "MEMTYPE", description: "Start Address Memory Type", size: "3", shift: "28", mask: "0x70000000" },
		]
	},
	{ name: "AP_END", description: "(0 <= i < 64) Access Protection  End Address", offset: "(0x8 + ((i) * 32))", count: "64", size: "16",
		bits: [
			{ name: "EXT_ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "EXT_ADDRH", description: "Upper End Address", size: "16", shift: "16", mask: "0xFFFF0000" },
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "MEMTYPE", description: "Start Address Memory Type", size: "3", shift: "28", mask: "0x70000000" },
			{ name: "ADDRL", description: "Lower End Address", size: "4", shift: "12", mask: "0xF000" },
			{ name: "ADDRH", description: "Upper End Address", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "MEMTYPE", description: "Start Address Memory Type", size: "3", shift: "28", mask: "0x70000000" },
		]
	},
	{ name: "AP_LOCK", description: "(0 <= i < 64) Access Protection Temporary Lock", offset: "(0xC + ((i) * 32))", count: "64", size: "16",
		bits: [
			{ name: "LOCK", description: "Temporary Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "AP_COMMIT", description: "(0 <= i < 64) Access Protection Permanent Commit", offset: "(0x10 + ((i) * 32))", count: "64", size: "16",
		bits: [
			{ name: "COMMIT", description: "Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "AP_ACCESS", description: "(0 <= i < 64) Access Protection  R/W Access Permissions", offset: "(0x14 + ((i) * 32))", count: "64", size: "32",
		bits: [
			{ name: "LINK0", description: "LINK0 Access Permissions", size: "2", shift: "0", mask: "0x3" },
			{ name: "LINK1", description: "LINK1 Access Permissions", size: "2", shift: "2", mask: "0xC" },
			{ name: "LINK2", description: "LINK2 Access Permissions", size: "2", shift: "4", mask: "0x30" },
			{ name: "LINK3", description: "LINK3 Access Permissions", size: "2", shift: "6", mask: "0xC0" },
			{ name: "LINK4", description: "LINK4 Access Permissions", size: "2", shift: "8", mask: "0x300" },
			{ name: "LINK5", description: "LINK5 Access Permissions", size: "2", shift: "10", mask: "0xC00" },
			{ name: "LINK6", description: "LINK6 Access Permissions", size: "2", shift: "12", mask: "0x3000" },
			{ name: "LINK7", description: "LINK7 Access Permissions", size: "2", shift: "14", mask: "0xC000" },
			{ name: "LINK8", description: "LINK8 Access Permissions", size: "2", shift: "16", mask: "0x30000" },
			{ name: "LINK9", description: "LINK9 Access Permissions", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "LINK10", description: "LINK10 Access Permissions", size: "2", shift: "20", mask: "0x300000" },
			{ name: "LINK11", description: "LINK11 Access Permissions", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "LINK12", description: "LINK12 Access Permissions", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "LINK13", description: "LINK13 Access Permissions", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "LINK14", description: "LINK14 Access Permissions", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "LINK15", description: "LINK15 Access Permissions", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
];
module.exports = {
	ssuRegisters: SSU_REGISTERS,
}
