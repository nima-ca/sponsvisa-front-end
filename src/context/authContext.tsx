"use client";

import {
  FC,
  PropsWithChildren,
  createContext,
  useLayoutEffect,
  useState,
} from "react";
import { AuthContext, UserSession } from "./authContext.types";
import { getFromCookies } from "@src/utils/cookie";
import { User } from "@src/types/user.types";

export const USER_KEY_IN_COOKIE = `user`;
export const authContext = createContext<AuthContext | null>(null);

// TODO: add unit tests
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<UserSession>({
    isLoggedIn: false,
    user: undefined,
  });

  useLayoutEffect(() => {
    const user = getFromCookies<User | undefined>(USER_KEY_IN_COOKIE);
    if (user) {
      setSession({ isLoggedIn: true, user: user });
    }
  }, []);

  return (
    <authContext.Provider value={{ session, setSession }}>
      {children}
    </authContext.Provider>
  );
};
