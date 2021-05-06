const { GCommands } = require("gcommands");
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
    new GCommands(client, {
        cmdDir: "commands",
        eventDir: "events",
        errorMessage: "Error :(", // optional
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: '.' // for normal commands
        },
        cooldown: {
            message: "Please wait {cooldown} more second(s) before reusing the \`{cmdname}\` command.",
            default: 3 // default cooldown for all commands
        },
        database: {
            type: "mongodb", //sqlite/mongodb
            url: "mongodb+srv://" //mongourl
        }
    })
    
    console.log("Ready")
})

client.login(process.env.token)