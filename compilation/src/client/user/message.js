"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMessage = void 0;
class UserMessage {
    constructor(Socket) {
        this.socket = Socket;
    }
    send(channelID, message) {
        this.socket.emit('messageCreate', channelID, message);
    }
    delete() { }
}
exports.UserMessage = UserMessage;
