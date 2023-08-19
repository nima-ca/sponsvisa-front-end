import { getUserFromCookie } from "@src/utils/getUser";
import { redirect } from "next/navigation";
import { FC, PropsWithChildren } from "react";

const ServerSideGuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const user = getUserFromCookie();

  if (user) {
    redirect(`/`);
  }

  return <>{children}</>;
};

export default ServerSideGuestGuard;
