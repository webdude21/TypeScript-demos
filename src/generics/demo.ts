import { Stack } from './stack';

export interface Person {
    name: string;
    age: number;
}

export function demonstrate(): void {
    let stack = new Stack<Person>();
    stack.push({ name: "Goshko", age: 21 });
    let person = stack.peek();

    if (person) {
        console.log(`I'm ${person.name} and I'm ${person.age} years old!`);
    }
}