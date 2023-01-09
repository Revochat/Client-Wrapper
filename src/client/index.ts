import { IUserMe } from "../model/users.model"
import EventEmitter from "events";
import { Socket } from "socket.io-client";

export class Client extends EventEmitter { 
    private user: IUserMe | null = null;
    public Socket = require('socket.io-client')("http://localhost:3000");
    constructor() {
        super();
        this.init();
    }

    public async init(){
        this.Socket.on('message', (message: any) => this.emit('message', message));
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
        this.Socket.on('ready', (user: IUserMe) => {
            user == null ? new Error('Bad token') : this.emit('ready', user);
        });
    }

    public login(token: string) {
        this.Socket.emit('login', token);
    }
}