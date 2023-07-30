"use client";

import LoginForm from "@src/components/loginForm/loginForm";
import { authContext } from "@src/context/authContext";
import { redirect } from "next/navigation";
import { FC, useContext } from "react";
import styles from "./page.module.scss";

const LoginPage: FC = () => {
  const auth = useContext(authContext);

  if (auth?.session.isLoggedIn) {
    redirect(`/`);
  }

  return (
    <main className={`${styles.container} container`}>
      <h1 className={styles.heading}>Welcome Back to Sponsvisa</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
