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
const client2 = new Client();
const token = "EC0EF2A3B9265108A525BA3F0C324AB41676471732903";
const token2 = "5E49DFC7C37855AA89D5E627E028D5491676471177390";
setInterval(() => {
    client2.message.send(1676472118888, "Coucou");
}, 1500);
client.login(token);
client2.login(token2);
client.on('ready', (user) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Logged in as ${user.username} ID: (${user.user_id})`);
    console.log(user);
}));
client.on('messageCreate', (message) => {
    if (message == undefined)
        return;
    if (client.user.user_id == message.authorID)
        return;
    console.log(message.content);
});
