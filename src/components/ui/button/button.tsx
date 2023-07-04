import { ButtonProps } from "@mui/material";
import { FC } from "react";
import { Button as MUIButton } from "@mui/material";

const Button: FC<ButtonProps> = ({ children }) => {
  return <MUIButton>{children}</MUIButton>;
};

export default Button;
