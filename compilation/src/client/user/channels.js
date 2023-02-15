"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChannels = void 0;
class UserChannels {
    constructor(Socket) {
        this.socket = Socket;
        this.socket.emit('channelsGet');
    }
    createDM(user_id) {
        this.socket.emit('createDM', user_id);
    }
    get channel() {
        return new Promise((resolve, reject) => {
            this.socket.on('channel', (channel) => {
                console.log("In: " + channel);
                resolve(channel);
            });
        });
    }
}
exports.UserChannels = UserChannels;
