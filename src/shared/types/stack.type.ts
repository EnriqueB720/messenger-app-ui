import { ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Float } from ".";

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
}