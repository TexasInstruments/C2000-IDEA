let SDFM_REGISTERS = [
	{ name: "SDIFLG", description: "SD Interrupt Flag Register", offset: "0x0", size: "32",
		bits: [
			{ name: "FLT1_FLG_CEVT1", description: "High-level Interrupt flag for Ch1", size: "1", shift: "0", mask: "0x1" },
			{ name: "FLT1_FLG_CEVT2", description: "Low-level Interrupt flag for Ch1", size: "1", shift: "1", mask: "0x2" },
			{ name: "FLT2_FLG_CEVT1", description: "High-level Interrupt flag for Ch2", size: "1", shift: "2", mask: "0x4" },
			{ name: "FLT2_FLG_CEVT2", description: "Low-level Interrupt flag for Ch2", size: "1", shift: "3", mask: "0x8" },
			{ name: "FLT3_FLG_CEVT1", description: "High-level Interrupt flag for Ch3", size: "1", shift: "4", mask: "0x10" },
			{ name: "FLT3_FLG_CEVT2", description: "Low-level Interrupt flag for Ch3", size: "1", shift: "5", mask: "0x20" },
			{ name: "FLT4_FLG_CEVT1", description: "High-level Interrupt flag for Ch4", size: "1", shift: "6", mask: "0x40" },
			{ name: "FLT4_FLG_CEVT2", description: "Low-level Interrupt flag for Ch4", size: "1", shift: "7", mask: "0x80" },
			{ name: "MF1", description: "Modulator Failure for Filter 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "MF2", description: "Modulator Failure for Filter 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "MF3", description: "Modulator Failure for Filter 3", size: "1", shift: "10", mask: "0x400" },
			{ name: "MF4", description: "Modulator Failure for Filter 4", size: "1", shift: "11", mask: "0x800" },
			{ name: "AF1", description: "Acknowledge flag for Filter 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "AF2", description: "Acknowledge flag for Filter 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "AF3", description: "Acknowledge flag for Filter 3", size: "1", shift: "14", mask: "0x4000" },
			{ name: "AF4", description: "Acknowledge flag for Filter 4", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SDFFOVF1", description: "FIFO Overflow Flag for Ch1.", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SDFFOVF2", description: "FIFO Overflow Flag for Ch2", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SDFFOVF3", description: "FIFO Overflow Flag for Ch3", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SDFFOVF4", description: "FIFO Overflow Flag for Ch4", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SDFFINT1", description: "SDFIFO interrupt for Ch1", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SDFFINT2", description: "SDFIFO interrupt for Ch2", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SDFFINT3", description: "SDFIFO interrupt for Ch3", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SDFFINT4", description: "SDFIFO interrupt for Ch4", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MIF", description: "Master Interrupt Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SDIFLGCLR", description: "SD Interrupt Flag Clear Register", offset: "0x2", size: "32",
		bits: [
			{ name: "FLT1_FLG_CEVT1", description: "High-level Interrupt flag for Ch1", size: "1", shift: "0", mask: "0x1" },
			{ name: "FLT1_FLG_CEVT2", description: "Low-level Interrupt flag for Ch1", size: "1", shift: "1", mask: "0x2" },
			{ name: "FLT2_FLG_CEVT1", description: "High-level Interrupt flag for Ch2", size: "1", shift: "2", mask: "0x4" },
			{ name: "FLT2_FLG_CEVT2", description: "Low-level Interrupt flag for Ch2", size: "1", shift: "3", mask: "0x8" },
			{ name: "FLT3_FLG_CEVT1", description: "High-level Interrupt flag for Ch3", size: "1", shift: "4", mask: "0x10" },
			{ name: "FLT3_FLG_CEVT2", description: "Low-level Interrupt flag for Ch3", size: "1", shift: "5", mask: "0x20" },
			{ name: "FLT4_FLG_CEVT1", description: "High-level Interrupt flag for Ch4", size: "1", shift: "6", mask: "0x40" },
			{ name: "FLT4_FLG_CEVT2", description: "Low-level Interrupt flag for Ch4", size: "1", shift: "7", mask: "0x80" },
			{ name: "MF1", description: "Modulator Failure for Filter 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "MF2", description: "Modulator Failure for Filter 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "MF3", description: "Modulator Failure for Filter 3", size: "1", shift: "10", mask: "0x400" },
			{ name: "MF4", description: "Modulator Failure for Filter 4", size: "1", shift: "11", mask: "0x800" },
			{ name: "AF1", description: "Acknowledge flag for Filter 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "AF2", description: "Acknowledge flag for Filter 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "AF3", description: "Acknowledge flag for Filter 3", size: "1", shift: "14", mask: "0x4000" },
			{ name: "AF4", description: "Acknowledge flag for Filter 4", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SDFFOVF1", description: "SDFIFO overflow clear Ch1", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SDFFOVF2", description: "SDFIFO overflow clear Ch2", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SDFFOVF3", description: "SDFIFO overflow clear Ch3", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SDFFOVF4", description: "SDFIFO overflow clear Ch4", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SDFFINT1", description: "SDFIFO Interrupt flag-clear bit for Ch1", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SDFFINT2", description: "SDFIFO Interrupt flag-clear bit for Ch2", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SDFFINT3", description: "SDFIFO Interrupt flag-clear bit for Ch3", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SDFFINT4", description: "SDFIFO Interrupt flag-clear bit for Ch4", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MIF", description: "Master Interrupt Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SDCTL", description: "SD Control Register", offset: "0x4", size: "16",
		bits: [
			{ name: "HZ1", description: "High-level Threshold crossing (Z) flag Ch1", size: "1", shift: "0", mask: "0x1" },
			{ name: "HZ2", description: "High-level Threshold crossing (Z) flag Ch2", size: "1", shift: "1", mask: "0x2" },
			{ name: "HZ3", description: "High-level Threshold crossing (Z) flag Ch3", size: "1", shift: "2", mask: "0x4" },
			{ name: "HZ4", description: "High-level Threshold crossing (Z) flag Ch4", size: "1", shift: "3", mask: "0x8" },
			{ name: "MIE", description: "Master SDy_ERR Interrupt enable", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "SDMFILEN", description: "SD Master Filter Enable", offset: "0x7", size: "16",
		bits: [
			{ name: "MFE", description: "Master Filter Enable.", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "SDSTATUS", description: "SD Status Register", offset: "0x8", size: "16",
		bits: [
			{ name: "HZ1", description: "High-level Threshold crossing (Z) flag Ch1", size: "1", shift: "0", mask: "0x1" },
			{ name: "HZ2", description: "High-level Threshold crossing (Z) flag Ch2", size: "1", shift: "1", mask: "0x2" },
			{ name: "HZ3", description: "High-level Threshold crossing (Z) flag Ch3", size: "1", shift: "2", mask: "0x4" },
			{ name: "HZ4", description: "High-level Threshold crossing (Z) flag Ch4", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SDINTMODE", description: "SD Interrupt Mode register", offset: "0x9", size: "16",
		bits: [
			{ name: "SDINTMODESEL", description: "CompxH/L events interrupt mode select", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SDCTLPARM1", description: "Control Parameter Register for Ch1", offset: "0x18", size: "16",
		bits: [
			{ name: "MOD", description: "Modulator clocking modes", size: "2", shift: "0", mask: "0x3" },
			{ name: "SDCLKSEL", description: "SD1 Clock source select.", size: "1", shift: "3", mask: "0x8" },
			{ name: "SDCLKSYNC", description: "Enable Synchronizer on SD clock", size: "1", shift: "4", mask: "0x10" },
			{ name: "SDDATASYNC", description: "Enable Synchronizer on SD data", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "SDDFPARM1", description: "Data Filter Parameter Register for Ch1", offset: "0x19", size: "16",
		bits: [
			{ name: "DOSR", description: "Data Filter Oversample Ratio= DOSR+1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FEN", description: "Filter Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "AE", description: "Ack Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "SST", description: "Data filter Structure (SincFast/1/2/3)", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SDSYNCEN", description: "Data Filter Reset Enable", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "SDDPARM1", description: "Data Parameter Register for Ch1", offset: "0x1A", size: "16",
		bits: [
			{ name: "DR", description: "Data Representation (0/1 = 16/32b 2's complement)", size: "1", shift: "10", mask: "0x400" },
			{ name: "SH", description: "Shift Control (# bits to shift in 16b mode)", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "SDFLT1CMPH1", description: "High-level Threshold Register for Ch1", offset: "0x1B", size: "16",
		bits: [
			{ name: "HLT", description: "High-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT1CMPL1", description: "Low-level Threshold Register for Ch1", offset: "0x1C", size: "16",
		bits: [
			{ name: "LLT", description: "Low-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCPARM1", description: "Comparator Filter Parameter Register for Ch1", offset: "0x1D", size: "16",
		bits: [
			{ name: "COSR", description: "Comparator Oversample Ratio. Actual rate COSR+1", size: "5", shift: "0", mask: "0x1F" },
			{ name: "EN_CEVT1", description: "CEVT1 Interrupt enable.", size: "1", shift: "5", mask: "0x20" },
			{ name: "EN_CEVT2", description: "CEVT2 Interrupt enable.", size: "1", shift: "6", mask: "0x40" },
			{ name: "CS1_CS0", description: "Comparator Filter Structure (SincFast/1/2/3)", size: "2", shift: "7", mask: "0x180" },
			{ name: "MFIE", description: "Modulator Failure Interrupt enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "HZEN", description: "High level (Z) Threshold crossing output enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "CEVT1SEL", description: "Comparator Event1 select", size: "2", shift: "11", mask: "0x1800" },
			{ name: "CEN", description: "Comparator Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CEVT2SEL", description: "Comparator Event2 select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "SDDATA1", description: "Data Filter Data Register (16 or 32bit) for Ch1", offset: "0x1E", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDDATFIFO1", description: "Filter Data FIFO Output(32b) for Ch1", offset: "0x20", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDCDATA1", description: "Comparator Filter Data Register (16b) for Ch1", offset: "0x22", size: "16",
		bits: [
		]
	},
	{ name: "SDFLT1CMPH2", description: "Second high level threhold  for CH1", offset: "0x23", size: "16",
		bits: [
			{ name: "HLT2", description: "Second High level threshold.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT1CMPHZ", description: "High-level (Z) Threshold Register for Ch1", offset: "0x24", size: "16",
		bits: [
			{ name: "HLTZ", description: "High-level threshold (Z) for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFIFOCTL1", description: "FIFO Control Register for Ch1", offset: "0x25", size: "16",
		bits: [
			{ name: "SDFFIL", description: "SDFIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SDFFST", description: "SDFIFO Status", size: "5", shift: "6", mask: "0x7C0" },
			{ name: "FFIEN", description: "SDFIFO data ready Interrupt Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "FFEN", description: "SDFIFO Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DRINTSEL", description: "Data-Ready Interrupt Source Select", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OVFIEN", description: "SDFIFO Overflow interrupt enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDSYNC1", description: "SD Filter Sync control for Ch1", offset: "0x26", size: "16",
		bits: [
			{ name: "SYNCSEL", description: "SDSYNC Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "WTSYNCEN", description: "Wait-for-Sync Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WTSYNFLG", description: "Wait-for-Sync Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "WTSYNCLR", description: "Wait-for-Sync Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "FFSYNCCLREN", description: "FIFO Clear-on-SDSYNC Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "WTSCLREN", description: "WTSYNFLG Clear-on-FIFOINT Enable", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "SDFLT1CMPL2", description: "Second low level threhold  for CH1", offset: "0x27", size: "16",
		bits: [
			{ name: "LLT2", description: "Second low-level threshold for the comparator filter output.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCTLPARM2", description: "Control Parameter Register for Ch2", offset: "0x28", size: "16",
		bits: [
			{ name: "MOD", description: "Modulator clocking modes", size: "2", shift: "0", mask: "0x3" },
			{ name: "SDCLKSEL", description: "SD2 Clock source select.", size: "1", shift: "3", mask: "0x8" },
			{ name: "SDCLKSYNC", description: "Enable Synchronizer on SD clock", size: "1", shift: "4", mask: "0x10" },
			{ name: "SDDATASYNC", description: "Enable Synchronizer on SD data", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "SDDFPARM2", description: "Data Filter Parameter Register for Ch2", offset: "0x29", size: "16",
		bits: [
			{ name: "DOSR", description: "Data Filter Oversample Ratio= DOSR+1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FEN", description: "Filter Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "AE", description: "Ack Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "SST", description: "Data filter Structure (SincFast/1/2/3)", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SDSYNCEN", description: "Data Filter Reset Enable", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "SDDPARM2", description: "Data Parameter Register for Ch2", offset: "0x2A", size: "16",
		bits: [
			{ name: "DR", description: "Data Representation (0/1 = 16/32b 2's complement)", size: "1", shift: "10", mask: "0x400" },
			{ name: "SH", description: "Shift Control (# bits to shift in 16b mode)", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "SDFLT2CMPH1", description: "High-level Threshold Register for Ch2", offset: "0x2B", size: "16",
		bits: [
			{ name: "HLT", description: "High-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT2CMPL1", description: "Low-level Threshold Register for Ch2", offset: "0x2C", size: "16",
		bits: [
			{ name: "LLT", description: "Low-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCPARM2", description: "Comparator Filter Parameter Register for Ch2", offset: "0x2D", size: "16",
		bits: [
			{ name: "COSR", description: "Comparator Oversample Ratio. Actual rate COSR+1", size: "5", shift: "0", mask: "0x1F" },
			{ name: "EN_CEVT1", description: "CEVT1 Interrupt enable.", size: "1", shift: "5", mask: "0x20" },
			{ name: "EN_CEVT2", description: "CEVT2 Interrupt enable.", size: "1", shift: "6", mask: "0x40" },
			{ name: "CS1_CS0", description: "Comparator Filter Structure (SincFast/1/2/3)", size: "2", shift: "7", mask: "0x180" },
			{ name: "MFIE", description: "Modulator Failure Interrupt enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "HZEN", description: "High level (Z) Threshold crossing output enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "CEVT1SEL", description: "Comparator Event1 select", size: "2", shift: "11", mask: "0x1800" },
			{ name: "CEN", description: "Comparator Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CEVT2SEL", description: "Comparator Event2 select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "SDDATA2", description: "Data Filter Data Register (16 or 32bit) for Ch2", offset: "0x2E", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDDATFIFO2", description: "Filter Data FIFO Output(32b) for Ch2", offset: "0x30", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDCDATA2", description: "Comparator Filter Data Register (16b) for Ch2", offset: "0x32", size: "16",
		bits: [
		]
	},
	{ name: "SDFLT2CMPH2", description: "Second high level threhold  for CH2", offset: "0x33", size: "16",
		bits: [
			{ name: "HLT2", description: "Second High level threshold.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT2CMPHZ", description: "High-level (Z) Threshold Register for Ch2", offset: "0x34", size: "16",
		bits: [
			{ name: "HLTZ", description: "High-level threshold (Z) for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFIFOCTL2", description: "FIFO Control Register for Ch2", offset: "0x35", size: "16",
		bits: [
			{ name: "SDFFIL", description: "SDFIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SDFFST", description: "SDFIFO Status", size: "5", shift: "6", mask: "0x7C0" },
			{ name: "FFIEN", description: "SDFIFO data ready Interrupt Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "FFEN", description: "SDFIFO Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DRINTSEL", description: "Data-Ready Interrupt Source Select", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OVFIEN", description: "SDFIFO Overflow interrupt enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDSYNC2", description: "SD Filter Sync control for Ch2", offset: "0x36", size: "16",
		bits: [
			{ name: "SYNCSEL", description: "SDSYNC Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "WTSYNCEN", description: "Wait-for-Sync Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WTSYNFLG", description: "Wait-for-Sync Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "WTSYNCLR", description: "Wait-for-Sync Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "FFSYNCCLREN", description: "FIFO Clear-on-SDSYNC Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "WTSCLREN", description: "WTSYNFLG Clear-on-FIFOINT Enable", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "SDFLT2CMPL2", description: "Second low level threhold  for CH2", offset: "0x37", size: "16",
		bits: [
			{ name: "LLT2", description: "Second low-level threshold for the comparator filter output.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCTLPARM3", description: "Control Parameter Register for Ch3", offset: "0x38", size: "16",
		bits: [
			{ name: "MOD", description: "Modulator clocking modes", size: "2", shift: "0", mask: "0x3" },
			{ name: "SDCLKSEL", description: "SD3 Clock source select.", size: "1", shift: "3", mask: "0x8" },
			{ name: "SDCLKSYNC", description: "Enable Synchronizer on SD clock", size: "1", shift: "4", mask: "0x10" },
			{ name: "SDDATASYNC", description: "Enable Synchronizer on SD data", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "SDDFPARM3", description: "Data Filter Parameter Register for Ch3", offset: "0x39", size: "16",
		bits: [
			{ name: "DOSR", description: "Data Filter Oversample Ratio= DOSR+1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FEN", description: "Filter Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "AE", description: "Ack Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "SST", description: "Data filter Structure (SincFast/1/2/3)", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SDSYNCEN", description: "Data Filter Reset Enable", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "SDDPARM3", description: "Data Parameter Register for Ch3", offset: "0x3A", size: "16",
		bits: [
			{ name: "DR", description: "Data Representation (0/1 = 16/32b 2's complement)", size: "1", shift: "10", mask: "0x400" },
			{ name: "SH", description: "Shift Control (# bits to shift in 16b mode)", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "SDFLT3CMPH1", description: "High-level Threshold Register for Ch3", offset: "0x3B", size: "16",
		bits: [
			{ name: "HLT", description: "High-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT3CMPL1", description: "Low-level Threshold Register for Ch3", offset: "0x3C", size: "16",
		bits: [
			{ name: "LLT", description: "Low-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCPARM3", description: "Comparator Filter Parameter Register for Ch3", offset: "0x3D", size: "16",
		bits: [
			{ name: "COSR", description: "Comparator Oversample Ratio. Actual rate COSR+1", size: "5", shift: "0", mask: "0x1F" },
			{ name: "EN_CEVT1", description: "CEVT1 Interrupt enable.", size: "1", shift: "5", mask: "0x20" },
			{ name: "EN_CEVT2", description: "CEVT2 Interrupt enable.", size: "1", shift: "6", mask: "0x40" },
			{ name: "CS1_CS0", description: "Comparator Filter Structure (SincFast/1/2/3)", size: "2", shift: "7", mask: "0x180" },
			{ name: "MFIE", description: "Modulator Failure Interrupt enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "HZEN", description: "High level (Z) Threshold crossing output enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "CEVT1SEL", description: "Comparator Event1 select", size: "2", shift: "11", mask: "0x1800" },
			{ name: "CEN", description: "Comparator Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CEVT2SEL", description: "Comparator Event2 select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "SDDATA3", description: "Data Filter Data Register (16 or 32bit) for Ch3", offset: "0x3E", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDDATFIFO3", description: "Filter Data FIFO Output(32b) for Ch3", offset: "0x40", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDCDATA3", description: "Comparator Filter Data Register (16b) for Ch3", offset: "0x42", size: "16",
		bits: [
		]
	},
	{ name: "SDFLT3CMPH2", description: "Second high level threhold  for CH3", offset: "0x43", size: "16",
		bits: [
			{ name: "HLT2", description: "Second High level threshold.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT3CMPHZ", description: "High-level (Z) Threshold Register for Ch3", offset: "0x44", size: "16",
		bits: [
			{ name: "HLTZ", description: "High-level threshold (Z) for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFIFOCTL3", description: "FIFO Control Register for Ch3", offset: "0x45", size: "16",
		bits: [
			{ name: "SDFFIL", description: "SDFIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SDFFST", description: "SDFIFO Status", size: "5", shift: "6", mask: "0x7C0" },
			{ name: "FFIEN", description: "SDFIFO data ready Interrupt Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "FFEN", description: "SDFIFO Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DRINTSEL", description: "Data-Ready Interrupt Source Select", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OVFIEN", description: "SDFIFO Overflow interrupt enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDSYNC3", description: "SD Filter Sync control for Ch3", offset: "0x46", size: "16",
		bits: [
			{ name: "SYNCSEL", description: "SDSYNC Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "WTSYNCEN", description: "Wait-for-Sync Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WTSYNFLG", description: "Wait-for-Sync Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "WTSYNCLR", description: "Wait-for-Sync Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "FFSYNCCLREN", description: "FIFO Clear-on-SDSYNC Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "WTSCLREN", description: "WTSYNFLG Clear-on-FIFOINT Enable", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "SDFLT3CMPL2", description: "Second low level threhold  for CH3", offset: "0x47", size: "16",
		bits: [
			{ name: "LLT2", description: "Second low-level threshold for the comparator filter output.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCTLPARM4", description: "Control Parameter Register for Ch4", offset: "0x48", size: "16",
		bits: [
			{ name: "MOD", description: "Modulator clocking modes", size: "2", shift: "0", mask: "0x3" },
			{ name: "SDCLKSEL", description: "SD4 Clock source select.", size: "1", shift: "3", mask: "0x8" },
			{ name: "SDCLKSYNC", description: "Enable Synchronizer on SD clock", size: "1", shift: "4", mask: "0x10" },
			{ name: "SDDATASYNC", description: "Enable Synchronizer on SD data", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "SDDFPARM4", description: "Data Filter Parameter Register for Ch4", offset: "0x49", size: "16",
		bits: [
			{ name: "DOSR", description: "Data Filter Oversample Ratio= DOSR+1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FEN", description: "Filter Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "AE", description: "Ack Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "SST", description: "Data filter Structure (SincFast/1/2/3)", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SDSYNCEN", description: "Data Filter Reset Enable", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "SDDPARM4", description: "Data Parameter Register for Ch4", offset: "0x4A", size: "16",
		bits: [
			{ name: "DR", description: "Data Representation (0/1 = 16/32b 2's complement)", size: "1", shift: "10", mask: "0x400" },
			{ name: "SH", description: "Shift Control (# bits to shift in 16b mode)", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "SDFLT4CMPH1", description: "High-level Threshold Register for Ch4", offset: "0x4B", size: "16",
		bits: [
			{ name: "HLT", description: "High-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT4CMPL1", description: "Low-level Threshold Register for Ch4", offset: "0x4C", size: "16",
		bits: [
			{ name: "LLT", description: "Low-level threshold for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCPARM4", description: "Comparator Filter Parameter Register for Ch4", offset: "0x4D", size: "16",
		bits: [
			{ name: "COSR", description: "Comparator Oversample Ratio. Actual rate COSR+1", size: "5", shift: "0", mask: "0x1F" },
			{ name: "EN_CEVT1", description: "CEVT1 Interrupt enable.", size: "1", shift: "5", mask: "0x20" },
			{ name: "EN_CEVT2", description: "CEVT2 Interrupt enable.", size: "1", shift: "6", mask: "0x40" },
			{ name: "CS1_CS0", description: "Comparator Filter Structure (SincFast/1/2/3)", size: "2", shift: "7", mask: "0x180" },
			{ name: "MFIE", description: "Modulator Failure Interrupt enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "HZEN", description: "High level (Z) Threshold crossing output enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "CEVT1SEL", description: "Comparator Event1 select", size: "2", shift: "11", mask: "0x1800" },
			{ name: "CEN", description: "Comparator Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "CEVT2SEL", description: "Comparator Event2 select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "SDDATA4", description: "Data Filter Data Register (16 or 32bit) for Ch4", offset: "0x4E", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDDATFIFO4", description: "Filter Data FIFO Output(32b) for Ch4", offset: "0x50", size: "32",
		bits: [
			{ name: "DATA16", description: "Lo-order 16b in 32b mode", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "DATA32HI", description: "Hi-order 16b in 32b mode, 16-bit Data in 16b mode", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "SDCDATA4", description: "Comparator Filter Data Register (16b) for Ch4", offset: "0x52", size: "16",
		bits: [
		]
	},
	{ name: "SDFLT4CMPH2", description: "Second high level threhold  for CH4", offset: "0x53", size: "16",
		bits: [
			{ name: "HLT2", description: "Second High level threshold.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFLT4CMPHZ", description: "High-level (Z) Threshold Register for Ch4", offset: "0x54", size: "16",
		bits: [
			{ name: "HLTZ", description: "High-level threshold (Z) for the comparator filter output", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDFIFOCTL4", description: "FIFO Control Register for Ch4", offset: "0x55", size: "16",
		bits: [
			{ name: "SDFFIL", description: "SDFIFO Interrupt Level", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SDFFST", description: "SDFIFO Status", size: "5", shift: "6", mask: "0x7C0" },
			{ name: "FFIEN", description: "SDFIFO data ready Interrupt Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "FFEN", description: "SDFIFO Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DRINTSEL", description: "Data-Ready Interrupt Source Select", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OVFIEN", description: "SDFIFO Overflow interrupt enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDSYNC4", description: "SD Filter Sync control for Ch4", offset: "0x56", size: "16",
		bits: [
			{ name: "SYNCSEL", description: "SDSYNC Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "WTSYNCEN", description: "Wait-for-Sync Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "WTSYNFLG", description: "Wait-for-Sync Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "WTSYNCLR", description: "Wait-for-Sync Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "FFSYNCCLREN", description: "FIFO Clear-on-SDSYNC Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "WTSCLREN", description: "WTSYNFLG Clear-on-FIFOINT Enable", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "SDFLT4CMPL2", description: "Second low level threhold  for CH4", offset: "0x57", size: "16",
		bits: [
			{ name: "LLT2", description: "Second low-level threshold for the comparator filter output.", size: "15", shift: "0", mask: "0x7FFF" },
		]
	},
	{ name: "SDCOMP1CTL", description: "SD Comparator event filter1 Control Register", offset: "0x78", size: "16",
		bits: [
			{ name: "CEVT1DIGFILTSEL", description: "High Comparator Trip Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "CEVT2DIGFILTSEL", description: "Low Comparator Trip Select", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "SDCOMP1EVT2FLTCTL", description: "COMPL/CEVT2 Digital filter1 Control Register", offset: "0x79", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP1EVT2FLTCLKCTL", description: "COMPL/CEVT2 Digital filter1 Clock Control Register", offset: "0x7A", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP1EVT1FLTCTL", description: "COMPH/CEVT1 Digital filter1 Control Register", offset: "0x7B", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP1EVT1FLTCLKCTL", description: "COMPH/CEVT1 Digital filter1 Clock Control Register", offset: "0x7C", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP1LOCK", description: "SD  compartor event filter1 Lock Register", offset: "0x81", size: "16",
		bits: [
			{ name: "SDCOMP1CTL", description: "COMPCTL Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMP", description: "COMPevent filter registers Lock", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SDCOMP2CTL", description: "SD Comparator event filter2 Control Register", offset: "0x82", size: "16",
		bits: [
			{ name: "CEVT1DIGFILTSEL", description: "High Comparator Trip Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "CEVT2DIGFILTSEL", description: "Low Comparator Trip Select", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "SDCOMP2EVT2FLTCTL", description: "COMPL/CEVT2 Digital filter2 Control Register", offset: "0x83", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP2EVT2FLTCLKCTL", description: "COMPL/CEVT2 Digital filter2 Clock Control Register", offset: "0x84", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP2EVT1FLTCTL", description: "COMPH/CEVT1 Digital filter2 Control Register", offset: "0x85", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP2EVT1FLTCLKCTL", description: "COMPH/CEVT1 Digital filter2 Clock Control Register", offset: "0x86", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP2LOCK", description: "SD  compartor event filter2 Lock Register", offset: "0x8B", size: "16",
		bits: [
			{ name: "SDCOMP2CTL", description: "COMPCTL Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMP", description: "COMPevent filter registers Lock", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SDCOMP3CTL", description: "SD Comparator event filter3 Control Register", offset: "0x8C", size: "16",
		bits: [
			{ name: "CEVT1DIGFILTSEL", description: "High Comparator Trip Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "CEVT2DIGFILTSEL", description: "Low Comparator Trip Select", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "SDCOMP3EVT2FLTCTL", description: "COMPL/CEVT2 Digital filter3 Control Register", offset: "0x8D", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP3EVT2FLTCLKCTL", description: "COMPL/CEVT2 Digital filter3 Clock Control Register", offset: "0x8E", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP3EVT1FLTCTL", description: "COMPH/CEVT1 Digital filter3 Control Register", offset: "0x8F", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP3EVT1FLTCLKCTL", description: "COMPH/CEVT1 Digital filter3 Clock Control Register", offset: "0x90", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP3LOCK", description: "SD  compartor event filter3 Lock Register", offset: "0x95", size: "16",
		bits: [
			{ name: "SDCOMP3CTL", description: "COMPCTL Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMP", description: "COMPevent filter registers Lock", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "SDCOMP4CTL", description: "SD Comparator event filter4 Control Register", offset: "0x96", size: "16",
		bits: [
			{ name: "CEVT1DIGFILTSEL", description: "High Comparator Trip Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "CEVT2DIGFILTSEL", description: "Low Comparator Trip Select", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "SDCOMP4EVT2FLTCTL", description: "COMPL/CEVT2 Digital filter4 Control Register", offset: "0x97", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP4EVT2FLTCLKCTL", description: "COMPL/CEVT2 Digital filter4 Clock Control Register", offset: "0x98", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP4EVT1FLTCTL", description: "COMPH/CEVT1 Digital filter4 Control Register", offset: "0x99", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "SDCOMP4EVT1FLTCLKCTL", description: "COMPH/CEVT1 Digital filter4 Clock Control Register", offset: "0x9A", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "SDCOMP4LOCK", description: "SD  compartor event filter4 Lock Register", offset: "0x9F", size: "16",
		bits: [
			{ name: "SDCOMP4CTL", description: "COMPCTL Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMP", description: "COMPevent filter registers Lock", size: "1", shift: "3", mask: "0x8" },
		]
	},
];
module.exports = {
	sdfmRegisters: SDFM_REGISTERS,
}
