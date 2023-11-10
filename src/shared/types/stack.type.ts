import { ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export type StackDirection = 'row' | 'column'
export type Display = 'none' | 'block' | 'flex' | 'inline' | 'inline-block'

export interface StackProps {
    spacing?: number;
    align?: string;
    divider?: boolean;
    direction?: StackDirection;
    children?: ReactNode;
    display?: ResponsiveValue<Display>
}