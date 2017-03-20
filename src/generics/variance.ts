import { Omnivore, Vegan, Vegetarian } from '../types/literal-types';
/**
 * Types in TypeScript are bi-variant. Which means that you can use both a subtypes and super types. There could be some gotchas related to this.
 * This is mainly because TypeScript heavily relies on structural typing to determine what is assignable to a variable, rather then relying on class hierarchy.
 * To illustrate it here's the type chain in the example below Omnivore => Vegetarian => Vegan => Person
 * Further reading could be found here: https://www.typescriptlang.org/docs/handbook/type-compatibility.html
 */

let printVegans = function (vegans: Array<Vegetarian>): void {
    vegans.forEach(x => console.log(x.name));
};

let makeThemEatStuff = function <T extends Vegetarian>(vegans: Array<T>): void {
    vegans.forEach(x => console.log(`I'm ${x.name}. ${x.eat("Milk")}`));
};

export function demonstrateBiVariance(): void {
    let vegetarians: Vegetarian[] = [];

    // you are allowed to push sub-types of vegetarian for example Omnivore
    vegetarians.push(new Omnivore("Ivan"));
    // you are also allowed to push super-types of vegetarian for example Vegan
    vegetarians.push(new Vegan("Gosko"));

    printVegans(vegetarians);
    // this function incorrectly feeds a Vegan with some Milk, and this is not detected by the type system.
    makeThemEatStuff(vegetarians);
}