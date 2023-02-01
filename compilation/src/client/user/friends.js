"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFriends = void 0;
class UserFriends {
    constructor(Socket) {
        this.socket = Socket;
    }
    add(userID) {
        this.socket.emit('friendAdd', userID);
    }
    remove(userID) {
        this.socket.emit('friendRemove', userID);
    }
}
exports.UserFriends = UserFriends;
