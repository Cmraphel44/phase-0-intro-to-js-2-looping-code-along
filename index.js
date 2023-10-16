


function writeCards(names, eventName) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
       
    }

    return messages;
}

function countDown(positiveInteger) {
    while (positiveInteger >= 0) {
        console.log(positiveInteger--)
    }

    
    
     
}


countDown(25);









