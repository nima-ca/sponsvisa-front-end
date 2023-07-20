import { DESCRIPTION } from "@src/app/layout";
import LoginForm from "@src/components/loginForm/loginForm";
import { authOptions } from "@src/utils/auth/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Sponsvisa | Login`,
  description: DESCRIPTION,
};

const LoginPage: FC = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
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
