let num: 1 | 2 | 3 | 4 = 2;
type baseType = 'ease';
type direction = 'in' | 'out';
enum AnimationEnum {
    EASE_IN = 'EASE_IN1',
    EASE_OUT = 'EASE_OUT1',
    BASE_EASE = EASE_IN
}

interface IAnimationOptions {
    delay: number;
    type: AnimationEnum//`${baseType}-${direction}`    //'ease-in' | 'ease-out';
}

let k: keyof IAnimationOptions; // 'delay' |  'type' 



function animation(_options: IAnimationOptions): void {

}

animation({ delay: 10, type: AnimationEnum.EASE_IN });


const keys = Object.keys(AnimationEnum)
    .map((key: string) => {
        return AnimationEnum[key as keyof typeof AnimationEnum]
    });

console.log(keys);


interface IFact {
    factId: number,
    name: string,
    userId: number
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact => {
    return 'factId'
}

dataList.map((item: { action: string, data: IFact }) => {
    if (item.data[uniqueValue()]) {

    }
    return item;
})

let n: IFact