import { Message, UserMessageStatus } from "@model";

export interface MessageInfoProps{
    message: Message;
    userId: number;
    messageStatuses?: UserMessageStatus[];
    headerHeight?: number;
}