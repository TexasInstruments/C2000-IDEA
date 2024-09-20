let DEBUGSS_REGISTERS = [
	{ name: "PASSWORD_ID", description: "Password ID", offset: "0x0", size: "16",
		bits: [
			{ name: "ID", description: "Password ID", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "PASSWORD1", description: "Password1 Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "PASSWORD2", description: "Password2 Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "PASSWORD3", description: "Password3 Register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "PASSWORD4", description: "Password4 Register", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "DEBUG_ENABLE_STATUS", description: "Debug status register", offset: "0x14", size: "16",
		bits: [
			{ name: "JTAG_DBGEN", description: "JTAG Full Debug enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "ZONE0_DBGEN", description: "Zone1 Full Debug enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "ZONE1_DBGEN", description: "Zone2 Full Debug enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "ZONE2_DBGEN", description: "Zone3 Full Debug enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "ZONE3_DBGEN", description: "Zone4 Full Debug enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "PARTIAL_ZONE1_DBGEN", description: "Partial Zone1 Debug enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "PARTIAL_ZONE2_DBGEN", description: "Partial Zone2 Debug enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "PARTIAL_ZONE3_DBGEN", description: "Partial Zone3 Debug enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "ZONEX_DBGEN", description: "ZoneX Debug enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "TEST_PASSWORD1", description: "Test Password1 Register", offset: "0x80", size: "16",
		bits: [
		]
	},
	{ name: "TEST_PASSWORD2", description: "Test Password2 Register", offset: "0x84", size: "16",
		bits: [
		]
	},
	{ name: "TEST_PASSWORD3", description: "Test Password3 Register", offset: "0x88", size: "16",
		bits: [
		]
	},
	{ name: "TEST_PASSWORD4", description: "Test Password4 Register", offset: "0x8C", size: "16",
		bits: [
		]
	},
	{ name: "DBG2CPU1_CHR", description: "Debugger to CPU1/SSU challenge response", offset: "0x100", size: "16",
		bits: [
		]
	},
	{ name: "CPU12DBG_CHR", description: "CPU1/SSU to Debugger challenge response", offset: "0x104", size: "16",
		bits: [
		]
	},
	{ name: "DBG2CPU1_HS", description: "Debugger to CPU1/SSU Handshake", offset: "0x108", size: "16",
		bits: [
		]
	},
	{ name: "CPU12DBG_HS", description: "CPU1/SSU to Debugger Handshake", offset: "0x10C", size: "16",
		bits: [
		]
	},
	{ name: "DBG2CPU1_INT_FLG", description: "Debugger to CPU1 interrupt flag", offset: "0x110", size: "16",
		bits: [
			{ name: "INT", description: "Debugger to CPU Interrupt flag", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DBG2CPU1_INT_FLG_SET", description: "Debugger to CPU1 interrupt set", offset: "0x114", size: "16",
		bits: [
			{ name: "INT", description: "Debugger to CPU Interrupt set", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "DBG2CPU1_INT_FLG_CLR", description: "Debugger to CPU1 interrupt clear", offset: "0x118", size: "16",
		bits: [
			{ name: "INT", description: "Debugger to CPU Interrupt flag clear", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SSU_DBG_STATUS", description: "Read only SSU DBG Status", offset: "0x204", size: "16",
		bits: [
		]
	},
	{ name: "HSM_DBG_STATUS", description: "Read only HSM DBG Status", offset: "0x208", size: "16",
		bits: [
		]
	},
	{ name: "CTL_DBG_STATUS", description: "Read only CTL DBG Status", offset: "0x20C", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STATUS0", description: "Read only GEN DBG Status0", offset: "0x210", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STATUS1", description: "Read only GEN DBG Status1", offset: "0x214", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STATUS2", description: "Read only GEN DBG Status2", offset: "0x218", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STATUS3", description: "Read only GEN DBG Status3", offset: "0x21C", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_STATUS0", description: "Read only GEN DBG_STICKY Status0", offset: "0x220", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_STATUS1", description: "Read only GEN DBG_STICKY Status1", offset: "0x224", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_STATUS2", description: "Read only GEN DBG_STICKY Status2", offset: "0x228", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_STATUS3", description: "Read only GEN DBG_STICKY Status3", offset: "0x22C", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_CLR0", description: "Write only GEN_DBG_STICKY clear register0", offset: "0x230", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_CLR1", description: "Write only GEN_DBG_STICKY clear register1", offset: "0x234", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_CLR2", description: "Write only GEN_DBG_STICKY clear register2", offset: "0x238", size: "16",
		bits: [
		]
	},
	{ name: "GEN_DBG_STICKY_CLR3", description: "Write only GEN_DBG_STICKY clear register3", offset: "0x23C", size: "16",
		bits: [
		]
	},
	{ name: "C29_DBG_RX_ADDR", description: "RX Data Write Address", offset: "0x240", size: "32",
		bits: [
			{ name: "ADDRESS", description: "Rx Bus Address register", size: "31", shift: "1", mask: "0xFFFFFFFE" },
		]
	},
	{ name: "JTAG_GEN", description: "jtag general purpose register", offset: "0x244", size: "16",
		bits: [
		]
	},
];
module.exports = {
	debugssRegisters: DEBUGSS_REGISTERS,
}
