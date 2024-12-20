let GPIO_REGISTERS = [
	{ name: "GPACTRL", description: "GPIO A Control Register (GPIO0-31)", offset: "0x0", size: "32",
		bits: [
			{ name: "QUALPRD0", description: "GPIO0 to 7 Qual Cycles", size: "8", shift: "0", mask: "0xFF" },
			{ name: "QUALPRD1", description: "GPIO8 to 15 Qual Cycles", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "QUALPRD2", description: "GPIO16 to 23 Qual Cycles", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "QUALPRD3", description: "GPIO24 to 31 Qual Cycles", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "GPAQSEL1", description: "GPIO A Qual. Sel. 1 Reg. (GPIO0-15)", offset: "0x2", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPIO1", description: "GPIO1", size: "2", shift: "2", mask: "0xC" },
			{ name: "GPIO2", description: "GPIO2", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPIO3", description: "GPIO3", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GPIO4", description: "GPIO4", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPIO5", description: "GPIO5", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GPIO6", description: "GPIO6", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GPIO7", description: "GPIO7", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GPIO8", description: "GPIO8", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GPIO9", description: "GPIO9", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "GPIO10", description: "GPIO10", size: "2", shift: "20", mask: "0x300000" },
			{ name: "GPIO11", description: "GPIO11", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "GPIO12", description: "GPIO12", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "GPIO13", description: "GPIO13", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "GPIO14", description: "GPIO14", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "GPIO15", description: "GPIO15", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "GPAQSEL2", description: "GPIO A Qual. Sel. 2 Reg. (GPIO16-31)", offset: "0x4", size: "32",
		bits: [
			{ name: "GPIO16", description: "GPIO16", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPIO17", description: "GPIO17", size: "2", shift: "2", mask: "0xC" },
			{ name: "GPIO18", description: "GPIO18", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPIO19", description: "GPIO19", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GPIO20", description: "GPIO20", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPIO21", description: "GPIO21", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GPIO22", description: "GPIO22", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GPIO23", description: "GPIO23", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GPIO24", description: "GPIO24", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GPIO25", description: "GPIO25", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "GPIO26", description: "GPIO26", size: "2", shift: "20", mask: "0x300000" },
			{ name: "GPIO27", description: "GPIO27", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "GPIO28", description: "GPIO28", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "GPIO29", description: "GPIO29", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "GPIO30", description: "GPIO30", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "GPIO31", description: "GPIO31", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "GPAMUX1", description: "GPIO A Mux 1 Register (GPIO0-15)", offset: "0x6", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPIO1", description: "GPIO1", size: "2", shift: "2", mask: "0xC" },
			{ name: "GPIO2", description: "GPIO2", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPIO3", description: "GPIO3", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GPIO4", description: "GPIO4", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPIO5", description: "GPIO5", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GPIO6", description: "GPIO6", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GPIO7", description: "GPIO7", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GPIO8", description: "GPIO8", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GPIO9", description: "GPIO9", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "GPIO10", description: "GPIO10", size: "2", shift: "20", mask: "0x300000" },
			{ name: "GPIO11", description: "GPIO11", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "GPIO12", description: "GPIO12", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "GPIO13", description: "GPIO13", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "GPIO14", description: "GPIO14", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "GPIO15", description: "GPIO15", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "GPAMUX2", description: "GPIO A Mux 2 Register (GPIO16-31)", offset: "0x8", size: "32",
		bits: [
			{ name: "GPIO16", description: "GPIO16", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPIO17", description: "GPIO17", size: "2", shift: "2", mask: "0xC" },
			{ name: "GPIO18", description: "GPIO18", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPIO19", description: "GPIO19", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GPIO20", description: "GPIO20", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPIO21", description: "GPIO21", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GPIO22", description: "GPIO22", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GPIO23", description: "GPIO23", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GPIO24", description: "GPIO24", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GPIO25", description: "GPIO25", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "GPIO26", description: "GPIO26", size: "2", shift: "20", mask: "0x300000" },
			{ name: "GPIO27", description: "GPIO27", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "GPIO28", description: "GPIO28", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "GPIO29", description: "GPIO29", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "GPIO30", description: "GPIO30", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "GPIO31", description: "GPIO31", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "GPADIR", description: "GPIO A Direction Reg. (GPIO0 to 31)", offset: "0xA", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPAPUD", description: "GPIO A Pull-Up Disable Register", offset: "0xC", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPBCTRL", description: "GPIO B Control Reg. (GPIO32-40, 42)", offset: "0x10", size: "32",
		bits: [
			{ name: "QUALPRD0", description: "GPIO32 to 39 Qual Cycles", size: "8", shift: "0", mask: "0xFF" },
			{ name: "QUALPRD1", description: "GPIO40 and GPIO 42 Qual Cycles", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "GPBQSEL1", description: "GPIO B Qual. Sel. 1 Reg GPIO32-40, 42", offset: "0x12", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPIO33", description: "GPIO33", size: "2", shift: "2", mask: "0xC" },
			{ name: "GPIO34", description: "GPIO34", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPIO35", description: "GPIO35", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GPIO36", description: "GPIO36", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPIO37", description: "GPIO37", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GPIO38", description: "GPIO38", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GPIO39", description: "GPIO39", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GPIO40", description: "GPIO40", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GPIO42", description: "GPIO42", size: "2", shift: "20", mask: "0x300000" },
		]
	},
	{ name: "GPBMUX1", description: "GPIO B Mux 1 Register (GPIO32-40, 42)", offset: "0x16", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPIO33", description: "GPIO33", size: "2", shift: "2", mask: "0xC" },
			{ name: "GPIO34", description: "GPIO34", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPIO35", description: "GPIO35", size: "2", shift: "6", mask: "0xC0" },
			{ name: "GPIO36", description: "GPIO36", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPIO37", description: "GPIO37", size: "2", shift: "10", mask: "0xC00" },
			{ name: "GPIO38", description: "GPIO38", size: "2", shift: "12", mask: "0x3000" },
			{ name: "GPIO39", description: "GPIO39", size: "2", shift: "14", mask: "0xC000" },
			{ name: "GPIO40", description: "GPIO40", size: "2", shift: "16", mask: "0x30000" },
			{ name: "GPIO42", description: "GPIO42", size: "2", shift: "20", mask: "0x300000" },
		]
	},
	{ name: "GPBDIR", description: "GPIO B Direction Reg. (GPIO32-40, 42)", offset: "0x1A", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO42", description: "GPIO42 Data", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "GPBPUD", description: "GPIO B Pull-Up Disable Register", offset: "0x1C", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO42", description: "GPIO42 Data", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "GPADAT", description: "GPIO A Data Register GPIO0-31", offset: "0x0", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPASET", description: "GPIO A Data Set Reg. GPIO0-31", offset: "0x2", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPACLEAR", description: "GPIO A Data Clear Reg. GPIO0-31", offset: "0x4", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPATOGGLE", description: "GPIO A Data Toggle Reg. GPIO031", offset: "0x6", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPBDAT", description: "GPIO B Data Register GPIO32-40, 42", offset: "0x8", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO42", description: "GPIO42 Data", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "GPBSET", description: "GPIO B Data Set Reg GPIO32-40, 42", offset: "0xA", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO42", description: "GPIO42 Data", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "GPBCLEAR", description: "GPIO B Data Clr Reg. GPIO32-40, 42", offset: "0xC", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO42", description: "GPIO42 Data", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "GPBTOGGLE", description: "GPIO B Data Toggle Reg GPIO32-40,42", offset: "0xE", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO42", description: "GPIO42 Data", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "GPIOXINT1SEL", description: "XINT1 GPIO Input Sel. Reg GPIO0-31", offset: "0x0", size: "16",
		bits: [
			{ name: "GPIOSEL", description: "Select XGPIO pin as __interrupt source", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "GPIOXINT2SEL", description: "XINT2 GPIO Input Sel. Reg GPIO0-31", offset: "0x1", size: "16",
		bits: [
			{ name: "GPIOSEL", description: "Select XGPIO pin as __interrupt source", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "GPIOXINT3SEL", description: "XINT3 GPIO Input Sel. Reg GPIO0-31", offset: "0x2", size: "16",
		bits: [
			{ name: "GPIOSEL", description: "Select XGPIO pin as __interrupt source", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "GPIOLPMSEL", description: "LPM GPIO Select Reg GPIO0-31", offset: "0x8", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Data", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Data", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Data", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Data", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Data", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Data", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Data", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Data", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Data", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Data", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Data", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Data", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Data", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Data", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Data", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Data", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Data", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Data", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Data", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Data", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Data", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Data", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Data", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Data", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Data", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Data", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Data", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Data", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Data", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Data", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Data", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Data", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
];
module.exports = {
	gpioRegisters: GPIO_REGISTERS,
}
