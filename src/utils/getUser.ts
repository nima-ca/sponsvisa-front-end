import { User } from "@src/types/user.types";
import { cookies } from "next/headers";

export const getUserFromCookie = (): User | undefined => {
  const user = cookies().get(`user`);
  return user?.value ? JSON.parse(user.value) : undefined;
};
