import LogoImg from "@public/images/sponsvisa-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import MobileMenu from "../mobileMenu/mobileMenu";
import styles from "./navbar.module.scss";
import { navbarLinks } from "@src/utils/navbarLinks";

const Navbar: FC = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navbar__box} container`}>
        <Link href="/">
          <Image
            src={LogoImg}
            alt="Sponsvisa logo of an airplane"
            className={styles.logo}
            priority
          />
        </Link>
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
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
