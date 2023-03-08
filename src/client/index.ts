import { IUserMe } from "../model/users.model"
import EventEmitter from "events";
import { UserClass } from "./user/interface/User";
import { Message } from "./message";
import { UserMessage } from "./user/messages";
import Config from "../config";
import { UserFriends } from "./user/friends";
import { UserPings } from "./user/ping";
import { UserRTC } from "./rtc";
import { UserChannels } from "./user/channels";
import { EVENTS } from "./user/utils/EVENTS";


export class Client extends EventEmitter { 
    public user!: UserClass;
    public Socket = require('socket.io-client')(Config.URI, {transports: ['websocket']});
    static Socket: any;
    public message = new UserMessage(this.Socket);
    public friend = new UserFriends(this.Socket);
    public ping = new UserPings(this.Socket);
    public channels: any = []
    public call = new UserRTC(this.Socket);
    constructor() {
        super();
        this.init();
    }

    private async init(){
        this.Socket.on('messageCreate', (message: any) => {if(message.data) this.emit('messageCreate', new Message(message.data, this.Socket))});

        for(let event of EVENTS){
            this.Socket.on(event, (data: any) => this.emit(event, data));
        }

        this.Socket.on('login', (user: IUserMe) => {
            user !== null ? this.emit('ready', user) : new Error('Bad token');
            if(user === null) throw new Error('Bad token');
            this.Socket.emit('channelsGet');
            
            this.Socket.on('channelsGet', (channels: any) => this.channels = channels);
            this.user = user;
        });
    }

    public login(token: string) {
        this.Socket.emit('login', token);
    }
}