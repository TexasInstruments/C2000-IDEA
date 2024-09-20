let WWD_REGISTERS = [
	{ name: "SCSR", description: "System Control & Status Register", offset: "0x22", size: "16",
		bits: [
			{ name: "WDOVERRIDE", description: "WD Override for WDDIS bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "WDENINT", description: "WD Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDINTS", description: "WD Interrupt Status", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "WDCNTR", description: "Watchdog Counter Register", offset: "0x23", size: "16",
		bits: [
			{ name: "WDCNTR", description: "WD Counter", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "WDKEY", description: "Watchdog Reset Key Register", offset: "0x25", size: "16",
		bits: [
			{ name: "WDKEY", description: "WD KEY", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "WDCR", description: "Watchdog Control Register", offset: "0x29", size: "16",
		bits: [
			{ name: "WDPS", description: "WD Clock Prescalar", size: "3", shift: "0", mask: "0x7" },
			{ name: "WDCHK", description: "WD Check Bits", size: "3", shift: "3", mask: "0x38" },
			{ name: "WDDIS", description: "WD Disable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WDFLG", description: "WD Reset Status Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "WDPRECLKDIV", description: "WD Pre Clock Divider", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "WDWCR", description: "Watchdog Windowed Control Register", offset: "0x2A", size: "16",
		bits: [
			{ name: "MIN", description: "WD Min Threshold setting for Windowed Watchdog functionality", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FIRSTKEY", description: "First Key Detect Flag", size: "1", shift: "8", mask: "0x100" },
		]
	},
];
module.exports = {
	wwdRegisters: WWD_REGISTERS,
}
