// T extends U ? Z: X;

// type nonUndefined<T> = T extends undefined ? never : T;
// type sbu = string | boolean | undefined
// const v: nonUndefined<sbu> = undefined;


interface IHydrantA {
    type: 'a'
}

interface IHydrantB {
    type: 'b'
}

// interface IHydrantC {
//     type: 'c'
// }

// type Hydrants = IHydrantA | IHydrantB | IHydrantC

// const h: Exclude<Hydrants, IHydrantB | IHydrantC> = {
//     type: 'a'
// }

/** params and return type */

type NonFunction<T> = T extends Function ? never : T
type FunctionParamReturnType<T extends Function> = T extends (...args: infer U) => infer Z
    ? NonFunction<U[Exclude<keyof U, 'length'>]> | Z
    : never

function fn(_p: number): string {
    return 's';
}

function fn1(_p: IHydrantA, s: string, b: IHydrantB): boolean {
    return true;
}


let v1: FunctionParamReturnType<typeof fn> = 1;
let v2: FunctionParamReturnType<typeof fn1> = {
    type: 'a'
};

//type arr = [()=>boolean, ()=>{}]


// const arr1: [() => IHydrantA, () => number] = [() => ({type: 'a'}), () => 2]

// type FirstReturnType<T> =
//     T extends [infer U, ...unknown[]]
//     ? U extends (...args: any) => infer R
//     ? R
//     : never
//     : never



// let v1: FirstReturnType<typeof arr1> = 1;

type flatten<T> = T extends Array<infer U> ? flatten<U> : T;


function deepFlatten<Z extends readonly unknown[]>(_p: Z): flatten<Z>[] {
    throw new Error();
}

const arr1: number[] = deepFlatten([1, 2, 3]);
const arr2: number[] = deepFlatten([[2, 3, 4], 2, 3]);
const arr3: number[] = deepFlatten([[2, [3, 5, 6], 4], 2, 3]);