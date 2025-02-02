const Discord = require("discord.js");
const { GCommands } = require("./src/index");
const client = new Discord.Client();

const axios = require("axios")

client.on("ready", () => {
    const GCommandsClient = new GCommands(client, {
        cmdDir: "commands",
        eventDir: "events", //when you want event handler
        language: "czech", //english, spanish, portuguese, russian, german, czech, slovak,
        unkownCommandMessage: true, //send unkown command message true/false
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: '.' 
        },
        defaultCooldown: 3,
        database: {
            type: "mongodb", //sqlite/mongodb
            url: "mongodb+srv://" //mongourl
        }
    })
    GCommandsClient.on('debug', (debug) => {console.log(debug)} );

    client.dispatcher.addInhibitor((cmd, slash, message) => {
        if(message && message.author.id == "126454") {
            message.channel.send("blacklisted")
            return false;
        }

        if(slash && slash.member.user.id == "126454")
            client.api.interactions(slash.id, slash.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        flags: 64,
                        content: "blacklisted"
                    }
                }
            });
    })
})

client.login("token")