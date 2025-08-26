module.exports = {
    getCollateralDataMappings: getCollateralDataMappings,
};

function getCollateralDataMappings() {
    return COLLATERAL_FINDABILITY_ADDITIONAL_MAPPINGS;
}

var COLLATERAL_FINDABILITY_ADDITIONAL_MAPPINGS =
{
    "performance": ["C28X", "DMA", "CLA"],
    "accelerator": ["CLA"],
    "fpga": ["CLB"],
    "comparator": ["CMPSS"],
    "can": ["ECAN", "DCAN", "MCAN"],
    "fd": ["ECAN", "DCAN", "MCAN"],
    "security": ["DCSM", "SYSCTL", "BGCRC"],
    "safety": ["DCSM", "SYSCTL", "BGCRC"],
    "jtaglock": ["DCSM"],
    "ethercat": ["ECAT"],
    "pwm": ["EPWM", "MCPWM"],
    "diagnostic": ["ERAD"],
    "memory": ["FLASH", "ROM", "EMIF", "DMA"],
    "io": ["GPIO"],
    "op amp": ["PGA"],
    "amplifier": ["PGA"],
    "smbus": ["PMBUS"],
    "boot": ["ROM"],
    "uart": ["SCI"],
    "rs-": ["SCI"],
    "delta": ["SDFM"],
    "sigma": ["SDFM"],
    "interrupt": ["SYSCTL"],
    "analog": ["ADC", "CMPSS", "DAC", "PGA"],
    "control": ["EPWM", "ECAP", "HRCAP", "EQEP", "SDFM"],
    "communication": ["SCI", "SPI", "I2C", "FSI", "LIN", "PMBUS", "ECAN", "DCAN", "MCAN", "USB", "ECAT", "MCBSP", "IPC"],
    "serial": ["SCI", "SPI", "FSI", "MCBSP"],
    "debug": ["SOFTWARE", "ERAD", "EPG"],
    "logic": ["CLB"],
    "lut": ["CLB"],
    "dual": ["IPC"],
    "cpu": ["C28X", "IPC", "CLA"]
};

// typed entry : IP collateral to display (if current device is present)