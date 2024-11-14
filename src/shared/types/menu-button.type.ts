import { As, MenuButtonProps as MenuButtonProperties } from "@chakra-ui/react";
import { ButtonVariant } from "./button.type";


export interface MenuButtonProps extends MenuButtonProperties{
    variant?: ButtonVariant;
    as?: As;
}