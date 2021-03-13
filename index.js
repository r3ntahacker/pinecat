const Discord = require('discord.js');
const client = new Discord.Client();
const ping = require('minecraft-server-util')
const prefix = '!'
require('dotenv').config()
const token = process.env.pinecat_token;

client.on('ready', () => {
  console.log(`${client.user.tag} is now alive pog!`);
});

