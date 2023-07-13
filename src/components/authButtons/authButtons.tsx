"use client";

import React from "react";
import { FC } from "react";
import Button from "@src/components/ui/button/button";
import styles from "./authButtons.module.scss";
import { useRouter } from "next/navigation";

const AuthButtons: FC = () => {
  const router = useRouter();
  return (
    <div className={styles[`auth-button`]}>
      <Button
        variant="contained"
        size="medium"
        onClick={() => router.push(`/register`)}
      >
        Register
      </Button>
      <Button
        variant="contained"
        size="medium"
        onClick={() => router.push(`/register`)}
      >
        Login
      </Button>
    </div>
  );
};

export default AuthButtons;
