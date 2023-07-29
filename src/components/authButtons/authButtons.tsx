"use client";

import Button from "@src/components/ui/button/button";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";
import styles from "./authButtons.module.scss";
import { authContext } from "@src/context/authContext";
import { useLogout } from "@src/hooks/api/useLogout/useLogout";

const AuthButtons: FC = () => {
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
          isLoading={logoutMutation.isLoading}
          variant="solid"
          size="sm"
          onClick={() => logoutMutation.mutate()}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
