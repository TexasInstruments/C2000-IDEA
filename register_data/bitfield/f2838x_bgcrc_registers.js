let BGCRC_REGISTERS = [
	{ name: "BGCRC_EN", description: "BGCRC Enable", offset: "0x0", size: "32",
		bits: [
			{ name: "START", description: "Start Bit used to  Kick-off CRC calculations", size: "4", shift: "0", mask: "0xF" },
			{ name: "RUN_STS", description: "CRC module activity monitor", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "BGCRC_CTRL1", description: "BGCRC Control register 1", offset: "0x2", size: "32",
		bits: [
			{ name: "FREE_SOFT", description: "emulation control bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "NMIDIS", description: "NMI disable configuration", size: "4", shift: "16", mask: "0xF0000" },
		]
	},
	{ name: "BGCRC_CTRL2", description: "BGCRC Control register 2", offset: "0x4", size: "32",
		bits: [
			{ name: "BLOCK_SIZE", description: "block size for memory check", size: "10", shift: "0", mask: "0x3FF" },
			{ name: "TEST_HALT", description: "TEST_HALT configuration", size: "4", shift: "12", mask: "0xF000" },
			{ name: "SCRUB_MODE", description: "Scrub mode configuration", size: "4", shift: "16", mask: "0xF0000" },
		]
	},
	{ name: "BGCRC_START_ADDR", description: "Start address for the BGCRC check", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_SEED", description: "Seed for CRC calculation", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_GOLDEN", description: "Golden CRC to be compared against", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_RESULT", description: "CRC calculated", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_CURR_ADDR", description: "Current address regsiter", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_WD_CFG", description: "BGCRC windowed watchdog configuration", offset: "0x1C", size: "32",
		bits: [
			{ name: "WDDIS", description: "CRC Watchdog disable", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "BGCRC_WD_MIN", description: "BGCRC windowed watchdog min value", offset: "0x1E", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_WD_MAX", description: "BGCRC windowed watchdog max value", offset: "0x20", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_WD_CNT", description: "BGCRC windowed watchdog count", offset: "0x22", size: "32",
		bits: [
		]
	},
	{ name: "BGCRC_NMIFLG", description: "BGCRC NMI flag register", offset: "0x2A", size: "32",
		bits: [
			{ name: "CRC_FAIL", description: "CRC computation failed", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "Uncorrectable error obtained during memory data read.", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "Correctable ECC error obtained during memory data read.", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "CRC/scrubbing completed before BGCRC_WD_MIN", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "CRC/scrubbing did not complete within BGCRC_WD_MAX", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_NMICLR", description: "BGCRC NMI flag clear register", offset: "0x2C", size: "32",
		bits: [
			{ name: "CRC_FAIL", description: "CRC_FAIL NMI flag clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "UNCORRECTABLE_ERR NMI flag clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "CORRECTABLE_ERR NMI flag clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "WD_UNDERFLOW NMI flag clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "WD_OVERFLOW NMI flag clear", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_NMIFRC", description: "BGCRC NMI flag force register", offset: "0x2E", size: "32",
		bits: [
			{ name: "CRC_FAIL", description: "CRC_FAIL NMI force", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "UNCORRECTABLE_ERR NMI force", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "CORRECTABLE_ERR NMI force", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "WD_UNDERFLOW NMI force", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "WD_OVERFLOW NMI force", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_INTEN", description: "Interrupt enable", offset: "0x34", size: "32",
		bits: [
			{ name: "TEST_DONE", description: "TEST_DONE interrupt enable register", size: "1", shift: "1", mask: "0x2" },
			{ name: "CRC_FAIL", description: "CRC_FAIL interrupt enable register", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "UNCORRECTABLE_ERR interrupt enable register", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "CORRECTABLE_ERR interrupt enable register", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "WD_UNDERFLOW interrupt enable register", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "WD_OVERFLOW interrupt enable register", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_INTFLG", description: "Interrupt flag", offset: "0x36", size: "32",
		bits: [
			{ name: "INT", description: "Global Interrupt status flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "TEST_DONE", description: "TEST_DONE Interrupt status flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CRC_FAIL", description: "CRC computation failed", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "Uncorrectable error obtained during memory data read.", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "Correctable ECC error obtained during memory data read.", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "CRC/scrubbing completed before BGCRC_WD_MIN", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "CRC/scrubbing did not complete within BGCRC_WD_MAX", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_INTCLR", description: "Interrupt flag clear", offset: "0x38", size: "32",
		bits: [
			{ name: "INT", description: "Global Interrupt clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "TEST_DONE", description: "TEST_DONE Interrupt clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CRC_FAIL", description: "CRC_FAIL interrupt clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "UNCORRECTABLE_ERR interrupt clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "CORRECTABLE_ERR interrupt clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "WD_UNDERFLOW interrupt clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "WD_OVERFLOW interrupt clear", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_INTFRC", description: "Interrupt flag force", offset: "0x3A", size: "32",
		bits: [
			{ name: "TEST_DONE", description: "TEST_DONE Interrupt force", size: "1", shift: "1", mask: "0x2" },
			{ name: "CRC_FAIL", description: "CRC_FAIL interrupt force", size: "1", shift: "2", mask: "0x4" },
			{ name: "UNCORRECTABLE_ERR", description: "UNCORRECTABLE_ERR interrupt force", size: "1", shift: "3", mask: "0x8" },
			{ name: "CORRECTABLE_ERR", description: "CORRECTABLE_ERR interrupt force", size: "1", shift: "4", mask: "0x10" },
			{ name: "WD_UNDERFLOW", description: "WD_UNDERFLOW interrupt force", size: "1", shift: "5", mask: "0x20" },
			{ name: "WD_OVERFLOW", description: "WD_OVERFLOW interrupt force", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "BGCRC_LOCK", description: "BGCRC register map lockconfiguration", offset: "0x3C", size: "32",
		bits: [
			{ name: "BGCRC_EN", description: "Register lock configuration", size: "1", shift: "0", mask: "0x1" },
			{ name: "BGCRC_CTRL1", description: "Register lock configuration", size: "1", shift: "1", mask: "0x2" },
			{ name: "BGCRC_CTRL2", description: "Register lock configuration", size: "1", shift: "2", mask: "0x4" },
			{ name: "BGCRC_START_ADDR", description: "Register lock configuration", size: "1", shift: "3", mask: "0x8" },
			{ name: "BGCRC_SEED", description: "Register lock configuration", size: "1", shift: "4", mask: "0x10" },
			{ name: "BGCRC_GOLDEN", description: "Register lock configuration", size: "1", shift: "7", mask: "0x80" },
			{ name: "BGCRC_WD_CFG", description: "Register lock configuration", size: "1", shift: "14", mask: "0x4000" },
			{ name: "BGCRC_WD_MIN", description: "Register lock configuration", size: "1", shift: "15", mask: "0x8000" },
			{ name: "BGCRC_WD_MAX", description: "Register lock configuration", size: "1", shift: "16", mask: "0x10000" },
			{ name: "BGCRC_NMIFRC", description: "Register lock configuration", size: "1", shift: "23", mask: "0x800000" },
			{ name: "BGCRC_INTEN", description: "Register lock configuration", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "BGCRC_INTFRC", description: "Register lock configuration", size: "1", shift: "29", mask: "0x20000000" },
		]
	},
	{ name: "BGCRC_COMMIT", description: "BGCRC register map commit configuration", offset: "0x3E", size: "32",
		bits: [
			{ name: "BGCRC_EN", description: "Register lock committed", size: "1", shift: "0", mask: "0x1" },
			{ name: "BGCRC_CTRL1", description: "Register lock committed", size: "1", shift: "1", mask: "0x2" },
			{ name: "BGCRC_CTRL2", description: "Register lock committed", size: "1", shift: "2", mask: "0x4" },
			{ name: "BGCRC_START_ADDR", description: "Register lock committed", size: "1", shift: "3", mask: "0x8" },
			{ name: "BGCRC_SEED", description: "Register lock committed", size: "1", shift: "4", mask: "0x10" },
			{ name: "BGCRC_GOLDEN", description: "Register lock committed", size: "1", shift: "7", mask: "0x80" },
			{ name: "BGCRC_WD_CFG", description: "Register lock committed", size: "1", shift: "14", mask: "0x4000" },
			{ name: "BGCRC_WD_MIN", description: "Register lock committed", size: "1", shift: "15", mask: "0x8000" },
			{ name: "BGCRC_WD_MAX", description: "Register lock committed", size: "1", shift: "16", mask: "0x10000" },
			{ name: "BGCRC_NMIFRC", description: "Register lock committed", size: "1", shift: "23", mask: "0x800000" },
			{ name: "BGCRC_INTEN", description: "Register lock committed", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "BGCRC_INTFRC", description: "Register lock committed", size: "1", shift: "29", mask: "0x20000000" },
		]
	},
];
module.exports = {
	bgcrcRegisters: BGCRC_REGISTERS,
}
