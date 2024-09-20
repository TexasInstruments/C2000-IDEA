let AES_REGISTERS = [
	{ name: "KEY2_6", description: "XTS Second Key or CBC-MAC Third Key", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_7", description: "XTS Second Key or CBC-MAC Third Key", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_4", description: "XTS/CCM Second Key or CBC-MAC Third Key", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_5", description: "XTS Second Key or CBC-MAC Third Key", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_2", description: "XTS/CCM/CBC-MAC Second Key or Hash Key Input", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_3", description: "XTS/CCM/CBC-MAC Second Key or Hash Key Input", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_0", description: "XTS/CCM/CBC-MAC Second Key or Hash Key Input", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "KEY2_1", description: "XTS/CCM/CBC-MAC Second Key or Hash Key Input", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_6", description: "Key", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_7", description: "Key", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_4", description: "Key", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_5", description: "Key", offset: "0x2C", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_2", description: "Key", offset: "0x30", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_3", description: "Key", offset: "0x34", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_0", description: "Key", offset: "0x38", size: "16",
		bits: [
		]
	},
	{ name: "KEY1_1", description: "Key", offset: "0x3C", size: "16",
		bits: [
		]
	},
	{ name: "IV_IN_OUT_0", description: "Initialization Vector 0", offset: "0x40", size: "16",
		bits: [
		]
	},
	{ name: "IV_IN_OUT_1", description: "Initialization Vector 1", offset: "0x44", size: "16",
		bits: [
		]
	},
	{ name: "IV_IN_OUT_2", description: "Initialization Vector 2", offset: "0x48", size: "16",
		bits: [
		]
	},
	{ name: "IV_IN_OUT_3", description: "Initialization Vector 3", offset: "0x4C", size: "16",
		bits: [
		]
	},
	{ name: "CTRL", description: "Input/Output Buffer Control and Mode Selection", offset: "0x50", size: "32",
		bits: [
			{ name: "OUTPUT_READY", description: "Output Ready Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "INPUT_READY", description: "Input Ready Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIRECTION", description: "Encryption/Decryption Selection", size: "1", shift: "2", mask: "0x4" },
			{ name: "KEY_SIZE", description: "Key Size", size: "2", shift: "3", mask: "0x18" },
			{ name: "MODE", description: "ECB/CBC Mode", size: "1", shift: "5", mask: "0x20" },
			{ name: "CTR", description: "Counter Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "CTR_WIDTH", description: "AES-CTR Mode Counter Width", size: "2", shift: "7", mask: "0x180" },
			{ name: "ICM", description: "AES Integer Counter Mode (ICM) Enable", size: "1", shift: "9", mask: "0x200" },
			{ name: "CFB", description: "Full block AES cipher feedback mode (CFB128) Enable", size: "1", shift: "10", mask: "0x400" },
			{ name: "XTS", description: "AES-XTS Operation Enable", size: "2", shift: "11", mask: "0x1800" },
			{ name: "F8", description: "AES f8 Mode Enable", size: "1", shift: "13", mask: "0x2000" },
			{ name: "F9", description: "AES f9 Mode Enable", size: "1", shift: "14", mask: "0x4000" },
			{ name: "CBCMAC", description: "AES-CBC MAC Enable", size: "1", shift: "15", mask: "0x8000" },
			{ name: "GCM", description: "AES-GCM Mode Enable", size: "2", shift: "16", mask: "0x30000" },
			{ name: "CCM", description: "AES-CCM Mode Enable", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CCM_L", description: "Width of the length field for CCM operations", size: "3", shift: "19", mask: "0x380000" },
			{ name: "CCM_M", description: "Length of the authentication field for CCM operations", size: "3", shift: "22", mask: "0x1C00000" },
			{ name: "SAVE_CONTEXT", description: "TAG or Result IV Save", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SVCTXTRDY", description: "AES TAG/IV Block(s) Ready", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "CTXTRDY", description: "Context Data Registers Ready", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "C_LENGTH_0", description: "Crypto Data Length 0", offset: "0x54", size: "16",
		bits: [
		]
	},
	{ name: "C_LENGTH_1", description: "Crypto Data Length 1", offset: "0x58", size: "16",
		bits: [
		]
	},
	{ name: "AUTH_LENGTH", description: "AAD Data Length", offset: "0x5C", size: "16",
		bits: [
		]
	},
	{ name: "DATA_IN_OUT_0", description: "Data Word 0", offset: "0x60", size: "16",
		bits: [
		]
	},
	{ name: "DATA_IN_OUT_1", description: "Data Word 1", offset: "0x64", size: "16",
		bits: [
		]
	},
	{ name: "DATA_IN_OUT_2", description: "Data Word 2", offset: "0x68", size: "16",
		bits: [
		]
	},
	{ name: "DATA_IN_OUT_3", description: "Data Word 3", offset: "0x6C", size: "16",
		bits: [
		]
	},
	{ name: "TAG_OUT_0", description: "Hash Result 0", offset: "0x70", size: "16",
		bits: [
		]
	},
	{ name: "TAG_OUT_1", description: "Hash Result 1", offset: "0x74", size: "16",
		bits: [
		]
	},
	{ name: "TAG_OUT_2", description: "Hash Result 2", offset: "0x78", size: "16",
		bits: [
		]
	},
	{ name: "TAG_OUT_3", description: "Hash Result 3", offset: "0x7C", size: "16",
		bits: [
		]
	},
	{ name: "REV", description: "Module Revision Number", offset: "0x80", size: "16",
		bits: [
		]
	},
	{ name: "SYSCONFIG", description: "System Configuration", offset: "0x84", size: "16",
		bits: [
			{ name: "AUTOIDLE", description: "autoidle", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOFTRESET", description: "Soft Reset", size: "1", shift: "1", mask: "0x2" },
			{ name: "SIDLE", description: "Slave Idle Mode", size: "2", shift: "2", mask: "0xC" },
			{ name: "DMA_REQ_DATA_IN_EN", description: "DMA Request Data In Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "DMA_REQ_DATA_OUT_EN", description: "DMA Request Data Out Enable", size: "1", shift: "6", mask: "0x40" },
			{ name: "DMA_REQ_CONTEXT_IN_EN", description: "DMA Request Context In Enable", size: "1", shift: "7", mask: "0x80" },
			{ name: "DMA_REQ_CONTEXT_OUT_EN", description: "DMA Request Context Out Enable", size: "1", shift: "8", mask: "0x100" },
			{ name: "MAP_CONTEXT_OUT_ON_DATA_OUT", description: "Map Context Out on Data Out Enable", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "SYSSTATUS", description: "Reset Status", offset: "0x88", size: "16",
		bits: [
			{ name: "RESETDONE", description: "Reset Done", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "IRQSTATUS", description: "Interrupt Status", offset: "0x8C", size: "16",
		bits: [
			{ name: "CONTEXT_IN", description: "Context In Interrupt Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_IN", description: "Data In Interrupt Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "DATA_OUT", description: "Data Out Interrupt Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "CONTEXT_OUT", description: "Context Output Interrupt Status", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "IRQENABLE", description: "Interrupt Enable", offset: "0x90", size: "16",
		bits: [
			{ name: "CONTEXT_IN", description: "Context In Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "DATA_IN", description: "Data In Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "DATA_OUT", description: "Data Out Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "CONTEXT_OUT", description: "Context Out Interrupt Enable", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "DIRTY_BITS", description: "Accessed / Dirty Bits", offset: "0x94", size: "16",
		bits: [
			{ name: "S_ACCESS", description: "AES Access Bit", size: "1", shift: "0", mask: "0x1" },
			{ name: "S_DIRTY", description: "AES Dirty Bit", size: "1", shift: "1", mask: "0x2" },
		]
	},
];
module.exports = {
	aesRegisters: AES_REGISTERS,
}
