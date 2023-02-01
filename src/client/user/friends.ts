import { Socket } from "socket.io-client";

export class UserFriends {
    public socket: Socket;

    constructor(Socket: Socket){
        this.socket = Socket;
    }

    public add(userID: number): void {
        this.socket.emit('friendAdd', userID)
    }

    public remove(userID: number): void {
        this.socket.emit('friendRemove', userID)
    }
}