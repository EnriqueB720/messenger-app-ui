import { As, ResponsiveValue, BoxProps as BoxProperties } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";
import { JustifyContent } from "./flex.type";


export type Display = 'none' | 'block' | 'flex' | 'inline' | 'inline-block'
export type Float = 'none' | 'left' | 'right' | 'initial'
export type Position = 'fixed' | 'absolute' | 'relative'
export type Overflow = 'auto' | 'scroll' | 'hidden' | 'visible'
export type FlexDirection = 'column' | 'row'

export interface BoxProps extends BoxProperties {
  bg?: string;
  w?: string;
  maxW?: string;
  minW?: string;
  h?: string;
  maxH?: string | number;
  minH?: string | number;
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
  borderLeftColor?: string;
  borderRightColor?: string;
  borderWidth?: string;
  borderLeftWidth?: string;
  borderRightWidth?: string;
  borderLeft?: string;
  borderRight?: string;
  textAlign?: ResponsiveValue<CanvasTextAlign>;
  float?: ResponsiveValue<Float>;
  position?: ResponsiveValue<Position>;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  overflowY?: ResponsiveValue<Overflow>;
  overflowX?: ResponsiveValue<Overflow>;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundColor?: string;
  flexDirection?: ResponsiveValue<FlexDirection>;
  flex?: number;
  filter?: string;
  opacity?: number;
  zIndex?: string;
  justifyContent?: ResponsiveValue<JustifyContent>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}