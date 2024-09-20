let CLA_REGISTERS = [
	{ name: "MVECT1", description: "Task 1 Vector", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "MVECT2", description: "Task 2 Vector", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "MVECT3", description: "Task 3 Vector", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "MVECT4", description: "Task 4 Vector", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "MVECT5", description: "Task 5 Vector", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "MVECT6", description: "Task 6 Vector", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "MVECT7", description: "Task 7 Vecotr", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "MVECT8", description: "Task 8 Vector", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "MCTL", description: "CLA Control", offset: "0x10", size: "16",
		bits: [
			{ name: "HARDRESET", description: "Issue a hard reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOFTRESET", description: "Issue a soft reset", size: "1", shift: "1", mask: "0x2" },
			{ name: "IACKE", description: "Enable IACK for task start", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MMEMCFG", description: "CLA Memory Configuration", offset: "0x11", size: "16",
		bits: [
			{ name: "PROGE", description: "Program RAM Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "RAM0E", description: "Data RAM 0 Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "RAM1E", description: "Data RAM 1 Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RAM2E", description: "Data RAM 2 Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "RAM0CPUE", description: "Data RAM 0 CPU Access Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "RAM1CPUE", description: "Data RAM 1 CPU Access Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "RAM2CPUE", description: "Data RAM 2 CPU Access Enable", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "MPISRCSEL1", description: "CLA Interrupt Source Select", offset: "0x14", size: "32",
		bits: [
			{ name: "PERINT1SEL", description: "Source for CLA Interrupt 1", size: "4", shift: "0", mask: "0xF" },
			{ name: "PERINT2SEL", description: "Source for CLA Interrupt 2", size: "4", shift: "4", mask: "0xF0" },
			{ name: "PERINT3SEL", description: "Source for CLA Interrupt 3", size: "4", shift: "8", mask: "0xF00" },
			{ name: "PERINT4SEL", description: "Source for CLA Interrupt 4", size: "4", shift: "12", mask: "0xF000" },
			{ name: "PERINT5SEL", description: "Source for CLA Interrupt 5", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "PERINT6SEL", description: "Source for CLA Interrupt 6", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "PERINT7SEL", description: "Source for CLA Interrupt 7", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "PERINT8SEL", description: "Source for CLA Interrupt 8", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "MIFR", description: "CLA Interrupt Flag", offset: "0x20", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIOVF", description: "CLA Interrupt Overflow Flag", offset: "0x21", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIFRC", description: "CLA Interrupt Force", offset: "0x22", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MICLR", description: "CLA Interrupt Flag Clear", offset: "0x23", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MICLROVF", description: "CLA Interrupt Overflow Flag Clr", offset: "0x24", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIER", description: "CLA Interrupt Enable", offset: "0x25", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIRUN", description: "CLA Interrupt Run Status", offset: "0x26", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "_MPC", description: "CLA Program Counter", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "_MAR0", description: "CLA Auxillary Register 0", offset: "0x2A", size: "16",
		bits: [
		]
	},
	{ name: "_MAR1", description: "CLA Auxillary Register 1", offset: "0x2B", size: "16",
		bits: [
		]
	},
	{ name: "_MSTF", description: "CLA Floating-Point Status Reg", offset: "0x2E", size: "32",
		bits: [
			{ name: "LVF", description: "Latched Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "LUF", description: "Latched Underflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "NF", description: "Negative Float Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ZF", description: "Zero Float Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "TF", description: "Test Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RNDF32", description: "Rounding Mode", size: "1", shift: "9", mask: "0x200" },
			{ name: "MEALLOW", description: "MEALLOW Status", size: "1", shift: "11", mask: "0x800" },
			{ name: "RPCL", description: "Return PC: Low Portion", size: "4", shift: "12", mask: "0xF000" },
			{ name: "RPCH", description: "Return PC: High Portion", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "_MR0", description: "CLA Result Register 0", offset: "0x30", size: "32",
		bits: [
		]
	},
	{ name: "_MR1", description: "CLA Result Register 1", offset: "0x33", size: "32",
		bits: [
		]
	},
	{ name: "_MR2", description: "CLA Result Register 2", offset: "0x36", size: "32",
		bits: [
		]
	},
	{ name: "_MR3", description: "CLA Result Register 3", offset: "0x39", size: "32",
		bits: [
		]
	},
];
module.exports = {
	claRegisters: CLA_REGISTERS,
}
