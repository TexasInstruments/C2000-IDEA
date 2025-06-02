let PWMXBAR_REGISTERS = [
	{ name: "TRIP1MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output1", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "TRIP1MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output1", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "TRIP2MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output2", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "TRIP2MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output2", offset: "0x6", size: "16",
		bits: [
		]
	},
	{ name: "TRIP3MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output3", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "TRIP3MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output3", offset: "0xA", size: "16",
		bits: [
		]
	},
	{ name: "TRIP4MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output4", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "TRIP4MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output4", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "TRIP5MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output5", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "TRIP5MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output5", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "TRIP6MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output6", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "TRIP6MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output6", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "TRIP7MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output7", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "TRIP7MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output7", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "TRIP8MUX0TO15CFG", description: "PWM XBAR Mux Configuration for Output8", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "TRIP8MUX16TO31CFG", description: "PWM XBAR Mux Configuration for Output8", offset: "0x1E", size: "16",
		bits: [
		]
	},
	{ name: "TRIP1MUXENABLE", description: "PWM XBAR Mux Enable for Output1", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "TRIP2MUXENABLE", description: "PWM XBAR Mux Enable for Output2", offset: "0x22", size: "16",
		bits: [
		]
	},
	{ name: "TRIP3MUXENABLE", description: "PWM XBAR Mux Enable for Output3", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "TRIP4MUXENABLE", description: "PWM XBAR Mux Enable for Output4", offset: "0x26", size: "16",
		bits: [
		]
	},
	{ name: "TRIP5MUXENABLE", description: "PWM XBAR Mux Enable for Output5", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "TRIP6MUXENABLE", description: "PWM XBAR Mux Enable for Output6", offset: "0x2A", size: "16",
		bits: [
		]
	},
	{ name: "TRIP7MUXENABLE", description: "PWM XBAR Mux Enable for Output7", offset: "0x2C", size: "16",
		bits: [
		]
	},
	{ name: "TRIP8MUXENABLE", description: "PWM XBAR Mux Enable for Output8", offset: "0x2E", size: "16",
		bits: [
		]
	},
	{ name: "TRIPOUTINV", description: "PWM XBAR Output Inversion Register", offset: "0x38", size: "16",
		bits: [
		]
	},
	{ name: "TRIPLOCK", description: "PWM XBAR Configuration Lock register", offset: "0x3E", size: "16",
		bits: [
		]
	},
];
module.exports = {
	pwmxbarRegisters: PWMXBAR_REGISTERS,
}
