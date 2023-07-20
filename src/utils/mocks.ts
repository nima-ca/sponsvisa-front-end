import { vi } from "vitest";
import { User, UserRole } from "./types";
import { SessionContextValue } from "next-auth/react";
import { Session } from "next-auth";

export const useRouterMock = {
  forward: vi.fn(),
  prefetch: vi.fn(),
  refresh: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  push: vi.fn(),
};

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

export const mockUseSession = (
  session?: SessionContextValue,
): SessionContextValue => {
  return (
    session ?? {
      data: mockSession(),
      status: `authenticated`,
      update: vi.fn(),
    }
  );
};
