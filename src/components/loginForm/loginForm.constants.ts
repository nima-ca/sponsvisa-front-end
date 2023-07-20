import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "@src/utils/constants";
import { PASSWORD_REGEX } from "@src/utils/regex";
import * as Yup from "yup";

export const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required(`Enter your email address`)
    .email(`Enter a valid email address`),
  password: Yup.string()
    .required(`Enter your password`)
    .min(
      PASSWORD_MIN_LENGTH,
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
    )
    .max(
      PASSWORD_MAX_LENGTH,
      `Password must be less than ${PASSWORD_MAX_LENGTH} characters`,
    )
    .matches(
      PASSWORD_REGEX,
      `Your password must contain at least one Uppercase character or Symbol, and a number`,
    ),
});
