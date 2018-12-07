const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'poll',
            group: 'vote',
            memberName: 'poll',
            description: 'Starts a vote.'
        });
    }
    async run(message, args){
        message.reply("Vote started");
    }
}

module.exports = CoinFlipCommand;