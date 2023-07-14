import { vi } from "vitest";

export const useRouterMock = {
  forward: vi.fn(),
  prefetch: vi.fn(),
  refresh: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  push: vi.fn(),
};
