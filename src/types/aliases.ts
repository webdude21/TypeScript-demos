import { Mage, Warrior } from './union-intersection-types';

export type MageWarriorUnion = Mage | Warrior;
export type MageWarriorIntersection = Mage & Warrior;


let mageWarriorUnion: MageWarriorUnion = {
    dexterity: 10,
    hp: 10,
    name: "George",
    weapon: {
        attackPoints: 5,
        name: "Axe"
    },
};

let mageWarriorIntersection: MageWarriorIntersection = {
    name: "Charley",
    dexterity: 4,
    intelligence: 5,
    hp: 10,
    mp: 5,
    weapon: {
        attackPoints: 15,
        name: "Magic Sword"
    }
};

console.log(mageWarriorUnion.name);
console.log(mageWarriorIntersection.weapon.name);