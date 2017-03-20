import { merge } from '../generics/generic-functions';

export type Weapon = {
    name: "Magic Sword" | "Axe" | "Sword" | "Magic Staff",
    attackPoints: 5 | 10 | 15
};

export interface Mage {
    name: string;
    hp: number;
    mp: number;
    intelligence: number;
    weapon: Weapon;
}

export interface Warrior {
    name: string;
    hp: number;
    weapon: Weapon;
    dexterity: number;
}

let mage: Mage = {
    hp: 10,
    intelligence: 5,
    name: "Goshko",
    mp: 15,
    weapon: {
        attackPoints: 10,
        name: "Magic Staff"
    }
};

let warrior: Warrior = {
    dexterity: 5,
    hp: 12,
    name: "Ivancho",
    weapon: {
        attackPoints: 10,
        name: "Sword"
    }
};

let mageWarriorUnion: Mage | Warrior = {
    dexterity: 10,
    hp: 10,
    name: "George",
    weapon: {
        attackPoints: 10,
        name: "Sword"
    }
};

let mageWarriorIntersection: Mage & Warrior = {
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

export function printCharInfo(character: Mage | Warrior): void {
    console.log(character.name);
}

export function demonstrate(): void {
    let merged = merge(mage, warrior);
    console.log(mageWarriorUnion.name);
    console.log(mageWarriorIntersection.name);
    console.log(merged.name);
}