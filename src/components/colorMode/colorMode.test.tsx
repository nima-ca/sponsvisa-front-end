import React from "react";
import { Mock, vi } from "vitest";
import ColorMode, {
  COLOR_MODE_TEST_ID,
  MOON_ICON_TEST_ID,
  SUN_ICON_TEST_ID,
} from "./colorMode";
import { useTheme } from "next-themes";
import { colorModes } from "../../utils/colorMode";
import { fireEvent, render, screen } from "@testing-library/react";

vi.mock(`next-themes`);

describe(`colorMode`, () => {
  let mockSetTheme: Mock;
  beforeEach(() => {
    mockSetTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: colorModes.DARK,
      setTheme: mockSetTheme,
      themes: [colorModes.DARK, colorModes.SYSTEM, colorModes.LIGHT],
    });
  });

  it(`should render moonIcon when the theme is dark`, () => {
    render(<ColorMode />);

    const colorMode = screen.getByTestId(COLOR_MODE_TEST_ID);
    const sunIcon = screen.queryByTestId(SUN_ICON_TEST_ID);
    const moonIcon = screen.queryByTestId(MOON_ICON_TEST_ID);

    expect(colorMode).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
    expect(sunIcon).not.toBeInTheDocument();

    expect.hasAssertions();
  });

  it(`should render sunIcon when the theme is light`, () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: colorModes.LIGHT,
      setTheme: mockSetTheme,
      themes: [colorModes.DARK, colorModes.SYSTEM, colorModes.LIGHT],
    });
    render(<ColorMode />);

    const colorMode = screen.getByTestId(COLOR_MODE_TEST_ID);
    const sunIcon = screen.queryByTestId(SUN_ICON_TEST_ID);
    const moonIcon = screen.queryByTestId(MOON_ICON_TEST_ID);

    expect(colorMode).toBeInTheDocument();
    expect(moonIcon).not.toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();

    expect.hasAssertions();
  });

  it(`should render the system method when the theme is system`, () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: colorModes.SYSTEM,
      setTheme: mockSetTheme,
      themes: [colorModes.DARK, colorModes.SYSTEM, colorModes.LIGHT],
    });

    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === `(prefers-color-scheme: light)`,
    }));

    render(<ColorMode />);

    const colorMode = screen.getByTestId(COLOR_MODE_TEST_ID);
    const sunIcon = screen.queryByTestId(SUN_ICON_TEST_ID);
    const moonIcon = screen.queryByTestId(MOON_ICON_TEST_ID);

    expect(colorMode).toBeInTheDocument();
    expect(moonIcon).not.toBeInTheDocument();
    expect(sunIcon).toBeInTheDocument();

    expect.hasAssertions();

    // Cleanup
    window.matchMedia = originalMatchMedia;
  });

  it(`should toggle the theme to light if the theme is dark`, () => {
    render(<ColorMode />);

    const colorMode = screen.getByTestId(COLOR_MODE_TEST_ID);
    fireEvent.click(colorMode);

    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith(colorModes.LIGHT);

    expect.hasAssertions();
  });

  it(`should toggle the theme to dark if the theme is light`, () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: colorModes.LIGHT,
      setTheme: mockSetTheme,
      themes: [colorModes.DARK, colorModes.SYSTEM, colorModes.LIGHT],
    });
    render(<ColorMode />);

    const colorMode = screen.getByTestId(COLOR_MODE_TEST_ID);
    fireEvent.click(colorMode);

    expect(mockSetTheme).toHaveBeenCalledTimes(1);
    expect(mockSetTheme).toHaveBeenCalledWith(colorModes.DARK);

    expect.hasAssertions();
  });
});
