const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = "Lol-you-thought-you-could-get-clever-here!";

bot.registry.registerGroup('simple','Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+'/commands');

bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.channel.sendMessage('NCG REPPPP AYE BEEP BOOP BOI, GOOD TO SEE YA ' + message.author);
    }
});

bot.on('ready',function(){
    console.log('Started');
});

bot.login(TOKEN);