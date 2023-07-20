import { useToast } from "@chakra-ui/react";
import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UseAuth } from "./useAuth.type";

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
        title: `Successful Login`,
        description: `You have logged into your account successfully!`,
        status: `success`,
      });
    } else {
      toast({
        title: `Failed Login`,
        description: res?.error,
        status: `error`,
      });
    }
  };

  return { login };
};

export default useAuth;
