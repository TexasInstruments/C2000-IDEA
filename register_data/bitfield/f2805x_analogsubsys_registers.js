let ANALOGSUBSYS_REGISTERS = [
	{ name: "DAC1CTL", description: "DAC1 control", offset: "0x0", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Output", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "DAC2CTL", description: "DAC2 control", offset: "0x1", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Output", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "DAC3CTL", description: "DAC3 control", offset: "0x2", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Output", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "DAC4CTL", description: "DAC4 control", offset: "0x3", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Output", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "DAC5CTL", description: "DAC5 control", offset: "0x4", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Output", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "VREFOUTCTL", description: "VREFOUT (DAC6) control", offset: "0x5", size: "16",
		bits: [
			{ name: "DACVAL", description: "DAC Output", size: "6", shift: "0", mask: "0x3F" },
		]
	},
	{ name: "DACEN", description: "DAC Enables", offset: "0x10", size: "16",
		bits: [
			{ name: "DAC1EN", description: "DAC 1 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DAC2EN", description: "DAC 2 Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "DAC3EN", description: "DAC 3 Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DAC4EN", description: "DAC 4 Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "DAC5EN", description: "DAC 5 Enable", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "VREFOUTEN", description: "VREFOUT Enable", offset: "0x11", size: "16",
		bits: [
			{ name: "DACVREFOUTEN", description: "DACVREFOUT (DAC6) Output Enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PGAEN", description: "Programmable Gain Amp Enable", offset: "0x12", size: "16",
		bits: [
			{ name: "AMPA1EN", description: "Motor 1- Amp2 (on ADC A1) Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "AMPA3EN", description: "Motor 1- Amp3 (on ADC A3) Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "AMPB1EN", description: "Motor 1- Amp4 (on ADC B1) Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "AMPA6EN", description: "Motor 2- Amp5 (on ADC A6) Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "AMPB4EN", description: "Motor 2- Amp6 (on ADC B4) Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "AMPB6EN", description: "Motor 2- Amp7 (on ADC B6) Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "AMPB7EN", description: "PFC- Amp1 (on ADC B7) Enable", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "COMPEN", description: "Comparator Enable", offset: "0x13", size: "16",
		bits: [
			{ name: "COMPB7EN", description: "Comparator COMPB7 Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPA1EN", description: "Comparator COMPA1H,L Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPA3EN", description: "Comparator COMPA3H,L Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "COMPB1EN", description: "Comparator COMPB1H,L Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "COMPA6EN", description: "Comparator COMPA6H,L Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "COMPB4EN", description: "Comparator COMPB4H,L Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "COMPB6EN", description: "Comparator COMPB6H,L Enable", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "AMPM1_GAIN", description: "Motor Unit 1 PGA Gain control", offset: "0x14", size: "16",
		bits: [
			{ name: "AMPA1GAIN", description: "AMP A1 Gain", size: "2", shift: "0", mask: "0x3" },
			{ name: "AMPA3GAIN", description: "AMP A3 Gain", size: "2", shift: "4", mask: "0x30" },
			{ name: "AMPB1GAIN", description: "AMP B1 Gain", size: "2", shift: "8", mask: "0x300" },
		]
	},
	{ name: "AMPM2_GAIN", description: "Motor Unit 2 PGA Gain control", offset: "0x15", size: "16",
		bits: [
			{ name: "AMPA6GAIN", description: "AMP A6 Gain", size: "2", shift: "0", mask: "0x3" },
			{ name: "AMPB4GAIN", description: "AMP B4 Gain", size: "2", shift: "4", mask: "0x30" },
			{ name: "AMPB6GAIN", description: "AMP B6 Gain", size: "2", shift: "8", mask: "0x300" },
		]
	},
	{ name: "AMPPFC_GAIN", description: "PFC PGA Gain controls", offset: "0x16", size: "16",
		bits: [
			{ name: "AMPB7GAIN", description: "AMP B0 Gain", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "ADCINSWITCH", description: "ADC input-select switch ctrl", offset: "0x21", size: "16",
		bits: [
			{ name: "ADCINA1SEL", description: "ADC A1 input select", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINB1SEL", description: "ADC B1 input select", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCINA6SEL", description: "ADC A6 input select", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCINB6SEL", description: "ADC B6 input select", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "COMPHYSTCTL", description: "Comp. Hi/Lo hysteresis en/dis", offset: "0x29", size: "16",
		bits: [
			{ name: "COMPA1_HYST_DISABLE", description: "COMPA1_HYST_DISABLE:1; //0 Comparator-A1 High/Low hysteresis en/dis", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPA3_HYST_DISABLE", description: "COMPA3_HYST_DISABLE:1; //1 Comparator-A3 High/Low hysteresis en/dis", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPA6_HYST_DISABLE", description: "COMPA6_HYST_DISABLE:1; //2 Comparator-A6 High/Low hysteresis en/dis", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPB1_HYST_DISABLE", description: "COMPB1_HYST_DISABLE:1; //3 Comparator-B1 High/Low hysteresis en/dis", size: "1", shift: "3", mask: "0x8" },
			{ name: "COMPB4_HYST_DISABLE", description: "COMPB4_HYST_DISABLE:1; //4 Comparator-B4 High/Low hysteresis en/dis", size: "1", shift: "4", mask: "0x10" },
			{ name: "COMPB6_HYST_DISABLE", description: "COMPB6_HYST_DISABLE:1; //5 Comparator-B6 High/Low hysteresis en/dis", size: "1", shift: "5", mask: "0x20" },
			{ name: "COMPB7_HYST_DISABLE", description: "COMPB7_HYST_DISABLE:1; //6 Comparator-B7 High/Low hysteresis en/dis", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "CTRIPA1ICTL", description: "CTRIPA1 Filter Input/Fxn Ctrl", offset: "0x30", size: "16",
		bits: [
			{ name: "COMPHPOL", description: "COMPH Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPLPOL", description: "COMPL Polarity Control", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHINPEN", description: "COMPH Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPLINPEN", description: "COMPL Input Enable for CTRIPn", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPA1FILCTL", description: "CTRIPA1 Filter parameters", offset: "0x31", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPA1FILCLKCTL", description: "CTRIPA1 Filter Sample Clk Ctrl", offset: "0x32", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPA3ICTL", description: "CTRIPA3 Filter Input/Fxn Ctrl", offset: "0x34", size: "16",
		bits: [
			{ name: "COMPHPOL", description: "COMPH Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPLPOL", description: "COMPL Polarity Control", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHINPEN", description: "COMPH Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPLINPEN", description: "COMPL Input Enable for CTRIPn", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPA3FILCTL", description: "CTRIPA3 Filter parameters", offset: "0x35", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPA3FILCLKCTL", description: "CTRIPA3 Filter Sample Clk Ctrl", offset: "0x36", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPB1ICTL", description: "CTRIPB1 Filter Input/Fxn Ctrl", offset: "0x38", size: "16",
		bits: [
			{ name: "COMPHPOL", description: "COMPH Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPLPOL", description: "COMPL Polarity Control", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHINPEN", description: "COMPH Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPLINPEN", description: "COMPL Input Enable for CTRIPn", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPB1FILCTL", description: "CTRIPB1 Filter parameters", offset: "0x39", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPB1FILCLKCTL", description: "CTRIPB1 Filter Sample Clk Ctrl", offset: "0x3A", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPM1OCTL", description: "CTRIPM1 CTRIP Filter Out Ctrl", offset: "0x3D", size: "16",
		bits: [
			{ name: "CTRIPA1EN", description: "CTRIPA1 Input Enable for CTRIPM1", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPA3EN", description: "CTRIPA3 Input Enable for CTRIPM1", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRIPB1EN", description: "CTRIPB1 Input Enable for CTRIPM1", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRIPA1OUTEN", description: "CTRIPA1 Input Enable for CTRIPOUTM1", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPA3OUTEN", description: "CTRIPA3 Input Enable for CTRIPOUTM1", size: "1", shift: "9", mask: "0x200" },
			{ name: "CTRIPB1OUTEN", description: "CTRIPB1 Input Enable for CTRIPOUTM1", size: "1", shift: "10", mask: "0x400" },
			{ name: "CTRIPOUTPOL", description: "CTRIPM1OUT Polarity", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CTRIPOUTLATEN", description: "CTRIPM1OUT latch enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPM1STS", description: "CTRIPM1 CTRIPx outputs status", offset: "0x3E", size: "16",
		bits: [
			{ name: "CTRIPA1STS", description: "CTRIPA1 Output Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPA3STS", description: "CTRIPA3 Output Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRIPB1STS", description: "CTRIPB1 Output Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRIPOUTM1STS", description: "CTRIPOUTM1 Output Status", size: "1", shift: "7", mask: "0x80" },
			{ name: "CTRIPA1FLG", description: "CTRIPA1 Latched Output Flag for CTRIPM1", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPA3FLG", description: "CTRIPA3 Latched Output Flag for CTRIPM1", size: "1", shift: "9", mask: "0x200" },
			{ name: "CTRIPB1FLG", description: "CTRIPB1 Latched Output Flag for CTRIPM1", size: "1", shift: "10", mask: "0x400" },
			{ name: "CTRIPOUTM1FLG", description: "CTRIPOUTM1 Latched Output Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPM1FLGCLR", description: "CTRIPM1 CTRIPx flag clear", offset: "0x3F", size: "16",
		bits: [
			{ name: "CTRIPA1FLGCLR", description: "CTRIPA1 Output Flag Clear for CTRIPM1", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPA3FLGCLR", description: "CTRIPA3 Output Flag Clear for CTRIPM1", size: "1", shift: "9", mask: "0x200" },
			{ name: "CTRIPB1FLGCLR", description: "CTRIPB1 Output Flag Clear for CTRIPM1", size: "1", shift: "10", mask: "0x400" },
			{ name: "CTRIPOUTM1FLGCLR", description: "CTRIPOUTM1FLG Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPA6ICTL", description: "CTRIPA6 Filter Input/Fxn Ctrl", offset: "0x50", size: "16",
		bits: [
			{ name: "COMPHPOL", description: "COMPH Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPLPOL", description: "COMPL Polarity Control", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHINPEN", description: "COMPH Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPLINPEN", description: "COMPL Input Enable for CTRIPn", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPA6FILCTL", description: "CTRIPA6 Filter parameters", offset: "0x51", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPA6FILCLKCTL", description: "CTRIPA6 Filter Sample Clk Ctrl", offset: "0x52", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPB4ICTL", description: "CTRIPB4 Filter Input/Fxn Ctrl", offset: "0x54", size: "16",
		bits: [
			{ name: "COMPHPOL", description: "COMPH Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPLPOL", description: "COMPL Polarity Control", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHINPEN", description: "COMPH Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPLINPEN", description: "COMPL Input Enable for CTRIPn", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPB4FILCTL", description: "CTRIPB4 Filter parameters", offset: "0x55", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPB4FILCLKCTL", description: "CTRIPB4 Filter Sample Clk Ctrl", offset: "0x56", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPB6ICTL", description: "CTRIPB6 Filter Input/Fxn Ctrl", offset: "0x58", size: "16",
		bits: [
			{ name: "COMPHPOL", description: "COMPH Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPLPOL", description: "COMPL Polarity Control", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHINPEN", description: "COMPH Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMPLINPEN", description: "COMPL Input Enable for CTRIPn", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPB6FILCTL", description: "CTRIPB6 Filter parameters", offset: "0x59", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPB6FILCLKCTL", description: "CTRIPB6 Filter Sample Clk Ctrl", offset: "0x5A", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPM2OCTL", description: "CTRIPM2 CTRIP Filter Out Ctrl", offset: "0x5D", size: "16",
		bits: [
			{ name: "CTRIPA6EN", description: "CTRIPA6 Input Enable for CTRIPM2", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPB4EN", description: "CTRIPB4 Input Enable for CTRIPM2", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRIPB6EN", description: "CTRIPB6 Input Enable for CTRIPM2", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRIPA6OUTEN", description: "CTRIPA6 Input Enable for CTRIPOUTM2", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPB4OUTEN", description: "CTRIPB4 Input Enable for CTRIPOUTM2", size: "1", shift: "9", mask: "0x200" },
			{ name: "CTRIPB6OUTEN", description: "CTRIPB6 Input Enable for CTRIPOUTM2", size: "1", shift: "10", mask: "0x400" },
			{ name: "CTRIPOUTPOL", description: "CTRIPM2OUT Polarity", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CTRIPOUTLATEN", description: "CTRIPM2OUT latch enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPM2STS", description: "CTRIPM2 CTRIPx outputs status", offset: "0x5E", size: "16",
		bits: [
			{ name: "CTRIPA6STS", description: "CTRIPA6 Output Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPB4STS", description: "CTRIPB4 Output Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRIPB6STS", description: "CTRIPB6 Output Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRIPOUTM2STS", description: "CTRIPOUTM2 Output Status", size: "1", shift: "7", mask: "0x80" },
			{ name: "CTRIPA6FLG", description: "CTRIPA6 Latched Output Flag for CTRIPM2", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPB4FLG", description: "CTRIPB4 Latched Output Flag for CTRIPM2", size: "1", shift: "9", mask: "0x200" },
			{ name: "CTRIPB6FLG", description: "CTRIPB6 Latched Output Flag for CTRIPM2", size: "1", shift: "10", mask: "0x400" },
			{ name: "CTRIPOUTM2FLG", description: "CTRIPOUTM2FLG Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPM2FLGCLR", description: "CTRIPM2 CTRIPx flag clear", offset: "0x5F", size: "16",
		bits: [
			{ name: "CTRIPA6FLGCLR", description: "CTRIPA6 Output Flag Clear for CTRIPM2", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPB4FLGCLR", description: "CTRIPB4 Output Flag Clear for CTRIPM2", size: "1", shift: "9", mask: "0x200" },
			{ name: "CTRIPB6FLGCLR", description: "CTRIPB6 Output Flag Clear for CTRIPM2", size: "1", shift: "10", mask: "0x400" },
			{ name: "CTRIPOUTM2FLGCLR", description: "CTRIPOUTM2FLG Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPB7ICTL", description: "CTRIPB7 Filter Input/Fxn Ctrl", offset: "0x70", size: "16",
		bits: [
			{ name: "COMPPOL", description: "COMP Polarity Control", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPINPEN", description: "COMP Input Enable for CTRIPn", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRIPBYP", description: "CTRIPn Filter Bypass", size: "1", shift: "11", mask: "0x800" },
			{ name: "CTRIPOUTBYP", description: "CTRIPnOUT Filter Bypass", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "CTRIPB7FILCTL", description: "CTRIPB7 Filter parameters", offset: "0x71", size: "16",
		bits: [
			{ name: "SAMPWIN", description: "Sample Window Size for Digital Filter on CTRIPn", size: "5", shift: "4", mask: "0x1F0" },
			{ name: "THRESH", description: "Majority Voting Threshold", size: "5", shift: "9", mask: "0x3E00" },
			{ name: "FILINIT", description: "CTRIPn Filter Initialization", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPB7FILCLKCTL", description: "CTRIPB7 Filter Sample Clk Ctrl", offset: "0x72", size: "16",
		bits: [
			{ name: "CLKPRESCALE", description: "Sample Clock Prescale value for CTRIPn", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTRIPPFCOCTL", description: "CTRIPPFC CTRIPx outputs status", offset: "0x7D", size: "16",
		bits: [
			{ name: "CTRIPB7EN", description: "CTRIPB7 Input Enable for CTRIPPFC", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPB7OUTEN", description: "CTRIPB7 Input Enable for CTRIPOUTPFC", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPOUTPOL", description: "CTRIPPFCOUT Polarity", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CTRIPOUTLATEN", description: "CTRIPPFCOUT latch enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPPFCSTS", description: "CTRIPPFC CTRIPx flag clear", offset: "0x7E", size: "16",
		bits: [
			{ name: "CTRIPB7STS", description: "CTRIPB7 Output Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPOUTPFCSTS", description: "CTRIPOUTPFC Output Status", size: "1", shift: "7", mask: "0x80" },
			{ name: "CTRIPB7FLG", description: "CTRIPB7 Latched Output Flag for CTRIPPFC", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPOUTPFCFLG", description: "CTRIPOUTPFCFLG Output Flag", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CTRIPPFCFLGCLR", description: "CTRIPPFC COMP Test Control", offset: "0x7F", size: "16",
		bits: [
			{ name: "CTRIPB7FLGCLR", description: "CTRIPB7 Output Flag Clear for CTRIPPFC", size: "1", shift: "8", mask: "0x100" },
			{ name: "CTRIPOUTPFCFLGCLR", description: "CTRIPOUTPFCFLG Output Flag Clear", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "LOCKCTRIP", description: "Lock Register for CTRIP Filter", offset: "0xF0", size: "16",
		bits: [
			{ name: "CTRIPM1LOCK", description: "CTRIPM1 Configuration and Filter Control Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPM2LOCK", description: "CTRIPM2 Configuration and Filter Control Lock", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRIPPFCLOCK", description: "CTRIPPFC Configuration & Filter Control Lock", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "LOCKDAC", description: "Lock Register for DACs", offset: "0xF2", size: "16",
		bits: [
			{ name: "DAC1LOCK", description: "DAC1CTL Register Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "DAC2LOCK", description: "DAC2CTL Register Lock", size: "1", shift: "1", mask: "0x2" },
			{ name: "DAC3LOCK", description: "DAC3CTL Register Lock", size: "1", shift: "2", mask: "0x4" },
			{ name: "DAC4LOCK", description: "DAC4CTL Register Lock", size: "1", shift: "3", mask: "0x8" },
			{ name: "DAC5LOCK", description: "DAC5CTL Register Lock", size: "1", shift: "4", mask: "0x10" },
			{ name: "DACENLOCK", description: "DACEN Register lock", size: "1", shift: "5", mask: "0x20" },
			{ name: "DACVREFLOCK", description: "VREFOUTCTL Register Lock", size: "1", shift: "6", mask: "0x40" },
			{ name: "VREFOUTENLOCK", description: "VREFOUTEN Register Lock", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LOCKAMPCOMP", description: "Lock Register for Amp/Comp", offset: "0xF4", size: "16",
		bits: [
			{ name: "PGAENLOCK", description: "PGAEN Register Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMPENLOCK", description: "COMPEN Register Lock", size: "1", shift: "1", mask: "0x2" },
			{ name: "AMP_M1_LOCK", description: "AMP's A1, A3, B1 Gain Control Lock", size: "1", shift: "2", mask: "0x4" },
			{ name: "AMP_M2_LOCK", description: "AMP's A6, B4, B6 Gain Control Lock", size: "1", shift: "3", mask: "0x8" },
			{ name: "AMP_PFC_LOCK", description: "PFC AMP Gain Control Lock", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "LOCKSWITCH", description: "Lock Register for Switches", offset: "0xF6", size: "16",
		bits: [
			{ name: "AMPOUTSWLOCK", description: "AMP Output Switch Control Lock", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCINSWLOCK", description: "ADCINSWITCH Register Lock", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMPHYSLOCK", description: "COMPHYS Register Lock", size: "1", shift: "2", mask: "0x4" },
		]
	},
];
module.exports = {
	analogsubsysRegisters: ANALOGSUBSYS_REGISTERS,
}
