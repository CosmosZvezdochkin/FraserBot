const Discord = require('discord.js');

module.exports.run = async (bot,message,args) =>{
    let rawcount = message.content.slice(7);///Отрезает от сообщения первые 7 символов (~clear )

    var dMessages = -1;

	if(!args[0]){
    const embed = new Discord.RichEmbed()
       .setColor("#3867d6")
	   .addField(`Аргументы не введены`, '**Пример:** ~clear 5', false)
	message.author.send(embed);
	return;
    }

    var count = parseInt(rawcount);///переводит string в number

    if (isNaN(count)){
    	const embed2 = new Discord.RichEmbed()
       .setColor("#3867d6")
	   .addField(`Аргументы введены не верно`, '**Пример:** ~clear <число>', false)
    	message.author.send(embed2);
    	return;
    }
    if(count >= 100){
    	const embed3 = new Discord.RichEmbed()
       .setColor("#3867d6")
	   .addField(`Число не должно быть больше или равно 100`, '**Пример:** ~clear 5', false)
    	message.author.send(embed3);
    	return;
    }
    if(count == 0){
    	const embed4 = new Discord.RichEmbed()
       .setColor("#3867d6")
	   .addField(`Число не может быть равно 0`, '**Пример:** ~clear 5', false)
    	message.author.send(embed4);
    	return;
    }
        message.channel.fetchMessages({limit: Math.min(count + 1, 100)}).then(messages => {
            messages.forEach(m => {
                if (m.author.id == bot.user.id) {
                    m.delete().catch(console.error);
                    dMessages++;
                }
            });
        }).then(() => {
                if (dMessages === -1) dMessages = 0;
                    var scount = ""
                    switch (dMessages){
                    	case 1:
                    	scount = "сообщение";
                    	break;
                    	case 2:
                    	scount = "сообщения";
                    	break;
                    	case 3:
                    	scount = "сообщения";
                    	break;
                    	case 4:
                    	scount = "сообщения";
                    	break;
                    	default:
                    	scount = "сообщений";
                    	break;
                    }
                message.reply(`было удалено ${dMessages} ${scount}`)
                .then(m => m.delete(3000));
        }).catch(console.error);
}///Конец модуля run


module.exports.help ={
	name: "clear"
}