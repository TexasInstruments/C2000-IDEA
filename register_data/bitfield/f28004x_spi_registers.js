let SPI_REGISTERS = [
	{ name: "SPICCR", description: "SPI Configuration Control Register", offset: "0x0", size: "16",
		bits: [
			{ name: "SPICHAR", description: "Character Length Control", size: "4", shift: "0", mask: "0xF" },
			{ name: "SPILBK", description: "SPI Loopback", size: "1", shift: "4", mask: "0x10" },
			{ name: "HS_MODE", description: "High Speed mode control", size: "1", shift: "5", mask: "0x20" },
			{ name: "CLKPOLARITY", description: "Shift Clock Polarity", size: "1", shift: "6", mask: "0x40" },
			{ name: "SPISWRESET", description: "SPI Software Reset", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPICTL", description: "SPI Operation Control Register", offset: "0x1", size: "16",
		bits: [
			{ name: "SPIINTENA", description: "SPI Interupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "TALK", description: "Master/Slave Transmit Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "MASTER_SLAVE", description: "SPI Network Mode Control", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLK_PHASE", description: "SPI Clock Phase", size: "1", shift: "3", mask: "0x8" },
			{ name: "OVERRUNINTENA", description: "Overrun Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "SPISTS", description: "SPI Status Register", offset: "0x2", size: "16",
		bits: [
			{ name: "BUFFULL_FLAG", description: "SPI Transmit Buffer Full Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT_FLAG", description: "SPI Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "OVERRUN_FLAG", description: "SPI Receiver Overrun Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIBRR", description: "SPI Baud Rate Register", offset: "0x4", size: "16",
		bits: [
			{ name: "SPI_BIT_RATE", description: "SPI Bit Rate Control", size: "7", shift: "0", mask: "0x7F" },
		]
	},
	{ name: "SPIRXEMU", description: "SPI Emulation Buffer Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "SPIRXBUF", description: "SPI Serial Input Buffer Register", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "SPITXBUF", description: "SPI Serial Output Buffer Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "SPIDAT", description: "SPI Serial Data Register", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "SPIFFTX", description: "SPI FIFO Transmit Register", offset: "0xA", size: "16",
		bits: [
			{ name: "TXFFIL", description: "TXFIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "TXFFIENA", description: "TXFIFO Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "TXFFINTCLR", description: "TXFIFO Interrupt Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "TXFFINT", description: "TXFIFO Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "TXFFST", description: "Transmit FIFO Status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "TXFIFO", description: "TXFIFO Reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SPIFFENA", description: "FIFO Enhancements Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SPIRST", description: "SPI Reset", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SPIFFRX", description: "SPI FIFO Receive Register", offset: "0xB", size: "16",
		bits: [
			{ name: "RXFFIL", description: "RXFIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RXFFIENA", description: "RXFIFO Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RXFFINTCLR", description: "RXFIFO Interupt Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "RXFFINT", description: "RXFIFO Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RXFFST", description: "Receive FIFO Status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RXFIFORESET", description: "RXFIFO Reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RXFFOVFCLR", description: "Receive FIFO Overflow Clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RXFFOVF", description: "Receive FIFO Overflow Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SPIFFCT", description: "SPI FIFO Control Register", offset: "0xC", size: "16",
		bits: [
			{ name: "TXDLY", description: "FIFO Transmit Delay Bits", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SPIPRI", description: "SPI Priority Control Register", offset: "0xF", size: "16",
		bits: [
			{ name: "TRIWIRE", description: "3-wire mode select bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "STEINV", description: "SPISTE inversion bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FREE", description: "Free emulation mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOFT", description: "Soft emulation mode", size: "1", shift: "5", mask: "0x20" },
		]
	},
];
module.exports = {
	spiRegisters: SPI_REGISTERS,
}
