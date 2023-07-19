"use client";

import Button from "@src/components/ui/button/button";
import Input from "@src/components/ui/input/input";
import PasswordInput from "@src/components/ui/passwrodInput/passwrodInput";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, FormEvent, useState } from "react";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "./loginForm.constants";
import styles from "./loginForm.module.scss";
import { LoginFormikProps } from "./loginForm.types";
const LoginForm: FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<LoginFormikProps>({
    initialValues: { email: ``, password: `` },
    validationSchema: LOGIN_FORM_VALIDATION_SCHEMA,
    async onSubmit(values, { resetForm }) {
      setIsLoading(false);
      const res = await signIn(`credentials`, {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (res?.ok) {
        router.push(`/`);
      } else {
        console.log(res?.error);
      }

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
