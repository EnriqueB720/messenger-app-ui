import { CSSProperties } from "react";
import { IconName } from "@types";

export type IconButtonVariant = 'outline' | 'solid' | 'ghost' | 'link'

export interface IconButtonProps{
    isRound?: boolean;
    colorScheme?: string;
    ariaLabel?: string;
    fontSize?: string;
    icon: IconName;
    size?:  string;
    variant?: IconButtonVariant;
    style?: CSSProperties;
    color?: string;
    onClick?: () => void;
}