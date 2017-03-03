import { Stack } from './stack';

export interface Person {
    name: string;
    age: number;
}

export function demonstrate(): void {
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
}