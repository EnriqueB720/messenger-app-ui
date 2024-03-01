import { ResponsiveValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FlexDirection, Position } from "./box.type";

export type JustifyContent = 'space-between' | 'center' | 'space-around' | 'flex-start' | 'flex-end'

export interface FlexProps{
    alignItems?: ResponsiveValue<AlignSetting>;
    justifyContent?: ResponsiveValue<JustifyContent>;
    direction?: ResponsiveValue<FlexDirection>;
    bg?: string;
    color?: string;
    w?: string;
    h?: string;
    mb?: string;
    mr?: string;
    mt?: string;
    ml?: string;
    children?: ReactNode;
    position?: ResponsiveValue<Position>;
}