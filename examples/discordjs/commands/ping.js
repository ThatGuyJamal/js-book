const { Message } = require("discord.js");

module.exports = {
	name: "ping",
	description: "Checks the ping!",
	/**
	 * A Discord.js message object.
	 * @param {Message} message
	 */
	async execute(message, args) {
		await message.channel.send(
			`Pong - Round trip took \`${Math.round(message.client.ws.ping)}ms\``
		);
	},
};
