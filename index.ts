import Revochat, {IUserMe} from "./src"
import axios from "axios"

const token: string = "9495D46432A654ED8185867A09BFB5341673519436689";

const Socket = require('socket.io-client')("http://localhost:3000");

Socket.emit("login", token);

Socket.on("login", (user: any) => {
    console.log(user)
})
setInterval(() => {
    Socket.emit("messageCreate", 1674170678674, "hello")
}, 2500)

Socket.on("messageCreate", (message: any) => {
    console.log(message)
})