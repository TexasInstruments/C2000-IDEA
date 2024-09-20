let SYSCTRL_REGISTERS = [
	{ name: "XCLK", description: "0: XCLKOUT Control", offset: "0x0", size: "16",
		bits: [
			{ name: "XCLKOUTDIV", description: "XCLKOUT Divide Ratio", size: "2", shift: "0", mask: "0x3" },
			{ name: "XCLKINSEL", description: "XCLKIN Source Select bit", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "PLLSTS", description: "1: PLL Status Register", offset: "0x1", size: "16",
		bits: [
			{ name: "PLLLOCKS", description: "PLL lock status", size: "1", shift: "0", mask: "0x1" },
			{ name: "PLLOFF", description: "PLL off bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "MCLKSTS", description: "Missing clock status bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "MCLKCLR", description: "Missing clock clear bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "OSCOFF", description: "Oscillator clock off", size: "1", shift: "5", mask: "0x20" },
			{ name: "MCLKOFF", description: "Missing clock detect", size: "1", shift: "6", mask: "0x40" },
			{ name: "DIVSEL", description: "Divide select (/4 default)", size: "2", shift: "7", mask: "0x180" },
			{ name: "NORMRDYE", description: "VREG NORMRDY enable bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CLKCTL", description: "2: Clock Control Register", offset: "0x2", size: "16",
		bits: [
			{ name: "OSCCLKSRCSEL", description: "Oscillator clock source select bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSCCLKSRC2SEL", description: "Oscillator 2 clock source select bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDCLKSRCSEL", description: "Watchdog clock source select bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "TMR2CLKSRCSEL", description: "CPU timer 2 clock source select bit", size: "2", shift: "3", mask: "0x18" },
			{ name: "TMR2CLKPRESCALE", description: "CPU timer 2 clock pre-scale value", size: "3", shift: "5", mask: "0xE0" },
			{ name: "INTOSC1OFF", description: "Internal oscillator off bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "INTOSC1HALTI", description: "INTOSC1HALTI:1;", size: "1", shift: "9", mask: "0x200" },
			{ name: "INTOSC2OFF", description: "Internal oscillator 2 off bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "INTOSC2HALTI", description: "INTOSC2HALTI:1;", size: "1", shift: "11", mask: "0x800" },
			{ name: "WDHALTI", description: "Watchdog halt mode ignore bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "XCLKINOFF", description: "XCLKIN off bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "XTALOSCOFF", description: "Crystal (External) oscillator off bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NMIRESETSEL", description: "NMI reset select bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PLLLOCKPRD", description: "3: PLL Lock Period Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "INTOSC1TRIM", description: "4: Internal Oscillator 1 Trim", offset: "0x4", size: "16",
		bits: [
			{ name: "COARSETRIM", description: "8-bit coarse trim value", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FINETRIM", description: "6-bit fine trim value", size: "6", shift: "9", mask: "0x7E00" },
		]
	},
	{ name: "INTOSC2TRIM", description: "6: Internal Oscillator 2 Trim", offset: "0x6", size: "16",
		bits: [
			{ name: "COARSETRIM", description: "8-bit coarse trim value", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FINETRIM", description: "6-bit fine trim value", size: "6", shift: "9", mask: "0x7E00" },
		]
	},
	{ name: "LOSPCP", description: "", offset: "0xB", size: "16",
		bits: [
			{ name: "LSPCLK", description: "Rate relative to SYSCLKOUT", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "PCLKCR0", description: "12: Peripheral clock control register", offset: "0xC", size: "16",
		bits: [
			{ name: "TBCLKSYNC", description: "ETWPM Module TBCLK enable/sync", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCENCLK", description: "Enable high speed clk to ADC", size: "1", shift: "3", mask: "0x8" },
			{ name: "I2CAENCLK", description: "Enable SYSCLKOUT to I2C-A", size: "1", shift: "4", mask: "0x10" },
			{ name: "SPIAENCLK", description: "Enable low speed clk to SPI-A", size: "1", shift: "8", mask: "0x100" },
			{ name: "SCIAENCLK", description: "Enable low speed clk to SCI-A", size: "1", shift: "10", mask: "0x400" },
		]
	},
	{ name: "PCLKCR1", description: "13: Peripheral clock control register", offset: "0xD", size: "16",
		bits: [
			{ name: "EPWM1ENCLK", description: "Enable SYSCLKOUT to EPWM1", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2ENCLK", description: "Enable SYSCLKOUT to EPWM2", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3ENCLK", description: "Enable SYSCLKOUT to EPWM3", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4ENCLK", description: "Enable SYSCLKOUT to EPWM4", size: "1", shift: "3", mask: "0x8" },
			{ name: "ECAP1ENCLK", description: "Enable SYSCLKOUT to ECAP1", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "LPMCR0", description: "", offset: "0xE", size: "16",
		bits: [
			{ name: "LPM", description: "Set the low power mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "QUALSTDBY", description: "Qualification", size: "6", shift: "2", mask: "0xFC" },
			{ name: "WDINTE", description: "Enables WD to wake the device from STANDBY", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PCLKCR3", description: "16: Peripheral clock register", offset: "0x10", size: "16",
		bits: [
			{ name: "COMP1ENCLK", description: "Enable SYSCLKOUT to COMP1", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMP2ENCLK", description: "Enable SYSCLKOUT to COMP2", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPUTIMER0ENCLK", description: "Enable SYSCLKOUT to CPUTIMER0", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPUTIMER1ENCLK", description: "Enable SYSCLKOUT to CPUTIMER1", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPUTIMER2ENCLK", description: "Enable SYSCLKOUT to CPUTIMER2", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIOINENCLK", description: "Enable SYSCLKOUT to GPIO", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "PLLCR", description: "17: PLL control register", offset: "0x11", size: "16",
		bits: [
			{ name: "DIV", description: "Set clock ratio for the PLL", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SCSR", description: "", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "WDCNTR", description: "19: WD counter register", offset: "0x13", size: "16",
		bits: [
		]
	},
	{ name: "WDKEY", description: "21: WD reset key register", offset: "0x15", size: "16",
		bits: [
		]
	},
	{ name: "WDCR", description: "25: WD timer control register", offset: "0x19", size: "16",
		bits: [
		]
	},
	{ name: "BORCFG", description: "0: BOR Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "BORENZ", description: "BOR enable active low bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "KEY0", description: "KEY reg bits 15-0", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "KEY1", description: "KEY reg bits 31-16", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "KEY2", description: "KEY reg bits 47-32", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "KEY3", description: "KEY reg bits 63-48", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "KEY4", description: "KEY reg bits 79-64", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "KEY5", description: "KEY reg bits 95-80", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "KEY6", description: "KEY reg bits 111-96", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "KEY7", description: "KEY reg bits 127-112", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "CSMSCR", description: "CSM Status & Control register", offset: "0xF", size: "16",
		bits: [
			{ name: "SECURE", description: "Secure flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "FORCESEC", description: "Force Secure control bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "FOPT", description: "Option Register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENPIPE", description: "Enable Pipeline Mode", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FPWR", description: "Power Modes Register", offset: "0x2", size: "16",
		bits: [
			{ name: "PWR", description: "Power Mode bits", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "FSTATUS", description: "Status Register", offset: "0x3", size: "16",
		bits: [
			{ name: "PWRS", description: "Power Mode Status bits", size: "2", shift: "0", mask: "0x3" },
			{ name: "STDBYWAITS", description: "STDBYWAITS:1;", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACTIVEWAITS", description: "ACTIVEWAITS:1;", size: "1", shift: "3", mask: "0x8" },
			{ name: "V3STAT", description: "VDD3V Status Latch bit", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "FSTDBYWAIT", description: "", offset: "0x4", size: "16",
		bits: [
			{ name: "STDBYWAIT", description: "STDBYWAIT:9;", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "FACTIVEWAIT", description: "", offset: "0x5", size: "16",
		bits: [
			{ name: "ACTIVEWAIT", description: "ACTIVEWAIT:9;", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "FBANKWAIT", description: "Bank Read Access Wait State Register", offset: "0x6", size: "16",
		bits: [
			{ name: "RANDWAIT", description: "Flash Random Read Wait State bits", size: "4", shift: "0", mask: "0xF" },
			{ name: "PAGEWAIT", description: "Flash Paged Read Wait State bits", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "FOTPWAIT", description: "OTP Read Access Wait State Register", offset: "0x7", size: "16",
		bits: [
			{ name: "OTPWAIT", description: "OTP Read Wait State bits", size: "5", shift: "0", mask: "0x1F" },
		]
	},
];
module.exports = {
	sysctrlRegisters: SYSCTRL_REGISTERS,
}
