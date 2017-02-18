export class Runner {
    start(): Runner {
        console.log("running");
        return this;
    }

    stop(): Runner {
        console.log("stopped");
        return this;
    }
}

export class AdvancedRunner extends Runner {
    pause(): AdvancedRunner {
        console.log("pause");
        return this;
    }
}

let advancedRunner = new AdvancedRunner();

advancedRunner.start().stop(); // no access to pause  