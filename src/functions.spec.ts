import {average} from './functions';
describe('Average FN', () => {
    it('should work', () => {
        expect(average('1', 3)).toEqual('Average is 2');
        expect(average(1, '3')).toEqual('Average is 2');
        expect(average(1, 3, 2)).toEqual('Average is 2');
    })
})