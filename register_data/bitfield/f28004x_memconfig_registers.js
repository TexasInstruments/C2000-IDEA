let MEMCONFIG_REGISTERS = [
	{ name: "DxLOCK", description: "Dedicated RAM Config Lock Register", offset: "0x0", size: "32",
		bits: [
			{ name: "LOCK_M0", description: "M0 RAM Lock bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "LOCK_M1", description: "M1 RAM Lock bits", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DxCOMMIT", description: "Dedicated RAM Config Lock Commit Register", offset: "0x2", size: "32",
		bits: [
			{ name: "COMMIT_M0", description: "M0 RAM Permanent Lock bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMMIT_M1", description: "M1 RAM Permanent Lock bits", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DxTEST", description: "Dedicated RAM TEST Register", offset: "0x10", size: "32",
		bits: [
			{ name: "TEST_M0", description: "Selects the different modes for M0 RAM", size: "2", shift: "0", mask: "0x3" },
			{ name: "TEST_M1", description: "Selects the different modes for M1 RAM", size: "2", shift: "2", mask: "0xC" },
		]
	},
	{ name: "DxINIT", description: "Dedicated RAM Init Register", offset: "0x12", size: "32",
		bits: [
			{ name: "INIT_M0", description: "RAM Initialization control for M0 RAM.", size: "1", shift: "0", mask: "0x1" },
			{ name: "INIT_M1", description: "RAM Initialization control for M1 RAM.", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "DxINITDONE", description: "Dedicated RAM InitDone Status Register", offset: "0x14", size: "32",
		bits: [
			{ name: "INITDONE_M0", description: "RAM Initialization status for M0 RAM.", size: "1", shift: "0", mask: "0x1" },
			{ name: "INITDONE_M1", description: "RAM Initialization status for M1 RAM.", size: "1", shift: "1", mask: "0x2" },
		]
	},
	{ name: "LSxLOCK", description: "Local Shared RAM Config Lock Register", offset: "0x20", size: "32",
		bits: [
			{ name: "LOCK_LS0", description: "LS0 RAM Lock bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "LOCK_LS1", description: "LS1 RAM Lock bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "LOCK_LS2", description: "LS2 RAM Lock bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "LOCK_LS3", description: "LS3 RAM Lock bits", size: "1", shift: "3", mask: "0x8" },
			{ name: "LOCK_LS4", description: "LS4 RAM Lock bits", size: "1", shift: "4", mask: "0x10" },
			{ name: "LOCK_LS5", description: "LS5 RAM Lock bits", size: "1", shift: "5", mask: "0x20" },
			{ name: "LOCK_LS6", description: "LS6 RAM Lock bits", size: "1", shift: "6", mask: "0x40" },
			{ name: "LOCK_LS7", description: "LS7 RAM Lock bits", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LSxCOMMIT", description: "Local Shared RAM Config Lock Commit Register", offset: "0x22", size: "32",
		bits: [
			{ name: "COMMIT_LS0", description: "LS0 RAM Permanent Lock bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMMIT_LS1", description: "LS1 RAM Permanent Lock bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMMIT_LS2", description: "LS2 RAM Permanent Lock bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMMIT_LS3", description: "LS3 RAM Permanent Lock bits", size: "1", shift: "3", mask: "0x8" },
			{ name: "COMMIT_LS4", description: "LS4 RAM Permanent Lock bits", size: "1", shift: "4", mask: "0x10" },
			{ name: "COMMIT_LS5", description: "LS5 RAM Permanent Lock bits", size: "1", shift: "5", mask: "0x20" },
			{ name: "COMMIT_LS6", description: "LS6 RAM Permanent Lock bits", size: "1", shift: "6", mask: "0x40" },
			{ name: "COMMIT_LS7", description: "LS7 RAM Permanent Lock bits", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LSxMSEL", description: "Local Shared RAM Master Sel Register", offset: "0x24", size: "32",
		bits: [
			{ name: "MSEL_LS0", description: "Master Select for LS0 RAM", size: "2", shift: "0", mask: "0x3" },
			{ name: "MSEL_LS1", description: "Master Select for LS1 RAM", size: "2", shift: "2", mask: "0xC" },
			{ name: "MSEL_LS2", description: "Master Select for LS2 RAM", size: "2", shift: "4", mask: "0x30" },
			{ name: "MSEL_LS3", description: "Master Select for LS3 RAM", size: "2", shift: "6", mask: "0xC0" },
			{ name: "MSEL_LS4", description: "Master Select for LS4 RAM", size: "2", shift: "8", mask: "0x300" },
			{ name: "MSEL_LS5", description: "Master Select for LS5 RAM", size: "2", shift: "10", mask: "0xC00" },
			{ name: "MSEL_LS6", description: "Master Select for LS6 RAM", size: "2", shift: "12", mask: "0x3000" },
			{ name: "MSEL_LS7", description: "Master Select for LS7 RAM", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "LSxCLAPGM", description: "Local Shared RAM Prog/Exe control Register", offset: "0x26", size: "32",
		bits: [
			{ name: "CLAPGM_LS0", description: "Selects LS0 RAM as program vs data memory for CLA", size: "1", shift: "0", mask: "0x1" },
			{ name: "CLAPGM_LS1", description: "Selects LS1 RAM as program vs data memory for CLA", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLAPGM_LS2", description: "Selects LS2 RAM as program vs data memory for CLA", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLAPGM_LS3", description: "Selects LS3 RAM as program vs data memory for CLA", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLAPGM_LS4", description: "Selects LS4 RAM as program vs data memory for CLA", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLAPGM_LS5", description: "Selects LS5 RAM as program vs data memory for CLA", size: "1", shift: "5", mask: "0x20" },
			{ name: "CLAPGM_LS6", description: "Selects LS6 RAM as program vs data memory for CLA", size: "1", shift: "6", mask: "0x40" },
			{ name: "CLAPGM_LS7", description: "Selects LS7 RAM as program vs data memory for CLA", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LSxACCPROT0", description: "Local Shared RAM Config Register 0", offset: "0x28", size: "32",
		bits: [
			{ name: "FETCHPROT_LS0", description: "Fetch Protection For LS0 RAM", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRPROT_LS0", description: "CPU WR Protection For LS0 RAM", size: "1", shift: "1", mask: "0x2" },
			{ name: "FETCHPROT_LS1", description: "Fetch Protection For LS1 RAM", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPUWRPROT_LS1", description: "CPU WR Protection For LS1 RAM", size: "1", shift: "9", mask: "0x200" },
			{ name: "FETCHPROT_LS2", description: "Fetch Protection For LS2 RAM", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CPUWRPROT_LS2", description: "CPU WR Protection For LS2 RAM", size: "1", shift: "17", mask: "0x20000" },
			{ name: "FETCHPROT_LS3", description: "Fetch Protection For LS3 RAM", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "CPUWRPROT_LS3", description: "CPU WR Protection For LS3 RAM", size: "1", shift: "25", mask: "0x2000000" },
		]
	},
	{ name: "LSxACCPROT1", description: "Local Shared RAM Config Register 1", offset: "0x2A", size: "32",
		bits: [
			{ name: "FETCHPROT_LS4", description: "Fetch Protection For LS4 RAM", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRPROT_LS4", description: "CPU WR Protection For LS4 RAM", size: "1", shift: "1", mask: "0x2" },
			{ name: "FETCHPROT_LS5", description: "Fetch Protection For LS5 RAM", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPUWRPROT_LS5", description: "CPU WR Protection For LS5 RAM", size: "1", shift: "9", mask: "0x200" },
			{ name: "FETCHPROT_LS6", description: "Fetch Protection For LS6 RAM", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CPUWRPROT_LS6", description: "CPU WR Protection For LS6 RAM", size: "1", shift: "17", mask: "0x20000" },
			{ name: "FETCHPROT_LS7", description: "Fetch Protection For LS7 RAM", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "CPUWRPROT_LS7", description: "CPU WR Protection For LS7 RAM", size: "1", shift: "25", mask: "0x2000000" },
		]
	},
	{ name: "LSxTEST", description: "Local Shared RAM TEST Register", offset: "0x30", size: "32",
		bits: [
			{ name: "TEST_LS0", description: "Selects the different modes for LS0 RAM", size: "2", shift: "0", mask: "0x3" },
			{ name: "TEST_LS1", description: "Selects the different modes for LS1 RAM", size: "2", shift: "2", mask: "0xC" },
			{ name: "TEST_LS2", description: "Selects the different modes for LS2 RAM", size: "2", shift: "4", mask: "0x30" },
			{ name: "TEST_LS3", description: "Selects the different modes for LS3 RAM", size: "2", shift: "6", mask: "0xC0" },
			{ name: "TEST_LS4", description: "Selects the different modes for LS4 RAM", size: "2", shift: "8", mask: "0x300" },
			{ name: "TEST_LS5", description: "Selects the different modes for LS5 RAM", size: "2", shift: "10", mask: "0xC00" },
			{ name: "TEST_LS6", description: "Selects the different modes for LS6 RAM", size: "2", shift: "12", mask: "0x3000" },
			{ name: "TEST_LS7", description: "Selects the different modes for LS7 RAM", size: "2", shift: "14", mask: "0xC000" },
		]
	},
	{ name: "LSxINIT", description: "Local Shared RAM Init Register", offset: "0x32", size: "32",
		bits: [
			{ name: "INIT_LS0", description: "RAM Initialization control for LS0 RAM.", size: "1", shift: "0", mask: "0x1" },
			{ name: "INIT_LS1", description: "RAM Initialization control for LS1 RAM.", size: "1", shift: "1", mask: "0x2" },
			{ name: "INIT_LS2", description: "RAM Initialization control for LS2 RAM.", size: "1", shift: "2", mask: "0x4" },
			{ name: "INIT_LS3", description: "RAM Initialization control for LS3 RAM.", size: "1", shift: "3", mask: "0x8" },
			{ name: "INIT_LS4", description: "RAM Initialization control for LS4 RAM.", size: "1", shift: "4", mask: "0x10" },
			{ name: "INIT_LS5", description: "RAM Initialization control for LS5 RAM.", size: "1", shift: "5", mask: "0x20" },
			{ name: "INIT_LS6", description: "RAM Initialization control for LS6 RAM.", size: "1", shift: "6", mask: "0x40" },
			{ name: "INIT_LS7", description: "RAM Initialization control for LS7 RAM.", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "LSxINITDONE", description: "Local Shared RAM InitDone Status Register", offset: "0x34", size: "32",
		bits: [
			{ name: "INITDONE_LS0", description: "RAM Initialization status for LS0 RAM.", size: "1", shift: "0", mask: "0x1" },
			{ name: "INITDONE_LS1", description: "RAM Initialization status for LS1 RAM.", size: "1", shift: "1", mask: "0x2" },
			{ name: "INITDONE_LS2", description: "RAM Initialization status for LS2 RAM.", size: "1", shift: "2", mask: "0x4" },
			{ name: "INITDONE_LS3", description: "RAM Initialization status for LS3 RAM.", size: "1", shift: "3", mask: "0x8" },
			{ name: "INITDONE_LS4", description: "RAM Initialization status for LS4 RAM.", size: "1", shift: "4", mask: "0x10" },
			{ name: "INITDONE_LS5", description: "RAM Initialization status for LS5 RAM.", size: "1", shift: "5", mask: "0x20" },
			{ name: "INITDONE_LS6", description: "RAM Initialization status for LS6 RAM.", size: "1", shift: "6", mask: "0x40" },
			{ name: "INITDONE_LS7", description: "RAM Initialization status for LS7 RAM.", size: "1", shift: "7", mask: "0x80" },
		]
	},
	{ name: "GSxLOCK", description: "Global Shared RAM Config Lock Register", offset: "0x40", size: "32",
		bits: [
			{ name: "LOCK_GS0", description: "GS0 RAM Lock bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "LOCK_GS1", description: "GS1 RAM Lock bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "LOCK_GS2", description: "GS2 RAM Lock bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "LOCK_GS3", description: "GS3 RAM Lock bits", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "GSxCOMMIT", description: "Global Shared RAM Config Lock Commit Register", offset: "0x42", size: "32",
		bits: [
			{ name: "COMMIT_GS0", description: "GS0 RAM Permanent Lock bits", size: "1", shift: "0", mask: "0x1" },
			{ name: "COMMIT_GS1", description: "GS1 RAM Permanent Lock bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMMIT_GS2", description: "GS2 RAM Permanent Lock bits", size: "1", shift: "2", mask: "0x4" },
			{ name: "COMMIT_GS3", description: "GS3 RAM Permanent Lock bits", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "GSxACCPROT0", description: "Global Shared RAM Config Register 0", offset: "0x48", size: "32",
		bits: [
			{ name: "FETCHPROT_GS0", description: "Fetch Protection For GS0 RAM", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRPROT_GS0", description: "CPU WR Protection For GS0 RAM", size: "1", shift: "1", mask: "0x2" },
			{ name: "DMAWRPROT_GS0", description: "DMA WR Protection For GS0 RAM", size: "1", shift: "2", mask: "0x4" },
			{ name: "FETCHPROT_GS1", description: "Fetch Protection For GS1 RAM", size: "1", shift: "8", mask: "0x100" },
			{ name: "CPUWRPROT_GS1", description: "CPU WR Protection For GS1 RAM", size: "1", shift: "9", mask: "0x200" },
			{ name: "DMAWRPROT_GS1", description: "DMA WR Protection For GS1 RAM", size: "1", shift: "10", mask: "0x400" },
			{ name: "FETCHPROT_GS2", description: "Fetch Protection For GS2 RAM", size: "1", shift: "16", mask: "0x10000" },
			{ name: "CPUWRPROT_GS2", description: "CPU WR Protection For GS2 RAM", size: "1", shift: "17", mask: "0x20000" },
			{ name: "DMAWRPROT_GS2", description: "DMA WR Protection For GS2 RAM", size: "1", shift: "18", mask: "0x40000" },
			{ name: "FETCHPROT_GS3", description: "Fetch Protection For GS3 RAM", size: "1", shift: "24", mask: "0x1000000" },
			{ name: "CPUWRPROT_GS3", description: "CPU WR Protection For GS3 RAM", size: "1", shift: "25", mask: "0x2000000" },
			{ name: "DMAWRPROT_GS3", description: "DMA WR Protection For GS3 RAM", size: "1", shift: "26", mask: "0x4000000" },
		]
	},
	{ name: "GSxTEST", description: "Global Shared RAM TEST Register", offset: "0x50", size: "32",
		bits: [
			{ name: "TEST_GS0", description: "Selects the different modes for GS0 RAM", size: "2", shift: "0", mask: "0x3" },
			{ name: "TEST_GS1", description: "Selects the different modes for GS1 RAM", size: "2", shift: "2", mask: "0xC" },
			{ name: "TEST_GS2", description: "Selects the different modes for GS2 RAM", size: "2", shift: "4", mask: "0x30" },
			{ name: "TEST_GS3", description: "Selects the different modes for GS3 RAM", size: "2", shift: "6", mask: "0xC0" },
		]
	},
	{ name: "GSxINIT", description: "Global Shared RAM Init Register", offset: "0x52", size: "32",
		bits: [
			{ name: "INIT_GS0", description: "RAM Initialization control for GS0 RAM.", size: "1", shift: "0", mask: "0x1" },
			{ name: "INIT_GS1", description: "RAM Initialization control for GS1 RAM.", size: "1", shift: "1", mask: "0x2" },
			{ name: "INIT_GS2", description: "RAM Initialization control for GS2 RAM.", size: "1", shift: "2", mask: "0x4" },
			{ name: "INIT_GS3", description: "RAM Initialization control for GS3 RAM.", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "GSxINITDONE", description: "Global Shared RAM InitDone Status Register", offset: "0x54", size: "32",
		bits: [
			{ name: "INITDONE_GS0", description: "RAM Initialization status for GS0 RAM.", size: "1", shift: "0", mask: "0x1" },
			{ name: "INITDONE_GS1", description: "RAM Initialization status for GS1 RAM.", size: "1", shift: "1", mask: "0x2" },
			{ name: "INITDONE_GS2", description: "RAM Initialization status for GS2 RAM.", size: "1", shift: "2", mask: "0x4" },
			{ name: "INITDONE_GS3", description: "RAM Initialization status for GS3 RAM.", size: "1", shift: "3", mask: "0x8" },
		]
	},
	{ name: "MSGxLOCK", description: "Message RAM Config Lock Register", offset: "0x60", size: "32",
		bits: [
			{ name: "LOCK_CPUTOCLA1", description: "CPUTOCLA1 RAM Lock bits", size: "1", shift: "1", mask: "0x2" },
			{ name: "LOCK_CLA1TOCPU", description: "CLA1TOCPU RAM Lock bits", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MSGxCOMMIT", description: "Message RAM Config Lock Commit Register", offset: "0x62", size: "32",
		bits: [
			{ name: "COMMIT_CPUTOCLA1", description: "CPUTOCLA1 RAM control fields COMMIT bit", size: "1", shift: "1", mask: "0x2" },
			{ name: "COMMIT_CLA1TOCPU", description: "CLA1TOCPU RAM control fields COMMIT bit", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MSGxTEST", description: "Message RAM TEST Register", offset: "0x70", size: "32",
		bits: [
			{ name: "TEST_CPUTOCLA1", description: "CPU to CLA1 MSG RAM Mode Select", size: "2", shift: "2", mask: "0xC" },
			{ name: "TEST_CLA1TOCPU", description: "CLA1 to CPU MSG RAM Mode Select", size: "2", shift: "4", mask: "0x30" },
		]
	},
	{ name: "MSGxINIT", description: "Message RAM Init Register", offset: "0x72", size: "32",
		bits: [
			{ name: "INIT_CPUTOCLA1", description: "Initialization control for CPUTOCLA1 MSG RAM", size: "1", shift: "1", mask: "0x2" },
			{ name: "INIT_CLA1TOCPU", description: "Initialization control for CLA1TOCPU MSG RAM", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MSGxINITDONE", description: "Message RAM InitDone Status Register", offset: "0x74", size: "32",
		bits: [
			{ name: "INITDONE_CPUTOCLA1", description: "Initialization status for CPU to CLA1 MSG RAM", size: "1", shift: "1", mask: "0x2" },
			{ name: "INITDONE_CLA1TOCPU", description: "Initialization status for CLA1 to CPU MSG RAM", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "NMAVFLG", description: "Non-Master Access Violation Flag Register", offset: "0x0", size: "32",
		bits: [
			{ name: "CPUREAD", description: "Non Master CPU Read Access Violation Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Non Master CPU Write Access Violation Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPUFETCH", description: "Non Master CPU Fetch Access Violation Flag", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMAWRITE", description: "Non Master DMA Write Access Violation Flag", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLA1READ", description: "Non Master CLA1 Read Access Violation Flag", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLA1WRITE", description: "Non Master CLA1 Write Access Violation Flag", size: "1", shift: "5", mask: "0x20" },
			{ name: "CLA1FETCH", description: "Non Master CLA1 Fetch Access Violation Flag", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "NMAVSET", description: "Non-Master Access Violation Flag Set Register", offset: "0x2", size: "32",
		bits: [
			{ name: "CPUREAD", description: "Non Master CPU Read Access Violation Flag Set", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Non Master CPU Write Access Violation Flag Set", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPUFETCH", description: "Non Master CPU Fetch Access Violation Flag Set", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMAWRITE", description: "Non Master DMA Write Access Violation Flag Set", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLA1READ", description: "Non Master CLA1 Read Access Violation Flag Set", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLA1WRITE", description: "Non Master CLA1 Write Access Violation Flag Set", size: "1", shift: "5", mask: "0x20" },
			{ name: "CLA1FETCH", description: "Non Master CLA1 Fetch Access Violation Flag Set", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "NMAVCLR", description: "Non-Master Access Violation Flag Clear Register", offset: "0x4", size: "32",
		bits: [
			{ name: "CPUREAD", description: "Non Master CPU Read Access Violation Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Non Master CPU Write Access Violation Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPUFETCH", description: "Non Master CPU Fetch Access Violation Flag Clear", size: "1", shift: "2", mask: "0x4" },
			{ name: "DMAWRITE", description: "Non Master DMA Write Access Violation Flag Clear", size: "1", shift: "3", mask: "0x8" },
			{ name: "CLA1READ", description: "Non Master CLA1 Read Access Violation Flag Clear", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLA1WRITE", description: "Non Master CLA1 Write Access Violation Flag Clear", size: "1", shift: "5", mask: "0x20" },
			{ name: "CLA1FETCH", description: "Non Master CLA1 Fetch Access Violation Flag Clear", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "NMAVINTEN", description: "Non-Master Access Violation Interrupt Enable Register", offset: "0x6", size: "32",
		bits: [
			{ name: "CPUREAD", description: "Non Master CPU Read Access Violation Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Non Master CPU Write Access Violation Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "CPUFETCH", description: "Non Master CPU Fetch Access Violation Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
			{ name: "CLA1READ", description: "Non Master CLA1 Read Access Violation Interrupt Enable", size: "1", shift: "4", mask: "0x10" },
			{ name: "CLA1WRITE", description: "Non Master CLA1 Write Access Violation Interrupt Enable", size: "1", shift: "5", mask: "0x20" },
			{ name: "CLA1FETCH", description: "Non Master CLA1 Fetch Access Violation Interrupt Enable", size: "1", shift: "6", mask: "0x40" },
		]
	},
	{ name: "NMCPURDAVADDR", description: "Non-Master CPU Read Access Violation Address", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "NMCPUWRAVADDR", description: "Non-Master CPU Write Access Violation Address", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "NMCPUFAVADDR", description: "Non-Master CPU Fetch Access Violation Address", offset: "0xC", size: "32",
		bits: [
		]
	},
	{ name: "NMCLA1RDAVADDR", description: "Non-Master CLA1 Read Access Violation Address", offset: "0x10", size: "32",
		bits: [
		]
	},
	{ name: "NMCLA1WRAVADDR", description: "Non-Master CLA1 Write Access Violation Address", offset: "0x12", size: "32",
		bits: [
		]
	},
	{ name: "NMCLA1FAVADDR", description: "Non-Master CLA1 Fetch Access Violation Address", offset: "0x14", size: "32",
		bits: [
		]
	},
	{ name: "MAVFLG", description: "Master Access Violation Flag Register", offset: "0x20", size: "32",
		bits: [
			{ name: "CPUFETCH", description: "Master CPU Fetch Access Violation Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Master CPU Write Access Violation Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "DMAWRITE", description: "Master DMA Write Access Violation Flag", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MAVSET", description: "Master Access Violation Flag Set Register", offset: "0x22", size: "32",
		bits: [
			{ name: "CPUFETCH", description: "Master CPU Fetch Access Violation Flag Set", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Master CPU Write Access Violation Flag Set", size: "1", shift: "1", mask: "0x2" },
			{ name: "DMAWRITE", description: "Master DMA Write Access Violation Flag Set", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MAVCLR", description: "Master Access Violation Flag Clear Register", offset: "0x24", size: "32",
		bits: [
			{ name: "CPUFETCH", description: "Master CPU Fetch Access Violation Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Master CPU Write Access Violation Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "DMAWRITE", description: "Master DMA Write Access Violation Flag Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MAVINTEN", description: "Master Access Violation Interrupt Enable Register", offset: "0x26", size: "32",
		bits: [
			{ name: "CPUFETCH", description: "Master CPU Fetch Access Violation Interrupt Enable", size: "1", shift: "0", mask: "0x1" },
			{ name: "CPUWRITE", description: "Master CPU Write Access Violation Interrupt Enable", size: "1", shift: "1", mask: "0x2" },
			{ name: "DMAWRITE", description: "Master DMA Write Access Violation Interrupt Enable", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "MCPUFAVADDR", description: "Master CPU Fetch Access Violation Address", offset: "0x28", size: "32",
		bits: [
		]
	},
	{ name: "MCPUWRAVADDR", description: "Master CPU Write Access Violation Address", offset: "0x2A", size: "32",
		bits: [
		]
	},
	{ name: "MDMAWRAVADDR", description: "Master  DMA Write Access Violation Address", offset: "0x2C", size: "32",
		bits: [
		]
	},
	{ name: "UCERRFLG", description: "Uncorrectable Error Flag Register", offset: "0x0", size: "32",
		bits: [
			{ name: "CPURDERR", description: "CPU Uncorrectable Read Error Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMARDERR", description: "DMA Uncorrectable Read Error Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLA1RDERR", description: "CLA1 Uncorrectable Read Error Flag", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "UCERRSET", description: "Uncorrectable Error Flag Set Register", offset: "0x2", size: "32",
		bits: [
			{ name: "CPURDERR", description: "CPU Uncorrectable Read Error Flag Set", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMARDERR", description: "DMA Uncorrectable Read Error Flag Set", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLA1RDERR", description: "CLA1 Uncorrectable Read Error Flag Set", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "UCERRCLR", description: "Uncorrectable Error Flag Clear Register", offset: "0x4", size: "32",
		bits: [
			{ name: "CPURDERR", description: "CPU Uncorrectable Read Error Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMARDERR", description: "DMA Uncorrectable Read Error Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLA1RDERR", description: "CLA1 Uncorrectable Read Error Flag Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "UCCPUREADDR", description: "Uncorrectable CPU Read Error Address", offset: "0x6", size: "32",
		bits: [
		]
	},
	{ name: "UCDMAREADDR", description: "Uncorrectable DMA Read Error Address", offset: "0x8", size: "32",
		bits: [
		]
	},
	{ name: "UCCLA1READDR", description: "Uncorrectable CLA1 Read Error Address", offset: "0xA", size: "32",
		bits: [
		]
	},
	{ name: "CERRFLG", description: "Correctable Error Flag Register", offset: "0x20", size: "32",
		bits: [
			{ name: "CPURDERR", description: "CPU Correctable Read Error Flag", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMARDERR", description: "DMA Correctable Read Error Flag", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLA1RDERR", description: "CLA1 Correctable Read Error Flag", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "CERRSET", description: "Correctable Error Flag Set Register", offset: "0x22", size: "32",
		bits: [
			{ name: "CPURDERR", description: "CPU Correctable Read Error Flag Set", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMARDERR", description: "DMA Correctable Read Error Flag Set", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLA1RDERR", description: "CLA1 Correctable Read Error Flag Set", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "CERRCLR", description: "Correctable Error Flag Clear Register", offset: "0x24", size: "32",
		bits: [
			{ name: "CPURDERR", description: "CPU Correctable Read Error Flag Clear", size: "1", shift: "0", mask: "0x1" },
			{ name: "DMARDERR", description: "DMA Correctable Read Error Flag Clear", size: "1", shift: "1", mask: "0x2" },
			{ name: "CLA1RDERR", description: "CLA1 Correctable Read Error Flag Clear", size: "1", shift: "2", mask: "0x4" },
		]
	},
	{ name: "CCPUREADDR", description: "Correctable CPU Read Error Address", offset: "0x26", size: "32",
		bits: [
		]
	},
	{ name: "CERRCNT", description: "Correctable Error Count Register", offset: "0x2E", size: "32",
		bits: [
		]
	},
	{ name: "CERRTHRES", description: "Correctable Error Threshold Value Register", offset: "0x30", size: "32",
		bits: [
		]
	},
	{ name: "CEINTFLG", description: "Correctable Error Interrupt Flag Status Register", offset: "0x32", size: "32",
		bits: [
			{ name: "CEINTFLAG", description: "Total corrected error count exceeded threshold flag.", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CEINTCLR", description: "Correctable Error Interrupt Flag Clear Register", offset: "0x34", size: "32",
		bits: [
			{ name: "CEINTCLR", description: "CPU Corrected Error Threshold Exceeded Error Clear.", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CEINTSET", description: "Correctable Error Interrupt Flag Set Register", offset: "0x36", size: "32",
		bits: [
			{ name: "CEINTSET", description: "Total corrected error count exceeded flag set.", size: "1", shift: "0", mask: "0x1" },
		]
	},
	{ name: "CEINTEN", description: "Correctable Error Interrupt Enable Register", offset: "0x38", size: "32",
		bits: [
			{ name: "CEINTEN", description: "CPU/DMA Correctable Error Interrupt Enable.", size: "1", shift: "0", mask: "0x1" },
		]
	},
];
module.exports = {
	memconfigRegisters: MEMCONFIG_REGISTERS,
}
