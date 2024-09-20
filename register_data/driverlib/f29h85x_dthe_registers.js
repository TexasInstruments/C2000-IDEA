let DTHE_REGISTERS = [
	{ name: "S_EIP_CONFIG", description: "EIP Configuration register", offset: "0x0", size: "16",
		bits: [
			{ name: "ASE", description: "AES supervisor mode enable", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "S_EIP57T_IMST", description: "EIP57T Interrupt Mask Set Register", offset: "0x20", size: "16",
		bits: [
			{ name: "CIN", description: "Interrupt Mask Set for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Interrupt Mask Set for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Interrupt Mask Set for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "S_EIP57T_IRIS", description: "EIP57T Interrupt Raw Interrupt Status Register", offset: "0x24", size: "16",
		bits: [
			{ name: "CIN", description: "Raw Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Raw Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Raw Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "S_EIP57T_IMIS", description: "EIP57T Interrupt Masked interrupt Status Register", offset: "0x28", size: "16",
		bits: [
			{ name: "CIN", description: "Masked Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Masked Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Masked Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "S_EIP57T_ICIS", description: "EIP57T Interrupt Clear Interrupt Status Register", offset: "0x2C", size: "16",
		bits: [
			{ name: "CIN", description: "Clear Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Clear Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Clear Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "S_EIP36T_IMST", description: "EIP36T Interrupt Mask Set Register", offset: "0x30", size: "16",
		bits: [
			{ name: "CIN", description: "Interrupt Mask Set for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Interrupt Mask Set for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Interrupt Mask Set for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Interrupt Mask Set for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "S_EIP36T_IRIS", description: "EIP36T Interrupt Raw Interrupt Status Register", offset: "0x34", size: "16",
		bits: [
			{ name: "CIN", description: "Raw Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Raw Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Raw Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Raw Interrupt Status for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "S_EIP36T_IMIS", description: "EIP36T Interrupt Masked interrupt Status Register", offset: "0x38", size: "16",
		bits: [
			{ name: "CIN", description: "Masked Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Masked Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Masked Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Masked Interrupt Status for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "S_EIP36T_ICIS", description: "EIP36T Interrupt Clear Interrupt Status Register", offset: "0x3C", size: "16",
		bits: [
			{ name: "CIN", description: "Clear Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Clear Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Clear Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Clear Interrupt Status for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "S_EIP_CGCFG", description: "EIP Clock gating configuration", offset: "0x200", size: "16",
		bits: [
			{ name: "EIP57_CFG", description: "Clock gating configuration for Eip57_cfg", size: "1", shift: "1", mask: "0x2" },
			{ name: "EIP36_CFG", description: "Clock gating configuration for EIP36_cfg", size: "1", shift: "2", mask: "0x4" },
			{ name: "EIP29_CFG", description: "Clock gating configuration for Eip29_cfg", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRNG_CFG", description: "Clock gating configuration for TRNG_cfg", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "S_EIP_CGREQ", description: "EIP Clock gating Request", offset: "0x204", size: "16",
		bits: [
			{ name: "EIP57_REQ", description: "Clock gating Request for Eip57_req", size: "1", shift: "1", mask: "0x2" },
			{ name: "EIP36_REQ", description: "Clock gating Request for EIP36_req", size: "1", shift: "2", mask: "0x4" },
			{ name: "EIP29_REQ", description: "Clock gating Request for Eip29_req", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRNG_REQ", description: "Clock gating Request for TRNG_req", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "S_CRC_CTRL", description: "CRC Control register", offset: "0x400", size: "16",
		bits: [
			{ name: "TYPE", description: "Type of operation", size: "4", shift: "0", mask: "0xF" },
			{ name: "ENDIAN", description: "Endian Control", size: "2", shift: "4", mask: "0x30" },
			{ name: "IBR", description: "Bit reverse the input byte.", size: "1", shift: "7", mask: "0x80" },
			{ name: "OBR", description: "Bit reserved the output result byte", size: "1", shift: "8", mask: "0x100" },
			{ name: "OINV", description: "Inverse the bits of result", size: "1", shift: "9", mask: "0x200" },
			{ name: "BYTE", description: "Input data size", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INIT", description: "CRC Initialization", size: "2", shift: "13", mask: "0x6000" },
			{ name: "FLATO", description: "Flash access port to feed CRC", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "S_CRC_SEED", description: "CRC SEED/Context-CRC register", offset: "0x410", size: "16",
		bits: [
		]
	},
	{ name: "S_CRC_DIN", description: "CRC DATA Input register", offset: "0x414", size: "16",
		bits: [
		]
	},
	{ name: "S_CRC_RSLT_PP", description: "CRC post processed output", offset: "0x418", size: "16",
		bits: [
		]
	},
	{ name: "P_EIP57T_IMST", description: "EIP57T Interrupt Mask Set Register", offset: "0x820", size: "16",
		bits: [
			{ name: "CIN", description: "Interrupt Mask Set for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Interrupt Mask Set for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Interrupt Mask Set for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "P_EIP57T_IRIS", description: "EIP57T Interrupt Raw Interrupt Status Register", offset: "0x824", size: "16",
		bits: [
			{ name: "CIN", description: "Raw Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Raw Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Raw Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "P_EIP57T_IMIS", description: "EIP57T Interrupt Masked interrupt Status Register", offset: "0x828", size: "16",
		bits: [
			{ name: "CIN", description: "Masked Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Masked Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Masked Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "P_EIP57T_ICIS", description: "EIP57T Interrupt Clear Interrupt Status Register", offset: "0x82C", size: "16",
		bits: [
			{ name: "CIN", description: "Clear Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Clear Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Clear Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "P_EIP36T_IMST", description: "EIP36T Interrupt Mask Set Register", offset: "0x830", size: "16",
		bits: [
			{ name: "CIN", description: "Interrupt Mask Set for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Interrupt Mask Set for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Interrupt Mask Set for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Interrupt Mask Set for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "P_EIP36T_IRIS", description: "EIP36T Interrupt Raw Interrupt Status Register", offset: "0x834", size: "16",
		bits: [
			{ name: "CIN", description: "Raw Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Raw Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Raw Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Raw Interrupt Status for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "P_EIP36T_IMIS", description: "EIP36T Interrupt Masked interrupt Status Register", offset: "0x838", size: "16",
		bits: [
			{ name: "CIN", description: "Masked Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Masked Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Masked Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Masked Interrupt Status for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "P_EIP36T_ICIS", description: "EIP36T Interrupt Clear Interrupt Status Register", offset: "0x83C", size: "16",
		bits: [
			{ name: "CIN", description: "Clear Interrupt Status for Cin", size: "1", shift: "0", mask: "0x1" },
			{ name: "COUT", description: "Clear Interrupt Status for Cout", size: "1", shift: "1", mask: "0x2" },
			{ name: "DIN", description: "Clear Interrupt Status for Din", size: "1", shift: "2", mask: "0x4" },
			{ name: "DOUT", description: "Clear Interrupt Status for Dout", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "P_EIP_CGCFG", description: "EIP Clock gating configuration", offset: "0xA00", size: "16",
		bits: [
			{ name: "EIP57_CFG", description: "Clock gating configuration for Eip57_cfg", size: "1", shift: "1", mask: "0x2" },
			{ name: "EIP36_CFG", description: "Clock gating configuration for EIP36_cfg", size: "1", shift: "2", mask: "0x4" },
			{ name: "EIP29_CFG", description: "Clock gating configuration for Eip29_cfg", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRNG_CFG", description: "Clock gating configuration for TRNG_cfg", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "P_EIP_CGREQ", description: "EIP Clock gating Request", offset: "0xA04", size: "16",
		bits: [
			{ name: "EIP57_REQ", description: "Clock gating Request for Eip57_req", size: "1", shift: "1", mask: "0x2" },
			{ name: "EIP36_REQ", description: "Clock gating Request for EIP36_req", size: "1", shift: "2", mask: "0x4" },
			{ name: "EIP29_REQ", description: "Clock gating Request for Eip29_req", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRNG_REQ", description: "Clock gating Request for TRNG_req", size: "1", shift: "5", mask: "0x20" },
		]
	},
	{ name: "P_CRC_CTRL", description: "CRC Control register", offset: "0xC00", size: "16",
		bits: [
			{ name: "TYPE", description: "Type of operation", size: "4", shift: "0", mask: "0xF" },
			{ name: "ENDIAN", description: "Endian Control", size: "2", shift: "4", mask: "0x30" },
			{ name: "IBR", description: "Bit reverse the input byte.", size: "1", shift: "7", mask: "0x80" },
			{ name: "OBR", description: "Bit reserved the output result byte", size: "1", shift: "8", mask: "0x100" },
			{ name: "OINV", description: "Inverse the bits of result", size: "1", shift: "9", mask: "0x200" },
			{ name: "BYTE", description: "Input data size", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INIT", description: "CRC Initialization", size: "2", shift: "13", mask: "0x6000" },
			{ name: "FLATO", description: "Flash access port to feed CRC", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "P_CRC_SEED", description: "CRC SEED/Context-CRC register", offset: "0xC10", size: "16",
		bits: [
		]
	},
	{ name: "P_CRC_DIN", description: "CRC DATA Input register", offset: "0xC14", size: "16",
		bits: [
		]
	},
	{ name: "P_CRC_RSLT_PP", description: "CRC post processed output", offset: "0xC18", size: "16",
		bits: [
		]
	},
];
module.exports = {
	dtheRegisters: DTHE_REGISTERS,
}
