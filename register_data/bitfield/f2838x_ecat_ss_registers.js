let ECAT_SS_REGISTERS = [
	{ name: "ESCSS_IPREVNUM", description: "IP Revision Number", offset: "0x0", size: "32",
		bits: [
			{ name: "IP_REV_MINOR", description: "Minor IP Revision Number", size: "4", shift: "0", mask: "0xF" },
			{ name: "IP_REV_MAJOR", description: "Major IP Revision Number", size: "4", shift: "4", mask: "0xF0" },
		]
	},
	{ name: "ESCSS_INTR_RIS", description: "EtherCATSS Interrupt Raw Status", offset: "0x2", size: "32",
		bits: [
			{ name: "SYNC0_RIS", description: "SYNC0 feature RIS", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNC1_RIS", description: "SYNC1 feature RIS", size: "1", shift: "1", mask: "0x2" },
			{ name: "IRQ_RIS", description: "EtherCATSS IRQ RIS", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMA_DONE_RIS", description: "DMA Done RIS", size: "1", shift: "3", mask: "0x8" },
			{ name: "TIMEOUT_ERR_RIS", description: "PDI bus Timeout Error RIS", size: "1", shift: "4", mask: "0x10" },
			{ name: "MASTER_RESET_RIS", description: "ECAT RESET RIS", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ESCSS_INTR_MASK", description: "EtherCATSS Interrupt Mask", offset: "0x4", size: "32",
		bits: [
			{ name: "SYNC0_MASK", description: "SYNC0 feature Mask", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNC1_MASK", description: "SYNC1 feature Mask", size: "1", shift: "1", mask: "0x2" },
			{ name: "IRQ_MASK", description: "EtherCATSS IRQ Mask", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMA_DONE_MASK", description: "DMA Done Mask", size: "1", shift: "3", mask: "0x8" },
			{ name: "TIMEOUT_ERR_MASK", description: "PDI Access Timeout Error Mask", size: "1", shift: "4", mask: "0x10" },
			{ name: "MASTER_RESET_MASK", description: "EtherCAT Master Reset Mask", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ESCSS_INTR_MIS", description: "EtherCATSS Masked Interrupt Status", offset: "0x6", size: "32",
		bits: [
			{ name: "SYNC0_MIS", description: "SYNC0 feature MIS", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNC1_MIS", description: "SYNC1 feature MIS", size: "1", shift: "1", mask: "0x2" },
			{ name: "IRQ_MIS", description: "EtherCATSS IRQ MIS", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMA_DONE_MIS", description: "DMA Done MIS", size: "1", shift: "3", mask: "0x8" },
			{ name: "TIMEOUT_ERR_MIS", description: "PDI bus Timeout Error MIS", size: "1", shift: "4", mask: "0x10" },
			{ name: "MASTER_RESET_MIS", description: "EtherCAT Master Reset MIS", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ESCSS_INTR_CLR", description: "EtherCATSS Interrupt Clear", offset: "0x8", size: "32",
		bits: [
			{ name: "SYNC0_CLR", description: "SYNC0 feature Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNC1_CLR", description: "SYNC1 feature Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "IRQ_CLR", description: "EtherCATSS IRQ Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMA_DONE_CLR", description: "DMA Done Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "TIMEOUT_ERR_CLR", description: "PDI Access Timeout Error Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "MASTER_RESET_CLR", description: "EtherCAT Master Reset Clear", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "ESCSS_INTR_SET", description: "EtherCATSS Interrupt Set to emulate", offset: "0xA", size: "32",
		bits: [
			{ name: "SYNC0_SET", description: "SYNC0 Set Emulate", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNC1_SET", description: "SYNC1 Set Emulate", size: "1", shift: "1", mask: "0x2" },
			{ name: "IRQ_SET", description: "EtherCATSS IRQ Set Emulate", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMA_DONE_SET", description: "DMA Done Set Emulate", size: "1", shift: "3", mask: "0x8" },
			{ name: "TIMEOUT_ERR_SET", description: "PDI Access Timeout Error Set Emulate", size: "1", shift: "4", mask: "0x10" },
			{ name: "MASTER_RESET_SET", description: "EtherCAT Master Reset Emulate", size: "1", shift: "5", mask: "0x20" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_LATCH_SEL", description: "Select for Latch0/1 inputs and LATCHIN input", offset: "0xC", size: "32",
		bits: [
			{ name: "LATCH0_SELECT", description: "LATCH0 Inputs mux select", size: "5", shift: "0", mask: "0x1F" },
			{ name: "LATCH1_SELECT", description: "LATCH1 Inputs mux select", size: "5", shift: "8", mask: "0x1F00" },
		]
	},
	{ name: "ESCSS_ACCESS_CTRL", description: "PDI interface access control config.", offset: "0xE", size: "32",
		bits: [
			{ name: "WAIT_STATES", description: "Minimum Wait States for VBUS Bridge", size: "7", shift: "0", mask: "0x7F" },
			{ name: "EN_TIMEOUT", description: "PDI Timeout enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "ENABLE_DEBUG_ACCESS", description: "Debug access enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "ENABLE_PARALLEL_PORT_ACCESS", description: "Parallel port access enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "TIMEOUT_COUNT", description: "Max timecount programmed and count while enabled.", size: "12", shift: "16", mask: "0xFFF0000" },
		]
	},
	{ name: "ESCSS_GPIN_DAT", description: "GPIN data capture for debug & override", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPIN_PIPE", description: "GPIN pipeline select", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPIN_GRP_CAP_SEL", description: "GPIN pipe group capture trigger", offset: "0x14", size: "32",
		bits: [
			{ name: "GPI_GRP_CAP_SEL0", description: "GPI7-0 capture trigger select", size: "3", shift: "0", mask: "0x7" },
			{ name: "GPI_GRP_CAP_SEL1", description: "GPI15-8 capture trigger select", size: "3", shift: "4", mask: "0x70" },
			{ name: "GPI_GRP_CAP_SEL2", description: "GPI23-16 capture trigger select", size: "3", shift: "8", mask: "0x700" },
			{ name: "GPI_GRP_CAP_SEL3", description: "GPI31-24 capture trigger select", size: "3", shift: "12", mask: "0x7000" },
		]
	},
	{ name: "ESCSS_GPOUT_DAT", description: "GPOUT data capture for debug & override", offset: "0x16", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPOUT_PIPE", description: "GPOUT pipeline select", offset: "0x18", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPOUT_GRP_CAP_SEL", description: "GPOUT pipe group capture trigger", offset: "0x1A", size: "32",
		bits: [
			{ name: "GPO_GRP_CAP_SEL0", description: "GPO7-0 capture trigger select", size: "2", shift: "0", mask: "0x3" },
			{ name: "GPO_GRP_CAP_SEL1", description: "GPO15-8 capture trigger select", size: "2", shift: "4", mask: "0x30" },
			{ name: "GPO_GRP_CAP_SEL2", description: "GPO23-16 capture trigger select", size: "2", shift: "8", mask: "0x300" },
			{ name: "GPO_GRP_CAP_SEL3", description: "GPO31-24 capture trigger select", size: "2", shift: "12", mask: "0x3000" },
		]
	},
	{ name: "ESCSS_MEM_TEST", description: "Memory Test Control", offset: "0x1C", size: "32",
		bits: [
			{ name: "INITIATE_MEM_INIT", description: "Initialize memory init", size: "1", shift: "0", mask: "0x1" },
			{ name: "MEM_INIT_DONE", description: "Memory Init done status", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "ESCSS_RESET_DEST_CONFIG", description: "ResetOut impact or destination config", offset: "0x1E", size: "32",
		bits: [
			{ name: "CPU_RESET_EN", description: "CPU reset enable for ResetOut", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPU_NMI_EN", description: "CPU NMI enable for ResetOut", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPU_INT_EN", description: "CPU Interrupt enable for ResetOut", size: "1", shift: "2", mask: "0x4" },
			{ name: "DEVICE_RESET_EN", description: "Enables RESET_OUT to impact the device reset", size: "1", shift: "7", mask: "0x80" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_SYNC0_CONFIG", description: "SYNC0 Configuration for various triggers", offset: "0x20", size: "32",
		bits: [
			{ name: "C28x_PIE_EN", description: "Connects the SYNC0 to C28x PIE Interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLA_INT_EN", description: "Connects the SYNC0 to CLA Interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "C28x_DMA_EN", description: "Connects the SYNC0 to C28x DMA Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "CM4_NVIC_EN", description: "Connects the SYNC0 to CM4 NVIC Interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "uDMA_TRIG_EN", description: "Connects the SYNC0 to uDMA Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_SYNC1_CONFIG", description: "SYNC1 Configuration for various triggers", offset: "0x22", size: "32",
		bits: [
			{ name: "C28x_PIE_EN", description: "Connects the SYNC1 to C28x PIE Interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLA_INT_EN", description: "Connects the SYNC1 to CLA Interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "C28x_DMA_EN", description: "Connects the SYNC1 to C28x DMA Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "CM4_NVIC_EN", description: "Connects the SYNC1 to CM4 NVIC Interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "uDMA_TRIG_EN", description: "Connects the SYNC1 to uDMA Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_CONFIG_LOCK", description: "EtherCATSS Configuration Lock", offset: "0x0", size: "32",
		bits: [
			{ name: "LOCK_ENABLE", description: "Locking writes to ECATSS", size: "1", shift: "0", mask: "0x1" },
			{ name: "IO_CONFIG_ENABLE", description: "Locking the IO Configuration", size: "1", shift: "4", mask: "0x10" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_MISC_IO_CONFIG", description: "RESET_IN, EEPROM IO connections select", offset: "0x2", size: "32",
		bits: [
			{ name: "RESETIN_GPIO_EN", description: "Enabled ResetIN from GPIO", size: "1", shift: "0", mask: "0x1" },
			{ name: "EEPROM_I2C_IO_EN", description: "Enables the EEPROM I2C IOPAD connection", size: "1", shift: "1", mask: "0x2" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_PHY_IO_CONFIG", description: "Control Register of ESCSS", offset: "0x4", size: "32",
		bits: [
			{ name: "PHY_PORT_CNT", description: "Number of PHY port counts", size: "2", shift: "2", mask: "0xC" },
			{ name: "PHY_INTF_IOPAD_SEL", description: "IO Combination select for PHY Interface", size: "2", shift: "4", mask: "0x30" },
			{ name: "TX_CLK_AUTO_COMP", description: "Selects TX_CLK IO to do Auto compensation", size: "1", shift: "6", mask: "0x40" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_SYNC_IO_CONFIG", description: "SYNC Signals IO configurations", offset: "0x6", size: "32",
		bits: [
			{ name: "SYNC0_IOPAD_SEL", description: "SYNC0 IO PAD select option", size: "2", shift: "0", mask: "0x3" },
			{ name: "SYNC0_GPIO_EN", description: "SYNC0 connection to OUT pad enabled", size: "1", shift: "3", mask: "0x8" },
			{ name: "SYNC1_IOPAD_SEL", description: "SYNC1 IO PAD select option", size: "2", shift: "4", mask: "0x30" },
			{ name: "SYNC1_GPIO_EN", description: "SYNC1 connection to OUT pad enabled", size: "1", shift: "7", mask: "0x80" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_LATCH_IO_CONFIG", description: "LATCH inputs IO pad select", offset: "0x8", size: "32",
		bits: [
			{ name: "LATCH0_IOPAD_SEL", description: "LATCH0 IO PAD select option", size: "2", shift: "0", mask: "0x3" },
			{ name: "LATCH0_GPIO_EN", description: "LATCH0 connection to IN pad enabled", size: "1", shift: "3", mask: "0x8" },
			{ name: "LATCH1_IOPAD_SEL", description: "LATCH1 IO PAD select option", size: "2", shift: "4", mask: "0x30" },
			{ name: "LATCH1_GPIO_EN", description: "LATCH1 connection to IN pad enabled", size: "1", shift: "7", mask: "0x80" },
			{ name: "WRITE_KEY", description: "Key to enable writing lock", size: "8", shift: "8", mask: "0xFF00" },
		]
	},
	{ name: "ESCSS_GPIN_SEL", description: "GPIN Select between IO PAD & tieoff", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPIN_IOPAD_SEL", description: "GPIN IO pad Select", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPOUT_SEL", description: "GPOUT IO pad connect select", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_GPOUT_IOPAD_SEL", description: "GPOUT IO pad select", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "ESCSS_LED_CONFIG", description: "Selection of LED o/p connect to IO pad", offset: "0x12", size: "32",
		bits: [
			{ name: "LINKACT0", description: "GPIO enable for LINKACT0 LED", size: "1", shift: "0", mask: "0x1" },
			{ name: "LINKACT1", description: "GPIO enable for LINKACT1 LED", size: "1", shift: "1", mask: "0x2" },
			{ name: "STATE", description: "GPIO enable for STATE LED", size: "1", shift: "2", mask: "0x4" },
			{ name: "ERR", description: "GPIO enable for ERR LED", size: "1", shift: "3", mask: "0x8" },
			{ name: "RUN", description: "GPIO enable for RUN LED", size: "1", shift: "4", mask: "0x10" },
			{ name: "LINKACT0_IOPAD_SEL", description: "LINKACT0 LED IO PAD select", size: "2", shift: "6", mask: "0xC0" },
			{ name: "LINKACT1_IOPAD_SEL", description: "LINKACT1 LED IO PAD select", size: "2", shift: "8", mask: "0x300" },
			{ name: "STATE_IOPAD_SEL", description: "STATE LED IO PAD select", size: "2", shift: "10", mask: "0xC00" },
			{ name: "ERR_IOPAD_SEL", description: "ERROR LED IO PAD select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "RUN_IOPAD_SEL", description: "RUN LED IO PAD select", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ESCSS_MISC_CONFIG", description: "Miscelleneous Configuration", offset: "0x14", size: "32",
		bits: [
			{ name: "TX0_SHIFT_CONFIG", description: "TX Shift configuration for Port0", size: "2", shift: "0", mask: "0x3" },
			{ name: "TX1_SHIFT_CONFIG", description: "TX Shift configuration for Port1", size: "2", shift: "2", mask: "0xC" },
			{ name: "EEPROM_SIZE", description: "EEPROM Size bound select", size: "1", shift: "4", mask: "0x10" },
			{ name: "PDI_EMULATION", description: "PDI Emulation enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "PHY_ADDR", description: "PHY Address Offset", size: "5", shift: "6", mask: "0x7C0" },
		]
	},
];
module.exports = {
	ecat_ssRegisters: ECAT_SS_REGISTERS,
}
