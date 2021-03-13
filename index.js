const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('minecraft-server-util')
const prefix = '!'
client.login('token');

client.on('ready', () => {
  console.log(`${client.user.tag} is now alive pog!`);
});

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift[0]().toLowerCase();
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if (message.content === '!avatar') {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }
  } else if (message.content === 'im') { 
    message.channel.send('Hi ${args} im pinecat');
  }
});
client.on('message', msg => {
  if (msg.content === 'im hungry') {
    msg.channel.send('hi hungry im pinecat');
  }
});
