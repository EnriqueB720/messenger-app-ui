import { ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Float, Overflow } from ".";

export type StackDirection = 'row' | 'column'

export interface StackProps {
    spacing?: number;
    align?: string;
    divider?: boolean;
    direction?: StackDirection;
    children?: ReactNode
    width?: string;
    textAlign?: ResponsiveValue<CanvasTextAlign>;
    float?: ResponsiveValue<Float>;
    bg?: string;
    overflowY?: ResponsiveValue<Overflow>;
    maxH?: number;
}