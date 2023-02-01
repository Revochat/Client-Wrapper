"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.token = data.token;
        this.servers = data.servers;
        this.channels = data.channels;
        this.friends = data.friends;
        this.friends_requests_received = data.friends_requests_received;
        this.friends_requests_sent = data.friends_requests_sent;
        this.blocked = data.blocked;
        this.last_connection = data.last_connection;
        this.updated_at = data.updated_at;
        this.wallet_token = data.wallet_token;
        this.profile_picture = data.profile_picture;
        this.created_at = data.created_at;
        this.avatar = data.avatar;
        this.user_id = data.user_id;
        this.username = data.username;
    }
}
exports.User = User;
