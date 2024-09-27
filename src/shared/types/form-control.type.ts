import { As } from "@chakra-ui/react";
import { FormControlProps as FormControlProperties } from "@chakra-ui/react"
import { ReactNode } from "react";

export interface FormControlProps extends FormControlProperties{
    as?: As;
    children?: ReactNode;
    isInvalid?: boolean;
    isRequired?: boolean;
}