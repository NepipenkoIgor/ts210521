class Point {

    #p: number = 1;

    public constructor(x: string, y: number, z: number)
    public constructor(x: string, y: string, z: number)
    public constructor(public x: string, protected y: number | string, private z: number) {
    }

    public sum(): number {
        return Number(this.x) + Number(this.y) + this.z + this.#p;
    }
}

class MyPoint extends Tag(Timestamp(Point)) {
    public constructor(x: string, y: string, z: number) {
        super(x, y, z);
    }

    public sum() {
        // do something
        return super.sum();
    }
}

let p1 = new Point('1', 1, 1);
let p2 = new MyPoint('1', '1', 1);
console.log(p2.tags);
console.log(p2.timestamp);




class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
const inst3 = Singleton.getInstance();
const inst4 = Singleton.getInstance();

console.log(inst1 === inst4);


type Constructable = new (...args: any[]) => any;

function Timestamp<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tag<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'js'];
    }
}


abstract class AbstractControl<Model = string> {
    public abstract model: Model;

    public abstract getModel(): Model;


    public onFocus() {
        // do something;
    }

    public onBlur() {
        // do something;
    }
}

abstract class AbstractControlWithSet<T = string> extends AbstractControl<T> {
    public abstract setModel(model: T): void;
}



interface IDropDownItem {
    text: string;
    value: string;
}

class MHDropDown extends AbstractControlWithSet<IDropDownItem[]> {
    public model: IDropDownItem[] = [];

    public getModel(): IDropDownItem[] {
        return this.model;
    }

    public setModel(model: IDropDownItem[]) {
        this.model = model;
    }
}

class MHSearch extends AbstractControl {
    public model: string = '';

    public getModel(): string {
        return this.model;
    }
}