"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "@src/components/ui/button/button";

export const theme = extendTheme({
  components: { Button: buttonTheme },
});

const ChakraUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraUIProvider;
