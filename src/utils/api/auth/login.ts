import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import api from "@src/utils/axios";

export interface LoginResponse {
  success: boolean;
  token?: string;
  refreshToken?: string;
  error?: string[];
}

export const login = async (
  credentials: LoginFormikProps,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(`/auth/login`, credentials);
  return response.data;
};
