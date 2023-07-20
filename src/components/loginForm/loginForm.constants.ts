import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "@src/utils/constants";
import { PASSWORD_REGEX } from "@src/utils/regex";
import * as Yup from "yup";

export const EMAIL_REQUIRED_MSG = `Enter your email address`;
export const EMAIL_IS_NOT_VALID_MSG = `Enter a valid email address`;
export const PASSWORD_REQUIRED_MSG = `Enter your password`;
export const PASSWORD_MIN_LENGTH_MSG = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
export const PASSWORD_MAX_LENGTH_MSG = `Password must be less than ${PASSWORD_MAX_LENGTH} characters`;
export const PASSWORD_COMPLEXITY_MSG = `Your password must contain at least one Uppercase character or Symbol, and a number`;

export const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required(EMAIL_REQUIRED_MSG)
    .email(EMAIL_IS_NOT_VALID_MSG),
  password: Yup.string()
    .required(PASSWORD_REQUIRED_MSG)
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_MSG)
    .max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_MSG)
    .matches(PASSWORD_REGEX, PASSWORD_COMPLEXITY_MSG),
});
