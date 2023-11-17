import { CSSProperties } from "react";


export interface AvatarProps {
    size?: string;
    name?: string | null;
    src?: string;
    bg?: string;
    avatartBadge?: boolean;
    badgeColor?: string;
    style?: CSSProperties;
    onClick?: () => void;
}