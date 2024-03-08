import { CSSProperties } from "react";

export type AvatarSize = 'sm' | 'md' | 'xl' | '2xl' | 'lg'

export interface AvatarProps {
    size?: AvatarSize;
    name?: string | null;
    src?: string;
    bg?: string;
    avatartBadge?: boolean;
    badgeColor?: string;
    style?: CSSProperties;
    onClick?: () => void;
}