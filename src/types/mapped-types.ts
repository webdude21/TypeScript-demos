import { warrior, Warrior } from './union-intersection-types';

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

export = { readonlyWarrior, pickSomeProps, optionalWarrior, recordOfThree };