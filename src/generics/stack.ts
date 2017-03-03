export class Stack<T> {
    private internalStore = new Array<T>();
    push = (item: T) => this.internalStore.push(item);
    pop = (): T | undefined => this.internalStore.shift();
    peek = (): T | undefined => this.internalStore[this.internalStore.length - 1];
    contains = this.internalStore.includes;
    [Symbol.iterator] = function* iterator() : IterableIterator<T> {
        for (let i = this.internalStore.length - 1; i >= 0; i--) {
            yield this.internalStore[i];
        }
    };
}