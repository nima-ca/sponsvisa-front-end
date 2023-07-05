"use client";

import { colorModes } from "@src/utils/colorMode";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

const ColorModeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      themes={[colorModes.LIGHT, colorModes.DARK, colorModes.SYSTEM]}
      defaultTheme={colorModes.LIGHT}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export default ColorModeProvider;
