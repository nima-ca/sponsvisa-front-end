import { useToast } from "@chakra-ui/react";
import { USER_KEY_IN_COOKIE, authContext } from "@src/context/authContext";
import { LoginResponse, login } from "@src/hooks/api/useLogin/login";
import { setInCookies } from "@src/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import {
  LOGIN_FAILED_TITLE_MSG,
  LOGIN_SUCCESS_DESC_MSG,
  LOGIN_SUCCESS_TITLE_MSG,
} from "./useLogin.constants";
import { AxiosError } from "axios";
import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { UseLogin } from "./useLogin.types";
import { useRouter } from "next/navigation";

// TODO: add unit tests
export const useLogin = (): UseLogin => {
  const auth = useContext(authContext);
  const toast = useToast({ isClosable: true, duration: 9000 });
  const router = useRouter();

  return useMutation<
    LoginResponse,
    AxiosError<LoginResponse>,
    LoginFormikProps
  >(login, {
    onSuccess(data) {
      auth?.setSession({ isLoggedIn: true, user: data.user });
      setInCookies(USER_KEY_IN_COOKIE, data.user, { expires: 7 });
      router.replace(`/`);

      toast({
        title: LOGIN_SUCCESS_TITLE_MSG,
        description: LOGIN_SUCCESS_DESC_MSG,
        status: `success`,
      });
    },
    onError(error) {
      const errorMessages = error?.response?.data?.errors;
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
