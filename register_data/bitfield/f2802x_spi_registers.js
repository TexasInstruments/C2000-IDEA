let SPI_REGISTERS = [
	{ name: "SPICCR", description: "Configuration register", offset: "0x0", size: "16",
		bits: [
			{ name: "SPICHAR", description: "Character length control", size: "4", shift: "0", mask: "0xF" },
			{ name: "SPILBK", description: "Loop-back enable/disable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLKPOLARITY", description: "Clock polarity", size: "1", shift: "6", mask: "0x40" },
			{ name: "SPISWRESET", description: "SPI SW Reset", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPICTL", description: "Operation control register", offset: "0x1", size: "16",
		bits: [
			{ name: "SPIINTENA", description: "Interrupt enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "TALK", description: "Master/Slave transmit enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "MASTER_SLAVE", description: "Network control mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLK_PHASE", description: "Clock phase select", size: "1", shift: "3", mask: "0x8" },
			{ name: "OVERRUNINTENA", description: "Overrun interrupt enable", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "SPISTS", description: "Status register", offset: "0x2", size: "16",
		bits: [
			{ name: "BUFFULL_FLAG", description: "SPI transmit buffer full flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT_FLAG", description: "SPI interrupt flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "OVERRUN_FLAG", description: "SPI reciever overrun flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIBRR", description: "Baud Rate", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "SPIRXEMU", description: "Emulation buffer", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "SPIRXBUF", description: "Serial input buffer", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "SPITXBUF", description: "Serial output buffer", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "SPIDAT", description: "Serial data", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "SPIFFTX", description: "FIFO transmit register", offset: "0xA", size: "16",
		bits: [
			{ name: "TXFFIL", description: "Interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "TXFFIENA", description: "Interrupt enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "TXFFINTCLR", description: "Clear INT flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "TXFFINT", description: "INT flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "TXFFST", description: "FIFO status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "TXFIFO", description: "FIFO reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SPIFFENA", description: "Enhancement enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SPIRST", description: "Reset SPI", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SPIFFRX", description: "FIFO recieve register", offset: "0xB", size: "16",
		bits: [
			{ name: "RXFFIL", description: "Interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RXFFIENA", description: "Interrupt enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXFFINTCLR", description: "Clear INT flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RXFFINT", description: "INT flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RXFFST", description: "FIFO status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RXFIFORESET", description: "FIFO reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RXFFOVFCLR", description: "Clear overflow", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RXFFOVF", description: "FIFO overflow", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SPIFFCT", description: "FIFO control register", offset: "0xC", size: "16",
		bits: [
			{ name: "TXDLY", description: "FIFO transmit delay", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SPIPRI", description: "FIFO Priority control", offset: "0xF", size: "16",
		bits: [
			{ name: "TRIWIRE", description: "3-wire mode select bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "FREE", description: "Free emulation mode control", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOFT", description: "Soft emulation mode control", size: "1", shift: "5", mask: "0x20" },
			{ name: "PRIORITY", description: "Interrupt priority select", size: "1", shift: "6", mask: "0x40" },
		]
	},
];
module.exports = {
	spiRegisters: SPI_REGISTERS,
}
