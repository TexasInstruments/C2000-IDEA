let ECAN_REGISTERS = [
	{ name: "CANME", description: "Mailbox Enable", offset: "0x0", size: "32",
		bits: [
			{ name: "ME0", description: "Enable Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "ME1", description: "Enable Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "ME2", description: "Enable Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "ME3", description: "Enable Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "ME4", description: "Enable Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "ME5", description: "Enable Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "ME6", description: "Enable Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "ME7", description: "Enable Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "ME8", description: "Enable Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "ME9", description: "Enable Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "ME10", description: "Enable Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "ME11", description: "Enable Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "ME12", description: "Enable Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "ME13", description: "Enable Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "ME14", description: "Enable Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "ME15", description: "Enable Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "ME16", description: "Enable Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "ME17", description: "Enable Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "ME18", description: "Enable Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "ME19", description: "Enable Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "ME20", description: "Enable Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "ME21", description: "Enable Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "ME22", description: "Enable Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "ME23", description: "Enable Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "ME24", description: "Enable Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "ME25", description: "Enable Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "ME26", description: "Enable Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "ME27", description: "Enable Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "ME28", description: "Enable Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "ME29", description: "Enable Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "ME30", description: "Enable Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "ME31", description: "Enable Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANMD", description: "Mailbox Direction", offset: "0x2", size: "32",
		bits: [
			{ name: "MD0", description: "0 -> Tx 1 -> Rx", size: "1", shift: "0", mask: "0x1" },
			{ name: "MD1", description: "0 -> Tx 1 -> Rx", size: "1", shift: "1", mask: "0x2" },
			{ name: "MD2", description: "0 -> Tx 1 -> Rx", size: "1", shift: "2", mask: "0x4" },
			{ name: "MD3", description: "0 -> Tx 1 -> Rx", size: "1", shift: "3", mask: "0x8" },
			{ name: "MD4", description: "0 -> Tx 1 -> Rx", size: "1", shift: "4", mask: "0x10" },
			{ name: "MD5", description: "0 -> Tx 1 -> Rx", size: "1", shift: "5", mask: "0x20" },
			{ name: "MD6", description: "0 -> Tx 1 -> Rx", size: "1", shift: "6", mask: "0x40" },
			{ name: "MD7", description: "0 -> Tx 1 -> Rx", size: "1", shift: "7", mask: "0x80" },
			{ name: "MD8", description: "0 -> Tx 1 -> Rx", size: "1", shift: "8", mask: "0x100" },
			{ name: "MD9", description: "0 -> Tx 1 -> Rx", size: "1", shift: "9", mask: "0x200" },
			{ name: "MD10", description: "0 -> Tx 1 -> Rx", size: "1", shift: "10", mask: "0x400" },
			{ name: "MD11", description: "0 -> Tx 1 -> Rx", size: "1", shift: "11", mask: "0x800" },
			{ name: "MD12", description: "0 -> Tx 1 -> Rx", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MD13", description: "0 -> Tx 1 -> Rx", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MD14", description: "0 -> Tx 1 -> Rx", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MD15", description: "0 -> Tx 1 -> Rx", size: "1", shift: "15", mask: "0x8000" },
			{ name: "MD16", description: "0 -> Tx 1 -> Rx", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MD17", description: "0 -> Tx 1 -> Rx", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MD18", description: "0 -> Tx 1 -> Rx", size: "1", shift: "18", mask: "0x40000" },
			{ name: "MD19", description: "0 -> Tx 1 -> Rx", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MD20", description: "0 -> Tx 1 -> Rx", size: "1", shift: "20", mask: "0x100000" },
			{ name: "MD21", description: "0 -> Tx 1 -> Rx", size: "1", shift: "21", mask: "0x200000" },
			{ name: "MD22", description: "0 -> Tx 1 -> Rx", size: "1", shift: "22", mask: "0x400000" },
			{ name: "MD23", description: "0 -> Tx 1 -> Rx", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MD24", description: "0 -> Tx 1 -> Rx", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "MD25", description: "0 -> Tx 1 -> Rx", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "MD26", description: "0 -> Tx 1 -> Rx", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "MD27", description: "0 -> Tx 1 -> Rx", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "MD28", description: "0 -> Tx 1 -> Rx", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "MD29", description: "0 -> Tx 1 -> Rx", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "MD30", description: "0 -> Tx 1 -> Rx", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MD31", description: "0 -> Tx 1 -> Rx", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANTRS", description: "Transmit Request Set", offset: "0x4", size: "32",
		bits: [
			{ name: "TRS0", description: "TRS for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "TRS1", description: "TRS for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "TRS2", description: "TRS for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "TRS3", description: "TRS for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "TRS4", description: "TRS for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRS5", description: "TRS for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "TRS6", description: "TRS for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "TRS7", description: "TRS for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "TRS8", description: "TRS for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "TRS9", description: "TRS for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "TRS10", description: "TRS for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "TRS11", description: "TRS for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "TRS12", description: "TRS for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "TRS13", description: "TRS for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "TRS14", description: "TRS for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TRS15", description: "TRS for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TRS16", description: "TRS for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "TRS17", description: "TRS for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TRS18", description: "TRS for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "TRS19", description: "TRS for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TRS20", description: "TRS for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "TRS21", description: "TRS for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "TRS22", description: "TRS for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "TRS23", description: "TRS for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "TRS24", description: "TRS for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "TRS25", description: "TRS for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "TRS26", description: "TRS for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "TRS27", description: "TRS for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "TRS28", description: "TRS for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "TRS29", description: "TRS for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "TRS30", description: "TRS for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "TRS31", description: "TRS for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANTRR", description: "Transmit Request Reset", offset: "0x6", size: "32",
		bits: [
			{ name: "TRR0", description: "TRR for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "TRR1", description: "TRR for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "TRR2", description: "TRR for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "TRR3", description: "TRR for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "TRR4", description: "TRR for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "TRR5", description: "TRR for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "TRR6", description: "TRR for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "TRR7", description: "TRR for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "TRR8", description: "TRR for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "TRR9", description: "TRR for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "TRR10", description: "TRR for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "TRR11", description: "TRR for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "TRR12", description: "TRR for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "TRR13", description: "TRR for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "TRR14", description: "TRR for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TRR15", description: "TRR for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TRR16", description: "TRR for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "TRR17", description: "TRR for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TRR18", description: "TRR for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "TRR19", description: "TRR for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TRR20", description: "TRR for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "TRR21", description: "TRR for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "TRR22", description: "TRR for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "TRR23", description: "TRR for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "TRR24", description: "TRR for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "TRR25", description: "TRR for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "TRR26", description: "TRR for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "TRR27", description: "TRR for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "TRR28", description: "TRR for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "TRR29", description: "TRR for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "TRR30", description: "TRR for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "TRR31", description: "TRR for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANTA", description: "Transmit Acknowledge", offset: "0x8", size: "32",
		bits: [
			{ name: "TA0", description: "TA for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "TA1", description: "TA for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "TA2", description: "TA for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "TA3", description: "TA for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "TA4", description: "TA for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "TA5", description: "TA for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "TA6", description: "TA for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "TA7", description: "TA for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "TA8", description: "TA for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "TA9", description: "TA for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "TA10", description: "TA for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "TA11", description: "TA for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "TA12", description: "TA for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "TA13", description: "TA for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "TA14", description: "TA for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TA15", description: "TA for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TA16", description: "TA for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "TA17", description: "TA for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TA18", description: "TA for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "TA19", description: "TA for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TA20", description: "TA for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "TA21", description: "TA for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "TA22", description: "TA for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "TA23", description: "TA for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "TA24", description: "TA for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "TA25", description: "TA for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "TA26", description: "TA for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "TA27", description: "TA for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "TA28", description: "TA for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "TA29", description: "TA for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "TA30", description: "TA for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "TA31", description: "TA for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANAA", description: "Abort Acknowledge", offset: "0xA", size: "32",
		bits: [
			{ name: "AA0", description: "AA for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "AA1", description: "AA for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "AA2", description: "AA for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "AA3", description: "AA for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "AA4", description: "AA for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "AA5", description: "AA for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "AA6", description: "AA for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "AA7", description: "AA for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "AA8", description: "AA for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "AA9", description: "AA for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "AA10", description: "AA for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "AA11", description: "AA for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "AA12", description: "AA for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "AA13", description: "AA for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "AA14", description: "AA for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "AA15", description: "AA for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "AA16", description: "AA for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "AA17", description: "AA for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "AA18", description: "AA for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "AA19", description: "AA for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "AA20", description: "AA for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "AA21", description: "AA for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "AA22", description: "AA for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "AA23", description: "AA for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "AA24", description: "AA for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "AA25", description: "AA for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "AA26", description: "AA for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "AA27", description: "AA for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "AA28", description: "AA for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "AA29", description: "AA for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "AA30", description: "AA for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "AA31", description: "AA for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANRMP", description: "Received Message Pending", offset: "0xC", size: "32",
		bits: [
			{ name: "RMP0", description: "RMP for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "RMP1", description: "RMP for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RMP2", description: "RMP for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RMP3", description: "RMP for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "RMP4", description: "RMP for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "RMP5", description: "RMP for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "RMP6", description: "RMP for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "RMP7", description: "RMP for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "RMP8", description: "RMP for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "RMP9", description: "RMP for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "RMP10", description: "RMP for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "RMP11", description: "RMP for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "RMP12", description: "RMP for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RMP13", description: "RMP for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RMP14", description: "RMP for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RMP15", description: "RMP for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RMP16", description: "RMP for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "RMP17", description: "RMP for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "RMP18", description: "RMP for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "RMP19", description: "RMP for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "RMP20", description: "RMP for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "RMP21", description: "RMP for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "RMP22", description: "RMP for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RMP23", description: "RMP for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "RMP24", description: "RMP for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "RMP25", description: "RMP for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "RMP26", description: "RMP for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "RMP27", description: "RMP for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "RMP28", description: "RMP for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "RMP29", description: "RMP for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "RMP30", description: "RMP for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "RMP31", description: "RMP for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANRML", description: "Received Message Lost", offset: "0xE", size: "32",
		bits: [
			{ name: "RML0", description: "RML for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "RML1", description: "RML for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RML2", description: "RML for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RML3", description: "RML for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "RML4", description: "RML for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "RML5", description: "RML for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "RML6", description: "RML for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "RML7", description: "RML for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "RML8", description: "RML for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "RML9", description: "RML for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "RML10", description: "RML for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "RML11", description: "RML for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "RML12", description: "RML for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RML13", description: "RML for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RML14", description: "RML for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RML15", description: "RML for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RML16", description: "RML for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "RML17", description: "RML for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "RML18", description: "RML for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "RML19", description: "RML for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "RML20", description: "RML for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "RML21", description: "RML for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "RML22", description: "RML for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RML23", description: "RML for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "RML24", description: "RML for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "RML25", description: "RML for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "RML26", description: "RML for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "RML27", description: "RML for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "RML28", description: "RML for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "RML29", description: "RML for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "RML30", description: "RML for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "RML31", description: "RML for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANRFP", description: "Remote Frame Pending", offset: "0x10", size: "32",
		bits: [
			{ name: "RFP0", description: "RFP for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "RFP1", description: "RFP for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "RFP2", description: "RFP for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "RFP3", description: "RFP for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "RFP4", description: "RFP for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "RFP5", description: "RFP for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "RFP6", description: "RFP for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "RFP7", description: "RFP for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "RFP8", description: "RFP for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "RFP9", description: "RFP for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "RFP10", description: "RFP for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "RFP11", description: "RFP for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "RFP12", description: "RFP for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "RFP13", description: "RFP for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "RFP14", description: "RFP for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "RFP15", description: "RFP for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "RFP16", description: "RFP for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "RFP17", description: "RFP for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "RFP18", description: "RFP for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "RFP19", description: "RFP for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "RFP20", description: "RFP for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "RFP21", description: "RFP for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "RFP22", description: "RFP for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "RFP23", description: "RFP for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "RFP24", description: "RFP for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "RFP25", description: "RFP for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "RFP26", description: "RFP for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "RFP27", description: "RFP for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "RFP28", description: "RFP for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "RFP29", description: "RFP for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "RFP30", description: "RFP for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "RFP31", description: "RFP for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANGAM", description: "Global Acceptance Mask", offset: "0x12", size: "32",
		bits: [
			{ name: "GAM150", description: "Global acceptance mask bits 0-15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "GAM2816", description: "Global acceptance mask bits 16-28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "AMI", description: "AMI bit", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANMC", description: "Master Control", offset: "0x14", size: "32",
		bits: [
			{ name: "MBNR", description: "MBX # for CDR bit", size: "5", shift: "0", mask: "0x1F" },
			{ name: "SRES", description: "Soft reset", size: "1", shift: "5", mask: "0x20" },
			{ name: "STM", description: "Self-test mode", size: "1", shift: "6", mask: "0x40" },
			{ name: "ABO", description: "Auto bus-on", size: "1", shift: "7", mask: "0x80" },
			{ name: "CDR", description: "Change data request", size: "1", shift: "8", mask: "0x100" },
			{ name: "WUBA", description: "Wake-up on bus activity", size: "1", shift: "9", mask: "0x200" },
			{ name: "DBO", description: "Data-byte order", size: "1", shift: "10", mask: "0x400" },
			{ name: "PDR", description: "Power-down mode request", size: "1", shift: "11", mask: "0x800" },
			{ name: "CCR", description: "Change configuration request", size: "1", shift: "12", mask: "0x1000" },
			{ name: "SCB", description: "SCC compatibility bit", size: "1", shift: "13", mask: "0x2000" },
			{ name: "TCC", description: "TSC MSB clear bit", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MBCC", description: "TSC clear bit thru mailbox 16", size: "1", shift: "15", mask: "0x8000" },
			{ name: "SUSP", description: "SUSPEND free/soft bit", size: "1", shift: "16", mask: "0x10000" },
		]
	},
	{ name: "CANBTC", description: "Bit Timing", offset: "0x16", size: "32",
		bits: [
			{ name: "TSEG2REG", description: "TSEG2 register value", size: "3", shift: "0", mask: "0x7" },
			{ name: "TSEG1REG", description: "TSEG1 register value", size: "4", shift: "3", mask: "0x78" },
			{ name: "SAM", description: "Sample-point setting", size: "1", shift: "7", mask: "0x80" },
			{ name: "SJWREG", description: "Synchroniztion Jump Width reg. value", size: "2", shift: "8", mask: "0x300" },
			{ name: "BRPREG", description: "Baudrate prescaler reg. value", size: "8", shift: "16", mask: "0xFF0000" },
		]
	},
	{ name: "CANES", description: "Error Status", offset: "0x18", size: "32",
		bits: [
			{ name: "TM", description: "Transmit Mode", size: "1", shift: "0", mask: "0x1" },
			{ name: "RM", description: "Receive Mode", size: "1", shift: "1", mask: "0x2" },
			{ name: "PDA", description: "Power-down acknowledge", size: "1", shift: "3", mask: "0x8" },
			{ name: "CCE", description: "Change Configuration Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "SMA", description: "Suspend Mode Acknowledge", size: "1", shift: "5", mask: "0x20" },
			{ name: "EW", description: "Warning status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "EP", description: "Error Passive status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "BO", description: "Bus-off status", size: "1", shift: "18", mask: "0x40000" },
			{ name: "ACKE", description: "Acknowledge error", size: "1", shift: "19", mask: "0x80000" },
			{ name: "SE", description: "Stuff error", size: "1", shift: "20", mask: "0x100000" },
			{ name: "CRCE", description: "CRC error", size: "1", shift: "21", mask: "0x200000" },
			{ name: "SA1", description: "Stuck at Dominant error", size: "1", shift: "22", mask: "0x400000" },
			{ name: "BE", description: "Bit error", size: "1", shift: "23", mask: "0x800000" },
			{ name: "FE", description: "Framing error", size: "1", shift: "24", mask: "0x1000000" },
		]
	},
	{ name: "CANTEC", description: "Transmit Error Counter", offset: "0x1A", size: "32",
		bits: [
			{ name: "TEC", description: "TEC", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CANREC", description: "Receive Error Counter", offset: "0x1C", size: "32",
		bits: [
			{ name: "REC", description: "REC", size: "8", shift: "0", mask: "0xFF" },
		]
	},
	{ name: "CANGIF0", description: "Global Interrupt Flag 0", offset: "0x1E", size: "32",
		bits: [
			{ name: "MIV0", description: "Mailbox Interrupt Vector", size: "5", shift: "0", mask: "0x1F" },
			{ name: "WLIF0", description: "Warning level __interrupt flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPIF0", description: "Error-passive __interrupt flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "BOIF0", description: "Bus-off __interrupt flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "RMLIF0", description: "Received msg lost __interrupt flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "WUIF0", description: "Wakeup __interrupt flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "WDIF0", description: "Write denied __interrupt flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "AAIF0", description: "Abort Ack __interrupt flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GMIF0", description: "Global MBX __interrupt flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TCOF0", description: "TSC Overflow flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MTOF0", description: "Mailbox Timeout flag", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "CANGIM", description: "Global Interrupt Mask 0", offset: "0x20", size: "32",
		bits: [
			{ name: "I0EN", description: "Interrupt 0 enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "I1EN", description: "Interrupt 1 enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "GIL", description: "Global Interrupt Level", size: "1", shift: "2", mask: "0x4" },
			{ name: "WLIM", description: "Warning level __interrupt mask", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPIM", description: "Error-passive __interrupt mask", size: "1", shift: "9", mask: "0x200" },
			{ name: "BOIM", description: "Bus-off __interrupt mask", size: "1", shift: "10", mask: "0x400" },
			{ name: "RMLIM", description: "Received msg lost __interrupt mask", size: "1", shift: "11", mask: "0x800" },
			{ name: "WUIM", description: "Wakeup __interrupt mask", size: "1", shift: "12", mask: "0x1000" },
			{ name: "WDIM", description: "Write denied __interrupt mask", size: "1", shift: "13", mask: "0x2000" },
			{ name: "AAIM", description: "Abort Ack __interrupt mask", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TCOM", description: "TSC overflow __interrupt mask", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MTOM", description: "MBX Timeout __interrupt mask", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "CANGIF1", description: "Global Interrupt Flag 1", offset: "0x22", size: "32",
		bits: [
			{ name: "MIV1", description: "Mailbox Interrupt Vector", size: "5", shift: "0", mask: "0x1F" },
			{ name: "WLIF1", description: "Warning level __interrupt flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "EPIF1", description: "Error-passive __interrupt flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "BOIF1", description: "Bus-off __interrupt flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "RMLIF1", description: "Received msg lost __interrupt flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "WUIF1", description: "Wakeup __interrupt flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "WDIF1", description: "Write denied __interrupt flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "AAIF1", description: "Abort Ack __interrupt flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "GMIF1", description: "Global MBX __interrupt flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TCOF1", description: "TSC Overflow flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MTOF1", description: "Mailbox Timeout flag", size: "1", shift: "17", mask: "0x20000" },
		]
	},
	{ name: "CANMIM", description: "Mailbox Interrupt Mask", offset: "0x24", size: "32",
		bits: [
			{ name: "MIM0", description: "MIM for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "MIM1", description: "MIM for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "MIM2", description: "MIM for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "MIM3", description: "MIM for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "MIM4", description: "MIM for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "MIM5", description: "MIM for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "MIM6", description: "MIM for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "MIM7", description: "MIM for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "MIM8", description: "MIM for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "MIM9", description: "MIM for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "MIM10", description: "MIM for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "MIM11", description: "MIM for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "MIM12", description: "MIM for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MIM13", description: "MIM for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MIM14", description: "MIM for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MIM15", description: "MIM for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "MIM16", description: "MIM for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MIM17", description: "MIM for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MIM18", description: "MIM for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "MIM19", description: "MIM for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MIM20", description: "MIM for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "MIM21", description: "MIM for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "MIM22", description: "MIM for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "MIM23", description: "MIM for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MIM24", description: "MIM for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "MIM25", description: "MIM for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "MIM26", description: "MIM for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "MIM27", description: "MIM for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "MIM28", description: "MIM for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "MIM29", description: "MIM for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "MIM30", description: "MIM for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MIM31", description: "MIM for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANMIL", description: "Mailbox Interrupt Level", offset: "0x26", size: "32",
		bits: [
			{ name: "MIL0", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "0", mask: "0x1" },
			{ name: "MIL1", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "1", mask: "0x2" },
			{ name: "MIL2", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "2", mask: "0x4" },
			{ name: "MIL3", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "3", mask: "0x8" },
			{ name: "MIL4", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "4", mask: "0x10" },
			{ name: "MIL5", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "5", mask: "0x20" },
			{ name: "MIL6", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "6", mask: "0x40" },
			{ name: "MIL7", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "7", mask: "0x80" },
			{ name: "MIL8", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "8", mask: "0x100" },
			{ name: "MIL9", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "9", mask: "0x200" },
			{ name: "MIL10", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "10", mask: "0x400" },
			{ name: "MIL11", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "11", mask: "0x800" },
			{ name: "MIL12", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "12", mask: "0x1000" },
			{ name: "MIL13", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "13", mask: "0x2000" },
			{ name: "MIL14", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "14", mask: "0x4000" },
			{ name: "MIL15", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "15", mask: "0x8000" },
			{ name: "MIL16", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "16", mask: "0x10000" },
			{ name: "MIL17", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "17", mask: "0x20000" },
			{ name: "MIL18", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "18", mask: "0x40000" },
			{ name: "MIL19", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "19", mask: "0x80000" },
			{ name: "MIL20", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "20", mask: "0x100000" },
			{ name: "MIL21", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "21", mask: "0x200000" },
			{ name: "MIL22", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "22", mask: "0x400000" },
			{ name: "MIL23", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "23", mask: "0x800000" },
			{ name: "MIL24", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "MIL25", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "MIL26", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "MIL27", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "MIL28", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "MIL29", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "MIL30", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "MIL31", description: "0 -> Int 9.5 1 -> Int 9.6", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANOPC", description: "Overwrite Protection Control", offset: "0x28", size: "32",
		bits: [
			{ name: "OPC0", description: "OPC for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "OPC1", description: "OPC for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "OPC2", description: "OPC for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "OPC3", description: "OPC for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "OPC4", description: "OPC for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "OPC5", description: "OPC for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "OPC6", description: "OPC for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "OPC7", description: "OPC for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "OPC8", description: "OPC for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "OPC9", description: "OPC for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "OPC10", description: "OPC for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "OPC11", description: "OPC for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "OPC12", description: "OPC for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "OPC13", description: "OPC for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "OPC14", description: "OPC for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "OPC15", description: "OPC for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "OPC16", description: "OPC for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "OPC17", description: "OPC for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "OPC18", description: "OPC for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "OPC19", description: "OPC for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "OPC20", description: "OPC for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "OPC21", description: "OPC for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "OPC22", description: "OPC for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "OPC23", description: "OPC for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "OPC24", description: "OPC for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "OPC25", description: "OPC for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "OPC26", description: "OPC for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "OPC27", description: "OPC for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "OPC28", description: "OPC for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "OPC29", description: "OPC for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "OPC30", description: "OPC for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "OPC31", description: "OPC for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANTIOC", description: "TX I/O Control", offset: "0x2A", size: "32",
		bits: [
			{ name: "TXFUNC", description: "TXFUNC", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "CANRIOC", description: "RX I/O Control", offset: "0x2C", size: "32",
		bits: [
			{ name: "RXFUNC", description: "RXFUNC", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "CANTSC", description: "Time-stamp counter", offset: "0x2E", size: "32",
		bits: [
		]
	},
	{ name: "CANTOC", description: "Time-out Control", offset: "0x30", size: "32",
		bits: [
			{ name: "TOC0", description: "TOC for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "TOC1", description: "TOC for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "TOC2", description: "TOC for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "TOC3", description: "TOC for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "TOC4", description: "TOC for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "TOC5", description: "TOC for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "TOC6", description: "TOC for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "TOC7", description: "TOC for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "TOC8", description: "TOC for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "TOC9", description: "TOC for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "TOC10", description: "TOC for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "TOC11", description: "TOC for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "TOC12", description: "TOC for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "TOC13", description: "TOC for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "TOC14", description: "TOC for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TOC15", description: "TOC for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TOC16", description: "TOC for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "TOC17", description: "TOC for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TOC18", description: "TOC for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "TOC19", description: "TOC for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TOC20", description: "TOC for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "TOC21", description: "TOC for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "TOC22", description: "TOC for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "TOC23", description: "TOC for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "TOC24", description: "TOC for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "TOC25", description: "TOC for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "TOC26", description: "TOC for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "TOC27", description: "TOC for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "TOC28", description: "TOC for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "TOC29", description: "TOC for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "TOC30", description: "TOC for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "TOC31", description: "TOC for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CANTOS", description: "Time-out Status", offset: "0x32", size: "32",
		bits: [
			{ name: "TOS0", description: "TOS for Mailbox 0", size: "1", shift: "0", mask: "0x1" },
			{ name: "TOS1", description: "TOS for Mailbox 1", size: "1", shift: "1", mask: "0x2" },
			{ name: "TOS2", description: "TOS for Mailbox 2", size: "1", shift: "2", mask: "0x4" },
			{ name: "TOS3", description: "TOS for Mailbox 3", size: "1", shift: "3", mask: "0x8" },
			{ name: "TOS4", description: "TOS for Mailbox 4", size: "1", shift: "4", mask: "0x10" },
			{ name: "TOS5", description: "TOS for Mailbox 5", size: "1", shift: "5", mask: "0x20" },
			{ name: "TOS6", description: "TOS for Mailbox 6", size: "1", shift: "6", mask: "0x40" },
			{ name: "TOS7", description: "TOS for Mailbox 7", size: "1", shift: "7", mask: "0x80" },
			{ name: "TOS8", description: "TOS for Mailbox 8", size: "1", shift: "8", mask: "0x100" },
			{ name: "TOS9", description: "TOS for Mailbox 9", size: "1", shift: "9", mask: "0x200" },
			{ name: "TOS10", description: "TOS for Mailbox 10", size: "1", shift: "10", mask: "0x400" },
			{ name: "TOS11", description: "TOS for Mailbox 11", size: "1", shift: "11", mask: "0x800" },
			{ name: "TOS12", description: "TOS for Mailbox 12", size: "1", shift: "12", mask: "0x1000" },
			{ name: "TOS13", description: "TOS for Mailbox 13", size: "1", shift: "13", mask: "0x2000" },
			{ name: "TOS14", description: "TOS for Mailbox 14", size: "1", shift: "14", mask: "0x4000" },
			{ name: "TOS15", description: "TOS for Mailbox 15", size: "1", shift: "15", mask: "0x8000" },
			{ name: "TOS16", description: "TOS for Mailbox 16", size: "1", shift: "16", mask: "0x10000" },
			{ name: "TOS17", description: "TOS for Mailbox 17", size: "1", shift: "17", mask: "0x20000" },
			{ name: "TOS18", description: "TOS for Mailbox 18", size: "1", shift: "18", mask: "0x40000" },
			{ name: "TOS19", description: "TOS for Mailbox 19", size: "1", shift: "19", mask: "0x80000" },
			{ name: "TOS20", description: "TOS for Mailbox 20", size: "1", shift: "20", mask: "0x100000" },
			{ name: "TOS21", description: "TOS for Mailbox 21", size: "1", shift: "21", mask: "0x200000" },
			{ name: "TOS22", description: "TOS for Mailbox 22", size: "1", shift: "22", mask: "0x400000" },
			{ name: "TOS23", description: "TOS for Mailbox 23", size: "1", shift: "23", mask: "0x800000" },
			{ name: "TOS24", description: "TOS for Mailbox 24", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "TOS25", description: "TOS for Mailbox 25", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "TOS26", description: "TOS for Mailbox 26", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "TOS27", description: "TOS for Mailbox 27", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "TOS28", description: "TOS for Mailbox 28", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "TOS29", description: "TOS for Mailbox 29", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "TOS30", description: "TOS for Mailbox 30", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "TOS31", description: "TOS for Mailbox 31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM0", description: "", offset: "0x0", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM1", description: "", offset: "0x2", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM2", description: "", offset: "0x4", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM3", description: "", offset: "0x6", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM4", description: "", offset: "0x8", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM5", description: "", offset: "0xA", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM6", description: "", offset: "0xC", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM7", description: "", offset: "0xE", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM8", description: "", offset: "0x10", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM9", description: "", offset: "0x12", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM10", description: "", offset: "0x14", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM11", description: "", offset: "0x16", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM12", description: "", offset: "0x18", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM13", description: "", offset: "0x1A", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM14", description: "", offset: "0x1C", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM15", description: "", offset: "0x1E", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM16", description: "", offset: "0x20", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM17", description: "", offset: "0x22", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM18", description: "", offset: "0x24", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM19", description: "", offset: "0x26", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM20", description: "", offset: "0x28", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM21", description: "", offset: "0x2A", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM22", description: "", offset: "0x2C", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM23", description: "", offset: "0x2E", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM24", description: "", offset: "0x30", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM25", description: "", offset: "0x32", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM26", description: "", offset: "0x34", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM27", description: "", offset: "0x36", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM28", description: "", offset: "0x38", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM29", description: "", offset: "0x3A", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM30", description: "", offset: "0x3C", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "LAM31", description: "", offset: "0x3E", size: "32",
		bits: [
			{ name: "LAM_L", description: "0:15", size: "16", shift: "0", mask: "0xFFFF" },
			{ name: "LAM_H", description: "16:28", size: "13", shift: "16", mask: "0x1FFF0000" },
			{ name: "LAMI", description: "31", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "MOTS0", description: "", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "MOTS1", description: "", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "MOTS2", description: "", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "MOTS3", description: "", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "MOTS4", description: "", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "MOTS5", description: "", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "MOTS6", description: "", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "MOTS7", description: "", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "MOTS8", description: "", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "MOTS9", description: "", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "MOTS10", description: "", offset: "0x14", size: "32",
		bits: [
		]
	},
	{ name: "MOTS11", description: "", offset: "0x16", size: "32",
		bits: [
		]
	},
	{ name: "MOTS12", description: "", offset: "0x18", size: "32",
		bits: [
		]
	},
	{ name: "MOTS13", description: "", offset: "0x1A", size: "32",
		bits: [
		]
	},
	{ name: "MOTS14", description: "", offset: "0x1C", size: "32",
		bits: [
		]
	},
	{ name: "MOTS15", description: "", offset: "0x1E", size: "32",
		bits: [
		]
	},
	{ name: "MOTS16", description: "", offset: "0x20", size: "32",
		bits: [
		]
	},
	{ name: "MOTS17", description: "", offset: "0x22", size: "32",
		bits: [
		]
	},
	{ name: "MOTS18", description: "", offset: "0x24", size: "32",
		bits: [
		]
	},
	{ name: "MOTS19", description: "", offset: "0x26", size: "32",
		bits: [
		]
	},
	{ name: "MOTS20", description: "", offset: "0x28", size: "32",
		bits: [
		]
	},
	{ name: "MOTS21", description: "", offset: "0x2A", size: "32",
		bits: [
		]
	},
	{ name: "MOTS22", description: "", offset: "0x2C", size: "32",
		bits: [
		]
	},
	{ name: "MOTS23", description: "", offset: "0x2E", size: "32",
		bits: [
		]
	},
	{ name: "MOTS24", description: "", offset: "0x30", size: "32",
		bits: [
		]
	},
	{ name: "MOTS25", description: "", offset: "0x32", size: "32",
		bits: [
		]
	},
	{ name: "MOTS26", description: "", offset: "0x34", size: "32",
		bits: [
		]
	},
	{ name: "MOTS27", description: "", offset: "0x36", size: "32",
		bits: [
		]
	},
	{ name: "MOTS28", description: "", offset: "0x38", size: "32",
		bits: [
		]
	},
	{ name: "MOTS29", description: "", offset: "0x3A", size: "32",
		bits: [
		]
	},
	{ name: "MOTS30", description: "", offset: "0x3C", size: "32",
		bits: [
		]
	},
	{ name: "MOTS31", description: "", offset: "0x3E", size: "32",
		bits: [
		]
	},
	{ name: "MOTO0", description: "", offset: "0x0", size: "32",
		bits: [
		]
	},
	{ name: "MOTO1", description: "", offset: "0x2", size: "32",
		bits: [
		]
	},
	{ name: "MOTO2", description: "", offset: "0x4", size: "32",
		bits: [
		]
	},
	{ name: "MOTO3", description: "", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "MOTO4", description: "", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "MOTO5", description: "", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "MOTO6", description: "", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "MOTO7", description: "", offset: "0xE", size: "32",
		bits: [
		]
	},
	{ name: "MOTO8", description: "", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "MOTO9", description: "", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "MOTO10", description: "", offset: "0x14", size: "32",
		bits: [
		]
	},
	{ name: "MOTO11", description: "", offset: "0x16", size: "32",
		bits: [
		]
	},
	{ name: "MOTO12", description: "", offset: "0x18", size: "32",
		bits: [
		]
	},
	{ name: "MOTO13", description: "", offset: "0x1A", size: "32",
		bits: [
		]
	},
	{ name: "MOTO14", description: "", offset: "0x1C", size: "32",
		bits: [
		]
	},
	{ name: "MOTO15", description: "", offset: "0x1E", size: "32",
		bits: [
		]
	},
	{ name: "MOTO16", description: "", offset: "0x20", size: "32",
		bits: [
		]
	},
	{ name: "MOTO17", description: "", offset: "0x22", size: "32",
		bits: [
		]
	},
	{ name: "MOTO18", description: "", offset: "0x24", size: "32",
		bits: [
		]
	},
	{ name: "MOTO19", description: "", offset: "0x26", size: "32",
		bits: [
		]
	},
	{ name: "MOTO20", description: "", offset: "0x28", size: "32",
		bits: [
		]
	},
	{ name: "MOTO21", description: "", offset: "0x2A", size: "32",
		bits: [
		]
	},
	{ name: "MOTO22", description: "", offset: "0x2C", size: "32",
		bits: [
		]
	},
	{ name: "MOTO23", description: "", offset: "0x2E", size: "32",
		bits: [
		]
	},
	{ name: "MOTO24", description: "", offset: "0x30", size: "32",
		bits: [
		]
	},
	{ name: "MOTO25", description: "", offset: "0x32", size: "32",
		bits: [
		]
	},
	{ name: "MOTO26", description: "", offset: "0x34", size: "32",
		bits: [
		]
	},
	{ name: "MOTO27", description: "", offset: "0x36", size: "32",
		bits: [
		]
	},
	{ name: "MOTO28", description: "", offset: "0x38", size: "32",
		bits: [
		]
	},
	{ name: "MOTO29", description: "", offset: "0x3A", size: "32",
		bits: [
		]
	},
	{ name: "MOTO30", description: "", offset: "0x3C", size: "32",
		bits: [
		]
	},
	{ name: "MOTO31", description: "", offset: "0x3E", size: "32",
		bits: [
		]
	},
];
module.exports = {
	ecanRegisters: ECAN_REGISTERS,
}
