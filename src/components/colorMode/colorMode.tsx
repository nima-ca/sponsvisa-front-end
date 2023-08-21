"use client";

import { MoonIcon } from "@src/components/icons/moon";
import { SunIcon } from "@src/components/icons/sun";
import { colorModes } from "@src/utils/colorMode";
import { useTheme } from "next-themes";
import { FC } from "react";
import styles from "./colorMode.module.scss";

const ColorMode: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (selectedTheme: colorModes) => {
    setTheme(selectedTheme);
  };

  if (theme === colorModes.DARK) {
    return (
      <div
        className={styles[`color-icon`]}
        onClick={() => {
          toggleTheme(colorModes.LIGHT);
        }}
      >
        <MoonIcon />
      </div>
    );
  }

  if (theme === colorModes.LIGHT) {
    return (
      <div
        className={styles[`color-icon`]}
        onClick={() => {
          toggleTheme(colorModes.DARK);
        }}
      >
        <SunIcon />
      </div>
    );
  }

  const isSystemPreferredDark = window.matchMedia(
    `(prefers-color-scheme: dark)`,
  ).matches;

  return (
    <div
      className={styles[`color-icon`]}
      onClick={() => {
        toggleTheme(isSystemPreferredDark ? colorModes.LIGHT : colorModes.DARK);
      }}
    >
      {isSystemPreferredDark ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default ColorMode;
