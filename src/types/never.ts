// Function returning never must have unreachable end point
export function error(message: string): never {
    throw new Error(message);
}

// Function returning never must have unreachable end point
export function infiniteLoop(): never {
    while (true) {
    }
}