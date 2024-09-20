let NMIINTRUPT_REGISTERS = [
	{ name: "NMICFG", description: "NMI Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "NMIE", description: "Global NMI Enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "NMIFLG", description: "NMI Flag Register (XRSn Clear)", offset: "0x1", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMI Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "Clock Fail Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "RAMUNCERR", description: "RAM Uncorrectable Error NMI Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "FLUNCERR", description: "Flash Uncorrectable Error NMI Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "HW BIST Error NMI Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLBNMI", description: "Configurable Logic Block NMI Flag", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "NMIFLGCLR", description: "NMI Flag Clear Register", offset: "0x2", size: "16",
		bits: [
			{ name: "NMIINT", description: "NMIINT Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLOCKFAIL", description: "CLOCKFAIL Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "RAMUNCERR", description: "RAMUNCERR Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "FLUNCERR", description: "FLUNCERR Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "CPU1HWBISTERR Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLBNMI", description: "CLBNMI Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "OVF", description: "OVF Flag Clear", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "NMIFLGFRC", description: "NMI Flag Force Register", offset: "0x3", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "CLOCKFAIL Flag Force", size: "1", shift: "1", mask: "0x2" },
			{ name: "RAMUNCERR", description: "RAMUNCERR Flag Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "FLUNCERR", description: "FLUNCERR Flag Force", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "CPU1HWBISTERR Flag Force", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLBNMI", description: "CLBNMI Flag Force", size: "1", shift: "8", mask: "0x100" },
			{ name: "OVF", description: "OVF Flag Force", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "NMIWDCNT", description: "NMI Watchdog Counter Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "NMIWDPRD", description: "NMI Watchdog Period Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "NMISHDFLG", description: "NMI Shadow Flag Register", offset: "0x6", size: "16",
		bits: [
			{ name: "CLOCKFAIL", description: "Shadow CLOCKFAIL Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "RAMUNCERR", description: "Shadow RAMUNCERR Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "FLUNCERR", description: "Shadow FLUNCERR Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU1HWBISTERR", description: "Shadow CPU1HWBISTERR Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLBNMI", description: "Shadow CLBNMI Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "OVF", description: "Shadow OVF Flag", size: "1", shift: "11", mask: "0x800" },
		]
	},
];
module.exports = {
	nmiintruptRegisters: NMIINTRUPT_REGISTERS,
}
