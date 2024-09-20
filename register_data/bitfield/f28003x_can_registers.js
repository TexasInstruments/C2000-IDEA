let CAN_REGISTERS = [
	{ name: "CAN_CTL", description: "CAN Control Register", offset: "0x0", size: "32",
		bits: [
			{ name: "Init", description: "Initialization", size: "1", shift: "0", mask: "0x1" },
			{ name: "IE0", description: "Interrupt line 0 Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "SIE", description: "Status Change Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "EIE", description: "Error Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "DAR", description: "Disable Automatic Retransmission", size: "1", shift: "5", mask: "0x20" },
			{ name: "CCE", description: "Configuration Change Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "Test", description: "Test Mode Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "IDS", description: "Interruption Debug Support Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "ABO", description: "Auto-Bus-On Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "PMD", description: "Parity on/off", size: "4", shift: "10", mask: "0x3C00" },
			{ name: "SWR", description: "SW Reset Enable", size: "1", shift: "15", mask: "0x8000" },
			{ name: "INITDBG", description: "Debug Mode Status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "IE1", description: "Interrupt line 1 Enable Disabled", size: "1", shift: "17", mask: "0x20000" },
			{ name: "DE1", description: "Enable DMA request line", size: "1", shift: "18", mask: "0x40000" },
			{ name: "DE2", description: "Enable DMA request line", size: "1", shift: "19", mask: "0x80000" },
			{ name: "DE3", description: "Enable DMA request line", size: "1", shift: "20", mask: "0x100000" },
		]
	},
	{ name: "CAN_ES", description: "Error and Status Register", offset: "0x4", size: "32",
		bits: [
			{ name: "LEC", description: "Last Error Code", size: "3", shift: "0", mask: "0x7" },
			{ name: "TxOk", description: "Transmission status", size: "1", shift: "3", mask: "0x8" },
			{ name: "RxOk", description: "Reception status", size: "1", shift: "4", mask: "0x10" },
			{ name: "EPass", description: "Error Passive State", size: "1", shift: "5", mask: "0x20" },
			{ name: "EWarn", description: "Warning State", size: "1", shift: "6", mask: "0x40" },
			{ name: "BOff", description: "Bus-Off State", size: "1", shift: "7", mask: "0x80" },
			{ name: "PER", description: "Parity Error Detected", size: "1", shift: "8", mask: "0x100" },
		]
	},
	{ name: "CAN_ERRC", description: "Error Counter Register", offset: "0x8", size: "32",
		bits: [
			{ name: "TEC", description: "Transmit Error Counter", size: "8", shift: "0", mask: "0xFF" },
			{ name: "REC", description: "Receive Error Counter", size: "7", shift: "8", mask: "0x7F00" },
			{ name: "RP", description: "Receive Error Passive", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CAN_BTR", description: "Bit Timing Register", offset: "0xC", size: "32",
		bits: [
			{ name: "BRP", description: "Baud Rate Prescaler", size: "6", shift: "0", mask: "0x3F" },
			{ name: "SJW", description: "Synchronization Jump Width", size: "2", shift: "6", mask: "0xC0" },
			{ name: "TSEG1", description: "Time segment", size: "4", shift: "8", mask: "0xF00" },
			{ name: "TSEG2", description: "Time segment", size: "3", shift: "12", mask: "0x7000" },
			{ name: "BRPE", description: "Baud Rate Prescaler Extension", size: "4", shift: "16", mask: "0xF0000" },
		]
	},
	{ name: "CAN_INT", description: "Interrupt Register", offset: "0x10", size: "32",
		bits: [
			{ name: "INT0ID", description: "Interrupt Identifier", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "INT1ID", description: "Interrupt 1 Identifier", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "CAN_TEST", description: "Test Register", offset: "0x14", size: "32",
		bits: [
			{ name: "SILENT", description: "Silent Mode", size: "1", shift: "3", mask: "0x8" },
			{ name: "LBACK", description: "Loopback Mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "TX", description: "CANTX Pin Control", size: "2", shift: "5", mask: "0x60" },
			{ name: "RX", description: "CANRX Pin Status", size: "1", shift: "7", mask: "0x80" },
			{ name: "EXL", description: "External Loopback Mode", size: "1", shift: "8", mask: "0x100" },
			{ name: "RDA", description: "RAM Direct Access Enable:", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "CAN_PERR", description: "CAN Parity Error Code Register", offset: "0x1C", size: "32",
		bits: [
			{ name: "MSG_NUM", description: "Message Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "WORD_NUM", description: "Word Number", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "CAN_RAM_INIT", description: "CAN RAM Initialization Register", offset: "0x40", size: "32",
		bits: [
			{ name: "KEY0", description: "KEY0", size: "1", shift: "0", mask: "0x1" },
			{ name: "KEY1", description: "KEY1", size: "1", shift: "1", mask: "0x2" },
			{ name: "KEY2", description: "KEY2", size: "1", shift: "2", mask: "0x4" },
			{ name: "KEY3", description: "KEY3", size: "1", shift: "3", mask: "0x8" },
			{ name: "CAN_RAM_INIT", description: "Initialize CAN Mailbox RAM", size: "1", shift: "4", mask: "0x10" },
			{ name: "RAM_INIT_DONE", description: "CAN RAM initialization complete", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "CAN_GLB_INT_EN", description: "CAN Global Interrupt Enable Register", offset: "0x50", size: "32",
		bits: [
			{ name: "GLBINT0_EN", description: "Global Interrupt Enable for  CANINT0", size: "1", shift: "0", mask: "0x1" },
			{ name: "GLBINT1_EN", description: "Global Interrupt Enable for  CANINT1", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "CAN_GLB_INT_FLG", description: "CAN Global Interrupt Flag Register", offset: "0x54", size: "32",
		bits: [
			{ name: "INT0_FLG", description: "Global Interrupt Flag for CANINT0", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT1_FLG", description: "Global Interrupt Flag for CANINT1", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "CAN_GLB_INT_CLR", description: "CAN Global Interrupt Clear Register", offset: "0x58", size: "32",
		bits: [
			{ name: "INT0_FLG_CLR", description: "Global Interrupt flag clear for CANINT0", size: "1", shift: "0", mask: "0x1" },
			{ name: "INT1_FLG_CLR", description: "Global Interrupt flag clear for CANINT1", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "CAN_ABOTR", description: "Auto-Bus-On Time Register", offset: "0x80", size: "32",
		bits: [
		]
	},
	{ name: "CAN_TXRQ_X", description: "CAN Transmission Request Register", offset: "0x84", size: "32",
		bits: [
			{ name: "TxRqstReg1", description: "Transmit Request Register 1", size: "2", shift: "0", mask: "0x3" },
			{ name: "TxRqstReg2", description: "Transmit Request Register 2", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "CAN_TXRQ_21", description: "CAN Transmission Request 2_1 Register", offset: "0x88", size: "32",
		bits: [
		]
	},
	{ name: "CAN_NDAT_X", description: "CAN New Data Register", offset: "0x98", size: "32",
		bits: [
			{ name: "NewDatReg1", description: "New Data Register 1", size: "2", shift: "0", mask: "0x3" },
			{ name: "NewDatReg2", description: "New Data Register 2", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "CAN_NDAT_21", description: "CAN New Data 2_1 Register", offset: "0x9C", size: "32",
		bits: [
		]
	},
	{ name: "CAN_IPEN_X", description: "CAN Interrupt Pending Register", offset: "0xAC", size: "32",
		bits: [
			{ name: "IntPndReg1", description: "Interrupt Pending Register 1", size: "2", shift: "0", mask: "0x3" },
			{ name: "IntPndReg2", description: "Interrupt Pending Register 2", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "CAN_IPEN_21", description: "CAN Interrupt Pending 2_1 Register", offset: "0xB0", size: "32",
		bits: [
		]
	},
	{ name: "CAN_MVAL_X", description: "CAN Message Valid Register", offset: "0xC0", size: "32",
		bits: [
			{ name: "MsgValReg1", description: "Message Valid Register 1", size: "2", shift: "0", mask: "0x3" },
			{ name: "MsgValReg2", description: "Message Valid Register 2", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "CAN_MVAL_21", description: "CAN Message Valid 2_1 Register", offset: "0xC4", size: "32",
		bits: [
		]
	},
	{ name: "CAN_IP_MUX21", description: "CAN Interrupt Multiplexer 2_1 Register", offset: "0xD8", size: "32",
		bits: [
		]
	},
	{ name: "CAN_IF1CMD", description: "IF1 Command Register", offset: "0x100", size: "32",
		bits: [
			{ name: "MSG_NUM", description: "Message Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "DMAactive", description: "DMA Status", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Busy", description: "Busy Flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "DATA_B", description: "Access Data Bytes 4-7", size: "1", shift: "16", mask: "0x10000" },
			{ name: "DATA_A", description: "Access Data Bytes 0-3", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TXRQST", description: "Access Transmission Request Bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "ClrIntPnd", description: "Clear Interrupt Pending Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "Control", description: "Access Control Bits", size: "1", shift: "20", mask: "0x100000" },
			{ name: "Arb", description: "Access Arbitration Bits", size: "1", shift: "21", mask: "0x200000" },
			{ name: "Mask", description: "Access Mask Bits", size: "1", shift: "22", mask: "0x400000" },
			{ name: "DIR", description: "Write/Read Direction", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "CAN_IF1MSK", description: "IF1 Mask Register", offset: "0x104", size: "32",
		bits: [
			{ name: "Msk", description: "Identifier Mask", size: "29", shift: "0", mask: "0x1FFFFFFF" },
			{ name: "MDir", description: "Mask Message Direction", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MXtd", description: "Mask Extended Identifier", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CAN_IF1ARB", description: "IF1 Arbitration Register", offset: "0x108", size: "32",
		bits: [
			{ name: "ID", description: "`", size: "29", shift: "0", mask: "0x1FFFFFFF" },
			{ name: "Dir", description: "Message Direction", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "Xtd", description: "Extended Identifier", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MsgVal", description: "Message Valid", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CAN_IF1MCTL", description: "IF1 Message Control Register", offset: "0x10C", size: "32",
		bits: [
			{ name: "DLC", description: "Data length code", size: "4", shift: "0", mask: "0xF" },
			{ name: "EoB", description: "End of Block", size: "1", shift: "7", mask: "0x80" },
			{ name: "TxRqst", description: "Transmit Request", size: "1", shift: "8", mask: "0x100" },
			{ name: "RmtEn", description: "Remote Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "RxIE", description: "Receive Interrupt Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "TxIE", description: "Transmit Interrupt Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "UMask", description: "Use Acceptance Mask", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IntPnd", description: "Interrupt Pending", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MsgLst", description: "Message Lost", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NewDat", description: "New Data", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CAN_IF1DATA", description: "IF1 Data A Register", offset: "0x110", size: "32",
		bits: [
			{ name: "Data_0", description: "Data Byte 0", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Data_1", description: "Data Byte 1", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "Data_2", description: "Data Byte 2", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "Data_3", description: "Data Byte 3", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "CAN_IF1DATB", description: "IF1 Data B Register", offset: "0x114", size: "32",
		bits: [
			{ name: "Data_4", description: "Data Byte 4", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Data_5", description: "Data Byte 5", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "Data_6", description: "Data Byte 6", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "Data_7", description: "Data Byte 7", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "CAN_IF2CMD", description: "IF2 Command Register", offset: "0x120", size: "32",
		bits: [
			{ name: "MSG_NUM", description: "Message Number", size: "8", shift: "0", mask: "0xFF" },
			{ name: "DMAactive", description: "DMA Status", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Busy", description: "Busy Flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "DATA_B", description: "Access Data Bytes 4-7", size: "1", shift: "16", mask: "0x10000" },
			{ name: "DATA_A", description: "Access Data Bytes 0-3", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TxRqst", description: "Access Transmission Request Bit", size: "1", shift: "18", mask: "0x40000" },
			{ name: "ClrIntPnd", description: "Clear Interrupt Pending Bit", size: "1", shift: "19", mask: "0x80000" },
			{ name: "Control", description: "Access Control Bits", size: "1", shift: "20", mask: "0x100000" },
			{ name: "Arb", description: "Access Arbitration Bits", size: "1", shift: "21", mask: "0x200000" },
			{ name: "Mask", description: "Access Mask Bits", size: "1", shift: "22", mask: "0x400000" },
			{ name: "DIR", description: "Write/Read Direction", size: "1", shift: "23", mask: "0x800000" },
		]
	},
	{ name: "CAN_IF2MSK", description: "IF2 Mask Register", offset: "0x124", size: "32",
		bits: [
			{ name: "Msk", description: "Identifier Mask", size: "29", shift: "0", mask: "0x1FFFFFFF" },
			{ name: "MDir", description: "Mask Message Direction", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MXtd", description: "Mask Extended Identifier", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CAN_IF2ARB", description: "IF2 Arbitration Register", offset: "0x128", size: "32",
		bits: [
			{ name: "ID", description: "Message  Identifier", size: "29", shift: "0", mask: "0x1FFFFFFF" },
			{ name: "Dir", description: "Message Direction", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "Xtd", description: "Extended Identifier", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MsgVal", description: "Message Valid", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CAN_IF2MCTL", description: "IF2 Message Control Register", offset: "0x12C", size: "32",
		bits: [
			{ name: "DLC", description: "Data length code", size: "4", shift: "0", mask: "0xF" },
			{ name: "EoB", description: "End of Block", size: "1", shift: "7", mask: "0x80" },
			{ name: "TxRqst", description: "Transmit Request", size: "1", shift: "8", mask: "0x100" },
			{ name: "RmtEn", description: "Remote Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "RxIE", description: "Receive Interrupt Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "TxIE", description: "Transmit Interrupt Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "UMask", description: "Use Acceptance Mask", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IntPnd", description: "Interrupt Pending", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MsgLst", description: "Message Lost", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NewDat", description: "New Data", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CAN_IF2DATA", description: "IF2 Data A Register", offset: "0x130", size: "32",
		bits: [
			{ name: "Data_0", description: "Data Byte 0", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Data_1", description: "Data Byte 1", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "Data_2", description: "Data Byte 2", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "Data_3", description: "Data Byte 3", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "CAN_IF2DATB", description: "IF2 Data B Register", offset: "0x134", size: "32",
		bits: [
			{ name: "Data_4", description: "Data Byte 4", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Data_5", description: "Data Byte 5", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "Data_6", description: "Data Byte 6", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "Data_7", description: "Data Byte 7", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "CAN_IF3OBS", description: "IF3 Observation Register", offset: "0x140", size: "32",
		bits: [
			{ name: "Mask", description: "Mask data read observation", size: "1", shift: "0", mask: "0x1" },
			{ name: "Arb", description: "Arbitration data read observation", size: "1", shift: "1", mask: "0x2" },
			{ name: "Ctrl", description: "Ctrl read observation", size: "1", shift: "2", mask: "0x4" },
			{ name: "Data_A", description: "Data A read observation", size: "1", shift: "3", mask: "0x8" },
			{ name: "Data_B", description: "Data B read observation", size: "1", shift: "4", mask: "0x10" },
			{ name: "IF3SM", description: "IF3 Status of Mask data read access", size: "1", shift: "8", mask: "0x100" },
			{ name: "IF3SA", description: "IF3 Status of Arbitration data read access", size: "1", shift: "9", mask: "0x200" },
			{ name: "IF3SC", description: "IF3 Status of Control bits read access", size: "1", shift: "10", mask: "0x400" },
			{ name: "IF3SDA", description: "IF3 Status of Data A read access", size: "1", shift: "11", mask: "0x800" },
			{ name: "IF3SDB", description: "IF3 Status of Data B read access", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IF3Upd", description: "IF3 Update Data", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CAN_IF3MSK", description: "IF3 Mask Register", offset: "0x144", size: "32",
		bits: [
			{ name: "Msk", description: "Mask", size: "29", shift: "0", mask: "0x1FFFFFFF" },
			{ name: "MDir", description: "Mask Message Direction", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MXtd", description: "Mask Extended Identifier", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CAN_IF3ARB", description: "IF3 Arbitration Register", offset: "0x148", size: "32",
		bits: [
			{ name: "ID", description: "Message  Identifier", size: "29", shift: "0", mask: "0x1FFFFFFF" },
			{ name: "Dir", description: "Message Direction", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "Xtd", description: "Extended Identifier", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MsgVal", description: "Message Valid", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CAN_IF3MCTL", description: "IF3 Message Control Register", offset: "0x14C", size: "32",
		bits: [
			{ name: "DLC", description: "Data length code", size: "4", shift: "0", mask: "0xF" },
			{ name: "EoB", description: "End of Block", size: "1", shift: "7", mask: "0x80" },
			{ name: "TxRqst", description: "Transmit Request", size: "1", shift: "8", mask: "0x100" },
			{ name: "RmtEn", description: "Remote Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "RxIE", description: "Receive Interrupt Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "TxIE", description: "Transmit Interrupt Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "UMask", description: "Use Acceptance Mask", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IntPnd", description: "Interrupt Pending", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MsgLst", description: "Message Lost", size: "1", shift: "14", mask: "0x4000" },
			{ name: "NewDat", description: "New Data", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "CAN_IF3DATA", description: "IF3 Data A Register", offset: "0x150", size: "32",
		bits: [
			{ name: "Data_0", description: "Data Byte 0", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Data_1", description: "Data Byte 1", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "Data_2", description: "Data Byte 2", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "Data_3", description: "Data Byte 3", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "CAN_IF3DATB", description: "IF3 Data B Register", offset: "0x154", size: "32",
		bits: [
			{ name: "Data_4", description: "Data Byte 4", size: "8", shift: "0", mask: "0xFF" },
			{ name: "Data_5", description: "Data Byte 5", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "Data_6", description: "Data Byte 6", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "Data_7", description: "Data Byte 7", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "CAN_IF3UPD", description: "IF3 Update Enable Register", offset: "0x160", size: "32",
		bits: [
		]
	},
];
module.exports = {
	canRegisters: CAN_REGISTERS,
}
