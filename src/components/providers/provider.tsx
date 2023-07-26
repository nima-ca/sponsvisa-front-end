import { FC, PropsWithChildren } from "react";
import ColorModeProvider from "./colorMode/colorModeProvider";
import ReactQueryProvider from "./reactQuery/reactQueryProvider";
import ChakraUIProvider from "./chakra/chakraUiProvider";
import { AuthProvider } from "@src/context/authContext";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <ReactQueryProvider>
        <ColorModeProvider>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </ColorModeProvider>
      </ReactQueryProvider>
    </AuthProvider>
  );
};

export default Provider;
