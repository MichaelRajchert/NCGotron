const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "Lol-you-thought-you-could-get-clever-here!";

bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.reply('NCG REPPPP AYE BEEP BOOP BOI');
    }
});

bot.on('ready',function(){
    console.log('Started');
});

bot.login(TOKEN);