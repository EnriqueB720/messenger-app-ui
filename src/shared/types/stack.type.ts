import { ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Float, Overflow } from ".";
import { StackProps as StackPropsProperties } from "@chakra-ui/react"

export type StackDirection = 'row' | 'column'

export interface StackProps extends Omit<StackPropsProperties, 'divider'>{
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