import { IconProps as IconProperties } from "@chakra-ui/icons";

export type IconName = 'send' | 'search' | 'dots' | 'filter' | 'emoji' | 'check' | 'doubleCheck' | 'downArrow' | 'close' | 'addUser' | 'exit' | 'delete' | 'block' | 'visibilityOn' | 'visibilityOff'


export interface IconProps extends IconProperties {
   name: IconName;
   onClick?: () => unknown;
}