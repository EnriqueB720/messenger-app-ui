import { CSSProperties, ReactNode } from "react";


export interface CardProps{
    title?: string | null | undefined,
    subtitle?: string | null | undefined;
    avatarImage?: string;
    messageDate?: string;
    icons?: ReactNode;
    bg?: string;
    style?: CSSProperties;
}