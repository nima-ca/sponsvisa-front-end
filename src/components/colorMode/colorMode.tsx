"use client";

import { MoonIcon } from "@src/components/icons/moon";
import { SunIcon } from "@src/components/icons/sun";
import { colorModes } from "@src/utils/colorMode";
import { useTheme } from "next-themes";
import { FC } from "react";
import styles from "./colorMode.module.scss";

export const COLOR_MODE_TEST_ID = `COLOR_MODE_TEST_ID`;
export const SUN_ICON_TEST_ID = `SUN_ICON_TEST_ID`;
export const MOON_ICON_TEST_ID = `MOON_ICON_TEST_ID`;

const ColorMode: FC = () => {
  const { theme, setTheme } = useTheme();

  if (theme === colorModes.DARK) {
    return (
      <div
        data-testid={COLOR_MODE_TEST_ID}
        className={styles[`color-icon`]}
        onClick={() => {
          setTheme(colorModes.LIGHT);
        }}
      >
        <MoonIcon data-testid={MOON_ICON_TEST_ID} />
      </div>
    );
  }

  if (theme === colorModes.LIGHT) {
    return (
      <div
        data-testid={COLOR_MODE_TEST_ID}
        className={styles[`color-icon`]}
        onClick={() => {
          setTheme(colorModes.DARK);
        }}
      >
        <SunIcon data-testid={SUN_ICON_TEST_ID} />
      </div>
    );
  }

  const isSystemPreferredDark = window.matchMedia(
    `(prefers-color-scheme: dark)`,
  ).matches;

  return (
    <div
      data-testid={COLOR_MODE_TEST_ID}
      className={styles[`color-icon`]}
      onClick={() => {
        setTheme(isSystemPreferredDark ? colorModes.LIGHT : colorModes.DARK);
      }}
    >
      {isSystemPreferredDark ? (
        <MoonIcon data-testid={MOON_ICON_TEST_ID} />
      ) : (
        <SunIcon data-testid={SUN_ICON_TEST_ID} />
      )}
    </div>
  );
};

export default ColorMode;
