import { As, ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export type Overflow = 'ellipsis' | 'hidden'

export interface TextProps{
    fontSize?: string;
    noOfLines?: number;
    color?: string;
    as?: As;
    children?: ReactNode;
    textAlign?: ResponsiveValue<CanvasTextAlign>;
    overflow?: ResponsiveValue<Overflow>
    textOverflow?: ResponsiveValue<Overflow>;
}