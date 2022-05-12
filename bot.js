require('dotenv').config();

const { Client } = require('discord.js');
const { getRndProblem } = require('./problem');

const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {
    if (message.content.includes('/daily')) {
        return message.reply('https://leetcode.com/problemset/all/');
    }
    if (message.content.includes('/notion')) {
        return message.reply('https://www.notion.so/fa153462188740fda9e34f755f8f2fa9?v=9a1b70ea40e94d0d9033f068df616931');
    }
    if (message.content.includes('/random')) {
        return message.reply(getRndProblem());
    }
});

Token = process.env.TOKEN;
client.login(Token);

