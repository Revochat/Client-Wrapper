import Revochat, {IUserMe} from "./src"

const client = new Revochat.Client();

client.login("274EDA4361415F6D80A422C16EAE329B1673185250396");

client.on('login', (user: IUserMe) => console.log(user));