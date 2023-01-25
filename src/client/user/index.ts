import { IUserMe } from "../../model";

export class User {
    public id: number;
    public username: string;
    public avatar: string;
    public constructor(user: IUserMe){
        this.id = user.user_id;
        this.username = user.username;
        this.avatar = user.avatar;
        
    }
}