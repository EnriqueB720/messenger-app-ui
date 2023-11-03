import { CSSProperties } from "react";
import { IconProps } from "@types";

export type IconButtonVariant = 'outline' | 'solid'

export interface IconButtonProps {
    isRound?: boolean;
    colorScheme?: string;
    ariaLabel?: string;
    fontSize?: string;
    icon?: IconProps;
    size?:  string;
    variant?: IconButtonVariant;
    style?: CSSProperties;
}