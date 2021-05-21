// interface IAccount {
//     name: string;
//     age: number;
// }
//
// let p1: IAccount = IAccount;

// let userAccount =  {
//     firstName: 'Ihor',
//     age: 35
// }
//
// let p1: typeof userAccount = userAccount
//
// class MyAccount {
//     name: string;
// }
//
// let u: NaN = new MyAccount();

// let n: n = 1;
// n = 's';

let num: number = null;
num.toFixed();
num = 1;
num = NaN;
num = 0x0101;


let str: string = 's';
str = `${num}`;


let bool: boolean = true;
bool = false;

let nill: null = null;
let und: undefined = undefined;

let bigI: bigint = 4n;

const key1: symbol = Symbol('key1');
const key2: unique symbol = Symbol('key1');
const key3 = Symbol('key1');


const strictObj = {
    [key1]: 1,
    [key2]: 1,
    [key3]: 1,
}

const v1 = strictObj[key1];
const v2 = strictObj[key2];
const v3 = strictObj[key3];