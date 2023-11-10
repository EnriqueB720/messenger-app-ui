import { CSSProperties, ReactNode } from "react";


export interface CardProps{
    title: string,
    subtitle: ReactNode;
    avatarImage?: string;
    messageDate?: string;
    icons?: ReactNode;
    bg?: string;
    style?: CSSProperties;
}