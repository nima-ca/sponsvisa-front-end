/* eslint-disable no-unused-vars */
import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";

export interface UseAuth {
  login: (credential: LoginFormikProps) => void;
  loginLoadingState: boolean;
  logoutLoadingState: boolean;
  logout: () => void;
}
