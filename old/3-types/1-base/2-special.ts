let anyT: any = {};
anyT();
anyT.a.n = 1;
anyT = () => 2;

let unkT: unknown = {};
unkT();
unkT.a.n = 1;
unkT = () => 2;
unkT = 1;
unkT['s'] = 1;


let v: void = undefined;

function fn ():void {

}