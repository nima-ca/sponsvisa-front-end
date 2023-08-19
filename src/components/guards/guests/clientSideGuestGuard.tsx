"use client";

import { authContext } from "@src/context/authContext";
import { redirect } from "next/navigation";
import { FC, PropsWithChildren, useContext } from "react";

const ClientSideGuard: FC<PropsWithChildren> = ({ children }) => {
  const auth = useContext(authContext);

  if (auth?.session.isLoggedIn) {
    redirect(`/`);
  }

  return <>{children}</>;
};

export default ClientSideGuard;
