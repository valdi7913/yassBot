import fetch from 'node-fetch';
// import {cache} from 'node-cache';

export function commandHandler(msg) {
    if(msg.content.includes('quote'))
    {
        // quoteQueen(msg.content);
        quoteQueen(msg);
    } else {
        msg.channel.send(getRandomYassifiedAnswer(msg));
    }
}

function getRandomYassifiedAnswer(msg){
    const posreplies = [
        '💅👁👄👁💅',
        `Ok Slay ${msg.author.username}!`,
        'Pop off your pussy queen!',
        '🐝',
        `Yaaaaaaaz ${msg.author.username}!`,
        'OK damn, gworl!',
        'Who tought you to pop off that pussy queen?',
        'Boots the house down, momma yess god',
        'Material Gworl!',
        'Queen!',
        'Yass queen skinny legend versace boots the house down slay queen hunty momma and oops daddy *smack* snatch my WIG',
    ];
    const randomIndex = Math.floor(Math.random() * posreplies.length);
return  posreplies[randomIndex];
}

async function quoteQueen(msg){
    const nameToSearch = parseOutName(msg.content);
    const url = `http://www.nokeynoshade.party/api/queens?name=${nameToSearch}`;
    try {
        await fetch(url,
            {
                method: 'GET',
                headers: 
                {
                'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(data=> {
                    if(data.length > 0){
                        console.log(data)
                        msg.channel.send(data[0].quote);
                    }
                    else {
                        msg.channel.send('No quote found for ' + nameToSearch.split('%20').join(' '));
                    }
                });
    } catch (error) {
        console.log(error);
    }
}

export function parseOutName(string){
    //Select substring between first word containing capital letter and the last word containing a capital letter
    const substring = string.substring(string.indexOf('\'')+1, string.lastIndexOf('\''));
    return substring.trim().split(' ').join('%20');
}