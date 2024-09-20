let ADC_REGISTERS = [
	{ name: "ADCTRL1", description: "ADC Control 1", offset: "0x0", size: "16",
		bits: [
			{ name: "SEQ_CASC", description: "Cascaded sequencer mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "SEQ_OVRD", description: "Sequencer override", size: "1", shift: "5", mask: "0x20" },
			{ name: "CONT_RUN", description: "Continuous run", size: "1", shift: "6", mask: "0x40" },
			{ name: "CPS", description: "ADC core clock pre-scalar", size: "1", shift: "7", mask: "0x80" },
			{ name: "ACQ_PS", description: "Acquisition window size", size: "4", shift: "8", mask: "0xF00" },
			{ name: "SUSMOD", description: "Emulation suspend mode", size: "2", shift: "12", mask: "0x3000" },
			{ name: "RESET", description: "ADC reset", size: "1", shift: "14", mask: "0x4000" },
		]
	},
	{ name: "ADCTRL2", description: "ADC Control 2", offset: "0x1", size: "16",
		bits: [
			{ name: "EPWM_SOCB_SEQ2", description: "EPWM compare B SOC mask for SEQ2", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT_MOD_SEQ2", description: "SEQ2 Interrupt mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "INT_ENA_SEQ2", description: "SEQ2 Interrupt enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOC_SEQ2", description: "Start of conversion for SEQ2", size: "1", shift: "5", mask: "0x20" },
			{ name: "RST_SEQ2", description: "Reset SEQ2", size: "1", shift: "6", mask: "0x40" },
			{ name: "EXT_SOC_SEQ1", description: "External start of conversion for SEQ1", size: "1", shift: "7", mask: "0x80" },
			{ name: "EPWM_SOCA_SEQ1", description: "EPWM compare B SOC mask for SEQ1", size: "1", shift: "8", mask: "0x100" },
			{ name: "INT_MOD_SEQ1", description: "SEQ1 Interrupt mode", size: "1", shift: "10", mask: "0x400" },
			{ name: "INT_ENA_SEQ1", description: "SEQ1 Interrupt enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOC_SEQ1", description: "Start of conversion trigger for SEQ1", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RST_SEQ1", description: "Restart sequencer 1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "EPWM_SOCB_SEQ", description: "EPWM compare B SOC enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ADCMAXCONV", description: "Max conversions", offset: "0x2", size: "16",
		bits: [
			{ name: "MAX_CONV1", description: "Max number of conversions", size: "4", shift: "0", mask: "0xF" },
			{ name: "MAX_CONV2", description: "Max number of conversions", size: "3", shift: "4", mask: "0x70" },
		]
	},
	{ name: "ADCCHSELSEQ1", description: "Channel select sequencing control 1", offset: "0x3", size: "16",
		bits: [
			{ name: "CONV00", description: "Conversion selection 00", size: "4", shift: "0", mask: "0xF" },
			{ name: "CONV01", description: "Conversion selection 01", size: "4", shift: "4", mask: "0xF0" },
			{ name: "CONV02", description: "Conversion selection 02", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CONV03", description: "Conversion selection 03", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "ADCCHSELSEQ2", description: "Channel select sequencing control 2", offset: "0x4", size: "16",
		bits: [
			{ name: "CONV04", description: "Conversion selection 04", size: "4", shift: "0", mask: "0xF" },
			{ name: "CONV05", description: "Conversion selection 05", size: "4", shift: "4", mask: "0xF0" },
			{ name: "CONV06", description: "Conversion selection 06", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CONV07", description: "Conversion selection 07", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "ADCCHSELSEQ3", description: "Channel select sequencing control 3", offset: "0x5", size: "16",
		bits: [
			{ name: "CONV08", description: "Conversion selection 08", size: "4", shift: "0", mask: "0xF" },
			{ name: "CONV09", description: "Conversion selection 09", size: "4", shift: "4", mask: "0xF0" },
			{ name: "CONV10", description: "Conversion selection 10", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CONV11", description: "Conversion selection 11", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "ADCCHSELSEQ4", description: "Channel select sequencing control 4", offset: "0x6", size: "16",
		bits: [
			{ name: "CONV12", description: "Conversion selection 12", size: "4", shift: "0", mask: "0xF" },
			{ name: "CONV13", description: "Conversion selection 13", size: "4", shift: "4", mask: "0xF0" },
			{ name: "CONV14", description: "Conversion selection 14", size: "4", shift: "8", mask: "0xF00" },
			{ name: "CONV15", description: "Conversion selection 15", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "ADCASEQSR", description: "Autosequence status register", offset: "0x7", size: "16",
		bits: [
			{ name: "SEQ1_STATE", description: "SEQ1 state", size: "4", shift: "0", mask: "0xF" },
			{ name: "SEQ2_STATE", description: "SEQ2 state", size: "3", shift: "4", mask: "0x70" },
			{ name: "SEQ_CNTR", description: "Sequencing counter status", size: "4", shift: "8", mask: "0xF00" },
		]
	},
	{ name: "ADCRESULT0", description: "Conversion Result Buffer 0", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT1", description: "Conversion Result Buffer 1", offset: "0x9", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT2", description: "Conversion Result Buffer 2", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT3", description: "Conversion Result Buffer 3", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT4", description: "Conversion Result Buffer 4", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT5", description: "Conversion Result Buffer 5", offset: "0xD", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT6", description: "Conversion Result Buffer 6", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT7", description: "Conversion Result Buffer 7", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT8", description: "Conversion Result Buffer 8", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT9", description: "Conversion Result Buffer 9", offset: "0x11", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT10", description: "Conversion Result Buffer 10", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT11", description: "Conversion Result Buffer 11", offset: "0x13", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT12", description: "Conversion Result Buffer 12", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT13", description: "Conversion Result Buffer 13", offset: "0x15", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT14", description: "Conversion Result Buffer 14", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "ADCRESULT15", description: "Conversion Result Buffer 15", offset: "0x17", size: "16",
		bits: [
		]
	},
	{ name: "ADCTRL3", description: "ADC Control 3", offset: "0x18", size: "16",
		bits: [
			{ name: "SMODE_SEL", description: "Sampling mode select", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCCLKPS", description: "ADC core clock divider", size: "4", shift: "1", mask: "0x1E" },
			{ name: "ADCPWDN", description: "ADC powerdown", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCBGRFDN", description: "ADC bandgap/ref power down", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "ADCST", description: "ADC Status Register", offset: "0x19", size: "16",
		bits: [
			{ name: "INT_SEQ1", description: "SEQ1 Interrupt flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT_SEQ2", description: "SEQ2 Interrupt flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "SEQ1_BSY", description: "SEQ1 busy status", size: "1", shift: "2", mask: "0x4" },
			{ name: "SEQ2_BSY", description: "SEQ2 busy status", size: "1", shift: "3", mask: "0x8" },
			{ name: "INT_SEQ1_CLR", description: "SEQ1 Interrupt clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "INT_SEQ2_CLR", description: "SEQ2 Interrupt clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "EOS_BUF1", description: "End of sequence buffer1", size: "1", shift: "6", mask: "0x40" },
			{ name: "EOS_BUF2", description: "End of sequence buffer2", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "ADCREFSEL", description: "Reference Select Register", offset: "0x1C", size: "",
		bits: [
			{ name: "REF_SEL", description: "Reference select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ADCOFFTRIM", description: "Offset Trim Register", offset: "0x1C", size: "",
		bits: [
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
