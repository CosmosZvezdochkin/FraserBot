const Discord = require('discord.js');

module.exports.run = async(bot,message,args) =>{


		const embed = require('./embeds.json');
		const rNum = Math.floor(Math.random(0,5)*10);///Переменнная rNum содержит случайное число от 0 до 9
		message.delete();

		switch(rNum){
			case 0: 
			const emd1 = new Discord.RichEmbed()
           .setColor(embed.colors[1])
	       .setTitle(embed.titles[1])
	       .setThumbnail(embed.thmls[1])

			message.author.send(emd1);
			break;
			case 1:
			const emd2 = new Discord.RichEmbed()
           .setColor(embed.colors[1])
	       .setTitle(embed.titles[1])
	       .setThumbnail(embed.thmls[1])
			message.author.send(emd2);

			break;
			case 2:
		    const emd3 = new Discord.RichEmbed()
           .setColor(embed.colors[2])
	       .setTitle(embed.titles[2])
	       .setThumbnail(embed.thmls[2])

			message.author.send(emd3);
			
			break;
			case 3:
			const emd4 = new Discord.RichEmbed()
           .setColor(embed.colors[2])
	       .setTitle(embed.titles[2])
	       .setThumbnail(embed.thmls[2])

			message.author.send(emd4);
			
			break;
			case 4:
		    const emd5 = new Discord.RichEmbed()
           .setColor(embed.colors[3])
	       .setTitle(embed.titles[3])
	       .setThumbnail(embed.thmls[3])

			message.author.send(emd5);
			
			break;
			case 5:
		    const emd6 = new Discord.RichEmbed()
           .setColor(embed.colors[3])
	       .setTitle(embed.titles[3])
	       .setThumbnail(embed.thmls[3])

			message.author.send(emd6);
			
			break;
			case 6:
		    const emd7 = new Discord.RichEmbed()
           .setColor(embed.colors[4])
	       .setTitle(embed.titles[4])
	       .setThumbnail(embed.thmls[4])

			message.author.send(emd7);
			
			break;
			case 7:
		    const emd8 = new Discord.RichEmbed()
           .setColor(embed.colors[4])
	       .setTitle(embed.titles[4])
	       .setThumbnail(embed.thmls[4])

			message.author.send(emd8);
			break;
			case 8:
		    const emd9 = new Discord.RichEmbed()
           .setColor(embed.colors[0])
	       .setTitle(embed.titles[0])
	       .setThumbnail(embed.thmls[0])

			message.author.send(emd9);
			
			break;
			case 9:
		    const emd10 = new Discord.RichEmbed()
           .setColor(embed.colors[0])
	       .setTitle(embed.titles[0])
	       .setThumbnail(embed.thmls[0])

			message.author.send(emd10);
			
			break;
		}///Конец Switch
}///Конец метода run

module.exports.help ={
    name: 'today'
}