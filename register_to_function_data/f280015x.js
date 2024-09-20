let REGISTER_TO_FUNCTION = 
{
    "ANAREFCTL": [
        "ADC_setVREF",
        "ADC_setOffsetTrim",
        "ASysCtl_setAnalogReferenceInternal",
        "ASysCtl_setAnalogReferenceExternal",
        "ASysCtl_setAnalogReference2P5",
        "ASysCtl_setAnalogReference1P65"
    ],
    "ADCINLTRIM2": [
        "ADC_setINLTrim"
    ],
    "ADCOFFTRIM": [
        "ADC_setOffsetTrim",
        "ADC_setOffsetTrimAll"
    ],
    "ADCPPB1TRIPHI": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB2TRIPHI": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB3TRIPHI": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB4TRIPHI": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB1TRIPLO": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB2TRIPLO": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB3TRIPLO": [
        "ADC_setPPBTripLimits"
    ],
    "ADCPPB4TRIPLO": [
        "ADC_setPPBTripLimits"
    ],
    "ADCCTL2": [
        "ADC_setPrescaler"
    ],
    "ADCSOC0CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC1CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC2CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC3CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC4CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC5CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC6CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC7CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC8CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC9CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC10CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC11CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC12CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC13CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC14CTL": [
        "ADC_setupSOC"
    ],
    "ADCSOC15CTL": [
        "ADC_setupSOC"
    ],
    "ADCINTSOCSEL1": [
        "ADC_setInterruptSOCTrigger"
    ],
    "ADCINTSOCSEL2": [
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
    "ADCSOCFRC1": [
        "ADC_forceSOC",
        "ADC_forceMultipleSOC"
    ],
    "ADCINTFLG": [
        "ADC_getInterruptStatus",
        "ADC_clearInterruptStatus"
    ],
    "ADCINTFLGCLR": [
        "ADC_clearInterruptStatus"
    ],
    "ADCINTOVF": [
        "ADC_getInterruptOverflowStatus",
        "ADC_clearInterruptOverflowStatus"
    ],
    "ADCINTOVFCLR": [
        "ADC_clearInterruptOverflowStatus"
    ],
    "ADCRESULT0": [
        "ADC_readResult"
    ],
    "ADCRESULT1": [
        "ADC_readResult"
    ],
    "ADCRESULT2": [
        "ADC_readResult"
    ],
    "ADCRESULT3": [
        "ADC_readResult"
    ],
    "ADCRESULT4": [
        "ADC_readResult"
    ],
    "ADCRESULT5": [
        "ADC_readResult"
    ],
    "ADCRESULT6": [
        "ADC_readResult"
    ],
    "ADCRESULT7": [
        "ADC_readResult"
    ],
    "ADCRESULT8": [
        "ADC_readResult"
    ],
    "ADCRESULT9": [
        "ADC_readResult"
    ],
    "ADCRESULT10": [
        "ADC_readResult"
    ],
    "ADCRESULT11": [
        "ADC_readResult"
    ],
    "ADCRESULT12": [
        "ADC_readResult"
    ],
    "ADCRESULT13": [
        "ADC_readResult"
    ],
    "ADCRESULT14": [
        "ADC_readResult"
    ],
    "ADCRESULT15": [
        "ADC_readResult"
    ],
    "ADCBURSTCTL": [
        "ADC_setBurstModeConfig",
        "ADC_enableBurstMode",
        "ADC_disableBurstMode"
    ],
    "ADCSOCPRICTL": [
        "ADC_setSOCPriority"
    ],
    "ADCOSDETECT": [
        "ADC_configOSDetectMode"
    ],
    "ADCPPB1CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement"
    ],
    "ADCPPB2CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement"
    ],
    "ADCPPB3CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement"
    ],
    "ADCPPB4CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
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
    "ADCPPB1RESULT": [
        "ADC_readPPBResult"
    ],
    "ADCPPB2RESULT": [
        "ADC_readPPBResult"
    ],
    "ADCPPB3RESULT": [
        "ADC_readPPBResult"
    ],
    "ADCPPB4RESULT": [
        "ADC_readPPBResult"
    ],
    "ADCPPB1STAMP": [
        "ADC_getPPBDelayTimeStamp"
    ],
    "ADCPPB2STAMP": [
        "ADC_getPPBDelayTimeStamp"
    ],
    "ADCPPB3STAMP": [
        "ADC_getPPBDelayTimeStamp"
    ],
    "ADCPPB4STAMP": [
        "ADC_getPPBDelayTimeStamp"
    ],
    "ADCPPB1OFFCAL": [
        "ADC_setPPBCalibrationOffset"
    ],
    "ADCPPB2OFFCAL": [
        "ADC_setPPBCalibrationOffset"
    ],
    "ADCPPB3OFFCAL": [
        "ADC_setPPBCalibrationOffset"
    ],
    "ADCPPB4OFFCAL": [
        "ADC_setPPBCalibrationOffset"
    ],
    "ADCPPB1OFFREF": [
        "ADC_setPPBReferenceOffset"
    ],
    "ADCPPB2OFFREF": [
        "ADC_setPPBReferenceOffset"
    ],
    "ADCPPB3OFFREF": [
        "ADC_setPPBReferenceOffset"
    ],
    "ADCPPB4OFFREF": [
        "ADC_setPPBReferenceOffset"
    ],
    "ADCINTSEL1N2": [
        "ADC_enableInterrupt",
        "ADC_disableInterrupt",
        "ADC_setInterruptSource",
        "ADC_enableContinuousMode",
        "ADC_disableContinuousMode"
    ],
    "ADCINTSEL3N4": [
        "ADC_enableInterrupt",
        "ADC_disableInterrupt",
        "ADC_setInterruptSource",
        "ADC_enableContinuousMode",
        "ADC_disableContinuousMode"
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
        "ASysCtl_lockVREG",
        "ASysCtl_lockCMPSSCTL",
        "EPG_lockReg",
        "EPG_releaseLockReg",
        "EPWM_lockRegisters",
        "LCM_lockRegister",
        "LCM_unlockRegister"
    ],
    "EXTROSCCSR1": [
        "ASysCtl_getExtROscStatus",
        "SysCtl_setClock"
    ],
    "ADCDACLOOPBACK": [
        "ASysCtl_enableADCDACLoopback",
        "ASysCtl_disableADCDACLoopback"
    ],
    "CAN_CTL": [
        "CAN_initModule",
        "CAN_setBitTiming",
        "CAN_startModule",
        "CAN_enableController",
        "CAN_disableController",
        "CAN_enableTestMode",
        "CAN_disableTestMode",
        "CAN_setInterruptionDebugMode",
        "CAN_disableAutoBusOn",
        "CAN_enableAutoBusOn",
        "CAN_enableInterrupt",
        "CAN_disableInterrupt",
        "CAN_enableRetry",
        "CAN_disableRetry",
        "CAN_isRetryEnabled"
    ],
    "CAN_BTR": [
        "CAN_setBitTiming",
        "CAN_getBitTiming"
    ],
    "CAN_ES": [
        "CAN_clearInterruptStatus",
        "CAN_getStatus"
    ],
    "CAN_IF1CMD": [
        "CAN_clearInterruptStatus",
        "CAN_setupMessageObject",
        "CAN_sendMessage",
        "CAN_sendMessage_16bit",
        "CAN_sendMessage_32bit",
        "CAN_sendMessage_updateDLC",
        "CAN_sendRemoteRequestMessage",
        "CAN_transferMessage",
        "CAN_clearMessage",
        "CAN_disableMessageObject",
        "CAN_disableAllMessageObjects"
    ],
    "CAN_IF1MSK": [
        "CAN_setupMessageObject"
    ],
    "CAN_IF1ARB": [
        "CAN_setupMessageObject",
        "CAN_clearMessage",
        "CAN_disableMessageObject",
        "CAN_disableAllMessageObjects"
    ],
    "CAN_IF1MCTL": [
        "CAN_setupMessageObject",
        "CAN_sendMessage",
        "CAN_sendMessage_16bit",
        "CAN_sendMessage_32bit",
        "CAN_sendMessage_updateDLC",
        "CAN_sendRemoteRequestMessage"
    ],
    "CAN_IF1DATA": [
        "CAN_sendMessage",
        "CAN_sendMessage_16bit",
        "CAN_sendMessage_32bit",
        "CAN_sendMessage_updateDLC"
    ],
    "CAN_IF1DATB": [
        "CAN_sendMessage",
        "CAN_sendMessage_16bit",
        "CAN_sendMessage_32bit",
        "CAN_sendMessage_updateDLC"
    ],
    "CAN_IF2CMD": [
        "CAN_readMessage",
        "CAN_transferMessage"
    ],
    "CAN_IF2MCTL": [
        "CAN_readMessage"
    ],
    "CAN_IF2DATA": [
        "CAN_readMessage"
    ],
    "CAN_IF2DATB": [
        "CAN_readMessage"
    ],
    "CAN_IF2ARB": [
        "CAN_readMessageWithID"
    ],
    "CAN_RAM_INIT": [
        "CAN_initRAM"
    ],
    "CLKSRCCTL2": [
        "CAN_selectClockSource"
    ],
    "CAN_TEST": [
        "CAN_enableTestMode",
        "CAN_disableTestMode",
        "CAN_enableMemoryAccessMode",
        "CAN_disableMemoryAccessMode"
    ],
    "CAN_ABOTR": [
        "CAN_setAutoBusOnTime"
    ],
    "CAN_IP_MUX21": [
        "CAN_getInterruptMux",
        "CAN_setInterruptMux"
    ],
    "CAN_ERRC": [
        "CAN_getErrorCount"
    ],
    "CAN_TXRQ_21": [
        "CAN_getTxRequests"
    ],
    "CAN_NDAT_21": [
        "CAN_getNewDataFlags"
    ],
    "CAN_MVAL_21": [
        "CAN_getValidMessageObjects"
    ],
    "CAN_INT": [
        "CAN_getInterruptCause"
    ],
    "CAN_IPEN_21": [
        "CAN_getInterruptMessageSource"
    ],
    "CAN_GLB_INT_EN": [
        "CAN_enableGlobalInterrupt",
        "CAN_disableGlobalInterrupt"
    ],
    "CAN_GLB_INT_CLR": [
        "CAN_clearGlobalInterruptStatus"
    ],
    "CAN_GLB_INT_FLG": [
        "CAN_getGlobalInterruptStatus"
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
    "COMPDACHCTL": [
        "CMPSS_configRamp",
        "CMPSS_configRampHigh",
        "CMPSS_configRampLow",
        "CMPSS_configDAC",
        "CMPSS_configDACHigh",
        "CMPSS_setRampDirectionHigh",
        "CMPSS_configureRampXTriggerHigh",
        "CMPSS_configureSyncSourceHigh",
        "CMPSS_configBlanking",
        "CMPSS_enableBlanking",
        "CMPSS_disableBlanking",
        "CMPSS_configBlankingSourceHigh",
        "CMPSS_enableBlankingHigh",
        "CMPSS_disableBlankingHigh",
        "staticinlinevoidCMPSSLITE_configDAC",
        "staticinlinevoidCMPSSLITE_configDACHigh"
    ],
    "RAMPHREFS": [
        "CMPSS_configRamp",
        "CMPSS_setMaxRampValue",
        "CMPSS_setRampReferenceHigh"
    ],
    "RAMPHSTEPVALS": [
        "CMPSS_configRamp",
        "CMPSS_setRampDecValue",
        "CMPSS_setRampStepHigh"
    ],
    "RAMPHDLYS": [
        "CMPSS_configRamp",
        "CMPSS_setRampDelayValue",
        "CMPSS_setRampDelayHigh"
    ],
    "COMPCTL": [
        "CMPSS_enableModule",
        "CMPSS_disableModule",
        "CMPSS_configHighComparator",
        "CMPSS_configLowComparator",
        "CMPSS_configOutputsHigh",
        "CMPSS_configOutputsLow"
    ],
    "COMPDACLCTL": [
        "CMPSS_configDACLow",
        "CMPSS_setRampDirectionLow",
        "CMPSS_configureSyncSourceLow",
        "CMPSS_configBlankingSourceLow",
        "CMPSS_enableBlankingLow",
        "CMPSS_disableBlankingLow"
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
    "RAMPHREFA": [
        "CMPSS_getMaxRampValue",
        "CMPSS_getRampReferenceHigh"
    ],
    "RAMPHSTEPVALA": [
        "CMPSS_getRampDecValue",
        "CMPSS_getRampStepHigh"
    ],
    "RAMPHDLYA": [
        "CMPSS_getRampDelayValue",
        "CMPSS_getRampDelayHigh"
    ],
    "RAMPLREFS": [
        "CMPSS_setRampReferenceLow"
    ],
    "RAMPLREFA": [
        "CMPSS_getRampReferenceLow"
    ],
    "RAMPLSTEPVALS": [
        "CMPSS_setRampStepLow"
    ],
    "RAMPLSTEPVALA": [
        "CMPSS_getRampStepLow"
    ],
    "RAMPLDLYS": [
        "CMPSS_setRampDelayLow"
    ],
    "RAMPLDLYA": [
        "CMPSS_getRampDelayLow"
    ],
    "COMPDACHCTL2": [
        "CMPSS_configureRampXTriggerHigh"
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
    "Z1_EXEONLYSECT2R": [
        "DCSM_getZone1FlashEXEStatus"
    ],
    "Z1_EXEONLYRAM1R": [
        "DCSM_getZone1RAMEXEStatus"
    ],
    "Z2_EXEONLYSECT1R": [
        "DCSM_getZone2FlashEXEStatus"
    ],
    "Z2_EXEONLYSECT2R": [
        "DCSM_getZone2FlashEXEStatus"
    ],
    "Z2_EXEONLYRAM1R": [
        "DCSM_getZone2RAMEXEStatus"
    ],
    "FLSEM": [
        "DCSM_claimZoneSemaphore",
        "DCSM_releaseZoneSemaphore"
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
    "RAMSTAT1": [
        "DCSM_getRAMZone"
    ],
    "SECTSTAT1": [
        "DCSM_getFlashSectorZone"
    ],
    "SECTSTAT2": [
        "DCSM_getFlashSectorZone"
    ],
    "SECTSTAT3": [
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
    "RAMOPENSTAT": [
        "DCSM_getRAMOpenStatus"
    ],
    "RAMOPENFRC": [
        "DCSM_forceRAMOpenStatus"
    ],
    "RAMOPENCLR": [
        "DCSM_clearRAMOpenStatus"
    ],
    "RAMOPENLOCK": [
        "DCSM_setRAMOpenLockStatus"
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
        "ECAP_setSyncInPulseSource",
        "EPWM_setSyncInPulseSource"
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
    "MXSEL0": [
        "EPG_selectEPGDataOut"
    ],
    "GCTL0": [
        "EPG_enableGlobal",
        "EPG_disableGlobal",
        "EPG_selectEPGOutput"
    ],
    "GCTL3": [
        "EPG_selectSignalOutput"
    ],
    "GCTL2": [
        "EPG_selectClkOutput"
    ],
    "GCTL1": [
        "EPG_selectSigGenClkSource"
    ],
    "CLKDIV0_CTL0": [
        "EPG_setClkGenPeriod",
        "EPG_setClkGenStopEdge"
    ],
    "CLKDIV1_CTL0": [
        "EPG_setClkGenPeriod",
        "EPG_setClkGenStopEdge"
    ],
    "CLKDIV0_CLKOFFSET": [
        "EPG_setClkGenOffset"
    ],
    "CLKDIV1_CLKOFFSET": [
        "EPG_setClkGenOffset"
    ],
    "SIGGEN0_CTL0": [
        "EPG_enableSignalGen",
        "EPG_disableSignalGen",
        "EPG_setSignalGenMode",
        "EPG_enableBitRevOnDataIn",
        "EPG_disableBitRevOnDataIn",
        "EPG_enableBitRevOnDataOut",
        "EPG_disableBitRevOnDataOut",
        "EPG_setDataBitLen"
    ],
    "SIGGEN0_CTL1": [
        "EPG_setData0In",
        "EPG_setData63In"
    ],
    "SIGGEN0_DATA0": [
        "EPG_setData0Word",
        "EPG_getData0ActiveReg"
    ],
    "SIGGEN0_DATA1": [
        "EPG_setData1Word",
        "EPG_getData1ActiveReg"
    ],
    "SIGGEN0_DATA0_ACTIVE": [
        "EPG_getData0ActiveReg"
    ],
    "SIGGEN0_DATA1_ACTIVE": [
        "EPG_getData1ActiveReg"
    ],
    "GINTEN": [
        "EPG_enableInterruptFlag",
        "EPG_disableInterruptFlag"
    ],
    "GINTSTS": [
        "EPG_getInterruptStatus"
    ],
    "GINTCLR": [
        "EPG_clearInterruptFlag"
    ],
    "GINTFRC": [
        "EPG_forceInterruptFlag"
    ],
    "COMMIT": [
        "EPG_commitRegLock",
        "LCM_commitRegister"
    ],
    "MXSELLOCK": [
        "EPG_lockMXSelReg",
        "EPG_releaseLockMXSelReg"
    ],
    "MXSELCOMMIT": [
        "EPG_commitMXSelRegLock"
    ],
    "TBCTL": [
        "EPWM_setEmulationMode",
        "EPWM_setCountModeAfterSync",
        "EPWM_setClockPrescaler",
        "EPWM_forceSyncPulse",
        "EPWM_setOneShotSyncOutTrigger",
        "EPWM_setPeriodLoadMode",
        "EPWM_enablePhaseShiftLoad",
        "EPWM_disablePhaseShiftLoad",
        "EPWM_setTimeBaseCounterMode",
        "EPWM_selectPeriodLoadEvent",
        "EPWM_enableOneShotSync",
        "EPWM_disableOneShotSync",
        "EPWM_startOneShotSync"
    ],
    "TBCTR": [
        "EPWM_setTimeBaseCounter",
        "EPWM_getTimeBaseCounterValue"
    ],
    "SYNCOUTEN": [
        "EPWM_enableSyncOutPulseSource",
        "EPWM_disableSyncOutPulseSource"
    ],
    "TBCTL3": [
        "EPWM_setOneShotSyncOutTrigger"
    ],
    "TBCTL2": [
        "EPWM_selectPeriodLoadEvent",
        "EPWM_enableOneShotSync",
        "EPWM_disableOneShotSync",
        "EPWM_startOneShotSync"
    ],
    "TBSTS": [
        "EPWM_getTimeBaseCounterOverflowStatus",
        "EPWM_clearTimeBaseCounterOverflowEvent",
        "EPWM_getSyncStatus",
        "EPWM_clearSyncEvent",
        "EPWM_getTimeBaseCounterDirection"
    ],
    "TBPHS": [
        "EPWM_setPhaseShift",
        "HRPWM_setPhaseShift",
        "HRPWM_setHiResPhaseShiftOnly"
    ],
    "TBPRD": [
        "EPWM_setTimeBasePeriod",
        "EPWM_getTimeBasePeriod",
        "HRPWM_setTimeBasePeriod",
        "HRPWM_setHiResTimeBasePeriodOnly",
        "HRPWM_getTimeBasePeriod",
        "HRPWM_getHiResTimeBasePeriodOnly"
    ],
    "XLINK": [
        "EPWM_setupEPWMLinks"
    ],
    "CMPCTL": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode",
        "EPWM_getCounterCompareShadowStatus"
    ],
    "CMPCTL2": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode"
    ],
    "CMPC": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode",
        "EPWM_getCounterCompareShadowStatus"
    ],
    "CMPD": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode",
        "EPWM_getCounterCompareShadowStatus"
    ],
    "CMPA": [
        "EPWM_setCounterCompareValue",
        "EPWM_getCounterCompareValue",
        "HRPWM_setCounterCompareValue",
        "HRPWM_setHiResCounterCompareValueOnly",
        "HRPWM_getCounterCompareValue",
        "HRPWM_getHiResCounterCompareValueOnly"
    ],
    "CMPB": [
        "EPWM_setCounterCompareValue",
        "EPWM_getCounterCompareValue",
        "HRPWM_setCounterCompareValue",
        "HRPWM_setHiResCounterCompareValueOnly",
        "HRPWM_getCounterCompareValue",
        "HRPWM_getHiResCounterCompareValueOnly"
    ],
    "AQCTL": [
        "EPWM_setActionQualifierShadowLoadMode",
        "EPWM_disableActionQualifierShadowLoadMode",
        "EPWM_setActionQualifierAction",
        "EPWM_setActionQualifierActionComplete",
        "EPWM_setAdditionalActionQualifierActionComplete"
    ],
    "AQTSRCSEL": [
        "EPWM_setActionQualifierT1TriggerSource",
        "EPWM_setActionQualifierT2TriggerSource"
    ],
    "AQCTLA": [
        "EPWM_setActionQualifierAction",
        "EPWM_setActionQualifierActionComplete",
        "EPWM_setAdditionalActionQualifierActionComplete"
    ],
    "AQCTLB": [
        "EPWM_setActionQualifierAction",
        "EPWM_setActionQualifierActionComplete",
        "EPWM_setAdditionalActionQualifierActionComplete"
    ],
    "AQCTLA2": [
        "EPWM_setActionQualifierAction",
        "EPWM_setAdditionalActionQualifierActionComplete"
    ],
    "AQCTLB2": [
        "EPWM_setActionQualifierAction",
        "EPWM_setAdditionalActionQualifierActionComplete"
    ],
    "AQSFRC": [
        "EPWM_setActionQualifierContSWForceShadowMode",
        "EPWM_setActionQualifierSWAction",
        "EPWM_forceActionQualifierSWAction"
    ],
    "AQCSFRC": [
        "EPWM_setActionQualifierContSWForceAction"
    ],
    "DBCTL": [
        "EPWM_setDeadBandOutputSwapMode",
        "EPWM_setDeadBandDelayMode",
        "EPWM_setDeadBandDelayPolarity",
        "EPWM_setRisingEdgeDeadBandDelayInput",
        "EPWM_setFallingEdgeDeadBandDelayInput",
        "EPWM_setDeadBandControlShadowLoadMode",
        "EPWM_disableDeadBandControlShadowLoadMode",
        "EPWM_setRisingEdgeDelayCountShadowLoadMode",
        "EPWM_disableRisingEdgeDelayCountShadowLoadMode",
        "EPWM_setFallingEdgeDelayCountShadowLoadMode",
        "EPWM_disableFallingEdgeDelayCountShadowLoadMode",
        "EPWM_setDeadBandCounterClock"
    ],
    "DBCTL2": [
        "EPWM_setDeadBandControlShadowLoadMode",
        "EPWM_disableDeadBandControlShadowLoadMode"
    ],
    "DBRED": [
        "EPWM_setRisingEdgeDelayCount",
        "HRPWM_setRisingEdgeDelay",
        "HRPWM_setHiResRisingEdgeDelayOnly"
    ],
    "DBFED": [
        "EPWM_setFallingEdgeDelayCount",
        "HRPWM_setFallingEdgeDelay",
        "HRPWM_setHiResFallingEdgeDelayOnly"
    ],
    "PCCTL": [
        "EPWM_enableChopper",
        "EPWM_disableChopper",
        "EPWM_setChopperDutyCycle",
        "EPWM_setChopperFreq",
        "EPWM_setChopperFirstPulseWidth"
    ],
    "TZSEL": [
        "EPWM_enableTripZoneSignals",
        "EPWM_disableTripZoneSignals"
    ],
    "TZDCSEL": [
        "EPWM_setTripZoneDigitalCompareEventCondition"
    ],
    "TZCTL": [
        "EPWM_enableTripZoneAdvAction",
        "EPWM_disableTripZoneAdvAction",
        "EPWM_setTripZoneAction",
        "EPWM_setTripZoneAdvAction",
        "EPWM_setTripZoneAdvDigitalCompareActionA",
        "EPWM_setTripZoneAdvDigitalCompareActionB"
    ],
    "TZCTL2": [
        "EPWM_enableTripZoneAdvAction",
        "EPWM_disableTripZoneAdvAction",
        "EPWM_setTripZoneAdvAction",
        "EPWM_setTripZoneAdvDigitalCompareActionA",
        "EPWM_setTripZoneAdvDigitalCompareActionB"
    ],
    "TZCTLDCA": [
        "EPWM_setTripZoneAdvDigitalCompareActionA"
    ],
    "TZCTLDCB": [
        "EPWM_setTripZoneAdvDigitalCompareActionB"
    ],
    "TZEINT": [
        "EPWM_enableTripZoneInterrupt",
        "EPWM_disableTripZoneInterrupt"
    ],
    "TZFLG": [
        "EPWM_getTripZoneFlagStatus"
    ],
    "TZCBCFLG": [
        "EPWM_getCycleByCycleTripZoneFlagStatus"
    ],
    "TZOSTFLG": [
        "EPWM_getOneShotTripZoneFlagStatus"
    ],
    "TZCLR": [
        "EPWM_selectCycleByCycleTripZoneClearEvent",
        "EPWM_clearTripZoneFlag"
    ],
    "TZCBCCLR": [
        "EPWM_clearCycleByCycleTripZoneFlag"
    ],
    "TZOSTCLR": [
        "EPWM_clearOneShotTripZoneFlag"
    ],
    "TZFRC": [
        "EPWM_forceTripZoneEvent"
    ],
    "ETSEL": [
        "EPWM_enableInterrupt",
        "EPWM_disableInterrupt",
        "EPWM_setInterruptSource",
        "EPWM_enableADCTrigger",
        "EPWM_disableADCTrigger",
        "EPWM_setADCTriggerSource"
    ],
    "ETPS": [
        "EPWM_setInterruptEventCount",
        "EPWM_setADCTriggerEventPrescale"
    ],
    "ETINTPS": [
        "EPWM_setInterruptEventCount",
        "EPWM_getInterruptEventCount"
    ],
    "ETFLG": [
        "EPWM_getEventTriggerInterruptStatus",
        "EPWM_getADCTriggerFlagStatus"
    ],
    "ETCLR": [
        "EPWM_clearEventTriggerInterruptFlag",
        "EPWM_clearADCTriggerFlag"
    ],
    "ETCNTINITCTL": [
        "EPWM_enableInterruptEventCountInit",
        "EPWM_disableInterruptEventCountInit",
        "EPWM_forceInterruptEventCountInit",
        "EPWM_enableADCTriggerEventCountInit",
        "EPWM_disableADCTriggerEventCountInit",
        "EPWM_forceADCTriggerEventCountInit"
    ],
    "ETCNTINIT": [
        "EPWM_enableInterruptEventCountInit",
        "EPWM_disableInterruptEventCountInit",
        "EPWM_forceInterruptEventCountInit",
        "EPWM_setInterruptEventCountInitValue",
        "EPWM_enableADCTriggerEventCountInit",
        "EPWM_disableADCTriggerEventCountInit",
        "EPWM_forceADCTriggerEventCountInit",
        "EPWM_setADCTriggerEventCountInitValue"
    ],
    "ETFRC": [
        "EPWM_forceEventTriggerInterrupt",
        "EPWM_forceADCTrigger"
    ],
    "ETSOCPS": [
        "EPWM_setADCTriggerEventPrescale",
        "EPWM_getADCTriggerEventCount"
    ],
    "DCTRIPSEL": [
        "EPWM_selectDigitalCompareTripInput",
        "EPWM_enableDigitalCompareTripCombinationInput"
    ],
    "DCFCTL": [
        "EPWM_enableDigitalCompareBlankingWindow",
        "EPWM_disableDigitalCompareBlankingWindow",
        "EPWM_enableDigitalCompareWindowInverseMode",
        "EPWM_disableDigitalCompareWindowInverseMode",
        "EPWM_setDigitalCompareBlankingEvent",
        "EPWM_setDigitalCompareFilterInput",
        "EPWM_enableDigitalCompareEdgeFilter",
        "EPWM_disableDigitalCompareEdgeFilter",
        "EPWM_setDigitalCompareEdgeFilterMode",
        "EPWM_setDigitalCompareEdgeFilterEdgeCount",
        "EPWM_getDigitalCompareEdgeFilterEdgeCount",
        "EPWM_getDigitalCompareEdgeFilterEdgeStatus"
    ],
    "DCFOFFSET": [
        "EPWM_setDigitalCompareWindowOffset",
        "EPWM_getDigitalCompareBlankingWindowOffsetCount"
    ],
    "DCFWINDOW": [
        "EPWM_setDigitalCompareWindowLength",
        "EPWM_getDigitalCompareBlankingWindowLengthCount"
    ],
    "DCFOFFSETCNT": [
        "EPWM_getDigitalCompareBlankingWindowOffsetCount"
    ],
    "DCFWINDOWCNT": [
        "EPWM_getDigitalCompareBlankingWindowLengthCount"
    ],
    "DCACTL": [
        "EPWM_setDigitalCompareEventSource",
        "EPWM_setDigitalCompareEventSyncMode",
        "EPWM_enableDigitalCompareADCTrigger",
        "EPWM_disableDigitalCompareADCTrigger",
        "EPWM_enableDigitalCompareSyncEvent",
        "EPWM_disableDigitalCompareSyncEvent",
        "EPWM_setDigitalCompareCBCLatchMode",
        "EPWM_selectDigitalCompareCBCLatchClearEvent",
        "EPWM_getDigitalCompareCBCLatchStatus"
    ],
    "DCBCTL": [
        "EPWM_setDigitalCompareEventSource",
        "EPWM_setDigitalCompareEventSyncMode",
        "EPWM_enableDigitalCompareADCTrigger",
        "EPWM_disableDigitalCompareADCTrigger",
        "EPWM_enableDigitalCompareSyncEvent",
        "EPWM_disableDigitalCompareSyncEvent",
        "EPWM_setDigitalCompareCBCLatchMode",
        "EPWM_selectDigitalCompareCBCLatchClearEvent",
        "EPWM_getDigitalCompareCBCLatchStatus"
    ],
    "DCCAPCTL": [
        "EPWM_enableDigitalCompareCounterCapture",
        "EPWM_disableDigitalCompareCounterCapture",
        "EPWM_setDigitalCompareCounterShadowMode",
        "EPWM_getDigitalCompareCaptureStatus",
        "EPWM_clearDigitalCompareCaptureStatusFlag",
        "EPWM_configureDigitalCompareCounterCaptureMode"
    ],
    "DCCAP": [
        "EPWM_enableDigitalCompareCounterCapture",
        "EPWM_disableDigitalCompareCounterCapture",
        "EPWM_setDigitalCompareCounterShadowMode",
        "EPWM_getDigitalCompareCaptureStatus",
        "EPWM_clearDigitalCompareCaptureStatusFlag",
        "EPWM_configureDigitalCompareCounterCaptureMode",
        "EPWM_getDigitalCompareCaptureCount"
    ],
    "DCAHTRIPSEL": [
        "EPWM_enableDigitalCompareTripCombinationInput",
        "EPWM_disableDigitalCompareTripCombinationInput"
    ],
    "DCALTRIPSEL": [
        "EPWM_enableDigitalCompareTripCombinationInput",
        "EPWM_disableDigitalCompareTripCombinationInput"
    ],
    "DCBHTRIPSEL": [
        "EPWM_enableDigitalCompareTripCombinationInput",
        "EPWM_disableDigitalCompareTripCombinationInput"
    ],
    "DCBLTRIPSEL": [
        "EPWM_enableDigitalCompareTripCombinationInput",
        "EPWM_disableDigitalCompareTripCombinationInput"
    ],
    "VCAPCTL": [
        "EPWM_enableValleyCapture",
        "EPWM_disableValleyCapture",
        "EPWM_startValleyCapture",
        "EPWM_setValleyTriggerSource",
        "EPWM_enableValleyHWDelay",
        "EPWM_disableValleyHWDelay",
        "EPWM_setValleyDelayDivider"
    ],
    "VCNTCFG": [
        "EPWM_setValleyTriggerEdgeCounts",
        "EPWM_getValleyEdgeStatus"
    ],
    "SWVDELVAL": [
        "EPWM_setValleySWDelayValue"
    ],
    "VCNTVAL": [
        "EPWM_getValleyCount"
    ],
    "HWVDELVAL": [
        "EPWM_getValleyHWDelay"
    ],
    "GLDCTL": [
        "EPWM_enableGlobalLoad",
        "EPWM_disableGlobalLoad",
        "EPWM_setGlobalLoadTrigger",
        "EPWM_setGlobalLoadEventPrescale",
        "EPWM_getGlobalLoadEventCount",
        "EPWM_disableGlobalLoadOneShotMode",
        "EPWM_enableGlobalLoadOneShotMode",
        "EPWM_setGlobalLoadOneShotLatch",
        "EPWM_forceGlobalLoadOneShotEvent"
    ],
    "GLDCTL2": [
        "EPWM_setGlobalLoadOneShotLatch",
        "EPWM_forceGlobalLoadOneShotEvent"
    ],
    "GLDCFG": [
        "EPWM_enableGlobalLoadRegisters",
        "EPWM_disableGlobalLoadRegisters"
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
        "GPIO_getDirectionMode"
    ],
    "GPBDIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
    ],
    "GPHDIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
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
    "GPBPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPHPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPAINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPBINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPHINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPAODR": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPBODR": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPHODR": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPAQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPAQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPBQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPBQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPHQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPHQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPACTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPBCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPHCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "AGPIOCTRLA": [
        "GPIO_setAnalogMode"
    ],
    "GPAMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPAMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPBMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPBMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPHMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPHMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPAGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPAGMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPBGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPBGMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPHGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPHGMUX2": [
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
    "GPBDAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPHDAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPASET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPBSET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPHSET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPACLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPBCLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPHCLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPATOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPBTOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPHTOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPALOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPBLOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPHLOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPACR": [
        "GPIO_commitPortConfig"
    ],
    "GPBCR": [
        "GPIO_commitPortConfig"
    ],
    "GPHCR": [
        "GPIO_commitPortConfig"
    ],
    "TBPRDHR": [
        "HRPWM_setTimeBasePeriod",
        "HRPWM_setHiResTimeBasePeriodOnly",
        "HRPWM_getTimeBasePeriod",
        "HRPWM_getHiResTimeBasePeriodOnly"
    ],
    "HRCNFG": [
        "HRPWM_setMEPEdgeSelect",
        "HRPWM_setMEPControlMode",
        "HRPWM_setCounterCompareShadowLoadEvent",
        "HRPWM_setOutputSwapMode",
        "HRPWM_setChannelBOutputPath",
        "HRPWM_enableAutoConversion",
        "HRPWM_disableAutoConversion",
        "HRPWM_setDeadbandMEPEdgeSelect",
        "HRPWM_setRisingEdgeDelayLoadMode",
        "HRPWM_setFallingEdgeDelayLoadMode"
    ],
    "HRPCTL": [
        "HRPWM_enablePeriodControl",
        "HRPWM_disablePeriodControl",
        "HRPWM_enablePhaseShiftLoad",
        "HRPWM_disablePhaseShiftLoad",
        "HRPWM_setSyncPulseSource"
    ],
    "TRREM": [
        "HRPWM_setTranslatorRemainder"
    ],
    "DBREDHR": [
        "HRPWM_setRisingEdgeDelay",
        "HRPWM_setHiResRisingEdgeDelayOnly"
    ],
    "DBFEDHR": [
        "HRPWM_setFallingEdgeDelay",
        "HRPWM_setHiResFallingEdgeDelayOnly"
    ],
    "HRMSTEP": [
        "HRPWM_setMEPStep"
    ],
    "HRCNFG2": [
        "HRPWM_setDeadbandMEPEdgeSelect",
        "HRPWM_setRisingEdgeDelayLoadMode",
        "HRPWM_setFallingEdgeDelayLoadMode"
    ],
    "EPWMLOCK": [
        "HRPWM_lockRegisters"
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
        "I2C_setExtendedMode"
    ],
    "CTRL": [
        "Interrupt_initModule",
        "Interrupt_defaultHandler",
        "Interrupt_enablePIE",
        "Interrupt_disablePIE"
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
    "CONTROL": [
        "LCM_runSelfTest",
        "LCM_runComp1ErrorForceTest",
        "LCM_runComp2ErrorForceTest",
        "LCM_enableLockstepCompare",
        "LCM_disableLockstepCompare"
    ],
    "STATUS": [
        "LCM_runSelfTest",
        "LCM_runComp1ErrorForceTest",
        "LCM_runComp2ErrorForceTest",
        "LCM_isLockStepEnabled",
        "LCM_isDebuggerConnected",
        "LCM_getLockStepCompareStatus",
        "LCM_getSelfTestStatus",
        "LCM_getComp1ErrForceTestStatus",
        "LCM_getComp2ErrForceTestStatus",
        "LCM_clearFlags"
    ],
    "STATUS_CLEAR": [
        "LCM_runSelfTest",
        "LCM_runComp1ErrorForceTest",
        "LCM_runComp2ErrorForceTest",
        "LCM_clearFlags"
    ],
    "PARITY_TEST": [
        "LCM_enableParityTest",
        "LCM_disableParityTest"
    ],
    "SCIFORMAT": [
        "LIN_sendData",
        "LIN_getData",
        "LIN_setFrameLength",
        "LIN_setSCICharLength",
        "LIN_setSCIFrameLength"
    ],
    "TD0": [
        "LIN_sendData",
        "LIN_sendWakeupSignal"
    ],
    "RD0": [
        "LIN_getData"
    ],
    "SCIGCR1": [
        "LIN_setLINMode",
        "LIN_setMessageFiltering",
        "LIN_enableParity",
        "LIN_disableParity",
        "LIN_setCommMode",
        "LIN_enableAutomaticBaudrate",
        "LIN_disableAutomaticBaudrate",
        "LIN_stopExtendedFrame",
        "LIN_setChecksumType",
        "LIN_enableSCIMode",
        "LIN_disableSCIMode",
        "LIN_setSCICommMode",
        "LIN_enableSCIParity",
        "LIN_disableSCIParity",
        "LIN_setSCIStopBits",
        "LIN_enableSCISleepMode",
        "LIN_disableSCISleepMode",
        "LIN_enterSCILowPower",
        "LIN_exitSCILowPower",
        "LIN_setSCICharLength",
        "LIN_setSCIFrameLength",
        "LIN_isSCIDataAvailable",
        "LIN_isSCISpaceAvailable",
        "LIN_readSCICharNonBlocking",
        "LIN_readSCICharBlocking",
        "LIN_writeSCICharNonBlocking",
        "LIN_writeSCICharBlocking",
        "LIN_enableSCIModuleErrors",
        "LIN_disableSCIModuleErrors",
        "LIN_enableSCIInterrupt",
        "LIN_disableSCIInterrupt",
        "LIN_clearSCIInterruptStatus",
        "LIN_setSCIInterruptLevel0",
        "LIN_setSCIInterruptLevel1",
        "LIN_isSCIReceiverIdle",
        "LIN_getSCITxFrameType",
        "LIN_getSCIRxFrameType",
        "LIN_isSCIBreakDetected",
        "LIN_enableDataTransmitter",
        "LIN_disableDataTransmitter",
        "LIN_enableDataReceiver",
        "LIN_disableDataReceiver",
        "LIN_performSoftwareReset",
        "LIN_enterSoftwareReset",
        "LIN_exitSoftwareReset",
        "LIN_enableIntLoopback",
        "LIN_disableIntLoopback",
        "LIN_enableMultibufferMode",
        "LIN_disableMultibufferMode",
        "LIN_setDebugSuspendMode"
    ],
    "MBRSR": [
        "LIN_setMaximumBaudRate"
    ],
    "ID": [
        "LIN_setIDByte",
        "LIN_setIDResponderTask",
        "LIN_getRxIdentifier"
    ],
    "SCIGCR2": [
        "LIN_sendWakeupSignal",
        "LIN_enterSleep",
        "LIN_sendChecksum",
        "LIN_triggerChecksumCompare",
        "LIN_enterSCILowPower",
        "LIN_exitSCILowPower"
    ],
    "SCIFLR": [
        "LIN_isTxReady",
        "LIN_isRxReady",
        "LIN_isTxMatch",
        "LIN_isRxMatch",
        "LIN_clearInterruptStatus",
        "LIN_isSCIDataAvailable",
        "LIN_isSCISpaceAvailable",
        "LIN_clearSCIInterruptStatus",
        "LIN_isSCIReceiverIdle",
        "LIN_getSCITxFrameType",
        "LIN_getSCIRxFrameType",
        "LIN_isSCIBreakDetected",
        "LIN_isBusBusy",
        "LIN_isTxBufferEmpty",
        "LIN_getInterruptStatus"
    ],
    "MASK": [
        "LIN_setTxMask",
        "LIN_setRxMask",
        "LIN_getTxMask",
        "LIN_getRxMask"
    ],
    "SCISETINT": [
        "LIN_enableInterrupt",
        "LIN_setInterruptLevel1",
        "LIN_enableSCIInterrupt",
        "LIN_setSCIInterruptLevel1",
        "LIN_getInterruptLevel"
    ],
    "SCICLEARINT": [
        "LIN_disableInterrupt",
        "LIN_setInterruptLevel0",
        "LIN_disableSCIInterrupt",
        "LIN_setSCIInterruptLevel0"
    ],
    "SCICLEARINTLVL": [
        "LIN_setInterruptLevel0",
        "LIN_setSCIInterruptLevel0"
    ],
    "SCISETINTLVL": [
        "LIN_setInterruptLevel1",
        "LIN_setSCIInterruptLevel1",
        "LIN_getInterruptLevel"
    ],
    "IODFTCTRL": [
        "LIN_enableModuleErrors",
        "LIN_disableModuleErrors",
        "LIN_enableSCIModuleErrors",
        "LIN_disableSCIModuleErrors",
        "LIN_enableExtLoopback",
        "LIN_disableExtLoopback",
        "LIN_setTransmitDelay",
        "LIN_setPinSampleMask"
    ],
    "COMP": [
        "LIN_setSyncFields"
    ],
    "SCIED": [
        "LIN_readSCICharNonBlocking",
        "LIN_readSCICharBlocking"
    ],
    "SCIRD": [
        "LIN_readSCICharNonBlocking",
        "LIN_readSCICharBlocking"
    ],
    "SCITD": [
        "LIN_writeSCICharNonBlocking",
        "LIN_writeSCICharBlocking"
    ],
    "SCIGCR0": [
        "LIN_enableModule",
        "LIN_disableModule"
    ],
    "SCIPIO0": [
        "LIN_enableModule",
        "LIN_disableModule"
    ],
    "BRSR": [
        "LIN_setBaudRatePrescaler"
    ],
    "SCIINTVECT0": [
        "LIN_getInterruptLine0Offset"
    ],
    "SCIINTVECT1": [
        "LIN_getInterruptLine1Offset"
    ],
    "GLB_INT_EN": [
        "LIN_enableGlobalInterrupt",
        "LIN_disableGlobalInterrupt"
    ],
    "GLB_INT_CLR": [
        "LIN_clearGlobalInterruptStatus"
    ],
    "GLB_INT_FLG": [
        "LIN_getGlobalInterruptStatus"
    ],
    "SCIPIO2": [
        "LIN_getPinStatus"
    ],
    "DXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "LSXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "DXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "LSXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "DXACCPROT0": [
        "MemCfg_setProtection"
    ],
    "LSXACCPROT0": [
        "MemCfg_setProtection"
    ],
    "DXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "LSXRAMTEST_LOCK": [
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
    "LSXTEST": [
        "MemCfg_setTestMode"
    ],
    "ROM_TEST": [
        "MemCfg_setTestMode"
    ],
    "DXINIT": [
        "MemCfg_initSections",
        "MemCfg_getInitStatus"
    ],
    "LSXINIT": [
        "MemCfg_initSections",
        "MemCfg_getInitStatus"
    ],
    "DXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "LSXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "MCPUFAVADDR": [
        "MemCfg_getViolationAddress"
    ],
    "MCPUWRAVADDR": [
        "MemCfg_getViolationAddress"
    ],
    "CCPUREADDR": [
        "MemCfg_getCorrErrorAddress"
    ],
    "UCCPUREADDR": [
        "MemCfg_getUncorrErrorAddress"
    ],
    "ROM_FORCE_ERROR": [
        "MemCfg_forceMemError"
    ],
    "MAVINTEN": [
        "MemCfg_enableViolationInterrupt",
        "MemCfg_disableViolationInterrupt"
    ],
    "MAVFLG": [
        "MemCfg_getViolationInterruptStatus"
    ],
    "MAVSET": [
        "MemCfg_forceViolationInterrupt"
    ],
    "MAVCLR": [
        "MemCfg_clearViolationInterruptStatus"
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
    "CERRSET": [
        "MemCfg_forceCorrErrorStatus"
    ],
    "UCERRSET": [
        "MemCfg_forceUncorrErrorStatus"
    ],
    "CERRCLR": [
        "MemCfg_clearCorrErrorStatus"
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
    "PMBSTS": [
        "PMBus_getInterruptStatus",
        "PMBus_getStatus"
    ],
    "PMBINTM": [
        "PMBus_initTargetMode",
        "PMBus_configTarget",
        "PMBus_initControllerMode",
        "PMBus_configModuleClock",
        "PMBus_configModuleClockMode",
        "PMBus_configBusClock",
        "PMBus_enableInterrupt",
        "PMBus_disableInterrupt",
        "PMBus_enableI2CMode",
        "PMBus_disableI2CMode"
    ],
    "PMBTCR": [
        "PMBus_initTargetMode",
        "PMBus_configTarget",
        "PMBus_putTargetData",
        "PMBus_ackAddress",
        "PMBus_ackCommand",
        "PMBus_setOwnAddress"
    ],
    "PMBCTRL": [
        "PMBus_initTargetMode",
        "PMBus_initControllerMode",
        "PMBus_configModuleClock",
        "PMBus_configModuleClockMode",
        "PMBus_configBusClock",
        "PMBus_disableModule",
        "PMBus_enableModule",
        "PMBus_enableI2CMode",
        "PMBus_disableI2CMode",
        "PMBus_assertAlertLine",
        "PMBus_deassertAlertLine",
        "PMBus_setCtrlIntEdge",
        "PMBus_setClkLowTimeoutIntEdge"
    ],
    "PMBTXBUF": [
        "PMBus_putTargetData",
        "PMBus_putControllerData"
    ],
    "PMBACK": [
        "PMBus_ackAddress",
        "PMBus_ackCommand",
        "PMBus_ackTransaction",
        "PMBus_nackTransaction"
    ],
    "PMBHTA": [
        "PMBus_verifyPEC",
        "PMBus_getOwnAddress",
        "PMBus_getCurrentAccessType"
    ],
    "PMBRXBUF": [
        "PMBus_getData"
    ],
    "PMBTIMCTL": [
        "PMBus_configBusClock"
    ],
    "PMBTIMCLK": [
        "PMBus_configBusClock"
    ],
    "PMBTIMSTSETUP": [
        "PMBus_configBusClock"
    ],
    "PMBTIMBIDLE": [
        "PMBus_configBusClock"
    ],
    "PMBTIMLOWTIMOUT": [
        "PMBus_configBusClock"
    ],
    "PMBTIMHIGHTIMOUT": [
        "PMBus_configBusClock"
    ],
    "PMBCCR": [
        "PMBus_configController",
        "PMBus_setTargetAddress"
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
        "SysCtl_setIntOSC2_Mode",
        "SysCtl_enableWatchdogInHalt",
        "SysCtl_disableWatchdogInHalt"
    ],
    "SYSPLLCTL1": [
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
    "XTALCR2": [
        "SysCtl_selectXTAL"
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
    "CLKCFGLOCK1": [
        "SysCtl_lockClkConfig"
    ],
    "CPUSYSLOCK1": [
        "SysCtl_lockSysConfig"
    ],
    "PCLKCR0": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR2": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR3": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR4": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR7": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR8": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR9": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR10": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR13": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR14": [
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
    "AUXCLKDIVSEL": [
        "SysCtl_setMCANClk"
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
    "MCANWAKESTATUS": [
        "SysCtl_isMCANWakeStatusSet",
        "SysCtl_clearMCANWakeStatus"
    ],
    "MCANWAKESTATUSCLR": [
        "SysCtl_clearMCANWakeStatus"
    ],
    "USER_REG1_SYSRSN": [
        "SysCtl_setUserRegister",
        "SysCtl_getUserRegister"
    ],
    "LSEN": [
        "SysCtl_enableLockStep",
        "SysCtl_disableLockStep"
    ],
    "LCM_ERR_FLG": [
        "SysCtl_getLCMErrorFlag",
        "SysCtl_clearLCMErrorFlag",
        "SysCtl_setLCMErrorFlag"
    ],
    "LCM_ERR_FLG_CLR": [
        "SysCtl_clearLCMErrorFlag"
    ],
    "LCM_ERR_FLG_SET": [
        "SysCtl_setLCMErrorFlag"
    ],
    "REGPARITY_ERR_FLG": [
        "SysCtl_getRegParityErrorFlag",
        "SysCtl_clearRegParityErrorFlag",
        "SysCtl_setRegParityErrorFlag"
    ],
    "REGPARITY_ERR_FLG_CLR": [
        "SysCtl_clearRegParityErrorFlag"
    ],
    "REGPARITY_ERR_FLG_SET": [
        "SysCtl_setRegParityErrorFlag"
    ],
    "UID_UNIQUE0": [
        "SysCtl_getDeviceUID0"
    ],
    "UID_UNIQUE1": [
        "SysCtl_getDeviceUID1"
    ],
    "OUTPUT1MUX0TO15CFG": [
        "XBAR_setOutputMuxConfig"
    ],
    "TRIP4MUX0TO15CFG": [
        "XBAR_setEPWMMuxConfig"
    ],
    "TRIP4MUX16TO31CFG": [
        "XBAR_setEPWMMuxConfig"
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
    "TRIP4MUXENABLE": [
        "XBAR_enableEPWMMux",
        "XBAR_disableEPWMMux"
    ],
    "TRIPOUTINV": [
        "XBAR_invertEPWMSignal"
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
        "XBAR_lockEPWM"
    ]
}
module.exports = { 
  registerToFunction: REGISTER_TO_FUNCTION
}
