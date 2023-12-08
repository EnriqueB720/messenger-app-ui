import { Chat, Message, User } from "@model";

export interface MessagesHistoryProps {
    messages: Message[];
    chat: Chat;
    user: User;
}