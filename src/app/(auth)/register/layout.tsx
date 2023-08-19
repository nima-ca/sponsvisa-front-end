import { DESCRIPTION } from "@src/app/layout";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: `Sponsvisa | Register`,
  description: DESCRIPTION,
};

const RegisterPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default RegisterPageLayout;
