let CLA_REGISTERS = [
	{ name: "MVECT1", description: "Task Interrupt Vector", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "MVECT2", description: "Task Interrupt Vector", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "MVECT3", description: "Task Interrupt Vector", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "MVECT4", description: "Task Interrupt Vector", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "MVECT5", description: "Task Interrupt Vector", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "MVECT6", description: "Task Interrupt Vector", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "MVECT7", description: "Task Interrupt Vector", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "MVECT8", description: "Task Interrupt Vector", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "MCTL", description: "Control Register", offset: "0x10", size: "16",
		bits: [
			{ name: "HARDRESET", description: "Hard Reset", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOFTRESET", description: "Soft Reset", size: "1", shift: "1", mask: "0x2" },
			{ name: "IACKE", description: "IACK enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MVECTBGRNDACTIVE", description: "Active register for MVECTBGRND.", offset: "0x1B", size: "16",
		bits: [
		]
	},
	{ name: "SOFTINTEN", description: "CLA Software Interrupt Enable Register", offset: "0x1C", size: "16",
		bits: [
			{ name: "TASK1", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "0", mask: "0x1" },
			{ name: "TASK2", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "1", mask: "0x2" },
			{ name: "TASK3", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "2", mask: "0x4" },
			{ name: "TASK4", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "3", mask: "0x8" },
			{ name: "TASK5", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "4", mask: "0x10" },
			{ name: "TASK6", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "5", mask: "0x20" },
			{ name: "TASK7", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "6", mask: "0x40" },
			{ name: "TASK8", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "7", mask: "0x80" },
			{ name: "TASK1", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "0", mask: "0x1" },
			{ name: "TASK2", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "1", mask: "0x2" },
			{ name: "TASK3", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "2", mask: "0x4" },
			{ name: "TASK4", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "3", mask: "0x8" },
			{ name: "TASK5", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "4", mask: "0x10" },
			{ name: "TASK6", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "5", mask: "0x20" },
			{ name: "TASK7", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "6", mask: "0x40" },
			{ name: "TASK8", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MSTSBGRND", description: "Status register for the back ground task.", offset: "0x1D", size: "16",
		bits: [
			{ name: "RUN", description: "Background task run status bit.", size: "1", shift: "0", mask: "0x1" },
			{ name: "BGINTM", description: "Indicates whether background task can be interrupted.", size: "1", shift: "1", mask: "0x2" },
			{ name: "BGOVF", description: "background task harware trigger overflow.", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MCTLBGRND", description: "Control register for the back ground task.", offset: "0x1E", size: "16",
		bits: [
			{ name: "BGSTART", description: "Background task start bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "TRIGEN", description: "Background task hardware trigger enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "BGEN", description: "Enable background task", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "MVECTBGRND", description: "Vector for the back ground task.", offset: "0x1F", size: "16",
		bits: [
		]
	},
	{ name: "MIFR", description: "Interrupt Flag Register", offset: "0x20", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Interrupt Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Interrupt Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Interrupt Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Interrupt Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Interrupt Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Interrupt Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Interrupt Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIOVF", description: "Interrupt Overflow Flag Register", offset: "0x21", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Interrupt Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Interrupt Overflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Interrupt Overflow Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Interrupt Overflow Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Interrupt Overflow Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Interrupt Overflow Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Interrupt Overflow Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Interrupt Overflow Flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIFRC", description: "Interrupt Force Register", offset: "0x22", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Interrupt Force", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Interrupt Force", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Interrupt Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Interrupt Force", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Interrupt Force", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Interrupt Force", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Interrupt Force", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Interrupt Force", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MICLR", description: "Interrupt Flag Clear Register", offset: "0x23", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Interrupt Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Interrupt Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Interrupt Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Interrupt Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Interrupt Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Interrupt Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Interrupt Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Interrupt Flag Clear", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MICLROVF", description: "Interrupt Overflow Flag Clear Register", offset: "0x24", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Interrupt Overflow Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Interrupt Overflow Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Interrupt Overflow Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Interrupt Overflow Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Interrupt Overflow Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Interrupt Overflow Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Interrupt Overflow Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Interrupt Overflow Flag Clear", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIER", description: "Interrupt Enable Register", offset: "0x25", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MIRUN", description: "Interrupt Run Status Register", offset: "0x26", size: "16",
		bits: [
			{ name: "INT1", description: "Task 1 Run Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT2", description: "Task 2 Run Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "INT3", description: "Task 3 Run Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT4", description: "Task 4 Run Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT5", description: "Task 5 Run Status", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT6", description: "Task 6 Run Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7", description: "Task 7 Run Status", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8", description: "Task 8 Run Status", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MPC", description: "CLA Program Counter", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "MAR0", description: "CLA Auxiliary Register 0", offset: "0x2A", size: "16",
		bits: [
		]
	},
	{ name: "MAR1", description: "CLA Auxiliary Register 1", offset: "0x2B", size: "16",
		bits: [
		]
	},
	{ name: "MSTF", description: "CLA Floating-Point Status Register", offset: "0x2E", size: "32",
		bits: [
			{ name: "LVF", description: "Latched Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "LUF", description: "Latched Underflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "NF", description: "Negative Float Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ZF", description: "Zero Float Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "TF", description: "Test Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RNDF32", description: "Round 32-bit Floating-Point Mode", size: "1", shift: "9", mask: "0x200" },
			{ name: "MEALLOW", description: "MEALLOW Status", size: "1", shift: "11", mask: "0x800" },
			{ name: "RPC", description: "Return PC", size: "16", shift: "12", mask: "0xFFFF000" },
		]
	},
	{ name: "MR0", description: "CLA Floating-Point Result Register 0", offset: "0x30", size: "16",
		bits: [
		]
	},
	{ name: "MR1", description: "CLA Floating-Point Result Register 1", offset: "0x34", size: "16",
		bits: [
		]
	},
	{ name: "MR2", description: "CLA Floating-Point Result Register 2", offset: "0x38", size: "16",
		bits: [
		]
	},
	{ name: "MR3", description: "CLA Floating-Point Result Register 3", offset: "0x3C", size: "16",
		bits: [
		]
	},
	{ name: "MPSACTL", description: "CLA PSA Control Register", offset: "0x42", size: "16",
		bits: [
			{ name: "MPABSTART", description: "Start logging PAB onto PSA1", size: "1", shift: "0", mask: "0x1" },
			{ name: "MPABCYC", description: "PAB logging into PSA1 is on every cycle or when PAB changes.", size: "1", shift: "1", mask: "0x2" },
			{ name: "MDWDBSTART", description: "Start logging DWDB onto PSA2", size: "1", shift: "2", mask: "0x4" },
			{ name: "MDWDBCYC", description: "DWDB logging into PSA2 is on every cycle.", size: "1", shift: "3", mask: "0x8" },
			{ name: "MPSA1CLEAR", description: "PSA1 clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "MPSA2CLEAR", description: "PSA2 Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "MPSA2CFG", description: "PSA2 Polynomial Configuration", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MPABSTART", description: "Start logging PAB onto PSA1", size: "1", shift: "0", mask: "0x1" },
			{ name: "MPABCYC", description: "PAB logging into PSA1 is on every cycle or when PAB changes.", size: "1", shift: "1", mask: "0x2" },
			{ name: "MDWDBSTART", description: "Start logging DWDB onto PSA2", size: "1", shift: "2", mask: "0x4" },
			{ name: "MDWDBCYC", description: "DWDB logging into PSA2 is on every cycle.", size: "1", shift: "3", mask: "0x8" },
			{ name: "MPSA1CLEAR", description: "PSA1 clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "MPSA2CLEAR", description: "PSA2 Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "MPSA2CFG", description: "PSA2 Polynomial Configuration", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "MPSA1", description: "CLA PSA1 Register", offset: "0x44", size: "16",
		bits: [
		]
	},
	{ name: "MPSA2", description: "CLA PSA2 Register", offset: "0x46", size: "16",
		bits: [
		]
	},
	{ name: "MVECTBGRNDACTIVE", description: "Active register for MVECTBGRND.", offset: "0x80", size: "16",
		bits: [
		]
	},
	{ name: "MPSACTL", description: "CLA PSA Control Register", offset: "0xC0", size: "16",
		bits: [
			{ name: "MPABSTART", description: "Start logging PAB onto PSA1", size: "1", shift: "0", mask: "0x1" },
			{ name: "MPABCYC", description: "PAB logging into PSA1 is on every cycle or when PAB changes.", size: "1", shift: "1", mask: "0x2" },
			{ name: "MDWDBSTART", description: "Start logging DWDB onto PSA2", size: "1", shift: "2", mask: "0x4" },
			{ name: "MDWDBCYC", description: "DWDB logging into PSA2 is on every cycle.", size: "1", shift: "3", mask: "0x8" },
			{ name: "MPSA1CLEAR", description: "PSA1 clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "MPSA2CLEAR", description: "PSA2 Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "MPSA2CFG", description: "PSA2 Polynomial Configuration", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MPABSTART", description: "Start logging PAB onto PSA1", size: "1", shift: "0", mask: "0x1" },
			{ name: "MPABCYC", description: "PAB logging into PSA1 is on every cycle or when PAB changes.", size: "1", shift: "1", mask: "0x2" },
			{ name: "MDWDBSTART", description: "Start logging DWDB onto PSA2", size: "1", shift: "2", mask: "0x4" },
			{ name: "MDWDBCYC", description: "DWDB logging into PSA2 is on every cycle.", size: "1", shift: "3", mask: "0x8" },
			{ name: "MPSA1CLEAR", description: "PSA1 clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "MPSA2CLEAR", description: "PSA2 Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "MPSA2CFG", description: "PSA2 Polynomial Configuration", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "MPSA1", description: "CLA PSA1 Register", offset: "0xC2", size: "16",
		bits: [
		]
	},
	{ name: "MPSA2", description: "CLA PSA2 Register", offset: "0xC4", size: "16",
		bits: [
		]
	},
	{ name: "SOFTINTEN", description: "CLA Software Interrupt Enable Register", offset: "0xE0", size: "16",
		bits: [
			{ name: "TASK1", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "0", mask: "0x1" },
			{ name: "TASK2", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "1", mask: "0x2" },
			{ name: "TASK3", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "2", mask: "0x4" },
			{ name: "TASK4", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "3", mask: "0x8" },
			{ name: "TASK5", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "4", mask: "0x10" },
			{ name: "TASK6", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "5", mask: "0x20" },
			{ name: "TASK7", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "6", mask: "0x40" },
			{ name: "TASK8", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "7", mask: "0x80" },
			{ name: "TASK1", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "0", mask: "0x1" },
			{ name: "TASK2", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "1", mask: "0x2" },
			{ name: "TASK3", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "2", mask: "0x4" },
			{ name: "TASK4", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "3", mask: "0x8" },
			{ name: "TASK5", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "4", mask: "0x10" },
			{ name: "TASK6", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "5", mask: "0x20" },
			{ name: "TASK7", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "6", mask: "0x40" },
			{ name: "TASK8", description: "Configure Software Interrupt or End of Task interrupt.", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SOFTINTFRC", description: "CLA Software Interrupt Force Register", offset: "0xE2", size: "16",
		bits: [
			{ name: "TASK1", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "0", mask: "0x1" },
			{ name: "TASK2", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "1", mask: "0x2" },
			{ name: "TASK3", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "2", mask: "0x4" },
			{ name: "TASK4", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "3", mask: "0x8" },
			{ name: "TASK5", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "4", mask: "0x10" },
			{ name: "TASK6", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "5", mask: "0x20" },
			{ name: "TASK7", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "6", mask: "0x40" },
			{ name: "TASK8", description: "Force CLA software interrupt for the corresponding task.", size: "1", shift: "7", mask: "0x80" },
		]
	},
];
module.exports = {
	claRegisters: CLA_REGISTERS,
}
