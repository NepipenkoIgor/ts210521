// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
// const v1 = average(1, 2);
// const v2 = average(1, 2, '3');
// const v3: number = average(1, 2, 1);


// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }

// const v0 = average(1);
// const v1 = average(1, 2);
// const v2 = average(1, 2, '3');
// const v3: number = average(1, 2, 1);


// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }

// const v0 = average(1);
// const v1 = average(1, 2);
// const v2 = average(1, 2, '3');
// const v3: number = average(1, 2, 1);

export type sn = string | number;


export function isString(arg: sn): arg is string {
    return typeof arg === 'string';
}


export function average(a: string, b: number): string;
export function average(a: number, b: string): string;
export function average(a: number, b: number, c: number): string;
export function average(...args: sn[]): string {
    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}


// let arr: Array

// const v00 = average();
// const v0 = average(1);
// const v1 = average('1', 2);
// const v112 = average(1, '2');
// const v12 = average(1, 2, 2);
// const v11 = average(1, 2, 2, 3, 4, 5);
// const v2 = average(1, 2, '3');
// const v3: string = average(1, 2, 1);


// function getFullName(this: { name: string, surname: string }) {
//     return `${this.name} ${this.surname}`;
// }

// let account = {
//     name: 'Ihor',
//     surname: 'Nepipenko',
//     getFullName
// }

// account.getFullName();
