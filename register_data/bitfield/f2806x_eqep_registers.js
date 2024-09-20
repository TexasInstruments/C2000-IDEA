let EQEP_REGISTERS = [
	{ name: "QPOSCNT", description: "Position Counter", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "QPOSINIT", description: "Position Counter Init", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "QPOSMAX", description: "Maximum Position Count", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "QPOSCMP", description: "Position Compare", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "QPOSILAT", description: "Index Position Latch", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "QPOSSLAT", description: "Strobe Position Latch", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "QPOSLAT", description: "Position Latch", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "QUTMR", description: "QEP Unit Timer", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "QUPRD", description: "QEP Unit Period", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "QWDTMR", description: "QEP Watchdog Timer", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "QWDPRD", description: "QEP Watchdog Period", offset: "0x13", size: "16",
		bits: [
		]
	},
	{ name: "QDECCTL", description: "Quadrature Decoder Control", offset: "0x14", size: "16",
		bits: [
			{ name: "Uint16	QSP", description: "Input Polarity", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	QIP", description: "Input Polarity", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	QBP", description: "Input Polarity", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	QAP", description: "Input Polarity", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	IGATE", description: "Pulse Gating Option", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	SWAP", description: "Signal Source for Position Counter", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	XCR", description: "Clock Rate", size: "1", shift: "11", mask: "0x800" },
			{ name: "Uint16	SPSEL", description: "Output Pin Select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "Uint16	SOEN", description: "Position Compare Sync", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	QSRC", description: "Counter Source", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "QEPCTL", description: "QEP Control", offset: "0x15", size: "16",
		bits: [
			{ name: "Uint16	WDE", description: "watchdog enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	UTE", description: "unit timer enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	QCLM", description: "capture latch mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	QPEN", description: "postotion counter enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	IEL", description: "event latch", size: "2", shift: "4", mask: "0x30" },
			{ name: "Uint16	SEL", description: "event latch", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	SWI", description: "init position counter", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	IEI", description: "event init of position count", size: "2", shift: "8", mask: "0x300" },
			{ name: "Uint16	SEI", description: "event init", size: "2", shift: "10", mask: "0xC00" },
			{ name: "Uint16	PCRM", description: "counter reset", size: "2", shift: "12", mask: "0x3000" },
			{ name: "Uint16	FREE_SOFT", description: "mode", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "QCAPCTL", description: "Qaudrature Capture Control", offset: "0x16", size: "16",
		bits: [
			{ name: "Uint16	UPPS", description: "position pre-scale", size: "4", shift: "0", mask: "0xF" },
			{ name: "Uint16	CCPS", description: "capture timer pre-scale", size: "3", shift: "4", mask: "0x70" },
			{ name: "Uint16	CEN", description: "QEP capture", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "QPOSCTL", description: "Position Compare Control", offset: "0x17", size: "16",
		bits: [
			{ name: "Uint16	PCSPW", description: "compare sync pulse width", size: "12", shift: "0", mask: "0xFFF" },
			{ name: "Uint16	PCE", description: "compare enable/disable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "Uint16	PCPOL", description: "of sync output", size: "1", shift: "13", mask: "0x2000" },
			{ name: "Uint16	PCLOAD", description: "compare of shadow load", size: "1", shift: "14", mask: "0x4000" },
			{ name: "Uint16	PCSHDW", description: "compare of shadow enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "QEINT", description: "QEP Interrupt Control", offset: "0x18", size: "16",
		bits: [
			{ name: "Uint16	PCE", description: "counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	QPE", description: "phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	QDC", description: "dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	WTO", description: "timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	PCU", description: "counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	PCO", description: "counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	PCR", description: "compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	PCM", description: "compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	SEL", description: "event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	IEL", description: "latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	UTO", description: "timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QFLG", description: "QEP Interrupt Flag", offset: "0x19", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "0	Global.interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	PCE", description: "counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	PHE", description: "phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	QDC", description: "dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	WTO", description: "timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	PCU", description: "counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	PCO", description: "counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	PCR", description: "compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	PCM", description: "compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	SEL", description: "event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	IEL", description: "latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	UTO", description: "timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QCLR", description: "QEP Interrupt Clear", offset: "0x1A", size: "16",
		bits: [
			{ name: "Uint16	INT", description: "0	Global.interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	PCE", description: "counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	PHE", description: "phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	QDC", description: "dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	WTO", description: "timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	PCU", description: "counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	PCO", description: "counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	PCR", description: "compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	PCM", description: "compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	SEL", description: "event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	IEL", description: "latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	UTO", description: "timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QFRC", description: "QEP Interrupt Force", offset: "0x1B", size: "16",
		bits: [
			{ name: "Uint16	PCE", description: "counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	PHE", description: "phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	QDC", description: "dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	WTO", description: "timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	PCU", description: "counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	PCO", description: "counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	PCR", description: "compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "Uint16	PCM", description: "compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "Uint16	SEL", description: "event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "Uint16	IEL", description: "latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "Uint16	UTO", description: "timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QEPSTS", description: "QEP Status", offset: "0x1C", size: "16",
		bits: [
			{ name: "Uint16	PCEF", description: "counter error", size: "1", shift: "0", mask: "0x1" },
			{ name: "Uint16	FIMF", description: "index marker", size: "1", shift: "1", mask: "0x2" },
			{ name: "Uint16	CDEF", description: "direction error", size: "1", shift: "2", mask: "0x4" },
			{ name: "Uint16	COEF", description: "overflow error", size: "1", shift: "3", mask: "0x8" },
			{ name: "Uint16	QDLF", description: "direction latch", size: "1", shift: "4", mask: "0x10" },
			{ name: "Uint16	QDF", description: "direction", size: "1", shift: "5", mask: "0x20" },
			{ name: "Uint16	FIDF", description: "on first index marker", size: "1", shift: "6", mask: "0x40" },
			{ name: "Uint16	UPEVNT", description: "position event flag", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "QCTMR", description: "QEP Capture Timer", offset: "0x1D", size: "16",
		bits: [
		]
	},
	{ name: "QCPRD", description: "QEP Capture Period", offset: "0x1E", size: "16",
		bits: [
		]
	},
	{ name: "QCTMRLAT", description: "QEP Capture Latch", offset: "0x1F", size: "16",
		bits: [
		]
	},
	{ name: "QCPRDLAT", description: "QEP Capture Period Latch", offset: "0x20", size: "16",
		bits: [
		]
	},
];
module.exports = {
	eqepRegisters: EQEP_REGISTERS,
}
