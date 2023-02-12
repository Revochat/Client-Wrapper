import { Socket } from "socket.io-client";

export class UserPings {
    public socket: Socket;

    constructor(Socket: Socket){
        this.socket = Socket;
    }

    public user(userID: number): void {
        this.socket.emit('pingUser', userID)
    }
}