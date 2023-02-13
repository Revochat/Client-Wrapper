"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPings = void 0;
class UserPings {
    constructor(Socket) {
        this.socket = Socket;
    }
    user(userID, message) {
        this.socket.emit('pingUser', userID, message);
    }
}
exports.UserPings = UserPings;
