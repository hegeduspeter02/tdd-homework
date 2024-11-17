import { greetings } from '../src/greetings';

describe('greetings', () => {
    test('with an empty array', () => {
        expect(greetings([])).toBe('Hello, my friend');
    });

    test('with one name', () => {
        expect(greetings(['Alice'])).toBe('Hello Alice.');
    });

    test('with more than two names', () => {
        expect(greetings(['Alice', 'Bob', 'Charlie'])).toBe('Hello Alice, Bob and Charlie.');
    });
});