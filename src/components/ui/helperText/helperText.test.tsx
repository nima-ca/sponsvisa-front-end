import React from "react";
import { render, screen } from "@testing-library/react";
import HelperText from "./helperText";
import { HELPER_TEXT_TEST_ID } from "./helperText.constants";

describe(`HelperText`, () => {
  const TEXT = `Some Random Text`;

  it(`should render a helper text with children`, () => {
    render(<HelperText>{TEXT}</HelperText>);

    const helperText = screen.getByTestId(HELPER_TEXT_TEST_ID);

    expect(helperText).toBeInTheDocument();
    expect(helperText.innerHTML).toBe(TEXT);
    expect(helperText.className).toContain(`helper`);
    expect.hasAssertions();
  });

  it(`should render a helper text with error className`, () => {
    render(<HelperText error>{TEXT}</HelperText>);

    const helperText = screen.getByTestId(HELPER_TEXT_TEST_ID);

    expect(helperText).toBeInTheDocument();
    expect(helperText.className).toContain(`error`);
    expect.hasAssertions();
  });

  it(`should render a helper text without error className`, () => {
    render(<HelperText>{TEXT}</HelperText>);

    const helperText = screen.getByTestId(HELPER_TEXT_TEST_ID);

    expect(helperText).toBeInTheDocument();
    expect(helperText.className).not.toContain(`error`);
    expect.hasAssertions();
  });

  it(`should render a helper text with custom classNames`, () => {
    const CUSTOM_CLASS_NAME = `Test`;
    render(<HelperText className={CUSTOM_CLASS_NAME}>{TEXT}</HelperText>);

    const helperText = screen.getByTestId(HELPER_TEXT_TEST_ID);

    expect(helperText).toBeInTheDocument();
    expect(helperText.className).toContain(CUSTOM_CLASS_NAME);
    expect(helperText.className).toContain(`helper`);
    expect.hasAssertions();
  });
});
