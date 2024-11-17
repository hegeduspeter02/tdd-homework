import { greetings } from '../src/greetings';

describe('greetings', () => {

    describe('with an empty array', () => {
        it('should return the normal greeting', () => {
            expect(greetings([])).toBe('Hello, my friend');
        });
    });

    describe('if no shouting happens', () => {
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

        test('with two names', () => {
            expect(greetings(['ALICE', 'BOB'])).toBe('HELLO ALICE AND BOB!');
        });

        test('with more than two names', () => {
            expect(greetings(['ALICE', 'BOB', 'CHARLIE', 'PETER'])).toBe('HELLO ALICE, BOB, CHARLIE AND PETER!');
        });
    });

    describe('if normal and shouting greetings are mixed', () => {
        test('with two mixed inputs', () => {
            expect(greetings(['PETER', 'Charlie'])).toBe('Hello Charlie. HELLO PETER!');
        });

        test('with multiple mixed inputs', () => {
            expect(greetings(['Alice', 'BOB', 'Charlie', 'Peter', 'DANIEL'])).toBe('Hello Alice, Charlie and Peter. HELLO BOB AND DANIEL!');
        });
    });
    
});