import { Mage, Warrior } from './union-intersection-types';

export function isMage(char: Mage | Warrior): char is Mage {
    return !char || !(<Mage>char).mp;
}

export function printInfo(char: Mage | Warrior) {
    if (isMage(char)) {
        console.log(`The mage ${char.name} has ${char.mp} magic points!`);
    } else {
        console.log(`The warrior ${char.name} has ${char.dexterity} dexterity`);
    }
}