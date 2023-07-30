import { CoreResponse } from "@src/types/common.types";
import api from "@src/utils/axios";

export const logout = async (): Promise<CoreResponse> => {
  const response = await api.post<CoreResponse>(`/auth/logout`);
  return response.data;
};
