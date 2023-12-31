"use client";
import { Button as ChakraButton } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./button.types";
import { BUTTON_TEST_ID } from "./button.constants";

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ChakraButton data-testid={BUTTON_TEST_ID} {...props}>
      {children}
    </ChakraButton>
  );
};

export default Button;
