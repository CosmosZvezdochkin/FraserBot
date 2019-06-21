const Discord = require('discord.js');

module.exports.run = async(bot,message,args) =>{
	message.delete();
	if (!message.member.hasPermission("ADMINISTRATOR")){
		message.author.send("У тебя нет прав для этой команды");
		return;
	}
	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!rUser) return message.author.send("Такого пользователя нет или он указан не верно.");
	let rreason = args.join(" ").slice(22);
	if(!rreason) return message.author.send("Причина не указана.");
	let uicon = message.author.displayAvatarURL;

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("Жалоба")
    .setColor("#eb3b5a")
    .addField("Нарушитель", `${rUser} с ID: ${rUser.id}`)
    .addField("Администратор", `${message.author} с ID: ${message.author.id}`)
    .addField("Канал", `${message.channel}`,true)
    .addField("Причина", `${rreason}`,true)
    .setTimestamp()
    .setThumbnail(uicon)

    let reportschannel = message.guild.channels.find(`name`, "жалобы");
    if(!reportschannel){

    var server = message.guild;
    var name = "жалобы";

    server.createChannel(name, "жалобы");

    let ChanEmbed = new Discord.RichEmbed()
    .addField(`Был создан канал : ${name}` , "Повторно напишите ``~report`` на игрока")
    .setColor("#fed330")

    message.author.send(ChanEmbed);
    return;
    }
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}
module.exports.help ={
	name: "report"
}