import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginschema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required")
    .matches(/\./, "Email must contain a dot (.)"),

  password: yup
    .string()

    .matches(passwordRules, { message: "Enter correct password" })
    .required("Required"),
});
