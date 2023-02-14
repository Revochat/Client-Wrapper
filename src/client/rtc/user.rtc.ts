import { Socket } from "socket.io-client";

export class UserRTC {
    public socket: Socket;

    constructor(Socket: Socket){
        this.socket = Socket;
    }

    public start(userID: number): void {
        this.socket.emit('callUser', userID)
    }

    public end(userID: number): void {
        this.socket.emit('callEnd', userID)
    }
}
