const Commando = require('discord.js-commando');
const config = require("./config.json");
const bot = new Commando.Client();

bot.registry.registerGroup('chance','Chance');
bot.registry.registerGroup('vote','Vote');
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

bot.login(config.login);