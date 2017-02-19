import { AdvancedRunner } from '../types/polymorphic-this';
import "./runner-extensions";
import "./string.extensions";

let extendedRunner = new AdvancedRunner();

extendedRunner.yield();

let myTestString = "myTestString";

console.log(myTestString.capitalize());