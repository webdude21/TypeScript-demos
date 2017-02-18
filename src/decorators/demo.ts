import { Deprecated, Log } from './decorators';

class MyVeryImportantClass {

    @Deprecated("1.32")
    @Log()
    doStuff(): void {
        console.log("doing stuff");
    }
}

let f = new MyVeryImportantClass();

f.doStuff();