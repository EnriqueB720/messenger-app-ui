import { As } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";

export interface BoxProps {
  bg?: string;
  w?: string;
  h?: string;
  color?: string;
  as?: As;
  borderRadius?: string;
  style?: CSSProperties;
  text?: string;
  children?: ReactNode;
}