import { Message } from "@model";


export interface MessageProps{
    isUserMessage: boolean;
    username?: string;
    message?: Message;
    messageInfoToParent: (message: Message) => unknown;
}