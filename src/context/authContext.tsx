"use client";

import { FC, PropsWithChildren, createContext, useState } from "react";
import { AuthContext, UserSession } from "./authContext.types";

export const authContext = createContext<AuthContext | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<UserSession>({
    isLoggedIn: false,
    user: undefined,
  });

  return (
    <authContext.Provider value={{ session, setSession }}>
      {children}
    </authContext.Provider>
  );
};
