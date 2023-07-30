import { User, UserRole } from "@src/types/user.types";

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

export const stringGenerator = (length: number, character: string): string =>
  new Array(length + 1).join(character);
