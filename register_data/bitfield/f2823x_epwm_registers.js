let EPWM_REGISTERS = [
	{ name: "TBCTL", description: "", offset: "0x0", size: "16",
		bits: [
			{ name: "CTRMODE", description: "Counter Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "PHSEN", description: "Phase load enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "PRDLD", description: "Active period load", size: "1", shift: "3", mask: "0x8" },
			{ name: "SYNCOSEL", description: "Sync output select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SWFSYNC", description: "Software force sync pulse", size: "1", shift: "6", mask: "0x40" },
			{ name: "HSPCLKDIV", description: "High speed time pre-scale", size: "3", shift: "7", mask: "0x380" },
			{ name: "CLKDIV", description: "Timebase clock pre-scale", size: "3", shift: "10", mask: "0x1C00" },
			{ name: "PHSDIR", description: "Phase Direction", size: "1", shift: "13", mask: "0x2000" },
			{ name: "FREE_SOFT", description: "Emulation mode", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "TBSTS", description: "", offset: "0x1", size: "16",
		bits: [
			{ name: "CTRDIR", description: "Counter direction status", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNCI", description: "External input sync status", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRMAX", description: "Counter max latched status", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TBPHS", description: "Union of TBPHS:TBPHSHR", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "TBCTR", description: "Counter", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "TBPRD", description: "Period register set", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "CMPCTL", description: "Compare control", offset: "0x6", size: "16",
		bits: [
			{ name: "LOADAMODE", description: "Active compare A", size: "2", shift: "0", mask: "0x3" },
			{ name: "LOADBMODE", description: "Active compare B", size: "2", shift: "2", mask: "0xC" },
			{ name: "SHDWAMODE", description: "Compare A block operating mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "SHDWBMODE", description: "Compare B block operating mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "SHDWAFULL", description: "Compare A Shadow registers full Status", size: "1", shift: "8", mask: "0x100" },
			{ name: "SHDWBFULL", description: "Compare B Shadow registers full Status", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "CMPA", description: "Union of CMPA:CMPAHR", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "CMPB", description: "Compare B reg", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "AQCTLA", description: "Action qual output A", offset: "0x9", size: "16",
		bits: [
			{ name: "ZRO", description: "Action Counter = Zero", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action Counter = Period", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action Counter = Compare A up", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action Counter = Compare A down", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action Counter = Compare B up", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action Counter = Compare B down", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "AQCTLB", description: "Action qual output B", offset: "0xA", size: "16",
		bits: [
			{ name: "ZRO", description: "Action Counter = Zero", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action Counter = Period", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action Counter = Compare A up", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action Counter = Compare A down", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action Counter = Compare B up", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action Counter = Compare B down", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "AQSFRC", description: "Action qual SW force", offset: "0xB", size: "16",
		bits: [
			{ name: "ACTSFA", description: "Action when One-time SW Force A invoked", size: "2", shift: "0", mask: "0x3" },
			{ name: "OTSFA", description: "One-time SW Force A output", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACTSFB", description: "Action when One-time SW Force B invoked", size: "2", shift: "3", mask: "0x18" },
			{ name: "OTSFB", description: "One-time SW Force A output", size: "1", shift: "5", mask: "0x20" },
			{ name: "RLDCSF", description: "Reload from Shadow options", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "AQCSFRC", description: "Action qualifier continuous SW force", offset: "0xC", size: "16",
		bits: [
			{ name: "CSFA", description: "Continuous Software Force on output A", size: "2", shift: "0", mask: "0x3" },
			{ name: "CSFB", description: "Continuous Software Force on output B", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "DBCTL", description: "Dead-band control", offset: "0xD", size: "16",
		bits: [
			{ name: "OUT_MODE", description: "Dead Band Output Mode Control", size: "2", shift: "0", mask: "0x3" },
			{ name: "POLSEL", description: "Polarity Select Control", size: "2", shift: "2", mask: "0xC" },
			{ name: "IN_MODE", description: "Dead Band Input Select Mode Control", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "DBRED", description: "Dead-band rising edge delay", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "DBFED", description: "Dead-band falling edge delay", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "TZSEL", description: "Trip zone select", offset: "0x10", size: "16",
		bits: [
			{ name: "CBC1", description: "TZ1 CBC select", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "TZ2 CBC select", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "TZ3 CBC select", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "TZ4 CBC select", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "TZ5 CBC select", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "TZ6 CBC select", size: "1", shift: "5", mask: "0x20" },
			{ name: "OSHT1", description: "One-shot TZ1 select", size: "1", shift: "8", mask: "0x100" },
			{ name: "OSHT2", description: "One-shot TZ2 select", size: "1", shift: "9", mask: "0x200" },
			{ name: "OSHT3", description: "One-shot TZ3 select", size: "1", shift: "10", mask: "0x400" },
			{ name: "OSHT4", description: "One-shot TZ4 select", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSHT5", description: "One-shot TZ5 select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OSHT6", description: "One-shot TZ6 select", size: "1", shift: "13", mask: "0x2000" },
		]
	},
	{ name: "TZCTL", description: "Trip zone control", offset: "0x12", size: "16",
		bits: [
			{ name: "TZA", description: "TZ1 to TZ6 Trip Action On EPWMxA", size: "2", shift: "0", mask: "0x3" },
			{ name: "TZB", description: "TZ1 to TZ6 Trip Action On EPWMxB", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "TZEINT", description: "Trip zone interrupt enable", offset: "0x13", size: "16",
		bits: [
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int Enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TZFLG", description: "Trip zone interrupt flags", offset: "0x14", size: "16",
		bits: [
			{ name: "INT", description: "Global status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TZCLR", description: "Trip zone clear", offset: "0x15", size: "16",
		bits: [
			{ name: "INT", description: "Global status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TZFRC", description: "Trip zone force interrupt", offset: "0x16", size: "16",
		bits: [
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "ETSEL", description: "Event trigger selection", offset: "0x17", size: "16",
		bits: [
			{ name: "INTSEL", description: "EPWMxINTn Select", size: "3", shift: "0", mask: "0x7" },
			{ name: "INTEN", description: "EPWMxINTn Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOCASEL", description: "Start of conversion A Select", size: "3", shift: "8", mask: "0x700" },
			{ name: "SOCAEN", description: "Start of conversion A Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOCBSEL", description: "Start of conversion B Select", size: "3", shift: "12", mask: "0x7000" },
			{ name: "SOCBEN", description: "Start of conversion B Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ETPS", description: "Event trigger pre-scaler", offset: "0x18", size: "16",
		bits: [
			{ name: "INTPRD", description: "EPWMxINTn Period Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "INTCNT", description: "EPWMxINTn Counter Register", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOCAPRD", description: "EPWMxSOCA Period Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOCACNT", description: "EPWMxSOCA Counter Register", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOCBPRD", description: "EPWMxSOCB Period Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOCBCNT", description: "EPWMxSOCB Counter Register", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ETFLG", description: "Event trigger flags", offset: "0x19", size: "16",
		bits: [
			{ name: "INT", description: "Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETCLR", description: "Event trigger clear", offset: "0x1A", size: "16",
		bits: [
			{ name: "INT", description: "Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETFRC", description: "Event trigger force", offset: "0x1B", size: "16",
		bits: [
			{ name: "INT", description: "Force", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "Force", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PCCTL", description: "PWM chopper control", offset: "0x1C", size: "16",
		bits: [
			{ name: "CHPEN", description: "PWM chopping enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSHTWTH", description: "One-shot pulse width", size: "4", shift: "1", mask: "0x1E" },
			{ name: "CHPFREQ", description: "Chopping clock frequency", size: "3", shift: "5", mask: "0xE0" },
			{ name: "CHPDUTY", description: "Chopping clock Duty cycle", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "HRCNFG", description: "HRPWM Config Reg", offset: "0x1E", size: "16",
		bits: [
			{ name: "EDGMODE", description: "Edge Mode select Bits", size: "2", shift: "0", mask: "0x3" },
			{ name: "CTLMODE", description: "Control mode Select Bit", size: "1", shift: "2", mask: "0x4" },
			{ name: "HRLOAD", description: "Shadow mode Select Bit", size: "1", shift: "3", mask: "0x8" },
		]
	},
];
module.exports = {
	epwmRegisters: EPWM_REGISTERS,
}
