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
			{ name: "QSP", description: "QEPS Input Polarity", size: "1", shift: "5", mask: "0x20" },
			{ name: "QIP", description: "QEPI Input Polarity", size: "1", shift: "6", mask: "0x40" },
			{ name: "QBP", description: "QEPB Input Polarity", size: "1", shift: "7", mask: "0x80" },
			{ name: "QAP", description: "QEPA Input Polarity", size: "1", shift: "8", mask: "0x100" },
			{ name: "IGATE", description: "Index Pulse Gating Option", size: "1", shift: "9", mask: "0x200" },
			{ name: "SWAP", description: "CLK/DIR Signal Source for Position Counter", size: "1", shift: "10", mask: "0x400" },
			{ name: "XCR", description: "External Clock Rate", size: "1", shift: "11", mask: "0x800" },
			{ name: "SPSEL", description: "Sync Output Pin Select", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SOEN", description: "Enable Position Compare Sync", size: "1", shift: "13", mask: "0x2000" },
			{ name: "QSRC", description: "Postion Counter Source", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "QEPCTL", description: "QEP Control", offset: "0x15", size: "16",
		bits: [
			{ name: "WDE", description: "QEP watchdog enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "UTE", description: "QEP unit timer enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "QCLM", description: "QEP capture latch mode", size: "1", shift: "2", mask: "0x4" },
			{ name: "QPEN", description: "Quadrature postotion counter enable", size: "1", shift: "3", mask: "0x8" },
			{ name: "IEL", description: "Index event latch", size: "2", shift: "4", mask: "0x30" },
			{ name: "SEL", description: "Strobe event latch", size: "1", shift: "6", mask: "0x40" },
			{ name: "SWI", description: "Software init position counter", size: "1", shift: "7", mask: "0x80" },
			{ name: "IEI", description: "Index event init of position count", size: "2", shift: "8", mask: "0x300" },
			{ name: "SEI", description: "Strobe event init", size: "2", shift: "10", mask: "0xC00" },
			{ name: "PCRM", description: "Postion counter reset", size: "2", shift: "12", mask: "0x3000" },
			{ name: "FREE_SOFT", description: "Emulation mode", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "QCAPCTL", description: "Qaudrature Capture Control", offset: "0x16", size: "16",
		bits: [
			{ name: "UPPS", description: "Unit position pre-scale", size: "4", shift: "0", mask: "0xF" },
			{ name: "CCPS", description: "QEP capture timer pre-scale", size: "3", shift: "4", mask: "0x70" },
			{ name: "CEN", description: "Enable QEP capture", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "QPOSCTL", description: "Position Compare Control", offset: "0x17", size: "16",
		bits: [
			{ name: "PCSPW", description: "Position compare sync pulse width", size: "12", shift: "0", mask: "0xFFF" },
			{ name: "PCE", description: "Position compare enable/disable", size: "1", shift: "12", mask: "0x1000" },
			{ name: "PCPOL", description: "Polarity of sync output", size: "1", shift: "13", mask: "0x2000" },
			{ name: "PCLOAD", description: "Position compare of shadow load", size: "1", shift: "14", mask: "0x4000" },
			{ name: "PCSHDW", description: "Position compare of shadow enable", size: "1", shift: "15", mask: "0x8000" },
		]
	},
	{ name: "QEINT", description: "QEP Interrupt Control", offset: "0x18", size: "16",
		bits: [
			{ name: "PCE", description: "Position counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "QPE", description: "Quadrature phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "QDC", description: "Quadrature dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "WTO", description: "Watchdog timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "PCU", description: "Position counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "PCO", description: "Position counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "PCR", description: "Position compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "PCM", description: "Position compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "SEL", description: "Strobe event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "IEL", description: "Event latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "UTO", description: "Unit timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QFLG", description: "QEP Interrupt Flag", offset: "0x19", size: "16",
		bits: [
			{ name: "INT", description: "Global.__interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "PCE", description: "Position counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "PHE", description: "Quadrature phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "QDC", description: "Quadrature dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "WTO", description: "Watchdog timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "PCU", description: "Position counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "PCO", description: "Position counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "PCR", description: "Position compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "PCM", description: "Position compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "SEL", description: "Strobe event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "IEL", description: "Event latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "UTO", description: "Unit timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QCLR", description: "QEP Interrupt Clear", offset: "0x1A", size: "16",
		bits: [
			{ name: "INT", description: "Global.__interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "PCE", description: "Position counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "PHE", description: "Quadrature phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "QDC", description: "Quadrature dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "WTO", description: "Watchdog timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "PCU", description: "Position counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "PCO", description: "Position counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "PCR", description: "Position compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "PCM", description: "Position compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "SEL", description: "Strobe event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "IEL", description: "Event latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "UTO", description: "Unit timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QFRC", description: "QEP Interrupt Force", offset: "0x1B", size: "16",
		bits: [
			{ name: "PCE", description: "Position counter error", size: "1", shift: "1", mask: "0x2" },
			{ name: "PHE", description: "Quadrature phase error", size: "1", shift: "2", mask: "0x4" },
			{ name: "QDC", description: "Quadrature dir change", size: "1", shift: "3", mask: "0x8" },
			{ name: "WTO", description: "Watchdog timeout", size: "1", shift: "4", mask: "0x10" },
			{ name: "PCU", description: "Position counter underflow", size: "1", shift: "5", mask: "0x20" },
			{ name: "PCO", description: "Position counter overflow", size: "1", shift: "6", mask: "0x40" },
			{ name: "PCR", description: "Position compare ready", size: "1", shift: "7", mask: "0x80" },
			{ name: "PCM", description: "Position compare match", size: "1", shift: "8", mask: "0x100" },
			{ name: "SEL", description: "Strobe event latch", size: "1", shift: "9", mask: "0x200" },
			{ name: "IEL", description: "Event latch", size: "1", shift: "10", mask: "0x400" },
			{ name: "UTO", description: "Unit timeout", size: "1", shift: "11", mask: "0x800" },
		]
	},
	{ name: "QEPSTS", description: "QEP Status", offset: "0x1C", size: "16",
		bits: [
			{ name: "PCEF", description: "Position counter error", size: "1", shift: "0", mask: "0x1" },
			{ name: "FIMF", description: "First index marker", size: "1", shift: "1", mask: "0x2" },
			{ name: "CDEF", description: "Capture direction error", size: "1", shift: "2", mask: "0x4" },
			{ name: "COEF", description: "Capture overflow error", size: "1", shift: "3", mask: "0x8" },
			{ name: "QDLF", description: "QEP direction latch", size: "1", shift: "4", mask: "0x10" },
			{ name: "QDF", description: "Quadrature direction", size: "1", shift: "5", mask: "0x20" },
			{ name: "FIDF", description: "Direction on first index marker", size: "1", shift: "6", mask: "0x40" },
			{ name: "UPEVNT", description: "Unit position event flag", size: "1", shift: "7", mask: "0x80" },
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
