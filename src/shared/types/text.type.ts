import { As } from "@chakra-ui/react";
import { ReactNode } from "react";


export interface TextProps{
    fontSize?: string;
    noOfLines?: number;
    color?: string;
    as?: As;
    children?: ReactNode;
}