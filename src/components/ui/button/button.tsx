"use client";

import { FC, PropsWithChildren } from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "./button.types";
import styles from "./button.module.scss";

import { cva } from "class-variance-authority";

export const buttonVariants = cva(`${styles.button}`, {
  variants: {
    variant: {
      text: `${styles.button__text}`,
      outlined: `${styles.button__outlined}`,
      contained: `${styles.button__contained}`,
    },
  },
  defaultVariants: {
    variant: `text`,
  },
});

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <MUIButton
      className={buttonVariants({ className, variant })}
      variant={variant}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
