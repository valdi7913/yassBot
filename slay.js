import dotenv from 'dotenv/config';
import {Client, Intents } from 'discord.js';
import { commandHandler} from './commands.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.login(process.env.BOT_TOKEN);

client.on('ready', () =>
{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', gotMessage);

function gotMessage(msg) {
    const lowercase = msg.content.toLowerCase();
    if (lowercase.startsWith('hey yassbot') && msg.author.id !== client.user.id) {
       commandHandler(msg);
    }
    console.log(msg.author.username + ": " + msg.content);
}
