export * from "./src"



const { Client } = require("./src")

const client = new Client();
const client2 = new Client();



const token = "EC0EF2A3B9265108A525BA3F0C324AB41676471732903";
const token2 = "5E49DFC7C37855AA89D5E627E028D5491676471177390"

setInterval(() => {
    client2.message.send(1676472118888, "Coucou")
},1500)

client.login(token);

client2.login(token2);
client.on('ready', async (user: any) => {
    console.log(`Logged in as ${user.username} ID: (${user.user_id})`)
    console.log(user)
})


client.on('messageCreate', (message: any) => {
    if(message == undefined) return;
    if(client.user.user_id == message.authorID) return;
    console.log(message.content)
})
