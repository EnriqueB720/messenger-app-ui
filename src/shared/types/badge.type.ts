import { ReactNode } from "react";

export type BadgeVariant = 'outline' | 'solid' | 'subtle'

export interface BadgeProps{
    colorScheme?: string;
    variant?: BadgeVariant;
    children?: ReactNode;
    fontSize?: string;
    bg?: string;
    color?: string;
}