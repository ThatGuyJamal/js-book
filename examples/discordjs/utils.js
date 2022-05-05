const { Message } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const prefix = config.prefix;

module.exports = {
  /**
   * A helpful function to check for things before running our message command.
   * @param {Message} message The message object.
   * @param {BotClient} client The client object.
   * @returns {void} Nothing.
   */
  processMessageCommands(message, client) {
    // If all of the following are false, then the command was not ran!
    if (
      !message.content.startsWith(prefix) ||
      message.author.bot ||
      message.channel.type === "DM"
    )
      return;

    const args = message.content.slice(prefix.length).trim().split(/ +/); // get the arguments from the message

    const command = args.shift().toLowerCase(); // get the command from the message

    if (!client.commands.has(command)) return; // if the command is not found, return

    try {
      client.commands.get(command).execute(message, args); // run the command and pass the message and arguments
    } catch (error) {
      console.error(error);
      message.reply("there was an error trying to execute that command!");
    }

    return;
  },
  /**
   *Loads all of the commands from the commands folder.
   * @param {BotClient} client The client object.
   */
  loadCommands(client) {
    const commandFiles = fs
      .readdirSync("./commands")
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      // set a new item in the Collection
      // with the key as the command name and the value as the exported module
      client.commands.set(command.name, command);
      console.log(
        `Loaded command ${command.name} into the commands collection.`
      );
    }
  },
};
