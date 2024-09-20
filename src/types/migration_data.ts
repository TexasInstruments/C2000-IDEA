interface MigrationElement {
    code: string,
    type: string,
    category: string,
    msg: string,
    changeType? : string
}

interface MigrationData {
    removed : [
        MigrationElement
    ],
    added : [
        MigrationElement
    ],
    changed : [
        MigrationElement
    ]
}

interface MigrationResolutionElement {
    msg: string,
    fix: [string],
    fixMsg: string,
}


interface MigrationResolutionData {
    reg : [
        {
            [id: string]: MigrationResolutionElement
        }
    ]
}

interface MigrationDriverlibResolutionElement {
    code: string,
    type: string,
    peripheral: string,
    fix: string,
    fixMsg: string,
    compatible: string
}


interface MigrationDriverlibResolutionData {
    removed : [
        MigrationDriverlibResolutionElement
    ],
    changed : [
        MigrationDriverlibResolutionElement
    ]
}
