// let sum = (a: number, b: number) => a + b;
// sum(1,2);
// sum(10,2)

// type/interface/fn/class

interface IUser<info extends { male: boolean } = { male: boolean }, id = number> {
    id: id,
    name: string,
    info: info
}

let user: IUser = {
    id: 123123,
    name: 'Ihor',
    info: {
        male: true
    }
}

let admin: IUser<{ male: boolean, subjects: string[] }, string> = {
    id: '123123',
    name: 'Ihor',
    info: {
        male: true,
        subjects: ['ts', 'js']
    }
}



















interface IAnimation {
    type: string;
}