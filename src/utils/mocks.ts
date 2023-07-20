import { User, UserRole } from "./types";
import { Session } from "next-auth";

export const mockUser = (user?: User): User => {
  return (
    user ?? {
      id: `1`,
      email: `test@test.com`,
      isVerified: true,
      name: `test`,
      role: UserRole.USER,
    }
  );
};

export const defineUrl = (url: string) => {
  Object.defineProperty(window, `location`, {
    value: {
      href: url,
    },
    writable: true,
  });
};

export const mockSession = (): Session => {
  return {
    user: mockUser(),
    accessToken: `random access token`,
    refreshToken: `random refresh token `,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24).toString(), // expires in 24 hour
  };
};

export const stringGenerator = (length: number, character: string): string =>
  new Array(length + 1).join(character);
