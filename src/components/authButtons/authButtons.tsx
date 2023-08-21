"use client";

import Button from "@src/components/ui/button/button";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";
import styles from "./authButtons.module.scss";
import { authContext } from "@src/context/authContext";
import { useLogout } from "@src/hooks/api/useLogout/useLogout";
import { AuthButtonsProps } from "./authButtons.types";

const AuthButtons: FC<AuthButtonsProps> = ({ toggleMenu }) => {
  const router = useRouter();
  const auth = useContext(authContext);
  const logoutMutation = useLogout();

  return (
    <div className={styles[`auth-button`]}>
      {!auth?.session.isLoggedIn ? (
        <>
          <Button
            variant="solid"
            size="sm"
            onClick={() => {
              router.push(`/register`);
              toggleMenu && toggleMenu();
            }}
          >
            Register
          </Button>
          <Button
            variant="solid"
            size="sm"
            onClick={() => {
              router.push(`/login`);
              toggleMenu && toggleMenu();
            }}
          >
            Login
          </Button>
        </>
      ) : (
        <Button
          isLoading={logoutMutation.isLoading}
          variant="solid"
          size="sm"
          onClick={() => {
            logoutMutation.mutate();
            toggleMenu && toggleMenu();
          }}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
