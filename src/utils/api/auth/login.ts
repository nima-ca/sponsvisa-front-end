import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";

export interface LoginResponse {
  success: boolean;
  token: string;
  error?: string[];
}

export const login = async (
  credentials: LoginFormikProps,
): Promise<LoginResponse> => {
  return { success: true, token: `` };
};
