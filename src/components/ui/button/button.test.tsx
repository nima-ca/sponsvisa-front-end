import { render, screen } from "@testing-library/react";
import React from "react";
import { it } from "vitest";
import Button, { BUTTON_TEST_ID } from "./button";
import { buttonTheme, outline, solid } from "./button.styles";

describe(`Button`, () => {
  const TEXT = `submit`;

  it(`should render children as label of the button`, () => {
    render(<Button>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.textContent).toBe(TEXT);
    expect.hasAssertions();
  });

  it(`should have a solid variant`, () => {
    expect(solid).toBeDefined();
    expect(solid).toEqual(
      expect.objectContaining({
        _hover: expect.any(Object),
        _focus: expect.any(Object),
      }),
    );
    expect.hasAssertions();
  });

  it(`should have a outline variant`, () => {
    expect(outline).toBeDefined();
    expect(outline).toEqual(
      expect.objectContaining({
        _hover: expect.any(Object),
        _focus: expect.any(Object),
      }),
    );
    expect.hasAssertions();
  });

  it(`should have a buttonTheme with outline and solid variants`, () => {
    expect(buttonTheme).toBeDefined();
    expect(buttonTheme).toEqual(
      expect.objectContaining({
        variants: { solid, outline },
      }),
    );
    expect.hasAssertions();
  });
});
