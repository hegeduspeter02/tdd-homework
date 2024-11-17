import { greetings } from '../src/greetings';

describe('greetings', () => {

    describe('if no shouting happens', () => {
        test('with an empty array', () => {
            expect(greetings([])).toBe('Hello, my friend');
        });
    
        test('with one name', () => {
            expect(greetings(['Alice'])).toBe('Hello Alice.');
        });
    
        test('with two names', () => {
            expect(greetings(['Alice', 'Bob'])).toBe('Hello Alice and Bob.');
        });
    
        test('with more than two names', () => {
            expect(greetings(['Alice', 'Bob', 'Charlie', 'Peter'])).toBe('Hello Alice, Bob, Charlie and Peter.');
        });
    });

    describe('if shouting happens', () => {
        test('with one name', () => {
            expect(greetings(['ALICE'])).toBe('HELLO ALICE!');
        });

        test('with mixed inputs', () => {
            expect(greetings(['Alice', 'BOB', 'Charlie', 'Peter', 'DANIEL'])).toBe('Hello Alice, Charlie and Peter. HELLO BOB AND DANIEL!');
        });
    });
    
});