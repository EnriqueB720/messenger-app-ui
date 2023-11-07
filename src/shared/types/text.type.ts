import { As, ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";


export interface TextProps{
    fontSize?: string;
    noOfLines?: number;
    color?: string;
    as?: As;
    children?: ReactNode;
    textAlign?: ResponsiveValue<CanvasTextAlign>;
}