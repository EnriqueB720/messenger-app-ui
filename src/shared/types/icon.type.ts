export type IconName = 'send' | 'search' | 'dots' | 'filter' | 'emoji' | 'check' | 'doubleCheck' | 'downArrow' | 'close' | 'addUser' | 'exit' | 'delete' | 'block' | 'visibilityOn' | 'visibilityOff'

export interface IconProps {
   name: IconName;
   onClick?: () => unknown;
}