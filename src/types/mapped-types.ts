import { warrior, Warrior } from './union-intersection-types';

/**
 * Build in mapped types
 */

// create a new type that has all the props from the provided type, but they're are read-only
let readonlyWarrior: Readonly<Warrior> = warrior;

// pick keys of an object and create a new type
let pickSomeProps: Pick<Warrior, "name"> = {
    name: "sa"
};

// create a new type that has all the props from the provided type, but they're are optional/nullable
let optionalWarrior: Partial<Warrior> = warrior;

// create a type from key names and a type
let recordOfThree: Record<"one" | "two" | "three", string> = {
    one: "first",
    two: "second",
    three: "third"
};

/**
 * Example of mapped types that you can write
 */
type Serializable<T> = {
    [P in keyof T]: string; // can be mixed with unions as well
};

type SerializableWarrior = Serializable<Warrior>;

let serializableWarrior: SerializableWarrior = {
    dexterity: "5",
    hp: "10",
    name: "Mike",
    weapon: "Sword"
};

export = { readonlyWarrior, pickSomeProps, optionalWarrior, recordOfThree, serializableWarrior };