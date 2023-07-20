import { fireEvent, render, screen } from "@testing-library/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { vi } from "vitest";
import { useToggle } from "../../hooks/useToggle/useToggle";
import { defineUrl } from "../../utils/mocks";
import AuthButtons from "./authButtons";
import { mockUseSession } from "../../utils/vitestMocks";

vi.mock(`../../hooks/useToggle/useToggle`);

vi.mock(`next-auth/react`);

describe(`Auth Buttons`, () => {
  const mockToggleFn = vi.fn();

  global.window = Object.create(window);

  beforeEach(() => {
    vi.mocked(useToggle).mockReturnValue({
      state: false,
      toggle: mockToggleFn,
    });

    vi.mocked(useSession).mockImplementation(() =>
      mockUseSession({
        data: null,
        status: `unauthenticated`,
        update: vi.fn(),
      }),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it(`renders the Logout button if the user is authenticated`, () => {
    vi.mocked(useSession).mockReturnValue(mockUseSession());

    render(<AuthButtons />);

    const registerButton = screen.queryByText(`Register`);
    const loginButton = screen.queryByText(`Login`);
    const logoutButton = screen.getByText(`Logout`);

    expect(logoutButton).toBeInTheDocument();
    expect(registerButton).not.toBeInTheDocument();
    expect(loginButton).not.toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`renders the Login and Register buttons if the user is not authenticated`, () => {
    render(<AuthButtons />);

    const registerButton = screen.getByText(`Register`);
    const loginButton = screen.getByText(`Login`);
    const logoutButton = screen.queryByText(`Logout`);

    expect(registerButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).not.toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`navigates to /register when Register button is clicked`, () => {
    render(<AuthButtons />);

    defineUrl(`/`);
    const registerButton = screen.getByText(`Register`);
    fireEvent.click(registerButton);

    expect(window.location.href).toBe(`/register`);
  });

  it(`navigates to /login when Login button is clicked`, () => {
    render(<AuthButtons />);

    defineUrl(`/`);
    const loginButton = screen.getByText(`Login`);
    fireEvent.click(loginButton);

    expect(window.location.href).toBe(`/login`);
  });

  it(`log the user out when Logout button is clicked`, () => {
    vi.mocked(useSession).mockReturnValue(mockUseSession());

    render(<AuthButtons />);
    const logoutButton = screen.getByText(`Logout`);

    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);

    expect(mockToggleFn).toHaveBeenCalledTimes(1);
    expect(signOut).toHaveBeenCalledTimes(1);
    expect.hasAssertions();
  });
});
