import { DESCRIPTION } from "@src/app/layout";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: `Sponsvisa | Login`,
  description: DESCRIPTION,
};

const LoginLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default LoginLayout;
