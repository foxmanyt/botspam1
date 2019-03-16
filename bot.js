const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553598341762646016")
setInterval(function() {
channel.send(`a7a a7a a7a a7a a7a a7a7 a77a a7a a7 a a7a a7a`);
}, 30)
})

client.login(process.env.BOT_TOKEN);