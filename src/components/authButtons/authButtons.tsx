"use client";

import Button from "@src/components/ui/button/button";
import useAuth from "@src/hooks/useAuth/useAuth";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";
import styles from "./authButtons.module.scss";
import { authContext } from "@src/context/authContext";

const AuthButtons: FC = () => {
  const router = useRouter();
  const auth = useContext(authContext);
  const { logout, logoutLoadingState } = useAuth();

  return (
    <div className={styles[`auth-button`]}>
      {!auth?.session.isLoggedIn ? (
        <>
          <Button
            variant="solid"
            size="sm"
            onClick={() => router.push(`/register`)}
          >
            Register
          </Button>
          <Button
            variant="solid"
            size="sm"
            onClick={() => router.push(`/login`)}
          >
            Login
          </Button>
        </>
      ) : (
        <Button
          isLoading={logoutLoadingState}
          variant="solid"
          size="sm"
          onClick={logout}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
