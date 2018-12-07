const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'chance',
            memberName: 'roll',
            description: 'Rolls a die. Obviously.'
        });
    }
    async run(message, args){
        var state = (Math.floor(Math.random() * 6)+1);
        message.reply("Rolled " + state);
    }
}

module.exports = DiceRollCommand;