interface CollateralData {
    trm: string,
    productPages: {
        gpn: string,
        link: string
    }[],
    datasheet: {
        pdf: string,
        html: string,
        blockDiagram: string,
        pinout: string
    }
}