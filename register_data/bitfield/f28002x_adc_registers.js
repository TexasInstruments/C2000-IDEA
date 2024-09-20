let ADC_REGISTERS = [
	{ name: "ADCCTL1", description: "ADC Control 1 Register", offset: "0x0", size: "16",
		bits: [
			{ name: "INTPULSEPOS", description: "ADC Interrupt Pulse Position", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCPWDNZ", description: "ADC Power Down", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCBSYCHN", description: "ADC Busy Channel", size: "4", shift: "8", mask: "0xF00" },
			{ name: "ADCBSY", description: "ADC Busy", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "ADCCTL2", description: "ADC Control 2 Register", offset: "0x1", size: "16",
		bits: [
			{ name: "PRESCALE", description: "ADC Clock Prescaler", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "ADCBURSTCTL", description: "ADC Burst Control Register", offset: "0x2", size: "16",
		bits: [
			{ name: "BURSTTRIGSEL", description: "SOC Burst Trigger Source Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "BURSTSIZE", description: "SOC Burst Size Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "BURSTEN", description: "SOC Burst Mode Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCINTFLG", description: "ADC Interrupt Flag Register", offset: "0x3", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTFLGCLR", description: "ADC Interrupt Flag Clear Register", offset: "0x4", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Flag Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTOVF", description: "ADC Interrupt Overflow Register", offset: "0x5", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Overflow Flags", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Overflow Flags", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Overflow Flags", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Overflow Flags", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTOVFCLR", description: "ADC Interrupt Overflow Clear Register", offset: "0x6", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt 1 Overflow Clear Bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt 2 Overflow Clear Bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt 3 Overflow Clear Bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt 4 Overflow Clear Bits", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ADCINTSEL1N2", description: "ADC Interrupt 1 and 2 Selection Register", offset: "0x7", size: "16",
		bits: [
			{ name: "INT1SEL", description: "ADCINT1 EOC Source Select", size: "4", shift: "0", mask: "0xF" },
			{ name: "INT1E", description: "ADCINT1 Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT1CONT", description: "ADCINT1 Continue to Interrupt Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT2SEL", description: "ADCINT2 EOC Source Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "INT2E", description: "ADCINT2 Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT2CONT", description: "ADCINT2 Continue to Interrupt Mode", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCINTSEL3N4", description: "ADC Interrupt 3 and 4 Selection Register", offset: "0x8", size: "16",
		bits: [
			{ name: "INT3SEL", description: "ADCINT3 EOC Source Select", size: "4", shift: "0", mask: "0xF" },
			{ name: "INT3E", description: "ADCINT3 Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT3CONT", description: "ADCINT3 Continue to Interrupt Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT4SEL", description: "ADCINT4 EOC Source Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "INT4E", description: "ADCINT4 Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT4CONT", description: "ADCINT4 Continue to Interrupt Mode", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCSOCPRICTL", description: "ADC SOC Priority Control Register", offset: "0x9", size: "16",
		bits: [
			{ name: "SOCPRIORITY", description: "SOC Priority", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RRPOINTER", description: "Round Robin Pointer", size: "5", shift: "5", mask: "0x3E0" },
		]
	},
	{ name: "ADCINTSOCSEL1", description: "ADC Interrupt SOC Selection 1 Register", offset: "0xA", size: "16",
		bits: [
			{ name: "SOC0", description: "SOC0 ADC Interrupt Trigger Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC1", description: "SOC1 ADC Interrupt Trigger Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC2", description: "SOC2 ADC Interrupt Trigger Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC3", description: "SOC3 ADC Interrupt Trigger Select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC4", description: "SOC4 ADC Interrupt Trigger Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC5", description: "SOC5 ADC Interrupt Trigger Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC6", description: "SOC6 ADC Interrupt Trigger Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC7", description: "SOC7 ADC Interrupt Trigger Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCINTSOCSEL2", description: "ADC Interrupt SOC Selection 2 Register", offset: "0xB", size: "16",
		bits: [
			{ name: "SOC8", description: "SOC8 ADC Interrupt Trigger Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC9", description: "SOC9 ADC Interrupt Trigger Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC10", description: "SOC10 ADC Interrupt Trigger Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC11", description: "SOC11 ADC Interrupt Trigger Select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC12", description: "SOC12 ADC Interrupt Trigger Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC13", description: "SOC13 ADC Interrupt Trigger Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC14", description: "SOC14 ADC Interrupt Trigger Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC15", description: "SOC15 ADC Interrupt Trigger Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCSOCFLG1", description: "ADC SOC Flag 1 Register", offset: "0xC", size: "16",
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
		]
	},
	{ name: "ADCSOCFRC1", description: "ADC SOC Force 1 Register", offset: "0xD", size: "16",
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
		]
	},
	{ name: "ADCSOCOVF1", description: "ADC SOC Overflow 1 Register", offset: "0xE", size: "16",
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
		]
	},
	{ name: "ADCSOCOVFCLR1", description: "ADC SOC Overflow Clear 1 Register", offset: "0xF", size: "16",
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
		]
	},
	{ name: "ADCSOC0CTL", description: "ADC SOC0 Control Register", offset: "0x10", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC0 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC0 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC0 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC1CTL", description: "ADC SOC1 Control Register", offset: "0x12", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC1 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC1 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC1 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC2CTL", description: "ADC SOC2 Control Register", offset: "0x14", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC2 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC2 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC2 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC3CTL", description: "ADC SOC3 Control Register", offset: "0x16", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC3 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC3 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC3 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC4CTL", description: "ADC SOC4 Control Register", offset: "0x18", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC4 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC4 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC4 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC5CTL", description: "ADC SOC5 Control Register", offset: "0x1A", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC5 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC5 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC5 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC6CTL", description: "ADC SOC6 Control Register", offset: "0x1C", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC6 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC6 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC6 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC7CTL", description: "ADC SOC7 Control Register", offset: "0x1E", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC7 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC7 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC7 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC8CTL", description: "ADC SOC8 Control Register", offset: "0x20", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC8 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC8 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC8 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC9CTL", description: "ADC SOC9 Control Register", offset: "0x22", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC9 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC9 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC9 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC10CTL", description: "ADC SOC10 Control Register", offset: "0x24", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC10 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC10 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC10 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC11CTL", description: "ADC SOC11 Control Register", offset: "0x26", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC11 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC11 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC11 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC12CTL", description: "ADC SOC12 Control Register", offset: "0x28", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC12 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC12 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC12 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC13CTL", description: "ADC SOC13 Control Register", offset: "0x2A", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC13 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC13 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC13 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC14CTL", description: "ADC SOC14 Control Register", offset: "0x2C", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC14 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC14 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC14 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCSOC15CTL", description: "ADC SOC15 Control Register", offset: "0x2E", size: "32",
		bits: [
			{ name: "ACQPS", description: "SOC15 Acquisition Prescale", size: "9", shift: "0", mask: "0x1FF" },
			{ name: "CHSEL", description: "SOC15 Channel Select", size: "4", shift: "15", mask: "0x78000" },
			{ name: "TRIGSEL", description: "SOC15 Trigger Source Select", size: "5", shift: "20", mask: "0x1F00000" },
		]
	},
	{ name: "ADCEVTSTAT", description: "ADC Event Status Register", offset: "0x30", size: "16",
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
	{ name: "ADCEVTCLR", description: "ADC Event Clear Register", offset: "0x32", size: "16",
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
	{ name: "ADCEVTSEL", description: "ADC Event Selection Register", offset: "0x34", size: "16",
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
	{ name: "ADCEVTINTSEL", description: "ADC Event Interrupt Selection Register", offset: "0x36", size: "16",
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
	{ name: "ADCOSDETECT", description: "ADC Open and Shorts Detect Register", offset: "0x38", size: "16",
		bits: [
			{ name: "DETECTCFG", description: "ADC Opens and Shorts Detect Configuration", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "ADCCOUNTER", description: "ADC Counter Register", offset: "0x39", size: "16",
		bits: [
			{ name: "FREECOUNT", description: "ADC Free Running Counter Value", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCREV", description: "ADC Revision Register", offset: "0x3A", size: "16",
		bits: [
			{ name: "TYPE", description: "ADC Type", size: "8", shift: "0", mask: "0xFF" },
			{ name: "REV", description: "ADC Revision", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ADCOFFTRIM", description: "ADC Offset Trim Register", offset: "0x3B", size: "16",
		bits: [
			{ name: "OFFTRIM", description: "ADC Offset Trim", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "ADCPPB1CONFIG", description: "ADC PPB1 Config Register", offset: "0x40", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 1 Configuration", size: "4", shift: "0", mask: "0xF" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 1 Two's Complement Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ADCPPB1STAMP", description: "ADC PPB1 Sample Delay Time Stamp Register", offset: "0x41", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 1 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB1OFFCAL", description: "ADC PPB1 Offset Calibration Register", offset: "0x42", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB1OFFREF", description: "ADC PPB1 Offset Reference Register", offset: "0x43", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB1TRIPHI", description: "ADC PPB1 Trip High Register", offset: "0x44", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 1 Trip High Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "HSIGN", description: "High Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "ADCPPB1TRIPLO", description: "ADC PPB1 Trip Low/Trigger Time Stamp Register", offset: "0x46", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 1 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 1 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPB2CONFIG", description: "ADC PPB2 Config Register", offset: "0x48", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 2 Configuration", size: "4", shift: "0", mask: "0xF" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 2 Two's Complement Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ADCPPB2STAMP", description: "ADC PPB2 Sample Delay Time Stamp Register", offset: "0x49", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 2 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB2OFFCAL", description: "ADC PPB2 Offset Calibration Register", offset: "0x4A", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB2OFFREF", description: "ADC PPB2 Offset Reference Register", offset: "0x4B", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB2TRIPHI", description: "ADC PPB2 Trip High Register", offset: "0x4C", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 2 Trip High Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "HSIGN", description: "High Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "ADCPPB2TRIPLO", description: "ADC PPB2 Trip Low/Trigger Time Stamp Register", offset: "0x4E", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 2 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 2 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPB3CONFIG", description: "ADC PPB3 Config Register", offset: "0x50", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 3 Configuration", size: "4", shift: "0", mask: "0xF" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 3 Two's Complement Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ADCPPB3STAMP", description: "ADC PPB3 Sample Delay Time Stamp Register", offset: "0x51", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 3 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB3OFFCAL", description: "ADC PPB3 Offset Calibration Register", offset: "0x52", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB3OFFREF", description: "ADC PPB3 Offset Reference Register", offset: "0x53", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB3TRIPHI", description: "ADC PPB3 Trip High Register", offset: "0x54", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 3 Trip High Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "HSIGN", description: "High Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "ADCPPB3TRIPLO", description: "ADC PPB3 Trip Low/Trigger Time Stamp Register", offset: "0x56", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 3 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 3 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCPPB4CONFIG", description: "ADC PPB4 Config Register", offset: "0x58", size: "16",
		bits: [
			{ name: "CONFIG", description: "ADC Post Processing Block 4 Configuration", size: "4", shift: "0", mask: "0xF" },
			{ name: "TWOSCOMPEN", description: "ADC Post Processing Block 4 Two's Complement Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBCEN", description: "Cycle By Cycle Enable", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ADCPPB4STAMP", description: "ADC PPB4 Sample Delay Time Stamp Register", offset: "0x59", size: "16",
		bits: [
			{ name: "DLYSTAMP", description: "ADC Post Processing Block 4 Delay Time Stamp", size: "12", shift: "0", mask: "0xFFF" },
		]
	},
	{ name: "ADCPPB4OFFCAL", description: "ADC PPB4 Offset Calibration Register", offset: "0x5A", size: "16",
		bits: [
			{ name: "OFFCAL", description: "ADC Post Processing Block Offset Correction", size: "10", shift: "0", mask: "0x3FF" },
		]
	},
	{ name: "ADCPPB4OFFREF", description: "ADC PPB4 Offset Reference Register", offset: "0x5B", size: "16",
		bits: [
		]
	},
	{ name: "ADCPPB4TRIPHI", description: "ADC PPB4 Trip High Register", offset: "0x5C", size: "32",
		bits: [
			{ name: "LIMITHI", description: "ADC Post Processing Block 4 Trip High Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "HSIGN", description: "High Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "ADCPPB4TRIPLO", description: "ADC PPB4 Trip Low/Trigger Time Stamp Register", offset: "0x5E", size: "32",
		bits: [
			{ name: "LIMITLO", description: "ADC Post Processing Block 4 Trip Low Limit", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LSIGN", description: "Low Limit Sign Bit", size: "1", shift: "16", mask: "0x10000" },
			{ name: "REQSTAMP", description: "ADC Post Processing Block 4 Request Time Stamp", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "ADCINTCYCLE", description: "ADC Early Interrupt Generation Cycle", offset: "0x6F", size: "16",
		bits: [
		]
	},
	{ name: "ADCINLTRIM2", description: "ADC Linearity Trim 2 Register", offset: "0x72", size: "32",
		bits: [
		]
	},
	{ name: "ADCINLTRIM3", description: "ADC Linearity Trim 3 Register", offset: "0x74", size: "32",
		bits: [
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
	{ name: "ADCPPB1RESULT", description: "ADC Post Processing Block 1 Result Register", offset: "0x10", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB2RESULT", description: "ADC Post Processing Block 2 Result Register", offset: "0x12", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB3RESULT", description: "ADC Post Processing Block 3 Result Register", offset: "0x14", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "ADCPPB4RESULT", description: "ADC Post Processing Block 4 Result Register", offset: "0x16", size: "32",
		bits: [
			{ name: "PPBRESULT", description: "ADC Post Processing Block Result", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGN", description: "Sign Extended Bits", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
];
module.exports = {
	adcRegisters: ADC_REGISTERS,
}
