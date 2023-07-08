"use client";

import { FC, useState } from "react";
import HamburgerButton from "../ui/hamburgerButton/hamburgerButton";
import styles from "./mobileMenu.module.scss";
import { navbarLinks } from "../navbar/navbar.data";
import Link from "next/link";

const MobileMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className={styles.mobile}>
      <HamburgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      <div
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
      </div>
    </div>
  );
};

export default MobileMenu;
