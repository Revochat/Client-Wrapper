import Revochat, {IUserMe} from "./src"

const client = new Revochat.Client();

const token: string = "274EDA4361415F6D80A422C16EAE329B1673185250396";

client.login(token)

client.on("ready", user => {
    console.log("Ready " + Object.keys(user).forEach(key => console.log(key + ": " + user[key])))
})
