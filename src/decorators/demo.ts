import { Deprecated, Freeze, Log } from "./decorators";

@Freeze
export class MyVeryImportantClass {

    @Deprecated("1.32")
    @Log()
    doStuff(): void {
        console.log("doing stuff");
    }
}

export function demonstrate(): void {
    let frozen = new MyVeryImportantClass();

    frozen.doStuff();

    try {
        // trying to replace the doStuff function directly on the prototype to demonstrate that the object is in fact frozen
        MyVeryImportantClass.prototype.doStuff = function () {
            console.log("Do other stuff");
        };
    } catch (err) {
        console.log(`Couldn't extend the prototype. It's truly frozen. -> ${err}`);
    }
}