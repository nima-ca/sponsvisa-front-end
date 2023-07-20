"use client";

import Button from "@src/components/ui/button/button";
import Input from "@src/components/ui/input/input";
import PasswordInput from "@src/components/ui/passwrodInput/passwrodInput";
import { useFormik } from "formik";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "./loginForm.constants";
import styles from "./loginForm.module.scss";
import { LoginFormikProps } from "./loginForm.types";
import useAuth from "@src/hooks/useAuth/useAuth";

const LoginForm: FC = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<LoginFormikProps>({
    initialValues: { email: ``, password: `` },
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    async onSubmit(values, { resetForm }) {
      setIsLoading(true);
      await login({ email: values.email, password: values.password });
      setIsLoading(false);
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
        isLoading={isLoading}
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
