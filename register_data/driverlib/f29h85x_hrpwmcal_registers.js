let HRPWMCAL_REGISTERS = [
	{ name: "HRPWR", description: "HRPWM Power Register", offset: "0x42", size: "16",
		bits: [
			{ name: "CALPWRON", description: "Calibration Power On", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "HRMSTEP", description: "HRPWM MEP Step Register", offset: "0x4C", size: "16",
		bits: [
			{ name: "HRMSTEP", description: "High Resolution Micro Step Value", size: "8", shift: "0", mask: "0xFF" },
		]
	},
];
module.exports = {
	hrpwmcalRegisters: HRPWMCAL_REGISTERS,
}
