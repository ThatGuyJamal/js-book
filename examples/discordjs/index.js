const Discord = require("discord.js");
const utils = require("./utils");
const config = require("./config.json");

class BotClient extends Discord.Client {
  constructor(options) {
    super(options);
    /** A collection of commands in this bot */
    this.commands = new Discord.Collection();
  }
}

const client = new BotClient({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", function () {
  console.log("Bot is ready!");
  utils.loadCommands(client);
});

client.on(
  "message",
  /**
   *
   * @param {Message} message
   */
  function (message) {
    utils.processMessageCommands(message, client);
  }
);

client.login(config.token);
