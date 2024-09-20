let REGISTER_TO_FUNCTION = 
{
    "ADCCTL2": [
        "ADC_setMode",
        "ADC_setINLTrim",
        "ADC_setPrescaler",
        "ADC_selectOffsetTrimMode"
    ],
    "ADCINLTRIM1": [
        "ADC_setINLTrim"
    ],
    "ADCINLTRIM2": [
        "ADC_setINLTrim"
    ],
    "ADCINLTRIM4": [
        "ADC_setINLTrim"
    ],
    "ADCINLTRIM5": [
        "ADC_setINLTrim"
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
        "ADC_setPPBTripLimits",
        "ADC_enablePPBExtendedLowLimit"
    ],
    "ADCPPB2TRIPLO": [
        "ADC_setPPBTripLimits",
        "ADC_enablePPBExtendedLowLimit"
    ],
    "ADCPPB3TRIPLO": [
        "ADC_setPPBTripLimits",
        "ADC_enablePPBExtendedLowLimit"
    ],
    "ADCPPB4TRIPLO": [
        "ADC_setPPBTripLimits",
        "ADC_enablePPBExtendedLowLimit"
    ],
    "ADCPPB1TRIPLO2": [
        "ADC_setPPBTripLimits"
    ],
    "ADCREP1CTL": [
        "ADC_configureRepeater",
        "ADC_getRepeaterStatus",
        "ADC_triggerRepeaterMode",
        "ADC_triggerRepeaterActiveMode",
        "ADC_triggerRepeaterModuleBusy",
        "ADC_triggerRepeaterSelect",
        "ADC_triggerRepeaterSyncIn",
        "ADC_forceRepeaterTriggerSync"
    ],
    "ADCREP1N": [
        "ADC_configureRepeater",
        "ADC_triggerRepeaterCount"
    ],
    "ADCREP1PHASE": [
        "ADC_configureRepeater",
        "ADC_triggerRepeaterPhase"
    ],
    "ADCREP1SPREAD": [
        "ADC_configureRepeater",
        "ADC_triggerRepeaterSpread"
    ],
    "ADCSOC0CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC1CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC2CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC3CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC4CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC5CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC6CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC7CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC8CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC9CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC10CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC11CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC12CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC13CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC14CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "ADCSOC15CTL": [
        "ADC_setupSOC",
        "ADC_selectSOCExtChannel"
    ],
    "INTERNALTESTCTL": [
        "ADC_disableIntRefloConnection",
        "ASysCtl_selectInternalTestNode"
    ],
    "ADCREP1FRC": [
        "ADC_forceRepeaterTrigger"
    ],
    "ADCINTSOCSEL1": [
        "ADC_setInterruptSOCTrigger"
    ],
    "ADCINTSOCSEL2": [
        "ADC_setInterruptSOCTrigger"
    ],
    "ADCCTL1": [
        "ADC_setInterruptPulseMode",
        "ADC_enableAltDMATiming",
        "ADC_disableAltDMATiming",
        "ADC_enableExtMuxPreselect",
        "ADC_disableExtMuxPreselect",
        "ADC_enableConverter",
        "ADC_disableConverter",
        "ADC_isBusy"
    ],
    "ADCINTCYCLE": [
        "ADC_setInterruptCycleOffset"
    ],
    "ADCINTFLG": [
        "ADC_getIntResultStatus",
        "ADC_getInterruptStatus",
        "ADC_clearInterruptStatus"
    ],
    "ADCSOCFRC1": [
        "ADC_forceSOC",
        "ADC_forceMultipleSOC"
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
        "ADC_enablePPBAbsoluteValue",
        "ADC_disablePPBAbsoluteValue",
        "ADC_setPPBShiftValue",
        "ADC_selectPPBSyncInput",
        "ADC_forcePPBSync",
        "ADC_selectPPBOSINTSource",
        "ADC_selectPPBCompareSource",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement",
        "ADC_disablePPBExtendedLowLimit"
    ],
    "ADCPPB2CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_enablePPBAbsoluteValue",
        "ADC_disablePPBAbsoluteValue",
        "ADC_setPPBShiftValue",
        "ADC_selectPPBSyncInput",
        "ADC_forcePPBSync",
        "ADC_selectPPBOSINTSource",
        "ADC_selectPPBCompareSource",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement",
        "ADC_disablePPBExtendedLowLimit"
    ],
    "ADCPPB3CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_enablePPBAbsoluteValue",
        "ADC_disablePPBAbsoluteValue",
        "ADC_setPPBShiftValue",
        "ADC_selectPPBSyncInput",
        "ADC_forcePPBSync",
        "ADC_selectPPBOSINTSource",
        "ADC_selectPPBCompareSource",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement",
        "ADC_disablePPBExtendedLowLimit"
    ],
    "ADCPPB4CONFIG": [
        "ADC_setupPPB",
        "ADC_enablePPBEventCBCClear",
        "ADC_disablePPBEventCBCClear",
        "ADC_enablePPBAbsoluteValue",
        "ADC_disablePPBAbsoluteValue",
        "ADC_setPPBShiftValue",
        "ADC_selectPPBSyncInput",
        "ADC_forcePPBSync",
        "ADC_selectPPBOSINTSource",
        "ADC_selectPPBCompareSource",
        "ADC_enablePPBTwosComplement",
        "ADC_disablePPBTwosComplement",
        "ADC_disablePPBExtendedLowLimit"
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
    "ADCSAFECHECKRESEN": [
        "ADC_configSOCSafetyCheckerInput"
    ],
    "ADCSAFECHECKRESEN2": [
        "ADC_configSOCSafetyCheckerInput"
    ],
    "ADCCHECKCONFIG": [
        "ADC_enableSafetyChecker",
        "ADC_disableSafetyChecker",
        "ADC_forceSafetyCheckerSync"
    ],
    "ADCCHECKSTATUS": [
        "ADC_getSafetyCheckerStatus"
    ],
    "ADCRESSEL1": [
        "ADC_configureSafetyChecker"
    ],
    "ADCTOLERANCE": [
        "ADC_setSafetyCheckerTolerance"
    ],
    "ADCCHECKRESULT1": [
        "ADC_getSafetyCheckerResult"
    ],
    "ADCCHECKEVT1SEL1": [
        "ADC_enableSafetyCheckEvt",
        "ADC_disableSafetyCheckEvt"
    ],
    "ADCCHECKINTSEL1": [
        "ADC_enableSafetyCheckInt",
        "ADC_disableSafetyCheckInt"
    ],
    "ADCOOTFLG": [
        "ADC_getSafetyCheckStatus",
        "ADC_clearSafetyCheckStatus"
    ],
    "ADCOOTFLGCLR": [
        "ADC_clearSafetyCheckStatus"
    ],
    "ADCCHECKINTFLG": [
        "ADC_getSafetyCheckIntStatus",
        "ADC_clearSafetyCheckIntStatus"
    ],
    "ADCCHECKINTFLGCLR": [
        "ADC_clearSafetyCheckIntStatus"
    ],
    "TSNSCTL": [
        "ASysCtl_enableTemperatureSensor",
        "ASysCtl_disableTemperatureSensor"
    ],
    "LOCK": [
        "ASysCtl_lockTemperatureSensor",
        "ASysCtl_lockANAREF",
        "ASysCtl_lockVREG",
        "ASysCtl_lockVMON",
        "ASysCtl_lockCMPHPMux",
        "ASysCtl_lockCMPLPMux",
        "ASysCtl_lockCMPHNMux",
        "ASysCtl_lockCMPLNMux",
        "EPG_lockReg",
        "EPG_releaseLockReg",
        "EPWM_lockRegisters",
        "HRPWM_lockRegisters",
        "Interrupt_lockRegister",
        "Interrupt_unlockRegister"
    ],
    "ANAREFCTL": [
        "ASysCtl_setVREF"
    ],
    "VREGCTL": [
        "ASysCtl_enableVMONMask",
        "ASysCtl_powerDownVREG"
    ],
    "VMONCTL": [
        "ASysCtl_enableBORL",
        "ASysCtl_disableBORL"
    ],
    "CMPHPMXSEL": [
        "ASysCtl_configCMPMux"
    ],
    "IODRVSEL": [
        "ASysCtl_setIOBufferDrive"
    ],
    "IOMODESEL": [
        "ASysCtl_setIOBufferMode"
    ],
    "AGPIOFILTER": [
        "ASysCtl_setAGPIOFilter"
    ],
    "CONFIGLOCK": [
        "ASysCtl_lockAGPIOFilter",
        "ASysCtl_lockAGPIOCtrl"
    ],
    "ADCSOCFRCGB": [
        "AsysCtl_configADCGlobalSOC",
        "AsysCtl_forceADCGlobalSOC"
    ],
    "ADCSOCFRCGBSEL": [
        "AsysCtl_configADCGlobalSOC"
    ],
    "MCDCR": [
        "__attribute__",
        "__attribute__",
        "__attribute__",
        "__attribute__",
        "__attribute__",
        "__attribute__"
    ],
    "CLKSRCCTL3": [
        "__attribute__"
    ],
    "XCLKOUTDIVSEL": [
        "__attribute__"
    ],
    "CLKSRCCTL2": [
        "__attribute__"
    ],
    "MCANCLKDIVSEL": [
        "__attribute__"
    ],
    "MCANC": [
        "__attribute__"
    ],
    "TMR2CLKCTL": [
        "__attribute__"
    ],
    "PERCLKDIVSEL": [
        "__attribute__",
        "__attribute__",
        "__attribute__",
        "__attribute__"
    ],
    "ETHERCATCLKCTL": [
        "__attribute__"
    ],
    "CLBCLKCTL": [
        "__attribute__"
    ],
    "HSMCLKDIVSEL": [
        "__attribute__"
    ],
    "X1CNT": [
        "__attribute__",
        "__attribute__",
        "SysCtl_pollX1Counter"
    ],
    "XTALCR": [
        "__attribute__",
        "__attribute__",
        "SysCtl_selectXTAL",
        "SysCtl_selectXTALSingleEnded",
        "SysCtl_setClock"
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
        "CMPSS_enableDEmode",
        "CMPSS_disableDEmode",
        "CMPSS_selectDEACTIVESource",
        "CMPSS_selectBlankSourceGroupHigh",
        "CMPSS_selectRampSourceGroupHigh"
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
        "CMPSS_disableBlankingLow",
        "CMPSS_selectBlankSourceGroupLow",
        "CMPSS_selectRampSourceGroupLow"
    ],
    "DACHVALS": [
        "CMPSS_setDACValueHigh",
        "CMPSS_configHighDACShadowValueDE"
    ],
    "DACLVALS": [
        "CMPSS_setDACValueLow",
        "CMPSS_configLowDACShadowValueDE"
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
        "CMPSS_configureRampXTriggerHigh",
        "CMPSS_enableDEmode",
        "CMPSS_disableDEmode",
        "CMPSS_selectDEACTIVESource",
        "CMPSS_selectBlankSourceGroupHigh",
        "CMPSS_selectRampSourceGroupHigh"
    ],
    "RAMPHCTLS": [
        "CMPSS_setRampClockDividerHigh"
    ],
    "RAMPHCTLA": [
        "CMPSS_getRampClockDividerHigh"
    ],
    "RAMPLCTLS": [
        "CMPSS_setRampClockDividerLow"
    ],
    "RAMPLCTLA": [
        "CMPSS_getRampClockDividerLow"
    ],
    "COMPHYSCTL": [
        "CMPSS_setHysteresis"
    ],
    "DACHVALS2": [
        "CMPSS_configHighDACShadowValueDE"
    ],
    "DACLVALS2": [
        "CMPSS_configLowDACShadowValueDE"
    ],
    "COMPDACLCTL2": [
        "CMPSS_selectBlankSourceGroupLow",
        "CMPSS_selectRampSourceGroupLow"
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
    "DACTRIM": [
        "DAC_tuneOffsetTrim",
        "DAC_setOffsetTrim",
        "DAC_getOffsetTrim"
    ],
    "DACREV": [
        "DAC_getRevision"
    ],
    "DACCTL": [
        "DAC_setReferenceVoltage",
        "DAC_setGainMode",
        "DAC_setLoadMode",
        "DAC_setPWMSyncSignal"
    ],
    "DACVALA": [
        "DAC_getActiveValue"
    ],
    "DACVALS": [
        "DAC_setShadowValue",
        "DAC_getShadowValue"
    ],
    "DACOUTEN": [
        "DAC_enableOutput",
        "DAC_disableOutput"
    ],
    "DACLOCK": [
        "DAC_lockRegister",
        "DAC_isRegisterLocked"
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
    "TAG_FILTER_START_REF": [
        "DLT_configTagFilter"
    ],
    "TAG_FILTER_START_MASK": [
        "DLT_configTagFilter"
    ],
    "TAG_FILTER_END_REF": [
        "DLT_configTagFilter"
    ],
    "TAG_FILTER_END_MASK": [
        "DLT_configTagFilter"
    ],
    "ERAD_START_MASK_L": [
        "DLT_configERADFilter"
    ],
    "ERAD_START_MASK_H": [
        "DLT_configERADFilter"
    ],
    "ERAD_END_MASK_L": [
        "DLT_configERADFilter"
    ],
    "ERAD_END_MASK_H": [
        "DLT_configERADFilter"
    ],
    "LINK_EN": [
        "DLT_enableLinkPermission",
        "DLT_disableLinkPermission"
    ],
    "CONTROL": [
        "DLT_enableModule",
        "DLT_disableModule",
        "DLT_enableERADFilter",
        "DLT_disableERADFilter",
        "DLT_enableTagFilter",
        "DLT_disableTagFilter",
        "DLT_setCaptureMode",
        "DLT_resetFilter",
        "staticinlinevoidDMA_triggerSoftReset",
        "staticinlinevoidDMA_forceTrigger",
        "staticinlinevoidDMA_clearTriggerFlag",
        "staticinlineboolDMA_getTransferStatusFlag",
        "staticinlineboolDMA_getBurstStatusFlag",
        "staticinlineboolDMA_getRunStatusFlag",
        "staticinlineboolDMA_getOverflowFlag",
        "staticinlineboolDMA_getTriggerFlagStatus",
        "staticinlinevoidDMA_startChannel",
        "staticinlinevoidDMA_stopChannel",
        "staticinlinevoidDMA_clearErrorFlag"
    ],
    "FIFO_CONTROL": [
        "DLT_enableDMA",
        "DLT_disableDMA",
        "DLT_resetFIFO",
        "DLT_setFIFOTriggerLevel"
    ],
    "TIMER_CONTROL": [
        "DLT_resetTimer"
    ],
    "FIFO_STS": [
        "DLT_getFIFOWordStatus",
        "DLT_getFIFOWriteStatus"
    ],
    "FIFO_PTR": [
        "DLT_getFIFOReadPointer",
        "DLT_getFIFOWritePointer"
    ],
    "TIMER2_COUNT": [
        "DLT_getTimerCount"
    ],
    "INT_FLG": [
        "DLT_getGlobalInterruptStatus",
        "DLT_getTimer1OverflowStatus",
        "DLT_getTimer2OverflowStatus",
        "DLT_getFIFOOverflowStatus",
        "DLT_getFIFOUnderflowStatus",
        "DLT_getFIFOTriggerLevelStatus"
    ],
    "INT_EN": [
        "DLT_enableInterrupt",
        "DLT_disableInterrupt"
    ],
    "INT_FRC": [
        "DLT_forceEvent"
    ],
    "INT_CLR": [
        "DLT_clearEvent"
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
        "ECAP_selectECAPInput",
        "ECAP_selectQualPeriod",
        "ECAP_setSOCTriggerSource"
    ],
    "MUNIT_1_CTL": [
        "ECAP_enableSignalMonitoringUnit",
        "ECAP_disableSignalMonitoringUnit",
        "ECAP_enableDebugRange",
        "ECAP_disableDebugRange",
        "ECAP_setupEarlyMaxErrorCheck",
        "ECAP_selectMonitoringType"
    ],
    "MUNIT_COMMON_CTL": [
        "ECAP_selectTripSignal",
        "ECAP_selectGlobalLoadStrobe"
    ],
    "MUNIT_1_SHADOW_CTL": [
        "ECAP_enableShadowMinMaxRegisters",
        "ECAP_disableShadowMinMaxRegisters",
        "ECAP_enableSoftwareSync",
        "ECAP_selectShadowLoadMode"
    ],
    "MUNIT_1_MIN": [
        "ECAP_configureMinValue",
        "ECAP_configureShadowMinValue"
    ],
    "MUNIT_1_MAX": [
        "ECAP_configureMaxValue",
        "ECAP_configureShadowMaxValue"
    ],
    "MUNIT_1_MIN_SHADOW": [
        "ECAP_configureShadowMinValue"
    ],
    "MUNIT_1_MAX_SHADOW": [
        "ECAP_configureShadowMaxValue"
    ],
    "MUNIT_1_DEBUG_RANGE_MIN": [
        "ECAP_observedMinValue"
    ],
    "MUNIT_1_DEBUG_RANGE_MAX": [
        "ECAP_observedMaxValue"
    ],
    "MXSEL0": [
        "EPG_selectEPGDataOut"
    ],
    "GCTL0": [
        "EPG_enableGlobal",
        "EPG_disableGlobal",
        "EPG_selectEPGOutput",
        "EPG_enableSignalGen",
        "EPG_disableSignalGen"
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
        "Interrupt_commitRegister"
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
    "CMPCTL": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode",
        "EPWM_getCounterCompareShadowStatus",
        "EPWM_enableLinkDutyHR",
        "EPWM_disableLinkDutyHR"
    ],
    "CMPCTL2": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode"
    ],
    "CMPC": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode",
        "EPWM_getCounterCompareShadowStatus",
        "EPWM_enableLinkDutyHR",
        "EPWM_disableLinkDutyHR",
        "EPWM_setCMPShadowRegValue"
    ],
    "CMPD": [
        "EPWM_setCounterCompareShadowLoadMode",
        "EPWM_disableCounterCompareShadowLoadMode",
        "EPWM_getCounterCompareShadowStatus",
        "EPWM_enableLinkDutyHR",
        "EPWM_disableLinkDutyHR",
        "EPWM_setCMPShadowRegValue"
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
    "TZTRIPOUTSEL": [
        "EPWM_enableTripOutSource",
        "EPWM_disableTripOutSource"
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
    "ETINTMIXEN": [
        "EPWM_setMixEvtTriggerSource"
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
        "EPWM_configureDigitalCompareCounterCaptureMode",
        "EPWM_clearDigitalCompareCaptureStatusFlag"
    ],
    "DCCAP": [
        "EPWM_enableDigitalCompareCounterCapture",
        "EPWM_disableDigitalCompareCounterCapture",
        "EPWM_setDigitalCompareCounterShadowMode",
        "EPWM_getDigitalCompareCaptureStatus",
        "EPWM_configureDigitalCompareCounterCaptureMode",
        "EPWM_clearDigitalCompareCaptureStatusFlag",
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
    "CAPCTL": [
        "EPWM_enableCaptureInEvent",
        "EPWM_disableCaptureInEvent",
        "EPWM_configCaptureGateInputPolarity",
        "EPWM_invertCaptureInputPolarity",
        "EPWM_enableIndependentPulseLogic",
        "EPWM_disableIndependentPulseLogic",
        "EPWM_forceCaptureEventLoad"
    ],
    "CAPTRIPSEL": [
        "EPWM_selectCaptureTripInput",
        "EPWM_enableCaptureTripCombinationInput"
    ],
    "CAPGATETRIPSEL": [
        "EPWM_enableCaptureTripCombinationInput",
        "EPWM_disableCaptureTripCombinationInput"
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
    "XCMPCTL1": [
        "EPWM_enableXCMPMode",
        "EPWM_disableXCMPMode",
        "EPWM_enableSplitXCMP",
        "EPWM_disableSplitXCMP",
        "EPWM_allocAXCMP",
        "EPWM_allocBXCMP"
    ],
    "XCMP1_ACTIVE": [
        "EPWM_setXCMPRegValue",
        "HRPWM_setXCMPRegValue",
        "HRPWM_setHiResXCMPRegValueOnly"
    ],
    "CMPC_SHDW1": [
        "EPWM_setCMPShadowRegValue"
    ],
    "XMINMAX_ACTIVE": [
        "EPWM_setXMINMAXRegValue"
    ],
    "XAQCTLA_ACTIVE": [
        "EPWM_setXCMPActionQualifierAction"
    ],
    "XAQCTLA_SHDW1": [
        "EPWM_setXCMPActionQualifierAction"
    ],
    "XAQCTLA_SHDW2": [
        "EPWM_setXCMPActionQualifierAction"
    ],
    "XAQCTLA_SHDW3": [
        "EPWM_setXCMPActionQualifierAction"
    ],
    "XLOAD": [
        "EPWM_enableXLoad",
        "EPWM_forceXLoad",
        "EPWM_setXCMPLoadMode",
        "EPWM_setXCMPShadowLevel",
        "EPWM_setXCMPShadowBufPtrLoadOnce",
        "EPWM_setXCMPShadowRepeatBufxCount"
    ],
    "XLOADCTL": [
        "EPWM_setXCMPLoadMode",
        "EPWM_setXCMPShadowLevel",
        "EPWM_setXCMPShadowBufPtrLoadOnce",
        "EPWM_setXCMPShadowRepeatBufxCount"
    ],
    "MINDBCFG": [
        "EPWM_enableMinimumDeadBand",
        "EPWM_invertMinimumDeadBandSignal",
        "EPWM_selectMinimumDeadBandAndOrLogic",
        "EPWM_selectMinimumDeadBandBlockingSignal",
        "EPWM_selectMinimumDeadBandReferenceSignal"
    ],
    "MINDBDLY": [
        "EPWM_getMinDeadBandDelay",
        "EPWM_setMinDeadBandDelay"
    ],
    "LUTCTLA": [
        "EPWM_enableIllegalComboLogic",
        "EPWM_disableIllegalComboLogic",
        "EPWM_selectXbarInput",
        "EPWM_setLutDecX"
    ],
    "LUTCTLB": [
        "EPWM_enableIllegalComboLogic",
        "EPWM_disableIllegalComboLogic",
        "EPWM_selectXbarInput",
        "EPWM_setLutDecX"
    ],
    "DECTL": [
        "EPWM_enableDiodeEmulationMode",
        "EPWM_disableDiodeEmulationMode",
        "EPWM_setDiodeEmulationMode",
        "EPWM_setDiodeEmulationReentryDelay"
    ],
    "DECOMPSEL": [
        "EPWM_configureDiodeEmulationTripLowSources",
        "EPWM_configureDiodeEmulationTripHighSources"
    ],
    "DEACTCTL": [
        "EPWM_selectDiodeEmulationPWMsignal",
        "EPWM_selectDiodeEmulationTripSignal",
        "EPWM_nobypassDiodeEmulationLogic",
        "EPWM_bypassDiodeEmulationLogic"
    ],
    "DEFRC": [
        "EPWM_forceDiodeEmulationActive"
    ],
    "DEMONCTL": [
        "EPWM_enableDiodeEmulationMonitorModeControl",
        "EPWM_disableDiodeEmulationMonitorModeControl"
    ],
    "DEMONSTEP": [
        "EPWM_setDiodeEmulationMonitorModeStep"
    ],
    "DEMONTHRES": [
        "EPWM_setDiodeEmulationMonitorCounterThreshold"
    ],
    "DECLR": [
        "EPWM_clearDiodeEmulationActiveFlag"
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
    "EBC_CNTL(i)": [
        "ERAD_configBusComp",
        "ERAD_enableModules",
        "ERAD_disableModules",
        "ERAD_enableBusCompModule",
        "ERAD_disableBusCompModule",
        "ERAD_enableNMI",
        "ERAD_disableNMI"
    ],
    "EBC_REFL(i)": [
        "ERAD_configBusComp"
    ],
    "EBC_REFH(i)": [
        "ERAD_configBusComp"
    ],
    "EBC_MASKL(i)": [
        "ERAD_configBusComp"
    ],
    "EBC_MASKH(i)": [
        "ERAD_configBusComp"
    ],
    "SEC_CNTL(i)": [
        "ERAD_configCounterInCountingMode",
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode",
        "ERAD_enableModules",
        "ERAD_disableModules",
        "ERAD_enableCounterModule",
        "ERAD_disableCounterModule",
        "ERAD_enableNMI",
        "ERAD_disableNMI",
        "ERAD_enableCounterResetInput",
        "ERAD_disableCounterResetInput"
    ],
    "SEC_REF(i)": [
        "ERAD_configCounterInCountingMode",
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode"
    ],
    "SEC_INPUT_SEL1(i)": [
        "ERAD_configCounterInCountingMode",
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode",
        "ERAD_enableCounterResetInput"
    ],
    "SEC_INPUT_SEL2(i)": [
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode"
    ],
    "AND_MASK_CTL(i)": [
        "ERAD_configMask"
    ],
    "EVENT_AND_MASK(i)": [
        "ERAD_configMask"
    ],
    "OR_MASK_CTL(i)": [
        "ERAD_configMask"
    ],
    "EVENT_OR_MASK(i)": [
        "ERAD_configMask"
    ],
    "EBC_OWNER(i)": [
        "ERAD_setOwnership",
        "ERAD_getBusCompOwnership",
        "ERAD_setBusCompOwnership"
    ],
    "SEC_OWNER(i)": [
        "ERAD_setOwnership",
        "ERAD_getCounterOwnership",
        "ERAD_setCounterOwnership"
    ],
    "AND_MASK_OWNER(i)": [
        "ERAD_setOwnership",
        "ERAD_getMaskOwnership",
        "ERAD_setMaskOwnership"
    ],
    "OR_MASK_OWNER(i)": [
        "ERAD_setOwnership",
        "ERAD_getMaskOwnership",
        "ERAD_setMaskOwnership"
    ],
    "PCTRACE_OWNER": [
        "ERAD_setOwnership",
        "ERAD_getPCTraceOwnership",
        "ERAD_setPCTraceOwnership"
    ],
    "GLBL_EVENT_STAT": [
        "ERAD_getEventStatus"
    ],
    "EBC_STATUS(i)": [
        "ERAD_getBusCompStatus",
        "ERAD_clearBusCompEvent"
    ],
    "EBC_STATUSCLEAR(i)": [
        "ERAD_clearBusCompEvent"
    ],
    "SEC_STATUS(i)": [
        "ERAD_getCounterStatus",
        "ERAD_clearCounterEvent",
        "ERAD_clearCounterOverflow"
    ],
    "EBC_WP_PC(i)": [
        "ERAD_getWatchpointPC"
    ],
    "SEC_STATUSCLEAR(i)": [
        "ERAD_clearCounterEvent",
        "ERAD_clearCounterOverflow"
    ],
    "SEC_COUNT(i)": [
        "ERAD_getCurrentCount",
        "ERAD_setCurrentCount"
    ],
    "SEC_MAX_COUNT(i)": [
        "ERAD_getMaxCount",
        "ERAD_setMaxCount"
    ],
    "SEC_MIN_COUNT(i)": [
        "ERAD_getMinCount",
        "ERAD_setMinCount"
    ],
    "SEC_INPUT_COND(i)": [
        "ERAD_setCounterInputConditioning"
    ],
    "PCTRACE_GLOBAL": [
        "ERAD_enablePCTrace",
        "ERAD_disablePCTrace",
        "ERAD_initPCTraceBuffer"
    ],
    "PCTRACE_QUAL1": [
        "ERAD_setPCTraceMode_NoQualifiers",
        "ERAD_setPCTraceMode_Windowed",
        "ERAD_setPCTraceMode_StartStop"
    ],
    "PCTRACE_QUAL2": [
        "ERAD_setPCTraceMode_NoQualifiers",
        "ERAD_setPCTraceMode_Windowed",
        "ERAD_setPCTraceMode_StartStop"
    ],
    "ESCSS_INTR_SET": [
        "ESCSS_setRawInterruptStatus"
    ],
    "ESCSS_GPIN_GRP_CAP_SEL": [
        "ESCSS_setGPINGroupCaptureTriggerSelect"
    ],
    "ESCSS_GPOUT_GRP_CAP_SEL": [
        "ESCSS_setGPOUTGroupCaptureTriggerSelect"
    ],
    "ESCSS_RESET_DEST_CONFIG": [
        "ESCSS_enableCPUReset",
        "ESCSS_disableCPUReset",
        "ESCSS_enableResetToNMI",
        "ESCSS_disableResetToNMI",
        "ESCSS_enableResetToInterrupt",
        "ESCSS_disableResetToInterrupt"
    ],
    "ESCSS_SYNC0_CONFIG": [
        "ESCSS_configureSync0Connections"
    ],
    "ESCSS_SYNC1_CONFIG": [
        "ESCSS_configureSync1Connections"
    ],
    "ESCSS_CONFIG_LOCK": [
        "ESCSS_enableConfigurationLock",
        "ESCSS_enableIOConnectionLock",
        "ESCSS_disableIOConnectionLock",
        "ESCSS_isConfigurationLockEnabled"
    ],
    "ESCSS_MISC_IO_CONFIG": [
        "ESCSS_enableResetInputFromGpioPad",
        "ESCSS_disableResetInputFromGpioPad",
        "ESCSS_enableESCEEPROMI2CIoPadConnection",
        "ESCSS_disableESCEEPROMI2CIoPadConnection"
    ],
    "ESCSS_PHY_IO_CONFIG": [
        "ESCSS_configurePortCount",
        "ESCSS_enableAutoCompensationTxClkIOPad",
        "ESCSS_disableAutoCompensationTxClkIOPad"
    ],
    "ESCSS_SYNC_IO_CONFIG": [
        "ESCSS_enableSync0GpioMuxConnection",
        "ESCSS_disableSync0GpioMuxConnection",
        "ESCSS_enableSync1GpioMuxConnection",
        "ESCSS_disableSync1GpioMuxConnection"
    ],
    "ESCSS_LATCH_IO_CONFIG": [
        "ESCSS_enableLatch0GpioMuxConnection",
        "ESCSS_disableLatch0GpioMuxConnection",
        "ESCSS_enableLatch1GpioMuxConnection",
        "ESCSS_disableLatch1GpioMuxConnection"
    ],
    "ESCSS_MISC_CONFIG": [
        "ESCSS_configureEEPROMSize",
        "ESCSS_configureTX0ShiftForTxEnaAndTxData",
        "ESCSS_configureTX1ShiftForTxEnaAndTxData",
        "ESCSS_enablePDIEmulation",
        "ESCSS_disablePDIEmulation",
        "ESCSS_configurePhyAddressOffset"
    ],
    "ESCSS_IPREVNUM": [
        "ESCSS_readIPMinorRevNumber",
        "ESCSS_readIPMajorRevNumber",
        "ESCSS_readIPRevNumber"
    ],
    "ESCSS_INTR_RIS": [
        "ESCSS_getRawInterruptStatus",
        "ESCSS_readRawInterruptStatus"
    ],
    "ESCSS_INTR_MASK": [
        "ESCSS_setMaskedInterruptStatus",
        "ESCSS_resetMaskedInterruptStatus"
    ],
    "ESCSS_INTR_MIS": [
        "ESCSS_getMaskedInterruptStatus"
    ],
    "ESCSS_INTR_CLR": [
        "ESCSS_clearRawInterruptStatus"
    ],
    "ESCSS_LATCH_SEL": [
        "ESCSS_selectLatch0Mux",
        "ESCSS_selectLatch1Mux"
    ],
    "ESCSS_ACCESS_CTRL": [
        "ESCSS_configure16BitAsyncAccessWaitState",
        "ESCSS_enablePDIAccessTimeOut",
        "ESCSS_disablePDIAccessTimeOut",
        "ESCSS_enableDebugAccess",
        "ESCSS_disableDebugAccess"
    ],
    "ESCSS_GPIN_DAT": [
        "ESCSS_readGPINData",
        "ESCSS_setGPINData",
        "ESCSS_resetGPINData"
    ],
    "ESCSS_GPIN_PIPE": [
        "ESCSS_enableGPIPipelinedRegCaptureOnEvent",
        "ESCSS_disableGPIPipelinedRegCaptureOnEvent"
    ],
    "ESCSS_GPOUT_DAT": [
        "ESCSS_readGPOUTData"
    ],
    "ESCSS_GPOUT_PIPE": [
        "ESCSS_enableGPOUTPipelinedRegCaptureOnEvent",
        "ESCSS_disableGPOUTPipelinedRegCaptureOnEvent"
    ],
    "ESCSS_MEM_TEST": [
        "ESCSS_initMemory",
        "ESCSS_getMemoryInitDoneStatusNonBlocking",
        "ESCSS_getMemoryInitDoneStatusBlocking"
    ],
    "ESCSS_LED_CONFIG": [
        "ESCSS_enableLEDOptions",
        "ESCSS_disableLEDOptions"
    ],
    "ESCSS_GPIN_SEL": [
        "ESCSS_enableGPIN",
        "ESCSS_disableGPIN"
    ],
    "ESCSS_GPOUT_SEL": [
        "ESCSS_enableGPOUT",
        "ESCSS_disableGPOUT"
    ],
    "INTR_EN_SET(i)": [
        "ESM_configErrorEvent",
        "ESM_config",
        "ESM_enableInterrupt"
    ],
    "INT_PRIO(i)": [
        "ESM_configErrorEvent",
        "ESM_config",
        "ESM_setInterruptPriorityLevel"
    ],
    "PIN_EN_SET(i)": [
        "ESM_configErrorEvent",
        "ESM_config",
        "ESM_setInfluenceOnErrorPin"
    ],
    "PIN_EN_CLR(i)": [
        "ESM_configErrorEvent",
        "ESM_setInfluenceOnErrorPin"
    ],
    "CRIT_EN_SET(i)": [
        "ESM_configErrorEvent",
        "ESM_config",
        "ESM_setCriticalPriorityInterruptInfluence"
    ],
    "CRIT_EN_CLR(i)": [
        "ESM_configErrorEvent",
        "ESM_setCriticalPriorityInterruptInfluence"
    ],
    "PIN_CNTR": [
        "ESM_setErrorPinCounterPreload",
        "ESM_getErrorPinCounterValue"
    ],
    "PIN_CNTR_PRE": [
        "ESM_setErrorPinCounterPreload"
    ],
    "HI_PRI": [
        "ESM_setWatchdogCounterPreload",
        "ESM_enableHighPriorityWatchdog",
        "ESM_disableHighPriorityWatchdog",
        "ESM_enableHighPriorityWatchdogFreerun",
        "ESM_disableHighPriorityWatchdogFreerun",
        "ESM_getHighestHighPriorityInterrupt"
    ],
    "HI": [
        "ESM_setWatchdogCounterPreload",
        "ESM_enableHighPriorityWatchdog",
        "ESM_disableHighPriorityWatchdog",
        "ESM_enableHighPriorityWatchdogFreerun",
        "ESM_disableHighPriorityWatchdogFreerun",
        "ESM_getHighPriorityInterruptStatus",
        "ESM_getHighestHighPriorityInterrupt"
    ],
    "HI_PRI_WD_CNTR": [
        "ESM_setWatchdogCounterPreload"
    ],
    "HI_PRI_WD_CNTR_PRE": [
        "ESM_setWatchdogCounterPreload"
    ],
    "PWMH_PIN_CNTR": [
        "ESM_setPWMCounterPreload"
    ],
    "PWMH_PIN_CNTR_PRE": [
        "ESM_setPWMCounterPreload"
    ],
    "PWML_PIN_CNTR": [
        "ESM_setPWMCounterPreload"
    ],
    "PWML_PIN_CNTR_PRE": [
        "ESM_setPWMCounterPreload"
    ],
    "PIN_CTRL": [
        "ESM_configErrorPin",
        "ESM_setErrorMode",
        "ESM_clearErrorPin",
        "ESM_setOutputPinMode",
        "ESM_setLevelModePolarity"
    ],
    "ERRPIN_MON_CFG": [
        "ESM_configErrorPin",
        "ESM_enableErrorPinMonitor",
        "ESM_disableErrorPinMonitor"
    ],
    "SFT_RST": [
        "ESM_triggerSoftReset"
    ],
    "INFO": [
        "ESM_getLastResetSource",
        "ESM_getCriticalPriorityInterruptStatus"
    ],
    "EN": [
        "ESM_enableGlobal",
        "ESM_disableGlobal"
    ],
    "EOI": [
        "ESM_writeEOIVector",
        "ESM_ackInterrupt"
    ],
    "PIN_STS": [
        "ESM_getErrorPinStatus"
    ],
    "HI_PRI_WD_CFG": [
        "ESM_enableHighPriorityWatchdog",
        "ESM_disableHighPriorityWatchdog",
        "ESM_enableHighPriorityWatchdogFreerun",
        "ESM_disableHighPriorityWatchdogFreerun"
    ],
    "ERRPIN_MON_INTR_SET": [
        "ESM_setErrorPinMonitorInterrupt",
        "ESM_getErrorPinMonitorInterruptStatus"
    ],
    "ERRPIN_MON_INTR_CLR": [
        "ESM_clearErrorPinMonitorInterrupt"
    ],
    "INTR_EN_CLR(i)": [
        "ESM_disableInterrupt"
    ],
    "RAW(i)": [
        "ESM_setRawInterruptStatus",
        "ESM_getRawInterruptStatus"
    ],
    "STS(i)": [
        "ESM_getInterruptStatus",
        "ESM_clearRawInterruptStatus"
    ],
    "LOW": [
        "ESM_getLowPriorityInterruptStatus",
        "ESM_getHighestLowPriorityInterrupt"
    ],
    "LOW_PRI": [
        "ESM_getHighestLowPriorityInterrupt"
    ],
    "GROUP_N_LOCK": [
        "ESM_lockErrorGroupInterruptConfig",
        "ESM_unlockErrorGroupInterruptConfig"
    ],
    "GROUP_N_COMMIT": [
        "ESM_commitErrorGroupInterruptConfig"
    ],
    "ERR_PIN_INFLUENCE_LOCK": [
        "ESM_lockErrorPinInfluenceConfig",
        "ESM_unlockErrorPinInfluenceConfig"
    ],
    "ERR_PIN_INFLUENCE_COMMIT": [
        "ESM_commitErrorPinInfluenceConfig"
    ],
    "CRI_PRI_INFLUENCE_LOCK": [
        "ESM_lockCriticalPriorityInterruptInfluenceConfig",
        "ESM_unlockCriticalPriorityInterruptInfluenceConfig"
    ],
    "CRI_PRI_INFLUENCE_COMMIT": [
        "ESM_commitCriticalPriorityInterruptInfluenceConfig"
    ],
    "MMR_CONFIG_LOCK": [
        "ESM_lockMMRConfig",
        "ESM_unlockMMRConfig"
    ],
    "MMR_CONFIG_COMMIT": [
        "ESM_commitMMRConfig"
    ],
    "TX_MAIN_CTRL": [
        "FSI_resetTxModule",
        "FSI_clearTxModuleReset",
        "FSI_sendTxFlush",
        "FSI_stopTxFlush"
    ],
    "TX_CLK_CTRL": [
        "FSI_resetTxModule",
        "FSI_clearTxModuleReset",
        "FSI_enableTxClock",
        "FSI_disableTxClock",
        "FSI_configPrescalar"
    ],
    "TX_PING_CTRL": [
        "FSI_resetTxModule",
        "FSI_clearTxModuleReset",
        "FSI_enableTxPingTimer",
        "FSI_disableTxPingTimer",
        "FSI_enableTxExtPingTrigger",
        "FSI_disableTxExtPingTrigger"
    ],
    "TX_BUF_BASE(i)": [
        "FSI_writeTxBuffer",
        "FSI_getTxBufferAddress"
    ],
    "RX_MAIN_CTRL": [
        "FSI_resetRxModule",
        "FSI_clearRxModuleReset",
        "FSI_enableRxInternalLoopback",
        "FSI_disableRxInternalLoopback",
        "FSI_enableRxSPIPairing",
        "FSI_disableRxSPIPairing"
    ],
    "RX_FRAME_WD_CTRL": [
        "FSI_resetRxModule",
        "FSI_clearRxModuleReset",
        "FSI_enableRxFrameWatchdog",
        "FSI_disableRxFrameWatchdog"
    ],
    "RX_PING_WD_CTRL": [
        "FSI_resetRxModule",
        "FSI_clearRxModuleReset",
        "FSI_enableRxPingWatchdog",
        "FSI_disableRxPingWatchdog"
    ],
    "RX_BUF_BASE(i)": [
        "FSI_readRxBuffer",
        "FSI_getRxBufferAddress"
    ],
    "RX_DLYLINE_CTRL": [
        "FSI_configRxDelayLine"
    ],
    "TX_OPER_CTRL_LO": [
        "FSI_selectTxPLLClock",
        "FSI_setTxDataWidth",
        "FSI_enableTxSPIMode",
        "FSI_disableTxSPIMode",
        "FSI_setTxStartMode",
        "FSI_setTxPingTimeoutMode",
        "FSI_enableTxTDMMode",
        "FSI_disableTxTDMMode",
        "FSI_enableRxTDMMode",
        "FSI_disableRxTDMMode",
        "FSI_enableTxUserCRC",
        "FSI_disableTxUserCRC"
    ],
    "TX_OPER_CTRL_HI": [
        "FSI_setTxExtFrameTrigger",
        "FSI_enableTxCRCForceError",
        "FSI_disableTxCRCForceError",
        "FSI_setTxECCComputeWidth"
    ],
    "TX_FRAME_CTRL": [
        "FSI_setTxFrameType",
        "FSI_setTxSoftwareFrameSize",
        "FSI_startTxTransmit"
    ],
    "TX_FRAME_TAG_UDATA": [
        "FSI_setTxFrameTag",
        "FSI_setTxUserDefinedData"
    ],
    "TX_BUF_PTR_LOAD": [
        "FSI_setTxBufferPtr"
    ],
    "TX_BUF_PTR_STS": [
        "FSI_getTxBufferPtr",
        "FSI_getTxWordCount"
    ],
    "TX_PING_TAG": [
        "FSI_enableTxPingTimer",
        "FSI_setTxPingTag"
    ],
    "TX_PING_TO_REF": [
        "FSI_enableTxPingTimer"
    ],
    "TX_PING_TO_CNT": [
        "FSI_getTxCurrentPingTimeoutCounter"
    ],
    "TX_DMA_CTRL": [
        "FSI_enableTxDMAEvent",
        "FSI_disableTxDMAEvent"
    ],
    "TX_LOCK_CTRL": [
        "FSI_lockTxCtrl"
    ],
    "TX_EVT_STS": [
        "FSI_getTxEventStatus"
    ],
    "TX_EVT_FRC": [
        "FSI_forceTxEvents"
    ],
    "TX_EVT_CLR": [
        "FSI_clearTxEvents"
    ],
    "TX_USER_CRC": [
        "FSI_enableTxUserCRC"
    ],
    "TX_ECC_DATA": [
        "FSI_setTxECCdata"
    ],
    "TX_ECC_VAL": [
        "FSI_getTxECCValue"
    ],
    "TX_INT_CTRL": [
        "FSI_enableTxInterrupt",
        "FSI_disableTxInterrupt"
    ],
    "RX_OPER_CTRL": [
        "FSI_setRxDataWidth",
        "FSI_enableRxSPIMode",
        "FSI_disableRxSPIMode",
        "FSI_setRxSoftwareFrameSize",
        "FSI_setRxECCComputeWidth",
        "FSI_setRxPingTimeoutMode"
    ],
    "RX_FRAME_INFO": [
        "FSI_getRxFrameType"
    ],
    "RX_DMA_CTRL": [
        "FSI_enableRxDMAEvent",
        "FSI_disableRxDMAEvent"
    ],
    "RX_FRAME_TAG_UDATA": [
        "FSI_getRxFrameTag",
        "FSI_getRxUserDefinedData"
    ],
    "RX_EVT_STS": [
        "FSI_getRxEventStatus"
    ],
    "RX_EVT_FRC": [
        "FSI_forceRxEvents"
    ],
    "RX_EVT_CLR": [
        "FSI_clearRxEvents"
    ],
    "RX_CRC_INFO": [
        "FSI_getRxReceivedCRC",
        "FSI_getRxComputedCRC"
    ],
    "RX_BUF_PTR_LOAD": [
        "FSI_setRxBufferPtr"
    ],
    "RX_BUF_PTR_STS": [
        "FSI_getRxBufferPtr",
        "FSI_getRxWordCount"
    ],
    "RX_FRAME_WD_REF": [
        "FSI_enableRxFrameWatchdog"
    ],
    "RX_FRAME_WD_CNT": [
        "FSI_getRxFrameWatchdogCounter"
    ],
    "RX_PING_WD_REF": [
        "FSI_enableRxPingWatchdog"
    ],
    "RX_PING_WD_CNT": [
        "FSI_getRxPingWatchdogCounter"
    ],
    "RX_PING_TAG": [
        "FSI_getRxPingTag",
        "FSI_setRxPingTagRef",
        "FSI_getRxPingTagRef",
        "FSI_setRxPingTagMask",
        "FSI_getRxPingTagMask",
        "FSI_enableRxPingTagCompare",
        "FSI_disableRxPingTagCompare",
        "FSI_enableRxPingBroadcast",
        "FSI_disableRxPingBroadcast"
    ],
    "RX_LOCK_CTRL": [
        "FSI_lockRxCtrl"
    ],
    "RX_ECC_DATA": [
        "FSI_setRxECCData"
    ],
    "RX_ECC_VAL": [
        "FSI_setRxReceivedECCValue"
    ],
    "RX_ECC_SEC_DATA": [
        "FSI_getRxECCCorrectedData"
    ],
    "RX_ECC_LOG": [
        "FSI_getRxECCLog"
    ],
    "RX_INT1_CTRL": [
        "FSI_enableRxInterrupt",
        "FSI_disableRxInterrupt"
    ],
    "RX_INT2_CTRL": [
        "FSI_enableRxInterrupt",
        "FSI_disableRxInterrupt"
    ],
    "RX_FRAME_TAG_CMP": [
        "FSI_setRxFrameTagRef",
        "FSI_getRxFrameTagRef",
        "FSI_setRxFrameTagMask",
        "FSI_getRxFrameTagMask",
        "FSI_enableRxFrameTagCompare",
        "FSI_disableRxFrameTagCompare",
        "FSI_enableRxFrameBroadcast",
        "FSI_disableRxFrameBroadcast"
    ],
    "RX_PING_TAG_CMP": [
        "FSI_setRxPingTagRef",
        "FSI_getRxPingTagRef",
        "FSI_setRxPingTagMask",
        "FSI_getRxPingTagMask",
        "FSI_enableRxPingTagCompare",
        "FSI_disableRxPingTagCompare",
        "FSI_enableRxPingBroadcast",
        "FSI_disableRxPingBroadcast"
    ],
    "GPADIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
    ],
    "GPBDIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
    ],
    "GPCDIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
    ],
    "GPDDIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
    ],
    "GPGDIR": [
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
    "GPCPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPDPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPFPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPGPUD": [
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
    "GPCINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPDINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPFINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPGINV": [
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
    "GPCODR": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPDODR": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPGODR": [
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
    "GPCQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPCQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPDQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPDQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPFQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPFQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPGQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPGQSEL2": [
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
    "GPCCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPDCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPFCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPGCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPHCTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPACSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPACSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPACSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPACSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPBCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPBCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPBCSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPBCSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPCCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPCCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPCCSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPCCSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPDCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPDCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPDCSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPFCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPFCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPFCSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPFCSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPGCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPGCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPGCSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPGCSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPHCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPHCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPHCSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPHCSEL4": [
        "GPIO_setControllerCore"
    ],
    "AGPIOCTRLH": [
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
    "GPCMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPCMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPDMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPDMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPFMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPFMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPGMUX2": [
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
    "GPCGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPCGMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPDGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPDGMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPFGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPFGMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPGGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPGGMUX2": [
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
    "GPCDAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPDDAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPFDAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPGDAT": [
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
    "GPCSET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPDSET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPGSET": [
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
    "GPCCLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPDCLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPGCLEAR": [
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
    "GPCTOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPDTOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPGTOGGLE": [
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
    "GPCLOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPDLOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPFLOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPGLOCK": [
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
    "GPCCR": [
        "GPIO_commitPortConfig"
    ],
    "GPDCR": [
        "GPIO_commitPortConfig"
    ],
    "GPFCR": [
        "GPIO_commitPortConfig"
    ],
    "GPGCR": [
        "GPIO_commitPortConfig"
    ],
    "GPHCR": [
        "GPIO_commitPortConfig"
    ],
    "HRCTL": [
        "HRCAP_enableHighResolution",
        "HRCAP_disableHighResolution",
        "HRCAP_enableHighResolutionClock",
        "HRCAP_disbleHighResolutionClock",
        "HRCAP_startCalibration",
        "HRCAP_setCalibrationMode",
        "HRCAP_isCalibrationBusy"
    ],
    "HRINTEN": [
        "HRCAP_enableCalibrationInterrupt",
        "HRCAP_disableCalibrationInterrupt"
    ],
    "HRFLG": [
        "HRCAP_getCalibrationFlags"
    ],
    "HRCLR": [
        "HRCAP_clearCalibrationFlags"
    ],
    "HRFRC": [
        "HRCAP_forceCalibrationFlags"
    ],
    "HRCALPRD": [
        "HRCAP_setCalibrationPeriod",
        "HRCAP_configCalibrationPeriod"
    ],
    "HRSYSCLKCAP": [
        "HRCAP_getCalibrationClockPeriod"
    ],
    "HRCLKCAP": [
        "HRCAP_getCalibrationClockPeriod"
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
    "MEM_INIT": [
        "Interrupt_initModule"
    ],
    "MEM_INIT_STS": [
        "Interrupt_initModule"
    ],
    "MMR_CLR": [
        "Interrupt_initModule"
    ],
    "NMI_VECT": [
        "Interrupt_initVectorTable",
        "Interrupt_configNMI",
        "Interrupt_register",
        "Interrupt_unregister"
    ],
    "INT_VECT_ADDR(i)": [
        "Interrupt_initVectorTable",
        "Interrupt_configChannel",
        "Interrupt_register",
        "Interrupt_unregister"
    ],
    "INT_CTL_L(i)": [
        "Interrupt_configChannel",
        "Interrupt_enable",
        "Interrupt_disable"
    ],
    "INT_CONFIG(i)": [
        "Interrupt_configChannel",
        "Interrupt_setPriority",
        "Interrupt_setContextID"
    ],
    "INT_LINK_OWNER(i)": [
        "Interrupt_configChannel",
        "Interrupt_setLinkOwner",
        "Interrupt_setAPILink"
    ],
    "NMI_LINK_OWNER": [
        "Interrupt_configNMI",
        "Interrupt_setLinkOwner"
    ],
    "GLOBAL_EN": [
        "Interrupt_enableGlobal",
        "Interrupt_disableGlobal"
    ],
    "INT_CTL_H(i)": [
        "Interrupt_force",
        "Interrupt_clearFlag",
        "Interrupt_clearOverflowFlag"
    ],
    "RTINT_THRESHOLD": [
        "Interrupt_setThreshold"
    ],
    "INT_GRP_MASK": [
        "Interrupt_setGroupMask"
    ],
    "TASK_CTRL": [
        "Interrupt_setActiveContextID",
        "Interrupt_enableSupervisorIgnoreINTE",
        "Interrupt_disableSupervisorIgnoreINTE"
    ],
    "RTINT_SP_H": [
        "Interrupt_setRTINTSPWarning"
    ],
    "INTSP": [
        "Interrupt_setINTSP"
    ],
    "BOOT_LINK_CTRL": [
        "Interrupt_lockBootLinkUpdates"
    ],
    "COUNTERL": [
        "IPC_getCounter"
    ],
    "COUNTERH": [
        "IPC_getCounter"
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
        "LIN_clearGlobalInterruptStatus",
        "UART_clearGlobalInterruptFlag"
    ],
    "GLB_INT_FLG": [
        "LIN_getGlobalInterruptStatus",
        "UART_getGlobalInterruptFlagStatus"
    ],
    "SCIPIO2": [
        "LIN_getPinStatus"
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
        "PMBus_setClkLowTimeoutIntEdge",
        "PMBus_enableZeroHoldTime",
        "PMBus_disableZeroHoldTime"
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
    "SRC_BEG_ADDR_SHADOW": [
        "voidDMA_configAddresses",
        "staticinlinevoidDMA_configSourceAddress"
    ],
    "SRC_ADDR_SHADOW": [
        "voidDMA_configAddresses",
        "staticinlinevoidDMA_configSourceAddress"
    ],
    "DST_BEG_ADDR_SHADOW": [
        "voidDMA_configAddresses",
        "staticinlinevoidDMA_configDestAddress"
    ],
    "DST_ADDR_SHADOW": [
        "voidDMA_configAddresses",
        "staticinlinevoidDMA_configDestAddress"
    ],
    "BURST_SIZE": [
        "voidDMA_configBurst"
    ],
    "SRC_BURST_STEP": [
        "voidDMA_configBurst"
    ],
    "DST_BURST_STEP": [
        "voidDMA_configBurst"
    ],
    "TRANSFER_SIZE": [
        "voidDMA_configTransfer"
    ],
    "SRC_TRANSFER_STEP": [
        "voidDMA_configTransfer"
    ],
    "DST_TRANSFER_STEP": [
        "voidDMA_configTransfer"
    ],
    "SRC_WRAP_SIZE": [
        "voidDMA_configWrap"
    ],
    "SRC_WRAP_STEP": [
        "voidDMA_configWrap"
    ],
    "DST_WRAP_SIZE": [
        "voidDMA_configWrap"
    ],
    "DST_WRAP_STEP": [
        "voidDMA_configWrap"
    ],
    "MODE": [
        "voidDMA_configMode",
        "staticinlinevoidDMA_enableTrigger",
        "staticinlinevoidDMA_disableTrigger",
        "staticinlinevoidDMA_setInterruptMode",
        "staticinlinevoidDMA_enableInterrupt",
        "staticinlinevoidDMA_disableInterrupt",
        "staticinlinevoidDMA_enableOverrunInterrupt",
        "staticinlinevoidDMA_disableOverrunInterrupt",
        "SSU_getSSUMode"
    ],
    "MPUR_CHMASK(i)": [
        "voidDMA_configMPURegion"
    ],
    "MPUR_START(i)": [
        "voidDMA_configMPURegion"
    ],
    "MPUR_END(i)": [
        "voidDMA_configMPURegion"
    ],
    "MPUR_ACCESS(i)": [
        "voidDMA_configMPURegion"
    ],
    "DMACTRL": [
        "__attribute__",
        "__attribute__",
        "__attribute__"
    ],
    "DEBUGCTRL": [
        "__attribute__"
    ],
    "SWPRI1": [
        "__attribute__"
    ],
    "SWPRI2": [
        "__attribute__"
    ],
    "DMACFG_LOCK": [
        "__attribute__",
        "__attribute__"
    ],
    "DMACFG_COMMIT": [
        "__attribute__",
        "__attribute__"
    ],
    "BURST_INTF_CTRL": [
        "staticinlinevoidDMA_setBurstSignalingMode"
    ],
    "CHCFG_LOCK": [
        "staticinlinevoidDMA_lockAllChannelConfig",
        "staticinlinevoidDMA_unlockAllChannelConfig",
        "staticinlinevoidDMA_lockChannelConfig",
        "staticinlinevoidDMA_unlockChannelConfig"
    ],
    "CHCFG_COMMIT": [
        "staticinlinevoidDMA_commitAllChannelConfig",
        "staticinlinevoidDMA_commitChannelConfig",
        "__attribute__"
    ],
    "MPUCTRL": [
        "__attribute__",
        "__attribute__"
    ],
    "MPUCFG_LOCK": [
        "__attribute__",
        "__attribute__"
    ],
    "MPUCFG_COMMIT": [
        "__attribute__",
        "__attribute__"
    ],
    "MPUR_LOCK(i)": [
        "__attribute__",
        "__attribute__",
        "__attribute__",
        "__attribute__"
    ],
    "MPUR_COMMIT(i)": [
        "__attribute__",
        "__attribute__",
        "__attribute__"
    ],
    "RCFG": [
        "SENT_enableSENTReceiver",
        "SENT_disableSENTReceiver",
        "SENT_enableSENTCRC",
        "SENT_disableSENTCRC",
        "SENT_enableSENTPausePulse",
        "SENT_disableSENTPausePulse",
        "SENT_setCRCType",
        "SENT_setCRCWidth",
        "SENT_setDataNibble",
        "SENT_setTTClock",
        "SENT_setRxCRC",
        "SENT_enableDMAtrigger",
        "SENT_disableDMAtrigger",
        "SENT_configureFIFOMode",
        "SENT_setGFILTClockCycle",
        "SENT_enableTimeStamp",
        "SENT_disableTimeStamp",
        "SENT_enableERRDATAwrite",
        "SENT_disableERRDATAwrite",
        "SENT_enableMTPMode",
        "SENT_disableMTPMode",
        "SENT_setRFIFOTriggerLevel"
    ],
    "RFDATA": [
        "SENT_getFIFO"
    ],
    "RCFG2": [
        "SENT_enableDMAtrigger",
        "SENT_disableDMAtrigger",
        "SENT_configureFIFOMode",
        "SENT_setGFILTClockCycle",
        "SENT_enableTimeStamp",
        "SENT_disableTimeStamp",
        "SENT_enableERRDATAwrite",
        "SENT_disableERRDATAwrite",
        "SENT_enableMTPMode",
        "SENT_disableMTPMode",
        "SENT_setRFIFOTriggerLevel"
    ],
    "CSENT_SWR": [
        "SENT_enableSoftwareReset",
        "SENT_disableSoftwareReset"
    ],
    "DATA0_MAP": [
        "SENT_setDataSortingFormat"
    ],
    "CSENT_TO": [
        "SENT_configureTimeout"
    ],
    "CSENT_RXD": [
        "SENT_readSerialDataIn"
    ],
    "REINT": [
        "SENT_enableInterrupt",
        "SENT_disableInterrupt"
    ],
    "RINTFLAG": [
        "SENT_readInterruptStatus"
    ],
    "RSETINT": [
        "SENT_setSWInterrupt"
    ],
    "RCLRINT": [
        "SENT_clearInterruptFlag"
    ],
    "MDATA(i)": [
        "SENT_getFrameData"
    ],
    "BC_MTP_EN": [
        "SENT_enableMTPChannel",
        "SENT_disableMTPChannel"
    ],
    "BC_MTP_PERIOD": [
        "SENT_setMTPPeriod"
    ],
    "BC_TRIGSEL": [
        "SENT_setMTPTriggerSelect"
    ],
    "BC_MTP_SWTR": [
        "SENT_enableMTPSoftwareTrigger",
        "SENT_disableMTPSoftwareTrigger"
    ],
    "S1_MTP_TO": [
        "SENT_configureMTPTimeout"
    ],
    "BC_MTP_CMP1": [
        "SENT_setBroadcastChMTPToggleTime"
    ],
    "S1_MTP_CMP1": [
        "SENT_setSensor1MTPToggleTime"
    ],
    "S2_MTP_CMP1": [
        "SENT_setSensor2MTPToggleTime"
    ],
    "S3_MTP_CMP1": [
        "SENT_setSensor3MTPToggleTime"
    ],
    "S4_MTP_CMP1": [
        "SENT_setSensor4MTPToggleTime"
    ],
    "WAITTIME": [
        "SENT_setMTPWaitTime"
    ],
    "MTP_SWR": [
        "SENT_setMTPSoftwareReset"
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
    "CPUID": [
        "SSU_getCPUID",
        "SysCtl_getCPUID"
    ],
    "LINK2_AP_OVERRIDE": [
        "SSU_enableLink2APOverride",
        "SSU_disableLink2APOverride"
    ],
    "RST_VECT": [
        "SSU_configBootAddress"
    ],
    "RST_LINK": [
        "SSU_configBootAddress"
    ],
    "CPU_RST_CTRL": [
        "SSU_controlCPUReset"
    ],
    "FLSEMSTAT": [
        "SSU_claimFlashSemaphore",
        "SSU_releaseFlashSemaphore"
    ],
    "FLSEMREQ": [
        "SSU_claimFlashSemaphore"
    ],
    "FLSEMCLR": [
        "SSU_releaseFlashSemaphore"
    ],
    "RAMOPENFRC": [
        "SSU_forceRAMOPEN"
    ],
    "RAMOPENCLR": [
        "SSU_clearRAMOPEN"
    ],
    "RAMOPENSTAT": [
        "SSU_getRAMOPENStatus"
    ],
    "SYNCBUSY": [
        "SysCtl_pollSyncBusy"
    ],
    "CLKSRCCTL1": [
        "SysCtl_selectXTAL",
        "SysCtl_selectXTALSingleEnded",
        "SysCtl_selectOscSource",
        "SysCtl_getClock",
        "SysCtl_setClock"
    ],
    "XTALCR2": [
        "SysCtl_selectXTAL"
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
        "SysCtl_setClock"
    ],
    "SYSPLLSTS": [
        "SysCtl_setClock"
    ],
    "PARTIDL": [
        "SysCtl_getDeviceParametric"
    ],
    "PARTIDH": [
        "SysCtl_getDeviceParametric"
    ],
    "MCUCNF1": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF2": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF4": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF7": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF10": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF13": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF14": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF16": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF17": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF18": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF19": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF23": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF26": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF31": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF64": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF65": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF74": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF76": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF78": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF79": [
        "SysCtl_emulateDevice"
    ],
    "MCUCNF81": [
        "SysCtl_emulateDevice"
    ],
    "PCLKCR0": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "PCLKCR1": [
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
    "PCLKCR6": [
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
    "PCLKCR16": [
        "SysCtl_enablePeripheral",
        "SysCtl_disablePeripheral"
    ],
    "SOFTPRES0": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES1": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES2": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES3": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES4": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES6": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES7": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES8": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES9": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES10": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES13": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES14": [
        "SysCtl_resetPeripheral"
    ],
    "SOFTPRES16": [
        "SysCtl_resetPeripheral"
    ],
    "RESCCLR": [
        "SysCtl_clearResetCause",
        "staticinlinevoidSysCtl_clearWatchdogResetStatus"
    ],
    "RESC": [
        "SysCtl_clearResetCause",
        "staticinlineboolSysCtl_getWatchdogResetStatus",
        "staticinlinevoidSysCtl_clearWatchdogResetStatus"
    ],
    "SIMRESET": [
        "SysCtl_simulateReset"
    ],
    "ESMXRSNCTL": [
        "SysCtl_enableESMResetCauses",
        "SysCtl_disableESMResetCauses"
    ],
    "ESM": [
        "SysCtl_enableESMResetCauses",
        "SysCtl_disableESMResetCauses"
    ],
    "RSTSTAT": [
        "SysCtl_isCPU2Reset",
        "SysCtl_isCPU3Reset"
    ],
    "LPMSTAT": [
        "SysCtl_getCPU2LPMStatus",
        "SysCtl_getCPU3LPMStatus"
    ],
    "LPMCR": [
        "SysCtl_enterIdleMode",
        "SysCtl_enterStandbyMode",
        "SysCtl_setStandbyQualificationPeriod"
    ],
    "CMPSSLPMSEL": [
        "SysCtl_enableLPMWakeupPin",
        "SysCtl_disableLPMWakeupPin"
    ],
    "LSEN": [
        "SysCtl_disableLockStep"
    ],
    "SICCONFIG": [
        "SysCtl_enableSafetyInterconnect",
        "SysCtl_disableSafetyInterconnect"
    ],
    "SYNCSELECT": [
        "SysCtl_setSyncOutputConfig"
    ],
    "EPWMXLINKCFG": [
        "SysCtl_enableEPWMXLINK",
        "SysCtl_disableEPWMXLINK"
    ],
    "ADCSOCOUTSELECT": [
        "SysCtl_enableExtADCSOCSource",
        "SysCtl_disableExtADCSOCSource"
    ],
    "ADCSOCOUTSELECT1": [
        "SysCtl_enableExtADCSOCSource",
        "SysCtl_disableExtADCSOCSource"
    ],
    "ETHERCATCTL": [
        "SysCtl_enableEthercatI2Cloopback",
        "SysCtl_disableEthercatI2Cloopback"
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
    "DEVCFGLOCK1": [
        "SysCtl_lockAllPeriphConfigRegisters"
    ],
    "DEVCFGLOCK3": [
        "SysCtl_lockAllPeriphConfigRegisters"
    ],
    "DEVCFGLOCK4": [
        "SysCtl_lockAllPeriphConfigRegisters"
    ],
    "DEVCFGLOCK5": [
        "SysCtl_lockAllPeriphConfigRegisters"
    ],
    "MCUCNFLOCK1": [
        "SysCtl_lockAllMCUCNFRegisters"
    ],
    "MCUCNFLOCK3": [
        "SysCtl_lockAllMCUCNFRegisters"
    ],
    "CLKCFGLOCK1": [
        "SysCtl_lockAllClockConfigRegisters"
    ],
    "CPUPERCFGLOCK1": [
        "SysCtl_lockAllPeriphClockRegisters"
    ],
    "REVID": [
        "SysCtl_getDeviceRevision"
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
        "UART_enableModuleNonFIFO",
        "UART_disableModule",
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
        "UART_getFIFOLevel"
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
    "SCSR": [
        "staticinlinevoidSysCtl_setWatchdogMode",
        "staticinlineboolSysCtl_isWatchdogInterruptActive",
        "staticinlinevoidSysCtl_clearWatchdogOverride"
    ],
    "WDCR": [
        "staticinlinevoidSysCtl_disableWatchdog",
        "staticinlinevoidSysCtl_enableWatchdog",
        "staticinlinevoidSysCtl_setWatchdogPredivider",
        "staticinlinevoidSysCtl_setWatchdogPrescaler"
    ],
    "WDKEY": [
        "staticinlinevoidSysCtl_serviceWatchdog",
        "staticinlinevoidSysCtl_enableWatchdogReset",
        "staticinlinevoidSysCtl_resetWatchdog"
    ],
    "WDCNTR": [
        "staticinlineuint16_tSysCtl_getWatchdogCounterValue"
    ],
    "WDWCR": [
        "staticinlinevoidSysCtl_setWatchdogWindowValue"
    ],
    "OUTPUTXBARG0SEL(i)": [
        "XBAR_selectOutputXbarInputSource"
    ],
    "PWMXBARG0SEL(i)": [
        "XBAR_selectEpwmXbarInputSource"
    ],
    "CLBXBARG0SEL(i)": [
        "XBAR_selectClbXbarInputSource"
    ],
    "MDLXBARG0SEL(i)": [
        "XBAR_selectMindbXbarInputSource"
    ],
    "ICLXBARG0SEL(i)": [
        "XBAR_selectIclXbarInputSource"
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
    "FLG6": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG7": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG8": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG9": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG10": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG11": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG12": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG13": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG14": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG15": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG16": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG17": [
        "XBAR_getInputFlagStatus"
    ],
    "FLG18": [
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
    "CLR6": [
        "XBAR_clearInputFlag"
    ],
    "CLR7": [
        "XBAR_clearInputFlag"
    ],
    "CLR8": [
        "XBAR_clearInputFlag"
    ],
    "CLR9": [
        "XBAR_clearInputFlag"
    ],
    "CLR10": [
        "XBAR_clearInputFlag"
    ],
    "CLR11": [
        "XBAR_clearInputFlag"
    ],
    "CLR12": [
        "XBAR_clearInputFlag"
    ],
    "CLR13": [
        "XBAR_clearInputFlag"
    ],
    "CLR14": [
        "XBAR_clearInputFlag"
    ],
    "CLR15": [
        "XBAR_clearInputFlag"
    ],
    "CLR16": [
        "XBAR_clearInputFlag"
    ],
    "CLR17": [
        "XBAR_clearInputFlag"
    ],
    "CLR18": [
        "XBAR_clearInputFlag"
    ],
    "INPUTSELECT(i)": [
        "XBAR_setInputPin",
        "XBAR_lockInput"
    ],
    "INPUTSELECTLOCK1": [
        "XBAR_lockInput"
    ],
    "INPUTSELECTLOCK2": [
        "XBAR_lockInput"
    ],
    "OUTPUTXBARSTATUS": [
        "XBAR_getOutputSignalStatus"
    ],
    "OUTPUTXBARFLAG": [
        "XBAR_getOutputLatchStatus",
        "XBAR_clearOutputLatch",
        "XBAR_forceOutputLatch",
        "XBAR_invertOutputSignalBeforeLatch"
    ],
    "OUTPUTXBARFLAGCLEAR": [
        "XBAR_clearOutputLatch"
    ],
    "OUTPUTXBARFLAGFORCE": [
        "XBAR_forceOutputLatch"
    ],
    "OUTPUTXBARFLAGINVERT": [
        "XBAR_invertOutputSignalBeforeLatch"
    ],
    "OUTPUTXBAROUTLATCH": [
        "XBAR_setOutputLatchMode"
    ],
    "OUTPUTXBAROUTSTRETCH": [
        "XBAR_selectOutputStretchSource"
    ],
    "OUTPUTXBAROUTLENGTH": [
        "XBAR_selectOutputStretchLength"
    ]
}
module.exports = { 
  registerToFunction: REGISTER_TO_FUNCTION
}
