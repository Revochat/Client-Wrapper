"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    constructor(data, Socket) {
        this.message_id = data.message_id;
        this.message = data.message;
        this.channel_id = data.channel_id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this._id = data._id;
        this.__v = data.__v;
        this.Socket = Socket;
        ;
        this.user_id = data.user_id;
    }
    get authorID() {
        return this.user_id;
    }
    get content() {
        return this.message;
    }
    get id() {
        return this.message_id;
    }
    get channelID() {
        return this.channel_id;
    }
    get createdAt() {
        return this.created_at;
    }
    get updatedAt() {
        return this.updated_at;
    }
    reply(message) {
        return this.Socket.emit("messageCreate", this.channel_id, message);
    }
}
exports.Message = Message;
