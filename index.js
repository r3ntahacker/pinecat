const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('minecraft-server-util')
const prefix = '!'
client.login('token');

client.on('ready', () => {
  console.log(`${client.user.tag} is now alive pog!`);
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
});

