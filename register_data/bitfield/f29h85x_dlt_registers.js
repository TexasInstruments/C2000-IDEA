let DLT_REGISTERS = [
	{ name: "ERAD_START_MASK_L", description: "ERAD Start Mask for Lower 32 lines", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "ERAD_START_MASK_H", description: "ERAD Start Mask for Higher 32 lines", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "ERAD_END_MASK_L", description: "ERAD End Mask for Lower 32 lines", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "ERAD_END_MASK_H", description: "ERAD End Mask for Higher 32 lines", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "TAG_FILTER_START_REF", description: "Tag Filer Start Reference", offset: "0x8", size: "32",
		bits: [
			{ name: "START_REF", description: "Reference for TAG start comparison", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TAG_FILTER_START_MASK", description: "Tag Filer Start Mask", offset: "0xA", size: "32",
		bits: [
			{ name: "START_MASK", description: "MASK for TAG start comparison", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TAG_FILTER_END_REF", description: "Tag Filer End Reference", offset: "0xC", size: "32",
		bits: [
			{ name: "END_REF", description: "Reference for TAG end comparison", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TAG_FILTER_END_MASK", description: "Tag Filer End Mask", offset: "0xE", size: "32",
		bits: [
			{ name: "END_MASK", description: "MASK for TAG end comparison", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "LINK_EN", description: "Link Enable", offset: "0x10", size: "32",
		bits: [
			{ name: "LINK0_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "0", mask: "0x1" },
			{ name: "LINK1_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "1", mask: "0x2" },
			{ name: "LINK2_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "2", mask: "0x4" },
			{ name: "LINK3_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "3", mask: "0x8" },
			{ name: "LINK4_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "4", mask: "0x10" },
			{ name: "LINK5_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "5", mask: "0x20" },
			{ name: "LINK6_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "6", mask: "0x40" },
			{ name: "LINK7_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "7", mask: "0x80" },
			{ name: "LINK8_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "8", mask: "0x100" },
			{ name: "LINK9_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "9", mask: "0x200" },
			{ name: "LINK10_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "10", mask: "0x400" },
			{ name: "LINK11_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "11", mask: "0x800" },
			{ name: "LINK12_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "12", mask: "0x1000" },
			{ name: "LINK13_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "13", mask: "0x2000" },
			{ name: "LINK14_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "14", mask: "0x4000" },
			{ name: "LINK15_EN", description: "LINK permissions to write to FIFO", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "DLT_CONTROL", description: "DLT Control Register", offset: "0x12", size: "32",
		bits: [
			{ name: "DLT_EN", description: "DLTAG Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "ERAD_FILTER_EN", description: "ERAD Filter Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "TAG_FILTER_EN", description: "TAG Filter Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "CAP_MODE", description: "Capture mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "FILTER_RST", description: "Filter Reset", size: "1", shift: "4", mask: "0x10" },
			{ name: "KEY", description: "key to enable write to lower [15:0] bit fileds", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "FIFO_CONTROL", description: "FIFO Control Register", offset: "0x14", size: "32",
		bits: [
			{ name: "DMA_EN", description: "Trigger DMA on FIFO level", size: "1", shift: "0", mask: "0x1" },
			{ name: "FIFO_RST", description: "Initialize pointers of FIFO to 0", size: "1", shift: "1", mask: "0x2" },
			{ name: "WR_CTR_TRIG_LEVEL", description: "Level of FIFO writes required to trigger INT/DMA", size: "10", shift: "8", mask: "0x3FF00" },
		]
	},
	{ name: "TIMER_CONTROL", description: "Timer Control Register", offset: "0x16", size: "32",
		bits: [
			{ name: "TIMER2_RST", description: "Timer 2 is reset", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "FIFO_STS", description: "Number of entries in FIFO", offset: "0x18", size: "32",
		bits: [
			{ name: "WORD_CTR", description: "Number of 64-bit words to be read in the FIFO", size: "10", shift: "0", mask: "0x3FF" },
			{ name: "WR_CTR", description: "Write counter of FIFO after last trigger", size: "10", shift: "16", mask: "0x3FF0000" },
		]
	},
	{ name: "FIFO_PTR", description: "Pointer locations in FIFO", offset: "0x1A", size: "32",
		bits: [
			{ name: "RD_PTR", description: "Read pointer location of FIFO", size: "10", shift: "0", mask: "0x3FF" },
			{ name: "WR_PTR", description: "Write pointer location of FIFO", size: "10", shift: "16", mask: "0x3FF0000" },
		]
	},
	{ name: "TIMER2_COUNT", description: "Timer2 Status", offset: "0x1C", size: "32",
		bits: [
			{ name: "COUNT", description: "Current value of TIMER2", size: "29", shift: "0", mask: "0x1FFFFFFF" },
		]
	},
	{ name: "INT_FLG", description: "Interrupt Flag", offset: "0x1E", size: "32",
		bits: [
			{ name: "INT", description: "Global Interrupt Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "TIMER1_OVF", description: "TIMER1 overflow status", size: "1", shift: "1", mask: "0x2" },
			{ name: "TIMER2_OVF", description: "TIMER2 overflow status", size: "1", shift: "2", mask: "0x4" },
			{ name: "FIFO_OVF", description: "FIFO overflow status", size: "1", shift: "3", mask: "0x8" },
			{ name: "FIFO_UF", description: "FIFO underflow status", size: "1", shift: "4", mask: "0x10" },
			{ name: "FIFO_TRIG", description: "FIFO reached Trigger level status", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INT_EN", description: "Interrupt Enable", offset: "0x20", size: "32",
		bits: [
			{ name: "TIMER1_OVF", description: "TIMER1 overflow enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "TIMER2_OVF", description: "TIMER2 overflow enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "FIFO_OVF", description: "FIFO overflow enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "FIFO_UF", description: "FIFO underflow enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "FIFO_TRIG", description: "FIFO reached Trigger level enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INT_FRC", description: "Interrupt Force", offset: "0x22", size: "32",
		bits: [
			{ name: "TIMER1_OVF", description: "TIMER1 overflow force", size: "1", shift: "1", mask: "0x2" },
			{ name: "TIMER2_OVF", description: "TIMER2 overflow force", size: "1", shift: "2", mask: "0x4" },
			{ name: "FIFO_OVF", description: "FIFO overflow force", size: "1", shift: "3", mask: "0x8" },
			{ name: "FIFO_UF", description: "FIFO underflow force", size: "1", shift: "4", mask: "0x10" },
			{ name: "FIFO_TRIG", description: "FIFO reached Trigger level force", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INT_CLR", description: "Interrupt Clear", offset: "0x24", size: "32",
		bits: [
			{ name: "INT", description: "Global Interrupt clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "TIMER1_OVF", description: "TIMER1 overflow clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "TIMER2_OVF", description: "TIMER2 overflow clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "FIFO_OVF", description: "FIFO overflow clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "FIFO_UF", description: "FIFO underflow clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "FIFO_TRIG", description: "FIFO reached Trigger level clear", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "FIFO_BUF_L", description: "FIFO Content Register", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "FIFO_BUF_H", description: "FIFO Content Register", offset: "0x2", size: "32",
		bits: [
		]
	},
];
module.exports = {
	dltRegisters: DLT_REGISTERS,
}
