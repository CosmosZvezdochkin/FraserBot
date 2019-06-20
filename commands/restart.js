const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
	    message.delete();
        process.exit();
}///Конец модуля run

module.exports.help ={
name: 'restart'
}