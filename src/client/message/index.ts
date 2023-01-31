import { Socket } from "socket.io-client";
import { MessageClass } from "./interface/message";

export class Message  {
    private message_id!: number;
    private message!: string;
    private channel!: number;
    private created_at!: string;
    private updated_at!: string;
    private _id: string;
    private __v: number;
    private Socket: Socket;
    private user_id: number;
    private channel_id: number;

    constructor(data: MessageClass, Socket: Socket){
        
        this.message_id = data.message_id;
        this.message = data.message;
        this.channel_id = data.channel_id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this._id = data._id;
        this.__v = data.__v;
        this.Socket = Socket;;
        this.user_id = data.user_id;
    }


    public get authorID(): number{
        return this.user_id;
    }

    public get content(){
        return this.message;
    }

    public get id(): number{
        return this.message_id;
    }

    public get channelID(): number{
        return this.channel_id;
    }

    public get createdAt(): string{
        return this.created_at;
    }

    public get updatedAt(): string{
        return this.updated_at;
    }

    public reply(message: string){
        return this.Socket.emit("messageCreate", this.channel_id, message);
    }
}