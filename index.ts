export * from "./src"

const { Client } = require("./src")

const client = new Client();

const token = "9495D46432A654ED8185867A09BFB5341673519436689";


client.login(token);

client.on('ready', (user: any) => {
    console.log(`Logged in as ${user.username} ID: (${user.user_id})`)
    console.log(user)
})

client.on('pingUser', (user: any) => {
    console.log(user)
    client.call.start(1673519436895)
})

client.on('messageCreate', (message: any) => {
    if(client.user.user_id == message.authorID) return;
    message.reply("Hello world")
    console.log(message.content)
})

client.on('iceCandidate', (candidate: any) => {
    console.log(candidate)
})
  
client.on('track', (track: any) => {
    console.log(track)
})

client.on('negotiationNeeded', (negotiation: any) => {
    console.log(negotiation)
})