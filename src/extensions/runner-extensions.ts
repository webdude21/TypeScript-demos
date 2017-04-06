import { AdvancedRunner } from '../classes/polymorphic-this';

/**
 * In JavaScript you can usually extend any type you want. There's really nothing stopping you.
 * But when you have a type system, there needs to be a way for you to 'register' this extension with the type system.
 * TypeScript offers such a way (demonstrated below).
 */
declare module '../classes/polymorphic-this' {
    export interface AdvancedRunner {
        yield: () => void;
    }
}

/**
 * This is the part of the extension that actually does the work, enriching the prototype of the Function Constructor (class).
 */
AdvancedRunner.prototype.yield = function () {
    console.log("yielding ...");
};