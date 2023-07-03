"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "@src/styles/themes/theme";
import { FC, PropsWithChildren } from "react";

const MuiWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiWrapper;
