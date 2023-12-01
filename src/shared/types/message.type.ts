

export interface MessageProps{
    messageContent?: string | null | undefined;
    messageTime: Date;
    isUserMessage: boolean;
    username?: string;
}