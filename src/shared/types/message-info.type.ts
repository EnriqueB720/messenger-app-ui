import { Message, UserMessageStatus } from "@model";

export interface MessageInfoProps{
    message?: Message;
    messageStatuses?: UserMessageStatus[];
    headerHeight?: number;
}