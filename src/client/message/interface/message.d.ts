export declare class MessageClass {
    public message_id: number;
    public message: string;
    public user_id: number;
    public channel_id: number;
    public created_at: string;
    public updated_at: string;
    public _id: string;
    public __v: number;
    constructor(message: MessageClass);

    public get content(): string;
}