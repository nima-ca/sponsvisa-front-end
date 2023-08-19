import { DESCRIPTION } from "@src/app/layout";
import ServerSideGuestGuard from "@src/components/guards/guests/serverSideGuestGuard";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: `Sponsvisa | Login`,
  description: DESCRIPTION,
};

const LoginLayout: FC<PropsWithChildren> = ({ children }) => {
  return <ServerSideGuestGuard>{children}</ServerSideGuestGuard>;
};

export default LoginLayout;
