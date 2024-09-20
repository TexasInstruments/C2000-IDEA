let I2C_REGISTERS = [
	{ name: "I2COAR", description: "I2C Own address", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "I2CIER", description: "I2C Interrupt Enable", offset: "0x1", size: "16",
		bits: [
			{ name: "ARBL", description: "Arbitration Lost", size: "1", shift: "0", mask: "0x1" },
			{ name: "NACK", description: "No Acknowledgment", size: "1", shift: "1", mask: "0x2" },
			{ name: "ARDY", description: "Register Access Ready", size: "1", shift: "2", mask: "0x4" },
			{ name: "RRDY", description: "Receive Data Ready", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRDY", description: "Transmit Data Ready", size: "1", shift: "4", mask: "0x10" },
			{ name: "SCD", description: "Stop Condition Detected", size: "1", shift: "5", mask: "0x20" },
			{ name: "AAS", description: "Address as Slave", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "I2CSTR", description: "I2C Status", offset: "0x2", size: "16",
		bits: [
			{ name: "ARBL", description: "Arbitration Lost", size: "1", shift: "0", mask: "0x1" },
			{ name: "NACK", description: "No Acknowledgment", size: "1", shift: "1", mask: "0x2" },
			{ name: "ARDY", description: "Register Access Ready", size: "1", shift: "2", mask: "0x4" },
			{ name: "RRDY", description: "Receive Data Ready", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRDY", description: "Transmit Data Ready", size: "1", shift: "4", mask: "0x10" },
			{ name: "SCD", description: "Stop Condition Detected", size: "1", shift: "5", mask: "0x20" },
			{ name: "AD0", description: "Address 0", size: "1", shift: "8", mask: "0x100" },
			{ name: "AAS", description: "Addressed as Slave", size: "1", shift: "9", mask: "0x200" },
			{ name: "XSMT", description: "Transmit Shift Register Empty", size: "1", shift: "10", mask: "0x400" },
			{ name: "RSFULL", description: "Receive Shift Register Full", size: "1", shift: "11", mask: "0x800" },
			{ name: "BB", description: "Bus Busy", size: "1", shift: "12", mask: "0x1000" },
			{ name: "NACKSNT", description: "NACK Sent", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SDIR", description: "Slave Direction", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "I2CCLKL", description: "I2C Clock low-time divider", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "I2CCLKH", description: "I2C Clock high-time divider", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "I2CCNT", description: "I2C Data count", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "I2CDRR", description: "I2C Data receive", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "I2CSAR", description: "I2C Slave address", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "I2CDXR", description: "I2C Data Transmit", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "I2CMDR", description: "I2C Mode", offset: "0x9", size: "16",
		bits: [
			{ name: "BC", description: "Bit Count", size: "3", shift: "0", mask: "0x7" },
			{ name: "FDF", description: "Free Data Format", size: "1", shift: "3", mask: "0x8" },
			{ name: "STB", description: "START Byte Mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "IRS", description: "I2C Module Reset", size: "1", shift: "5", mask: "0x20" },
			{ name: "DLB", description: "Digital Loopback Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "RM", description: "Repeat Mode", size: "1", shift: "7", mask: "0x80" },
			{ name: "XA", description: "Expanded Address Mode", size: "1", shift: "8", mask: "0x100" },
			{ name: "TRX", description: "Transmitter Mode", size: "1", shift: "9", mask: "0x200" },
			{ name: "MST", description: "Master Mode", size: "1", shift: "10", mask: "0x400" },
			{ name: "STP", description: "STOP Condition", size: "1", shift: "11", mask: "0x800" },
			{ name: "STT", description: "START Condition", size: "1", shift: "13", mask: "0x2000" },
			{ name: "FREE", description: "Debug Action", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NACKMOD", description: "NACK Mode", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "I2CISRC", description: "I2C Interrupt Source", offset: "0xA", size: "16",
		bits: [
			{ name: "INTCODE", description: "Interrupt Code", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "I2CEMDR", description: "I2C Extended Mode", offset: "0xB", size: "16",
		bits: [
			{ name: "BC", description: "Backward Compatability Mode", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "I2CPSC", description: "I2C Prescaler", offset: "0xC", size: "16",
		bits: [
			{ name: "IPSC", description: "I2C Prescaler Divide Down", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "I2CFFTX", description: "I2C FIFO Transmit", offset: "0x20", size: "16",
		bits: [
			{ name: "TXFFIL", description: "Transmit FIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "TXFFIENA", description: "Transmit FIFO Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "TXFFINTCLR", description: "Transmit FIFO Interrupt Flag Clr", size: "1", shift: "6", mask: "0x40" },
			{ name: "TXFFINT", description: "Transmit FIFO Interrupt Flag Clr", size: "1", shift: "7", mask: "0x80" },
			{ name: "TXFFST", description: "Transmit FIFO Status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "TXFFRST", description: "Transmit FIFO Reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "I2CFFEN", description: "Transmit FIFO Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "I2CFFRX", description: "I2C FIFO Receive", offset: "0x21", size: "16",
		bits: [
			{ name: "RXFFIL", description: "Receive FIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RXFFIENA", description: "Receive FIFO Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXFFINTCLR", description: "Receive FIFO Interrupt Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "RXFFINT", description: "Receive FIFO Interrupt Flag Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "RXFFST", description: "Receive FIFO Status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RXFFRST", description: "Receive FIFO Reset", size: "1", shift: "13", mask: "0x2000" },
		]
	},
];
module.exports = {
	i2cRegisters: I2C_REGISTERS,
}
