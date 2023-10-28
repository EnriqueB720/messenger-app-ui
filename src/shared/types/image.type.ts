import { CSSProperties } from "react";

//export type ButtonVariant = 'ghost' | 'outline' | 'solid' | 'subtle' | 'unstyled' | 'link'

export interface ImageProps {
    src?: string;
    w?: string;
    h?: string;
    boxSize?: string;
    borderRadius?:  string;
    alt?: string;
    style?: CSSProperties;
}