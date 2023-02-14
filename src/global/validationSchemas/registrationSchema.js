import * as yup from "yup";
export const registrationSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  password: yup
    .string()
    .required()
    .matches(/(?=.*[a-zA-Z])/, "At least one letter")
    .matches(/(?=.*[0-9])/, "At least one number")
    .matches(/(?=.*[!@#$%^&*])/, "At least one special character")
    .min(8, "A minimum of 8 characters"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password doesn't match")
    .required(),
  email: yup.string().required().email("invalid email address"),
});
