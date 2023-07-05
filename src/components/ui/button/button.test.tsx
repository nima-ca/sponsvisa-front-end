import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button, { BUTTON_TEST_ID } from "./button";
import { vi } from "vitest";

describe(`Button`, () => {
  const TEXT_CLASS_NAME = `button__text`;
  const CONTAINED_CLASS_NAME = `button__contained`;
  const OUTLINED_CLASS_NAME = `button__outlined`;
  const TEXT = `submit`;

  it(`should render children as label of the button`, () => {
    render(<Button>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.textContent).toBe(TEXT);
    expect.hasAssertions();
  });

  it(`should render a text button as default`, () => {
    render(<Button>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(TEXT_CLASS_NAME);
    expect(button.className).not.toContain(CONTAINED_CLASS_NAME);
    expect(button.className).not.toContain(OUTLINED_CLASS_NAME);
    expect.hasAssertions();
  });

  it(`should render an outlined button`, () => {
    render(<Button variant="outlined">{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(OUTLINED_CLASS_NAME);
    expect(button.className).not.toContain(TEXT_CLASS_NAME);
    expect(button.className).not.toContain(CONTAINED_CLASS_NAME);
    expect.hasAssertions();
  });

  it(`should render a contained button`, () => {
    render(<Button variant="contained">{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(CONTAINED_CLASS_NAME);
    expect(button.className).not.toContain(OUTLINED_CLASS_NAME);
    expect(button.className).not.toContain(TEXT_CLASS_NAME);
    expect.hasAssertions();
  });

  it(`should render a disabled text button`, () => {
    render(
      <Button variant="text" disabled>
        test
      </Button>,
    );
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`disabled__text`);
    expect(button.className).toContain(`Mui-disabled`);
    expect.hasAssertions();
  });

  it(`should render a disabled contained button`, () => {
    render(
      <Button variant="contained" disabled>
        test
      </Button>,
    );
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`disabled__contained`);
    expect(button.className).toContain(`Mui-disabled`);
    expect.hasAssertions();
  });

  it(`should render a disabled outlined button`, () => {
    render(
      <Button variant="outlined" disabled>
        test
      </Button>,
    );
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`disabled__outlined`);
    expect(button.className).toContain(`Mui-disabled`);
    expect.hasAssertions();
  });

  it(`should render a full width button`, () => {
    render(<Button fullWidth>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`MuiButton-fullWidth`);
    expect.hasAssertions();
  });

  it(`should check if the onClick callback is called`, () => {
    const onClickCallback = vi.fn();
    render(<Button onClick={onClickCallback}>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    fireEvent.click(button);

    expect(onClickCallback).toHaveBeenCalledTimes(1);
    expect.hasAssertions();
  });

  it(`should check if there is a start Icon on the button`, () => {
    const { container } = render(<Button startIcon={<></>}>{TEXT}</Button>);
    const icon = container.getElementsByClassName(`MuiButton-startIcon`);

    expect(icon.length).toBeGreaterThan(0);
    expect.hasAssertions();
  });

  it(`should check if there is a end Icon on the button`, () => {
    const { container } = render(<Button endIcon={<></>}>{TEXT}</Button>);
    const icon = container.getElementsByClassName(`MuiButton-endIcon`);

    expect(icon.length).toBeGreaterThan(0);
    expect.hasAssertions();
  });

  it(`should check if the className provided is set on the button`, () => {
    const CLASS_NAME = `testClassName`;
    render(<Button className={CLASS_NAME}>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(CLASS_NAME);
    expect.hasAssertions();
  });

  it(`should check if the size of button is small`, () => {
    render(<Button size="small">{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`MuiButton-sizeSmall`);
    expect(button.className).not.toContain(`MuiButton-sizeMedium`);
    expect(button.className).not.toContain(`MuiButton-sizeLarge`);
    expect.hasAssertions();
  });

  it(`should check if the size of button is medium`, () => {
    render(<Button size="medium">{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`MuiButton-sizeMedium`);
    expect(button.className).not.toContain(`MuiButton-sizeLarge`);
    expect(button.className).not.toContain(`MuiButton-sizeSmall`);
    expect.hasAssertions();
  });

  it(`should check if the size of button is large`, () => {
    render(<Button size="large">{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    expect(button.className).toContain(`MuiButton-sizeLarge`);
    expect(button.className).not.toContain(`MuiButton-sizeMedium`);
    expect(button.className).not.toContain(`MuiButton-sizeSmall`);
    expect.hasAssertions();
  });

  it(`should render a disabled button with end icon of an spinner if it is Loading`, () => {
    const { container } = render(<Button isLoading>{TEXT}</Button>);
    const button = screen.getByTestId(BUTTON_TEST_ID);

    const icon = container.getElementsByClassName(`MuiButton-endIcon`);
    expect(button.className).toContain(`Mui-disabled`);
    expect(icon.length).toBeGreaterThan(0);

    expect.hasAssertions();
  });
});
