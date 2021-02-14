const TeleBot = require('telebot');

const bot = new TeleBot('TOKEN'); 

bot.on(['/start', '/hello', '/oke'], (msg) => msg.reply.text('Welcome!'));
bot.on(['/naim'], (msg) => msg.reply.text('cantik'));
bot.start();