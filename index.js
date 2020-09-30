const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = "$"
const developers = "470634248978694166"



let sugg = JSON.parse(fs.readFileSync("./suggestions.json", 'utf8'));
client.on('message', async message => {
if(message['author'].bot) return undefined;
if(message['content']['startsWith'](prefix + 'set-sug')){
var args1 = message['content'].split(" ").slice(1).join(" ");    
let channel = message['guild'].channels.find(ch => ch.name === `${args1}`)
if(!args1) return message.channel.send(`> **Write Name Channel**`);
if(!channel) return message.channel.send(`> **Not Found This Name Channel**`);
message.channel.send(`> **Done Selected Channel Suggestions**`);
sugg[message.guild.id] = {
channel: args1,    
}
fs.writeFile("./suggestions.json", JSON.stringify(sugg), (err) => {
if(err)
console.error(err);
})
}
})

client.on('message', async message => {
if(message['author'].bot) return undefined;
if(message['content']['startsWith'](prefix + 'طلب') || message['content']['startsWith'](prefix + 'tal') || message['content']['startsWith'](prefix + 'طلب')){
let sugg11 = message.content.split(" ").slice(1).join(" ");
if(!sugg11) return message.channel.send(`> **Write Suggestion**`);
let room = message.guild.channels.find(ro => ro.name === `${sugg[message.guild.id].channel}`);
if(!room) return message.channel.send(`> **Not Found Room**`);
let send21 = new Discord.RichEmbed()
.setAuthor(`${message.author.tag} (ID : ${message.author.id})`, message.author.avatarURL)
.setTitle(`الطلبات`)
.setDescription(`> ${sugg11}`)
.setColor('')
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.setFooter(`Version: 1.1.2`)
room.send(send21)
fs.writeFile("./suggestions.json", JSON.stringify(sugg), (err) => {
if(err)
console.error(err);
})
}
})


client.login(process.env.token);