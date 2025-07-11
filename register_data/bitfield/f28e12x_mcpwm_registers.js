let MCPWM_REGISTERS = [
	{ name: "REVISION", description: "IP revision id register", offset: "0x0", size: "32",
		bits: [
			{ name: "PWM2_PRESENT", description: "PWM2 Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWM3_PRESENT", description: "PWM3 Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPCD_PRESENT", description: "Compare C and D Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "CAP_PRESENT", description: "Capture mode Present", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "TBCTL", description: "Time base control register", offset: "0x8", size: "32",
		bits: [
			{ name: "CTRMODE", description: "Counter Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "CLKDIV", description: "Time Base Clock Pre-scaler", size: "4", shift: "2", mask: "0x3C" },
			{ name: "PRDLD", description: "Shadow to active load of TBPRD", size: "1", shift: "8", mask: "0x100" },
			{ name: "PHSEN", description: "Phase Load Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "PHSDIR", description: "Phase Direction Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "SWSYNC", description: "Software Force Sync Pulse", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SYNCOSEL", description: "Sync Output Select", size: "3", shift: "16", mask: "0x70000" },
			{ name: "FREE_SOFT", description: "Emulation Mode Bits", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SYNCPERSEL", description: "Sync peripheral Select", size: "3", shift: "22", mask: "0x1C00000" },
			{ name: "SYNCISEL", description: "Sync Input Select", size: "5", shift: "25", mask: "0x3E000000" },
		]
	},
	{ name: "TBPRD", description: "Time base period register", offset: "0xA", size: "32",
		bits: [
			{ name: "TBPRD", description: "Time base period register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TBPRDS", description: "Time base period shadow register", offset: "0xC", size: "32",
		bits: [
			{ name: "TBPRDS", description: "Time base period shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TBPHS", description: "Time base phase offset register", offset: "0xE", size: "32",
		bits: [
			{ name: "TBPHS", description: "Phase Offset Register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TBSTS", description: "Time base status register", offset: "0x10", size: "32",
		bits: [
			{ name: "CTRDIR", description: "Counter Direction Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNCI", description: "External Input Sync Status", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "TBSTSCLR", description: "Time base status clear register", offset: "0x12", size: "32",
		bits: [
			{ name: "SYNCI", description: "External Input Sync Status clear", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "TBCTR", description: "Time base counter register", offset: "0x14", size: "32",
		bits: [
			{ name: "TBCTR", description: "Counter Value", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPCTL", description: "Counter compare control register", offset: "0x18", size: "32",
		bits: [
			{ name: "PWM1_LOADAMODE", description: "Shadow to active load of PWM1_CMPA", size: "2", shift: "0", mask: "0x3" },
			{ name: "PWM1_LOADBMODE", description: "Shadow to active load of PWM1_CMPB", size: "2", shift: "2", mask: "0xC" },
			{ name: "PWM2_LOADAMODE", description: "Shadow to active load of PWM2_CMPA", size: "2", shift: "8", mask: "0x300" },
			{ name: "PWM2_LOADBMODE", description: "Shadow to active load of PWM2_CMPB", size: "2", shift: "10", mask: "0xC00" },
			{ name: "PWM3_LOADAMODE", description: "Shadow to active load of PWM3_CMPA", size: "2", shift: "16", mask: "0x30000" },
			{ name: "PWM3_LOADBMODE", description: "Shadow to active load of PWM3_CMPB", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "LOADCMODE", description: "Shadow to active load of CMPC", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "LOADDMODE", description: "Shadow to active load of CMPD", size: "2", shift: "26", mask: "0xC000000" },
		]
	},
	{ name: "CMPC", description: "Counter compare C register", offset: "0x20", size: "32",
		bits: [
			{ name: "CMPC", description: "Compare C register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPD", description: "Counter compare D register", offset: "0x22", size: "32",
		bits: [
			{ name: "CMPD", description: "Compare D register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPCS", description: "Counter compare C shadow register", offset: "0x24", size: "32",
		bits: [
			{ name: "CMPCS", description: "Compare C shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPDS", description: "Counter compare D shadow register", offset: "0x26", size: "32",
		bits: [
			{ name: "CMPDS", description: "Compare D shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "AQCTL", description: "Action qualifier control register", offset: "0x28", size: "32",
		bits: [
			{ name: "PWM1_LDAQAMODE", description: "Shadow to active load of PWM1_AQCTLA", size: "2", shift: "0", mask: "0x3" },
			{ name: "PWM1_LDAQBMODE", description: "Shadow to active load of PWM1_AQCTLB", size: "2", shift: "2", mask: "0xC" },
			{ name: "PWM2_LDAQAMODE", description: "Shadow to active load of PWM2_AQCTLA", size: "2", shift: "8", mask: "0x300" },
			{ name: "PWM2_LDAQBMODE", description: "Shadow to active load of PWM2_AQCTLB", size: "2", shift: "10", mask: "0xC00" },
			{ name: "PWM3_LDAQAMODE", description: "Shadow to active load of PWM3_AQCTLA", size: "2", shift: "16", mask: "0x30000" },
			{ name: "PWM3_LDAQBMODE", description: "Shadow to active load of PWM3_AQCTLB", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "SOCEN", description: "Start of conversion enable", offset: "0x30", size: "32",
		bits: [
			{ name: "SOCA_ENABLE", description: "Start of conversion (SOC) A enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCB_ENABLE", description: "Start of conversion (SOC) B enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOCC_ENABLE", description: "Start of conversion (SOC) C enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCD_ENABLE", description: "Start of conversion (SOC) D enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SOCSEL", description: "Start of conversion selection", offset: "0x32", size: "32",
		bits: [
			{ name: "SOCA_SEL", description: "Start of conversion (SOC) A select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SOCB_SEL", description: "Start of conversion (SOC) B select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "SOCC_SEL", description: "Start of conversion (SOC) C select", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "SOCD_SEL", description: "Start of conversion (SOC) D select", size: "5", shift: "24", mask: "0x1F000000" },
		]
	},
	{ name: "SOCPERIOD", description: "Start of conversion period", offset: "0x34", size: "32",
		bits: [
			{ name: "SOCA_PERIOD", description: "Start of conversion (SOC) A PERIOD", size: "3", shift: "0", mask: "0x7" },
			{ name: "SOCB_PERIOD", description: "Start of conversion (SOC) B PERIOD", size: "3", shift: "8", mask: "0x700" },
			{ name: "SOCC_PERIOD", description: "Start of conversion (SOC) C PERIOD", size: "3", shift: "16", mask: "0x70000" },
			{ name: "SOCD_PERIOD", description: "Start of conversion (SOC) D PERIOD", size: "3", shift: "24", mask: "0x7000000" },
		]
	},
	{ name: "SOCCNT", description: "Start of conversion count", offset: "0x36", size: "32",
		bits: [
			{ name: "SOCA_CNT", description: "Start of conversion (SOC) A COUNT", size: "3", shift: "0", mask: "0x7" },
			{ name: "SOCB_CNT", description: "Start of conversion (SOC) B COUNT", size: "3", shift: "8", mask: "0x700" },
			{ name: "SOCC_CNT", description: "Start of conversion (SOC) C COUNT", size: "3", shift: "16", mask: "0x70000" },
			{ name: "SOCD_CNT", description: "Start of conversion (SOC) D COUNT", size: "3", shift: "24", mask: "0x7000000" },
		]
	},
	{ name: "SOCFLAG", description: "Start of conversion flag", offset: "0x38", size: "32",
		bits: [
			{ name: "SOCA", description: "SOCA Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCB", description: "SOCB Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOCC", description: "SOCC Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCD", description: "SOCD Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SOCCLR", description: "Start of conversion clear", offset: "0x3A", size: "32",
		bits: [
			{ name: "SOCA", description: "SOCA Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCB", description: "SOCB Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOCC", description: "SOCC Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCD", description: "SOCD Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETSEL", description: "Event trigger selection", offset: "0x40", size: "32",
		bits: [
			{ name: "ET1_SEL", description: "Event trigger1 selection", size: "5", shift: "0", mask: "0x1F" },
			{ name: "ET2_SEL", description: "Event trigger2 selection", size: "5", shift: "8", mask: "0x1F00" },
		]
	},
	{ name: "ETPERIOD", description: "Event trigger period", offset: "0x42", size: "32",
		bits: [
			{ name: "ET1_PERIOD", description: "Event trigger1 PERIOD", size: "3", shift: "0", mask: "0x7" },
			{ name: "ET2_PERIOD", description: "Event trigger2 PERIOD", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "ETCNT", description: "Event trigger count", offset: "0x44", size: "32",
		bits: [
			{ name: "ET1_CNT", description: "Event trigger1 COUNT", size: "3", shift: "0", mask: "0x7" },
			{ name: "ET2_CNT", description: "Event trigger2 COUNT", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "INTEN", description: "Interrupt enable", offset: "0x48", size: "32",
		bits: [
			{ name: "CBC", description: "Enable CBC interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Enable OST interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "Enable ET1 interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "Enable ET2 interrupt", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow interrupt", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INTFLAG", description: "Interrupt flag", offset: "0x4A", size: "32",
		bits: [
			{ name: "INT", description: "Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "CBC interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "OST interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "ET1 interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "ET2 interrupt flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow flag", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INTCLR", description: "Interrupt clear", offset: "0x4C", size: "32",
		bits: [
			{ name: "INT", description: "Clear Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Clear CBC interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Clear OST interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "Clear ET1 interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "Clear ET2 interrupt flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow flag", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INTFRC", description: "Interrupt force", offset: "0x4E", size: "32",
		bits: [
			{ name: "CBC", description: "Force CBC interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Force OST interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "Force ET1 interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "Force ET2 interrupt flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow flag", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "TZSEL", description: "Trip Zone selection", offset: "0x50", size: "32",
		bits: [
			{ name: "CBC1", description: "CBC TZ1 select", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "CBC TZ2 select", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "CBC TZ3 select", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "CBC TZ4  select", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "CBC TZ5 select", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "CBC TZ6 select", size: "1", shift: "5", mask: "0x20" },
			{ name: "CBC7", description: "CBC TZ7 select", size: "1", shift: "6", mask: "0x40" },
			{ name: "CBC8", description: "CBC TZ8 select", size: "1", shift: "7", mask: "0x80" },
			{ name: "OST1", description: "OST TZ1 select", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OST2", description: "OST TZ2 select", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OST3", description: "OST TZ3 select", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OST4", description: "OST TZ4  select", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OST5", description: "OST TZ5 select", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OST6", description: "OST TZ6 select", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OST7", description: "OST TZ7 select", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OST8", description: "OST TZ8 select", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "TZCTL", description: "Trip Zone control", offset: "0x56", size: "32",
		bits: [
			{ name: "TZA", description: "TZ1 to TZ8 Trip Action on PWMA", size: "2", shift: "0", mask: "0x3" },
			{ name: "TZB", description: "TZ1 to TZ8 Trip Action on PWMB", size: "2", shift: "2", mask: "0xC" },
			{ name: "CBCPULSE", description: "Clear Pulse for CBC Trip Latch", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "TZCBCOSTFLAG", description: "Trip zone CBCOST flag", offset: "0x58", size: "32",
		bits: [
			{ name: "CBC1", description: "CBC TZ1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "CBC TZ2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "CBC TZ3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "CBC TZ4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "CBC TZ5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "CBC TZ6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "CBC7", description: "CBC TZ7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "CBC8", description: "OST TZ8 Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "OST1", description: "OST TZ1 Flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OST2", description: "OST TZ2 Flag", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OST3", description: "OST TZ3 Flag", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OST4", description: "OST TZ4 Flag", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OST5", description: "OST TZ5 Flag", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OST6", description: "OST TZ6 Flag", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OST7", description: "OST TZ7 Flag", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OST8", description: "OST TZ8 Flag", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "TZCBCOSTCLR", description: "Trip zone CBCOST flag clear", offset: "0x5A", size: "32",
		bits: [
			{ name: "CBC1", description: "CBC TZ1 Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "CBC TZ2 Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "CBC TZ3 Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "CBC TZ4 Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "CBC TZ5 Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "CBC TZ6 Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "CBC7", description: "CBC TZ7 Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "CBC8", description: "OST TZ8 Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "OST1", description: "OST TZ1 Clear", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OST2", description: "OST TZ2 Clear", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OST3", description: "OST TZ3 Clear", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OST4", description: "OST TZ4 Clear", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OST5", description: "OST TZ5 Clear", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OST6", description: "OST TZ6 Clear", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OST7", description: "OST TZ7 Clear", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OST8", description: "OST TZ8 Clear", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "DBCTL", description: "Dead band control register", offset: "0x60", size: "32",
		bits: [
			{ name: "OUT_MODE", description: "Dead Band Output Mode Control", size: "2", shift: "0", mask: "0x3" },
			{ name: "POLSEL", description: "Polarity Select Control", size: "2", shift: "2", mask: "0xC" },
			{ name: "IN_MODE", description: "Dead Band Input Select Mode Control", size: "2", shift: "4", mask: "0x30" },
			{ name: "OUTSWAP", description: "Dead Band Output Swap Control", size: "2", shift: "6", mask: "0xC0" },
			{ name: "DEDB_MODE", description: "Dead Band Dual-Edge B Mode Control", size: "1", shift: "8", mask: "0x100" },
			{ name: "LOADFEDMODE", description: "Shadow to active load of DBFED", size: "2", shift: "16", mask: "0x30000" },
			{ name: "LOADREDMODE", description: "Shadow to active load of DBRED", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "DBFED", description: "Dead band fall edge delay", offset: "0x68", size: "32",
		bits: [
			{ name: "DBFED", description: "Falling edge delay value", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "DBRED", description: "Dead band rise edge delay", offset: "0x6A", size: "32",
		bits: [
			{ name: "DBRED", description: "Rising edge delay value", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "DBFEDS", description: "Dead band fall edge delay shadow register", offset: "0x6C", size: "32",
		bits: [
			{ name: "DBFEDS", description: "Falling edge delay shadow register", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "DBREDS", description: "Dead band rise edge delay shadow register", offset: "0x6E", size: "32",
		bits: [
			{ name: "DBREDS", description: "Rising edge delay shadow register", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "GLDCTL", description: "Global load control register", offset: "0x78", size: "32",
		bits: [
			{ name: "GLD", description: "Global load enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSHTMODE", description: "Global load one-shot enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "GLDMODE", description: "Select global load event", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "GLDOSHTCTL", description: "Global load one shot control register", offset: "0x7A", size: "32",
		bits: [
			{ name: "OSHTLD", description: "Enable Reload Event in One Shot Mode", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSHTCLR", description: "Enable Reload Event in One Shot Mode", size: "1", shift: "1", mask: "0x2" },
			{ name: "GFRCLD", description: "Force load event in one shot mode", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "GLDOSHTSTS", description: "Global load one shot status register", offset: "0x7C", size: "32",
		bits: [
			{ name: "OSHTLATCH", description: "One shot latch output", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PWM1_CMPA", description: "PWM1 counter compare A register", offset: "0x80", size: "32",
		bits: [
			{ name: "PWM1_CMPA", description: "PWM1 Compare A register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_CMPAS", description: "PWM1 counter compare A shadow register", offset: "0x82", size: "32",
		bits: [
			{ name: "PWM1_CMPAS", description: "PWM1 Compare A shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_CMPB", description: "PWM1 counter compare B register", offset: "0x84", size: "32",
		bits: [
			{ name: "PWM1_CMPB", description: "PWM1 Compare B register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_CMPBS", description: "PWM1 counter compare B shadow register", offset: "0x86", size: "32",
		bits: [
			{ name: "PWM1_CMPBS", description: "PWM1 Compare B shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_AQCTLA", description: "PWM1 action qualifier A register", offset: "0x90", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQCTLAS", description: "PWM1 action qualifier A shadow register", offset: "0x92", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQCTLB", description: "PWM1 action qualifier B register", offset: "0x94", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQCTLBS", description: "PWM1 action qualifier B shadow register", offset: "0x96", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQSFRC", description: "PWM1 action qualifier software force", offset: "0x98", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier software force on PWMA", size: "3", shift: "0", mask: "0x7" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "3", shift: "4", mask: "0x70" },
		]
	},
	{ name: "PWM1_AQOTSFRC", description: "PWM1 action qualifier one time software force", offset: "0x9A", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier one time software force on PWMA", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "PWM2_CMPA", description: "PWM2 counter compare A register", offset: "0x180", size: "32",
		bits: [
			{ name: "PWM2_CMPA", description: "PWM2 Compare A register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM2_CMPAS", description: "PWM2 counter compare A shadow register", offset: "0x182", size: "32",
		bits: [
			{ name: "PWM2_CMPAS", description: "PWM2 Compare A shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM2_CMPB", description: "PWM2 counter compare B register", offset: "0x184", size: "32",
		bits: [
			{ name: "PWM2_CMPB", description: "PWM2 Compare B register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM2_CMPBS", description: "PWM2 counter compare B shadow register", offset: "0x186", size: "32",
		bits: [
			{ name: "PWM2_CMPBS", description: "PWM2 Compare B shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM2_AQCTLA", description: "PWM2 action qualifier A register", offset: "0x190", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM2_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM2_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM2_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM2_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM2_AQCTLAS", description: "PWM2 action qualifier A shadow register", offset: "0x192", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM2_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM2_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM2_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM2_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM2_AQCTLB", description: "PWM2 action qualifier B register", offset: "0x194", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM2_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM2_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM2_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM2_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM2_AQCTLBS", description: "PWM2 action qualifier B shadow register", offset: "0x196", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM2_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM2_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM2_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM2_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM2_AQSFRC", description: "PWM2 action qualifier software force", offset: "0x198", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier software force on PWMA", size: "3", shift: "0", mask: "0x7" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "3", shift: "4", mask: "0x70" },
		]
	},
	{ name: "PWM2_AQOTSFRC", description: "PWM2 action qualifier one time software force", offset: "0x19A", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier one time software force on PWMA", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "PWM3_CMPA", description: "PWM3 counter compare A register", offset: "0x280", size: "32",
		bits: [
			{ name: "PWM3_CMPA", description: "PWM3 Compare A register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM3_CMPAS", description: "PWM3 counter compare A shadow register", offset: "0x282", size: "32",
		bits: [
			{ name: "PWM3_CMPAS", description: "PWM3 Compare A shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM3_CMPB", description: "PWM3 counter compare B register", offset: "0x284", size: "32",
		bits: [
			{ name: "PWM3_CMPB", description: "PWM3 Compare B register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM3_CMPBS", description: "PWM3 counter compare B shadow register", offset: "0x286", size: "32",
		bits: [
			{ name: "PWM3_CMPBS", description: "PWM3 Compare B shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM3_AQCTLA", description: "PWM3 action qualifier A register", offset: "0x290", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM3_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM3_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM3_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM3_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM3_AQCTLAS", description: "PWM3 action qualifier A shadow register", offset: "0x292", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM3_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM3_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM3_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM3_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM3_AQCTLB", description: "PWM3 action qualifier B register", offset: "0x294", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM3_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM3_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM3_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM3_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM3_AQCTLBS", description: "PWM3 action qualifier B shadow register", offset: "0x296", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM3_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM3_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM3_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM3_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM3_AQSFRC", description: "PWM3 action qualifier software force", offset: "0x298", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier software force on PWMA", size: "3", shift: "0", mask: "0x7" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "3", shift: "4", mask: "0x70" },
		]
	},
	{ name: "PWM3_AQOTSFRC", description: "PWM3 action qualifier one time software force", offset: "0x29A", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier one time software force on PWMA", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "REVISION", description: "IP revision id register", offset: "0x0", size: "32",
		bits: [
			{ name: "PWM2_PRESENT", description: "PWM2 Present", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWM3_PRESENT", description: "PWM3 Present", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPCD_PRESENT", description: "Compare C and D Present", size: "1", shift: "2", mask: "0x4" },
			{ name: "CAP_PRESENT", description: "Capture mode Present", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "TBCTL", description: "Time base control register", offset: "0x8", size: "32",
		bits: [
			{ name: "CTRMODE", description: "Counter Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "CLKDIV", description: "Time Base Clock Pre-scaler", size: "4", shift: "2", mask: "0x3C" },
			{ name: "PRDLD", description: "Shadow to active load of TBPRD", size: "1", shift: "8", mask: "0x100" },
			{ name: "PHSEN", description: "Phase Load Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "PHSDIR", description: "Phase Direction Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "SWSYNC", description: "Software Force Sync Pulse", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SYNCOSEL", description: "Sync Output Select", size: "3", shift: "16", mask: "0x70000" },
			{ name: "FREE_SOFT", description: "Emulation Mode Bits", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SYNCPERSEL", description: "Sync peripheral Select", size: "3", shift: "22", mask: "0x1C00000" },
			{ name: "SYNCISEL", description: "Sync Input Select", size: "5", shift: "25", mask: "0x3E000000" },
		]
	},
	{ name: "TBPRD", description: "Time base period register", offset: "0xA", size: "32",
		bits: [
			{ name: "TBPRD", description: "Time base period register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TBPRDS", description: "Time base period shadow register", offset: "0xC", size: "32",
		bits: [
			{ name: "TBPRDS", description: "Time base period shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TBPHS", description: "Time base phase offset register", offset: "0xE", size: "32",
		bits: [
			{ name: "TBPHS", description: "Phase Offset Register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "TBSTS", description: "Time base status register", offset: "0x10", size: "32",
		bits: [
			{ name: "CTRDIR", description: "Counter Direction Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNCI", description: "External Input Sync Status", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "TBSTSCLR", description: "Time base status clear register", offset: "0x12", size: "32",
		bits: [
			{ name: "SYNCI", description: "External Input Sync Status clear", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "TBCTR", description: "Time base counter register", offset: "0x14", size: "32",
		bits: [
			{ name: "TBCTR", description: "Counter Value", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPCTL", description: "Counter compare control register", offset: "0x18", size: "32",
		bits: [
			{ name: "PWM1_LOADAMODE", description: "Shadow to active load of PWM1_CMPA", size: "2", shift: "0", mask: "0x3" },
			{ name: "PWM1_LOADBMODE", description: "Shadow to active load of PWM1_CMPB", size: "2", shift: "2", mask: "0xC" },
			{ name: "PWM2_LOADAMODE", description: "Shadow to active load of PWM2_CMPA", size: "2", shift: "8", mask: "0x300" },
			{ name: "PWM2_LOADBMODE", description: "Shadow to active load of PWM2_CMPB", size: "2", shift: "10", mask: "0xC00" },
			{ name: "PWM3_LOADAMODE", description: "Shadow to active load of PWM3_CMPA", size: "2", shift: "16", mask: "0x30000" },
			{ name: "PWM3_LOADBMODE", description: "Shadow to active load of PWM3_CMPB", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "LOADCMODE", description: "Shadow to active load of CMPC", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "LOADDMODE", description: "Shadow to active load of CMPD", size: "2", shift: "26", mask: "0xC000000" },
		]
	},
	{ name: "CMPC", description: "Counter compare C register", offset: "0x20", size: "32",
		bits: [
			{ name: "CMPC", description: "Compare C register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPD", description: "Counter compare D register", offset: "0x22", size: "32",
		bits: [
			{ name: "CMPD", description: "Compare D register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPCS", description: "Counter compare C shadow register", offset: "0x24", size: "32",
		bits: [
			{ name: "CMPCS", description: "Compare C shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "CMPDS", description: "Counter compare D shadow register", offset: "0x26", size: "32",
		bits: [
			{ name: "CMPDS", description: "Compare D shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "AQCTL", description: "Action qualifier control register", offset: "0x28", size: "32",
		bits: [
			{ name: "PWM1_LDAQAMODE", description: "Shadow to active load of PWM1_AQCTLA", size: "2", shift: "0", mask: "0x3" },
			{ name: "PWM1_LDAQBMODE", description: "Shadow to active load of PWM1_AQCTLB", size: "2", shift: "2", mask: "0xC" },
			{ name: "PWM2_LDAQAMODE", description: "Shadow to active load of PWM2_AQCTLA", size: "2", shift: "8", mask: "0x300" },
			{ name: "PWM2_LDAQBMODE", description: "Shadow to active load of PWM2_AQCTLB", size: "2", shift: "10", mask: "0xC00" },
			{ name: "PWM3_LDAQAMODE", description: "Shadow to active load of PWM3_AQCTLA", size: "2", shift: "16", mask: "0x30000" },
			{ name: "PWM3_LDAQBMODE", description: "Shadow to active load of PWM3_AQCTLB", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "SOCEN", description: "Start of conversion enable", offset: "0x30", size: "32",
		bits: [
			{ name: "SOCA_ENABLE", description: "Start of conversion (SOC) A enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCB_ENABLE", description: "Start of conversion (SOC) B enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOCC_ENABLE", description: "Start of conversion (SOC) C enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCD_ENABLE", description: "Start of conversion (SOC) D enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SOCSEL", description: "Start of conversion selection", offset: "0x32", size: "32",
		bits: [
			{ name: "SOCA_SEL", description: "Start of conversion (SOC) A select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SOCB_SEL", description: "Start of conversion (SOC) B select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "SOCC_SEL", description: "Start of conversion (SOC) C select", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "SOCD_SEL", description: "Start of conversion (SOC) D select", size: "5", shift: "24", mask: "0x1F000000" },
		]
	},
	{ name: "SOCPERIOD", description: "Start of conversion period", offset: "0x34", size: "32",
		bits: [
			{ name: "SOCA_PERIOD", description: "Start of conversion (SOC) A PERIOD", size: "3", shift: "0", mask: "0x7" },
			{ name: "SOCB_PERIOD", description: "Start of conversion (SOC) B PERIOD", size: "3", shift: "8", mask: "0x700" },
			{ name: "SOCC_PERIOD", description: "Start of conversion (SOC) C PERIOD", size: "3", shift: "16", mask: "0x70000" },
			{ name: "SOCD_PERIOD", description: "Start of conversion (SOC) D PERIOD", size: "3", shift: "24", mask: "0x7000000" },
		]
	},
	{ name: "SOCCNT", description: "Start of conversion count", offset: "0x36", size: "32",
		bits: [
			{ name: "SOCA_CNT", description: "Start of conversion (SOC) A COUNT", size: "3", shift: "0", mask: "0x7" },
			{ name: "SOCB_CNT", description: "Start of conversion (SOC) B COUNT", size: "3", shift: "8", mask: "0x700" },
			{ name: "SOCC_CNT", description: "Start of conversion (SOC) C COUNT", size: "3", shift: "16", mask: "0x70000" },
			{ name: "SOCD_CNT", description: "Start of conversion (SOC) D COUNT", size: "3", shift: "24", mask: "0x7000000" },
		]
	},
	{ name: "SOCFLAG", description: "Start of conversion flag", offset: "0x38", size: "32",
		bits: [
			{ name: "SOCA", description: "SOCA Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCB", description: "SOCB Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOCC", description: "SOCC Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCD", description: "SOCD Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SOCCLR", description: "Start of conversion clear", offset: "0x3A", size: "32",
		bits: [
			{ name: "SOCA", description: "SOCA Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCB", description: "SOCB Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOCC", description: "SOCC Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCD", description: "SOCD Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETSEL", description: "Event trigger selection", offset: "0x40", size: "32",
		bits: [
			{ name: "ET1_SEL", description: "Event trigger1 selection", size: "5", shift: "0", mask: "0x1F" },
			{ name: "ET2_SEL", description: "Event trigger2 selection", size: "5", shift: "8", mask: "0x1F00" },
		]
	},
	{ name: "ETPERIOD", description: "Event trigger period", offset: "0x42", size: "32",
		bits: [
			{ name: "ET1_PERIOD", description: "Event trigger1 PERIOD", size: "3", shift: "0", mask: "0x7" },
			{ name: "ET2_PERIOD", description: "Event trigger2 PERIOD", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "ETCNT", description: "Event trigger count", offset: "0x44", size: "32",
		bits: [
			{ name: "ET1_CNT", description: "Event trigger1 COUNT", size: "3", shift: "0", mask: "0x7" },
			{ name: "ET2_CNT", description: "Event trigger2 COUNT", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "INTEN", description: "Interrupt enable", offset: "0x48", size: "32",
		bits: [
			{ name: "CBC", description: "Enable CBC interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Enable OST interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "Enable ET1 interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "Enable ET2 interrupt", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow interrupt", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INTFLAG", description: "Interrupt flag", offset: "0x4A", size: "32",
		bits: [
			{ name: "INT", description: "Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "CBC interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "OST interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "ET1 interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "ET2 interrupt flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow flag", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INTCLR", description: "Interrupt clear", offset: "0x4C", size: "32",
		bits: [
			{ name: "INT", description: "Clear Global Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Clear CBC interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Clear OST interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "Clear ET1 interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "Clear ET2 interrupt flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow flag", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "INTFRC", description: "Interrupt force", offset: "0x4E", size: "32",
		bits: [
			{ name: "CBC", description: "Force CBC interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Force OST interrupt flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ET1", description: "Force ET1 interrupt flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ET2", description: "Force ET2 interrupt flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CNT_OVF", description: "Counter overflow flag", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "TZSEL", description: "Trip Zone selection", offset: "0x50", size: "32",
		bits: [
			{ name: "CBC1", description: "CBC TZ1 select", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "CBC TZ2 select", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "CBC TZ3 select", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "CBC TZ4  select", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "CBC TZ5 select", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "CBC TZ6 select", size: "1", shift: "5", mask: "0x20" },
			{ name: "CBC7", description: "CBC TZ7 select", size: "1", shift: "6", mask: "0x40" },
			{ name: "CBC8", description: "CBC TZ8 select", size: "1", shift: "7", mask: "0x80" },
			{ name: "OST1", description: "OST TZ1 select", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OST2", description: "OST TZ2 select", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OST3", description: "OST TZ3 select", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OST4", description: "OST TZ4  select", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OST5", description: "OST TZ5 select", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OST6", description: "OST TZ6 select", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OST7", description: "OST TZ7 select", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OST8", description: "OST TZ8 select", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "TZCTL", description: "Trip Zone control", offset: "0x56", size: "32",
		bits: [
			{ name: "TZA", description: "TZ1 to TZ8 Trip Action on PWMA", size: "2", shift: "0", mask: "0x3" },
			{ name: "TZB", description: "TZ1 to TZ8 Trip Action on PWMB", size: "2", shift: "2", mask: "0xC" },
			{ name: "CBCPULSE", description: "Clear Pulse for CBC Trip Latch", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "TZCBCOSTFLAG", description: "Trip zone CBCOST flag", offset: "0x58", size: "32",
		bits: [
			{ name: "CBC1", description: "CBC TZ1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "CBC TZ2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "CBC TZ3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "CBC TZ4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "CBC TZ5 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "CBC TZ6 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "CBC7", description: "CBC TZ7 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "CBC8", description: "OST TZ8 Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "OST1", description: "OST TZ1 Flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OST2", description: "OST TZ2 Flag", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OST3", description: "OST TZ3 Flag", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OST4", description: "OST TZ4 Flag", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OST5", description: "OST TZ5 Flag", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OST6", description: "OST TZ6 Flag", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OST7", description: "OST TZ7 Flag", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OST8", description: "OST TZ8 Flag", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "TZCBCOSTCLR", description: "Trip zone CBCOST flag clear", offset: "0x5A", size: "32",
		bits: [
			{ name: "CBC1", description: "CBC TZ1 Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "CBC TZ2 Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "CBC TZ3 Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "CBC TZ4 Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "CBC TZ5 Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "CBC TZ6 Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "CBC7", description: "CBC TZ7 Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "CBC8", description: "OST TZ8 Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "OST1", description: "OST TZ1 Clear", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OST2", description: "OST TZ2 Clear", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OST3", description: "OST TZ3 Clear", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OST4", description: "OST TZ4 Clear", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OST5", description: "OST TZ5 Clear", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OST6", description: "OST TZ6 Clear", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OST7", description: "OST TZ7 Clear", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OST8", description: "OST TZ8 Clear", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "DBCTL", description: "Dead band control register", offset: "0x60", size: "32",
		bits: [
			{ name: "OUT_MODE", description: "Dead Band Output Mode Control", size: "2", shift: "0", mask: "0x3" },
			{ name: "POLSEL", description: "Polarity Select Control", size: "2", shift: "2", mask: "0xC" },
			{ name: "IN_MODE", description: "Dead Band Input Select Mode Control", size: "2", shift: "4", mask: "0x30" },
			{ name: "OUTSWAP", description: "Dead Band Output Swap Control", size: "2", shift: "6", mask: "0xC0" },
			{ name: "DEDB_MODE", description: "Dead Band Dual-Edge B Mode Control", size: "1", shift: "8", mask: "0x100" },
			{ name: "LOADFEDMODE", description: "Shadow to active load of DBFED", size: "2", shift: "16", mask: "0x30000" },
			{ name: "LOADREDMODE", description: "Shadow to active load of DBRED", size: "2", shift: "18", mask: "0xC0000" },
		]
	},
	{ name: "DBFED", description: "Dead band fall edge delay", offset: "0x68", size: "32",
		bits: [
			{ name: "DBFED", description: "Falling edge delay value", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "DBRED", description: "Dead band rise edge delay", offset: "0x6A", size: "32",
		bits: [
			{ name: "DBRED", description: "Rising edge delay value", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "DBFEDS", description: "Dead band fall edge delay shadow register", offset: "0x6C", size: "32",
		bits: [
			{ name: "DBFEDS", description: "Falling edge delay shadow register", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "DBREDS", description: "Dead band rise edge delay shadow register", offset: "0x6E", size: "32",
		bits: [
			{ name: "DBREDS", description: "Rising edge delay shadow register", size: "14", shift: "0", mask: "0x3FFF" },
		]
	},
	{ name: "GLDCTL", description: "Global load control register", offset: "0x78", size: "32",
		bits: [
			{ name: "GLD", description: "Global load enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSHTMODE", description: "Global load one-shot enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "GLDMODE", description: "Select global load event", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "GLDOSHTCTL", description: "Global load one shot control register", offset: "0x7A", size: "32",
		bits: [
			{ name: "OSHTLD", description: "Enable Reload Event in One Shot Mode", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSHTCLR", description: "Enable Reload Event in One Shot Mode", size: "1", shift: "1", mask: "0x2" },
			{ name: "GFRCLD", description: "Force load event in one shot mode", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "GLDOSHTSTS", description: "Global load one shot status register", offset: "0x7C", size: "32",
		bits: [
			{ name: "OSHTLATCH", description: "One shot latch output", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PWM1_CMPA", description: "PWM1 counter compare A register", offset: "0x80", size: "32",
		bits: [
			{ name: "PWM1_CMPA", description: "PWM1 Compare A register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_CMPAS", description: "PWM1 counter compare A shadow register", offset: "0x82", size: "32",
		bits: [
			{ name: "PWM1_CMPAS", description: "PWM1 Compare A shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_CMPB", description: "PWM1 counter compare B register", offset: "0x84", size: "32",
		bits: [
			{ name: "PWM1_CMPB", description: "PWM1 Compare B register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_CMPBS", description: "PWM1 counter compare B shadow register", offset: "0x86", size: "32",
		bits: [
			{ name: "PWM1_CMPBS", description: "PWM1 Compare B shadow register", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "PWM1_AQCTLA", description: "PWM1 action qualifier A register", offset: "0x90", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQCTLAS", description: "PWM1 action qualifier A shadow register", offset: "0x92", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQCTLB", description: "PWM1 action qualifier B register", offset: "0x94", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQCTLBS", description: "PWM1 action qualifier B shadow register", offset: "0x96", size: "32",
		bits: [
			{ name: "ZRO", description: "Action When TBCTR = 0", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action When TBCTR = TBPRD", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action When TBCTR = PWM1_CMPA on Up Count", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action When TBCTR = PWM1_CMPA on Down Count", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action When TBCTR = PWM1_CMPB on Up Count", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action When TBCTR = PWM1_CMPB on Down Count", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "PWM1_AQSFRC", description: "PWM1 action qualifier software force", offset: "0x98", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier software force on PWMA", size: "3", shift: "0", mask: "0x7" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "3", shift: "4", mask: "0x70" },
		]
	},
	{ name: "PWM1_AQOTSFRC", description: "PWM1 action qualifier one time software force", offset: "0x9A", size: "32",
		bits: [
			{ name: "PWMA", description: "Action qualifier one time software force on PWMA", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWMB", description: "Action qualifier software force on PWMB", size: "1", shift: "4", mask: "0x10" },
		]
	},
];
module.exports = {
	mcpwmRegisters: MCPWM_REGISTERS,
}
