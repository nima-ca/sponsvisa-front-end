import React from "react";
import { Mock, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import MobileMenu, {
  BACKDROP_TEST_ID,
  MOBILE_MENU_ASIDE_TEST_ID,
  MOBILE_MENU_TEST_ID,
} from "./mobileMenu";
import { useToggle } from "../../hooks/useToggle/useToggle";
import { navbarLinks } from "../../utils/navbarLinks";

import "next/navigation";
import { HAMBURGER_BUTTON_TEST_ID } from "../ui/hamburgerButton/hamburgerButton.constants";

vi.mock(`next/navigation`, () => ({
  useRouter: vi.fn(),
}));

vi.mock(`../../hooks/useToggle/useToggle`);

describe(`Mobile Navbar`, () => {
  let mockToggleFn: Mock;
  const INITIAL_VALUE = false;

  beforeEach(() => {
    mockToggleFn = vi.fn();
    vi.mocked(useToggle).mockReturnValue({
      state: INITIAL_VALUE,
      toggle: mockToggleFn,
    });
  });

  it(`should toggle the isMenuOpen state when hamburger menu is clicked`, () => {
    render(<MobileMenu />);
    const menu = screen.getByTestId(MOBILE_MENU_TEST_ID);
    const button = screen.getByTestId(HAMBURGER_BUTTON_TEST_ID);

    fireEvent.click(button);

    expect(menu).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(mockToggleFn).toHaveBeenCalledTimes(1);
    expect.hasAssertions();
  });

  it(`should not show the menu when isMenuOpen is false`, () => {
    render(<MobileMenu />);
    const asideMenu = screen.getByTestId(MOBILE_MENU_ASIDE_TEST_ID);

    expect(asideMenu.className).toContain(`mobile__menu`);
    expect(asideMenu.className).not.toContain(`mobile__menu--open`);
    expect.hasAssertions();
  });

  it(`should show the menu when isMenuOpen is true`, () => {
    vi.mocked(useToggle).mockReturnValue({
      state: true,
      toggle: mockToggleFn,
    });

    render(<MobileMenu />);
    const asideMenu = screen.getByTestId(MOBILE_MENU_ASIDE_TEST_ID);

    expect(asideMenu.className).toContain(`mobile__menu`);
    expect(asideMenu.className).toContain(`mobile__menu--open`);
    expect.hasAssertions();
  });

  it(`should render navbarLinks`, () => {
    const { container } = render(<MobileMenu />);
    const links = container.getElementsByClassName(`navigation__link`);

    expect(links.length).toBe(navbarLinks.length);
    expect(links.item(0)?.getAttribute(`href`)).toBe(navbarLinks[0].href);
    expect(links.item(0)?.innerHTML).toBe(navbarLinks[0].name);

    expect.hasAssertions();
  });

  it(`should render a backdrop when menu is open`, () => {
    vi.mocked(useToggle).mockReturnValue({
      state: true,
      toggle: mockToggleFn,
    });

    render(<MobileMenu />);
    const backdrop = screen.getByTestId(BACKDROP_TEST_ID);

    expect(backdrop).toBeInTheDocument();
    expect(backdrop.className).toContain(`backdrop`);
    expect.hasAssertions();
  });

  it(`should not render a backdrop when menu is closed`, () => {
    render(<MobileMenu />);
    const backdrop = screen.queryByTestId(BACKDROP_TEST_ID);

    expect(backdrop).not.toBeInTheDocument();
    expect(backdrop).toBeNull();
    expect.hasAssertions();
  });

  it(`should toggle the menu if the backdrop is clicked`, () => {
    // mock the useToggle custom hook
    vi.mocked(useToggle).mockReturnValue({
      state: true,
      toggle: mockToggleFn,
    });

    render(<MobileMenu />);

    // check if the backdrop exists
    const backdrop = screen.getByTestId(BACKDROP_TEST_ID);
    expect(backdrop).toBeInTheDocument();

    // click the backdrop
    fireEvent.click(backdrop);

    expect(mockToggleFn).toHaveBeenCalledTimes(1);
    expect.hasAssertions();
  });
});
