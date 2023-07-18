"use client";

import React from "react";
import { FC } from "react";
// import Button from "@src/components/ui/button/button";

import styles from "./authButtons.module.scss";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

const AuthButtons: FC = () => {
  const router = useRouter();
  return (
    <div className={styles[`auth-button`]}>
      <Button
        variant="solid"
        size="sm"
        onClick={() => router.push(`/register`)}
      >
        Register
      </Button>
      <Button variant="solid" size="sm" onClick={() => router.push(`/login`)}>
        Login
      </Button>
    </div>
  );
};

export default AuthButtons;
