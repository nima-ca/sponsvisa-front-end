import { useToast } from "@chakra-ui/react";
import { USER_KEY_IN_COOKIE, authContext } from "@src/context/authContext";
import { logout } from "@src/utils/api/auth/logout";
import { setInCookies } from "@src/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import {
  LOGOUT_FAILED_DESC_MSG,
  LOGOUT_FAILED_TITLE_MSG,
  LOGOUT_SUCCESS_DESC_MSG,
  LOGOUT_SUCCESS_TITLE_MSG,
} from "./useLogout.constants";
import { UseLogout } from "./useLogout.types";

export const useLogout = (): UseLogout => {
  const auth = useContext(authContext);
  const toast = useToast({ isClosable: true, duration: 9000 });

  return useMutation(logout, {
    onSuccess() {
      auth?.setSession({ isLoggedIn: false, user: undefined });
      setInCookies(USER_KEY_IN_COOKIE, null);
      toast({
        title: LOGOUT_SUCCESS_TITLE_MSG,
        description: LOGOUT_SUCCESS_DESC_MSG,
        status: `success`,
      });
    },
    onError() {
      toast({
        title: LOGOUT_FAILED_TITLE_MSG,
        description: LOGOUT_FAILED_DESC_MSG,
        status: `error`,
      });
    },
  });
};
