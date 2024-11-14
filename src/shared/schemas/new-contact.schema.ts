import * as yup from "yup";

export const addContactSchema = yup.object().shape({
  phoneNumber: yup.number().required('Phone number is required').positive(), 
  firstName: yup.string().required('First name is required'), 
  lastName: yup.string().required('Last name is required')  
});