let REGISTER_TO_FUNCTION = 
{
    "ADCCTL2": [
        "ADC_setMode",
        "ADC_setINLTrim",
        "ADC_setOffsetTrim",
        "ADC_setPrescaler"
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
    "ADCOFFTRIM": [
        "ADC_setOffsetTrim"
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
    "LOCK": [
        "ASysCtl_lockTemperatureSensor",
        "BGCRC_lockRegister",
        "BGCRC_unlockRegister",
        "CLB_enableLock",
        "EPWM_lockRegisters"
    ],
    "CTRL1": [
        "BGCRC_setConfig"
    ],
    "WD_CFG": [
        "BGCRC_enableWatchdog",
        "BGCRC_disableWatchdog"
    ],
    "WD_MIN": [
        "BGCRC_setWatchdogWindow"
    ],
    "WD_MAX": [
        "BGCRC_setWatchdogWindow"
    ],
    "CTRL2": [
        "BGCRC_setRegion",
        "BGCRC_halt",
        "BGCRC_resume"
    ],
    "START_ADDR": [
        "BGCRC_setRegion"
    ],
    "WD_CNT": [
        "BGCRC_getWatchdogCounterValue"
    ],
    "INTEN": [
        "BGCRC_enableInterrupt",
        "BGCRC_disableInterrupt"
    ],
    "INTFLG": [
        "BGCRC_getInterruptStatus"
    ],
    "INTCLR": [
        "BGCRC_clearInterruptStatus"
    ],
    "INTFRC": [
        "BGCRC_forceInterrupt"
    ],
    "NMIFLG": [
        "BGCRC_getNMIStatus"
    ],
    "NMICLR": [
        "BGCRC_clearNMIStatus"
    ],
    "NMIFRC": [
        "BGCRC_forceNMI"
    ],
    "GOLDEN": [
        "BGCRC_setGoldenCRCValue"
    ],
    "EN": [
        "BGCRC_start",
        "BGCRC_getRunStatus"
    ],
    "SEED": [
        "BGCRC_setSeedValue"
    ],
    "RESULT": [
        "BGCRC_getResult"
    ],
    "CURR_ADDR": [
        "BGCRC_getCurrentAddress"
    ],
    "COMMIT": [
        "BGCRC_commitRegisterLock"
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
        "CAN_enableDMARequests",
        "CAN_disableDMARequests",
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
        "CAN_selectClockSource",
        "SysCtl_getAuxClock",
        "SysCtl_setAuxClock",
        "SysCtl_selectOscSourceAuxPLL"
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
    "CLA1TASKSRCSEL1": [
        "CLA_setTriggerSource"
    ],
    "CLA1TASKSRCSEL2": [
        "CLA_setTriggerSource"
    ],
    "MVECT1": [
        "CLA_mapTaskVector"
    ],
    "MVECT2": [
        "CLA_mapTaskVector"
    ],
    "MVECT3": [
        "CLA_mapTaskVector"
    ],
    "MVECT4": [
        "CLA_mapTaskVector"
    ],
    "MVECT5": [
        "CLA_mapTaskVector"
    ],
    "MVECT6": [
        "CLA_mapTaskVector"
    ],
    "MVECT7": [
        "CLA_mapTaskVector"
    ],
    "MVECT8": [
        "CLA_mapTaskVector"
    ],
    "MCTL": [
        "CLA_performHardReset",
        "CLA_performSoftReset",
        "CLA_enableIACK",
        "CLA_disableIACK",
        "CLA_enableBackgroundTask",
        "CLA_disableBackgroundTask",
        "CLA_startBackgroundTask",
        "CLA_enableHardwareTrigger",
        "CLA_disableHardwareTrigger"
    ],
    "MIFR": [
        "CLA_getPendingTaskFlag",
        "CLA_getAllPendingTaskFlags",
        "CLA_forceTasks"
    ],
    "MIOVF": [
        "CLA_getTaskOverflowFlag",
        "CLA_getAllTaskOverflowFlags"
    ],
    "MICLR": [
        "CLA_clearTaskFlags"
    ],
    "MIFRC": [
        "CLA_forceTasks"
    ],
    "MIER": [
        "CLA_enableTasks",
        "CLA_disableTasks"
    ],
    "MIRUN": [
        "CLA_getTaskRunStatus",
        "CLA_getAllTaskRunStatus"
    ],
    "MVECTBGRNDACTIVE": [
        "CLA_getBackgroundActiveVector"
    ],
    "MVECTBGRND": [
        "CLA_getBackgroundActiveVector",
        "CLA_mapBackgroundTaskVector"
    ],
    "MCTLBGRND": [
        "CLA_enableBackgroundTask",
        "CLA_disableBackgroundTask",
        "CLA_startBackgroundTask",
        "CLA_enableHardwareTrigger",
        "CLA_disableHardwareTrigger"
    ],
    "MSTSBGRND": [
        "CLA_getBackgroundTaskStatus"
    ],
    "SOFTINTEN": [
        "CLA_enableSoftwareInterrupt",
        "CLA_disableSoftwareInterrupt"
    ],
    "SOFTINTFRC": [
        "CLA_forceSoftwareInterrupt"
    ],
    "BUF_PTR": [
        "CLB_clearFIFOs"
    ],
    "PULL(i)": [
        "CLB_clearFIFOs",
        "CLB_writeFIFOs"
    ],
    "PUSH(i)": [
        "CLB_readFIFOs"
    ],
    "LOAD_EN": [
        "CLB_enableCLB",
        "CLB_disableCLB",
        "CLB_enableNMI",
        "CLB_disableNMI",
        "CLB_writeInterface",
        "CLB_enablePipelineMode",
        "CLB_disablePipelineMode"
    ],
    "PRESCALE_CTRL": [
        "CLB_configureClockPrescalar",
        "CLB_configureStrobeMode"
    ],
    "GP_REG": [
        "CLB_writeSWReleaseControl",
        "CLB_writeSWGateControl",
        "CLB_setGPREG",
        "CLB_getGPREG"
    ],
    "COUNT_MATCH_TAP_SEL": [
        "CLB_configCounterTapSelects"
    ],
    "OUTPUT_COND_CTRL_0": [
        "CLB_configAOC"
    ],
    "LOAD_ADDR": [
        "CLB_writeInterface"
    ],
    "LOAD_DATA": [
        "CLB_writeInterface"
    ],
    "INPUT_FILTER": [
        "CLB_selectInputFilter",
        "CLB_enableSynchronization",
        "CLB_disableSynchronization",
        "CLB_enableInputPipelineMode",
        "CLB_disableInputPipelineMode"
    ],
    "IN_MUX_SEL_0": [
        "CLB_configGPInputMux"
    ],
    "LCL_MUX_SEL_1": [
        "CLB_configLocalInputMux"
    ],
    "LCL_MUX_SEL_2": [
        "CLB_configLocalInputMux"
    ],
    "GLBL_MUX_SEL_1": [
        "CLB_configGlobalInputMux"
    ],
    "GLBL_MUX_SEL_2": [
        "CLB_configGlobalInputMux"
    ],
    "OUT_EN": [
        "CLB_setOutputMask"
    ],
    "INTR_TAG_REG": [
        "CLB_getInterruptTag",
        "CLB_clearInterruptTag"
    ],
    "LUT4_IN0": [
        "CLB_selectLUT4Inputs"
    ],
    "LUT4_IN1": [
        "CLB_selectLUT4Inputs"
    ],
    "LUT4_IN2": [
        "CLB_selectLUT4Inputs"
    ],
    "LUT4_IN3": [
        "CLB_selectLUT4Inputs"
    ],
    "LUT4_FN1_0": [
        "CLB_configLUT4Function"
    ],
    "LUT4_FN2": [
        "CLB_configLUT4Function"
    ],
    "FSM_EXTRA_IN0": [
        "CLB_selectFSMInputs"
    ],
    "FSM_EXTERNAL_IN0": [
        "CLB_selectFSMInputs"
    ],
    "FSM_EXTERNAL_IN1": [
        "CLB_selectFSMInputs"
    ],
    "FSM_EXTRA_IN1": [
        "CLB_selectFSMInputs"
    ],
    "FSM_LUT_FN1_0": [
        "CLB_configFSMLUTFunction"
    ],
    "FSM_LUT_FN2": [
        "CLB_configFSMLUTFunction"
    ],
    "FSM_NEXT_STATE_0": [
        "CLB_configFSMNextState"
    ],
    "FSM_NEXT_STATE_1": [
        "CLB_configFSMNextState"
    ],
    "FSM_NEXT_STATE_2": [
        "CLB_configFSMNextState"
    ],
    "COUNT_RESET": [
        "CLB_selectCounterInputs"
    ],
    "COUNT_MODE_1": [
        "CLB_selectCounterInputs"
    ],
    "COUNT_MODE_0": [
        "CLB_selectCounterInputs"
    ],
    "COUNT_EVENT": [
        "CLB_selectCounterInputs"
    ],
    "MISC_CONTROL": [
        "CLB_configMiscCtrlModes"
    ],
    "OUTPUT_LUT_0": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_1": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_2": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_3": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_4": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_5": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_6": [
        "CLB_configOutputLUT"
    ],
    "OUTPUT_LUT_7": [
        "CLB_configOutputLUT"
    ],
    "HLC_EVENT_SEL": [
        "CLB_configHLCEventSelect"
    ],
    "DBG_OUT": [
        "CLB_getOutputStatus"
    ],
    "MISC_ACCESS_CTRL": [
        "CLB_disableOutputMaskUpdates",
        "CLB_enableOutputMaskUpdates",
        "CLB_disableSPIBufferAccess",
        "CLB_enableSPIBufferAccess"
    ],
    "SPI_DATA_CTRL_HI": [
        "CLB_configSPIBufferLoadSignal",
        "CLB_configSPIBufferShift"
    ],
    "CTRIPHFILCTL": [
        "CMPSS_configFilterHigh",
        "CMPSS_initFilterHigh"
    ],
    "CTRIPHFILCLKCTL": [
        "CMPSS_configFilterHigh"
    ],
    "CTRIPLFILCTL": [
        "CMPSS_configFilterLow",
        "CMPSS_initFilterLow"
    ],
    "CTRIPLFILCLKCTL": [
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
    "COMPDACCTL": [
        "CMPSS_configRamp",
        "CMPSS_configDAC",
        "CMPSS_configureSyncSource",
        "CMPSS_configBlanking",
        "CMPSS_enableBlanking",
        "CMPSS_disableBlanking"
    ],
    "RAMPMAXREFS": [
        "CMPSS_configRamp",
        "CMPSS_setMaxRampValue"
    ],
    "RAMPDECVALS": [
        "CMPSS_configRamp",
        "CMPSS_setRampDecValue"
    ],
    "RAMPDLYS": [
        "CMPSS_configRamp",
        "CMPSS_setRampDelayValue"
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
    "RAMPMAXREFA": [
        "CMPSS_getMaxRampValue"
    ],
    "RAMPDECVALA": [
        "CMPSS_getRampDecValue"
    ],
    "RAMPDLYA": [
        "CMPSS_getRampDelayValue"
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
    "DMACHSRCSEL2": [
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
    "EMIF1MSEL": [
        "EMIF_selectController"
    ],
    "EMIF1ACCPROT0": [
        "EMIF_setAccessProtection"
    ],
    "EMIF1COMMIT": [
        "EMIF_commitAccessConfig"
    ],
    "EMIF1LOCK": [
        "EMIF_lockAccessConfig",
        "EMIF_unlockAccessConfig"
    ],
    "ASYNC_CS2_CR": [
        "EMIF_setAsyncMode",
        "EMIF_enableAsyncExtendedWait",
        "EMIF_setAsyncTimingParams",
        "EMIF_setAsyncDataBusWidth"
    ],
    "ASYNC_CS3_CR": [
        "EMIF_setAsyncMode",
        "EMIF_enableAsyncExtendedWait",
        "EMIF_setAsyncTimingParams",
        "EMIF_setAsyncDataBusWidth"
    ],
    "ASYNC_CS4_CR": [
        "EMIF_setAsyncMode",
        "EMIF_enableAsyncExtendedWait",
        "EMIF_setAsyncTimingParams",
        "EMIF_setAsyncDataBusWidth"
    ],
    "ASYNC_WCCR": [
        "EMIF_setAsyncWaitPolarity",
        "EMIF_setAsyncMaximumWaitCycles"
    ],
    "INT_MSK": [
        "EMIF_enableAsyncInterrupt",
        "EMIF_disableAsyncInterrupt",
        "EMIF_getAsyncInterruptStatus",
        "EMIF_clearAsyncInterruptStatus"
    ],
    "INT_MSK_SET": [
        "EMIF_enableAsyncInterrupt"
    ],
    "INT_MSK_CLR": [
        "EMIF_disableAsyncInterrupt"
    ],
    "SDRAM_TR": [
        "EMIF_setSyncTimingParams"
    ],
    "SDR_EXT_TMNG": [
        "EMIF_setSyncSelfRefreshExitTmng"
    ],
    "SDRAM_RCR": [
        "EMIF_setSyncRefreshRate"
    ],
    "SDRAM_CR": [
        "EMIF_setSyncMemoryConfig",
        "EMIF_enableSyncSelfRefresh",
        "EMIF_disableSyncSelfRefresh",
        "EMIF_enableSyncPowerDown",
        "EMIF_disableSyncPowerDown",
        "EMIF_enableSyncRefreshInPowerDown",
        "EMIF_disableSyncRefreshInPowerDown"
    ],
    "TOTAL_SDRAM_AR": [
        "EMIF_getSyncTotalAccesses"
    ],
    "TOTAL_SDRAM_ACTR": [
        "EMIF_getSyncTotalActivateAccesses"
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
    "HWBP_MASK": [
        "ERAD_configBusComp"
    ],
    "HWBP_REF": [
        "ERAD_configBusComp"
    ],
    "HWBP_CNTL": [
        "ERAD_configBusComp"
    ],
    "CTM_CNTL": [
        "ERAD_configCounterInCountingMode",
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode",
        "ERAD_enableCounterResetInput",
        "ERAD_disableCounterResetInput"
    ],
    "CTM_REF": [
        "ERAD_configCounterInCountingMode",
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode"
    ],
    "CTM_INPUT_SEL": [
        "ERAD_configCounterInCountingMode",
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode",
        "ERAD_enableCounterResetInput"
    ],
    "CTM_INPUT_SEL_2": [
        "ERAD_configCounterInStartStopMode",
        "ERAD_configCounterInCumulativeMode",
        "ERAD_enableCounterResetInput"
    ],
    "GLBL_EVENT_AND_MASK": [
        "ERAD_configMask"
    ],
    "GLBL_EVENT_OR_MASK": [
        "ERAD_configMask"
    ],
    "GLBL_AND_EVENT_INT_MASK": [
        "ERAD_configMask"
    ],
    "GLBL_OR_EVENT_INT_MASK": [
        "ERAD_configMask"
    ],
    "GLBL_OWNER": [
        "ERAD_getOwnership",
        "ERAD_setOwnership"
    ],
    "GLBL_CTM_RESET": [
        "ERAD_resetCounter"
    ],
    "GLBL_ENABLE": [
        "ERAD_enableModules",
        "ERAD_disableModules"
    ],
    "GLBL_HALT_STAT": [
        "ERAD_getHaltStatus"
    ],
    "GLBL_EVENT_STAT": [
        "ERAD_getEventStatus"
    ],
    "GLBL_NMI_CTL": [
        "ERAD_enableNMI",
        "ERAD_disableNMI"
    ],
    "HWBP_STATUS": [
        "ERAD_getBusCompStatus"
    ],
    "HWBP_CLEAR": [
        "ERAD_clearBusCompEvent"
    ],
    "CTM_STATUS": [
        "ERAD_getCounterStatus"
    ],
    "CTM_CLEAR": [
        "ERAD_clearCounterEvent",
        "ERAD_clearCounterOverflow"
    ],
    "CTM_COUNT": [
        "ERAD_getCurrentCount",
        "ERAD_setCurrentCount"
    ],
    "CTM_MAX_COUNT": [
        "ERAD_getMaxCount",
        "ERAD_setMaxCount"
    ],
    "CTM_INPUT_COND": [
        "ERAD_setCounterInputConditioning"
    ],
    "CRC_GLOBAL_CTRL": [
        "ERAD_initCRC",
        "ERAD_enableCRC",
        "ERAD_disableCRC",
        "ERAD_setSeed",
        "ERAD_setCRCQualifier"
    ],
    "CRC_CURRENT": [
        "ERAD_getCurrentCRC"
    ],
    "CRC_SEED": [
        "ERAD_setSeed"
    ],
    "CRC_QUALIFIER": [
        "ERAD_setCRCQualifier"
    ],
    "INTR_SET": [
        "ESCSS_setRawInterruptStatus"
    ],
    "GPIN_GRP_CAP_SEL": [
        "ESCSS_setGPINGroupCaptureTriggerSelect"
    ],
    "GPOUT_GRP_CAP_SEL": [
        "ESCSS_setGPOUTGroupCaptureTriggerSelect"
    ],
    "RESET_DEST_CONFIG": [
        "ESCSS_enableCPUReset",
        "ESCSS_disableCPUReset",
        "ESCSS_enableResetToNMI",
        "ESCSS_disableResetToNMI",
        "ESCSS_enableResetToInterrupt",
        "ESCSS_disableResetToInterrupt"
    ],
    "SYNC0_CONFIG": [
        "ESCSS_configureSync0Connections"
    ],
    "SYNC1_CONFIG": [
        "ESCSS_configureSync1Connections"
    ],
    "CONFIG_LOCK": [
        "ESCSS_enableConfigurationLock",
        "ESCSS_enableIOConnectionLock",
        "ESCSS_disableIOConnectionLock",
        "ESCSS_isConfigurationLockEnabled"
    ],
    "MISC_IO_CONFIG": [
        "ESCSS_enableResetInputFromGpioPad",
        "ESCSS_disableResetInputFromGpioPad",
        "ESCSS_enableESCEEPROMI2CIoPadConnection",
        "ESCSS_disableESCEEPROMI2CIoPadConnection"
    ],
    "PHY_IO_CONFIG": [
        "ESCSS_configurePortCount",
        "ESCSS_enableAutoCompensationTxClkIOPad",
        "ESCSS_disableAutoCompensationTxClkIOPad"
    ],
    "SYNC_IO_CONFIG": [
        "ESCSS_enableSync0GpioMuxConnection",
        "ESCSS_disableSync0GpioMuxConnection",
        "ESCSS_enableSync1GpioMuxConnection",
        "ESCSS_disableSync1GpioMuxConnection"
    ],
    "LATCH_IO_CONFIG": [
        "ESCSS_enableLatch0GpioMuxConnection",
        "ESCSS_disableLatch0GpioMuxConnection",
        "ESCSS_enableLatch1GpioMuxConnection",
        "ESCSS_disableLatch1GpioMuxConnection"
    ],
    "MISC_CONFIG": [
        "ESCSS_configureEEPROMSize",
        "ESCSS_configureTX0ShiftForTxEnaAndTxData",
        "ESCSS_configureTX1ShiftForTxEnaAndTxData",
        "ESCSS_enablePDIEmulation",
        "ESCSS_disablePDIEmulation",
        "ESCSS_configurePhyAddressOffset"
    ],
    "IPREVNUM": [
        "ESCSS_readIPMinorRevNumber",
        "ESCSS_readIPMajorRevNumber",
        "ESCSS_readIPRevNumber"
    ],
    "INTR_RIS": [
        "ESCSS_getRawInterruptStatus",
        "ESCSS_readRawInterruptStatus"
    ],
    "INTR_MASK": [
        "ESCSS_setMaskedInterruptStatus",
        "ESCSS_resetMaskedInterruptStatus"
    ],
    "INTR_MIS": [
        "ESCSS_getMaskedInterruptStatus"
    ],
    "INTR_CLR": [
        "ESCSS_clearRawInterruptStatus"
    ],
    "LATCH_SEL": [
        "ESCSS_selectLatch0Mux",
        "ESCSS_selectLatch1Mux"
    ],
    "ACCESS_CTRL": [
        "ESCSS_configure16BitAsyncAccessWaitState",
        "ESCSS_enablePDIAccessTimeOut",
        "ESCSS_disablePDIAccessTimeOut",
        "ESCSS_enableDebugAccess",
        "ESCSS_disableDebugAccess"
    ],
    "GPIN_DAT": [
        "ESCSS_readGPINData",
        "ESCSS_setGPINData",
        "ESCSS_resetGPINData"
    ],
    "GPIN_PIPE": [
        "ESCSS_enableGPIPipelinedRegCaptureOnEvent",
        "ESCSS_disableGPIPipelinedRegCaptureOnEvent"
    ],
    "GPOUT_DAT": [
        "ESCSS_readGPOUTData"
    ],
    "GPOUT_PIPE": [
        "ESCSS_enableGPOUTPipelinedRegCaptureOnEvent",
        "ESCSS_disableGPOUTPipelinedRegCaptureOnEvent"
    ],
    "MEM_TEST": [
        "ESCSS_initMemory",
        "ESCSS_getMemoryInitDoneStatusNonBlocking",
        "ESCSS_getMemoryInitDoneStatusBlocking"
    ],
    "LED_CONFIG": [
        "ESCSS_enableLEDOptions",
        "ESCSS_disableLEDOptions"
    ],
    "GPIN_SEL": [
        "ESCSS_enableGPIN",
        "ESCSS_disableGPIN"
    ],
    "GPOUT_SEL": [
        "ESCSS_enableGPOUT",
        "ESCSS_disableGPOUT"
    ],
    "FRDCNTL": [
        "Flash_setWaitstates"
    ],
    "FBFALLBACK": [
        "Flash_setBankPowerMode"
    ],
    "FPAC1": [
        "Flash_setPumpPowerMode",
        "Flash_setPumpWakeupTime"
    ],
    "FRD_INTF_CTRL": [
        "Flash_enablePrefetch",
        "Flash_disablePrefetch",
        "Flash_enableCache",
        "Flash_disableCache"
    ],
    "ECC_ENABLE": [
        "Flash_enableECC",
        "Flash_disableECC"
    ],
    "FBAC": [
        "Flash_setBankActiveGracePeriod"
    ],
    "FBPRDY": [
        "Flash_isBankReady",
        "Flash_isPumpReady"
    ],
    "SINGLE_ERR_ADDR_LOW": [
        "Flash_getSingleBitErrorAddressLow"
    ],
    "SINGLE_ERR_ADDR_HIGH": [
        "Flash_getSingleBitErrorAddressHigh"
    ],
    "UNC_ERR_ADDR_LOW": [
        "Flash_getUncorrectableErrorAddressLow"
    ],
    "UNC_ERR_ADDR_HIGH": [
        "Flash_getUncorrectableErrorAddressHigh"
    ],
    "ERR_STATUS": [
        "Flash_getLowErrorStatus",
        "Flash_getHighErrorStatus",
        "Flash_clearLowErrorStatus",
        "Flash_clearHighErrorStatus"
    ],
    "ERR_POS": [
        "Flash_getLowErrorPosition",
        "Flash_getHighErrorPosition",
        "Flash_clearLowErrorPosition",
        "Flash_clearHighErrorPosition",
        "Flash_getLowErrorType",
        "Flash_getHighErrorType"
    ],
    "ERR_STATUS_CLR": [
        "Flash_clearLowErrorStatus",
        "Flash_clearHighErrorStatus"
    ],
    "ERR_CNT": [
        "Flash_getErrorCount"
    ],
    "ERR_THRESHOLD": [
        "Flash_setErrorThreshold"
    ],
    "ERR_INTFLG": [
        "Flash_getInterruptFlag"
    ],
    "ERR_INTCLR": [
        "Flash_clearSingleErrorInterruptFlag",
        "Flash_clearUncorrectableInterruptFlag"
    ],
    "FDATAL_TEST": [
        "Flash_setDataLowECCTest"
    ],
    "FDATAH_TEST": [
        "Flash_setDataHighECCTest"
    ],
    "FADDR_TEST": [
        "Flash_setECCTestAddress"
    ],
    "FECC_TEST": [
        "Flash_setECCTestECCBits"
    ],
    "FECC_CTRL": [
        "Flash_enableECCTestMode",
        "Flash_disableECCTestMode",
        "Flash_selectLowECCBlock",
        "Flash_selectHighECCBlock",
        "Flash_performECCCalculation"
    ],
    "FOUTH_TEST": [
        "Flash_getTestDataOutHigh"
    ],
    "FOUTL_TEST": [
        "Flash_getTestDataOutLow"
    ],
    "FECC_STATUS": [
        "Flash_getECCTestStatus",
        "Flash_getECCTestErrorPosition",
        "Flash_getECCTestSingleBitErrorType"
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
    "GPEDIR": [
        "GPIO_setDirectionMode",
        "GPIO_getDirectionMode"
    ],
    "GPFDIR": [
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
    "GPEPUD": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPFPUD": [
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
    "GPEINV": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPFINV": [
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
    "GPEODR": [
        "GPIO_setPadConfig",
        "GPIO_getPadConfig"
    ],
    "GPFODR": [
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
    "GPEQSEL1": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPEQSEL2": [
        "GPIO_setQualificationMode",
        "GPIO_getQualificationMode"
    ],
    "GPFQSEL1": [
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
    "GPECTRL": [
        "GPIO_setQualificationPeriod"
    ],
    "GPFCTRL": [
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
    "GPDCSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPDCSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPECSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPECSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPECSEL3": [
        "GPIO_setControllerCore"
    ],
    "GPECSEL4": [
        "GPIO_setControllerCore"
    ],
    "GPFCSEL1": [
        "GPIO_setControllerCore"
    ],
    "GPFCSEL2": [
        "GPIO_setControllerCore"
    ],
    "GPBAMSEL": [
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
    "GPEMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPEMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPFMUX1": [
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
    "GPEGMUX1": [
        "GPIO_setPinConfig"
    ],
    "GPEGMUX2": [
        "GPIO_setPinConfig"
    ],
    "GPFGMUX1": [
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
    "GPEDAT": [
        "GPIO_readPin",
        "GPIO_readPortData",
        "GPIO_writePortData"
    ],
    "GPFDAT": [
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
    "GPESET": [
        "GPIO_writePin",
        "GPIO_setPortPins"
    ],
    "GPFSET": [
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
    "GPECLEAR": [
        "GPIO_writePin",
        "GPIO_clearPortPins"
    ],
    "GPFCLEAR": [
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
    "GPETOGGLE": [
        "GPIO_togglePin",
        "GPIO_togglePortPins"
    ],
    "GPFTOGGLE": [
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
    "GPELOCK": [
        "GPIO_lockPortConfig",
        "GPIO_unlockPortConfig"
    ],
    "GPFLOCK": [
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
    "GPECR": [
        "GPIO_commitPortConfig"
    ],
    "GPFCR": [
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
    "RCR2": [
        "McBSP_setRxDataSize",
        "McBSP_disableTwoPhaseRx",
        "McBSP_enableTwoPhaseRx",
        "McBSP_setRxCompandingMode",
        "McBSP_disableRxFrameSyncErrorDetection",
        "McBSP_enableRxFrameSyncErrorDetection",
        "McBSP_setRxDataDelayBits"
    ],
    "RCR1": [
        "McBSP_setRxDataSize"
    ],
    "XCR2": [
        "McBSP_setTxDataSize",
        "McBSP_disableTwoPhaseTx",
        "McBSP_enableTwoPhaseTx",
        "McBSP_setTxCompandingMode",
        "McBSP_disableTxFrameSyncErrorDetection",
        "McBSP_enableTxFrameSyncErrorDetection",
        "McBSP_setTxDataDelayBits"
    ],
    "XCR1": [
        "McBSP_setTxDataSize"
    ],
    "RCERA": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERB": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERC": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERD": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERE": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERF": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERG": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "RCERH": [
        "McBSP_disableRxChannel",
        "McBSP_enableRxChannel"
    ],
    "XCERA": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERB": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERC": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERD": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERE": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERF": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERG": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "XCERH": [
        "McBSP_disableTxChannel",
        "McBSP_enableTxChannel"
    ],
    "SPCR1": [
        "McBSP_disableLoopback",
        "McBSP_enableLoopback",
        "McBSP_setRxSignExtension",
        "McBSP_setClockStopMode",
        "McBSP_disableDxPinDelay",
        "McBSP_enableDxPinDelay",
        "McBSP_setRxInterruptSource",
        "McBSP_clearRxFrameSyncError",
        "McBSP_getRxErrorStatus",
        "McBSP_isRxReady",
        "McBSP_resetReceiver",
        "McBSP_enableReceiver"
    ],
    "SPCR2": [
        "McBSP_setEmulationMode",
        "McBSP_resetFrameSyncLogic",
        "McBSP_enableFrameSyncLogic",
        "McBSP_resetSampleRateGenerator",
        "McBSP_enableSampleRateGenerator",
        "McBSP_setTxInterruptSource",
        "McBSP_getTxErrorStatus",
        "McBSP_clearTxFrameSyncError",
        "McBSP_isTxReady",
        "McBSP_resetTransmitter",
        "McBSP_enableTransmitter"
    ],
    "SRGR2": [
        "McBSP_setFrameSyncPulsePeriod",
        "McBSP_disableSRGSyncFSR",
        "McBSP_enableSRGSyncFSR",
        "McBSP_setRxSRGClockSource",
        "McBSP_setTxSRGClockSource",
        "McBSP_setTxInternalFrameSyncSource"
    ],
    "SRGR1": [
        "McBSP_setFrameSyncPulseWidthDivider",
        "McBSP_setSRGDataClockDivider"
    ],
    "PCR": [
        "McBSP_setRxSRGClockSource",
        "McBSP_setTxSRGClockSource",
        "McBSP_setTxFrameSyncSource",
        "McBSP_setRxFrameSyncSource",
        "McBSP_setTxClockSource",
        "McBSP_setRxClockSource",
        "McBSP_setTxFrameSyncPolarity",
        "McBSP_setRxFrameSyncPolarity",
        "McBSP_setTxClockPolarity",
        "McBSP_setRxClockPolarity"
    ],
    "MCR1": [
        "McBSP_setRxMultichannelPartition",
        "McBSP_setRxTwoPartitionBlock",
        "McBSP_getRxActiveBlock",
        "McBSP_setRxChannelMode"
    ],
    "MCR2": [
        "McBSP_setTxMultichannelPartition",
        "McBSP_setTxTwoPartitionBlock",
        "McBSP_getTxActiveBlock",
        "McBSP_setTxChannelMode"
    ],
    "DRR1": [
        "McBSP_read16bitData",
        "McBSP_read32bitData"
    ],
    "DRR2": [
        "McBSP_read32bitData"
    ],
    "DXR1": [
        "McBSP_write16bitData",
        "McBSP_write32bitData"
    ],
    "DXR2": [
        "McBSP_write32bitData"
    ],
    "MFFINT": [
        "McBSP_enableRxInterrupt",
        "McBSP_disableRxInterrupt",
        "McBSP_enableTxInterrupt",
        "McBSP_disableTxInterrupt"
    ],
    "DXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "LSXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "GSXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "MSGXLOCK": [
        "MemCfg_lockConfig",
        "MemCfg_unlockConfig"
    ],
    "DXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "LSXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "GSXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "MSGXCOMMIT": [
        "MemCfg_commitConfig"
    ],
    "DXACCPROT0": [
        "MemCfg_setProtection"
    ],
    "LSXACCPROT0": [
        "MemCfg_setProtection"
    ],
    "GSXACCPROT0": [
        "MemCfg_setProtection"
    ],
    "GSXACCPROT1": [
        "MemCfg_setProtection"
    ],
    "GSXACCPROT2": [
        "MemCfg_setProtection"
    ],
    "GSXACCPROT3": [
        "MemCfg_setProtection"
    ],
    "MSGXACCPROT0": [
        "MemCfg_setProtection"
    ],
    "LSXMSEL": [
        "MemCfg_setLSRAMControllerSel"
    ],
    "GSXMSEL": [
        "MemCfg_setGSRAMControllerSel"
    ],
    "DXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "LSXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "GSXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "MSGXRAMTEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "ROM_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "PERI_MEM_TEST_LOCK": [
        "MemCfg_lockTestConfig",
        "MemCfg_unlockTestConfig"
    ],
    "DXTEST": [
        "MemCfg_setTestMode"
    ],
    "LSXTEST": [
        "MemCfg_setTestMode"
    ],
    "GSXTEST": [
        "MemCfg_setTestMode"
    ],
    "MSGXTEST": [
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
    "GSXINIT": [
        "MemCfg_initSections",
        "MemCfg_getInitStatus"
    ],
    "MSGXINIT": [
        "MemCfg_initSections",
        "MemCfg_getInitStatus"
    ],
    "DXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "LSXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "GSXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "MSGXINITDONE": [
        "MemCfg_getInitStatus"
    ],
    "NMCPURDAVADDR": [
        "MemCfg_getViolationAddress"
    ],
    "NMCPUWRAVADDR": [
        "MemCfg_getViolationAddress"
    ],
    "MCPUFAVADDR": [
        "MemCfg_getViolationAddress"
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
    "PERI_MEM_TEST_CONTROL": [
        "MemCfg_forceMemError",
        "MemCfg_enablePeriMemTestMode",
        "MemCfg_disablePeriMemTestMode"
    ],
    "LSXCLAPGM": [
        "MemCfg_setCLAMemType"
    ],
    "NMAVINTEN": [
        "MemCfg_enableViolationInterrupt",
        "MemCfg_disableViolationInterrupt"
    ],
    "MAVINTEN": [
        "MemCfg_enableViolationInterrupt",
        "MemCfg_disableViolationInterrupt"
    ],
    "NMAVFLG": [
        "MemCfg_getViolationInterruptStatus"
    ],
    "MAVFLG": [
        "MemCfg_getViolationInterruptStatus"
    ],
    "NMAVSET": [
        "MemCfg_forceViolationInterrupt"
    ],
    "MAVSET": [
        "MemCfg_forceViolationInterrupt"
    ],
    "NMAVCLR": [
        "MemCfg_clearViolationInterruptStatus"
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
    "ROMPREFETCH": [
        "MemCfg_enableROMPrefetch",
        "MemCfg_disableROMPrefetch"
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
    "SDCOMP1EVT2FLTCTL": [
        "SDFM_configCompEventLowFilter",
        "SDFM_initCompEventLowFilter"
    ],
    "SDCOMP1EVT2FLTCLKCTL": [
        "SDFM_configCompEventLowFilter"
    ],
    "SDCOMP1EVT1FLTCTL": [
        "SDFM_configCompEventHighFilter",
        "SDFM_initCompEventHighFilter"
    ],
    "SDCOMP1EVT1FLTCLKCTL": [
        "SDFM_configCompEventHighFilter"
    ],
    "SDDFPARM1": [
        "SDFM_enableExternalReset",
        "SDFM_disableExternalReset",
        "SDFM_enableFilter",
        "SDFM_disableFilter",
        "SDFM_setFilterType",
        "SDFM_setFilterOverSamplingRatio",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt"
    ],
    "SDDFPARM2": [
        "SDFM_enableExternalReset",
        "SDFM_disableExternalReset",
        "SDFM_enableFilter",
        "SDFM_disableFilter",
        "SDFM_setFilterType",
        "SDFM_setFilterOverSamplingRatio",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt"
    ],
    "SDDFPARM3": [
        "SDFM_enableExternalReset",
        "SDFM_disableExternalReset",
        "SDFM_enableFilter",
        "SDFM_disableFilter",
        "SDFM_setFilterType",
        "SDFM_setFilterOverSamplingRatio",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt"
    ],
    "SDDFPARM4": [
        "SDFM_enableExternalReset",
        "SDFM_disableExternalReset",
        "SDFM_enableFilter",
        "SDFM_disableFilter",
        "SDFM_setFilterType",
        "SDFM_setFilterOverSamplingRatio",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt"
    ],
    "SDFIFOCTL1": [
        "SDFM_enableFIFOBuffer",
        "SDFM_disableFIFOBuffer",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt",
        "SDFM_getFIFODataCount",
        "SDFM_setFIFOInterruptLevel",
        "SDFM_setDataReadyInterruptSource"
    ],
    "SDSTATUS": [
        "SDFM_getZeroCrossTripStatus"
    ],
    "SDCTL": [
        "SDFM_clearZeroCrossTripStatus",
        "SDFM_setupModulatorClock",
        "SDFM_enableMainInterrupt",
        "SDFM_disableMainInterrupt",
        "SDFM_selectClockSource",
        "SDFM_enableSynchronizer",
        "SDFM_disableSynchronizer"
    ],
    "SDCPARM1": [
        "SDFM_enableComparator",
        "SDFM_disableComparator",
        "SDFM_selectCompEventSource",
        "SDFM_enableZeroCrossEdgeDetect",
        "SDFM_disableZeroCrossEdgeDetect",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt",
        "SDFM_setComparatorFilterType",
        "SDFM_setCompFilterOverSamplingRatio"
    ],
    "SDCPARM2": [
        "SDFM_enableComparator",
        "SDFM_disableComparator",
        "SDFM_selectCompEventSource",
        "SDFM_enableZeroCrossEdgeDetect",
        "SDFM_disableZeroCrossEdgeDetect",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt",
        "SDFM_setComparatorFilterType",
        "SDFM_setCompFilterOverSamplingRatio"
    ],
    "SDCPARM3": [
        "SDFM_enableComparator",
        "SDFM_disableComparator",
        "SDFM_selectCompEventSource",
        "SDFM_enableZeroCrossEdgeDetect",
        "SDFM_disableZeroCrossEdgeDetect",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt",
        "SDFM_setComparatorFilterType",
        "SDFM_setCompFilterOverSamplingRatio"
    ],
    "SDCPARM4": [
        "SDFM_enableComparator",
        "SDFM_disableComparator",
        "SDFM_selectCompEventSource",
        "SDFM_enableZeroCrossEdgeDetect",
        "SDFM_disableZeroCrossEdgeDetect",
        "SDFM_enableInterrupt",
        "SDFM_disableInterrupt",
        "SDFM_setComparatorFilterType",
        "SDFM_setCompFilterOverSamplingRatio"
    ],
    "SDCTLPARM1": [
        "SDFM_setupModulatorClock",
        "SDFM_selectClockSource",
        "SDFM_enableSynchronizer",
        "SDFM_disableSynchronizer"
    ],
    "SDCTLPARM2": [
        "SDFM_setupModulatorClock",
        "SDFM_selectClockSource",
        "SDFM_enableSynchronizer",
        "SDFM_disableSynchronizer"
    ],
    "SDCTLPARM3": [
        "SDFM_setupModulatorClock",
        "SDFM_selectClockSource",
        "SDFM_enableSynchronizer",
        "SDFM_disableSynchronizer"
    ],
    "SDCTLPARM4": [
        "SDFM_setupModulatorClock",
        "SDFM_selectClockSource",
        "SDFM_enableSynchronizer",
        "SDFM_disableSynchronizer"
    ],
    "SDDPARM1": [
        "SDFM_setOutputDataFormat",
        "SDFM_setDataShiftValue"
    ],
    "SDDPARM2": [
        "SDFM_setOutputDataFormat",
        "SDFM_setDataShiftValue"
    ],
    "SDDPARM3": [
        "SDFM_setOutputDataFormat",
        "SDFM_setDataShiftValue"
    ],
    "SDDPARM4": [
        "SDFM_setOutputDataFormat",
        "SDFM_setDataShiftValue"
    ],
    "SDFLT1CMPH1": [
        "SDFM_setCompFilterHighThreshold"
    ],
    "SDFLT1CMPL1": [
        "SDFM_setCompFilterLowThreshold"
    ],
    "SDFLT1CMPHZ": [
        "SDFM_setCompFilterZeroCrossThreshold"
    ],
    "SDDATA1": [
        "SDFM_getFilterData"
    ],
    "SDDATA2": [
        "SDFM_getFilterData"
    ],
    "SDDATA3": [
        "SDFM_getFilterData"
    ],
    "SDDATA4": [
        "SDFM_getFilterData"
    ],
    "SDIFLG": [
        "SDFM_getThresholdStatus",
        "SDFM_getModulatorStatus",
        "SDFM_getNewFilterDataStatus",
        "SDFM_getFIFOOverflowStatus",
        "SDFM_getFIFOISRStatus",
        "SDFM_getIsrStatus",
        "SDFM_clearInterruptFlag"
    ],
    "SDIFLGCLR": [
        "SDFM_clearInterruptFlag"
    ],
    "SDMFILEN": [
        "SDFM_enableMainFilter",
        "SDFM_disableMainFilter"
    ],
    "SDCDATA1": [
        "SDFM_getComparatorSincData"
    ],
    "SDDATFIFO1": [
        "SDFM_getFIFOData"
    ],
    "SDSYNC1": [
        "SDFM_getWaitForSyncStatus",
        "SDFM_clearWaitForSyncFlag",
        "SDFM_enableWaitForSync",
        "SDFM_disableWaitForSync",
        "SDFM_setPWMSyncSource",
        "SDFM_setFIFOClearOnSyncMode",
        "SDFM_setWaitForSyncClearMode"
    ],
    "SDCOMP1CTL": [
        "SDFM_selectCompEventHighSource",
        "SDFM_selectCompEventLowSource"
    ],
    "SDCOMP1LOCK": [
        "SDFM_lockCompEventFilterConfig"
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
        "SysCtl_selectOscSourceAuxPLL",
        "SysCtl_turnOnOsc",
        "SysCtl_turnOffOsc"
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
        "SysCtl_setClock",
        "SysCtl_setPLLSysClk"
    ],
    "AUXPLLCTL1": [
        "SysCtl_getAuxClock",
        "SysCtl_setAuxClock"
    ],
    "AUXPLLMULT": [
        "SysCtl_getAuxClock",
        "SysCtl_setAuxClock"
    ],
    "AUXCLKDIVSEL": [
        "SysCtl_getAuxClock",
        "SysCtl_setAuxClock",
        "SysCtl_setAuxPLLClk",
        "SysCtl_setMCANClk"
    ],
    "SYSPLLSTS": [
        "SysCtl_setClock"
    ],
    "XTALCR": [
        "SysCtl_setClock",
        "SysCtl_setAuxClock",
        "SysCtl_selectXTAL",
        "SysCtl_selectXTALSingleEnded",
        "SysCtl_selectOscSourceAuxPLL",
        "SysCtl_setExternalOscMode",
        "SysCtl_turnOnOsc"
    ],
    "AUXPLLSTS": [
        "SysCtl_setAuxClock"
    ],
    "LOSPCP": [
        "SysCtl_getLowSpeedClock",
        "SysCtl_setLowSpeedClock"
    ],
    "PARTIDL": [
        "SysCtl_getDeviceParametric"
    ],
    "PARTIDH": [
        "SysCtl_getDeviceParametric"
    ],
    "CPU2RESCTL": [
        "SysCtl_controlCPU2Reset"
    ],
    "USBTYPE": [
        "SysCtl_configureType",
        "SysCtl_isConfigTypeLocked"
    ],
    "ECAPTYPE": [
        "SysCtl_configureType",
        "SysCtl_isConfigTypeLocked"
    ],
    "SDFMTYPE": [
        "SysCtl_configureType",
        "SysCtl_isConfigTypeLocked"
    ],
    "MEMMAPTYPE": [
        "SysCtl_configureType",
        "SysCtl_isConfigTypeLocked"
    ],
    "CLKSEM": [
        "SysCtl_setSemOwner",
        "SysCtl_getSemOwner"
    ],
    "CLKCFGLOCK1": [
        "SysCtl_lockClkConfig"
    ],
    "CPUSYSLOCK1": [
        "SysCtl_lockSysConfig"
    ],
    "CMRESCTL": [
        "SysCtl_controlCMReset",
        "SysCtl_isCMReset"
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
    "SOFTPRES11": [
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
    "PCLKCR11": [
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
    "RESC": [
        "SysCtl_getResetCause",
        "SysCtl_clearResetCause",
        "SysCtl_getWatchdogResetStatus",
        "SysCtl_clearWatchdogResetStatus"
    ],
    "PERCLKDIVSEL": [
        "SysCtl_setEPWMClockDivider",
        "SysCtl_setEMIF1ClockDivider",
        "SysCtl_setEMIF2ClockDivider"
    ],
    "CLKSRCCTL3": [
        "SysCtl_selectClockOutSource"
    ],
    "LPMCR": [
        "SysCtl_enterIdleMode",
        "SysCtl_enterStandbyMode",
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
    "RESCCLR": [
        "SysCtl_clearWatchdogResetStatus"
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
    "PERIPH_AC_LOCK": [
        "SysCtl_lockAccessControlRegs"
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
    "CPUSEL0": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL1": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL2": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL4": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL5": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL6": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL7": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL8": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL9": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL11": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL12": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL14": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL15": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "CPUSEL16": [
        "SysCtl_selectCPUForPeripheralInstance",
        "SysCtl_selectCPUForPeripheral"
    ],
    "REVID": [
        "SysCtl_getDeviceRevision"
    ],
    "DEVCFGLOCK1": [
        "SysCtl_lockCPUSelectRegs"
    ],
    "FUSEERR": [
        "SysCtl_getEfuseError"
    ],
    "PERCNF1": [
        "SysCtl_readADCWrapper",
        "SysCtl_isPresentUSBPHY"
    ],
    "RSTSTAT": [
        "SysCtl_isCPU2Reset",
        "SysCtl_getCPU2ResetStatus",
        "SysCtl_clearCPU2ResetStatus"
    ],
    "LPMSTAT": [
        "SysCtl_getCPU2LPMStatus"
    ],
    "XCLKOUTDIVSEL": [
        "SysCtl_setXClk"
    ],
    "CMCLKCTL": [
        "SysCtl_setCMClk",
        "SysCtl_setEnetClk"
    ],
    "ETHERCATCLKCTL": [
        "SysCtl_setECatClk"
    ],
    "PIEVERRADDR": [
        "SysCtl_getPIEVErrAddr"
    ],
    "SIMRESET": [
        "SysCtl_simulateReset"
    ],
    "CMTOCPU1NMICTL": [
        "SysCtl_enableCMtoCPUNMI",
        "SysCtl_disableCMtoCPUNMI",
        "SysCtl_getCMtoCPUNMI"
    ],
    "CMTOCPU1INTCTL": [
        "SysCtl_enableCMtoCPUInterrupt",
        "SysCtl_disableCMtoCPUInterrupt",
        "SysCtl_getCMtoCPUInterrupt"
    ],
    "PALLOCATE0": [
        "SysCtl_allocateSharedPeripheral"
    ],
    "CM_CONF_REGS_LOCK": [
        "SysCtl_lockCMConfig"
    ],
    "CM_STATUS_INT_FLG": [
        "SysCtl_getCMInterruptStatus"
    ],
    "CM_STATUS_INT_CLR": [
        "SysCtl_clearCMInterruptStatus"
    ],
    "CM_STATUS_INT_SET": [
        "SysCtl_setCMInterruptStatus"
    ],
    "CM_STATUS_MASK": [
        "SysCtl_getCMInterruptStatusMask",
        "SysCtl_setCMInterruptStatusMask"
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
    "CLBCLKCTL": [
        "SysCtl_setCLBClk",
        "SysCtl_setCLBClkDivider",
        "SysCtl_CLBClkConfig"
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
    "UID_UNIQUE": [
        "SysCtl_getDeviceUID"
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
    "AUXSIG0MUX0TO15CFG": [
        "XBAR_setCLBMuxConfig"
    ],
    "AUXSIG0MUX16TO31CFG": [
        "XBAR_setCLBMuxConfig"
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
    ],
    "AUXSIG0MUXENABLE": [
        "XBAR_enableCLBMux",
        "XBAR_disableCLBMux"
    ],
    "AUXSIGOUTINV": [
        "XBAR_invertCLBSignal"
    ]
}
module.exports = { 
  registerToFunction: REGISTER_TO_FUNCTION
}
