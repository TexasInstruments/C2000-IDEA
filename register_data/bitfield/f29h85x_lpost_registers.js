let LPOST_REGISTERS = [
	{ name: "REVISION", description: "IP Revision tie-off value", offset: "0x0", size: "32",
		bits: [
			{ name: "MINOR", description: "Minor Revision Number", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "Custom Module Number", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "FUNC", description: "Functional Release Number", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "SCHEME", description: "Defines Scheme for Module", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "LPOST_CONTROL", description: "Register to start the power-on self-test operation.", offset: "0x6", size: "32",
		bits: [
			{ name: "GO", description: "Start the self-test operation", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LPOST_CONFIG", description: "Register to configure the coverage for the power-on self-test operation.", offset: "0xC", size: "32",
		bits: [
			{ name: "COVERAGE", description: "Coverage configuration for the power on self-test", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LPOST_STATUS", description: "Register indicating the status of power-on self-test operation.", offset: "0x3A", size: "32",
		bits: [
			{ name: "DONE", description: "LPOST completion status.", size: "1", shift: "0", mask: "0x1" },
			{ name: "PASS", description: "LPOST test pass/fail status", size: "1", shift: "1", mask: "0x2" },
			{ name: "TIMEOUT", description: "LPOST test timeout status", size: "1", shift: "2", mask: "0x4" },
			{ name: "SANITY_TEST_PASS", description: "LPOST sanity test status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SANITY_TIMEOUT_PASS", description: "LPOST timeout test status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "RAW_PORESETn_STATUS", description: "The bit will indicate RAW PORESETn Status", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LPOST_STATUS_CLEAR", description: "Register to clear the LPOST Status", offset: "0x40", size: "32",
		bits: [
			{ name: "DONE", description: "DONE status clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "PASS", description: "PASS status clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "TIMEOUT", description: "TIMEOUT status clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SANITY_TEST_PASS", description: "SANITY_TEST_PASS status clear", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SANITY_TIMEOUT_PASS", description: "SANITY_TIMEOUT_PASS status clear", size: "1", shift: "17", mask: "0x20000" },
			{ name: "RAW_PORESETn_STATUS", description: "Clear bit for RAW_PORESETn_STATUS", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LPOST_LOCK", description: "Register to lock the LPOST register configurations", offset: "0x66", size: "32",
		bits: [
			{ name: "LPOST_CONTROL", description: "Register lock configuration", size: "1", shift: "2", mask: "0x4" },
			{ name: "LPOST_CONFIG", description: "Register lock configuration", size: "1", shift: "4", mask: "0x10" },
			{ name: "LPOST_STATUS_CLEAR", description: "Register lock configuration", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PARITY_TEST", description: "Register lock configuration", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
	{ name: "LPOST_COMMIT", description: "Register to commit the LPOST register configuration", offset: "0x6C", size: "32",
		bits: [
			{ name: "LPOST_CONTROL", description: "Register commit configuration", size: "1", shift: "2", mask: "0x4" },
			{ name: "LPOST_CONFIG", description: "Register commit configuration", size: "1", shift: "4", mask: "0x10" },
			{ name: "LPOST_STATUS_CLEAR", description: "Register lock configuration", size: "1", shift: "18", mask: "0x40000" },
			{ name: "PARITY_TEST", description: "Register commit configuration", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
];
module.exports = {
	lpostRegisters: LPOST_REGISTERS,
}
