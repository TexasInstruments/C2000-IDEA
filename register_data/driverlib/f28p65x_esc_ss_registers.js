let ESC_SS_REGISTERS = [
	{ name: "IPREVNUM", description: "IP Revision Number", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "INTR_RIS", description: "EtherCATSS Interrupt Raw Status", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "INTR_MASK", description: "EtherCATSS Interrupt Mask", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "INTR_MIS", description: "EtherCATSS Masked Interrupt Status", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "INTR_CLR", description: "EtherCATSS Interrupt Clear", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "INTR_SET", description: "EtherCATSS Interrupt Set to emulate", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "LATCH_SEL", description: "Select for Latch0/1 inputs and LATCHIN input", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "ACCESS_CTRL", description: "PDI interface access control config.", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "GPIN_DAT", description: "GPIN data capture for debug & override", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "GPIN_PIPE", description: "GPIN pipeline select", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "GPIN_GRP_CAP_SEL", description: "GPIN pipe group capture trigger", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "GPOUT_DAT", description: "GPOUT data capture for debug & override", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "GPOUT_PIPE", description: "GPOUT pipeline select", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "GPOUT_GRP_CAP_SEL", description: "GPOUT pipe group capture trigger", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "MEM_TEST", description: "Memory Test Control", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "RESET_DEST_CONFIG", description: "ResetOut impact or destination config", offset: "0x1E", size: "16",
		bits: [
		]
	},
	{ name: "SYNC0_CONFIG", description: "SYNC0 Configuration for various triggers", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "SYNC1_CONFIG", description: "SYNC1 Configuration for various triggers", offset: "0x22", size: "16",
		bits: [
		]
	},
	{ name: "CONFIG_LOCK", description: "EtherCATSS Configuration Lock", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "MISC_IO_CONFIG", description: "RESET_IN, EEPROM IO connections select", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "PHY_IO_CONFIG", description: "Control Register of ESCSS", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "SYNC_IO_CONFIG", description: "SYNC Signals IO configurations", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "LATCH_IO_CONFIG", description: "LATCH inputs IO pad select", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "GPIN_SEL", description: "GPIN Select between IO PAD & tieoff", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "GPOUT_SEL", description: "GPOUT IO pad connect select", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "LED_CONFIG", description: "Selection of LED o/p connect to IO pad", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "MISC_CONFIG", description: "Miscelleneous Configuration", offset: "0x14", size: "16",
		bits: [
		]
	},
];
module.exports = {
	esc_ssRegisters: ESC_SS_REGISTERS,
}
