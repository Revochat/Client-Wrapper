import Revochat, {IUserMe} from "./src"

const Client = new Revochat.Client();

const token: string = "9495D46432A654ED8185867A09BFB5341673519436689";


Client.login(token);

Client.on('ready', (user: IUserMe) => {
    console.log(user)
})