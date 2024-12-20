import { ReactNode } from "react";
import * as yup from "yup";
import { FieldProps } from "@types";
import { FormikProps } from "formik";


export interface FormProps<T> {
  fields: FieldProps[];
  submitButtonText?: string;
  validationSchema: yup.AnySchema;
  formValues: T;
  isLoading: boolean;
  onSubmit: (values: T) => void;
  groupings?: number[]
}