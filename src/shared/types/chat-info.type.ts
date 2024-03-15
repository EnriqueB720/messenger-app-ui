import { Chat, User } from "@model";

export interface ChatInfoProps{
    chat?: Chat;
    contactId?: number;
    user?: User;
    headerHeight?: number;
}