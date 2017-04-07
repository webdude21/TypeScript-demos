export interface Human {
    firstName: string;
    lastName: string;
    age: number;
}

export class Vegetarian {
    constructor(public firstName: string, public lastName: string, public age: number) { }
}

// if the interface (public members) of two types match, they can be used interchangeably
// here the interface Human has the same 'signature' (members) as Vegetarian so the assignment is safe
// you can safely use the Vegetarian everywhere the Human interface is required and vice versa
let student: Human = new Vegetarian("Gergi", "Georgiev", 12);

// interface can extend a class, thus receiving it's interface
export interface Vegan extends Vegetarian {
    favoriteVegetable: string;
}

let vegan: Vegan = {
    firstName: "John",
    lastName: "Doe",
    age: 32,
    favoriteVegetable: "Stuff"
};

// a class can also implement another class, thus using it as interface.
// than the compiler forces you to have the same members as the other class (makes sense)
export class AlternativeVegetarian implements Vegetarian { // I really ran out of good names here
    public firstName: string;
    public lastName: string;
    public age: number;
}