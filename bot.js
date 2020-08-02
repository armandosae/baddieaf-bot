const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzEyNTU5NjQwMTg5MDc1NDU3.XsTU4A.g07AH7lXPOijHtjC2MZfE011sVQ';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
