const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

let cooldown = new Set();
let cdtime = 5;///время

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Команды не были найдены.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} файл загружен!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  var count = bot.guilds.size///Показывает кол-во серверов ,на которых находиться бот
  var servers = ""
  switch (count){
  	case 1:
  	servers="сервер"
  	break;
  	case 2:
  	servers="сервера";
  	break;
  	case 3:
    servers="сервера";
  	break; 	
  	case 4:
  	servers="сервера";
  	break;
  	default:
  	servers="серверов";
  	break;       }///конец switch

  console.log(`Запущен как ${bot.user.tag}`);
  bot.user.setActivity(`Обслуживаю ${count} ${servers}`, { type: 'STREAMING' });///Ставит статус боту с типом "Стримит на TWITCH"
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

if(!message.content.startsWith(config.prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Подожди 5 секунд перед использованием команды")
  }
  if(message.member.hasPermission("SEND_MESSAGES") & message.member.hasPermission("VIEW_CHANNEL")){
    cooldown.add(message.author.id);
  }

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
});

bot.login(config.token);