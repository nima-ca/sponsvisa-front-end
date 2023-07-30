import { User } from "@src/types/user.types";
import { Dispatch, SetStateAction } from "react";

export interface UserSession {
  user?: User;
  isLoggedIn: boolean;
}

export interface AuthContext {
  session: UserSession;
  setSession: Dispatch<SetStateAction<UserSession>>;
}
