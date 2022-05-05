module.exports = {
    name: 'ping',
    description: "Checks bot ping",
    execute(message, args) {
        message.channel.send({
            content: `Pong! ${Math.round(message.client.ws.ping)}ms`,
        })
    }
}