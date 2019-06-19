const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {token,prefix}= require('./config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
  var coun = client.guilds.size
  var jk = ""
  switch (coun){
  	case 1:
  	jk="сервер"
  	break;
  	case 2:
  	jk="сервера";
  	break;
  	case 3:
   	jk="сервера";
  	break; 	
  	case 4:
  	jk="сервера";
  	break;
  	default:
  	jk="серверов";
  	break;
  }

  console.log(`Запущен как ${client.user.tag}!`);
  client.user.setActivity(`Обслуживаю ${coun} ${jk}`, { type: 'STREAMING' });
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('возникла ошибка при вызове команды!');
	}
});

client.login(token);