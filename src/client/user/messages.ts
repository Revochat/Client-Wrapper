import { Socket } from "socket.io-client";

export class UserMessage {
    public socket: Socket;

    constructor(Socket: Socket){
        this.socket = Socket;
    }

    send(channelID: number, message: string): void {
        this.socket.emit('messageCreate', channelID, message)
    }

    delete(channelID: number, messageID: number): void {
        this.socket.emit('messageDelete', channelID, messageID)
    }
}