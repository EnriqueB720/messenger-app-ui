import { AvatarItemProps } from "@types";


export interface AvatarMessageItemProps extends Omit<AvatarItemProps, 'children'> { 
    value?: string | Date;
}