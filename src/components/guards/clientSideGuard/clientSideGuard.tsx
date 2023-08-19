"use client";

import { authContext } from "@src/context/authContext";
import { FC, PropsWithChildren, useContext } from "react";
import { redirect } from "next/navigation";
import { ClientSideGuardProps } from "./clientSideGuard.types";
import { useToast } from "@chakra-ui/react";

const ClientSideGuard: FC<PropsWithChildren<ClientSideGuardProps>> = ({
  children,
  role = `ANY`,
}) => {
  const toast = useToast({ isClosable: true, duration: 9000 });
  const auth = useContext(authContext);

  if (!auth?.session.isLoggedIn) {
    redirect(`/login`);
  }

  if (role !== `ANY` && auth?.session.user?.role !== role) {
    toast({
      title: `Unauthorized Access`,
      description: `You are not allowed to access this page!`,
      status: `error`,
    });
    redirect(`/`);
  }

  return <>{children}</>;
};

export default ClientSideGuard;
