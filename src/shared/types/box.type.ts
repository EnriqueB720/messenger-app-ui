import { As, ResponsiveValue } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";


export type Display = 'none' | 'block' | 'flex' | 'inline' | 'inline-block'

export interface BoxProps {
  bg?: string;
  w?: string;
  h?: string;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  color?: string;
  as?: As;
  borderRadius?: string;
  style?: CSSProperties;
  text?: string;
  display?: ResponsiveValue<Display>
  children?: ReactNode;
  alignItems?: ResponsiveValue<AlignSetting>;
  border?: string;
  borderColor?: string;

}