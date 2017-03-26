import { demonstrateBiVariance } from './variance';
import { Stack } from './generic-classes';

export interface Person {
    name: string;
    age: number;
}

let stackDemo = function () {
    let stack = new Stack<Person>();
    let goshko = { name: "Goshko", age: 21 };
    stack.push(goshko);
    stack.push({ name: "Ivan", age: 32 });
    stack.push({ name: "Maria", age: 40 });
    let person = stack.peek();

    if (person) {
        console.log(`I'm ${person.name} and I'm ${person.age} years old!`);
    }

    console.log(`The stack {`);

    for (let person of stack) {
        console.log(person);
    }
};

export function demonstrate(): void {
    stackDemo();
    demonstrateBiVariance();
}