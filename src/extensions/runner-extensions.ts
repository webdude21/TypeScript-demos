import { AdvancedRunner } from '../types/polymorphic-this';

declare module '../types/polymorphic-this' {
    export interface AdvancedRunner {
        yield: () => void;
    }
}

AdvancedRunner.prototype.yield = function () {
    console.log("yielding ...");
};