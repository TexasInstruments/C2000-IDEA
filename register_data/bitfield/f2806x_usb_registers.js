let USB_REGISTERS = [
	{ name: "USBFADDR", description: "USB Device Functional Address", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	FUNCADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBPOWER", description: "USB Power", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	PWRDNPHY", description: "Down PHY", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SUSPEND", description: "Suspend", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	RESUME", description: "Resume Signaling", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	RESET", description: "Reset Signaling", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	SOFT_CONN", description: "Connect/Disconnect", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	ISOUP", description: "Update", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXIS", description: "USB Transmit Interrupt Status", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	EP0", description: "Endpoint 0 Interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	EP1", description: "Endpoint 1 Interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EP2", description: "Endpoint 2 Interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EP3", description: "Endpoint 3 Interrupt", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "USBRXIS", description: "USB Receive Interrupt Status", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	EP1", description: "Endpoint 1 Interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EP2", description: "Endpoint 2 Interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EP3", description: "Endpoint 3 Interrupt", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "USBTXIE", description: "USB Transmit Interrupt Enable", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	EP0", description: "Endpoint 0 Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	EP1", description: "Endpoint 1 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EP2", description: "Endpoint 2 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EP3", description: "Endpoint 3 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "USBRXIE", description: "USB Receive Interrupt Enable", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	EP1", description: "Endpoint 1 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EP2", description: "Endpoint 2 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EP3", description: "Endpoint 3 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "USBIS", description: "USB General Interrupt Status", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	SUSPEND", description: "Signaling Detected Interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	RESUME", description: "Signaling Detected Interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	RESET", description: "Signaling Detected Interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	SOF", description: "Frame Detected Interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DISCON", description: "Disconnection Detected Interrupt", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "USBIE", description: "USB Interrupt Enable", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	SUSPEND", description: "Signaling Detected Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	RESUME", description: "Signaling Detected Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	RESET", description: "Signaling Detected Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	SOF", description: "Frame Detected Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DISCON", description: "Disconnection Detected Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "USBFRAME", description: "USB Frame Value", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	FRAME", description: "Number", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBEPIDX", description: "USB Endpoint Index", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	EPIDX", description: "Index", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "USBTEST", description: "USB Test Mode", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	FORCEFS", description: "Full Speed Upon Reset", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	FIFOACC", description: "Access", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	FORCEH", description: "Host Mode", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBFIFO0", description: "USB FIFO Endpoint 0", offset: "0x10", size: "64",
		bits: [
		]
	},
	{ name: "USBFIFO1", description: "USB FIFO Endpoint 1", offset: "0x10", size: "64",
		bits: [
		]
	},
	{ name: "USBFIFO2", description: "USB FIFO Endpoint 2", offset: "0x10", size: "64",
		bits: [
		]
	},
	{ name: "USBFIFO3", description: "USB FIFO Endpoint 3", offset: "0x10", size: "64",
		bits: [
		]
	},
	{ name: "USBDEVCTL", description: "USB Device Control", offset: "0x40", size: "64",
		bits: [
			{ name: "Uint16	SESSION", description: "Start/End", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	HOSTREQ", description: "Request", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	HOST", description: "Mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	VBUS", description: "Level", size: "2", shift: "3", mask: "0x18" },
			{ name: "Uint16	LSDEV", description: "Speed Device Detected", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	FSDEV", description: "Speed Device Detected", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	DEV", description: "Mode", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXFIFOSZ", description: "USB Transmit Dynamic FIFO Sizing", offset: "0x40", size: "64",
		bits: [
			{ name: "Uint16	SIZE", description: "Packet Size", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	DPB", description: "Packet Buffer Support", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "USBRXFIFOSZ", description: "USB Receive Dynamic FIFO Sizing", offset: "0x40", size: "64",
		bits: [
			{ name: "Uint16	SIZE", description: "Packet Size", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	DPB", description: "Packet Buffer Support", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "USBTXFIFOADD", description: "", offset: "0x40", size: "64",
		bits: [
			{ name: "Uint16	ADDR", description: "Data", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "USBRXFIFOADD", description: "", offset: "0x40", size: "64",
		bits: [
			{ name: "Uint16	ADDR", description: "Data", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "USBCONTIM", description: "USB Connect Timing", offset: "0x52", size: "64",
		bits: [
			{ name: "Uint16	WTID", description: "ID", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	WTCON", description: "Wait", size: "4", shift: "4", mask: "0xF0" },
		]
	},
	{ name: "USBVPLEN", description: "USB OTG VBUS Pulse Timing", offset: "0x52", size: "16",
		bits: [
		]
	},
	{ name: "USBFSEOF", description: "", offset: "0x54", size: "16",
		bits: [
		]
	},
	{ name: "USBLSEOF", description: "", offset: "0x55", size: "16",
		bits: [
		]
	},
	{ name: "USBTXFUNCADDR0", description: "", offset: "0x57", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXHUBADDR0", description: "", offset: "0x59", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXHUBPORT0", description: "", offset: "0x5A", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXFUNCADDR1", description: "", offset: "0x5F", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXHUBADDR1", description: "", offset: "0x61", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXHUBPORT1", description: "", offset: "0x62", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBRXFUNCADDR1", description: "", offset: "0x63", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBRXHUBADDR1", description: "", offset: "0x65", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXHUBPORT1", description: "", offset: "0x66", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXFUNCADDR2", description: "", offset: "0x67", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXHUBADDR2", description: "", offset: "0x69", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXHUBPORT2", description: "", offset: "0x6A", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBRXFUNCADDR2", description: "", offset: "0x6B", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBRXHUBADDR2", description: "", offset: "0x6D", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXHUBPORT2", description: "", offset: "0x6E", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXFUNCADDR3", description: "", offset: "0x6F", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTXHUBADDR3", description: "", offset: "0x71", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXHUBPORT3", description: "", offset: "0x72", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBRXFUNCADDR3", description: "", offset: "0x73", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBRXHUBADDR3", description: "", offset: "0x75", size: "16",
		bits: [
			{ name: "Uint16	ADDR", description: "Address", size: "7", shift: "0", mask: "0x7F" },
			{ name: "Uint16	MULTTRAN", description: "has Multiple Translators", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXHUBPORT3", description: "", offset: "0x76", size: "16",
		bits: [
			{ name: "Uint16	PORT", description: "Port", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBCSRL0", description: "", offset: "0xD9", size: "16",
		bits: [
			{ name: "Uint16	RXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	TXRDY", description: "Packet Ready", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DATAEND_SETUP", description: "End/Setup Packet", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	SETEND_ERROR", description: "End/Error", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALL_RQPKT", description: "Stall /Request Packet", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	RXRDYC_STATUS", description: "Clear/STATUS Packet", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	SETENDC_NAKTO", description: "End Clear/NAK Timeout", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBCSRH0", description: "", offset: "0xDA", size: "16",
		bits: [
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "USBCOUNT0", description: "", offset: "0xDF", size: "16",
		bits: [
			{ name: "Uint16	COUNT", description: "Count", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "USBTYPE0", description: "USB Type Endpoint 0", offset: "0xE1", size: "16",
		bits: [
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBNAKLMT", description: "USB NAK Limit", offset: "0xE2", size: "16",
		bits: [
			{ name: "Uint16	NAKLMT", description: "NAK Limit", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "USBTXMAXP1", description: "", offset: "0xE7", size: "16",
		bits: [
			{ name: "Uint16	MAXLOAD", description: "Payload", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBTXCSRL1", description: "", offset: "0xE8", size: "16",
		bits: [
			{ name: "Uint16	TXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FIFONE", description: "Not Empty", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	UNDRN_ERROR1", description: "2	Underun/Error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	STALL_SETUP", description: "Stall/Setup Packet", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CLRDT", description: "Data Toggle", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	NAKTO", description: "Timeout", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXCSRH1", description: "", offset: "0xE9", size: "16",
		bits: [
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DMAMOD", description: "Request Mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	FDT", description: "Data Toggle", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DMAEN", description: "Request Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	MODE", description: "5	Mode", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ISO", description: "Transfers", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	AUTOSET", description: "Set", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXMAXP1", description: "", offset: "0xEA", size: "16",
		bits: [
			{ name: "Uint16	MAXLOAD", description: "Payload", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBRXCSRL1", description: "", offset: "0xEB", size: "16",
		bits: [
			{ name: "Uint16	RXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FULL", description: "Full", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OVERERROR1", description: "2	Overrun/Error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DATAERRNAKTO", description: "Error/NAK Timeout", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALLREQPKT", description: "Stall/Request Packet", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CLRDT", description: "Data Toggle", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXCSRH1", description: "", offset: "0xEC", size: "16",
		bits: [
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DMAMOD", description: "Request Mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DISNYETPIDERR", description: "Error", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DMAEN", description: "Request Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ISOAUTORQ", description: "Transfers/Auto Request", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	AUTOCL", description: "Clear", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXCOUNT1", description: "", offset: "0xED", size: "16",
		bits: [
			{ name: "Uint16	COUNT", description: "Packet Count", size: "13", shift: "0", mask: "0x1FFF" },
		]
	},
	{ name: "USBTXTYPE1", description: "", offset: "0xEE", size: "16",
		bits: [
			{ name: "Uint16	TEP", description: "Endpoint Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PROTO", description: "5:4	Protocol", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBTXINTERVAL1", description: "", offset: "0xEF", size: "16",
		bits: [
		]
	},
	{ name: "USBRXTYPE1", description: "", offset: "0xF0", size: "16",
		bits: [
			{ name: "Uint16	TEP", description: "Endpoint Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PROTO", description: "5:4	Protocol", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBRXINTERVAL1", description: "", offset: "0xF1", size: "16",
		bits: [
		]
	},
	{ name: "USBTXMAXP2", description: "", offset: "0xF4", size: "16",
		bits: [
			{ name: "Uint16	MAXLOAD", description: "Payload", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBTXCSRL2", description: "", offset: "0xF5", size: "16",
		bits: [
			{ name: "Uint16	TXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FIFONE", description: "Not Empty", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	UNDRNERROR2", description: "2	Underun/Error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	STALLSETUP", description: "Stall/Setup Packet", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CLRDT", description: "Data Toggle", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	NAKTO", description: "Timeout", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXCSRH2", description: "", offset: "0xF6", size: "16",
		bits: [
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DMAMOD", description: "Request Mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	FDT", description: "Data Toggle", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DMAEN", description: "Request Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	MODE", description: "5	Mode", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ISO", description: "Transfers", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	AUTOSET", description: "Set", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXMAXP2", description: "", offset: "0xF7", size: "16",
		bits: [
			{ name: "Uint16	MAXLOAD", description: "Payload", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBRXCSRL2", description: "", offset: "0xF8", size: "16",
		bits: [
			{ name: "Uint16	RXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FULL", description: "Full", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OVERERROR2", description: "2	Overrun/Error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DATAERRNAKTO", description: "Error/NAK Timeout", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALLREQPKT", description: "Stall/Request Packet", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CLRDT", description: "Data Toggle", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXCSRH2", description: "", offset: "0xF9", size: "16",
		bits: [
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DMAMOD", description: "Request Mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DISNYETPIDERR", description: "Error", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DMAEN", description: "Request Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ISOAUTORQ", description: "Transfers/Auto Request", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	AUTOCL", description: "Clear", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXCOUNT2", description: "", offset: "0xFA", size: "16",
		bits: [
			{ name: "Uint16	COUNT", description: "Packet Count", size: "13", shift: "0", mask: "0x1FFF" },
		]
	},
	{ name: "USBTXTYPE2", description: "", offset: "0xFB", size: "16",
		bits: [
			{ name: "Uint16	TEP", description: "Endpoint Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PROTO", description: "5:4	Protocol", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBTXINTERVAL2", description: "", offset: "0xFC", size: "16",
		bits: [
		]
	},
	{ name: "USBRXTYPE2", description: "", offset: "0xFD", size: "16",
		bits: [
			{ name: "Uint16	TEP", description: "Endpoint Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PROTO", description: "5:4	Protocol", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBRXINTERVAL2", description: "", offset: "0xFE", size: "16",
		bits: [
		]
	},
	{ name: "USBTXMAXP3", description: "", offset: "0x101", size: "16",
		bits: [
			{ name: "Uint16	MAXLOAD", description: "Payload", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBTXCSRL3", description: "", offset: "0x102", size: "16",
		bits: [
			{ name: "Uint16	TXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FIFONE", description: "Not Empty", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	UNDRNERROR3", description: "2	Underun/Error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	STALLSETUP", description: "Stall/Setup Packet", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	CLRDT", description: "Data Toggle", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	NAKTO", description: "Timeout", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBTXCSRH3", description: "", offset: "0x103", size: "16",
		bits: [
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DMAMOD", description: "Request Mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	FDT", description: "Data Toggle", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DMAEN", description: "Request Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	MODE", description: "5	Mode", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ISO", description: "Transfers", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	AUTOSET", description: "Set", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXMAXP3", description: "", offset: "0x104", size: "16",
		bits: [
			{ name: "Uint16	MAXLOAD", description: "Payload", size: "11", shift: "0", mask: "0x7FF" },
		]
	},
	{ name: "USBRXCSRL3", description: "", offset: "0x105", size: "16",
		bits: [
			{ name: "Uint16	RXRDY", description: "Packet Ready", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FULL", description: "Full", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OVERERROR3", description: "2	Overrun/Error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DATAERRNAKTO", description: "Error/NAK Timeout", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	FLUSH", description: "FIFO", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	STALLREQPKT", description: "Stall/Request Packet", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	STALLED", description: "Stalled", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	CLRDT", description: "Data Toggle", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXCSRH3", description: "", offset: "0x106", size: "16",
		bits: [
			{ name: "Uint16	DT", description: "Toggle", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	DTWE", description: "Toggle Write Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DMAMOD", description: "Request Mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DISNYETPIDERR", description: "Error", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DMAEN", description: "Request Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	ISOAUTORQ", description: "Transfers/Auto Request", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	AUTOCL", description: "Clear", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "USBRXCOUNT3", description: "", offset: "0x107", size: "16",
		bits: [
			{ name: "Uint16	COUNT", description: "Packet Count", size: "13", shift: "0", mask: "0x1FFF" },
		]
	},
	{ name: "USBTXTYPE3", description: "", offset: "0x108", size: "16",
		bits: [
			{ name: "Uint16	TEP", description: "Endpoint Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PROTO", description: "5:4	Protocol", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBTXINTERVAL3", description: "", offset: "0x109", size: "16",
		bits: [
		]
	},
	{ name: "USBRXTYPE3", description: "", offset: "0x10A", size: "16",
		bits: [
			{ name: "Uint16	TEP", description: "Endpoint Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PROTO", description: "5:4	Protocol", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SPEED", description: "Speed", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "USBRXINTERVAL3", description: "", offset: "0x10B", size: "16",
		bits: [
		]
	},
	{ name: "USBRQPKTCOUNT1", description: "", offset: "0x2D2", size: "32",
		bits: [
		]
	},
	{ name: "USBRQPKTCOUNT2", description: "", offset: "0x2D6", size: "32",
		bits: [
		]
	},
	{ name: "USBRQPKTCOUNT3", description: "", offset: "0x2DA", size: "32",
		bits: [
		]
	},
	{ name: "USBRXDPKTBUFDIS", description: "", offset: "0x30E", size: "32",
		bits: [
			{ name: "Uint16	EP1", description: "RX Double Packet Buffer Disable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EP2", description: "RX Double Packet Buffer Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EP3", description: "RX Double Packet Buffer Disable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "USBTXDPKTBUFDIS", description: "", offset: "0x310", size: "32",
		bits: [
			{ name: "Uint16	EP1", description: "TX Double Packet Buffer Disable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EP2", description: "TX Double Packet Buffer Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EP3", description: "TX Double Packet Buffer Disable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "USBEPC", description: "USB External Power Control", offset: "0x3CE", size: "32",
		bits: [
			{ name: "Uint16	EPEN", description: "Power Supply Enable Configuration", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	EPENDE", description: "Drive Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	PFLTEN", description: "Fault Input Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	PFLTSEN", description: "Fault Sense", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	PFLTAEN", description: "Fault Action Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	PFLTACT", description: "Fault Action", size: "2", shift: "8", mask: "0x300" },
		]
	},
	{ name: "USBEPCRIS", description: "", offset: "0x3D0", size: "32",
		bits: [
			{ name: "Uint16	PF", description: "Fault Interrupt Status", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBEPCIM", description: "", offset: "0x3D2", size: "32",
		bits: [
			{ name: "Uint16	PF", description: "Fault Interrupt Mask", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBEPCISC", description: "", offset: "0x3D4", size: "32",
		bits: [
			{ name: "Uint16	PF", description: "Fault Interrupt Status and Clear", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBDRRIS", description: "", offset: "0x3D6", size: "32",
		bits: [
			{ name: "Uint16	RESUME", description: "Interrupt Status", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBDRIM", description: "", offset: "0x3D8", size: "32",
		bits: [
			{ name: "Uint16	RESUME", description: "Interrupt Mask", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBDRISC", description: "", offset: "0x3DA", size: "32",
		bits: [
			{ name: "Uint16	RESUME", description: "Interrupt Status and Clear", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBGPCS", description: "", offset: "0x3DC", size: "32",
		bits: [
			{ name: "Uint16	DEVMOD", description: "Mode", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	DEVMODOTG", description: "Device Mode", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "USBVDC", description: "USB VBUS Droop Control", offset: "0x3EE", size: "32",
		bits: [
			{ name: "Uint16	VBDEN", description: "Droop Enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBVDCRIS", description: "", offset: "0x3F0", size: "32",
		bits: [
			{ name: "Uint16	VD", description: "Droop Raw Interrupt Status", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBVDCIM", description: "", offset: "0x3F2", size: "32",
		bits: [
			{ name: "Uint16	VD", description: "Droop Interrupt Mask", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBVDCISC", description: "", offset: "0x3F4", size: "32",
		bits: [
			{ name: "Uint16	VD", description: "Droop Interrupt Status and Clear", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBIDVRIS", description: "", offset: "0x3FA", size: "32",
		bits: [
			{ name: "Uint16	ID", description: "Valid Detect Raw Interrupt Status", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBIDVIM", description: "", offset: "0x3FC", size: "32",
		bits: [
			{ name: "Uint16	ID", description: "Valid Detect Interrupt mask", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBIDVISC", description: "", offset: "0x3FE", size: "32",
		bits: [
			{ name: "Uint16	ID", description: "Valid Detect Interrupt Status and Clear", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "USBDMASEL", description: "USB DMA Select", offset: "0x400", size: "32",
		bits: [
			{ name: "Uint16	DMAARX", description: "A RX Select", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	DMAATX", description: "A TX Select", size: "4", shift: "4", mask: "0xF0" },
			{ name: "Uint16	DMABRX", description: "B RX Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "Uint16	DMABTX", description: "B TX Select", size: "4", shift: "12", mask: "0xF000" },
			{ name: "Uint16	DMACRX", description: "C RX Select", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "Uint16	DMACTX", description: "C TX Select", size: "4", shift: "20", mask: "0xF00000" },
		]
	},
];
module.exports = {
	usbRegisters: USB_REGISTERS,
}
