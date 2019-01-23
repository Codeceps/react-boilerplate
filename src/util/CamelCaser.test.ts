import {camelCaseIt} from './CamelCaser';


/**
 * Unit testing
 */
describe('test the functionality of the camel casing function', () => {

    it('should return empty value for passed empty value', () => {
        const value = '';
        const expected = '';
        expect(camelCaseIt(value)).toBe(expected)
    });

    test('with single lowercase word', () => {
        const value = 'hello';
        const expected = 'Hello';
        expect(camelCaseIt(value)).toBe(expected)
    });

    test('with multiple lowercase words', () => {
        const value = 'hello world';
        const expected = 'Hello World';
        expect(camelCaseIt(value)).toBe(expected)
    })

    test('with multiple uppercase words', () => {
        const value = 'Foo Bar Baz';
        const expected = 'Foo Bar Baz';
        expect(camelCaseIt(value)).toBe(expected)
    })

    test('with multiple mixed cased words', () => {
        const value = 'foo Bar baz';
        const expected = 'Foo Bar Baz';
        expect(camelCaseIt(value)).toBe(expected)
    })

});