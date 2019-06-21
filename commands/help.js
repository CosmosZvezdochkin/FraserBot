    
const Discord = require('discord.js');

module.exports.run= async(bot,message,args) =>{


            const embeds = require('./embeds.json');
            const {prefix} = require('../config.json');

            message.delete();///Удаляет сообщение с командой

            const Embed1 = new Discord.RichEmbed()///начало конструкции Embed
            .setTitle(`Имя Бота => ${bot.user.tag}`)
            .setColor("#eb3b5a")
            ///конец конструкции Embed
            const Embed2 = new Discord.RichEmbed()///начало конструкции Embed
            .setTitle(`Префикс бота => ${prefix}`)
            .setColor("#3867d6")
            ///конец конструкции Embed

            const Embed3 = new Discord.RichEmbed()///начало конструкции Embed
            .addField(`${embeds.commands[0]}`, 'Перезагружает бота (если запущен через pm2)', false)
            .addField(`${embeds.commands[1]}`, 'Говорит какой сегодня день', false)
            .addField(`${embeds.commands[2]} <текст>`, 'Отправляет сообщение от лица бота', false)
            .addField(`${embeds.commands[3]} <ник юзера> <причина>`, 'Отправляет жалобу на игрока', false)
            .addField(`${embeds.commands[4]} <кол-во>`, 'Удаляет определённое кол-во сообщений в канале', false)
            .setColor("#26de81")
            ///конец конструкции Embed

            message.author.send(Embed1);///
            message.author.send(Embed2);///отправляет Embed's в ЛС автору сообщения
            message.author.send(Embed3);///
}///Конец модуля run

module.exports.help ={
name: "help"
}