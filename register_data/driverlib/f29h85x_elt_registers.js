let ELT_REGISTERS = [
	{ name: "CTL", description: "Control Register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENA", description: "ENABLE", size: "1", shift: "0", mask: "0x1" },
			{ name: "LOGCTLENA", description: "Log Control Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "LOGCTLRDY", description: "Log Control Ready", size: "1", shift: "2", mask: "0x4" },
			{ name: "FIFORSTPR", description: "FIFO Reset Pointer", size: "1", shift: "3", mask: "0x8" },
			{ name: "FIFOTHRESHOLD", description: "FIFO Threshold for Int or DMA Req event", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "FIFOST", description: "FIFO Status", size: "5", shift: "24", mask: "0x1F000000" },
		]
	},
	{ name: "SWINPEVT", description: "Software Input Event", offset: "0x4", size: "32",
		bits: [
			{ name: "SWINPEVT0", description: "SW Input Event 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SWINPEVT1", description: "SW Input Event 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SWINPEVT2", description: "SW Input Event 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SWINPEVT3", description: "SW Input Event 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SWINPEVT4", description: "SW Input Event 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SWINPEVT5", description: "SW Input Event 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SWINPEVT6", description: "SW Input Event 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SWINPEVT7", description: "SW Input Event 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "SWINPEVT8", description: "SW Input Event 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "SWINPEVT9", description: "SW Input Event 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "SWINPEVT10", description: "SW Input Event 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "SWINPEVT11", description: "SW Input Event 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "SWINPEVT12", description: "SW Input Event 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SWINPEVT13", description: "SW Input Event 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SWINPEVT14", description: "SW Input Event 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SWINPEVT15", description: "SW Input Event 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SWINPEVT16", description: "SW Input Event 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SWINPEVT17", description: "SW Input Event 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SWINPEVT18", description: "SW Input Event 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SWINPEVT19", description: "SW Input Event 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SWINPEVT20", description: "SW Input Event 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SWINPEVT21", description: "SW Input Event 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SWINPEVT22", description: "SW Input Event 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SWINPEVT23", description: "SW Input Event 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SWINPEVT24", description: "SW Input Event 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SWINPEVT25", description: "SW Input Event 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SWINPEVT26", description: "SW Input Event 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SWINPEVT27", description: "SW Input Event 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SWINPEVT28", description: "SW Input Event 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SWINPEVT29", description: "SW Input Event 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SWINPEVT30", description: "SW Input Event 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SWINPEVT31", description: "SW Input Event 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "POLARITY", description: "Polarity Select", offset: "0xC", size: "32",
		bits: [
			{ name: "MUXOUT0POL", description: "Mux Output 0 Polarity", size: "1", shift: "0", mask: "0x1" },
			{ name: "MUXOUT1POL", description: "Mux Output 1 Polarity", size: "1", shift: "1", mask: "0x2" },
			{ name: "MUXOUT2POL", description: "Mux Output 2 Polarity", size: "1", shift: "2", mask: "0x4" },
			{ name: "MUXOUT3POL", description: "Mux Output 3 Polarity", size: "1", shift: "3", mask: "0x8" },
			{ name: "MUXOUT4POL", description: "Mux Output 4 Polarity", size: "1", shift: "4", mask: "0x10" },
			{ name: "MUXOUT5POL", description: "Mux Output 5 Polarity", size: "1", shift: "5", mask: "0x20" },
			{ name: "MUXOUT6POL", description: "Mux Output 6 Polarity", size: "1", shift: "6", mask: "0x40" },
			{ name: "MUXOUT7POL", description: "Mux Output 7 Polarity", size: "1", shift: "7", mask: "0x80" },
			{ name: "MUXOUT8POL", description: "Mux Output 8 Polarity", size: "1", shift: "8", mask: "0x100" },
			{ name: "MUXOUT9POL", description: "Mux Output 9 Polarity", size: "1", shift: "9", mask: "0x200" },
			{ name: "MUXOUT10POL", description: "Mux Output 10 Polarity", size: "1", shift: "10", mask: "0x400" },
			{ name: "MUXOUT11POL", description: "Mux Output 11 Polarity", size: "1", shift: "11", mask: "0x800" },
			{ name: "MUXOUT12POL", description: "Mux Output 12 Polarity", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MUXOUT13POL", description: "Mux Output 13 Polarity", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MUXOUT14POL", description: "Mux Output 14 Polarity", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MUXOUT15POL", description: "Mux Output 15 Polarity", size: "1", shift: "15", mask: "0x8000" },
			{ name: "MUXOUT16POL", description: "Mux Output 16 Polarity", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MUXOUT17POL", description: "Mux Output 17 Polarity", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MUXOUT18POL", description: "Mux Output 18 Polarity", size: "1", shift: "18", mask: "0x40000" },
			{ name: "MUXOUT19POL", description: "Mux Output 19 Polarity", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MUXOUT20POL", description: "Mux Output 20 Polarity", size: "1", shift: "20", mask: "0x100000" },
			{ name: "MUXOUT21POL", description: "Mux Output 21 Polarity", size: "1", shift: "21", mask: "0x200000" },
			{ name: "MUXOUT22POL", description: "Mux Output 22 Polarity", size: "1", shift: "22", mask: "0x400000" },
			{ name: "MUXOUT23POL", description: "Mux Output 23 Polarity", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MUXOUT24POL", description: "Mux Output 24 Polarity", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "MUXOUT25POL", description: "Mux Output 25 Polarity", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "MUXOUT26POL", description: "Mux Output 26 Polarity", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "MUXOUT27POL", description: "Mux Output 27 Polarity", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "MUXOUT28POL", description: "Mux Output 28 Polarity", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "MUXOUT29POL", description: "Mux Output 29 Polarity", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "MUXOUT30POL", description: "Mux Output 30 Polarity", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MUXOUT31POL", description: "Mux Output 31 Polarity", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LOGCTL", description: "Log Control", offset: "0x10", size: "16",
		bits: [
			{ name: "LOGCTL", description: "Log Control", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "EDGE", description: "Edge Select", offset: "0x14", size: "32",
		bits: [
			{ name: "MUXOUT0EDGE", description: "Mux Output 0 Edge to Capture Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "MUXOUT1EDGE", description: "Mux Output 1 Edge to Capture Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "MUXOUT2EDGE", description: "Mux Output 2 Edge to Capture Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "MUXOUT3EDGE", description: "Mux Output 3 Edge to Capture Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "MUXOUT4EDGE", description: "Mux Output 4 Edge to Capture Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "MUXOUT5EDGE", description: "Mux Output 5 Edge to Capture Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "MUXOUT6EDGE", description: "Mux Output 6 Edge to Capture Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "MUXOUT7EDGE", description: "Mux Output 7 Edge to Capture Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "MUXOUT8EDGE", description: "Mux Output 8 Edge to Capture Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "MUXOUT9EDGE", description: "Mux Output 9 Edge to Capture Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "MUXOUT10EDGE", description: "Mux Output 10 Edge to Capture Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "MUXOUT11EDGE", description: "Mux Output 11 Edge to Capture Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "MUXOUT12EDGE", description: "Mux Output 12 Edge to Capture Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MUXOUT13EDGE", description: "Mux Output 13 Edge to Capture Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MUXOUT14EDGE", description: "Mux Output 14 Edge to Capture Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MUXOUT15EDGE", description: "Mux Output 15 Edge to Capture Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "MUXOUT16EDGE", description: "Mux Output 16 Edge to Capture Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MUXOUT17EDGE", description: "Mux Output 17 Edge to Capture Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MUXOUT18EDGE", description: "Mux Output 18 Edge to Capture Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "MUXOUT19EDGE", description: "Mux Output 19 Edge to Capture Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MUXOUT20EDGE", description: "Mux Output 20 Edge to Capture Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "MUXOUT21EDGE", description: "Mux Output 21 Edge to Capture Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "MUXOUT22EDGE", description: "Mux Output 22 Edge to Capture Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "MUXOUT23EDGE", description: "Mux Output 23 Edge to Capture Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MUXOUT24EDGE", description: "Mux Output 24 Edge to Capture Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "MUXOUT25EDGE", description: "Mux Output 25 Edge to Capture Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "MUXOUT26EDGE", description: "Mux Output 26 Edge to Capture Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "MUXOUT27EDGE", description: "Mux Output 27 Edge to Capture Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "MUXOUT28EDGE", description: "Mux Output 28 Edge to Capture Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "MUXOUT29EDGE", description: "Mux Output 29 Edge to Capture Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "MUXOUT30EDGE", description: "Mux Output 30 Edge to Capture Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MUXOUT31EDGE", description: "Mux Output 31 Edge to Capture Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "MUXOUT", description: "MUX Output", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "INT", description: "Interrupt Enable Register", offset: "0x24", size: "16",
		bits: [
			{ name: "FIFOTHRESHOLD", description: "FIFO Pointer Equal to Threshold Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "FIFOOVF", description: "FIFO Overflow Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "FLG", description: "Interrupt Flag Register", offset: "0x28", size: "16",
		bits: [
			{ name: "INT", description: "Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "FIFOTHRESHOLD", description: "FIFO Pointer Equal to Threshold Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "FIFOOVF", description: "FIFO Overflow Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "CLR", description: "Interrupt Clear Register", offset: "0x2C", size: "16",
		bits: [
			{ name: "INT", description: "Global Interrupt Status Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "FIFOTHRESHOLD", description: "FIFO Pointer Equal to Threshold Status Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "FIFOOVF", description: "FIFO Overflow Status Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "FRC", description: "Interrupt Force Register", offset: "0x30", size: "16",
		bits: [
			{ name: "FIFOTHRESHOLD", description: "FIFO Pointer Equal to Threshold Force Interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "FIFOOVF", description: "FIFO Overflow Force  Interrupt", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "FIFOBUF_L", description: "FIFO Buffer Low (31:0)", offset: "0x40", size: "16",
		bits: [
		]
	},
	{ name: "FIFOBUF_M", description: "FIFO Buffer Mid (63:32)", offset: "0x44", size: "16",
		bits: [
		]
	},
	{ name: "FIFOBUF_H", description: "FIFO Buffer High (95:64)", offset: "0x48", size: "16",
		bits: [
		]
	},
	{ name: "MUXSEL0", description: "MUX# Select", offset: "0x100", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL1", description: "MUX# Select", offset: "0x104", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL2", description: "MUX# Select", offset: "0x108", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL3", description: "MUX# Select", offset: "0x10C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL4", description: "MUX# Select", offset: "0x110", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL5", description: "MUX# Select", offset: "0x114", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL6", description: "MUX# Select", offset: "0x118", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL7", description: "MUX# Select", offset: "0x11C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL8", description: "MUX# Select", offset: "0x120", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL9", description: "MUX# Select", offset: "0x124", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL10", description: "MUX# Select", offset: "0x128", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL11", description: "MUX# Select", offset: "0x12C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL12", description: "MUX# Select", offset: "0x130", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL13", description: "MUX# Select", offset: "0x134", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL14", description: "MUX# Select", offset: "0x138", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL15", description: "MUX# Select", offset: "0x13C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL16", description: "MUX# Select", offset: "0x140", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL17", description: "MUX# Select", offset: "0x144", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL18", description: "MUX# Select", offset: "0x148", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL19", description: "MUX# Select", offset: "0x14C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL20", description: "MUX# Select", offset: "0x150", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL21", description: "MUX# Select", offset: "0x154", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL22", description: "MUX# Select", offset: "0x158", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL23", description: "MUX# Select", offset: "0x15C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL24", description: "MUX# Select", offset: "0x160", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL25", description: "MUX# Select", offset: "0x164", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL26", description: "MUX# Select", offset: "0x168", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL27", description: "MUX# Select", offset: "0x16C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL28", description: "MUX# Select", offset: "0x170", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL29", description: "MUX# Select", offset: "0x174", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL30", description: "MUX# Select", offset: "0x178", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "MUXSEL31", description: "MUX# Select", offset: "0x17C", size: "16",
		bits: [
			{ name: "MUXSEL", description: "MUX Select", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
];
module.exports = {
	eltRegisters: ELT_REGISTERS,
}
