import { IUserMe } from "../model/users.model";
const Socket = require('socket.io-client')("localhost:3000");
import Eventsuper from "events";

export class Client extends Eventsuper { 
    private user: IUserMe | null = null;

    constructor() {
        super();
        Socket.on('disconnect', () => {
            this.user = null;
            super.emit('disconnect');
        });

        this.init();
    }

    public async init(){
        Socket.on('message', (message: any) => super.emit('message', message));
        Socket.on('friendRequest', (request: any) => super.emit('friendRequest', request));

        Socket.on('friendRequestAccepted', (request: any) => super.emit('friendRequestAccepted', request));
        Socket.on('friendRequestDeclined', (request: any) => super.emit('friendRequestDeclined', request));
        Socket.on('friendRequestRemoved', (request: any) => super.emit('friendRequestRemoved', request));

        Socket.on('addBlockedUser', (user: any) => super.emit('addBlockedUser', user));
        Socket.on('removeBlockedUser', (user: any) => super.emit('removeBlockedUser', user));

        Socket.on('addFriend', (user: any) => super.emit('addFriend', user));
        Socket.on('removeFriend', (user: any) => super.emit('removeFriend', user));

        Socket.on('serverJoin', (server: any) => super.emit('serverJoin', server));
        Socket.on('serverLeave', (server: any) => super.emit('serverLeave', server));
    }

    public login(token: string) {
        setTimeout(() => {
            Socket.emit('login', token);
            Socket.on('login', (user: IUserMe) => {
                this.user = user;
                super.emit('login', user);
            });
        }, 2000)
    }
}