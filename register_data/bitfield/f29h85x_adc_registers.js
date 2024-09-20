let ADC_REGISTERS = [
	{ name: "ADCCTL1", description: "ADC Control 1 Register", offset: "0x0", size: "16",
		bits: [
			{ name: "INTPULSEPOS", description: "ADC Interrupt Pulse Position", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCPWDNZ", description: "ADC Power Down", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCBSYCHN", description: "ADC Busy Channel", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "ADCBSY", description: "ADC Busy", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EXTMUXPRESELECTEN", description: "External Mux Preselect Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TDMAEN", description: "Enable Alternate DMA Timings", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCCTL2", description: "ADC Control 2 Register", offset: "0x1", size: "16",
		bits: [
			{ name: "PRESCALE", description: "ADC Clock Prescaler", size: "4", shift: "0", mask: "0xF" },
			{ name: "RESOLUTION", description: "SOC Conversion Resolution", size: "1", shift: "6", mask: "0x40" },
			{ name: "SIGNALMODE", description: "SOC Signaling Mode", size: "1", shift: "7", mask: "0x80" },
			{ name: "OFFTRIMMODE", description: "Offset Trim Mode", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCBURSTCTL", description: "ADC Burst Control Register", offset: "0xA", size: "16",
		bits: [
			{ name: "BURSTTRIGSEL", description: "SOC Burst Trigger Source Select", size: "7", shift: "0", mask: "0x7F" },
			{ name: "BURSTSIZE", description: "SOC Burst Size Select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "BURSTEN", description: "SOC Burst Mode Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCINTFLG", description: "ADC Interrupt Flag Register", offset: "0xB", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCINT1RESULT", description: "ADC Interrupt 1 Results Ready", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCINT2RESULT", description: "ADC Interrupt 2 Results Ready", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCINT3RESULT", description: "ADC Interrupt 3 Results Ready", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCINT4RESULT", description: "ADC Interrupt 4 Results Ready", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCINTFLGCLR", description: "ADC Interrupt Flag Clear Register", offset: "0xC", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Flag Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTOVF", description: "ADC Interrupt Overflow Register", offset: "0xD", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Overflow Flags", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Overflow Flags", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Overflow Flags", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Overflow Flags", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTOVFCLR", description: "ADC Interrupt Overflow Clear Register", offset: "0xE", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Overflow Clear Bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Overflow Clear Bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Overflow Clear Bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Overflow Clear Bits", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTSEL1N2", description: "ADC Interrupt 1 and 2 Selection Register", offset: "0xF", size: "16",
		bits: [
			{ name: "INT1SEL", description: "ADCINT1 EOC Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "INT1CONT", description: "ADCINT1 Continue to Interrupt Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT1E", description: "ADCINT1 Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "INT2SEL", description: "ADCINT2 EOC Source Select", size: "6", shift: "8", mask: "0x3F00" },
			{ name: "INT2CONT", description: "ADCINT2 Continue to Interrupt Mode", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INT2E", description: "ADCINT2 Interrupt Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCINTSEL3N4", description: "ADC Interrupt 3 and 4 Selection Register", offset: "0x10", size: "16",
		bits: [
			{ name: "INT3SEL", description: "ADCINT3 EOC Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "INT3CONT", description: "ADCINT3 Continue to Interrupt Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT3E", description: "ADCINT3 Interrupt Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "INT4SEL", description: "ADCINT4 EOC Source Select", size: "6", shift: "8", mask: "0x3F00" },
			{ name: "INT4CONT", description: "ADCINT4 Continue to Interrupt Mode", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INT4E", description: "ADCINT4 Interrupt Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCSOCPRICTL", description: "ADC SOC Priority Control Register", offset: "0x11", size: "16",
		bits: [
			{ name: "SOCPRIORITY", description: "SOC Priority", size: "6", shift: "0", mask: "0x3F" },
			{ name: "RRPOINTER", description: "Round Robin Pointer", size: "6", shift: "6", mask: "0xFC0" },
		]
	},
	{ name: "ADCINTSOCSEL1", description: "ADC Interrupt SOC Selection 1 Register", offset: "0x12", size: "32",
		bits: [
			{ name: "SOC0", description: "SOC0 ADC Interrupt Trigger Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC1", description: "SOC1 ADC Interrupt Trigger Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC2", description: "SOC2 ADC Interrupt Trigger Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC3", description: "SOC3 ADC Interrupt Trigger Select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC4", description: "SOC4 ADC Interrupt Trigger Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC5", description: "SOC5 ADC Interrupt Trigger Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC6", description: "SOC6 ADC Interrupt Trigger Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC7", description: "SOC7 ADC Interrupt Trigger Select", size: "2", shift: "14", mask: "0xC000" },
			{ name: "SOC8", description: "SOC8 ADC Interrupt Trigger Select", size: "2", shift: "16", mask: "0x30000" },
			{ name: "SOC9", description: "SOC9 ADC Interrupt Trigger Select", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "SOC10", description: "SOC10 ADC Interrupt Trigger Select", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SOC11", description: "SOC11 ADC Interrupt Trigger Select", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "SOC12", description: "SOC12 ADC Interrupt Trigger Select", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "SOC13", description: "SOC13 ADC Interrupt Trigger Select", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "SOC14", description: "SOC14 ADC Interrupt Trigger Select", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "SOC15", description: "SOC15 ADC Interrupt Trigger Select", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "ADCINTSOCSEL2", description: "ADC Interrupt SOC Selection 2 Register", offset: "0x14", size: "32",
		bits: [
			{ name: "SOC16", description: "SOC16 ADC Interrupt Trigger Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC17", description: "SOC17 ADC Interrupt Trigger Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC18", description: "SOC18 ADC Interrupt Trigger Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC19", description: "SOC19 ADC Interrupt Trigger Select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC20", description: "SOC20 ADC Interrupt Trigger Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC21", description: "SOC21 ADC Interrupt Trigger Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC22", description: "SOC22 ADC Interrupt Trigger Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC23", description: "SOC23 ADC Interrupt Trigger Select", size: "2", shift: "14", mask: "0xC000" },
			{ name: "SOC24", description: "SOC24 ADC Interrupt Trigger Select", size: "2", shift: "16", mask: "0x30000" },
			{ name: "SOC25", description: "SOC25 ADC Interrupt Trigger Select", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "SOC26", description: "SOC26 ADC Interrupt Trigger Select", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SOC27", description: "SOC27 ADC Interrupt Trigger Select", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "SOC28", description: "SOC28 ADC Interrupt Trigger Select", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "SOC29", description: "SOC29 ADC Interrupt Trigger Select", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "SOC30", description: "SOC30 ADC Interrupt Trigger Select", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "SOC31", description: "SOC31 ADC Interrupt Trigger Select", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "ADCSOCFLG1", description: "ADC SOC Flag 1 Register", offset: "0x16", size: "32",
		bits: [
			{ name: "SOC0", description: "SOC0 Start of Conversion Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "SOC1 Start of Conversion Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "SOC2 Start of Conversion Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "SOC3 Start of Conversion Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "SOC4 Start of Conversion Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "SOC5 Start of Conversion Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "SOC6 Start of Conversion Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "SOC7 Start of Conversion Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "SOC8 Start of Conversion Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "SOC9 Start of Conversion Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "SOC10 Start of Conversion Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "SOC11 Start of Conversion Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "SOC12 Start of Conversion Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "SOC13 Start of Conversion Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "SOC14 Start of Conversion Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "SOC15 Start of Conversion Flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SOC16", description: "SOC16 Start of Conversion Flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SOC17", description: "SOC17 Start of Conversion Flag", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SOC18", description: "SOC18 Start of Conversion Flag", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SOC19", description: "SOC19 Start of Conversion Flag", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SOC20", description: "SOC20 Start of Conversion Flag", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SOC21", description: "SOC21 Start of Conversion Flag", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SOC22", description: "SOC22 Start of Conversion Flag", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SOC23", description: "SOC23 Start of Conversion Flag", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SOC24", description: "SOC24 Start of Conversion Flag", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SOC25", description: "SOC25 Start of Conversion Flag", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SOC26", description: "SOC26 Start of Conversion Flag", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SOC27", description: "SOC27 Start of Conversion Flag", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SOC28", description: "SOC28 Start of Conversion Flag", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SOC29", description: "SOC29 Start of Conversion Flag", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SOC30", description: "SOC30 Start of Conversion Flag", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SOC31", description: "SOC31 Start of Conversion Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ADCSOCFRC1", description: "ADC SOC Force 1 Register", offset: "0x18", size: "32",
		bits: [
			{ name: "SOC0", description: "SOC0 Force Start of Conversion Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "SOC1 Force Start of Conversion Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "SOC2 Force Start of Conversion Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "SOC3 Force Start of Conversion Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "SOC4 Force Start of Conversion Bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "SOC5 Force Start of Conversion Bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "SOC6 Force Start of Conversion Bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "SOC7 Force Start of Conversion Bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "SOC8 Force Start of Conversion Bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "SOC9 Force Start of Conversion Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "SOC10 Force Start of Conversion Bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "SOC11 Force Start of Conversion Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "SOC12 Force Start of Conversion Bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "SOC13 Force Start of Conversion Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "SOC14 Force Start of Conversion Bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "SOC15 Force Start of Conversion Bit", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SOC16", description: "SOC16 Force Start of Conversion Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SOC17", description: "SOC17 Force Start of Conversion Bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SOC18", description: "SOC18 Force Start of Conversion Bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SOC19", description: "SOC19 Force Start of Conversion Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SOC20", description: "SOC20 Force Start of Conversion Bit", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SOC21", description: "SOC21 Force Start of Conversion Bit", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SOC22", description: "SOC22 Force Start of Conversion Bit", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SOC23", description: "SOC23 Force Start of Conversion Bit", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SOC24", description: "SOC24 Force Start of Conversion Bit", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SOC25", description: "SOC25 Force Start of Conversion Bit", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SOC26", description: "SOC26 Force Start of Conversion Bit", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SOC27", description: "SOC27 Force Start of Conversion Bit", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SOC28", description: "SOC28 Force Start of Conversion Bit", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SOC29", description: "SOC29 Force Start of Conversion Bit", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SOC30", description: "SOC30 Force Start of Conversion Bit", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SOC31", description: "SOC31 Force Start of Conversion Bit", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ADCSOCOVF1", description: "ADC SOC Overflow 1 Register", offset: "0x1A", size: "32",
		bits: [
			{ name: "SOC0", description: "SOC0 Start of Conversion Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "SOC1 Start of Conversion Overflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "SOC2 Start of Conversion Overflow Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "SOC3 Start of Conversion Overflow Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "SOC4 Start of Conversion Overflow Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "SOC5 Start of Conversion Overflow Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "SOC6 Start of Conversion Overflow Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "SOC7 Start of Conversion Overflow Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "SOC8 Start of Conversion Overflow Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "SOC9 Start of Conversion Overflow Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "SOC10 Start of Conversion Overflow Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "SOC11 Start of Conversion Overflow Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "SOC12 Start of Conversion Overflow Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "SOC13 Start of Conversion Overflow Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "SOC14 Start of Conversion Overflow Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "SOC15 Start of Conversion Overflow Flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SOC16", description: "SOC16 Start of Conversion Overflow Flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SOC17", description: "SOC17 Start of Conversion Overflow Flag", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SOC18", description: "SOC18 Start of Conversion Overflow Flag", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SOC19", description: "SOC19 Start of Conversion Overflow Flag", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SOC20", description: "SOC20 Start of Conversion Overflow Flag", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SOC21", description: "SOC21 Start of Conversion Overflow Flag", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SOC22", description: "SOC22 Start of Conversion Overflow Flag", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SOC23", description: "SOC23 Start of Conversion Overflow Flag", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SOC24", description: "SOC24 Start of Conversion Overflow Flag", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SOC25", description: "SOC25 Start of Conversion Overflow Flag", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SOC26", description: "SOC26 Start of Conversion Overflow Flag", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SOC27", description: "SOC27 Start of Conversion Overflow Flag", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SOC28", description: "SOC28 Start of Conversion Overflow Flag", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SOC29", description: "SOC29 Start of Conversion Overflow Flag", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SOC30", description: "SOC30 Start of Conversion Overflow Flag", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SOC31", description: "SOC31 Start of Conversion Overflow Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ADCSOCOVFCLR1", description: "ADC SOC Overflow Clear 1 Register", offset: "0x1C", size: "32",
		bits: [
			{ name: "SOC0", description: "SOC0 Clear Start of Conversion Overflow Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "SOC1 Clear Start of Conversion Overflow Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "SOC2 Clear Start of Conversion Overflow Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "SOC3 Clear Start of Conversion Overflow Bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "SOC4 Clear Start of Conversion Overflow Bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "SOC5 Clear Start of Conversion Overflow Bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "SOC6 Clear Start of Conversion Overflow Bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "SOC7 Clear Start of Conversion Overflow Bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "SOC8 Clear Start of Conversion Overflow Bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "SOC9 Clear Start of Conversion Overflow Bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "SOC10 Clear Start of Conversion Overflow Bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "SOC11 Clear Start of Conversion Overflow Bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "SOC12 Clear Start of Conversion Overflow Bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "SOC13 Clear Start of Conversion Overflow Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "SOC14 Clear Start of Conversion Overflow Bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "SOC15 Clear Start of Conversion Overflow Bit", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SOC16", description: "SOC16 Clear Start of Conversion Overflow Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SOC17", description: "SOC17 Clear Start of Conversion Overflow Bit", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SOC18", description: "SOC18 Clear Start of Conversion Overflow Bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SOC19", description: "SOC19 Clear Start of Conversion Overflow Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SOC20", description: "SOC20 Clear Start of Conversion Overflow Bit", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SOC21", description: "SOC21 Clear Start of Conversion Overflow Bit", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SOC22", description: "SOC22 Clear Start of Conversion Overflow Bit", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SOC23", description: "SOC23 Clear Start of Conversion Overflow Bit", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SOC24", description: "SOC24 Clear Start of Conversion Overflow Bit", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SOC25", description: "SOC25 Clear Start of Conversion Overflow Bit", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SOC26", description: "SOC26 Clear Start of Conversion Overflow Bit", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SOC27", description: "SOC27 Clear Start of Conversion Overflow Bit", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SOC28", description: "SOC28 Clear Start of Conversion Overflow Bit", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SOC29", description: "SOC29 Clear Start of Conversion Overflow Bit", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SOC30", description: "SOC30 Clear Start of Conversion Overflow Bit", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SOC31", description: "SOC31 Clear Start of Conversion Overflow Bit", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ADCSOC0CTL", description: "ADC SOC0 Control Register", offset: "0x1E", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC0 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC0 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC0 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC0 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC1CTL", description: "ADC SOC1 Control Register", offset: "0x20", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC1 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC1 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC1 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC1 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC2CTL", description: "ADC SOC2 Control Register", offset: "0x22", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC2 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC2 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC2 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC2 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC3CTL", description: "ADC SOC3 Control Register", offset: "0x24", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC3 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC3 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC3 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC3 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC4CTL", description: "ADC SOC4 Control Register", offset: "0x26", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC4 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC4 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC4 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC4 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC5CTL", description: "ADC SOC5 Control Register", offset: "0x28", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC5 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC5 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC5 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC5 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC6CTL", description: "ADC SOC6 Control Register", offset: "0x2A", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC6 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC6 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC6 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC6 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC7CTL", description: "ADC SOC7 Control Register", offset: "0x2C", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC7 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC7 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC7 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC7 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC8CTL", description: "ADC SOC8 Control Register", offset: "0x2E", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC8 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC8 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC8 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC8 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC9CTL", description: "ADC SOC9 Control Register", offset: "0x30", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC9 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC9 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC9 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC9 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC10CTL", description: "ADC SOC10 Control Register", offset: "0x32", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC10 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC10 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC10 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC10 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC11CTL", description: "ADC SOC11 Control Register", offset: "0x34", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC11 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC11 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC11 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC11 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC12CTL", description: "ADC SOC12 Control Register", offset: "0x36", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC12 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC12 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC12 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC12 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC13CTL", description: "ADC SOC13 Control Register", offset: "0x38", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC13 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC13 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC13 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC13 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC14CTL", description: "ADC SOC14 Control Register", offset: "0x3A", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC14 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC14 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC14 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC14 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC15CTL", description: "ADC SOC15 Control Register", offset: "0x3C", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC15 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC15 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC15 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC15 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC16CTL", description: "ADC SOC16 Control Register", offset: "0x3E", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC16 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC16 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC16 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC16 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC17CTL", description: "ADC SOC17 Control Register", offset: "0x40", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC17 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC17 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC17 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC17 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC18CTL", description: "ADC SOC18 Control Register", offset: "0x42", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC18 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC18 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC18 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC18 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC19CTL", description: "ADC SOC19 Control Register", offset: "0x44", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC19 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC19 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC19 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC19 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC20CTL", description: "ADC SOC20 Control Register", offset: "0x46", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC20 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC20 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC20 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC20 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC21CTL", description: "ADC SOC21 Control Register", offset: "0x48", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC21 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC21 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC21 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC21 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC22CTL", description: "ADC SOC22 Control Register", offset: "0x4A", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC22 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC22 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC22 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC22 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC23CTL", description: "ADC SOC23 Control Register", offset: "0x4C", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC23 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC23 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC23 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC23 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC24CTL", description: "ADC SOC24 Control Register", offset: "0x4E", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC24 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC24 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC24 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC24 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC25CTL", description: "ADC SOC25 Control Register", offset: "0x50", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC25 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC25 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC25 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC25 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC26CTL", description: "ADC SOC26 Control Register", offset: "0x52", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC26 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC26 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC26 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC26 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC27CTL", description: "ADC SOC27 Control Register", offset: "0x54", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC27 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC27 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC27 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC27 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC28CTL", description: "ADC SOC28 Control Register", offset: "0x56", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC28 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC28 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC28 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC28 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC29CTL", description: "ADC SOC29 Control Register", offset: "0x58", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC29 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC29 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC29 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC29 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC30CTL", description: "ADC SOC30 Control Register", offset: "0x5A", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC30 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC30 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC30 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC30 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCSOC31CTL", description: "ADC SOC31 Control Register", offset: "0x5C", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC31 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC31 Channel Select", size: "5", shift: "15", mask: "0xF8000" },
			{ name: "TRIGSEL", description: "SOC31 Trigger Source Select", size: "7", shift: "20", mask: "0x7F00000" },
			{ name: "EXTCHSEL", description: "SOC31 External Channel Mux Select", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "ADCEVTSTAT", description: "ADC Event Status Register", offset: "0x5E", size: "16",
		bits: [
			{ name: "PPB1TRIPHI", description: "Post Processing Block 1 Trip High Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "PPB1TRIPLO", description: "Post Processing Block 1 Trip Low Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "PPB1ZERO", description: "Post Processing Block 1 Zero Crossing Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "PPB2TRIPHI", description: "Post Processing Block 2 Trip High Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "PPB2TRIPLO", description: "Post Processing Block 2 Trip Low Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "PPB2ZERO", description: "Post Processing Block 2 Zero Crossing Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "PPB3TRIPHI", description: "Post Processing Block 3 Trip High Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "PPB3TRIPLO", description: "Post Processing Block 3 Trip Low Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "PPB3ZERO", description: "Post Processing Block 3 Zero Crossing Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "PPB4TRIPHI", description: "Post Processing Block 4 Trip High Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PPB4TRIPLO", description: "Post Processing Block 4 Trip Low Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PPB4ZERO", description: "Post Processing Block 4 Zero Crossing Flag", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCEVTCLR", description: "ADC Event Clear Register", offset: "0x61", size: "16",
		bits: [
			{ name: "PPB1TRIPHI", description: "Post Processing Block 1 Trip High Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "PPB1TRIPLO", description: "Post Processing Block 1 Trip Low Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "PPB1ZERO", description: "Post Processing Block 1 Zero Crossing Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "PPB2TRIPHI", description: "Post Processing Block 2 Trip High Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "PPB2TRIPLO", description: "Post Processing Block 2 Trip Low Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "PPB2ZERO", description: "Post Processing Block 2 Zero Crossing Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "PPB3TRIPHI", description: "Post Processing Block 3 Trip High Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "PPB3TRIPLO", description: "Post Processing Block 3 Trip Low Clear", size: "1", shift: "9", mask: "0x200" },
			{ name: "PPB3ZERO", description: "Post Processing Block 3 Zero Crossing Clear", size: "1", shift: "10", mask: "0x400" },
			{ name: "PPB4TRIPHI", description: "Post Processing Block 4 Trip High Clear", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PPB4TRIPLO", description: "Post Processing Block 4 Trip Low Clear", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PPB4ZERO", description: "Post Processing Block 4 Zero Crossing Clear", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCEVTSEL", description: "ADC Event Selection Register", offset: "0x64", size: "16",
		bits: [
			{ name: "PPB1TRIPHI", description: "Post Processing Block 1 Trip High Event Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "PPB1TRIPLO", description: "Post Processing Block 1 Trip Low Event Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "PPB1ZERO", description: "Post Processing Block 1 Zero Crossing Event Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "PPB2TRIPHI", description: "Post Processing Block 2 Trip High Event Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "PPB2TRIPLO", description: "Post Processing Block 2 Trip Low Event Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "PPB2ZERO", description: "Post Processing Block 2 Zero Crossing Event Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "PPB3TRIPHI", description: "Post Processing Block 3 Trip High Event Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "PPB3TRIPLO", description: "Post Processing Block 3 Trip Low Event Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "PPB3ZERO", description: "Post Processing Block 3 Zero Crossing Event Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "PPB4TRIPHI", description: "Post Processing Block 4 Trip High Event Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PPB4TRIPLO", description: "Post Processing Block 4 Trip Low Event Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PPB4ZERO", description: "Post Processing Block 4 Zero Crossing Event Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCEVTINTSEL", description: "ADC Event Interrupt Selection Register", offset: "0x67", size: "16",
		bits: [
			{ name: "PPB1TRIPHI", description: "Post Processing Block 1 Trip High Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "PPB1TRIPLO", description: "Post Processing Block 1 Trip Low Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "PPB1ZERO", description: "Post Processing Block 1 Zero Crossing Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "PPB2TRIPHI", description: "Post Processing Block 2 Trip High Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "PPB2TRIPLO", description: "Post Processing Block 2 Trip Low Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "PPB2ZERO", description: "Post Processing Block 2 Zero Crossing Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "PPB3TRIPHI", description: "Post Processing Block 3 Trip High Interrupt Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "PPB3TRIPLO", description: "Post Processing Block 3 Trip Low Interrupt Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "PPB3ZERO", description: "Post Processing Block 3 Zero Crossing Interrupt Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "PPB4TRIPHI", description: "Post Processing Block 4 Trip High Interrupt Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PPB4TRIPLO", description: "Post Processing Block 4 Trip Low Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PPB4ZERO", description: "Post Processing Block 4 Zero Crossing Interrupt Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCOSDETECT", description: "ADC Open and Shorts Detect Register", offset: "0x6A", size: "16",
		bits: [
			{ name: "DETECTCFG", description: "ADC Opens and Shorts Detect Configuration", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "ADCCOUNTER", description: "ADC Counter Register", offset: "0x6B", size: "16",
		bits: [
			{ name: "FREECOUNT", description: "ADC Free Running Counter Value", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCREV", description: "ADC Revision Register", offset: "0x6C", size: "16",
		bits: [
			{ name: "TYPE", description: "ADC Type", size: "8", shift: "0", mask: "0xFF" },
			{ name: "REV", description: "ADC Revision", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ADCOFFTRIM", description: "ADC Offset Trim Register 1", offset: "0x6D", size: "16",
		bits: [
			{ name: "OFFTRIM", description: "ADC Offset Trim 12B SE Even", size: "8", shift: "0", mask: "0xFF" },
			{ name: "OFFTRIM12BSEODD", description: "ADC Offset Trim 12B SE Odd", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ADCOFFTRIM2", description: "ADC Offset Trim Register 2", offset: "0x6E", size: "16",
		bits: [
			{ name: "OFFTRIM16BSEEVEN", description: "ADC Offset Trim 16B SE Even", size: "8", shift: "0", mask: "0xFF" },
			{ name: "OFFTRIM16BSEODD", description: "ADC Offset Trim 16B SE Odd", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ADCOFFTRIM3", description: "ADC Offset Trim Register 3", offset: "0x6F", size: "16",
		bits: [
			{ name: "OFFTRIM12BDE", description: "ADC Offset Trim 12B DE", size: "8", shift: "0", mask: "0xFF" },
			{ name: "OFFTRIM16BDE", description: "ADC Offset Trim 16B DE", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ADCPPB1CONFIG", description: "ADC PPB{#} Config Register", offset: "0x74", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 1 Configuration", size: "5", shift: "0", mask: "0x1F" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "ABSEN", description: "ADC Post Processing Block 1 Absolute Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 1 Two's Complement Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "DELTAEN", description: "ADC Post Processing Block 1 Last Sample Delta Enable", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCPPB1STAMP", description: "ADC PPB1 Sample Delay Time Stamp Register", offset: "0x75", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 1 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB1OFFCAL", description: "ADC PPB1 Offset Calibration Register", offset: "0x76", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1OFFREF", description: "ADC PPB1 Offset Reference Register", offset: "0x77", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB1TRIPHI", description: "ADC PPB1 Trip High Register", offset: "0x78", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 1 Trip High Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB1TRIPLO", description: "ADC PPB1 Trip Low/Trigger Time Stamp Register", offset: "0x7A", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 1 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "LIMITLO2EN", description: "Extended Low Limit 2 Enable", size: "1", shift: "19", mask: "0x80000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 1 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPBTRIP1FILCTL", description: "ADCEVT1 Trip High Filter Control Register", offset: "0x7C", size: "16",
		bits: [
			{ name: "FILTHIEN", description: "ADCPPB1 TRIPHI Filter Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "FILTLOEN", description: "ADCPPB1 TRIPLO Filter Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SAMPWIN", description: "Sample Window", size: "6", shift: "3", mask: "0x1F8" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "6", shift: "9", mask: "0x7E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCPPBTRIP1FILCLKCTL", description: "ADCEVT1 Trip High Filter Prescale Control Register", offset: "0x7F", size: "32",
		bits: [
			{ name: "CLKPRESCALE", description: "Filter Clock Prescale", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "ADCPPB2CONFIG", description: "ADC PPB{#} Config Register", offset: "0x89", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 2 Configuration", size: "5", shift: "0", mask: "0x1F" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "ABSEN", description: "ADC Post Processing Block 2 Absolute Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 2 Two's Complement Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "DELTAEN", description: "ADC Post Processing Block 2 Last Sample Delta Enable", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCPPB2STAMP", description: "ADC PPB2 Sample Delay Time Stamp Register", offset: "0x8A", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 2 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB2OFFCAL", description: "ADC PPB2 Offset Calibration Register", offset: "0x8B", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2OFFREF", description: "ADC PPB2 Offset Reference Register", offset: "0x8C", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB2TRIPHI", description: "ADC PPB2 Trip High Register", offset: "0x8D", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 2 Trip High Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB2TRIPLO", description: "ADC PPB2 Trip Low/Trigger Time Stamp Register", offset: "0x8F", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 2 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "LIMITLO2EN", description: "Extended Low Limit 2 Enable", size: "1", shift: "19", mask: "0x80000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 2 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPBTRIP2FILCTL", description: "ADCEVT2 Trip High Filter Control Register", offset: "0x91", size: "16",
		bits: [
			{ name: "FILTHIEN", description: "ADCPPB2 TRIPHI Filter Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "FILTLOEN", description: "ADCPPB2 TRIPLO Filter Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SAMPWIN", description: "Sample Window", size: "6", shift: "3", mask: "0x1F8" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "6", shift: "9", mask: "0x7E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCPPBTRIP2FILCLKCTL", description: "ADCEVT2 Trip High Filter Prescale Control Register", offset: "0x94", size: "32",
		bits: [
			{ name: "CLKPRESCALE", description: "Filter Clock Prescale", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "ADCPPB3CONFIG", description: "ADC PPB{#} Config Register", offset: "0x9E", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 3 Configuration", size: "5", shift: "0", mask: "0x1F" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "ABSEN", description: "ADC Post Processing Block 3 Absolute Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 3 Two's Complement Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "DELTAEN", description: "ADC Post Processing Block 3 Last Sample Delta Enable", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCPPB3STAMP", description: "ADC PPB3 Sample Delay Time Stamp Register", offset: "0x9F", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 3 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB3OFFCAL", description: "ADC PPB3 Offset Calibration Register", offset: "0xA0", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3OFFREF", description: "ADC PPB3 Offset Reference Register", offset: "0xA1", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB3TRIPHI", description: "ADC PPB3 Trip High Register", offset: "0xA2", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 3 Trip High Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB3TRIPLO", description: "ADC PPB3 Trip Low/Trigger Time Stamp Register", offset: "0xA4", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 3 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "LIMITLO2EN", description: "Extended Low Limit 2 Enable", size: "1", shift: "19", mask: "0x80000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 3 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPBTRIP3FILCTL", description: "ADCEVT3 Trip High Filter Control Register", offset: "0xA6", size: "16",
		bits: [
			{ name: "FILTHIEN", description: "ADCPPB3 TRIPHI Filter Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "FILTLOEN", description: "ADCPPB3 TRIPLO Filter Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SAMPWIN", description: "Sample Window", size: "6", shift: "3", mask: "0x1F8" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "6", shift: "9", mask: "0x7E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCPPBTRIP3FILCLKCTL", description: "ADCEVT3 Trip High Filter Prescale Control Register", offset: "0xA9", size: "32",
		bits: [
			{ name: "CLKPRESCALE", description: "Filter Clock Prescale", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "ADCPPB4CONFIG", description: "ADC PPB{#} Config Register", offset: "0xB3", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 4 Configuration", size: "5", shift: "0", mask: "0x1F" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "ABSEN", description: "ADC Post Processing Block 4 Absolute Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 4 Two's Complement Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "DELTAEN", description: "ADC Post Processing Block 4 Last Sample Delta Enable", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCPPB4STAMP", description: "ADC PPB4 Sample Delay Time Stamp Register", offset: "0xB4", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 4 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB4OFFCAL", description: "ADC PPB4 Offset Calibration Register", offset: "0xB5", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4OFFREF", description: "ADC PPB4 Offset Reference Register", offset: "0xB6", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB4TRIPHI", description: "ADC PPB4 Trip High Register", offset: "0xB7", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 4 Trip High Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB4TRIPLO", description: "ADC PPB4 Trip Low/Trigger Time Stamp Register", offset: "0xB9", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 4 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "LIMITLO2EN", description: "Extended Low Limit 2 Enable", size: "1", shift: "19", mask: "0x80000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 4 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPBTRIP4FILCTL", description: "ADCEVT4 Trip High Filter Control Register", offset: "0xBB", size: "16",
		bits: [
			{ name: "FILTHIEN", description: "ADCPPB4 TRIPHI Filter Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "FILTLOEN", description: "ADCPPB4 TRIPLO Filter Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SAMPWIN", description: "Sample Window", size: "6", shift: "3", mask: "0x1F8" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "6", shift: "9", mask: "0x7E00" },
			{ name: "FILINIT", description: "Filter Initialization Bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCPPBTRIP4FILCLKCTL", description: "ADCEVT4 Trip High Filter Prescale Control Register", offset: "0xBE", size: "32",
		bits: [
			{ name: "CLKPRESCALE", description: "Filter Clock Prescale", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "ADCSAFECHECKRESEN", description: "ADC Safe Check Result Enable Register", offset: "0xC8", size: "32",
		bits: [
			{ name: "SOC0CHKEN", description: "ADC SOC0 Safety Checker Result Enable", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC1CHKEN", description: "ADC SOC1 Safety Checker Result Enable", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC2CHKEN", description: "ADC SOC2 Safety Checker Result Enable", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC3CHKEN", description: "ADC SOC3 Safety Checker Result Enable", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC4CHKEN", description: "ADC SOC4 Safety Checker Result Enable", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC5CHKEN", description: "ADC SOC5 Safety Checker Result Enable", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC6CHKEN", description: "ADC SOC6 Safety Checker Result Enable", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC7CHKEN", description: "ADC SOC7 Safety Checker Result Enable", size: "2", shift: "14", mask: "0xC000" },
			{ name: "SOC8CHKEN", description: "ADC SOC8 Safety Checker Result Enable", size: "2", shift: "16", mask: "0x30000" },
			{ name: "SOC9CHKEN", description: "ADC SOC9 Safety Checker Result Enable", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "SOC10CHKEN", description: "ADC SOC10 Safety Checker Result Enable", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SOC11CHKEN", description: "ADC SOC11 Safety Checker Result Enable", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "SOC12CHKEN", description: "ADC SOC12 Safety Checker Result Enable", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "SOC13CHKEN", description: "ADC SOC13 Safety Checker Result Enable", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "SOC14CHKEN", description: "ADC SOC14 Safety Checker Result Enable", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "SOC15CHKEN", description: "ADC SOC15 Safety Checker Result Enable", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "ADCSAFECHECKRESEN2", description: "ADC Safe Check Result Enable 2 Register", offset: "0xCA", size: "32",
		bits: [
			{ name: "SOC16CHKEN", description: "ADC SOC16 Safety Checker Result Enable", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC17CHKEN", description: "ADC SOC17 Safety Checker Result Enable", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC18CHKEN", description: "ADC SOC18 Safety Checker Result Enable", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC19CHKEN", description: "ADC SOC19 Safety Checker Result Enable", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC20CHKEN", description: "ADC SOC20 Safety Checker Result Enable", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC21CHKEN", description: "ADC SOC21 Safety Checker Result Enable", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC22CHKEN", description: "ADC SOC22 Safety Checker Result Enable", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC23CHKEN", description: "ADC SOC23 Safety Checker Result Enable", size: "2", shift: "14", mask: "0xC000" },
			{ name: "SOC24CHKEN", description: "ADC SOC24 Safety Checker Result Enable", size: "2", shift: "16", mask: "0x30000" },
			{ name: "SOC25CHKEN", description: "ADC SOC25 Safety Checker Result Enable", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "SOC26CHKEN", description: "ADC SOC26 Safety Checker Result Enable", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SOC27CHKEN", description: "ADC SOC27 Safety Checker Result Enable", size: "2", shift: "22", mask: "0xC00000" },
			{ name: "SOC28CHKEN", description: "ADC SOC28 Safety Checker Result Enable", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "SOC29CHKEN", description: "ADC SOC29 Safety Checker Result Enable", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "SOC30CHKEN", description: "ADC SOC30 Safety Checker Result Enable", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "SOC31CHKEN", description: "ADC SOC31 Safety Checker Result Enable", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "ADCINTCYCLE", description: "ADC Early Interrupt Generation Cycle", offset: "0xE2", size: "16",
		bits: [
		]
	},
	{ name: "ADCINLTRIM1", description: "ADC Linearity Trim 1 Register", offset: "0xE3", size: "32",
		bits: [
		]
	},
	{ name: "ADCINLTRIM2", description: "ADC Linearity Trim 2 Register", offset: "0xE5", size: "32",
		bits: [
		]
	},
	{ name: "ADCINLTRIM3", description: "ADC Linearity Trim 3 Register", offset: "0xE7", size: "32",
		bits: [
		]
	},
	{ name: "ADCINLTRIM4", description: "ADC Linearity Trim 4 Register", offset: "0xE9", size: "32",
		bits: [
		]
	},
	{ name: "ADCINLTRIM5", description: "ADC Linearity Trim 5 Register", offset: "0xEB", size: "32",
		bits: [
		]
	},
	{ name: "ADCINLTRIM6", description: "ADC Linearity Trim 6 Register", offset: "0xED", size: "32",
		bits: [
		]
	},
	{ name: "ADCREV2", description: "ADC Wrapper Revision Register", offset: "0xF1", size: "16",
		bits: [
			{ name: "WRAPPERTYPE", description: "ADC Wrapper Type", size: "8", shift: "0", mask: "0xFF" },
			{ name: "WRAPPERREV", description: "ADC Wrapper Revision", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "REP1CTL", description: "ADC Trigger Repeater 1 Control Register", offset: "0xF6", size: "32",
		bits: [
			{ name: "MODE", description: "ADC Trigger Repeater 1 Mode Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "ACTIVEMODE", description: "ADC Trigger Repeater 1 Active Mode", size: "1", shift: "1", mask: "0x2" },
			{ name: "MODULEBUSY", description: "ADC Trigger Repeater 1 Module Busy", size: "1", shift: "3", mask: "0x8" },
			{ name: "PHASEOVF", description: "ADC Trigger Repeater 1 Phase Delay Overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "TRIGGEROVF", description: "ADC Trigger Repeater 1 Oversampled Trigger Overflow", size: "1", shift: "7", mask: "0x80" },
			{ name: "TRIGGER", description: "ADC Trigger Repeater 1 Trigger Select", size: "7", shift: "8", mask: "0x7F00" },
			{ name: "SYNCINSEL", description: "ADC Trigger Repeater 1 Sync. In Select", size: "6", shift: "16", mask: "0x3F0000" },
			{ name: "SWSYNC", description: "ADC Trigger Repeater 1 Software Sync.", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "REP1N", description: "ADC Trigger Repeater 1 N Select Register", offset: "0xF8", size: "32",
		bits: [
			{ name: "NSEL", description: "ADC Trigger Repeater 1 Trigger Number Selection", size: "7", shift: "0", mask: "0x7F" },
			{ name: "NCOUNT", description: "ADC Trigger Repeater 1 Trigger Counter", size: "7", shift: "16", mask: "0x7F0000" },
		]
	},
	{ name: "REP1PHASE", description: "ADC Trigger Repeater 1 Phase Select Register", offset: "0xFA", size: "32",
		bits: [
			{ name: "PHASE", description: "ADC Trigger Repeater 1 Phase Delay Configuration", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "PHASECOUNT", description: "ADC Trigger Repeater 1 Phase Delay Status", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "REP1SPREAD", description: "ADC Trigger Repeater 1 Spread Select Register", offset: "0xFC", size: "32",
		bits: [
			{ name: "SPREAD", description: "ADC Trigger Repeater 1 Spread Delay Configuration", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SPREADCOUNT", description: "ADC Trigger Repeater 1 Spread Delay Status", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "REP1FRC", description: "ADC Trigger Repeater 1 Software Force Register", offset: "0xFE", size: "16",
		bits: [
			{ name: "SWFRC", description: "ADC Trigger Repeater 1 Software Force", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "REP2CTL", description: "ADC Trigger Repeater 2 Control Register", offset: "0x10D", size: "32",
		bits: [
			{ name: "MODE", description: "ADC Trigger Repeater 2 Mode Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "ACTIVEMODE", description: "ADC Trigger Repeater 2 Active Mode", size: "1", shift: "1", mask: "0x2" },
			{ name: "MODULEBUSY", description: "ADC Trigger Repeater 2 Module Busy", size: "1", shift: "3", mask: "0x8" },
			{ name: "PHASEOVF", description: "ADC Trigger Repeater 2 Phase Delay Overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "TRIGGEROVF", description: "ADC Trigger Repeater 2 Oversampled Trigger Overflow", size: "1", shift: "7", mask: "0x80" },
			{ name: "TRIGGER", description: "ADC Trigger Repeater 2 Trigger Select", size: "7", shift: "8", mask: "0x7F00" },
			{ name: "SYNCINSEL", description: "ADC Trigger Repeater 2 Sync. In Select", size: "6", shift: "16", mask: "0x3F0000" },
			{ name: "SWSYNC", description: "ADC Trigger Repeater 2 Software Sync.", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "REP2N", description: "ADC Trigger Repeater 2 N Select Register", offset: "0x10F", size: "32",
		bits: [
			{ name: "NSEL", description: "ADC Trigger Repeater 2 Trigger Number Selection", size: "7", shift: "0", mask: "0x7F" },
			{ name: "NCOUNT", description: "ADC Trigger Repeater 2 Trigger Counter", size: "7", shift: "16", mask: "0x7F0000" },
		]
	},
	{ name: "REP2PHASE", description: "ADC Trigger Repeater 2 Phase Select Register", offset: "0x111", size: "32",
		bits: [
			{ name: "PHASE", description: "ADC Trigger Repeater 2 Phase Delay Configuration", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "PHASECOUNT", description: "ADC Trigger Repeater 2 Phase Delay Status", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "REP2SPREAD", description: "ADC Trigger Repeater 2 Spread Select Register", offset: "0x113", size: "32",
		bits: [
			{ name: "SPREAD", description: "ADC Trigger Repeater 2 Spread Delay Configuration", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SPREADCOUNT", description: "ADC Trigger Repeater 2 Spread Delay Status", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "REP2FRC", description: "ADC Trigger Repeater 2 Software Force Register", offset: "0x115", size: "16",
		bits: [
			{ name: "SWFRC", description: "ADC Trigger Repeater 2 Software Force", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ADCPPB1LIMIT", description: "ADC PPB1Conversion Count Limit Register", offset: "0x124", size: "16",
		bits: [
			{ name: "LIMIT", description: "Post Processing Block 1 Limit", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPBP1PCOUNT", description: "ADC PPB1 Partial Conversion Count Register", offset: "0x127", size: "16",
		bits: [
			{ name: "PCOUNT", description: "Post Processing Block 1 Partial Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1CONFIG2", description: "ADC PPB1 Sum Shift Register", offset: "0x12A", size: "16",
		bits: [
			{ name: "SHIFT", description: "Post Processing Block 1 Right Shift", size: "4", shift: "0", mask: "0xF" },
			{ name: "SYNCINSEL", description: "Post Processing Block 1 Sync. Input Select", size: "6", shift: "4", mask: "0x3F0" },
			{ name: "SWSYNC", description: "Post Processing Block 1 Software Force Sync.", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSINTSEL", description: "Post Processing Block 1 Interrupt Source Select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "COMPSEL", description: "Post Processing Block 1 Compare Source Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCPPB1PSUM", description: "ADC PPB1 Partial Sum Register", offset: "0x12D", size: "32",
		bits: [
			{ name: "PSUM", description: "Post Processing Block 1 Oversampling Partial Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB1PMAX", description: "ADC PPB1 Partial Max Register", offset: "0x12F", size: "32",
		bits: [
			{ name: "PMAX", description: "Post Processing Block 1 Oversampling Partial Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB1PMAXI", description: "ADC PPB1 Partial Max Index Register", offset: "0x131", size: "16",
		bits: [
			{ name: "PMAXI", description: "Post Processing Block 1 Oversampling Partial Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1PMIN", description: "ADC PPB1 Partial MIN Register", offset: "0x134", size: "32",
		bits: [
			{ name: "PMIN", description: "Post Processing Block 1 Oversampling Partial Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB1PMINI", description: "ADC PPB1 Partial Min Index Register", offset: "0x136", size: "16",
		bits: [
			{ name: "PMINI", description: "Post Processing Block 1 Oversampling Partial Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1TRIPLO2", description: "ADC PPB1 Extended Trip Low Register", offset: "0x139", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 1 Trip Low Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB2LIMIT", description: "ADC PPB2Conversion Count Limit Register", offset: "0x14B", size: "16",
		bits: [
			{ name: "LIMIT", description: "Post Processing Block 2 Limit", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPBP2PCOUNT", description: "ADC PPB2 Partial Conversion Count Register", offset: "0x14E", size: "16",
		bits: [
			{ name: "PCOUNT", description: "Post Processing Block 2 Partial Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2CONFIG2", description: "ADC PPB2 Sum Shift Register", offset: "0x151", size: "16",
		bits: [
			{ name: "SHIFT", description: "Post Processing Block 2 Right Shift", size: "4", shift: "0", mask: "0xF" },
			{ name: "SYNCINSEL", description: "Post Processing Block 2 Sync. Input Select", size: "6", shift: "4", mask: "0x3F0" },
			{ name: "SWSYNC", description: "Post Processing Block 2 Software Force Sync.", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSINTSEL", description: "Post Processing Block 2 Interrupt Source Select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "COMPSEL", description: "Post Processing Block 2 Compare Source Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCPPB2PSUM", description: "ADC PPB2 Partial Sum Register", offset: "0x154", size: "32",
		bits: [
			{ name: "PSUM", description: "Post Processing Block 2 Oversampling Partial Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB2PMAX", description: "ADC PPB2 Partial Max Register", offset: "0x156", size: "32",
		bits: [
			{ name: "PMAX", description: "Post Processing Block 2 Oversampling Partial Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB2PMAXI", description: "ADC PPB2 Partial Max Index Register", offset: "0x158", size: "16",
		bits: [
			{ name: "PMAXI", description: "Post Processing Block 2 Oversampling Partial Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2PMIN", description: "ADC PPB2 Partial MIN Register", offset: "0x15B", size: "32",
		bits: [
			{ name: "PMIN", description: "Post Processing Block 2 Oversampling Partial Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB2PMINI", description: "ADC PPB2 Partial Min Index Register", offset: "0x15D", size: "16",
		bits: [
			{ name: "PMINI", description: "Post Processing Block 2 Oversampling Partial Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2TRIPLO2", description: "ADC PPB2 Extended Trip Low Register", offset: "0x160", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 2 Trip Low Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB3LIMIT", description: "ADC PPB3Conversion Count Limit Register", offset: "0x172", size: "16",
		bits: [
			{ name: "LIMIT", description: "Post Processing Block 3 Limit", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPBP3PCOUNT", description: "ADC PPB3 Partial Conversion Count Register", offset: "0x175", size: "16",
		bits: [
			{ name: "PCOUNT", description: "Post Processing Block 3 Partial Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3CONFIG2", description: "ADC PPB3 Sum Shift Register", offset: "0x178", size: "16",
		bits: [
			{ name: "SHIFT", description: "Post Processing Block 3 Right Shift", size: "4", shift: "0", mask: "0xF" },
			{ name: "SYNCINSEL", description: "Post Processing Block 3 Sync. Input Select", size: "6", shift: "4", mask: "0x3F0" },
			{ name: "SWSYNC", description: "Post Processing Block 3 Software Force Sync.", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSINTSEL", description: "Post Processing Block 3 Interrupt Source Select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "COMPSEL", description: "Post Processing Block 3 Compare Source Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCPPB3PSUM", description: "ADC PPB3 Partial Sum Register", offset: "0x17B", size: "32",
		bits: [
			{ name: "PSUM", description: "Post Processing Block 3 Oversampling Partial Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB3PMAX", description: "ADC PPB3 Partial Max Register", offset: "0x17D", size: "32",
		bits: [
			{ name: "PMAX", description: "Post Processing Block 3 Oversampling Partial Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB3PMAXI", description: "ADC PPB3 Partial Max Index Register", offset: "0x17F", size: "16",
		bits: [
			{ name: "PMAXI", description: "Post Processing Block 3 Oversampling Partial Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3PMIN", description: "ADC PPB3 Partial MIN Register", offset: "0x182", size: "32",
		bits: [
			{ name: "PMIN", description: "Post Processing Block 3 Oversampling Partial Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB3PMINI", description: "ADC PPB3 Partial Min Index Register", offset: "0x184", size: "16",
		bits: [
			{ name: "PMINI", description: "Post Processing Block 3 Oversampling Partial Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3TRIPLO2", description: "ADC PPB3 Extended Trip Low Register", offset: "0x187", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 3 Trip Low Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCPPB4LIMIT", description: "ADC PPB4Conversion Count Limit Register", offset: "0x199", size: "16",
		bits: [
			{ name: "LIMIT", description: "Post Processing Block 4 Limit", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPBP4PCOUNT", description: "ADC PPB4 Partial Conversion Count Register", offset: "0x19C", size: "16",
		bits: [
			{ name: "PCOUNT", description: "Post Processing Block 4 Partial Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4CONFIG2", description: "ADC PPB4 Sum Shift Register", offset: "0x19F", size: "16",
		bits: [
			{ name: "SHIFT", description: "Post Processing Block 4 Right Shift", size: "4", shift: "0", mask: "0xF" },
			{ name: "SYNCINSEL", description: "Post Processing Block 4 Sync. Input Select", size: "6", shift: "4", mask: "0x3F0" },
			{ name: "SWSYNC", description: "Post Processing Block 4 Software Force Sync.", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSINTSEL", description: "Post Processing Block 4 Interrupt Source Select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "COMPSEL", description: "Post Processing Block 4 Compare Source Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCPPB4PSUM", description: "ADC PPB4 Partial Sum Register", offset: "0x1A2", size: "32",
		bits: [
			{ name: "PSUM", description: "Post Processing Block 4 Oversampling Partial Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB4PMAX", description: "ADC PPB4 Partial Max Register", offset: "0x1A4", size: "32",
		bits: [
			{ name: "PMAX", description: "Post Processing Block 4 Oversampling Partial Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB4PMAXI", description: "ADC PPB4 Partial Max Index Register", offset: "0x1A6", size: "16",
		bits: [
			{ name: "PMAXI", description: "Post Processing Block 4 Oversampling Partial Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4PMIN", description: "ADC PPB4 Partial MIN Register", offset: "0x1A9", size: "32",
		bits: [
			{ name: "PMIN", description: "Post Processing Block 4 Oversampling Partial Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB4PMINI", description: "ADC PPB4 Partial Min Index Register", offset: "0x1AB", size: "16",
		bits: [
			{ name: "PMINI", description: "Post Processing Block 4 Oversampling Partial Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4TRIPLO2", description: "ADC PPB4 Extended Trip Low Register", offset: "0x1AE", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 4 Trip Low Limit", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "ADCRESULT0", description: "ADC Result 0 Register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT1", description: "ADC Result 1 Register", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT2", description: "ADC Result 2 Register", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT3", description: "ADC Result 3 Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT4", description: "ADC Result 4 Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT5", description: "ADC Result 5 Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT6", description: "ADC Result 6 Register", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT7", description: "ADC Result 7 Register", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT8", description: "ADC Result 8 Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT9", description: "ADC Result 9 Register", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT10", description: "ADC Result 10 Register", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT11", description: "ADC Result 11 Register", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT12", description: "ADC Result 12 Register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT13", description: "ADC Result 13 Register", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT14", description: "ADC Result 14 Register", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT15", description: "ADC Result 15 Register", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT16", description: "ADC Result 16 Register", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT17", description: "ADC Result 17 Register", offset: "0x11", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT18", description: "ADC Result 18 Register", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT19", description: "ADC Result 19 Register", offset: "0x13", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT20", description: "ADC Result 20 Register", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT21", description: "ADC Result 21 Register", offset: "0x15", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT22", description: "ADC Result 22 Register", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT23", description: "ADC Result 23 Register", offset: "0x17", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT24", description: "ADC Result 24 Register", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT25", description: "ADC Result 25 Register", offset: "0x19", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT26", description: "ADC Result 26 Register", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT27", description: "ADC Result 27 Register", offset: "0x1B", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT28", description: "ADC Result 28 Register", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT29", description: "ADC Result 29 Register", offset: "0x1D", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT30", description: "ADC Result 30 Register", offset: "0x1E", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT31", description: "ADC Result 31 Register", offset: "0x1F", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB1RESULT", description: "ADC Post Processing Block 1 Result Register", offset: "0x20", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB2RESULT", description: "ADC Post Processing Block 2 Result Register", offset: "0x22", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB3RESULT", description: "ADC Post Processing Block 3 Result Register", offset: "0x24", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB4RESULT", description: "ADC Post Processing Block 4 Result Register", offset: "0x26", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB1SUM", description: "ADC PPB 1 Final Sum Result Register", offset: "0x28", size: "32",
		bits: [
			{ name: "SUM", description: "Post Processing Block 1 Oversampling Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB1COUNT", description: "ADC PPB1 Final Conversion Count Register", offset: "0x2A", size: "16",
		bits: [
			{ name: "COUNT", description: "Post Processing Block 1 Final Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2SUM", description: "ADC PPB 2 Final Sum Result Register", offset: "0x2D", size: "32",
		bits: [
			{ name: "SUM", description: "Post Processing Block 2 Oversampling Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB2COUNT", description: "ADC PPB2 Final Conversion Count Register", offset: "0x2F", size: "16",
		bits: [
			{ name: "COUNT", description: "Post Processing Block 2 Final Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3SUM", description: "ADC PPB 3 Final Sum Result Register", offset: "0x32", size: "32",
		bits: [
			{ name: "SUM", description: "Post Processing Block 3 Oversampling Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB3COUNT", description: "ADC PPB3 Final Conversion Count Register", offset: "0x34", size: "16",
		bits: [
			{ name: "COUNT", description: "Post Processing Block 3 Final Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4SUM", description: "ADC PPB 4 Final Sum Result Register", offset: "0x37", size: "32",
		bits: [
			{ name: "SUM", description: "Post Processing Block 4 Oversampling Sum", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "ADCPPB4COUNT", description: "ADC PPB4 Final Conversion Count Register", offset: "0x39", size: "16",
		bits: [
			{ name: "COUNT", description: "Post Processing Block 4 Final Count", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1MAX", description: "ADC PPB 1 Final Max Result Register", offset: "0x3C", size: "32",
		bits: [
			{ name: "MAX", description: "Post Processing Block 1 Oversampling Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB1MAXI", description: "ADC PPB 1 Final Max Index Result Register", offset: "0x3E", size: "16",
		bits: [
			{ name: "MAXI", description: "Post Processing Block 1 Oversampling Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1MIN", description: "ADC PPB 1 Final Min Result Register", offset: "0x41", size: "32",
		bits: [
			{ name: "MIN", description: "Post Processing Block 1 Oversampling Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB1MINI", description: "ADC PPB 1 Final Min Index Result Register", offset: "0x43", size: "16",
		bits: [
			{ name: "MINI", description: "Post Processing Block 1 Oversampling Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2MAX", description: "ADC PPB 2 Final Max Result Register", offset: "0x46", size: "32",
		bits: [
			{ name: "MAX", description: "Post Processing Block 2 Oversampling Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB2MAXI", description: "ADC PPB 2 Final Max Index Result Register", offset: "0x48", size: "16",
		bits: [
			{ name: "MAXI", description: "Post Processing Block 2 Oversampling Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2MIN", description: "ADC PPB 2 Final Min Result Register", offset: "0x4B", size: "32",
		bits: [
			{ name: "MIN", description: "Post Processing Block 2 Oversampling Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB2MINI", description: "ADC PPB 2 Final Min Index Result Register", offset: "0x4D", size: "16",
		bits: [
			{ name: "MINI", description: "Post Processing Block 2 Oversampling Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3MAX", description: "ADC PPB 3 Final Max Result Register", offset: "0x50", size: "32",
		bits: [
			{ name: "MAX", description: "Post Processing Block 3 Oversampling Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB3MAXI", description: "ADC PPB 3 Final Max Index Result Register", offset: "0x52", size: "16",
		bits: [
			{ name: "MAXI", description: "Post Processing Block 3 Oversampling Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3MIN", description: "ADC PPB 3 Final Min Result Register", offset: "0x55", size: "32",
		bits: [
			{ name: "MIN", description: "Post Processing Block 3 Oversampling Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB3MINI", description: "ADC PPB 3 Final Min Index Result Register", offset: "0x57", size: "16",
		bits: [
			{ name: "MINI", description: "Post Processing Block 3 Oversampling Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4MAX", description: "ADC PPB 4 Final Max Result Register", offset: "0x5A", size: "32",
		bits: [
			{ name: "MAX", description: "Post Processing Block 4 Oversampling Max", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB4MAXI", description: "ADC PPB 4 Final Max Index Result Register", offset: "0x5C", size: "16",
		bits: [
			{ name: "MAXI", description: "Post Processing Block 4 Oversampling Index of Max", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4MIN", description: "ADC PPB 4 Final Min Result Register", offset: "0x5F", size: "32",
		bits: [
			{ name: "MIN", description: "Post Processing Block 4 Oversampling Min", size: "17", shift: "0", mask: "0x1FFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "15", shift: "17", mask: "0xFFFE0000" },
		]
	},
	{ name: "ADCPPB4MINI", description: "ADC PPB 4 Final Min Index Result Register", offset: "0x61", size: "16",
		bits: [
			{ name: "MINI", description: "Post Processing Block 4 Oversampling Index of Min", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "CHECKCONFIG", description: "ADC Check Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "SWSYNC", description: "Result Safe Check SW Force Sync.", size: "1", shift: "6", mask: "0x40" },
			{ name: "CHKEN", description: "Result Safe Check Module Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKSTATUS", description: "ADC Check Status Register", offset: "0x3", size: "16",
		bits: [
			{ name: "RES1READY", description: "Result Safe Check Result 1 Arrived", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2READY", description: "Result Safe Check Result 2 Arrived", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT", description: "Safe Check OOT Flag", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "ADCRESSEL1", description: "ADC Check 1 Select Register", offset: "0x6", size: "16",
		bits: [
			{ name: "ADCSEL", description: "Result Safe Check ADC Select 1", size: "3", shift: "0", mask: "0x7" },
			{ name: "ADCRESULTSEL", description: "Result Safe Check Result Select 1", size: "6", shift: "4", mask: "0x3F0" },
		]
	},
	{ name: "ADCRESSEL2", description: "ADC Check 2 Select Register", offset: "0x9", size: "16",
		bits: [
			{ name: "ADCSEL", description: "Result Safe Check ADC Select 2", size: "3", shift: "0", mask: "0x7" },
			{ name: "ADCRESULTSEL", description: "Result Safe Check Result Select 2", size: "6", shift: "4", mask: "0x3F0" },
		]
	},
	{ name: "TOLERANCE", description: "ADC Check Tolerance Register", offset: "0xC", size: "32",
		bits: [
			{ name: "TOLERANCE", description: "Result Safe Check Tolerance", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "CHECKRESULT1", description: "ADC Check Captured Result 1", offset: "0x12", size: "32",
		bits: [
			{ name: "RESULT", description: "Result Safe Check Captured Result", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "CHECKRESULT2", description: "ADC Check Captured Result 2", offset: "0x14", size: "32",
		bits: [
			{ name: "RESULT", description: "Result Safe Check Captured Result", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "OOTFLG", description: "Checker Out-of-Tolerance Flag Register", offset: "0x0", size: "32",
		bits: [
			{ name: "OOT1", description: "Checker 1 Out-of-Tolerance Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2", description: "Checker 2 Out-of-Tolerance Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3", description: "Checker 3 Out-of-Tolerance Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4", description: "Checker 4 Out-of-Tolerance Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5", description: "Checker 5 Out-of-Tolerance Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6", description: "Checker 6 Out-of-Tolerance Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7", description: "Checker 7 Out-of-Tolerance Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8", description: "Checker 8 Out-of-Tolerance Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9", description: "Checker 9 Out-of-Tolerance Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10", description: "Checker 10 Out-of-Tolerance Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11", description: "Checker 11 Out-of-Tolerance Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12", description: "Checker 12 Out-of-Tolerance Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13", description: "Checker 13 Out-of-Tolerance Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14", description: "Checker 14 Out-of-Tolerance Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15", description: "Checker 15 Out-of-Tolerance Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16", description: "Checker 16 Out-of-Tolerance Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "OOTFLGCLR", description: "Checker Out-of-Tolerance Flag Clear Register", offset: "0x2", size: "32",
		bits: [
			{ name: "OOT1", description: "Checker 1 OOT Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2", description: "Checker 2 OOT Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3", description: "Checker 3 OOT Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4", description: "Checker 4 OOT Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5", description: "Checker 5 OOT Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6", description: "Checker 6 OOT Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7", description: "Checker 7 OOT Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8", description: "Checker 8 OOT Flag Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9", description: "Checker 9 OOT Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10", description: "Checker 10 OOT Flag Clear", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11", description: "Checker 11 OOT Flag Clear", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12", description: "Checker 12 OOT Flag Clear", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13", description: "Checker 13 OOT Flag Clear", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14", description: "Checker 14 OOT Flag Clear", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15", description: "Checker 15 OOT Flag Clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16", description: "Checker 16 OOT Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "RES1OVF", description: "Checker Overflow Result 1 Flag Register", offset: "0x4", size: "32",
		bits: [
			{ name: "RES1OVF1", description: "Checker 1 Result 1 Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2", description: "Checker 2 Result 1 Overflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3", description: "Checker 3 Result 1 Overflow Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4", description: "Checker 4 Result 1 Overflow Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5", description: "Checker 5 Result 5 Overflow Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6", description: "Checker 6 Result 1 Overflow Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7", description: "Checker 7 Result 1 Overflow Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8", description: "Checker 8 Result 1 Overflow Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9", description: "Checker 9 Result 1 Overflow Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10", description: "Checker 10 Result 1 Overflow Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11", description: "Checker 11 Result 1 Overflow Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12", description: "Checker 12 Result 1 Overflow Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13", description: "Checker 13 Result 5 Overflow Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14", description: "Checker 14 Result 1 Overflow Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15", description: "Checker 15 Result 1 Overflow Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16", description: "Checker 16 Result 1 Overflow Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "RES1OVFCLR", description: "Checker Overflow Result 1 Flag Clear Register", offset: "0x6", size: "32",
		bits: [
			{ name: "RES1OVF1", description: "Checker 1 Result 1  OVF Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2", description: "Checker 2 Result 1 OVF Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3", description: "Checker 3 Result 1 OVF Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4", description: "Checker 4 Result 1 OVF Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5", description: "Checker 5 Result 1  OVF Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6", description: "Checker 6 Result 1 OVF Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7", description: "Checker 7 Result 1 OVF Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8", description: "Checker 8 Result 1 OVF Flag Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9", description: "Checker 9 Result 1  OVF Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10", description: "Checker 10 Result 1 OVF Flag Clear", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11", description: "Checker 11 Result 1 OVF Flag Clear", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12", description: "Checker 12 Result 1 OVF Flag Clear", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13", description: "Checker 13 Result 1  OVF Flag Clear", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14", description: "Checker 14 Result 1 OVF Flag Clear", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15", description: "Checker 15 Result 1 OVF Flag Clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16", description: "Checker 16 Result 1 OVF Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "RES2OVF", description: "Checker Overflow Result 2 Flag Register", offset: "0x8", size: "32",
		bits: [
			{ name: "RES2OVF1", description: "Checker 1 Result 2 Overflow Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2", description: "Checker 2 Result 2 Overflow Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3", description: "Checker 3 Result 2 Overflow Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4", description: "Checker 4 Result 2 Overflow Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5", description: "Checker 5 Result 2 Overflow Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6", description: "Checker 6 Result 2 Overflow Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7", description: "Checker 7 Result 2 Overflow Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8", description: "Checker 8 Result 2 Overflow Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9", description: "Checker 9 Result 2 Overflow Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10", description: "Checker 10 Result 2 Overflow Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11", description: "Checker 11 Result 2 Overflow Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12", description: "Checker 12 Result 2 Overflow Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13", description: "Checker 13 Result 2 Overflow Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14", description: "Checker 14 Result 2 Overflow Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15", description: "Checker 15 Result 2 Overflow Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16", description: "Checker 16 Result 2 Overflow Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "RES2OVFCLR", description: "Checker Overflow Result 2 Flag Clear Register", offset: "0xA", size: "32",
		bits: [
			{ name: "RES2OVF1", description: "Checker 1 Result 2  OVF Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2", description: "Checker 2 Result 2 OVF Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3", description: "Checker 3 Result 2 OVF Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4", description: "Checker 4 Result 2 OVF Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5", description: "Checker 5 Result 2  OVF Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6", description: "Checker 6 Result 2 OVF Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7", description: "Checker 7 Result 2 OVF Flag Clear", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8", description: "Checker 8 Result 2 OVF Flag Clear", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9", description: "Checker 9 Result 2  OVF Flag Clear", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10", description: "Checker 10 Result 2 OVF Flag Clear", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11", description: "Checker 11 Result 2 OVF Flag Clear", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12", description: "Checker 12 Result 2 OVF Flag Clear", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13", description: "Checker 13 Result 2  OVF Flag Clear", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14", description: "Checker 14 Result 2 OVF Flag Clear", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15", description: "Checker 15 Result 2 OVF Flag Clear", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16", description: "Checker 16 Result 2 OVF Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKINTFLG", description: "Checker Interrupt Flag Register", offset: "0xC", size: "16",
		bits: [
			{ name: "CHECKINT", description: "ADC Safety Checker Subsystem Interrupt Flag", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CHECKINTFLGCLR", description: "Checker Interrupt Flag Clear Register", offset: "0xF", size: "16",
		bits: [
			{ name: "CHECKINTCLR", description: "ADC Safety Checker Subsystem Interrupt Flag Clear", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CHECKINTSEL1", description: "Checker Interrupt Source Select Register 1", offset: "0x12", size: "32",
		bits: [
			{ name: "RES1OVF1EN", description: "Overflow Enable from Checker 1 Result 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2EN", description: "Overflow Enable from Checker 2 Result 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3EN", description: "Overflow Enable from Checker 3 Result 1", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4EN", description: "Overflow Enable from Checker 4 Result 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5EN", description: "Overflow Enable from Checker 5 Result 1", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6EN", description: "Overflow Enable from Checker 6 Result 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7EN", description: "Overflow Enable from Checker 7 Result 1", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8EN", description: "Overflow Enable from Checker 8 Result 1", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9EN", description: "Overflow Enable from Checker 9 Result 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10EN", description: "Overflow Enable from Checker 10 Result 1", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11EN", description: "Overflow Enable from Checker 11 Result 1", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12EN", description: "Overflow Enable from Checker 12 Result 1", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13EN", description: "Overflow Enable from Checker 13 Result 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14EN", description: "Overflow Enable from Checker 14 Result 1", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15EN", description: "Overflow Enable from Checker 15 Result 1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16EN", description: "Overflow Enable from Checker 16 Result 1", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKINTSEL2", description: "Checker Interrupt Source Select Register 2", offset: "0x14", size: "32",
		bits: [
			{ name: "RES2OVF1EN", description: "Overflow Enable from Checker 1 Result 2", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2EN", description: "Overflow Enable from Checker 2 Result 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3EN", description: "Overflow Enable from Checker 3 Result 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4EN", description: "Overflow Enable from Checker 4 Result 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5EN", description: "Overflow Enable from Checker 5 Result 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6EN", description: "Overflow Enable from Checker 6 Result 2", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7EN", description: "Overflow Enable from Checker 7 Result 2", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8EN", description: "Overflow Enable from Checker 8 Result 2", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9EN", description: "Overflow Enable from Checker 9 Result 2", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10EN", description: "Overflow Enable from Checker 10 Result 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11EN", description: "Overflow Enable from Checker 11 Result 2", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12EN", description: "Overflow Enable from Checker 12 Result 2", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13EN", description: "Overflow Enable from Checker 13 Result 2", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14EN", description: "Overflow Enable from Checker 14 Result 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15EN", description: "Overflow Enable from Checker 15 Result 2", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16EN", description: "Overflow Enable from Checker 16 Result 2", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKINTSEL3", description: "Checker Interrupt Source Select Register 3", offset: "0x16", size: "32",
		bits: [
			{ name: "OOT1EN", description: "Out-of-Tolerance Enable from Checker 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2EN", description: "Out-of-Tolerance Enable from Checker 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3EN", description: "Out-of-Tolerance Enable from Checker 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4EN", description: "Out-of-Tolerance Enable from Checker 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5EN", description: "Out-of-Tolerance Enable from Checker 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6EN", description: "Out-of-Tolerance Enable from Checker 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7EN", description: "Out-of-Tolerance Enable from Checker 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8EN", description: "Out-of-Tolerance Enable from Checker 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9EN", description: "Out-of-Tolerance Enable from Checker 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10EN", description: "Out-of-Tolerance Enable from Checker 10", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11EN", description: "Out-of-Tolerance Enable from Checker 11", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12EN", description: "Out-of-Tolerance Enable from Checker 12", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13EN", description: "Out-of-Tolerance Enable from Checker 13", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14EN", description: "Out-of-Tolerance Enable from Checker 14", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15EN", description: "Out-of-Tolerance Enable from Checker 15", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16EN", description: "Out-of-Tolerance Enable from Checker 16", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT1SEL1", description: "Checker X-Bar EVT1 Source Select Register 1", offset: "0x1C", size: "32",
		bits: [
			{ name: "RES1OVF1EN", description: "Overflow Enable from Checker 1 Result 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2EN", description: "Overflow Enable from Checker 2 Result 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3EN", description: "Overflow Enable from Checker 3 Result 1", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4EN", description: "Overflow Enable from Checker 4 Result 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5EN", description: "Overflow Enable from Checker 5 Result 1", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6EN", description: "Overflow Enable from Checker 6 Result 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7EN", description: "Overflow Enable from Checker 7 Result 1", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8EN", description: "Overflow Enable from Checker 8 Result 1", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9EN", description: "Overflow Enable from Checker 9 Result 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10EN", description: "Overflow Enable from Checker 10 Result 1", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11EN", description: "Overflow Enable from Checker 11 Result 1", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12EN", description: "Overflow Enable from Checker 12 Result 1", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13EN", description: "Overflow Enable from Checker 13 Result 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14EN", description: "Overflow Enable from Checker 14 Result 1", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15EN", description: "Overflow Enable from Checker 15 Result 1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16EN", description: "Overflow Enable from Checker 16 Result 1", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT1SEL2", description: "Checker X-Bar EVT1 Source Select Register 2", offset: "0x1E", size: "32",
		bits: [
			{ name: "RES2OVF1EN", description: "Overflow Enable from Checker 1 Result 2", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2EN", description: "Overflow Enable from Checker 2 Result 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3EN", description: "Overflow Enable from Checker 3 Result 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4EN", description: "Overflow Enable from Checker 4 Result 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5EN", description: "Overflow Enable from Checker 5 Result 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6EN", description: "Overflow Enable from Checker 6 Result 2", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7EN", description: "Overflow Enable from Checker 7 Result 2", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8EN", description: "Overflow Enable from Checker 8 Result 2", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9EN", description: "Overflow Enable from Checker 9 Result 2", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10EN", description: "Overflow Enable from Checker 10 Result 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11EN", description: "Overflow Enable from Checker 11 Result 2", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12EN", description: "Overflow Enable from Checker 12 Result 2", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13EN", description: "Overflow Enable from Checker 13 Result 2", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14EN", description: "Overflow Enable from Checker 14 Result 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15EN", description: "Overflow Enable from Checker 15 Result 2", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16EN", description: "Overflow Enable from Checker 16 Result 2", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT1SEL3", description: "Checker X-Bar EVT1 Source Select Register 3", offset: "0x20", size: "32",
		bits: [
			{ name: "OOT1EN", description: "Out-of-Tolerance Enable from Checker 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2EN", description: "Out-of-Tolerance Enable from Checker 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3EN", description: "Out-of-Tolerance Enable from Checker 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4EN", description: "Out-of-Tolerance Enable from Checker 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5EN", description: "Out-of-Tolerance Enable from Checker 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6EN", description: "Out-of-Tolerance Enable from Checker 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7EN", description: "Out-of-Tolerance Enable from Checker 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8EN", description: "Out-of-Tolerance Enable from Checker 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9EN", description: "Out-of-Tolerance Enable from Checker 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10EN", description: "Out-of-Tolerance Enable from Checker 10", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11EN", description: "Out-of-Tolerance Enable from Checker 11", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12EN", description: "Out-of-Tolerance Enable from Checker 12", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13EN", description: "Out-of-Tolerance Enable from Checker 13", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14EN", description: "Out-of-Tolerance Enable from Checker 14", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15EN", description: "Out-of-Tolerance Enable from Checker 15", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16EN", description: "Out-of-Tolerance Enable from Checker 16", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT2SEL1", description: "Checker X-Bar EVT2 Source Select Register 1", offset: "0x26", size: "32",
		bits: [
			{ name: "RES1OVF1EN", description: "Overflow Enable from Checker 1 Result 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2EN", description: "Overflow Enable from Checker 2 Result 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3EN", description: "Overflow Enable from Checker 3 Result 1", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4EN", description: "Overflow Enable from Checker 4 Result 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5EN", description: "Overflow Enable from Checker 5 Result 1", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6EN", description: "Overflow Enable from Checker 6 Result 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7EN", description: "Overflow Enable from Checker 7 Result 1", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8EN", description: "Overflow Enable from Checker 8 Result 1", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9EN", description: "Overflow Enable from Checker 9 Result 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10EN", description: "Overflow Enable from Checker 10 Result 1", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11EN", description: "Overflow Enable from Checker 11 Result 1", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12EN", description: "Overflow Enable from Checker 12 Result 1", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13EN", description: "Overflow Enable from Checker 13 Result 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14EN", description: "Overflow Enable from Checker 14 Result 1", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15EN", description: "Overflow Enable from Checker 15 Result 1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16EN", description: "Overflow Enable from Checker 16 Result 1", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT2SEL2", description: "Checker X-Bar EVT2 Source Select Register 2", offset: "0x28", size: "32",
		bits: [
			{ name: "RES2OVF1EN", description: "Overflow Enable from Checker 1 Result 2", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2EN", description: "Overflow Enable from Checker 2 Result 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3EN", description: "Overflow Enable from Checker 3 Result 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4EN", description: "Overflow Enable from Checker 4 Result 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5EN", description: "Overflow Enable from Checker 5 Result 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6EN", description: "Overflow Enable from Checker 6 Result 2", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7EN", description: "Overflow Enable from Checker 7 Result 2", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8EN", description: "Overflow Enable from Checker 8 Result 2", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9EN", description: "Overflow Enable from Checker 9 Result 2", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10EN", description: "Overflow Enable from Checker 10 Result 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11EN", description: "Overflow Enable from Checker 11 Result 2", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12EN", description: "Overflow Enable from Checker 12 Result 2", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13EN", description: "Overflow Enable from Checker 13 Result 2", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14EN", description: "Overflow Enable from Checker 14 Result 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15EN", description: "Overflow Enable from Checker 15 Result 2", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16EN", description: "Overflow Enable from Checker 16 Result 2", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT2SEL3", description: "Checker X-Bar EVT2 Source Select Register 3", offset: "0x2A", size: "32",
		bits: [
			{ name: "OOT1EN", description: "Out-of-Tolerance Enable from Checker 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2EN", description: "Out-of-Tolerance Enable from Checker 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3EN", description: "Out-of-Tolerance Enable from Checker 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4EN", description: "Out-of-Tolerance Enable from Checker 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5EN", description: "Out-of-Tolerance Enable from Checker 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6EN", description: "Out-of-Tolerance Enable from Checker 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7EN", description: "Out-of-Tolerance Enable from Checker 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8EN", description: "Out-of-Tolerance Enable from Checker 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9EN", description: "Out-of-Tolerance Enable from Checker 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10EN", description: "Out-of-Tolerance Enable from Checker 10", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11EN", description: "Out-of-Tolerance Enable from Checker 11", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12EN", description: "Out-of-Tolerance Enable from Checker 12", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13EN", description: "Out-of-Tolerance Enable from Checker 13", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14EN", description: "Out-of-Tolerance Enable from Checker 14", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15EN", description: "Out-of-Tolerance Enable from Checker 15", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16EN", description: "Out-of-Tolerance Enable from Checker 16", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT3SEL1", description: "Checker X-Bar EVT3 Source Select Register 1", offset: "0x30", size: "32",
		bits: [
			{ name: "RES1OVF1EN", description: "Overflow Enable from Checker 1 Result 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2EN", description: "Overflow Enable from Checker 2 Result 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3EN", description: "Overflow Enable from Checker 3 Result 1", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4EN", description: "Overflow Enable from Checker 4 Result 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5EN", description: "Overflow Enable from Checker 5 Result 1", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6EN", description: "Overflow Enable from Checker 6 Result 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7EN", description: "Overflow Enable from Checker 7 Result 1", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8EN", description: "Overflow Enable from Checker 8 Result 1", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9EN", description: "Overflow Enable from Checker 9 Result 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10EN", description: "Overflow Enable from Checker 10 Result 1", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11EN", description: "Overflow Enable from Checker 11 Result 1", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12EN", description: "Overflow Enable from Checker 12 Result 1", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13EN", description: "Overflow Enable from Checker 13 Result 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14EN", description: "Overflow Enable from Checker 14 Result 1", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15EN", description: "Overflow Enable from Checker 15 Result 1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16EN", description: "Overflow Enable from Checker 16 Result 1", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT3SEL2", description: "Checker X-Bar EVT3 Source Select Register 2", offset: "0x32", size: "32",
		bits: [
			{ name: "RES2OVF1EN", description: "Overflow Enable from Checker 1 Result 2", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2EN", description: "Overflow Enable from Checker 2 Result 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3EN", description: "Overflow Enable from Checker 3 Result 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4EN", description: "Overflow Enable from Checker 4 Result 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5EN", description: "Overflow Enable from Checker 5 Result 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6EN", description: "Overflow Enable from Checker 6 Result 2", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7EN", description: "Overflow Enable from Checker 7 Result 2", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8EN", description: "Overflow Enable from Checker 8 Result 2", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9EN", description: "Overflow Enable from Checker 9 Result 2", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10EN", description: "Overflow Enable from Checker 10 Result 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11EN", description: "Overflow Enable from Checker 11 Result 2", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12EN", description: "Overflow Enable from Checker 12 Result 2", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13EN", description: "Overflow Enable from Checker 13 Result 2", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14EN", description: "Overflow Enable from Checker 14 Result 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15EN", description: "Overflow Enable from Checker 15 Result 2", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16EN", description: "Overflow Enable from Checker 16 Result 2", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT3SEL3", description: "Checker X-Bar EVT3 Source Select Register 3", offset: "0x34", size: "32",
		bits: [
			{ name: "OOT1EN", description: "Out-of-Tolerance Enable from Checker 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2EN", description: "Out-of-Tolerance Enable from Checker 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3EN", description: "Out-of-Tolerance Enable from Checker 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4EN", description: "Out-of-Tolerance Enable from Checker 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5EN", description: "Out-of-Tolerance Enable from Checker 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6EN", description: "Out-of-Tolerance Enable from Checker 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7EN", description: "Out-of-Tolerance Enable from Checker 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8EN", description: "Out-of-Tolerance Enable from Checker 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9EN", description: "Out-of-Tolerance Enable from Checker 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10EN", description: "Out-of-Tolerance Enable from Checker 10", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11EN", description: "Out-of-Tolerance Enable from Checker 11", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12EN", description: "Out-of-Tolerance Enable from Checker 12", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13EN", description: "Out-of-Tolerance Enable from Checker 13", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14EN", description: "Out-of-Tolerance Enable from Checker 14", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15EN", description: "Out-of-Tolerance Enable from Checker 15", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16EN", description: "Out-of-Tolerance Enable from Checker 16", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT4SEL1", description: "Checker X-Bar EVT4 Source Select Register 1", offset: "0x3A", size: "32",
		bits: [
			{ name: "RES1OVF1EN", description: "Overflow Enable from Checker 1 Result 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES1OVF2EN", description: "Overflow Enable from Checker 2 Result 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES1OVF3EN", description: "Overflow Enable from Checker 3 Result 1", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES1OVF4EN", description: "Overflow Enable from Checker 4 Result 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES1OVF5EN", description: "Overflow Enable from Checker 5 Result 1", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES1OVF6EN", description: "Overflow Enable from Checker 6 Result 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES1OVF7EN", description: "Overflow Enable from Checker 7 Result 1", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES1OVF8EN", description: "Overflow Enable from Checker 8 Result 1", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES1OVF9EN", description: "Overflow Enable from Checker 9 Result 1", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES1OVF10EN", description: "Overflow Enable from Checker 10 Result 1", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES1OVF11EN", description: "Overflow Enable from Checker 11 Result 1", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES1OVF12EN", description: "Overflow Enable from Checker 12 Result 1", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES1OVF13EN", description: "Overflow Enable from Checker 13 Result 1", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES1OVF14EN", description: "Overflow Enable from Checker 14 Result 1", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES1OVF15EN", description: "Overflow Enable from Checker 15 Result 1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES1OVF16EN", description: "Overflow Enable from Checker 16 Result 1", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT4SEL2", description: "Checker X-Bar EVT4 Source Select Register 2", offset: "0x3C", size: "32",
		bits: [
			{ name: "RES2OVF1EN", description: "Overflow Enable from Checker 1 Result 2", size: "1", shift: "0", mask: "0x1" },
			{ name: "RES2OVF2EN", description: "Overflow Enable from Checker 2 Result 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "RES2OVF3EN", description: "Overflow Enable from Checker 3 Result 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RES2OVF4EN", description: "Overflow Enable from Checker 4 Result 2", size: "1", shift: "3", mask: "0x8" },
			{ name: "RES2OVF5EN", description: "Overflow Enable from Checker 5 Result 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "RES2OVF6EN", description: "Overflow Enable from Checker 6 Result 2", size: "1", shift: "5", mask: "0x20" },
			{ name: "RES2OVF7EN", description: "Overflow Enable from Checker 7 Result 2", size: "1", shift: "6", mask: "0x40" },
			{ name: "RES2OVF8EN", description: "Overflow Enable from Checker 8 Result 2", size: "1", shift: "7", mask: "0x80" },
			{ name: "RES2OVF9EN", description: "Overflow Enable from Checker 9 Result 2", size: "1", shift: "8", mask: "0x100" },
			{ name: "RES2OVF10EN", description: "Overflow Enable from Checker 10 Result 2", size: "1", shift: "9", mask: "0x200" },
			{ name: "RES2OVF11EN", description: "Overflow Enable from Checker 11 Result 2", size: "1", shift: "10", mask: "0x400" },
			{ name: "RES2OVF12EN", description: "Overflow Enable from Checker 12 Result 2", size: "1", shift: "11", mask: "0x800" },
			{ name: "RES2OVF13EN", description: "Overflow Enable from Checker 13 Result 2", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RES2OVF14EN", description: "Overflow Enable from Checker 14 Result 2", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RES2OVF15EN", description: "Overflow Enable from Checker 15 Result 2", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RES2OVF16EN", description: "Overflow Enable from Checker 16 Result 2", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CHECKEVT4SEL3", description: "Checker X-Bar EVT4 Source Select Register 3", offset: "0x3E", size: "32",
		bits: [
			{ name: "OOT1EN", description: "Out-of-Tolerance Enable from Checker 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "OOT2EN", description: "Out-of-Tolerance Enable from Checker 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "OOT3EN", description: "Out-of-Tolerance Enable from Checker 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "OOT4EN", description: "Out-of-Tolerance Enable from Checker 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "OOT5EN", description: "Out-of-Tolerance Enable from Checker 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "OOT6EN", description: "Out-of-Tolerance Enable from Checker 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "OOT7EN", description: "Out-of-Tolerance Enable from Checker 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "OOT8EN", description: "Out-of-Tolerance Enable from Checker 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "OOT9EN", description: "Out-of-Tolerance Enable from Checker 9", size: "1", shift: "8", mask: "0x100" },
			{ name: "OOT10EN", description: "Out-of-Tolerance Enable from Checker 10", size: "1", shift: "9", mask: "0x200" },
			{ name: "OOT11EN", description: "Out-of-Tolerance Enable from Checker 11", size: "1", shift: "10", mask: "0x400" },
			{ name: "OOT12EN", description: "Out-of-Tolerance Enable from Checker 12", size: "1", shift: "11", mask: "0x800" },
			{ name: "OOT13EN", description: "Out-of-Tolerance Enable from Checker 13", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OOT14EN", description: "Out-of-Tolerance Enable from Checker 14", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OOT15EN", description: "Out-of-Tolerance Enable from Checker 15", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OOT16EN", description: "Out-of-Tolerance Enable from Checker 16", size: "1", shift: "15", mask: "0x8000" },
		]
	},
];
module.exports = {
	adcRegisters: ADC_REGISTERS,
}
