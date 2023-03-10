"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const events_1 = __importDefault(require("events"));
const message_1 = require("./message");
const messages_1 = require("./user/messages");
const config_1 = __importDefault(require("../config"));
const friends_1 = require("./user/friends");
const ping_1 = require("./user/ping");
const rtc_1 = require("./rtc");
const EVENTS_1 = require("./user/utils/EVENTS");
class Client extends events_1.default {
    constructor() {
        super();
        this.Socket = require('socket.io-client')(config_1.default.URI);
        this.message = new messages_1.UserMessage(this.Socket);
        this.friend = new friends_1.UserFriends(this.Socket);
        this.ping = new ping_1.UserPings(this.Socket);
        this.channels = [];
        this.call = new rtc_1.UserRTC(this.Socket);
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.Socket.on('messageCreate', (message) => { if (message.data)
                this.emit('messageCreate', new message_1.Message(message.data, this.Socket)); });
            for (let event of EVENTS_1.EVENTS) {
                this.Socket.on(event, (data) => this.emit(event, data));
            }
            this.Socket.on('login', (user) => {
                user !== null ? this.emit('ready', user) : new Error('Bad token');
                if (user === null)
                    throw new Error('Bad token');
                this.Socket.emit('channelsGet');
                this.Socket.on('channelsGet', (channels) => this.channels = channels);
                this.user = user;
            });
        });
    }
    login(token) {
        this.Socket.emit('login', token);
    }
}
exports.Client = Client;
