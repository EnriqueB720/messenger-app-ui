import { CSSProperties } from "react";
import { ImageProps as ImageProperties } from "@chakra-ui/react";

export interface ImageProps extends ImageProperties {
    src?: string;
    w?: string;
    h?: string;
    boxSize?: string;
    borderRadius?:  string;
    alt?: string;
    style?: CSSProperties;
}