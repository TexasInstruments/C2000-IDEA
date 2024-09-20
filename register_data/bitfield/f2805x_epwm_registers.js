let EPWM_REGISTERS = [
	{ name: "TBCTL", description: "Time Base Control Register", offset: "0x0", size: "16",
		bits: [
			{ name: "CTRMODE", description: "Counter Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "PHSEN", description: "Phase Load Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "PRDLD", description: "Active Period Load", size: "1", shift: "3", mask: "0x8" },
			{ name: "SYNCOSEL", description: "Sync Output Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "SWFSYNC", description: "Software Force Sync Pulse", size: "1", shift: "6", mask: "0x40" },
			{ name: "HSPCLKDIV", description: "High Speed TBCLK Pre-scaler", size: "3", shift: "7", mask: "0x380" },
			{ name: "CLKDIV", description: "Time Base Clock Pre-scaler", size: "3", shift: "10", mask: "0x1C00" },
			{ name: "PHSDIR", description: "Phase Direction Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "FREE_SOFT", description: "Emulation Mode Bits", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "TBSTS", description: "Time Base Status Register", offset: "0x1", size: "16",
		bits: [
			{ name: "CTRDIR", description: "Counter Direction Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "SYNCI", description: "External Input Sync Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "CTRMAX", description: "Counter Max Latched Status", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TBPHS", description: "Union of TBPHS:rsvd1", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "TBCTR", description: "Time Base Counter Register", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "TBPRD", description: "Time Base Period Register", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "CMPCTL", description: "Counter Compare Control Reg", offset: "0x6", size: "16",
		bits: [
			{ name: "LOADAMODE", description: "Active Compare A Load", size: "2", shift: "0", mask: "0x3" },
			{ name: "LOADBMODE", description: "Active Compare B Load", size: "2", shift: "2", mask: "0xC" },
			{ name: "SHDWAMODE", description: "Compare A Register Block Operating Mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "SHDWBMODE", description: "Compare B Register Block Operating Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "SHDWAFULL", description: "Compare A Shadow Register Full Status", size: "1", shift: "8", mask: "0x100" },
			{ name: "SHDWBFULL", description: "Compare B Shadow Register Full Status", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "CMPA", description: "Union of CMPA:rsvd1", offset: "0x7", size: "16",
		bits: [
		]
	},
	{ name: "CMPB", description: "Counter Compare B Register", offset: "0x8", size: "16",
		bits: [
		]
	},
	{ name: "AQCTLA", description: "Action Qualifier Ctrl - Output A", offset: "0x9", size: "16",
		bits: [
			{ name: "ZRO", description: "Action Counter = Zero", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action Counter = Period", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action Counter = Compare A Up", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action Counter = Compare A Down", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action Counter = Compare B Up", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action Counter = Compare B Down", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "AQCTLB", description: "Action Qualifier Ctrl - Output B", offset: "0xA", size: "16",
		bits: [
			{ name: "ZRO", description: "Action Counter = Zero", size: "2", shift: "0", mask: "0x3" },
			{ name: "PRD", description: "Action Counter = Period", size: "2", shift: "2", mask: "0xC" },
			{ name: "CAU", description: "Action Counter = Compare A Up", size: "2", shift: "4", mask: "0x30" },
			{ name: "CAD", description: "Action Counter = Compare A Down", size: "2", shift: "6", mask: "0xC0" },
			{ name: "CBU", description: "Action Counter = Compare B Up", size: "2", shift: "8", mask: "0x300" },
			{ name: "CBD", description: "Action Counter = Compare B Down", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "AQSFRC", description: "Action Qualifier SW Force Reg.", offset: "0xB", size: "16",
		bits: [
			{ name: "ACTSFA", description: "Action when One-time SW Force A Invoked", size: "2", shift: "0", mask: "0x3" },
			{ name: "OTSFA", description: "One-time SW Force A Output", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACTSFB", description: "Action when One-time SW Force B Invoked", size: "2", shift: "3", mask: "0x18" },
			{ name: "OTSFB", description: "One-time SW Force A Output", size: "1", shift: "5", mask: "0x20" },
			{ name: "RLDCSF", description: "Reload from Shadow Options", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "AQCSFRC", description: "Action Qual. Cont. SW Force Reg.", offset: "0xC", size: "16",
		bits: [
			{ name: "CSFA", description: "Continuous Software Force on output A", size: "2", shift: "0", mask: "0x3" },
			{ name: "CSFB", description: "Continuous Software Force on output B", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "DBCTL", description: "Dead-Band Generator Ctrl Reg.", offset: "0xD", size: "16",
		bits: [
			{ name: "OUT_MODE", description: "Dead Band Output Mode Control", size: "2", shift: "0", mask: "0x3" },
			{ name: "POLSEL", description: "Polarity Select Control", size: "2", shift: "2", mask: "0xC" },
			{ name: "IN_MODE", description: "Dead Band Input Select Mode Control", size: "2", shift: "4", mask: "0x30" },
			{ name: "HALFCYCLE", description: "Half Cycle Clocking Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "DBRED", description: "Dead-Band Gen. Rising Edge Delay Count Reg.", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "DBFED", description: "Dead-Band Gen. Falling Edge Delay Count Reg.", offset: "0xF", size: "16",
		bits: [
		]
	},
	{ name: "TZSEL", description: "Trip Zone Select Register", offset: "0x10", size: "16",
		bits: [
			{ name: "CBC1", description: "TZ1 CBC select", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC2", description: "TZ2 CBC select", size: "1", shift: "1", mask: "0x2" },
			{ name: "CBC3", description: "TZ3 CBC select", size: "1", shift: "2", mask: "0x4" },
			{ name: "CBC4", description: "TZ4 CBC select", size: "1", shift: "3", mask: "0x8" },
			{ name: "CBC5", description: "TZ5 CBC select", size: "1", shift: "4", mask: "0x10" },
			{ name: "CBC6", description: "TZ6 CBC select", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCAEVT2", description: "DCAEVT2 CBC select", size: "1", shift: "6", mask: "0x40" },
			{ name: "DCBEVT2", description: "DCBEVT2 CBC select", size: "1", shift: "7", mask: "0x80" },
			{ name: "OSHT1", description: "One-shot TZ1 select", size: "1", shift: "8", mask: "0x100" },
			{ name: "OSHT2", description: "One-shot TZ2 select", size: "1", shift: "9", mask: "0x200" },
			{ name: "OSHT3", description: "One-shot TZ3 select", size: "1", shift: "10", mask: "0x400" },
			{ name: "OSHT4", description: "One-shot TZ4 select", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSHT5", description: "One-shot TZ5 select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OSHT6", description: "One-shot TZ6 select", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DCAEVT1", description: "One-shot DCAEVT1 select", size: "1", shift: "14", mask: "0x4000" },
			{ name: "DCBEVT1", description: "One-shot DCBEVT1 select", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "TZDCSEL", description: "Trip Zone Dig. Comp. Select Reg.", offset: "0x11", size: "16",
		bits: [
			{ name: "DCAEVT1", description: "Digital Compare Output A Event 1", size: "3", shift: "0", mask: "0x7" },
			{ name: "DCAEVT2", description: "Digital Compare Output A Event 2", size: "3", shift: "3", mask: "0x38" },
			{ name: "DCBEVT1", description: "Digital Compare Output B Event 1", size: "3", shift: "6", mask: "0x1C0" },
			{ name: "DCBEVT2", description: "Digital Compare Output B Event 2", size: "3", shift: "9", mask: "0xE00" },
		]
	},
	{ name: "TZCTL", description: "Trip Zone Control Register", offset: "0x12", size: "16",
		bits: [
			{ name: "TZA", description: "TZ1 to TZ6 Trip Action On EPWMxA", size: "2", shift: "0", mask: "0x3" },
			{ name: "TZB", description: "TZ1 to TZ6 Trip Action On EPWMxB", size: "2", shift: "2", mask: "0xC" },
			{ name: "DCAEVT1", description: "EPWMxA action on DCAEVT1", size: "2", shift: "4", mask: "0x30" },
			{ name: "DCAEVT2", description: "EPWMxA action on DCAEVT2", size: "2", shift: "6", mask: "0xC0" },
			{ name: "DCBEVT1", description: "EPWMxB action on DCBEVT1", size: "2", shift: "8", mask: "0x300" },
			{ name: "DCBEVT2", description: "EPWMxB action on DCBEVT2", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "TZEINT", description: "Trip Zone Enable Interrupt Reg.", offset: "0x13", size: "16",
		bits: [
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Digital Compare A Event 1 Int Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Digital Compare A Event 2 Int Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Digital Compare B Event 1 Int Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Digital Compare B Event 2 Int Enable", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZFLG", description: "Trip Zone Flag Register", offset: "0x14", size: "16",
		bits: [
			{ name: "INT", description: "Global Int Status Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Digital Compare A Event 1 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Digital Compare A Event 2 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Digital Compare B Event 1 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Digital Compare B Event 2 Flag", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZCLR", description: "Trip Zone Clear Register", offset: "0x15", size: "16",
		bits: [
			{ name: "INT", description: "Global Interrupt Clear Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Cycle-By-Cycle Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "One-Shot Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "DCAVET1 Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "DCAEVT2 Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "DCBEVT1 Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "DCBEVT2 Flag Clear", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZFRC", description: "Trip Zone Force Register", offset: "0x16", size: "16",
		bits: [
			{ name: "CBC", description: "Force Trip Zones Cycle By Cycle Event", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Force Trip Zones One Shot Event", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Force Digital Compare A Event 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Force Digital Compare A Event 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Force Digital Compare B Event 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Force Digital Compare B Event 2", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "ETSEL", description: "Event Trigger Selection Register", offset: "0x17", size: "16",
		bits: [
			{ name: "INTSEL", description: "EPWMxINTn Select", size: "3", shift: "0", mask: "0x7" },
			{ name: "INTEN", description: "EPWMxINTn Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "SOCASEL", description: "Start of Conversion A Select", size: "3", shift: "8", mask: "0x700" },
			{ name: "SOCAEN", description: "Start of Conversion A Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "SOCBSEL", description: "Start of Conversion B Select", size: "3", shift: "12", mask: "0x7000" },
			{ name: "SOCBEN", description: "Start of Conversion B Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ETPS", description: "Event Trigger Pre-Scale Register", offset: "0x18", size: "16",
		bits: [
			{ name: "INTPRD", description: "EPWMxINTn Period Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "INTCNT", description: "EPWMxINTn Counter Register", size: "2", shift: "2", mask: "0xC" },
			{ name: "SOCAPRD", description: "EPWMxSOCA Period Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "SOCACNT", description: "EPWMxSOCA Counter Register", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SOCBPRD", description: "EPWMxSOCB Period Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SOCBCNT", description: "EPWMxSOCB Counter", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ETFLG", description: "Event Trigger Flag Register", offset: "0x19", size: "16",
		bits: [
			{ name: "INT", description: "EPWMxINTn Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "EPWMxSOCA Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "EPWMxSOCB Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETCLR", description: "Event Trigger Clear Register", offset: "0x1A", size: "16",
		bits: [
			{ name: "INT", description: "EPWMxINTn Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "EPWMxSOCA Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "EPWMxSOCB Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETFRC", description: "Event Trigger Force Register", offset: "0x1B", size: "16",
		bits: [
			{ name: "INT", description: "EPWMxINTn Force", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "EPWMxSOCA Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "EPWMxSOCB Force", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PCCTL", description: "PWM Chopper Control Register", offset: "0x1C", size: "16",
		bits: [
			{ name: "CHPEN", description: "PWM chopping enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "OSHTWTH", description: "One-shot pulse width", size: "4", shift: "1", mask: "0x1E" },
			{ name: "CHPFREQ", description: "Chopping clock frequency", size: "3", shift: "5", mask: "0xE0" },
			{ name: "CHPDUTY", description: "Chopping clock Duty cycle", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "TBPRDM", description: "Union of TBPRD:rsvd1 mirror reg.", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "CMPAM", description: "Union of CMPA:rsvd1 mirror reg.", offset: "0x29", size: "16",
		bits: [
		]
	},
	{ name: "DCTRIPSEL", description: "Digital Compare Trip Select", offset: "0x2C", size: "16",
		bits: [
			{ name: "DCAHCOMPSEL", description: "Digital Compare A High COMP Input Select", size: "4", shift: "0", mask: "0xF" },
			{ name: "DCALCOMPSEL", description: "Digital Compare A Low COMP Input Select", size: "4", shift: "4", mask: "0xF0" },
			{ name: "DCBHCOMPSEL", description: "Digital Compare B High COMP Input Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "DCBLCOMPSEL", description: "Digital Compare B Low COMP Input Select", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "DCACTL", description: "Digital Compare A Control", offset: "0x2D", size: "16",
		bits: [
			{ name: "EVT1SRCSEL", description: "DCAEVT1 Source Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT1FRCSYNCSEL", description: "DCAEVT1 Force Sync Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT1SOCE", description: "DCAEVT1 SOC Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT1SYNCE", description: "DCAEVT1 SYNC Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT2SRCSEL", description: "DCAEVT2 Source Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "EVT2FRCSYNCSEL", description: "DCAEVT2 Force Sync Signal", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "DCBCTL", description: "Digital Compare B Control", offset: "0x2E", size: "16",
		bits: [
			{ name: "EVT1SRCSEL", description: "DCAEVT1 Source Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT1FRCSYNCSEL", description: "DCAEVT1 Force Sync Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT1SOCE", description: "DCAEVT1 SOC Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT1SYNCE", description: "DCAEVT1 SYNC Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT2SRCSEL", description: "DCAEVT2 Source Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "EVT2FRCSYNCSEL", description: "DCAEVT2 Force Sync Signal", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "DCFCTL", description: "Digital Compare Filter Control", offset: "0x2F", size: "16",
		bits: [
			{ name: "SRCSEL", description: "Filter Block Signal Source Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "BLANKE", description: "Blanking Enable/Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "BLANKINV", description: "Blanking Window Inversion", size: "1", shift: "3", mask: "0x8" },
			{ name: "PULSESEL", description: "Pulse Select for Blanking & Capture Alignment", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "DCCAPCTL", description: "Digital Compare Capture Control", offset: "0x30", size: "16",
		bits: [
			{ name: "CAPE", description: "Counter Capture Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "SHDWMODE", description: "Counter Capture Mode", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DCFOFFSET", description: "Digital Compare Filter Offset Register", offset: "0x31", size: "16",
		bits: [
		]
	},
	{ name: "DCFOFFSETCNT", description: "Digital Compare Filter Offset Counter Register", offset: "0x32", size: "16",
		bits: [
		]
	},
	{ name: "DCFWINDOW", description: "Digital Compare Filter Window Register", offset: "0x33", size: "16",
		bits: [
		]
	},
	{ name: "DCFWINDOWCNT", description: "Digital Compare Filter Window Counter Register", offset: "0x34", size: "16",
		bits: [
		]
	},
	{ name: "DCCAP", description: "Digital Compare Counter Capture Register", offset: "0x35", size: "16",
		bits: [
		]
	},
];
module.exports = {
	epwmRegisters: EPWM_REGISTERS,
}
