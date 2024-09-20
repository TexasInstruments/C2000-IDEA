let SYSCTRL_REGISTERS = [
	{ name: "BORCFG", description: "0 BOR Configuration Register", offset: "0x0", size: "16",
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
	{ name: "XCLK", description: "XCLKOUT Control", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	XCLKOUTDIV", description: "XCLKOUT Divide Ratio", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	XCLKINSEL", description: "Source Select", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "PLLSTS", description: "PLL Status Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	PLLLOCKS", description: "lock status", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	PLLOFF", description: "off bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	MCLKSTS", description: "clock status bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	MCLKCLR", description: "clock clear bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	OSCOFF", description: "clock off", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	MCLKOFF", description: "clock detect", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	DIVSEL", description: "select (/4 default)", size: "2", shift: "7", mask: "0x180" },
			{ name: "Uint16	NORMRDYE", description: "NORMRDY enable bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CLKCTL", description: "Clock Control Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	OSCCLKSRCSEL", description: "clock source select bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	OSCCLKSRC2SEL", description: "2 clock source select bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	WDCLKSRCSEL", description: "clock source select bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	TMR2CLKSRCSEL", description: "timer 2 clock source select bit", size: "2", shift: "3", mask: "0x18" },
			{ name: "Uint16	TMR2CLKPRESCALE", description: "timer 2 clock pre-scale value", size: "3", shift: "5", mask: "0xE0" },
			{ name: "Uint16	INTOSC1OFF", description: "oscillator off bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	INTOSC1HALTI", description: "Uint16	INTOSC1HALTI:1;", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	INTOSC2OFF", description: "oscillator 2 off bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	INTOSC2HALTI", description: "Uint16	INTOSC2HALTI:1;", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	WDHALTI", description: "halt mode ignore bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "Uint16	XCLKINOFF", description: "off bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	XTALOSCOFF", description: "(External) oscillator off bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	NMIRESETSEL", description: "reset select bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PLLLOCKPRD", description: "PLL Lock Period Register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "INTOSC1TRIM", description: "Internal Oscillator 1 Trim Register", offset: "0x1", size: "16",
		bits: [
			{ name: "Uint16	COARSETRIM", description: "coarse trim value", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Uint16	FINETRIM", description: "fine trim value", size: "6", shift: "9", mask: "0x7E00" },
		]
	},
	{ name: "INTOSC2TRIM", description: "Internal Oscillator 2 Trim", offset: "0x3", size: "16",
		bits: [
			{ name: "Uint16	COARSETRIM", description: "coarse trim value", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Uint16	FINETRIM", description: "fine trim value", size: "6", shift: "9", mask: "0x7E00" },
		]
	},
	{ name: "PCLKCR2", description: "Peripheral Clock Control Regsiter 2", offset: "0x6", size: "16",
		bits: [
			{ name: "Uint16	HRCAP1ENCLK", description: "HRCAP1 Clock Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	HRCAP2ENCLK", description: "Clock Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	HRCAP3ENCLK", description: "Clock Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	HRCAP4ENCLK", description: "Clock Enable", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "LOSPCP", description: "", offset: "0x8", size: "16",
		bits: [
			{ name: "Uint16	LSPCLK", description: "relative to SYSCLKOUT", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "PCLKCR0", description: "Peripheral Clock Control Register 0", offset: "0x9", size: "16",
		bits: [
			{ name: "Uint16	HRPWMENCLK", description: "Clock Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	TBCLKSYNC", description: "Module TBCLK enable/sync", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	ADCENCLK", description: "high speed clk to ADC1", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	I2CAENCLK", description: "Clock Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	SPIAENCLK", description: "A Clock Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	SPIBENCLK", description: "B Clock Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	SCIAENCLK", description: "A Clock Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	SCIBENCLK", description: "B Clock Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	MCBSPAENCLK", description: "Clock Enable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "Uint16	ECANAENCLK", description: "A Clock Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "PCLKCR1", description: "Peripheral Clock Control Register 1", offset: "0xA", size: "16",
		bits: [
			{ name: "Uint16	EPWM1ENCLK", description: "Clock Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	EPWM2ENCLK", description: "Clock Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EPWM3ENCLK", description: "Clock Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EPWM4ENCLK", description: "Clock Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	EPWM5ENCLK", description: "Clock Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	EPWM6ENCLK", description: "Clock Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	EPWM7ENCLK", description: "Clock Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	EPWM8ENCLK", description: "Clock Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	ECAP1ENCLK", description: "Clock Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	ECAP2ENCLK", description: "Clock Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	ECAP3ENCLK", description: "Clock Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	EQEP1ENCLK", description: "Clock Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	EQEP2ENCLK", description: "Clock Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "LPMCR0", description: "Low Power Mode Control Register 0", offset: "0xB", size: "16",
		bits: [
			{ name: "Uint16	LPM", description: "the low power mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	QUALSTDBY", description: "7:2	Qualification", size: "6", shift: "2", mask: "0xFC" },
			{ name: "Uint16	WDINTE", description: "Uint16	WDINTE:1;", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PCLKCR3", description: "Peripheral Clock Control Register 3", offset: "0xD", size: "16",
		bits: [
			{ name: "Uint16	COMP1ENCLK", description: "and DAC1 Clock Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	COMP2ENCLK", description: "and DAC2 Clock Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	COMP3ENCLK", description: "and DAC3 Clock Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CPUTIMER0ENCLK", description: "SYSCLKOUT to CPUTIMER0", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	CPUTIMER1ENCLK", description: "SYSCLKOUT to CPUTIMER1", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	CPUTIMER2ENCLK", description: "SYSCLKOUT to CPUTIMER2", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	DMAENCLK", description: "Clock Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	CLA1ENCLK", description: "Clock Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	USB0ENCLK", description: "Clock Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PLLCR", description: "PLL Control Register", offset: "0xE", size: "16",
		bits: [
			{ name: "Uint16	DIV", description: "Clock ratio for the PLL", size: "5", shift: "0", mask: "0x1F" },
		]
	},
	{ name: "SCSR", description: "System Control and Status Register", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "WDCNTR", description: "Watchdog Counter Register", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "WDKEY", description: "Watchdog Reset Key Register", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "WDCR", description: "Watchdog Control Register", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "JTAGDEBUG", description: "JTAG Port Debug Register", offset: "0x17", size: "16",
		bits: [
			{ name: "Uint16	JTAGDIS", description: "Port Disable Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "PLL2CTL", description: "PLL2 Configuration Register", offset: "0x1D", size: "16",
		bits: [
			{ name: "Uint16	PLL2CLKSRCSEL", description: "Clock Source Select Bits", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	PLL2EN", description: "Enable Bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "PLL2MULT", description: "PLL2 Multiplier Register", offset: "0x1F", size: "16",
		bits: [
			{ name: "Uint16	PLL2MULT", description: "Integer Multiplier", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "PLL2STS", description: "PLL2 Lock Status Register", offset: "0x21", size: "16",
		bits: [
			{ name: "Uint16	PLL2LOCKS", description: "Lock Status Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SYSCLK2CNTR", description: "SYSCLK2 Clock Counter Register", offset: "0x23", size: "16",
		bits: [
		]
	},
	{ name: "EPWMCFG", description: "EPWM DMA/CLA Configuration Register", offset: "0x27", size: "16",
		bits: [
			{ name: "Uint16	CONFIG", description: "to DMA/CLA Enable Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FOPT", description: "Option Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	ENPIPE", description: "Pipeline Mode", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FPWR", description: "Power Modes Register", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	PWR", description: "Mode Bits", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "FSTATUS", description: "Status Register", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	PWRS", description: "Mode Status Bits", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	STDBYWAITS", description: "Uint16	STDBYWAITS:1;", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	ACTIVEWAITS", description: "Uint16	ACTIVEWAITS:1;", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	V3STAT", description: "Status Latch Bit", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "FSTDBYWAIT", description: "", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	STDBYWAIT", description: "Sleep to Standby Wait Count Bits", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "FACTIVEWAIT", description: "", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	ACTIVEWAIT", description: "Standby to Active Wait Count Bits", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "FBANKWAIT", description: "", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	RANDWAIT", description: "Random Read Wait State Bits", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	PAGEWAIT", description: "Paged Read Wait State Bits", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "FOTPWAIT", description: "", offset: "0x1", size: "0",
		bits: [
			{ name: "Uint16	OTPWAIT", description: "Read Wait State Bits", size: "5", shift: "0", mask: "0x1F" },
		]
	},
];
module.exports = {
	sysctrlRegisters: SYSCTRL_REGISTERS,
}
