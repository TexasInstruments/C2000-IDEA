let EPWM_REGISTERS = [
	{ name: "TBCTL", description: "Time Base Control Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	CTRMODE", description: "Mode", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	PHSEN", description: "Load Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	PRDLD", description: "Period Load", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	SYNCOSEL", description: "Output Select", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SWFSYNC", description: "Force Sync Pulse", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	HSPCLKDIV", description: "Speed TBCLK Pre-scaler", size: "3", shift: "7", mask: "0x380" },
			{ name: "Uint16	CLKDIV", description: "Base Clock Pre-scaler", size: "3", shift: "10", mask: "0x1C00" },
			{ name: "Uint16	PHSDIR", description: "Direction Bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	FREE_SOFT", description: "Mode Bits", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "TBSTS", description: "Time Base Status Register", offset: "0x0", size: "0",
		bits: [
			{ name: "Uint16	CTRDIR", description: "Direction Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SYNCI", description: "Input Sync Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CTRMAX", description: "Max Latched Status", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TBPHS", description: "Union of TBPHS:TBPHSHR", offset: "0x0", size: "0",
		bits: [
		]
	},
	{ name: "TBCTR", description: "Time Base Counter Register", offset: "0x0", size: "16",
		bits: [
		]
	},
	{ name: "TBPRD", description: "Time Base Period Register", offset: "0x1", size: "16",
		bits: [
		]
	},
	{ name: "TBPRDHR", description: "", offset: "0x2", size: "16",
		bits: [
		]
	},
	{ name: "CMPCTL", description: "Counter Compare Control Register", offset: "0x3", size: "16",
		bits: [
			{ name: "Uint16	LOADAMODE", description: "Compare A Load", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	LOADBMODE", description: "Compare B Load", size: "2", shift: "2", mask: "0xC" },
			{ name: "Uint16	SHDWAMODE", description: "A Register Block Operating Mode", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	SHDWBMODE", description: "B Register Block Operating Mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	SHDWAFULL", description: "A Shadow Register Full Status", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	SHDWBFULL", description: "B Shadow Register Full Status", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "CMPA", description: "Union of CMPA:CMPAHR", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "CMPB", description: "Counter Compare B Register", offset: "0x5", size: "16",
		bits: [
		]
	},
	{ name: "AQCTLA", description: "", offset: "0x6", size: "16",
		bits: [
			{ name: "Uint16	ZRO", description: "Counter = Zero", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	PRD", description: "Counter = Period", size: "2", shift: "2", mask: "0xC" },
			{ name: "Uint16	CAU", description: "Counter = Compare A Up", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	CAD", description: "Counter = Compare A Down", size: "2", shift: "6", mask: "0xC0" },
			{ name: "Uint16	CBU", description: "Counter = Compare B Up", size: "2", shift: "8", mask: "0x300" },
			{ name: "Uint16	CBD", description: "Counter = Compare B Down", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "AQCTLB", description: "", offset: "0x7", size: "16",
		bits: [
			{ name: "Uint16	ZRO", description: "Counter = Zero", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	PRD", description: "Counter = Period", size: "2", shift: "2", mask: "0xC" },
			{ name: "Uint16	CAU", description: "Counter = Compare A Up", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	CAD", description: "Counter = Compare A Down", size: "2", shift: "6", mask: "0xC0" },
			{ name: "Uint16	CBU", description: "Counter = Compare B Up", size: "2", shift: "8", mask: "0x300" },
			{ name: "Uint16	CBD", description: "Counter = Compare B Down", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "AQSFRC", description: "", offset: "0x8", size: "16",
		bits: [
			{ name: "Uint16	ACTSFA", description: "when One-time SW Force A Invoked", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	OTSFA", description: "SW Force A Output", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	ACTSFB", description: "when One-time SW Force B Invoked", size: "2", shift: "3", mask: "0x18" },
			{ name: "Uint16	OTSFB", description: "SW Force A Output", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	RLDCSF", description: "from Shadow Options", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "AQCSFRC", description: "", offset: "0x9", size: "16",
		bits: [
			{ name: "Uint16	CSFA", description: "Software Force on output A", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	CSFB", description: "Software Force on output B", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "DBCTL", description: "", offset: "0xA", size: "16",
		bits: [
			{ name: "Uint16	OUT_MODE", description: "Band Output Mode Control", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	POLSEL", description: "Select Control", size: "2", shift: "2", mask: "0xC" },
			{ name: "Uint16	IN_MODE", description: "Band Input Select Mode Control", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	HALFCYCLE", description: "Cycle Clocking Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "DBRED", description: "", offset: "0xB", size: "16",
		bits: [
		]
	},
	{ name: "DBFED", description: "", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "TZSEL", description: "Trip Zone Select Register", offset: "0xD", size: "16",
		bits: [
			{ name: "Uint16	CBC1", description: "CBC select", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	CBC2", description: "CBC select", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CBC3", description: "CBC select", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	CBC4", description: "CBC select", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	CBC5", description: "CBC select", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	CBC6", description: "CBC select", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	DCAEVT2", description: "CBC select", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	DCBEVT2", description: "CBC select", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	OSHT1", description: "TZ1 select", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	OSHT2", description: "TZ2 select", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	OSHT3", description: "TZ3 select", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	OSHT4", description: "TZ4 select", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	OSHT5", description: "TZ5 select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "Uint16	OSHT6", description: "TZ6 select", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	DCAEVT1", description: "DCAEVT1 select", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	DCBEVT1", description: "DCBEVT1 select", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "TZDCSEL", description: "", offset: "0xE", size: "16",
		bits: [
			{ name: "Uint16	DCAEVT1", description: "Compare Output A Event 1", size: "3", shift: "0", mask: "0x7" },
			{ name: "Uint16	DCAEVT2", description: "Compare Output A Event 2", size: "3", shift: "3", mask: "0x38" },
			{ name: "Uint16	DCBEVT1", description: "Compare Output B Event 1", size: "3", shift: "6", mask: "0x1C0" },
			{ name: "Uint16	DCBEVT2", description: "Compare Output B Event 2", size: "3", shift: "9", mask: "0xE00" },
		]
	},
	{ name: "TZCTL", description: "Trip Zone Control Register", offset: "0xF", size: "16",
		bits: [
			{ name: "Uint16	TZA", description: "to TZ6 Trip Action On EPWMxA", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	TZB", description: "to TZ6 Trip Action On EPWMxB", size: "2", shift: "2", mask: "0xC" },
			{ name: "Uint16	DCAEVT1", description: "action on DCAEVT1", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	DCAEVT2", description: "action on DCAEVT2", size: "2", shift: "6", mask: "0xC0" },
			{ name: "Uint16	DCBEVT1", description: "action on DCBEVT1", size: "2", shift: "8", mask: "0x300" },
			{ name: "Uint16	DCBEVT2", description: "action on DCBEVT2", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "TZEINT", description: "", offset: "0x10", size: "16",
		bits: [
			{ name: "Uint16	CBC", description: "Zones Cycle By Cycle Int Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OST", description: "Zones One Shot Int Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DCAEVT1", description: "Compare A Event 1 Int Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DCAEVT2", description: "Compare A Event 2 Int Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DCBEVT1", description: "Compare B Event 1 Int Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	DCBEVT2", description: "Compare B Event 2 Int Enable", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZFLG", description: "Trip Zone Flag Register", offset: "0x11", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "Int Status Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	CBC", description: "Zones Cycle By Cycle Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OST", description: "Zones One Shot Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DCAEVT1", description: "Compare A Event 1 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DCAEVT2", description: "Compare A Event 2 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DCBEVT1", description: "Compare B Event 1 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	DCBEVT2", description: "Compare B Event 2 Flag", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZCLR", description: "Trip Zone Clear Register", offset: "0x12", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "Interrupt Clear Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	CBC", description: "Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OST", description: "Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DCAEVT1", description: "Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DCAEVT2", description: "Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DCBEVT1", description: "Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	DCBEVT2", description: "Flag Clear", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZFRC", description: "Trip Zone Force Register", offset: "0x13", size: "16",
		bits: [
			{ name: "Uint16	CBC", description: "Trip Zones Cycle By Cycle Event", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	OST", description: "Trip Zones One Shot Event", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	DCAEVT1", description: "Digital Compare A Event 1", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	DCAEVT2", description: "Digital Compare A Event 2", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	DCBEVT1", description: "Digital Compare B Event 1", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	DCBEVT2", description: "Digital Compare B Event 2", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "ETSEL", description: "Event Trigger Selection Register", offset: "0x14", size: "16",
		bits: [
			{ name: "Uint16	INTSEL", description: "Select", size: "3", shift: "0", mask: "0x7" },
			{ name: "Uint16	INTEN", description: "Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	SOCASEL", description: "of Conversion A Select", size: "3", shift: "8", mask: "0x700" },
			{ name: "Uint16	SOCAEN", description: "of Conversion A Enable", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	SOCBSEL", description: "of Conversion B Select", size: "3", shift: "12", mask: "0x7000" },
			{ name: "Uint16	SOCBEN", description: "of Conversion B Enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "ETPS", description: "Event Trigger Pre-Scale Register", offset: "0x15", size: "16",
		bits: [
			{ name: "Uint16	INTPRD", description: "Period Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	INTCNT", description: "Counter Register", size: "2", shift: "2", mask: "0xC" },
			{ name: "Uint16	SOCAPRD", description: "Period Select", size: "2", shift: "8", mask: "0x300" },
			{ name: "Uint16	SOCACNT", description: "Counter Register", size: "2", shift: "10", mask: "0xC00" },
			{ name: "Uint16	SOCBPRD", description: "Period Select", size: "2", shift: "12", mask: "0x3000" },
			{ name: "Uint16	SOCBCNT", description: "Counter", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "ETFLG", description: "Event Trigger Flag Register", offset: "0x16", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SOCA", description: "Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	SOCB", description: "Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETCLR", description: "Event Trigger Clear Register", offset: "0x17", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SOCA", description: "Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	SOCB", description: "Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETFRC", description: "Event Trigger Force Register", offset: "0x18", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "Force", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SOCA", description: "Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	SOCB", description: "Force", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "PCCTL", description: "PWM Chopper Control Register", offset: "0x19", size: "16",
		bits: [
			{ name: "Uint16	CHPEN", description: "chopping enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	OSHTWTH", description: "pulse width", size: "4", shift: "1", mask: "0x1E" },
			{ name: "Uint16	CHPFREQ", description: "clock frequency", size: "3", shift: "5", mask: "0xE0" },
			{ name: "Uint16	CHPDUTY", description: "clock Duty cycle", size: "3", shift: "8", mask: "0x700" },
		]
	},
	{ name: "HRCNFG", description: "HRPWM Configuration Register", offset: "0x1B", size: "16",
		bits: [
			{ name: "Uint16	EDGMODE", description: "Edge Mode Select Bits", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	CTLMODE", description: "Control Mode Select Bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	HRLOAD", description: "Shadow Mode Select Bits", size: "2", shift: "3", mask: "0x18" },
			{ name: "Uint16	SELOUTB", description: "Output Selection Bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	AUTOCONV", description: "Bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	SWAPAB", description: "EPWMA and EPWMB Outputs Bit", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "HRPWR", description: "HRPWM Power Register", offset: "0x1C", size: "16",
		bits: [
			{ name: "MEPOFF", description: "MEP Calibration Off Bits", size: "4", shift: "6", mask: "0x3C0" },
		]
	},
	{ name: "HRMSTEP", description: "HRPWM MEP Step Register", offset: "0x21", size: "16",
		bits: [
		]
	},
	{ name: "HRPCTL", description: "", offset: "0x23", size: "16",
		bits: [
			{ name: "Uint16	HRPE", description: "Resolution Period Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	PWMSYNCSEL", description: "PWMSYNC Source Select Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	TBPHSHRLOADE", description: "Load Enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TBPRDM", description: "", offset: "0x25", size: "16",
		bits: [
		]
	},
	{ name: "CMPAM", description: "", offset: "0x26", size: "16",
		bits: [
		]
	},
	{ name: "DCTRIPSEL", description: "", offset: "0x29", size: "16",
		bits: [
			{ name: "Uint16	DCAHCOMPSEL", description: "Compare A High COMP Input Select", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	DCALCOMPSEL", description: "Compare A Low COMP Input Select", size: "4", shift: "4", mask: "0xF0" },
			{ name: "Uint16	DCBHCOMPSEL", description: "Compare B High COMP Input Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "Uint16	DCBLCOMPSEL", description: "Compare B Low COMP Input Select", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "DCACTL", description: "Digital Compare A Control Register", offset: "0x2A", size: "16",
		bits: [
			{ name: "Uint16	EVT1SRCSEL", description: "Source Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	EVT1FRCSYNCSEL", description: "Force Sync Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EVT1SOCE", description: "SOC Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EVT1SYNCE", description: "SYNC Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	EVT2SRCSEL", description: "Source Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	EVT2FRCSYNCSEL", description: "Force Sync Signal", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "DCBCTL", description: "Digital Compare B Control Register", offset: "0x2B", size: "16",
		bits: [
			{ name: "Uint16	EVT1SRCSEL", description: "Source Signal", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	EVT1FRCSYNCSEL", description: "Force Sync Signal", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	EVT1SOCE", description: "SOC Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	EVT1SYNCE", description: "SYNC Enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	EVT2SRCSEL", description: "Source Signal", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	EVT2FRCSYNCSEL", description: "Force Sync Signal", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "DCFCTL", description: "", offset: "0x2C", size: "16",
		bits: [
			{ name: "Uint16	SRCSEL", description: "Block Signal Source Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "Uint16	BLANKE", description: "Enable/Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	BLANKINV", description: "Window Inversion", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	PULSESEL", description: "Uint16	PULSESEL:2;", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "DCCAPCTL", description: "", offset: "0x2D", size: "16",
		bits: [
			{ name: "Uint16	CAPE", description: "Capture Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	SHDWMODE", description: "Capture Mode", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DCFOFFSET", description: "", offset: "0x2E", size: "16",
		bits: [
		]
	},
	{ name: "DCFOFFSETCNT", description: "", offset: "0x2F", size: "16",
		bits: [
		]
	},
	{ name: "DCFWINDOW", description: "", offset: "0x30", size: "16",
		bits: [
		]
	},
	{ name: "DCFWINDOWCNT", description: "", offset: "0x31", size: "16",
		bits: [
		]
	},
	{ name: "DCCAP", description: "", offset: "0x32", size: "16",
		bits: [
		]
	},
];
module.exports = {
	epwmRegisters: EPWM_REGISTERS,
}
