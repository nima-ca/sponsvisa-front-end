import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import AuthButtons from "./AuthButtons";
import { useRouter } from "next/navigation";
import { useRouterMock } from "../../utils/mocks";

vi.mock(`next/navigation`, () => ({
  useRouter: vi.fn(),
}));

describe(`Auth Buttons`, () => {
  const pushMock = vi.fn();

  beforeEach(() => {
    useRouterMock.push = pushMock;
    vi.mocked(useRouter).mockReturnValue(useRouterMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test(`renders the AuthButtons component`, () => {
    render(<AuthButtons />);

    const registerButton = screen.getByText(`Register`);
    const loginButton = screen.getByText(`Login`);

    expect(registerButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect.hasAssertions();
  });

  test(`clicking the Register button navigates to /register`, () => {
    render(<AuthButtons />);

    const registerButton = screen.getByText(`Register`);
    fireEvent.click(registerButton);

    expect(pushMock).toHaveBeenCalledWith(`/register`);
  });

  test(`clicking the Login button navigates to /login`, () => {
    render(<AuthButtons />);

    const loginButton = screen.getByText(`Login`);
    fireEvent.click(loginButton);

    expect(pushMock).toHaveBeenCalledWith(`/login`);
  });
});
