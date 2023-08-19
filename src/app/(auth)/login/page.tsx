import LoginForm from "@src/components/loginForm/loginForm";
import { FC } from "react";
import styles from "./page.module.scss";

const LoginPage: FC = () => {
  return (
    <main className={`${styles.container} container`}>
      <h1 className={styles.heading}>Welcome Back to Sponsvisa</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
