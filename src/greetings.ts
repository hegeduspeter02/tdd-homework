export function greetings(names: string[]): string {
    if (names.length === 0) {
        return 'Hello, my friend';
    }

    if (names.length === 1) {
        if (names[0] === names[0].toUpperCase()) {
            return `HELLO ${names[0]}!`;
        }
        return `Hello ${names[0]}.`;
    }

    let joinedNames: string = `Hello ${names.join(', ')}.`;
    const lastCommaIndex = joinedNames.lastIndexOf(',');
    joinedNames = joinedNames.substring(0, lastCommaIndex) + ' and' + joinedNames.substring(lastCommaIndex + 1);

    return joinedNames;
}