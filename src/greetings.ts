export function greetings(names: string[]): string {
    if (names.length === 0) {
        return 'Hello, my friend';
    }

    // Split names if they are given in a single string
    names = names.flatMap(name => name.split(',').map(n => n.trim()));

    let normalGreeting: string = 'Hello ';
    let shoutingGreeting: string = 'HELLO ';
    
    names.forEach(name => {
        if (name === name.toUpperCase()) {
            shoutingGreeting += name + ', ';
        }
        else {
            normalGreeting += name + ', ';
        }
    });

    normalGreeting = convertToProperGreetingFormat(normalGreeting, false);
    shoutingGreeting = convertToProperGreetingFormat(shoutingGreeting, true);

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

function convertToProperGreetingFormat(greeting: string, isShouting : boolean): string {
    if(greeting.indexOf(',') !== -1){
        greeting = greeting.substring(0, greeting.length - 2) + (isShouting ? '!' : '.');

        const greetingLastCommaIndex = greeting.lastIndexOf(',');
        if(greetingLastCommaIndex !== -1){
            greeting = greeting.substring(0, greetingLastCommaIndex) + (isShouting ? ' AND' : ' and') + greeting.substring(greetingLastCommaIndex + 1);
        }
    } 
    else{
        greeting = '';
    }

    return greeting;
}