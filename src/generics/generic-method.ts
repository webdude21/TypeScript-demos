export function merge<T, U>(first: T, second: U) {
    let result = <T & U>{};

    for (let id in first) {
        (<any>result)[id] = first[id];
    }

    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = second[id];
        }
    }

    return result;
}