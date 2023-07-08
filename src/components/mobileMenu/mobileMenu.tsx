"use client";

import { FC, useState } from "react";
import HamburgerButton from "../ui/hamburgerButton/hamburgerButton";
import styles from "./mobileMenu.module.scss";

const MobileMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className={styles.mobile}>
      <HamburgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
    </div>
  );
};

export default MobileMenu;
