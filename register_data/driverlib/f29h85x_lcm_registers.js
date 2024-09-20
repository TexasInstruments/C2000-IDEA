let LCM_REGISTERS = [
	{ name: "REVISION", description: "IP Revision tie-off value", offset: "0x0", size: "32",
		bits: [
			{ name: "MINOR", description: "Minor Revision Number", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "Custom Module Number", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "FUNC", description: "Functional Release Number", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "SCHEME", description: "Defines Scheme for Module", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "CONTROL", description: "LCM Control configuration", offset: "0x8", size: "16",
		bits: [
			{ name: "CMPEN", description: "Enable/disable configuration for lockstep compare.", size: "1", shift: "0", mask: "0x1" },
			{ name: "STEN", description: "Self-test enable", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CMP1_ERR_FORCE", description: "Force error on comparator-1 lockstep compare error output", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CMP2_ERR_FORCE", description: "Force error on comparator-2 lockstep compare error output", size: "1", shift: "21", mask: "0x200000" },
		]
	},
	{ name: "STATUS", description: "LCM status register", offset: "0x20", size: "16",
		bits: [
			{ name: "LSEN", description: "Lockstep configuration status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CMP_FAIL", description: "Pass/fail status of lockstep compare", size: "1", shift: "1", mask: "0x2" },
			{ name: "DBGCON", description: "debugger connected status information", size: "1", shift: "8", mask: "0x100" },
			{ name: "STPASS", description: "self-test pass/fail status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "STDONE", description: "self-test completion status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "STACTIVE", description: "self-test active status indication", size: "1", shift: "18", mask: "0x40000" },
			{ name: "CMP1_ERR_FORCE_PASS", description: "fail status of comparator1 func error forcing", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CMP1_ERR_FORCE_DONE", description: "completion status of comparator1 func error forcing", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CMP2_ERR_FORCE_PASS", description: "fail status of comparator2 func error forcing", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CMP2_ERR_FORCE_DONE", description: "completion status of comparator2 func error forcing", size: "1", shift: "22", mask: "0x400000" },
		]
	},
	{ name: "STATUS_CLEAR", description: "LCM Status clear register", offset: "0x28", size: "16",
		bits: [
			{ name: "CMP_FAIL", description: "Clear lockstep compare fail status", size: "1", shift: "1", mask: "0x2" },
			{ name: "STPASS", description: "clear Self-test_fail_status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "STDONE", description: "clear Self-test_done_status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "CMP1_ERR_FORCE_PASS", description: "clear cmp1_func_error_force_fail_status", size: "1", shift: "19", mask: "0x80000" },
			{ name: "CMP1_ERR_FORCE_DONE", description: "clear cmp1_func_error_force_done_status", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CMP2_ERR_FORCE_PASS", description: "clear cmp2_func_error_force_fail_status", size: "1", shift: "21", mask: "0x200000" },
			{ name: "CMP2_ERR_FORCE_DONE", description: "clear cmp2_func_error_force_done_status", size: "1", shift: "22", mask: "0x400000" },
		]
	},
	{ name: "PARITY_TEST", description: "Enabling the parity test feature", offset: "0x68", size: "16",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "LOCK", description: "LCM lock configuration", offset: "0x70", size: "16",
		bits: [
			{ name: "LCM_CONTROL", description: "Register lock configuration", size: "1", shift: "2", mask: "0x4" },
			{ name: "LCM_STATUS_CLEAR", description: "Register lock configuration", size: "1", shift: "10", mask: "0x400" },
			{ name: "PARITY_TEST", description: "Register lock configuration", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
	{ name: "COMMIT", description: "LCM commit configuration", offset: "0x78", size: "16",
		bits: [
			{ name: "LCM_CONTROL", description: "Register commit configuration", size: "1", shift: "2", mask: "0x4" },
			{ name: "LCM_STATUS_CLEAR", description: "Register commit configuration", size: "1", shift: "10", mask: "0x400" },
			{ name: "PARITY_TEST", description: "Register commit configuration", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
];
module.exports = {
	lcmRegisters: LCM_REGISTERS,
}
