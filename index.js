const discord = require("discord.js");
const botConfig = require("./botconfig.json");
 
const client = new discord.Client();
client.login(botConfig.token);
 
client.on('ready', () => {

    console.log('I am ready!');

});
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }
 
});

client.login(process.env.TOKEN);
