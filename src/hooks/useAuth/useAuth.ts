import { useToast } from "@chakra-ui/react";
import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UseAuth } from "./useAuth.type";
import {
  LOGIN_FAILED_TITLE_MSG,
  LOGIN_SUCCESS_DESC_MSG,
  LOGIN_SUCCESS_TITLE_MSG,
} from "./useAuth.constants";

const useAuth = (): UseAuth => {
  const toast = useToast({ isClosable: true, duration: 9000 });
  const router = useRouter();

  const login = async ({ email, password }: LoginFormikProps) => {
    const res = await signIn(`credentials`, {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push(`/`);
      toast({
        title: LOGIN_SUCCESS_TITLE_MSG,
        description: LOGIN_SUCCESS_DESC_MSG,
        status: `success`,
      });
    } else {
      toast({
        title: LOGIN_FAILED_TITLE_MSG,
        description: res?.error,
        status: `error`,
      });
    }
  };

  return { login };
};

export default useAuth;
