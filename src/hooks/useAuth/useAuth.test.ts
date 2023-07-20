import { useToast } from "@chakra-ui/react";
import { act, renderHook } from "@testing-library/react";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { vi } from "vitest";
import { useRouterMock } from "../../utils/mocks";
import useAuth from "./useAuth";
import {
  LOGIN_FAILED_TITLE_MSG,
  LOGIN_SUCCESS_DESC_MSG,
  LOGIN_SUCCESS_TITLE_MSG,
} from "./useAuth.constants";

vi.mock(`next/navigation`);
vi.mock(`@chakra-ui/react`);
vi.mock(`next-auth/react`);

describe(`Use Auth`, () => {
  describe(`Login`, () => {
    const CREDENTIALS = { email: `test@example.com`, password: `testpass` };

    afterEach(() => {
      vi.resetAllMocks();
    });

    it(`should call signIn with correct credentials and redirect`, async () => {
      const mockToast = vi.fn();
      const mockPush = vi.fn();
      const mockedResponse: SignInResponse = {
        ok: true,
        status: 200,
        error: undefined,
        url: ``,
      };
      useRouterMock.push = mockPush;

      vi.mocked(useToast).mockImplementation(() => mockToast as any);
      vi.mocked(useRouter).mockReturnValue(useRouterMock);
      vi.mocked(signIn).mockResolvedValue(mockedResponse);

      const { result } = renderHook(() => useAuth());
      const { login } = result.current;

      await act(async () => {
        await login(CREDENTIALS);
      });

      expect(signIn).toHaveBeenCalledTimes(1);
      expect(signIn).toHaveBeenCalledWith(`credentials`, {
        redirect: false,
        email: CREDENTIALS.email,
        password: CREDENTIALS.password,
      });

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith(`/`);

      expect(mockToast).toHaveBeenCalledTimes(1);
      expect(mockToast).toHaveBeenCalledWith({
        title: LOGIN_SUCCESS_TITLE_MSG,
        description: LOGIN_SUCCESS_DESC_MSG,
        status: `success`,
      });

      expect.hasAssertions();
    });

    it(`should show error toast on failed login`, async () => {
      const ERROR_MSG = `Email or Password is wrong!`;
      const mockToast = vi.fn();

      const mockedResponse: SignInResponse = {
        ok: false,
        status: 400,
        error: ERROR_MSG,
        url: ``,
      };

      vi.mocked(useToast).mockImplementation(() => mockToast as any);
      vi.mocked(signIn).mockResolvedValue(mockedResponse);

      const { result } = renderHook(() => useAuth());
      const { login } = result.current;

      await act(async () => {
        await login(CREDENTIALS);
      });

      expect(signIn).toHaveBeenCalledTimes(1);
      expect(signIn).toHaveBeenCalledWith(`credentials`, {
        redirect: false,
        email: CREDENTIALS.email,
        password: CREDENTIALS.password,
      });

      expect(mockToast).toHaveBeenCalledTimes(1);
      expect(mockToast).toHaveBeenCalledWith({
        title: LOGIN_FAILED_TITLE_MSG,
        description: ERROR_MSG,
        status: `error`,
      });

      expect.hasAssertions();
    });
  });
});
