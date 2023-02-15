import { Socket } from "socket.io-client";

export class UserChannels {
    public socket: Socket;

    constructor(Socket: Socket){
        this.socket = Socket;
        this.socket.emit('channelsGet')
    }

    public createDM(user_id: number) {
        this.socket.emit('createDM', user_id)
    }

    public get channel(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.socket.on('channel', (channel: any) => {
                console.log("In: " + channel)
                resolve(channel)
            })
        })
    }
    
}