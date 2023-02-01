import { IUserMe } from "../model/users.model"
import EventEmitter from "events";
import { UserClass } from "./user/interface/User";
import { Message } from "./message";
import { UserMessage } from "./user/message";
import Config from "../config";


export class Client extends EventEmitter { 
    public user!: UserClass;
    public Socket = require('socket.io-client')(Config.URI, {transports: ['websocket']});
    static Socket: any;
    public message = new UserMessage(this.Socket);
    constructor() {
        super();
        this.init();
    }

    private async init(){
        this.Socket.on('messageCreate', (message: any) => {if(message.data) this.emit('messageCreate', new Message(message.data, this.Socket))});
        this.Socket.on('friendRequest', (request: any) => this.emit('friendRequest', request));

        this.Socket.on('friendRequestAccepted', (request: any) => this.emit('friendRequestAccepted', request));
        this.Socket.on('friendRequestDeclined', (request: any) => this.emit('friendRequestDeclined', request));
        this.Socket.on('friendRequestRemoved', (request: any) => this.emit('friendRequestRemoved', request));

        this.Socket.on('addBlockedUser', (user: any) => this.emit('addBlockedUser', user));
        this.Socket.on('removeBlockedUser', (user: any) => this.emit('removeBlockedUser', user));

        this.Socket.on('addFriend', (user: any) => this.emit('addFriend', user));
        this.Socket.on('removeFriend', (user: any) => this.emit('removeFriend', user));

        this.Socket.on('serverJoin', (server: any) => this.emit('serverJoin', server));
        this.Socket.on('serverLeave', (server: any) => this.emit('serverLeave', server));
        this.Socket.on('login', (user: IUserMe) => {
            user !== null ? this.emit('ready', user) : new Error('Bad token');
            if(user === null) throw new Error('Bad token');
            this.user = user;
        });
    }




    public login(token: string) {
        this.Socket.emit('login', token);
    }
}