export const EVENTS: Array<string> = [
    'pingUser',
    'ready',
    'messageCreate',
    'messageDelete',
    'friendRequestAccepted',
    'FriendRequestsReceived',
    'friendRequestRemoved',
    'friendRequestDeclined',
    'friendRequest',
    'addBlockedUser',
    'removeBlockedUser',
    'addFriend',
    'removeFriend',
    'serverJoin',
    'serverLeave',
    'channelsGet',
]

/*
        
        this.Socket.on('friendRequest', (request: any) => this.emit('friendRequest', request));

        this.Socket.on('friendRequestAccepted', (request: any) => this.emit('friendRequestAccepted', request));
        this.Socket.on('friendRequestDeclined', (request: any) => this.emit('friendRequestDeclined', request));
        this.Socket.on('friendRequestRemoved', (request: any) => this.emit('friendRequestRemoved', request));

        this.Socket.on('addBlockedUser', (user: any) => this.emit('addBlockedUser', user));
        this.Socket.on('removeBlockedUser', (user: any) => this.emit('removeBlockedUser', user));

        this.Socket.on('addFriend', (user: any) => this.emit('addFriend', user));
        this.Socket.on('removeFriend', (user: any) => this.emit('removeFriend', user));
        this.Socket.on('pingUser', (user: any) => this.emit('pingUser', user));
        this.Socket

        this.Socket.on('serverJoin', (server: any) => this.emit('serverJoin', server));
        this.Socket.on('serverLeave', (server: any) => this.emit('serverLeave', server))
        this.Socket.on('channelsGet', (channels: any) => this.emit('channelsGet', channels))
*/