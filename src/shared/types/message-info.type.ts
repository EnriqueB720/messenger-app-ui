import { Message, User, UserMessageStatus } from "@model";

export interface MessageInfoProps{
    message: Message;
    user: User;
    messageStatuses?: UserMessageStatus[];
    headerHeight?: number;
}