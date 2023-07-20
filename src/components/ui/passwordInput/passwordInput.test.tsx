import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import { INPUT_TEST_ID } from "../input/input.constants";
import PasswordInput from "./passwordInput";
import {
  PASSWORD_INPUT_CLOSED_EYE_TEST_ID,
  PASSWORD_INPUT_ICON_BUTTON_TEST_ID,
  PASSWORD_INPUT_OPEN_EYE_TEST_ID,
  PASSWORD_INPUT_TEST_ID,
} from "./passwordInput.constants";

describe(`PasswordInput`, () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it(`should render passwordInput`, () => {
    render(<PasswordInput />);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const passwordInputIconButton = screen.getByTestId(
      PASSWORD_INPUT_ICON_BUTTON_TEST_ID,
    );
    const input = screen.getByTestId(INPUT_TEST_ID);
    const openEyeIcon = screen.getByTestId(PASSWORD_INPUT_OPEN_EYE_TEST_ID);
    const closedEyeIcon = screen.queryByTestId(
      PASSWORD_INPUT_CLOSED_EYE_TEST_ID,
    );

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInputIconButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.getAttribute(`type`)).toBe(`password`);

    expect(openEyeIcon).toBeInTheDocument();
    expect(closedEyeIcon).not.toBeInTheDocument();

    expect.hasAssertions();
  });

  it(`should toggle the show state when eye icon is clicked`, () => {
    render(<PasswordInput />);
    const passwordInputIconButton = screen.getByTestId(
      PASSWORD_INPUT_ICON_BUTTON_TEST_ID,
    );

    expect(screen.getByTestId(INPUT_TEST_ID).getAttribute(`type`)).toBe(
      `password`,
    );

    fireEvent.click(passwordInputIconButton);

    expect(screen.getByTestId(INPUT_TEST_ID).getAttribute(`type`)).toBe(`text`);
    expect.hasAssertions();
  });

  it(`should toggle eye icons when it is clicked`, () => {
    render(<PasswordInput />);
    const passwordInputIconButton = screen.getByTestId(
      PASSWORD_INPUT_ICON_BUTTON_TEST_ID,
    );

    expect(
      screen.getByTestId(PASSWORD_INPUT_OPEN_EYE_TEST_ID),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(PASSWORD_INPUT_CLOSED_EYE_TEST_ID),
    ).not.toBeInTheDocument();

    fireEvent.click(passwordInputIconButton);

    expect(
      screen.getByTestId(PASSWORD_INPUT_CLOSED_EYE_TEST_ID),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(PASSWORD_INPUT_OPEN_EYE_TEST_ID),
    ).not.toBeInTheDocument();

    fireEvent.click(passwordInputIconButton);

    expect(
      screen.getByTestId(PASSWORD_INPUT_OPEN_EYE_TEST_ID),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId(PASSWORD_INPUT_CLOSED_EYE_TEST_ID),
    ).not.toBeInTheDocument();
    expect.hasAssertions();
  });
});
