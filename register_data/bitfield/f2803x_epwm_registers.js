let EPWM_REGISTERS = [
	{ name: "TBCTL", description: "Time Base Control Register", offset: "0x0", size: "16",
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
	{ name: "TBSTS", description: "Time Base Status Register", offset: "0x1", size: "16",
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
	{ name: "TBCTR", description: "Time Base Counter", offset: "0x3", size: "16",
		bits: [
		]
	},
	{ name: "TBPRD", description: "Time Base Period register set", offset: "0x4", size: "16",
		bits: [
		]
	},
	{ name: "TBPRDHR", description: "Time Base Period High Res Register", offset: "0x5", size: "16",
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
	{ name: "AQSFRC", description: "Action qual SW force.", offset: "0xB", size: "16",
		bits: [
			{ name: "ACTSFA", description: "Action when One-time SW Force A invoked", size: "2", shift: "0", mask: "0x3" },
			{ name: "OTSFA", description: "One-time SW Force A output", size: "1", shift: "2", mask: "0x4" },
			{ name: "ACTSFB", description: "Action when One-time SW Force B invoked", size: "2", shift: "3", mask: "0x18" },
			{ name: "OTSFB", description: "One-time SW Force A output", size: "1", shift: "5", mask: "0x20" },
			{ name: "RLDCSF", description: "Reload from Shadow options", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "AQCSFRC", description: "", offset: "0xC", size: "16",
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
			{ name: "HALFCYCLE", description: "Half Cycle Clocking Enable", size: "1", shift: "15", mask: "0x8000" },
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
			{ name: "DCAEVT2", description: "DCAEVT2", size: "1", shift: "6", mask: "0x40" },
			{ name: "DCBEVT2", description: "DCBEVT2", size: "1", shift: "7", mask: "0x80" },
			{ name: "OSHT1", description: "One-shot TZ1 select", size: "1", shift: "8", mask: "0x100" },
			{ name: "OSHT2", description: "One-shot TZ2 select", size: "1", shift: "9", mask: "0x200" },
			{ name: "OSHT3", description: "One-shot TZ3 select", size: "1", shift: "10", mask: "0x400" },
			{ name: "OSHT4", description: "One-shot TZ4 select", size: "1", shift: "11", mask: "0x800" },
			{ name: "OSHT5", description: "One-shot TZ5 select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OSHT6", description: "One-shot TZ6 select", size: "1", shift: "13", mask: "0x2000" },
			{ name: "DCAEVT1", description: "DCAEVT1", size: "1", shift: "14", mask: "0x4000" },
			{ name: "DCBEVT1", description: "DCBEVT1", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "TZDCSEL", description: "Trip zone digital comparator select", offset: "0x11", size: "16",
		bits: [
			{ name: "DCAEVT1", description: "Digital Compare Output A Event 1", size: "3", shift: "0", mask: "0x7" },
			{ name: "DCAEVT2", description: "Digital Compare Output A Event 2", size: "3", shift: "3", mask: "0x38" },
			{ name: "DCBEVT1", description: "Digital Compare Output B Event 1", size: "3", shift: "6", mask: "0x1C0" },
			{ name: "DCBEVT2", description: "Digital Compare Output B Event 2", size: "3", shift: "9", mask: "0xE00" },
		]
	},
	{ name: "TZCTL", description: "Trip zone control", offset: "0x12", size: "16",
		bits: [
			{ name: "TZA", description: "TZ1 to TZ6 Trip Action On EPWMxA", size: "2", shift: "0", mask: "0x3" },
			{ name: "TZB", description: "TZ1 to TZ6 Trip Action On EPWMxB", size: "2", shift: "2", mask: "0xC" },
			{ name: "DCAEVT1", description: "EPWMxA action on DCAEVT1", size: "2", shift: "4", mask: "0x30" },
			{ name: "DCAEVT2", description: "EPWMxA action on DCAEVT2", size: "2", shift: "6", mask: "0xC0" },
			{ name: "DCBEVT1", description: "EPWMxB action on DCBEVT1", size: "2", shift: "8", mask: "0x300" },
			{ name: "DCBEVT2", description: "EPWMxB action on DCBEVT2", size: "2", shift: "10", mask: "0xC00" },
		]
	},
	{ name: "TZEINT", description: "Trip zone interrupt enable", offset: "0x13", size: "16",
		bits: [
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Force DCAEVT1 event", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Force DCAEVT2 event", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Force DCBEVT1 event", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Force DCBEVT2 event", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZFLG", description: "Trip zone interrupt flags", offset: "0x14", size: "16",
		bits: [
			{ name: "INT", description: "Global status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Force DCAEVT1 event", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Force DCAEVT2 event", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Force DCBEVT1 event", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Force DCBEVT2 event", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZCLR", description: "Trip zone clear", offset: "0x15", size: "16",
		bits: [
			{ name: "INT", description: "Global status", size: "1", shift: "0", mask: "0x1" },
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Force DCAEVT1 event", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Force DCAEVT2 event", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Force DCBEVT1 event", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Force DCBEVT2 event", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "TZFRC", description: "Trip zone force interrupt", offset: "0x16", size: "16",
		bits: [
			{ name: "CBC", description: "Trip Zones Cycle By Cycle Int", size: "1", shift: "1", mask: "0x2" },
			{ name: "OST", description: "Trip Zones One Shot Int", size: "1", shift: "2", mask: "0x4" },
			{ name: "DCAEVT1", description: "Force DCAEVT1 event", size: "1", shift: "3", mask: "0x8" },
			{ name: "DCAEVT2", description: "Force DCAEVT2 event", size: "1", shift: "4", mask: "0x10" },
			{ name: "DCBEVT1", description: "Force DCBEVT1 event", size: "1", shift: "5", mask: "0x20" },
			{ name: "DCBEVT2", description: "Force DCBEVT2 event", size: "1", shift: "6", mask: "0x40" },
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
			{ name: "INT", description: "EPWMxINTn Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "EPWMxSOCA Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "EPWMxSOCB Flag", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETCLR", description: "Event trigger clear", offset: "0x1A", size: "16",
		bits: [
			{ name: "INT", description: "EPWMxINTn Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "EPWMxSOCA Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "EPWMxSOCB Clear", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "ETFRC", description: "Event trigger force", offset: "0x1B", size: "16",
		bits: [
			{ name: "INT", description: "EPWMxINTn Force", size: "1", shift: "0", mask: "0x1" },
			{ name: "SOCA", description: "EPWMxSOCA Force", size: "1", shift: "2", mask: "0x4" },
			{ name: "SOCB", description: "EPWMxSOCB Force", size: "1", shift: "3", mask: "0x8" },
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
			{ name: "HRLOAD", description: "Shadow mode Select Bit", size: "2", shift: "3", mask: "0x18" },
			{ name: "SELOUTB", description: "EPWMB Output Select Bit", size: "1", shift: "5", mask: "0x20" },
			{ name: "AUTOCONV", description: "Autoconversion Bit", size: "1", shift: "6", mask: "0x40" },
			{ name: "SWAPAB", description: "Swap EPWMA & EPWMB Outputs Bit", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "HRPWR", description: "HRPWM Power Register", offset: "0x1F", size: "16",
		bits: [
			{ name: "MEPOFF", description: "MEP Calibration Off Bits", size: "4", shift: "6", mask: "0x3C0" },
		]
	},
	{ name: "HRMSTEP", description: "HRPWM MEP Step Register", offset: "0x24", size: "16",
		bits: [
		]
	},
	{ name: "HRPCTL", description: "High Resolution Period Control", offset: "0x26", size: "16",
		bits: [
			{ name: "HRPE", description: "High resolution period enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "PWMSYNCSEL", description: "PWMSYNC Source Select Bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "TBPHSHRLOADE", description: "TBPHSHR Load Enable Bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "TBPRDM", description: "", offset: "0x28", size: "16",
		bits: [
		]
	},
	{ name: "CMPAM", description: "Union of CMPA:CMPAHR mirror registers", offset: "0x29", size: "16",
		bits: [
		]
	},
	{ name: "DCTRIPSEL", description: "Digital Compare Trip Select", offset: "0x2C", size: "16",
		bits: [
			{ name: "DCAHCOMPSEL", description: "DCAHCOMPSEL:4;     //3:0   Digital Compare A High, COMP Input Select", size: "4", shift: "0", mask: "0xF" },
			{ name: "DCALCOMPSEL", description: "DCALCOMPSEL:4;     //7:4   Digital Compare A Low, COMP Input Select", size: "4", shift: "4", mask: "0xF0" },
			{ name: "DCBHCOMPSEL", description: "DCBHCOMPSEL:4;     //11:8  Digital Compare B High, COMP Input Select", size: "4", shift: "8", mask: "0xF00" },
			{ name: "DCBLCOMPSEL", description: "DCBLCOMPSEL:4;     //15:12 Digital Compare B Low, COMP Input Select", size: "4", shift: "12", mask: "0xF000" },
		]
	},
	{ name: "DCACTL", description: "Digital Compare A Control", offset: "0x2D", size: "16",
		bits: [
			{ name: "EVT1SRCSEL", description: "DCBEVT1 Source Signal Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT1FRCSYNCSEL", description: "DCBEVT1 Force Cynchronization Signal Select", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT1SOCE", description: "DCEVT1 SOC, Enable/Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT1SYNCE", description: "DCEVT1 Sync, Enable/Disable", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT2SRCSEL", description: "DCEVT2 Source Signal Select", size: "1", shift: "8", mask: "0x100" },
			{ name: "EVT2FRCSYNCSEL", description: "DCEVT2 Force Synchronization Signal Select", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "DCBCTL", description: "Digital Compare B Control", offset: "0x2E", size: "16",
		bits: [
			{ name: "EVT1SRCSEL", description: "DCBEVT1 Source Signal Select", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT1FRCSYNCSEL", description: "DCBEVT1 Force Cynchronization Signal Select", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT1SOCE", description: "DCEVT1 SOC, Enable/Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT1SYNCE", description: "DCEVT1 Sync, Enable/Disable", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT2SRCSEL", description: "DCEVT2 Source Signal Select", size: "1", shift: "8", mask: "0x100" },
			{ name: "EVT2FRCSYNCSEL", description: "DCEVT2 Force Synchronization Signal Select", size: "1", shift: "9", mask: "0x200" },
		]
	},
	{ name: "DCFCTL", description: "Digital Compare Filter Control", offset: "0x2F", size: "16",
		bits: [
			{ name: "SRCSEL", description: "Filter Block Signal Source Select", size: "2", shift: "0", mask: "0x3" },
			{ name: "BLANKE", description: "Blanking Enable/Disable", size: "1", shift: "2", mask: "0x4" },
			{ name: "BLANKINV", description: "Blanking Window Inversion", size: "1", shift: "3", mask: "0x8" },
			{ name: "PULSESEL", description: "PULSESEL:2;", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "DCCAPCTL", description: "Digital Compare Capture Control", offset: "0x30", size: "16",
		bits: [
			{ name: "CAPE", description: "Counter Capture Enable/Disable", size: "1", shift: "0", mask: "0x1" },
			{ name: "SHDWMODE", description: "Counter Capture Mode", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DCFOFFSET", description: "Digital Compare Filter Offset", offset: "0x31", size: "16",
		bits: [
		]
	},
	{ name: "DCFOFFSETCNT", description: "", offset: "0x32", size: "16",
		bits: [
		]
	},
	{ name: "DCFWINDOW", description: "Digital Compare Filter Window", offset: "0x33", size: "16",
		bits: [
		]
	},
	{ name: "DCFWINDOWCNT", description: "", offset: "0x34", size: "16",
		bits: [
		]
	},
	{ name: "DCCAP", description: "", offset: "0x35", size: "16",
		bits: [
		]
	},
];
module.exports = {
	epwmRegisters: EPWM_REGISTERS,
}
