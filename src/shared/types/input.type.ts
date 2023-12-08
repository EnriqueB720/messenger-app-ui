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
    type?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}