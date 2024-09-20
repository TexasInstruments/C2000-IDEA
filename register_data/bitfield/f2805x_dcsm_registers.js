let DCSM_REGISTERS = [
	{ name: "Z1_LINKPOINTER", description: "Zone 1 Link Pointer", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "Z1_OTPSECLOCK", description: "Zone 1 OTP Secure JTAG lock", offset: "0x2", size: "32",
		bits: [
			{ name: "JTAGLOCK", description: "JTAG Lock Bits", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "BOOTMODE", description: "Boot Mode", offset: "0x4", size: "32",
		bits: [
			{ name: "OTP_KEY", description: "OTP Boot Key", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "OTP_BMODE", description: "OTP Boot Mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "Z1_CSMKEY0", description: "Zone 1 CSM Key 0", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "Z1_CSMKEY1", description: "Zone 1 CSM Key 1", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "Z1_CSMKEY2", description: "Zone 1 CSM Key 2", offset: "0x14", size: "32",
		bits: [
		]
	},
	{ name: "Z1_CSMKEY3", description: "Zone 1 CSM Key 3", offset: "0x16", size: "32",
		bits: [
		]
	},
	{ name: "Z1_CR", description: "Zone 1 CSM Control Reg.", offset: "0x19", size: "16",
		bits: [
			{ name: "ALLZERO", description: "CSMPSWD All Zeros", size: "1", shift: "3", mask: "0x8" },
			{ name: "ALLONE", description: "CSMPSWD All Ones", size: "1", shift: "4", mask: "0x10" },
			{ name: "MATCH", description: "CSMPSWD Match CSMKEY", size: "1", shift: "5", mask: "0x20" },
			{ name: "ARMED", description: "CSM Armed", size: "1", shift: "6", mask: "0x40" },
			{ name: "FORCESEC", description: "Force Secure", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "Z1_GRABSECTR", description: "Zone 1 Grab Flash Sectors", offset: "0x1A", size: "32",
		bits: [
			{ name: "GRAB_SECT0", description: "Grab Flash Sector 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "GRAB_SECT1", description: "Grab Flash Sector 1", size: "2", shift: "2", mask: "0xC" },
			{ name: "GRAB_SECT2", description: "Grab Flash Sector 2", size: "2", shift: "4", mask: "0x30" },
			{ name: "GRAB_SECT3", description: "Grab Flash Sector 3", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GRAB_SECT4", description: "Grab Flash Sector 4", size: "2", shift: "8", mask: "0x300" },
			{ name: "GRAB_SECT5", description: "Grab Flash Sector 5", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GRAB_SECT6", description: "Grab Flash Sector 6", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GRAB_SECT7", description: "Grab Flash Sector 7", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GRAB_SECT8", description: "Grab Flash Sector 8", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GRAB_SECT9", description: "Grab Flash Sector 9", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "Z1_GRABRAMR", description: "Zone 1 Grab RAM Blocks", offset: "0x1C", size: "32",
		bits: [
			{ name: "GRAB_RAM0", description: "Grab RAM L0", size: "2", shift: "0", mask: "0x3" },
			{ name: "GRAB_RAM1", description: "Grab RAM L1", size: "2", shift: "2", mask: "0xC" },
			{ name: "GRAB_RAM2", description: "Grab RAM L2", size: "2", shift: "4", mask: "0x30" },
			{ name: "GRAB_RAM3", description: "Grab RAM L3", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "Z1_EXEONLYSECTR", description: "Zone 1 Flash Execute_Only", offset: "0x1E", size: "32",
		bits: [
			{ name: "EXEONLY_SECT0", description: "Execute-Only Flash Sector 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "EXEONLY_SECT1", description: "Execute-Only Flash Sector 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "EXEONLY_SECT2", description: "Execute-Only Flash Sector 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "EXEONLY_SECT3", description: "Execute-Only Flash Sector 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "EXEONLY_SECT4", description: "Execute-Only Flash Sector 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "EXEONLY_SECT5", description: "Execute-Only Flash Sector 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "EXEONLY_SECT6", description: "Execute-Only Flash Sector 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "EXEONLY_SECT7", description: "Execute-Only Flash Sector 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "EXEONLY_SECT8", description: "Execute-Only Flash Sector 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "EXEONLY_SECT9", description: "Execute-Only Flash Sector 9", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "Z1_EXEONLYRAMR", description: "Zone 1 RAM Execute_Only", offset: "0x20", size: "32",
		bits: [
			{ name: "EXEONLY_RAM0", description: "Execute-Only RAM L0", size: "1", shift: "0", mask: "0x1" },
			{ name: "EXEONLY_RAM1", description: "Execute-Only RAM L1", size: "1", shift: "1", mask: "0x2" },
			{ name: "EXEONLY_RAM2", description: "Execute-Only RAM L2", size: "1", shift: "2", mask: "0x4" },
			{ name: "EXEONLY_RAM3", description: "Execute-Only RAM L3", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "Z2_LINKPOINTER", description: "Zone 2 Link Pointer", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "Z2_OTPSECLOCK", description: "Zone 2 OTP Secure JTAG lock", offset: "0x2", size: "32",
		bits: [
			{ name: "JTAGLOCK", description: "JTAG Lock Bits", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "BOOTMODE", description: "Boot Mode", offset: "0x4", size: "32",
		bits: [
			{ name: "OTP_KEY", description: "OTP Boot Key", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "OTP_BMODE", description: "OTP Boot Mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "Z2_CSMKEY0", description: "Zone 2 CSM Key 0", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "Z2_CSMKEY1", description: "Zone 2 CSM Key 1", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "Z2_CSMKEY2", description: "Zone 2 CSM Key 2", offset: "0x14", size: "32",
		bits: [
		]
	},
	{ name: "Z2_CSMKEY3", description: "Zone 2 CSM Key 3", offset: "0x16", size: "32",
		bits: [
		]
	},
	{ name: "Z2_CR", description: "Zone 2 CSM Control Reg.", offset: "0x19", size: "16",
		bits: [
			{ name: "ALLZERO", description: "CSMPSWD All Zeros", size: "1", shift: "3", mask: "0x8" },
			{ name: "ALLONE", description: "CSMPSWD All Ones", size: "1", shift: "4", mask: "0x10" },
			{ name: "MATCH", description: "CSMPSWD Match CSMKEY", size: "1", shift: "5", mask: "0x20" },
			{ name: "ARMED", description: "CSM Armed", size: "1", shift: "6", mask: "0x40" },
			{ name: "FORCESEC", description: "Force Secure", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "Z2_GRABSECTR", description: "Zone 2 Grab Flash Sectors", offset: "0x1A", size: "32",
		bits: [
			{ name: "GRAB_SECT0", description: "Grab Flash Sector 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "GRAB_SECT1", description: "Grab Flash Sector 1", size: "2", shift: "2", mask: "0xC" },
			{ name: "GRAB_SECT2", description: "Grab Flash Sector 2", size: "2", shift: "4", mask: "0x30" },
			{ name: "GRAB_SECT3", description: "Grab Flash Sector 3", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GRAB_SECT4", description: "Grab Flash Sector 4", size: "2", shift: "8", mask: "0x300" },
			{ name: "GRAB_SECT5", description: "Grab Flash Sector 5", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GRAB_SECT6", description: "Grab Flash Sector 6", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GRAB_SECT7", description: "Grab Flash Sector 7", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GRAB_SECT8", description: "Grab Flash Sector 8", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GRAB_SECT9", description: "Grab Flash Sector 9", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "Z2_GRABRAMR", description: "Zone 2 Grab RAM Blocks", offset: "0x1C", size: "32",
		bits: [
			{ name: "GRAB_RAM0", description: "Grab RAM L0", size: "2", shift: "0", mask: "0x3" },
			{ name: "GRAB_RAM1", description: "Grab RAM L1", size: "2", shift: "2", mask: "0xC" },
			{ name: "GRAB_RAM2", description: "Grab RAM L2", size: "2", shift: "4", mask: "0x30" },
			{ name: "GRAB_RAM3", description: "Grab RAM L3", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "Z2_EXEONLYSECTR", description: "Zone 2 Flash Execute_Only", offset: "0x1E", size: "32",
		bits: [
			{ name: "EXEONLY_SECT0", description: "Execute-Only Flash Sector 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "EXEONLY_SECT1", description: "Execute-Only Flash Sector 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "EXEONLY_SECT2", description: "Execute-Only Flash Sector 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "EXEONLY_SECT3", description: "Execute-Only Flash Sector 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "EXEONLY_SECT4", description: "Execute-Only Flash Sector 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "EXEONLY_SECT5", description: "Execute-Only Flash Sector 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "EXEONLY_SECT6", description: "Execute-Only Flash Sector 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "EXEONLY_SECT7", description: "Execute-Only Flash Sector 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "EXEONLY_SECT8", description: "Execute-Only Flash Sector 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "EXEONLY_SECT9", description: "Execute-Only Flash Sector 9", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "Z2_EXEONLYRAMR", description: "Zone 2 RAM Execute_Only", offset: "0x20", size: "32",
		bits: [
			{ name: "EXEONLY_RAM0", description: "Execute-Only RAM L0", size: "1", shift: "0", mask: "0x1" },
			{ name: "EXEONLY_RAM1", description: "Execute-Only RAM L1", size: "1", shift: "1", mask: "0x2" },
			{ name: "EXEONLY_RAM2", description: "Execute-Only RAM L2", size: "1", shift: "2", mask: "0x4" },
			{ name: "EXEONLY_RAM3", description: "Execute-Only RAM L3", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "FLSEM", description: "Flash Wrapper Semaphore Register", offset: "0x0", size: "32",
		bits: [
			{ name: "SEM", description: "Flash Semaphore Bit", size: "2", shift: "0", mask: "0x3" },
			{ name: "KEY", description: "Semaphore Key", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "SECTSTAT", description: "Sectors Status Register", offset: "0x2", size: "32",
		bits: [
			{ name: "STATUS_SECT0", description: "Zone Status Flash Sector 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "STATUS_SECT1", description: "Zone Status Flash Sector 1", size: "2", shift: "2", mask: "0xC" },
			{ name: "STATUS_SECT2", description: "Zone Status Flash Sector 2", size: "2", shift: "4", mask: "0x30" },
			{ name: "STATUS_SECT3", description: "Zone Status Flash Sector 3", size: "2", shift: "6", mask: "0xC0" },
			{ name: "STATUS_SECT4", description: "Zone Status Flash Sector 4", size: "2", shift: "8", mask: "0x300" },
			{ name: "STATUS_SECT5", description: "Zone Status Flash Sector 5", size: "2", shift: "10", mask: "0xC00" },
			{ name: "STATUS_SECT6", description: "Zone Status Flash Sector 6", size: "2", shift: "12", mask: "0x3000" },
			{ name: "STATUS_SECT7", description: "Zone Status Flash Sector 7", size: "2", shift: "14", mask: "0xC000" },
			{ name: "STATUS_SECT8", description: "Zone Status Flash Sector 8", size: "2", shift: "16", mask: "0x30000" },
			{ name: "STATUS_SECT9", description: "Zone Status Flash Sector 9", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "RAMSTAT", description: "RAM Status Register", offset: "0x4", size: "32",
		bits: [
			{ name: "STATUS_RAM0", description: "Zone Status RAM L0", size: "2", shift: "0", mask: "0x3" },
			{ name: "STATUS_RAM1", description: "Zone Status RAM L1", size: "2", shift: "2", mask: "0xC" },
			{ name: "STATUS_RAM2", description: "Zone Status RAM L2", size: "2", shift: "4", mask: "0x30" },
			{ name: "STATUS_RAM3", description: "Zone Status RAM L3", size: "2", shift: "6", mask: "0xC0" },
		]
	},
];
module.exports = {
	dcsmRegisters: DCSM_REGISTERS,
}
