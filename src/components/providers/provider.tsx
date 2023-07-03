import { FC, PropsWithChildren } from "react";
import MuiWrapper from "../mui/muiProvider";
import ColorModeProvider from "../colorMode/colorModeProvider";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ColorModeProvider>
      <MuiWrapper>{children}</MuiWrapper>
    </ColorModeProvider>
  );
};

export default Provider;
