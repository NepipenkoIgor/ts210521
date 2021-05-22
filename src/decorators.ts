// (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void
import 'reflect-metadata';
export function LogInputValue(target: any, key: string, desc: PropertyDescriptor): PropertyDescriptor {
    console.log(target);
    console.log(key);
    const originalValue = desc.value;
    return {
        ...desc,
        value(e: Event) {
            const value: string = (e.target as HTMLInputElement).value;
            console.log(`Input value in method ${key} of ${target.constructor.name} equal to ${value}`)
            return originalValue.call(this, e);
        }
    }
}

export function Debounce(ms: number) {
    let timeId: number | null;
    return (_target: any, _key: string, desc: PropertyDescriptor): PropertyDescriptor => {
        const originalValue = desc.value;
        return {
            ...desc,
            value(e: Event) {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = window.setTimeout(() => {
                    return originalValue.call(this, e);
                }, ms);
            }
        }
    }
}


export function SavePersitence(target: any, key: string): void {
    const localKey = `ts210521_${target.constructor.name}_${key}`;

    const getter = () => {
        return localStorage.getItem(localKey);
    }

    const setter = (newValue: string) => {
        localStorage.setItem(localKey, newValue);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}

export function CheckTypeInRunTime(target: any, key: string): void {
    const { name: type } = Reflect.getMetadata('design:type', target, key);
    console.log(type);
    let value: any;
    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newValue: any) {
            const realType = typeof newValue;
            const actualType = type.toLowerCase();
            if (realType !== actualType) {
                throw Error(`type of ${key} in not ${actualType}. You tried to set ${realType}`)
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    })
}


const RANGE_KEY = 'design:RANGE_KEY';

export function Range(min: number, max: number) {
    return (target: any, key: string, index: number) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        existingRange[index] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    }
}

export function Validate(target: any, key: string, desc: PropertyDescriptor): void {
    const originalValue = desc.value;
    desc.value = function (...args: unknown[]) {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) ?? {};
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const numParamIndex = Number(paramIndex);
            const paramValue = args[numParamIndex] as number;
            if (paramValue < min || paramValue > max) {
                throw Error(`Error in ${target.constructor.name} instance. 
                Parameter of method ${key} on position ${numParamIndex + 1} out of range [${[min, max]}].
                Current value ${paramValue}
                `)
            }

        }
        return originalValue.call(this, ...args);
    }
}