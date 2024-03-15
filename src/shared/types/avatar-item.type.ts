import { CSSProperties, ReactNode } from "react";
import { AvatarSize } from "./avatar.type";


export interface AvatarItemProps { 
    title?: string | null | undefined,
    titleWidth?: string,
    subtitle?: string | null | undefined;
    avatarImage?: string;
    children?: ReactNode;
    bg?: string;
    style?: CSSProperties;
    avatarSize?: AvatarSize;
    subtitleWidth?: string;
    onClick?: () => void 
}