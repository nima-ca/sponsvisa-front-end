import {
  CONFIRM_PASSWORD_MATCH_MSG,
  CONFIRM_PASSWORD_REQUIRED_MSG,
  EMAIL_IS_NOT_VALID_MSG,
  EMAIL_REQUIRED_MSG,
  NAME_REQUIRED_MSG,
  PASSWORD_COMPLEXITY_MSG,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MAX_LENGTH_MSG,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MIN_LENGTH_MSG,
  PASSWORD_REQUIRED_MSG,
} from "@src/utils/constants";
import { RegisterFormikProps } from "./registerForm.types";
import * as Yup from "yup";
import { PASSWORD_REGEX } from "@src/utils/regex";

export const REGISTER_FORMIK_INITIAL_VALUE: RegisterFormikProps = {
  email: ``,
  confirmPassword: ``,
  name: ``,
  password: ``,
};

export const REGISTER_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required(NAME_REQUIRED_MSG),
  email: Yup.string()
    .required(EMAIL_REQUIRED_MSG)
    .email(EMAIL_IS_NOT_VALID_MSG),
  password: Yup.string()
    .required(PASSWORD_REQUIRED_MSG)
    .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_MSG)
    .max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_MSG)
    .matches(PASSWORD_REGEX, PASSWORD_COMPLEXITY_MSG),
  confirmPassword: Yup.string()
    .required(CONFIRM_PASSWORD_REQUIRED_MSG)
    .oneOf([Yup.ref(`password`), ``], CONFIRM_PASSWORD_MATCH_MSG),
});
