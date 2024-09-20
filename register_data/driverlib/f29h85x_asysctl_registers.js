let ASYSCTL_REGISTERS = [
	{ name: "PMMVREGTRIM", description: "Power Management Module VREG Trim Register", offset: "0x44", size: "16",
		bits: [
			{ name: "VREGTRIM", description: "Core VDD Voltage Regulator Trim", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CTLTRIMSTS", description: "HWCTL TRIM Error Status register", offset: "0x70", size: "16",
		bits: [
			{ name: "CTLSTS", description: "TRIM Load Complete", size: "1", shift: "0", mask: "0x1" },
			{ name: "SBERR", description: "Single-bit error detected while reading from Flash", size: "1", shift: "7", mask: "0x80" },
			{ name: "SCANERR", description: "Wrong scan chain signature", size: "1", shift: "8", mask: "0x100" },
			{ name: "TWOBERR", description: "Two-bit error detected", size: "1", shift: "10", mask: "0x400" },
			{ name: "TIMEOUT", description: "Timeout Error", size: "1", shift: "11", mask: "0x800" },
			{ name: "INVKEY1", description: "Invalid key read during TLC1", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INVKEY2", description: "Invalid key read during TLC2", size: "1", shift: "17", mask: "0x20000" },
			{ name: "INVKEY3", description: "Invalid key read during TLC3", size: "1", shift: "18", mask: "0x40000" },
		]
	},
	{ name: "REFBUFCONFIGCDE", description: "Config register for analog reference CDE", offset: "0x154", size: "32",
		bits: [
			{ name: "ADCC_LSB_RES_DAMP", description: "ADCC LSB damp res prog", size: "2", shift: "0", mask: "0x3" },
			{ name: "ADCC_MSB_RES_DAMP", description: "ADCC MSB damp res prog", size: "2", shift: "2", mask: "0xC" },
			{ name: "ADCC_CHSEL_SOC_DEL_PROG", description: "CHSEL rise to ADCCSOC rise delay program", size: "1", shift: "4", mask: "0x10" },
			{ name: "ADCD_LSB_RES_DAMP", description: "ADCD LSB damp res prog", size: "2", shift: "5", mask: "0x60" },
			{ name: "ADCD_MSB_RES_DAMP", description: "ADCD MSB damp res prog", size: "2", shift: "7", mask: "0x180" },
			{ name: "ADCD_CHSEL_SOC_DEL_PROG", description: "CHSEL rise to ADCDSOC rise delay program", size: "1", shift: "9", mask: "0x200" },
			{ name: "ADCE_LSB_RES_DAMP", description: "ADCE LSB damp res prog", size: "2", shift: "10", mask: "0xC00" },
			{ name: "ADCE_MSB_RES_DAMP", description: "ADCE MSB damp res prog", size: "2", shift: "12", mask: "0x3000" },
			{ name: "ADCE_CHSEL_SOC_DEL_PROG", description: "CHSEL rise to ADCESOC rise delay program", size: "1", shift: "14", mask: "0x4000" },
			{ name: "ADCC_TM_ENZ_DUTY_CYCLE", description: "Disable Pulse Stretch testmode to have effect in ADC_CLK", size: "1", shift: "15", mask: "0x8000" },
			{ name: "DIS_ADCC_SP_SLEWBOOST", description: "ADC sp slew boost disbale", size: "1", shift: "16", mask: "0x10000" },
			{ name: "ADCDTM_ENZ_DUTY_CYCLE", description: "Disable Pulse Stretch testmode to have effect in ADC_CLK", size: "1", shift: "17", mask: "0x20000" },
			{ name: "DIS_ADCD_SP_SLEWBOOST", description: "ADC sp slew boost disbale", size: "1", shift: "18", mask: "0x40000" },
			{ name: "ADCE_TM_ENZ_DUTY_CYCLE", description: "Disable Pulse Stretch testmode to have effect in ADC_CLK", size: "1", shift: "19", mask: "0x80000" },
			{ name: "DIS_ADCE_SP_SLEWBOOST", description: "ADC sp slew boost disbale", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SPARE1", description: "Spare1 bits", size: "11", shift: "21", mask: "0xFFE00000" },
		]
	},
	{ name: "INTERNALTESTCTL", description: "INTERNALTEST Node Control Register", offset: "0x1A8", size: "32",
		bits: [
			{ name: "TESTSEL", description: "Test Select", size: "6", shift: "0", mask: "0x3F" },
			{ name: "KEY", description: "Key to Enable writes", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "CONFIGLOCK", description: "Lock Register for all the config registers.", offset: "0x1E8", size: "16",
		bits: [
			{ name: "AGPIOFILTER", description: "Locks AGPIOFILTER Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "AGPIOCTRL", description: "Locks all AGPIOCTRL Register", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "TSNSCTL", description: "Temperature Sensor Control Register", offset: "0x1EC", size: "16",
		bits: [
			{ name: "ENABLE", description: "Temperature Sensor Enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "ANAREFCTL", description: "Analog Reference Control Register.", offset: "0x20C", size: "16",
		bits: [
			{ name: "ANAREFABSEL", description: "Analog Reference ADC-A/B Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "ANAREFCDESEL", description: "Analog Reference ADC-C/D/E Select", size: "1", shift: "1", mask: "0x2" },
			{ name: "ANAREF1_2P5SEL", description: "Analog Reference Select", size: "1", shift: "8", mask: "0x100" },
			{ name: "ANAREF2_2P5SEL", description: "Analog Reference B Select", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "VREGCTL", description: "Voltage Regulator Control Register", offset: "0x214", size: "16",
		bits: [
			{ name: "PWRDNVREG", description: "Power down internal voltage regulator", size: "1", shift: "0", mask: "0x1" },
			{ name: "ENMASK", description: "Enable VMON function mask on a TRIM load", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "VMONCTL", description: "Voltage Monitor Control Register", offset: "0x22C", size: "16",
		bits: [
			{ name: "BORLVMONDIS", description: "Disable BORL(ow) feature on VDDIO", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "CMPHPMXSEL", description: "Bits to select one of the many sources on CopmHP inputs. Refer to Pimux diagram for details.", offset: "0x26C", size: "32",
		bits: [
			{ name: "CMP1HPMXSEL", description: "CMP1HPMXSEL bits", size: "3", shift: "0", mask: "0x7" },
			{ name: "CMP2HPMXSEL", description: "CMP2HPMXSEL bits", size: "3", shift: "3", mask: "0x38" },
			{ name: "CMP3HPMXSEL", description: "CMP3HPMXSEL bits", size: "3", shift: "6", mask: "0x1C0" },
			{ name: "CMP4HPMXSEL", description: "CMP4HPMXSEL bits", size: "3", shift: "9", mask: "0xE00" },
			{ name: "CMP5HPMXSEL", description: "CMP5HPMXSEL bits", size: "3", shift: "12", mask: "0x7000" },
			{ name: "CMP6HPMXSEL", description: "CMP6HPMXSEL bits", size: "3", shift: "15", mask: "0x38000" },
			{ name: "CMP7HPMXSEL", description: "CMP7HPMXSEL bits", size: "3", shift: "18", mask: "0x1C0000" },
			{ name: "CMP8HPMXSEL", description: "CMP8HPMXSEL bits", size: "3", shift: "21", mask: "0xE00000" },
			{ name: "CMP9HPMXSEL", description: "CMP9HPMXSEL bits", size: "3", shift: "24", mask: "0x7000000" },
			{ name: "CMP10HPMXSEL", description: "CMP10HPMXSEL bits", size: "3", shift: "27", mask: "0x38000000" },
		]
	},
	{ name: "CMPHPMXSEL1", description: "Bits to select one of the many sources on CopmHP inputs. Refer to Pimux diagram for details.", offset: "0x270", size: "16",
		bits: [
			{ name: "CMP11HPMXSEL", description: "CMP11HPMXSEL bits", size: "3", shift: "0", mask: "0x7" },
			{ name: "CMP12HPMXSEL", description: "CMP12HPMXSEL bits", size: "3", shift: "3", mask: "0x38" },
		]
	},
	{ name: "CMPLPMXSEL", description: "Bits to select one of the many sources on CopmLP inputs. Refer to Pimux diagram for details.", offset: "0x274", size: "32",
		bits: [
			{ name: "CMP1LPMXSEL", description: "CMP1LPMXSEL bits", size: "3", shift: "0", mask: "0x7" },
			{ name: "CMP2LPMXSEL", description: "CMP2LPMXSEL bits", size: "3", shift: "3", mask: "0x38" },
			{ name: "CMP3LPMXSEL", description: "CMP3LPMXSEL bits", size: "3", shift: "6", mask: "0x1C0" },
			{ name: "CMP4LPMXSEL", description: "CMP4LPMXSEL bits", size: "3", shift: "9", mask: "0xE00" },
			{ name: "CMP5LPMXSEL", description: "CMP5LPMXSEL bits", size: "3", shift: "12", mask: "0x7000" },
			{ name: "CMP6LPMXSEL", description: "CMP6LPMXSEL bits", size: "3", shift: "15", mask: "0x38000" },
			{ name: "CMP7LPMXSEL", description: "CMP7LPMXSEL bits", size: "3", shift: "18", mask: "0x1C0000" },
			{ name: "CMP8LPMXSEL", description: "CMP8LPMXSEL bits", size: "3", shift: "21", mask: "0xE00000" },
			{ name: "CMP9LPMXSEL", description: "CMP9LPMXSEL bits", size: "3", shift: "24", mask: "0x7000000" },
			{ name: "CMP10LPMXSEL", description: "CMP10LPMXSEL bits", size: "3", shift: "27", mask: "0x38000000" },
		]
	},
	{ name: "CMPLPMXSEL1", description: "Bits to select one of the many sources on CopmLP inputs. Refer to Pimux diagram for details.", offset: "0x278", size: "16",
		bits: [
			{ name: "CMP11LPMXSEL", description: "CMP11LPMXSEL bits", size: "3", shift: "0", mask: "0x7" },
			{ name: "CMP12LPMXSEL", description: "CMP12LPMXSEL bits", size: "3", shift: "3", mask: "0x38" },
		]
	},
	{ name: "CMPHNMXSEL", description: "Bits to select one of the many sources on CopmHN inputs. Refer to Pimux diagram for details.", offset: "0x27C", size: "16",
		bits: [
			{ name: "CMP1HNMXSEL", description: "CMP1HNMXSEL bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMP2HNMXSEL", description: "CMP2HNMXSEL bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMP3HNMXSEL", description: "CMP3HNMXSEL bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMP4HNMXSEL", description: "CMP4HNMXSEL bits", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMP5HNMXSEL", description: "CMP5HNMXSEL bits", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMP6HNMXSEL", description: "CMP6HNMXSEL bits", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMP7HNMXSEL", description: "CMP7HNMXSEL bits", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMP8HNMXSEL", description: "CMP8HNMXSEL bits", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMP9HNMXSEL", description: "CMP9HNMXSEL bits", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMP10HNMXSEL", description: "CMP10HNMXSEL bits", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMP11HNMXSEL", description: "CMP11HNMXSEL bits", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMP12HNMXSEL", description: "CMP12HNMXSEL bits", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "CMPLNMXSEL", description: "Bits to select one of the many sources on CopmLN inputs. Refer to Pimux diagram for details.", offset: "0x280", size: "16",
		bits: [
			{ name: "CMP1LNMXSEL", description: "CMP1LNMXSEL bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMP2LNMXSEL", description: "CMP2LNMXSEL bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMP3LNMXSEL", description: "CMP3LNMXSEL bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMP4LNMXSEL", description: "CMP4LNMXSEL bits", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMP5LNMXSEL", description: "CMP5LNMXSEL bits", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMP6LNMXSEL", description: "CMP6LNMXSEL bits", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMP7LNMXSEL", description: "CMP7LNMXSEL bits", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMP8LNMXSEL", description: "CMP8LNMXSEL bits", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMP9LNMXSEL", description: "CMP9LNMXSEL bits", size: "1", shift: "8", mask: "0x100" },
			{ name: "CMP10LNMXSEL", description: "CMP10LNMXSEL bits", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMP11LNMXSEL", description: "CMP11LNMXSEL bits", size: "1", shift: "10", mask: "0x400" },
			{ name: "CMP12LNMXSEL", description: "CMP12LNMXSEL bits", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "LOCK", description: "Lock Register", offset: "0x294", size: "16",
		bits: [
			{ name: "TSNSCTL", description: "TSNSCTL Register lock bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "ANAREFCTL", description: "ANAREFCTL Register lock bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "VMONCTL", description: "VMONCTL Register lock bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPHPMXSEL", description: "CMPHPMXSEL Register lock bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPLPMXSEL", description: "CMPLPMXSEL Register lock bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPHNMXSEL", description: "CMPHNMXSEL Register lock bit", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPLNMXSEL", description: "CMPLNMXSEL Register lock bit", size: "1", shift: "8", mask: "0x100" },
			{ name: "VREGCTL", description: "VREGCTL Register lock bit", size: "1", shift: "9", mask: "0x200" },
			{ name: "CMPHPMXSEL1", description: "CMPHPMXSEL1 Register lock bit", size: "1", shift: "11", mask: "0x800" },
			{ name: "CMPLPMXSEL1", description: "CMPLPMXSEL1 Register lock bit", size: "1", shift: "12", mask: "0x1000" },
		]
	},
	{ name: "IODRVSEL", description: "5V FS IO Drive strength select register", offset: "0x458", size: "16",
		bits: [
			{ name: "GPIO10", description: "Drive select for GPIO10", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO15", description: "Drive select for GPIO15", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO18", description: "Drive select for GPIO18", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO22", description: "Drive select for GPIO22", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO23", description: "Drive select for GPIO23", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO29", description: "Drive select for GPIO29", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "IOMODESEL", description: "PMBUS IO Mode select register", offset: "0x45C", size: "16",
		bits: [
			{ name: "GPIO10", description: "Mode select for GPIO10", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO15", description: "Mode select for GPIO15", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO18", description: "Mode select for GPIO18", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO22", description: "Mode select for GPIO22", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO23", description: "Mode select for GPIO23", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO29", description: "Mode select for GPIO29", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "AGPIOFILTER", description: "AGPIO Filter Control Register", offset: "0x464", size: "16",
		bits: [
			{ name: "FILTER", description: "AGPIOFILTER Control for filter ALL AGPIO pins", size: "2", shift: "0", mask: "0x3" },
		]
	},
	{ name: "AGPIOCTRLH", description: "AGPIO Control Register", offset: "0x48C", size: "32",
		bits: [
			{ name: "GPIO224", description: "AGPIOCTRL for GPIO224", size: "1", shift: "0", mask: "0x1" },
			{ name: "GPIO225", description: "AGPIOCTRL for GPIO225", size: "1", shift: "1", mask: "0x2" },
			{ name: "GPIO226", description: "AGPIOCTRL for GPIO226", size: "1", shift: "2", mask: "0x4" },
			{ name: "GPIO227", description: "AGPIOCTRL for GPIO227", size: "1", shift: "3", mask: "0x8" },
			{ name: "GPIO228", description: "AGPIOCTRL for GPIO228", size: "1", shift: "4", mask: "0x10" },
			{ name: "GPIO229", description: "AGPIOCTRL for GPIO229", size: "1", shift: "5", mask: "0x20" },
			{ name: "GPIO230", description: "AGPIOCTRL for GPIO230", size: "1", shift: "6", mask: "0x40" },
			{ name: "GPIO231", description: "AGPIOCTRL for GPIO231", size: "1", shift: "7", mask: "0x80" },
			{ name: "GPIO232", description: "AGPIOCTRL for GPIO232", size: "1", shift: "8", mask: "0x100" },
			{ name: "GPIO233", description: "AGPIOCTRL for GPIO233", size: "1", shift: "9", mask: "0x200" },
			{ name: "GPIO234", description: "AGPIOCTRL for GPIO234", size: "1", shift: "10", mask: "0x400" },
			{ name: "GPIO235", description: "AGPIOCTRL for GPIO235", size: "1", shift: "11", mask: "0x800" },
			{ name: "GPIO236", description: "AGPIOCTRL for GPIO236", size: "1", shift: "12", mask: "0x1000" },
			{ name: "GPIO237", description: "AGPIOCTRL for GPIO237", size: "1", shift: "13", mask: "0x2000" },
			{ name: "GPIO238", description: "AGPIOCTRL for GPIO238", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GPIO239", description: "AGPIOCTRL for GPIO239", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GPIO240", description: "AGPIOCTRL for GPIO240", size: "1", shift: "16", mask: "0x10000" },
			{ name: "GPIO241", description: "AGPIOCTRL for GPIO241", size: "1", shift: "17", mask: "0x20000" },
			{ name: "GPIO242", description: "AGPIOCTRL for GPIO242", size: "1", shift: "18", mask: "0x40000" },
			{ name: "GPIO243", description: "AGPIOCTRL for GPIO243", size: "1", shift: "19", mask: "0x80000" },
			{ name: "GPIO244", description: "AGPIOCTRL for GPIO244", size: "1", shift: "20", mask: "0x100000" },
			{ name: "GPIO245", description: "AGPIOCTRL for GPIO245", size: "1", shift: "21", mask: "0x200000" },
			{ name: "GPIO246", description: "AGPIOCTRL for GPIO246", size: "1", shift: "22", mask: "0x400000" },
			{ name: "GPIO247", description: "AGPIOCTRL for GPIO247", size: "1", shift: "23", mask: "0x800000" },
			{ name: "GPIO248", description: "AGPIOCTRL for GPIO248", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "GPIO249", description: "AGPIOCTRL for GPIO249", size: "1", shift: "25", mask: "0x2000000" },
		]
	},
	{ name: "PARITY_TEST", description: "Enables parity test", offset: "0x4B4", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "ADCSOCFRCGB", description: "ADC Global SOC Force", offset: "0x0", size: "32",
		bits: [
			{ name: "SOC0", description: "Generate synchronous SW trigger for SOC0", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOC1", description: "Generate synchronous SW trigger for SOC1", size: "1", shift: "1", mask: "0x2" },
			{ name: "SOC2", description: "Generate synchronous SW trigger for SOC2", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOC3", description: "Generate synchronous SW trigger for SOC3", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC4", description: "Generate synchronous SW trigger for SOC4", size: "1", shift: "4", mask: "0x10" },
			{ name: "SOC5", description: "Generate synchronous SW trigger for SOC5", size: "1", shift: "5", mask: "0x20" },
			{ name: "SOC6", description: "Generate synchronous SW trigger for SOC6", size: "1", shift: "6", mask: "0x40" },
			{ name: "SOC7", description: "Generate synchronous SW trigger for SOC7", size: "1", shift: "7", mask: "0x80" },
			{ name: "SOC8", description: "Generate synchronous SW trigger for SOC8", size: "1", shift: "8", mask: "0x100" },
			{ name: "SOC9", description: "Generate synchronous SW trigger for SOC9", size: "1", shift: "9", mask: "0x200" },
			{ name: "SOC10", description: "Generate synchronous SW trigger for SOC10", size: "1", shift: "10", mask: "0x400" },
			{ name: "SOC11", description: "Generate synchronous SW trigger for SOC11", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC12", description: "Generate synchronous SW trigger for SOC12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOC13", description: "Generate synchronous SW trigger for SOC13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SOC14", description: "Generate synchronous SW trigger for SOC14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SOC15", description: "Generate synchronous SW trigger for SOC15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SOC16", description: "Generate synchronous SW trigger for SOC16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SOC17", description: "Generate synchronous SW trigger for SOC17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SOC18", description: "Generate synchronous SW trigger for SOC18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SOC19", description: "Generate synchronous SW trigger for SOC19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SOC20", description: "Generate synchronous SW trigger for SOC20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SOC21", description: "Generate synchronous SW trigger for SOC21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SOC22", description: "Generate synchronous SW trigger for SOC22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SOC23", description: "Generate synchronous SW trigger for SOC23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SOC24", description: "Generate synchronous SW trigger for SOC24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SOC25", description: "Generate synchronous SW trigger for SOC25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SOC26", description: "Generate synchronous SW trigger for SOC26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SOC27", description: "Generate synchronous SW trigger for SOC27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SOC28", description: "Generate synchronous SW trigger for SOC28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SOC29", description: "Generate synchronous SW trigger for SOC29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SOC30", description: "Generate synchronous SW trigger for SOC30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SOC31", description: "Generate synchronous SW trigger for SOC31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "ADCSOCFRCGBSEL", description: "ADC Global SOC Force Select", offset: "0x4", size: "16",
		bits: [
			{ name: "ADCA", description: "Generate synchronous SW trigger for ADCA", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCB", description: "Generate synchronous SW trigger for ADCB", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCC", description: "Generate synchronous SW trigger for ADCC", size: "1", shift: "2", mask: "0x4" },
			{ name: "ADCD", description: "Generate synchronous SW trigger for ADCD", size: "1", shift: "3", mask: "0x8" },
			{ name: "ADCE", description: "Generate synchronous SW trigger for ADCE", size: "1", shift: "4", mask: "0x10" },
		]
	},
	{ name: "PARITY_TEST_ALT1", description: "Enables parity test", offset: "0x8", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
];
module.exports = {
	asysctlRegisters: ASYSCTL_REGISTERS,
}