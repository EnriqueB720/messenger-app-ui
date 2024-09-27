import { CSSProperties } from "react";
import { InputProps as InputProperties} from '@chakra-ui/react';

export type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled'

export interface InputProps extends InputProperties {
    width?: string;
    height?: string;
    placeholder?: string;
    size?:  string;
    variant?: InputVariant;
    value?: string;
    style?: CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}