"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRTC = void 0;
class UserRTC {
    constructor(Socket) {
        this.socket = Socket;
    }
    start(userID) {
        this.socket.emit('callUser', userID);
    }
    end(userID) {
        this.socket.emit('callEnd', userID);
    }
}
exports.UserRTC = UserRTC;
