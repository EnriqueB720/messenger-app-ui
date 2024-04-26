import { Chat, User } from "@model";

export interface ChatListProps{
    data: Chat[]
    user: User;
    maxH: number;
}