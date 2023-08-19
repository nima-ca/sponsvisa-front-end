import { FC } from "react";
import styles from "./page.module.scss";
import RegisterForm from "@src/components/registerForm/registerForm";

const RegisterPage: FC = () => {
  return (
    <main className={`${styles.container} container`}>
      <h1 className={styles.heading}>Welcome to Sponsvisa</h1>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
