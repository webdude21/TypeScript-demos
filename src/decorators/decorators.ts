/**
 * Deprecated Annotation
 * @param version in which the following member is Deprecated.
 */
export function Deprecated(version: string) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log(`The '${propertyKey}' will be removed in version ${version}`);
    };
}

/**
 * Log Annotation
 * It logs something to the console when the method marked with it is invoked.
 */
export function Log() {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log(`Method '${propertyKey}' called`);
    };
}

/**
 * Freeze Annotation meant to freeze class
 * @param functionConstructorTarget the class that should be frozen
 */
export function Freeze(functionConstructorTarget: Function): void {
    Object.freeze(functionConstructorTarget);
    Object.freeze(functionConstructorTarget.prototype);
}

/**
 * CountInstances Annotation meant to be used on a class of which we need to know how many instances there are
 * @param functionConstructorTarget the class of which we need to keep track of instance count
 */
export function CountInstances<TFunction extends Function>(functionConstructorTarget: TFunction) {
    let augmentedConstructor: Function = function () {
        incrementInstanceCount(augmentedConstructor);
    };

    // inherit the original constructor
    augmentedConstructor.prototype = Object.create(functionConstructorTarget.prototype);
    augmentedConstructor.prototype.constructor = functionConstructorTarget;

    return <TFunction>augmentedConstructor;
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
