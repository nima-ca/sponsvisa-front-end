import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import api from "@src/utils/axios";
import { User } from "@src/utils/types";

export interface LoginResponse {
  success: boolean;
  token?: string;
  refreshToken?: string;
  error?: string[];
  user: User;
}

export const login = async (
  credentials: LoginFormikProps,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(`/auth/login`, credentials);
  return response.data;
};
