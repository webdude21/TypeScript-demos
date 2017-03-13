export function Deprecated(version: string) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log(`The '${propertyKey}' will be removed in version ${version}`);
    };
}

export function Log() {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log(`Method '${propertyKey}' called`);
    };
}

export function Freeze(functionConstructorTarget: Function): void {
    Object.freeze(functionConstructorTarget);
    Object.freeze(functionConstructorTarget.prototype);
}

let instanceTracker = new Map<Function, number>();

let incrementInstanceCount = (augmentedConstructor: Function) => {
    let instanceCount = instanceTracker.get(augmentedConstructor);

    if (instanceCount) {
        instanceTracker.set(augmentedConstructor, instanceCount + 1);
    } else {
        instanceTracker.set(augmentedConstructor, 1);
    }

    console.log(`The current instance count is ${instanceTracker.get(augmentedConstructor)}!`);
};

export function CountInstances<TFunction extends Function>(functionConstructorTarget: TFunction) {
    let augmentedConstructor: Function = function () {
        incrementInstanceCount(augmentedConstructor);
    };

    // inherit the original constructor
    augmentedConstructor.prototype = Object.create(functionConstructorTarget.prototype);
    augmentedConstructor.prototype.constructor = functionConstructorTarget;

    return <TFunction>augmentedConstructor;
}