let CLA_REGISTERS = [
	{ name: "MVECT1", description: "Task 1 vector", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "MVECT2", description: "Task 2 vector", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "MVECT3", description: "Task 3 vector", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "MVECT4", description: "Task 4 vector", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "MVECT5", description: "Task 5 vector", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "MVECT6", description: "Task 6 vector", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "MVECT7", description: "Task 7 vector", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "MVECT8", description: "Task 8 vector", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "MCTL", description: "CLA control", offset: "0x10", size: "16",
		bits: [
			{ name: "HARDRESET", description: "Issue a hard reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOFTRESET", description: "Issue a soft reset", size: "1", shift: "1", mask: "0x2" },
			{ name: "IACKE", description: "Enable IACK for task start", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MMEMCFG", description: "CLA memory configuration", offset: "0x11", size: "16",
		bits: [
			{ name: "PROGE", description: "Program RAM enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "RAM0E", description: "Data RAM 0 enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "RAM1E", description: "Data RAM 1 enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "MPISRCSEL1", description: "CLA interrupt source select", offset: "0x14", size: "32",
		bits: [
			{ name: "PERINT1SEL", description: "Source for CLA interrupt 1", size: "4", shift: "0", mask: "0xF" },
			{ name: "PERINT2SEL", description: "Source for CLA interrupt 2", size: "4", shift: "4", mask: "0xF0" },
			{ name: "PERINT3SEL", description: "Source for CLA interrupt 3", size: "4", shift: "8", mask: "0xF00" },
			{ name: "PERINT4SEL", description: "Source for CLA interrupt 4", size: "4", shift: "12", mask: "0xF000" },
			{ name: "PERINT5SEL", description: "Source for CLA interrupt 5", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "PERINT6SEL", description: "Source for CLA interrupt 6", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "PERINT7SEL", description: "Source for CLA interrupt 7", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "PERINT8SEL", description: "Source for CLA interrupt 8", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "MIFR", description: "CLA interrupt flag", offset: "0x20", size: "16",
		bits: [
			{ name: "INT1", description: "Interrupt 1 flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Interrupt 2 flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Interrupt 3 flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Interrupt 4 flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Interrupt 5 flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Interrupt 6 flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Interrupt 7 flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Interrupt 8 flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIOVF", description: "CLA interrupt overflow flag", offset: "0x21", size: "16",
		bits: [
		]
	},
	{ name: "MIFRC", description: "CLA interrupt force", offset: "0x22", size: "16",
		bits: [
		]
	},
	{ name: "MICLR", description: "CLA interrupt flag clear", offset: "0x23", size: "16",
		bits: [
		]
	},
	{ name: "MICLROVF", description: "CLA interrupt overflow flag clear", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "MIER", description: "CLA interrupt enable", offset: "0x25", size: "16",
		bits: [
		]
	},
	{ name: "MIRUN", description: "CLA interrupt run status", offset: "0x26", size: "16",
		bits: [
		]
	},
	{ name: "_MPC", description: "CLA program counter", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "_MAR0", description: "CLA auxillary register 0", offset: "0x2A", size: "16",
		bits: [
		]
	},
	{ name: "_MAR1", description: "CLA auxillary register 1", offset: "0x2B", size: "16",
		bits: [
		]
	},
	{ name: "_MSTF", description: "CLA floating-point status register", offset: "0x2E", size: "32",
		bits: [
			{ name: "LVF", description: "Latched overflow flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "LUF", description: "Latched underflow flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "NF", description: "Negative float flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ZF", description: "Zero float flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "TF", description: "Test flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RNDF32", description: "Rounding mode", size: "1", shift: "9", mask: "0x200" },
			{ name: "MEALLOW", description: "MEALLOW status", size: "1", shift: "11", mask: "0x800" },
			{ name: "RPCL", description: "Return PC, low portion", size: "4", shift: "12", mask: "0xF000" },
			{ name: "RPCH", description: "Return PC, high portion", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "_MR0", description: "CLA result register 0", offset: "0x30", size: "32",
		bits: [
		]
	},
	{ name: "_MR1", description: "CLA result register 1", offset: "0x34", size: "32",
		bits: [
		]
	},
	{ name: "_MR2", description: "CLA result register 2", offset: "0x38", size: "32",
		bits: [
		]
	},
	{ name: "_MR3", description: "CLA result register 3", offset: "0x3C", size: "32",
		bits: [
		]
	},
];
module.exports = {
	claRegisters: CLA_REGISTERS,
}
