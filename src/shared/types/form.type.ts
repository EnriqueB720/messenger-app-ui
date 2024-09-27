import { ReactNode } from "react";
import * as yup from "yup";
import { FieldProps } from "@types";
import { FormikProps } from "formik";


export interface FormProps<T> {
  fields: FieldProps[];
  validationSchema: yup.AnySchema;
  formValues: T;
  onSubmit: (values: T) => void;
}