let WADI_REGISTERS = [
	{ name: "BLKCFG", description: "WADI Block Clock Divider", offset: "0x0", size: "32",
		bits: [
			{ name: "CLKEN", description: "Enables clock for WADI block", size: "1", shift: "4", mask: "0x10" },
			{ name: "SIG1IN", description: "Selects the input signal for the SIG1 input of WADI block", size: "5", shift: "8", mask: "0x1F00" },
			{ name: "SIG2IN", description: "Selects the input signal for the SIG2 input of WADI block", size: "5", shift: "16", mask: "0x1F0000" },
			{ name: "TRIG1IN", description: "Selects trigger input signal for SIG1 analysis", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "TRIG2IN", description: "Selects  trigger input signal for SIG2 analysis", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "SIGTOSIGCFG", description: "Configuration for SIG1 to SIG2 comparison for WADI Block", offset: "0x2", size: "32",
		bits: [
			{ name: "CMP", description: "Compare value for difference of width/sum measurement", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "CMPMARGIN", description: "Margin of error for difference of width/sum measurement", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "SIGTOSIG_CMPEN", description: "Enables the signal to signal compare", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SIGTOSIG_DBCMPEN", description: "Enables the deadband check between two signals", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SIGTOSIG_OLAPCMPEN", description: "Enables the overlap check between two signals", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "DBCMPTYPE", description: "Selects the check type for deadband control", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "OLAPCMPTYPE", description: "Selects the check type for overlap control", size: "1", shift: "29", mask: "0x20000000" },
		]
	},
	{ name: "SIGTOSIG_PKCFG", description: "Signal1 to Signal2 peak comparison value and margin for WADI Block", offset: "0x4", size: "32",
		bits: [
			{ name: "PKCMP", description: "Compare value for difference of peak measurement", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "PKCMPMARGIN", description: "Margin of error for difference of peak measurement", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIGTOSIG_AVGCFG", description: "Signal1 to Signal2 average comparison value and margin for WADI Block", offset: "0x6", size: "32",
		bits: [
			{ name: "AVGCMP", description: "Compare difference for measurements average of both signals", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "AVGCMPMARGIN", description: "Margin for difference of average of both signals", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIGTOSIG_DBOLAPA", description: "Signal1 to Signal2 dead-band comparison difference and margin for WADI Block", offset: "0x8", size: "32",
		bits: [
			{ name: "DBCMPA", description: "Compare value for dead-band between both signals", size: "8", shift: "0", mask: "0xFF" },
			{ name: "OLAPCMPA", description: "Compare value for Overlap between both signal levels", size: "16", shift: "8", mask: "0xFFFF00" },
			{ name: "OLAPCMPAMARGIN", description: "Margin of variation of overlap between both signals", size: "6", shift: "24", mask: "0x3F000000" },
		]
	},
	{ name: "SIGTOSIG_DBOLAPB", description: "Signal1 to Signal2 dead-band and Overlap compare values for WADI Block", offset: "0xA", size: "32",
		bits: [
			{ name: "DBCMPB", description: "Compare value for dead-band between both signals", size: "8", shift: "0", mask: "0xFF" },
			{ name: "OLAPCMPB", description: "Compare value for Overlap between both signal levels", size: "16", shift: "8", mask: "0xFFFF00" },
			{ name: "OLAPCMPBMARGIN", description: "Margin of variation of overlap between both signals", size: "6", shift: "24", mask: "0x3F000000" },
		]
	},
	{ name: "BLKTRIGCFG", description: "The trigger configuration for SIG1 and SIG2 of the WADI Block", offset: "0xC", size: "32",
		bits: [
			{ name: "TRIG1TYPE", description: "The trigger type for SIG1 signal input.", size: "3", shift: "0", mask: "0x7" },
			{ name: "TRIG1SWEN", description: "Software trigger for the SIG1", size: "1", shift: "8", mask: "0x100" },
			{ name: "TRIG2TYPE", description: "The trigger type for SIG2 signal input.", size: "3", shift: "16", mask: "0x70000" },
			{ name: "TRIG2SWEN", description: "Software trigger for the SIG2", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "SIG1CFG", description: "Measurement configuration for SIG1 of WADI Block", offset: "0x32", size: "32",
		bits: [
			{ name: "SIGPOL", description: "Starting edge select as rise, fall or either", size: "2", shift: "0", mask: "0x3" },
			{ name: "EDGESPAN", description: "Defines span of edges of given type to measure the width.", size: "4", shift: "8", mask: "0xF00" },
			{ name: "NUMAGGR", description: "Defines number of measurements to be aggregated", size: "3", shift: "16", mask: "0x70000" },
			{ name: "AGGRMODE", description: "Whether peak or average or both measurements to compute", size: "2", shift: "24", mask: "0x3000000" },
		]
	},
	{ name: "SIG1CMPA", description: "Envelope-1 compare value and margin for SIG1 for WADI Block", offset: "0x34", size: "32",
		bits: [
			{ name: "CMPA", description: "Compare A value for measured count of the SIG1", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPAMARGIN", description: "+/- Margin for compare-1 around SIG1CMPA[CMPA]", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG1CMPB", description: "Envelope-2 compare value and margin for SIG1 for WADI Block", offset: "0x36", size: "32",
		bits: [
			{ name: "CMPB", description: "Compare B value for measured count of the SIG1", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPBMARGIN", description: "+/- Margin for compare B around SIG1CMPB[CMPB]", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG1PKCFG", description: "Peak of the aggregation compare configuration for  SIG1 of WADI Block", offset: "0x38", size: "32",
		bits: [
			{ name: "CMP", description: "Compare value for peak measurements of SIG1", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPMARGIN", description: "Margin of variation for peak measurements of SIG1", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG1AVGCFG", description: "Average of the aggregation comparison configuration for SIG1 of WADI Block", offset: "0x3A", size: "32",
		bits: [
			{ name: "CMP", description: "Compare value for average of measurements of SIG1", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPMARGIN", description: "Margin for average of measurements of SIG1", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG1EDGECFG", description: "Frequency measurement  configuration for SIG1 of WADI Block", offset: "0x3C", size: "32",
		bits: [
			{ name: "TIMEWNDOW", description: "Time window to count edges of SIG1", size: "28", shift: "0", mask: "0xFFFFFFF" },
			{ name: "CNTEN", description: "SIG1 Edge count mode enable", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SIG1EDGEMVWCFG", description: "Moving Window Configuration for SIG1 of WADI Block", offset: "0x3E", size: "32",
		bits: [
			{ name: "MVWTIME", description: "Moving Window time", size: "26", shift: "0", mask: "0x3FFFFFF" },
			{ name: "MVWCNT", description: "Moving window count:number of MWVTIME windows to accumulate", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "MVWEN", description: "Moving window operation enable", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SIG2CFG", description: "Measurement configuration for SIG2 of WADI Block", offset: "0x64", size: "32",
		bits: [
			{ name: "SIGPOL", description: "Starting edge select as rise, fall or either", size: "2", shift: "0", mask: "0x3" },
			{ name: "EDGESPAN", description: "Defines span of edges of given type to measure the width.", size: "4", shift: "8", mask: "0xF00" },
			{ name: "NUMAGGR", description: "Defines number of measurements to be aggregated", size: "3", shift: "16", mask: "0x70000" },
			{ name: "AGGRMODE", description: "Whether peak or average or both measurements to compute", size: "2", shift: "24", mask: "0x3000000" },
		]
	},
	{ name: "SIG2CMPA", description: "Compare value A and +/- margin for SIG2 for WADI Block", offset: "0x66", size: "32",
		bits: [
			{ name: "CMPA", description: "Compare A value for measured count of the SIG2", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPAMARGIN", description: "+/- Margin for compare-1 around SIG2CMPA[CMPA]", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG2CMPB", description: "Compare value B and +/- margin for SIG2 for WADI Block", offset: "0x68", size: "32",
		bits: [
			{ name: "CMPB", description: "Compare B value for measured count of the SIG2", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPBMARGIN", description: "+/- Margin for compare B around SIG2CMPB[CMPB]", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG2PKCFG", description: "Peak of the aggregation compare configuration for  SIG2 of WADI Block", offset: "0x6A", size: "32",
		bits: [
			{ name: "CMP", description: "Compare value for peak measurements of SIG2", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPMARGIN", description: "Margin of variation for peak measurements of SIG2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG2AVGCFG", description: "Average of the aggregation comparison configuration for SIG2 of WADI Block", offset: "0x6C", size: "32",
		bits: [
			{ name: "CMP", description: "Compare value for average of measurements of SIG2", size: "24", shift: "0", mask: "0xFFFFFF" },
			{ name: "CMPMARGIN", description: "Margin for average of measurements of SIG2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SIG2EDGECFG", description: "Frequency measurement  configuration for SIG2 of WADI Block", offset: "0x6E", size: "32",
		bits: [
			{ name: "TIMEWNDOW", description: "Time window to count edges of SIG2", size: "28", shift: "0", mask: "0xFFFFFFF" },
			{ name: "CNTEN", description: "SIG2 Edge count mode enable", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SIG2EDGEMVWCFG", description: "Moving Window Configuration for SIG2 of WADI Block", offset: "0x70", size: "32",
		bits: [
			{ name: "MVWTIME", description: "Moving Window time", size: "26", shift: "0", mask: "0x3FFFFFF" },
			{ name: "MVWCNT", description: "Moving window count:number of MWVTIME windows to accumulate", size: "2", shift: "28", mask: "0x30000000" },
			{ name: "MVWEN", description: "Moving window operation enable", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "BLKERRSTS", description: "Block status register", offset: "0x96", size: "32",
		bits: [
			{ name: "SIG1CMPAERR", description: "Compare A margin error for the SIG1 measurements", size: "2", shift: "0", mask: "0x3" },
			{ name: "SIG1PKERR", description: "Error of SIG1 peak measurements", size: "2", shift: "2", mask: "0xC" },
			{ name: "SIG1AVGERR", description: "Average of aggregation error for the SIG1 measurements", size: "2", shift: "4", mask: "0x30" },
			{ name: "SIG1CMPBERR", description: "Compare B margin error for the SIG1 measurements", size: "2", shift: "6", mask: "0xC0" },
			{ name: "SIG2CMPAERR", description: "Compare A margin error for the SIG2 measurements", size: "2", shift: "8", mask: "0x300" },
			{ name: "SIG2PKERR", description: "Error of SIG2 peak measurements", size: "2", shift: "10", mask: "0xC00" },
			{ name: "SIG2AVGERR", description: "Average of aggregation error for the SIG2 measurements", size: "2", shift: "12", mask: "0x3000" },
			{ name: "SIG2CMPBERR", description: "Compare B margin error for the SIG2 measurements", size: "2", shift: "14", mask: "0xC000" },
			{ name: "SIGTOSIG_CMPERR", description: "Compare error for the SIGTOSIG measurements difference", size: "2", shift: "16", mask: "0x30000" },
			{ name: "SIGTOSIG_PKERR", description: "Error of SIGTOSIG peak measurements difference", size: "2", shift: "18", mask: "0xC0000" },
			{ name: "SIGTOSIG_AVGERR", description: "Average error for the SIGTOSIG measurements difference", size: "2", shift: "20", mask: "0x300000" },
			{ name: "SIGTOSIG_DBCMPAERR", description: "Deadband Compare A error for the SIGTOSIG measurements", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SIGTOSIG_DBCMPBERR", description: "Deadband Compare B Error for the SIGTOSIG measurements", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SIGTOSIG_OLAPCMPAERR", description: "Overlap check Compare A error of SIGTOSIG measurements", size: "2", shift: "24", mask: "0x3000000" },
			{ name: "SIGTOSIG_OLAPCMPBERR", description: "Overlap check Compare B error of SIGTOSIG measurements", size: "2", shift: "26", mask: "0xC000000" },
			{ name: "SIG_ERR", description: "Measurement error of unexpected waveform anomaly", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SIGTOSIG_ERR", description: "Mismatch in number of readings between signals", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "BLKERRINFO", description: "Block count value of failed register", offset: "0x98", size: "32",
		bits: [
			{ name: "ERRCNT", description: "First failed count of SIGx multiplexed  to this register", size: "25", shift: "0", mask: "0x1FFFFFF" },
			{ name: "ERRTYPE", description: "Type of error of the registered count", size: "3", shift: "28", mask: "0x70000000" },
		]
	},
	{ name: "BLKERRCFG", description: "Block Debug additional info.", offset: "0x9A", size: "32",
		bits: [
			{ name: "ERRCNTSEL", description: "Selects the count to be multiplexed for debug", size: "2", shift: "0", mask: "0x3" },
			{ name: "OVERIDESIG1", description: "Drives the signal correction for outputting the SIG1", size: "4", shift: "8", mask: "0xF00" },
			{ name: "OVERIDESIG2", description: "Drives the signal correction for outputting the SIG2", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "OVERIDESIGTOSIG", description: "Drives the correction to both signals if SIGTOSIG error", size: "4", shift: "24", mask: "0xF000000" },
		]
	},
	{ name: "SSS_EVTMASK", description: "Mask to combine Block errors for trigger of SSS in event word Output by WADI block", offset: "0x9C", size: "32",
		bits: [
			{ name: "SIG1MASK", description: "Mask for specific WADI events to SSS event word or not", size: "15", shift: "0", mask: "0x7FFF" },
			{ name: "SIG2MASK", description: "Mask for specific WADI events to SSS event word or not", size: "4", shift: "16", mask: "0xF0000" },
		]
	},
	{ name: "PARTEST", description: "Enables parity test", offset: "0xB6", size: "32",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
	{ name: "BASETIMERLOW", description: "Read only value for lower word of the base timer.", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "BASETIMERHIGH", description: "Upper word of the base timer and trigger to start the timer.", offset: "0x2", size: "32",
		bits: [
			{ name: "HIGHWORD", description: "Upper word of the base timer", size: "28", shift: "0", mask: "0xFFFFFFF" },
			{ name: "ENBASETIMER", description: "Start base timer trigger", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "INTSTS", description: "Gives the block wise aggregated raw error status that shall trigger the interrupt.", offset: "0x4", size: "32",
		bits: [
			{ name: "BLK1INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "0", mask: "0x1" },
			{ name: "BLK2INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "1", mask: "0x2" },
			{ name: "BLK3INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "2", mask: "0x4" },
			{ name: "BLK4INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "3", mask: "0x8" },
			{ name: "BLK5INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "4", mask: "0x10" },
			{ name: "BLK6INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "5", mask: "0x20" },
			{ name: "BLK7INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "6", mask: "0x40" },
			{ name: "BLK8INT", description: "Interrupt status by ORing all WADI block errors", size: "1", shift: "7", mask: "0x80" },
			{ name: "SIGBLKSINT", description: "ORed int status of measurement error for all WADI blocks", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SIGTOSIG_BLKSINT", description: "ORed int status of mismatch error for all WADI blocks", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "INTSTSMASK", description: "Provides mask for application to suppress or allow a particular block related errors to cause interrupt or not", offset: "0x6", size: "32",
		bits: [
			{ name: "BLKSMASK", description: "Line wise mask to propagate interrupt or not", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGBLKSMASK", description: "Line wise mask to propagate interrupt or not", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SIGTOSIG_BLKSMASK", description: "Line wise mask to propagate interrupt or not", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "BLKSMASKSTS", description: "This is AND combination of active high indication of block-wise status asserting an interrupt.", offset: "0x8", size: "32",
		bits: [
			{ name: "BLKSMASK", description: "This is AND of INTSTS and INTSTSMASK", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SIGBLKS", description: "This is AND of INTSTS and INTSTSMASK", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SIGTOSIGBLKS", description: "This is AND of INTSTS and INTSTSMASK", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "INTSTSCLR", description: "Provides way for application to clear the interrupt status.", offset: "0xA", size: "32",
		bits: [
			{ name: "BLK1INT", description: "Clears the status of the INTSTS of Block 1", size: "1", shift: "0", mask: "0x1" },
			{ name: "BLK2INT", description: "Clears the status of the INTSTS of Block 2", size: "1", shift: "1", mask: "0x2" },
			{ name: "BLK3INT", description: "Clears the status of the INTSTS of Block 3", size: "1", shift: "2", mask: "0x4" },
			{ name: "BLK4INT", description: "Clears the status of the INTSTS of Block 4", size: "1", shift: "3", mask: "0x8" },
			{ name: "BLK5INT", description: "Clears the status of the INTSTS of Block 5", size: "1", shift: "4", mask: "0x10" },
			{ name: "BLK6INT", description: "Clears the status of the INTSTS of Block 6", size: "1", shift: "5", mask: "0x20" },
			{ name: "BLK7INT", description: "Clears the status of the INTSTS of Block 7", size: "1", shift: "6", mask: "0x40" },
			{ name: "BLK8INT", description: "Clears the status of the INTSTS of Block 8", size: "1", shift: "7", mask: "0x80" },
			{ name: "SIGBLKSINT", description: "Clears the status of all block's INTSTS[SIGBLKSINT]", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SIGTOSIG_BLKSINT", description: "Clears the status of all block's INTSTS[SIGTOSIG_BLKSINT]", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "INTSTSFRC", description: "Allows emulation of the RIS to raise interrupt in software", offset: "0xC", size: "32",
		bits: [
			{ name: "BLK1INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "0", mask: "0x1" },
			{ name: "BLK2INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "1", mask: "0x2" },
			{ name: "BLK3INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "2", mask: "0x4" },
			{ name: "BLK4INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "3", mask: "0x8" },
			{ name: "BLK5INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "4", mask: "0x10" },
			{ name: "BLK6INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "5", mask: "0x20" },
			{ name: "BLK7INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "6", mask: "0x40" },
			{ name: "BLK8INT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "7", mask: "0x80" },
			{ name: "SIGBLKSINT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SIGTOSIG_BLKSINT", description: "Allows software force of WADI Block interrupt", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SIGSYNCFILTCFG", description: "Each input SIG to be connected through synchroniser or not", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "TRIGSYNCFILTCFG", description: "Each trigger to be connected through synchroniser or not", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "REVISION", description: "IP Revision", offset: "0x2A", size: "32",
		bits: [
			{ name: "MINOR", description: "Minor Revision Number", size: "6", shift: "0", mask: "0x3F" },
			{ name: "CUSTOM", description: "Custom Module Number", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MAJOR", description: "Major Revision Number", size: "3", shift: "8", mask: "0x700" },
			{ name: "RTL", description: "Design Release Number", size: "5", shift: "11", mask: "0xF800" },
			{ name: "FUNC", description: "Functional Release Number", size: "12", shift: "16", mask: "0xFFF0000" },
			{ name: "SCHEME", description: "Defines Scheme for Module", size: "2", shift: "30", mask: "0xC0000000" },
		]
	},
	{ name: "DMATRIGSTS", description: "Status of the DMA triggers active", offset: "0x2C", size: "32",
		bits: [
			{ name: "BLK1_DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "BLK2_DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "BLK3_DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "BLK4_DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "BLK5_DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "BLK6DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "BLK7DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "BLK8DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "7", mask: "0x80" },
			{ name: "BLK9DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "8", mask: "0x100" },
			{ name: "BLK10DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "9", mask: "0x200" },
			{ name: "BLK11DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "10", mask: "0x400" },
			{ name: "BLK12DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "11", mask: "0x800" },
			{ name: "BLK13DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "12", mask: "0x1000" },
			{ name: "BLK14DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "13", mask: "0x2000" },
			{ name: "BLK15DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "14", mask: "0x4000" },
			{ name: "BLK16DMAEVT", description: "Indicates the WADI Block event for DMA trigger", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SSS_EVT1", description: "Indicates the SSS Event event for DMA trigger", size: "1", shift: "16", mask: "0x10000" },
			{ name: "SSS_EVT2", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "17", mask: "0x20000" },
			{ name: "SSS_EVT3", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "18", mask: "0x40000" },
			{ name: "SSS_EVT4", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SSS_EVT5", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "20", mask: "0x100000" },
			{ name: "SSS_EVT6", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SSS_EVT7", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "22", mask: "0x400000" },
			{ name: "SSS_EVT8", description: "Indicates the SSS Event for DMA trigger", size: "1", shift: "23", mask: "0x800000" },
			{ name: "SSS_OUTEVT1", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "SSS_OUTEVT2", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "SSS_OUTEVT3", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "SSS_OUTEVT4", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "SSS_OUTEVT5", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "SSS_OUTEVT6", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "SSS_OUTEVT7", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "SSS_OUTEVT8", description: "Indicates the SSS output event for DMA trigger", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "DMATRIGEN", description: "Mask to enable individual trigger cause", offset: "0x2E", size: "32",
		bits: [
			{ name: "BLKSDMAEVT", description: "WADI Block event enables for DMA request trigger", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "SSS_EVT1_4DMA", description: "SSS Event word Set-1 enables for DMA request Trigger", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "SSS_EVT5_8DMA", description: "SSS Event word Set-2 enables for DMA request Trigger", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "SSS_OUTEVT1_4DMA", description: "SSS output event 1 to 4 enables for DMA request Trigger", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "SSS_OUTEVT5_8DMA", description: "SSS output event 5 to 8 enables for DMA request Trigger", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "DMASTSUPDATE", description: "Indicates the register set updated post DMA write", offset: "0x30", size: "32",
		bits: [
			{ name: "WRSTSBLK1", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "0", mask: "0x1" },
			{ name: "WRSTSBLK2", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "1", mask: "0x2" },
			{ name: "WRSTSBLK3", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "2", mask: "0x4" },
			{ name: "WRSTSBLK4", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "3", mask: "0x8" },
			{ name: "WRSTSBLK5", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "4", mask: "0x10" },
			{ name: "WRSTSBLK6", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "5", mask: "0x20" },
			{ name: "WRSTSBLK7", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "6", mask: "0x40" },
			{ name: "WRSTSBLK8", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "7", mask: "0x80" },
			{ name: "WRSTSBLK9", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "8", mask: "0x100" },
			{ name: "WRSTSBLK10", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "9", mask: "0x200" },
			{ name: "WRSTSBLK11", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "10", mask: "0x400" },
			{ name: "WRSTSBLK12", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "11", mask: "0x800" },
			{ name: "WRSTSBLK13", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "12", mask: "0x1000" },
			{ name: "WRSTSBLK14", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "13", mask: "0x2000" },
			{ name: "WRSTSBLK15", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "14", mask: "0x4000" },
			{ name: "WRSTSBLK16", description: "Status of DMA update for register set of WADI Block", size: "1", shift: "15", mask: "0x8000" },
			{ name: "WRSTSEVT1", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "16", mask: "0x10000" },
			{ name: "WRSTSEVT2", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "17", mask: "0x20000" },
			{ name: "WRSTSEVT3", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "18", mask: "0x40000" },
			{ name: "WRSTSEVT4", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "19", mask: "0x80000" },
			{ name: "WRSTSEVT5", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "20", mask: "0x100000" },
			{ name: "WRSTSEVT6", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "21", mask: "0x200000" },
			{ name: "WRSTSEVT7", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "22", mask: "0x400000" },
			{ name: "WRSTSEVT8", description: "DMA MMR write status of  SSS Event word", size: "1", shift: "23", mask: "0x800000" },
			{ name: "WRSTSOUT1", description: "DMA MMR write status of  SSS OUTEVT1", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "WRSTSOUT2", description: "DMA MMR write status of  SSS OUTEVT2", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "WRSTSOUT3", description: "DMA MMR write status of  SSS OUTEVT3", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "WRSTSOUT4", description: "DMA MMR write status of  SSS OUTEVT4", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "WRSTSOUT5", description: "DMA MMR write status of  SSS OUTEVT5", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "WRSTSOUT6", description: "DMA MMR write status of  SSS OUTEVT6", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "WRSTSOUT7", description: "DMA MMR write status of  SSS OUTEVT7", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "WRSTSOUT8", description: "DMA MMR write status of  SSS OUTEVT8", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "DMAFILTWRCFG", description: "DMA writes Filter enable for each of WADI & SSS blocks", offset: "0x32", size: "32",
		bits: [
			{ name: "BLKSWREN", description: "Enable for filtered DMA write for WADI Block", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "EVT1_4WREN", description: "Enable for filtered DMA write for SSS Event 1 to 4", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "EVT5_8WREN", description: "Enable for filtered DMA write for SSS Event 5 to 8", size: "4", shift: "20", mask: "0xF00000" },
			{ name: "OUTEVT1_4WREN", description: "Enable for filtered DMA write for SSS output Events 1-4", size: "4", shift: "24", mask: "0xF000000" },
			{ name: "OUTEVT5_8WREN", description: "Enable for filtered DMA write for SSS output Events 5-8", size: "4", shift: "28", mask: "0xF0000000" },
		]
	},
	{ name: "CFGREGLOCK", description: "Configuration Register Lock", offset: "0x88", size: "32",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CFGREGCOMMIT", description: "Configuration Register Commit", offset: "0x8A", size: "32",
		bits: [
			{ name: "COMMIT", description: "CONFIG_REG_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "OPERREGLOCK", description: "Operating Register Lock", offset: "0x8C", size: "32",
		bits: [
			{ name: "LOCK", description: "Register Lock", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "OPERREGCOMMIT", description: "Operating Register Commit", offset: "0x8E", size: "32",
		bits: [
			{ name: "COMMIT", description: "OPER_REG_LOCK Permanent Commit", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "SSS_EVTTRIG", description: "Event trigger word output by WADI instance for SSS", offset: "0x94", size: "32",
		bits: [
		]
	},
	{ name: "SSS_OUTEVTSTS", description: "Status of the active event", offset: "0x96", size: "32",
		bits: [
			{ name: "OUTEVT1_4", description: "Active seq word status for first set", size: "4", shift: "0", mask: "0xF" },
			{ name: "OUTEVT5_8", description: "Active seq word status for Second set", size: "4", shift: "4", mask: "0xF0" },
		]
	},
	{ name: "SSS_BLK1_2OUTSEL", description: "Mux select word for outputs 0-3", offset: "0x98", size: "32",
		bits: [
			{ name: "BLK1SIG1", description: "Maps the  OUTEVTn associated with BLK0:SIG1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BLK1SIG2", description: "Maps the OUTEVTn associated with BLK0:SIG2", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BLK2SIG1", description: "Maps the OUTEVTn associated with BLK1:SIG1", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "BLK2SIG2", description: "Maps the OUTEVTn associated with BLK1:SIG2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SSS_BLK3_4OUTSEL", description: "Mux select word for outputs 4-7", offset: "0x9A", size: "32",
		bits: [
			{ name: "BLK3SIG1", description: "Maps the  OUTEVTn associated with BLK2:SIG1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BLK3SIG2", description: "Maps the OUTEVTn associated with BLK2:SIG2", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BLK4SIG1", description: "Maps the OUTEVTn associated with BLK3:SIG1", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "BLK4SIG2", description: "Maps the OUTEVTn associated with BLK3:SIG2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SSS_BLK5_6OUTSEL", description: "Mux select word for outputs 8-11", offset: "0x9C", size: "32",
		bits: [
			{ name: "BLK5SIG1", description: "Maps the  OUTEVTn associated with BLK5:SIG1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BLK5SIG2", description: "Maps the OUTEVTn associated with BLK5:SIG2", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BLK6SIG1", description: "Maps the OUTEVTn associated with BLK6:SIG1", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "BLK6SIG2", description: "Maps the OUTEVTn associated with BLK6:SIG2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SSS_BLK7_8OUTSEL", description: "Mux select word for outputs 12-15", offset: "0x9E", size: "32",
		bits: [
			{ name: "BLK7SIG1", description: "Maps the  OUTEVTn associated with BLK7:SIG1", size: "8", shift: "0", mask: "0xFF" },
			{ name: "BLK7SIG2", description: "Maps the OUTEVTn associated with BLK7:SIG2", size: "8", shift: "8", mask: "0xFF00" },
			{ name: "BLK8SIG1", description: "Maps the OUTEVTn associated with BLK8:SIG1", size: "8", shift: "16", mask: "0xFF0000" },
			{ name: "BLK8SIG2", description: "Maps the OUTEVTn associated with BLK8:SIG2", size: "8", shift: "24", mask: "0xFF000000" },
		]
	},
	{ name: "SSS_OUTEVT1LINKCFG", description: "Output event1 Link configuration", offset: "0xB0", size: "32",
		bits: [
			{ name: "OUTEVT1LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT2LINKCFG", description: "Output event2 link configuration", offset: "0xB2", size: "32",
		bits: [
			{ name: "OUTEVT2LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT3LINKCFG", description: "Output event3 link configuration", offset: "0xB4", size: "32",
		bits: [
			{ name: "OUTEVT3LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT4LINKCFG", description: "Output event4 link configuration", offset: "0xB6", size: "32",
		bits: [
			{ name: "OUTEVT4LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT5LINKCFG", description: "Output event5 link configuration", offset: "0xB8", size: "32",
		bits: [
			{ name: "OUTEVT5LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT6LINKCFG", description: "Output event6 link configuration", offset: "0xBA", size: "32",
		bits: [
			{ name: "OUTEVT6LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT7LINKCFG", description: "Output event7 link configuration", offset: "0xBC", size: "32",
		bits: [
			{ name: "OUTEVT7LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_OUTEVT8LINKCFG", description: "Output event8 link configuration", offset: "0xBE", size: "32",
		bits: [
			{ name: "OUT8LINK", description: "Links output events (OUTEVTs) as per one hot encoding", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "SSS_EVT1CFG", description: "Event1 that compares to trigger word SSS_EVTTRIG", offset: "0xC0", size: "32",
		bits: [
		]
	},
	{ name: "SSS_EVT2CFG", description: "Event2 that compares to trigger word SSS_EVTTRIG", offset: "0xC2", size: "32",
		bits: [
		]
	},
	{ name: "SSS_EVT3CFG", description: "Event3 that compares to trigger word SSS_EVTTRIG", offset: "0xC4", size: "32",
		bits: [
		]
	},
	{ name: "SSS_EVT4CFG", description: "Event4 that compares to trigger word SSS_EVTTRIG", offset: "0xC6", size: "32",
		bits: [
		]
	},
	{ name: "SSS_TRIGEVT1_4CFG", description: "Configuration for using trigger word in specific manner", offset: "0xC8", size: "32",
		bits: [
			{ name: "TRIG_EVT1CFG", description: "Selects action associated with event 1", size: "4", shift: "0", mask: "0xF" },
			{ name: "TRIG_EVT2CFG", description: "Selects action associated with event 2", size: "4", shift: "8", mask: "0xF00" },
			{ name: "TRIG_EVT3CFG", description: "Selects action associated with event 3", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "TRIG_EVT4CFG", description: "Selects action associated with event 4", size: "4", shift: "24", mask: "0xF000000" },
		]
	},
	{ name: "SSS_BLKSOUTEVT1CFG", description: "Output event1 to be applied for output", offset: "0x136", size: "32",
		bits: [
		]
	},
	{ name: "SSS_BLKSOUTEVT2CFG", description: "Output event2 to be applied for output", offset: "0x138", size: "32",
		bits: [
		]
	},
	{ name: "SSS_BLKSOUTEVT3CFG", description: "Output event3 to be applied for output", offset: "0x13A", size: "32",
		bits: [
		]
	},
	{ name: "SSS_BLKSOUTEVT4CFG", description: "Output event4 to be applied for output", offset: "0x13C", size: "32",
		bits: [
		]
	},
	{ name: "SSS_OUTEVT1TRIGCFG", description: "Output event1 configuration for triggers, link", offset: "0x13E", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT1 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT1 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT1 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT1 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT1 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT1 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT1 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT1 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT2TRIGCFG", description: "Output event2 configuration for triggers, link", offset: "0x140", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT2 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT2 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT2 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT2 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT2 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT2 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT2 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT2 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT3TRIGCFG", description: "Output event3 configuration for triggers, link", offset: "0x142", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT3 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT3 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT3 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT3 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT3 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT3 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT3 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT3 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT4TRIGCFG", description: "Output event4 configuration for triggers, link", offset: "0x144", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT4 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT4 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT4 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT4 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT4 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT4 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT4 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT4 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT1DUR", description: "Output event1 configuration of delays", offset: "0x146", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT1", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_OUTEVT2DUR", description: "Output event2 configuration of delays", offset: "0x148", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT2", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_OUTEVT3DUR", description: "Output event3 configuration of delays", offset: "0x14A", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT3", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_OUTEVT4DUR", description: "Output event4 configuration of delays", offset: "0x14C", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT4", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_EVT5CFG", description: "Event5 that compares to trigger word SSS_EVTTRIG", offset: "0x19E", size: "32",
		bits: [
		]
	},
	{ name: "SSS_EVT6CFG", description: "Event6 that compares to trigger word SSS_EVTTRIG", offset: "0x1A0", size: "32",
		bits: [
		]
	},
	{ name: "SSS_EVT7CFG", description: "Event7 that compares to trigger word SSS_EVTTRIG", offset: "0x1A2", size: "32",
		bits: [
		]
	},
	{ name: "SSS_EVT8CFG", description: "Event8 that compares to trigger word SSS_EVTTRIG", offset: "0x1A4", size: "32",
		bits: [
		]
	},
	{ name: "SSS_TRIGEVT5_8CFG", description: "Configuration for using trigger word in specific manner", offset: "0x1A6", size: "32",
		bits: [
			{ name: "TRIG_EVT5CFG", description: "Selects action associated with event 5", size: "4", shift: "0", mask: "0xF" },
			{ name: "TRIG_EVT6CFG", description: "Selects action associated with event 6", size: "4", shift: "8", mask: "0xF00" },
			{ name: "TRIG_EVT7CFG", description: "Selects action associated with event 7", size: "4", shift: "16", mask: "0xF0000" },
			{ name: "TRIG_EVT8CFG", description: "Selects action associated with event 8", size: "4", shift: "24", mask: "0xF000000" },
		]
	},
	{ name: "SSS_BLKSOUTEVT5CFG", description: "Output event5 to be applied for output", offset: "0x214", size: "32",
		bits: [
		]
	},
	{ name: "SSS_BLKSOUTEVT6CFG", description: "Output event6 to be applied for output", offset: "0x216", size: "32",
		bits: [
		]
	},
	{ name: "SSS_BLKSOUTEVT7CFG", description: "Output event7 to be applied for output", offset: "0x218", size: "32",
		bits: [
		]
	},
	{ name: "SSS_BLKSOUTEVT8CFG", description: "Output event8 to be applied for output", offset: "0x21A", size: "32",
		bits: [
		]
	},
	{ name: "SSS_OUTEVT5TRIGCFG", description: "Output event5 configuration for triggers, link", offset: "0x21C", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT5 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT5 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT5 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT5 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT5 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT5 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT5 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT5 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT6TRIGCFG", description: "Output event6 configuration for triggers, link", offset: "0x21E", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT6 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT6 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT6 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT6 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT6 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT6 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT6 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT6 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT7TRIGCFG", description: "Output event7 configuration for triggers, link", offset: "0x220", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT7 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT7 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT7 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT7 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT7 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT7 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT7 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT7 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT8TRIGCFG", description: "Output event8 configuration for triggers, link", offset: "0x222", size: "32",
		bits: [
			{ name: "EVT1TRIG", description: "Sets OUTEVT8 based on Event 1 Trigger", size: "1", shift: "0", mask: "0x1" },
			{ name: "EVT2TRIG", description: "Sets OUTEVT8 based on Event 2 Trigger", size: "1", shift: "1", mask: "0x2" },
			{ name: "EVT3TRIG", description: "Sets OUTEVT8 based on Event 3 Trigger", size: "1", shift: "2", mask: "0x4" },
			{ name: "EVT4TRIG", description: "Sets OUTEVT8 based on Event 4 Trigger", size: "1", shift: "3", mask: "0x8" },
			{ name: "EVT5TRIG", description: "Sets OUTEVT8 based on Event 5 Trigger", size: "1", shift: "4", mask: "0x10" },
			{ name: "EVT6TRIG", description: "Sets OUTEVT8 based on Event 6 Trigger", size: "1", shift: "5", mask: "0x20" },
			{ name: "EVT7TRIG", description: "Sets OUTEVT8 based on Event 7 Trigger", size: "1", shift: "6", mask: "0x40" },
			{ name: "EVT8TRIG", description: "Sets OUTEVT8 based on Event 8 Trigger", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "SSS_OUTEVT5DUR", description: "Output event5 configuration of delays", offset: "0x224", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT5", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_OUTEVT6DUR", description: "Output event6 configuration of delays", offset: "0x226", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT6", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_OUTEVT7DUR", description: "Output event7 configuration of delays", offset: "0x228", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT7", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "SSS_OUTEVT8DUR", description: "Output event8 configuration of delays", offset: "0x22A", size: "32",
		bits: [
			{ name: "TIME", description: "Duration time for application of OUTEVT8", size: "24", shift: "0", mask: "0xFFFFFF" },
		]
	},
	{ name: "PARTEST", description: "Enables parity test", offset: "0x244", size: "32",
		bits: [
			{ name: "TESTEN", description: "Parity test enable configuration", size: "4", shift: "0", mask: "0xF" },
		]
	},
];
module.exports = {
	wadiRegisters: WADI_REGISTERS,
}
