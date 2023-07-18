import { FC, PropsWithChildren } from "react";
import ColorModeProvider from "./colorMode/colorModeProvider";
import ReactQueryProvider from "./reactQuery/reactQueryProvider";
import ChakraUIProvider from "./chakra/chakraUiProvider";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ColorModeProvider>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </ColorModeProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
