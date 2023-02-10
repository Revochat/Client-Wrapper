export interface IUser {
    avatar: string;
    user_id: number;
    discriminator: string;

    wallet_token?: number | null;
    username: string;
    profile_picture?: string;

    
    created_at?: string;
}

export interface IUserMe extends IUser {
    token: string;
    
    servers?: number[];
    channels?: number[];
    friends?: number[];
    friends_requests_received?: number[];
    friends_requests_sent?: number[];
    blocked?: number[];

    last_connection?: string;
    updated_at?: string;
}