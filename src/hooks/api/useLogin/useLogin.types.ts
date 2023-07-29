import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { LoginResponse } from "@src/utils/api/auth/login";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type UseLogin = UseMutationResult<
  LoginResponse,
  AxiosError<LoginResponse>,
  LoginFormikProps,
  unknown
>;
