/* eslint-disable quotes */
import { User as IUser } from "@src/utils/types";
import "next-auth";
import "next-auth/jwt";

interface Tokens {
  accessToken: string;
  refreshToken: string;
}
declare module "next-auth/jwt" {
  interface JWT extends IUser, Tokens {
    id: string;
  }
}
declare module "next-auth" {
  interface Session extends Tokens {
    user: IUser;
  }

  interface User extends IUser, Tokens {}
}
