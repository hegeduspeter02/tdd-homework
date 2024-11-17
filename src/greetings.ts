export function greetings(names: string[]): string {
    if (names.length === 0) {
        return 'Hello, my friend';
    }

    let result: string = `Hello ${names.join(', ')}.`;
    if(names.length > 1) {
        const lastCommaIndex = result.lastIndexOf(',');
        result = result.substring(0, lastCommaIndex) + ' and' + result.substring(lastCommaIndex + 1);
    }

    return result;
}