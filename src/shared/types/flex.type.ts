import { ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export type JustifyContent = 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end'

export interface FlexProps{
    alignItems?: ResponsiveValue<AlignSetting>;
    justifyContent?: ResponsiveValue<JustifyContent>;
    bg?: string;
    color?: string;
    w?: string;
    h?: string;
    children?: ReactNode;
}