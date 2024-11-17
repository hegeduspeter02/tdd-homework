export function greetings(names: string[]): string {
    if (names.length === 0) {
        return 'Hello, my friend';
    }

    // Split names if they are given in a single string
    names = names.flatMap(name => name.split(',').map(n => n.trim()));

    const normalGreeting = convertToProperGreetingFormat(
        names.filter(name => name !== name.toUpperCase()).join(', '),
        false
    );
    
    const shoutingGreeting = convertToProperGreetingFormat(
        names.filter(name => name === name.toUpperCase()).join(', '),
        true
    );

    if(normalGreeting.length > 0 && shoutingGreeting.length > 0){
        return normalGreeting + ' ' + shoutingGreeting;
    }
    else if(normalGreeting.length > 0 && shoutingGreeting.length === 0){
        return normalGreeting;
    }
    else {
        return shoutingGreeting;
    }
}

function convertToProperGreetingFormat(greetingNames: string, isShouting : boolean): string {
    let greeting = ''

    if(greetingNames.length > 0){
        greeting = (isShouting ? 'HELLO ' : 'Hello ') + greetingNames + (isShouting ? '!' : '.');
    }

    const greetingLastCommaIndex = greeting.lastIndexOf(',');
    if(greetingLastCommaIndex !== -1){
        greeting = greeting.substring(0, greetingLastCommaIndex) + (isShouting ? ' AND' : ' and') + greeting.substring(greetingLastCommaIndex + 1);
    } 
    
    return greeting;
}