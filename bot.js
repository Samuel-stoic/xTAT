const TelegramBot = require('node-telegram-bot-api');

// Your test bot token
const token = "8413183616:AAH6fUv5FtkgR7kZSDuw9cQ5ywMidCf1B8Y";

// Create a bot that uses polling
const bot = new TelegramBot(token, { polling: true });

// When someone sends "/start"
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello! 👋 xTAT Bot is running.");
});

// When someone sends any message
bot.on('message', (msg) => {
  if (msg.text !== "/start") {
    bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
  }
});
