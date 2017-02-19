import { Deprecated, Freeze, Log } from './decorators';

@Freeze
export class MyVeryImportantClass {

    @Deprecated("1.32")
    @Log()
    doStuff(): void {
        console.log("doing stuff");
    }
}

let frozen = new MyVeryImportantClass();

frozen.doStuff();

// trying to replace the doStuff function directly on the prototype to demonstrate that the object is in fact frozen
MyVeryImportantClass.prototype.doStuff = function(){
    console.log("Do other stuff");
};