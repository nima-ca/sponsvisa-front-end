import {
  EMAIL_IS_NOT_VALID_MSG,
  EMAIL_REQUIRED_MSG,
  PASSWORD_COMPLEXITY_MSG,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MAX_LENGTH_MSG,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MSG,
  PASSWORD_REQUIRED_MSG,
} from "@src/utils/constants";
import { PASSWORD_REGEX } from "@src/utils/regex";
import * as Yup from "yup";

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
