let HIC_REGISTERS = [
	{ name: "HICREV", description: "Module Revision Register", offset: "0x0", size: "32",
		bits: [
			{ name: "MINOR", description: "Minor Revision Number", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "Custom Module Number", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "RTL", description: "Design Release Number", size: "5", shift: "11", mask: "0xF800" },
			{ name: "FUNC", description: "Functional Release Number", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "SCHEME", description: "Defines Scheme for Module", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "HICGCR", description: "Global Control Register", offset: "0x2", size: "32",
		bits: [
			{ name: "HICEN", description: "Host Interface Enable", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "HICLOCK", description: "Lock Register", offset: "0x4", size: "32",
		bits: [
			{ name: "LOCK", description: "LOCK enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "WRITE_ENABLE_KEY", description: "Key for enabling write", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "HICMODECR", description: "Mode Control Register", offset: "0x6", size: "32",
		bits: [
			{ name: "DW_MODE", description: "Data Width Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "RW_MODE", description: "Read-Write Mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "BEN_PRESENT", description: "Byte Enable Pins are present", size: "1", shift: "5", mask: "0x20" },
			{ name: "RDY_PRESENT", description: "Ready pin present", size: "1", shift: "6", mask: "0x40" },
			{ name: "H2DBUF_DEVWREN", description: "Write Enable for Device to H2D Buffer", size: "1", shift: "8", mask: "0x100" },
			{ name: "D2HBUF_HOSTWREN", description: "Write Enable for Host to D2H Buffer", size: "1", shift: "9", mask: "0x200" },
			{ name: "EN_DEVACC", description: "Enable Host access to Device region", size: "1", shift: "10", mask: "0x400" },
			{ name: "EN_HOSTWREALLOW", description: "Enable Host Write to EALLOWCTL register", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "HICPINPOLCR", description: "Pin Polarity Control Register", offset: "0x8", size: "32",
		bits: [
			{ name: "CS_POL", description: "Chip Select Polarity", size: "1", shift: "0", mask: "0x1" },
			{ name: "BEN_POL", description: "Byte Enable Polarity", size: "1", shift: "1", mask: "0x2" },
			{ name: "OE_POL", description: "Output Enable Polarity", size: "1", shift: "2", mask: "0x4" },
			{ name: "WE_POL", description: "Write Enable Polarity", size: "1", shift: "3", mask: "0x8" },
			{ name: "RDY_POL", description: "Ready Polarity", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "HICBASESEL", description: "Base Select Register", offset: "0xA", size: "32",
		bits: [
			{ name: "BASE_SELECT", description: "Base Select", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "HICHOSTCR", description: "HIC Host Control Register", offset: "0xC", size: "32",
		bits: [
			{ name: "EALLOW_EN", description: "EALLOW Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "ACCSIZE", description: "Access Size", size: "1", shift: "1", mask: "0x2" },
			{ name: "PAGESEL", description: "Page Select", size: "1", shift: "2", mask: "0x4" },
			{ name: "HKEY", description: "Host Key", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "HICERRADDR", description: "Host Error Address register", offset: "0xE", size: "32",
		bits: [
			{ name: "H2D_ERR_ADDR", description: "Address of the Host bus captured upon an error for Device", size: "8", shift: "0", mask: "0xFF" },
			{ name: "H2D_BASE_SEL", description: "Base Select corresponding to H2D error event", size: "3", shift: "12", mask: "0x7000" },
			{ name: "D2H_ERR_ADDR", description: "Address of the Host bus captured upon an error for Host", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "D2H_BASE_SEL", description: "Base Select corresponding to D2H error event", size: "3", shift: "28", mask: "0x70000000" },
		]
	},
	{ name: "HICH2DTOKEN", description: "Host to Device Token Register", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "HICD2HTOKEN", description: "Devie to Host Token Register", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "HICDBADDR0", description: "Device Base Address Register 0", offset: "0x14", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR1", description: "Device Base Address Register 1", offset: "0x16", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR2", description: "Device Base Address Register 2", offset: "0x18", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR3", description: "Device Base Address Register 3", offset: "0x1A", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR4", description: "Device Base Address Register 4", offset: "0x1C", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR5", description: "Device Base Address Register 5", offset: "0x1E", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR6", description: "Device Base Address Register 6", offset: "0x20", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICDBADDR7", description: "Device Base Address Register 7", offset: "0x22", size: "32",
		bits: [
			{ name: "BASE_ADDR", description: "Base address of device region", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "HICH2DINTEN", description: "H2D Interrupt Enable", offset: "0x28", size: "32",
		bits: [
			{ name: "H2D_INTEN", description: "Host To Device Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_INTEN", description: "BusError Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_INTEN", description: "Illegal Write event interrupt enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_INTEN", description: "Illegal Read event interrupt enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "HICH2DINTFLG", description: "H2D Interrupt status Flag", offset: "0x2A", size: "32",
		bits: [
			{ name: "H2D_FLG", description: "Host To Device Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_FLG", description: "BusError Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_FLG", description: "Illegal write event interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_FLG", description: "Illegal read event interrupt flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "HICH2DINTCLR", description: "H2D Interrupt status Clear", offset: "0x2C", size: "32",
		bits: [
			{ name: "H2D_CLR", description: "Host To Device Interrupt Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_CLR", description: "BusError Interrupt  Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_CLR", description: "Illegal Write Interrupt Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_CLR", description: "Illegal Read Interrupt Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "HICH2DINTFRC", description: "H2D Interrupt Set Force", offset: "0x2E", size: "32",
		bits: [
			{ name: "H2D_INTFRC", description: "Host To Device Force Set", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_INTFRC", description: "BusError Interrupt Force Set", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_INTFRC", description: "Illegal Write Interrupt Force Set", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_INTFRC", description: "Illegal Read Interrupt Force Set", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "HICD2HINTEN", description: "D2H Interrupt Enable", offset: "0x30", size: "32",
		bits: [
			{ name: "D2H_INTEN", description: "Device to Host Data Ready Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_INTEN", description: "BusError Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_INTEN", description: "Illegal Write event Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_INTEN", description: "Illegal Read event Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "ACCVIO_INTEN", description: "Access Violation Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVTRIG_INTEN", description: "Event Trigger Interrupt Enable", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "HICD2HINTFLG", description: "D2H Interrupt status Flag", offset: "0x32", size: "32",
		bits: [
			{ name: "D2H_FLG", description: "Device to Host Data Ready Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_FLG", description: "BusError Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_FLG", description: "Illegal Write event Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_FLG", description: "Illegal Read event Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ACCVIO_FLG", description: "Access Violation Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVTRIG_FLG", description: "Event Trigger Flag", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "HICD2HINTCLR", description: "D2H Interrupt status Clear", offset: "0x34", size: "32",
		bits: [
			{ name: "D2H_CLR", description: "Device to Host Interrupt Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_CLR", description: "BusError Interrupt  Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_CLR", description: "Illegal Write Interrupt Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_CLR", description: "Illegal Read Interrupt Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "ACCVIO_CLR", description: "Access Violation Interrupt Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVTRIG_CLR", description: "Event Trigger Interrupt Clear", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "HICD2HINTFRC", description: "D2H Interrupt Set Force", offset: "0x36", size: "32",
		bits: [
			{ name: "D2H_INTFRC", description: "Device to Host Force Set", size: "1", shift: "0", mask: "0x1" },
			{ name: "BUSERR_INTFRC", description: "BusError Interrupt Force Set", size: "1", shift: "1", mask: "0x2" },
			{ name: "ILLWR_INTFRC", description: "Illegal Write Interrupt Force Set", size: "1", shift: "2", mask: "0x4" },
			{ name: "ILLRD_INTFRC", description: "Illegal Read Interrupt Force Set", size: "1", shift: "3", mask: "0x8" },
			{ name: "ACCVIO_INTFRC", description: "Access Violation Interrupt Force Set", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVTRIG_INTFRC", description: "Event Trigger Interrupt Force Set", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "HICACCVIOADDR", description: "Access Violation Address", offset: "0x38", size: "32",
		bits: [
		]
	},
	{ name: "HICCOMMIT", description: "Commit Register", offset: "0x3A", size: "32",
		bits: [
			{ name: "COMMIT", description: "Commit bit for the HICLOCK register", size: "1", shift: "0", mask: "0x1" },
			{ name: "WRITE_ENABLE_KEY", description: "Key for enabling write", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "H2D_BUF0", description: "Host to Device Buffer 0", offset: "0x40", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF1", description: "Host to Device Buffer 1", offset: "0x42", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF2", description: "Host to Device Buffer 2", offset: "0x44", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF3", description: "Host to Device Buffer 3", offset: "0x46", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF4", description: "Host to Device Buffer 4", offset: "0x48", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF5", description: "Host to Device Buffer 5", offset: "0x4A", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF6", description: "Host to Device Buffer 6", offset: "0x4C", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF7", description: "Host to Device Buffer 7", offset: "0x4E", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF8", description: "Host to Device Buffer 8", offset: "0x50", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF9", description: "Host to Device Buffer 9", offset: "0x52", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF10", description: "Host to Device Buffer 10", offset: "0x54", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF11", description: "Host to Device Buffer 11", offset: "0x56", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF12", description: "Host to Device Buffer 12", offset: "0x58", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF13", description: "Host to Device Buffer 13", offset: "0x5A", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF14", description: "Host to Device Buffer 14", offset: "0x5C", size: "32",
		bits: [
		]
	},
	{ name: "H2D_BUF15", description: "Host to Device Buffer 15", offset: "0x5E", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF0", description: "Device to Host Buffer 0", offset: "0x60", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF1", description: "Device to Host Buffer 1", offset: "0x62", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF2", description: "Device to Host Buffer 2", offset: "0x64", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF3", description: "Device to Host Buffer 3", offset: "0x66", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF4", description: "Device to Host Buffer 4", offset: "0x68", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF5", description: "Device to Host Buffer 5", offset: "0x6A", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF6", description: "Device to Host Buffer 6", offset: "0x6C", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF7", description: "Device to Host Buffer 7", offset: "0x6E", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF8", description: "Device to Host Buffer 8", offset: "0x70", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF9", description: "Device to Host Buffer 9", offset: "0x72", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF10", description: "Device to Host Buffer 10", offset: "0x74", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF11", description: "Device to Host Buffer 11", offset: "0x76", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF12", description: "Device to Host Buffer 12", offset: "0x78", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF13", description: "Device to Host Buffer 13", offset: "0x7A", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF14", description: "Device to Host Buffer 14", offset: "0x7C", size: "32",
		bits: [
		]
	},
	{ name: "D2H_BUF15", description: "Device to Host Buffer 15", offset: "0x7E", size: "32",
		bits: [
		]
	},
];
module.exports = {
	hicRegisters: HIC_REGISTERS,
}
