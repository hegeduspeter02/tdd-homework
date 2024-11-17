export function greetings(names: string[]): string {
    if (names.length === 0) {
        return 'Hello, my friend';
    }

    return `Hello ${names.join(', ')}.`;
}