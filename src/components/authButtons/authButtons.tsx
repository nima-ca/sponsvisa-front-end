"use client";

import Button from "@src/components/ui/button/button";
import { useToggle } from "@src/hooks/useToggle/useToggle";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";
import styles from "./authButtons.module.scss";

const AuthButtons: FC = () => {
  const { state: isLoading, toggle: toggleLoading } = useToggle(false);
  const { status } = useSession();

  return (
    <div className={styles[`auth-button`]}>
      {status === `unauthenticated` || status === `loading` ? (
        <>
          <Button
            variant="solid"
            size="sm"
            onClick={() => (window.location.href = `/register`)}
          >
            Register
          </Button>
          <Button
            variant="solid"
            size="sm"
            onClick={() => (window.location.href = `/login`)}
          >
            Login
          </Button>
        </>
      ) : (
        <Button
          isLoading={isLoading}
          variant="solid"
          size="sm"
          onClick={() => {
            toggleLoading();
            signOut();
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
