let ADC_REGISTERS = [
	{ name: "ADCCTL1", description: "ADC Control 1", offset: "0x0", size: "16",
		bits: [
			{ name: "TEMPCONV", description: "Temperature sensor connection", size: "1", shift: "0", mask: "0x1" },
			{ name: "VREFLOCONV", description: "VSSA connection", size: "1", shift: "1", mask: "0x2" },
			{ name: "INTPULSEPOS", description: "INT pulse generation control", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCREFSEL", description: "Internal/external reference select", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCREFPWD", description: "Reference buffers powerdown", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCBGPWD", description: "ADC bandgap powerdown", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCPWDN", description: "ADC powerdown", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCBSYCHN", description: "ADC busy on a channel", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "ADCBSY", description: "ADC busy signal", size: "1", shift: "13", mask: "0x2000" },
			{ name: "ADCENABLE", description: "ADC enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RESET", description: "ADC master reset", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCCTL2", description: "", offset: "0x1", size: "16",
		bits: [
			{ name: "CLKDIV2EN", description: "ADC input clock /2 enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCNONOVERLAP", description: "ADCNONOVERLAP Control bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "ADCINTFLG", description: "ADC Int. Flag", offset: "0x4", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt Flag 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt Flag 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt Flag 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt Flag 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCINT5", description: "ADC Interrupt Flag 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCINT6", description: "ADC Interrupt Flag 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCINT7", description: "ADC Interrupt Flag 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCINT8", description: "ADC Interrupt Flag 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCINT9", description: "ADC Interrupt Flag 9", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCINTFLGCLR", description: "ADC Int. Flag Clear", offset: "0x5", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt Flag 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt Flag 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt Flag 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt Flag 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCINT5", description: "ADC Interrupt Flag 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCINT6", description: "ADC Interrupt Flag 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCINT7", description: "ADC Interrupt Flag 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCINT8", description: "ADC Interrupt Flag 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCINT9", description: "ADC Interrupt Flag 9", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCINTOVF", description: "ADC Int. Overflow", offset: "0x6", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt Flag 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt Flag 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt Flag 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt Flag 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCINT5", description: "ADC Interrupt Flag 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCINT6", description: "ADC Interrupt Flag 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCINT7", description: "ADC Interrupt Flag 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCINT8", description: "ADC Interrupt Flag 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCINT9", description: "ADC Interrupt Flag 9", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "ADCINTOVFCLR", description: "ADC Int. Overflow Clear", offset: "0x7", size: "16",
		bits: [
			{ name: "ADCINT1", description: "ADC Interrupt Flag 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINT2", description: "ADC Interrupt Flag 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINT3", description: "ADC Interrupt Flag 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINT4", description: "ADC Interrupt Flag 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCINT5", description: "ADC Interrupt Flag 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCINT6", description: "ADC Interrupt Flag 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCINT7", description: "ADC Interrupt Flag 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCINT8", description: "ADC Interrupt Flag 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "ADCINT9", description: "ADC Interrupt Flag 9", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "INTSEL1N2", description: "ADC Int. 1 and 2 Selection", offset: "0x8", size: "16",
		bits: [
			{ name: "INT1SEL", description: "INTx EOC Source Select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "INT1E", description: "INTx Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT1CONT", description: "INTx Continuous Mode Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT2SEL", description: "INTy EOC Source Select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "INT2E", description: "INTy Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT2CONT", description: "INTy Continuous Mode Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "INTSEL3N4", description: "ADC Int. 3 and 4 Selection", offset: "0x9", size: "16",
		bits: [
			{ name: "INT3SEL", description: "INTx EOC Source Select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "INT3E", description: "INTx Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT3CONT", description: "INTx Continuous Mode Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT4SEL", description: "INTy EOC Source Select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "INT4E", description: "INTy Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT4CONT", description: "INTy Continuous Mode Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "INTSEL5N6", description: "ADC Int. 5 and 6 Selection", offset: "0xA", size: "16",
		bits: [
			{ name: "INT5SEL", description: "INTx EOC Source Select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "INT5E", description: "INTx Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT5CONT", description: "INTx Continuous Mode Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT6SEL", description: "INTy EOC Source Select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "INT6E", description: "INTy Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT6CONT", description: "INTy Continuous Mode Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "INTSEL7N8", description: "ADC Int. 7 and 8 Selection", offset: "0xB", size: "16",
		bits: [
			{ name: "INT7SEL", description: "INTx EOC Source Select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "INT7E", description: "INTx Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT7CONT", description: "INTx Continuous Mode Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT8SEL", description: "INTy EOC Source Select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "INT8E", description: "INTy Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT8CONT", description: "INTy Continuous Mode Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "INTSEL9N10", description: "ADC Int. 9 and 10 Selection", offset: "0xC", size: "16",
		bits: [
			{ name: "INT9SEL", description: "INTx EOC Source Select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "INT9E", description: "INTx Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "INT9CONT", description: "INTx Continuous Mode Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "INT10SEL", description: "INTy EOC Source Select", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "INT10E", description: "INTy Interrupt Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INT10CONT", description: "INTy Continuous Mode Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "SOCPRICTL", description: "ADC SOC Priority Control", offset: "0x10", size: "16",
		bits: [
			{ name: "SOCPRIORITY", description: "Start-of-conversion Priority", size: "5", shift: "0", mask: "0x1F" },
			{ name: "RRPOINTER", description: "Round Robin Pointer", size: "6", shift: "5", mask: "0x7E0" },
			{ name: "ONESHOT", description: "One Shot Mode Enabled -", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCSAMPLEMODE", description: "ADC Sampling Mode", offset: "0x12", size: "16",
		bits: [
			{ name: "SIMULEN0", description: "SOC0 Simultaneous Sampling Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "SIMULEN2", description: "SOC2 Simultaneous Sampling Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SIMULEN4", description: "SOC4 Simultaneous Sampling Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "SIMULEN6", description: "SOC6 Simultaneous Sampling Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "SIMULEN8", description: "SOC8 Simultaneous Sampling Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "SIMULEN10", description: "SOC10 Simultaneous Sampling Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "SIMULEN12", description: "SOC12 Simultaneous Sampling Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "SIMULEN14", description: "SOC14 Simultaneous Sampling Enable", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCINTSOCSEL1", description: "ADC Int. SOC Selection 1", offset: "0x14", size: "16",
		bits: [
			{ name: "SOC0", description: "ADCINT Start-of-conversion Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC1", description: "ADCINT Start-of-conversion Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC2", description: "ADCINT Start-of-conversion Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC3", description: "ADCINT Start-of-conversion Select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC4", description: "ADCINT Start-of-conversion Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC5", description: "ADCINT Start-of-conversion Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC6", description: "ADCINT Start-of-conversion Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC7", description: "ADCINT Start-of-conversion Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCINTSOCSEL2", description: "ADC Int. SOC Selection 2", offset: "0x15", size: "16",
		bits: [
			{ name: "SOC8", description: "ADCINT Start-of-conversion Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "SOC9", description: "ADCINT Start-of-conversion Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOC10", description: "ADCINT Start-of-conversion Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SOC11", description: "ADCINT Start-of-conversion Select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SOC12", description: "ADCINT Start-of-conversion Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOC13", description: "ADCINT Start-of-conversion Select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOC14", description: "ADCINT Start-of-conversion Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOC15", description: "ADCINT Start-of-conversion Select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCSOCFLG1", description: "ADC SOC Flag 1", offset: "0x18", size: "16",
		bits: [
			{ name: "SOC0", description: "Start-of-conversion for CONV0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "Start-of-conversion for CONV1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "Start-of-conversion for CONV2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "Start-of-conversion for CONV3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "Start-of-conversion for CONV4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "Start-of-conversion for CONV5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "Start-of-conversion for CONV6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "Start-of-conversion for CONV7", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "Start-of-conversion for CONV8", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "Start-of-conversion for CONV9", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "Start-of-conversion for CONV10", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "Start-of-conversion for CONV11", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "Start-of-conversion for CONV12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "Start-of-conversion for CONV13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "Start-of-conversion for CONV14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "Start-of-conversion for CONV15", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCSOCFRC1", description: "ADC SOC Flag Force 1", offset: "0x1A", size: "16",
		bits: [
			{ name: "SOC0", description: "Start-of-conversion for CONV0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "Start-of-conversion for CONV1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "Start-of-conversion for CONV2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "Start-of-conversion for CONV3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "Start-of-conversion for CONV4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "Start-of-conversion for CONV5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "Start-of-conversion for CONV6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "Start-of-conversion for CONV7", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "Start-of-conversion for CONV8", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "Start-of-conversion for CONV9", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "Start-of-conversion for CONV10", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "Start-of-conversion for CONV11", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "Start-of-conversion for CONV12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "Start-of-conversion for CONV13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "Start-of-conversion for CONV14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "Start-of-conversion for CONV15", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCSOCOVF1", description: "ADC SOC Overflow 1", offset: "0x1C", size: "16",
		bits: [
			{ name: "SOC0", description: "Start-of-conversion for CONV0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "Start-of-conversion for CONV1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "Start-of-conversion for CONV2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "Start-of-conversion for CONV3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "Start-of-conversion for CONV4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "Start-of-conversion for CONV5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "Start-of-conversion for CONV6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "Start-of-conversion for CONV7", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "Start-of-conversion for CONV8", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "Start-of-conversion for CONV9", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "Start-of-conversion for CONV10", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "Start-of-conversion for CONV11", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "Start-of-conversion for CONV12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "Start-of-conversion for CONV13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "Start-of-conversion for CONV14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "Start-of-conversion for CONV15", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCSOCOVFCLR1", description: "ADC SOC Overflow Clear 1", offset: "0x1E", size: "16",
		bits: [
			{ name: "SOC0", description: "Start-of-conversion for CONV0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "Start-of-conversion for CONV1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "Start-of-conversion for CONV2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "Start-of-conversion for CONV3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "Start-of-conversion for CONV4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "Start-of-conversion for CONV5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "Start-of-conversion for CONV6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "Start-of-conversion for CONV7", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "Start-of-conversion for CONV8", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "Start-of-conversion for CONV9", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "Start-of-conversion for CONV10", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "Start-of-conversion for CONV11", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "Start-of-conversion for CONV12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "Start-of-conversion for CONV13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "Start-of-conversion for CONV14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "Start-of-conversion for CONV15", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCSOC0CTL", description: "ADC SOC0 Control", offset: "0x20", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC1CTL", description: "ADC SOC1 Control", offset: "0x21", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC2CTL", description: "ADC SOC2 Control", offset: "0x22", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC3CTL", description: "ADC SOC3 Control", offset: "0x23", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC4CTL", description: "ADC SOC4 Control", offset: "0x24", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC5CTL", description: "ADC SOC5 Control", offset: "0x25", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC6CTL", description: "ADC SOC6 Control", offset: "0x26", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC7CTL", description: "ADC SOC7 Control", offset: "0x27", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC8CTL", description: "ADC SOC8 Control", offset: "0x28", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC9CTL", description: "ADC SOC9 Control", offset: "0x29", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC10CTL", description: "ADC SOC10 Control", offset: "0x2A", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC11CTL", description: "ADC SOC11 Control", offset: "0x2B", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC12CTL", description: "ADC SOC12 Control", offset: "0x2C", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC13CTL", description: "ADC SOC13 Control", offset: "0x2D", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC14CTL", description: "ADC SOC14 Control", offset: "0x2E", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCSOC15CTL", description: "ADC SOC15 Control", offset: "0x2F", size: "16",
		bits: [
			{ name: "ACQPS", description: "Acquisition Pulse Size", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CHSEL", description: "SOCx Channel Select", size: "4", shift: "6", mask: "0x3C0" },
			{ name: "TRIGSEL", description: "SOCx Trigger Select", size: "5", shift: "11", mask: "0xF800" },
		]
	},
	{ name: "ADCREFTRIM", description: "Reference Trim Register", offset: "0x40", size: "16",
		bits: [
			{ name: "BG_FINE_TRIM", description: "Coarse trim for internal BG", size: "5", shift: "0", mask: "0x1F" },
			{ name: "BG_COARSE_TRIM", description: "Fine trim for internal BG", size: "4", shift: "5", mask: "0x1E0" },
			{ name: "EXTREF_FINE_TRIM", description: "Fine trim for external reference", size: "5", shift: "9", mask: "0x3E00" },
		]
	},
	{ name: "ADCOFFTRIM", description: "Offset Trim Register", offset: "0x41", size: "16",
		bits: [
		]
	},
	{ name: "COMPHYSTCTL", description: "", offset: "0x4C", size: "16",
		bits: [
			{ name: "COMP1_HYST_DISABLE", description: "Comparator 1 Hysteresis Disable", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMP2_HYST_DISABLE", description: "Comparator 2 Hysteresis Disable", size: "1", shift: "6", mask: "0x40" },
			{ name: "COMP3_HYST_DISABLE", description: "Comparator 3 Hysteresis Disable", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "ADCRESULT0", description: "Conversion Result Buffer 0", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT1", description: "Conversion Result Buffer 1", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT2", description: "Conversion Result Buffer 2", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT3", description: "Conversion Result Buffer 3", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT4", description: "Conversion Result Buffer 4", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT5", description: "Conversion Result Buffer 5", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT6", description: "Conversion Result Buffer 6", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT7", description: "Conversion Result Buffer 7", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT8", description: "Conversion Result Buffer 8", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT9", description: "Conversion Result Buffer 9", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT10", description: "Conversion Result Buffer 10", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT11", description: "Conversion Result Buffer 11", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT12", description: "Conversion Result Buffer 12", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT13", description: "Conversion Result Buffer 13", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT14", description: "Conversion Result Buffer 14", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT15", description: "Conversion Result Buffer 15", offset: "0xF", size: "16",
		bits: [
		]
	},
];
module.exports = {
	adcRegisters: ADC_REGISTERS,
}
