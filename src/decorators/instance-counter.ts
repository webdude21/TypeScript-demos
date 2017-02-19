import { CountInstances } from './decorators';

@CountInstances
export class Cat {
    prrrr(): void {
        console.log("Prrrrrrrrrrrrrrrr");
    }
}

for (let i = 0; i < 100; i++) {
    let p = new Cat();
    p.prrrr();
}