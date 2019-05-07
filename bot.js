const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("575306500785045504")
setInterval(function() {
channel.send(`OMS copamny OMS server OMS SOUMA SOUMA KUN`);
}, 30)
})

client.login(process.env.BOT_TOKEN);