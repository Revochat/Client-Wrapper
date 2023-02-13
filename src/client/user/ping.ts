import { Socket } from "socket.io-client";
import { IMessage } from "./interface/Message";

export class UserPings {
    public socket: Socket;

    constructor(Socket: Socket){
        this.socket = Socket;
    }

    public user(userID: number, message: IMessage): void {
        this.socket.emit('pingUser', userID, message)
    }
}