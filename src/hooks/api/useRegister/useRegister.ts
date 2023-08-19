import { useMutation } from "@tanstack/react-query";
import { RegisterResponse, register } from "./register";
import { AxiosError } from "axios";
import { RegisterFormikProps } from "@src/components/registerForm/registerForm.types";
import {
  REGISTER_FAILED_TITLE_MSG,
  REGISTER_SUCCESS_DESC_MSG,
  REGISTER_SUCCESS_TITLE_MSG,
} from "./useRegister.constants";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { UseRegister } from "./useRegister.types";

export const useRegister = (): UseRegister => {
  const toast = useToast({ isClosable: true, duration: 9000 });
  const router = useRouter();

  return useMutation<
    RegisterResponse,
    AxiosError<RegisterResponse>,
    RegisterFormikProps
  >(register, {
    onSuccess() {
      router.replace(`/login`);

      toast({
        title: REGISTER_SUCCESS_TITLE_MSG,
        description: REGISTER_SUCCESS_DESC_MSG,
        status: `success`,
      });
    },
    onError(error) {
      const errorMessages = error?.response?.data?.errors;
      toast({
        title: REGISTER_FAILED_TITLE_MSG,
        description: errorMessages
          ? errorMessages[0]
          : `Something went wrong, Please try again later.`,
        status: `error`,
      });
    },
  });
};
