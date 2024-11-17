export function greetings(names: string[]): string {
    if (names.length === 0) {
        return 'Hello, my friend';
    }

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

    if(normalGreeting.indexOf(',') !== -1){
        normalGreeting = normalGreeting.substring(0, normalGreeting.length - 2) + '.';
    } 
    else{
        normalGreeting = '';
    }
    if(shoutingGreeting.indexOf(',') !== -1){
        shoutingGreeting = shoutingGreeting.substring(0, shoutingGreeting.length - 2) + '!';
    } 
    else{
        shoutingGreeting = '';
    }
    
    const normalGreetingLastCommaIndex = normalGreeting.lastIndexOf(',');
    if(normalGreetingLastCommaIndex !== -1){
        normalGreeting = normalGreeting.substring(0, normalGreetingLastCommaIndex) + ' and' + normalGreeting.substring(normalGreetingLastCommaIndex + 1);
    }

    const shoutingGreetingLastCommaIndex = shoutingGreeting.lastIndexOf(',');
    if(shoutingGreetingLastCommaIndex !== -1){
        shoutingGreeting = shoutingGreeting.substring(0, shoutingGreetingLastCommaIndex) + ' AND' + shoutingGreeting.substring(shoutingGreetingLastCommaIndex + 1);
    }

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