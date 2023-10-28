import { CSSProperties } from "react";


export interface AvatarProps {
    size?: string;
    name?: string;
    src?: string;
    bg?: string;
    avatartBadge?: boolean;
    badgeColor?: string;
    style?: CSSProperties;
}