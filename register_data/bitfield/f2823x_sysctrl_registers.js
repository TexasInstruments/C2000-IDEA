let SYSCTRL_REGISTERS = [
	{ name: "PLLSTS", description: "1", offset: "0x1", size: "16",
		bits: [
			{ name: "PLLLOCKS", description: "PLL lock status", size: "1", shift: "0", mask: "0x1" },
			{ name: "PLLOFF", description: "PLL off bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "MCLKSTS", description: "Missing clock status bit", size: "1", shift: "3", mask: "0x8" },
			{ name: "MCLKCLR", description: "Missing clock clear bit", size: "1", shift: "4", mask: "0x10" },
			{ name: "OSCOFF", description: "Oscillator clock off", size: "1", shift: "5", mask: "0x20" },
			{ name: "MCLKOFF", description: "Missing clock detect", size: "1", shift: "6", mask: "0x40" },
			{ name: "DIVSEL", description: "Divide Select", size: "2", shift: "7", mask: "0x180" },
		]
	},
	{ name: "HISPCP", description: "", offset: "0xA", size: "16",
		bits: [
			{ name: "HSPCLK", description: "Rate relative to SYSCLKOUT", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "LOSPCP", description: "11: Low-speed peripheral clock pre-scaler", offset: "0xB", size: "16",
		bits: [
			{ name: "LSPCLK", description: "Rate relative to SYSCLKOUT", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "PCLKCR0", description: "12: Peripheral clock control register", offset: "0xC", size: "16",
		bits: [
			{ name: "TBCLKSYNC", description: "EWPM Module TBCLK enable/sync", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCENCLK", description: "Enable high speed clk to ADC", size: "1", shift: "3", mask: "0x8" },
			{ name: "I2CAENCLK", description: "Enable SYSCLKOUT to I2C-A", size: "1", shift: "4", mask: "0x10" },
			{ name: "SCICENCLK", description: "Enalbe low speed clk to SCI-C", size: "1", shift: "5", mask: "0x20" },
			{ name: "SPIAENCLK", description: "Enable low speed clk to SPI-A", size: "1", shift: "8", mask: "0x100" },
			{ name: "SCIAENCLK", description: "Enable low speed clk to SCI-A", size: "1", shift: "10", mask: "0x400" },
			{ name: "SCIBENCLK", description: "Enable low speed clk to SCI-B", size: "1", shift: "11", mask: "0x800" },
			{ name: "MCBSPAENCLK", description: "Enable low speed clk to McBSP-A", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MCBSPBENCLK", description: "Enable low speed clk to McBSP-B", size: "1", shift: "13", mask: "0x2000" },
			{ name: "ECANAENCLK", description: "Enable system clk to eCAN-A", size: "1", shift: "14", mask: "0x4000" },
			{ name: "ECANBENCLK", description: "Enable system clk to eCAN-B", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PCLKCR1", description: "13: Peripheral clock control register", offset: "0xD", size: "16",
		bits: [
			{ name: "EPWM1ENCLK", description: "Enable SYSCLKOUT to EPWM1", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2ENCLK", description: "Enable SYSCLKOUT to EPWM2", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3ENCLK", description: "Enable SYSCLKOUT to EPWM3", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4ENCLK", description: "Enable SYSCLKOUT to EPWM4", size: "1", shift: "3", mask: "0x8" },
			{ name: "EPWM5ENCLK", description: "Enable SYSCLKOUT to EPWM5", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPWM6ENCLK", description: "Enable SYSCLKOUT to EPWM6", size: "1", shift: "5", mask: "0x20" },
			{ name: "ECAP1ENCLK", description: "Enable SYSCLKOUT to ECAP1", size: "1", shift: "8", mask: "0x100" },
			{ name: "ECAP2ENCLK", description: "Enable SYSCLKOUT to ECAP2", size: "1", shift: "9", mask: "0x200" },
			{ name: "ECAP3ENCLK", description: "Enable SYSCLKOUT to ECAP3", size: "1", shift: "10", mask: "0x400" },
			{ name: "ECAP4ENCLK", description: "Enable SYSCLKOUT to ECAP4", size: "1", shift: "11", mask: "0x800" },
			{ name: "ECAP5ENCLK", description: "Enable SYSCLKOUT to ECAP5", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ECAP6ENCLK", description: "Enable SYSCLKOUT to ECAP6", size: "1", shift: "13", mask: "0x2000" },
			{ name: "EQEP1ENCLK", description: "Enable SYSCLKOUT to EQEP1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "EQEP2ENCLK", description: "Enable SYSCLKOUT to EQEP2", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "LPMCR0", description: "14: Low-power mode control register 0", offset: "0xE", size: "16",
		bits: [
			{ name: "LPM", description: "Set the low power mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "QUALSTDBY", description: "Qualification", size: "6", shift: "2", mask: "0xFC" },
			{ name: "WDINTE", description: "Enables WD to wake the device from STANDBY", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PCLKCR3", description: "16: Peripheral clock control register", offset: "0x10", size: "16",
		bits: [
			{ name: "CPUTIMER0ENCLK", description: "Enable SYSCLKOUT to CPU-Timer 0", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPUTIMER1ENCLK", description: "Enable SYSCLKOUT to CPU-Timer 1", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPUTIMER2ENCLK", description: "Enable SYSCLKOUT to CPU-Timer 2", size: "1", shift: "10", mask: "0x400" },
			{ name: "DMAENCLK", description: "Enable the DMA clock", size: "1", shift: "11", mask: "0x800" },
			{ name: "XINTFENCLK", description: "Enable SYSCLKOUT to XINTF", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIOINENCLK", description: "GPIO input clock", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "PLLCR", description: "17: PLL control register", offset: "0x11", size: "16",
		bits: [
			{ name: "DIV", description: "Set clock ratio for the PLL", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SCSR", description: "18: System control and status register", offset: "0x12", size: "16",
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
	{ name: "MAPCNF", description: "30: Dual-mapping configuration register", offset: "0x1E", size: "16",
		bits: [
			{ name: "MAPEPWM", description: "EPWM dual-map enable", size: "1", shift: "0", mask: "0x1" },
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
			{ name: "STDBYWAITS", description: "Bank/Pump Sleep to Standby Wait Counter Status bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACTIVEWAITS", description: "Bank/Pump Standby to Active Wait Counter Status bits", size: "1", shift: "3", mask: "0x8" },
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
