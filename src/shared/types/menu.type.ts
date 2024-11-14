import { MenuProps as MenuProperties } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface MenuProps extends Omit<MenuProperties, "children"> {
    children?: ReactNode
}