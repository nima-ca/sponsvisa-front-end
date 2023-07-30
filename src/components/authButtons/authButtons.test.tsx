import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import React, { FC, PropsWithChildren } from "react";
import { vi } from "vitest";
import { authContext } from "../../context/authContext";
import { AuthContext } from "../../context/authContext.types";
import { defineUrl, mockUser } from "../../utils/mocks";
import { useRouterMock } from "../../utils/vitestMocks";
import AuthButtons from "./authButtons";

vi.mock(`next/navigation`);

const queryClient = new QueryClient();

const QueryClientWrapper: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe(`Auth Buttons`, () => {
  beforeEach(() => {
    vi.mocked(useRouter).mockReturnValue(useRouterMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it(`renders the Logout button if the user is authenticated`, () => {
    const authContextMock: AuthContext = {
      session: { isLoggedIn: true, user: mockUser() },
      setSession: vi.fn(),
    };
    render(
      <QueryClientWrapper>
        <authContext.Provider value={authContextMock}>
          <AuthButtons />
        </authContext.Provider>
      </QueryClientWrapper>,
    );

    const registerButton = screen.queryByText(`Register`);
    const loginButton = screen.queryByText(`Login`);
    const logoutButton = screen.getByText(`Logout`);

    expect(logoutButton).toBeInTheDocument();
    expect(registerButton).not.toBeInTheDocument();
    expect(loginButton).not.toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`renders the Login and Register buttons if the user is not authenticated`, () => {
    const authContextMock: AuthContext = {
      session: { isLoggedIn: false, user: undefined },
      setSession: vi.fn(),
    };
    render(
      <QueryClientWrapper>
        <authContext.Provider value={authContextMock}>
          <AuthButtons />
        </authContext.Provider>
      </QueryClientWrapper>,
    );

    const registerButton = screen.getByText(`Register`);
    const loginButton = screen.getByText(`Login`);
    const logoutButton = screen.queryByText(`Logout`);

    expect(registerButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`navigates to /register when Register button is clicked`, () => {
    const authContextMock: AuthContext = {
      session: { isLoggedIn: false, user: undefined },
      setSession: vi.fn(),
    };
    render(
      <QueryClientWrapper>
        <authContext.Provider value={authContextMock}>
          <AuthButtons />
        </authContext.Provider>
      </QueryClientWrapper>,
    );

    const registerButton = screen.getByText(`Register`);
    fireEvent.click(registerButton);

    expect(useRouterMock.push).toHaveBeenCalledTimes(1);
    expect(useRouterMock.push).toHaveBeenCalledWith(`/register`);
  });

  it(`navigates to /login when Login button is clicked`, () => {
    const authContextMock: AuthContext = {
      session: { isLoggedIn: false, user: undefined },
      setSession: vi.fn(),
    };
    render(
      <QueryClientWrapper>
        <authContext.Provider value={authContextMock}>
          <AuthButtons />
        </authContext.Provider>
      </QueryClientWrapper>,
    );

    defineUrl(`/`);
    const loginButton = screen.getByText(`Login`);
    fireEvent.click(loginButton);

    expect(useRouterMock.push).toHaveBeenCalledTimes(1);
    expect(useRouterMock.push).toHaveBeenCalledWith(`/login`);
  });

  // TODO: add unit test for this event
  // it(`log the user out when Logout button is clicked`, () => {
  //   const authContextMock: AuthContext = {
  //     session: { isLoggedIn: true, user: mockUser() },
  //     setSession: vi.fn(),
  //   };

  //   const logoutMockFn = vi.fn(() =>
  //     Promise.resolve({ success: true, error: null }),
  //   );
  //   vi.mocked(logout).mockImplementation(logoutMockFn);

  //   render(
  //     <QueryClientWrapper>
  //       <authContext.Provider value={authContextMock}>
  //         <AuthButtons />
  //       </authContext.Provider>
  //     </QueryClientWrapper>,
  //   );

  //   const logoutButton = screen.getByText(`Logout`);

  //   expect(logoutButton).toBeInTheDocument();
  //   fireEvent.click(logoutButton);

  //   expect(logoutMockFn).toHaveBeenCalledTimes(1);
  //   expect.hasAssertions();
  // });
});
