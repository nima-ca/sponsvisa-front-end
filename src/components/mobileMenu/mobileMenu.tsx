"use client";

import { navbarLinks } from "@src/components/navbar/navbar.data";
import HamburgerButton from "@src/components/ui/hamburgerButton/hamburgerButton";
import { useToggle } from "@src/hooks/useToggle/useToggle";
import Link from "next/link";
import { FC } from "react";
import styles from "./mobileMenu.module.scss";

export const MOBILE_MENU_TEST_ID = `mobileMenuTestId`;
export const MOBILE_MENU_ASIDE_TEST_ID = `mobileMenuAsideTestId`;
export const BACKDROP_TEST_ID = `backdropTestId`;

const MobileMenu: FC = () => {
  const { state: isMenuOpen, toggle: toggleMenu } = useToggle(false);
  return (
    <div className={styles.mobile} data-testid={MOBILE_MENU_TEST_ID}>
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
