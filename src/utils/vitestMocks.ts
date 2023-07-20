import { SessionContextValue } from "next-auth/react";
import { vi } from "vitest";
import { mockSession } from "./mocks";

export const useRouterMock = {
  forward: vi.fn(),
  prefetch: vi.fn(),
  refresh: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  push: vi.fn(),
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
