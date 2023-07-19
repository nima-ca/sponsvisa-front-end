import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@src/utils/api/auth/login";
import { LoginFormikProps } from "@src/components/loginForm/loginForm.types";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: `jwt`,
  },
  providers: [
    CredentialsProvider({
      name: `Login`,
      credentials: {},
      async authorize(credentials) {
        try {
          const { email, password } = credentials as LoginFormikProps;
          const loginResponse = await login({ email, password });

          if (loginResponse.success) {
            return {
              ...loginResponse.user,
              accessToken: loginResponse.token ?? ``,
              refreshToken: loginResponse.refreshToken ?? ``,
            };
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email as string,
          name: token.name as string,
          isVerified: token.isVerified,
          role: token.role,
        };
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.isVerified = user.isVerified;
        token.role = user.role;
      }
      return token;
    },
  },
};
