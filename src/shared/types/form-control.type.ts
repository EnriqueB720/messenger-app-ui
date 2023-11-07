import { As } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface FormControlProps{
    as?: As;
    children?: ReactNode;
    isInvalid?: boolean;
    isRequired?: boolean;
}