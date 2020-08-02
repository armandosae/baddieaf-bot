const Discord = require('discord.js');
const client = new Discord.Client();

bot.on("ready", function (){
    console.log('${bot.user.username} Is Online!');
});


client.login(process.env.BOT_TOKEN);
