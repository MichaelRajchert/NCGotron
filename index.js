const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "NTIwNDcyNjI0Mzg4ODk4ODI2.Duuchg.Ht2umBf_XepNiPAuh7bcNl3rleE"
//const TOKEN = "Lol-you-thought-you-could-get-clever-here!";

bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.reply('NCG REPPPP AYE BEEP BOOP BOI');
    }
});

bot.on('ready',function(){
    console.log('Started');
});

bot.login(TOKEN);