let AES_SS_REGISTERS = [
	{ name: "AES_GLB_INT_FLG", description: "AES Global Interrupt Flag Register", offset: "0x2", size: "32",
		bits: [
			{ name: "INT_FLG", description: "Global Interrupt Flag for AES Interrupt", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "AES_GLB_INT_CLR", description: "AES Global Interrupt Clear Register", offset: "0x4", size: "32",
		bits: [
			{ name: "INT_FLG_CLR", description: "Global Interrupt flag clear for AES Interrupt", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	aes_ssRegisters: AES_SS_REGISTERS,
}
