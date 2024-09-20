let I2C_REGISTERS = [
	{ name: "I2COAR", description: "Own address register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "I2CIER", description: "Interrupt enable", offset: "0x1", size: "16",
		bits: [
			{ name: "ARBL", description: "Arbitration lost interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "NACK", description: "No ack interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "ARDY", description: "Register access ready interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "RRDY", description: "Recieve data ready interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRDY", description: "Transmit data ready interrupt", size: "1", shift: "4", mask: "0x10" },
			{ name: "SCD", description: "Stop condition detection", size: "1", shift: "5", mask: "0x20" },
			{ name: "AAS", description: "Address as slave", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "I2CSTR", description: "Interrupt status", offset: "0x2", size: "16",
		bits: [
			{ name: "ARBL", description: "Arbitration lost interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "NACK", description: "No ack interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "ARDY", description: "Register access ready interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "RRDY", description: "Recieve data ready interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "XRDY", description: "Transmit data ready interrupt", size: "1", shift: "4", mask: "0x10" },
			{ name: "SCD", description: "Stop condition detection", size: "1", shift: "5", mask: "0x20" },
			{ name: "AD0", description: "Address Zero", size: "1", shift: "8", mask: "0x100" },
			{ name: "AAS", description: "Address as slave", size: "1", shift: "9", mask: "0x200" },
			{ name: "XSMT", description: "XMIT shift empty", size: "1", shift: "10", mask: "0x400" },
			{ name: "RSFULL", description: "Recieve shift full", size: "1", shift: "11", mask: "0x800" },
			{ name: "BB", description: "Bus busy", size: "1", shift: "12", mask: "0x1000" },
			{ name: "NACKSNT", description: "A no ack sent", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SDIR", description: "Slave direction", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "I2CCLKL", description: "Clock divider low", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "I2CCLKH", description: "Clock divider high", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "I2CCNT", description: "Data count", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "I2CDRR", description: "Data recieve", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "I2CSAR", description: "Slave address", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "I2CDXR", description: "Data transmit", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "I2CMDR", description: "Mode", offset: "0x9", size: "16",
		bits: [
			{ name: "BC", description: "Bit count", size: "3", shift: "0", mask: "0x7" },
			{ name: "FDF", description: "Free data format", size: "1", shift: "3", mask: "0x8" },
			{ name: "STB", description: "Start byte", size: "1", shift: "4", mask: "0x10" },
			{ name: "IRS", description: "I2C Reset not", size: "1", shift: "5", mask: "0x20" },
			{ name: "DLB", description: "Digital loopback", size: "1", shift: "6", mask: "0x40" },
			{ name: "RM", description: "Repeat mode", size: "1", shift: "7", mask: "0x80" },
			{ name: "XA", description: "Expand address", size: "1", shift: "8", mask: "0x100" },
			{ name: "TRX", description: "Transmitter/reciever", size: "1", shift: "9", mask: "0x200" },
			{ name: "MST", description: "Master/slave", size: "1", shift: "10", mask: "0x400" },
			{ name: "STP", description: "Stop condition", size: "1", shift: "11", mask: "0x800" },
			{ name: "STT", description: "Start condition", size: "1", shift: "13", mask: "0x2000" },
			{ name: "FREE", description: "Emulation mode", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NACKMOD", description: "No Ack mode", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "I2CISRC", description: "Interrupt source", offset: "0xA", size: "16",
		bits: [
			{ name: "INTCODE", description: "Interrupt code", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "I2CEMDR", description: "Extended mode", offset: "0xB", size: "16",
		bits: [
			{ name: "BCM", description: "Bit count", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "I2CPSC", description: "Pre-scaler", offset: "0xC", size: "16",
		bits: [
			{ name: "IPSC", description: "pre-scaler", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "I2CFFTX", description: "Transmit FIFO", offset: "0x20", size: "16",
		bits: [
			{ name: "TXFFIL", description: "FIFO interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "TXFFIENA", description: "FIFO interrupt enable/disable", size: "1", shift: "5", mask: "0x20" },
			{ name: "TXFFINTCLR", description: "FIFO clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "TXFFINT", description: "FIFO interrupt flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "TXFFST", description: "FIFO level status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "TXFFRST", description: "FIFO reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "I2CFFEN", description: "enable/disable TX & RX FIFOs", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "I2CFFRX", description: "Recieve FIFO", offset: "0x21", size: "16",
		bits: [
			{ name: "RXFFIL", description: "FIFO interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RXFFIENA", description: "FIFO interrupt enable/disable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXFFINTCLR", description: "FIFO clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "RXFFINT", description: "FIFO interrupt flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RXFFST", description: "FIFO level", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RXFFRST", description: "FIFO reset", size: "1", shift: "13", mask: "0x2000" },
		]
	},
];
module.exports = {
	i2cRegisters: I2C_REGISTERS,
}
