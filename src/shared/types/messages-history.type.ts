import { Chat, Message, User } from "@model";

export interface MessagesHistoryProps {
    messagesData: Message[];
    chatData: Chat;
    userData: User;
}