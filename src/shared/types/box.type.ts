import { As, ResponsiveValue } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";


export type Display = 'none' | 'block' | 'flex' | 'inline' | 'inline-block'
export type Float = 'none' | 'left' | 'right' | 'initial'
export type Position = 'fixed' | 'absolute' | 'relative'

export interface BoxProps {
  bg?: string;
  w?: string;
  maxW?: string;
  h?: string;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  padding?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
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
  textAlign?: ResponsiveValue<CanvasTextAlign>;
  float?: ResponsiveValue<Float>;
  position?: ResponsiveValue<Position>;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  onClick?: () => void;
}