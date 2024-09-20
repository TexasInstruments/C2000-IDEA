let WD_REGISTERS = [
	{ name: "SCSR", description: "System Control & Status Register", offset: "0x44", size: "16",
		bits: [
			{ name: "WDOVERRIDE", description: "WD Override for WDDIS bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "WDENINT", description: "WD Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDINTS", description: "WD Interrupt Status", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "CNTR", description: "Watchdog Counter Register", offset: "0x46", size: "16",
		bits: [
			{ name: "WDCNTR", description: "WD Counter", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "KEY", description: "Watchdog Reset Key Register", offset: "0x4A", size: "16",
		bits: [
			{ name: "WDKEY", description: "WD KEY", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CR", description: "Watchdog Control Register", offset: "0x52", size: "16",
		bits: [
			{ name: "WDPS", description: "WD Clock Prescalar", size: "3", shift: "0", mask: "0x7" },
			{ name: "WDCHK", description: "WD Check Bits", size: "3", shift: "3", mask: "0x38" },
			{ name: "WDDIS", description: "WD Disable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WDFLG", description: "WD Reset Status Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "WDPRECLKDIV", description: "WD Pre Clock Divider", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "WCR", description: "Watchdog Windowed Control Register", offset: "0x54", size: "16",
		bits: [
			{ name: "MIN", description: "WD Min Threshold setting for Windowed Watchdog functionality", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FIRSTKEY", description: "First Key Detect Flag", size: "1", shift: "8", mask: "0x100" },
		]
	},
];
module.exports = {
	wdRegisters: WD_REGISTERS,
}
