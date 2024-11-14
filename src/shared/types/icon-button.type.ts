import { CSSProperties, JSXElementConstructor } from "react";
import { IconName } from "@types";
import { IconButtonProps as IconButtonProperties } from '@chakra-ui/react'

export type IconButtonVariant = 'outline' | 'solid' | 'ghost' | 'link'

export interface IconButtonProps extends Omit<IconButtonProperties, 'icon'>{
    isRound?: boolean;
    colorScheme?: string;
    ariaLabel?: string;
    fontSize?: string;
    icon: IconName;
    size?:  string;
    variant?: IconButtonVariant;
    style?: CSSProperties;
    color?: string;
    ref?: React.ForwardedRef<unknown>;
    onClick?: () => void;
}