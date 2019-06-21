const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
	    message.delete();
	if (!message.member.hasPermission("ADMINISTRATOR")){
		message.author.send("У тебя нет прав для этой команды");
		return;
	}
        process.exit();
}///Конец модуля run

module.exports.help ={
name: 'restart'
}