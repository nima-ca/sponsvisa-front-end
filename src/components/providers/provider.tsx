import { FC, PropsWithChildren } from "react";
import ColorModeProvider from "./colorMode/colorModeProvider";
import ReactQueryProvider from "./reactQuery/reactQueryProvider";
import ChakraUIProvider from "./chakra/chakraUiProvider";
import { NextAuthProvider } from "./nextAuth/nextAuthProvider";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>
        <ColorModeProvider>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </ColorModeProvider>
      </ReactQueryProvider>
    </NextAuthProvider>
  );
};

export default Provider;
