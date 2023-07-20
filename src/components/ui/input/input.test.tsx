import { render, screen } from "@testing-library/react";
import Input from "./input";
import React from "react";
import { INPUT_TEST_ID } from "./input.constants";

describe(`Input`, () => {
  it(`should render an input`, () => {
    render(<Input />);

    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toBeInTheDocument();
    expect(input.className).toContain(`input`);
    expect.hasAssertions();
  });

  it(`should render an input with custom className`, () => {
    const CUSTOM_CLASS_NAME = `CUSTOM_CLASS_NAME`;
    render(<Input className={CUSTOM_CLASS_NAME} />);

    const input = screen.getByTestId(INPUT_TEST_ID);
    expect(input).toBeInTheDocument();
    expect(input.className).toContain(`input`);
    expect(input.className).toContain(CUSTOM_CLASS_NAME);
    expect.hasAssertions();
  });
});
