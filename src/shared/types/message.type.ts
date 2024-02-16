import { Message } from "@model";


export interface MessageProps{
    userId: number;
    username?: string;
    message: Message;
    maxWidth?: string;
}