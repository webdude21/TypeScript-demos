export class Person {
    protected age: number;
    protected name: string;

    // same as the function overloading (after all the constructor is just a function)
    constructor(age: number)
    constructor(name: string)
    constructor(arg: string | number) {
        if (typeof arg === "string") {
            this.name = arg;
        } else {
            this.age = arg;
        }
    }
}