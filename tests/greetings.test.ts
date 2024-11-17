import { greetings } from '../src/greetings';

describe('greetings', () => {
    test('with an empty array', () => {
        expect(greetings([])).toBe('Hello, my friend');
    });
});