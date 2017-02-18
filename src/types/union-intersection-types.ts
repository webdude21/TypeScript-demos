type Weapon = {
    name: "Magic Sword" | "Axe"| "Sword" | "Magic Staff",
    attackPoints: 5 | 10 | 15
}

interface Mage {
    name: string,
    HP: number,
    MP: number,
    intelligence: number
    weapon: Weapon
}

interface Warrior {
    name: string,
    HP: number,
    weapon: Weapon,
    dexterity: number
}

let mageWarrior: Mage & Warrior = {
    name: "Charley",
    dexterity: 4,
    intelligence: 5,
    HP: 10,
    MP: 5,
    weapon: {
        attackPoints: 15,
        name: "Magic Sword"
    }
}

function printCharInfo(character: Mage | Warrior): void {
    console.log(character.name);
}