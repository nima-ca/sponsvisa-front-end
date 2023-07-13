import { render } from "@testing-library/react";
import React from "react";
import HomePage from "./page";

describe(`HomePage`, () => {
  it(`should contain an image`, () => {
    const { container } = render(<HomePage />);

    const image = container.getElementsByClassName(`main__image`);
    expect(image.length).toBe(1);
    expect(image.item(0)).toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`should contain an header`, () => {
    const { container } = render(<HomePage />);

    const header = container.getElementsByClassName(`header`);
    expect(header.length).toBe(1);
    expect(header.item(0)).toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`should contain an description`, () => {
    const { container } = render(<HomePage />);

    const description = container.getElementsByClassName(`description`);
    expect(description.length).toBe(1);
    expect(description.item(0)).toBeInTheDocument();
    expect.hasAssertions();
  });

  it(`should contain an link to companies page`, () => {
    const { container } = render(<HomePage />);

    const link = container.getElementsByClassName(`link`);
    expect(link.length).toBe(1);
    expect(link.item(0)).toBeInTheDocument();
    expect(link.item(0)?.getAttribute(`href`)).toBe(`/companies`);
    expect.hasAssertions();
  });
});
