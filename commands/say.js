const Discord = require("discord.js");

module.exports.run = async (bot,message,args) =>{
    let text = message.content.slice(5);///Отрезает от сообщения первые 5 символов (~say )
    
    message.delete();///Удаляет сообщение с командой

	if(!args[0]){
    const embed = new Discord.RichEmbed()
       .setColor("#3867d6")
	   .addField(`Аргументы не введены`, '**Пример:** ~say Привет', false)
	   .setThumbnail()
	message.author.send(embed);
	return;
}

    

    message.channel.send(text);///Отправляет сообщение в канал , где была вызвана команда
}///Конец модуля run

module.exports.help = {
	name: 'say'
}