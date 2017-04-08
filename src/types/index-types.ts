import { warrior, Warrior } from './union-intersection-types';

/**
 * This is a generic function that accepts T which is the type, and K which are it's keys
 * @param object
 * @param keyNames
 */
function pluck<T, K extends keyof T>(object: T, ...keyNames: K[]): T[K][] {
    return keyNames.map(n => object[n]);
}

let numbers: number[] = pluck(warrior, 'hp', 'dexterity');

// this type now accepts as value of the keys of the warrior
type WarriorKeys = keyof Warrior;

// show auto-completion
let warriorKey: WarriorKeys = 'dexterity';

console.log(warriorKey, numbers);