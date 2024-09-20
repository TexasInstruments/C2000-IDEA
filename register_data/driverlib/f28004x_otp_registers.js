let OTP_REGISTERS = [
	{ name: "UID_PSRAND0", description: "UID Psuedo-random 160 bit number", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "UID_PSRAND1", description: "UID Psuedo-random 160 bit number", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "UID_PSRAND2", description: "UID Psuedo-random 160 bit number", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "UID_PSRAND3", description: "UID Psuedo-random 160 bit number", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "UID_PSRAND4", description: "UID Psuedo-random 160 bit number", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "UID_PSRAND5", description: "UID Psuedo-random 160 bit number", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "UID_UNIQUE", description: "UID UID Unique 32 bit number", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "UID_CHECKSUM", description: "UID Checksum", offset: "0xE", size: "16",
		bits: [
		]
	},
];
module.exports = {
	otpRegisters: OTP_REGISTERS,
}
