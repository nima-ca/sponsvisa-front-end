import { authOptions } from "@src/utils/auth/authOptions";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions);
