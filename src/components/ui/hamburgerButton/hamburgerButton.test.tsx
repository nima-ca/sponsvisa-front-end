import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HamburgerButton from "./hamburgerButton";
import { Mock, vi } from "vitest";
import { HAMBURGER_BUTTON_TEST_ID } from "./hamburgerButton.constants";

describe(`Hamburger Button`, () => {
  let onClickCallback: Mock;

  beforeEach(() => {
    onClickCallback = vi.fn();
  });

  it(`should run the callback fn when the button is clicked`, () => {
    render(<HamburgerButton isOpen={false} onClick={onClickCallback} />);
    const button = screen.getByTestId(HAMBURGER_BUTTON_TEST_ID);
    fireEvent.click(button);

    expect(onClickCallback).toHaveBeenCalledTimes(1);
    expect.hasAssertions();
  });

  it(`should add opened className when isOpen props is set to true`, () => {
    render(<HamburgerButton isOpen={false} onClick={onClickCallback} />);
    const button = screen.getByTestId(HAMBURGER_BUTTON_TEST_ID);

    expect(button.className).not.toContain(`opened`);
    expect.hasAssertions();
  });

  it(`should not have opened className when isOpen props is false`, () => {
    render(<HamburgerButton isOpen={true} onClick={onClickCallback} />);

    const button = screen.getByTestId(HAMBURGER_BUTTON_TEST_ID);

    expect(button.className).toContain(`opened`);
    expect.hasAssertions();
  });
});
