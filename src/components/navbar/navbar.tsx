import Link from "next/link";
import { FC } from "react";
import { navbarLinks } from "./navbar.data";
import styles from "./navbar.module.scss";
import Image from "next/image";
import LogoImg from "@public/images/sponsvisa-logo.png";

const Navbar: FC = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navbar__box} container`}>
        <Image
          src={LogoImg}
          alt="Sponsvisa logo of an airplane"
          className={styles.logo}
        />
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
    </nav>
  );
};

export default Navbar;
