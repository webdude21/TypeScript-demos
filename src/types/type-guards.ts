import { Mage, Warrior } from './union-intersection-types';

export function isMage(char: Mage | Warrior): char is Mage {
    return !char || !(<Mage>char).mp;
}