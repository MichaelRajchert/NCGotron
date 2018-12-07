const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'chance',
            memberName: 'flip',
            description: 'Flips a coin. Obviously.'
        });
    }
    async run(message, args){
        var state = Math.floor(Math.random()*2);
        if(state == 0){
            message.reply("Heads.");
        }
        else{
            message.reply("Tails.");
        }
    }
}

module.exports = CoinFlipCommand;