"use client";

import Button from "@src/components/ui/button/button";
import Input from "@src/components/ui/input/input";
import PasswordInput from "@src/components/ui/passwordInput/passwordInput";
import useAuth from "@src/hooks/useAuth/useAuth";
import { useFormik } from "formik";
import Link from "next/link";
import { FC } from "react";
import HelperText from "../ui/helperText/helperText";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "./loginForm.constants";
import styles from "./loginForm.module.scss";
import { LoginFormikProps } from "./loginForm.types";

// TODO: test this component with cypress
const LoginForm: FC = () => {
  const { login, loginLoadingState } = useAuth();

  const formik = useFormik<LoginFormikProps>({
    initialValues: { email: ``, password: `` },
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    async onSubmit(values, { resetForm }) {
      await login({
        email: values.email.trim(),
        password: values.password.trim(),
      });
      resetForm();
    },
  });

  const emailHasError = !!formik.errors.email && !!formik.touched.email;
  const passwordHasError =
    !!formik.errors.password && !!formik.touched.password;

  return (
    <div className={styles.container}>
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
      <Button
        className={styles.submit}
        isLoading={loginLoadingState}
        onClick={() => formik.handleSubmit()}
        type="button"
        variant="solid"
        size="md"
      >
        Login
      </Button>

      <Link href="/register" className={styles.link}>
        New to Sponsvisa? Create your account here!
      </Link>
    </div>
  );
};

export default LoginForm;
