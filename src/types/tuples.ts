export function makePair(key: number, value: string): [number, string] {
    return [key, value];
}

export function triplet(one: number, two: string, three: number): [number, string, number] {
    return [one, two, three];
}

let res = triplet(5, 'Why', 3);

res[0] = res[0] + res[2];

export function useTuples(tuple: any[]) {
    tuple.forEach(x => console.log(x));
}

useTuples(res);