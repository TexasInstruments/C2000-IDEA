let SPI_REGISTERS = [
	{ name: "SPICCR", description: "SPI Configuration Control Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	SPICHAR", description: "Length Control", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	SPILBK", description: "Loopback", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CLKPOLARITY", description: "Clock Polarity", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	SPISWRESET", description: "Software Reset", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPICTL", description: "SPI Operation Control Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	SPIINTENA", description: "Interupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	TALK", description: "Transmit Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	MASTER_SLAVE", description: "Network Mode Control", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CLK_PHASE", description: "Clock Phase", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	OVERRUNINTENA", description: "Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "SPISTS", description: "SPI Status Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	BUFFULL_FLAG", description: "Transmit Buffer Full Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	INT_FLAG", description: "Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	OVERRUN_FLAG", description: "Receiver Overrun Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIBRR", description: "SPI Baud Rate Register", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "SPIRXEMU", description: "SPI Emulation Buffer Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "SPIRXBUF", description: "SPI Serial Input Buffer Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "SPITXBUF", description: "SPI Serial Output Buffer Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "SPIDAT", description: "SPI Serial Data Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "SPIFFTX", description: "SPI FIFO Transmit Register", offset: "0x7", size: "16",
		bits: [
			{ name: "Uint16	TXFFIL", description: "Interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "Uint16	TXFFIENA", description: "Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	TXFFINTCLR", description: "Interrupt clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	TXFFINT", description: "Interrupt", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	TXFFST", description: "FIFO Status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "Uint16	TXFIFO", description: "Reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	SPIFFENA", description: "Enhancements Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	SPIRST", description: "Reset", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SPIFFRX", description: "SPI FIFO Receive Register", offset: "0x8", size: "16",
		bits: [
			{ name: "Uint16	RXFFIL", description: "Interrupt level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "Uint16	RXFFIENA", description: "Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	RXFFINTCLR", description: "Interupt clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	RXFFINT", description: "Interrupt", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	RXFFST", description: "FIFO Status", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "Uint16	RXFIFORESET", description: "Reset", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	RXFFOVFCLR", description: "FIFO Overflow Clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	RXFFOVF", description: "FIFO Overflow Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SPIFFCT", description: "SPI FIFO Control Register", offset: "0x9", size: "16",
		bits: [
			{ name: "Uint16	TXDLY", description: "FIFO Transmit Delay Bits", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SPIPRI", description: "SPI Priority Control Register", offset: "0xC", size: "16",
		bits: [
			{ name: "TRIWIRE", description: "3-wire mode select bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "STEINV", description: "SPISTE inversion bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FREE", description: "Free emulation mode control", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOFT", description: "Soft emulation mode control", size: "1", shift: "5", mask: "0x20" },
			{ name: "PRIORITY", description: "Interrupt priority select", size: "1", shift: "6", mask: "0x40" },
		]
	},
];
module.exports = {
	spiRegisters: SPI_REGISTERS,
}
