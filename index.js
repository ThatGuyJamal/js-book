const Discord = require('discord.js');
const config = require('./config.json');
const utils = require('./utils');

class BotClient extends Discord.Client {
    constructor(options) {
        super(options)
        this.commands = new Discord.Collection();
    }
}

const client = new BotClient({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

client.on("ready", () => {
    utils.loadCommands(client);
    console.log("Bot is ready!")
})

client.on("message", async (message) => {
    utils.processMessageCommands(message, client);
})

client.login(config.token)