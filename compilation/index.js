"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./src"), exports);
const { Client } = require("./src");
const client = new Client();
const token = "9495D46432A654ED8185867A09BFB5341673519436689";
client.login(token);
client.on('ready', (user) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Logged in as ${user.username} ID: (${user.user_id})`);
    console.log(client.user);
    console.log(user);
}));
client.on('pingUser', (user) => {
    console.log(user);
});
client.on('messageCreate', (message) => {
    if (client.user.user_id == message.authorID)
        return;
    message.reply("Hello world");
    console.log(message.content);
});
client.on('iceCandidate', (candidate) => {
    console.log(candidate);
});
client.on('track', (track) => {
    console.log(track);
});
client.on("channelsGet", (channels) => {
    console.log(channels);
});
client.on('negotiationNeeded', (negotiation) => {
    console.log(negotiation);
});
