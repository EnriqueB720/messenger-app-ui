import { CSSProperties, ReactNode } from "react";


export interface AvatarItemProps { 
    title?: string | null | undefined,
    titleWidth?: string,
    subtitle?: string | null | undefined;
    avatarImage?: string;
    children?: ReactNode;
    bg?: string;
    style?: CSSProperties;
    onClick?: () => void 
}