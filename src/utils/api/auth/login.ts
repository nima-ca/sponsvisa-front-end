import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";
import { CoreResponse } from "@src/types/common.types";
import { User } from "@src/types/user.types";
import api from "@src/utils/axios";

export interface LoginResponse extends CoreResponse {
  user: User;
}

export const login = async (
  credentials: LoginFormikProps,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(`/auth/login`, credentials);
  return response.data;
};

export const logout = async (): Promise<CoreResponse> => {
  const response = await api.post<CoreResponse>(`/auth/logout`);
  return response.data;
};
