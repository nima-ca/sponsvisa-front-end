"use client";

import { DESCRIPTION } from "@src/app/layout";
import LoginForm from "@src/components/loginForm/loginForm";
import { authContext } from "@src/context/authContext";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC, useContext } from "react";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Sponsvisa | Login`,
  description: DESCRIPTION,
};

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
