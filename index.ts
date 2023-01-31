import Revochat, {IUserMe} from "./src"
import { Message } from "./src/client/message";
import { MessageClass } from "./src/client/message/interface/message";

const Client = new Revochat.Client();

const token: string = "9495D46432A654ED8185867A09BFB5341673519436689";


Client.login(token);

Client.on('ready', (user: IUserMe) => {
    console.log(`Logged in as ${user.username} ID: (${user.user_id})`)
})


Client.message.send(1675013125087, "Hello world")

Client.on('messageCreate', (message: Message) => {
    if(Client.user.user_id == message.authorID) return;
    message.reply("Hello world")
})

