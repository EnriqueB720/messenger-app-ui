import { As, ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { JustifyContent } from ".";

export type TextOverflow = 'ellipsis' | 'hidden'
export type OverflowWrap = 'break-word'
export type WhiteSpace = 'pre-line'

export interface TextProps{
    fontSize?: string;
    noOfLines?: number;
    color?: string;
    as?: As;
    children?: ReactNode;
    textAlign?: ResponsiveValue<CanvasTextAlign>;
    overflow?: ResponsiveValue<TextOverflow>
    textOverflow?: ResponsiveValue<TextOverflow>;
    alignSelf?: ResponsiveValue<JustifyContent>;
    marginTop?: string;
    overflowWrap?: ResponsiveValue<OverflowWrap>;
    whiteSpace?: ResponsiveValue<WhiteSpace>;
}