let SYSCTL_REGISTERS = [
	{ name: "DEVCFGLOCK1", description: "Lock bit for PERxSYSCONFIG0-31 registers", offset: "0x0", size: "32",
		bits: [
			{ name: "PER0SYSCONFIG", description: "Lock bit for PER0SYSCONFIG register", size: "1", shift: "0", mask: "0x1" },
			{ name: "PER1SYSCONFIG", description: "Lock bit for PER1SYSCONFIG register", size: "1", shift: "1", mask: "0x2" },
			{ name: "PER2SYSCONFIG", description: "Lock bit for PER2SYSCONFIG register", size: "1", shift: "2", mask: "0x4" },
			{ name: "PER3SYSCONFIG", description: "Lock bit for PER3SYSCONFIG register", size: "1", shift: "3", mask: "0x8" },
			{ name: "PER4SYSCONFIG", description: "Lock bit for PER4SYSCONFIG register", size: "1", shift: "4", mask: "0x10" },
			{ name: "PER5SYSCONFIG", description: "Lock bit for PER5SYSCONFIG register", size: "1", shift: "5", mask: "0x20" },
			{ name: "PER6SYSCONFIG", description: "Lock bit for PER6SYSCONFIG register", size: "1", shift: "6", mask: "0x40" },
			{ name: "PER7SYSCONFIG", description: "Lock bit for PER7SYSCONFIG register", size: "1", shift: "7", mask: "0x80" },
			{ name: "PER8SYSCONFIG", description: "Lock bit for PER8SYSCONFIG register", size: "1", shift: "8", mask: "0x100" },
			{ name: "PER9SYSCONFIG", description: "Lock bit for PER9SYSCONFIG register", size: "1", shift: "9", mask: "0x200" },
			{ name: "PER10SYSCONFIG", description: "Lock bit for PER10SYSCONFIG register", size: "1", shift: "10", mask: "0x400" },
			{ name: "PER11SYSCONFIG", description: "Lock bit for PER11SYSCONFIG register", size: "1", shift: "11", mask: "0x800" },
			{ name: "PER12SYSCONFIG", description: "Lock bit for PER12SYSCONFIG register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PER13SYSCONFIG", description: "Lock bit for PER13SYSCONFIG register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PER14SYSCONFIG", description: "Lock bit for PER14SYSCONFIG register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PER15SYSCONFIG", description: "Lock bit for PER15SYSCONFIG register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "PER16SYSCONFIG", description: "Lock bit for PER16SYSCONFIG register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PER17SYSCONFIG", description: "Lock bit for PER17SYSCONFIG register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "PER18SYSCONFIG", description: "Lock bit for PER18SYSCONFIG register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PER19SYSCONFIG", description: "Lock bit for PER19SYSCONFIG register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PER20SYSCONFIG", description: "Lock bit for PER20SYSCONFIG register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "PER21SYSCONFIG", description: "Lock bit for PER21SYSCONFIG register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "PER22SYSCONFIG", description: "Lock bit for PER22SYSCONFIG register", size: "1", shift: "22", mask: "0x400000" },
			{ name: "PER23SYSCONFIG", description: "Lock bit for PER23SYSCONFIG register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "PER24SYSCONFIG", description: "Lock bit for PER24SYSCONFIG register", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "PER25SYSCONFIG", description: "Lock bit for PER25SYSCONFIG register", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "PER26SYSCONFIG", description: "Lock bit for PER26SYSCONFIG register", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "PER27SYSCONFIG", description: "Lock bit for PER27SYSCONFIG register", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "PER28SYSCONFIG", description: "Lock bit for PER28SYSCONFIG register", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "PER29SYSCONFIG", description: "Lock bit for PER29SYSCONFIG register", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "PER30SYSCONFIG", description: "Lock bit for PER30SYSCONFIG register", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "PER31SYSCONFIG", description: "Lock bit for PER31SYSCONFIG register", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "DEVCFGLOCK2", description: "Lock bit for DEVCFG registers", offset: "0x4", size: "16",
		bits: [
			{ name: "SICCONFIG", description: "Lock for SICCONFIG", size: "1", shift: "3", mask: "0x8" },
			{ name: "LSEN", description: "Lock for LSEN", size: "1", shift: "4", mask: "0x10" },
			{ name: "ETHERCATCTL", description: "Lock for ETHERCATCTL", size: "1", shift: "6", mask: "0x40" },
			{ name: "PCLKCR22", description: "Lock for PCLKCR22", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DEVCFGLOCK3", description: "Lock bit for PERxSYSCONFIG32-63 registers", offset: "0x8", size: "32",
		bits: [
			{ name: "PER32SYSCONFIG", description: "Lock bit for PER32SYSCONFIG register", size: "1", shift: "0", mask: "0x1" },
			{ name: "PER33SYSCONFIG", description: "Lock bit for PER33SYSCONFIG register", size: "1", shift: "1", mask: "0x2" },
			{ name: "PER34SYSCONFIG", description: "Lock bit for PER34SYSCONFIG register", size: "1", shift: "2", mask: "0x4" },
			{ name: "PER35SYSCONFIG", description: "Lock bit for PER35SYSCONFIG register", size: "1", shift: "3", mask: "0x8" },
			{ name: "PER36SYSCONFIG", description: "Lock bit for PER36SYSCONFIG register", size: "1", shift: "4", mask: "0x10" },
			{ name: "PER37SYSCONFIG", description: "Lock bit for PER37SYSCONFIG register", size: "1", shift: "5", mask: "0x20" },
			{ name: "PER38SYSCONFIG", description: "Lock bit for PER38SYSCONFIG register", size: "1", shift: "6", mask: "0x40" },
			{ name: "PER39SYSCONFIG", description: "Lock bit for PER39SYSCONFIG register", size: "1", shift: "7", mask: "0x80" },
			{ name: "PER40SYSCONFIG", description: "Lock bit for PER40SYSCONFIG register", size: "1", shift: "8", mask: "0x100" },
			{ name: "PER41SYSCONFIG", description: "Lock bit for PER41SYSCONFIG register", size: "1", shift: "9", mask: "0x200" },
			{ name: "PER42SYSCONFIG", description: "Lock bit for PER42SYSCONFIG register", size: "1", shift: "10", mask: "0x400" },
			{ name: "PER43SYSCONFIG", description: "Lock bit for PER43SYSCONFIG register", size: "1", shift: "11", mask: "0x800" },
			{ name: "PER44SYSCONFIG", description: "Lock bit for PER44SYSCONFIG register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PER45SYSCONFIG", description: "Lock bit for PER45SYSCONFIG register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PER46SYSCONFIG", description: "Lock bit for PER46SYSCONFIG register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PER47SYSCONFIG", description: "Lock bit for PER47SYSCONFIG register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "PER48SYSCONFIG", description: "Lock bit for PER48SYSCONFIG register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PER49SYSCONFIG", description: "Lock bit for PER49SYSCONFIG register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "PER50SYSCONFIG", description: "Lock bit for PER50SYSCONFIG register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PER51SYSCONFIG", description: "Lock bit for PER51SYSCONFIG register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PER52SYSCONFIG", description: "Lock bit for PER52SYSCONFIG register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "PER53SYSCONFIG", description: "Lock bit for PER53SYSCONFIG register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "PER54SYSCONFIG", description: "Lock bit for PER54SYSCONFIG register", size: "1", shift: "22", mask: "0x400000" },
			{ name: "PER55SYSCONFIG", description: "Lock bit for PER55SYSCONFIG register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "PER56SYSCONFIG", description: "Lock bit for PER56SYSCONFIG register", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "PER57SYSCONFIG", description: "Lock bit for PER57SYSCONFIG register", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "PER58SYSCONFIG", description: "Lock bit for PER58SYSCONFIG register", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "PER59SYSCONFIG", description: "Lock bit for PER59SYSCONFIG register", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "PER60SYSCONFIG", description: "Lock bit for PER60SYSCONFIG register", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "PER61SYSCONFIG", description: "Lock bit for PER61SYSCONFIG register", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "PER62SYSCONFIG", description: "Lock bit for PER62SYSCONFIG register", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "PER63SYSCONFIG", description: "Lock bit for PER63SYSCONFIG register", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "DEVCFGLOCK4", description: "Lock bit for PERxSYSCONFIG64-95 registers", offset: "0xC", size: "32",
		bits: [
			{ name: "PER64SYSCONFIG", description: "Lock bit for PER64SYSCONFIG register", size: "1", shift: "0", mask: "0x1" },
			{ name: "PER65SYSCONFIG", description: "Lock bit for PER65SYSCONFIG register", size: "1", shift: "1", mask: "0x2" },
			{ name: "PER66SYSCONFIG", description: "Lock bit for PER66SYSCONFIG register", size: "1", shift: "2", mask: "0x4" },
			{ name: "PER67SYSCONFIG", description: "Lock bit for PER67SYSCONFIG register", size: "1", shift: "3", mask: "0x8" },
			{ name: "PER68SYSCONFIG", description: "Lock bit for PER68SYSCONFIG register", size: "1", shift: "4", mask: "0x10" },
			{ name: "PER69SYSCONFIG", description: "Lock bit for PER69SYSCONFIG register", size: "1", shift: "5", mask: "0x20" },
			{ name: "PER70SYSCONFIG", description: "Lock bit for PER70SYSCONFIG register", size: "1", shift: "6", mask: "0x40" },
			{ name: "PER71SYSCONFIG", description: "Lock bit for PER71SYSCONFIG register", size: "1", shift: "7", mask: "0x80" },
			{ name: "PER72SYSCONFIG", description: "Lock bit for PER72SYSCONFIG register", size: "1", shift: "8", mask: "0x100" },
			{ name: "PER73SYSCONFIG", description: "Lock bit for PER73SYSCONFIG register", size: "1", shift: "9", mask: "0x200" },
			{ name: "PER74SYSCONFIG", description: "Lock bit for PER74SYSCONFIG register", size: "1", shift: "10", mask: "0x400" },
			{ name: "PER75SYSCONFIG", description: "Lock bit for PER75SYSCONFIG register", size: "1", shift: "11", mask: "0x800" },
			{ name: "PER76SYSCONFIG", description: "Lock bit for PER76SYSCONFIG register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PER77SYSCONFIG", description: "Lock bit for PER77SYSCONFIG register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PER78SYSCONFIG", description: "Lock bit for PER78SYSCONFIG register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PER79SYSCONFIG", description: "Lock bit for PER79SYSCONFIG register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "PER80SYSCONFIG", description: "Lock bit for PER80SYSCONFIG register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PER81SYSCONFIG", description: "Lock bit for PER81SYSCONFIG register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "PER82SYSCONFIG", description: "Lock bit for PER82SYSCONFIG register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PER83SYSCONFIG", description: "Lock bit for PER83SYSCONFIG register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PER84SYSCONFIG", description: "Lock bit for PER84SYSCONFIG register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "PER85SYSCONFIG", description: "Lock bit for PER85SYSCONFIG register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "PER86SYSCONFIG", description: "Lock bit for PER86SYSCONFIG register", size: "1", shift: "22", mask: "0x400000" },
			{ name: "PER87SYSCONFIG", description: "Lock bit for PER87SYSCONFIG register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "PER88SYSCONFIG", description: "Lock bit for PER88SYSCONFIG register", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "PER89SYSCONFIG", description: "Lock bit for PER89SYSCONFIG register", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "PER90SYSCONFIG", description: "Lock bit for PER90SYSCONFIG register", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "PER91SYSCONFIG", description: "Lock bit for PER91SYSCONFIG register", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "PER92SYSCONFIG", description: "Lock bit for PER92SYSCONFIG register", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "PER93SYSCONFIG", description: "Lock bit for PER93SYSCONFIG register", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "PER94SYSCONFIG", description: "Lock bit for PER94SYSCONFIG register", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "PER95SYSCONFIG", description: "Lock bit for PER95SYSCONFIG register", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "DEVCFGLOCK5", description: "Lock bit for PERxSYSCONFIG96-127 registers", offset: "0x10", size: "32",
		bits: [
			{ name: "PER96SYSCONFIG", description: "Lock bit for PER96SYSCONFIG register", size: "1", shift: "0", mask: "0x1" },
			{ name: "PER97SYSCONFIG", description: "Lock bit for PER97SYSCONFIG register", size: "1", shift: "1", mask: "0x2" },
			{ name: "PER98SYSCONFIG", description: "Lock bit for PER98SYSCONFIG register", size: "1", shift: "2", mask: "0x4" },
			{ name: "PER99SYSCONFIG", description: "Lock bit for PER99SYSCONFIG register", size: "1", shift: "3", mask: "0x8" },
			{ name: "PER100SYSCONFIG", description: "Lock bit for PER100SYSCONFIG register", size: "1", shift: "4", mask: "0x10" },
			{ name: "PER101SYSCONFIG", description: "Lock bit for PER101SYSCONFIG register", size: "1", shift: "5", mask: "0x20" },
			{ name: "PER102SYSCONFIG", description: "Lock bit for PER102SYSCONFIG register", size: "1", shift: "6", mask: "0x40" },
			{ name: "PER103SYSCONFIG", description: "Lock bit for PER103SYSCONFIG register", size: "1", shift: "7", mask: "0x80" },
			{ name: "PER104SYSCONFIG", description: "Lock bit for PER104SYSCONFIG register", size: "1", shift: "8", mask: "0x100" },
			{ name: "PER105SYSCONFIG", description: "Lock bit for PER105SYSCONFIG register", size: "1", shift: "9", mask: "0x200" },
			{ name: "PER106SYSCONFIG", description: "Lock bit for PER106SYSCONFIG register", size: "1", shift: "10", mask: "0x400" },
			{ name: "PER107SYSCONFIG", description: "Lock bit for PER107SYSCONFIG register", size: "1", shift: "11", mask: "0x800" },
			{ name: "PER108SYSCONFIG", description: "Lock bit for PER108SYSCONFIG register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PER109SYSCONFIG", description: "Lock bit for PER109SYSCONFIG register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PER110SYSCONFIG", description: "Lock bit for PER110SYSCONFIG register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PER111SYSCONFIG", description: "Lock bit for PER111SYSCONFIG register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "PER112SYSCONFIG", description: "Lock bit for PER112SYSCONFIG register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PER113SYSCONFIG", description: "Lock bit for PER113SYSCONFIG register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "PER114SYSCONFIG", description: "Lock bit for PER114SYSCONFIG register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PER115SYSCONFIG", description: "Lock bit for PER115SYSCONFIG register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PER116SYSCONFIG", description: "Lock bit for PER116SYSCONFIG register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "PER117SYSCONFIG", description: "Lock bit for PER117SYSCONFIG register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "PER118SYSCONFIG", description: "Lock bit for PER118SYSCONFIG register", size: "1", shift: "22", mask: "0x400000" },
			{ name: "PER119SYSCONFIG", description: "Lock bit for PER119SYSCONFIG register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "PER120SYSCONFIG", description: "Lock bit for PER120SYSCONFIG register", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "PARTIDL", description: "Lower 32-bit of Device PART Identification Number", offset: "0x20", size: "32",
		bits: [
			{ name: "QUAL", description: "Qualification Status", size: "2", shift: "6", mask: "0xC0" },
			{ name: "PIN_COUNT", description: "Device Pin Count", size: "3", shift: "8", mask: "0x700" },
			{ name: "FLASH_SIZE", description: "FLASH_SIZE", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "PARTID_FORMAT_REV", description: "PARTID_FORMAT_REV", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "PARTIDH", description: "Upper 32-bit of Device PART Identification Number", offset: "0x24", size: "32",
		bits: [
			{ name: "FAMILY", description: "Device family", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "PARTNO", description: "Device part number", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "DEVICE_CLASS_ID", description: "Device class ID", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "REVID", description: "Device Revision Number", offset: "0x28", size: "16",
		bits: [
			{ name: "REVID", description: "Device Revision ID. This is specific to the Device", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "MCUCNF1", description: "MCUCNF Capability: EMIF Customization", offset: "0x1C0", size: "16",
		bits: [
			{ name: "EMIF1", description: "EMIF1 Present", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MCUCNF2", description: "MCUCNF Capability: EPWM", offset: "0x1C4", size: "32",
		bits: [
			{ name: "EPWM1", description: "EPWM1 Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2", description: "EPWM2 Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3", description: "EPWM3 Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4", description: "EPWM4 Present", size: "1", shift: "3", mask: "0x8" },
			{ name: "EPWM5", description: "EPWM5 Present", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPWM6", description: "EPWM6 Present", size: "1", shift: "5", mask: "0x20" },
			{ name: "EPWM7", description: "EPWM7 Present", size: "1", shift: "6", mask: "0x40" },
			{ name: "EPWM8", description: "EPWM8 Present", size: "1", shift: "7", mask: "0x80" },
			{ name: "EPWM9", description: "EPWM9 Present", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPWM10", description: "EPWM10 Present", size: "1", shift: "9", mask: "0x200" },
			{ name: "EPWM11", description: "EPWM11 Present", size: "1", shift: "10", mask: "0x400" },
			{ name: "EPWM12", description: "EPWM12 Present", size: "1", shift: "11", mask: "0x800" },
			{ name: "EPWM13", description: "EPWM13 Present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "EPWM14", description: "EPWM14 Present", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EPWM15", description: "EPWM15 Present", size: "1", shift: "14", mask: "0x4000" },
			{ name: "EPWM16", description: "EPWM16 Present", size: "1", shift: "15", mask: "0x8000" },
			{ name: "EPWM17", description: "EPWM17 Present", size: "1", shift: "16", mask: "0x10000" },
			{ name: "EPWM18", description: "EPWM18 Present", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "MCUCNF4", description: "MCUCNF Capability: EQEP", offset: "0x1CC", size: "16",
		bits: [
			{ name: "EQEP1", description: "EQEP1 Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "EQEP2", description: "EQEP2 Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "EQEP3", description: "EQEP3 Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "EQEP4", description: "EQEP4 Present", size: "1", shift: "3", mask: "0x8" },
			{ name: "EQEP5", description: "EQEP5 Present", size: "1", shift: "4", mask: "0x10" },
			{ name: "EQEP6", description: "EQEP6 Present", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "MCUCNF7", description: "MCUCNF Capability: SCI, UART", offset: "0x1D8", size: "16",
		bits: [
			{ name: "UART_A", description: "UART_A Present", size: "1", shift: "16", mask: "0x10000" },
			{ name: "UART_B", description: "UART_B Present", size: "1", shift: "17", mask: "0x20000" },
			{ name: "UART_C", description: "UART_C Present", size: "1", shift: "18", mask: "0x40000" },
			{ name: "UART_D", description: "UART_D Present", size: "1", shift: "19", mask: "0x80000" },
			{ name: "UART_E", description: "UART_E Present", size: "1", shift: "20", mask: "0x100000" },
			{ name: "UART_F", description: "UART_F Present", size: "1", shift: "21", mask: "0x200000" },
		]
	},
	{ name: "MCUCNF10", description: "MCUCNF Capability: CAN, MCAN", offset: "0x1E4", size: "16",
		bits: [
			{ name: "MCAN_A", description: "MCAN_A Present", size: "1", shift: "4", mask: "0x10" },
			{ name: "MCAN_B", description: "MCAN_B Present", size: "1", shift: "5", mask: "0x20" },
			{ name: "MCAN_C", description: "MCAN_C Present", size: "1", shift: "6", mask: "0x40" },
			{ name: "MCAN_D", description: "MCAN_D Present", size: "1", shift: "7", mask: "0x80" },
			{ name: "MCAN_E", description: "MCAN_E Present", size: "1", shift: "8", mask: "0x100" },
			{ name: "MCAN_F", description: "MCAN_F Present", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "MCUCNF13", description: "MCUCNF Capability: AMCUCNF", offset: "0x1F0", size: "16",
		bits: [
			{ name: "ADC_A", description: "ADC_A Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADC_B", description: "ADC_B Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADC_C", description: "ADC_C Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADC_D", description: "ADC_D Present", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADC_E", description: "ADC_E Present", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "MCUCNF14", description: "MCUCNF Capability: CMPSS", offset: "0x1F4", size: "16",
		bits: [
			{ name: "CMPSS1", description: "CMPSS1 Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSS2", description: "CMPSS2 Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSS3", description: "CMPSS3 Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSS4", description: "CMPSS4 Present", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSS5", description: "CMPSS5 Present", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMPSS6", description: "CMPSS6 Present", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPSS7", description: "CMPSS7 Present", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSS8", description: "CMPSS8 Present", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSS9", description: "CMPSS9 Present", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMPSS10", description: "CMPSS10 Present", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSS11", description: "CMPSS11 Present", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMPSS12", description: "CMPSS12 Present", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "MCUCNF16", description: "MCUCNF Capability: DAC", offset: "0x1FC", size: "16",
		bits: [
			{ name: "DAC_A", description: "DAC_A Present", size: "1", shift: "16", mask: "0x10000" },
			{ name: "DAC_B", description: "DAC_B Present", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "MCUCNF17", description: "MCUCNF Capability: CLB", offset: "0x200", size: "16",
		bits: [
			{ name: "CLB1", description: "CLB1 Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLB2", description: "CLB2 Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLB3", description: "CLB3 Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLB4", description: "CLB4 Present", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLB5", description: "CLB5 Present", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLB6", description: "CLB6 Present", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "MCUCNF18", description: "MCUCNF Capability: FSI", offset: "0x204", size: "16",
		bits: [
			{ name: "FSITX_A", description: "FSITX_A  Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "FSITX_B", description: "FSITX_B  Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "FSITX_C", description: "FSITX_C  Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "FSITX_D", description: "FSITX_D  Present", size: "1", shift: "3", mask: "0x8" },
			{ name: "FSIRX_A", description: "FSIRX_A  Present", size: "1", shift: "16", mask: "0x10000" },
			{ name: "FSIRX_B", description: "FSIRX_B  Present", size: "1", shift: "17", mask: "0x20000" },
			{ name: "FSIRX_C", description: "FSIRX_C  Present", size: "1", shift: "18", mask: "0x40000" },
			{ name: "FSIRX_D", description: "FSIRX_D  Present", size: "1", shift: "19", mask: "0x80000" },
		]
	},
	{ name: "MCUCNF19", description: "MCUCNF Capability: LIN", offset: "0x208", size: "16",
		bits: [
			{ name: "LIN_A", description: "LIN_A Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "LIN_B", description: "LIN_B Present", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "MCUCNF23", description: "MCUCNF Capability: EtherCAT", offset: "0x218", size: "16",
		bits: [
			{ name: "ETHERCAT", description: "ETHERCAT", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "MCUCNF26", description: "Device Capability: HSM-Crypto Engines AES, SHA, PKA, TRNG", offset: "0x224", size: "32",
		bits: [
			{ name: "AES", description: "AES Present", size: "6", shift: "0", mask: "0x3F" },
			{ name: "SHA", description: "SHA Present", size: "6", shift: "6", mask: "0xFC0" },
			{ name: "PKA", description: "PKA Present", size: "6", shift: "12", mask: "0x3F000" },
			{ name: "TRNG", description: "TRNG Present", size: "6", shift: "18", mask: "0xFC0000" },
		]
	},
	{ name: "MCUCNF31", description: "Device Capability: HSM-Crypto Engines SM2, SM3, SM4", offset: "0x238", size: "32",
		bits: [
			{ name: "SM2", description: "SM2 Present", size: "6", shift: "0", mask: "0x3F" },
			{ name: "SM3", description: "SM3 Present", size: "6", shift: "6", mask: "0xFC0" },
			{ name: "SM4", description: "SM4 Present", size: "6", shift: "12", mask: "0x3F000" },
		]
	},
	{ name: "MCUCNF64", description: "MCUCNF Capability: MCUCNF level, Processing Block, RTDMA Customization", offset: "0x2BC", size: "16",
		bits: [
			{ name: "CPU2", description: "CPU2SS Present on this device", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPU3", description: "CPU3SS Present on this device", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "MCUCNF65", description: "MCUCNF Capability: On-chip SRAM Customization", offset: "0x2C0", size: "32",
		bits: [
			{ name: "CPA0", description: "CPA0 Memory Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPA1", description: "CPA1 Memory Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "LPA0", description: "LPA0 Memory Present", size: "1", shift: "4", mask: "0x10" },
			{ name: "LPA1", description: "LPA1 Memory Present", size: "1", shift: "5", mask: "0x20" },
			{ name: "LDA0", description: "LDA0 Memory Present", size: "1", shift: "8", mask: "0x100" },
			{ name: "LDA1", description: "LDA1 Memory Present", size: "1", shift: "9", mask: "0x200" },
			{ name: "LDA2", description: "LDA2 Memory Present", size: "1", shift: "10", mask: "0x400" },
			{ name: "LDA3", description: "LDA3 Memory Present", size: "1", shift: "11", mask: "0x800" },
			{ name: "LDA4", description: "LDA4 Memory Present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "LDA5", description: "LDA5 Memory Present", size: "1", shift: "13", mask: "0x2000" },
			{ name: "LDA6", description: "LDA6 Memory Present", size: "1", shift: "14", mask: "0x4000" },
			{ name: "LDA7", description: "LDA7 Memory Present", size: "1", shift: "15", mask: "0x8000" },
			{ name: "CDA0", description: "CDA0 Memory Present", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CDA1", description: "CDA1 Memory Present", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CDA2", description: "CDA2 Memory Present", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CDA3", description: "CDA3 Memory Present", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CDA4", description: "CDA4 Memory Present", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CDA5", description: "CDA5 Memory Present", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CDA6", description: "CDA6 Memory Present", size: "1", shift: "22", mask: "0x400000" },
			{ name: "CDA7", description: "CDA7 Memory Present", size: "1", shift: "23", mask: "0x800000" },
			{ name: "CDA8", description: "CDA8 Memory Present", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "CDA9", description: "CDA9 Memory Present", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "CDA10", description: "CDA10 Memory Present", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "CDA11", description: "CDA11 Memory Present", size: "1", shift: "27", mask: "0x8000000" },
		]
	},
	{ name: "MCUCNF74", description: "MCUCNF Capability: FLC1.B0/B1", offset: "0x2E4", size: "16",
		bits: [
			{ name: "SECT15_0", description: "Flash sectors 15_0 present", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT31_16", description: "Flash sectors 31_16 present", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT47_32", description: "Flash sectors 47_32 present", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT63_48", description: "Flash sectors 63_48 present", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT79_64", description: "Flash sectors 79_64 present", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT95_80", description: "Flash sectors 95_80 present", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT111_96", description: "Flash sectors 111_96 present", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT127_112", description: "Flash sectors 127_112 present", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT143_128", description: "Flash sectors 143_128 present", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT159_144", description: "Flash sectors 159_144 present", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT175_160", description: "Flash sectors 175_160 present", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT191_176", description: "Flash sectors 191_176 present", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT207_192", description: "Flash sectors 207_192 present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT223_208", description: "Flash sectors 223_208 present", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT239_224", description: "Flash sectors 239_224 present", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT255_240", description: "Flash sectors 255_240 present", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "MCUCNF76", description: "MCUCNF Capability: FLC1.B2/B3", offset: "0x2EC", size: "16",
		bits: [
			{ name: "SECT15_0", description: "Flash sectors 15_0 present", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT31_16", description: "Flash sectors 31_16 present", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT47_32", description: "Flash sectors 47_32 present", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT63_48", description: "Flash sectors 63_48 present", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT79_64", description: "Flash sectors 79_64 present", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT95_80", description: "Flash sectors 95_80 present", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT111_96", description: "Flash sectors 111_96 present", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT127_112", description: "Flash sectors 127_112 present", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT143_128", description: "Flash sectors 143_128 present", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT159_144", description: "Flash sectors 159_144 present", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT175_160", description: "Flash sectors 175_160 present", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT191_176", description: "Flash sectors 191_176 present", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT207_192", description: "Flash sectors 207_192 present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT223_208", description: "Flash sectors 223_208 present", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT239_224", description: "Flash sectors 239_224 present", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT255_240", description: "Flash sectors 255_240 present", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "MCUCNF78", description: "MCUCNF Capability: FLC1.B4 256KB Data Flash", offset: "0x2F4", size: "16",
		bits: [
			{ name: "SECT15_0", description: "Flash sectors 15_0 present", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT31_16", description: "Flash sectors 31_16 present", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT47_32", description: "Flash sectors 47_32 present", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT63_48", description: "Flash sectors 63_48 present", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT79_64", description: "Flash sectors 79_64 present", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT95_80", description: "Flash sectors 95_80 present", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT111_96", description: "Flash sectors 111_96 present", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT127_112", description: "Flash sectors 127_112 present", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCUCNF79", description: "MCUCNF Capability: FLC2.B0/B1", offset: "0x2F8", size: "16",
		bits: [
			{ name: "SECT15_0", description: "Flash sectors 15_0 present", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT31_16", description: "Flash sectors 31_16 present", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT47_32", description: "Flash sectors 47_32 present", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT63_48", description: "Flash sectors 63_48 present", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT79_64", description: "Flash sectors 79_64 present", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT95_80", description: "Flash sectors 95_80 present", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT111_96", description: "Flash sectors 111_96 present", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT127_112", description: "Flash sectors 127_112 present", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT143_128", description: "Flash sectors 143_128 present", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT159_144", description: "Flash sectors 159_144 present", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT175_160", description: "Flash sectors 175_160 present", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT191_176", description: "Flash sectors 191_176 present", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT207_192", description: "Flash sectors 207_192 present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT223_208", description: "Flash sectors 223_208 present", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT239_224", description: "Flash sectors 239_224 present", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT255_240", description: "Flash sectors 255_240 present", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "MCUCNF81", description: "MCUCNF Capability: FLC2.B2/B3", offset: "0x300", size: "16",
		bits: [
			{ name: "SECT15_0", description: "Flash sectors 15_0 present", size: "1", shift: "0", mask: "0x1" },
			{ name: "SECT31_16", description: "Flash sectors 31_16 present", size: "1", shift: "1", mask: "0x2" },
			{ name: "SECT47_32", description: "Flash sectors 47_32 present", size: "1", shift: "2", mask: "0x4" },
			{ name: "SECT63_48", description: "Flash sectors 63_48 present", size: "1", shift: "3", mask: "0x8" },
			{ name: "SECT79_64", description: "Flash sectors 79_64 present", size: "1", shift: "4", mask: "0x10" },
			{ name: "SECT95_80", description: "Flash sectors 95_80 present", size: "1", shift: "5", mask: "0x20" },
			{ name: "SECT111_96", description: "Flash sectors 111_96 present", size: "1", shift: "6", mask: "0x40" },
			{ name: "SECT127_112", description: "Flash sectors 127_112 present", size: "1", shift: "7", mask: "0x80" },
			{ name: "SECT143_128", description: "Flash sectors 143_128 present", size: "1", shift: "8", mask: "0x100" },
			{ name: "SECT159_144", description: "Flash sectors 159_144 present", size: "1", shift: "9", mask: "0x200" },
			{ name: "SECT175_160", description: "Flash sectors 175_160 present", size: "1", shift: "10", mask: "0x400" },
			{ name: "SECT191_176", description: "Flash sectors 191_176 present", size: "1", shift: "11", mask: "0x800" },
			{ name: "SECT207_192", description: "Flash sectors 207_192 present", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SECT223_208", description: "Flash sectors 223_208 present", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SECT239_224", description: "Flash sectors 239_224 present", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SECT255_240", description: "Flash sectors 255_240 present", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "MCUCNFLOCK1", description: "Lock bit for MCUCNFx registers", offset: "0x33C", size: "16",
		bits: [
			{ name: "MCUCNF1", description: "Lock bit for MCUCNF1 register", size: "1", shift: "1", mask: "0x2" },
			{ name: "MCUCNF2", description: "Lock bit for MCUCNF2 register", size: "1", shift: "2", mask: "0x4" },
			{ name: "MCUCNF4", description: "Lock bit for MCUCNF4 register", size: "1", shift: "4", mask: "0x10" },
			{ name: "MCUCNF10", description: "Lock bit for MCUCNF10 register", size: "1", shift: "10", mask: "0x400" },
			{ name: "MCUCNF17", description: "Lock bit for MCUCNF17 register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MCUCNF18", description: "Lock bit for MCUCNF18 register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "MCUCNF19", description: "Lock bit for MCUCNF19 register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MCUCNF23", description: "Lock bit for MCUCNF23 register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MCUCNF26", description: "Lock bit for MCUCNF26 register", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "MCUCNF31", description: "Lock bit for MCUCNF31 register", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "MCUCNFLOCK3", description: "Lock bit for MCUCNFx registers", offset: "0x344", size: "16",
		bits: [
			{ name: "MCUCNF64", description: "Lock bit for MCUCNF64 register", size: "1", shift: "0", mask: "0x1" },
			{ name: "MCUCNF65", description: "Lock bit for MCUCNF65 register", size: "1", shift: "1", mask: "0x2" },
			{ name: "MCUCNF74", description: "Lock bit for MCUCNF74 register", size: "1", shift: "10", mask: "0x400" },
			{ name: "MCUCNF76", description: "Lock bit for MCUCNF76 register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MCUCNF78", description: "Lock bit for MCUCNF78 register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MCUCNF79", description: "Lock bit for MCUCNF79 register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "MCUCNF81", description: "Lock bit for MCUCNF81 register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MCUCNF95", description: "Lock bit for MCUCNF95 register", size: "1", shift: "30", mask: "0x40000000" },
		]
	},
	{ name: "LSEN", description: "Lockstep enable configuration", offset: "0x348", size: "32",
		bits: [
			{ name: "ENABLE", description: "Lockstep Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSERVED", description: "Reserved", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "EPWMXLINKCFG", description: "Confugure which EPWM module instaces are linked in the XLINK scheme", offset: "0x37C", size: "32",
		bits: [
			{ name: "EPWM1", description: "Enable EPWM1 instance for the XLINK feature", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2", description: "Enable EPWM2 instance for the XLINK feature", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3", description: "Enable EPWM3 instance for the XLINK feature", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4", description: "Enable EPWM4 instance for the XLINK feature", size: "1", shift: "3", mask: "0x8" },
			{ name: "EPWM5", description: "Enable EPWM5 instance for the XLINK feature", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPWM6", description: "Enable EPWM6 instance for the XLINK feature", size: "1", shift: "5", mask: "0x20" },
			{ name: "EPWM7", description: "Enable EPWM7 instance for the XLINK feature", size: "1", shift: "6", mask: "0x40" },
			{ name: "EPWM8", description: "Enable EPWM8 instance for the XLINK feature", size: "1", shift: "7", mask: "0x80" },
			{ name: "EPWM9", description: "Enable EPWM9 instance for the XLINK feature", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPWM10", description: "Enable EPWM10 instance for the XLINK feature", size: "1", shift: "9", mask: "0x200" },
			{ name: "EPWM11", description: "Enable EPWM11 instance for the XLINK feature", size: "1", shift: "10", mask: "0x400" },
			{ name: "EPWM12", description: "Enable EPWM12 instance for the XLINK feature", size: "1", shift: "11", mask: "0x800" },
			{ name: "EPWM13", description: "Enable EPWM13 instance for the XLINK feature", size: "1", shift: "12", mask: "0x1000" },
			{ name: "EPWM14", description: "Enable EPWM14 instance for the XLINK feature", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EPWM15", description: "Enable EPWM15 instance for the XLINK feature", size: "1", shift: "14", mask: "0x4000" },
			{ name: "EPWM16", description: "Enable EPWM16 instance for the XLINK feature", size: "1", shift: "15", mask: "0x8000" },
			{ name: "EPWM17", description: "Enable EPWM17 instance for the XLINK feature", size: "1", shift: "16", mask: "0x10000" },
			{ name: "EPWM18", description: "Enable EPWM18 instance for the XLINK feature", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "SICCONFIG", description: "Safety Interconnect(SIC) Configuration - Enable and READY TIMEOUT value", offset: "0x384", size: "32",
		bits: [
			{ name: "ENABLE", description: "Safety Interconnect Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "TIMEOUT", description: "Safety Interconnect (SIC) READY TUMEOUT", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "RSTSTAT", description: "Reset Status register for secondary CPUs", offset: "0x3B0", size: "16",
		bits: [
			{ name: "CPU2", description: "CPU2 Reset Status bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPU3", description: "CPU3 Reset Status bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "LPMSTAT", description: "LPM Status Register for secondary CPUs", offset: "0x3B4", size: "16",
		bits: [
			{ name: "CPU2", description: "CPU2 LPM Status", size: "2", shift: "0", mask: "0x3" },
			{ name: "CPU3", description: "CPU3 LPM Status", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "TAP_STATUS", description: "Status of JTAG State machine & Debugger Connect", offset: "0x3CC", size: "32",
		bits: [
			{ name: "TAP_STATE", description: "Present TAP State", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DCON", description: "Debugger Connect Indication", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "TAP_CONTROL", description: "Disable TAP control", offset: "0x3D0", size: "32",
		bits: [
			{ name: "BSCAN_DIS", description: "Disable BSCAN TAP control", size: "1", shift: "0", mask: "0x1" },
			{ name: "KEY", description: "Key value to enable write", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "DEVLIFECYCLE", description: "Reflect the state of the Device Life Cycle signals reported from the HSM", offset: "0x3D4", size: "16",
		bits: [
			{ name: "DEVTYPE", description: "These bits reflect the state from HSM DEVICE_TYPE", size: "4", shift: "0", mask: "0xF" },
			{ name: "HSSUBTYPE", description: "These bits reflect the state from the HSM HS_SUBTYPE", size: "4", shift: "8", mask: "0xF00" },
			{ name: "OVRFLASH", description: "Status of Override mode with access to Flash", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OVRNOFLASH", description: "Status of Override mode with no access to Flash", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "SDFMTYPE", description: "Configures SDFM Type for the device", offset: "0x47C", size: "16",
		bits: [
			{ name: "TYPE", description: "Configure SDFM type", size: "2", shift: "0", mask: "0x3" },
			{ name: "LOCK", description: "Lock bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SYNCSELECT", description: "Sync Input and Output Select Register", offset: "0x4AC", size: "16",
		bits: [
			{ name: "SYNCOUT", description: "Select Syncout Source", size: "5", shift: "24", mask: "0x1F000000" },
		]
	},
	{ name: "ADCSOCOUTSELECT", description: "External ADCSOC Select Register (PWM1-16)", offset: "0x4B0", size: "32",
		bits: [
			{ name: "PWM1SOCAEN", description: "PWM1SOCAEN Enable for ADCSOCAOn", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWM2SOCAEN", description: "PWM2SOCAEN Enable for ADCSOCAOn", size: "1", shift: "1", mask: "0x2" },
			{ name: "PWM3SOCAEN", description: "PWM3SOCAEN Enable for ADCSOCAOn", size: "1", shift: "2", mask: "0x4" },
			{ name: "PWM4SOCAEN", description: "PWM4SOCAEN Enable for ADCSOCAOn", size: "1", shift: "3", mask: "0x8" },
			{ name: "PWM5SOCAEN", description: "PWM5SOCAEN Enable for ADCSOCAOn", size: "1", shift: "4", mask: "0x10" },
			{ name: "PWM6SOCAEN", description: "PWM6SOCAEN Enable for ADCSOCAOn", size: "1", shift: "5", mask: "0x20" },
			{ name: "PWM7SOCAEN", description: "PWM7SOCAEN Enable for ADCSOCAOn", size: "1", shift: "6", mask: "0x40" },
			{ name: "PWM8SOCAEN", description: "PWM8SOCAEN Enable for ADCSOCAOn", size: "1", shift: "7", mask: "0x80" },
			{ name: "PWM9SOCAEN", description: "PWM9SOCAEN Enable for ADCSOCAOn", size: "1", shift: "8", mask: "0x100" },
			{ name: "PWM10SOCAEN", description: "PWM10SOCAEN Enable for ADCSOCAOn", size: "1", shift: "9", mask: "0x200" },
			{ name: "PWM11SOCAEN", description: "PWM11SOCAEN Enable for ADCSOCAOn", size: "1", shift: "10", mask: "0x400" },
			{ name: "PWM12SOCAEN", description: "PWM12SOCAEN Enable for ADCSOCAOn", size: "1", shift: "11", mask: "0x800" },
			{ name: "PWM13SOCAEN", description: "PWM13SOCAEN Enable for ADCSOCAOn", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PWM14SOCAEN", description: "PWM14SOCAEN Enable for ADCSOCAOn", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PWM15SOCAEN", description: "PWM15SOCAEN Enable for ADCSOCAOn", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PWM16SOCAEN", description: "PWM16SOCAEN Enable for ADCSOCAOn", size: "1", shift: "15", mask: "0x8000" },
			{ name: "PWM1SOCBEN", description: "PWM1SOCBEN Enable for ADCSOCBOn", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PWM2SOCBEN", description: "PWM2SOCBEN Enable for ADCSOCBOn", size: "1", shift: "17", mask: "0x20000" },
			{ name: "PWM3SOCBEN", description: "PWM3SOCBEN Enable for ADCSOCBOn", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PWM4SOCBEN", description: "PWM4SOCBEN Enable for ADCSOCBOn", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PWM5SOCBEN", description: "PWM5SOCBEN Enable for ADCSOCBOn", size: "1", shift: "20", mask: "0x100000" },
			{ name: "PWM6SOCBEN", description: "PWM6SOCBEN Enable for ADCSOCBOn", size: "1", shift: "21", mask: "0x200000" },
			{ name: "PWM7SOCBEN", description: "PWM7SOCBEN Enable for ADCSOCBOn", size: "1", shift: "22", mask: "0x400000" },
			{ name: "PWM8SOCBEN", description: "PWM8SOCBEN Enable for ADCSOCBOn", size: "1", shift: "23", mask: "0x800000" },
			{ name: "PWM9SOCBEN", description: "PWM9SOCBEN Enable for ADCSOCBOn", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "PWM10SOBAEN", description: "PWM10SOBAEN Enable for ADCSOCBOn", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "PWM11SOBAEN", description: "PWM11SOBAEN Enable for ADCSOCBOn", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "PWM12SOBAEN", description: "PWM12SOBAEN Enable for ADCSOCBOn", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "PWM13SOCBEN", description: "PWM13SOCBEN Enable for ADCSOCBOn", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "PWM14SOBAEN", description: "PWM14SOBAEN Enable for ADCSOCBOn", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "PWM15SOBAEN", description: "PWM15SOBAEN Enable for ADCSOCBOn", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "PWM16SOBAEN", description: "PWM16SOBAEN Enable for ADCSOCBOn", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ADCSOCOUTSELECT1", description: "External ADCSOC Select Register (PWM17-32)", offset: "0x4B4", size: "16",
		bits: [
			{ name: "PWM17SOCAEN", description: "PWM17SOCAEN Enable for ADCSOCAOn", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWM18SOCAEN", description: "PWM18SOCAEN Enable for ADCSOCAOn", size: "1", shift: "1", mask: "0x2" },
			{ name: "PWM17SOCBEN", description: "PWM17SOCBEN Enable for ADCSOCBOn", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PWM18SOCBEN", description: "PWM18SOCBEN Enable for ADCSOCBOn", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "SYNCSOCLOCK", description: "SYNCSEL and ADCSOC Select Lock register", offset: "0x4B8", size: "16",
		bits: [
			{ name: "SYNCSELECT", description: "SYNCSEL Register Lock bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCSOCOUTSELECT", description: "ADCSOCOUTSELECT Register Lock bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCSOCOUTSELECT1", description: "ADCSOCOUTSELECT1 Register Lock bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "HSMTOCPU_STS1", description: "HSM to C29x Signal Status1", offset: "0x4DC", size: "32",
		bits: [
			{ name: "SRAM_BANK0", description: "HSM to CPU USURP Communication Signal for SRAM_BANK0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SRAM_BANK1", description: "HSM to CPU USURP Communication Signal for SRAM_BANK1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SRAM_BANK2", description: "HSM to CPU USURP Communication Signal for SRAM_BANK2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SRAM_BANK3", description: "HSM to CPU USURP Communication Signal for SRAM_BANK3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SRAM_BANK4", description: "HSM to CPU USURP Communication Signal for SRAM_BANK4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SRAM_BANK5", description: "HSM to CPU USURP Communication Signal for SRAM_BANK5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SRAM_BANK6", description: "HSM to CPU USURP Communication Signal for SRAM_BANK6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SRAM_BANK7", description: "HSM to CPU USURP Communication Signal for SRAM_BANK7", size: "1", shift: "7", mask: "0x80" },
			{ name: "FLC1", description: "HSM to CPU USURP Communication Signal for FLC1", size: "1", shift: "8", mask: "0x100" },
			{ name: "FLC2", description: "HSM to CPU USURP Communication Signal for FLC2", size: "1", shift: "9", mask: "0x200" },
			{ name: "LPOST", description: "HSM to CPU USURP Communication Signal for LPOST", size: "1", shift: "10", mask: "0x400" },
			{ name: "MPOST", description: "HSM to CPU USURP Communication Signal for MPOST", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC_GENR_1", description: "HSM to CPU USURP Communication Signal for SOC_GENR_1", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "SOC_GENR_2", description: "HSM to CPU USURP Communication Signal for SOC_GENR_2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "HSMTOCPU_STS2", description: "HSM to C29x Signal Status2", offset: "0x4E0", size: "16",
		bits: [
			{ name: "FLC1_BANK0", description: "HSM to CPU USURP Communication Signal for FLC1_BANK0", size: "1", shift: "0", mask: "0x1" },
			{ name: "FLC2_BANK0", description: "HSM to CPU USURP Communication Signal for FLC2_BANK0", size: "1", shift: "4", mask: "0x10" },
			{ name: "FLC1_BANK1", description: "HSM to CPU USURP Communication Signal for FLC1_BANK1", size: "1", shift: "5", mask: "0x20" },
			{ name: "FLC2_BANK1", description: "HSM to CPU USURP Communication Signal for FLC2_BANK1", size: "1", shift: "9", mask: "0x200" },
			{ name: "FLC1_BANK2", description: "HSM to CPU USURP Communication Signal for FLC1_BANK2", size: "1", shift: "10", mask: "0x400" },
			{ name: "FLC2_BANK2", description: "HSM to CPU USURP Communication Signal for FLC2_BANK2", size: "1", shift: "14", mask: "0x4000" },
			{ name: "FLC1_BANK3", description: "HSM to CPU USURP Communication Signal for FLC1_BANK3", size: "1", shift: "15", mask: "0x8000" },
			{ name: "FLC2_BANK3", description: "HSM to CPU USURP Communication Signal for FLC2_BANK3", size: "1", shift: "19", mask: "0x80000" },
			{ name: "FLC1_BANK4", description: "HSM to CPU USURP Communication Signal for FLC1_BANK4", size: "1", shift: "20", mask: "0x100000" },
			{ name: "FLC2_BANK4", description: "HSM to CPU USURP Communication Signal for FLC2_BANK4", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG0", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4E4", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG1", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4E8", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG2", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4EC", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG3", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4F0", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG4", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4F4", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG5", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4F8", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG6", description: "Status information of the secure boot process HSM to CPU1", offset: "0x4FC", size: "16",
		bits: [
		]
	},
	{ name: "HSM_SECURE_BOOT_INFO_REG7", description: "Status information of the secure boot process HSM to CPU1", offset: "0x500", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG0", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x504", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG1", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x508", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG2", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x50C", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG3", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x510", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG4", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x514", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG5", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x518", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG6", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x51C", size: "16",
		bits: [
		]
	},
	{ name: "SOC_SECURE_BOOT_INFO_REG7", description: "Status information of the secure boot process CPU1 to HSM", offset: "0x520", size: "16",
		bits: [
		]
	},
	{ name: "CLKCFGLOCK1", description: "Lock bit for CLKCFG registers", offset: "0x524", size: "16",
		bits: [
			{ name: "CLKSRCCTL1", description: "Lock bit for CLKSRCCTL1 register", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLKSRCCTL2", description: "Lock bit for CLKSRCCTL2 register", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLKSRCCTL3", description: "Lock bit for CLKSRCCTL3 register", size: "1", shift: "2", mask: "0x4" },
			{ name: "SYSPLLCTL1", description: "Lock bit for SYSPLLCTL1 register", size: "1", shift: "3", mask: "0x8" },
			{ name: "SYSPLLMULT", description: "Lock bit for SYSPLLMULT register", size: "1", shift: "6", mask: "0x40" },
			{ name: "SYSCLKDIVSEL", description: "Lock bit for SYSCLKDIVSEL register", size: "1", shift: "11", mask: "0x800" },
			{ name: "PERCLKDIVSEL", description: "Lock bit for PERCLKDIVSEL register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CLBCLKCTL", description: "Lock bit for CLBCLKCTL register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "XTALCR", description: "Lock bit for XTALCR  & XTALCR2 register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "EXTRFLTDET", description: "Lockbit for EXTRFLTDET register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "ETHERCATCLKCTL", description: "Lockbit for ETHERCATCLKCTL register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "HSMCLKDIVSEL", description: "Lock bit for HSMCLKDIVSEL register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MCANCLKDIVSEL", description: "Lock bit for MCANCLKDIVSEL register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "XCLKOUTDIVSEL", description: "Lock bit for XCLKOUTDIVSEL register", size: "1", shift: "21", mask: "0x200000" },
		]
	},
	{ name: "CLKSRCCTL1", description: "Clock Source Control register-1", offset: "0x530", size: "16",
		bits: [
			{ name: "OSCCLKSRCSEL", description: "OSCCLK Source Select Bit", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "CLKSRCCTL2", description: "Clock Source Control register-2", offset: "0x534", size: "16",
		bits: [
			{ name: "MCANABCLKSEL", description: "MCANA Bit Clock Source Select Bit", size: "2", shift: "10", mask: "0xC00" },
			{ name: "MCANBBCLKSEL", description: "MCANB Bit Clock Source Select Bit", size: "2", shift: "12", mask: "0x3000" },
			{ name: "MCANCBCLKSEL", description: "MCANC Bit Clock Source Select Bit", size: "2", shift: "14", mask: "0xC000" },
			{ name: "MCANDBCLKSEL", description: "MCAND Bit Clock Source Select Bit", size: "2", shift: "16", mask: "0x30000" },
			{ name: "MCANEBCLKSEL", description: "MCANE Bit Clock Source Select Bit", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "MCANFBCLKSEL", description: "MCANF Bit Clock Source Select Bit", size: "2", shift: "20", mask: "0x300000" },
		]
	},
	{ name: "CLKSRCCTL3", description: "Clock Source Control register-3", offset: "0x538", size: "16",
		bits: [
			{ name: "XCLKOUTSEL", description: "XCLKOUT Source Select Bit", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "SYSPLLCTL1", description: "SYSPLL Control register-1", offset: "0x53C", size: "16",
		bits: [
			{ name: "PLLEN", description: "SYSPLL enable/disable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "PLLCLKEN", description: "SYSPLL bypassed or included in the PLLSYSCLK path", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "SYSPLLMULT", description: "SYSPLL Multiplier register", offset: "0x548", size: "32",
		bits: [
			{ name: "IMULT", description: "SYSPLL Integer Multiplier", size: "8", shift: "0", mask: "0xFF" },
			{ name: "ODIV", description: "Output Clock Divider", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "REFDIV", description: "Reference Clock Divider", size: "5", shift: "24", mask: "0x1F000000" },
		]
	},
	{ name: "SYSPLLSTS", description: "SYSPLL Status register", offset: "0x54C", size: "16",
		bits: [
			{ name: "LOCKS", description: "SYSPLL Lock Status Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SLIPS_NOTSUPPORTED", description: "SYSPLL Slip Status Bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "SYSCLKDIVSEL", description: "System Clock Divider Select register", offset: "0x564", size: "16",
		bits: [
			{ name: "PLLSYSCLKDIV", description: "PLLSYSCLK Divide Select", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "PERCLKDIVSEL", description: "Peripheral Clock Divider Select register", offset: "0x56C", size: "16",
		bits: [
			{ name: "EPWMCLKDIV", description: "EPWM Clock Divide Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "EMIF1CLKDIV", description: "EMIF1  Clock Divide Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "LINACLKDIV", description: "LINA Clock Divide Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "LINBCLKDIV", description: "LINB Clock Divide Select", size: "2", shift: "11", mask: "0x1800" },
		]
	},
	{ name: "XCLKOUTDIVSEL", description: "XCLKOUT Divider Select register", offset: "0x570", size: "16",
		bits: [
			{ name: "XCLKOUTDIV", description: "XCLKOUT Divide Select", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "HSMCLKDIVSEL", description: "HSM SYSCLK Divider Select register", offset: "0x574", size: "16",
		bits: [
			{ name: "HSMCLKDIV", description: "Divider value for HSMSYSCLK clock input to HSM", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "MCANCLKDIVSEL", description: "MCAN Bit Clock Divider Select register", offset: "0x578", size: "32",
		bits: [
			{ name: "MCANACLKDIV", description: "Divider CANFD Bit CLK for MCANA", size: "5", shift: "0", mask: "0x1F" },
			{ name: "MCANBCLKDIV", description: "Divider CANFD Bit CLK for MCANB", size: "5", shift: "5", mask: "0x3E0" },
			{ name: "MCANCCLKDIV", description: "Divider CANFD Bit CLK for MCANC", size: "5", shift: "10", mask: "0x7C00" },
			{ name: "MCANDCLKDIV", description: "Divider CANFD Bit CLK for MCAND", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "MCANECLKDIV", description: "Divider CANFD Bit CLK for MCANE", size: "5", shift: "20", mask: "0x1F00000" },
			{ name: "MCANFCLKDIV", description: "Divider CANFD Bit CLK for MCANF", size: "5", shift: "25", mask: "0x3E000000" },
		]
	},
	{ name: "CLBCLKCTL", description: "CLB Clocking Control Register", offset: "0x57C", size: "16",
		bits: [
			{ name: "CLKMODECLB1", description: "Clock mode of CLB1", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CLKMODECLB2", description: "Clock mode of CLB2", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CLKMODECLB3", description: "Clock mode of CLB3", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CLKMODECLB4", description: "Clock mode of CLB4", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CLKMODECLB5", description: "Clock mode of CLB5", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CLKMODECLB6", description: "Clock mode of CLB6", size: "1", shift: "21", mask: "0x200000" },
		]
	},
	{ name: "MCDCR", description: "Missing Clock Detect Control Register", offset: "0x584", size: "16",
		bits: [
			{ name: "MCLKSTS", description: "Missing Clock Status Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "MCLKCLR", description: "Missing Clock Clear Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "MCLKOFF", description: "Missing Clock Detect Off Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "OSCOFF", description: "Oscillator Clock Off Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SYSREF_LOSTS", description: "SYSPLL Reference  Lost Status Bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "SYSREF_LOSTSCLR", description: "Clear for Ref clock lost status", size: "1", shift: "5", mask: "0x20" },
			{ name: "SYSREF_LOST_MCD_EN", description: "Enable for PLL REF_CLK_LOST as MCD cause", size: "1", shift: "6", mask: "0x40" },
			{ name: "EXTR_FAULTS", description: "External Resistor fault indication", size: "1", shift: "10", mask: "0x400" },
			{ name: "EXTR_FAULTSCLR", description: "External Resistor fault status clear", size: "1", shift: "11", mask: "0x800" },
			{ name: "EXTR_FAULT_MCD_EN", description: "Configuration to enable EXTR_FAULTS as MCD cause", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "X1CNT", description: "10-bit Counter on X1 Clock", offset: "0x588", size: "16",
		bits: [
			{ name: "X1CNT", description: "X1 Counter", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "CLR", description: "X1 Counter Clear", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "XTALCR", description: "XTAL Control Register", offset: "0x58C", size: "16",
		bits: [
			{ name: "OSCOFF", description: "XTAL Oscillator powered-down", size: "1", shift: "0", mask: "0x1" },
			{ name: "SE", description: "XTAL Oscilator in Single-Ended mode", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "XTALCR2", description: "XTAL Control Register for pad init", offset: "0x59C", size: "16",
		bits: [
			{ name: "XIF", description: "XI Initial value deposited before XOSC start", size: "1", shift: "0", mask: "0x1" },
			{ name: "XOF", description: "XO Initial value deposited before XOSC start", size: "1", shift: "1", mask: "0x2" },
			{ name: "FEN", description: "XOSC pads initialisation enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "ETHERCATCLKCTL", description: "EtherCAT Clock Control", offset: "0x5A8", size: "16",
		bits: [
			{ name: "ECATDIV", description: "etherCAT clock divider configuration.", size: "3", shift: "1", mask: "0xE" },
			{ name: "PHYCLKEN", description: "etherCAT PHY clock enable", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ETHERCATCTL", description: "ETHERCAT control register.", offset: "0x5AC", size: "16",
		bits: [
			{ name: "I2CLOOPBACK", description: "Loopback I2C port of etherCAT IP to I2C_A.", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SYNCBUSY", description: "Pulse Transfer Sync Busy Status register", offset: "0x5B0", size: "16",
		bits: [
			{ name: "BUSY", description: "Status bit indicating synchronization in progress", size: "1", shift: "0", mask: "0x1" },
			{ name: "MCANCLKDIVSEL", description: "BUSY status bit for MCANCLKDIVSEL", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CLBCLKCTL", description: "BUSY status bit for CLBCLKCTL", size: "1", shift: "18", mask: "0x40000" },
			{ name: "ETHERCATCLKCTL", description: "BUSY status bit for ETHERCATCLKCTL", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PERCLKDIVSEL", description: "BUSY status bit for PERCLKDIVSEL", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SYSCLKDIVSEL", description: "BUSY status bit for SYSCLKDIVSEL", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SYSPLLCTL1", description: "BUSY status bit for SYSPLLCTL1", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SYSPLLMULT", description: "BUSY status bit for SYSPLLMULT", size: "1", shift: "23", mask: "0x800000" },
			{ name: "XCLKOUTDIVSEL", description: "BUSY status bit for XCLKOUTDIVSEL", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "XTALCR", description: "BUSY status bit for XTALCR", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "CLKSRCCTL1", description: "BUSY status bit for CLKSRCCTL1", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "CLKSRCCTL2", description: "BUSY status bit for CLKSRCCTL2", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "CLKSRCCTL3", description: "BUSY status bit for CLKSRCCTL3", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "CPU3TMR2CTL", description: "BUSY status bit for CPU3TMR2CTL", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "CPU1TMR2CTL", description: "BUSY status bit for CPU1TMR2CTL", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "CPU2TMR2CTL", description: "BUSY status bit for CPU2TMR2CTL", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ESMXRSNCTL", description: "Enable ESM reset outputs for XRSn", offset: "0x5C0", size: "16",
		bits: [
			{ name: "ESMCPU1CRITICAL", description: "Enable ESMCPU1CRITICAL to cause XRSn", size: "1", shift: "0", mask: "0x1" },
			{ name: "ESMCPU2CRITICAL", description: "Enable ESMCPU2CRITICAL to cause XRSn", size: "1", shift: "2", mask: "0x4" },
			{ name: "ESMCPU2HIPRIWD", description: "Enable ESMCPU2HIPRIWD to cause XRSn", size: "1", shift: "3", mask: "0x8" },
			{ name: "ESMCPU3CRITICAL", description: "Enable ESMCPU3CRITICAL to cause XRSn", size: "1", shift: "4", mask: "0x10" },
			{ name: "ESMCPU3HIPRIWD", description: "Enable ESMCPU3HIPRIWD to cause XRSn", size: "1", shift: "5", mask: "0x20" },
			{ name: "ESMRESET", description: "Enable ESMRESET to cause XRSn", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "EPWM1", description: "PER2SYSCONFIG -  Peripheral System Configuration for EPWM1", offset: "0x5C8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM2", description: "PER3SYSCONFIG -  Peripheral System Configuration for EPWM2", offset: "0x5CC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM3", description: "PER4SYSCONFIG -  Peripheral System Configuration for EPWM3", offset: "0x5D0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM4", description: "PER5SYSCONFIG -  Peripheral System Configuration for EPWM4", offset: "0x5D4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM5", description: "PER6SYSCONFIG -  Peripheral System Configuration for EPWM5", offset: "0x5D8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM6", description: "PER7SYSCONFIG -  Peripheral System Configuration for EPWM6", offset: "0x5DC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM7", description: "PER8SYSCONFIG -  Peripheral System Configuration for EPWM7", offset: "0x5E0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM8", description: "PER9SYSCONFIG -  Peripheral System Configuration for EPWM8", offset: "0x5E4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM9", description: "PER10SYSCONFIG -  Peripheral System Configuration for EPWM9", offset: "0x5E8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM10", description: "PER11SYSCONFIG -  Peripheral System Configuration for EPWM10", offset: "0x5EC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM11", description: "PER12SYSCONFIG -  Peripheral System Configuration for EPWM11", offset: "0x5F0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM12", description: "PER13SYSCONFIG -  Peripheral System Configuration for EPWM12", offset: "0x5F4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM13", description: "PER14SYSCONFIG -  Peripheral System Configuration for EPWM13", offset: "0x5F8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM14", description: "PER15SYSCONFIG -  Peripheral System Configuration for EPWM14", offset: "0x5FC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM15", description: "PER16SYSCONFIG -  Peripheral System Configuration for EPWM15", offset: "0x600", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM16", description: "PER17SYSCONFIG -  Peripheral System Configuration for EPWM16", offset: "0x604", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM17", description: "PER18SYSCONFIG -  Peripheral System Configuration for EPWM17", offset: "0x608", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPWM18", description: "PER19SYSCONFIG -  Peripheral System Configuration for EPWM18", offset: "0x60C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "HRCAL0", description: "PER21SYSCONFIG -  Peripheral System Configuration for HRCAL0", offset: "0x614", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "HRCAL1", description: "PER22SYSCONFIG -  Peripheral System Configuration for HRCAL1", offset: "0x618", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "HRCAL2", description: "PER23SYSCONFIG -  Peripheral System Configuration for HRCAL2", offset: "0x61C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECAP1", description: "PER24SYSCONFIG -  Peripheral System Configuration for ECAP1", offset: "0x620", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECAP2", description: "PER25SYSCONFIG -  Peripheral System Configuration for ECAP2", offset: "0x624", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECAP3", description: "PER26SYSCONFIG -  Peripheral System Configuration for ECAP3", offset: "0x628", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECAP4", description: "PER27SYSCONFIG -  Peripheral System Configuration for ECAP4", offset: "0x62C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECAP5", description: "PER28SYSCONFIG -  Peripheral System Configuration for ECAP5", offset: "0x630", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ECAP6", description: "PER29SYSCONFIG -  Peripheral System Configuration for ECAP6", offset: "0x634", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EQEP1", description: "PER30SYSCONFIG -  Peripheral System Configuration for EQEP1", offset: "0x638", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EQEP2", description: "PER31SYSCONFIG -  Peripheral System Configuration for EQEP2", offset: "0x63C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EQEP3", description: "PER32SYSCONFIG -  Peripheral System Configuration for EQEP3", offset: "0x640", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EQEP4", description: "PER33SYSCONFIG -  Peripheral System Configuration for EQEP4", offset: "0x644", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EQEP5", description: "PER34SYSCONFIG -  Peripheral System Configuration for EQEP5", offset: "0x648", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EQEP6", description: "PER35SYSCONFIG -  Peripheral System Configuration for EQEP6", offset: "0x64C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SDFM1", description: "PER36SYSCONFIG -  Peripheral System Configuration for SDFM1", offset: "0x650", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SDFM2", description: "PER37SYSCONFIG -  Peripheral System Configuration for SDFM2", offset: "0x654", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SDFM3", description: "PER38SYSCONFIG -  Peripheral System Configuration for SDFM3", offset: "0x658", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SDFM4", description: "PER39SYSCONFIG -  Peripheral System Configuration for SDFM4", offset: "0x65C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "UARTA", description: "PER40SYSCONFIG -  Peripheral System Configuration for UARTA", offset: "0x660", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "UARTB", description: "PER41SYSCONFIG -  Peripheral System Configuration for UARTB", offset: "0x664", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "UARTC", description: "PER42SYSCONFIG -  Peripheral System Configuration for UARTC", offset: "0x668", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "UARTD", description: "PER43SYSCONFIG -  Peripheral System Configuration for UARTD", offset: "0x66C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "UARTE", description: "PER44SYSCONFIG -  Peripheral System Configuration for UARTE", offset: "0x670", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "UARTF", description: "PER45SYSCONFIG -  Peripheral System Configuration for UARTF", offset: "0x674", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIA", description: "PER46SYSCONFIG -  Peripheral System Configuration for SPIA", offset: "0x678", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIB", description: "PER47SYSCONFIG -  Peripheral System Configuration for SPIB", offset: "0x67C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIC", description: "PER48SYSCONFIG -  Peripheral System Configuration for SPIC", offset: "0x680", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPID", description: "PER49SYSCONFIG -  Peripheral System Configuration for SPID", offset: "0x684", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SPIE", description: "PER50SYSCONFIG -  Peripheral System Configuration for SPIE", offset: "0x688", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "I2CA", description: "PER51SYSCONFIG -  Peripheral System Configuration for I2CA", offset: "0x68C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "I2CB", description: "PER52SYSCONFIG -  Peripheral System Configuration for I2CB", offset: "0x690", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "PMBUSA", description: "PER53SYSCONFIG -  Peripheral System Configuration for PMBUSA", offset: "0x694", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LINA", description: "PER54SYSCONFIG -  Peripheral System Configuration for LINA", offset: "0x698", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LINB", description: "PER55SYSCONFIG -  Peripheral System Configuration for LINB", offset: "0x69C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCANA", description: "PER56SYSCONFIG -  Peripheral System Configuration for MCANA", offset: "0x6A0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCANB", description: "PER57SYSCONFIG -  Peripheral System Configuration for MCANB", offset: "0x6A4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCANC", description: "PER58SYSCONFIG -  Peripheral System Configuration for MCANC", offset: "0x6A8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCAND", description: "PER59SYSCONFIG -  Peripheral System Configuration for MCAND", offset: "0x6AC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCANE", description: "PER60SYSCONFIG -  Peripheral System Configuration for MCANE", offset: "0x6B0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "MCANF", description: "PER61SYSCONFIG -  Peripheral System Configuration for MCANF", offset: "0x6B4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCA", description: "PER62SYSCONFIG -  Peripheral System Configuration for ADCA", offset: "0x6B8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCB", description: "PER63SYSCONFIG -  Peripheral System Configuration for ADCB", offset: "0x6BC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCC", description: "PER64SYSCONFIG -  Peripheral System Configuration for ADCC", offset: "0x6C0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCD", description: "PER65SYSCONFIG -  Peripheral System Configuration for ADCD", offset: "0x6C4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCE", description: "PER66SYSCONFIG -  Peripheral System Configuration for ADCE", offset: "0x6C8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS1", description: "PER67SYSCONFIG -  Peripheral System Configuration for CMPSS1", offset: "0x6CC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS2", description: "PER68SYSCONFIG -  Peripheral System Configuration for CMPSS2", offset: "0x6D0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS3", description: "PER69SYSCONFIG -  Peripheral System Configuration for CMPSS3", offset: "0x6D4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS4", description: "PER70SYSCONFIG -  Peripheral System Configuration for CMPSS4", offset: "0x6D8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS5", description: "PER71SYSCONFIG -  Peripheral System Configuration for CMPSS5", offset: "0x6DC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS6", description: "PER72SYSCONFIG -  Peripheral System Configuration for CMPSS6", offset: "0x6E0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS7", description: "PER73SYSCONFIG -  Peripheral System Configuration for CMPSS7", offset: "0x6E4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS8", description: "PER74SYSCONFIG -  Peripheral System Configuration for CMPSS8", offset: "0x6E8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS9", description: "PER75SYSCONFIG -  Peripheral System Configuration for CMPSS9", offset: "0x6EC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS10", description: "PER76SYSCONFIG -  Peripheral System Configuration for CMPSS10", offset: "0x6F0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS11", description: "PER77SYSCONFIG -  Peripheral System Configuration for CMPSS11", offset: "0x6F4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CMPSS12", description: "PER78SYSCONFIG -  Peripheral System Configuration for CMPSS12", offset: "0x6F8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DACA", description: "PER79SYSCONFIG -  Peripheral System Configuration for DACA", offset: "0x6FC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DACB", description: "PER80SYSCONFIG -  Peripheral System Configuration for DACB", offset: "0x700", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CLB1", description: "PER81SYSCONFIG -  Peripheral System Configuration for CLB1", offset: "0x704", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CLB2", description: "PER82SYSCONFIG -  Peripheral System Configuration for CLB2", offset: "0x708", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CLB3", description: "PER83SYSCONFIG -  Peripheral System Configuration for CLB3", offset: "0x70C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CLB4", description: "PER84SYSCONFIG -  Peripheral System Configuration for CLB4", offset: "0x710", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CLB5", description: "PER85SYSCONFIG -  Peripheral System Configuration for CLB5", offset: "0x714", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "CLB6", description: "PER86SYSCONFIG -  Peripheral System Configuration for CLB6", offset: "0x718", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSITXA", description: "PER87SYSCONFIG -  Peripheral System Configuration for FSITXA", offset: "0x71C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSITXB", description: "PER88SYSCONFIG -  Peripheral System Configuration for FSITXB", offset: "0x720", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSITXC", description: "PER89SYSCONFIG -  Peripheral System Configuration for FSITXC", offset: "0x724", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSITXD", description: "PER90SYSCONFIG -  Peripheral System Configuration for FSITXD", offset: "0x728", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSIRXA", description: "PER91SYSCONFIG -  Peripheral System Configuration for FSIRXA", offset: "0x72C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSIRXB", description: "PER92SYSCONFIG -  Peripheral System Configuration for FSIRXB", offset: "0x730", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSIRXC", description: "PER93SYSCONFIG -  Peripheral System Configuration for FSIRXC", offset: "0x734", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "FSIRXD", description: "PER94SYSCONFIG -  Peripheral System Configuration for FSIRXD", offset: "0x738", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DCC1", description: "PER95SYSCONFIG -  Peripheral System Configuration for DCC1", offset: "0x73C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DCC2", description: "PER96SYSCONFIG -  Peripheral System Configuration for DCC2", offset: "0x740", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DCC3", description: "PER97SYSCONFIG -  Peripheral System Configuration for DCC3", offset: "0x744", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ETHERCATA", description: "PER98SYSCONFIG -  Peripheral System Configuration for ETHERCATA", offset: "0x748", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "EPG1", description: "PER99SYSCONFIG -  Peripheral System Configuration for EPG1", offset: "0x74C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SENT1", description: "PER100SYSCONFIG -  Peripheral System Configuration for SENT1", offset: "0x750", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SENT2", description: "PER101SYSCONFIG -  Peripheral System Configuration for SENT2", offset: "0x754", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SENT3", description: "PER102SYSCONFIG -  Peripheral System Configuration for SENT3", offset: "0x758", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SENT4", description: "PER103SYSCONFIG -  Peripheral System Configuration for SENT4", offset: "0x75C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SENT5", description: "PER104SYSCONFIG -  Peripheral System Configuration for SENT5", offset: "0x760", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SENT6", description: "PER105SYSCONFIG -  Peripheral System Configuration for SENT6", offset: "0x764", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER1", description: "PER106SYSCONFIG -  Peripheral System Configuration for ADCCHECKER1", offset: "0x768", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER2", description: "PER107SYSCONFIG -  Peripheral System Configuration for ADCCHECKER2", offset: "0x76C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER3", description: "PER108SYSCONFIG -  Peripheral System Configuration for ADCCHECKER3", offset: "0x770", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER4", description: "PER109SYSCONFIG -  Peripheral System Configuration for ADCCHECKER4", offset: "0x774", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER5", description: "PER110SYSCONFIG -  Peripheral System Configuration for ADCCHECKER5", offset: "0x778", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER6", description: "PER111SYSCONFIG -  Peripheral System Configuration for ADCCHECKER6", offset: "0x77C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER7", description: "PER112SYSCONFIG -  Peripheral System Configuration for ADCCHECKER7", offset: "0x780", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER8", description: "PER113SYSCONFIG -  Peripheral System Configuration for ADCCHECKER8", offset: "0x784", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER9", description: "PER114SYSCONFIG -  Peripheral System Configuration for ADCCHECKER9", offset: "0x788", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCCHECKER10", description: "PER115SYSCONFIG -  Peripheral System Configuration for ADCCHECKER10", offset: "0x78C", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCSEAGGRCPU1", description: "PER116SYSCONFIG -  Peripheral System Configuration for ADCSEAGGRCPU1", offset: "0x790", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCSEAGGRCPU2", description: "PER117SYSCONFIG -  Peripheral System Configuration for ADCSEAGGRCPU2", offset: "0x794", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCSEAGGRCPU3", description: "PER118SYSCONFIG -  Peripheral System Configuration for ADCSEAGGRCPU3", offset: "0x798", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "RTDMA1CH", description: "PER122SYSCONFIG -  Peripheral System Configuration for RTDMA1CH", offset: "0x7A8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "RTDMA2CH", description: "PER123SYSCONFIG -  Peripheral System Configuration for RTDMA2CH", offset: "0x7AC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "WADI1", description: "PER124SYSCONFIG -  Peripheral System Configuration for WADI1", offset: "0x7B0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "WADI2", description: "PER125SYSCONFIG -  Peripheral System Configuration for WADI2", offset: "0x7B4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "INPUTXBARFLAGS", description: "PER126SYSCONFIG -  Peripheral System Configuration for INPUTXBARFlags", offset: "0x7B8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "OUTPUTXBARFLAGS", description: "PER127SYSCONFIG -  Peripheral System Configuration for OUTPUTXBARFlags", offset: "0x7BC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "DLTFIFOREGS", description: "PER128SYSCONFIG -  Peripheral System Configuration for DLTFIFORegs", offset: "0x7C0", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADC_GLOBAL_REGS", description: "PER129SYSCONFIG -  Peripheral System Configuration for ADC_GLOBAL_REGS", offset: "0x7C4", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ERROR_AGGREGATOR", description: "PER130SYSCONFIG -  Peripheral System Configuration for Error_Aggregator", offset: "0x7C8", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ESM", description: "PER131SYSCONFIG -  Peripheral System Configuration for ESM ESMCPU1/2/3 and", offset: "0x7CC", size: "16",
		bits: [
			{ name: "FRAMESEL", description: "FRAMESEL Selection for Peripheral Instance", size: "3", shift: "0", mask: "0x7" },
			{ name: "CPUSEL", description: "CPUSEL Selection for Peripheral Instance", size: "3", shift: "3", mask: "0x38" },
			{ name: "STANDBYEN", description: "STANDBYEN to enable peripheral clock gating based on CPUx", size: "1", shift: "6", mask: "0x40" },
			{ name: "DBGHALTEN", description: "DBGHALTEN to enable peripheral clock gating based on CPUx", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "PARITY_TEST", description: "Enables parity test", offset: "0x7E4", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CPUPERCFGLOCK1", description: "Lock bit for CPUx_PER_CFG registers", offset: "0x0", size: "32",
		bits: [
			{ name: "PCLKCR0", description: "Lock bit for PCLKCR0 Register", size: "1", shift: "0", mask: "0x1" },
			{ name: "PCLKCR1", description: "Lock bit for PCLKCR1 Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "PCLKCR2", description: "Lock bit for PCLKCR2 Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "PCLKCR3", description: "Lock bit for PCLKCR3 Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "PCLKCR4", description: "Lock bit for PCLKCR4 Register", size: "1", shift: "4", mask: "0x10" },
			{ name: "PCLKCR6", description: "Lock bit for PCLKCR6 Register", size: "1", shift: "6", mask: "0x40" },
			{ name: "PCLKCR7", description: "Lock bit for PCLKCR7 Register", size: "1", shift: "7", mask: "0x80" },
			{ name: "PCLKCR8", description: "Lock bit for PCLKCR8 Register", size: "1", shift: "8", mask: "0x100" },
			{ name: "PCLKCR9", description: "Lock bit for PCLKCR9 Register", size: "1", shift: "9", mask: "0x200" },
			{ name: "PCLKCR10", description: "Lock bit for PCLKCR10 Register", size: "1", shift: "10", mask: "0x400" },
			{ name: "PCLKCR13", description: "Lock bit for PCLKCR13 Register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PCLKCR14", description: "Lock bit for PCLKCR14 Register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PCLKCR16", description: "Lock bit for PCLKCR16 Register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "PCLKCR17", description: "Lock bit for PCLKCR17 Register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "PCLKCR18", description: "Lock bit for PCLKCR18 Register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PCLKCR19", description: "Lock bit for PCLKCR19 Register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "PCLKCR20", description: "Lock bit for PCLKCR20 Register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "PCLKCR21", description: "Lock bit for PCLKCR21 Register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "PCLKCR23", description: "Lock bit for PCLKCR23 Register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "PCLKCR25", description: "Lock bit for PCLKCR25 Register", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "PCLKCR27", description: "Lock bit for PCLKCR27 Register", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "PCLKCR28", description: "Lock bit for PCLKCR28 Register", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "PCLKCR30", description: "Lock bit for PCLKCR30 Register", size: "1", shift: "30", mask: "0x40000000" },
		]
	},
	{ name: "CPUPERCFGLOCK2", description: "Lock bit for CPUx_PER_CFG registers", offset: "0x4", size: "16",
		bits: [
			{ name: "PCLKCR32", description: "Lock bit for PCLKCR32 Register", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PCLKCR0", description: "Peripheral Clock Gating Registers", offset: "0x10", size: "16",
		bits: [
			{ name: "RTDMA1", description: "RTDMA1 Clock Enable Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "RTDMA2", description: "RTDMA2 Clock Enable Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "CPUTIMER0", description: "CPUTIMER0 Clock Enable Bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "CPUTIMER1", description: "CPUTIMER1 Clock Enable Bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "CPUTIMER2", description: "CPUTIMER2 Clock Enable Bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "TBCLKSYNC", description: "TBCLKSYNC Clock Enable Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GTBCLKSYNC", description: "GTBCLKSYNC Clock Enable Bit", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CPUX_ERAD", description: "CPUx_ERAD Clock Enable Bit", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "CPUX_DLT", description: "CPUx_DLT Clock Enable Bit", size: "1", shift: "25", mask: "0x2000000" },
		]
	},
	{ name: "PCLKCR1", description: "Peripheral Clock Gating Register - EMIF", offset: "0x14", size: "16",
		bits: [
			{ name: "EMIF1", description: "EMIF1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PCLKCR2", description: "Peripheral Clock Gating Register - EPWM", offset: "0x18", size: "32",
		bits: [
			{ name: "EPWM1", description: "EPWM1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2", description: "EPWM2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3", description: "EPWM3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4", description: "EPWM4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "EPWM5", description: "EPWM5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPWM6", description: "EPWM6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "EPWM7", description: "EPWM7 Clock Enable bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "EPWM8", description: "EPWM8 Clock Enable bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "EPWM9", description: "EPWM9 Clock Enable bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPWM10", description: "EPWM10 Clock Enable bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "EPWM11", description: "EPWM11 Clock Enable bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "EPWM12", description: "EPWM12 Clock Enable bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "EPWM13", description: "EPWM13 Clock Enable bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "EPWM14", description: "EPWM14 Clock Enable bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EPWM15", description: "EPWM15 Clock Enable bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "EPWM16", description: "EPWM16 Clock Enable bit", size: "1", shift: "15", mask: "0x8000" },
			{ name: "EPWM17", description: "EPWM17 Clock Enable bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "EPWM18", description: "EPWM18 Clock Enable bit", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "PCLKCR3", description: "Peripheral Clock Gating Register - ECAP", offset: "0x1C", size: "16",
		bits: [
			{ name: "ECAP1", description: "ECAP1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ECAP2", description: "ECAP2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ECAP3", description: "ECAP3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "ECAP4", description: "ECAP4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ECAP5", description: "ECAP5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "ECAP6", description: "ECAP6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "PCLKCR4", description: "Peripheral Clock Gating Register - EQEP", offset: "0x20", size: "16",
		bits: [
			{ name: "EQEP1", description: "EQEP1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "EQEP2", description: "EQEP2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "EQEP3", description: "EQEP3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "EQEP4", description: "EQEP4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "EQEP5", description: "EQEP5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "EQEP6", description: "EQEP6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "PCLKCR6", description: "Peripheral Clock Gating Register - SDFM", offset: "0x28", size: "16",
		bits: [
			{ name: "SD1", description: "SD1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SD2", description: "SD2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SD3", description: "SD3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SD4", description: "SD4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PCLKCR7", description: "Peripheral Clock Gating Register - SCI, UART", offset: "0x2C", size: "16",
		bits: [
			{ name: "UART_A", description: "UART_A Clock Enable bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "UART_B", description: "UART_B Clock Enable bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "UART_C", description: "UART_C Clock Enable bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "UART_D", description: "UART_D Clock Enable bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "UART_E", description: "UART_E Clock Enable bit", size: "1", shift: "20", mask: "0x100000" },
			{ name: "UART_F", description: "UART_F Clock Enable bit", size: "1", shift: "21", mask: "0x200000" },
		]
	},
	{ name: "PCLKCR8", description: "Peripheral Clock Gating Register - SPI", offset: "0x30", size: "16",
		bits: [
			{ name: "SPI_A", description: "SPI_A Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SPI_B", description: "SPI_B Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SPI_C", description: "SPI_C Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SPI_D", description: "SPI_D Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SPI_E", description: "SPI_E Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "PCLKCR9", description: "Peripheral Clock Gating Register - I2C", offset: "0x34", size: "16",
		bits: [
			{ name: "I2C_A", description: "I2C_A Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "I2C_B", description: "I2C_B Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "PCLKCR10", description: "Peripheral Clock Gating Register - CAN", offset: "0x38", size: "16",
		bits: [
			{ name: "MCAN_A", description: "MCAN_A Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "MCAN_B", description: "MCAN_B Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "MCAN_C", description: "MCAN_C Clock Enable bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "MCAN_D", description: "MCAN_D Clock Enable bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "MCAN_E", description: "MCAN_E Clock Enable bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "MCAN_F", description: "MCAN_F Clock Enable bit", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "PCLKCR13", description: "Peripheral Clock Gating Register - ADC", offset: "0x44", size: "16",
		bits: [
			{ name: "ADC_A", description: "ADC_A Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADC_B", description: "ADC_B Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADC_C", description: "ADC_C Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADC_D", description: "ADC_D Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADC_E", description: "ADC_E Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "PCLKCR14", description: "Peripheral Clock Gating Register - CMPSS", offset: "0x48", size: "16",
		bits: [
			{ name: "CMPSS1", description: "CMPSS1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSS2", description: "CMPSS2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSS3", description: "CMPSS3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSS4", description: "CMPSS4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSS5", description: "CMPSS5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMPSS6", description: "CMPSS6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPSS7", description: "CMPSS7 Clock Enable bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSS8", description: "CMPSS8 Clock Enable bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSS9", description: "CMPSS9 Clock Enable bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMPSS10", description: "CMPSS10 Clock Enable bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSS11", description: "CMPSS11 Clock Enable bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMPSS12", description: "CMPSS12 Clock Enable bit", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "PCLKCR16", description: "Peripheral Clock Gating Register Buf_DAC", offset: "0x50", size: "16",
		bits: [
			{ name: "DAC_A", description: "DAC_A Clock Enable bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "DAC_B", description: "DAC_B Clock Enable bit", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "PCLKCR17", description: "Peripheral Clock Gating Register - CLB", offset: "0x54", size: "16",
		bits: [
			{ name: "CLB1", description: "CLB1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLB2", description: "CLB2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLB3", description: "CLB3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLB4", description: "CLB4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLB5", description: "CLB5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLB6", description: "CLB6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "PCLKCR18", description: "Peripheral Clock Gating Register - FSI", offset: "0x58", size: "16",
		bits: [
			{ name: "FSITX_A", description: "FSITX_A Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "FSITX_B", description: "FSITX_B Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FSITX_C", description: "FSITX_C Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "FSITX_D", description: "FSITX_D Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "FSIRX_A", description: "FSIRX_A Clock Enable bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "FSIRX_B", description: "FSIRX_B Clock Enable bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "FSIRX_C", description: "FSIRX_C Clock Enable bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "FSIRX_D", description: "FSIRX_D Clock Enable bit", size: "1", shift: "19", mask: "0x80000" },
		]
	},
	{ name: "PCLKCR19", description: "Peripheral Clock Gating Register - LIN", offset: "0x5C", size: "16",
		bits: [
			{ name: "LIN_A", description: "LIN_A Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "LIN_B", description: "LIN_B Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "PCLKCR20", description: "Peripheral Clock Gating Register - PMBUS", offset: "0x60", size: "16",
		bits: [
			{ name: "PMBUS_A", description: "PMBUS_A Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PCLKCR21", description: "Peripheral Clock Gating Register - DCC", offset: "0x64", size: "16",
		bits: [
			{ name: "DCC1", description: "DCC1 Clock Enable Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "DCC2", description: "DCC2 Clock Enable Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "DCC3", description: "DCC3 Clock Enable Bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "PCLKCR23", description: "Peripheral Clock Gating Register - EtherCAT", offset: "0x6C", size: "16",
		bits: [
			{ name: "ETHERCAT", description: "ETHERCAT Clock Enable Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PCLKCR25", description: "Peripheral Clock Gating Register - HRCAL0,1,2", offset: "0x74", size: "16",
		bits: [
			{ name: "HRCAL0", description: "HRCAL0 Clock Enable Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "HRCAL1", description: "HRCAL1 Clock Enable Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "HRCAL2", description: "HRCAL2 Clock Enable Bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "PCLKCR27", description: "Peripheral Clock Gating Register - EPG", offset: "0x7C", size: "16",
		bits: [
			{ name: "EPG1", description: "EPG1 Clock Enable Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PCLKCR28", description: "Peripheral Clock Gating Register - ADCCHECKER", offset: "0x80", size: "16",
		bits: [
			{ name: "ADCCHECKER1", description: "ADCCHECKER1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCCHECKER2", description: "ADCCHECKER2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCCHECKER3", description: "ADCCHECKER3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCCHECKER4", description: "ADCCHECKER4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCCHECKER5", description: "ADCCHECKER5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCCHECKER6", description: "ADCCHECKER6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCCHECKER7", description: "ADCCHECKER7 Clock Enable bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCCHECKER8", description: "ADCCHECKER8 Clock Enable bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCCHECKER9", description: "ADCCHECKER9 Clock Enable bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "ADCCHECKER10", description: "ADCCHECKER10 Clock Enable bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "ADCSEAGGRCPU1", description: "ADCSEAGGRCPU1 Clock Enable bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "ADCSEAGGRCPU2", description: "ADCSEAGGRCPU2 Clock Enable bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "ADCSEAGGRCPU3", description: "ADCSEAGGRCPU3 Clock Enable bit", size: "1", shift: "18", mask: "0x40000" },
		]
	},
	{ name: "PCLKCR30", description: "Peripheral Clock Gating Register - SENT", offset: "0x88", size: "16",
		bits: [
			{ name: "SENT1", description: "SENT1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SENT2", description: "SENT2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SENT3", description: "SENT3 Clock Enable bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SENT4", description: "SENT4 Clock Enable bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SENT5", description: "SENT5 Clock Enable bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "SENT6", description: "SENT6 Clock Enable bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "PCLKCR32", description: "Peripheral Clock Gating Register - WADI", offset: "0x90", size: "16",
		bits: [
			{ name: "WADI1", description: "WADI1 Clock Enable bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "WADI2", description: "WADI2 Clock Enable bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "SOFTPRES0", description: "Processing Block Software Reset register", offset: "0x110", size: "16",
		bits: [
			{ name: "CPUTIMER", description: "Reset bit for modules CPUTIMER0, COUTIMER1 and CPUTIMER2", size: "1", shift: "4", mask: "0x10" },
			{ name: "CPUX_ERAD", description: "CPUx_ERAD Module reset bit", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "CPUX_DLT", description: "CPUx_DLT Module reset bit", size: "1", shift: "25", mask: "0x2000000" },
		]
	},
	{ name: "SOFTPRES1", description: "EMIF Software Reset register", offset: "0x114", size: "16",
		bits: [
			{ name: "EMIF1", description: "EMIF1 software reset bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SOFTPRES2", description: "EPWM Software Reset register", offset: "0x118", size: "32",
		bits: [
			{ name: "EPWM1", description: "EPWM1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2", description: "EPWM2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3", description: "EPWM3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4", description: "EPWM4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "EPWM5", description: "EPWM5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPWM6", description: "EPWM6 software reset bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "EPWM7", description: "EPWM7 software reset bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "EPWM8", description: "EPWM8 software reset bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "EPWM9", description: "EPWM9 software reset bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPWM10", description: "EPWM10 software reset bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "EPWM11", description: "EPWM11 software reset bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "EPWM12", description: "EPWM12 software reset bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "EPWM13", description: "EPWM13 software reset bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "EPWM14", description: "EPWM14 software reset bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EPWM15", description: "EPWM15 software reset bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "EPWM16", description: "EPWM16 software reset bit", size: "1", shift: "15", mask: "0x8000" },
			{ name: "EPWM17", description: "EPWM17 software reset bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "EPWM18", description: "EPWM18 software reset bit", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "SOFTPRES3", description: "ECAP Software Reset register", offset: "0x11C", size: "16",
		bits: [
			{ name: "ECAP1", description: "ECAP1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ECAP2", description: "ECAP2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ECAP3", description: "ECAP3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "ECAP4", description: "ECAP4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ECAP5", description: "ECAP5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "ECAP6", description: "ECAP6 software reset bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "SOFTPRES4", description: "EQEP Software Reset register", offset: "0x120", size: "16",
		bits: [
			{ name: "EQEP1", description: "EQEP1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "EQEP2", description: "EQEP2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "EQEP3", description: "EQEP3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "EQEP4", description: "EQEP4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "EQEP5", description: "EQEP5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "EQEP6", description: "EQEP6 software reset bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "SOFTPRES6", description: "Sigma Delta Software Reset register", offset: "0x128", size: "16",
		bits: [
			{ name: "SD1", description: "SD1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SD2", description: "SD2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SD3", description: "SD3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SD4", description: "SD4 software reset bit", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SOFTPRES7", description: "SCI, UART Software Reset register", offset: "0x12C", size: "16",
		bits: [
			{ name: "UART_A", description: "UART_A software reset bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "UART_B", description: "UART_B software reset bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "UART_C", description: "UART_C software reset bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "UART_D", description: "UART_D software reset bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "UART_E", description: "UART_E software reset bit", size: "1", shift: "20", mask: "0x100000" },
			{ name: "UART_F", description: "UART_F software reset bit", size: "1", shift: "21", mask: "0x200000" },
		]
	},
	{ name: "SOFTPRES8", description: "SPI Software Reset register", offset: "0x130", size: "16",
		bits: [
			{ name: "SPI_A", description: "SPI_A software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SPI_B", description: "SPI_B software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SPI_C", description: "SPI_C software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SPI_D", description: "SPI_D software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SPI_E", description: "SPI_E software reset bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "SOFTPRES9", description: "I2C Software Reset register", offset: "0x134", size: "16",
		bits: [
			{ name: "I2C_A", description: "I2C_A software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "I2C_B", description: "I2C_B software reset bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "SOFTPRES10", description: "CAN Software Reset register", offset: "0x138", size: "16",
		bits: [
			{ name: "MCAN_A", description: "MCAN_A software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "MCAN_B", description: "MCAN_B software reset bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "MCAN_C", description: "MCAN_C software reset bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "MCAN_D", description: "MCAN_D software reset bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "MCAN_E", description: "MCAN_E software reset bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "MCAN_F", description: "MCAN_F software reset bit", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "SOFTPRES13", description: "ADC Software Reset register", offset: "0x144", size: "16",
		bits: [
			{ name: "ADC_A", description: "ADC_A software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADC_B", description: "ADC_B software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADC_C", description: "ADC_C software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADC_D", description: "ADC_D software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADC_E", description: "ADC_E software reset bit", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "SOFTPRES14", description: "CMPSS Software Reset register", offset: "0x148", size: "16",
		bits: [
			{ name: "CMPSS1", description: "CMPSS1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSS2", description: "CMPSS2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSS3", description: "CMPSS3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSS4", description: "CMPSS4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSS5", description: "CMPSS5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMPSS6", description: "CMPSS6 software reset bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPSS7", description: "CMPSS7 software reset bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSS8", description: "CMPSS8 software reset bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSS9", description: "CMPSS9 software reset bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMPSS10", description: "CMPSS10 software reset bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSS11", description: "CMPSS11 software reset bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMPSS12", description: "CMPSS12 software reset bit", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "SOFTPRES16", description: "DAC Software Reset register", offset: "0x150", size: "16",
		bits: [
			{ name: "DAC_A", description: "DAC_A software reset bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "DAC_B", description: "DAC_B software reset bit", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "SOFTPRES17", description: "CLB Software Reset register", offset: "0x154", size: "16",
		bits: [
			{ name: "CLB1", description: "CLB1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLB2", description: "CLB2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLB3", description: "CLB3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLB4", description: "CLB4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLB5", description: "CLB5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLB6", description: "CLB6 software reset bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "SOFTPRES18", description: "FSI Software Reset register", offset: "0x158", size: "16",
		bits: [
			{ name: "FSITX_A", description: "FSITX_A software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "FSITX_B", description: "FSITX_B software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "FSITX_C", description: "FSITX_C software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "FSITX_D", description: "FSITX_D software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "FSIRX_A", description: "FSIRX_A software reset bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "FSIRX_B", description: "FSIRX_B software reset bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "FSIRX_C", description: "FSIRX_C software reset bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "FSIRX_D", description: "FSIRX_D software reset bit", size: "1", shift: "19", mask: "0x80000" },
		]
	},
	{ name: "SOFTPRES19", description: "LIN Software Reset register", offset: "0x15C", size: "16",
		bits: [
			{ name: "LIN_A", description: "LIN_A software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "LIN_B", description: "LIN_B software reset bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "SOFTPRES20", description: "PMBUS Software Reset register", offset: "0x160", size: "16",
		bits: [
			{ name: "PMBUS_A", description: "PMBUS_A software reset bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SOFTPRES21", description: "DCC Software Reset register", offset: "0x164", size: "16",
		bits: [
			{ name: "DCC1", description: "DCC Module reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "DCC2", description: "DCC Module reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "DCC3", description: "DCC Module reset bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "SOFTPRES23", description: "ETHERCAT Software Reset register", offset: "0x16C", size: "16",
		bits: [
			{ name: "ETHERCAT", description: "ETHERCAT Module reset bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SOFTPRES25", description: "HRCAL0,1,2 Software Reset register", offset: "0x174", size: "16",
		bits: [
			{ name: "HRCAL0", description: "HRCAL0 Module reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "HRCAL1", description: "HRCAL1 Module reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "HRCAL2", description: "HRCAL2 Module reset bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "SOFTPRES27", description: "EPG Software Reset register", offset: "0x17C", size: "16",
		bits: [
			{ name: "EPG1", description: "EPG Module Reset Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SOFTPRES28", description: "ADCCHECKER Software Reset register", offset: "0x180", size: "16",
		bits: [
			{ name: "ADCCHECKER1", description: "ADCCHECKER1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCCHECKER2", description: "ADCCHECKER2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCCHECKER3", description: "ADCCHECKER3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCCHECKER4", description: "ADCCHECKER4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCCHECKER5", description: "ADCCHECKER5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCCHECKER6", description: "ADCCHECKER6 software reset bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCCHECKER7", description: "ADCCHECKER7 software reset bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCCHECKER8", description: "ADCCHECKER8 software reset bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCCHECKER9", description: "ADCCHECKER9 software reset bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "ADCCHECKER10", description: "ADCCHECKER10 software reset bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "ADCSEAGGRCPU1", description: "ADCSEAGGRCPU1 software reset bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "ADCSEAGGRCPU2", description: "ADCSEAGGRCPU2 software reset bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "ADCSEAGGRCPU3", description: "ADCSEAGGRCPU3 software reset bit", size: "1", shift: "18", mask: "0x40000" },
		]
	},
	{ name: "SOFTPRES30", description: "SENT Software Reset register", offset: "0x188", size: "16",
		bits: [
			{ name: "SENT1", description: "SENT1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SENT2", description: "SENT2 software reset bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SENT3", description: "SENT3 software reset bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SENT4", description: "SENT4 software reset bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SENT5", description: "SENT5 software reset bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "SENT6", description: "SENT6 software reset bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "SOFTPRES32", description: "WADI Software Reset register", offset: "0x190", size: "16",
		bits: [
			{ name: "WADI1", description: "WADI1 software reset bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "WADI2", description: "WADI2 software reset bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "PARITY_TEST_ALT1", description: "Enables parity test", offset: "0x1B8", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "CPUSYSLOCK1", description: "Lock bit for CPUSYS registers", offset: "0x0", size: "16",
		bits: [
			{ name: "LPMCR", description: "Lock bit for LPMCR Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIOLPMSEL0", description: "Lock bit for GPIOLPMSEL0 Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIOLPMSEL1", description: "Lock bit for GPIOLPMSEL1 Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSSLPMSEL", description: "Lock bit for CMPSSLPMSEL register", size: "1", shift: "5", mask: "0x20" },
			{ name: "USER_REG1_SYSRSN", description: "Lock bit for USER_REG1_SYSRSn", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "USER_REG2_SYSRSN", description: "Lock bit for USER_REG2_SYSRSn", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "USER_REG1_XRSN", description: "Lock bit for USER_REG1_XRSn", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "USER_REG2_XRSN", description: "Lock bit for USER_REG2_XRSn", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "USER_REG1_PORESETN", description: "Lock bit for USER_REG1_PORESETn", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "USER_REG2_PORESETN", description: "Lock bit for USER_REG2_PORESETn", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "USER_REG3_PORESETN", description: "Lock bit for USER_REG3_PORESETn", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "USER_REG4_PORESETN", description: "Lock bit for USER_REG4_PORESETn", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CPUID", description: "Indicates CPU1, CPU2.. CPU6", offset: "0xC", size: "16",
		bits: [
			{ name: "CPUID", description: "Indicates CPU1, CPU2, CPU3, CPU4, CPU5 or CPU6", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "LPMCR", description: "LPM Control Register", offset: "0x28", size: "16",
		bits: [
			{ name: "LPM", description: "Low Power Mode setting", size: "2", shift: "0", mask: "0x3" },
			{ name: "QUALSTDBY", description: "STANDBY Wakeup Pin Qualification Setting", size: "6", shift: "2", mask: "0xFC" },
			{ name: "WDINTE", description: "Enable for WDINT wakeup from STANDBY", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CMPSSLPMSEL", description: "CMPSS LPM Wakeup select registers", offset: "0x2C", size: "32",
		bits: [
			{ name: "CMPSS1H", description: "CMPSS1H Enable for LPM Wakeup", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSS1L", description: "CMPSS1L Enable for LPM Wakeup", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSS2H", description: "CMPSS2H Enable for LPM Wakeup", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSS2L", description: "CMPSS2L Enable for LPM Wakeup", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSS3H", description: "CMPSS3H Enable for LPM Wakeup", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMPSS3L", description: "CMPSS3L Enable for LPM Wakeup", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPSS4H", description: "CMPSS4H Enable for LPM Wakeup", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSS4L", description: "CMPSS4L Enable for LPM Wakeup", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSS5H", description: "CMPSS5H Enable for LPM Wakeup", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMPSS5L", description: "CMPSS5L Enable for LPM Wakeup", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPSS6H", description: "CMPSS6H Enable for LPM Wakeup", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMPSS6L", description: "CMPSS6L Enable for LPM Wakeup", size: "1", shift: "11", mask: "0x800" },
			{ name: "CMPSS7H", description: "CMPSS7H Enable for LPM Wakeup", size: "1", shift: "12", mask: "0x1000" },
			{ name: "CMPSS7L", description: "CMPSS7L Enable for LPM Wakeup", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CMPSS8H", description: "CMPSS8H Enable for LPM Wakeup", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CMPSS8L", description: "CMPSS8L Enable for LPM Wakeup", size: "1", shift: "15", mask: "0x8000" },
			{ name: "CMPSS9H", description: "CMPSS9H Enable for LPM Wakeup", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CMPSS9L", description: "CMPSS9L Enable for LPM Wakeup", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CMPSS10H", description: "CMPSS10H Enable for LPM Wakeup", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CMPSS10L", description: "CMPSS10L Enable for LPM Wakeup", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CMPSS11H", description: "CMPSS11H Enable for LPM Wakeup", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CMPSS11L", description: "CMPSS11L Enable for LPM Wakeup", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CMPSS12H", description: "CMPSS12H Enable for LPM Wakeup", size: "1", shift: "22", mask: "0x400000" },
			{ name: "CMPSS12L", description: "CMPSS12L Enable for LPM Wakeup", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "GPIOLPMSEL0", description: "GPIO LPM Wakeup select registers", offset: "0x30", size: "32",
		bits: [
			{ name: "GPIO0", description: "GPIO0 Enable for LPM Wakeup", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO1", description: "GPIO1 Enable for LPM Wakeup", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO2", description: "GPIO2 Enable for LPM Wakeup", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO3", description: "GPIO3 Enable for LPM Wakeup", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO4", description: "GPIO4 Enable for LPM Wakeup", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO5", description: "GPIO5 Enable for LPM Wakeup", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO6", description: "GPIO6 Enable for LPM Wakeup", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO7", description: "GPIO7 Enable for LPM Wakeup", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO8", description: "GPIO8 Enable for LPM Wakeup", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO9", description: "GPIO9 Enable for LPM Wakeup", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO10", description: "GPIO10 Enable for LPM Wakeup", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO11", description: "GPIO11 Enable for LPM Wakeup", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO12", description: "GPIO12 Enable for LPM Wakeup", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO13", description: "GPIO13 Enable for LPM Wakeup", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO14", description: "GPIO14 Enable for LPM Wakeup", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO15", description: "GPIO15 Enable for LPM Wakeup", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO16", description: "GPIO16 Enable for LPM Wakeup", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO17", description: "GPIO17 Enable for LPM Wakeup", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO18", description: "GPIO18 Enable for LPM Wakeup", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO19", description: "GPIO19 Enable for LPM Wakeup", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO20", description: "GPIO20 Enable for LPM Wakeup", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO21", description: "GPIO21 Enable for LPM Wakeup", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO22", description: "GPIO22 Enable for LPM Wakeup", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO23", description: "GPIO23 Enable for LPM Wakeup", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO24", description: "GPIO24 Enable for LPM Wakeup", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO25", description: "GPIO25 Enable for LPM Wakeup", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO26", description: "GPIO26 Enable for LPM Wakeup", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO27", description: "GPIO27 Enable for LPM Wakeup", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO28", description: "GPIO28 Enable for LPM Wakeup", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO29", description: "GPIO29 Enable for LPM Wakeup", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO30", description: "GPIO30 Enable for LPM Wakeup", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO31", description: "GPIO31 Enable for LPM Wakeup", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "GPIOLPMSEL1", description: "GPIO LPM Wakeup select registers", offset: "0x34", size: "32",
		bits: [
			{ name: "GPIO32", description: "GPIO32 Enable for LPM Wakeup", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO33", description: "GPIO33 Enable for LPM Wakeup", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO34", description: "GPIO34 Enable for LPM Wakeup", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO35", description: "GPIO35 Enable for LPM Wakeup", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO36", description: "GPIO36 Enable for LPM Wakeup", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO37", description: "GPIO37 Enable for LPM Wakeup", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO38", description: "GPIO38 Enable for LPM Wakeup", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO39", description: "GPIO39 Enable for LPM Wakeup", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO40", description: "GPIO40 Enable for LPM Wakeup", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO41", description: "GPIO41 Enable for LPM Wakeup", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO42", description: "GPIO42 Enable for LPM Wakeup", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO43", description: "GPIO43 Enable for LPM Wakeup", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO44", description: "GPIO44 Enable for LPM Wakeup", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO45", description: "GPIO45 Enable for LPM Wakeup", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO46", description: "GPIO46 Enable for LPM Wakeup", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO47", description: "GPIO47 Enable for LPM Wakeup", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO48", description: "GPIO48 Enable for LPM Wakeup", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO49", description: "GPIO49 Enable for LPM Wakeup", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO50", description: "GPIO50 Enable for LPM Wakeup", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO51", description: "GPIO51 Enable for LPM Wakeup", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO52", description: "GPIO52 Enable for LPM Wakeup", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO53", description: "GPIO53 Enable for LPM Wakeup", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO54", description: "GPIO54 Enable for LPM Wakeup", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO55", description: "GPIO55 Enable for LPM Wakeup", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO56", description: "GPIO56 Enable for LPM Wakeup", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO57", description: "GPIO57 Enable for LPM Wakeup", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "GPIO58", description: "GPIO58 Enable for LPM Wakeup", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "GPIO59", description: "GPIO59 Enable for LPM Wakeup", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "GPIO60", description: "GPIO60 Enable for LPM Wakeup", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "GPIO61", description: "GPIO61 Enable for LPM Wakeup", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "GPIO62", description: "GPIO62 Enable for LPM Wakeup", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "GPIO63", description: "GPIO63 Enable for LPM Wakeup", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "TMR2CLKCTL", description: "Timer2 Clock Measurement functionality control register", offset: "0x38", size: "16",
		bits: [
			{ name: "TMR2CLKSRCSEL", description: "CPU Timer 2 Clock Source Select Bit", size: "3", shift: "0", mask: "0x7" },
			{ name: "TMR2CLKPRESCALE", description: "CPU Timer 2 Clock Pre-Scale Value", size: "3", shift: "3", mask: "0x38" },
		]
	},
	{ name: "RESCCLR", description: "Reset Cause Clear Register", offset: "0x3C", size: "16",
		bits: [
			{ name: "POR", description: "POR POR Reset Cause Clear Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "XRSN", description: "XRSn POR Reset Cause Clear Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDRSN", description: "WDRSn POR Reset Cause Clear Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "NMIWDRSN", description: "NMIWDRSn POR Reset Cause Clear Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ECAT_RESET_OUT", description: "ECAT_RESET_OUT POR Reset Cause Clear Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "SIMRESET_XRSN", description: "SIMRESET_XRSn POR Reset Cause Clear Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "ESMXRSN", description: "ESMXRSn Reset Cause Clear Bit", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "RESC", description: "Reset Cause register", offset: "0x40", size: "16",
		bits: [
			{ name: "POR", description: "POR Reset Cause Indication Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "XRSN", description: "XRSn Reset Cause Indication Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDRSN", description: "WDRSn Reset Cause Indication Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "NMIWDRSN", description: "NMIWDRSn Reset Cause Indication Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "ECAT_RESET_OUT", description: "ECAT_RESET_OUT Reset Cause Indication Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "SIMRESET_XRSN", description: "SIMRESET_XRSn Reset Cause Indication Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "ESMRESET", description: "ESMRESET Reset Cause Indication Bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "XRSN_PIN_STATUS", description: "XRSN Pin Status", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "DCON", description: "Debugger connection status to C29x CPU", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "MCANWAKESTATUS", description: "MCAN Wake Status Register", offset: "0x70", size: "16",
		bits: [
			{ name: "WAKE_MCANA", description: "WAKE_MCANA Wake Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "WAKE_MCANB", description: "WAKE_MCANB Wake Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "WAKE_MCANC", description: "WAKE_MCANC Wake Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "WAKE_MCAND", description: "WAKE_MCAND Wake Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "WAKE_MCANE", description: "WAKE_MCANE Wake Status", size: "1", shift: "4", mask: "0x10" },
			{ name: "WAKE_MCANF", description: "WAKE_MCANF Wake Status", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "MCANWAKESTATUSCLR", description: "MCAN Wake Status Clear Register", offset: "0x74", size: "16",
		bits: [
			{ name: "WAKE_MCANA", description: "Cear bit for MCANWAKESTATUS.WAKE_MCANA bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "WAKE_MCANB", description: "Cear bit for MCANWAKESTATUS.WAKE_MCANB bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "WAKE_MCANC", description: "Cear bit for MCANWAKESTATUS.WAKE_MCANC bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "WAKE_MCAND", description: "Cear bit for MCANWAKESTATUS.WAKE_MCAND bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "WAKE_MCANE", description: "Cear bit for MCANWAKESTATUS.WAKE_MCANE bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "WAKE_MCANF", description: "Cear bit for MCANWAKESTATUS.WAKE_MCANF bit", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "CLKSTOPREQ", description: "Peripheral Clock Stop Request Register", offset: "0x78", size: "32",
		bits: [
			{ name: "MCAN_A", description: "MCAN_A Clock Stop Request Bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "MCAN_B", description: "MCAN_B Clock Stop Request Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "MCAN_C", description: "MCAN_C Clock Stop Request Bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "MCAN_D", description: "MCAN_D Clock Stop Request Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "MCAN_E", description: "MCAN_E Clock Stop Request Bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MCAN_F", description: "MCAN_F Clock Stop Request Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "KEY", description: "Key for register write", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "CLKSTOPACK", description: "Peripheral Clock Stop Ackonwledge Register", offset: "0x7C", size: "16",
		bits: [
			{ name: "MCAN_A", description: "MCAN_A Clock Stop Ack Bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "MCAN_B", description: "MCAN_B Clock Stop Ack Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "MCAN_C", description: "MCAN_C Clock Stop Ack Bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "MCAN_D", description: "MCAN_D Clock Stop Ack Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "MCAN_E", description: "MCAN_E Clock Stop Ack Bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MCAN_F", description: "MCAN_F Clock Stop Ack Bit", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "USER_REG1_SYSRSN", description: "Software Configurable registers reset by SYSRSn", offset: "0x80", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG2_SYSRSN", description: "Software Configurable registers reset by SYSRSn", offset: "0x84", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG1_XRSN", description: "Software Configurable registers reset by XRSn", offset: "0x88", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG2_XRSN", description: "Software Configurable registers reset by XRSn", offset: "0x8C", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG1_PORESETN", description: "Software Configurable registers reset by PORESETn", offset: "0x90", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG2_PORESETN", description: "Software Configurable registers reset by PORESETn", offset: "0x94", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG3_PORESETN", description: "Software Configurable registers reset by PORESETn", offset: "0x98", size: "16",
		bits: [
		]
	},
	{ name: "USER_REG4_PORESETN", description: "Software Configurable registers reset by PORESETn", offset: "0x9C", size: "16",
		bits: [
		]
	},
	{ name: "SIMRESET", description: "Simulated Reset Register", offset: "0xA4", size: "32",
		bits: [
			{ name: "XRSN", description: "Generates a simulated XRSn", size: "1", shift: "1", mask: "0x2" },
			{ name: "KEY", description: "Key value to enable write", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "PARITY_TEST_ALT2", description: "Enables parity test", offset: "0xA8", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SCSR", description: "System Control & Status Register", offset: "0x44", size: "16",
		bits: [
			{ name: "WDOVERRIDE", description: "WD Override for WDDIS bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "WDENINT", description: "WD Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDINTS", description: "WD Interrupt Status", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "WDCNTR", description: "Watchdog Counter Register", offset: "0x46", size: "16",
		bits: [
			{ name: "WDCNTR", description: "WD Counter", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "WDKEY", description: "Watchdog Reset Key Register", offset: "0x4A", size: "16",
		bits: [
			{ name: "WDKEY", description: "Key to pet the watchdog timer.", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SYNCBUSYWD", description: "SYNCBUSY status for Watchdog Register", offset: "0x50", size: "16",
		bits: [
			{ name: "BUSY", description: "Status bit indicating synchronization in progress", size: "1", shift: "0", mask: "0x1" },
			{ name: "WDCR", description: "BUSY status bit for WDCR", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "WDCR", description: "Watchdog Control Register", offset: "0x52", size: "16",
		bits: [
			{ name: "WDPS", description: "WD Clock Prescalar", size: "3", shift: "0", mask: "0x7" },
			{ name: "WDCHK", description: "WD Check Bits", size: "3", shift: "3", mask: "0x38" },
			{ name: "WDDIS", description: "WD Disable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WDPRECLKDIV", description: "WD Pre Clock Divider", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "WDWCR", description: "Watchdog Windowed Control Register", offset: "0x54", size: "16",
		bits: [
			{ name: "MIN", description: "WD Min Threshold setting for Windowed Watchdog functionality", size: "8", shift: "0", mask: "0xFF" },
		]
	},
];
module.exports = {
	sysctlRegisters: SYSCTL_REGISTERS,
}
