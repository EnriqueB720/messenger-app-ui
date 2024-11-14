import { ChangeEvent } from "react";

type InputType = 'field' | 'phone' | 'checkbox' | 'radio' | 'select';


export interface FieldProps {
  label: string;
  name: string;
  fieldColor?:string;
  fieldType: InputType;
  inputPlaceholder?: string;
  radioButtonOptions?:string[];
  selectFieldOptions?: string[];
  inputValue?: string | undefined;
  isRequired?: boolean;
  isErrors?: boolean;
  errorMessage?: string;
  isSubmitting?: boolean;
  isPassword?: boolean;
  onChange?: (e: string | ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
}