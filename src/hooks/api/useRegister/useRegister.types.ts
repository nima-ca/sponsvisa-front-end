import { UseMutationResult } from "@tanstack/react-query";
import { RegisterResponse } from "./register";
import { AxiosError } from "axios";
import { RegisterFormikProps } from "@src/components/registerForm/registerForm.types";

export type UseRegister = UseMutationResult<
  RegisterResponse,
  AxiosError<RegisterResponse>,
  RegisterFormikProps,
  unknown
>;
