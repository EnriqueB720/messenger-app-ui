import { CSSProperties } from "react";

export type ButtonVariant = 'ghost' | 'outline' | 'solid' | 'subtle' | 'unstyled' | 'link'

export interface ButtonProps{
  //text: DictionaryLeaves;
  variant?: ButtonVariant;
  block?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  style?: CSSProperties;
  loading?: boolean;
  color?: string;
  text?: string;
  bg?: string;
  w?: string;
  h?: string;
  children?: React.ReactNode;
  onClick?: () => unknown;
}