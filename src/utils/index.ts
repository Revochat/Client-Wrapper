import Config from '../config';

export const Socket = require('socket.io-client')(Config.URI);
