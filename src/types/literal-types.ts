type Fruits = "Apples" | "Oranges" | "Pineapples";
type Vegetables = "Carrots" | "Cabbage" | "Tomatoes";
type AnimalProduce = "Milk" | "Milk" | "Cheese";
type Meat = "Pork" | "Beef" | "Chicken";
type Food = Fruits | Vegetables | AnimalProduce | Meat;

export function feed(person: Person): void {
    if (person instanceof Vegetarian) {
        person.eat("Milk");
    }
    if (person instanceof Omnivore) {
        person.eat("Pork");
    }
    if (person instanceof Vegan) {
        person.eat("Cabbage")
    }
}

export abstract class Person {
    constructor(public name: string) { }
    abstract eat(Food: string): string;
}

export class Vegan extends Person {
    eat(food: Fruits | Vegetables) {
        return `I just ate some ${food}`;
    }
}

export class Vegetarian extends Vegan {
    eat(food: Vegetables | Fruits | AnimalProduce) {
        return `I just ate some ${food}`;
    }
}

export class Omnivore extends Vegetarian {
    eat(food: Food) {
        return `I just ate some ${food}`;
    }
}

let georgi = new Vegan("Georgi");
let vanya = new Vegetarian("Vanya");
let bobi = new Omnivore("Borislav")

let people = [georgi, vanya, bobi];

people
    .map(p => p.eat("Tomatoes"))
    .forEach(p => console.log(p));

console.log(vanya.eat("Milk"));

feed(vanya);