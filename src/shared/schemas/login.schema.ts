import * as yup from "yup";

const passwordRules =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')//matches(passwordRules, 'Password must have characters lowercase and uppercase and numbers') 
})