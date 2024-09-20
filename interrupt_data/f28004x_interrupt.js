let interrupts = [
	{ intDefineName: "INT_ADCA1", intGroupChannelNumber: "1.1", intGroupNumber: "1", intChannelNumber: "1", intDescription: "ADCA Interrupt 1" },
	{ intDefineName: "INT_ADCB1", intGroupChannelNumber: "1.2", intGroupNumber: "1", intChannelNumber: "2", intDescription: "ADCB Interrupt 1" },
	{ intDefineName: "INT_ADCC1", intGroupChannelNumber: "1.3", intGroupNumber: "1", intChannelNumber: "3", intDescription: "ADCC Interrupt 1" },
	{ intDefineName: "INT_XINT1", intGroupChannelNumber: "1.4", intGroupNumber: "1", intChannelNumber: "4", intDescription: "XINT1 Interrupt" },
	{ intDefineName: "INT_XINT2", intGroupChannelNumber: "1.5", intGroupNumber: "1", intChannelNumber: "5", intDescription: "XINT2 Interrupt" },
	{ intDefineName: "INT_TIMER0", intGroupChannelNumber: "1.7", intGroupNumber: "1", intChannelNumber: "7", intDescription: "Timer 0 Interrupt" },
	{ intDefineName: "INT_WAKE", intGroupChannelNumber: "1.8", intGroupNumber: "1", intChannelNumber: "8", intDescription: "Halt Wakeup/Watchdog Interrupt" },
	{ intDefineName: "INT_EPWM1_TZ", intGroupChannelNumber: "2.1", intGroupNumber: "2", intChannelNumber: "1", intDescription: "ePWM1 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM2_TZ", intGroupChannelNumber: "2.2", intGroupNumber: "2", intChannelNumber: "2", intDescription: "ePWM2 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM3_TZ", intGroupChannelNumber: "2.3", intGroupNumber: "2", intChannelNumber: "3", intDescription: "ePWM3 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM4_TZ", intGroupChannelNumber: "2.4", intGroupNumber: "2", intChannelNumber: "4", intDescription: "ePWM4 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM5_TZ", intGroupChannelNumber: "2.5", intGroupNumber: "2", intChannelNumber: "5", intDescription: "ePWM5 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM6_TZ", intGroupChannelNumber: "2.6", intGroupNumber: "2", intChannelNumber: "6", intDescription: "ePWM6 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM7_TZ", intGroupChannelNumber: "2.7", intGroupNumber: "2", intChannelNumber: "7", intDescription: "ePWM7 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM8_TZ", intGroupChannelNumber: "2.8", intGroupNumber: "2", intChannelNumber: "8", intDescription: "ePWM8 Trip Zone Interrupt" },
	{ intDefineName: "INT_EPWM1", intGroupChannelNumber: "3.1", intGroupNumber: "3", intChannelNumber: "1", intDescription: "ePWM1 Interrupt" },
	{ intDefineName: "INT_EPWM2", intGroupChannelNumber: "3.2", intGroupNumber: "3", intChannelNumber: "2", intDescription: "ePWM2 Interrupt" },
	{ intDefineName: "INT_EPWM3", intGroupChannelNumber: "3.3", intGroupNumber: "3", intChannelNumber: "3", intDescription: "ePWM3 Interrupt" },
	{ intDefineName: "INT_EPWM4", intGroupChannelNumber: "3.4", intGroupNumber: "3", intChannelNumber: "4", intDescription: "ePWM4 Interrupt" },
	{ intDefineName: "INT_EPWM5", intGroupChannelNumber: "3.5", intGroupNumber: "3", intChannelNumber: "5", intDescription: "ePWM5 Interrupt" },
	{ intDefineName: "INT_EPWM6", intGroupChannelNumber: "3.6", intGroupNumber: "3", intChannelNumber: "6", intDescription: "ePWM6 Interrupt" },
	{ intDefineName: "INT_EPWM7", intGroupChannelNumber: "3.7", intGroupNumber: "3", intChannelNumber: "7", intDescription: "ePWM7 Interrupt" },
	{ intDefineName: "INT_EPWM8", intGroupChannelNumber: "3.8", intGroupNumber: "3", intChannelNumber: "8", intDescription: "ePWM8 Interrupt" },
	{ intDefineName: "INT_ECAP1", intGroupChannelNumber: "4.1", intGroupNumber: "4", intChannelNumber: "1", intDescription: "eCAP1 Interrupt" },
	{ intDefineName: "INT_ECAP2", intGroupChannelNumber: "4.2", intGroupNumber: "4", intChannelNumber: "2", intDescription: "eCAP2 Interrupt" },
	{ intDefineName: "INT_ECAP3", intGroupChannelNumber: "4.3", intGroupNumber: "4", intChannelNumber: "3", intDescription: "eCAP3 Interrupt" },
	{ intDefineName: "INT_ECAP4", intGroupChannelNumber: "4.4", intGroupNumber: "4", intChannelNumber: "4", intDescription: "eCAP4 Interrupt" },
	{ intDefineName: "INT_ECAP5", intGroupChannelNumber: "4.5", intGroupNumber: "4", intChannelNumber: "5", intDescription: "eCAP5 Interrupt" },
	{ intDefineName: "INT_ECAP6", intGroupChannelNumber: "4.6", intGroupNumber: "4", intChannelNumber: "6", intDescription: "eCAP6 Interrupt" },
	{ intDefineName: "INT_ECAP7", intGroupChannelNumber: "4.7", intGroupNumber: "4", intChannelNumber: "7", intDescription: "eCAP7 Interrupt" },
	{ intDefineName: "INT_EQEP1", intGroupChannelNumber: "5.1", intGroupNumber: "5", intChannelNumber: "1", intDescription: "eQEP1 Interrupt" },
	{ intDefineName: "INT_EQEP2", intGroupChannelNumber: "5.2", intGroupNumber: "5", intChannelNumber: "2", intDescription: "eQEP2 Interrupt" },
	{ intDefineName: "INT_CLB1", intGroupChannelNumber: "5.5", intGroupNumber: "5", intChannelNumber: "5", intDescription: "CLB1 (Reconfigurable Logic) Interrupt" },
	{ intDefineName: "INT_CLB2", intGroupChannelNumber: "5.6", intGroupNumber: "5", intChannelNumber: "6", intDescription: "CLB2 (Reconfigurable Logic) Interrupt" },
	{ intDefineName: "INT_CLB3", intGroupChannelNumber: "5.7", intGroupNumber: "5", intChannelNumber: "7", intDescription: "CLB3 (Reconfigurable Logic) Interrupt" },
	{ intDefineName: "INT_CLB4", intGroupChannelNumber: "5.8", intGroupNumber: "5", intChannelNumber: "8", intDescription: "CLB4 (Reconfigurable Logic) Interrupt" },
	{ intDefineName: "INT_SPIA_RX", intGroupChannelNumber: "6.1", intGroupNumber: "6", intChannelNumber: "1", intDescription: "SPIA Receive Interrupt" },
	{ intDefineName: "INT_SPIA_TX", intGroupChannelNumber: "6.2", intGroupNumber: "6", intChannelNumber: "2", intDescription: "SPIA Transmit Interrupt" },
	{ intDefineName: "INT_SPIB_RX", intGroupChannelNumber: "6.3", intGroupNumber: "6", intChannelNumber: "3", intDescription: "SPIB Receive Interrupt" },
	{ intDefineName: "INT_SPIB_TX", intGroupChannelNumber: "6.4", intGroupNumber: "6", intChannelNumber: "4", intDescription: "SPIB Transmit Interrupt" },
	{ intDefineName: "INT_DMA_CH1", intGroupChannelNumber: "7.1", intGroupNumber: "7", intChannelNumber: "1", intDescription: "DMA Channel 1 Interrupt" },
	{ intDefineName: "INT_DMA_CH2", intGroupChannelNumber: "7.2", intGroupNumber: "7", intChannelNumber: "2", intDescription: "DMA Channel 2 Interrupt" },
	{ intDefineName: "INT_DMA_CH3", intGroupChannelNumber: "7.3", intGroupNumber: "7", intChannelNumber: "3", intDescription: "DMA Channel 3 Interrupt" },
	{ intDefineName: "INT_DMA_CH4", intGroupChannelNumber: "7.4", intGroupNumber: "7", intChannelNumber: "4", intDescription: "DMA Channel 4 Interrupt" },
	{ intDefineName: "INT_DMA_CH5", intGroupChannelNumber: "7.5", intGroupNumber: "7", intChannelNumber: "5", intDescription: "DMA Channel 5 Interrupt" },
	{ intDefineName: "INT_DMA_CH6", intGroupChannelNumber: "7.6", intGroupNumber: "7", intChannelNumber: "6", intDescription: "DMA Channel 6 Interrupt" },
	{ intDefineName: "INT_I2CA", intGroupChannelNumber: "8.1", intGroupNumber: "8", intChannelNumber: "1", intDescription: "I2CA Interrupt 1" },
	{ intDefineName: "INT_I2CA_FIFO", intGroupChannelNumber: "8.2", intGroupNumber: "8", intChannelNumber: "2", intDescription: "I2CA Interrupt 2" },
	{ intDefineName: "INT_SCIA_RX", intGroupChannelNumber: "9.1", intGroupNumber: "9", intChannelNumber: "1", intDescription: "SCIA Receive Interrupt" },
	{ intDefineName: "INT_SCIA_TX", intGroupChannelNumber: "9.2", intGroupNumber: "9", intChannelNumber: "2", intDescription: "SCIA Transmit Interrupt" },
	{ intDefineName: "INT_SCIB_RX", intGroupChannelNumber: "9.3", intGroupNumber: "9", intChannelNumber: "3", intDescription: "SCIB Receive Interrupt" },
	{ intDefineName: "INT_SCIB_TX", intGroupChannelNumber: "9.4", intGroupNumber: "9", intChannelNumber: "4", intDescription: "SCIB Transmit Interrupt" },
	{ intDefineName: "INT_CANA0", intGroupChannelNumber: "9.5", intGroupNumber: "9", intChannelNumber: "5", intDescription: "CANA Interrupt 0" },
	{ intDefineName: "INT_CANA1", intGroupChannelNumber: "9.6", intGroupNumber: "9", intChannelNumber: "6", intDescription: "CANA Interrupt 1" },
	{ intDefineName: "INT_CANB0", intGroupChannelNumber: "9.7", intGroupNumber: "9", intChannelNumber: "7", intDescription: "CANB Interrupt 0" },
	{ intDefineName: "INT_CANB1", intGroupChannelNumber: "9.8", intGroupNumber: "9", intChannelNumber: "8", intDescription: "CANB Interrupt 1" },
	{ intDefineName: "INT_ADCA_EVT", intGroupChannelNumber: "10.1", intGroupNumber: "10", intChannelNumber: "1", intDescription: "ADCA Event Interrupt" },
	{ intDefineName: "INT_ADCA2", intGroupChannelNumber: "10.2", intGroupNumber: "10", intChannelNumber: "2", intDescription: "ADCA Interrupt 2" },
	{ intDefineName: "INT_ADCA3", intGroupChannelNumber: "10.3", intGroupNumber: "10", intChannelNumber: "3", intDescription: "ADCA Interrupt 3" },
	{ intDefineName: "INT_ADCA4", intGroupChannelNumber: "10.4", intGroupNumber: "10", intChannelNumber: "4", intDescription: "ADCA Interrupt 4" },
	{ intDefineName: "INT_ADCB_EVT", intGroupChannelNumber: "10.5", intGroupNumber: "10", intChannelNumber: "5", intDescription: "ADCB Event Interrupt" },
	{ intDefineName: "INT_ADCB2", intGroupChannelNumber: "10.6", intGroupNumber: "10", intChannelNumber: "6", intDescription: "ADCB Interrupt 2" },
	{ intDefineName: "INT_ADCB3", intGroupChannelNumber: "10.7", intGroupNumber: "10", intChannelNumber: "7", intDescription: "ADCB Interrupt 3" },
	{ intDefineName: "INT_ADCB4", intGroupChannelNumber: "10.8", intGroupNumber: "10", intChannelNumber: "8", intDescription: "ADCB Interrupt 4" },
	{ intDefineName: "INT_CLA1_1", intGroupChannelNumber: "11.1", intGroupNumber: "11", intChannelNumber: "1", intDescription: "CLA1 Interrupt 1" },
	{ intDefineName: "INT_CLA1_2", intGroupChannelNumber: "11.2", intGroupNumber: "11", intChannelNumber: "2", intDescription: "CLA1 Interrupt 2" },
	{ intDefineName: "INT_CLA1_3", intGroupChannelNumber: "11.3", intGroupNumber: "11", intChannelNumber: "3", intDescription: "CLA1 Interrupt 3" },
	{ intDefineName: "INT_CLA1_4", intGroupChannelNumber: "11.4", intGroupNumber: "11", intChannelNumber: "4", intDescription: "CLA1 Interrupt 4" },
	{ intDefineName: "INT_CLA1_5", intGroupChannelNumber: "11.5", intGroupNumber: "11", intChannelNumber: "5", intDescription: "CLA1 Interrupt 5" },
	{ intDefineName: "INT_CLA1_6", intGroupChannelNumber: "11.6", intGroupNumber: "11", intChannelNumber: "6", intDescription: "CLA1 Interrupt 6" },
	{ intDefineName: "INT_CLA1_7", intGroupChannelNumber: "11.7", intGroupNumber: "11", intChannelNumber: "7", intDescription: "CLA1 Interrupt 7" },
	{ intDefineName: "INT_CLA1_8", intGroupChannelNumber: "11.8", intGroupNumber: "11", intChannelNumber: "8", intDescription: "CLA1 Interrupt 8" },
	{ intDefineName: "INT_XINT3", intGroupChannelNumber: "12.1", intGroupNumber: "12", intChannelNumber: "1", intDescription: "XINT3 Interrupt" },
	{ intDefineName: "INT_XINT4", intGroupChannelNumber: "12.2", intGroupNumber: "12", intChannelNumber: "2", intDescription: "XINT4 Interrupt" },
	{ intDefineName: "INT_XINT5", intGroupChannelNumber: "12.3", intGroupNumber: "12", intChannelNumber: "3", intDescription: "XINT5 Interrupt" },
	{ intDefineName: "INT_PBIST", intGroupChannelNumber: "12.4", intGroupNumber: "12", intChannelNumber: "4", intDescription: "PBIST Interrupt" },
	{ intDefineName: "INT_FMC", intGroupChannelNumber: "12.5", intGroupNumber: "12", intChannelNumber: "5", intDescription: "Flash Wrapper Operation Done Interrupt" },
	{ intDefineName: "INT_FPU_OVERFLOW", intGroupChannelNumber: "12.7", intGroupNumber: "12", intChannelNumber: "7", intDescription: "FPU Overflow Interrupt" },
	{ intDefineName: "INT_FPU_UNDERFLOW", intGroupChannelNumber: "12.8", intGroupNumber: "12", intChannelNumber: "8", intDescription: "FPU Underflow Interrupt" },
	{ intDefineName: "INT_ECAP6_2", intGroupChannelNumber: "4.14", intGroupNumber: "4", intChannelNumber: "14", intDescription: "eCAP6_2 Interrupt" },
	{ intDefineName: "INT_ECAP7_2", intGroupChannelNumber: "4.15", intGroupNumber: "4", intChannelNumber: "15", intDescription: "eCAP7_2 Interrupt" },
	{ intDefineName: "INT_SDFM1", intGroupChannelNumber: "5.9", intGroupNumber: "5", intChannelNumber: "9", intDescription: "SDFM1 Interrupt" },
	{ intDefineName: "INT_SDFM1DR1", intGroupChannelNumber: "5.13", intGroupNumber: "5", intChannelNumber: "13", intDescription: "SDFM1DR1 Interrupt" },
	{ intDefineName: "INT_SDFM1DR2", intGroupChannelNumber: "5.14", intGroupNumber: "5", intChannelNumber: "14", intDescription: "SDFM1DR2 Interrupt" },
	{ intDefineName: "INT_SDFM1DR3", intGroupChannelNumber: "5.15", intGroupNumber: "5", intChannelNumber: "15", intDescription: "SDFM1DR3 Interrupt" },
	{ intDefineName: "INT_SDFM1DR4", intGroupChannelNumber: "5.16", intGroupNumber: "5", intChannelNumber: "16", intDescription: "SDFM1DR4 Interrupt" },
	{ intDefineName: "INT_FSITXA_INT1", intGroupChannelNumber: "7.11", intGroupNumber: "7", intChannelNumber: "11", intDescription: "FSITXA_INT1 Interrupt" },
	{ intDefineName: "INT_FSITXA_INT2", intGroupChannelNumber: "7.12", intGroupNumber: "7", intChannelNumber: "12", intDescription: "FSITXA_INT2 Interrupt" },
	{ intDefineName: "INT_FSIRXA_INT1", intGroupChannelNumber: "7.13", intGroupNumber: "7", intChannelNumber: "13", intDescription: "FSIRXA_INT1 Interrupt" },
	{ intDefineName: "INT_FSIRXA_INT2", intGroupChannelNumber: "7.14", intGroupNumber: "7", intChannelNumber: "14", intDescription: "FSIRXA_INT2 Interrupt" },
	{ intDefineName: "INT_CLA1PROMCRC", intGroupChannelNumber: "7.15", intGroupNumber: "7", intChannelNumber: "15", intDescription: "CLA1PROMCRC Interrupt" },
	{ intDefineName: "INT_DCC", intGroupChannelNumber: "7.16", intGroupNumber: "7", intChannelNumber: "16", intDescription: "DCC Interrupt" },
	{ intDefineName: "INT_LINA_0", intGroupChannelNumber: "8.9", intGroupNumber: "8", intChannelNumber: "9", intDescription: "LINA Interrupt0" },
	{ intDefineName: "INT_LINA_1", intGroupChannelNumber: "8.10", intGroupNumber: "8", intChannelNumber: "10", intDescription: "LINA Interrupt1" },
	{ intDefineName: "INT_PMBUSA", intGroupChannelNumber: "8.13", intGroupNumber: "8", intChannelNumber: "13", intDescription: "PMBUSA Interrupt" },
	{ intDefineName: "INT_ADCC_EVT", intGroupChannelNumber: "10.9", intGroupNumber: "10", intChannelNumber: "9", intDescription: "ADCC Event Interrupt" },
	{ intDefineName: "INT_ADCC2", intGroupChannelNumber: "10.10", intGroupNumber: "10", intChannelNumber: "10", intDescription: "ADCC Interrupt 2" },
	{ intDefineName: "INT_ADCC3", intGroupChannelNumber: "10.11", intGroupNumber: "10", intChannelNumber: "11", intDescription: "ADCC Interrupt 3" },
	{ intDefineName: "INT_ADCC4", intGroupChannelNumber: "10.12", intGroupNumber: "10", intChannelNumber: "12", intDescription: "ADCC Interrupt 4" },
	{ intDefineName: "INT_RAM_CORR_ERR", intGroupChannelNumber: "12.10", intGroupNumber: "12", intChannelNumber: "10", intDescription: "RAM Correctable Error Interrupt" },
	{ intDefineName: "INT_FLASH_CORR_ERR", intGroupChannelNumber: "12.11", intGroupNumber: "12", intChannelNumber: "11", intDescription: "Flash Correctable Error Interrupt" },
	{ intDefineName: "INT_RAM_ACC_VIOL", intGroupChannelNumber: "12.12", intGroupNumber: "12", intChannelNumber: "12", intDescription: "RAM Access Violation Interrupt" },
	{ intDefineName: "INT_SYS_PLL_SLIP", intGroupChannelNumber: "12.13", intGroupNumber: "12", intChannelNumber: "13", intDescription: "System PLL Slip Interrupt" },
	{ intDefineName: "INT_CLA_OVERFLOW", intGroupChannelNumber: "12.15", intGroupNumber: "12", intChannelNumber: "15", intDescription: "CLA Overflow Interrupt" },
	{ intDefineName: "INT_CLA_UNDERFLOW", intGroupChannelNumber: "12.16", intGroupNumber: "12", intChannelNumber: "16", intDescription: "CLA Underflow Interrupt" },
	{ intDefineName: "INT_TIMER1", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "CPU Timer 1 Interrupt" },
	{ intDefineName: "INT_TIMER2", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "CPU Timer 2 Interrupt" },
	{ intDefineName: "INT_DATALOG", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "Datalogging Interrupt" },
	{ intDefineName: "INT_RTOS", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "RTOS Interrupt" },
	{ intDefineName: "INT_EMU", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "Emulation Interrupt" },
	{ intDefineName: "INT_NMI", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "Non-Maskable Interrupt" },
	{ intDefineName: "INT_ILLEGAL", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "Illegal Operation Trap" },
	{ intDefineName: "INT_USER1", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 1" },
	{ intDefineName: "INT_USER2", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 2" },
	{ intDefineName: "INT_USER3", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 3" },
	{ intDefineName: "INT_USER4", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 4" },
	{ intDefineName: "INT_USER5", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 5" },
	{ intDefineName: "INT_USER6", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 6" },
	{ intDefineName: "INT_USER7", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 7" },
	{ intDefineName: "INT_USER8", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 8" },
	{ intDefineName: "INT_USER9", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 9" },
	{ intDefineName: "INT_USER10", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 10" },
	{ intDefineName: "INT_USER11", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 11" },
	{ intDefineName: "INT_USER12", intGroupChannelNumber: "OTHER", intGroupNumber: "", intChannelNumber: "", intDescription: "User Defined Trap 12" },
];
module.exports = {
	interrupts: interrupts,
}
