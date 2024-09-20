let CLA_REGISTERS = [
	{ name: "MVECT1", description: "Task 1 Vecotr", offset: "0x0", size: "16",
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
			{ name: "Uint16	HARDRESET", description: "a hard reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SOFTRESET", description: "a soft reset", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	IACKE", description: "IACK for task start", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MMEMCFG", description: "CLA Memory Configuration", offset: "0x11", size: "16",
		bits: [
			{ name: "Uint16	PROGE", description: "RAM Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	RAM0E", description: "RAM 0 Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	RAM1E", description: "RAM 1 Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "RAM2E", description: "RAM 2 Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	RAM0CPUE", description: "RAM 0 CPU Access Enable Bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	RAM1CPUE", description: "Data RAM 1 CPU Access Enable Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	RAM2CPUE", description: "RAM 2 CPU Access Enable Bit", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "MPISRCSEL1", description: "CLA Interrupt Source Select", offset: "0x14", size: "16",
		bits: [
			{ name: "Uint16	PERINT1SEL", description: "for CLA Interrupt 1", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PERINT2SEL", description: "for CLA Interrupt 2", size: "4", shift: "4", mask: "0xF0" },
			{ name: "Uint16	PERINT3SEL", description: "for CLA Interrupt 3", size: "4", shift: "8", mask: "0xF00" },
			{ name: "Uint16	PERINT4SEL", description: "for CLA Interrupt 4", size: "4", shift: "12", mask: "0xF000" },
			{ name: "Uint16	PERINT5SEL", description: "for CLA Interrupt 5", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "Uint16	PERINT6SEL", description: "for CLA Interrupt 6", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "Uint16	PERINT7SEL", description: "for CLA Interrupt 7", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "Uint16	PERINT8SEL", description: "for CLA Interrupt 8", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "MIFR", description: "CLA Interrupt Flag", offset: "0x1F", size: "16",
		bits: [
			{ name: "Uint16	INT1", description: "1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	INT2", description: "2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	INT3", description: "3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	INT4", description: "4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	INT5", description: "5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	INT6", description: "6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	INT7", description: "7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	INT8", description: "8 Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIOVF", description: "CLA Interrupt Overflow Flag", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "MIFRC", description: "CLA Interrupt Force", offset: "0x21", size: "16",
		bits: [
		]
	},
	{ name: "MICLR", description: "CLA Interrupt Flag Clear", offset: "0x22", size: "16",
		bits: [
		]
	},
	{ name: "MICLROVF", description: "CLA Interrupt Overflow Flag Clear", offset: "0x23", size: "16",
		bits: [
		]
	},
	{ name: "MIER", description: "CLA Interrupt Enable", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "MIRUN", description: "CLA Interrupt Run Status", offset: "0x25", size: "16",
		bits: [
		]
	},
	{ name: "_MPC", description: "CLA Program Counter", offset: "0x27", size: "16",
		bits: [
		]
	},
	{ name: "_MAR0", description: "CLA Auxillary Register 0", offset: "0x29", size: "16",
		bits: [
		]
	},
	{ name: "_MAR1", description: "CLA Auxillary Register 1", offset: "0x2A", size: "16",
		bits: [
		]
	},
	{ name: "_MSTF", description: "CLA Floating-Point Status Register", offset: "0x2D", size: "16",
		bits: [
			{ name: "Uint16	LVF", description: "Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	LUF", description: "Underflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	NF", description: "Float Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	ZF", description: "Float Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	TF", description: "Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	RNDF32", description: "Mode", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	MEALLOW", description: "Status", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	RPCL", description: "PC: Low Portion", size: "4", shift: "12", mask: "0xF000" },
			{ name: "Uint16	RPCH", description: "PC: High Portion", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "_MR0", description: "CLA Result Register 0", offset: "0x2E", size: "16",
		bits: [
		]
	},
	{ name: "_MR1", description: "CLA Result Register 1", offset: "0x31", size: "16",
		bits: [
		]
	},
	{ name: "_MR2", description: "CLA Result Register 2", offset: "0x34", size: "16",
		bits: [
		]
	},
	{ name: "_MR3", description: "CLA Result Register 3", offset: "0x37", size: "16",
		bits: [
		]
	},
];
module.exports = {
	claRegisters: CLA_REGISTERS,
}
