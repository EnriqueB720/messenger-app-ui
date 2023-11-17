import { AvatarItemProps } from "@types";
import { ReactNode } from "react";


export interface AvatarIconItemProps extends Omit<AvatarItemProps, 'children'> { 
    icons?: ReactNode
}