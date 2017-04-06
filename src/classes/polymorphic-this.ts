export class Runner {
    start(): this {
        console.log("running");
        return this;
    }

    stop(): this {
        console.log("stopped");
        return this;
    }
}

export class AdvancedRunner extends Runner {
    pause(): this {
        console.log("pause");
        return this;
    }
}

let advancedRunner = new AdvancedRunner();

advancedRunner.start().stop().pause().start();

// show demo without polymorphic this;