export class Stack<T> {
    private internalStore = new Array<T>();
    push = (item: T) => this.internalStore.push(item);
    pop = (): T | undefined => this.internalStore.shift();
    peek = (): T | undefined => this.internalStore[this.internalStore.length - 1];
}