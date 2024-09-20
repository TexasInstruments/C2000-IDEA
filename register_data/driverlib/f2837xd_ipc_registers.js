let IPC_REGISTERS = [
	{ name: "ACK", description: "IPC incoming flag clear (acknowledge) register", offset: "0x0", size: "32",
		bits: [
			{ name: "IPC0", description: "Local IPC Flag 0 Acknowledgement", size: "1", shift: "0", mask: "0x1" },
			{ name: "IPC1", description: "Local IPC Flag 1 Acknowledgement", size: "1", shift: "1", mask: "0x2" },
			{ name: "IPC2", description: "Local IPC Flag 2 Acknowledgement", size: "1", shift: "2", mask: "0x4" },
			{ name: "IPC3", description: "Local IPC Flag 3 Acknowledgement", size: "1", shift: "3", mask: "0x8" },
			{ name: "IPC4", description: "Local IPC Flag 4 Acknowledgement", size: "1", shift: "4", mask: "0x10" },
			{ name: "IPC5", description: "Local IPC Flag 5 Acknowledgement", size: "1", shift: "5", mask: "0x20" },
			{ name: "IPC6", description: "Local IPC Flag 6 Acknowledgement", size: "1", shift: "6", mask: "0x40" },
			{ name: "IPC7", description: "Local IPC Flag 7 Acknowledgement", size: "1", shift: "7", mask: "0x80" },
			{ name: "IPC8", description: "Local IPC Flag 8 Acknowledgement", size: "1", shift: "8", mask: "0x100" },
			{ name: "IPC9", description: "Local IPC Flag 9 Acknowledgement", size: "1", shift: "9", mask: "0x200" },
			{ name: "IPC10", description: "Local IPC Flag 10 Acknowledgement", size: "1", shift: "10", mask: "0x400" },
			{ name: "IPC11", description: "Local IPC Flag 11 Acknowledgement", size: "1", shift: "11", mask: "0x800" },
			{ name: "IPC12", description: "Local IPC Flag 12 Acknowledgement", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IPC13", description: "Local IPC Flag 13 Acknowledgement", size: "1", shift: "13", mask: "0x2000" },
			{ name: "IPC14", description: "Local IPC Flag 14 Acknowledgement", size: "1", shift: "14", mask: "0x4000" },
			{ name: "IPC15", description: "Local IPC Flag 15 Acknowledgement", size: "1", shift: "15", mask: "0x8000" },
			{ name: "IPC16", description: "Local IPC Flag 16 Acknowledgement", size: "1", shift: "16", mask: "0x10000" },
			{ name: "IPC17", description: "Local IPC Flag 17 Acknowledgement", size: "1", shift: "17", mask: "0x20000" },
			{ name: "IPC18", description: "Local IPC Flag 18 Acknowledgement", size: "1", shift: "18", mask: "0x40000" },
			{ name: "IPC19", description: "Local IPC Flag 19 Acknowledgement", size: "1", shift: "19", mask: "0x80000" },
			{ name: "IPC20", description: "Local IPC Flag 20 Acknowledgement", size: "1", shift: "20", mask: "0x100000" },
			{ name: "IPC21", description: "Local IPC Flag 21 Acknowledgement", size: "1", shift: "21", mask: "0x200000" },
			{ name: "IPC22", description: "Local IPC Flag 22 Acknowledgement", size: "1", shift: "22", mask: "0x400000" },
			{ name: "IPC23", description: "Local IPC Flag 23 Acknowledgement", size: "1", shift: "23", mask: "0x800000" },
			{ name: "IPC24", description: "Local IPC Flag 24 Acknowledgement", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "IPC25", description: "Local IPC Flag 25 Acknowledgement", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "IPC26", description: "Local IPC Flag 26 Acknowledgement", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "IPC27", description: "Local IPC Flag 27 Acknowledgement", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "IPC28", description: "Local IPC Flag 28 Acknowledgement", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "IPC29", description: "Local IPC Flag 29 Acknowledgement", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "IPC30", description: "Local IPC Flag 30 Acknowledgement", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "IPC31", description: "Local IPC Flag 31 Acknowledgement", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "STS", description: "IPC incoming flag status register", offset: "0x2", size: "32",
		bits: [
			{ name: "IPC0", description: "Local IPC Flag 0 Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "IPC1", description: "Local IPC Flag 1 Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "IPC2", description: "Local IPC Flag 2 Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "IPC3", description: "Local IPC Flag 3 Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "IPC4", description: "Local IPC Flag 4 Status", size: "1", shift: "4", mask: "0x10" },
			{ name: "IPC5", description: "Local IPC Flag 5 Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "IPC6", description: "Local IPC Flag 6 Status", size: "1", shift: "6", mask: "0x40" },
			{ name: "IPC7", description: "Local IPC Flag 7 Status", size: "1", shift: "7", mask: "0x80" },
			{ name: "IPC8", description: "Local IPC Flag 8 Status", size: "1", shift: "8", mask: "0x100" },
			{ name: "IPC9", description: "Local IPC Flag 9 Status", size: "1", shift: "9", mask: "0x200" },
			{ name: "IPC10", description: "Local IPC Flag 10 Status", size: "1", shift: "10", mask: "0x400" },
			{ name: "IPC11", description: "Local IPC Flag 11 Status", size: "1", shift: "11", mask: "0x800" },
			{ name: "IPC12", description: "Local IPC Flag 12 Status", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IPC13", description: "Local IPC Flag 13 Status", size: "1", shift: "13", mask: "0x2000" },
			{ name: "IPC14", description: "Local IPC Flag 14 Status", size: "1", shift: "14", mask: "0x4000" },
			{ name: "IPC15", description: "Local IPC Flag 15 Status", size: "1", shift: "15", mask: "0x8000" },
			{ name: "IPC16", description: "Local IPC Flag 16 Status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "IPC17", description: "Local IPC Flag 17 Status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "IPC18", description: "Local IPC Flag 18 Status", size: "1", shift: "18", mask: "0x40000" },
			{ name: "IPC19", description: "Local IPC Flag 19 Status", size: "1", shift: "19", mask: "0x80000" },
			{ name: "IPC20", description: "Local IPC Flag 20 Status", size: "1", shift: "20", mask: "0x100000" },
			{ name: "IPC21", description: "Local IPC Flag 21 Status", size: "1", shift: "21", mask: "0x200000" },
			{ name: "IPC22", description: "Local IPC Flag 22 Status", size: "1", shift: "22", mask: "0x400000" },
			{ name: "IPC23", description: "Local IPC Flag 23 Status", size: "1", shift: "23", mask: "0x800000" },
			{ name: "IPC24", description: "Local IPC Flag 24 Status", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "IPC25", description: "Local IPC Flag 25 Status", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "IPC26", description: "Local IPC Flag 26 Status", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "IPC27", description: "Local IPC Flag 27 Status", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "IPC28", description: "Local IPC Flag 28 Status", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "IPC29", description: "Local IPC Flag 29 Status", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "IPC30", description: "Local IPC Flag 30 Status", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "IPC31", description: "Local IPC Flag 31 Status", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "SET", description: "IPC remote flag set register", offset: "0x4", size: "32",
		bits: [
			{ name: "IPC0", description: "Set Remote IPC0 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "IPC1", description: "Set Remote IPC1 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "IPC2", description: "Set Remote IPC2 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "IPC3", description: "Set Remote IPC3 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "IPC4", description: "Set Remote IPC4 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "IPC5", description: "Set Remote IPC5 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "IPC6", description: "Set Remote IPC6 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "IPC7", description: "Set Remote IPC7 Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "IPC8", description: "Set Remote IPC8 Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "IPC9", description: "Set Remote IPC9 Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "IPC10", description: "Set Remote IPC10 Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "IPC11", description: "Set Remote IPC11 Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "IPC12", description: "Set Remote IPC12 Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IPC13", description: "Set Remote IPC13 Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "IPC14", description: "Set Remote IPC14 Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "IPC15", description: "Set Remote IPC15 Flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "IPC16", description: "Set Remote IPC16 Flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "IPC17", description: "Set Remote IPC17 Flag", size: "1", shift: "17", mask: "0x20000" },
			{ name: "IPC18", description: "Set Remote IPC18 Flag", size: "1", shift: "18", mask: "0x40000" },
			{ name: "IPC19", description: "Set Remote IPC19 Flag", size: "1", shift: "19", mask: "0x80000" },
			{ name: "IPC20", description: "Set Remote IPC20 Flag", size: "1", shift: "20", mask: "0x100000" },
			{ name: "IPC21", description: "Set Remote IPC21 Flag", size: "1", shift: "21", mask: "0x200000" },
			{ name: "IPC22", description: "Set Remote IPC22 Flag", size: "1", shift: "22", mask: "0x400000" },
			{ name: "IPC23", description: "Set Remote IPC23 Flag", size: "1", shift: "23", mask: "0x800000" },
			{ name: "IPC24", description: "Set Remote IPC24 Flag", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "IPC25", description: "Set Remote IPC25 Flag", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "IPC26", description: "Set Remote IPC26 Flag", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "IPC27", description: "Set Remote IPC27 Flag", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "IPC28", description: "Set Remote IPC28 Flag", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "IPC29", description: "Set Remote IPC29 Flag", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "IPC30", description: "Set Remote IPC30 Flag", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "IPC31", description: "Set Remote IPC31 Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "CLR", description: "IPC remote flag clear register", offset: "0x6", size: "32",
		bits: [
			{ name: "IPC0", description: "Clear Remote IPC0 Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "IPC1", description: "Clear Remote IPC1 Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "IPC2", description: "Clear Remote IPC2 Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "IPC3", description: "Clear Remote IPC3 Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "IPC4", description: "Clear Remote IPC4 Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "IPC5", description: "Clear Remote IPC5 Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "IPC6", description: "Clear Remote IPC6 Flag", size: "1", shift: "6", mask: "0x40" },
			{ name: "IPC7", description: "Clear Remote IPC7 Flag", size: "1", shift: "7", mask: "0x80" },
			{ name: "IPC8", description: "Clear Remote IPC8 Flag", size: "1", shift: "8", mask: "0x100" },
			{ name: "IPC9", description: "Clear Remote IPC9 Flag", size: "1", shift: "9", mask: "0x200" },
			{ name: "IPC10", description: "Clear Remote IPC10 Flag", size: "1", shift: "10", mask: "0x400" },
			{ name: "IPC11", description: "Clear Remote IPC11 Flag", size: "1", shift: "11", mask: "0x800" },
			{ name: "IPC12", description: "Clear Remote IPC12 Flag", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IPC13", description: "Clear Remote IPC13 Flag", size: "1", shift: "13", mask: "0x2000" },
			{ name: "IPC14", description: "Clear Remote IPC14 Flag", size: "1", shift: "14", mask: "0x4000" },
			{ name: "IPC15", description: "Clear Remote IPC15 Flag", size: "1", shift: "15", mask: "0x8000" },
			{ name: "IPC16", description: "Clear Remote IPC16 Flag", size: "1", shift: "16", mask: "0x10000" },
			{ name: "IPC17", description: "Clear Remote IPC17 Flag", size: "1", shift: "17", mask: "0x20000" },
			{ name: "IPC18", description: "Clear Remote IPC18 Flag", size: "1", shift: "18", mask: "0x40000" },
			{ name: "IPC19", description: "Clear Remote IPC19 Flag", size: "1", shift: "19", mask: "0x80000" },
			{ name: "IPC20", description: "Clear Remote IPC20 Flag", size: "1", shift: "20", mask: "0x100000" },
			{ name: "IPC21", description: "Clear Remote IPC21 Flag", size: "1", shift: "21", mask: "0x200000" },
			{ name: "IPC22", description: "Clear Remote IPC22 Flag", size: "1", shift: "22", mask: "0x400000" },
			{ name: "IPC23", description: "Clear Remote IPC23 Flag", size: "1", shift: "23", mask: "0x800000" },
			{ name: "IPC24", description: "Clear Remote IPC24 Flag", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "IPC25", description: "Clear Remote IPC25 Flag", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "IPC26", description: "Clear Remote IPC26 Flag", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "IPC27", description: "Clear Remote IPC27 Flag", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "IPC28", description: "Clear Remote IPC28 Flag", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "IPC29", description: "Clear Remote IPC29 Flag", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "IPC30", description: "Clear Remote IPC30 Flag", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "IPC31", description: "Clear Remote IPC31 Flag", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "FLG", description: "IPC remote flag status register", offset: "0x8", size: "32",
		bits: [
			{ name: "IPC0", description: "Remote IPC0 Flag Status", size: "1", shift: "0", mask: "0x1" },
			{ name: "IPC1", description: "Remote IPC1 Flag Status", size: "1", shift: "1", mask: "0x2" },
			{ name: "IPC2", description: "Remote IPC2 Flag Status", size: "1", shift: "2", mask: "0x4" },
			{ name: "IPC3", description: "Remote IPC3 Flag Status", size: "1", shift: "3", mask: "0x8" },
			{ name: "IPC4", description: "Remote IPC4 Flag Status", size: "1", shift: "4", mask: "0x10" },
			{ name: "IPC5", description: "Remote IPC5 Flag Status", size: "1", shift: "5", mask: "0x20" },
			{ name: "IPC6", description: "Remote IPC6 Flag Status", size: "1", shift: "6", mask: "0x40" },
			{ name: "IPC7", description: "Remote IPC7 Flag Status", size: "1", shift: "7", mask: "0x80" },
			{ name: "IPC8", description: "Remote IPC8 Flag Status", size: "1", shift: "8", mask: "0x100" },
			{ name: "IPC9", description: "Remote IPC9 Flag Status", size: "1", shift: "9", mask: "0x200" },
			{ name: "IPC10", description: "Remote IPC10 Flag Status", size: "1", shift: "10", mask: "0x400" },
			{ name: "IPC11", description: "Remote IPC11 Flag Status", size: "1", shift: "11", mask: "0x800" },
			{ name: "IPC12", description: "Remote IPC12 Flag Status", size: "1", shift: "12", mask: "0x1000" },
			{ name: "IPC13", description: "Remote IPC13 Flag Status", size: "1", shift: "13", mask: "0x2000" },
			{ name: "IPC14", description: "Remote IPC14 Flag Status", size: "1", shift: "14", mask: "0x4000" },
			{ name: "IPC15", description: "Remote IPC15 Flag Status", size: "1", shift: "15", mask: "0x8000" },
			{ name: "IPC16", description: "Remote IPC16 Flag Status", size: "1", shift: "16", mask: "0x10000" },
			{ name: "IPC17", description: "Remote IPC17 Flag Status", size: "1", shift: "17", mask: "0x20000" },
			{ name: "IPC18", description: "Remote IPC18 Flag Status", size: "1", shift: "18", mask: "0x40000" },
			{ name: "IPC19", description: "Remote IPC19 Flag Status", size: "1", shift: "19", mask: "0x80000" },
			{ name: "IPC20", description: "Remote IPC20 Flag Status", size: "1", shift: "20", mask: "0x100000" },
			{ name: "IPC21", description: "Remote IPC21 Flag Status", size: "1", shift: "21", mask: "0x200000" },
			{ name: "IPC22", description: "Remote IPC22 Flag Status", size: "1", shift: "22", mask: "0x400000" },
			{ name: "IPC23", description: "Remote IPC23 Flag Status", size: "1", shift: "23", mask: "0x800000" },
			{ name: "IPC24", description: "Remote IPC24 Flag Status", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "IPC25", description: "Remote IPC25 Flag Status", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "IPC26", description: "Remote IPC26 Flag Status", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "IPC27", description: "Remote IPC27 Flag Status", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "IPC28", description: "Remote IPC28 Flag Status", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "IPC29", description: "Remote IPC29 Flag Status", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "IPC30", description: "Remote IPC30 Flag Status", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "IPC31", description: "Remote IPC31 Flag Status", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "COUNTERL", description: "IPC Counter Low Register", offset: "0xC", size: "16",
		bits: [
		]
	},
	{ name: "COUNTERH", description: "IPC Counter High Register", offset: "0xE", size: "16",
		bits: [
		]
	},
	{ name: "SENDCOM", description: "Local to Remote IPC Command Register", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "SENDADDR", description: "Local to Remote IPC Address Register", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "SENDDATA", description: "Local to Remote IPC Data Register", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "REMOTEREPLY", description: "Remote to Local IPC Reply Data Register", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "RECVCOM", description: "Remote to Local IPC Command Register", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "RECVADDR", description: "Remote to Local IPC Address Register", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "RECVDATA", description: "Remote to Local IPC Data Register", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "LOCALREPLY", description: "Local to Remote IPC Reply Data Register", offset: "0x1E", size: "16",
		bits: [
		]
	},
	{ name: "RECVCOM", description: "Remote to Local IPC Command Register", offset: "0x10", size: "16",
		bits: [
		]
	},
	{ name: "RECVADDR", description: "Remote to Local IPC Address Register", offset: "0x12", size: "16",
		bits: [
		]
	},
	{ name: "RECVDATA", description: "Remote to Local IPC Data Register", offset: "0x14", size: "16",
		bits: [
		]
	},
	{ name: "LOCALREPLY", description: "Local to Remote IPC Reply Data Register", offset: "0x16", size: "16",
		bits: [
		]
	},
	{ name: "SENDCOM", description: "Local to Remote IPC Command Register", offset: "0x18", size: "16",
		bits: [
		]
	},
	{ name: "SENDADDR", description: "Local to Remote IPC Address Register", offset: "0x1A", size: "16",
		bits: [
		]
	},
	{ name: "SENDDATA", description: "Local to Remote IPC Data Register", offset: "0x1C", size: "16",
		bits: [
		]
	},
	{ name: "REMOTEREPLY", description: "Remote to Local IPC Reply Data Register", offset: "0x1E", size: "16",
		bits: [
		]
	},
	{ name: "BOOTSTS", description: "CPU2 to CPU1 IPC Boot Status Register", offset: "0x20", size: "16",
		bits: [
		]
	},
	{ name: "BOOTMODE", description: "CPU1 to CPU2 IPC Boot Mode Register", offset: "0x22", size: "16",
		bits: [
		]
	},
];
module.exports = {
	ipcRegisters: IPC_REGISTERS,
}
