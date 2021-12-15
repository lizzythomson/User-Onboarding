import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is a required field")
    .min(5, "Username has to be 5 characters long"),
  email: yup.string().trim().required("Email is a required field"),
  password: yup
    .string()
    .trim()
    .required("Password is a required field")
    .min(6, "Password must have at least 6 characters"),
  tos: yup
    .boolean()
    .required("Terms of Service must be checked to create a new user"),
});

export default formSchema;
