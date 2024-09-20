let INPUT_XBAR_REGISTERS = [
	{ name: "INPUTSELECT", description: "(0 <= i < 64) Input Select Register (GPIO0 to x)", offset: "(0x0 + ((i) * 0x4))", count: "64", size: "16",
		bits: [
			{ name: "SELECT", description: "Select GPIO for INPUT{#} signal", size: "16", shift: "0", mask: "0xFFFF" },
		]
	},
	{ name: "INPUTSELECTLOCK1", description: "Input Select Lock Register 1", offset: "0x400", size: "32",
		bits: [
			{ name: "INPUT1SELECT", description: "Lock bit for INPUT1SELECT Register", size: "1", shift: "0", mask: "0x1" },
			{ name: "INPUT2SELECT", description: "Lock bit for INPUT2SELECT Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "INPUT3SELECT", description: "Lock bit for INPUT3SELECT Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "INPUT4SELECT", description: "Lock bit for INPUT4SELECT Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "INPUT5SELECT", description: "Lock bit for INPUT5SELECT Register", size: "1", shift: "4", mask: "0x10" },
			{ name: "INPUT6SELECT", description: "Lock bit for INPUT6SELECT Register", size: "1", shift: "5", mask: "0x20" },
			{ name: "INPUT7SELECT", description: "Lock bit for INPUT7SELECT Register", size: "1", shift: "6", mask: "0x40" },
			{ name: "INPUT8SELECT", description: "Lock bit for INPUT8SELECT Register", size: "1", shift: "7", mask: "0x80" },
			{ name: "INPUT9SELECT", description: "Lock bit for INPUT9SELECT Register", size: "1", shift: "8", mask: "0x100" },
			{ name: "INPUT10SELECT", description: "Lock bit for INPUT10SELECT Register", size: "1", shift: "9", mask: "0x200" },
			{ name: "INPUT11SELECT", description: "Lock bit for INPUT11SELECT Register", size: "1", shift: "10", mask: "0x400" },
			{ name: "INPUT12SELECT", description: "Lock bit for INPUT12SELECT Register", size: "1", shift: "11", mask: "0x800" },
			{ name: "INPUT13SELECT", description: "Lock bit for INPUT13SELECT Register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INPUT14SELECT", description: "Lock bit for INPUT14SELECT Register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INPUT15SELECT", description: "Lock bit for INPUT15SELECT Register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INPUT16SELECT", description: "Lock bit for INPUT16SELECT Register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "INPUT17SELECT", description: "Lock bit for INPUT17SELECT Register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INPUT18SELECT", description: "Lock bit for INPUT18SELECT Register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "INPUT19SELECT", description: "Lock bit for INPUT19SELECT Register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "INPUT20SELECT", description: "Lock bit for INPUT20SELECT Register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "INPUT21SELECT", description: "Lock bit for INPUT21SELECT Register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "INPUT22SELECT", description: "Lock bit for INPUT22SELECT Register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "INPUT23SELECT", description: "Lock bit for INPUT23SELECT Register", size: "1", shift: "22", mask: "0x400000" },
			{ name: "INPUT24SELECT", description: "Lock bit for INPUT24SELECT Register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "INPUT25SELECT", description: "Lock bit for INPUT25SELECT Register", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "INPUT26SELECT", description: "Lock bit for INPUT26SELECT Register", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "INPUT27SELECT", description: "Lock bit for INPUT27SELECT Register", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "INPUT28SELECT", description: "Lock bit for INPUT28SELECT Register", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "INPUT29SELECT", description: "Lock bit for INPUT29SELECT Register", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "INPUT30SELECT", description: "Lock bit for INPUT30SELECT Register", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "INPUT31SELECT", description: "Lock bit for INPUT31SELECT Register", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "INPUT32SELECT", description: "Lock bit for INPUT32SELECT Register", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
	{ name: "INPUTSELECTLOCK2", description: "Input Select Lock Register 2", offset: "0x404", size: "32",
		bits: [
			{ name: "INPUT33SELECT", description: "Lock bit for INPUT33SELECT Register", size: "1", shift: "0", mask: "0x1" },
			{ name: "INPUT34SELECT", description: "Lock bit for INPUT34SELECT Register", size: "1", shift: "1", mask: "0x2" },
			{ name: "INPUT35SELECT", description: "Lock bit for INPUT35SELECT Register", size: "1", shift: "2", mask: "0x4" },
			{ name: "INPUT36SELECT", description: "Lock bit for INPUT36SELECT Register", size: "1", shift: "3", mask: "0x8" },
			{ name: "INPUT37SELECT", description: "Lock bit for INPUT37SELECT Register", size: "1", shift: "4", mask: "0x10" },
			{ name: "INPUT38SELECT", description: "Lock bit for INPUT38SELECT Register", size: "1", shift: "5", mask: "0x20" },
			{ name: "INPUT39SELECT", description: "Lock bit for INPUT39SELECT Register", size: "1", shift: "6", mask: "0x40" },
			{ name: "INPUT40SELECT", description: "Lock bit for INPUT40SELECT Register", size: "1", shift: "7", mask: "0x80" },
			{ name: "INPUT41SELECT", description: "Lock bit for INPUT41SELECT Register", size: "1", shift: "8", mask: "0x100" },
			{ name: "INPUT42SELECT", description: "Lock bit for INPUT42SELECT Register", size: "1", shift: "9", mask: "0x200" },
			{ name: "INPUT43SELECT", description: "Lock bit for INPUT43SELECT Register", size: "1", shift: "10", mask: "0x400" },
			{ name: "INPUT44SELECT", description: "Lock bit for INPUT44SELECT Register", size: "1", shift: "11", mask: "0x800" },
			{ name: "INPUT45SELECT", description: "Lock bit for INPUT45SELECT Register", size: "1", shift: "12", mask: "0x1000" },
			{ name: "INPUT46SELECT", description: "Lock bit for INPUT46SELECT Register", size: "1", shift: "13", mask: "0x2000" },
			{ name: "INPUT47SELECT", description: "Lock bit for INPUT47SELECT Register", size: "1", shift: "14", mask: "0x4000" },
			{ name: "INPUT48SELECT", description: "Lock bit for INPUT48SELECT Register", size: "1", shift: "15", mask: "0x8000" },
			{ name: "INPUT49SELECT", description: "Lock bit for INPUT49SELECT Register", size: "1", shift: "16", mask: "0x10000" },
			{ name: "INPUT50SELECT", description: "Lock bit for INPUT50SELECT Register", size: "1", shift: "17", mask: "0x20000" },
			{ name: "INPUT51SELECT", description: "Lock bit for INPUT51SELECT Register", size: "1", shift: "18", mask: "0x40000" },
			{ name: "INPUT52SELECT", description: "Lock bit for INPUT52SELECT Register", size: "1", shift: "19", mask: "0x80000" },
			{ name: "INPUT53SELECT", description: "Lock bit for INPUT53SELECT Register", size: "1", shift: "20", mask: "0x100000" },
			{ name: "INPUT54SELECT", description: "Lock bit for INPUT54SELECT Register", size: "1", shift: "21", mask: "0x200000" },
			{ name: "INPUT55SELECT", description: "Lock bit for INPUT55SELECT Register", size: "1", shift: "22", mask: "0x400000" },
			{ name: "INPUT56SELECT", description: "Lock bit for INPUT56SELECT Register", size: "1", shift: "23", mask: "0x800000" },
			{ name: "INPUT57SELECT", description: "Lock bit for INPUT57SELECT Register", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "INPUT58SELECT", description: "Lock bit for INPUT58SELECT Register", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "INPUT59SELECT", description: "Lock bit for INPUT59SELECT Register", size: "1", shift: "26", mask: "0x4000000" },
			{ name: "INPUT60SELECT", description: "Lock bit for INPUT60SELECT Register", size: "1", shift: "27", mask: "0x8000000" },
			{ name: "INPUT61SELECT", description: "Lock bit for INPUT61SELECT Register", size: "1", shift: "28", mask: "0x10000000" },
			{ name: "INPUT62SELECT", description: "Lock bit for INPUT62SELECT Register", size: "1", shift: "29", mask: "0x20000000" },
			{ name: "INPUT63SELECT", description: "Lock bit for INPUT63SELECT Register", size: "1", shift: "30", mask: "0x40000000" },
			{ name: "INPUT64SELECT", description: "Lock bit for INPUT64SELECT Register", size: "1", shift: "31", mask: "0x80000000" },
		]
	},
];
module.exports = {
	input_xbarRegisters: INPUT_XBAR_REGISTERS,
}
