module.exports={
    name: "help",
    description: "shows list of main commands",
    execute(message ,args){
    	    const Discord = require('discord.js');
    	    const client = new Discord.Client();
    	    const embeds = require('./embeds.json');
            const {prefix} = require('../config.json');
            var count = client.guilds.size
            message.delete();

            const Embed1 = new Discord.RichEmbed()
            .setTitle(`Имя Бота => Fraser#8424`)
            .setColor("#eb3b5a")

            const Embed2 = new Discord.RichEmbed()
            .setTitle(`Префикс бота => ${prefix}`)
            .setColor("#3867d6")


    	    const Embed3 = new Discord.RichEmbed()
    	    .addField(`${embeds.commands[0]}`, 'Перезагружает бота (если запущен через pm2)', false)
            .addField(`${embeds.commands[1]}`, 'Говорит какой сегодня день', false)
            .setColor("#26de81")

            message.author.send(Embed1);
            message.author.send(Embed2);
            message.author.send(Embed3);
    },
};
