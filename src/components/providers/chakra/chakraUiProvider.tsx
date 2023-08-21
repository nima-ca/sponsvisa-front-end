"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { extendTheme } from "@chakra-ui/react";
import { vazirmatn } from "@src/styles/fonts/vazirmatn/vazirmatn";
import { buttonTheme } from "@src/components/ui/button/button.styles";

export const theme = extendTheme({
  fonts: {
    body: vazirmatn.style.fontFamily,
    heading: vazirmatn.style.fontFamily,
  },
  components: { Button: buttonTheme },
  styles: {
    global: () => ({
      body: {
        bg: ``,
        color: ``,
        fontFamily: ``,
      },
    }),
  },
});

const ChakraUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraUIProvider;
