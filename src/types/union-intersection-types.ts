export type Weapon = {
    name: "Magic Sword" | "Axe" | "Sword" | "Magic Staff",
    attackPoints: 5 | 10 | 15
};

export interface Mage {
    name: string;
    HP: number;
    MP: number;
    intelligence: number;
    weapon: Weapon;
}

export interface Warrior {
    name: string;
    HP: number;
    weapon: Weapon;
    dexterity: number;
}

let mageWarriorUnion: Mage | Warrior = {
    dexterity: 10,
    HP: 10,
    name: "George",
    weapon: {
        attackPoints: 10,
        name: "Sword"
    }
}

let mageWarriorIntersection: Mage & Warrior = {
    name: "Charley",
    dexterity: 4,
    intelligence: 5,
    HP: 10,
    MP: 5,
    weapon: {
        attackPoints: 15,
        name: "Magic Sword"
    }
};

export function printCharInfo(character: Mage | Warrior): void {
    console.log(character.name);
}

console.log(mageWarriorUnion.name);
console.log(mageWarriorIntersection.name);