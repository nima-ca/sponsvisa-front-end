import { FC, PropsWithChildren } from "react";
import MuiWrapper from "./mui/muiProvider";
import ColorModeProvider from "./colorMode/colorModeProvider";
import ReactQueryProvider from "./reactQuery/reactQueryProvider";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ColorModeProvider>
        <MuiWrapper>{children}</MuiWrapper>
      </ColorModeProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
