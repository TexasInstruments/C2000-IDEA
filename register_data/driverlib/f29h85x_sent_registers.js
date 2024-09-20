let SENT_REGISTERS = [
	{ name: "RCFG", description: "", offset: "0x20", size: "32",
		bits: [
			{ name: "RX_ENB", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RX_CRCENB", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "RSVD_0", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "RX_PPENB", description: "", size: "1", shift: "3", mask: "0x8" },
			{ name: "RX_DNIB", description: "", size: "4", shift: "4", mask: "0xF0" },
			{ name: "CRC_WIDTH", description: "", size: "2", shift: "8", mask: "0x300" },
			{ name: "RX_CRC_WITH_STATUS", description: "", size: "1", shift: "10", mask: "0x400" },
			{ name: "RX_CRCTYPE", description: "", size: "1", shift: "11", mask: "0x800" },
			{ name: "RSVD", description: "", size: "4", shift: "12", mask: "0xF000" },
			{ name: "TTCLK", description: "", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "RFDATA", description: "", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "RSDATA", description: "", offset: "0x28", size: "32",
		bits: [
			{ name: "CRC", description: "", size: "6", shift: "0", mask: "0x3F" },
			{ name: "RSVD", description: "", size: "1", shift: "6", mask: "0x40" },
			{ name: "C", description: "", size: "1", shift: "7", mask: "0x80" },
			{ name: "DATA", description: "", size: "16", shift: "8", mask: "0xFFFF00" },
			{ name: "MESSAGEID", description: "", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "RSTAT", description: "", offset: "0x2C", size: "32",
		bits: [
			{ name: "RXNIB", description: "", size: "4", shift: "0", mask: "0xF" },
			{ name: "PP", description: "", size: "1", shift: "4", mask: "0x10" },
			{ name: "RSVD", description: "", size: "3", shift: "5", mask: "0xE0" },
			{ name: "RXSLOW_ST", description: "", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RXSLOW_ACT", description: "", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RXSLOW_DN", description: "", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RX_SYNC", description: "", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RX_TTCLK", description: "", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "RCFG2", description: "", offset: "0x34", size: "32",
		bits: [
			{ name: "FIFO_MODE", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMA_ENB", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "TSTAMP_DIS", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "NOWR_ERRDATA", description: "", size: "1", shift: "3", mask: "0x8" },
			{ name: "GFILT", description: "", size: "8", shift: "4", mask: "0xFF0" },
			{ name: "RFIFO_TRIGLEV", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "RSVD", description: "", size: "3", shift: "13", mask: "0xE000" },
			{ name: "MTP_MODE", description: "", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RSVD_0", description: "", size: "12", shift: "20", mask: "0xFFF00000" },
		]
	},
	{ name: "RINTFLAG", description: "", offset: "0x40", size: "32",
		bits: [
			{ name: "GLBL", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RFAST_S1DV", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "RFAST_S2DV", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "RFAST_S3DV", description: "", size: "1", shift: "3", mask: "0x8" },
			{ name: "RFAST_S4DV", description: "", size: "1", shift: "4", mask: "0x10" },
			{ name: "RSLOW_DV", description: "", size: "1", shift: "5", mask: "0x20" },
			{ name: "RSLOW_CRCERR", description: "", size: "1", shift: "6", mask: "0x40" },
			{ name: "RSLOW_FORMATERR", description: "", size: "1", shift: "7", mask: "0x80" },
			{ name: "RFAST_S1CRCE", description: "", size: "1", shift: "8", mask: "0x100" },
			{ name: "RFAST_S2CRCE", description: "", size: "1", shift: "9", mask: "0x200" },
			{ name: "RFAST_S3CRCE", description: "", size: "1", shift: "10", mask: "0x400" },
			{ name: "RFAST_S4CRCE", description: "", size: "1", shift: "11", mask: "0x800" },
			{ name: "RFAST_S1FRME", description: "", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RFAST_S2FRME", description: "", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RFAST_S3FRME", description: "", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RFAST_S4FRME", description: "", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RTIMEOUT_ERR", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "RFAST_SYNCERR25", description: "", size: "1", shift: "20", mask: "0x100000" },
			{ name: "RFAST_SYNCERR", description: "", size: "1", shift: "21", mask: "0x200000" },
			{ name: "FREQDRIFT_ERR", description: "", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RFIFO_TRIGGER", description: "", size: "1", shift: "23", mask: "0x800000" },
			{ name: "RFIFO_OVFERR", description: "", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "RFIFO_UNDFERR", description: "", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "OVFTRIG_ERR", description: "", size: "5", shift: "26", mask: "0x7C000000" },
			{ name: "RSVD", description: "", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "REINT", description: "", offset: "0x44", size: "32",
		bits: [
			{ name: "RSVD", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD_1", description: "", size: "1", shift: "31", mask: "0x80000000" },
			{ name: "RFAST_S2DV_E", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "RFAST_S3DV_E", description: "", size: "1", shift: "3", mask: "0x8" },
			{ name: "RFAST_S4DV_E", description: "", size: "1", shift: "4", mask: "0x10" },
			{ name: "RSLOW_DV_E", description: "", size: "1", shift: "5", mask: "0x20" },
			{ name: "RSLOW_CRCERR_E", description: "", size: "1", shift: "6", mask: "0x40" },
			{ name: "RSLOW_FORMATERR_E", description: "", size: "1", shift: "7", mask: "0x80" },
			{ name: "RFAST_S1CRCE_E", description: "", size: "1", shift: "8", mask: "0x100" },
			{ name: "RFAST_S2CRCE_E", description: "", size: "1", shift: "9", mask: "0x200" },
			{ name: "RFAST_S3CRCE_E", description: "", size: "1", shift: "10", mask: "0x400" },
			{ name: "RFAST_S4CRCE_E", description: "", size: "1", shift: "11", mask: "0x800" },
			{ name: "RFAST_S1FRME_E", description: "", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RFAST_S2FRME_E", description: "", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RFAST_S3FRME_E", description: "", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RFAST_S4FRME_E", description: "", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RTIMEOUT_ERR_E", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "RFAST_SYNCERR25_E", description: "", size: "1", shift: "20", mask: "0x100000" },
			{ name: "RFAST_SYNCERR_E", description: "", size: "1", shift: "21", mask: "0x200000" },
			{ name: "FREQDRIFT_ERR_E", description: "", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RFIFO_TRIGGER_E", description: "", size: "1", shift: "23", mask: "0x800000" },
			{ name: "RFIFO_OVFERR_E", description: "", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "RFIFO_UNDFERR_E", description: "", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "OVFTRIG_ERR_E", description: "", size: "5", shift: "26", mask: "0x7C000000" },
			{ name: "RFAST_S1DV_E", description: "", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "RSETINT", description: "", offset: "0x48", size: "16",
		bits: [
			{ name: "RSVD_0", description: "", size: "1", shift: "31", mask: "0x80000000" },
			{ name: "RTIMEOUT_ERR_S", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "OVFTRIG_ERR_S", description: "", size: "5", shift: "26", mask: "0x7C000000" },
			{ name: "RSVD", description: "", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "RCLRINT", description: "", offset: "0x4C", size: "32",
		bits: [
			{ name: "GLBL_CLR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RFAST_S1DV_CLR", description: "", size: "1", shift: "1", mask: "0x2" },
			{ name: "RFAST_S2DV_CLR", description: "", size: "1", shift: "2", mask: "0x4" },
			{ name: "RFAST_S3DV_CLR", description: "", size: "1", shift: "3", mask: "0x8" },
			{ name: "RFAST_S4DV_CLR", description: "", size: "1", shift: "4", mask: "0x10" },
			{ name: "RSLOW_DV_CLR", description: "", size: "1", shift: "5", mask: "0x20" },
			{ name: "RSLOW_CRCERR_CLR", description: "", size: "1", shift: "6", mask: "0x40" },
			{ name: "RSLOW_FORMATERR_CLR", description: "", size: "1", shift: "7", mask: "0x80" },
			{ name: "RFAST_S1CRCE_CLR", description: "", size: "1", shift: "8", mask: "0x100" },
			{ name: "RFAST_S2CRCE_CLR", description: "", size: "1", shift: "9", mask: "0x200" },
			{ name: "RFAST_S3CRCE_CLR", description: "", size: "1", shift: "10", mask: "0x400" },
			{ name: "RFAST_S4CRCE_CLR", description: "", size: "1", shift: "11", mask: "0x800" },
			{ name: "RFAST_S1FRME_CLR", description: "", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RFAST_S2FRME_CLR", description: "", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RFAST_S3FRME_CLR", description: "", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RFAST_S4FRME_CLR", description: "", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RTIMEOUT_ERR_CLR", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "RFAST_SYNCERR25_CLR", description: "", size: "1", shift: "20", mask: "0x100000" },
			{ name: "RFAST_SYNCERR_CLR", description: "", size: "1", shift: "21", mask: "0x200000" },
			{ name: "FREQDRIFT_ERR_CLR", description: "", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RFIFO_TRIGGER_CLR", description: "", size: "1", shift: "23", mask: "0x800000" },
			{ name: "RFIFO_OVFERR_CLR", description: "", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "RFIFO_UNDFERR_CLR", description: "", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "OVFTRIG_ERR_CLR", description: "", size: "5", shift: "26", mask: "0x7C000000" },
			{ name: "RSVD", description: "", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CSENT_SWR", description: "", offset: "0x50", size: "32",
		bits: [
			{ name: "SWR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "DATA0_MAP", description: "", offset: "0x54", size: "32",
		bits: [
			{ name: "D0_NIB0", description: "", size: "4", shift: "0", mask: "0xF" },
			{ name: "D0_NIB1", description: "", size: "4", shift: "4", mask: "0xF0" },
			{ name: "D0_NIB2", description: "", size: "4", shift: "8", mask: "0xF00" },
			{ name: "D0_NIB3", description: "", size: "4", shift: "12", mask: "0xF000" },
			{ name: "D0_NIB4", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "D0_NIB5", description: "", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "D0_NIB6", description: "", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "D0_NIB7", description: "", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "DATA1_MAP", description: "", offset: "0x58", size: "32",
		bits: [
			{ name: "D1_NIB0", description: "", size: "4", shift: "0", mask: "0xF" },
			{ name: "D1_NIB1", description: "", size: "4", shift: "4", mask: "0xF0" },
			{ name: "D1_NIB2", description: "", size: "4", shift: "8", mask: "0xF00" },
			{ name: "D1_NIB3", description: "", size: "4", shift: "12", mask: "0xF000" },
			{ name: "D1_NIB4", description: "", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "D1_NIB5", description: "", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "D1_NIB6", description: "", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "D1_NIB7", description: "", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "CSENT_TO", description: "", offset: "0x5C", size: "16",
		bits: [
		]
	},
	{ name: "CSENT_RXD", description: "", offset: "0x60", size: "32",
		bits: [
			{ name: "RXD_I_R", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "RXVAL_CNT", description: "", offset: "0x64", size: "32",
		bits: [
			{ name: "RXVALID_CNT_R", description: "", size: "8", shift: "0", mask: "0xFF" },
			{ name: "RSVD", description: "", size: "24", shift: "8", mask: "0xFFFFFF00" },
		]
	},
	{ name: "RXDEDGE_CNT", description: "", offset: "0x68", size: "32",
		bits: [
			{ name: "RXDEDGE_CNT_R", description: "", size: "8", shift: "0", mask: "0xFF" },
			{ name: "RSVD", description: "", size: "24", shift: "8", mask: "0xFFFFFF00" },
		]
	},
	{ name: "SWR_RXVAL_CNT", description: "", offset: "0x6C", size: "32",
		bits: [
			{ name: "SWR_RXVAL_CNT", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "SWR_RXDEDGE_CNT", description: "", offset: "0x70", size: "32",
		bits: [
			{ name: "SWR_RXDEDGE_CNT", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "CSENT_VERSION", description: "", offset: "0x7C", size: "16",
		bits: [
		]
	},
	{ name: "MDATA", description: "(0 <= i < 16) Data word 'N' in TPRAM memory. The SENT TPRAM contains fast channel SENT", offset: "(0x400 + ((i) * 0x4))", count: "16", size: "16",
		bits: [
		]
	},
	{ name: "BC_MTP_EN", description: "", offset: "0x800", size: "32",
		bits: [
			{ name: "MTP_EN", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "BC_MTP_CMP1", description: "", offset: "0x804", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP2", description: "", offset: "0x808", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP3", description: "", offset: "0x80C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP4", description: "", offset: "0x810", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP5", description: "", offset: "0x814", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP6", description: "", offset: "0x818", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP7", description: "", offset: "0x81C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP8", description: "", offset: "0x820", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_CMP9", description: "", offset: "0x824", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_MTP_PERIOD", description: "", offset: "0x82C", size: "32",
		bits: [
			{ name: "PERIOD", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "BC_TRIGSEL", description: "", offset: "0x834", size: "32",
		bits: [
			{ name: "TRIGSEL", description: "", size: "7", shift: "0", mask: "0x7F" },
			{ name: "RSVD", description: "", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "BC_MTP_SWTR", description: "", offset: "0x838", size: "32",
		bits: [
			{ name: "SWTR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S1_MTP_EN", description: "", offset: "0x900", size: "32",
		bits: [
			{ name: "MTP_EN", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S1_MTP_CMP1", description: "", offset: "0x904", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP2", description: "", offset: "0x908", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP3", description: "", offset: "0x90C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP4", description: "", offset: "0x910", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP5", description: "", offset: "0x914", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP6", description: "", offset: "0x918", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP7", description: "", offset: "0x91C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP8", description: "", offset: "0x920", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP9", description: "", offset: "0x924", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_CMP10RE", description: "", offset: "0x928", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_PERIOD", description: "", offset: "0x92C", size: "32",
		bits: [
			{ name: "PERIOD", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S1_MTP_TO", description: "", offset: "0x930", size: "16",
		bits: [
		]
	},
	{ name: "S1_TRIGSEL", description: "", offset: "0x934", size: "32",
		bits: [
			{ name: "TRIGSEL", description: "", size: "7", shift: "0", mask: "0x7F" },
			{ name: "RSVD", description: "", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "S1_MTP_SWTR", description: "", offset: "0x938", size: "32",
		bits: [
			{ name: "SWTR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S2_MTP_EN", description: "", offset: "0xA00", size: "32",
		bits: [
			{ name: "MTP_EN", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S2_MTP_CMP1", description: "", offset: "0xA04", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP2", description: "", offset: "0xA08", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP3", description: "", offset: "0xA0C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP4", description: "", offset: "0xA10", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP5", description: "", offset: "0xA14", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP6", description: "", offset: "0xA18", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP7", description: "", offset: "0xA1C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP8", description: "", offset: "0xA20", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP9", description: "", offset: "0xA24", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_CMP10RE", description: "", offset: "0xA28", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_PERIOD", description: "", offset: "0xA2C", size: "32",
		bits: [
			{ name: "PERIOD", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S2_MTP_TO", description: "", offset: "0xA30", size: "16",
		bits: [
		]
	},
	{ name: "S2_TRIGSEL", description: "", offset: "0xA34", size: "32",
		bits: [
			{ name: "TRIGSEL", description: "", size: "7", shift: "0", mask: "0x7F" },
			{ name: "RSVD", description: "", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "S2_MTP_SWTR", description: "", offset: "0xA38", size: "32",
		bits: [
			{ name: "SWTR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S3_MTP_EN", description: "", offset: "0xB00", size: "32",
		bits: [
			{ name: "MTP_EN", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S3_MTP_CMP1", description: "", offset: "0xB04", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP2", description: "", offset: "0xB08", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP3", description: "", offset: "0xB0C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP4", description: "", offset: "0xB10", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP5", description: "", offset: "0xB14", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP6", description: "", offset: "0xB18", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP7", description: "", offset: "0xB1C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP8", description: "", offset: "0xB20", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP9", description: "", offset: "0xB24", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_CMP10RE", description: "", offset: "0xB28", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_PERIOD", description: "", offset: "0xB2C", size: "32",
		bits: [
			{ name: "PERIOD", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S3_MTP_TO", description: "", offset: "0xB30", size: "16",
		bits: [
		]
	},
	{ name: "S3_TRIGSEL", description: "", offset: "0xB34", size: "32",
		bits: [
			{ name: "TRIGSEL", description: "", size: "7", shift: "0", mask: "0x7F" },
			{ name: "RSVD", description: "", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "S3_MTP_SWTR", description: "", offset: "0xB38", size: "32",
		bits: [
			{ name: "SWTR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S4_MTP_EN", description: "", offset: "0xC00", size: "32",
		bits: [
			{ name: "MTP_EN", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "S4_MTP_CMP1", description: "", offset: "0xC04", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP2", description: "", offset: "0xC08", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP3", description: "", offset: "0xC0C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP4", description: "", offset: "0xC10", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP5", description: "", offset: "0xC14", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP6", description: "", offset: "0xC18", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP7", description: "", offset: "0xC1C", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP8", description: "", offset: "0xC20", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP9", description: "", offset: "0xC24", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_CMP10RE", description: "", offset: "0xC28", size: "32",
		bits: [
			{ name: "TOGGLETIME", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_PERIOD", description: "", offset: "0xC2C", size: "32",
		bits: [
			{ name: "PERIOD", description: "", size: "11", shift: "0", mask: "0x7FF" },
			{ name: "RSVD", description: "", size: "21", shift: "11", mask: "0xFFFFF800" },
		]
	},
	{ name: "S4_MTP_TO", description: "", offset: "0xC30", size: "16",
		bits: [
		]
	},
	{ name: "S4_TRIGSEL", description: "", offset: "0xC34", size: "32",
		bits: [
			{ name: "TRIGSEL", description: "", size: "7", shift: "0", mask: "0x7F" },
			{ name: "RSVD", description: "", size: "25", shift: "7", mask: "0xFFFFFF80" },
		]
	},
	{ name: "S4_MTP_SWTR", description: "", offset: "0xC38", size: "32",
		bits: [
			{ name: "SWTR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "WAITTIME", description: "", offset: "0xF00", size: "32",
		bits: [
			{ name: "WAITTIME", description: "", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "RSVD", description: "", size: "16", shift: "16", mask: "0xFFFF0000" },
		]
	},
	{ name: "TPGENSTAT", description: "", offset: "0xF04", size: "32",
		bits: [
			{ name: "ACTIVE_CH", description: "", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SWTSTAT", description: "", size: "1", shift: "7", mask: "0x80" },
			{ name: "TRIG_REQ", description: "", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "RSVD", description: "", size: "2", shift: "5", mask: "0x60" },
			{ name: "RSVD_1", description: "", size: "19", shift: "13", mask: "0xFFFFE000" },
		]
	},
	{ name: "MTP_VERSION", description: "", offset: "0xF30", size: "16",
		bits: [
		]
	},
	{ name: "MTP_SWR", description: "", offset: "0xF3C", size: "32",
		bits: [
			{ name: "SWR", description: "", size: "1", shift: "0", mask: "0x1" },
			{ name: "RSVD", description: "", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
];
module.exports = {
	sentRegisters: SENT_REGISTERS,
}
