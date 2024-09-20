interface Register {
    name: string, 
    description: string, 
    offset: string, 
    size: string,
    count?: string,
    bits: RegisterBit[]
}

interface RegisterBit {
    name: string, 
    description: string, 
    size: string, 
    shift: string, 
    mask: string,
}