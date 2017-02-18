export function Deprecated(version: string) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`This method will be removed in version ${version}`);
    }
}

export function Log(){
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(`Method ${propertyKey} called`);
    }
}


