import { As, UseMenuButtonProps } from "@chakra-ui/react";
import { ButtonVariant } from "./button.type";


export interface MenuButtonProps extends UseMenuButtonProps{
    variant?: ButtonVariant;
    as?: As;
}