import { UseMenuProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface MenuProps extends UseMenuProps {
    children?: ReactNode
}