import { CSSProperties } from "react";

export type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled'

export interface InputProps {
    width?: string;
    height?: string;
    placeholder?: string;
    size?:  string;
    variant?: InputVariant;
    value?: string;
    style?: CSSProperties;
}