import { As, ResponsiveValue } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";import { Overflow } from "./text.type";


export type Display = 'none' | 'block' | 'flex' | 'inline' | 'inline-block'
export type Float = 'none' | 'left' | 'right' | 'initial'
export type Position = 'fixed' | 'absolute' | 'relative'
export type OverflowY = 'auto' | 'scroll' | 'hidden' | 'visible'

export interface BoxProps {
  bg?: string;
  w?: string;
  maxW?: string;
  h?: string;
  maxh?: string;
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
  overflowY?: ResponsiveValue<OverflowY>;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundColor?: string;
  onClick?: () => void;
}