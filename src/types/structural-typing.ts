export interface Human {
    firstName: string,
    lastName: string,
    age: number
}

export class Vegetarian {
    constructor(public firstName: string, public lastName: string, public age: number) { }
}

let student: Human;

student = new Vegetarian("Gergi", "Georgiev", 12);