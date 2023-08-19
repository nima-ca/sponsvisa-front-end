"use client";

import Button from "@src/components/ui/button/button";
import HelperText from "@src/components/ui/helperText/helperText";
import Input from "@src/components/ui/input/input";
import PasswordInput from "@src/components/ui/passwordInput/passwordInput";
import { FormikProvider, useFormik } from "formik";
import { FC, FormEvent } from "react";
import {
  REGISTER_FORMIK_INITIAL_VALUE,
  REGISTER_FORM_VALIDATION_SCHEMA,
} from "./registerForm.constants";
import styles from "./registerForm.module.scss";
import { RegisterFormikProps } from "./registerForm.types";

const RegisterForm: FC = () => {
  const formik = useFormik<RegisterFormikProps>({
    initialValues: REGISTER_FORMIK_INITIAL_VALUE,
    validationSchema: REGISTER_FORM_VALIDATION_SCHEMA,
    onSubmit(values, formikHelpers) {
      // formikHelpers.resetForm();
    },
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.submitForm();
  };

  const emailHasError = !!formik.errors.email && !!formik.touched.email;
  const nameHasError = !!formik.errors.name && !!formik.touched.name;
  const passwordHasError =
    !!formik.errors.password && !!formik.touched.password;
  const confirmPasswordHasError =
    !!formik.errors.confirmPassword && !!formik.touched.confirmPassword;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formSubmitHandler} className={styles.container}>
        <Input
          placeholder="Name"
          {...formik.getFieldProps(`name`)}
          isInvalid={nameHasError}
        />
        {nameHasError && <HelperText error>{formik.errors.name}</HelperText>}
        <Input
          placeholder="Email"
          {...formik.getFieldProps(`email`)}
          isInvalid={emailHasError}
        />
        {emailHasError && <HelperText error>{formik.errors.email}</HelperText>}
        <PasswordInput
          placeholder="Password"
          {...formik.getFieldProps(`password`)}
          isInvalid={passwordHasError}
        />
        {passwordHasError && (
          <HelperText error>{formik.errors.password}</HelperText>
        )}
        <PasswordInput
          placeholder="Confirm Password"
          {...formik.getFieldProps(`confirmPassword`)}
          isInvalid={confirmPasswordHasError}
        />
        {confirmPasswordHasError && (
          <HelperText error>{formik.errors.confirmPassword}</HelperText>
        )}

        <Button
          className={styles.submit}
          isLoading={false}
          //   isLoading={registerMutation.isLoading}
          type="submit"
          variant="solid"
          size="md"
        >
          Register
        </Button>
      </form>
    </FormikProvider>
  );
};

export default RegisterForm;
