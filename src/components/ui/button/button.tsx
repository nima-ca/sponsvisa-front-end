"use client";
import { Button as ChakraButton } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./button.types";

export const BUTTON_TEST_ID = `button`;

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderColor: `var(--color-text)`,
  color: `var(--color-text)`,
});

const solid = defineStyle({
  backgroundColor: `var(--color-black-white)`,
  color: `var(--color-white-black)`,
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, solid },
});

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ChakraButton data-testid={BUTTON_TEST_ID} {...props}>
      {children}
    </ChakraButton>
  );
};

export default Button;
