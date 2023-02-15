import { IUserMe } from "../../../model";

export declare class UserClass implements IUserMe {
    public token: string;
    public servers?: number[] | undefined;
    public channels?: Array<object> | undefined;
    public friends?: Array<object> | undefined;
    public friends_requests_received?: Array<object> | undefined;
    public friends_requests_sent?: Array<object> | undefined;
    public blocked?: number[] | undefined;
    public last_connection?: string | undefined;
    public updated_at?: string | undefined;
    public wallet_token?: number | null | undefined;
    public profile_picture?: string | undefined;
    public created_at?: string | undefined;
    public avatar: string;
    public user_id: number;
    public username: string;
    public discriminator: string;
    public constructor(user: IUserMe);
}