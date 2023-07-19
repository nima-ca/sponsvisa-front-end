"use client";

import { useFormik } from "formik";
import { FC, FormEvent } from "react";
import { LoginFormikProps } from "./loginForm.types";
import Input from "@src/components/ui/input/input";
import styles from "./loginForm.module.scss";
import Button from "@src/components/ui/button/button";
import { useMutation } from "@tanstack/react-query";
import { login } from "@src/utils/api/auth/login";
import Link from "next/link";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "./loginForm.constants";
import PasswordInput from "@src/components/ui/passwrodInput/passwrodInput";

const LoginForm: FC = () => {
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess(res) {
      console.log(res);
    },
    onError(err) {
      console.log(err);
    },
  });

  const formik = useFormik<LoginFormikProps>({
    initialValues: { email: ``, password: `` },
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    onSubmit(values, { resetForm }) {
      loginMutation.mutate(values);
      resetForm();
    },
  });

  const loginSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <form className={styles.container} onSubmit={loginSubmitHandler}>
      <Input
        placeholder="Email"
        {...formik.getFieldProps(`email`)}
        isInvalid={!!formik.errors.email && !!formik.touched.email}
      />
      <PasswordInput
        placeholder="Password"
        {...formik.getFieldProps(`password`)}
        isInvalid={!!formik.errors.password && !!formik.touched.password}
      />
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
        New to Sponsvisa? Create your account here!
      </Link>
    </form>
  );
};

export default LoginForm;
