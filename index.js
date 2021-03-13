const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('minecraft-server-util')
const prefix = '!'
client.login('ODIwMzU1NTA2NjM0NzUyMDQw.YEz9mg.5b-Pg0bjGt6upUqyTbK5HYpoCYU');

client.on('ready', () => {
  console.log(`${client.user.tag} is now alive pog!`);
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});
