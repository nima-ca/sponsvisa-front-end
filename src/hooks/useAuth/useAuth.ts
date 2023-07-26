import { useToast } from "@chakra-ui/react";
import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { authContext } from "@src/context/authContext";
import { User } from "@src/types/user.types";
import {
  LoginResponse,
  login as loginApi,
  logout as logoutApi,
} from "@src/utils/api/auth/login";
import { getFromCookies, setInCookies } from "@src/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useContext, useLayoutEffect } from "react";
import {
  LOGIN_FAILED_TITLE_MSG,
  LOGIN_SUCCESS_DESC_MSG,
  LOGIN_SUCCESS_TITLE_MSG,
  LOGOUT_SUCCESS_DESC_MSG,
  LOGOUT_SUCCESS_TITLE_MSG,
} from "./useAuth.constants";
import { UseAuth } from "./useAuth.type";

const USER_KEY_IN_COOKIE = `user`;

const useAuth = (): UseAuth => {
  const toast = useToast({ isClosable: true, duration: 9000 });
  const loginMutation = useMutation(loginApi);
  const logoutMutation = useMutation(logoutApi);
  const auth = useContext(authContext);

  auth?.session.isLoggedIn;

  useLayoutEffect(() => {
    const user = getFromCookies<User | undefined>(USER_KEY_IN_COOKIE);
    if (user) {
      auth?.setSession({ isLoggedIn: true, user: user });
    }
  }, []);

  const login = async (credentials: LoginFormikProps) => {
    loginMutation.mutate(credentials, {
      onSuccess(data) {
        auth?.setSession({ isLoggedIn: true, user: data.user });
        setInCookies(USER_KEY_IN_COOKIE, data.user, { expires: 7 });

        toast({
          title: LOGIN_SUCCESS_TITLE_MSG,
          description: LOGIN_SUCCESS_DESC_MSG,
          status: `success`,
        });
      },
      onError(error) {
        const _error = error as AxiosError<LoginResponse>;
        const errorMessages = _error.response?.data.error;
        toast({
          title: LOGIN_FAILED_TITLE_MSG,
          description: errorMessages
            ? errorMessages[0]
            : `Something went wrong, Please try again later.`,
          status: `error`,
        });
      },
    });
  };

  const logout = async () => {
    logoutMutation.mutate(undefined, {
      onSuccess() {
        auth?.setSession({ isLoggedIn: false, user: undefined });
        setInCookies(USER_KEY_IN_COOKIE, null);
        toast({
          title: LOGOUT_SUCCESS_TITLE_MSG,
          description: LOGOUT_SUCCESS_DESC_MSG,
          status: `success`,
        });
      },
    });
  };

  return {
    login,
    logout,
    loginLoadingState: loginMutation.isLoading,
    logoutLoadingState: logoutMutation.isLoading,
  };
};

export default useAuth;
