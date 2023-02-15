
import { UserClass } from "./interface/User";

export class User implements UserClass{
    public token!: string;
    public servers?: number[] | undefined;
    public channels?: Array<object> | undefined;
    public channels_obj?: Array<object> | undefined;
    public friends?: Array<object> | undefined;
    public friends_requests_received?: Array<object> | undefined;
    public friends_requests_sent?: Array<object> | undefined;
    public blocked?: number[] | undefined;
    public last_connection?: string | undefined;
    public updated_at?: string | undefined;
    public wallet_token?: number | null | undefined;
    public profile_picture?: string | undefined;
    public created_at?: string | undefined;
    public avatar!: string;
    public user_id!: number;
    public discriminator: string;
    public username!: string;

    constructor(data: UserClass){
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
        this.discriminator = data.discriminator;
    }
}

