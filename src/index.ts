import { Validate, Range, CheckTypeInRunTime, Debounce, LogInputValue, SavePersitence } from './decorators';

class SearchComponent {


    @CheckTypeInRunTime
    @SavePersitence
    public inputValue!: string;

    public constructor(
        private readonly inputEl: HTMLElement
    ) {
        this.inputEl.addEventListener('input', this.onSearch.bind(this))
        console.log(this.inputValue)
    }

    @Debounce(300)
    @LogInputValue
    private onSearch(_e: Event) {
        // this.inputValue = (_e.target as HTMLInputElement).value;
    }

}

const inputEl: HTMLInputElement = document.querySelector('input') as HTMLInputElement;

const search = new SearchComponent(inputEl);

setTimeout(() => {
    (search.inputValue as any) = 32;
}, 5000)



class Calculator {
    @Validate
    public updatePercentage(
        _oldValue: number,
        @Range(30, 70) _newValue: number
    ): void {
        console.log(_oldValue, _newValue)
    }
}

const calc = new Calculator();
calc.updatePercentage(0, 50);

setTimeout(()=>{
    calc.updatePercentage(50, 80);
}, 7000)