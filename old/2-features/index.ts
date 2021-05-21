/* let/const **/

let period = 1000;
const baseUrl = 'http://localhost:8080';


/**object*/

let firstName = 'Ihor';

let account = {
    firstName,
    getName() {
        return this.firstName;
    }
}

/**spread**/
let person = {...account};
let dates = [...[1, 2, 3]];


/**destructoring **/
let {firstName: myName} = account;
let [firstDate] = dates


/**template str**/


function userMessage([start, end]: TemplateStringsArray, account: typeof person) {
    return `${start}${account.firstName}${end}`;

}

console.log(userMessage`Good day, ${person} !!!`);


/**for of**/
for (let date of dates) {
    console.log(date);
}

/* arrow fn**/
let sum = (a: number, b: number) => a + b;


/**class*/
class Point {
    x = 1;

    getX() {
        return this.x;
    }
}

/**OC*/
let user: any = {};
const info = user?.base?.info;

/**?? */
let admin;
let p = admin ?? user;


const inArr = dates.includes(1);
