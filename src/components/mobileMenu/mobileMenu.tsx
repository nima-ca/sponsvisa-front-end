"use client";

import HamburgerButton from "@src/components/ui/hamburgerButton/hamburgerButton";
import { useToggle } from "@src/hooks/useToggle/useToggle";
import Link from "next/link";
import { FC } from "react";
import styles from "./mobileMenu.module.scss";
import { navbarLinks } from "@src/utils/navbarLinks";
import AuthButtons from "@src/components/authButtons/authButtons";
import dynamic from "next/dynamic";

export const MOBILE_MENU_TEST_ID = `mobileMenuTestId`;
export const MOBILE_MENU_ASIDE_TEST_ID = `mobileMenuAsideTestId`;
export const BACKDROP_TEST_ID = `backdropTestId`;

const ColorMode = dynamic(() => import(`@src/components/colorMode/colorMode`), {
  ssr: false,
});

const MobileMenu: FC = () => {
  const { state: isMenuOpen, toggle: toggleMenu } = useToggle(false);
  return (
    <div className={styles.mobile} data-testid={MOBILE_MENU_TEST_ID}>
      <ColorMode />
      |
      <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <aside
        data-testid={MOBILE_MENU_ASIDE_TEST_ID}
        className={`${styles.mobile__menu} ${
          isMenuOpen ? styles[`mobile__menu--open`] : ``
        }`}
      >
        <ul className={styles.navigation}>
          {navbarLinks.map((link, index) => (
            <li
              className={styles[`navigation__container`]}
              key={`navbar-key-${index}`}
            >
              <Link className={styles[`navigation__link`]} href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <AuthButtons />
      </aside>
      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={toggleMenu}
          data-testid={BACKDROP_TEST_ID}
        />
      )}
    </div>
  );
};

export default MobileMenu;
