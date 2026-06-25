let REGISTER_TO_FUNCTION = 
{
    "ADCINLTRIM1": [
        "ADC_setINLTrim"
    ],
    "ADCINLTRIM2": [
        "ADC_setINLTrim"
    ],
    "ADCOFFTRIM": [
        "ADC_setOffsetTrim"
    ],
    "REFCONFIGA": [
        "ADC_setVREF",
        "ASysCtl_setAnalogReferenceInternal",
        "ASysCtl_setAnalogReferenceExternal"
    ],
    "ANAREFCTL": [
        "ADC_setVREF",
        "ASysCtl_setAnalogReference2P5",
        "ASysCtl_setAnalogReference1P65"
    ],
    "ADCPPB1TRIPHI": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB1TRIPLO": [
        "ADC_setPPBTripLimits"
    ],
    "ADCREP1CTL": [
        "ADC_configureRepeater",
        "ADC_getRepeaterStatus",
        "ADC_triggerRepeaterModuleBusy",
        "ADC_triggerRepeaterSelect",
        "ADC_triggerRepeaterSyncIn",
        "ADC_forceRepeaterTriggerSync"
    ],
    "ADCREP1N": [
        "ADC_configureRepeater",
        "ADC_triggerRepeaterCount"
    ],
    "ADCREP1SPREAD": [
        "ADC_configureRepeater",
        "ADC_triggerRepeaterSpread"
    ],
    "ADCCTL2": [
        "ADC_setPrescaler"
    ],
    "ADCSOC0CTL": [
        "ADC_setupSOC",
        "ADC_enableSampleCAPReset",
        "ADC_disableSampleCAPReset",
        "ADC_selectSampleCAPResetValue"
    ],
    "ADCREP1FRC": [
        "ADC_forceRepeaterTrigger"
    ],
    "ADCINTSOCSEL1": [
        "ADC_setInterruptSOCTrigger"
    ],
    "ADCCTL1": [
        "ADC_setInterruptPulseMode",
        "ADC_enableConverter",
        "ADC_disableConverter",
        "ADC_isBusy"
    ],
    "ADCINTCYCLE": [
        "ADC_setInterruptCycleOffset"
    ],
    "ADCINTFLG": [
        "ADC_getIntResultStatus",
        "ADC_getDMAInterruptStatus",
        "ADC_clearDMAInterruptStatus",
        "ADC_getInterruptStatus",
        "ADC_clearInterruptStatus"
    ],
    "ADCSOCFRC1": [
        "ADC_forceSOC",
        "ADC_forceMultipleSOC"
    ],
    "ADCRAWINTFLG": [
        "ADC_getDMARAWIntStatus",
        "ADC_getRAWInterruptStatus"
    ],
    "ADCINTFLGCLR": [
        "ADC_clearDMAInterruptStatus",
        "ADC_clearInterruptStatus"
    ],
    "ADCINTOVF": [
        "ADC_getDMAInterruptOverflowStatus",
        "ADC_clearDMAInterruptOverflowStatus",
        "ADC_getInterruptOverflowStatus",
        "ADC_clearInterruptOverflowStatus"
    ],
    "ADCINTOVFCLR": [
        "ADC_clearDMAInterruptOverflowStatus",
        "ADC_clearInterruptOverflowStatus"
    ],
    "ADCRESULT0": [
        "ADC_readResult"
    ],
    "ADCSOCPRICTL": [
        "ADC_setSOCPriority"
    ],
    "ADCOSDETECT": [
        "ADC_configOSDetectMode",
        "ADC_enableOSDetectMode",
        "ADC_disableOSDetectMode"
    ],
    "ADCPPB1CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_setPPBShiftValue",
        "ADC_selectPPBSyncInput",
        "ADC_forcePPBSync",
        "ADC_selectPPBOSINTSource",
        "ADC_selectPPBCompareSource",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement"
    ],
    "ADCEVTSEL": [
        "ADC_enablePPBEvent",
        "ADC_disablePPBEvent"
    ],
    "ADCEVTINTSEL": [
        "ADC_enablePPBEventInterrupt",
        "ADC_disablePPBEventInterrupt"
    ],
    "ADCEVTSTAT": [
        "ADC_getPPBEventStatus"
    ],
    "ADCEVTCLR": [
        "ADC_clearPPBEventStatus"
    ],
    "ADCPPB1LIMIT": [
        "ADC_setPPBCountLimit",
        "ADC_getPPBCountLimit"
    ],
    "ADCPPB1CONFIG2": [
        "ADC_setPPBShiftValue",
        "ADC_selectPPBSyncInput",
        "ADC_forcePPBSync",
        "ADC_selectPPBOSINTSource",
        "ADC_selectPPBCompareSource"
    ],
    "ADCPPB1RESULT": [
        "ADC_readPPBResult"
    ],
    "ADCPPB1OFFCAL": [
        "ADC_setPPBCalibrationOffset"
    ],
    "ADCPPB1OFFREF": [
        "ADC_setPPBReferenceOffset"
    ],
    "ADCDMAINTSEL": [
        "ADC_enableDMAInterrupt",
        "ADC_disableDMAInterrupt",
        "ADC_setDMAInterruptSource",
        "ADC_enableDMAContinuousMode",
        "ADC_disableDMAContinuousMode"
    ],
    "TSNSCTL": [
        "ASysCtl_enableTemperatureSensor",
        "ASysCtl_disableTemperatureSensor"
    ],
    "INTERNALTESTCTL": [
        "ASysCtl_selectInternalTestNode"
    ],
    "CMPHNMXSEL": [
        "ASysCtl_selectCMPHNMux",
        "ASysCtl_selectCMPHNMuxValue"
    ],
    "CMPLNMXSEL": [
        "ASysCtl_selectCMPLNMux",
        "ASysCtl_selectCMPLNMuxValue"
    ],
    "CMPHPMXSEL": [
        "ASysCtl_selectCMPHPMux"
    ],
    "CMPLPMXSEL": [
        "ASysCtl_selectCMPLPMux"
    ],
    "CMPSSCTL": [
        "ASysCtl_enableCMPSSExternalDAC",
        "ASysCtl_disableCMPSSExternalDAC"
    ],
    "LOCK": [
        "ASysCtl_lockTemperatureSensor",
        "ASysCtl_lockANAREF",
        "ASysCtl_lockVMON",
        "ASysCtl_lockCMPHPMux",
        "ASysCtl_lockCMPLPMux",
        "ASysCtl_lockCMPHNMux",
        "ASysCtl_lockCMPLNMux",
        "ASysCtl_lockCMPSSCTL"
    ],
    "ADCDACLOOPBACK": [
        "ASysCtl_enableADCDACLoopback",
        "ASysCtl_disableADCDACLoopback"
    ],
    "GPIOINENACTRL": [
        "ASysCtl_enableGPIOInputBuffer",
        "ASysCtl_disableGPIOInputBuffer"
    ],
    "CTRIPHFILCTL": [
        "CMPSS_configFilterHigh",
        "CMPSS_initFilterHigh",
        "CMPSS_configureFilterInputHigh"
    ],
    "CTRIPHFILCLKCTL": [
        "CMPSS_configFilterHigh"
    ],
    "CTRIPHFILCLKCTL2": [
        "CMPSS_configFilterHigh"
    ],
    "CTRIPLFILCTL": [
        "CMPSS_configFilterLow",
        "CMPSS_initFilterLow",
        "CMPSS_configureFilterInputLow"
    ],
    "CTRIPLFILCLKCTL": [
        "CMPSS_configFilterLow"
    ],
    "CTRIPLFILCLKCTL2": [
        "CMPSS_configFilterLow"
    ],
    "COMPSTS": [
        "CMPSS_configLatchOnPWMSYNC",
        "CMPSS_getStatus",
        "CMPSS_clearFilterLatchHigh",
        "CMPSS_clearFilterLatchLow",
        "CMPSS_enableLatchResetOnPWMSYNCHigh",
        "CMPSS_disableLatchResetOnPWMSYNCHigh",
        "CMPSS_enableLatchResetOnPWMSYNCLow",
        "CMPSS_disableLatchResetOnPWMSYNCLow"
    ],
    "COMPSTSCLR": [
        "CMPSS_configLatchOnPWMSYNC",
        "CMPSS_clearFilterLatchHigh",
        "CMPSS_clearFilterLatchLow",
        "CMPSS_enableLatchResetOnPWMSYNCHigh",
        "CMPSS_disableLatchResetOnPWMSYNCHigh",
        "CMPSS_enableLatchResetOnPWMSYNCLow",
        "CMPSS_disableLatchResetOnPWMSYNCLow"
    ],
    "COMPCTL": [
        "CMPSS_enableModule",
        "CMPSS_disableModule",
        "CMPSS_configHighComparator",
        "CMPSS_configLowComparator",
        "CMPSS_configOutputsHigh",
        "CMPSS_configOutputsLow"
    ],
    "DACHVALS": [
        "CMPSS_setDACValueHigh"
    ],
    "DACLVALS": [
        "CMPSS_setDACValueLow"
    ],
    "DACHVALA": [
        "CMPSS_getDACValueHigh"
    ],
    "DACLVALA": [
        "CMPSS_getDACValueLow"
    ],
    "COMPDACHCTL": [
        "CMPSS_configureSyncSourceHigh",
        "staticinlinevoidCMPSSLITE_configDAC"
    ],
    "COMPDACLCTL": [
        "CMPSS_configureSyncSourceLow"
    ],
    "COMPHYSCTL": [
        "CMPSS_setHysteresis"
    ],
    "TCR": [
        "CPUTimer_setEmulationMode",
        "CPUTimer_clearOverflowFlag",
        "CPUTimer_disableInterrupt",
        "CPUTimer_enableInterrupt",
        "CPUTimer_reloadTimerCounter",
        "CPUTimer_stopTimer",
        "CPUTimer_resumeTimer",
        "CPUTimer_startTimer",
        "CPUTimer_getTimerOverflowStatus"
    ],
    "PRD": [
        "CPUTimer_setPeriod"
    ],
    "TIM": [
        "CPUTimer_getTimerCount"
    ],
    "TPR": [
        "CPUTimer_setPreScaler"
    ],
    "TPRH": [
        "CPUTimer_setPreScaler"
    ],
    "TMR2CLKCTL": [
        "CPUTimer_selectClockSource",
        "SysCtl_setCputimer2Clk"
    ],
    "DCCGCTRL": [
        "DCC_enableModule",
        "DCC_disableModule",
        "DCC_enableErrorSignal",
        "DCC_enableDoneSignal",
        "DCC_disableErrorSignal",
        "DCC_disableDoneSignal",
        "DCC_enableSingleShotMode",
        "DCC_disableSingleShotMode"
    ],
    "DCCSTATUS": [
        "DCC_getErrorStatus",
        "DCC_getSingleShotStatus",
        "DCC_clearErrorFlag",
        "DCC_clearDoneFlag",
        "SysCtl_isPLLValid"
    ],
    "DCCCNT0": [
        "DCC_getCounter0Value"
    ],
    "DCCVALID0": [
        "DCC_getValidCounter0Value"
    ],
    "DCCCNT1": [
        "DCC_getCounter1Value"
    ],
    "DCCCLKSRC1": [
        "DCC_setCounter1ClkSource",
        "DCC_getCounter1ClkSource"
    ],
    "DCCCLKSRC0": [
        "DCC_setCounter0ClkSource",
        "DCC_getCounter0ClkSource"
    ],
    "DCCCNTSEED0": [
        "DCC_setCounterSeeds"
    ],
    "DCCVALIDSEED0": [
        "DCC_setCounterSeeds"
    ],
    "DCCCNTSEED1": [
        "DCC_setCounterSeeds"
    ],
    "Z1_LINKPOINTER": [
        "DCSM_unlockZone1CSM",
        "DCSM_readZone1CSMPwd",
        "DCSM_getZone1LinkPointerError"
    ],
    "Z1_CSMKEY0": [
        "DCSM_unlockZone1CSM",
        "DCSM_writeZone1CSM"
    ],
    "Z1_CSMKEY1": [
        "DCSM_unlockZone1CSM",
        "DCSM_writeZone1CSM"
    ],
    "Z1_CSMKEY2": [
        "DCSM_unlockZone1CSM",
        "DCSM_writeZone1CSM"
    ],
    "Z1_CSMKEY3": [
        "DCSM_unlockZone1CSM",
        "DCSM_writeZone1CSM"
    ],
    "Z2_LINKPOINTER": [
        "DCSM_unlockZone2CSM",
        "DCSM_readZone2CSMPwd",
        "DCSM_getZone2LinkPointerError"
    ],
    "Z2_CSMKEY0": [
        "DCSM_unlockZone2CSM",
        "DCSM_writeZone2CSM"
    ],
    "Z2_CSMKEY1": [
        "DCSM_unlockZone2CSM",
        "DCSM_writeZone2CSM"
    ],
    "Z2_CSMKEY2": [
        "DCSM_unlockZone2CSM",
        "DCSM_writeZone2CSM"
    ],
    "Z2_CSMKEY3": [
        "DCSM_unlockZone2CSM",
        "DCSM_writeZone2CSM"
    ],
    "Z1_EXEONLYSECT1R": [
        "DCSM_getZone1FlashEXEStatus"
    ],
    "Z2_EXEONLYSECT1R": [
        "DCSM_getZone2FlashEXEStatus"
    ],
    "Z1_CR": [
        "DCSM_secureZone1",
        "DCSM_getZone1CSMSecurityStatus",
        "DCSM_getZone1ControlStatus"
    ],
    "Z2_CR": [
        "DCSM_secureZone2",
        "DCSM_getZone2CSMSecurityStatus",
        "DCSM_getZone2ControlStatus"
    ],
    "SECTSTAT1": [
        "DCSM_getFlashSectorZone"
    ],
    "Z1_LINKPOINTERERR": [
        "DCSM_getZone1LinkPointerError"
    ],
    "Z2_LINKPOINTERERR": [
        "DCSM_getZone2LinkPointerError"
    ],
    "SECERRSTAT": [
        "DCSM_getFlashErrorStatus"
    ],
    "SECERRCLR": [
        "DCSM_clearFlashErrorStatus"
    ],
    "SECERRFRC": [
        "DCSM_forceFlashErrorStatus"
    ],
    "Z1_OTPSECLOCK": [
        "DCSM_getZone1OTPSecureLockStatus"
    ],
    "Z2_OTPSECLOCK": [
        "DCSM_getZone2OTPSecureLockStatus"
    ],
    "DENYCODE": [
        "DCSM_getFlashDenyCodeStatus"
    ],
    "UID_UNIQUE_31_0": [
        "DCSM_getDeviceUIDLow"
    ],
    "UID_UNIQUE_63_32": [
        "DCSM_getDeviceUIDHigh"
    ],
    "PARTIDH": [
        "DCSM_getDevicePartID",
        "SysCtl_getDeviceParametric"
    ],
    "PERSEM1": [
        "DCSM_getPerSemStatus",
        "DCSM_forcePerSemStatus"
    ],
    "SRC_BEG_ADDR_SHADOW": [
        "DMA_configAddresses",
        "DMA_configSourceAddress"
    ],
    "SRC_ADDR_SHADOW": [
        "DMA_configAddresses",
        "DMA_configSourceAddress"
    ],
    "DST_BEG_ADDR_SHADOW": [
        "DMA_configAddresses",
        "DMA_configDestAddress"
    ],
    "DST_ADDR_SHADOW": [
        "DMA_configAddresses",
        "DMA_configDestAddress"
    ],
    "BURST_SIZE": [
        "DMA_configBurst"
    ],
    "SRC_BURST_STEP": [
        "DMA_configBurst"
    ],
    "DST_BURST_STEP": [
        "DMA_configBurst"
    ],
    "TRANSFER_SIZE": [
        "DMA_configTransfer"
    ],
    "SRC_TRANSFER_STEP": [
        "DMA_configTransfer"
    ],
    "DST_TRANSFER_STEP": [
        "DMA_configTransfer"
    ],
    "SRC_WRAP_SIZE": [
        "DMA_configWrap"
    ],
    "SRC_WRAP_STEP": [
        "DMA_configWrap"
    ],
    "DST_WRAP_SIZE": [
        "DMA_configWrap"
    ],
    "DST_WRAP_STEP": [
        "DMA_configWrap"
    ],
    "MODE": [
        "DMA_configMode",
        "DMA_enableTrigger",
        "DMA_disableTrigger",
        "DMA_enableInterrupt",
        "DMA_disableInterrupt",
        "DMA_enableOverrunInterrupt",
        "DMA_disableOverrunInterrupt",
        "DMA_setInterruptMode"
    ],
    "DMACHSRCSEL1": [
        "DMA_configMode"
    ],
    "CTRL": [
        "DMA_initController",
        "Interrupt_initModule",
        "Interrupt_defaultHandler",
        "Interrupt_enablePIE",
        "Interrupt_disablePIE"
    ],
    "CONTROL": [
        "DMA_triggerSoftReset",
        "DMA_forceTrigger",
        "DMA_clearTriggerFlag",
        "DMA_getTransferStatusFlag",
        "DMA_getBurstStatusFlag",
        "DMA_getRunStatusFlag",
        "DMA_getOverflowFlag",
        "DMA_getTriggerFlagStatus",
        "DMA_startChannel",
        "DMA_stopChannel",
        "DMA_clearErrorFlag"
    ],
    "DEBUGCTRL": [
        "DMA_setEmulationMode"
    ],
    "PRIORITYCTRL1": [
        "DMA_setPriorityMode"
    ],
    "ECCTL1": [
        "ECAP_setEmulationMode",
        "ECAP_setEventPrescaler",
        "ECAP_setEventPolarity",
        "ECAP_enableCounterResetOnEvent",
        "ECAP_disableCounterResetOnEvent",
        "ECAP_enableTimeStampCapture",
        "ECAP_disableTimeStampCapture"
    ],
    "ECCTL2": [
        "ECAP_setCaptureMode",
        "ECAP_reArm",
        "ECAP_enableCaptureMode",
        "ECAP_enableAPWMMode",
        "ECAP_enableLoadCounter",
        "ECAP_disableLoadCounter",
        "ECAP_loadCounter",
        "ECAP_setSyncOutMode",
        "ECAP_stopCounter",
        "ECAP_startCounter",
        "ECAP_setAPWMPolarity",
        "ECAP_resetCounters",
        "ECAP_setDMASource",
        "ECAP_getModuloCounterStatus"
    ],
    "ECEINT": [
        "ECAP_enableInterrupt",
        "ECAP_disableInterrupt"
    ],
    "ECFLG": [
        "ECAP_getInterruptSource",
        "ECAP_getGlobalInterruptStatus"
    ],
    "ECCLR": [
        "ECAP_clearInterrupt",
        "ECAP_clearGlobalInterrupt"
    ],
    "ECFRC": [
        "ECAP_forceInterrupt"
    ],
    "CTRPHS": [
        "ECAP_setPhaseShiftCount"
    ],
    "SYNCINSEL": [
        "ECAP_setSyncInPulseSource"
    ],
    "CAP1": [
        "ECAP_setAPWMPeriod",
        "ECAP_getEventTimeStamp"
    ],
    "CAP2": [
        "ECAP_setAPWMCompare",
        "ECAP_getEventTimeStamp"
    ],
    "CAP3": [
        "ECAP_setAPWMShadowPeriod",
        "ECAP_getEventTimeStamp"
    ],
    "CAP4": [
        "ECAP_setAPWMShadowCompare",
        "ECAP_getEventTimeStamp"
    ],
    "TSCTR": [
        "ECAP_getTimeBaseCounter"
    ],
    "ECCTL0": [
        "ECAP_selectECAPInput"
    ],
    "QPOSCMP": [
        "EQEP_setCompareConfig"
    ],
    "QDECCTL": [
        "EQEP_setCompareConfig",
        "EQEP_setInputPolarity",
        "EQEP_setDecoderConfig",
        "EQEP_enableDirectionChangeDuringIndex",
        "EQEP_disableDirectionChangeDuringIndex"
    ],
    "QPOSCTL": [
        "EQEP_setCompareConfig",
        "EQEP_enableCompare",
        "EQEP_disableCompare",
        "EQEP_setComparePulseWidth"
    ],
    "QEPCTL": [
        "EQEP_enableModule",
        "EQEP_disableModule",
        "EQEP_setPositionCounterConfig",
        "EQEP_enableUnitTimer",
        "EQEP_disableUnitTimer",
        "EQEP_enableWatchdog",
        "EQEP_disableWatchdog",
        "EQEP_setPositionInitMode",
        "EQEP_setSWPositionInit",
        "EQEP_setLatchMode",
        "EQEP_setEmulationMode"
    ],
    "QPOSMAX": [
        "EQEP_setPositionCounterConfig"
    ],
    "QPOSCNT": [
        "EQEP_getPosition",
        "EQEP_setPosition"
    ],
    "QEPSTS": [
        "EQEP_getDirection",
        "EQEP_getStatus",
        "EQEP_clearStatus"
    ],
    "QEINT": [
        "EQEP_enableInterrupt",
        "EQEP_disableInterrupt"
    ],
    "QFLG": [
        "EQEP_getInterruptStatus",
        "EQEP_getError"
    ],
    "QCLR": [
        "EQEP_clearInterruptStatus"
    ],
    "QFRC": [
        "EQEP_forceInterrupt"
    ],
    "QCAPCTL": [
        "EQEP_setCaptureConfig",
        "EQEP_enableCapture",
        "EQEP_disableCapture"
    ],
    "QCPRD": [
        "EQEP_getCapturePeriod",
        "EQEP_getCapturePeriodLatch"
    ],
    "QCTMR": [
        "EQEP_getCaptureTimer",
        "EQEP_getCaptureTimerLatch"
    ],
    "QUPRD": [
        "EQEP_loadUnitTimer",
        "EQEP_enableUnitTimer"
    ],
    "QWDPRD": [
        "EQEP_enableWatchdog"
    ],
    "QWDTMR": [
        "EQEP_setWatchdogTimerValue",
        "EQEP_getWatchdogTimerValue"
    ],
    "QPOSINIT": [
        "EQEP_setInitialPosition"
    ],
    "QPOSILAT": [
        "EQEP_getIndexPositionLatch"
    ],
    "QPOSSLAT": [
        "EQEP_getStrobePositionLatch"
    ],
    "QPOSLAT": [
        "EQEP_getPositionLatch"
    ],
    "QCTMRLAT": [
        "EQEP_getCaptureTimerLatch"
    ],
    "QCPRDLAT": [
        "EQEP_getCapturePeriodLatch"
    ],
    "QMACTRL": [
        "EQEP_setQMAModuleMode"
    ],
    "QEPSTROBESEL": [
        "EQEP_setStrobeSource"
    ],
    "QEPSRCSEL": [
        "EQEP_selectSource"
    ],
    "FRDCNTL": [
        "Flash_setWaitstates"
    ],
    "FRD_INTF_CTRL": [
        "Flash_enablePrefetch",
        "Flash_disablePrefetch",
        "Flash_enableCache",
        "Flash_disableCache"
    ],
    "FLPROT": [
        "Flash_setFLWEPROT"
    ],
    "ECC_ENABLE": [
        "Flash_enableECC",
        "Flash_disableECC"
    ],
    "FECC_CTRL": [
        "Flash_enableSingleBitECCTestMode",
        "Flash_enableDoubleBitECCTestMode",
        "Flash_disableSingleBitECCTestMode",
        "Flash_disableDoubleBitECCTestMode"
    ],
    "GPADIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode",
        "GPIO_writeODPin"
    ],
    "1CR": [
        "GPIO_setInterruptPin",
        "GPIO_setInterruptType",
        "GPIO_getInterruptType",
        "GPIO_enableInterrupt",
        "GPIO_disableInterrupt",
        "GPIO_getInterruptCounter"
    ],
    "GPAPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPAINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPAQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPACTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "AGPIOCTRLA": [
        "GPIO_setAnalogMode"
    ],
    "GPAMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPAGMUX1": [
        "GPIO_setPinConfig"
    ],
    "1CTR": [
        "GPIO_getInterruptCounter"
    ],
    "GPADAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPASET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPACLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPATOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPALOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPACR": [
        "GPIO_commitPortConfig"
    ],
    "CLKL": [
        "I2C_initController",
        "I2C_initControllerModuleFrequency"
    ],
    "CLKH": [
        "I2C_initController",
        "I2C_initControllerModuleFrequency"
    ],
    "PSC": [
        "I2C_initController",
        "I2C_initControllerModuleFrequency",
        "I2C_configureModuleFrequency",
        "I2C_configureModuleClockFrequency",
        "I2C_getPreScaler"
    ],
    "IER": [
        "I2C_enableInterrupt",
        "I2C_disableInterrupt"
    ],
    "FFTX": [
        "I2C_enableInterrupt",
        "I2C_disableInterrupt",
        "I2C_getInterruptStatus",
        "I2C_clearInterruptStatus",
        "I2C_enableFIFO",
        "I2C_disableFIFO",
        "I2C_setFIFOInterruptLevel",
        "I2C_getFIFOInterruptLevel",
        "I2C_getTxFIFOStatus"
    ],
    "FFRX": [
        "I2C_enableInterrupt",
        "I2C_disableInterrupt",
        "I2C_getInterruptStatus",
        "I2C_clearInterruptStatus",
        "I2C_enableFIFO",
        "I2C_disableFIFO",
        "I2C_setFIFOInterruptLevel",
        "I2C_getFIFOInterruptLevel",
        "I2C_getRxFIFOStatus"
    ],
    "STR": [
        "I2C_getInterruptStatus",
        "I2C_clearInterruptStatus",
        "I2C_isBusBusy",
        "I2C_getStatus",
        "I2C_clearStatus"
    ],
    "MDR": [
        "I2C_enableModule",
        "I2C_disableModule",
        "I2C_setConfig",
        "I2C_setBitCount",
        "I2C_sendStartCondition",
        "I2C_sendStopCondition",
        "I2C_sendNACK",
        "I2C_getStopConditionStatus",
        "I2C_setAddressMode",
        "I2C_setEmulationMode",
        "I2C_enableLoopback",
        "I2C_disableLoopback"
    ],
    "TAR": [
        "I2C_setTargetAddress"
    ],
    "OAR": [
        "I2C_setOwnAddress"
    ],
    "DRR": [
        "I2C_getData"
    ],
    "DXR": [
        "I2C_putData"
    ],
    "CNT": [
        "I2C_setDataCount"
    ],
    "ISRC": [
        "I2C_getInterruptSource"
    ],
    "EMDR": [
        "I2C_setExtendedMode",
        "I2C_enableExtendedAutomaticClkStretchingMode",
        "I2C_disableExtendedAutomaticClkStretchingMode",
        "I2C_enableManualClkStretchingMode",
        "I2C_disableManualClkStretchingMode",
        "I2C_enableNACKCompatibilityMode",
        "I2C_disableNACKCompatibilityMode"
    ],
    "IER1": [
        "Interrupt_initModule",
        "Interrupt_enable",
        "Interrupt_disable"
    ],
    "IFR1": [
        "Interrupt_initModule"
    ],
    "IER2": [
        "Interrupt_initModule"
    ],
    "IFR2": [
        "Interrupt_initModule"
    ],
    "IER3": [
        "Interrupt_initModule"
    ],
    "IFR3": [
        "Interrupt_initModule"
    ],
    "IER4": [
        "Interrupt_initModule"
    ],
    "IFR4": [
        "Interrupt_initModule"
    ],
    "IER5": [
        "Interrupt_initModule"
    ],
    "IFR5": [
        "Interrupt_initModule"
    ],
    "IER6": [
        "Interrupt_initModule"
    ],
    "IFR6": [
        "Interrupt_initModule"
    ],
    "IER7": [
        "Interrupt_initModule"
    ],
    "IFR7": [
        "Interrupt_initModule"
    ],
    "IER8": [
        "Interrupt_initModule"
    ],
    "IFR8": [
        "Interrupt_initModule"
    ],
    "IER9": [
        "Interrupt_initModule"
    ],
    "IFR9": [
        "Interrupt_initModule"
    ],
    "IER10": [
        "Interrupt_initModule"
    ],
    "IFR10": [
        "Interrupt_initModule"
    ],
    "IER11": [
        "Interrupt_initModule"
    ],
    "IFR11": [
        "Interrupt_initModule"
    ],
    "IER12": [
        "Interrupt_initModule"
    ],
    "IFR12": [
        "Interrupt_initModule"
    ],
    "ACK": [
        "Interrupt_disable",
        "Interrupt_clearACKGroup"
    ],
    "TBCTL": [
        "MCPWM_setEmulationMode",
        "MCPWM_setTimeBaseCounterMode",
        "MCPWM_setClockPrescaler",
        "MCPWM_setPeriodLoadMode",
        "MCPWM_enablePhaseShiftLoad",
        "MCPWM_disablePhaseShiftLoad",
        "MCPWM_setCountModeAfterSync",
        "MCPWM_forceSyncPulse",
        "MCPWM_setSyncOutPulseMode",
        "MCPWM_setSyncPulseSource",
        "MCPWM_setSyncInPulseSource"
    ],
    "REVISION": [
        "MCPWM_getRevision"
    ],
    "TBPHS": [
        "MCPWM_setPhaseShift"
    ],
    "TBCTR": [
        "MCPWM_setTimeBaseCounter",
        "MCPWM_getTimeBaseCounterValue"
    ],
    "TBSTS": [
        "MCPWM_getTimeBaseCounterDirection",
        "MCPWM_getSyncStatus",
        "MCPWM_clearSyncStatus"
    ],
    "TBSTSCLR": [
        "MCPWM_clearSyncStatus"
    ],
    "TBPRD": [
        "MCPWM_setTimeBasePeriodActive",
        "MCPWM_setTimeBasePeriodShadow",
        "MCPWM_getTimeBasePeriodActive",
        "MCPWM_getTimeBasePeriodShadow"
    ],
    "TBPRDS": [
        "MCPWM_setTimeBasePeriodShadow",
        "MCPWM_getTimeBasePeriodShadow"
    ],
    "CMPC": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue",
        "MCPWM_setCounterCompareShadowLoadMode"
    ],
    "CMPD": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM1_CMPA": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM1_CMPB": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM2_CMPA": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM2_CMPB": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM3_CMPA": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM3_CMPB": [
        "MCPWM_setCounterCompareActiveValue",
        "MCPWM_getCounterCompareActiveValue",
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "CMPCS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "CMPDS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM1_CMPAS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM1_CMPBS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM2_CMPAS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM2_CMPBS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM3_CMPAS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "PWM3_CMPBS": [
        "MCPWM_setCounterCompareShadowValue",
        "MCPWM_getCounterCompareShadowValue"
    ],
    "CMPCTL": [
        "MCPWM_setCounterCompareShadowLoadMode"
    ],
    "PWM1_AQSFRC": [
        "MCPWM_setActionQualifierSWAction"
    ],
    "PWM2_AQSFRC": [
        "MCPWM_setActionQualifierSWAction"
    ],
    "PWM3_AQSFRC": [
        "MCPWM_setActionQualifierSWAction"
    ],
    "PWM1_AQOTSFRC": [
        "MCPWM_forceActionQualifierSWAction"
    ],
    "PWM2_AQOTSFRC": [
        "MCPWM_forceActionQualifierSWAction"
    ],
    "PWM3_AQOTSFRC": [
        "MCPWM_forceActionQualifierSWAction"
    ],
    "AQCTL": [
        "MCPWM_setActionQualifierShadowLoadMode"
    ],
    "PWM1_AQCTLA": [
        "MCPWM_setActionQualifierActionActive",
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteActive",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM1_AQCTLB": [
        "MCPWM_setActionQualifierActionActive",
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteActive",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM2_AQCTLA": [
        "MCPWM_setActionQualifierActionActive",
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteActive",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM2_AQCTLB": [
        "MCPWM_setActionQualifierActionActive",
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteActive",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM3_AQCTLA": [
        "MCPWM_setActionQualifierActionActive",
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteActive",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM3_AQCTLB": [
        "MCPWM_setActionQualifierActionActive",
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteActive",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM1_AQCTLAS": [
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM1_AQCTLBS": [
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM2_AQCTLAS": [
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM2_AQCTLBS": [
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM3_AQCTLAS": [
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "PWM3_AQCTLBS": [
        "MCPWM_setActionQualifierActionShadow",
        "MCPWM_setActionQualifierActionCompleteShadow"
    ],
    "GLDCTL": [
        "MCPWM_enableGlobalLoad",
        "MCPWM_disableGlobalLoad",
        "MCPWM_setGlobalLoadTrigger",
        "MCPWM_enableGlobalLoadOneShotMode",
        "MCPWM_disableGlobalLoadOneShotMode"
    ],
    "GLDOSHTCTL": [
        "MCPWM_setGlobalLoadOneShotLatch",
        "MCPWM_clearGlobalLoadOneShotLatch",
        "MCPWM_forceGlobalLoadOneShotEvent"
    ],
    "GLDOSHTSTS": [
        "MCPWM_getGlobalLoadOneShotLatchStatus"
    ],
    "DBCTL": [
        "MCPWM_setDeadBandOutputSwapMode",
        "MCPWM_setDeadBandDelayMode",
        "MCPWM_setDeadBandDelayPolarity",
        "MCPWM_setRisingEdgeDeadBandDelayInput",
        "MCPWM_setFallingEdgeDeadBandDelayInput",
        "MCPWM_setRisingEdgeDelayCountShadowLoadMode",
        "MCPWM_setFallingEdgeDelayCountShadowLoadMode"
    ],
    "DBRED": [
        "MCPWM_setRisingEdgeDelayCountActive",
        "MCPWM_setRisingEdgeDelayCountShadow"
    ],
    "DBREDS": [
        "MCPWM_setRisingEdgeDelayCountShadow"
    ],
    "DBFED": [
        "MCPWM_setFallingEdgeDelayCountActive",
        "MCPWM_setFallingEdgeDelayCountShadow"
    ],
    "DBFEDS": [
        "MCPWM_setFallingEdgeDelayCountShadow"
    ],
    "TZSEL": [
        "MCPWM_enableTripZoneSignals",
        "MCPWM_disableTripZoneSignals"
    ],
    "TZCTL": [
        "MCPWM_setTripZoneAction",
        "MCPWM_selectTripZoneCBCEvent"
    ],
    "TZCBCOSTFLAG": [
        "MCPWM_getTripZoneFlagStatus"
    ],
    "TZCBCOSTCLR": [
        "MCPWM_clearTripZoneFlagStatus"
    ],
    "SOCEN": [
        "MCPWM_enableADCTrigger",
        "MCPWM_disableADCTrigger"
    ],
    "SOCSEL": [
        "MCPWM_setADCTriggerSource"
    ],
    "SOCPERIOD": [
        "MCPWM_setADCTriggerEventPrescale"
    ],
    "SOCCNT": [
        "MCPWM_getADCTriggerEventCount"
    ],
    "SOCFLAG": [
        "MCPWM_getADCTriggerFlagStatus"
    ],
    "SOCCLR": [
        "MCPWM_clearADCTriggerFlag"
    ],
    "ETSEL": [
        "MCPWM_setEventTriggerSource"
    ],
    "ETPERIOD": [
        "MCPWM_setEventTriggerEventPrescale"
    ],
    "ETCNT": [
        "MCPWM_getEventTriggerEventCount"
    ],
    "INTEN": [
        "MCPWM_enableInterrupt",
        "MCPWM_disableInterrupt"
    ],
    "INTFLAG": [
        "MCPWM_getInterruptSource",
        "MCPWM_getGlobalInterruptStatus"
    ],
    "INTCLR": [
        "MCPWM_clearInterrupt",
        "MCPWM_clearGlobalInterrupt"
    ],
    "INTFRC": [
        "MCPWM_forceInterrupt"
    ],
    "DXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "GSXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "DXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "GSXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "DXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "GSXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "ROM_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "DXTEST": [
        "MemCfg_setTestMode"
    ],
    "GSXTEST": [
        "MemCfg_setTestMode"
    ],
    "ROM_TEST": [
        "MemCfg_setTestMode"
    ],
    "DXINIT": [
        "MemCfg_initSections",
        "MemCfg_getInitStatus"
    ],
    "GSXINIT": [
        "MemCfg_initSections",
        "MemCfg_getInitStatus"
    ],
    "DXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "GSXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "CERRSET": [
        "MemCfg_getCorrErrorAddress",
        "MemCfg_forceCorrErrorStatus"
    ],
    "CERRCLR": [
        "MemCfg_getCorrErrorAddress",
        "MemCfg_clearCorrErrorStatus"
    ],
    "CCPUREADDR": [
        "MemCfg_getCorrErrorAddress"
    ],
    "UCCPUREADDR": [
        "MemCfg_getUncorrErrorAddress"
    ],
    "UCDMAREADDR": [
        "MemCfg_getUncorrErrorAddress"
    ],
    "ROM_FORCE_ERROR": [
        "MemCfg_forceMemError"
    ],
    "CERRTHRES": [
        "MemCfg_setCorrErrorThreshold"
    ],
    "CERRCNT": [
        "MemCfg_getCorrErrorCount"
    ],
    "CEINTEN": [
        "MemCfg_enableCorrErrorInterrupt",
        "MemCfg_disableCorrErrorInterrupt"
    ],
    "CEINTFLG": [
        "MemCfg_getCorrErrorInterruptStatus"
    ],
    "CEINTSET": [
        "MemCfg_forceCorrErrorInterrupt"
    ],
    "CEINTCLR": [
        "MemCfg_clearCorrErrorInterruptStatus"
    ],
    "CERRFLG": [
        "MemCfg_getCorrErrorStatus"
    ],
    "UCERRFLG": [
        "MemCfg_getUncorrErrorStatus"
    ],
    "UCERRSET": [
        "MemCfg_forceUncorrErrorStatus"
    ],
    "UCERRCLR": [
        "MemCfg_clearUncorrErrorStatus"
    ],
    "CPU_RAM_TEST_ERROR_STS": [
        "MemCfg_getDiagErrorStatus",
        "MemCfg_clearDiagErrorStatus"
    ],
    "CPU_RAM_TEST_ERROR_STS_CLR": [
        "MemCfg_clearDiagErrorStatus"
    ],
    "CPU_RAM_TEST_ERROR_ADDR": [
        "MemCfg_getDiagErrorAddress"
    ],
    "ROMWAITSTATE": [
        "MemCfg_enableROMWaitState",
        "MemCfg_disableROMWaitState"
    ],
    "PGAOFFSETTRIM": [
        "PGA_setOffsetTrimNMOS",
        "PGA_setOffsetTrimPMOS"
    ],
    "PGACTL": [
        "PGA_enable",
        "PGA_disable",
        "PGA_setGain",
        "PGA_setFilterResistor",
        "PGA_enableOutput",
        "PGA_disableOutput",
        "PGA_enableInternalGainOutput",
        "PGA_disableInternalGainOutput",
        "PGA_enableExternalChop",
        "PGA_disableExternalChop"
    ],
    "PGAMUXSEL": [
        "PGA_selectPMUXInput",
        "PGA_selectNMUXInput",
        "PGA_selectMMUXInput",
        "PGA_configurefeedbackOnPin",
        "PGA_chop"
    ],
    "PGATYPE": [
        "PGA_getPGARevision",
        "PGA_getPGAType"
    ],
    "PGALOCK": [
        "PGA_lockRegisters"
    ],
    "SCICCR": [
        "SCI_setConfig",
        "SCI_setParityMode",
        "SCI_getParityMode",
        "SCI_setAddrMultiProcessorMode",
        "SCI_setIdleMultiProcessorMode",
        "SCI_getConfig",
        "SCI_enableLoopback",
        "SCI_disableLoopback"
    ],
    "SCIHBAUD": [
        "SCI_setConfig",
        "SCI_setBaud",
        "SCI_lockAutobaud",
        "SCI_getConfig"
    ],
    "SCILBAUD": [
        "SCI_setConfig",
        "SCI_setBaud",
        "SCI_lockAutobaud",
        "SCI_getConfig"
    ],
    "SCITXBUF": [
        "SCI_writeCharArray",
        "SCI_writeCharBlockingFIFO",
        "SCI_writeCharBlockingNonFIFO",
        "SCI_writeCharNonBlocking"
    ],
    "SCIRXBUF": [
        "SCI_readCharArray",
        "SCI_readCharBlockingFIFO",
        "SCI_readCharBlockingNonFIFO",
        "SCI_readCharNonBlocking"
    ],
    "SCICTL1": [
        "SCI_enableInterrupt",
        "SCI_disableInterrupt",
        "SCI_setWakeFlag",
        "SCI_enableModule",
        "SCI_disableModule",
        "SCI_enableTxModule",
        "SCI_disableTxModule",
        "SCI_enableRxModule",
        "SCI_disableRxModule",
        "SCI_enableSleepMode",
        "SCI_disableSleepMode",
        "SCI_performSoftwareReset"
    ],
    "SCICTL2": [
        "SCI_enableInterrupt",
        "SCI_disableInterrupt",
        "SCI_getInterruptStatus",
        "SCI_isSpaceAvailableNonFIFO",
        "SCI_isTransmitterBusy"
    ],
    "SCIFFTX": [
        "SCI_enableInterrupt",
        "SCI_disableInterrupt",
        "SCI_getInterruptStatus",
        "SCI_clearInterruptStatus",
        "SCI_setFIFOInterruptLevel",
        "SCI_getFIFOInterruptLevel",
        "SCI_disableModule",
        "SCI_enableFIFO",
        "SCI_disableFIFO",
        "SCI_isFIFOEnabled",
        "SCI_resetTxFIFO",
        "SCI_resetChannels",
        "SCI_getTxFIFOStatus",
        "SCI_isTransmitterBusy"
    ],
    "SCIFFRX": [
        "SCI_enableInterrupt",
        "SCI_disableInterrupt",
        "SCI_getInterruptStatus",
        "SCI_clearInterruptStatus",
        "SCI_setFIFOInterruptLevel",
        "SCI_getFIFOInterruptLevel",
        "SCI_enableFIFO",
        "SCI_resetRxFIFO",
        "SCI_getRxFIFOStatus",
        "SCI_getOverflowStatus",
        "SCI_clearOverflowStatus"
    ],
    "SCIRXST": [
        "SCI_getInterruptStatus",
        "SCI_isDataAvailableNonFIFO",
        "SCI_getRxStatus"
    ],
    "SCIFFCT": [
        "SCI_lockAutobaud"
    ],
    "SPICCR": [
        "SPI_setConfig",
        "SPI_clearInterruptStatus",
        "SPI_pollingNonFIFOTransaction",
        "SPI_pollingFIFOTransaction",
        "SPI_enableModule",
        "SPI_disableModule",
        "SPI_setcharLength",
        "SPI_enableLoopback",
        "SPI_disableLoopback",
        "SPI_enableHighSpeedMode",
        "SPI_disableHighSpeedMode"
    ],
    "SPICTL": [
        "SPI_setConfig",
        "SPI_enableInterrupt",
        "SPI_disableInterrupt",
        "SPI_enableTalk",
        "SPI_disableTalk"
    ],
    "SPIBRR": [
        "SPI_setConfig",
        "SPI_setBaudRate"
    ],
    "SPIFFTX": [
        "SPI_enableInterrupt",
        "SPI_disableInterrupt",
        "SPI_getInterruptStatus",
        "SPI_clearInterruptStatus",
        "SPI_enableFIFO",
        "SPI_disableFIFO",
        "SPI_resetTxFIFO",
        "SPI_setFIFOInterruptLevel",
        "SPI_getFIFOInterruptLevel",
        "SPI_getTxFIFOStatus",
        "SPI_isBusy",
        "SPI_reset"
    ],
    "SPIFFRX": [
        "SPI_enableInterrupt",
        "SPI_disableInterrupt",
        "SPI_getInterruptStatus",
        "SPI_clearInterruptStatus",
        "SPI_enableFIFO",
        "SPI_disableFIFO",
        "SPI_resetRxFIFO",
        "SPI_setFIFOInterruptLevel",
        "SPI_getFIFOInterruptLevel",
        "SPI_getRxFIFOStatus"
    ],
    "SPISTS": [
        "SPI_getInterruptStatus",
        "SPI_clearInterruptStatus",
        "SPI_writeDataBlockingNonFIFO",
        "SPI_readDataBlockingNonFIFO"
    ],
    "SPITXBUF": [
        "SPI_writeDataNonBlocking",
        "SPI_writeDataBlockingFIFO",
        "SPI_writeDataBlockingNonFIFO"
    ],
    "SPIRXBUF": [
        "SPI_readDataNonBlocking",
        "SPI_readDataBlockingFIFO",
        "SPI_readDataBlockingNonFIFO"
    ],
    "SPIPRI": [
        "SPI_enableTriWire",
        "SPI_disableTriWire",
        "SPI_setPTESignalPolarity",
        "SPI_setEmulationMode"
    ],
    "SPIFFCT": [
        "SPI_setTxFifoTransmitDelay"
    ],
    "SPIRXEMU": [
        "SPI_readRxEmulationBuffer"
    ],
    "X1CNT": [
        "SysCtl_pollX1Counter",
        "SysCtl_getExternalOscCounterValue",
        "SysCtl_clearExternalOscCounterValue"
    ],
    "CLKSRCCTL1": [
        "SysCtl_getClock",
        "SysCtl_setClock",
        "SysCtl_selectXTAL",
        "SysCtl_selectXTALSingleEnded",
        "SysCtl_selectOscSource",
        "SysCtl_enableWatchdogInHalt",
        "SysCtl_disableWatchdogInHalt"
    ],
    "SYSPLLCTL": [
        "SysCtl_getClock",
        "SysCtl_setClock"
    ],
    "SYSPLLMULT": [
        "SysCtl_getClock",
        "SysCtl_setClock"
    ],
    "SYSCLKDIVSEL": [
        "SysCtl_getClock",
        "SysCtl_setPLLSysClk"
    ],
    "SYSPLLSTS": [
        "SysCtl_setClock"
    ],
    "XTALCR": [
        "SysCtl_setClock",
        "SysCtl_selectXTAL",
        "SysCtl_selectXTALSingleEnded",
        "SysCtl_setExternalOscMode",
        "SysCtl_turnOnOsc",
        "SysCtl_turnOffOsc"
    ],
    "LOSPCP": [
        "SysCtl_getLowSpeedClock",
        "SysCtl_setLowSpeedClock"
    ],
    "PARTIDL": [
        "SysCtl_getDeviceParametric"
    ],
    "ECAPTYPE": [
        "SysCtl_configureType",
        "SysCtl_isConfigTypeLocked"
    ],
    "CLKCFGLOCK": [
        "SysCtl_lockClkConfig"
    ],
    "CPUSYSLOCK": [
        "SysCtl_lockSysConfig"
    ],
    "SOFTPRES_CTRL_PERIPH": [
        "SysCtl_resetPeripheral"
    ],
    "PERCLKCR": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "WDCR": [
        "SysCtl_resetDevice",
        "SysCtl_disableWatchdog",
        "SysCtl_enableWatchdog",
        "SysCtl_isWatchdogEnabled",
        "SysCtl_setWatchdogPredivider",
        "SysCtl_setWatchdogPrescaler"
    ],
    "RESC": [
        "SysCtl_getResetCause",
        "SysCtl_clearResetCause",
        "SysCtl_getWatchdogResetStatus",
        "SysCtl_clearWatchdogResetStatus"
    ],
    "RESCCLR": [
        "SysCtl_clearResetCause",
        "SysCtl_clearWatchdogResetStatus"
    ],
    "CLKSRCCTL3": [
        "SysCtl_selectClockOutSource"
    ],
    "LPMCR": [
        "SysCtl_enterIdleMode",
        "SysCtl_enterStandbyMode",
        "SysCtl_enterHaltMode",
        "SysCtl_setStandbyQualificationPeriod",
        "SysCtl_enableWatchdogStandbyWakeup",
        "SysCtl_disableWatchdogStandbyWakeup"
    ],
    "GPIOLPMSEL0": [
        "SysCtl_enableLPMWakeupPin",
        "SysCtl_disableLPMWakeupPin"
    ],
    "GPIOLPMSEL1": [
        "SysCtl_enableLPMWakeupPin",
        "SysCtl_disableLPMWakeupPin"
    ],
    "CMPSSLPMSEL": [
        "SysCtl_enableCMPSSLPMWakeupPin",
        "SysCtl_disableCMPSSLPMWakeupPin"
    ],
    "SCSR": [
        "SysCtl_setWatchdogMode",
        "SysCtl_isWatchdogInterruptActive",
        "SysCtl_clearWatchdogOverride"
    ],
    "WDKEY": [
        "SysCtl_serviceWatchdog",
        "SysCtl_enableWatchdogReset",
        "SysCtl_resetWatchdog"
    ],
    "WDCNTR": [
        "SysCtl_getWatchdogCounterValue"
    ],
    "WDWCR": [
        "SysCtl_setWatchdogWindowValue"
    ],
    "CFG": [
        "SysCtl_enableNMIGlobalInterrupt"
    ],
    "FLG": [
        "SysCtl_getNMIStatus",
        "SysCtl_getNMIFlagStatus",
        "SysCtl_isNMIFlagSet",
        "SysCtl_clearNMIStatus",
        "SysCtl_clearAllNMIFlags",
        "SysCtl_forceNMIFlags"
    ],
    "FLGCLR": [
        "SysCtl_clearNMIStatus",
        "SysCtl_clearAllNMIFlags"
    ],
    "FLGFRC": [
        "SysCtl_forceNMIFlags"
    ],
    "WDCNT": [
        "SysCtl_getNMIWatchdogCounter"
    ],
    "WDPRD": [
        "SysCtl_setNMIWatchdogPeriod",
        "SysCtl_getNMIWatchdogPeriod"
    ],
    "SHDFLG": [
        "SysCtl_getNMIShadowFlagStatus",
        "SysCtl_isNMIShadowFlagSet"
    ],
    "MCDCR": [
        "SysCtl_enableMCD",
        "SysCtl_disableMCD",
        "SysCtl_isMCDClockFailureDetected",
        "SysCtl_resetMCD",
        "SysCtl_connectMCDClockSource",
        "SysCtl_disconnectMCDClockSource"
    ],
    "SYNCSELECT": [
        "SysCtl_setSyncOutputConfig"
    ],
    "ADCSOCOUTSELECT": [
        "SysCtl_enableExtADCSOCSource",
        "SysCtl_disableExtADCSOCSource"
    ],
    "SYNCSOCLOCK": [
        "SysCtl_lockExtADCSOCSelect",
        "SysCtl_lockSyncSelect"
    ],
    "REVID": [
        "SysCtl_getDeviceRevision"
    ],
    "XCLKOUTDIVSEL": [
        "SysCtl_setXClk"
    ],
    "PIEVERRADDR": [
        "SysCtl_getPIEVErrAddr"
    ],
    "SIMRESET": [
        "SysCtl_simulateReset"
    ],
    "SYS_ERR_INT_FLG": [
        "SysCtl_getInterruptStatus"
    ],
    "SYS_ERR_INT_CLR": [
        "SysCtl_clearInterruptStatus"
    ],
    "SYS_ERR_INT_SET": [
        "SysCtl_setInterruptStatus"
    ],
    "SYS_ERR_MASK": [
        "SysCtl_getInterruptStatusMask",
        "SysCtl_setInterruptStatusMask"
    ],
    "ERRORSTS": [
        "SysCtl_isErrorTriggered",
        "SysCtl_getErrorPinStatus",
        "SysCtl_forceError",
        "SysCtl_clearError"
    ],
    "ERRORSTSFRC": [
        "SysCtl_forceError"
    ],
    "ERRORSTSCLR": [
        "SysCtl_clearError"
    ],
    "ERRORCTL": [
        "SysCtl_selectErrPinPolarity"
    ],
    "ERRORLOCK": [
        "SysCtl_lockErrControl"
    ],
    "USER_REG1_SYSRSN": [
        "SysCtl_setUserRegister",
        "SysCtl_getUserRegister"
    ],
    "UID_UNIQUE0": [
        "SysCtl_getDeviceUID0"
    ],
    "UID_UNIQUE1": [
        "SysCtl_getDeviceUID1"
    ],
    "TAP_STATUS": [
        "SysCtl_getTapStatus"
    ],
    "IBRD": [
        "UART_setConfig",
        "UART_getConfig"
    ],
    "FBRD": [
        "UART_setConfig",
        "UART_getConfig"
    ],
    "LCRH": [
        "UART_setConfig",
        "UART_getConfig",
        "UART_send9BitAddress",
        "UART_stop9BitDataMode",
        "UART_configure9BitDataMode",
        "UART_setParityMode",
        "UART_getParityMode",
        "UART_enableModule",
        "UART_disableModule",
        "UART_enableFIFO",
        "UART_disableFIFO",
        "UART_isFIFOEnabled",
        "UART_setBreakConfig"
    ],
    "CTL": [
        "UART_setConfig",
        "UART_getConfig",
        "UART_enableModule",
        "UART_disableModule",
        "UART_enableModuleNonFIFO",
        "UART_disableModuleNonFIFO",
        "UART_enableSIR",
        "UART_disableSIR",
        "UART_setTxIntMode",
        "UART_getTxIntMode",
        "UART_enableLoopback",
        "UART_disableLoopback"
    ],
    "DR": [
        "UART_writeCharNonBlocking",
        "UART_send9BitAddress",
        "UART_readCharNonBlocking",
        "UART_readChar",
        "UART_writeChar"
    ],
    "FR": [
        "UART_writeCharNonBlocking",
        "UART_send9BitAddress",
        "UART_stop9BitDataMode",
        "UART_configure9BitDataMode",
        "UART_disableModule",
        "UART_disableModuleNonFIFO",
        "UART_isDataAvailable",
        "UART_isSpaceAvailable",
        "UART_readCharNonBlocking",
        "UART_readChar",
        "UART_writeChar",
        "UART_isBusy"
    ],
    "IFLS": [
        "UART_setFIFOLevel",
        "UART_getFIFOLevel",
        "UART_setFIFOLevelFine",
        "UART_getFIFOLevelFine"
    ],
    "GLB_INT_CLR": [
        "UART_clearGlobalInterruptFlag"
    ],
    "GLB_INT_FLG": [
        "UART_getGlobalInterruptFlagStatus"
    ],
    "IM": [
        "UART_enableInterrupt",
        "UART_disableInterrupt"
    ],
    "RIS": [
        "UART_getInterruptStatus"
    ],
    "MIS": [
        "UART_getInterruptStatus"
    ],
    "ICR": [
        "UART_clearInterruptStatus"
    ],
    "DMACTL": [
        "UART_enableDMA",
        "UART_disableDMA"
    ],
    "RSR": [
        "UART_getRxError"
    ],
    "ECR": [
        "UART_clearRxError"
    ],
    "9BITADDR": [
        "UART_enable9Bit",
        "UART_disable9Bit",
        "UART_set9BitAddress"
    ],
    "9BITAMASK": [
        "UART_set9BitAddress"
    ],
    "ILPR": [
        "UART_setIrDALPDivisor"
    ],
    "OUTPUT1MUX0TO15CFG": [
        "XBAR_setOutputMuxConfig"
    ],
    "FLG1": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG2": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG3": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG4": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG5": [
        "XBAR_getInputFlagStatus"
    ],
    "CLR1": [
        "XBAR_clearInputFlag"
    ],
    "CLR2": [
        "XBAR_clearInputFlag"
    ],
    "CLR3": [
        "XBAR_clearInputFlag"
    ],
    "CLR4": [
        "XBAR_clearInputFlag"
    ],
    "CLR5": [
        "XBAR_clearInputFlag"
    ],
    "OUTPUT1MUXENABLE": [
        "XBAR_enableOutputMux",
        "XBAR_disableOutputMux"
    ],
    "OUTPUTLATCH": [
        "XBAR_setOutputLatchMode",
        "XBAR_getOutputLatchStatus",
        "XBAR_clearOutputLatch",
        "XBAR_forceOutputLatch"
    ],
    "OUTPUTLATCHENABLE": [
        "XBAR_setOutputLatchMode"
    ],
    "OUTPUTLATCHCLR": [
        "XBAR_clearOutputLatch"
    ],
    "OUTPUTLATCHFRC": [
        "XBAR_forceOutputLatch"
    ],
    "OUTPUTINV": [
        "XBAR_invertOutputSignal"
    ],
    "TRIPOUTINV": [
        "XBAR_invertPWMSignal"
    ],
    "INPUT1SELECT": [
        "XBAR_setInputPin"
    ],
    "INPUTSELECTLOCK": [
        "XBAR_lockInput"
    ],
    "OUTPUTLOCK": [
        "XBAR_lockOutput"
    ],
    "TRIPLOCK": [
        "XBAR_lockPWM"
    ]
}
module.exports = { 
  registerToFunction: REGISTER_TO_FUNCTION
}
