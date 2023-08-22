"use client";

import Button from "@src/components/ui/button/button";
import Input from "@src/components/ui/input/input";
import PasswordInput from "@src/components/ui/passwordInput/passwordInput";
import { useFormik } from "formik";
import Link from "next/link";
import { FC, FormEvent } from "react";
import HelperText from "@src/components/ui/helperText/helperText";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "./loginForm.constants";
import styles from "./loginForm.module.scss";
import { LoginFormikProps } from "./loginForm.types";
import { useLogin } from "@src/hooks/api/useLogin/useLogin";

// TODO: test this component with cypress
const LoginForm: FC = () => {
  const loginMutation = useLogin();

  const formik = useFormik<LoginFormikProps>({
    initialValues: { email: ``, password: `` },
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    async onSubmit(values, { resetForm }) {
      await loginMutation.mutate({
        email: values.email.trim(),
        password: values.password.trim(),
      });
      resetForm();
    },
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const emailHasError = !!formik.errors.email && !!formik.touched.email;
  const passwordHasError =
    !!formik.errors.password && !!formik.touched.password;

  return (
    <form className={styles.container} onSubmit={formSubmitHandler}>
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
        isLoading={loginMutation.isLoading}
        type="submit"
        variant="solid"
        size="md"
      >
        Login
      </Button>

      <Link href="/register" className={styles.link}>
        New to Sponsvisa? <span>Create your account here!</span>
      </Link>
    </form>
  );
};

export default LoginForm;
