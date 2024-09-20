let XBAR_REGISTERS = [
	{ name: "FLG1", description: "X-Bar Input Flag Register 1", offset: "0x0", size: "16",
		bits: [
			{ name: "CMPSS1_CTRIPL", description: "Input Flag for CMPSS1.CTRIPL Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSS1_CTRIPH", description: "Input Flag for CMPSS1.CTRIPH Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSS2_CTRIPL", description: "Input Flag for CMPSS2.CTRIPL Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSS2_CTRIPH", description: "Input Flag for CMPSS2.CTRIPH Signal", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSS3_CTRIPL", description: "Input Flag for CMPSS3.CTRIPL Signal", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMPSS3_CTRIPH", description: "Input Flag for CMPSS3.CTRIPH Signal", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPSS4_CTRIPL", description: "Input Flag for CMPSS4.CTRIPL Signal", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSS4_CTRIPH", description: "Input Flag for CMPSS4.CTRIPH Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSS1_CTRIPOUTL", description: "Input Flag for CMPSS1.CTRIPOUTL Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CMPSS1_CTRIPOUTH", description: "Input Flag for CMPSS1.CTRIPOUTH Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CMPSS2_CTRIPOUTL", description: "Input Flag for CMPSS2.CTRIPOUTL Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CMPSS2_CTRIPOUTH", description: "Input Flag for CMPSS2.CTRIPOUTH Signal", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CMPSS3_CTRIPOUTL", description: "Input Flag for CMPSS3.CTRIPOUTL Signal", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CMPSS3_CTRIPOUTH", description: "Input Flag for CMPSS3.CTRIPOUTH Signal", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CMPSS4_CTRIPOUTL", description: "Input Flag for CMPSS4.CTRIPOUTL Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "CMPSS4_CTRIPOUTH", description: "Input Flag for CMPSS4.CTRIPOUTH Signal", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "FLG2", description: "X-Bar Input Flag Register 2", offset: "0x2", size: "32",
		bits: [
			{ name: "INPUT1", description: "Input Flag for INPUT1 Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "INPUT2", description: "Input Flag for INPUT2 Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "INPUT3", description: "Input Flag for INPUT3 Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "INPUT4", description: "Input Flag for INPUT4 Signal", size: "1", shift: "3", mask: "0x8" },
			{ name: "INPUT5", description: "Input Flag for INPUT5 Signal", size: "1", shift: "4", mask: "0x10" },
			{ name: "INPUT6", description: "Input Flag for INPUT6 Signal", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCSOCA", description: "Input Flag for ADCSOCA Signal", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCSOCB", description: "Input Flag for ADCSOCB Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "INPUT7", description: "Input Flag for INPUT7 Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "INPUT8", description: "Input Flag for INPUT8 Signal", size: "1", shift: "9", mask: "0x200" },
			{ name: "INPUT9", description: "Input Flag for INPUT9 Signal", size: "1", shift: "10", mask: "0x400" },
			{ name: "INPUT10", description: "Input Flag for INPUT10\ Signal", size: "1", shift: "11", mask: "0x800" },
			{ name: "INPUT11", description: "Input Flag for INPUT11 Signal", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INPUT12", description: "Input Flag for INPUT12 Signal", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INPUT13", description: "Input Flag for INPUT13 Signal", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INPUT14", description: "Input Flag for INPUT14 Signal", size: "1", shift: "15", mask: "0x8000" },
			{ name: "ECAP1_OUT", description: "Input Flag for ECAP1.OUT Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "ECAP2_OUT", description: "Input Flag for ECAP2.OUT Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "ECAP3_OUT", description: "Input Flag for ECAP3.OUT Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "EXTSYNCOUT", description: "Input Flag for EXTSYNCOUT Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "ADCAEVT1", description: "Input Flag for ADCAEVT1 Signal", size: "1", shift: "23", mask: "0x800000" },
			{ name: "ADCAEVT2", description: "Input Flag for ADCAEVT2 Signal", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "ADCAEVT3", description: "Input Flag for ADCAEVT3 Signal", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "ADCAEVT4", description: "Input Flag for ADCAEVT4 Signal", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "ADCBEVT1", description: "Input Flag for ADCBEVT1 Signal", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "ADCBEVT2", description: "Input Flag for ADCBEVT2 Signal", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "ADCBEVT3", description: "Input Flag for ADCBEVT3 Signal", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "ADCBEVT4", description: "Input Flag for ADCBEVT4 Signal", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "ADCCEVT1", description: "Input Flag for ADCCEVT1 Signal", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "FLG3", description: "X-Bar Input Flag Register 3", offset: "0x4", size: "32",
		bits: [
			{ name: "ADCCEVT2", description: "Input Flag for ADCCEVT2 Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCCEVT3", description: "Input Flag for ADCCEVT3 Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCCEVT4", description: "Input Flag for ADCCEVT4 Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "SD1FLT1_COMPL", description: "Input Flag for SD1FLT1.COMPL Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "SD1FLT1_COMPH", description: "Input Flag for SD1FLT1.COMPH Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "SD1FLT2_COMPL", description: "Input Flag for SD1FLT2.COMPL Signal", size: "1", shift: "9", mask: "0x200" },
			{ name: "SD1FLT2_COMPH", description: "Input Flag for SD1FLT2.COMPH Signal", size: "1", shift: "10", mask: "0x400" },
			{ name: "SD1FLT3_COMPL", description: "Input Flag for SD1FLT3.COMPL Signal", size: "1", shift: "11", mask: "0x800" },
			{ name: "SD1FLT3_COMPH", description: "Input Flag for SD1FLT3.COMPH Signal", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SD1FLT4_COMPL", description: "Input Flag for SD1FLT4.COMPL Signal", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SD1FLT4_COMPH", description: "Input Flag for SD1FLT4.COMPH Signal", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SD2FLT1_COMPL", description: "Input Flag for SD2FLT1.COMPL Signal", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SD2FLT1_COMPH", description: "Input Flag for SD2FLT1.COMPH Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SD2FLT2_COMPL", description: "Input Flag for SD2FLT2.COMPL Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SD2FLT2_COMPH", description: "Input Flag for SD2FLT2.COMPH Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SD2FLT3_COMPL", description: "Input Flag for SD2FLT3.COMPL Signal", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SD2FLT3_COMPH", description: "Input Flag for SD2FLT3.COMPH Signal", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SD2FLT4_COMPL", description: "Input Flag for SD2FLT4.COMPL Signal", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SD2FLT4_COMPH", description: "Input Flag for SD2FLT4.COMPH Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SD1FLT1_COMPZ", description: "Input Flag for SD1FLT1.COMPZ Signal", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SD1FLT1_DRINT", description: "Input Flag for SD1FLT1.DRINT Signal", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SD1FLT2_COMPZ", description: "Input Flag for SD1FLT2.COMPZ Signal", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SD1FLT2_DRINT", description: "Input Flag for SD1FLT2.DRINT Signal", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SD1FLT3_COMPZ", description: "Input Flag for SD1FLT3.COMPZ Signal", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SD1FLT3_DRINT", description: "Input Flag for SD1FLT3.DRINT Signal", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SD1FLT4_COMPZ", description: "Input Flag for SD1FLT4.COMPZ Signal", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SD1FLT4_DRINT", description: "Input Flag for SD1FLT4.DRINT Signal", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "FLG4", description: "X-Bar Input Flag Register 4", offset: "0x6", size: "32",
		bits: [
			{ name: "SD2FLT1_COMPZ", description: "Input Flag for SD2FLT1.COMPZ Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "SD2FLT1_DRINT", description: "Input Flag for SD2FLT1.DRINT Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "SD2FLT2_COMPZ", description: "Input Flag for SD2FLT2.COMPZ Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "SD2FLT2_DRINT", description: "Input Flag for SD2FLT2.DRINT Signal", size: "1", shift: "3", mask: "0x8" },
			{ name: "SD2FLT3_COMPZ", description: "Input Flag for SD2FLT3.COMPZ Signal", size: "1", shift: "4", mask: "0x10" },
			{ name: "SD2FLT3_DRINT", description: "Input Flag for SD2FLT3.DRINT Signal", size: "1", shift: "5", mask: "0x20" },
			{ name: "SD2FLT4_COMPZ", description: "Input Flag for SD2FLT4.COMPZ Signal", size: "1", shift: "6", mask: "0x40" },
			{ name: "SD2FLT4_DRINT", description: "Input Flag for SD2FLT4.DRINT Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "MCANA_FEVT0", description: "Input Flag for MCANA_FEVT0 Signal", size: "1", shift: "9", mask: "0x200" },
			{ name: "MCANA_FEVT1", description: "Input Flag for MCANA_FEVT1 Signal", size: "1", shift: "10", mask: "0x400" },
			{ name: "MCANA_FEVT2", description: "Input Flag for MCANA_FEVT2 Signal", size: "1", shift: "11", mask: "0x800" },
			{ name: "CLB1_4_1", description: "Input Flag for CLB1_4.1 Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CLB1_5_1", description: "Input Flag for CLB1_5.1 Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CLB2_4_1", description: "Input Flag for CLB2_4.1 Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CLB2_5_1", description: "Input Flag for CLB2_5.1 Signal", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CLB3_4_1", description: "Input Flag for CLB3_4.1 Signal", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CLB3_5_1", description: "Input Flag for CLB3_5.1 Signal", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CLB4_4_1", description: "Input Flag for CLB4_4.1 Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "CLB4_5_1", description: "Input Flag for CLB4_5.1 Signal", size: "1", shift: "23", mask: "0x800000" },
			{ name: "ERRORSTS_ERROR", description: "Input Latch for ERRORSTS_ERROR Signal", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "CLAHALT", description: "Input Flag for CLAHALT Signal", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CLR1", description: "X-Bar Input Flag Clear Register 1", offset: "0x8", size: "16",
		bits: [
			{ name: "CMPSS1_CTRIPL", description: "Input Flag Clear for CMPSS1.CTRIPL Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMPSS1_CTRIPH", description: "Input Flag Clear for CMPSS1.CTRIPH Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "CMPSS2_CTRIPL", description: "Input Flag Clear for CMPSS2.CTRIPL Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "CMPSS2_CTRIPH", description: "Input Flag Clear for CMPSS2.CTRIPH Signal", size: "1", shift: "3", mask: "0x8" },
			{ name: "CMPSS3_CTRIPL", description: "Input Flag Clear for CMPSS3.CTRIPL Signal", size: "1", shift: "4", mask: "0x10" },
			{ name: "CMPSS3_CTRIPH", description: "Input Flag Clear for CMPSS3.CTRIPH Signal", size: "1", shift: "5", mask: "0x20" },
			{ name: "CMPSS4_CTRIPL", description: "Input Flag Clear for CMPSS4.CTRIPL Signal", size: "1", shift: "6", mask: "0x40" },
			{ name: "CMPSS4_CTRIPH", description: "Input Flag Clear for CMPSS4.CTRIPH Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "CMPSS1_CTRIPOUTL", description: "Input Flag Clear for CMPSS1.CTRIPOUTL Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CMPSS1_CTRIPOUTH", description: "Input Flag Clear for CMPSS1.CTRIPOUTH Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CMPSS2_CTRIPOUTL", description: "Input Flag Clear for CMPSS2.CTRIPOUTL Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CMPSS2_CTRIPOUTH", description: "Input Flag Clear for CMPSS2.CTRIPOUTH Signal", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CMPSS3_CTRIPOUTL", description: "Input Flag Clear for CMPSS3.CTRIPOUTL Signal", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CMPSS3_CTRIPOUTH", description: "Input Flag Clear for CMPSS3.CTRIPOUTH Signal", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CMPSS4_CTRIPOUTL", description: "Input Flag Clear for CMPSS4.CTRIPOUTL Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "CMPSS4_CTRIPOUTH", description: "Input Flag Clear for CMPSS4.CTRIPOUTH Signal", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "CLR2", description: "X-Bar Input Flag Clear Register 2", offset: "0xA", size: "32",
		bits: [
			{ name: "INPUT1", description: "Input Flag Clear for INPUT1 Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "INPUT2", description: "Input Flag Clear for INPUT2 Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "INPUT3", description: "Input Flag Clear for INPUT3 Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "INPUT4", description: "Input Flag Clear for INPUT4 Signal", size: "1", shift: "3", mask: "0x8" },
			{ name: "INPUT5", description: "Input Flag Clear for INPUT5 Signal", size: "1", shift: "4", mask: "0x10" },
			{ name: "INPUT6", description: "Input Flag Clear for INPUT6 Signal", size: "1", shift: "5", mask: "0x20" },
			{ name: "ADCSOCA", description: "Input Flag Clear for ADCSOCA Signal", size: "1", shift: "6", mask: "0x40" },
			{ name: "ADCSOCB", description: "Input Flag Clear for ADCSOCB Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "INPUT7", description: "Input Flag Clear for INPUT7 Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "INPUT8", description: "Input Flag Clear for INPUT8 Signal", size: "1", shift: "9", mask: "0x200" },
			{ name: "INPUT9", description: "Input Flag Clear for INPUT9 Signal", size: "1", shift: "10", mask: "0x400" },
			{ name: "INPUT10", description: "Input Flag Clear for INPUT10 Signal", size: "1", shift: "11", mask: "0x800" },
			{ name: "INPUT11", description: "Input Flag Clear for INPUT11 Signal", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INPUT12", description: "Input Flag Clear for INPUT12 Signal", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INPUT13", description: "Input Flag Clear for INPUT13 Signal", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INPUT14", description: "Input Flag Clear for INPUT14 Signal", size: "1", shift: "15", mask: "0x8000" },
			{ name: "ECAP1_OUT", description: "Input Flag Clear for ECAP1.OUT Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "ECAP2_OUT", description: "Input Flag Clear for ECAP2.OUT Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "ECAP3_OUT", description: "Input Flag Clear for ECAP3.OUT Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "EXTSYNCOUT", description: "Input Flag Clear for EXTSYNCOUT Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "ADCAEVT1", description: "Input Flag Clear for ADCAEVT1 Signal", size: "1", shift: "23", mask: "0x800000" },
			{ name: "ADCAEVT2", description: "Input Flag Clear for ADCAEVT2 Signal", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "ADCAEVT3", description: "Input Flag Clear for ADCAEVT3 Signal", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "ADCAEVT4", description: "Input Flag Clear for ADCAEVT4 Signal", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "ADCBEVT1", description: "Input Flag Clear for ADCBEVT1 Signal", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "ADCBEVT2", description: "Input Flag Clear for ADCBEVT2 Signal", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "ADCBEVT3", description: "Input Flag Clear for ADCBEVT3 Signal", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "ADCBEVT4", description: "Input Flag Clear for ADCBEVT4 Signal", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "ADCCEVT1", description: "Input Flag Clear for ADCCEVT1 Signal", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CLR3", description: "X-Bar Input Flag Clear Register 3", offset: "0xC", size: "32",
		bits: [
			{ name: "ADCCEVT2", description: "Input Flag Clear for ADCCEVT2 Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "ADCCEVT3", description: "Input Flag Clear for ADCCEVT3 Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "ADCCEVT4", description: "Input Flag Clear for ADCCEVT4 Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "SD1FLT1_COMPL", description: "Input Flag Clear for SD1FLT1.COMPL Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "SD1FLT1_COMPH", description: "Input Flag Clear for SD1FLT1.COMPH Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "SD1FLT2_COMPL", description: "Input Flag Clear for SD1FLT2.COMPL Signal", size: "1", shift: "9", mask: "0x200" },
			{ name: "SD1FLT2_COMPH", description: "Input Flag Clear for SD1FLT2.COMPH Signal", size: "1", shift: "10", mask: "0x400" },
			{ name: "SD1FLT3_COMPL", description: "Input Flag Clear for SD1FLT3.COMPL Signal", size: "1", shift: "11", mask: "0x800" },
			{ name: "SD1FLT3_COMPH", description: "Input Flag Clear for SD1FLT3.COMPH Signal", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SD1FLT4_COMPL", description: "Input Flag Clear for SD1FLT4.COMPL Signal", size: "1", shift: "13", mask: "0x2000" },
			{ name: "SD1FLT4_COMPH", description: "Input Flag Clear for SD1FLT4.COMPH Signal", size: "1", shift: "14", mask: "0x4000" },
			{ name: "SD2FLT1_COMPL", description: "Input Flag Clear for SD2FLT1.COMPL Signal", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SD2FLT1_COMPH", description: "Input Flag Clear for SD2FLT1.COMPH Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SD2FLT2_COMPL", description: "Input Flag Clear for SD2FLT2.COMPL Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SD2FLT2_COMPH", description: "Input Flag Clear for SD2FLT2.COMPH Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SD2FLT3_COMPL", description: "Input Flag Clear for SD2FLT3.COMPL Signal", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SD2FLT3_COMPH", description: "Input Flag Clear for SD2FLT3.COMPH Signal", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SD2FLT4_COMPL", description: "Input Flag Clear for SD2FLT4.COMPL Signal", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SD2FLT4_COMPH", description: "Input Flag Clear for SD2FLT4.COMPH Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SD1FLT1_COMPZ", description: "Input Flag clear for SD1FLT1.COMPZ Signal", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SD1FLT1_DRINT", description: "Input Flag clear for SD1FLT1.DRINT Signal", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SD1FLT2_COMPZ", description: "Input Flag clear for SD1FLT2.COMPZ Signal", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SD1FLT2_DRINT", description: "Input Flag clear for SD1FLT2.DRINT Signal", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SD1FLT3_COMPZ", description: "Input Flag clear for SD1FLT3.COMPZ Signal", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SD1FLT3_DRINT", description: "Input Flag clear for SD1FLT3.DRINT Signal", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SD1FLT4_COMPZ", description: "Input Flag clear for SD1FLT4.COMPZ Signal", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SD1FLT4_DRINT", description: "Input Flag clear for SD1FLT4.DRINT Signal", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CLR4", description: "X-Bar Input Flag Clear Register 4", offset: "0xE", size: "32",
		bits: [
			{ name: "SD2FLT1_COMPZ", description: "Input Flag clear for SD2FLT1.COMPZ Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "SD2FLT1_DRINT", description: "Input Flag clear for SD2FLT1.DRINT Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "SD2FLT2_COMPZ", description: "Input Flag clear for SD2FLT2.COMPZ Signal", size: "1", shift: "2", mask: "0x4" },
			{ name: "SD2FLT2_DRINT", description: "Input Flag clear for SD2FLT2.DRINT Signal", size: "1", shift: "3", mask: "0x8" },
			{ name: "SD2FLT3_COMPZ", description: "Input Flag clear for SD2FLT3.COMPZ Signal", size: "1", shift: "4", mask: "0x10" },
			{ name: "SD2FLT3_DRINT", description: "Input Flag clear for SD2FLT3.DRINT Signal", size: "1", shift: "5", mask: "0x20" },
			{ name: "SD2FLT4_COMPZ", description: "Input Flag clear for SD2FLT4.COMPZ Signal", size: "1", shift: "6", mask: "0x40" },
			{ name: "SD2FLT4_DRINT", description: "Input Flag clear for SD2FLT4.DRINT Signal", size: "1", shift: "7", mask: "0x80" },
			{ name: "MCANA_FEVT0", description: "Input Flag clear for MCANA_FEVT0 Signal", size: "1", shift: "9", mask: "0x200" },
			{ name: "MCANA_FEVT1", description: "Input Flag clear for MCANA_FEVT1 Signal", size: "1", shift: "10", mask: "0x400" },
			{ name: "MCANA_FEVT2", description: "Input Flag clear for MCANA_FEVT2 Signal", size: "1", shift: "11", mask: "0x800" },
			{ name: "CLB1_4_1", description: "Input Flag clear for CLB1_4.1 Signal", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CLB1_5_1", description: "Input Flag clear for CLB1_5.1 Signal", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CLB2_4_1", description: "Input Flag clear for CLB2_4.1 Signal", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CLB2_5_1", description: "Input Flag clear for CLB2_5.1 Signal", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CLB3_4_1", description: "Input Flag clear for CLB3_4.1 Signal", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CLB3_5_1", description: "Input Flag clear for CLB3_5.1 Signal", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CLB4_4_1", description: "Input Flag clear for CLB4_4.1 Signal", size: "1", shift: "22", mask: "0x400000" },
			{ name: "CLB4_5_1", description: "Input Flag clear for CLB4_5.1 Signal", size: "1", shift: "23", mask: "0x800000" },
			{ name: "ERRORSTS_ERROR", description: "Input Latch clear for ERRORSTS_ERROR Signal", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "CLAHALT", description: "Input Flag clear for CLAHALT Signal", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
];
module.exports = {
	xbarRegisters: XBAR_REGISTERS,
}
