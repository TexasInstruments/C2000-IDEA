let SYSCTRL_REGISTERS = [
	{ name: "XCLK", description: "XCLKOUT Control", offset: "0x0", size: "16",
		bits: [
			{ name: "XCLKOUTDIV", description: "XCLKOUT Divide Ratio", size: "2", shift: "0", mask: "0x3" },
			{ name: "XCLKINSEL", description: "XCLKIN Source Select", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "PLLSTS", description: "PLL Status Register", offset: "0x1", size: "16",
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
	{ name: "CLKCTL", description: "Clock Control Register", offset: "0x2", size: "16",
		bits: [
			{ name: "OSCCLKSRCSEL", description: "Oscillator clock source select bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSCCLKSRC2SEL", description: "Oscillator 2 clock source select bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "WDCLKSRCSEL", description: "Watchdog clock source select bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "TMR2CLKSRCSEL", description: "CPU timer 2 clock source select bit", size: "2", shift: "3", mask: "0x18" },
			{ name: "TMR2CLKPRESCALE", description: "CPU timer 2 clock pre-scale value", size: "3", shift: "5", mask: "0xE0" },
			{ name: "INTOSC1OFF", description: "Internal oscillator off bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "INTOSC1HALTI", description: "Internal oscillator 1 halt mode ignore bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "INTOSC2OFF", description: "Internal oscillator 2 off bit", size: "1", shift: "10", mask: "0x400" },
			{ name: "INTOSC2HALTI", description: "Internal oscillator 2 halt mode ignore bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "WDHALTI", description: "Watchdog halt mode ignore bit", size: "1", shift: "12", mask: "0x1000" },
			{ name: "XCLKINOFF", description: "XCLKIN off bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "XTALOSCOFF", description: "Crystal (External) oscillator off bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NMIRESETSEL", description: "NMI reset select bit", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PLLLOCKPRD", description: "PLL Lock Period Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "INTOSC1TRIM", description: "Internal Oscillator 1 Trim Reg", offset: "0x4", size: "16",
		bits: [
			{ name: "COARSETRIM", description: "8-bit coarse trim value", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FINETRIM", description: "6-bit fine trim value", size: "6", shift: "9", mask: "0x7E00" },
		]
	},
	{ name: "INTOSC2TRIM", description: "Int 32KHz Oscillator 2 Trim Reg", offset: "0x6", size: "16",
		bits: [
			{ name: "COARSETRIM", description: "8-bit coarse trim value", size: "8", shift: "0", mask: "0xFF" },
			{ name: "FINETRIM", description: "6-bit fine trim value", size: "6", shift: "9", mask: "0x7E00" },
		]
	},
	{ name: "LOSPCP", description: "Low-Speed Peripheral Clk Pre-Scaler", offset: "0xB", size: "16",
		bits: [
			{ name: "LSPCLK", description: "Rate relative to SYSCLKOUT", size: "3", shift: "0", mask: "0x7" },
		]
	},
	{ name: "PCLKCR0", description: "Peripheral Clock Control Reg 0", offset: "0xC", size: "16",
		bits: [
			{ name: "TBCLKSYNC", description: "ETWPM Module TBCLK enable/sync", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCENCLK", description: "Enable high speed clk to ADC", size: "1", shift: "3", mask: "0x8" },
			{ name: "I2CAENCLK", description: "I2C Clock Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "SCICENCLK", description: "SCI C Clock Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "SPIAENCLK", description: "SPI A Clock Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "SCIAENCLK", description: "SCI A Clock Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "SCIBENCLK", description: "SCI B Clock Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "ECANAENCLK", description: "CAN A Clock Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "PCLKCR1", description: "Peripheral Clock Control Reg 1", offset: "0xD", size: "16",
		bits: [
			{ name: "EPWM1ENCLK", description: "EPWM1 Clock Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "EPWM2ENCLK", description: "EPWM2 Clock Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "EPWM3ENCLK", description: "EPWM3 Clock Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "EPWM4ENCLK", description: "EPWM4 Clock Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "EPWM5ENCLK", description: "EPWM5 Clock Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPWM6ENCLK", description: "EPWM6 Clock Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "EPWM7ENCLK", description: "EPWM7 Clock Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "ECAP1ENCLK", description: "ECAP1 Clock Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "EQEP1ENCLK", description: "EQEP1 Clock Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "LPMCR0", description: "Low Power Mode Control Reg 0", offset: "0xE", size: "16",
		bits: [
			{ name: "LPM", description: "Set the low power mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "QUALSTDBY", description: "Qualification", size: "6", shift: "2", mask: "0xFC" },
			{ name: "WDINTE", description: "Enables WD to wake the device from STANDBY", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "PCLKCR3", description: "Peripheral Clock Control Reg 3", offset: "0x10", size: "16",
		bits: [
			{ name: "CPUTIMER0ENCLK", description: "Enable SYSCLKOUT to CPUTIMER0", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPUTIMER1ENCLK", description: "Enable SYSCLKOUT to CPUTIMER1", size: "1", shift: "9", mask: "0x200" },
			{ name: "CPUTIMER2ENCLK", description: "Enable SYSCLKOUT to CPUTIMER2", size: "1", shift: "10", mask: "0x400" },
			{ name: "CLA1ENCLK", description: "CLA Clock Enable", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "PLLCR", description: "PLL Control Register", offset: "0x11", size: "16",
		bits: [
			{ name: "DIV", description: "Set Clock ratio for the PLL", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "SCSR", description: "System Control and Status Reg", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "WDCNTR", description: "Watchdog Counter Register", offset: "0x13", size: "16",
		bits: [
		]
	},
	{ name: "PCLKCR4", description: "Peripheral Clock Control Reg 4", offset: "0x14", size: "16",
		bits: [
			{ name: "CTRIPA1ENCLK", description: "CTRIPA1ENCLK:1;", size: "1", shift: "0", mask: "0x1" },
			{ name: "CTRIPA3ENCLK", description: "CTRIPA3ENCLK:1;", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRIPB1ENCLK", description: "CTRIPB1ENCLK:1;", size: "1", shift: "2", mask: "0x4" },
			{ name: "CTRIPA6ENCLK", description: "CTRIPA6ENCLK:1;", size: "1", shift: "3", mask: "0x8" },
			{ name: "CTRIPB4ENCLK", description: "CTRIPB4ENCLK:1;", size: "1", shift: "4", mask: "0x10" },
			{ name: "CTRIPB6ENCLK", description: "CTRIPB6ENCLK:1;", size: "1", shift: "5", mask: "0x20" },
			{ name: "CTRIPPFCENCLK", description: "CTRIPPFCENCLK:1;", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "WDKEY", description: "Watchdog Reset Key Register", offset: "0x15", size: "16",
		bits: [
		]
	},
	{ name: "WDCR", description: "Watchdog Control Register", offset: "0x19", size: "16",
		bits: [
		]
	},
	{ name: "JTAGDEBUG", description: "JTAG Port Debug Register", offset: "0x1A", size: "16",
		bits: [
			{ name: "JTAGDIS", description: "JTAG Port Disable Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "BORCFG", description: "BOR Configuration Register", offset: "0x0", size: "16",
		bits: [
			{ name: "BORENZ", description: "BOR Enable Active Low Bit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FOPT", description: "Option Register", offset: "0x0", size: "16",
		bits: [
			{ name: "ENPIPE", description: "Enable Pipeline Mode", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "FPWR", description: "Power Modes Register", offset: "0x2", size: "16",
		bits: [
			{ name: "PWR", description: "Power Mode Bits", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "FSTATUS", description: "Status Register", offset: "0x3", size: "16",
		bits: [
			{ name: "PWRS", description: "Power Mode Status Bits", size: "2", shift: "0", mask: "0x3" },
			{ name: "STDBYWAITS", description: "Bank/Pump Sleep to Standby Wait Counter", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACTIVEWAITS", description: "Bank/Pump Standby to Active Wait Counter", size: "1", shift: "3", mask: "0x8" },
			{ name: "V3STAT", description: "VDD3V Status Latch Bit", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "FSTDBYWAIT", description: "Pump/Bank Sleep to Standby Wait State", offset: "0x4", size: "16",
		bits: [
			{ name: "STDBYWAIT", description: "Bank/Pump Sleep to Standby Wait Count Bits", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "FACTIVEWAIT", description: "Pump/Bank Standby to Active Wait State", offset: "0x5", size: "16",
		bits: [
			{ name: "ACTIVEWAIT", description: "Bank/Pump Standby to Active Wait Count Bits", size: "9", shift: "0", mask: "0x1FF" },
		]
	},
	{ name: "FBANKWAIT", description: "Bank Read Access Wait State Reg", offset: "0x6", size: "16",
		bits: [
			{ name: "RANDWAIT", description: "Flash Random Read Wait State Bits", size: "4", shift: "0", mask: "0xF" },
			{ name: "PAGEWAIT", description: "Flash Paged Read Wait State Bits", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "FOTPWAIT", description: "OTP Read Access Wait State Reg", offset: "0x7", size: "16",
		bits: [
			{ name: "OTPWAIT", description: "OTP Read Wait State Bits", size: "5", shift: "0", mask: "0x1F" },
		]
	},
];
module.exports = {
	sysctrlRegisters: SYSCTRL_REGISTERS,
}
