let SCI_REGISTERS = [
	{ name: "SCICCR", description: "Communications control register", offset: "0x0", size: "16",
		bits: [
			{ name: "SCICHAR", description: "Character length control", size: "3", shift: "0", mask: "0x7" },
			{ name: "ADDRIDLE_MODE", description: "ADDR/IDLE Mode control", size: "1", shift: "3", mask: "0x8" },
			{ name: "LOOPBKENA", description: "Loop Back enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "PARITYENA", description: "Parity enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "PARITY", description: "Even or Odd Parity", size: "1", shift: "6", mask: "0x40" },
			{ name: "STOPBITS", description: "Number of Stop Bits", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SCICTL1", description: "Control register 1", offset: "0x1", size: "16",
		bits: [
			{ name: "RXENA", description: "SCI receiver enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "TXENA", description: "SCI transmitter enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SLEEP", description: "SCI sleep", size: "1", shift: "2", mask: "0x4" },
			{ name: "TXWAKE", description: "Transmitter wakeup method", size: "1", shift: "3", mask: "0x8" },
			{ name: "SWRESET", description: "Software reset", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXERRINTENA", description: "Recieve __interrupt enable", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "SCIHBAUD", description: "Baud rate (high) register", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "SCILBAUD", description: "Baud rate (low) register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "SCICTL2", description: "Control register 2", offset: "0x4", size: "16",
		bits: [
			{ name: "TXINTENA", description: "Transmit __interrupt enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "RXBKINTENA", description: "Receiver-buffer break enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "TXEMPTY", description: "Transmitter empty flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "TXRDY", description: "Transmitter ready flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SCIRXST", description: "Recieve status register", offset: "0x5", size: "16",
		bits: [
			{ name: "RXWAKE", description: "Receiver wakeup detect flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "PE", description: "Parity error flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "OE", description: "Overrun error flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "FE", description: "Framing error flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "BRKDT", description: "Break-detect flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXRDY", description: "Receiver ready flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RXERROR", description: "Receiver error flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SCIRXEMU", description: "Recieve emulation buffer register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "SCIRXBUF", description: "Recieve data buffer", offset: "0x7", size: "16",
		bits: [
			{ name: "RXDT", description: "Receive word", size: "8", shift: "0", mask: "0xFF" },
			{ name: "SCIFFPE", description: "SCI PE error in FIFO mode", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SCIFFFE", description: "SCI FE error in FIFO mode", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SCITXBUF", description: "Transmit data buffer", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "SCIFFTX", description: "FIFO transmit register", offset: "0xA", size: "16",
		bits: [
			{ name: "TXFFIL", description: "Interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "TXFFIENA", description: "Interrupt enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "TXFFINTCLR", description: "Clear INT flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "TXFFINT", description: "INT flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "TXFFST", description: "FIFO status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "TXFIFOXRESET", description: "FIFO reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SCIFFENA", description: "Enhancement enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SCIRST", description: "SCI reset rx/tx channels", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SCIFFRX", description: "FIFO recieve register", offset: "0xB", size: "16",
		bits: [
			{ name: "RXFFIL", description: "Interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RXFFIENA", description: "Interrupt enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXFFINTCLR", description: "Clear INT flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RXFFINT", description: "INT flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RXFFST", description: "FIFO status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RXFIFORESET", description: "FIFO reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RXFFOVRCLR", description: "Clear overflow", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RXFFOVF", description: "FIFO overflow", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SCIFFCT", description: "FIFO control register", offset: "0xC", size: "16",
		bits: [
			{ name: "FFTXDLY", description: "FIFO transmit delay", size: "8", shift: "0", mask: "0xFF" },
			{ name: "CDC", description: "Auto baud mode enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "ABDCLR", description: "Auto baud clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "ABD", description: "Auto baud detect", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SCIPRI", description: "FIFO Priority control", offset: "0xF", size: "16",
		bits: [
			{ name: "FREE", description: "Free emulation suspend mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOFT", description: "Soft emulation suspend mode", size: "1", shift: "4", mask: "0x10" },
		]
	},
];
module.exports = {
	sciRegisters: SCI_REGISTERS,
}
